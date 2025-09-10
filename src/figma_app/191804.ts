/* eslint-disable regexp/no-super-linear-backtracking */
import { labToRgb, labToXyz } from '../figma_app/273493'
import { clamp, nearlyEqual, positiveMod } from '../figma_app/492908'

interface Color {
  r: number
  g: number
  b: number
  a: number
}

const blackColor: Color = {
  r: 0,
  g: 0,
  b: 0,
  a: 1,
}

const whiteColor: Color = {
  r: 1,
  g: 1,
  b: 1,
  a: 1,
}
const LAB_EPSILON: number = (6 / 29) ** 3
const RGB_PERCENT_REGEX: RegExp = /^(?:rgba?\()?\s*([-+]?(?:\d+(?:\.\d+)?|\.\d+))%\s*?[, ]\s*([-+]?(?:\d+(?:\.\d+)?|\.\d+))%\s*?[, ]\s*([-+]?(?:\d+(?:\.\d+)?|\.\d+))%\s*?(?:[,/ ]\s*([-+]?(?:\d+(?:\.\d+)?|\.\d+)%?))?\s*(?:\)\s*)?;?$/
const RGB_NUMERIC_REGEX: RegExp = /^(?:rgba?\()?\s*(\d+(?:\.\d+)?|\.\d+)\s*?[, ]\s*(\d+(?:\.\d+)?|\.\d+)\s*?[, ]\s*(\d+(?:\.\d+)?|\.\d+)\s*?(?:[,/ ]\s*([-+]?(?:\d+(?:\.\d+)?|\.\d+)%?))?\s*(?:\)\s*)?;?$/
const HSL_REGEX: RegExp = /^(?:hsla?\()?\s*([-+]?(?:\d+(?:\.\d+)?|\.\d+)(?:deg|rad|grad|turn)?)\s*?[, ]\s*([-+]?(?:\d+(?:\.\d+)?|\.\d+))%\s*?[, ]\s*([-+]?(?:\d+(?:\.\d+)?|\.\d+))%\s*?(?:[,/ ]\s*([-+]?(?:\d+(?:\.\d+)?|\.\d+)%?))?\s*(?:\)\s*)?;?$/
const LAB_REGEX: RegExp = /^(?:lab?\()?\s*(\d+(?:\.\d+)?|\.\d+)%\s*?[, ]\s*([-+]?(?:\d+(?:\.\d+)?|\.\d+))\s*?[, ]\s*([-+]?(?:\d+(?:\.\d+)?|\.\d+))\s*?(?:[,/ ]\s*([-+]?(?:\d+(?:\.\d+)?|\.\d+)%?))?\s*(?:\)\s*)?;?$/
const OKLCH_REGEX: RegExp = /^oklch?\(\s*((?:\d+(?:\.\d+)?|\.\d+)%?)\s*?[, ]\s*([-+]?(?:\d+(?:\.\d+)?|\.\d+)%?)\s*?[, ]\s*([-+]?(?:\d+(?:\.\d+)?|\.\d+))\s*?(?:[,/ ]\s*([-+]?(?:\d+(?:\.\d+)?|\.\d+)(?:deg|rad|grad|turn)?))?\s*(?:\)\s*)?;?$/
const OKLAB_REGEX: RegExp = /^oklab?\(\s*((?:\d+(?:\.\d+)?|\.\d+)%?)%\s*?[, ]\s*([-+]?(?:\d+(?:\.\d+)?|\.\d+)%?)\s*?[, ]\s*([-+]?(?:\d+(?:\.\d+)?|\.\d+))\s*?(?:[,/ ]\s*([-+]?(?:\d+(?:\.\d+)?|\.\d+)%?))?\s*(?:\)\s*)?;?$/

export const multiplayerColors: Record<string, string> = {
  MULTIPLAYER_GRAY: '#667799',
  MULTIPLAYER_BLUE: '#007BE5',
  MULTIPLAYER_PURPLE: '#9747FF',
  MULTIPLAYER_PINK: '#FF24BD',
  MULTIPLAYER_RED: '#F24822',
  MULTIPLAYER_YELLOW: '#FFCD29',
  MULTIPLAYER_GREEN: '#14AE5C',
}

const darkerShades: Record<string, string> = {
  '#667799': '#4A5878',
  '#007BE5': '#034AC1',
  '#9747FF': '#681ABB',
  '#FF24BD': '#971172',
  '#F24822': '#9F1F18',
  '#FFCD29': '#FFCD29',
  '#14AE5C': '#024626',
}

/**
 * Original: getDarkerShade
 * Returns a darker shade of the given color if available, otherwise returns the original color.
 * @param color - The hex color string.
 * @returns The darker hex color string or the original.
 */
