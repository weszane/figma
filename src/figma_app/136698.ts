import { blueSecondaryColor, greenSecondaryColor, pinkHotColor, purplePrimaryColor, redPrimaryColor, uiBlueSteelColor2, yellowSunflowerColor } from "../figma_app/728075"

export const multiplayerColors = [
  uiBlueSteelColor2,
  blueSecondaryColor,
  purplePrimaryColor,
  pinkHotColor,
  redPrimaryColor,
  yellowSunflowerColor,
  greenSecondaryColor,
]

/**
 * Selects a color from the provided array based on the input string.
 * If the string ends with a valid number, uses that to index into the array.
 * Otherwise, uses a hash of the string to select a color.
 *
 * @param input - The input string to determine color selection
 * @param colors - Array of colors to choose from
 * @returns A color from the array based on the input
 */
export function selectColorByString(input: string | undefined, colors: string[]): string {
  // Return first color if no input
  if (!input) {
    return colors[0]
  }

  try {
    // Try to use last 4 characters as index if they form a valid number
    const lastFourChars = input.substring(input.length - 4)
    const indexAsNumber = parseInt(lastFourChars)

    if (Number.isNaN(indexAsNumber)) {
      // Use hash of string if last 4 chars aren't a valid number
      const hash = (function computeHash(str: string): number {
        let hashValue = 0
        if (str.length === 0) {
          return hashValue
        }
        for (let i = 0; i < str.length; i++) {
          hashValue = (hashValue << 5) - hashValue + str.charCodeAt(i)
          hashValue &= hashValue // Convert to 32-bit integer
        }
        return hashValue
      })(input)

      return colors[Math.abs(hash % colors.length)]
    }

    // Use parsed number as index
    return colors[indexAsNumber % colors.length]
  }
  catch {
    // Fallback to first color on any error
    return colors[0]
  }
}

/**
 * Wrapper function for selectColorByString
 *
 * @param input - The input string to determine color selection
 * @param colors - Array of colors to choose from
 * @returns A color from the array based on the input
 */
export function getColorForMultiplayer(input: string | undefined, colors: string[]): string {
  return selectColorByString(input, colors)
}

/**
 * Determines text color based on background color for multiplayer UI
 *
 * @param backgroundColor - The background color to determine text color for
 * @returns CSS variable for appropriate text color
 */
export function getMultiplayerTextColor(backgroundColor: string): string {
  return backgroundColor === yellowSunflowerColor
    ? "var(--color-textonmultiplayeryellow)"
    : "var(--color-textonmultiplayerblue)"
}

// Aliases for backward compatibility
export const $L = getColorForMultiplayer
export const Xx = getMultiplayerTextColor
export const sC = selectColorByString
export const us = multiplayerColors
