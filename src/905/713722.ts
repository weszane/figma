import type { Color } from '../../types/app'
import { AUTO_MARKER, isAutoMarker, isInvalidValue } from '../905/216495'
import { getI18nString } from '../905/303541'
import { ColorManipulator } from '../905/550748'
import { parseColor, setAlpha } from '../figma_app/191804'

interface ColorOptions {
  parseAlpha?: boolean
  formatAlpha?: boolean
}


interface SelectionRange {
  start: number
  end: number
}

interface IncrementTargets {
  r?: boolean
  g?: boolean
  b?: boolean
}

class HexColorManipulator extends ColorManipulator {
  options: ColorOptions

  constructor(options: ColorOptions = {}) {
    super()
    this.options = options
  }

  parse(colorString: string, templateColor?: Partial<Color>): Color {
    const alpha = templateColor?.a ?? 1
    const parsedColor = parseColor(colorString, this.options.parseAlpha ? alpha : undefined)

    if (!parsedColor) {
      throw new Error('Could not parse hex')
    }

    return this.options.parseAlpha ? parsedColor : setAlpha(parsedColor, alpha)
  }

  format(color: Color | null): string {
    if (!color) {
      return ''
    }

    const red = this.floatToHex(color.r)
    const green = this.floatToHex(color.g)
    const blue = this.floatToHex(color.b)

    if (this.options.formatAlpha && color.a !== 1) {
      const alpha = this.floatToHex(color.a)
      return `#${red}${green}${blue}${alpha}`.toUpperCase()
    }

    return `#${red}${green}${blue}`.toUpperCase()
  }

  formatForAndroid(color: Color): string {

    if (color.a === 1) {
      return this.format(color)
    }

    const alpha = this.floatToHex(color.a)
    const red = this.floatToHex(color.r)
    const green = this.floatToHex(color.g)
    const blue = this.floatToHex(color.b)

    return `#${alpha}${red}${green}${blue}`.toUpperCase()
  }

  getIncrementTargets(value: Color, selection: SelectionRange): IncrementTargets {
    const { start, end } = selection
    const isSinglePosition = start === end
    const targets: IncrementTargets = {}

    if (start <= 2 || (isSinglePosition && start === 3)) {
      targets.r = true
    }

    if (start <= 4 && end > 3 || (isSinglePosition && start === 5)) {
      targets.g = true
    }

    if (start <= 6 && end > 5 || (isSinglePosition && start === 7)) {
      targets.b = true
    }

    return targets
  }

  getSelection(value: Color, targets: IncrementTargets): SelectionRange {
    const selection: SelectionRange = {
      start: 1,
      end: 1,
    }

    if (targets.r) {
      selection.start = 1
    }
    else if (targets.g) {
      selection.start = 3
    }
    else {
      selection.start = 5
    }

    if (targets.b) {
      selection.end = 7
    }
    else if (targets.g) {
      selection.end = 5
    }
    else {
      selection.end = 3
    }

    return selection
  }

  protected floatToHex(floatValue: number): string {
    let hex = this.normalize255(floatValue).toString(16)
    if (hex.length === 1) {
      hex = `0${hex}`
    }
    return hex
  }
}

export class FormattedHexColor extends HexColorManipulator {
  constructor(options: ColorOptions = {}) {
    super(options)
  }

  format(color: Color, options: { withAlpha?: boolean, showDot?: boolean } = {}): string {
    const { withAlpha = false, showDot = false } = options

    const red = this.floatToHex(color.r)
    const green = this.floatToHex(color.g)
    const blue = this.floatToHex(color.b)
    const alpha = this.floatToHex(color.a)
    const alphaPercentage = `${(100 * color.a).toLocaleString('en', {
      maximumFractionDigits: 2,
    })}%`

    if (withAlpha) {
      if (showDot) {
        return `${red}${green}${blue} \xB7 ${alphaPercentage}`.toUpperCase()
      }
      return `${red}${green}${blue}${alpha}`.toUpperCase()
    }

    return `${red}${green}${blue}`.toUpperCase()
  }

  getIncrementTargets(value: Color, selection: SelectionRange): IncrementTargets {
    const { start, end } = selection
    const isSinglePosition = start === end
    const targets: IncrementTargets = {}

    if (start <= 1 || (isSinglePosition && start === 2)) {
      targets.r = true
    }

    if (start <= 3 && end > 2 || (isSinglePosition && start === 4)) {
      targets.g = true
    }

    if (start <= 5 && end > 4 || (isSinglePosition && start === 6)) {
      targets.b = true
    }

    return targets
  }

  getSelection(value: Color, targets: IncrementTargets): SelectionRange {
    const selection: SelectionRange = {
      start: 1,
      end: 1,
    }

    if (targets.r) {
      selection.start = 1
    }
    else if (targets.g) {
      selection.start = 3
    }
    else {
      selection.start = 5
    }

    if (targets.b) {
      selection.end = 7
    }
    else if (targets.g) {
      selection.end = 5
    }
    else {
      selection.end = 3
    }

    selection.start -= 1
    selection.end -= 1

    return selection
  }
}

export class AutoColorFormatter extends FormattedHexColor {
  constructor(options: ColorOptions = {}) {
    super(options)
  }

  parse(colorString: string, templateColor?: Partial<Color>) {
    if ('auto'.startsWith(colorString.toLowerCase())) {
      return AUTO_MARKER
    }
    return super.parse(colorString, templateColor)
  }

  format(color: Color | typeof AUTO_MARKER | null): string {
    if (!color) {
      return ''
    }

    if (isInvalidValue(color)) {
      return getI18nString('fullscreen.mixed')
    }

    if (isAutoMarker(color)) {
      return getI18nString('fullscreen.properties_panel.stack_panel.auto')
    }

    return super.format(color)
  }

  clamp(color: Color | typeof AUTO_MARKER) {
    if (isAutoMarker(color)) {
      return color
    }
    return super.clamp(color)
  }
}

export const defaultColorManipulator = new HexColorManipulator()
export const alphaColorManipulator = new HexColorManipulator({
  parseAlpha: true,
  formatAlpha: true,
})
export const formattedColorManipulator = new FormattedHexColor()


export const C1 = AutoColorFormatter
export const Nv = alphaColorManipulator
export const TI = formattedColorManipulator
export const rC = FormattedHexColor
export const z5 = defaultColorManipulator