export function getDarkerShade(color: string): string {
  return darkerShades[color] ?? color
}

const textOnDarkCanvas: string = 'var(--color-textondarkcanvas, #ffffff)'
const textOnLightCanvas: string = 'var(--color-textonlightcanvas, #000000)'
const borderLight: string = 'inset 0px 0px 0px 1px rgba(255, 255, 255, 0.15)'
const borderDark: string = 'inset 0px 0px 0px 1px rgba(0, 0, 0, 0.1)'
const borderTranslucent: string = 'inset 0px 0px 0px 2px var(--color-bordertranslucent)'

const namedColors: Record<string, string> = {
  aliceblue: '#F0F8FF',
  antiquewhite: '#FAEBD7',
  aqua: '#00FFFF',
  aquamarine: '#7FFFD4',
  azure: '#F0FFFF',
  beige: '#F5F5DC',
  bisque: '#FFE4C4',
  black: '#000000',
  blanchedalmond: '#FFEBCD',
  blue: '#0000FF',
  blueviolet: '#8A2BE2',
  brown: '#A52A2A',
  burlywood: '#DEB887',
  cadetblue: '#5F9EA0',
  chartreuse: '#7FFF00',
  chocolate: '#D2691E',
  coral: '#FF7F50',
  cornflowerblue: '#6495ED',
  cornsilk: '#FFF8DC',
  crimson: '#DC143C',
  cyan: '#00FFFF',
  darkblue: '#00008B',
  darkcyan: '#008B8B',
  darkgoldenrod: '#B8860B',
  darkgray: '#A9A9A9',
  darkgreen: '#006400',
  darkgrey: '#A9A9A9',
  darkkhaki: '#BDB76B',
  darkmagenta: '#8B008B',
  darkolivegreen: '#556B2F',
  darkorange: '#FF8C00',
  darkorchid: '#9932CC',
  darkred: '#8B0000',
  darksalmon: '#E9967A',
  darkseagreen: '#8FBC8F',
  darkslateblue: '#483D8B',
  darkslategray: '#2F4F4F',
  darkslategrey: '#2F4F4F',
  darkturquoise: '#00CED1',
  darkviolet: '#9400D3',
  deeppink: '#FF1493',
  deepskyblue: '#00BFFF',
  dimgray: '#696969',
  dimgrey: '#696969',
  dodgerblue: '#1E90FF',
  firebrick: '#B22222',
  floralwhite: '#FFFAF0',
  forestgreen: '#228B22',
  fuchsia: '#FF00FF',
  gainsboro: '#DCDCDC',
  ghostwhite: '#F8F8FF',
  gold: '#FFD700',
  goldenrod: '#DAA520',
  gray: '#808080',
  green: '#008000',
  greenyellow: '#ADFF2F',
  grey: '#808080',
  honeydew: '#F0FFF0',
  hotpink: '#FF69B4',
  indianred: '#CD5C5C',
  indigo: '#4B0082',
  ivory: '#FFFFF0',
  khaki: '#F0E68C',
  lavender: '#E6E6FA',
  lavenderblush: '#FFF0F5',
  lawngreen: '#7CFC00',
  lemonchiffon: '#FFFACD',
  lightblue: '#ADD8E6',
  lightcoral: '#F08080',
  lightcyan: '#E0FFFF',
  lightgoldenrodyellow: '#FAFAD2',
  lightgray: '#D3D3D3',
  lightgreen: '#90EE90',
  lightgrey: '#D3D3D3',
  lightpink: '#FFB6C1',
  lightsalmon: '#FFA07A',
  lightseagreen: '#20B2AA',
  lightskyblue: '#87CEFA',
  lightslategray: '#778899',
  lightslategrey: '#778899',
  lightsteelblue: '#B0C4DE',
  lightyellow: '#FFFFE0',
  lime: '#00FF00',
  limegreen: '#32CD32',
  linen: '#FAF0E6',
  magenta: '#FF00FF',
  maroon: '#800000',
  mediumaquamarine: '#66CDAA',
  mediumblue: '#0000CD',
  mediumorchid: '#BA55D3',
  mediumpurple: '#9370DB',
  mediumseagreen: '#3CB371',
  mediumslateblue: '#7B68EE',
  mediumspringgreen: '#00FA9A',
  mediumturquoise: '#48D1CC',
  mediumvioletred: '#C71585',
  midnightblue: '#191970',
  mintcream: '#F5FFFA',
  mistyrose: '#FFE4E1',
  moccasin: '#FFE4B5',
  navajowhite: '#FFDEAD',
  navy: '#000080',
  oldlace: '#FDF5E6',
  olive: '#808000',
  olivedrab: '#6B8E23',
  orange: '#FFA500',
  orangered: '#FF4500',
  orchid: '#DA70D6',
  palegoldenrod: '#EEE8AA',
  palegreen: '#98FB98',
  paleturquoise: '#AFEEEE',
  palevioletred: '#DB7093',
  papayawhip: '#FFEFD5',
  peachpuff: '#FFDAB9',
  peru: '#CD853F',
  pink: '#FFC0CB',
  plum: '#DDA0DD',
  powderblue: '#B0E0E6',
  purple: '#800080',
  rebeccapurple: '#663399',
  red: '#FF0000',
  rosybrown: '#BC8F8F',
  royalblue: '#4169E1',
  saddlebrown: '#8B4513',
  salmon: '#FA8072',
  sandybrown: '#F4A460',
  seagreen: '#2E8B57',
  seashell: '#FFF5EE',
  sienna: '#A0522D',
  silver: '#C0C0C0',
  skyblue: '#87CEEB',
  slateblue: '#6A5ACD',
  slategray: '#708090',
  slategrey: '#708090',
  snow: '#FFFAFA',
  springgreen: '#00FF7F',
  steelblue: '#4682B4',
  tan: '#D2B48C',
  teal: '#008080',
  thistle: '#D8BFD8',
  tomato: '#FF6347',
  turquoise: '#40E0D0',
  violet: '#EE82EE',
  wheat: '#F5DEB3',
  white: '#FFFFFF',
  whitesmoke: '#F5F5F5',
  yellow: '#FFFF00',
  yellowgreen: '#9ACD32',
}

