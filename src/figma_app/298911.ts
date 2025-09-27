import { noop } from 'lodash-es'
import { createContext, useRef } from 'react'
import { jsx } from 'react/jsx-runtime'
import { Point } from '../905/736624'
import { createDeferredPromise } from '../905/874553'
import { isInteractionPathCheck } from '../figma_app/897289'

// Check for reduced motion preference
const reducedMotionMediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

// Default navigation configuration
const defaultNavigationConfig = {
  navigationDurationMs: 200,
  animationTimingFunction: (progress: number) => progress < 0.5 ? 4 * progress * progress * progress : (progress - 1) * (2 * progress - 2) * (2 * progress - 2) + 1,
  isGetViewportAtomic: false,
}

// Default viewport state
export const defaultViewportState = {
  x: 0,
  y: 0,
  width: 1,
  height: 1,
  offsetX: 0,
  offsetY: 0,
  zoomScale: 1,
  isPanning: false,
  isZooming: false,
}

/**
 * Interface for viewport operations
 */
interface ViewportInterface {
  getViewportInfo: () => typeof defaultViewportState
  getRawViewportInfo: () => typeof defaultViewportState
  getCommentsWrapperOffset: (e: any) => {
    x: number
    y: number
  }
  setCanvasSpaceCenter: (e: any, t?: any, r?: any) => void
  setZoomScale: (e: any, t: any) => void
  setHovering: (e: any) => void
  setCurrentPageIdAsync: (e: any) => Promise<void>
  pageIdForNodeId: (e: any) => string
  getCommentDestinationForCanvasPosition: (e: any, t: any, r: any) => any
  getValidCommentsRect: () => any
}

/**
 * Navigation options interface
 */
interface NavigationOptions {
  duration?: number
  ignoreVisibleTargets?: boolean
  metricsCallback?: (metrics: any) => void
  delay?: number
  signal?: AbortSignal
}

/**
 * Navigation class for handling viewport animations and transitions
 * Originally class 'u'
 */
class ViewportNavigator {
  static DEFAULT_NAVIGATE_BUFFER = 60
  private viewport: ViewportInterface
  private config: typeof defaultNavigationConfig
  private delayTimeout?: NodeJS.Timeout | number
  constructor(viewport: ViewportInterface, config: Partial<typeof defaultNavigationConfig> = {}) {
    this.viewport = viewport
    this.config = {
      ...defaultNavigationConfig,
      ...config,
    }
  }

  /**
   * Get comment destination for canvas position
   * Originally getCommentDestinationForCanvasPosition
   */
  getCommentDestinationForCanvasPosition = (e: any, t: any, r: any) => this.viewport.getCommentDestinationForCanvasPosition(e, t, r)

  /**
   * Set canvas space center
   * Originally setCanvasSpaceCenter
   */
  setCanvasSpaceCenter = (e: any, t?: any, r?: any) => {
    this.viewport.setCanvasSpaceCenter(e, t, r)
  }

  /**
   * Set current page ID asynchronously
   * Originally setCurrentPageIdAsync
   */
  setCurrentPageIdAsync = async (pageId: any) => {
    await this.viewport.setCurrentPageIdAsync(pageId)
  }

  /**
   * Get page ID for node ID
   * Originally pageIdForNodeId
   */
  pageIdForNodeId = (nodeId: any) => this.viewport.pageIdForNodeId(nodeId)

  /**
   * Get valid comments rectangle
   * Originally getValidCommentsRect
   */
  getValidCommentsRect = () => this.viewport.getValidCommentsRect()

  /**
   * Navigate to a specific position with animation
   * Originally navigateTo method
   */
  navigateTo(targetPosition: any, targetZoom?: number, options: NavigationOptions = {}) {
    this.clearNavigationTimeout()
    const currentViewport = this.getViewportInfo()
    const zoomScale = targetZoom || currentViewport.zoomScale

    // Handle reduced motion or instant navigation
    if (this.shouldSkipAnimation(options)) {
      this.updateViewport(currentViewport, targetPosition, zoomScale)
      this.reportReducedMotionMetrics(options)
      return Promise.resolve({
        cancelled: false,
      })
    }

    // Check if target is already visible
    if (this.isTargetAlreadyVisible(targetPosition, currentViewport, options)) {
      this.reportInstantNavigationMetrics(options)
      return Promise.resolve({
        cancelled: false,
      })
    }
    return this.performAnimatedNavigation(currentViewport, targetPosition, zoomScale, options)
  }

