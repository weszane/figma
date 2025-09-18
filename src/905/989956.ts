import { FormatDisplayP3Color } from '../905/248569'
import { ColorManipulator } from '../905/550748'
import { assertNotNullish } from '../figma_app/95419'
import { parseColor } from '../figma_app/191804'
import { shouldUsePolyfill } from '../figma_app/622881'

/**
 * ColorCSSManipulator extends ColorManipulator to handle parsing and formatting of CSS color strings.
 * Original class name: l
 */
export class ColorCSSManipulator extends ColorManipulator {
  /**
   * Parses a CSS color string into a color object.
   * Original method name: parse
   * @param colorStr - CSS color string
   * @returns Parsed color object
   * @throws Error if parsing fails
   */
  parseColorString(colorStr: string) {
    const color = parseColor(colorStr)
    return assertNotNullish(color, 'Could not parse CSS')
  }

  /**
   * Formats a color object into a CSS color string.
   * Original method name: format
   * @param color - Color object
   * @param colorSpace - Color space ('srgb' or 'display-p3')
   * @returns CSS color string
   * @throws Error if color space is not supported
   */
  format(color: { r: number, g: number, b: number, a: number }, colorSpace: 'srgb' | 'display-p3' = 'srgb'): string {
    if (color == null)
      return ''
    const r = this.normalize255(color.r)
    const g = this.normalize255(color.g)
    const b = this.normalize255(color.b)
    const a = parseFloat(color.a.toFixed(4))
    const usePolyfill = shouldUsePolyfill()
    if (colorSpace === 'srgb' || usePolyfill) {
      return `rgba(${r}, ${g}, ${b}, ${a})`
    }
    if (colorSpace === 'display-p3') {
      return FormatDisplayP3Color(color)
    }
    throw new Error(`color space: ${colorSpace} is not supported`)
  }

  /**
   * Formats a color object into an HSLA CSS string.
   * Original method name: formatHSLA
   * @param color - Color object with h, s, l, a properties
   * @returns HSLA CSS string
   */
  formatHSLA(color: { h: number, s: number, l: number, a: number }): string {
    if (color == null)
      return ''
    const a = parseFloat(color.a.toFixed(4))
    return `hsla(${360 * color.h}deg, ${100 * color.s}%, ${100 * color.l}%, ${a})`
  }

  /**
   * Determines which color channels are targeted for increment based on selection.
   * Original method name: getIncrementTargets
   * @param colorStr - CSS color string
   * @param selection - Selection object with start and end indices
   * @returns Object with targeted channels (r, g, b, a)
   */
  getIncrementTargets(
    colorStr: string,
    selection: { start: number, end: number },
  ): { r?: boolean, g?: boolean, b?: boolean, a?: boolean } {
    const { start, end } = selection
    const isSingle = start === end
    const formatted = this.format(this.parseColorString(colorStr))
    const firstComma = formatted.indexOf(',')
    const secondComma = formatted.indexOf(',', firstComma + 1)
    const thirdComma = formatted.indexOf(',', secondComma + 1)
    const targets: { r?: boolean, g?: boolean, b?: boolean, a?: boolean } = {}

    if (start <= firstComma || (isSingle && start === firstComma + 1))
      targets.r = true
    if ((start <= secondComma && end > firstComma + 1) || (isSingle && start === secondComma + 1))
      targets.g = true
    if ((start <= thirdComma && end > secondComma + 1) || (isSingle && start === thirdComma + 1))
      targets.b = true
    if (!(targets.r || targets.g || targets.b) && end > thirdComma + 1)
      targets.a = true

    return targets
  }

  /**
   * Gets the selection range for a given color channel.
   * Original method name: getSelection
   * @param colorStr - CSS color string
   * @param targets - Object with targeted channels (r, g, b, a)
   * @returns Selection range with start and end indices
   */
  getSelection(
    colorStr: string,
    targets: { r: boolean, g: boolean, b: boolean, a?: boolean },
  ): { start: number, end: number } {
    const openParen = colorStr.indexOf('(')
    const firstComma = colorStr.indexOf(',')
    const secondComma = colorStr.indexOf(',', firstComma + 1)
    const thirdComma = colorStr.indexOf(',', secondComma + 1)
    const closeParen = colorStr.indexOf(')')
    if (targets.a) {
      return { start: thirdComma + 2, end: closeParen }
    }
    return {
      start: targets.r
        ? openParen + 1
        : targets.g
          ? firstComma + 2
          : secondComma + 2,
      end: targets.b
        ? thirdComma
        : targets.g
          ? secondComma
          : firstComma,
    }
  }
}

/** Singleton instance for color manipulation. Original variable name: $$d0 */
export const colorCSSManipulatorInstance = new ColorCSSManipulator()
/** Alias for colorCSSManipulatorInstance. Original export name: F */
export const F = colorCSSManipulatorInstance
