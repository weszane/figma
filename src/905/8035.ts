import { toIdentifier } from '../905/232489'

/**
 * Checks if a value is not null or undefined.
 * Original: $$r4
 * @param value - The value to check.
 * @returns True if value is not null or undefined.
 */
export const isNotNull = (value: unknown): boolean => value != null

/**
 * Returns the entries of an object as [key, value] pairs.
 * Original: $$a3
 */
export const objectEntries = Object.entries

/**
 * Returns the keys of an object.
 * Original: $$s0
 */
export const objectKeys = Object.keys

/**
 * Converts object keys to identifiers, removing any suffix after '#'.
 * Original: $$o2
 * @param obj - The object to process.
 * @returns A new object with processed keys.
 */
export function normalizeObjectKeys(obj: Record<string, any>): Record<string, any> {
  const result: Record<string, any> = {}
  for (const [key, value] of objectEntries(obj)) {
    let normalizedKey = key
    if (normalizedKey.includes('#')) {
      const parts = normalizedKey.split('#')
      normalizedKey = parts.slice(0, parts.length - 1).join('')
    }
    normalizedKey = toIdentifier(normalizedKey)
    result[normalizedKey] = value
  }
  return result
}

/**
 * Finds the key with the maximum value according to a comparator.
 * Original: $$l1
 * @param obj - The object to search.
 * @param comparator - Function to compare values.
 * @returns The key with the maximum value.
 */
export function findMaxKey<T>(
  obj: Record<string, T>,
  comparator: (a: T, b: T) => boolean = (a, b) => a > b
): string {
  return objectEntries(obj).reduce((max, entry) =>
    comparator(max[1], entry[1]) ? max : entry
  )[0]
}

// Export aliases for refactored names
export const HP = objectKeys
export const Iq = findMaxKey
export const Z3 = normalizeObjectKeys
export const jO = objectEntries
export const t2 = isNotNull
