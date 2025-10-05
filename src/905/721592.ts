import { isNotNull } from "../905/8035"
import { CssVariable } from "../905/77776"
import { FormatDisplayP3Color } from "../905/248569"
import { formatNumber } from "../905/432392"
import { VariableStatus } from "../905/707098"
import { ColorConversionEnum, ColorSpaceEnum, Fullscreen } from "../figma_app/763686"
// Default color management configuration
export const DEFAULT_COLOR_MANAGEMENT = {
  colorProfile: ColorSpaceEnum.SRGB,
  colorspaceConversion: ColorConversionEnum.NO_CONVERSION,
}

/**
 * Converts a normalized color value (0-1) to an 8-bit integer (0-255)
 * @param value - Normalized color component value
 * @returns 8-bit integer representation
 */
function convertTo8Bit(value: number): number {
  return Math.round(255 * value)
}

/**
 * Converts a normalized color value to a 2-digit hexadecimal string
 * @param value - Normalized color component value
 * @returns 2-digit uppercase hexadecimal string
 */
function convertToHex(value: number): string {
  return `00${Math.round(255 * value).toString(16).toUpperCase()}`.slice(-2)
}

/**
 * Checks if a color has transparency (alpha channel less than 1)
 * @param color - Color object with potential alpha channel
 * @returns True if color has transparency
 */
function hasTransparency(color: { a?: number }): boolean {
  const alpha = color.a
  return isNotNull(alpha) && alpha !== 1
}

/**
 * Formats a decimal value as a percentage string
 * @param value - Decimal value to format
 * @param decimalPlaces - Number of decimal places to include
 * @returns Formatted percentage string
 */
export function formatPercentage(value: number, decimalPlaces: number = 0): string {
  return `${formatNumber(100 * value, decimalPlaces)}%`
}

/**
 * Represents a color with various formatting capabilities
 * Supports different color spaces, opacity, and variable references
 */
export class ColorFormatter {
   color: { r: number, g: number, b: number, a?: number }
   preferences: any
   opacity: number
   colorManagement: typeof DEFAULT_COLOR_MANAGEMENT
   variableValue: any

  /**
   * Creates a new ColorFormatter instance
   * @param color - RGB color object with values between 0 and 1
   * @param preferences - Color formatting preferences
   * @param opacity - Opacity value (0-1)
   * @param colorManagement - Color management configuration
   * @param variableValue - Associated variable value if applicable
   */
  constructor(
    color: { r: number, g: number, b: number, a?: number },
    preferences: any,
    opacity: number = 1,
    colorManagement = DEFAULT_COLOR_MANAGEMENT,
    variableValue: any = null,
  ) {
    this.color = color
    this.preferences = preferences
    this.opacity = opacity
    this.colorManagement = colorManagement
    this.variableValue = variableValue

    // Apply color space conversion if needed
    if (
      "colorspaceConversion" in colorManagement
      && colorManagement.colorspaceConversion !== undefined
      && colorManagement.colorspaceConversion !== ColorConversionEnum.NO_CONVERSION
      && Fullscreen !== undefined
    ) {
      const convertedColor = Fullscreen.applyConversionToColor(
        {
          red: color.r,
          green: color.g,
          blue: color.b,
          alpha: "a" in color && color.a ? color.a : 1,
        },
        colorManagement.colorspaceConversion,
      )

      this.color = {
        r: convertedColor.red,
        g: convertedColor.green,
        b: convertedColor.blue,
        a: "alpha" in convertedColor && convertedColor.alpha !== 1 ? convertedColor.alpha : undefined,
      }
    }

    // Validate color values are normalized
    if (color.r > 1 || color.g > 1 || color.b > 1) {
      throw new Error(`Expected normalized color values (between 0 and 1) but got (${color.r}, ${color.g}, ${color.b})`)
    }
  }

  /**
   * Gets a raw color formatter instance without variable references
   * @returns New ColorFormatter instance with raw color
   */
  get rawColor(): ColorFormatter {
    return new ColorFormatter(this.color, this.preferences, this.opacity, this.colorManagement)
  }

  /**
   * Gets the formatted color value based on various conditions
   * @returns Formatted color string in appropriate format (hex, rgba, etc.)
   */
  get value(): string {
    // If we have a resolved variable, use its CSS variable representation
    if (this.hasResolvedVariable()) {
      return new CssVariable(
        this.variableValue.name,
        this.rawColor,
        this.preferences,
        this.variableValue?.status === VariableStatus.Resolved ? this.variableValue : undefined,
      ).value
    }

    // If using Display P3 color space, format accordingly
    if (this.colorManagement.colorProfile === ColorSpaceEnum.DISPLAY_P3) {
      return FormatDisplayP3Color(this.color, this.opacity)
    }

    // If color has transparency or opacity is not 1, use RGBA format
    if (hasTransparency(this.color) || this.opacity !== 1) {
      const { r, g, b, a = 1 } = this.color
      return `rgba(${convertTo8Bit(r)}, ${convertTo8Bit(g)}, ${convertTo8Bit(b)}, ${(a * this.opacity).toFixed(2)})`
    }

    // Otherwise, use hex format
    if (hasTransparency(this.color) || this.opacity !== 1) {
      const { r, g, b, a = 1 } = this.color
      const hexValue = `${convertToHex(r)}${convertToHex(g)}${convertToHex(b)}${convertToHex(a * this.opacity)}`

      // Compress hex if possible (e.g., #AABBCC -> #ABC)
      return hexValue[0] === hexValue[1]
        && hexValue[2] === hexValue[3]
        && hexValue[4] === hexValue[5]
        && hexValue[6] === hexValue[7]
        ? `#${hexValue[0]}${hexValue[2]}${hexValue[4]}${hexValue[6]}`
        : `#${hexValue}`
    }
    else {
      const hexValue = `${convertToHex(this.color.r)}${convertToHex(this.color.g)}${convertToHex(this.color.b)}`

      // Compress hex if possible (e.g., #AABBCC -> #ABC)
      return hexValue[0] === hexValue[1]
        && hexValue[2] === hexValue[3]
        && hexValue[4] === hexValue[5]
        ? `#${hexValue[0]}${hexValue[2]}${hexValue[4]}`
        : `#${hexValue}`
    }
  }

  /**
   * Checks if the color has a resolved variable reference
   * @returns True if variable is resolved
   */
   hasResolvedVariable(): boolean {
    return this.variableValue?.status === VariableStatus.Resolved
  }

  /**
   * Compares this color with another color formatter
   * @param other - Another ColorFormatter instance
   * @returns True if both colors have the same formatted value
   */
  equals(other: ColorFormatter): boolean {
    return this.value === other.value
  }
}

// Export aliases for backward compatibility
export const DX = DEFAULT_COLOR_MANAGEMENT
export const EG = formatPercentage
export const Q1 = ColorFormatter
