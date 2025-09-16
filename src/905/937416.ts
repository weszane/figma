import { useLayoutEffect, useRef } from 'react'

/**
 * Sets up a ResizeObserver for the provided refs.
 * @param refs - A single ref or array of refs to observe.
 * @param callback - The callback function for ResizeObserver.
 * @param shouldObserve - Whether to activate the observer (default: true).
 */
export function setupResizeObserver(refs: React.RefObject<Element> | React.RefObject<Element>[], callback: ResizeObserverCallback, shouldObserve: boolean = true): void {
  // useRef for callback (original: a)
  const callbackRef = useRef(callback)
  callbackRef.current = callback

  // Normalize refs to array (original: s)
  const refArray = Array.isArray(refs) ? refs : [refs]

  useLayoutEffect(() => {
    if (!shouldObserve)
      return

    // Create ResizeObserver with latest callback
    const observer = new ResizeObserver(callbackRef.current)

    // Observe each ref's current element
    for (const ref of refArray) {
      if (ref.current)
        observer.observe(ref.current)
    }

    // Cleanup on unmount
    return () => observer.disconnect()
  }, [...refArray, shouldObserve])
}

// Export with refactored name (original: w)
export const w = setupResizeObserver