/**
 * Original: setAlpha
 * Sets the alpha value of a color.
 * @param color - The color object.
 * @param alpha - The alpha value.
 * @returns The color with updated alpha.
 */
export function setAlpha(color: Color, alpha: number): Color {
  return {
    ...color,
    a: alpha,
  }
}

/**
 * Original: parseColor
 * Parses a color string or object into a Color object.
 * @param color - The color to parse.
 * @param defaultAlpha - Default alpha value.
 * @returns The parsed Color or null.
 */
export function parseColor(color: string | Color | null | undefined, defaultAlpha: number = 1): Color | null {
  if (!color)
    return null
  if (typeof color !== 'string')
    return color

  const hasAlpha: boolean = defaultAlpha != null
  const alpha: number = defaultAlpha ?? 1

  return (
    parseDisplayP3Color(color, alpha)
    || parseNamedColor(color, alpha)
    || parseColorFormat(color, alpha)
    || parseHex(color, hasAlpha, alpha)
    || null
  )
}

/**
 * Original: parseDisplayP3Color
 * Parses a display-p3 color string.
 * @param color - The color string.
 * @param alpha - The alpha value.
 * @returns The parsed Color or null.
 */
function parseDisplayP3Color(color: string, alpha: number): Color | null {
  const match: RegExpMatchArray | null = color.match(/color\(\s*display-p3\s*(?<red>[-+]?(?:\d+(?:\.\d+)?|\.\d+))\s+(?<green>[-+]?(?:\d+(?:\.\d+)?|\.\d+))\s+(?<blue>[-+]?(?:\d+(?:\.\d+)?|\.\d+))\s*(?:\/\s*(?<alpha>[-+]?(?:\d+(?:\.\d+)?|\.\d+)%?)\s*)?\)/)

  if (match && match.groups && 'red' in match.groups && 'green' in match.groups && 'blue' in match.groups) {
    const { red, green, blue, alpha: parsedAlpha } = match.groups
    return {
      r: parseFloat(red),
      g: parseFloat(green),
      b: parseFloat(blue),
      a: parsedAlpha ? parseFloat(parsedAlpha) : alpha,
    }
  }

  return null
}

/**
 * Original: parseHex
 * Parses a hex color string.
 * @param color - The hex color string.
 * @param hasAlpha - Whether alpha is expected.
 * @param defaultAlpha - Default alpha value.
 * @returns The parsed Color or null.
 */
