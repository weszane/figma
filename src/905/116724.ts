import { useCallback, useEffect, useRef, useState } from 'react'

export interface DelayedCallbackHook {
  /** Whether the delayed callback is currently active */
  isActive: boolean
  /** Start the delayed callback with optional delay duration */
  start: (delay?: number) => void
  /** Cancel the delayed callback if it's active */
  cancel: () => void
  /** Complete the delayed callback immediately */
  complete: () => void
}

/**
 * A React hook that provides delayed callback execution with cancellation support.
 *
 * @param callback - The function to execute after delay
 * @returns An object with controls for the delayed callback
 *
 * @example
 * const { start, cancel, isActive } = useDelayedCallback(() => {
 *   console.log('Executed after delay');
 * });
 *
 * // Start with 1000ms delay
 * start(1000);
 *
 * // Cancel before it executes
 * cancel();
 */
export function useDelayedCallback(callback: () => void): DelayedCallbackHook {
  const [timeoutId, setTimeoutId] = useState<number>(0)
  const callbackRef = useRef<() => void>(callback)

  // Keep callback reference updated
  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  // Clear timeout on unmount or when timeoutId changes
  useEffect(() => {
    if (timeoutId) {
      return () => window.clearTimeout(timeoutId)
    }
    return undefined
  }, [timeoutId])

  /**
   * Cancel the delayed callback if active
   * Original name: a
   */
  const cancel = useCallback(() => {
    if (timeoutId) {
      window.clearTimeout(timeoutId)
      setTimeoutId(0)
    }
  }, [timeoutId])

  /**
   * Complete the callback immediately
   * Original name: s
   */
  const complete = useCallback(() => {
    cancel()
    callbackRef.current()
  }, [cancel])

  /**
   * Start the delayed callback
   * Original name: o
   */
  const start = useCallback((delay?: number) => {
    cancel()
    const id = window.setTimeout(() => {
      setTimeoutId(0)
      callbackRef.current()
    }, delay ?? 0)
    setTimeoutId(id)
  }, [cancel])

  return {
    isActive: timeoutId !== 0,
    start,
    cancel,
    complete,
  }
}

export const Z = useDelayedCallback