  /**
   * Check if animation should be skipped
   */
  private shouldSkipAnimation(options: NavigationOptions): boolean {
    return reducedMotionMediaQuery.matches || isInteractionPathCheck() || options.duration === 0
  }

  /**
   * Clear any pending navigation timeout
   */
  private clearNavigationTimeout(): void {
    clearTimeout(this.delayTimeout)
    this.delayTimeout = undefined
  }

  /**
   * Check if target position is already visible
   */
  private isTargetAlreadyVisible(targetPosition: any, currentViewport: any, options: NavigationOptions): boolean {
    if (!options.ignoreVisibleTargets)
      return false
    const relativePosition = Point.subtract(targetPosition, {
      x: currentViewport.offsetX,
      y: currentViewport.offsetY,
    })
    const scaledPosition = Point.scale(1 / currentViewport.zoomScale, relativePosition)
    const absolutePosition = Point.abs(scaledPosition)
    const viewportRadius = Math.max(currentViewport.height, currentViewport.width) / 2
    const buffer = ViewportNavigator.DEFAULT_NAVIGATE_BUFFER * (1 / currentViewport.zoomScale)
    return Point.max(absolutePosition) < viewportRadius - buffer
  }

  /**
   * Perform animated navigation
   */
  private performAnimatedNavigation(initialViewport: any, targetPosition: any, targetZoom: number, options: NavigationOptions): Promise<{
    cancelled: boolean
  }> {
    const animationStartTime = performance.now()
    const frameTimings: number[] = []
    const duration = options.duration ?? this.config.navigationDurationMs
    const deferredPromise = createDeferredPromise()
    let lastFrameTime: number | null = null
    let animationCancelled = false
    let lastKnownViewport = this.getViewportInfo()

    // Setup animation state
    const zoomDelta = targetZoom - initialViewport.zoomScale
    const initialScaledOffset = Point.scale(initialViewport.zoomScale, {
      x: initialViewport.offsetX,
      y: initialViewport.offsetY,
    })
    const targetScaledPosition = Point.scale(targetZoom, targetPosition)
    const positionDelta = Point.subtract(targetScaledPosition, initialScaledOffset)

    // Setup cancellation handler
    const cleanupCancellation = this.setupAnimationCancellation(() => {
      animationCancelled = true
    })

    // Animation completion handler
    const completeAnimation = (cancelled: boolean) => {
      this.reportAnimationMetrics(frameTimings, cancelled, options)
      cleanupCancellation()
      deferredPromise.resolve({
        cancelled,
      })
    }

    // Animation frame handler
    const animateFrame = () => {
      if (this.shouldCancelAnimation(lastKnownViewport, animationCancelled, options)) {
        completeAnimation(true)
        return
      }
      const currentTime = performance.now()
      const elapsed = currentTime - animationStartTime
      this.trackFrameTiming(currentTime, lastFrameTime, frameTimings)
      lastFrameTime = currentTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = this.config.animationTimingFunction(progress)
      if (easedProgress >= 1) {
        completeAnimation(false)
        this.updateViewport(this.getViewportInfo(), targetPosition, targetZoom)
        return
      }
      this.performFrameUpdate(initialViewport, zoomDelta, initialScaledOffset, positionDelta, easedProgress)
      requestAnimationFrame(animateFrame)
      lastKnownViewport = this.getViewportInfo()
    }

    // Start animation with optional delay
    if (options.delay) {
      this.delayTimeout = setTimeout(() => {
        animateFrame()
      }, options.delay)
    }
    else {
      animateFrame()
    }
    return deferredPromise.promise
  }

