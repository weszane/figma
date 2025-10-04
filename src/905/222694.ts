/**
 * Converts a JSON string containing background color information to an RGBA string.
 * @param e - JSON string with background_color property containing {r, g, b, a} values
 * @param t - Optional alpha value to override the one from the JSON
 * @returns RGBA color string or "transparent" if input is invalid or alpha is 0
 */
export function convertToRgba(e: string | null, t?: number): string {
  let result = "transparent"

  if (e) {
    try {
      const parsed = JSON.parse(e)
      const backgroundColor = parsed.background_color

      if (!backgroundColor) {
        return result
      }

      const { r: red, g: green, b: blue, a: alpha } = backgroundColor

      // Only process if alpha is not zero
      if (alpha !== 0) {
        // Convert normalized RGB values (0-1) to 0-255 range and ensure integer values
        const red255 = Math.floor(255 * red) || 0
        const green255 = Math.floor(255 * green) || 0
        const blue255 = Math.floor(255 * blue) || 0

        // Use provided alpha or fallback to the one from JSON
        const finalAlpha = t || alpha

        result = `rgba(${red255}, ${green255}, ${blue255}, ${finalAlpha})`
      }
    }
    catch {
      // Return transparent for any parsing errors
      return result
    }
  }

  return result
}


export const C = convertToRgba
