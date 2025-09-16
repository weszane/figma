import { useState } from 'react'
import { flushSync } from 'react-dom'
import { setupResizeObserver } from '../905/937416'
/**
 * Checks if an element has scrollable overflow.
 * @param element - The DOM element to check.
 * @returns True if the element is scrollable, false otherwise.
 * (Original function: o)
 */
function isScrollable(element: HTMLElement | null): boolean {
  return !!element && element.scrollHeight > element.clientHeight
}

/**
 * Custom hook to determine if any of the provided refs are scrollable.
 * Sets up a resize observer to update state when scrollability changes.
 * @param refA - First React ref to a DOM element.
 * @param refB - Second React ref to a DOM element.
 * @param refC - Third React ref to a DOM element.
 * @returns Boolean indicating if any of the elements are scrollable.
 * (Original function: $$s0)
 */
export function useAnyScrollable(
  refA: React.RefObject<HTMLElement>,
  refB: React.RefObject<HTMLElement>,
  refC: React.RefObject<HTMLElement>,
): boolean {
  const [isAnyScrollable, setIsAnyScrollable] = useState(false)

  setupResizeObserver([refA, refB, refC], () => {
    const scrollableA = isScrollable(refA.current)
    const scrollableB = isScrollable(refB.current)

    flushSync(() => {
      setIsAnyScrollable(scrollableA || scrollableB)
    })
  })

  return isAnyScrollable
}

// Export with original alias for compatibility (Original export: C)
export const C = useAnyScrollable
