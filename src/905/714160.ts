import { floatToString, isValidNumberString, stringToFloat } from "../figma_app/164212"

/**
 * Utility class for number validation and conversion operations
 * Original class name: a
 */
export class NumberUtils {
  /**
   * Validates if a string represents a valid number
   * Original method name: isValidFloat
   * @param value - The string to validate
   * @returns true if the string is a valid number, false otherwise
   */
  isValidFloat(value: string): boolean {
    return isValidNumberString(value)
  }

  /**
   * Validates if a string represents a valid number and ends with a decimal point
   * Original method name: isValidFloatEndingWithDecimal
   * @param value - The string to validate
   * @returns true if the string is a valid number ending with ".", false otherwise
   */
  isValidFloatEndingWithDecimal(value: string): boolean {
    return isValidNumberString(value) && value.endsWith(".")
  }

  /**
   * Converts a string to a float number
   * Original method name: stringToFloat
   * @param value - The string to convert
   * @returns the parsed float value
   */
  stringToFloat(value: string): number {
    return stringToFloat(value)
  }

  /**
   * Converts a float number to its string representation
   * Original method name: floatToString
   * @param value - The number to convert
   * @returns the string representation of the number
   */
  floatToString(value: number): string {
    return floatToString(value)
  }
}
export let componentPropBindingsInstance: NumberUtils
export function setComponentPropBindings() {
  componentPropBindingsInstance =  new NumberUtils()
}

export const FR = setComponentPropBindings
// Initialize singleton instance
export const XA = componentPropBindingsInstance
