/**
 * Extracts all values for a given key from an object of objects.
 * @param source - The object containing nested objects.
 * @param key - The key to extract from each nested object.
 * @returns An array of values corresponding to the key from each nested object.
 * (Original function: $$n0)
 */
/**
 * Extracts all values for a given key from an object of objects.
 * @param source - The object containing nested objects.
 * @param key - The key to extract from each nested object.
 * @returns An array of values corresponding to the key from each nested object.
 * (Original function: $$n0)
 */
export function extractValuesByKey<T extends Record<string, any>, K extends keyof T>(
  source: Record<string, T>,
  key: K,
): Array<T[K]> {
  return Object.keys(source).reduce<Array<T[K]>>((result, currentKey) => {
    if (source[currentKey][key] !== undefined) {
      result.push(source[currentKey][key])
    }
    return result
  }, [])
}

// Refactored export variable name to match the function name
export const x = extractValuesByKey
