// Refactored code for color manipulation utilities
// Original file: /Users/allen/sigma-main/src/figma_app/273493.ts
// Grouped into logical sections: Color space conversions (HSL, HSV, RGB), utilities, and LAB conversions.

/**
 * Type definitions for color objects
 */
export interface RgbColor {
  r: number
  g: number
  b: number
  a: number
}

interface HslColor {
  h: number
  s: number
  l: number
  a: number
}

interface HsvColor {
  h: number
  s: number
  v: number
  a: number
}

interface LabColor {
  l: number
  ax: number
  bx: number
  a: number
}

interface NormalizedRgbColor {
  red: number
  green: number
  blue: number
  alpha: number
}

// HSL and HSV conversions

/**
 * Converts HSL color to RGB.
 * Original function: $$n3
 * @param hsl - HSL color object
 * @returns RGB color object
 */
export function hslToRgb(hsl: HslColor): RgbColor {
  if (hsl.s === 0) {
    return { r: hsl.l, g: hsl.l, b: hsl.l, a: hsl.a }
  }
  const t = hsl.l < 0.5 ? hsl.l * (1 + hsl.s) : hsl.l + hsl.s - hsl.l * hsl.s
  const r = 2 * hsl.l - t
  const n: number[] = [0, 0, 0]
  for (let i = 0; i < 3; i++) {
    let a = hsl.h + -(1 / 3) * (i - 1)
    if (a < 0)
      a++
    if (a > 1)
      a--
    if (6 * a < 1)
      n[i] = r + (t - r) * 6 * a
    else if (2 * a < 1)
      n[i] = t
    else if (3 * a < 2)
      n[i] = r + (t - r) * (2 / 3 - a) * 6
    else n[i] = r
  }
  return { r: n[0], g: n[1], b: n[2], a: hsl.a }
}

/**
 * Converts RGB color to HSL.
 * Original function: $$i11
 * @param rgb - RGB color object
 * @returns HSL color object
 */
export function rgbToHsl(rgb: RgbColor): HslColor {
  const t = rgb.r
  const r = rgb.g
  const n = rgb.b
  const i = Math.min(Math.min(t, r), n)
  const a = Math.max(Math.max(t, r), n)
  const s = a - i
  let o = 0
  if (a === i)
    o = 0
  else if (t === a)
    o = (r - n) / s
  else if (r === a)
    o = 2 + (n - t) / s
  else if (n === a)
    o = 4 + (t - r) / s
  o = Math.min(60 * o, 360)
  if (o < 0)
    o += 360
  const l = (i + a) / 2
  return {
    h: o / 360,
    s: a === i ? 0 : l <= 0.5 ? s / (a + i) : s / (2 - a - i),
    l,
    a: rgb.a,
  }
}

/**
 * Converts HSV color to RGB.
 * Original function: $$a10
 * @param hsv - HSV color object
 * @returns RGB color object
 */
export function hsvToRgb(hsv: HsvColor): RgbColor {
  const t = (hsv.h - Math.floor(hsv.h)) * 6
  const r = hsv.v * hsv.s
  const n = r * (1 - Math.abs((t % 2) - 1))
  const i = hsv.s <= 0 ? 0 : t < 1 ? r : t < 2 ? n : t < 3 ? 0 : t < 4 ? 0 : t < 5 ? n : r
  const a = hsv.s <= 0 ? 0 : t < 1 ? n : t < 2 ? r : t < 3 ? r : t < 4 ? n : 0
  const s = hsv.s <= 0 ? 0 : t < 1 ? 0 : t < 2 ? 0 : t < 3 ? n : t < 4 ? r : t < 5 ? r : n
  const o = hsv.v - r
  return { r: i + o, g: a + o, b: s + o, a: hsv.a }
}

/**
 * Converts RGB color to HSV.
 * Original function: $$s14
 * @param rgb - RGB color object
 * @returns HSV color object
 */
