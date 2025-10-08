import { useCallback, useContext, useRef } from "react"
import { useDebouncedCallback } from "use-debounce"
import { waitForAnimationFrame } from "../905/236856"
import { viewportNavigatorContext } from "../figma_app/298911"
import { trackFileEventWithUser } from "../figma_app/901889"
/**
 * Interface for viewport information.
 */
interface ViewportInfo {
  centerX: number
  centerY: number
  scale: number
  offsetX?: number
  offsetY?: number
  zoomScale?: number
}

/**
 * Options for navigation.
 */
interface NavigateOptions {
  alwaysNavToSimilarViewport?: boolean
  jumpOnAbort?: boolean
  jump?: boolean
  delay?: number
  additionalTrackEventParams?: Record<string, any>
}

/**
 * Hook for debounced viewport navigation.
 * @param trackEventName - The event name for tracking.
 * @returns A debounced callback function for navigating to a viewport.
 */
export function useNavigateToViewport(trackEventName: string) {
  const viewportNavigator = useContext(viewportNavigatorContext)
  const abortControllerRef = useRef<AbortController>()
  const previousViewportRef = useRef<ViewportInfo>()
  const navigationCountRef = useRef(0)
  const trackEvent = trackFileEventWithUser()

  /**
   * Checks if the given viewport is similar to the current one.
   * @param viewport - The viewport to check.
   * @returns True if similar, false otherwise.
   */
  const isSimilarViewport = useCallback((viewport: ViewportInfo) => {
    const currentInfo = viewportNavigator.getViewportInfo()
    return (
      Math.abs(currentInfo.offsetX - viewport.centerX) < 5
      && Math.abs(currentInfo.offsetY - viewport.centerY) < 5
      && Math.abs(currentInfo.zoomScale - viewport.scale) < 0.1
    )
  }, [viewportNavigator])

  /**
   * Navigates to the specified viewport with options.
   * @param viewport - The target viewport.
   * @param options - Navigation options.
   */
  const navigateToViewport = useCallback(async (viewport: ViewportInfo | Promise<ViewportInfo>, options: NavigateOptions = {}) => {
    abortControllerRef.current?.abort()
    const sendMetrics = (metrics: any) => {
      if (trackEventName) {
        trackEvent(trackEventName, {
          ...metrics,
          ...options.additionalTrackEventParams,
        })
      }
    }

    let resolvedViewport = viewport
    if (resolvedViewport instanceof Promise) {
      resolvedViewport = await resolvedViewport
      await waitForAnimationFrame()
    }

    if (!resolvedViewport || (!options.alwaysNavToSimilarViewport && isSimilarViewport(resolvedViewport))) {
      sendMetrics({})
      abortControllerRef.current = undefined
      return
    }

    const previousViewport = previousViewportRef.current
    if (options.jumpOnAbort && previousViewport && navigationCountRef.current > 0) {
      const center = {
        x: previousViewport.centerX,
        y: previousViewport.centerY,
      }
      viewportNavigator.setZoomScale(viewportNavigator.getViewportInfo().zoomScale, previousViewport.scale)
      viewportNavigator.setCanvasSpaceCenter(center, viewportNavigator.getViewportInfo(), previousViewport.scale)
    }

    abortControllerRef.current = new AbortController()
    const center = {
      x: resolvedViewport.centerX,
      y: resolvedViewport.centerY,
    }
    previousViewportRef.current = resolvedViewport
    navigationCountRef.current += 1

    await viewportNavigator.navigateTo(center, resolvedViewport.scale, {
      duration: options.jump ? 0 : 400,
      signal: abortControllerRef.current.signal,
      delay: options.delay,
      metricsCallback: sendMetrics,
    }).then(() => {
      navigationCountRef.current -= 1
    })
  }, [isSimilarViewport, trackEventName, trackEvent, viewportNavigator])

  return useDebouncedCallback(navigateToViewport, 50, {
    leading: true,
  })
}

// Original export name refactored to match the new function name
export const Z = useNavigateToViewport
