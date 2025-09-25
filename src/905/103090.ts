import { shallowEqual, useSelector } from 'react-redux'

/**
 * Selects state from the Redux store using a selector function and shallow equality.
 * @param selector - The selector function to retrieve state.
 * @returns The selected state.
 * @see $$r0
 */
export function selectWithShallowEqual<S, T>(selector: (state: S) => T) {
  return useSelector<S, T>(selector, shallowEqual)
}

// Export alias for compatibility with original usage
export const R = selectWithShallowEqual
