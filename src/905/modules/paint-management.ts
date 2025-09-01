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
 * Transform matrix interface
 */
interface TransformMatrix {
  m00: number
  m01: number
  m02: number
  m10: number
  m11: number
  m12: number
}

/**
 * Converts a transform matrix to a 2D array format
 * Original function: e$
 */
export function transformMatrixToArray(matrix: TransformMatrix): [[number, number, number], [number, number, number]] {
  return [
    [matrix.m00, matrix.m01, matrix.m02],
    [matrix.m10, matrix.m11, matrix.m12],
  ]
}

/**
 * Converts a 2D array to a transform matrix format, or returns identity matrix
 * Original function: eZ
 */
export function arrayToTransformMatrix(array?: [[number, number, number], [number, number, number]]): TransformMatrix {
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
interface Color {
  r: number
  g: number
  b: number
  a?: number
}

interface BasePaint {
  type: string
  visible: boolean
  opacity: number
  blendMode: string
}

interface SolidPaint extends BasePaint {
  type: 'SOLID'
  color: Color
  boundVariables?: { color?: any }
}

interface GradientStop {
  color: Color
  position: number
  boundVariables?: { color?: any }
}

interface GradientPaint extends BasePaint {
  type: 'GRADIENT_LINEAR' | 'GRADIENT_RADIAL' | 'GRADIENT_ANGULAR' | 'GRADIENT_DIAMOND'
  gradientStops: GradientStop[]
  gradientTransform: [[number, number, number], [number, number, number]]
}

interface ImagePaint extends BasePaint {
  type: 'IMAGE' | 'VIDEO'
  imageHash?: string | null
  videoHash?: string | null
  scaleMode: string
  imageTransform: [[number, number, number], [number, number, number]]
  scalingFactor?: number
  rotation?: number
  filters: any
}

interface PatternPaint extends BasePaint {
  type: 'PATTERN'
  sourceNodeId: string
  tileType: string
  scalingFactor: number
  spacing: { x: number; y: number }
  horizontalAlignment: string
  verticalAlignment: string
}

export type Paint = SolidPaint | GradientPaint | ImagePaint | PatternPaint

/**
 * Merges an object with defaults, preserving existing values
 */
function mergeWithDefaults<T>(obj: Partial<T>, defaults: T): T {
  return { ...defaults, ...obj }
}

/**
 * Processes image filter data for external format
 */
function processImageFilters(paintFilter: any) {
  const defaultFilters = {
    exposure: 0,
    contrast: 0,
    saturation: 0,
    temperature: 0,
    tint: 0,
    highlights: 0,
    shadows: 0,
  }

  if (!paintFilter) return defaultFilters

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
export function convertInternalPaintToExternal(internalPaint: any): Paint {
  const basePaint: BasePaint = {
    type: internalPaint.type,
    visible: internalPaint.visible,
    opacity: internalPaint.opacity,
    blendMode: normalizeBlendMode(internalPaint.blendMode),
  }

  switch (internalPaint.type) {
    case 'SOLID': {
      const solidPaint: SolidPaint = {
        ...basePaint,
        type: 'SOLID',
        color: { ...internalPaint.color },
        boundVariables: {},
      }
      
      if (internalPaint.colorVar?.value?.alias) {
        solidPaint.boundVariables!.color = createVariableAlias(internalPaint.colorVar.value.alias)
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
        type: internalPaint.type,
        gradientStops: internalPaint.stops?.map((stop: any, index: number) => ({
          color: stop.color,
          position: stop.position,
          boundVariables: internalPaint.stopsVar?.length && internalPaint.stopsVar?.[index]?.colorVar?.value?.alias
            ? { color: createVariableAlias(internalPaint.stopsVar[index].colorVar.value.alias) }
            : {},
        })) || [],
        gradientTransform: transformMatrixToArray(internalPaint.transform),
      }
      return gradientPaint
    }

    case 'PATTERN': {
      const patternPaint: PatternPaint = {
        ...basePaint,
        type: 'PATTERN',
        sourceNodeId: internalPaint.sourceNodeId || '',
        tileType: internalPaint.patternTileType ?? 'RECTANGULAR',
        scalingFactor: internalPaint.scale ?? 1,
        spacing: internalPaint.patternSpacing ?? { x: 0, y: 0 },
        horizontalAlignment: internalPaint.horizontalAlignment ?? 'START',
        verticalAlignment: internalPaint.verticalAlignment ?? 'START',
      }
      return patternPaint
    }

    case 'VIDEO':
    case 'IMAGE': {
      const scaleMode = internalPaint.imageScaleMode === 'STRETCH' ? 'CROP' : internalPaint.imageScaleMode
      const rotation = internalPaint.rotation ? internalPaint.rotation % 360 : 0
      
      const imagePaint: ImagePaint = {
        ...basePaint,
        type: internalPaint.type,
        scaleMode,
        imageTransform: transformMatrixToArray(internalPaint.transform),
        scalingFactor: internalPaint.scale,
        rotation,
        filters: processImageFilters(internalPaint.paintFilter),
      }

      if (internalPaint.type === 'VIDEO') {
        imagePaint.videoHash = internalPaint.video?.hash || null
      } else {
        if (internalPaint.animatedImage?.hash) {
          imagePaint.imageHash = internalPaint.animatedImage.hash
        } else if (internalPaint.image?.hash) {
          imagePaint.imageHash = internalPaint.image.hash
        } else {
          imagePaint.imageHash = null
        }
      }

      return imagePaint
    }

    default:
      console.warn(`Paint type ${internalPaint.type} is not yet supported`)
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
