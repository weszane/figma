/**
 * Calculates typography styles including font size, line height, and letter spacing.
 * Original function name: i
 * @param fontSize - The base font size in pixels (original param: e)
 * @param type - The type of tracking, defaults to "pos" (original param: t)
 * @returns An object containing fontSize, lineHeight, and letterSpacing
 */
export function calculateTypography(fontSize: number, type: string = 'pos'): {
  fontSize: string
  lineHeight: string
  letterSpacing: string
} {
  // Calculate line height (original variable: n)
  const lineHeightValue = 8 * Math.ceil(1.3 * fontSize / 8)

  // Calculate constant and coefficient (original object: r)
  const constant = (-0.0223 + 0.185 * Math.E ** (-0.1745 * fontSize)).toFixed(3)
  const fontSizeCoefficient = type !== 'pos'
    ? 'var(--text-tracking-neg, 0.005)'
    : 'var(--text-tracking-pos, 0)'

  return {
    fontSize: `${fontSize}px`,
    lineHeight: `${lineHeightValue}px`,
    letterSpacing: `calc(${constant}px + ${fontSizeCoefficient} * ${fontSize}px)`,
  }
}

export const p = calculateTypography
