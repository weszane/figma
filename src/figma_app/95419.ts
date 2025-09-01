// /Users/allen/sigma-main/src/figma_app/95419.ts

/**
 * Checks if a value is null or undefined.
 * @param value - The value to check.
 * @returns True if the value is null or undefined, false otherwise.
 */
export function isNullish<T>(value: T): boolean {
  return value == null
}

/**
 * Checks if a value is not null or undefined.
 * @param value - The value to check.
 * @returns True if the value is not null or undefined, false otherwise.
 */
export function isNotNullish<T>(value: T): value is NonNullable<T> {
  return !isNullish(value)
}

/**
 * Checks if a value is defined (not undefined).
 * @param value - The value to check.
 * @returns True if the value is not undefined, false otherwise.
 */
export function isDefined<T>(value: T): value is NonNullable<T> {
  return value !== undefined
}

/**
 * Asserts that a value is not null or undefined, throwing an error if it is.
 * @param value - The value to assert.
 * @param message - Optional error message.
 * @returns The value if it is not null or undefined.
 * @throws Error if the value is null or undefined.
 */
export function assertNotNullish<T>(value: T, message?: string): NonNullable<T> {
  if (isNullish(value)) {
    throw new Error(message ?? 'Expected value not to be nullish')
  }
  return value as NonNullable<T>
}

// Aliases for backward compatibility (original names: $$a0, $$i1, $$s2, $$n3)
export const EA = isDefined
export const Vq = isNotNullish
export const sR = assertNotNullish
export const uy = isNullish