export function rgbToHsv(rgb: RgbColor): HsvColor {
  const t = Math.max(Math.max(rgb.r, rgb.g), rgb.b)
  const r = t - Math.min(Math.min(rgb.r, rgb.g), rgb.b)
  return {
    h: r === 0 ? 0 : t === rgb.r ? ((rgb.g - rgb.b) / r + 6) % 6 : t === rgb.g ? (rgb.b - rgb.r) / r + 2 : (rgb.r - rgb.g) / r + 4 / 6,
    s: t === 0 ? 0 : r / t,
    v: t,
    a: rgb.a,
  }
}

/**
 * Converts color to RGB, choosing HSL or HSV based on presence of 'l'.
 * Original function: $$o15
 * @param color - HSL or HSV color object
 * @returns RGB color object
 */
export function colorToRgb(color: HslColor | HsvColor): RgbColor {
  return 'l' in color ? hslToRgb(color) : hsvToRgb(color)
}

/**
 * Desaturates color to grayscale.
 * Original function: $$l2
 * @param color - HSL or HSV color object
 * @returns Desaturated color object
 */
export function desaturateColor(color: HslColor | HsvColor): HslColor | HsvColor {
  if ('l' in color) {
    return { ...color, s: 1, l: 0.5, a: 1 }
  }
  return { ...color, s: 1, v: 1, a: 1 }
}

/**
 * Adjusts hue of HSL color by degrees.
 * Original function: $$d0
 * @param rgb - RGB color object
 * @param degrees - Degrees to adjust hue
 * @returns Adjusted RGB color object
 */
export function adjustHue(rgb: RgbColor, degrees: number): RgbColor {
  const hsl = rgbToHsl(rgb)
  const adjustedH = (360 * hsl.h + degrees) % 360 / 360
  return hslToRgb({ ...hsl, h: adjustedH })
}

// Utility functions

/**
 * Clamps value to 0-255 and converts to integer.
 * Original function: c (internal)
 * @param value - Float value
 * @returns Clamped integer
 */
const clampToByte = (value: number): number => Math.max(0, Math.min(255, Math.round(value * 255)))

/**
 * Packs RGBA into 32-bit integer.
 * Original function: u (internal)
 * @param r - Red
 * @param g - Green
 * @param b - Blue
 * @param a - Alpha
 * @returns Packed integer
 */
function packRgba(r: number, g: number, b: number, a: number): number {
  return clampToByte(r) | (clampToByte(g) << 8) | (clampToByte(b) << 16) | (clampToByte(a) << 24)
}

/**
 * Packs RGB into 32-bit integer with alpha 255.
 * Original function: $$p4
 * @param r - Red
 * @param g - Green
 * @param b - Blue
 * @returns Packed integer
 */
export function packRgb(r: number, g: number, b: number): number {
  return clampToByte(r) | (clampToByte(g) << 8) | (clampToByte(b) << 16) | -0x1000000
}

/**
 * Packs normalized RGB into 32-bit integer.
 * Original function: $$_9
 * @param color - Normalized RGB color
 * @returns Packed integer
 */
export function packNormalizedRgb(color: NormalizedRgbColor): number {
  return clampToByte(color.red) | (clampToByte(color.green) << 8) | (clampToByte(color.blue) << 16) | (clampToByte(color.alpha) << 24)
}

/**
 * Unpacks 32-bit integer to normalized RGB.
 * Original function: $$h5
 * @param packed - Packed integer
 * @returns Normalized RGB color
 */
export function unpackToNormalizedRgb(packed: number): NormalizedRgbColor {
  return {
    red: (packed & 255) / 255,
    green: ((packed >> 8) & 255) / 255,
    blue: ((packed >> 16) & 255) / 255,
    alpha: ((packed >> 24) & 255) / 255,
  }
}

/**
 * Blends two normalized RGB colors.
 * Original function: $$m8
 * @param base - Base color
 * @param overlay - Overlay color
 * @returns Blended color
 */
export function blendColors(base: NormalizedRgbColor, overlay: NormalizedRgbColor): NormalizedRgbColor {
  const r = base.alpha
  const n = overlay.alpha
  const i = r * (1 - n)
  const a = i + n
  const s = i / a
  const o = n / a
  return {
    red: base.red * s + overlay.red * o,
    green: base.green * s + overlay.green * o,
    blue: base.blue * s + overlay.blue * o,
    alpha: a,
  }
}