export function parseHex(color: string, hasAlpha: boolean = false, defaultAlpha: number = 1): Color | null {
  const match: RegExpExecArray | null = /[^0-9a-f]*([0-9a-f]*)/i.exec(color.trim())
  if (!match)
    return null

  const hex: string = match[1]

  if (hex.length >= 8 && hasAlpha) {
    return createRGBAColor(
      parseHexComponent(hex.substring(0, 2)),
      parseHexComponent(hex.substring(2, 4)),
      parseHexComponent(hex.substring(4, 6)),
      parseHexComponent(hex.substring(6, 8)),
    )
  }

  if (hex.length === 7 && hasAlpha) {
    return createRGBAColor(
      parseHexComponent(hex.substring(0, 2)),
      parseHexComponent(hex.substring(2, 4)),
      parseHexComponent(hex.substring(4, 6)),
      parseSingleHexComponent(hex[6]),
    )
  }

  if (hex.length >= 6) {
    return createRGBAColor(
      parseHexComponent(hex.substring(0, 2)),
      parseHexComponent(hex.substring(2, 4)),
      parseHexComponent(hex.substring(4, 6)),
      defaultAlpha,
    )
  }

  if (hex.length === 5 && hasAlpha) {
    return createRGBAColor(
      parseSingleHexComponent(hex[0]),
      parseSingleHexComponent(hex[1]),
      parseSingleHexComponent(hex[2]),
      parseHexComponent(hex.substring(3, 5)),
    )
  }

  if (hex.length === 4 && hasAlpha) {
    return createRGBAColor(
      parseSingleHexComponent(hex[0]),
      parseSingleHexComponent(hex[1]),
      parseSingleHexComponent(hex[2]),
      parseSingleHexComponent(hex[3]),
    )
  }

  if (hex.length >= 3) {
    return createRGBAColor(
      parseSingleHexComponent(hex[0]),
      parseSingleHexComponent(hex[1]),
      parseSingleHexComponent(hex[2]),
      defaultAlpha,
    )
  }

  if (hex.length === 2) {
    const component: number = parseHexComponent(hex)
    return createRGBAColor(component, component, component, defaultAlpha)
  }

  if (hex.length === 1) {
    const component: number = parseSingleHexComponent(hex)
    return createRGBAColor(component, component, component, defaultAlpha)
  }

  return null
}

/**
 * Original: parseHexComponent
 * Parses a hex component.
 * @param hex - The hex string.
 * @returns The parsed value.
 */
function parseHexComponent(hex: string): number {
  return clampValue(parseInt(hex, 16) / 255)
}

/**
 * Original: parseSingleHexComponent
 * Parses a single hex component.
 * @param char - The hex character.
 * @returns The parsed value.
 */
function parseSingleHexComponent(char: string): number {
  return parseHexComponent(`${char}${char}`)
}

/**
 * Original: parseColorFormat
 * Parses various color formats.
 * @param color - The color string.
 * @param defaultAlpha - Default alpha value.
 * @returns The parsed Color or null.
 */
export function parseColorFormat(color: string, defaultAlpha: number = 1): Color | null {
  const trimmedColor: string = color.trim()

  let match: RegExpExecArray | null = RGB_PERCENT_REGEX.exec(trimmedColor)
  if (match) {
    return createRGBAColor(
      parsePercentage(match[1]),
      parsePercentage(match[2]),
      parsePercentage(match[3]),
      match[4] ? parseAlphaValue(match[4]) : defaultAlpha,
    )
  }

  match = RGB_NUMERIC_REGEX.exec(trimmedColor)
  if (match) {
    return createRGBAColor(
      parseNumericColorComponent(match[1]),
      parseNumericColorComponent(match[2]),
      parseNumericColorComponent(match[3]),
      match[4] ? parseAlphaValue(match[4]) : defaultAlpha,
    )
  }

  match = HSL_REGEX.exec(trimmedColor)
  if (match) {
    return hslToRgb(
      parseHue(match[1]),
      parsePercentage(match[2]),
      parsePercentage(match[3]),
      match[4] ? parseAlphaValue(match[4]) : defaultAlpha,
    )
  }

  match = LAB_REGEX.exec(trimmedColor)
  if (match) {
    return labToRgbFunction(
      parsePercentage(match[1]),
      parseFloat(match[2]),
      parseFloat(match[3]),
      match[4] ? parseAlphaValue(match[4]) : defaultAlpha,
    )
  }

  match = OKLCH_REGEX.exec(trimmedColor)
  if (match) {
    return labToRgb({
      l: parsePercentageWithUnit(match[1], 0.01),
      c: parsePercentageWithUnit(match[2], 0.004),
      h: parseHue(match[3]),
      a: match[4] ? parseAlphaValue(match[4]) : defaultAlpha,
    })
  }

  match = OKLAB_REGEX.exec(trimmedColor)
  if (match) {
    return labToXyz({
      l: parsePercentageWithUnit(match[1], 0.01),
      ax: parsePercentageWithUnit(match[2], 0.01),
      bx: parseFloat(match[3]),
      a: match[4] ? parseAlphaValue(match[4]) : defaultAlpha,
    })
  }

  return null
}

