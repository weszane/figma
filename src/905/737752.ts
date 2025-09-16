/**
 * Converts a padding value or object into a standardized padding style object.
 *
 * @param padding - Can be null, a string, a number, or an object with top, bottom, left, right properties.
 * @returns An object with padding or paddingTop, paddingBottom, paddingLeft, paddingRight properties.
 *
 * Original function name: $$n0
 */
export function setupPaddingStyle(padding:
  | null
  | string
  | number
  | { top?: number | string, bottom?: number | string, left?: number | string, right?: number | string }): Record<string, string | number> {
  if (padding == null)
    return {}
  if (typeof padding === 'string' || typeof padding === 'number') {
    return { padding }
  }
  const { top, bottom, left, right } = padding
  return {
    paddingTop: top,
    paddingBottom: bottom,
    paddingLeft: left,
    paddingRight: right,
  }
}

// Refactored export name for Q
export const Q = setupPaddingStyle
