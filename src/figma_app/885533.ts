/**
 * Represents a color in RGBA format
 * Original variable names: $$n0, o
 */
export interface RGBAColor {
  r: number // Red component (0-255)
  g: number // Green component (0-255)
  b: number // Blue component (0-255)
  a: number // Alpha component (0-255)
}

/**
 * Default transparent black color
 * Original variable: $$n0
 */
export const transparentBlack: RGBAColor = {
  r: 0,
  g: 0,
  b: 0,
  a: 255,
}

/**
 * Alias for default color
 * Original variable: o
 */
export const o = transparentBlack
