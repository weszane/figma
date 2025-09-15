import { deepEqual } from '../905/382883'
import { assert } from '../figma_app/465776'

/**
 * Checks deep equality between two objects, ignoring keys that start with "__IGNORE__".
 * Original function name: $$a1
 * @param a - First object to compare
 * @param b - Second object to compare
 * @returns {boolean} True if objects are deeply equal, false otherwise
 */
export function deepEqualIgnoreKeys(a: unknown, b: unknown): boolean {
  if (typeof a !== typeof b)
    return false
  if (typeof a !== 'object' || a === null || b === null)
    return a === b

  // Clone and remove ignored keys
  const cleanA = { ...(a as Record<string, unknown>) }
  const cleanB = { ...(b as Record<string, unknown>) }

  for (const key in cleanA) {
    if (key.startsWith('__IGNORE__'))
      delete cleanA[key]
  }
  for (const key in cleanB) {
    if (key.startsWith('__IGNORE__'))
      delete cleanB[key]
  }

  return deepEqual(cleanA, cleanB)
}

/**
 * Provides a refetch method for a given handler.
 * Original function name: $$s2
 * @param handler - Function to handle refetching
 * @returns {object} Object with refetch method
 */
export function createRefetcher(
  handler?: (params: { type: 'refetch' }) => Promise<unknown>,
): { refetch: () => Promise<unknown> | undefined } {
  return {
    refetch: () => {
      if (!handler)
        return
      const result = handler({ type: 'refetch' })
      assert(result instanceof Promise)
      return result
    },
  }
}

/**
 * Provides pagination methods for a given handler.
 * Original function name: $$o0
 * @param handler - Function to handle pagination actions
 * @returns {object} Object with refetch, fetchNextPage, and fetchPreviousPage methods
 */
export function createPaginator(
  handler?: (
    params:
      | { type: 'refetch' }
      | { type: 'fetchNextPage', options?: unknown }
      | { type: 'fetchPreviousPage', options?: unknown }
  ) => Promise<unknown>,
): {
  refetch: () => Promise<unknown> | undefined
  fetchNextPage: (options?: unknown) => Promise<unknown> | undefined
  fetchPreviousPage: (options?: unknown) => Promise<unknown> | undefined
} {
  return {
    refetch: () => {
      if (!handler)
        return
      const result = handler({ type: 'refetch' })
      assert(result instanceof Promise)
      return result
    },
    fetchNextPage: (options?: unknown) => {
      if (!handler)
        return
      const result = handler({ type: 'fetchNextPage', options })
      assert(result instanceof Promise)
      return result
    },
    fetchPreviousPage: (options?: unknown) => {
      if (!handler)
        return
      const result = handler({ type: 'fetchPreviousPage', options })
      assert(result instanceof Promise)
      return result
    },
  }
}

// Refactored exports with new names
export const GC = createPaginator
export const N7 = deepEqualIgnoreKeys
export const ff = createRefetcher
