/**
 * Extracts the originalText from the first element of each property in the input object.
 * If the property is missing or empty, returns an empty string.
 * @param inputObj - The object whose properties are arrays containing objects with originalText.
 * @returns An object mapping each key to its first element's originalText or an empty string.
 * (Original function: $$n0)
 */
export function extractOriginalTextMap(inputObj: Record<string, Array<{ originalText: string }>>): Record<string, string> {
  const result: Record<string, string> = {}

  for (const key of Object.keys(inputObj)) {
    result[key] = getFirstOriginalText(inputObj, key)
  }

  return result
}

/**
 * Helper to get the originalText from the first element of the array at the given key.
 * Returns an empty string if not available.
 * (Original inline function in $$n0)
 */
function getFirstOriginalText(
  obj: Record<string, Array<{ originalText: string }>>,
  key: string,
): string {
  const arr = obj[key]
  if (arr && arr.length >= 1) {
    return arr[0].originalText
  }
  return ''
}

// Refactored export variable name to match the new function name
export const K = extractOriginalTextMap
