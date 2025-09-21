import type React from 'react'
import { Component, createContext, useContext, useMemo } from 'react'
import { Fragment, jsx, jsxs } from 'react/jsx-runtime'
import { reportError, SeverityLevel } from '../905/11'
import { ServiceCategories } from '../905/165054'
import { getI18nString, renderI18nText } from '../905/303541'
import { Link } from '../905/438674'
import { trackEventAnalytics } from '../905/449184'
import { Button } from '../905/521428'
import { getFeatureFlags } from '../905/601108'
import { setupThemeContext } from '../905/614223'
import { getI18nState } from '../figma_app/363242'
/**
 * Error boundary fallback types (H4)
 */
export const errorBoundaryFallbackTypes = {
  DEFAULT_FULL_PAGE: Symbol('Default'),
  NONE_I_KNOW_WHAT_IM_DOING: Symbol('None'),
}

/**
 * Attaches React component stack to error (As)
 * @param error - The error object
 * @param info - React error info
 */
export function attachReactStackToError(error: Error, info?: { componentStack: string }) {
  if (info) {
    error.stack += `\n\nReact stack:${info.componentStack}`
    const causeError = new Error('React component stack where the error occurred')
    causeError.stack = info.componentStack
    error.cause = causeError
  }
}

/**
 * Checks if error is a Google Translate DOM error (A)
 * @param error - The error object
 */
export function isGoogleTranslateDomError(error: Error) {
  return error?.message?.includes('The node to be removed is not a child of this node')
}

/**
 * ErrorBoundary React component (tH)
 * Handles errors in child components and renders fallback UI.
 */
export class ErrorBoundaryCrash extends Component<{
  onError?: () => void
  fallback?: symbol | typeof errorBoundaryFallbackTypes[keyof typeof errorBoundaryFallbackTypes] | React.ReactNode | ((reset: () => void) => React.ReactNode)
  boundaryKey?: string
  sentryTags?: Record<string, any>
  severity?: SeverityLevel
  team?: string
  children?: React.ReactNode
}, {
  hasError: boolean
  isGoogleTranslateError: boolean
  error?: Error
}> {
  static reportedHardCrash = false
  sentryID?: string

  constructor(props: any) {
    super(props)
    this.state = {
      hasError: false,
      isGoogleTranslateError: false,
    }
  }

  /**
   * Resets error state (resetErrorState)
   */
  resetErrorState = () => {
    this.setState({
      hasError: false,
      isGoogleTranslateError: false,
      error: undefined,
    })
  }

  /**
   * React lifecycle: getDerivedStateFromError
   */
  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      isGoogleTranslateError: isGoogleTranslateDomError(error),
      error,
    }
  }

  /**
   * React lifecycle: componentDidCatch
   */
  componentDidCatch(error: Error, info: any) {
    attachReactStackToError(error, info)
    try {
      this.props.onError?.()
    }
    catch {}
    const isFullPage = this.props.fallback === errorBoundaryFallbackTypes.DEFAULT_FULL_PAGE
    const isGoogleTranslate = isGoogleTranslateDomError(error)
    const sentryID = reportError(this.props.team || ServiceCategories.UNOWNED, error, {
      tags: {
        react: true,
        errorBoundary: this.props.boundaryKey,
        ...this.props.sentryTags,
        ...(isFullPage || this.props.severity === SeverityLevel.Critical
          ? { severity: SeverityLevel.Critical }
          : {}),
      },
    })
    if (isFullPage && !ErrorBoundaryCrash.reportedHardCrash) {
      ErrorBoundaryCrash.reportedHardCrash = true
      if (isGoogleTranslate) {
        trackEventAnalytics('js_extension_dom_crash', {
          errorBoundary: this.props.boundaryKey,
        }, { forwardToDatadog: true })
      }
      else {
        trackEventAnalytics('js_hard_crash', {
          errorBoundary: this.props.boundaryKey,
          errorMessage: error?.message,
        }, { forwardToDatadog: true })
      }
    }
    this.sentryID = sentryID
  }

  /**
   * Renders fallback UI or children
   */
  render() {
    if (this.state.hasError) {
      console.log(`Rendering error: ${this.state.error}`)
      console.log(`Boundary key: ${this.props.boundaryKey}`)
      let fallbackElement: React.ReactNode = null
      if (this.props.fallback === errorBoundaryFallbackTypes.DEFAULT_FULL_PAGE) {
        fallbackElement = jsx(RootErrorBoundaryFallback, {
          sentryId: this.sentryID,
          isGoogleTranslateError: this.state.isGoogleTranslateError,
        })
      }
      else if (this.props.fallback === errorBoundaryFallbackTypes.NONE_I_KNOW_WHAT_IM_DOING) {
        fallbackElement = null
      }
      else if (typeof this.props.fallback === 'function') {
        fallbackElement = this.props.fallback(() => this.resetErrorState())
      }
      else {
        fallbackElement = this.props.fallback as React.ReactNode
      }
      return jsx(ErrorBoundaryContextProvider, {
        error: this.state.error,
        children: fallbackElement,
      })
    }
    return this.props.children
  }
}

