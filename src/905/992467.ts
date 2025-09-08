import { Component, forwardRef, lazy, Suspense } from 'react'
import { Fragment, jsx } from 'react/jsx-runtime'
import { trackEventAnalytics } from '../905/449184'
import { addErrorStack } from '../905/607410'
import { useDelayedTrue } from '../905/815905'

/**
 * Symbolic constants for fallback handling.
 * Original: $$l0
 */
export const NONE_SYMBOL = { NONE: Symbol('NONE') }

/**
 * Feature detection for PerformanceResourceTiming.responseStatus.
 * Original: d
 */
const hasResponseStatus: boolean = (() => {
  try {
    return 'responseStatus' in PerformanceResourceTiming.prototype
  }
  catch {
    return false
  }
})()

/**
 * Error boundary component for lazy loading.
 * Original: m
 */
export class ErrorBoundary extends Component<{ errorFallback?: React.ReactNode, children: React.ReactNode }, { didCatch: boolean }> {
  state = { didCatch: false }

  static getDerivedStateFromError(_: Error) {
    return { didCatch: true }
  }

  componentDidCatch() { }

  render() {
    return this.state.didCatch ? this.props.errorFallback : this.props.children
  }
}

/**
 * Performance tracking helper for lazy loading.
 * Original: h
 */
export class PerformanceTracker {
  resourceEvents?: Map<string, PerformanceResourceTiming>
  performanceObserver?: PerformanceObserver

  constructor() {
    if (!hasResponseStatus)
      return
    this.resourceEvents = new Map()
    this.performanceObserver = new PerformanceObserver(this.onResourceEvent.bind(this))
  }

  startTracking() {
    if (hasResponseStatus && this.performanceObserver) {
      this.performanceObserver.observe({ entryTypes: ['resource'] })
    }
  }

  mapErrorToResponseCode(error: any) {
    if (!hasResponseStatus || !this.resourceEvents)
      return
    const request = error.request
    if (request && this.resourceEvents.has(request)) {
      return this.resourceEvents.get(request)?.responseStatus
    }
  }

  dispose() {
    if (hasResponseStatus && this.performanceObserver) {
      this.performanceObserver.disconnect()
    }
  }

  onResourceEvent(list: PerformanceObserverEntryList) {
    if (this.resourceEvents) {
      for (const entry of list.getEntries()) {
        if ((entry as PerformanceResourceTiming).initiatorType === 'script') {
          this.resourceEvents.set(entry.name, entry as PerformanceResourceTiming)
        }
      }
    }
  }
}

/**
 * Suspense wrapper for fallback handling.
 * Original: p
 */
export function SuspenseWrapper(props: { fallback?: React.ReactNode | typeof NONE_SYMBOL.NONE, children: React.ReactNode }) {
  const { fallback, children } = props
  return fallback === NONE_SYMBOL.NONE
    ? jsx(Fragment, { children })
    : jsx(Suspense, { fallback, children })
}

/**
 * Lazy component factory with retry and error boundary.
 * Original: $$c1
 */
export function setupLazyComponentFactory(
  componentName: string,
  options: {
    isCodesplit?: boolean
    ComponentFactory?: () => Promise<any>
    Component?: React.ComponentType<any>
  },
) {
  if (options.isCodesplit && options.ComponentFactory) {
    let didTrack = false
    const LazyComponent = lazy(async () => {
      const tracker = new PerformanceTracker()
      tracker.startTracking()
      try {
        let error: any
        const startTime = performance.now()
        let retries = 3
        const delays = [500, 1000, 2000].reverse()
        async function loadComponent() {
          return await options.ComponentFactory!()
        }
        while (retries >= 0) {
          try {
            const result = await loadComponent()
            if (!didTrack) {
              didTrack = true
              trackEventAnalytics('react_lazy_load', {
                duration: performance.now() - startTime,
                component: componentName,
              })
            }
            return result
          }
          catch (err) {
            error = err
            if (--retries >= 0) {
              await new Promise(res => setTimeout(res, delays[retries]))
            }
          }
        }
        const responseCode = tracker.mapErrorToResponseCode(error)
        trackEventAnalytics('react_lazy_load_failed', {
          lazyComponentName: componentName,
          error: error.message,
          stack: error.stack,
          responseCode,
        })
        return error
      }
      finally {
        tracker.dispose()
      }
    })

    /**
     * Wrapper for lazy loaded component with fallback and error boundary.
     */
    return function LazyComponentWrapper(props: {
      fallback?: React.ReactNode
      errorFallback?: React.ReactNode | typeof NONE_SYMBOL.NONE
      [key: string]: any
    }) {
      const { fallback, errorFallback, ...rest } = props
      const suspenseContent = jsx(SuspenseWrapper, {
        fallback,
        children: jsx(LazyComponent, { ...rest }),
      })
      return errorFallback === NONE_SYMBOL.NONE
        ? suspenseContent
        : jsx(ErrorBoundary, { errorFallback, children: suspenseContent })
    }
  }
  else if (options.Component) {
    /**
     * Wrapper for regular component.
     */
    return function RegularComponentWrapper(props: { fallback?: React.ReactNode, [key: string]: any }) {
      const { fallback, ...rest } = props
      return jsx(options.Component!, { ...rest })
    }
  }
}

