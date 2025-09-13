/**
 * Extracts the specified property from each object in the input object.
 * Only includes keys where the property exists and is truthy.
 * @param source - The input object containing nested objects.
 * @param prop - The property to extract from each nested object.
 * @returns An object mapping keys to the extracted property values.
 * @originalName $$n0
 */
export function extractPropertyFromNestedObjects(source: Record<string, Record<string, any>>, prop: string): Record<string, any> {
  return Object.keys(source).reduce((result: Record<string, any>, key: string) => {
    if (source[key][prop]) {
      result[key] = source[key][prop]
    }
    return result
  }, {})
}

// Refactored export name for t
export const t = extractPropertyFromNestedObjects
