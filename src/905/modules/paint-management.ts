/**
 * Paint Management Module
 *
 * Handles paint-related functionality including color palettes, matrix transformations,
 * paint type conversions, and paint processing for various node types.
 *
 * Original functions: e$, eZ, eQ, eJ, e0, e1, e2, e3, e4, e5
 * Original constants: eG, ez
 */

import { nj } from '../125019'
import { dI } from '../871411'

/**
 * Paint Management Module
 *
 * Handles paint-related functionality including color palettes, matrix transformations,
 * paint type conversions, and paint processing for various node types.
 *
 * Original functions: e$, eZ, eQ, eJ, e0, e1, e2, e3, e4, e5
 * Original constants: eG, ez
 */

/**
 * Default color palette for dark themes
 * Original constant: eG
 */
export const DARK_COLOR_PALETTE = {
  black: '#1E1E1E',
  gray: '#B3B3B3',
  red: '#F24822',
  orange: '#FFA629',
  yellow: '#FFCD29',
  green: '#14AE5C',
  blue: '#0D99FF',
  violet: '#9747FF',
  white: '#FFFFFF',
}

/**
 * Default color palette for light themes
 * Original constant: ez
 */
export const LIGHT_COLOR_PALETTE = {
  darkGray: '#757575',
  lightGray: '#E6E6E6',
  lightRed: '#FFC7C2',
  lightOrange: '#FCD19C',
  lightYellow: '#FFE8A3',
  lightGreen: '#AFF4C6',
  lightBlue: '#BDE3FF',
  lightViolet: '#E4CCFF',
  white: '#FFFFFF',
}

/**
 * Converts a transform matrix to a 2D array format
 * Original function: e$
 */
export function transformMatrixToArray(matrix: Transform): TransformMatrix {
  return [
    [matrix.m00, matrix.m01, matrix.m02],
    [matrix.m10, matrix.m11, matrix.m12],
  ]
}

/**
 * Converts a 2D array to a transform matrix format, or returns identity matrix
 * Original function: eZ
 */
export function arrayToTransformMatrix(array?: TransformMatrix): Transform {
  return array
    ? {
      m00: array[0][0],
      m01: array[0][1],
      m02: array[0][2],
      m10: array[1][0],
      m11: array[1][1],
      m12: array[1][2],
    }
    : {
      m00: 1,
      m01: 0,
      m02: 0,
      m10: 0,
      m11: 1,
      m12: 0,
    }
}

/**
 * Creates a variable alias reference for paint binding
 * Original function: eQ
 */
export function createVariableAlias(variableId: string) {
  return {
    type: 'VARIABLE_ALIAS' as const,
    id: variableId, // Simplified version without complex dependencies
  }
}

/**
 * Normalizes blend mode, converting PASS_THROUGH to NORMAL
 * Original function: eJ
 */
export function normalizeBlendMode(blendMode: string): string {
  return blendMode === 'PASS_THROUGH' ? 'NORMAL' : blendMode
}

/**
 * Paint type definitions
 */
export interface Color {
  r: number
  g: number
  b: number
  a?: number
}

export interface BasePaint {
  type: string
  visible: boolean
  opacity: number
  blendMode: string
}

export interface VariableAlias {
  type: 'VARIABLE_ALIAS'
  id: string
}
export interface VariableValue {
  textValue?: string
  boolValue?: boolean
  floatValue?: number
  colorValue?: Color
  alias?: string
  expressionValue?: ExpressionValue
  mapValue?: {
    values?: Array<{
      key: string
      value?: any
    }>
  }
  symbolIdValue?: string
}

export interface ExpressionValue {
  expressionFunction: string
  expressionArguments: IVariableData[]
}

export interface IVariableData {
  dataType?: 'STRING' | 'BOOLEAN' | 'FLOAT' | 'COLOR' | 'ALIAS' | 'EXPRESSION' | 'MAP' | 'SYMBOL_ID'
  resolvedDataType?: 'STRING' | 'BOOLEAN' | 'FLOAT' | 'COLOR' | 'MAP' | 'SYMBOL_ID'
  value?: VariableValue | any
  type?: 'BOOLEAN' | 'COLOR' | 'FLOAT' | 'STRING' | 'VARIABLE_ALIAS' | 'EXPRESSION' | 'SYMBOL_ID' | 'MAP'
  resolvedType?: 'BOOLEAN' | 'COLOR' | 'FLOAT' | 'STRING'
  color?: {
    id: string;
    type: string
  }
}

