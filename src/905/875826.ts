// Original file: /Users/allen/sigma-main/src/905/875826.ts
// Refactored to improve readability, add types, JSDoc comments, and logical grouping.
// Functions grouped by category: clamping, rounding, stepping, array utilities, and math utilities.
// Original function names retained in comments for traceability.
// Exports updated to reference new function names while keeping original alias names.

export function clamp(value: number, min: number, max: number): number {
  // Original: $$n5
  /**
   * Clamps the value between min and max, swapping if necessary.
   * @param value - The value to clamp.
   * @param min - The minimum value.
   * @param max - The maximum value.
   * @returns The clamped value.
   */
  if (max < min)
    [min, max] = [max, min]
  return Math.min(Math.max(value, min), max)
}

export function clampWithBounds(value: number, min?: number, max?: number): number {
  // Original: $$r1
  /**
   * Clamps the value to be at least min (if provided) and at most max (if provided).
   * @param value - The value to clamp.
   * @param min - The optional minimum value.
   * @param max - The optional maximum value.
   * @returns The clamped value.
   */
  value = min != null ? Math.max(value, min) : value
  return max != null ? Math.min(value, max) : value
}

export function roundToNearestMultiple(value: number, multiple: number): number {
  // Original: $$a4
  /**
   * Rounds the value to the nearest multiple of the given number.
   * @param value - The value to round.
   * @param multiple - The multiple to round to.
   * @returns The rounded value.
   */
  return Math.round(value / multiple) * multiple
}

export function stepTowardsRange(value: number, targetMin: number, targetMax: number, stepSize: number, increment: number): number {
  // Original: $$s0
  /**
   * Steps the value towards the target range using the given step size and increment.
   * @param value - The starting value.
   * @param targetMin - The minimum target.
   * @param targetMax - The maximum target.
   * @param stepSize - The step size for adjustment.
   * @param increment - The increment value.
   * @returns The adjusted value.
   */
  if (value < targetMin) {
    for (value += increment; value <= targetMin;) value += stepSize
  }
  else if (value > targetMax) {
    for (value -= increment; value >= targetMax;) value -= stepSize
  }
  return value
}

export function roundWithDirection(value: number, direction: number, divisor: number): number {
  // Original: $$o3
  /**
   * Rounds the value based on the direction and divisor.
   * @param value - The value to round.
   * @param direction - The direction (affects rounding method).
   * @param divisor - The divisor for rounding.
   * @returns The rounded value.
   */
  const sum = value + direction
  const sign = Math.sign(direction)
  const roundFunc = sign === -1 ? Math.ceil : sign === 1 ? Math.floor : Math.round
  const rounded = roundFunc(sum / divisor) * divisor
  return Math.abs(value - rounded) < Number.EPSILON ? sum : rounded
}

export function findMinBy<T>(array: T[], selector: (item: T) => number): [T, number] {
  // Original: $$l2
  /**
   * Finds the element in the array with the minimum value according to the selector function.
   * @param array - The array to search.
   * @param selector - The function to select the value for comparison.
   * @returns A tuple of the element and its selected value.
   */
  if (array.length === 0)
    throw new Error('Array is empty')
  let minItem = array[0]
  let minValue = selector(minItem)
  for (let i = 1; i < array.length; ++i) {
    const item = array[i]
    const value = selector(item)
    if (value < minValue) {
      minValue = value
      minItem = item
    }
  }
  return [minItem, minValue]
}

export function positiveModulo(dividend: number, divisor: number): number {
  // Original: $$d6
  /**
   * Computes the positive modulo of dividend by divisor.
   * @param dividend - The dividend.
   * @param divisor - The divisor.
   * @returns The positive modulo result.
   */
  return ((dividend % divisor) + divisor) % divisor
}

// Updated exports to reference new function names
export const CP = stepTowardsRange
export const KY = clampWithBounds
export const RZ = findMinBy
export const jN = roundWithDirection
export const n$ = roundToNearestMultiple
export const qE = clamp
export const sj = positiveModulo
