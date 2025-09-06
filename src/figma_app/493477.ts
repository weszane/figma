/* eslint-disable no-unreachable-loop */
/**
 * Checks if an object is empty.
 * @param obj - The object to check.
 * @returns True if the object has no own properties, false otherwise.
 * (Original: $$n3)
 */
export function isEmptyObject(obj: Record<string, unknown>): boolean {
  for (const key in obj) return false
  return true
}

/**
 * Returns the first key of an object, or null if empty.
 * @param obj - The object to inspect.
 * @returns The first key found, or null.
 * (Original: $$i6)
 */
export function getFirstKey(obj: Record<string, unknown>): string | null {
  for (const key in obj) return key
  return null
}

/**
 * Returns the key if the object has exactly one key, otherwise null.
 * @param obj - The object to inspect.
 * @returns The single key, or null.
 * (Original: $$a2)
 */
export function getSingleKey(obj: Record<string, unknown>): string | null {
  let singleKey: string | null = null
  for (const key in obj) {
    if (singleKey !== null)
      return null
    singleKey = key
  }
  return singleKey
}

/**
 * Merges two objects, overwriting only non-null values from the second object.
 * @param base - The base object.
 * @param updates - The object with updates.
 * @returns The merged object.
 * (Original: $$s4)
 */
export function mergeNonNull<T extends Record<string, any>>(base: T, updates: Partial<T>): T {
  const result = { ...base } as any
  for (const [key, value] of Object.entries(updates)) {
    if (value != null)
      result[key] = value
  }
  return result
}

/**
 * Returns a new object with keys sorted according to the comparator.
 * @param obj - The object to sort.
 * @param comparator - The sort comparator function.
 * @returns The sorted object.
 * (Original: $$o5)
 */
export function sortObjectByKeys<T>(obj: Record<string, T>, comparator?: (a: [string, T], b: [string, T]) => number): Record<string, T> {
  const sortedEntries = Object.entries(obj).sort(comparator)
  const result: Record<string, T> = {}
  for (const [key, value] of sortedEntries) {
    result[key] = value
  }
  return result
}

/**
 * Flattens a nested object into a single-level object with dot notation keys.
 * @param obj - The object to flatten.
 * @param prefix - The prefix for keys (used internally).
 * @returns The flattened object.
 * (Original: Bq)
 */
export function flattenObject(obj: Record<string, any>, prefix = ''): Record<string, any> {
  return Object.fromEntries(
    Object.entries(obj).flatMap(([key, value]) => {
      const fullKey = prefix === '' ? key : `${prefix}.${key}`
      if (value && typeof value === 'object' && !Array.isArray(value)) {
        return Object.entries(flattenObject(value, fullKey))
      }
      return [[fullKey, value]]
    }),
  )
}

/**
 * Recursively flattens an object into a target object, stringifying arrays.
 * @param obj - The object to flatten.
 * @param target - The target object to assign flattened values.
 * @param prefix - The prefix for keys (used internally).
 * (Original: Dy)
 */
export function flattenObjectToTarget(obj: Record<string, any>, target: Record<string, any>, prefix: string): void {
  for (const key in obj) {
    const fullKey = prefix === '' ? key : `${prefix}.${key}`
    if (Array.isArray(obj[key])) {
      target[fullKey] = JSON.stringify(obj[key])
    }
    else if (typeof obj[key] === 'object' && obj[key] !== null) {
      flattenObjectToTarget(obj[key], target, fullKey)
    }
    else {
      target[fullKey] = obj[key]
    }
  }
}

// Export aliases for backward compatibility
export const IL = getSingleKey
export const Im = isEmptyObject
export const b$ = mergeNonNull
export const mf = sortObjectByKeys
export const o = getFirstKey
export const Bq = flattenObject
export const Dy = flattenObjectToTarget
