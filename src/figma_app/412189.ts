import { useCallback, useEffect, useRef } from "react"
import { deepEqual } from "../905/382883"

/**
 * Custom hook to track component mount status
 * Original name: $$a2
 */
export function useIsMounted(): () => boolean {
  const isMountedRef = useRef<boolean>(false)

  useEffect(() => {
    isMountedRef.current = true
    return () => {
      isMountedRef.current = false
    }
  }, [])

  return useCallback(() => isMountedRef.current, [])
}

/**
 * Custom hook to memoize value based on equality check
 * Original name: $$s3
 */
export function useMemoizedValue<T>(
  value: T,
  equalityFn: (newValue: T, oldValue: T | null) => boolean,
): T {
  const ref = useRef<T | null>(null)
  const isEqual = equalityFn(value, ref.current)

  useEffect(() => {
    if (!isEqual) {
      ref.current = value
    }
  })

  return isEqual ? ref.current! : value
}

/**
 * Custom hook to add event listener to window
 * Original name: $$o1
 */
export function useWindowEvent(
  eventName: string,
  handler: EventListener,
  options?: boolean | AddEventListenerOptions,
): void {
  const memoizedOptions = useMemoizedValue(options, deepEqual)

  useEffect(() => {
    window.addEventListener(eventName, handler, memoizedOptions)
    return () => {
      window.removeEventListener(eventName, handler, memoizedOptions)
    }
  }, [eventName, handler, memoizedOptions])
}

/**
 * Custom hook to add event listener to document with conditional activation
 * Original name: $$l0
 */
export function useDocumentEvent(
  eventName: string,
  handler: EventListener,
  isEnabled: boolean,
  options?: boolean | AddEventListenerOptions,
): void {
  const memoizedOptions = useMemoizedValue(options, deepEqual)

  useEffect(() => {
    if (isEnabled) {
      document.addEventListener(eventName, handler, memoizedOptions)
      return () => {
        document.removeEventListener(eventName, handler, memoizedOptions)
      }
    }
  }, [eventName, handler, memoizedOptions, isEnabled])
}

// Export aliases for backward compatibility
export const Po = useDocumentEvent
export const U3 = useWindowEvent
export const aq = useIsMounted
export const fh = useMemoizedValue
