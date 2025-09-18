import { isEqual } from 'lodash-es'
import { createSelectorCreator, weakMapMemoize } from 'reselect'
/**
 * Memoizes a function using a WeakMap and deep equality check.
 * Original name: $$s2
 * @param fn - The function to memoize.
 * @returns The memoized function.
 */
export function memoizeWithDeepEquality<T extends unknown[]>(fn: (...args: T) => any) {
  return weakMapMemoize(fn, {
    resultEqualityCheck: isEqual,
  })
}

/**
 * Returns a result equality check function.
 * Original name: r
 * @returns A function for result equality check.
 */
function resultEqualityCheck() {
  return isEqual
}

/**
 * Creates a selector creator with weakMapMemoize and deep equality.
 * Original name: $$o0
 */
export const createDeepEqualSelector = createSelectorCreator(weakMapMemoize, {
  resultEqualityCheck: resultEqualityCheck(),
})

/**
 * Composes two functions: applies the first, then the second.
 * Original name: $$l1
 * @param fn - The first function.
 * @param transformer - The second function to apply to the result of fn.
 * @returns A composed function.
 */
export function composeWithTransformer<T extends any[], R, S>(fn: (...args: T) => R, transformer: (result: R) => S) {
  return (...args: T) => transformer(fn(...args))
}

// Export aliases for backward compatibility
export const P8 = createDeepEqualSelector
export const Vh = composeWithTransformer
export const Zm = memoizeWithDeepEquality
