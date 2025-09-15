import type { History, Location, Update } from 'history'
import type { RouterProps } from 'react-router-dom'
import { addBreadcrumb } from '@sentry/browser'
import { createBrowserHistory } from 'history'
import { Router } from 'react-router-dom'
import { jsx } from 'react/jsx-runtime'
import { trackEventAnalytics } from '../905/449184'
import { sessionStorageRef } from '../905/657224'
import { logError } from '../905/714362'
import { setupPageTimeSpentTracking } from '../905/869893'
import { debounce } from '../905/915765'
import { sendUrlToParent } from '../figma_app/564528'
import { isInteractionPathCheck } from '../figma_app/897289'

/**
 * Checks if the given object has a 'view' property.
 * @param obj - The object to check.
 * @returns True if 'view' exists in obj, false otherwise.
 * (Original: $$u6)
 */
export function hasViewProperty(obj: unknown): obj is { view: unknown } {
  return obj != null && typeof obj === 'object' && 'view' in obj
}

/**
 * Utility to parse a URL string and extract hostname and href.
 * (Original: _)
 */
function parseUrl(url: string): { hostname: string, href: string } {
  const anchor = document.createElement('a')
  anchor.href = url
  return {
    hostname: anchor.hostname,
    href: anchor.href,
  }
}

/**
 * Utility to parse a URL string and extract origin and path.
 * (Original: A)
 */
function parseOriginAndPath(url: string): { origin?: string, path?: string } {
  try {
    const u = new URL(url)
    return {
      origin: u.origin,
      path: u.pathname + u.search + u.hash,
    }
  }
  catch {
    return {}
  }
}

/**
 * Custom history object with extended navigation and reload logic.
 * (Original: p)
 */
export interface CustomHistory {
  readonly location: Location & { href: string }
  push: (path?: string, state?: unknown) => void
  replace: (path?: string, state?: unknown) => void
  reset: () => never
  reload: (reason: string, metadata?: Record<string, unknown>) => void
  reloadAndWaitForever: (reason: string, metadata?: Record<string, unknown>) => Promise<void>
  reloadEmbed: (reason: string) => Promise<void>
  redirect: (url: string, inTopFrame?: any) => void
  redirectAndWaitForever: (url: string, inTopFrame?: boolean) => Promise<void>
  postRedirect: (url: string, target?: string) => void
  unsafeRedirect: (url: string, target?: string, container?: HTMLElement) => void
  unsafeRedirectMsTeams: (url: string, target?: string) => void
  unsafeRedirectWithLocationHref: (url: string) => void
  listen: (listener: (location: Location) => void) => () => void
  back: () => void
  forward: () => void
  go: (n: number) => void
}

let browserHistory: History