/**
 * Original: parseNumericColorComponent
 * Parses a numeric color component.
 * @param value - The value string.
 * @returns The parsed value.
 */
function parseNumericColorComponent(value: string): number {
  return clampValue(parseFloat(value) / 255)
}

/**
 * Original: parsePercentage
 * Parses a percentage value.
 * @param percentage - The percentage string.
 * @returns The parsed value.
 */
function parsePercentage(percentage: string): number {
  return clampValue(0.01 * parseFloat(percentage))
}

/**
 * Original: parseAlphaValue
 * Parses an alpha value.
 * @param alpha - The alpha string.
 * @returns The parsed alpha.
 */
function parseAlphaValue(alpha: string): number {
  if (!alpha)
    return 1
  return alpha.includes('%') ? parsePercentage(alpha) : clampValue(parseFloat(alpha))
}

/**
 * Original: parseHue
 * Parses a hue value.
 * @param hue - The hue string.
 * @returns The parsed hue.
 */
function parseHue(hue: string): number {
  const value: number = parseFloat(hue)
  let degrees: number = 0

  if (hue.includes('grad')) {
    degrees = 0.9 * value
  }
  else if (hue.includes('rad')) {
    degrees = 180 * value / Math.PI
  }
  else if (hue.includes('turn')) {
    degrees = 360 * value
  }
  else {
    degrees = value
  }

  return positiveMod(degrees, 360) / 360
}

/**
 * Original: parsePercentageWithUnit
 * Parses a percentage with unit.
 * @param value - The value string.
 * @param multiplier - The multiplier.
 * @returns The parsed value.
 */
function parsePercentageWithUnit(value: string, multiplier: number): number {
  return value.endsWith('%')
    ? clampValue(parseFloat(value) * multiplier)
    : parseFloat(value)
}

/**
 * Original: hslToRgb
 * Converts HSL to RGB.
 * @param hue - Hue value.
 * @param saturation - Saturation value.
 * @param lightness - Lightness value.
 * @param alpha - Alpha value.
 * @returns The Color.
 */
function hslToRgb(hue: number, saturation: number, lightness: number, alpha: number): Color {
  if (saturation === 0) {
    return createRGBAColor(lightness, lightness, lightness, alpha)
  }

  const q: number = lightness < 0.5
    ? lightness * (1 + saturation)
    : lightness + saturation - lightness * saturation

  const p: number = 2 * lightness - q
  const rgb: number[] = [0, 0, 0]

  for (let i: number = 0; i < 3; i++) {
    let t: number = hue + (1 / 3) * -(i - 1)

    if (t < 0)
      t += 1
    if (t > 1)
      t -= 1

    if (t * 6 < 1) {
      rgb[i] = p + (q - p) * 6 * t
    }
    else if (t * 2 < 1) {
      rgb[i] = q
    }
    else if (t * 3 < 2) {
      rgb[i] = p + (q - p) * ((2 / 3) - t) * 6
    }
    else {
      rgb[i] = p
    }
  }

  return createRGBAColor(rgb[0], rgb[1], rgb[2], alpha)
}

/**
 * Original: labToRgbFunction
 * Converts LAB to RGB.
 * @param l - L value.
 * @param a - A value.
 * @param b - B value.
 * @param alpha - Alpha value.
 * @returns The Color.
 */
function labToRgbFunction(l: number, a: number, b: number, alpha: number): Color {
  const y: number = (100 * l + 16) / 116
  const x: number = a / 500 + y
  const z: number = y - b / 200

  const transform = (value: number): number => {
    const cubed: number = value ** 3
    return cubed > LAB_EPSILON ? cubed : (value - 16 / 116) / 7.787
  }

  const transformedY: number = transform(y)
  const transformedX: number = 95.047 * transform(x) / 100
  const transformedZ: number = 108.883 * transform(z) / 100

  const gammaCorrect = (value: number): number =>
    value > 0.0031308
      ? 1.055 * (value ** (1 / 2.4)) - 0.055
      : 12.92 * value

  const r: number = gammaCorrect(3.2404542 * transformedX + -1.5371385 * transformedY + -0.4985314 * transformedZ)
  const g: number = gammaCorrect(-0.969266 * transformedX + 1.8760108 * transformedY + 0.041556 * transformedZ)
  const bValue: number = gammaCorrect(0.0556434 * transformedX + -0.2040259 * transformedY + 1.0572252 * transformedZ)

  return createRGBAColor(
    clampValue(r),
    clampValue(g),
    clampValue(bValue),
    alpha,
  )
}

