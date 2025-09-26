import { AnchorPosition } from '../figma_app/763686'

// Define constants for better readability
const VERTICAL_CHARS = ['t', 'u', 'b', 'd']
const HORIZONTAL_CHARS = ['r', 'l']
const POSITION_REGEX = /([rltubdc])([rltubdc]?)\s*$/i

// Enum for axis types (improved version of var o)
enum AxisType {
  Vertical = 0,
  Horizontal = 1,
  Center = 2,
}

// Helper functions with descriptive names
const isVerticalChar = (char: string): boolean => VERTICAL_CHARS.includes(char)
const isHorizontalChar = (char: string): boolean => HORIZONTAL_CHARS.includes(char)
const isCenterChar = (char: string): boolean => char === 'c'

// Determine axis type for a character
function getAxisType(char: string): AxisType | null {
  if (isVerticalChar(char))
    return AxisType.Vertical
  if (isHorizontalChar(char))
    return AxisType.Horizontal
  if (isCenterChar(char))
    return AxisType.Center
  return null
}

// Map position characters to AnchorPosition values
function mapToAnchorPosition(verticalChar: string | null, horizontalChar: string | null, centerChar: string | null): AnchorPosition | null {
  switch (verticalChar) {
    case 'b':
    case 'd':
      switch (horizontalChar) {
        case 'l': return AnchorPosition.BOTTOM_LEFT
        case 'r': return AnchorPosition.BOTTOM_RIGHT
        case null: return AnchorPosition.BOTTOM_CENTER
      }
      break
    case 't':
    case 'u':
      switch (horizontalChar) {
        case 'l': return AnchorPosition.TOP_LEFT
        case 'r': return AnchorPosition.TOP_RIGHT
        case null: return AnchorPosition.TOP_CENTER
      }
      break
    case null:
      switch (horizontalChar) {
        case 'l': return AnchorPosition.MIDDLE_LEFT
        case 'r': return AnchorPosition.MIDDLE_RIGHT
        case null:
          if (centerChar)
            return AnchorPosition.MIDDLE_CENTER
          break
      }
      break
  }
  return null
}

/**
 * Parse a position string and return the corresponding AnchorPosition
 * Original function: $$m1
 * @param positionString - The position string to parse
 * @returns The corresponding AnchorPosition or null if invalid
 */
export function parseAnchorPosition(positionString: string): AnchorPosition | null {
  const match = positionString.match(POSITION_REGEX)

  if (!match || (match.length !== 2 && match.length !== 3)) {
    return null
  }

  let verticalChar: string | null = null
  let horizontalChar: string | null = null
  let centerChar: string | null = null

  // Process matched groups
  Array.from(match).slice(1).forEach((char) => {
    const lowerChar = char.toLowerCase()
    const axisType = getAxisType(lowerChar)

    if (axisType === AxisType.Vertical) {
      verticalChar = lowerChar
    }
    else if (axisType === AxisType.Horizontal) {
      horizontalChar = lowerChar
    }
    else if (axisType === AxisType.Center) {
      centerChar = lowerChar
    }
  })

  return mapToAnchorPosition(verticalChar, horizontalChar, centerChar)
}

/**
 * Remove position characters from a string
 * Original function: $$h0
 * @param input - The input string
 * @returns The string with position characters removed
 */
export const removePositionChars = (input: string): string => input.replace(POSITION_REGEX, '')

// Export aliases for backward compatibility
export const q = removePositionChars
export const v = parseAnchorPosition