export interface ImageReference {
  hash: Uint8Array
  dataBlob?: number
}

export type BlendMode
  = | 'NORMAL' | 'MULTIPLY' | 'SCREEN' | 'OVERLAY' | 'SOFT_LIGHT'
  | 'HARD_LIGHT' | 'COLOR_DODGE' | 'COLOR_BURN' | 'DARKEN'
  | 'LIGHTEN' | 'DIFFERENCE' | 'EXCLUSION' | 'HUE'
  | 'SATURATION' | 'COLOR' | 'LUMINOSITY'

export type PatternTileType = 'RECTANGULAR' | 'HEXAGONAL'
export type PatternAlignment = 'START' | 'CENTER' | 'END'
export type ImageScaleMode = 'FILL' | 'FIT' | 'CROP' | 'TILE' | 'STRETCH'

export interface SolidPaint extends BasePaint {
  type: 'SOLID'
  color: Color
  boundVariables?: { color?: VariableAlias }
  colorVar?: IVariableData
}

export interface Transform {
  m00: number
  m01: number
  m02: number
  m10: number
  m11: number
  m12: number
}

export interface PaintFilter {
  exposure?: number
  contrast?: number
  saturation?: number
  vibrance?: number
  temperature?: number
  tint?: number
  highlights?: number
  shadows?: number
}

export interface TransformMatrix {
  [0]: [number, number, number]
  [1]: [number, number, number]
}

export interface GradientStop {
  color: Color
  position: number
  boundVariables?: {
    color?: VariableAlias
  }
}

export interface PatternSpacing {
  x: number
  y: number
}

export interface GradientPaint extends BasePaint {
  type: 'GRADIENT_LINEAR' | 'GRADIENT_RADIAL' | 'GRADIENT_ANGULAR' | 'GRADIENT_DIAMOND'
  transform?: Transform
  stops?: GradientStop[]
  stopsVar?: Array<{
    color: Color
    position: number
    colorVar?: IVariableData
  }>
  gradientStops?: GradientStop[]
  gradientTransform?: TransformMatrix
}

export interface ImagePaint extends BasePaint {
  type: 'IMAGE'
  imageScaleMode?: ImageScaleMode
  transform?: Transform
  paintFilter?: PaintFilter
  scale?: number
  scalingFactor?: number
  rotation?: number
  scaleMode?: ImageScaleMode
  imageTransform?: TransformMatrix
  animatedImage?: ImageReference
  filters?: PaintFilter
  image?: ImageReference
  imageHash?: string | null
}

export interface VideoPaint extends BasePaint {
  animatedImage?: ImageReference 
  loop?: boolean
  autoPlay?: boolean
  type: 'VIDEO'
  imageScaleMode?: ImageScaleMode
  transform?: Transform
  paintFilter?: PaintFilter
  scale?: number
  scalingFactor?: number
  rotation?: number
  scaleMode?: ImageScaleMode
  videoTransform?: TransformMatrix
  imageTransform?: TransformMatrix
  filters?: PaintFilter
  image?: ImageReference
  video?: ImageReference
  videoHash?: string | null
}

export interface PatternPaint extends BasePaint {
  type: 'PATTERN'
  sourceNodeId?: { sessionID: number, localID: number }
  patternTileType?: PatternTileType
  scale?: number
  scalingFactor?: number
  patternSpacing?: PatternSpacing
  spacing?: PatternSpacing
  horizontalAlignment: PatternAlignment
  verticalAlignment: PatternAlignment
  tileType?: PatternTileType
}

export type Paint = SolidPaint | GradientPaint | ImagePaint | PatternPaint | VideoPaint

/**
 * Merges an object with defaults, preserving existing values
 */
function mergeWithDefaults<T>(obj: Partial<T>, defaults: T): T {
  return { ...defaults, ...obj }
}

/**
 * Processes image filter data for external format
 */
export function processImageFilters(paintFilter: any) {
  const defaultFilters = {
    exposure: 0,
    contrast: 0,
    saturation: 0,
    temperature: 0,
    tint: 0,
    highlights: 0,
    shadows: 0,
  }

  if (!paintFilter)
    return defaultFilters

  return mergeWithDefaults({
    exposure: paintFilter.exposure,
    contrast: Math.min(Math.max((paintFilter.contrast || 0) / 0.3, -1), 1),
    saturation: paintFilter.vibrance,
    temperature: paintFilter.temperature,
    tint: paintFilter.tint,
    highlights: paintFilter.highlights,
    shadows: paintFilter.shadows,
  }, defaultFilters)
}