/**
 * Original: calculateColorDifference
 * Calculates the color difference using Delta E.
 * @param color1 - First color.
 * @param color2 - Second color.
 * @returns The difference value.
 */
export function calculateColorDifference(color1: Color, color2: Color): number {
  return calculateDeltaE(rgbToLab(color1), rgbToLab(color2)) / 0.002741735
}

/**
 * Original: rgbToLab
 * Converts RGB to LAB.
 * @param color - The color.
 * @returns The LAB object.
 */
function rgbToLab(color: Color): { l: number; a: number; b: number } {
  let r: number = 1 - (1 - color.r) * color.a
  let g: number = 1 - (1 - color.g) * color.a
  let b: number = 1 - (1 - color.b) * color.a

  r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92
  g = g > 0.04045 ? ((g + 0.055) / 1.055) ** 2.4 : g / 12.92
  b = b > 0.04045 ? ((b + 0.055) / 1.055) ** 2.4 : b / 12.92

  let x: number = (0.4124 * r + 0.3576 * g + 0.1805 * b) / 0.95047
  let y: number = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 1
  let z: number = (0.0193 * r + 0.1192 * g + 0.9505 * b) / 1.08883

  x = x > 0.008856 ? x ** (1 / 3) : 7.787 * x + 16 / 116
  y = y > 0.008856 ? y ** (1 / 3) : 7.787 * y + 16 / 116
  z = z > 0.008856 ? z ** (1 / 3) : 7.787 * z + 16 / 116

  return {
    l: 116 * y - 16,
    a: 500 * (x - y),
    b: 200 * (y - z),
  }
}

/**
 * Original: calculateDeltaE
 * Calculates Delta E between two LAB colors.
 * @param lab1 - First LAB.
 * @param lab2 - Second LAB.
 * @returns The Delta E value.
 */
function calculateDeltaE(lab1: { l: number; a: number; b: number }, lab2: { l: number; a: number; b: number }): number {
  const deltaL: number = lab1.l - lab2.l
  const deltaA: number = lab1.a - lab2.a
  const deltaB: number = lab1.b - lab2.b

  const c1: number = Math.sqrt(lab1.a * lab1.a + lab1.b * lab1.b)
  const c2: number = Math.sqrt(lab2.a * lab2.a + lab2.b * lab2.b)
  const deltaC: number = c1 - c2

  let deltaH: number = deltaA * deltaA + deltaB * deltaB - deltaC * deltaC
  deltaH = deltaH < 0 ? 0 : Math.sqrt(deltaH)

  const lBar: number = deltaL
  const cBar: number = deltaC / (1 + 0.045 * c1)
  const hBar: number = deltaH / (1 + 0.015 * c1)

  const result: number = lBar * lBar + cBar * cBar + hBar * hBar
  return result < 0 ? 0 : Math.sqrt(result)
}

/**
 * Original: parseNamedColor
 * Parses a named color.
 * @param color - The color name.
 * @param alpha - The alpha value.
 * @returns The parsed Color or null.
 */
export function parseNamedColor(color: string, alpha: number = 1): Color | null {
  const hexColor: string | undefined = namedColors[color.toLowerCase()]
  return hexColor ? parseHex(hexColor, false, alpha) : null
}

/**
 * Original: isColorDark
 * Checks if a color is dark.
 * @param color - The color.
 * @param threshold - The threshold.
 * @returns True if dark.
 */
export function isColorDark(color: string | Color, threshold: number = 0.627): boolean {
  const parsedColor: Color | null = parseColor(color)
  return !!parsedColor && getColorBrightness(parsedColor) < threshold
}

/**
 * Original: isColorTransparent
 * Checks if a color is transparent.
 * @param color - The color.
 * @returns True if transparent.
 */
export function isColorTransparent(color: string | Color | null | undefined): boolean {
  if (!color)
    return true
  const parsedColor: Color | null = parseColor(color)
  return !parsedColor || parsedColor?.a === 0
}

/**
 * Original: getTextColorForBackground
 * Gets the text color for a background.
 * @param backgroundColor - The background color.
 * @returns The text color.
 */
export function getTextColorForBackground(backgroundColor: string | Color): string {
  return isColorDark(backgroundColor) ? textOnDarkCanvas : textOnLightCanvas
}

/**
 * Original: getSecondaryTextColorForBackground
 * Gets the secondary text color for a background.
 * @param backgroundColor - The background color.
 * @returns The secondary text color.
 */
export function getSecondaryTextColorForBackground(backgroundColor: string | Color): string {
  return isColorDark(backgroundColor)
    ? 'var(--color-textondarkcanvassecondary, rgba(255,255,255,0.6))'
    : 'var(--color-textonlightcanvassecondary, rgba(0,0,0,0.6))'
}

