/**
 * Special marker for mixed values.
 * (original: $$n12)
 */
export const MIXED_MARKER = {
  __mixed__: true,
}

/**
 * Special marker for auto values.
 * (original: $$r5)
 */
export const AUTO_MARKER = {
  __auto__: true,
}

/**
 * Type for array with __mixed_values__ marker.
 * (original: createMixedArray)
 */
export interface MixedArray extends Array<any> {
  __mixed_values__?: boolean
}

/**
 * Creates an array marked as mixed values.
 * @returns {MixedArray} Array with __mixed_values__ property.
 * (original: $$a4)
 */
export function createMixedArray(): MixedArray {
  const arr: MixedArray = []
  arr.__mixed_values__ = true
  return arr
}

/**
 * Checks if the array is marked as mixed values.
 * @param {any} value
 * @returns {boolean}
 * (original: $$s9)
 */
export function isMixedArray(value: MixedArray): boolean {
  return Array.isArray(value) && !!value.__mixed_values__
}

/**
 * Checks if the value is not a valid value (not mixed marker and not mixed array).
 * @param {any} value
 * @returns {boolean}
 * (original: $$o10)
 */
export function isInvalidValue(value: any): boolean {
  return !isValidValue(value)
}

/**
 * Checks if the value is the auto marker.
 * @param {any} value
 * @returns {boolean}
 * (original: $$l6)
 */
export function isAutoMarker(value: any): boolean {
  return value === AUTO_MARKER
}

/**
 * Checks if the value is valid (not mixed marker and not mixed array).
 * @param {any} value
 * @returns {boolean}
 * (original: $$d11)
 */
export function isValidValue(value: any): boolean {
  return value !== MIXED_MARKER && !isMixedArray(value)
}

/**
 * Returns null if value is mixed marker or null/undefined, otherwise returns value.
 * @param {any} value
 * @returns {any|null}
 * (original: $$c2)
 */
export function normalizeValue(value: any): any | null {
  return value === MIXED_MARKER || value == null ? null : value
}

/**
 * Returns null if value is mixed marker, null/undefined, or mixed array; otherwise returns value.
 * @param {any} value
 * @returns {any|null}
 * (original: $$u3)
 */
export function normalizeMixedValue(value: any): any | null {
  return value === MIXED_MARKER || value == null || isMixedArray(value) ? null : value
}

/**
 * Returns fallback if value is mixed marker, null/undefined, or auto marker; otherwise returns value.
 * @param {any} value
 * @param {any} fallback
 * @returns {any}
 * (original: $$p8)
 */
export function valueOrFallback(value: any, fallback: any): any {
  return value === MIXED_MARKER || value == null || value === AUTO_MARKER ? fallback : value
}

/**
 * Converts value to array. If mixed array, returns as is. If mixed marker or null/undefined, returns empty array. Otherwise, wraps value in array.
 * @param {any} value
 * @returns {any[]}
 * (original: $$m1)
 */
export function toArray(value: any): any[] {
  return isMixedArray(value) ? value : value === MIXED_MARKER || value == null ? [] : [value]
}

/**
 * Returns mixed marker if any values differ, otherwise returns the common value.
 * @param {...any[]} values
 * @returns {any}
 * (original: $$h13)
 */
export function getCommonValue(...values: any[]): any {
  for (let i = 1; i < values.length; ++i) {
    if (values[i] !== values[0])
      return MIXED_MARKER
  }
  return values[0]
}

/**
 * Gets the common value from an array, using toArray conversion.
 * @param {any} value
 * @returns {any}
 * (original: $$g0)
 */
export function getCommonFromArray(value: any): any {
  return getCommonValue(...toArray(value))
}

/**
 * Returns mixed marker if any element is invalid, otherwise returns the array.
 * @param {any[]} arr
 * @returns {any}
 * (original: $$f7)
 */
export function arrayOrMixed(arr: any[]): any {
  return arr.some(isInvalidValue) ? MIXED_MARKER : arr
}

// Exported variables with refactored names
export const BI = getCommonFromArray
export const C8 = toArray
export const E7 = normalizeValue
export const HE = normalizeMixedValue
export const Mv = createMixedArray
export const Q8 = AUTO_MARKER
export const SX = isAutoMarker
export const ZX = arrayOrMixed
export const _W = valueOrFallback
export const bU = isMixedArray
export const gl = isInvalidValue
export const hS = isValidValue
export const oV = MIXED_MARKER
export const q = getCommonValue
