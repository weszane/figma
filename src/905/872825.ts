/**
 * Checks if a value exists within the values of an object.
 * @param value - The value to search for.
 * @param obj - The object whose values are checked.
 * @returns True if the value exists in the object's values, false otherwise.
 * (Original function: $$n0)
 */
export function isValueInObject(value: unknown, obj: Record<string, unknown>): boolean {
  return Object.values(obj).includes(value)
}

/**
 * Returns the value if it exists in the object's values, otherwise returns the fallback.
 * @param value - The value to check.
 * @param obj - The object whose values are checked.
 * @param fallback - The fallback value to return if value is not found.
 * @returns The value if found, otherwise the fallback.
 * (Original function: $$r1)
 */
export function getValueOrFallback<T>(value: T, obj: Record<string, unknown>, fallback?: T): T {
  return isValueInObject(value, obj) ? value : fallback
}

// Export aliases for backward compatibility with original names
export const N = isValueInObject // (Original export: N)
export const S = getValueOrFallback // (Original export: S)
