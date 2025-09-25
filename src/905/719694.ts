// Original file: /Users/allen/sigma-main/src/905/719694.ts

// Define types for better type safety
interface Color {
  r: number
  g: number
  b: number
  a: number
}

interface ShadowOptions {
  x?: number
  y?: number
  blur?: number
  spread?: number
  blendMode?: string
}

interface Shadow {
  type: string
  color: Color
  blendMode: string
  offset: { x: number, y: number }
  blur: number
  spread: number
  visible: boolean
}

interface GradientStop {
  position: number
  color: Color
}



interface RadialGradientOptions {
  center?: { x: number, y: number }
  width?: number
  height?: number
}

interface AngularGradientOptions {
  angle?: number
  center?: { x: number, y: number }
}

// Color utility functions
/**
 * Rounds a number to a specified number of decimal places.
 * Original function: i
 * @param value - The number to round.
 * @param decimals - The number of decimal places (default: 3).
 * @returns The rounded number or undefined if value is undefined.
 */
function round(value: number | undefined, decimals: number = 3): number | undefined {
  if (value === undefined)
    return undefined
  const factor = 10 ** decimals
  return Math.round(value * factor) / factor
}

/**
 * Converts a hex color string to an RGB object.
 * Original function: n
 * @param hex - The hex color string (e.g., #RGB, #RGBA, #RRGGBB, #RRGGBBAA).
 * @returns The RGB color object.
 */
export function hexToRgb(hex: string): Color {
  if (hex.length === 4) { // #RGB
    return {
      r: round(parseInt(hex.slice(1, 2), 16) / 15)!,
      g: round(parseInt(hex.slice(2, 3), 16) / 15)!,
      b: round(parseInt(hex.slice(3, 4), 16) / 15)!,
      a: 1,
    }
  }
  else if (hex.length === 5) { // #RGBA
    return {
      r: round(parseInt(hex.slice(1, 2), 16) / 15)!,
      g: round(parseInt(hex.slice(2, 3), 16) / 15)!,
      b: round(parseInt(hex.slice(3, 4), 16) / 15)!,
      a: round(parseInt(hex.slice(4, 5), 16) / 15)!,
    }
  }
  else if (hex.length === 7) { // #RRGGBB
    return {
      r: round(parseInt(hex.slice(1, 3), 16) / 255)!,
      g: round(parseInt(hex.slice(3, 5), 16) / 255)!,
      b: round(parseInt(hex.slice(5, 7), 16) / 255)!,
      a: 1,
    }
  }
  else { // #RRGGBBAA
    return {
      r: round(parseInt(hex.slice(1, 3), 16) / 255)!,
      g: round(parseInt(hex.slice(3, 5), 16) / 255)!,
      b: round(parseInt(hex.slice(5, 7), 16) / 255)!,
      a: round(parseInt(hex.slice(7, 9), 16) / 255)!,
    }
  }
}

// Shadow creation function
/**
 * Creates a shadow object.
 * Original function: r
 * @param type - The shadow type.
 * @param color - The color (string or Color object).
 * @param options - Shadow options.
 * @returns The shadow object.
 */
function createShadow(type: string, color: string | Color | { color: Color }, options?: ShadowOptions): Shadow {
  const x = options?.x ?? 0
  const y = options?.y ?? 4
  const blur = options?.blur ?? 4
  const spread = options?.spread ?? 0
  const blendMode = options?.blendMode ?? 'normal'

  const resolvedColor = typeof color === 'string' ? hexToRgb(color) : 'color' in color ? color.color : color

  return {
    type,
    color: resolvedColor,
    blendMode,
    offset: { x, y },
    blur,
    spread,
    visible: true,
  }
}

// Gradient utility functions
/**
 * Converts degrees to radians.
 * Original function: a
 * @param degrees - The angle in degrees.
 * @returns The angle in radians.
 */
function degreesToRadians(degrees: number): number {
  return (degrees - 90) * Math.PI / 180
}

/**
 * Creates a gradient stop.
 * Original function: s
 * @param stop - The gradient stop data.
 * @returns The gradient stop object.
 */
function createGradientStop(stop: { position: number, color: string | Color }): GradientStop {
  const color = typeof stop.color === 'string' ? hexToRgb(stop.color) : stop.color
  return {
    position: stop.position,
    color,
  }
}

// Exported constants and functions
export const WINDING_RULE_DEFAULT_VALUE = 'nonzero'

export const roundFunc = round
export const hexToRgbFunc = hexToRgb

/**
 * Creates a solid fill.
 * @param color - The color (string or Color object).
 * @param opacity - The opacity (default: 1).
 * @returns The solid fill object.
 */
export function solid(color: string | Color, opacity?: number) {
  return {
    type: 'solid',
    color: typeof color === 'string' ? hexToRgb(color) : color,
    blendMode: 'normal',
    opacity: round(opacity) ?? 1,
    visible: true,
  }
}

/**
 * Creates an image fill.
 * @param imageRef - The image reference.
 * @param scaleMode - The scale mode (default: "fill").
 * @param imageSize - The image size.
 * @returns The image fill object.
 */
export function image(imageRef: string, scaleMode: string = 'fill', imageSize?: any) {
  return {
    type: 'image',
    scaleMode,
    imageTransform: [[1, 0, 0], [0, 1, 0]],
    scalingFactor: 1,
    rotation: 0,
    imageRef,
    src: imageRef,
    blendMode: 'normal',
    visible: true,
    opacity: 1,
    imageSize,
  }
}

/**
 * Creates a background blur.
 * @param blur - The blur amount.
 * @returns The background blur object.
 */
export function backgroundBlur(blur: number) {
  return {
    type: 'background-blur',
    blur,
    visible: true,
  }
}

