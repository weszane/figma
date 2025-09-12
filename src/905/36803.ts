/**
 * Merges two objects, overriding properties in the first object with non-null values from the second.
 * @param baseObj - The base object to merge into.
 * @param overrideObj - The object with properties to override.
 * @returns The merged object.
 * (Original function: $$n1)
 */
export function mergeObjects(baseObj: Record<string, any>, overrideObj?: Record<string, any>): Record<string, any> {
  if (!overrideObj)
    return baseObj
  const result = { ...baseObj }
  for (const key in overrideObj) {
    if (overrideObj[key] != null) {
      result[key] = overrideObj[key]
    }
  }
  return result
}

/**
 * Returns the keys of an object as an array.
 * @param obj - The object to get keys from.
 * @returns Array of keys.
 * (Original function: $$r3)
 */
export function getObjectKeys(obj: Record<string, any>): string[] {
  return Object.keys(obj)
}

/**
 * Returns the entries of an object as an array of [key, value] pairs.
 * @param obj - The object to get entries from.
 * @returns Array of [key, value] pairs.
 * (Original function: $$a2)
 */
export function getObjectEntries(obj: Record<string, any>): [string, any][] {
  return Object.entries(obj)
}

/**
 * Checks if an object is empty (has no enumerable properties).
 * @param obj - The object to check.
 * @returns True if empty, false otherwise.
 * (Original function: $$s0)
 */
export function isObjectEmpty(obj: Record<string, any>): boolean {
  // eslint-disable-next-line no-unreachable-loop
  for (const _ in obj) {
    return false
  }
  return true
}

// Export aliases for backward compatibility
export const RI = isObjectEmpty
export const Tv = mergeObjects
export const WP = getObjectEntries
export const uv = getObjectKeys
