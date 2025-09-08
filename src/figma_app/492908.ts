/**
 * Clamps a number between min and max.
 * @param value - The number to clamp.
 * @param min - Minimum value.
 * @param max - Maximum value.
 * @returns The clamped value.
 * (Original: $$n6)
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

/**
 * Clamps a number between optional min and max.
 * @param value - The number to clamp.
 * @param min - Optional minimum value.
 * @param max - Optional maximum value.
 * @returns The clamped value.
 * (Original: $$i2)
 */
export function clampOptional(value: number, min?: number | null, max?: number | null): number {
  let result = min == null ? value : Math.max(value, min)
  return max == null ? result : Math.min(result, max)
}

/**
 * Linear interpolation between two values.
 * @param start - Start value.
 * @param end - End value.
 * @param t - Interpolation factor (0-1).
 * @returns Interpolated value.
 * (Original: $$a1)
 */
export function lerp(start: number, end: number, t: number): number {
  return start + (end - start) * t
}

/**
 * Returns a random number between start and end (inclusive).
 * Throws if start > end.
 * @param start - Start value.
 * @param end - End value.
 * @returns Random number.
 * (Original: $$s9)
 */
export function randomBetween(start: number, end: number): number {
  if (start === end)
    return start
  if (start > end)
    throw new Error('random: start must be larger than end')
  return Math.random() * (end - start + 1) + start
}

/**
 * Generates a range of numbers.
 * @param start - Start value.
 * @param end - End value.
 * @param step - Step size.
 * @returns Array of numbers.
 * (Original: $$o8)
 */
export function range(start: number, end?: number, step?: number): number[] {
  const hasEnd = end != null
  const finalEnd = hasEnd ? end! : start
  const finalStart = hasEnd ? start : 0
  const stepValue = step ?? 1
  const length = Math.abs((finalEnd - finalStart) / stepValue)
  return Array.from({ length }, (_, idx) => finalStart + idx * stepValue)
}

/**
 * Creates an array by mapping a function over a range.
 * @param length - Number of elements.
 * @param fn - Mapping function.
 * @returns Array of mapped values.
 * (Original: $$l3)
 */
export function mapRange<T>(length: number, fn: (index: number) => T): T[] {
  return Array.from({ length }, (_, idx) => fn(idx))
}

/**
 * Checks if two numbers are approximately equal.
 * @param a - First number.
 * @param b - Second number.
 * @param epsilon - Tolerance.
 * @returns True if approximately equal.
 * (Original: $$d7)
 */
export function nearlyEqual(a: number, b: number, epsilon = 1e-6): boolean {
  return Math.abs(a - b) < epsilon
}

/**
 * Positive modulo operation.
 * @param value - Value.
 * @param mod - Modulo.
 * @returns Positive modulo result.
 * (Original: $$c5)
 */
export function positiveMod(value: number, mod: number): number {
  return (value % mod + mod) % mod
}

/**
 * Rounds a number to the nearest multiple.
 * @param value - Value.
 * @param multiple - Multiple to round to.
 * @returns Rounded value.
 * (Original: $$u4)
 */
export function roundToMultiple(value: number, multiple: number): number {
  return Math.round(value / multiple) * multiple
}

/**
 * Rounds a number to two decimal places.
 * @param value - Value.
 * @returns Rounded value.
 * (Original: $$p10)
 */
export function roundTo2Decimals(value: number): number {
  return Math.round((value + Number.EPSILON) * 100) / 100
}

/**
 * Solves cubic and quadratic equations.
 * @param a - Cubic coefficient.
 * @param b - Quadratic coefficient.
 * @param c - Linear coefficient.
 * @param d - Constant term.
 * @returns Array of real roots.
 * (Original: $$_0)
 */
export function solvePolynomial(a: number, b: number, c: number, d: number): number[] {
  let roots: number[]
  if (Math.abs(a) < 1e-8) {
    a = b; b = c; c = d
    if (Math.abs(a) < 1e-8) {
      a = b; b = c
      if (Math.abs(a) < 1e-8)
        return []
      return [-b / a]
    }
    const discriminant = b * b - 4 * a * c
    if (Math.abs(discriminant) < 1e-8)
      return [-b / (2 * a)]
    if (discriminant > 0)
      return [(-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a)]
    return []
  }
  const p = (3 * a * c - b * b) / (3 * a * a)
  const q = (2 * b * b * b - 9 * a * b * c + 27 * a * a * d) / (27 * a * a * a)
  if (Math.abs(p) < 1e-8) {
    roots = [Math.cbrt(-q)]
  }
  else if (Math.abs(q) < 1e-8) {
    roots = [0]
    if (p < 0)
      roots.push(Math.sqrt(-p), -Math.sqrt(-p))
  }
  else {
    const discriminant = q * q / 4 + p * p * p / 27
    if (Math.abs(discriminant) < 1e-8) {
      roots = [-1.5 * q / p, 3 * q / p]
    }
    else if (discriminant > 0) {
      const u = Math.cbrt(-q / 2 - Math.sqrt(discriminant))
      roots = [u - p / (3 * u)]
    }
    else {
      const r = 2 * Math.sqrt(-p / 3)
      const theta = Math.acos(3 * q / p / r) / 3
      const twoPiOver3 = 2 * Math.PI / 3
      roots = [
        r * Math.cos(theta),
        r * Math.cos(theta - twoPiOver3),
        r * Math.cos(theta - 2 * twoPiOver3),
      ]
    }
  }
  for (let i = 0; i < roots.length; i++) {
    roots[i] -= b / (3 * a)
  }
  return roots
}

// Export aliases for backward compatibility (original export names)
export const Ae = solvePolynomial
export const Cc = lerp
export const KY = clampOptional
export const M9 = mapRange
export const YE = roundToMultiple
export const _g = positiveMod
export const qE = clamp
export const xN = nearlyEqual
export const y1 = range
export const yT = randomBetween
export const z0 = roundTo2Decimals