/**
 * Converts internal paint data to external paint format
 * Original function: e0
 */
export function convertInternalPaintToExternal(paint: any): Paint {
  const basePaint: BasePaint = {
    type: paint.type,
    visible: paint.visible,
    opacity: paint.opacity,
    blendMode: normalizeBlendMode(paint.blendMode),
  }

  switch (paint.type) {
    case 'SOLID': {
      const solidPaint: SolidPaint = {
        ...basePaint,
        type: 'SOLID',
        color: { ...paint.color },
        boundVariables: {},
      }

      if (paint.colorVar?.value?.alias) {
        solidPaint.boundVariables!.color = createVariableAlias(paint.colorVar.value.alias)
      }

      // Remove alpha from color
      if (solidPaint.color.a !== undefined) {
        delete solidPaint.color.a
      }

      return solidPaint
    }

    case 'GRADIENT_LINEAR':
    case 'GRADIENT_RADIAL':
    case 'GRADIENT_ANGULAR':
    case 'GRADIENT_DIAMOND': {
      const gradientPaint: GradientPaint = {
        ...basePaint,
        type: paint.type,
        gradientStops: paint.stops?.map((stop: any, index: number) => ({
          color: stop.color,
          position: stop.position,
          boundVariables: paint.stopsVar?.length && paint.stopsVar?.[index]?.colorVar?.value?.alias
            ? { color: createVariableAlias(paint.stopsVar[index].colorVar.value.alias) }
            : {},
        })) || [],
        gradientTransform: transformMatrixToArray(paint.transform),
      }
      return gradientPaint
    }

    case 'PATTERN': {
      const patternPaint: PatternPaint = {
        ...basePaint,
        type: 'PATTERN',
        sourceNodeId: dI(paint.sourceNodeId) ?? '-1:-1',
        tileType: paint.patternTileType ?? 'RECTANGULAR',
        scalingFactor: paint.scale ?? 1,
        spacing: paint.patternSpacing ?? { x: 0, y: 0 },
        horizontalAlignment: paint.horizontalAlignment ?? 'START',
        verticalAlignment: paint.verticalAlignment ?? 'START',
      }
      return patternPaint
    }

    case 'VIDEO':
    case 'IMAGE': {
      const scaleMode = paint.imageScaleMode === 'STRETCH' ? 'CROP' : paint.imageScaleMode
      const rotation = paint.rotation ? paint.rotation % 360 : 0

      let imagePaint: ImagePaint = {
        ...basePaint,
        type: paint.type,
        scaleMode,
        imageTransform: transformMatrixToArray(paint.transform),
        scalingFactor: paint.scale,
        rotation,
        filters: processImageFilters(paint.paintFilter),
      }

      if (paint.type === 'VIDEO') {
        const videoPaint = imagePaint as unknown as VideoPaint
        (videoPaint).videoTransform = paint.imageTransform
        if (paint.video && paint.video.hash) {
          videoPaint.videoHash = nj(paint.video.hash)
        }
        else {
          videoPaint.videoHash = null
        }
        return videoPaint
      }
      else {
        if (paint.animatedImage?.hash) {
          imagePaint.imageHash = nj(paint.animatedImage.hash)
        }
        else if (paint.image?.hash) {
          imagePaint.imageHash = nj(paint.image.hash)
        }
        else {
          imagePaint.imageHash = null
        }
      }
      return imagePaint
    }

    default:
      console.warn(`Paint type ${paint.type} is not yet supported`)
      return basePaint as Paint
  }
}

/**
 * Converts an array of internal paints to external format
 * Original function: e1
 */
export function convertPaintArray(paints?: any[]): Paint[] {
  return paints ? paints.map(convertInternalPaintToExternal) : []
}

/**
 * Converts text decoration color paints
 * Original function: e5
 */
export function convertTextDecorationPaints(paints?: any[]) {
  if (!paints || paints.length === 0) {
    return { value: 'AUTO' }
  }

  const convertedPaints = paints.map(convertInternalPaintToExternal)
  if (convertedPaints.length !== 1) {
    throw new Error('Text decoration color must have exactly one paint')
  }

  const paint = convertedPaints[0]
  if (paint.type !== 'SOLID') {
    throw new Error('Text decoration color must be a solid color')
  }

  return { value: paint }
}
