/**
 * Debounce function with optional immediate execution.
 * Original name: $$n1
 *
 * @param fn - Function to debounce
 * @param delay - Delay in milliseconds
 * @param immediate - If true, execute immediately on first call
 * @returns Debounced function with cancel and flush methods
 */
export function debounce(fn: (...args: any[]) => void, delay: number = 200, immediate: boolean = false) {
  let timeoutId: ReturnType<typeof setTimeout> | 0 = 0
  let pendingArgs: any[] | null = null

  /** Flushes the pending function call */
  const flush = () => {
    clearTimeout(timeoutId)
    timeoutId = 0
    if (!pendingArgs)
      return
    const args = pendingArgs
    pendingArgs = null
    fn(...args)
  }

  /** Debounced function */
  const debounced = (...args: any[]) => {
    if (immediate && !timeoutId) {
      immediate = false
      fn(...args)
      immediate = true
    }
    else {
      pendingArgs = args
    }
    clearTimeout(timeoutId)
    timeoutId = setTimeout(flush, delay)
  }

  /** Cancels any pending execution */
  debounced.cancel = () => {
    clearTimeout(timeoutId)
    pendingArgs = null
    timeoutId = 0
  }

  debounced.flush = flush

  return debounced
}

/**
 * Microtask-based throttle function.
 * Original name: $$r0
 *
 * @param fn - Function to throttle
 * @returns Throttled function with cancel and flush methods
 */
export function microtaskThrottle(fn: (...args: any[]) => void) {
  let scheduled = false
  let pendingArgs: any[] | null = null

  /** Flushes the pending function call */
  const flush = () => {
    scheduled = false
    if (!pendingArgs)
      return
    const args = pendingArgs
    pendingArgs = null
    fn(...args)
  }

  /** Throttled function */
  const throttled = (...args: any[]) => {
    pendingArgs = args
    if (!scheduled) {
      scheduled = true
      queueMicrotask(flush)
    }
  }

  /** Cancels any pending execution */
  throttled.cancel = () => {
    scheduled = false
    pendingArgs = null
  }

  throttled.flush = flush

  return throttled
}

// Export aliases for backward compatibility
export const throttle = microtaskThrottle
export const s = debounce