/**
 * Checks if two RGB colors are equal.
 * Original function: $$g6
 * @param c1 - First RGB color
 * @param c2 - Second RGB color
 * @returns True if equal
 */
export function colorsEqual(c1: RgbColor, c2: RgbColor): boolean {
  return !!c1 && !!c2 && packRgba(c1.r, c1.g, c1.b, c1.a) === packRgba(c2.r, c2.g, c2.b, c2.a)
}

/**
 * Converts RGB to normalized RGB.
 * Original function: $$f12
 * @param rgb - RGB color
 * @returns Normalized RGB color
 */
export function rgbToNormalized(rgb: RgbColor): NormalizedRgbColor {
  return { red: rgb.r, green: rgb.g, blue: rgb.b, alpha: rgb.a }
}

/**
 * Converts normalized RGB to RGB.
 * Original function: $$E7
 * @param normalized - Normalized RGB color
 * @returns RGB color
 */
export function normalizedToRgb(normalized: NormalizedRgbColor): RgbColor {
  return { r: normalized.red, g: normalized.green, b: normalized.blue, a: normalized.alpha }
}

// LAB conversions

/**
 * Matrix multiplication helper.
 * Original function: y (internal)
 * @param matrix - 3x3 matrix
 * @param vector - 3-element vector
 * @returns Result vector
 */
function matrixMultiply(matrix: number[][], vector: number[]): number[] {
  return matrix.map(row => row.reduce((sum, val, i) => sum + val * vector[i], 0))
}

/**
 * Converts LAB color to RGB.
 * Original function: $$b1
 * @param lab - LAB color object
 * @returns RGB color object
 */
export function labToRgb(e: any): RgbColor {
  return (labToXyz({
    l: e.l,
    ax: e.c * Math.cos(360 * e.h * Math.PI / 180),
    bx: e.c * Math.sin(360 * e.h * Math.PI / 180),
    a: e.a,
  }))
}

/**
 * Converts LAB to XYZ.
 * Original function: $$T13
 * @param lab - LAB color object
 * @returns RGB color object (via XYZ intermediate)
 */
export function labToXyz(lab: LabColor): RgbColor {
  const t = matrixMultiply([
    [0.9999999984505198, 0.39633779217376786, 0.2158037580607588],
    [1.000000008881761, -0.10556134232365635, -0.0638541747717059],
    [1.000000054672411, -0.0894841820949658, -1.2914855378640917],
  ], [lab.l, lab.ax, lab.bx])
  const r = matrixMultiply([
    [1.2268798733741557, -0.5578149965554813, 0.28139105017721583],
    [-0.04057576262431372, 1.1122868293970594, -0.07171106666151701],
    [-0.07637294974672142, -0.4214933239627914, 1.5869240244272418],
  ], t.map(e => e ** 3))
  const n = matrixMultiply([
    [12831 / 3959, -329 / 214, -1974 / 3959],
    [-851781 / 878810, 1648619 / 878810, 36519 / 878810],
    [705 / 12673, -2585 / 12673, 705 / 667],
  ], r).map((e) => {
    const t = Math.abs(e)
    return t > 0.0031308 ? (e < 0 ? -1 : 1) * (1.055 * t ** (1 / 2.4) - 0.055) : 12.92 * e
  })
  return { r: n[0], g: n[1], b: n[2], a: lab.a }
}

/**
 * Placeholder for XYZ to RGB conversion (assuming it's part of labToXyz).
 * Original function: $$T13 (integrated)
 */
export function xyzToRgb(xyz: RgbColor): RgbColor {
  // In this refactored code, labToXyz already returns RGB equivalent.
  return xyz
}

// Exports (updated to match refactored function names)
export const Ad = adjustHue
export const I0 = labToRgb
export const Ih = desaturateColor
export const In = hslToRgb
export const QR = packRgb
export const R0 = unpackToNormalizedRgb
export const Vm = colorsEqual
export const aH = normalizedToRgb
export const au = blendColors
export const bi = packNormalizedRgb
export const kE = hsvToRgb
export const oB = rgbToHsl
export const oU = rgbToNormalized
export const oq = labToXyz
export const qN = rgbToHsv
export const w_ = colorToRgb
