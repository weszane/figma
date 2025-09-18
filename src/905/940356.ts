import { useSelector } from 'react-redux'

/**
 * Returns the value of a specific user flag from the Redux store.
 * @param flagKey - The key of the user flag to retrieve.
 * @returns The value of the user flag.
 * @see $$r0
 */
export function selectUserFlag(flagKey: string) {
  return useSelector<ObjectOf>(state => state.userFlags[flagKey])
}

// Export with original alias for backward compatibility
export const f = selectUserFlag
