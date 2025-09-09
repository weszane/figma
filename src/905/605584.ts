/**
 * Checks if two values are the same value, handling edge cases like NaN and signed zero.
 * @param a - First value to compare (original: n, parameter: e)
 * @param b - Second value to compare (original: n, parameter: t)
 * @returns True if values are the same, false otherwise.
 */
function isSameValue(a: any, b: any): boolean {
  // Original function: n
  if (a === b) {
    // Handles signed zero
    return a !== 0 || b !== 0 || 1 / a === 1 / b
  }
  // Handles NaN
  return a !== a && b !== b
}

/**
 * Performs a shallow equality check between two objects or values.
 * @param objA - First object or value to compare (original: $$r0, parameter: e)
 * @param objB - Second object or value to compare (original: $$r0, parameter: t)
 * @returns True if objects/values are shallowly equal, false otherwise.
 */
export function shallowEqual(objA: any, objB: any): boolean {
  // Original function: $$r0
  if (isSameValue(objA, objB))
    return true

  if (
    typeof objA !== 'object'
    || objA === null
    || typeof objB !== 'object'
    || objB === null
  ) {
    return false
  }

  const keysA = Object.keys(objA)
  const keysB = Object.keys(objB)

  if (keysA.length !== keysB.length)
    return false

  for (let i = 0; i < keysA.length; i++) {
    if (
      !Object.prototype.hasOwnProperty.call(objB, keysA[i])
      || !isSameValue(objA[keysA[i]], objB[keysA[i]])
    ) {
      return false
    }
  }

  return true
}

/** Alias for shallowEqual (original export: A) */
export const A = shallowEqual
