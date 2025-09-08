import { useCallback } from 'react'
import { updateRefOrCallback } from '../905/177375'

/**
 * Sets autofocus property on the given element and updates ref or callback.
 * @param ref - The ref or callback to update (original: e)
 * @param autofocus - Whether to set autofocus (original: t, default: true)
 * @returns A memoized callback for ref assignment
 */
export function setupAutofocusHandler(ref: any, autofocus: boolean = true) {
  return useCallback((element: any) => {
    updateRefOrCallback(ref, element)
    if (element) {
      element.autofocus = autofocus
    }
  }, [ref, autofocus])
}

// Export with original alias for backward compatibility
export const X = setupAutofocusHandler