  /**
   * Setup animation cancellation on user interaction
   */
  private setupAnimationCancellation(onCancel: () => void): () => void {
    const fullscreenRoot = document.getElementById('fullscreen-root')
    if (!fullscreenRoot)
      return noop
    const handleMouseUp = () => {
      fullscreenRoot.addEventListener('mouseup', onCancel)
      onCancel()
    }
    fullscreenRoot.addEventListener('mousedown', handleMouseUp)
    return () => {
      fullscreenRoot.removeEventListener('mousedown', handleMouseUp)
      fullscreenRoot.removeEventListener('mouseup', onCancel)
    }
  }

  /**
   * Check if animation should be cancelled
   */
  private shouldCancelAnimation(lastViewport: any, cancelled: boolean, options: NavigationOptions): boolean | undefined {
    const currentViewport = this.getViewportInfo()
    const viewportChanged = this.config.isGetViewportAtomic && (lastViewport.offsetX !== currentViewport.offsetX || lastViewport.offsetY !== currentViewport.offsetY || lastViewport.zoomScale !== currentViewport.zoomScale)
    return viewportChanged || cancelled || options.signal?.aborted
  }

  /**
   * Track frame timing for performance metrics
   */
  private trackFrameTiming(currentTime: number, lastTime: number | null, timings: number[]): void {
    if (lastTime !== null) {
      timings.push(Math.round(currentTime - lastTime))
    }
  }

  /**
   * Perform frame update during animation
   */
  private performFrameUpdate(initialViewport: any, zoomDelta: number, initialScaledOffset: any, positionDelta: any, progress: number): void {
    const currentViewport = this.getViewportInfo()
    const currentZoom = initialViewport.zoomScale + zoomDelta * progress
    const currentScaledPosition = Point.add(initialScaledOffset, Point.scale(progress, positionDelta))
    const currentPosition = Point.scale(1 / currentZoom, currentScaledPosition)
    this.updateViewport(currentViewport, currentPosition, currentZoom)
  }

  /**
   * Report animation performance metrics
   */
  private reportAnimationMetrics(frameTimings: number[], cancelled: boolean, options: NavigationOptions): void {
    if (!options.metricsCallback)
      return
    let slowFrameCount = 0
    let averageFrameDuration = 0
    if (frameTimings.length) {
      averageFrameDuration = Math.round(frameTimings.reduce((sum, duration, index) => {
        if (index === 0 && sum > 17 || duration > 17) {
          slowFrameCount++
        }
        return sum + duration
      }) / frameTimings.length)
    }
    options.metricsCallback({
      numberOfSlowFrames: slowFrameCount,
      avgFrameDuration: averageFrameDuration,
      animationCancelled: cancelled,
      totalFrames: frameTimings.length,
      prefersReducedMotion: false,
    })
  }

  /**
   * Report reduced motion metrics
   */
  private reportReducedMotionMetrics(options: NavigationOptions): void {
    if (reducedMotionMediaQuery.matches && options.metricsCallback) {
      options.metricsCallback({
        prefersReducedMotion: true,
      })
    }
  }

  /**
   * Report instant navigation metrics
   */
  private reportInstantNavigationMetrics(options: NavigationOptions): void {
    options.metricsCallback?.({
      prefersReducedMotion: false,
    })
  }

  /**
   * Get current viewport information
   */
  getViewportInfo() {
    return this.viewport.getViewportInfo()
  }

  /**
   * Get raw viewport information
   */
  getRawViewportInfo() {
    return this.viewport.getRawViewportInfo()
  }

  /**
   * Get comments wrapper offset
   */
  getCommentsWrapperOffset(element: any) {
    return this.viewport.getCommentsWrapperOffset(element)
  }

  /**
   * Set zoom scale
   */
  setZoomScale(currentScale: any, targetScale: any) {
    this.viewport.setZoomScale(currentScale, targetScale)
  }

  /**
   * Set hovering state
   */
  setHovering(isHovering: any) {
    this.viewport.setHovering(isHovering)
  }

  /**
   * Update viewport with new position and zoom
   */
  updateViewport(currentViewport: any, position: any, zoomScale: number) {
    this.setZoomScale(currentViewport.zoomScale, zoomScale)
    this.setCanvasSpaceCenter(position, currentViewport, zoomScale)
  }
}