/**
 * Original: getBorderStyle
 * Gets the border style for colors.
 * @param backgroundColor - Background color.
 * @param foregroundColor - Foreground color.
 * @param theme - Theme.
 * @returns The border style.
 */
export function getBorderStyle(backgroundColor: string | Color, foregroundColor: string | Color, theme?: string): string | undefined {
  const bgParsed: Color | null = parseColor(backgroundColor)
  const fgParsed: Color | null = parseColor(foregroundColor)

  if (!bgParsed || !fgParsed)
    return undefined

  const mixedColor: Color = blendColors(bgParsed, fgParsed)
  const bgBrightness: number = getColorBrightness(bgParsed)
  const mixedBrightness: number = getColorBrightness(mixedColor)

  if (theme) {
    const fgBrightness: number = getColorBrightness(fgParsed)
    if ((theme === 'light' && fgBrightness > 0.9) || (theme === 'dark' && fgBrightness < 0.25)) {
      return borderTranslucent
    }
    return undefined
  }

  if (bgBrightness < 0.2 && mixedBrightness < bgBrightness + 0.1) {
    return borderLight
  }

  if (bgBrightness > 0.8 && Math.abs(mixedBrightness - bgBrightness) < 0.1) {
    return borderDark
  }

  return undefined
}

/**
 * Original: blendGradientColors
 * Blends gradient colors.
 * @param colorStops - The color stops.
 * @returns The blended color.
 */
export function blendGradientColors(colorStops: any[] = []): Color | undefined {
  const isValid = (color: any): boolean => color != null

  const colors: Color[] = colorStops
    .map((stop: any): Color | undefined => {
      if (stop.type === 'SOLID')
        return stop.color
      const stopColors: Color[] = (stop.stops ?? [])
        .map((s: any): Color | undefined => s.color)
        .filter(isValid)
      return stopColors.length ? blendColors(...stopColors) : undefined
    })
    .filter(isValid) as Color[]

  return colors.length ? blendColors(...colors) : undefined
}

/**
 * Original: blendColors
 * Blends multiple colors.
 * @param colors - The colors to blend.
 * @returns The blended color.
 */
export function blendColors(...colors: Color[]): Color {
  return colors.reduceRight((background: Color, foreground: Color): Color => {
    const fgAlpha: number = foreground.a
    const bgAlpha: number = background.a
    const alphaMultiplier: number = fgAlpha * (1 - bgAlpha)
    const finalAlpha: number = alphaMultiplier + bgAlpha

    if (finalAlpha === 0) {
      return { r: 0, g: 0, b: 0, a: 0 }
    }

    const fgWeight: number = alphaMultiplier / finalAlpha
    const bgWeight: number = bgAlpha / finalAlpha

    return {
      r: foreground.r * fgWeight + background.r * bgWeight,
      g: foreground.g * fgWeight + background.g * bgWeight,
      b: foreground.b * fgWeight + background.b * bgWeight,
      a: finalAlpha,
    }
  })
}

/**
 * Original: createRGBAColor
 * Creates an RGBA color.
 * @param r - Red.
 * @param g - Green.
 * @param b - Blue.
 * @param a - Alpha.
 * @returns The Color.
 */
function createRGBAColor(r: number, g: number, b: number, a: number = 1): Color | null {
  if (isNaN(r) || isNaN(g) || isNaN(b) || isNaN(a)) {
    return null
  }

  return { r, g, b, a }
}

/**
 * Original: colorToIntegerValues
 * Converts color to integer values.
 * @param color - The color.
 * @returns The integer values.
 */
function colorToIntegerValues(color: Color): { r: number; g: number; b: number; a: number } {
  return {
    r: Math.round(255 * color.r),
    g: Math.round(255 * color.g),
    b: Math.round(255 * color.b),
    a: Math.round(255 * color.a),
  }
}

/**
 * Original: colorToRgbaString
 * Converts color to RGBA string.
 * @param color - The color.
 * @returns The RGBA string.
 */
export function colorToRgbaString(color: Color): string {
  const { r, g, b }: { r: number; g: number; b: number } = colorToIntegerValues(color)
  return `rgba(${r}, ${g}, ${b}, ${color.a})`
}

/**
 * Original: colorToHexString
 * Converts color to hex string.
 * @param color - The color.
 * @returns The hex string.
 */