/**
 * Creates a layer blur.
 * @param blur - The blur amount.
 * @returns The layer blur object.
 */
export function layerBlur(blur: number) {
  return {
    type: 'layer-blur',
    blur,
    visible: true,
  }
}

/**
 * Creates a drop shadow.
 * @param color - The shadow color.
 * @param options - Shadow options.
 * @returns The drop shadow object.
 */
export function dropShadow(color: string | Color | { color: Color }, options?: ShadowOptions) {
  return createShadow('drop-shadow', color, options)
}

/**
 * Creates an inner shadow.
 * @param color - The shadow color.
 * @param options - Shadow options.
 * @returns The inner shadow object.
 */
export function innerShadow(color: string | Color | { color: Color }, options?: ShadowOptions) {
  return createShadow('inner-shadow', color, options)
}

/**
 * Creates a linear gradient.
 * @param colors - Array of colors.
 * @param direction - Direction or angle (default: "vertical").
 * @returns The linear gradient object.
 */
export function linearGradient(colors: (string | Color)[], direction: number | string = 'vertical') {
  const angle = degreesToRadians(typeof direction === 'number' ? direction : direction === 'horizontal' ? 90 : 180)
  return {
    type: 'gradient-linear',
    gradientHandlePositions: [
      { x: 0, y: 0 },
      { x: Math.cos(angle), y: Math.sin(angle) },
      { x: 0, y: 0 },
    ],
    gradientStops: colors.map((color, index) => createGradientStop({
      position: index / (colors.length - 1),
      color,
    })),
  }
}

/**
 * Creates a radial gradient.
 * @param colors - Array of colors.
 * @param options - Radial gradient options.
 * @returns The radial gradient object.
 */
export function radialGradient(colors: (string | Color)[], options?: RadialGradientOptions) {
  const { x, y } = options?.center ?? { x: 0.5, y: 0.5 }
  const width = options?.width ?? 1
  return {
    type: 'gradient-radial',
    gradientHandlePositions: [
      { x, y },
      { x, y: y + (options?.height ?? 1) },
      { x: x + width, y },
    ],
    gradientStops: colors.map((color, index) => createGradientStop({
      position: index / (colors.length - 1),
      color,
    })),
  }
}

/**
 * Creates an angular gradient.
 * @param colors - Array of colors.
 * @param options - Angular gradient options.
 * @returns The angular gradient object.
 */
export function angularGradient(colors: (string | Color)[], options?: AngularGradientOptions) {
  const angle = degreesToRadians(options?.angle ?? 180)
  const centerX = options?.center?.x ?? 0.5
  const centerY = options?.center?.y ?? 0.5
  const handleX = Math.cos(angle) + centerX
  const handleY = Math.sin(angle) + centerY
  return {
    type: 'gradient-angular',
    gradientHandlePositions: [
      { x: centerX, y: centerY },
      { x: handleX, y: handleY },
      { x: 0, y: 0 },
    ],
    gradientStops: colors.map((color, index) => createGradientStop({
      position: index / (colors.length - 1),
      color,
    })),
  }
}

// Position functions
/**
 * Creates a center position.
 * @param offset - The offset (default: 0).
 * @returns The center position object.
 */
export function center(offset: number = 0) {
  return {
    type: 'center',
    offset,
  }
}

/**
 * Creates a top position.
 * @param offset - The offset (default: 0).
 * @returns The top position object.
 */
export function top(offset: number = 0) {
  return {
    type: 'top',
    offset,
  }
}

/**
 * Creates a bottom position.
 * @param offset - The offset (default: 0).
 * @returns The bottom position object.
 */
export function bottom(offset: number = 0) {
  return {
    type: 'bottom',
    offset,
  }
}

/**
 * Creates a top-bottom position.
 * @param topOffset - The top offset (default: 0).
 * @param bottomOffset - The bottom offset (default: 0).
 * @returns The top-bottom position object.
 */
export function topBottom(topOffset: number = 0, bottomOffset: number = 0) {
  return {
    type: 'top-bottom',
    topOffset,
    bottomOffset,
  }
}

/**
 * Creates a vertical scale position.
 * @param topOffsetPercent - The top offset percentage (default: 0).
 * @param bottomOffsetPercent - The bottom offset percentage (default: 0).
 * @returns The vertical scale position object.
 */
export function verticalScale(topOffsetPercent: number = 0, bottomOffsetPercent: number = 0) {
  return {
    type: 'vertical-scale',
    topOffsetPercent,
    bottomOffsetPercent,
  }
}

/**
 * Creates a left position.
 * @param offset - The offset (default: 0).
 * @returns The left position object.
 */
export function left(offset: number = 0) {
  return {
    type: 'left',
    offset,
  }
}

/**
 * Creates a right position.
 * @param offset - The offset (default: 0).
 * @returns The right position object.
 */
export function right(offset: number = 0) {
  return {
    type: 'right',
    offset,
  }
}

/**
 * Creates a left-right position.
 * @param leftOffset - The left offset (default: 0).
 * @param rightOffset - The right offset (default: 0).
 * @returns The left-right position object.
 */
export function leftRight(leftOffset: number = 0, rightOffset: number = 0) {
  return {
    type: 'left-right',
    leftOffset,
    rightOffset,
  }
}

/**
 * Creates a horizontal scale position.
 * @param leftOffsetPercent - The left offset percentage (default: 0).
 * @param rightOffsetPercent - The right offset percentage (default: 0).
 * @returns The horizontal scale position object.
 */
export function horizontalScale(leftOffsetPercent: number = 0, rightOffsetPercent: number = 0) {
  return {
    type: 'horizontal-scale',
    leftOffsetPercent,
    rightOffsetPercent,
  }
}
