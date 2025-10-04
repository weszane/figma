import { isWebAnimationsApiSupported } from "../905/437800"

interface AnimationOptions {
  duration: number
  endDelay?: number
  resolveAt?: number
  stops?: Array<{
    at: number
    then: () => void
  }>
}

interface AnimationControls {
  onfinish: (() => void) | null
  oncancel: (() => void) | null
  currentTime: number | CSSNumericValue | null
}

/**
 * Creates a promise-based animation with support for stops and completion callbacks.
 * Original function: $$r0
 *
 * @param element - The DOM element to animate
 * @param keyframes - The animation keyframes
 * @param options - Animation options including duration, stops, etc.
 * @returns A promise that resolves when the animation completes
 */
export async function createAnimationPromise(
  element: Element | null,
  keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
  options: AnimationOptions,
): Promise<void> {
  // Early return if no element or Web Animations API not supported
  if (!element || !isWebAnimationsApiSupported()) {
    return Promise.resolve()
  }

  return new Promise((resolve) => {
    let isResolved = false

    // Resolve function with optional delay
    const resolveAnimation = () => {
      if (!isResolved) {
        isResolved = true
        setTimeout(() => {
          resolve()
        }, options.endDelay || 0)
      }
    }

    // Start the animation
    const animation: AnimationControls = element.animate(keyframes, options) as unknown as AnimationControls
    const stops = options.stops

    // Animation frame callback to monitor progress
    const checkAnimationProgress = () => {
      const currentTime = animation.currentTime

      // Extract numeric value from CSSNumericValue if needed
      let timeValue: number | null = null
      if (typeof CSSNumericValue === "undefined") {
        timeValue = currentTime as number | null
      }
      else if (currentTime instanceof CSSNumericValue) {
        timeValue = "value" in currentTime && typeof currentTime.value === "number"
          ? currentTime.value
          : null
      }
      else {
        timeValue = currentTime as number | null
      }

      // Process animation state if we have a valid time value
      if (timeValue !== null) {
        // Check if animation has reached its resolution point
        if (timeValue >= options.duration * (options.resolveAt || 1)) {
          resolveAnimation()
          return
        }

        // Process stops if any
        if (stops && stops.length > 0 && timeValue / options.duration > stops[0].at) {
          stops[0].then()
          stops.shift()
        }

        // Continue monitoring
        requestAnimationFrame(checkAnimationProgress)
      }
    }

    // Start monitoring animation progress
    checkAnimationProgress()

    // Set up completion callbacks
    animation.onfinish = () => resolveAnimation()
    animation.oncancel = () => resolveAnimation()
  })
}

/**
 * Handles promise completion with a callback.
 * Original function: $$a1
 *
 * @param promise - The promise to handle
 * @param callback - The callback to execute when promise settles
 */
export function handlePromiseCompletion(
  promise: Promise<unknown> | null | undefined,
  callback: () => void,
): void {
  // Execute immediately if no promise
  if (!promise) {
    callback()
    return
  }

  let isCalled = false

  // Wrapper to ensure callback is called only once
  const callOnce = () => {
    if (!isCalled) {
      isCalled = true
      callback()
    }
  }

  // Attach to promise resolution or rejection
  promise.then(callOnce).catch(callOnce)
}

// Export aliases for backward compatibility
export const G = createAnimationPromise
export const b = handlePromiseCompletion
