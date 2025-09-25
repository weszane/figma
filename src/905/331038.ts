import { useMemo } from 'react'

/**
 * Finds and returns the first non-undefined result from applying the callback to each element.
 * Original function name: $$r0
 * @param items - Array of items to search through
 * @param callback - Function to apply to each item
 * @param args - Additional arguments to pass to the callback
 * @returns The first non-undefined result, or undefined if none found
 */
export function findFirstResult<T, R>(items: T[], callback: (item: T, ...args: any[]) => R | undefined, ...args: any[]): R | undefined {
  return useMemo(() => {
    for (const item of items) {
      const result = callback(item, ...args)
      if (result !== undefined) {
        return result
      }
    }
    return undefined
  }, [callback, items, args])
}

// Refactored export name for U
export const U = findFirstResult
