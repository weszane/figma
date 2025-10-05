/**
 * Unit types for measurements
 * @enum {number}
 */
export enum MeasureUnitType {
  PIXEL = 0,
  SCALED = 1,
}

/**
 * Checks if layout should be hidden based on custom settings
 * @param {object} params - Function parameters
 * @param {object} params.customSettings - Custom settings object
 * @returns {boolean} True if layout should be hidden
 */
export function shouldHideLayout({ customSettings = {} }: { customSettings?: { hideLayout?: string } }): boolean {
  return customSettings?.hideLayout === "true"
}

/**
 * Checks if color should be hidden based on custom settings
 * @param {object} params - Function parameters
 * @param {object} params.customSettings - Custom settings object
 * @returns {boolean} True if color should be hidden
 */
export function shouldHideColor({ customSettings = {} }: { customSettings?: { hideColor?: string } }): boolean {
  return customSettings?.hideColor === "true"
}

/**
 * Checks if either layout or color should be hidden
 * @param {object} params - Function parameters
 * @returns {boolean} True if either layout or color should be hidden
 */
export function shouldHideLayoutOrColor(params: { customSettings?: { hideLayout?: string, hideColor?: string } }): boolean {
  return shouldHideLayout(params) || shouldHideColor(params)
}

/**
 * Formats a number value with scaling consideration
 * @param {number} value - The value to format
 * @param {object} scaleParams - Scaling parameters
 * @param {MeasureUnitType} scaleParams.unit - The unit type
 * @param {number} scaleParams.scaleFactor - The scale factor
 * @param {number} maxFractionDigits - Maximum fraction digits (default: 5)
 * @returns {number} Formatted number
 */
export function formatScaledValue(
  value: number,
  { unit, scaleFactor }: { unit: MeasureUnitType, scaleFactor: number },
  maxFractionDigits: number = 5,
): number {
  // Return early if no scaling needed
  if (unit === MeasureUnitType.PIXEL || scaleFactor === 1 || scaleFactor === 0) {
    return formatNumber(value, maxFractionDigits)
  }

  return formatNumber(value / scaleFactor, maxFractionDigits)
}

/**
 * Formats a number to a specified precision without grouping
 * @param {number} value - The value to format
 * @param {number} maxFractionDigits - Maximum fraction digits (default: 5)
 * @returns {number} Formatted number
 */
export function formatNumber(value: number, maxFractionDigits: number = 5): number {
  return Number(
    value.toLocaleString("en", {
      maximumFractionDigits: maxFractionDigits,
      useGrouping: false,
    }),
  )
}

// Export aliases for backward compatibility
export const Hw = shouldHideLayoutOrColor
export const KY = shouldHideColor
export const hX = formatScaledValue
export const nk = formatNumber
export const tK = MeasureUnitType
export const vy = shouldHideLayout