/**
 * Root error boundary fallback UI (S1)
 * @param props - sentryId, isGoogleTranslateError
 */
export function RootErrorBoundaryFallback(props: { sentryId?: string, isGoogleTranslateError?: boolean }) {
  const themeMode = useMemo(() => {
    const colorScheme = document.body.style.colorScheme
    return colorScheme && colorScheme === 'dark' ? 'dark' : 'light'
  }, [])
  const hasI18n = useMemo(() => {
    try {
      const i18nState = getI18nState(false)
      return i18nState?.initialized && !!getI18nString('general.root_error_boundary_title')
    }
    catch {
      return false
    }
  }, [])
  const showGoogleTranslate = props.isGoogleTranslateError && getFeatureFlags().error_boundary_google_translate
  return jsx(setupThemeContext, {
    mode: themeMode,
    children: jsx('div', {
      className: 'error_boundary--rootErrorBoundary--AMgla',
      children: jsxs('div', {
        className: 'error_boundary--errorBoundaryCenterContent--ItmDw',
        children: [
          jsx('h1', {
            className: 'error_boundary--errorBoundaryTitle--zgx1h text--fontPos22--4H4Fc text--_fontBase--QdLsd',
            children: hasI18n ? renderI18nText('general.root_error_boundary_title') : errorBoundaryText.title,
          }),
          jsx('div', {
            className: 'error_boundary--errorBoundaryDescription--iC-21 text--fontPos15--IR8IB text--_fontBase--QdLsd',
            children: showGoogleTranslate
              ? hasI18n
                ? renderI18nText('general.root_error_boundary_google_translate_description')
                : errorBoundaryText.googleTranslateDescription
              : hasI18n
                ? renderI18nText('general.root_error_boundary_description', {
                    status_page: jsx(Link, {
                      trusted: true,
                      href: 'https://status.figma.com',
                      children: renderI18nText('general.root_error_boundary_status_page'),
                    }),
                  })
                : jsxs(Fragment, {
                    children: [
                      jsx('span', { children: errorBoundaryText.descriptionP1 }),
                      jsx(Link, {
                        trusted: true,
                        href: 'https://status.figma.com',
                        children: errorBoundaryText.statusPage,
                      }),
                      jsx('span', { children: errorBoundaryText.descriptionP2 }),
                    ],
                  }),
          }),
          jsx('div', {
            className: 'error_boundary--errorBoundaryButtonContainer--LEutz',
            children: jsx(Button, {
              variant: 'primary',
              onClick: () => location.reload(),
              children: hasI18n ? renderI18nText('general.root_error_boundary_refresh') : errorBoundaryText.reload,
            }),
          }),
          props.sentryId && jsxs('div', {
            className: 'error_boundary--errorBoundaryErrorId--Xso5v text--fontPos11--2LvXf text--_fontBase--QdLsd',
            children: ['Error ID: ', props.sentryId],
          }),
        ],
      }),
    }),
  })
}

/**
 * Error boundary text constants (v)
 */
const errorBoundaryText = {
  title: 'Something went wrong',
  descriptionP1: 'Our team is looking into it now. If reloading the page doesn\'t work, check our ',
  statusPage: 'status page',
  descriptionP2: ' for updates',
  googleTranslateDescription: 'This is likely due to a Chrome Extension, such as Google Translate. Try disabling Chrome Extensions and refresh the page',
  reload: 'Reload',
}

/**
 * Error boundary context singleton (E)
 */
let errorBoundaryContextInstance: React.Context<{ error?: Error }> | undefined
function getErrorBoundaryContext() {
  return errorBoundaryContextInstance ??= createContext<{ error?: Error }>({})
}

/**
 * Error boundary context provider (ErrorBoundaryContextProvider)
 * @param props - error, children
 */
export function ErrorBoundaryContextProvider(props: { error?: Error, children?: React.ReactNode }) {
  const Context = getErrorBoundaryContext()
  const value = useMemo(() => ({ error: props.error }), [props.error])
  return jsx(Context.Provider, {
    value,
    children: props.children,
  })
}

/**
 * Hook to access error boundary context (Hb)
 */
export function useErrorBoundaryContext() {
  const Context = getErrorBoundaryContext()
  return useContext(Context)
}

// Export original variable names mapped to refactored names
export const tH = ErrorBoundaryCrash
export const H4 = errorBoundaryFallbackTypes
export const S1 = RootErrorBoundaryFallback
export const As = attachReactStackToError
export const Hb = useErrorBoundaryContext