export function setupCustomHistory(): CustomHistory {
  const analytics = {
    trackEvent: trackEventAnalytics,
    logError,
    tryOpenUrlForZoom: sendUrlToParent,
  }
  browserHistory = createBrowserHistory()

  /**
   * Helper to check excessive reloads.
   */
  function isExcessiveReload(): boolean {
    if (!sessionStorageRef)
      return false
    const reloadTimes: number[] = JSON.parse(sessionStorageRef.getItem('reload_times') || '[]')
    const fiveMinutesAgo = Date.now() - 300_000
    while (reloadTimes.length && reloadTimes[0] < fiveMinutesAgo) reloadTimes.shift()
    const excessive = reloadTimes.length > 15
    reloadTimes.push(Date.now())
    sessionStorageRef.setItem('reload_times', JSON.stringify(reloadTimes))
    return excessive
  }

  return {
    get location() {
      return {
        ...browserHistory.location,
        href: window.location.href,
      }
    },
    push: debounce((path?: string, state?: unknown) => {
      try {
        if (path) {
          const { origin, path: parsedPath } = parseOriginAndPath(path)
          if (origin) {
            if (origin === window.location.origin && parsedPath) {
              browserHistory.push(parsedPath, state)
            }
            else {
              window.history.pushState(state, '', path)
            }
          }
          else {
            browserHistory.push(path, state)
          }
        }
        else {
          browserHistory.push({ ...browserHistory.location, state })
        }
      }
      catch (err) {
        console.warn(err)
      }
    }, 300, true),
    replace: debounce((path?: string, state?: unknown) => {
      try {
        if (path) {
          const { origin, path: parsedPath } = parseOriginAndPath(path)
          if (origin) {
            if (origin === window.location.origin && parsedPath) {
              browserHistory.replace(parsedPath, state)
            }
            else {
              window.history.replaceState(state, '', path)
            }
          }
          else {
            browserHistory.replace(path, state)
          }
        }
        else {
          browserHistory.replace({ ...browserHistory.location, state })
        }
      }
      catch (err) {
        console.warn(err)
      }
    }, 300, true),
    reset() {
      throw new Error('history.reset() must be used only in tests')
    },
    reload(reason: string, metadata: Record<string, unknown> = {}) {
      addBreadcrumb({
        level: 'info',
        message: 'Reloading the page',
        data: { reason, metadata },
      })
      if (isInteractionPathCheck()) {
        console.warn('ignoring history.reload() in interaction tests')
        return
      }
      const reloadMeta = { ...metadata, reason }
      if (isExcessiveReload()) {
        analytics.trackEvent('Location Reload Excessive', reloadMeta)
        return
      }
      analytics.trackEvent('Page Reloaded', reloadMeta, {
        forwardToDatadog: true,
        sendAsBeacon: true,
      })
      // console.log('Reloading the page... reason:', reason, metadata)
      try {
        if (window.self !== window.top)
          window.top.location.reload()
      }
      catch (err) {
        if (!(err instanceof DOMException))
          throw err
      }
      location.reload()
    },
    async reloadAndWaitForever(reason: string, metadata: Record<string, unknown> = {}) {
      if (isInteractionPathCheck()) {
        console.warn('ignoring history.reloadAndWaitForever() in interaction tests')
        return
      }
      this.reload(reason, metadata)
      setTimeout(() => {
        analytics.logError('reload', 'Long reload time', {
          reason,
          metadata,
          timeout: 10_000,
        })
        return new Error('Long reload time')
      }, 10_000)
      await new Promise(() => { })
    },
    async reloadEmbed(reason: string) {
      if (isInteractionPathCheck()) {
        console.warn('ignoring history.reloadEmbed() in interaction tests')
        return
      }
      // console.log('Reloading the embed... reason:', reason)
      location.reload()
      setTimeout(() => {
        analytics.logError('reload', 'Long reload time', {
          reason,
          timeout: 10_000,
        })
        return new Error('Long reload time')
      }, 10_000)
      await new Promise(() => { })
    },
    redirect(url: string, inTopFrame?: boolean) {
      const { hostname, href } = parseUrl(url)
      if (hostname === window.location.hostname) {
        if (window.self !== window.top && !inTopFrame) {
          window.top.location.href = href
          return
        }
        this.unsafeRedirect(url, inTopFrame)
      }
      else {
        throw new Error('Attempting to redirect to another domain.')
      }
    },
    async redirectAndWaitForever(url: string, inTopFrame?: boolean) {
      this.redirect(url, inTopFrame)
      await new Promise(() => { })
    },
    postRedirect(url: string, target?: string) {
      if (isInteractionPathCheck()) {
        console.warn('ignoring history.postRedirect() in interaction tests')
        return
      }
      if (analytics.tryOpenUrlForZoom(url))
        return
      const { hostname, href } = parseUrl(url)
      if (hostname === window.location.hostname) {
        if (window.self !== window.top && !target) {
          window.top.location.href = href
          return
        }
        const form = document.createElement('form')
        form.setAttribute('rel', 'noopener')
        form.method = 'post'
        form.action = url
        if (target)
          form.target = target
        document.body.append(form)
        form.submit()
        form.remove()
      }
      else {
        throw new Error('Attempting to redirect to another domain.')
      }
    },
    unsafeRedirect(url: string, target?: string, container?: HTMLElement) {
      if (isInteractionPathCheck()) {
        console.warn('ignoring history.unsafeRedirect() in interaction tests')
        return
      }
      if (analytics.tryOpenUrlForZoom(url))
        return
      const anchor = document.createElement('a')
      anchor.href = url
      anchor.rel = 'noreferrer noopener'
      if (target)
        anchor.target = target
      else window.opener = null
      if (container)
        container.appendChild(anchor)
      else document.body.appendChild(anchor)
      anchor.click()
      anchor.remove()
    },
    unsafeRedirectMsTeams(url: string, target?: string) {
      if (isInteractionPathCheck()) {
        console.warn('ignoring history.unsafeRedirectMsTeams() in interaction tests')
        return
      }
      const { hostname, href } = parseUrl(url)
      const allowedPaths = [
        '/switch_user',
        '/oauth',
        '/start_google_sso',
        '/signup_with_google_sso',
      ]
      if (
        hostname !== window.location.hostname
        || !allowedPaths.includes(new URL(href).pathname)
      ) {
        return
      }
      const anchor = document.createElement('a')
      anchor.href = url
      anchor.rel = 'noreferrer'
      if (target)
        anchor.target = target
      document.body.appendChild(anchor)
      anchor.click()
      anchor.remove()
    },
    unsafeRedirectWithLocationHref(url: string) {
      document.location.href = url
    },
    listen(listener: (location: Location) => void) {
      return browserHistory.listen((update: Update) => {
        listener(update.location)
      })
    },
    back: browserHistory.goBack,
    forward: browserHistory.goForward,
    go: browserHistory.go,
  }
}

// Setup page time spent tracking with the custom history
export const customHistory = setupCustomHistory()
setupPageTimeSpentTracking(customHistory)

/**
 * Renders a Router component with the custom history.
 * (Original: $$h3)
 */
export function CustomRouter(props: Omit<RouterProps, 'history'>) {
  return jsx(Router, {
    history: browserHistory,
    ...props,
  })
}

/**
 * Checks if the current pathname matches any of the main app routes.
 * (Original: $$g1)
 */
export function isMainAppRoute(): boolean {
  const { pathname } = customHistory.location
  return (
    pathname.startsWith('/file/')
    || pathname.startsWith('/design/')
    || pathname.startsWith('/board/')
    || pathname.startsWith('/slides/')
    || pathname.startsWith('/site/')
    || pathname.startsWith('/buzz/')
  )
}

/**
 * Checks if the current pathname is a '/make/' route.
 * (Original: $$f5)
 */
export const isMakeRoute = (): boolean => customHistory.location.pathname.startsWith('/make/')

/**
 * Returns the 'view' state from the current location if present.
 * (Original: $$y4)
 */
export function getViewState(): unknown | undefined {
  if (customHistory.location.state && 'view' in customHistory.location.state)
    return customHistory.location.state
}

/**
 * Returns the 'previousSelectedView' from the current location state if present.
 * (Original: $$b2)
 */
export function getPreviousSelectedView(): unknown | undefined {
  if (customHistory.location.state && 'previousSelectedView' in customHistory.location.state)
    return customHistory.location.state.previousSelectedView
}

// Export aliases for backward compatibility (original export names)
export const Ay = customHistory
export const Cs = isMainAppRoute
export const Gl = getPreviousSelectedView
export const Ix = CustomRouter
export const Xr = getViewState
export const af = isMakeRoute
export const s0 = hasViewProperty
