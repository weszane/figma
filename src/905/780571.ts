// Origin: /Users/allen/github/fig/src/905/780571.ts
// Refactored: Renamed variables, added types, improved readability, added comments, simplified logic

/**
 * Extracts all values for a given property key from an object whose values are objects.
 * Only includes values that are truthy.
 *
 * @param sourceObj - The object whose values are themselves objects.
 * @param propertyKey - The key to extract from each nested object.
 * @returns An array of all truthy values found at propertyKey in each nested object.
 */
export function extractPropertyValues<T extends Record<string, any>, K extends keyof T[string]>(
  sourceObj: T,
  propertyKey: K,
): Array<T[string][K]> {
  // Iterate over each key in the source object and collect truthy values for the given propertyKey
  return Object.keys(sourceObj).reduce<Array<T[string][K]>>((accumulator, key) => {
    const nestedObj = sourceObj[key]
    const value = nestedObj[propertyKey]
    if (value) {
      accumulator.push(value)
    }
    return accumulator
  }, [])
}

// Alias for extractPropertyValues for compatibility with original code
export const _ = extractPropertyValues

/*
  Assumed dependencies:
  - None (uses only standard JS/TS features)
  Potential issues:
  - Only truthy values are included; falsy values (e.g., 0, '', false) are skipped.
  - No runtime check that sourceObj[key] is an object.
*/