/**
 * Advanced lazy loader with preload and delayed loading.
 * Original: $$u2
 */
export function setupAdvancedLazyLoader(
  boundaryName: string,
  factory: () => Promise<any>,
  config?: {
    componentName?: string
    loading?: React.ComponentType<any> | typeof NONE_SYMBOL.NONE | null
    loadingDelay?: number
    error?: React.ComponentType<any> | typeof NONE_SYMBOL['NONE'] | null
  },
) {
  let loadedComponent: React.ComponentType<any> | undefined
  let preloadTime: number | undefined
  let loadTime: number | undefined
  let didTrack = false
  let didPreload = false
  const componentName = config?.componentName

  /**
   * Track analytics for dynamic component load.
   * Original: b
   */
  const trackLoadAnalytics = () => {
    if (!didTrack) {
      didTrack = true
      trackEventAnalytics('Dynamic Component Loaded', {
        duration: loadTime ? performance.now() - loadTime : undefined,
        preloadDuration: preloadTime ? performance.now() - preloadTime : undefined,
        component: componentName || 'unknown',
        boundaryName,
      })
    }
  }

  // eslint-disable-next-line unicorn/error-message
  const errorStack = `boundaryName: ${boundaryName}\n${new Error().stack}`

  const LazyWrapper: React.NamedExoticComponent = lazy(async () => {
    const tracker = new PerformanceTracker()
    tracker.startTracking()
    try {
      let error: any
      let retries = 3
      const delays = [500, 1000, 2000].reverse()
      async function load() {
        return { default: await factory() }
      }
      loadTime = performance.now()
      while (retries >= 0) {
        try {
          addErrorStack(errorStack)
          const result = await load()
          trackLoadAnalytics()
          return result
        }
        catch (err: any) {
          error = err
          if (err.name !== 'ChunkLoadError')
            break
          if (--retries >= 0) {
            await new Promise(res => setTimeout(res, delays[retries]))
          }
        }
      }
      const responseCode = tracker.mapErrorToResponseCode(error)
      trackEventAnalytics('react_lazy_load_failed', {
        lazyComponentName: componentName || 'unknown',
        error: error.message,
        stack: error.stack,
        responseCode,
      })
      return error
    }
    finally {
      tracker.dispose()
    }
  })
  LazyWrapper.displayName = componentName ? `Lazy:${componentName}` : undefined

  /**
   * Loading fallback handler.
   * Original: E
   */
  let LoadingFallback: React.ComponentType<any> | null = null
  if (config?.loading && config.loading !== NONE_SYMBOL.NONE) {
    if (config.loadingDelay) {
      const LoadingComponent = config.loading as React.ComponentType<any>
      const delay = config.loadingDelay
      LoadingFallback = (props: any) =>
        useDelayedTrue(delay) ? jsx(LoadingComponent, { ...props }) : null
    }
    else {
      LoadingFallback = config.loading as React.ComponentType<any>
    }
  }

  /**
   * AdvancedLazyComponent type with preload method.
   * Original: x
   */
  type AdvancedLazyComponentType = React.ForwardRefExoticComponent<any> & {
    preload: (force?: boolean) => Promise<void>
    displayName?: string
  }

  const AdvancedLazyComponent = forwardRef<any, any>((props, ref) => {
    const { fallback, errorFallback, ...rest } = props
    const ErrorComponent = config?.error
    let ComponentToRender = loadedComponent || LazyWrapper
    let content = jsx(ComponentToRender, { ref, ...rest })
    if (fallback !== NONE_SYMBOL.NONE && config?.loading !== NONE_SYMBOL.NONE) {
      content = jsx(Suspense, {
        fallback: LoadingFallback ? jsx(LoadingFallback, {}) : fallback,
        children: content,
      })
    }
    if (errorFallback !== NONE_SYMBOL.NONE && ErrorComponent !== NONE_SYMBOL.NONE) {
      content = jsx(ErrorBoundary, {
        errorFallback: ErrorComponent ? jsx(ErrorComponent as React.ComponentType, {}) : errorFallback,
        children: content,
      })
    }
    return content
  }) as AdvancedLazyComponentType

  /**
   * Preload method for advanced lazy loader.
   * Original: x.preload
   */
  AdvancedLazyComponent.preload = async (force?: boolean) => {
    if (!didPreload && !loadedComponent) {
      didPreload = true
      if (force === true) {
        loadTime = performance.now()
      }
      else {
        preloadTime = performance.now()
        loadedComponent = await factory()
      }
      trackLoadAnalytics()
    }
    return Promise.resolve()
  }
  AdvancedLazyComponent.displayName = componentName ? `LazyWrapper:${componentName}` : undefined

  return AdvancedLazyComponent
}

/**
 * Exported names for refactored functions.
 * Original: kf = $$c1, s_ = $$u2
 */
export const kf = setupLazyComponentFactory
export const s_ = setupAdvancedLazyLoader
