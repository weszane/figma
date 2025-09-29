import { useEffect, useRef } from 'react'
/**
 * Custom hook that executes a callback function once when a condition is met.
 *
 * @param callback - The function to execute when condition is met
 * @param value - The value to pass to the condition function
 * @param conditionFn - Function that determines if callback should be executed
 *
 * @example
 * ```tsx
 * useConditionalCallback(() => console.log('executed'), someValue, (val) => val > 5);
 * ```
 */
export function useConditionalCallback<T>(
  callback: () => void,
  value: T,
  conditionFn: (value: T) => boolean,
): void {
  const hasExecuted = useRef(false)

  useEffect(() => {
    if (!hasExecuted.current && conditionFn(value)) {
      callback()
      hasExecuted.current = true
    }
  }, [callback, conditionFn, value])
}

export const R = useConditionalCallback