// Create default viewport instance for context
const defaultViewportNavigator = new ViewportNavigator({
  getViewportInfo: () => defaultViewportState,
  getRawViewportInfo: () => defaultViewportState,
  getCommentsWrapperOffset: () => ({
    x: 0,
    y: 0,
  }),
  setCanvasSpaceCenter: () => {},
  setZoomScale: () => {},
  setHovering: () => {},
  setCurrentPageIdAsync: () => Promise.resolve(),
  pageIdForNodeId: () => '1:0',
  getCommentDestinationForCanvasPosition: () => null,
  getValidCommentsRect: () => null,
})

// React contexts for viewport state management
export const viewportNavigatorContext = createContext(defaultViewportNavigator) // Originally $$h11
export const viewportXContext = createContext(defaultViewportState.x) // Originally $$m10
export const viewportYContext = createContext(defaultViewportState.y) // Originally $$g13
export const viewportWidthContext = createContext(defaultViewportState.width) // Originally $$f1
export const viewportHeightContext = createContext(defaultViewportState.height) // Originally $$E16
export const viewportOffsetXContext = createContext(defaultViewportState.offsetX) // Originally $$y9
export const viewportOffsetYContext = createContext(defaultViewportState.offsetY) // Originally $$b15
export const viewportZoomContext = createContext(defaultViewportState.zoomScale) // Originally $$T17
export const viewportPanningContext = createContext(defaultViewportState.isPanning) // Originally $$I12
export const viewportZoomingContext = createContext(defaultViewportState.isZooming) // Originally $$S6
export const frameCountContext = createContext(0) // Originally $$v7
export const activeStateContext = createContext(false) // Originally $$A4
export const currentViewportRefContext = createContext({
  current: defaultViewportState,
}) // Originally $$x0
export const previousViewportRefContext = createContext({
  current: defaultViewportState,
}) // Originally $$N3

/**
 * Provider component for viewport contexts
 * Originally $$C5
 */
export function ViewportProvider({
  latestViewport,
  children,
}: {
  latestViewport: typeof defaultViewportState
  children: React.ReactNode
}) {
  const currentViewportRef = useRef(latestViewport)
  const previousViewportRef = useRef(latestViewport)

  // Update refs
  previousViewportRef.current = currentViewportRef.current
  currentViewportRef.current = latestViewport
  return jsx(previousViewportRefContext.Provider, {
    value: previousViewportRef,
    children: jsx(currentViewportRefContext.Provider, {
      value: currentViewportRef,
      children: jsx(viewportXContext.Provider, {
        value: latestViewport.x,
        children: jsx(viewportYContext.Provider, {
          value: latestViewport.y,
          children: jsx(viewportWidthContext.Provider, {
            value: latestViewport.width,
            children: jsx(viewportHeightContext.Provider, {
              value: latestViewport.height,
              children: jsx(viewportOffsetXContext.Provider, {
                value: latestViewport.offsetX,
                children: jsx(viewportOffsetYContext.Provider, {
                  value: latestViewport.offsetY,
                  children: jsx(viewportZoomContext.Provider, {
                    value: latestViewport.zoomScale,
                    children: jsx(viewportPanningContext.Provider, {
                      value: latestViewport.isPanning,
                      children: jsx(viewportZoomingContext.Provider, {
                        value: latestViewport.isZooming,
                        children,
                      }),
                    }),
                  }),
                }),
              }),
            }),
          }),
        }),
      }),
    }),
  })
}

// Export with original names
export const HA = currentViewportRefContext // $$x0
export const Os = viewportWidthContext // $$f1
export const Pe = defaultNavigationConfig // $$c2
export const QZ = previousViewportRefContext // $$N3
export const Vl = activeStateContext // $$A4
export const aF = ViewportProvider // $$C5
export const b8 = viewportZoomingContext // $$S6
export const cY = frameCountContext // $$v7
export const f5 = ViewportNavigator // $$p8
export const j0 = viewportOffsetXContext // $$y9
export const k9 = viewportXContext // $$m10
export const kw = viewportNavigatorContext // $$h11
export const l9 = viewportPanningContext // $$I12
export const lG = viewportYContext // $$g13
export const t4 = defaultViewportState // $$_14
export const u7 = viewportOffsetYContext // $$b15
export const zE = viewportHeightContext // $$E16
export const zx = viewportZoomContext // $$T17