export function colorToHexString(color: Color): string {
  const { r, g, b, a }: { r: number; g: number; b: number; a: number } = colorToIntegerValues(color)

  const red: number = clampValue(r, 0, 255)
  const green: number = clampValue(g, 0, 255)
  const blue: number = clampValue(b, 0, 255)
  const alpha: number = clampValue(a, 0, 255)

  const redHex: string = red.toString(16).padStart(2, '0')
  const greenHex: string = green.toString(16).padStart(2, '0')
  const blueHex: string = blue.toString(16).padStart(2, '0')
  const alphaHex: string = alpha.toString(16).padStart(2, '0')

  return alpha === 255
    ? `#${redHex}${greenHex}${blueHex}`
    : `#${redHex}${greenHex}${blueHex}${alphaHex}`
}

/**
 * Original: getThemeBackgroundColor
 * Gets the theme background color.
 * @param theme - The theme.
 * @returns The background color.
 */
export function getThemeBackgroundColor(theme: string): string {
  switch (theme) {
    case 'legacy':
      return '#e5e5e5'
    case 'dark':
      return '#1e1e1e'
    case 'light':
    default:
      return '#f5f5f5'
  }
}

/**
 * Original: getColorBrightness
 * Gets the brightness of a color.
 * @param color - The color.
 * @returns The brightness.
 */
export function getColorBrightness(color: Color): number {
  return 0.299 * color.r + 0.587 * color.g + 0.114 * color.b
}

/**
 * Original: clampValue
 * Clamps a value.
 * @param value - The value.
 * @param min - Min value.
 * @param max - Max value.
 * @returns The clamped value.
 */
function clampValue(value: number, min: number = 0, max: number = 1): number {
  return clamp(value, min, max)
}

/**
 * Original: isValidColor
 * Checks if a color is valid.
 * @param color - The color.
 * @returns True if valid.
 */
export function isValidColor(color: Color): boolean {
  return (
    color
    && !isNaN(color.r)
    && !isNaN(color.g)
    && !isNaN(color.b)
    && color.r >= 0
    && color.r <= 1
    && color.g >= 0
    && color.g <= 1
    && color.b >= 0
    && color.b <= 1
  )
}

/**
 * Original: areColorsEqual
 * Checks if two colors are equal.
 * @param color1 - First color.
 * @param color2 - Second color.
 * @returns True if equal.
 */
export function areColorsEqual(color1: Color, color2: Color): boolean {
  const { r: r1, g: g1, b: b1, a: a1 }: Color = color1
  const { r: r2, g: g2, b: b2, a: a2 }: Color = color2

  return (
    nearlyEqual(r1, r2)
    && nearlyEqual(g1, g2)
    && nearlyEqual(b1, b2)
    && nearlyEqual(a1, a2)
  )
}

/**
 * Original: areColorArraysEqual
 * Checks if two color arrays are equal.
 * @param colors1 - First array.
 * @param colors2 - Second array.
 * @returns True if equal.
 */
export function areColorArraysEqual(colors1: Color[] | null | undefined, colors2: Color[] | null | undefined): boolean {
  return (
    !!colors1
    && !!colors2
    && colors1.length === colors2.length
    && colors1.every((color: Color, index: number): boolean => areColorsEqual(color, colors2[index]))
  )
}

/**
 * Original: isColorDarkByLuminance
 * Checks if color is dark by luminance.
 * @param color - The color.
 * @returns True if dark.
 */
export function isColorDarkByLuminance(color: string | Color): boolean {
  const parsedColor: Color | null = parseColor(color)
  return !!parsedColor && (0.2126 * parsedColor.r + 0.7152 * parsedColor.g + 0.0722 * parsedColor.b) < 0.6
}

export const $K = areColorArraysEqual
export const $q = namedColors
export const AW = blendGradientColors
export const Bx = getThemeBackgroundColor
export const DA = areColorsEqual
export const En = getDarkerShade
export const FN = whiteColor
export const FO = borderDark
export const F_ = colorToHexString
export const G$ = getSecondaryTextColorForBackground
export const GL = getTextColorForBackground
export const H0 = parseColor
export const HD = isColorDark
export const J1 = getColorBrightness
export const UE = whiteColor
export const Uv = blackColor
export const X9 = setAlpha
export const YN = textOnLightCanvas
export const YR = isValidColor
export const YU = colorToRgbaString
export const _W = calculateColorDifference
export const di = parseNamedColor
export const e3 = textOnDarkCanvas
export const kx = isColorDarkByLuminance
export const mx = parseColorFormat
export const ol = multiplayerColors
export const ql = getBorderStyle
export const sN = blendColors
export const tK = parseHex
export const tM = borderLight
export const ty = isColorTransparent
export const x1 = borderTranslucent

