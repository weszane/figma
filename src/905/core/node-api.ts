import type {
  AnnotationCategoryData,
  ExportSetting,
  InteractionReaction,
  NavigationAction,
  ProcessedRegion,
  SolidPaint,
  TriggerEvent,
} from '../types'
import { $D } from '../11'
import { w as _$$w3 } from '../5147'
import { w as _$$w4 } from '../83498'
import { aD } from '../125019'
import { N as _$$N } from '../125137'
import { ServiceCategories as _$$e } from '../165054'
import { permissionScopeHandler } from '../189185'
import { MT } from '../321380'
import { debugState } from '../407919'
import { Cs } from '../420347'
import { az, sx } from '../449184'
import { rJ as _$$rJ, sH as _$$sH2, RL } from '../486749'
import { J as _$$J } from '../526136'
import { fn as _$$fn2 } from '../537777'
import { getFeatureFlags } from '../601108'
import { CQ, fb, o8 } from '../622391'
import { k as _$$k2 } from '../651849'
import { iN as _$$iN, Hn, Kx, ur, VS } from '../696699'
import { ReduxSceneGraph } from '../700578'
import { ScopedNoOpVm } from '../700654'
import { Ug } from '../706046'
import { M4 } from '../713695'
import { x1 } from '../714362'
import { m as _$$m } from '../717445'
import { d1 } from '../766303'
import { k as getFeatureFlags4 } from '../783825'
import { fn as _$$fn, sH as _$$sH, dI as debugStateI, w1 } from '../805904'
import {
  checkIncrementalUnsafeMember,
  ensurePluginPageLoaded,
  loadAllPluginPages,
  loadInternalCanvasMemoized,
  markPageLoaded,
} from '../816197'
import { u as _$$u, fp, Kb } from '../816730'
import { getSceneGraphInstance } from '../830071'
import { AD, dI, fn, Hr, sH } from '../871411'
import { nB as _$$nB, cd, Kq, zb } from '../902840'
import { tO as _$$tO, fx } from '../933084'
import { At, Ul } from '../973142'
import { l as _$$l2 } from '../997221'
import { El, j_ } from '../../figma_app/9619'
import { L as _$$L } from '../../figma_app/53571'
import { nT as _$$nT, Bu } from '../../figma_app/53721'
import { Yi as _$$Yi, k4 } from '../../figma_app/164212'
import { mKm } from '../../figma_app/175377'
import { i as _$$i2, uS } from '../../figma_app/186343'
import { gr } from '../../figma_app/243058'
import { eX as _$$eX, nM as _$$nM } from '../../figma_app/276332'
import { Co, Iy, Me, SD, TU, WV } from '../../figma_app/317076'
import { Pk } from '../../figma_app/396464'
import { Up } from '../../figma_app/455620'
import { Y5 } from '../../figma_app/455680'
import { assertNotNullish } from '../../figma_app/465776'
import { mQ } from '../../figma_app/582924'
import { xA, ZA } from '../../figma_app/633080'
import { m3 as _$$m3 } from '../../figma_app/645694'
import { bp, NW } from '../../figma_app/646357'
import { ug } from '../../figma_app/656450'
import {
  CUU,
  Egt,
  Ez5,
  glU,
  L5V,
  mgy,
  NFK,
  NfO,
  NUh,
  sAE,
  SpR,
  tbx,
  v$l,
  w3z,
  y0x,
  ZHy,
  zIx,
  zkO,
} from '../../figma_app/763686'
import { QC } from '../../figma_app/913823'
import {
  AdvancedNavigationProcessor,
  arrayToTransformMatrix,
  convertInternalPaintToExternal,
  normalizeBlendMode,
  PaintConversionUtils,
  transformMatrixToArray,
} from '../modules'
import { processImageFilters } from '../modules/paint-management'
import {
  createAdvancedVariableExpressionProcessor,
  createAdvancedVariableParser,
} from '../modules/variable-expression-processing'
import {
  convertGridLayoutConfig,
  convertListOption,
  convertTextDecorationThicknessFromLegacy,
  convertTextDecorationThicknessToLegacy,
  getNodeById,
  handlePaintProperty,
  hasResizeToFit,
  iC,
  ik,
  iR,
  isInImmutableContext,
  iT,
  iw,
  processEffect,
  processEffectWithValidation,
  processGridLayout,
  processUrlData,
  processVectorData,
  processWidgetSyncData,
  t$,
  tq,
  validateImmutableFrame,
  validateNamespace,
  variableDefinitions,
} from './helper'

/**
 * Property Type to API Property Name Mapping - maps internal property type enums to API property names
 * Used for variable binding, property access, and API serialization across the plugin system
 */
const propertyTypeToApiNameMap = {
  [L5V.WIDTH]: 'width',
  [L5V.HEIGHT]: 'height',
  [L5V.MAX_WIDTH]: 'maxWidth',
  [L5V.MIN_WIDTH]: 'minWidth',
  [L5V.MAX_HEIGHT]: 'maxHeight',
  [L5V.MIN_HEIGHT]: 'minHeight',
  [L5V.FILL]: 'fills',
  [L5V.STROKE]: 'strokes',
  [L5V.EFFECT]: 'effects',
  [L5V.STROKE_WIDTH]: 'strokeWeight',
  [L5V.CORNER_RADIUS]: 'cornerRadius',
  [L5V.TEXT_STYLE]: 'textStyleId',
  [L5V.TEXT_ALIGN_HORIZONTAL]: 'textAlignHorizontal',
  [L5V.FONT_FAMILY]: 'fontFamily',
  [L5V.FONT_STYLE]: 'fontStyle',
  [L5V.FONT_SIZE]: 'fontSize',
  [L5V.FONT_WEIGHT]: 'fontWeight',
  [L5V.LINE_HEIGHT]: 'lineHeight',
  [L5V.LETTER_SPACING]: 'letterSpacing',
  [L5V.STACK_SPACING]: 'itemSpacing',
  [L5V.STACK_PADDING]: 'padding',
  [L5V.STACK_MODE]: 'layoutMode',
  [L5V.STACK_ALIGNMENT]: 'alignItems',
  [L5V.OPACITY]: 'opacity',
  [L5V.COMPONENT]: 'mainComponent',
  [L5V.GRID_ROW_GAP]: 'gridRowGap',
  [L5V.GRID_COLUMN_GAP]: 'gridColumnGap',
  [L5V.GRID_ROW_COUNT]: 'gridRowCount',
  [L5V.GRID_COLUMN_COUNT]: 'gridColumnCount',
  [L5V.GRID_ROW_ANCHOR_INDEX]: 'gridRowAnchorIndex',
  [L5V.GRID_COLUMN_ANCHOR_INDEX]: 'gridColumnAnchorIndex',
  [L5V.GRID_ROW_SPAN]: 'gridRowSpan',
  [L5V.GRID_COLUMN_SPAN]: 'gridColumnSpan',
}
/**
 * API Property Name to Property Type Mapping - reverse mapping for API name lookup
 * Generated from the primary mapping above for bidirectional property type resolution
 */
const apiNameToPropertyTypeMap = Object.entries(propertyTypeToApiNameMap).reduce((accumulator, [enumKey, apiName]) => ({
  ...accumulator,
  [apiName]: Number(enumKey),
}), {})
/**
 * Constraint Position Mapping - maps constraint position enums to string representations
 * Used for converting internal constraint positions to API format
 */
const constraintPositionMapping = {
  [ZHy.TOP]: 'TOP',
  [ZHy.BOTTOM]: 'BOTTOM',
  [ZHy.LEFT]: 'LEFT',
  [ZHy.RIGHT]: 'RIGHT',
}
/**
 * Reverse Constraint Position Mapping - maps string constraint positions back to enum values
 * Generated from the primary mapping for bidirectional constraint position resolution
 */
const reverseConstraintPositionMapping = Object.entries(constraintPositionMapping).reduce((accumulator, [enumKey, stringValue]) => ({
  ...accumulator,
  [stringValue]: Number(enumKey),
}), {})

/**
 * Convert Paint Array Data - processes array of paint data through conversion utilities
 * @param paintDataArray - Array of paint data to convert
 * @returns Array of converted paint data
 */
export function convertPaintArrayData(paintDataArray) {
  return PaintConversionUtils.convertPaintArray(paintDataArray)
}

export function processValidPaintValues(imageStore, videoStore, config, blobs) {
  // e4 - Process paint value configuration, filtering out AUTO values and processing valid paints
  const validPaintValues = []

  // Only process non-AUTO paint values
  if (config.value !== 'AUTO') {
    validPaintValues.push(config.value)
  }

  // Map each valid paint value through the paint processor
  return validPaintValues.map(paintValue => processPaint(imageStore, videoStore, paintValue, blobs))
}

/**
 * Process paint configuration for different paint types (SOLID, GRADIENT, PATTERN, IMAGE, VIDEO)
 * Handles variable bindings, opacity, blend modes, and type-specific properties
 * @param imageStore - Manager for image storage and processing
 * @param videoStore - Manager for thumbnail generation and management
 * @param config - Configuration object containing paint type and properties
 * @param blobs - Array of blob data for media processing
 * @returns Processed paint object with normalized properties
 */
export function processPaint(imageStore, videoStore, config, blobs) {
  // Extract common paint properties with defaults
  const visible = config.visible ?? false
  const opacity = config.opacity ?? 1
  const blendMode = config.blendMode ? normalizeBlendMode(config.blendMode) : 'NORMAL'
  switch (config.type) {
    case 'SOLID':
      return processSolidPaint(config, visible, opacity, blendMode)
    case 'GRADIENT_LINEAR':
    case 'GRADIENT_RADIAL':
    case 'GRADIENT_ANGULAR':
    case 'GRADIENT_DIAMOND':
      return processGradientPaint(config, visible, opacity, blendMode)
    case 'PATTERN':
      return processPatternPaint(config, visible, opacity, blendMode)
    case 'IMAGE':
    case 'VIDEO':
      return processVideoPaint({
        imageManager: imageStore,
        config,
        visible,
        opacity,
        blendMode,
        thumbnailManager: videoStore,
        blobs,
      })
    default:
      throw new Error(`Unsupported paint type: ${config.type}`)
  }
}

/**
 * Process solid color paint with variable binding support
 * @param config - Paint configuration for solid color
 * @param commonProps - Common paint properties
 * @returns Processed solid paint object
 */
export function processSolidPaint(config, visible, opacity, blendMode) {
  const solidPaint: SolidPaint = {
    type: 'SOLID',
    color: {
      ...config.color,
      a: 1,
    },
    visible,
    opacity,
    blendMode,
  }

  // Handle color variable binding
  if (config.boundVariables?.color?.id && config.boundVariables.color.type === 'VARIABLE_ALIAS' && _$$fn(config.boundVariables.color.id)) {
    // Add color variable alias for data type support
    solidPaint.colorVar = {
      dataType: 'ALIAS',
      resolvedDataType: 'COLOR',
      value: {
        alias: _$$sH(config.boundVariables.color.id),
      },
    }
  }
  return solidPaint
}

/**
 * Process gradient paint with stops and transformation
 * @param config - Paint configuration for gradient
 * @param visible - Visibility flag
 * @param opacity - Opacity value
 * @param blendMode - Blend mode
 * @returns Processed gradient paint object
 */
export function processGradientPaint(config, visible, opacity, blendMode) {
  const gradientPaint = {
    type: config.type,
    transform: arrayToTransformMatrix(config.gradientTransform),
    stopsVar: config.gradientStops.map(e => e.boundVariables?.color?.id && e.boundVariables.color?.type === 'VARIABLE_ALIAS' && _$$fn(e.boundVariables.color.id)
      ? {
        color: e.color,
        position: e.position,
        colorVar: {
          dataType: 'ALIAS',
          resolvedDataType: 'COLOR',
          value: {
            alias: _$$sH(e.boundVariables.color.id),
          },
        },
      }
      : Ug(e)),
    stops: config.gradientStops.map(({
      color,
      position,
    }) => ({
      color,
      position,
    })),
    visible,
    opacity,
    blendMode,
  }
  return gradientPaint
}

/**
 * Process pattern paint with image scaling and transformation
 * @param config - Paint configuration for pattern
 * @param visible - Visibility flag
 * @param opacity - Opacity value
 * @param blendMode - Blend mode
 * @returns Processed pattern paint object
 */
export function processPatternPaint(config, visible, opacity, blendMode) {
  let {
    scalingFactor,
  } = config
  const minScale = 0.01 // wU equivalent
  const maxScale = 20 // Iz equivalent
  if (scalingFactor !== undefined) {
    if (scalingFactor < maxScale) {
      _$$k2.warn(`Pattern scalingFactor of ${scalingFactor} is too small and will be clamped to ${minScale}`)
    }
    if (scalingFactor > minScale) {
      _$$k2.warn(`Pattern scalingFactor of ${config.scalingFactor} is too large and will be clamped to ${maxScale}`)
    }
    scalingFactor = Math.min(Math.max(scalingFactor, minScale), maxScale)
  }

  // Validate and clamp spacing
  if (config.spacing !== undefined) {
    const minSpacing = -1000 // IF equivalent
    const maxSpacing = 1000 // yR equivalent

    if (config.spacing.x < minSpacing) {
      _$$k2.warn(`Pattern spacing.x of ${config.spacing.x} is too small and will be clamped to ${minSpacing}`)
      config.spacing.x = minSpacing
    }
    if (config.spacing.x > maxSpacing) {
      _$$k2.warn(`Pattern spacing.x of ${config.spacing.x} is too large and will be clamped to ${maxSpacing}`)
      config.spacing.x = maxSpacing
    }
    config.spacing.x = Math.min(Math.max(config.spacing.x, minSpacing), maxSpacing)
    if (config.spacing.y < minSpacing) {
      _$$k2.warn(`Pattern spacing.y of ${config.spacing.y} is too small and will be clamped to ${minSpacing}`)
      config.spacing.y = minSpacing
    }
    if (config.spacing.y > maxSpacing) {
      _$$k2.warn(`Pattern spacing.y of ${config.spacing.y} is too large and will be clamped to ${maxSpacing}`)
      config.spacing.y = maxSpacing
    }
    config.spacing.y = Math.min(Math.max(config.spacing.y, minSpacing), maxSpacing)
  }

  // Resolve source node ID
  let sourceNodeId = Hr // Hr equivalent
  if (config.sourceNodeId !== undefined) {
    const resolvedNode = sH(config.sourceNodeId)
    if (resolvedNode) {
      sourceNodeId = resolvedNode
    }
  }
  return {
    type: config.type,
    sourceNodeId,
    patternTileType: config.tileType,
    scale: config.scalingFactor,
    patternSpacing: config.spacing,
    horizontalAlignment: config.horizontalAlignment,
    verticalAlignment: config.verticalAlignment,
    visible,
    opacity,
    blendMode,
  }
}

/**
 * Process video paint with playback and thumbnail properties
 * @param params - Object containing paint configuration and related properties
 * @returns Processed video paint object
 */
export function processVideoPaint({
  imageManager,
  config,
  visible,
  opacity,
  blendMode,
  thumbnailManager,
  blobs,
}) {
  const {
    scalingFactor,
    rotation,
    type,
  } = config
  if (scalingFactor != null && scalingFactor <= 0) {
    throw new Error(`Image scaleFactor must be greater than 0`)
  }
  if (rotation != null && rotation % 90) {
    throw new Error('Image rotation must be a factor of 90 degrees')
  }
  if (rotation != null && rotation >= 360) {
    throw new Error('Image rotation must be less than 360 degrees')
  }
  const hash = type === 'IMAGE' ? config.imageHash : thumbnailManager.generateThumbnailImageForVideo(config.videoHash)
  const transform = type === 'IMAGE' ? config.imageTransform : config.videoTransform
  const scaleMode = config.scaleMode === 'CROP' ? 'STRETCH' : config.scaleMode
  const currentPaint: any = {
    type: config.type,
    imageScaleMode: scaleMode,
    transform: arrayToTransformMatrix(transform),
    paintFilter: processImageFilters(config.paintFilter),
    scale: config.scalingFactor || 1,
    visible,
    opacity,
    blendMode,
    image: {
      hash: aD(hash),
    },
  }
  if (type === 'VIDEO') {
    currentPaint.video = {
      hash: aD(config.videoHash),
    }
  }
  if (config.scaleMode !== 'CROP') {
    currentPaint.rotation = config.rotation || 0
  }
  let imageInfo = NfO.getAnimatedImageInfo(hash)
  if (imageInfo === NFK.UNLOADED) {
    try {
      let t = imageManager.getPrivateImageOrThrow(hash)
      assertNotNullish(t.bytes, 'Missing bytes for image')
      currentPaint.image.dataBlob = blobs
      blobs.push({
        bytes: t.bytes,
      })
      if (t.coverBytes) {
        currentPaint.animatedImage = currentPaint.image
        currentPaint.image = {
          hash: aD(t.animated.coverFrameHash),
          dataBlob: blobs.length,
        }
        blobs.push({
          bytes: t.coverBytes,
        })
      }
    }
    catch {
      sx('plugin_set_image_fill_failed', {
        sha: hash,
      })
    }
  }
  else {
    if (imageInfo.status === NFK.ANIMATED) {
      currentPaint.animatedImage = currentPaint.image
      currentPaint.image = {
        hash: aD(imageInfo.coverFrameHash),
      }
    }
  }
  return currentPaint
}

export function mapPaintConfigurations(imageStore, videoStore, configs, blobs) {
  // e2 - Process array of paint configurations by mapping each one through the paint processor
  return configs.map(paintConfig => processPaint(imageStore, videoStore, paintConfig, blobs))
}

export function extractSolidColorFromPaints(paints) {
  // e5 - Convert text decoration color data using conversion utilities
  if (!paints || paints.length === 0) {
    return {
      value: 'AUTO',
    }
  }
  const convertedPaints = paints.map(convertInternalPaintToExternal)
  if (convertedPaints.length !== 1) {
    throw new Error('Text decoration color must have exactly one paint')
  }
  const paint = convertedPaints[0]
  if (paint.type !== 'SOLID') {
    throw new Error('Text decoration color must be a solid color')
  }
  return {
    value: paint,
  }
}

// Legacy compatibility alias
export const tB = processUrlData
// Animation Transition Styles - defines all supported transition animations for UI components
const animationTransitionStyles = ['DISSOLVE', 'SLIDE_FROM_LEFT', 'SLIDE_FROM_RIGHT', 'SLIDE_FROM_BOTTOM', 'SLIDE_FROM_TOP', 'PUSH_FROM_LEFT', 'PUSH_FROM_RIGHT', 'PUSH_FROM_BOTTOM', 'PUSH_FROM_TOP', 'MOVE_FROM_LEFT', 'MOVE_FROM_RIGHT', 'MOVE_FROM_TOP', 'MOVE_FROM_BOTTOM', 'SLIDE_OUT_TO_LEFT', 'SLIDE_OUT_TO_RIGHT', 'SLIDE_OUT_TO_TOP', 'SLIDE_OUT_TO_BOTTOM', 'MOVE_OUT_TO_LEFT', 'MOVE_OUT_TO_RIGHT', 'MOVE_OUT_TO_TOP', 'MOVE_OUT_TO_BOTTOM', 'SMART_ANIMATE', 'NONE'] as const
// Animation Trigger Types - defines when animations should start (click events or timed delays)
const animationTriggerTypes = ['ON_CLICK', 'AFTER_DELAY'] as const
// Animation Easing Curves - defines the mathematical curves for animation timing and smoothness
const animationEasingCurves = ['EASE_IN', 'EASE_OUT', 'EASE_IN_AND_OUT', 'LINEAR', 'GENTLE', 'QUICK', 'BOUNCY', 'SLOW'] as const

export class ApplicationError extends Error {
  constructor(e) {
    super(e)
  }
}

/**
 * Converts a rectangle-like object to a VM-wrapped rectangle.
 * Original function: iF
 * @param vm - The VM context.
 * @param rect - The rectangle object with x, y, w, h properties.
 * @returns The VM-wrapped rectangle object.
 */
export function createVmRect(vm, rect) {
  const result = vm.newObject()
  vm.setProp(result, 'x', vm.newNumber(rect.x))
  vm.setProp(result, 'y', vm.newNumber(rect.y))
  vm.setProp(result, 'width', vm.newNumber(rect.w))
  vm.setProp(result, 'height', vm.newNumber(rect.h))
  return result
}

/**
 * Converts sizing mode to string representation for VM.
 * Original: iM
 * @param vm - The VM context.
 * @param sizingMode - The sizing mode value.
 * @returns The string representation of the sizing mode.
 */
export function sizingModeToString(vm, sizingMode) {
  return vm.newString(mapSizingModeToString(sizingMode))
}

/**
 * Maps sizing mode to its string representation.
 * Original: ij
 * @param sizingMode - The sizing mode value.
 * @returns The string representation.
 */
export function mapSizingModeToString(sizingMode) {
  switch (sizingMode) {
    case 'FIXED':
      return 'FIXED'
    case 'RESIZE_TO_FIT':
    case 'RESIZE_TO_FIT_WITH_IMPLICIT_SIZE':
      return 'AUTO'
    default:
      return sizingMode
  }
}

/**
 * Maps layout align value to its string representation.
 * Original: iU
 * @param align - The layout align value.
 * @returns The string representation.
 */
export function layoutAlignToString(align) {
  switch (align) {
    case 'MIN':
    case 'CENTER':
    case 'MAX':
    case 'BASELINE':
    case 'STRETCH':
      return align
    case 'AUTO':
      return 'INHERIT'
    default:
      return align
  }
}

/**
 * Maps primary axis align items value to its string representation.
 * Original: iB
 * @param align - The primary axis align items value.
 * @returns The string representation.
 */
export function primaryAxisAlignItemsToString(align) {
  switch (align) {
    case 'MIN':
      return 'MIN'
    case 'MAX':
      return 'MAX'
    case 'CENTER':
      return 'CENTER'
    case 'SPACE_EVENLY':
    case 'SPACE_BETWEEN':
      return 'SPACE_BETWEEN'
    default:
      return align
  }
}

/**
 * Maps layout sizing value to its string representation.
 * Original: iV
 * @param sizing - The layout sizing value.
 * @returns The string representation.
 */
export function layoutSizingToString(sizing) {
  switch (sizing) {
    case mKm.FIXED:
      return 'FIXED'
    case mKm.HUG_CONTENT:
      return 'HUG'
    case mKm.FILL_CONTAINER:
      return 'FILL'
    default:
      return sizing
  }
}

/**
 * Maps string representation to layout sizing enum.
 * Original: iG
 * @param sizing - The string representation.
 * @returns The layout sizing enum value.
 */
export function stringToLayoutSizing(sizing) {
  switch (sizing) {
    case 'FIXED':
      return mKm.FIXED
    case 'HUG':
      return mKm.HUG_CONTENT
    case 'FILL':
      return mKm.FILL_CONTAINER
    default:
      return sizing
  }
}

/**
 * Normalizes text case and small caps values for VM.
 * Original: iz
 * @param vm - The VM context.
 * @param fallback - The fallback value.
 * @param textCase - The text case value.
 * @param smallCaps - The small caps value.
 * @returns The normalized string value.
 */
export function normalizeTextCase(vm, fallback, textCase, smallCaps) {
  if (textCase === 'mixed')
    return fallback
  let result = textCase || 'ORIGINAL'
  if (smallCaps !== undefined && result === 'ORIGINAL') {
    if (smallCaps === 'mixed')
      return fallback
    if (smallCaps === 'SMALL')
      result = 'SMALL_CAPS'; else if (smallCaps === 'ALL_SMALL')
      result = 'SMALL_CAPS_FORCED'
  }
  return vm.newString(result)
}

/**
 * Defines a VM property for grid track sizes (row or column) with getter and setter.
 * Original: tnode0
 * @param dimension - 'row' or 'column'
 * @param propName - Property name (e.g., 'gridRowSizes', 'gridColumnSizes')
 * @param context - Object containing VM, getNode, and defineVmProp
 * @param handle - VM handle for the property
 */
export function defineGridTrackSizesProperty(dimension, propName, {
  vm,
  getNode,
  defineVmProp,
}, handle) {
  defineVmProp({
    handle,
    key: propName,
    options: {
      enumerable: true,
      metricsKey: `node.${propName}`,
      get() {
        const node = getNode(this)
        const arr = vm.newArray()
        const sizes = dimension === 'column' ? node.gridColumnSizesInOrder : node.gridRowSizesInOrder
        for (let idx = 0; idx < sizes.length; idx++) {
          const sizeObj = sizes[idx]
          if (!sizeObj)
            continue
          vm.defineProp(arr, String(idx), {
            enumerable: true,
            get() {
              const track = vm.newObject()
              // Track type property
              vm.defineProp(track, 'type', {
                enumerable: true,
                get: () => vm.newString(sAE[sizeObj.maxSizing.type]),
                set(val) {
                  permissionScopeHandler.plugin('plugin-grid-track-size', () => {
                    node.setGridTrackType(dimension, idx, sAE[_$$u({
                      vm,
                      handle: val,
                      zSchema: _$$N.GridTrackSizingType,
                      property: 'gridTrackSizeType',
                    })])
                  })
                  return vm.undefined
                },
              })
              // Track value property
              vm.defineProp(track, 'value', {
                enumerable: true,
                get: () => vm.newNumber(sizeObj.maxSizing.value),
                set(val) {
                  permissionScopeHandler.plugin('plugin-grid-track-size', () => {
                    node.setGridTrackSize(dimension, idx, _$$u({
                      vm,
                      handle: val,
                      zSchema: _$$N.PositiveFloat,
                      property: 'gridTrackSizeValue',
                    }))
                  })
                  return vm.undefined
                },
              })
              return track
            },
            set(val) {
              const parsed = _$$u({
                vm,
                handle: val,
                zSchema: _$$N.GridTrackSize,
                property: propName,
              })
              permissionScopeHandler.plugin('plugin-grid-track-size', () => {
                node.setGridTrackType(dimension, idx, sAE[parsed.type])
                if (parsed.type === 'FIXED') {
                  if (!parsed.value) {
                    throw new Error('Grid track size value must be non-negative for FIXED tracks')
                  }
                  node.setGridTrackSize(dimension, idx, parsed.value)
                }
              })
              return vm.undefined
            },
          })
        }
        return arr
      },
      set(val) {
        const node = getNode(this)
        const sizes = dimension === 'column' ? node.gridColumnSizesInOrder : node.gridRowSizesInOrder
        const parsedArr = _$$u({
          vm,
          handle: val,
          zSchema: _$$z.array(_$$N.GridTrackSize),
          property: propName,
        })
        if (parsedArr.length !== sizes.length) {
          throw new Error(`Grid track sizes must be the same length as the grid ${dimension} count`)
        }
        for (let idx = 0; idx < parsedArr.length; idx++) {
          const item = parsedArr[idx]
          if (!item)
            throw new Error(`Grid track size is undefined at index ${idx}`)
          permissionScopeHandler.plugin('plugin-grid-track-size', () => {
            node.setGridTrackType(dimension, idx, sAE[item.type])
            if (item.value)
              node.setGridTrackSize(dimension, idx, item.value)
          })
        }
        return vm.undefined
      },
    },
    canWriteInReadOnly: false,
    hasEditScope: true,
  })
}

/**
 * Factory for min/max width/height VM property definitions.
 * Original: inode1
 * @param propName - The property name (e.g., 'minWidth')
 * @param boundType - 'min' or 'max'
 */
export function defineMinMaxProperty(propName, boundType) {
  return function ({
    vm,
    defineVmProp,
    getNode,
  }, handle) {
    defineVmProp({
      handle,
      key: propName,
      options: {
        enumerable: true,
        metricsKey: `node.${propName}`,
        get() {
          const val = getNode(this)[propName]
          return val == null ? vm.$$null : vm.newNumber(val)
        },
        set(val) {
          const node = getNode(this)
          const parsed = _$$u({
            vm,
            handle: val,
            zSchema: _$$N.PositiveFloat.nullable(),
            property: propName,
          })
          if (parsed != null) {
            const parent = node.parentNode
            if (node.stackMode === 'NONE' && (!parent || parent.stackMode === 'NONE')) {
              throw new Error(`Can only set ${propName} on auto layout nodes and their children`)
            }
            if (node.type === 'SLIDE')
              throw new Error(`Cannot set ${propName} on slide nodes`)
            if (boundType === 'min' && parsed === 0) {
              throw new Error(`${propName} cannot be set to 0, use null to unset`)
            }
            if (boundType === 'max' && parsed === Infinity) {
              throw new Error(`${propName} cannot be set to Infinity, use null to unset`)
            }
          }
          getFeatureFlags().dse_min_max_plugin_behavior
            ? Egt?.setNodeTransformProperties(node.guid, {
              [propName]: parsed,
            })
            : node[propName] = parsed
          return vm.undefined
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: true,
    })
  }
}

/**
 * Validates and returns width/height for resizing nodes.
 * Original: rnode2
 */
export function validateResizeDimensions(node, widthHandle, heightHandle, vm) {
  const width = _$$u({
    vm,
    handle: widthHandle,
    zSchema: _$$N.PositiveFloat,
    property: 'width',
  })
  const height = _$$u({
    vm,
    handle: heightHandle,
    zSchema: _$$N.PositiveFloat,
    property: 'height',
  })
  if (node.type === 'VECTOR' && Math.abs(width) < 0.01 && Math.abs(height) < 0.01) {
    throw new Error('Cannot set width and height of vector node to zero')
  }
  if (node.type === 'SECTION' && node.sectionContentsHidden)
    throw new Error('Cannot resize hidden sections')
  if (node.type === 'SLIDE')
    throw new Error('Cannot resize slide nodes')
  return {
    width,
    height,
  }
}

/**
 * Factory for independent stroke weight VM property definitions.
 * Original: anode3
 * @param propName - The property name (e.g., 'strokeTopWeight')
 * @param nodeField - The corresponding node field (e.g., 'borderTopWeight')
 */
export function defineStrokeWeightProperty(propName, nodeField) {
  return function ({
    vm,
    defineVmProp,
    getNode,
  }, handle) {
    defineVmProp({
      handle,
      key: propName,
      options: {
        enumerable: true,
        metricsKey: `node.${propName}`,
        get() {
          const node = getNode(this)
          const val = node.borderStrokeWeightsIndependent ? node[nodeField] : node.strokeWeight
          return vm.newNumber(val)
        },
        set(val) {
          const node = getNode(this)
          const parsed = _$$u({
            vm,
            handle: val,
            zSchema: _$$N.PositiveFloat,
            property: propName,
          })
          node[nodeField] = parsed
          const allEqual = [node.borderTopWeight, node.borderBottomWeight, node.borderLeftWeight, node.borderRightWeight].every(v => v === parsed)
          if (allEqual) {
            node.borderStrokeWeightsIndependent = false
            node.strokeWeight = parsed
          }
          else {
            node.borderStrokeWeightsIndependent = true
          }
          return vm.undefined
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: true,
    })
  }
}

/**
 * Checks and returns publish status for a node.
 * Original: snode4
 * @param node - The node to check
 * @returns Promise<string> - The publish status
 */
async function getNodePublishStatus(node) {
  QC(debugState)
  await NW
  const state = debugState.getState()
  const file = d1(state)
  if (!file)
    return 'UNPUBLISHED'
  const fileId = _$$l2(file)
  if (node.type === 'SYMBOL') {
    const components = state.library.publishedByLibraryKey.components
    const symbol = bp(fileId, file.team_id, node.guid, components)
    if (!symbol || symbol.unpublished_at)
      return 'UNPUBLISHED'
    if (symbol.content_hash) {
      return node.getSharedSymbolVersion() === symbol.content_hash ? 'CURRENT' : 'CHANGED'
    }
  }
  else if (node.isStateGroup) {
    const stateGroups = state.library.publishedByLibraryKey.stateGroups
    const group = bp(fileId, file.team_id, node.guid, stateGroups)
    return !group || group.unpublished_at ? 'UNPUBLISHED' : node.getSharedStateGroupVersion() === group.version ? 'CURRENT' : 'CHANGED'
  }
  return 'UNPUBLISHED'
}

/**
 * Processes OpenType feature settings for a node, combining and normalizing features.
 * Original function: lnode6
 *
 * @param params - Object containing the VM context and mixed sentinel value.
 * @param features - Array of enabled OpenType features.
 * @param disables - Array of disabled OpenType features.
 * @param numberCase - Number case style ('OLDSTYLE' | 'LINING' | 'mixed').
 * @param numberSpacing - Number spacing style ('PROPORTIONAL' | 'TABULAR' | 'mixed').
 * @param fraction - Fraction style ('STACKED' | 'mixed').
 * @param script - Script style ('SUPER' | 'SUB' | 'mixed').
 * @returns A deeply wrapped and frozen object representing OpenType features, or the mixed sentinel if any input is 'mixed'.
 */
export function processOpenTypeFeatures({
  vm,
  mixedSentinel,
}, features, disables, numberCase, numberSpacing, fraction, script) {
  if (features === 'mixed' || disables === 'mixed' || numberCase === 'mixed' || numberSpacing === 'mixed' || fraction === 'mixed' || script === 'mixed') {
    return mixedSentinel
  }
  const result: any = {}

  // Enable features
  for (const feature of features) {
    result[feature] = true
  }

  // Disable features
  for (const feature of disables) {
    if (result[feature]) {
      delete result[feature]
    }
    else {
      result[feature] = false
    }
  }

  // Number case
  if (numberCase === 'OLDSTYLE')
    result.ONUM = true; else if (numberCase === 'LINING')
    result.LNUM = true

  // Number spacing
  if (numberSpacing === 'PROPORTIONAL')
    result.PNUM = true; else if (numberSpacing === 'TABULAR')
    result.TNUM = true

  // Fraction
  if (fraction === 'STACKED')
    result.FRAC = true

  // Script
  if (script === 'SUPER')
    result.SUPS = true; else if (script === 'SUB')
    result.SUBS = true
  const wrapped = vm.deepWrap(result)
  vm.deepFreezeObject(wrapped)
  return wrapped
}

export function dnode7(e, t) {
  if (!e) {
    throw new Error(`Cannot ${t} in a plugin without an ID. Make sure your plugin manifest has a valid "id" field.`)
  }
}

/**
 * Fetches related links for a node, optionally including children.
 * Refactored from cnode8 for clarity and maintainability.
 *
 * @param params - Object containing VM context, options, resource string, node getter, and scene graph.
 * @returns A promise resolving to the related links data.
 */
export function fetchRelatedLinks({
  vmThis,
  vm,
  vmOptions,
  resourceStr,
  getNode,
  sceneGraph,
}) {
  const node = getNode(vmThis)
  const openFileKey = debugState.getState().openFile?.key
  const {
    promise,
    resolve,
    reject,
  } = vm.newPromise()
  if (!node || !openFileKey) {
    reject(vm.deepWrap(`unable to fetch ${resourceStr}`))
    return promise
  }
  const options = _$$u({
    vm,
    handle: vmOptions,
    zSchema: _$$z.object({
      includeChildren: _$$z.boolean().optional(),
    }).optional(),
    property: 'includeChildren',
  })
  if (options?.includeChildren) {
    vm.registerPromise(async function () {
      const {
        fileKey,
      } = await resolveNodeFileKey(node, openFileKey)
      return await SD(fileKey)
    }()).then(async (result) => {
      const {
        nodeId,
      } = await resolveNodeFileKey(node, openFileKey)
      const sceneType = new ReduxSceneGraph(sceneGraph.getSceneType())
      const nodeGuids = result.map(e => sceneGraph.guidFromDeveloperFriendlyId(e.nodeId) || e.nodeId)
      const subtreeNodes = new Set(node.filterSubtreeNodes(nodeGuids))
      const relatedLinks: any[] = []
      const mainComponentId1 = k4([nodeId], sceneType)
      const mainComponentId2 = _$$Yi([nodeId], sceneType)
      result.forEach((item) => {
        const guid = sceneGraph.guidFromDeveloperFriendlyId(item.nodeId)
        if (item.nodeId === nodeId || subtreeNodes.has(guid) || mainComponentId1 && item.mainComponentId === mainComponentId1 || mainComponentId2 && item.mainComponentId === mainComponentId2) {
          relatedLinks.push({
            url: item.linkUrl,
            name: item.linkName,
            nodeId: item.nodeId,
            isInherited: !!item.mainComponentId,
            inheritedNodeId: item.mainComponentId,
          })
        }
      })
      resolve(vm.deepWrap(relatedLinks))
    }).catch(() => reject(vm.newString('Failed to get related links')))
  }
  else {
    vm.registerPromise(async function () {
      const {
        fileKey,
        nodeId,
      } = await resolveNodeFileKey(node, openFileKey)
      return await TU({
        fileKey,
        nodeId,
        includeInheritedLinks: true,
      })
    }()).then((result) => {
      const links = result.map(item => ({
        url: item.linkUrl,
        name: item.linkName,
        isInherited: !!item.mainComponentId,
        nodeId: item.nodeId,
        inheritedNodeId: item.mainComponentId,
      }))
      resolve(vm.deepWrap(links))
    }).catch((err) => {
      reject(vm.deepWrap(`unable to fetch related links ${err}`))
    })
  }
  return promise
}

/**
 * Resolves the file key and node ID for a given node and open file key.
 * Refactored from unode9 for clarity and maintainability.
 *
 * @param node - The node to resolve.
 * @param openFileKey - The open file key.
 * @returns An object containing fileKey and nodeId.
 */
async function resolveNodeFileKey(node, openFileKey) {
  const libraryInfo = (await M4.fetch(Cs.LibrariesByLibraryKeysQuery({
    libraryKeys: [node.sourceLibraryKey],
    subscriptionFileKey: debugState.getState().openFile?.key ?? null,
    orgId: debugState.getState().currentUserOrgId,
  })))[0]
  let resolvedFileKey = null

  // Extract file key based on library info type
  if (libraryInfo) {
    if (ZA(libraryInfo) && xA(libraryInfo)) {
      resolvedFileKey = libraryInfo.hub_file_id
    }
    else if ('library_file_key' in libraryInfo) {
      resolvedFileKey = libraryInfo.library_file_key
    }
  }
  if (libraryInfo && resolvedFileKey !== null && resolvedFileKey !== openFileKey && node.publishID && fn(sH(node.publishID))) {
    return {
      fileKey: resolvedFileKey,
      nodeId: CUU.developerFriendlyIdFromGuid(node.publishID, node.sceneGraph.scene) || node.publishID,
    }
  }
  else {
    return {
      fileKey: openFileKey,
      nodeId: CUU.developerFriendlyIdFromGuid(node.guid, node.sceneGraph.scene) || node.guid,
    }
  }
}

/**
 * Adds a related link to a node.
 * Refactored from mnode10 for clarity and maintainability.
 *
 * @param params - Object containing VM context, URL, name, resource name, plugin ID, and node getter.
 * @returns A promise that resolves when the link is added.
 */
export function addRelatedLink({
  vmThis,
  vm,
  vmUrl,
  vmName,
  resourceName,
  pluginID,
  getNode,
}) {
  const node = getNode(vmThis)
  const openFileKey = debugState.getState().openFile?.key
  const url = _$$u({
    vm,
    handle: vmUrl,
    zSchema: _$$z.string(),
    property: 'url',
  })
  const name = _$$u({
    vm,
    handle: vmName,
    zSchema: _$$z.string().optional(),
    property: 'name',
  })
  const {
    promise,
    resolve,
    reject,
  } = vm.newPromise()
  if (node && openFileKey) {
    vm.registerPromise(async function () {
      const {
        fileKey,
        nodeId,
      } = await resolveNodeFileKey(node, openFileKey)
      return await Iy({
        fileKey,
        nodeId,
        name,
        url,
        nodeType: node?.type,
        source: 'plugin',
        pluginId: pluginID,
      })
    }()).then(() => {
      resolve(vm.undefined)
    }).catch((err) => {
      reject(vm.deepWrap(`unable to add ${resourceName} ${err}`))
    })
  }
  else {
    reject(vm.deepWrap(`unable to add ${resourceName}`))
  }
  return promise
}

/**
 * Edits a related link for a node.
 * Refactored from gnode11 for clarity and maintainability.
 *
 * @param params - Object containing VM context, current URL, new value, resource name, plugin ID, and node getter.
 * @returns A promise that resolves when the link is edited.
 */
export function editRelatedLink({
  vm,
  vmThis,
  vmCurrentUrl,
  vmNewValue,
  resourceName,
  pluginID,
  getNode,
}) {
  const node = getNode(vmThis)
  const openFileKey = debugState.getState().openFile?.key
  const currentUrl = _$$u({
    vm,
    handle: vmCurrentUrl,
    zSchema: _$$z.string(),
    property: 'currentUrl',
  })
  const newValue = _$$u({
    vm,
    handle: vmNewValue,
    zSchema: _$$z.strictObject({
      name: _$$z.string().optional(),
      url: _$$z.string().optional(),
    }),
    property: 'newValue',
  })
  const {
    promise,
    resolve,
    reject,
  } = vm.newPromise()
  if (node && openFileKey) {
    vm.registerPromise(async function () {
      const {
        fileKey,
        nodeId,
      } = await resolveNodeFileKey(node, openFileKey)
      return await Me({
        fileKey,
        nodeId,
        newValue,
        currentUrl,
        nodeType: node?.type,
        source: 'plugin',
        pluginId: pluginID,
      })
    }()).then(() => {
      resolve(vm.undefined)
    }).catch((err) => {
      reject(vm.deepWrap(`unable to edit ${resourceName} ${err}`))
    })
  }
  else {
    reject(vm.deepWrap(`unable to edit ${resourceName}`))
  }
  return promise
}

/**
 * Deletes a related link from a node.
 * Refactored from fnode12 for clarity and maintainability.
 *
 * @param vm - The VM context.
 * @param vmThis - The VM "this" context.
 * @param vmUrl - The VM handle for the URL.
 * @param resourceName - The resource name.
 * @param pluginID - The plugin ID.
 * @param getNode - Function to get the node.
 * @returns A promise that resolves when the link is deleted.
 */
export function deleteRelatedLink(vm, vmThis, vmUrl, resourceName, pluginID, getNode) {
  const node = getNode(vmThis)
  const openFileKey = debugState.getState().openFile?.key
  const url = _$$u({
    vm,
    handle: vmUrl,
    zSchema: _$$z.string(),
    property: 'url',
  })
  const {
    promise,
    resolve,
    reject,
  } = vm.newPromise()
  if (node && openFileKey) {
    vm.registerPromise(async function () {
      const {
        fileKey,
        nodeId,
      } = await resolveNodeFileKey(node, openFileKey)
      return await WV({
        fileKey,
        nodeId,
        url,
        nodeType: node?.type,
        source: 'plugin',
        pluginId: pluginID,
      })
    }()).then(() => {
      resolve(vm.undefined)
    }).catch((err) => {
      reject(vm.deepWrap(`unable to delete ${resourceName} ${err}`))
    })
  }
  else {
    reject(vm.deepWrap(`unable to delete ${resourceName}`))
  }
  return promise
}

/**
 * Sets a link preview for a related link on a node.
 * Refactored from ynode13 for clarity and maintainability.
 *
 * @param params - Object containing VM context, URL, link preview, plugin IDs, API mode, resource name, and node getter.
 * @returns A promise that resolves when the preview is set.
 */
export function setRelatedLinkPreview({
  vm,
  vmThis,
  vmUrl,
  vmLinkPreview,
  pluginID,
  pluginVersionID,
  apiMode,
  resourceName,
  getNode,
}) {
  const node = getNode(vmThis)
  const openFileKey = debugState.getState().openFile?.key
  const url = _$$u({
    vm,
    handle: vmUrl,
    zSchema: _$$z.string(),
    property: 'url',
  })
  const linkPreviewJson = _$$u({
    vm,
    handle: vmLinkPreview,
    zSchema: _$$N.PlainTextContent,
    property: 'linkPreview',
  })
  const {
    promise,
    resolve,
    reject,
  } = vm.newPromise()
  if (!node || !openFileKey) {
    reject(vm.deepWrap(`unable to set ${resourceName} preview`))
    return promise
  }
  const isTrusted = Up().has(pluginID)
  const isLocal = (apiMode.type === 'CONSOLE_SHIM' || !pluginVersionID) && getFeatureFlags().plugins_related_links_local
  if (isTrusted || isLocal) {
    vm.registerPromise(async function () {
      const {
        fileKey,
        nodeId,
      } = await resolveNodeFileKey(node, openFileKey)
      return await Co({
        fileKey,
        nodeId,
        url,
        linkPreviewJson,
      })
    }()).then(() => {
      resolve(vm.undefined)
    }).catch((err) => {
      reject(vm.deepWrap(`unable to set ${resourceName} preview ${err}`))
    })
  }
  else {
    reject(vm.deepWrap(`unable to set ${resourceName} preview with untrusted plugin`))
  }
  return promise
}

export function it(e) {
  switch (e) {
    case 'WEB':
      return y0x.WEB
    case 'ANDROID':
      return y0x.ANDROID
    case 'iOS':
      return y0x.iOS
  }
}

let onode5 = false

/**
 * Validates a collection ID
 * @param collectionId - The collection ID to validate
 * @returns The validated collection ID
 * @throws Error if collection ID is invalid
 */
export function ensureValidCollectionId(collectionId) {
  if (!_$$fn2(collectionId)) {
    throw new Error('Invalid collection id')
  }
  return collectionId
}

/**
 * Validates and extracts collection ID from VM handle with proper error handling
 * @param params - Configuration object containing validation parameters
 * @param params.callerName - Name of the calling function for error messages
 * @param params.consoleLogger - Logger for warnings
 * @param params.getNode - Function to get node from handle
 * @param params.incrementalSafeApi - Flag for incremental safe API mode
 * @param params.pluginVersionID - Plugin version ID
 * @param params.vm - Virtual machine instance
 * @param params.vmHandle - VM handle to process
 * @param params.allowIncrementalUnsafeApiCalls - Flag to allow unsafe calls
 * @returns Validated collection ID
 * @throws Error if validation fails
 */
export function validateAndExtractCollectionId({
  callerName,
  consoleLogger,
  getNode,
  incrementalSafeApi,
  pluginVersionID,
  vm,
  vmHandle,
  allowIncrementalUnsafeApiCalls,
}) {
  // Early return for object case (node)
  if (vm.isObject(vmHandle)) {
    const node = getNode(vmHandle)
    if (node?.type !== 'VARIABLE_SET') {
      throw new Error(`Cannot call ${callerName} with a non-collection node.`)
    }
    return ensureValidCollectionId(vm.getStringProp(vmHandle, 'id'))
  }

  // Early return for string case (collection ID)
  if (vm.isString(vmHandle)) {
    if (incrementalSafeApi && !allowIncrementalUnsafeApiCalls) {
      throw new Error(`Cannot call ${callerName} with a collection id in incremental mode. Please pass the collection node instead.`)
    }
    if (incrementalSafeApi && allowIncrementalUnsafeApiCalls || !pluginVersionID) {
      consoleLogger.warn(`Calling ${callerName} with a collection id is deprecated. Please pass the collection node instead.`)
    }
    return ensureValidCollectionId(_$$u({
      vm,
      handle: vmHandle,
      zSchema: _$$z.string(),
      property: 'collectionId',
    }))
  }

  // Invalid handle type
  throw new Error(`Cannot call ${callerName} without a collection node parameter.`)
}

/**
 * convertBuildStatusToString - Convert build status enum to string representation
 *
 * Maps internal build status enumeration values to their corresponding string representations
 * for API responses and external communication.
 *
 * @param buildStatus - The build status enumeration value
 * @returns String representation of the build status
 */
export function convertBuildStatusToString(buildStatus) {
  const statusMap = {
    [zIx.BUILD]: 'READY_FOR_DEV',
    [zIx.COMPLETED]: 'COMPLETED',
    [zIx.NONE]: 'NONE',
  }
  return statusMap[buildStatus]
}

/**
 * Original function: iq
 * Processes text case for small caps, validating font support and adjusting text case and font variant caps accordingly.
 * @param node - The text node to process
 * @param start - Start index of the text range
 * @param end - End index of the text range
 * @param textCase - The text case value ('SMALL_CAPS', 'SMALL_CAPS_FORCED', or others)
 * @returns Object containing adjusted textCase and fontVariantCaps values
 */
export function processTextCaseForSmallCaps(node, start, end, textCase) {
  // Early return for non-small caps cases
  if (textCase !== 'SMALL_CAPS' && textCase !== 'SMALL_CAPS_FORCED') {
    return {
      textCase,
      fontVariantCaps: 'NORMAL',
    }
  }

  // Validate font support for small caps
  const fontFeatures = node.getRangeAllFontOpenTypeFeatures(start, end) || []
  if (textCase === 'SMALL_CAPS' && !fontFeatures.includes('SMCP')) {
    throw new Error('"SMALL_CAPS" not supported by one or more fonts')
  }
  if (textCase === 'SMALL_CAPS_FORCED' && !fontFeatures.includes('C2SC')) {
    throw new Error('"SMALL_CAPS_FORCED" not supported by one or more fonts')
  }

  // Adjust values for small caps
  let adjustedTextCase = textCase
  let fontVariantCaps = 'NORMAL'
  if (textCase === 'SMALL_CAPS') {
    adjustedTextCase = 'ORIGINAL'
    fontVariantCaps = 'SMALL'
  }
  else if (textCase === 'SMALL_CAPS_FORCED') {
    adjustedTextCase = 'ORIGINAL'
    fontVariantCaps = 'ALL_SMALL'
  }
  return {
    textCase: adjustedTextCase,
    fontVariantCaps,
  }
}

let tY = getSceneGraphInstance()

// Phase 19: Extracted Navigation Action Processing
export function tZNew(e) {
  // Use extracted Phase 19 Advanced Navigation Processor
  // Original massive switch statement logic moved to ./modules/navigation-action-processing.ts
  const navigationProcessor = new AdvancedNavigationProcessor()
  return navigationProcessor.processConnectionAction(e)
}

// Phase 19: Extracted Variable Data Processing
export function tQNewVariableData(e) {
  // Use extracted Phase 19 Advanced Navigation Processor for variable data processing
  // Original function logic moved to ./modules/navigation-action-processing.ts
  const navigationProcessor = new AdvancedNavigationProcessor()
  return navigationProcessor.processVariableData(e)
}

export function denormalizeTransition(transitionConfig) {
  const transitionData: any = {}
  let isValidTransition = true
  const transitionType = String(transitionConfig.transitionType || 'INSTANT_TRANSITION')
  switch (transitionType) {
    case 'INSTANT_TRANSITION':
      return null
    case 'DISSOLVE':
    case 'SMART_ANIMATE':
    case 'SCROLL_ANIMATE':
      transitionData.type = transitionType
      break
    default:
      // Handle slide, push, and move transitions
      switch (true) {
        case transitionType.includes('SLIDE_FROM_'):
          transitionData.type = 'SLIDE_IN'
          break
        case transitionType.includes('SLIDE_OUT_TO_'):
          transitionData.type = 'SLIDE_OUT'
          break
        case transitionType.includes('PUSH_FROM_'):
          transitionData.type = 'PUSH'
          break
        case transitionType.includes('MOVE_FROM_'):
          transitionData.type = 'MOVE_IN'
          break
        case transitionType.includes('MOVE_OUT_TO_'):
          transitionData.type = 'MOVE_OUT'
          break
        default:
          isValidTransition = false
      }

      // Determine direction from transition type
      transitionData.direction = (function (transitionTypeName) {
        switch (true) {
          case transitionTypeName.includes('_LEFT'):
            return 'RIGHT'
          case transitionTypeName.includes('_RIGHT'):
            return 'LEFT'
          case transitionTypeName.includes('_TOP'):
            return 'BOTTOM'
          case transitionTypeName.includes('_BOTTOM'):
            return 'TOP'
          default:
            isValidTransition = false
            return null
        }
      }(transitionType))
      transitionData.matchLayers = !!transitionConfig.transitionShouldSmartAnimate
      if (!isValidTransition) {
        _$$k2.warn('Node contains a Transition Type that the plugin API does not support')
        return null
      }
  }

  // Process easing
  const easingData: any = {}
  switch (transitionConfig.easingType || 'OUT_CUBIC') {
    case 'IN_CUBIC':
      easingData.type = 'EASE_IN'
      break
    case 'OUT_CUBIC':
      easingData.type = 'EASE_OUT'
      break
    case 'INOUT_CUBIC':
      easingData.type = 'EASE_IN_AND_OUT'
      break
    case 'LINEAR':
      easingData.type = 'LINEAR'
      break
    case 'IN_BACK_CUBIC':
      easingData.type = 'EASE_IN_BACK'
      break
    case 'OUT_BACK_CUBIC':
      easingData.type = 'EASE_OUT_BACK'
      break
    case 'INOUT_BACK_CUBIC':
      easingData.type = 'EASE_IN_AND_OUT_BACK'
      break
    case 'CUSTOM_CUBIC':
      easingData.type = 'CUSTOM_CUBIC_BEZIER'
      break
    case 'GENTLE_SPRING':
      easingData.type = 'GENTLE'
      break
    case 'SPRING_PRESET_ONE':
      easingData.type = 'QUICK'
      break
    case 'SPRING_PRESET_TWO':
      easingData.type = 'BOUNCY'
      break
    case 'SPRING_PRESET_THREE':
      easingData.type = 'SLOW'
      break
    case 'CUSTOM_SPRING':
      easingData.type = 'CUSTOM_SPRING'
  }

  // Handle custom easing functions
  const easingFunction = Array.isArray(transitionConfig.easingFunction) ? transitionConfig.easingFunction : []
  if (transitionConfig.easingType === 'CUSTOM_CUBIC' && easingFunction.length === 4) {
    easingData.easingFunctionCubicBezier = {
      x1: easingFunction[0],
      y1: easingFunction[1],
      x2: easingFunction[2],
      y2: easingFunction[3],
    }
  }
  else if (transitionConfig.easingType === 'CUSTOM_SPRING' && easingFunction.length >= 3) {
    easingData.easingFunctionSpring = {
      mass: easingFunction[0],
      stiffness: easingFunction[1],
      damping: easingFunction[2],
    }
  }
  transitionData.easing = easingData
  transitionData.duration = transitionConfig.transitionDuration || 0.3
  return transitionData
}

export function tZ(connectionConfig) {
  // tZ - Process connection configuration for different connection types (NONE, BACK, CLOSE, URL, SET_VARIABLE, SET_VARIABLE_MODE, CONDITIONAL)

  switch (connectionConfig.connectionType || 'NONE') {
    case 'NONE':
      return null
    case 'BACK':
      return {
        type: 'BACK',
      }
    case 'CLOSE':
      return {
        type: 'CLOSE',
      }
    case 'URL': {
      const urlConnection = {
        type: 'URL',
        url: connectionConfig.connectionURL || '',
        openInNewTab: connectionConfig.openUrlInNewTab ?? true,
      }
      return urlConnection
    }
    case 'SET_VARIABLE': {
      const targetVariableId = connectionConfig.targetVariable?.id
      let resolvedVariableId = null
      if (targetVariableId) {
        resolvedVariableId = debugStateI(targetVariableId)
      }
      return {
        type: 'SET_VARIABLE',
        variableId: resolvedVariableId,
        variableValue: tQNewVariableData(connectionConfig.targetVariableData),
      }
    }
    case 'SET_VARIABLE_MODE': {
      if (!getFeatureFlags().prototype_set_mode_action) {
        return null
      }
      const targetVariableSetId = connectionConfig.targetVariableSetID
      let resolvedCollectionId = null
      if (targetVariableSetId) {
        resolvedCollectionId = gr.fromKiwi(targetVariableSetId)
      }
      return {
        type: 'SET_VARIABLE_MODE',
        variableCollectionId: resolvedCollectionId,
        variableModeId: dI(connectionConfig.targetVariableModeID),
      }
    }
    case 'CONDITIONAL': {
      const conditionalActions: any[] = []
      if (connectionConfig.conditionalActions) {
        for (const conditionalAction of connectionConfig.conditionalActions) {
          /**
           * Processes a conditional action configuration into a structured action group.
           * @param conditionalActionConfig - The configuration object for the conditional action.
           * @returns An object containing the processed actions and optional condition.
           */
          function processConditionalAction(conditionalActionConfig) {
            const actionGroup: any = {
              actions: [],
            }

            // Early return if config is undefined
            if (conditionalActionConfig === undefined) {
              return actionGroup
            }

            // Process condition if present
            if (conditionalActionConfig.condition !== undefined) {
              actionGroup.condition = tQNewExpressionParser(conditionalActionConfig.condition)
            }

            // Process actions if present
            if (conditionalActionConfig.actions !== undefined && Array.isArray(conditionalActionConfig.actions)) {
              const processedActions: any[] = []
              for (const action of conditionalActionConfig.actions) {
                const processedAction = tZNew(action)
                if (processedAction !== null) {
                  processedActions.push(processedAction)
                }
              }
              actionGroup.actions = processedActions
            }
            return actionGroup
          }

          const processedAction = processConditionalAction(conditionalAction)
          conditionalActions.push(processedAction)
        }
      }
      return {
        type: 'CONDITIONAL',
        conditionalBlocks: conditionalActions,
      }
    }
    case 'UPDATE_MEDIA_RUNTIME': {
      if (connectionConfig.mediaAction === undefined) {
        return null
      }
      switch (connectionConfig.mediaAction) {
        case 'PLAY':
        case 'PAUSE':
        case 'TOGGLE_PLAY_PAUSE':
        case 'MUTE':
        case 'UNMUTE':
        case 'TOGGLE_MUTE_UNMUTE': {
          const transitionNodeId = dI(connectionConfig.transitionNodeID)
          const targetNode = transitionNodeId ? tY.get(transitionNodeId) : null
          return {
            type: 'UPDATE_MEDIA_RUNTIME',
            destinationId: targetNode ? tY.guidFromDeveloperFriendlyId(targetNode.guid) : null,
            mediaAction: connectionConfig.mediaAction,
          }
        }
        case 'SKIP_FORWARD':
        case 'SKIP_BACKWARD': {
          const transitionNodeId = dI(connectionConfig.transitionNodeID)
          const targetNode = transitionNodeId ? tY.get(transitionNodeId) : null
          const targetNodeGuid = targetNode ? tY.guidFromDeveloperFriendlyId(targetNode.guid) : null
          const skipAmount = connectionConfig.mediaSkipByAmount || 5
          return {
            type: 'UPDATE_MEDIA_RUNTIME',
            destinationId: targetNodeGuid,
            mediaAction: connectionConfig.mediaAction,
            skipAmount,
          }
        }
        case 'SKIP_TO': {
          const transitionNodeId = dI(connectionConfig.transitionNodeID)
          const targetNode = transitionNodeId ? tY.get(transitionNodeId) : null
          const targetNodeGuid = targetNode ? tY.guidFromDeveloperFriendlyId(targetNode.guid) : null
          const skipToTime = connectionConfig.mediaSkipToTime || 0
          return {
            type: 'UPDATE_MEDIA_RUNTIME',
            destinationId: targetNodeGuid,
            mediaAction: connectionConfig.mediaAction,
            newTimestamp: skipToTime,
          }
        }
        default:
          _$$k2.warn('Prototype action contains a Connection Type that the plugin API does not support')
          return null
      }
    }
    case 'INTERNAL_NODE': {
      const navigationData: NavigationAction = {
        type: 'NODE',
      }
      const transitionNodeId = dI(connectionConfig.transitionNodeID)
      const targetNode = transitionNodeId ? tY.get(transitionNodeId) : null
      const navigationType = connectionConfig.navigationType || 'NAVIGATE'

      // Set destination ID and overlay position
      if (targetNode) {
        navigationData.destinationId = tY.guidFromDeveloperFriendlyId(targetNode.guid)
        if (navigationType === 'OVERLAY' && targetNode.overlayPositionType === 'MANUAL') {
          navigationData.overlayRelativePosition = {
            x: connectionConfig.overlayRelativePosition?.x || 0,
            y: connectionConfig.overlayRelativePosition?.y || 0,
          }
        }
      }
      else {
        navigationData.destinationId = null
      }

      // Set navigation type
      switch (navigationType) {
        case 'NAVIGATE':
        case 'SWAP':
        case 'OVERLAY':
        case 'SCROLL_TO':
          navigationData.navigation = navigationType
          break
        case 'SWAP_STATE':
          navigationData.navigation = 'CHANGE_TO'
          break
        default:
          _$$k2.warn('Prototype action contains a Navigation Type that the plugin API does not support')
          navigationData.navigation = null
      }

      // Process transition
      navigationData.transition = denormalizeTransition(connectionConfig)
      navigationData.resetVideoPosition = !!connectionConfig.transitionResetVideoPosition

      // Handle scroll position settings
      const hasPreserveScrollSetting = connectionConfig.transitionPreserveScroll !== undefined
      if (connectionConfig.transitionResetScrollPosition !== undefined) {
        navigationData.resetScrollPosition = connectionConfig.transitionResetScrollPosition
      }
      else if (hasPreserveScrollSetting) {
        navigationData.preserveScrollPosition = connectionConfig.transitionPreserveScroll
      }
      if (connectionConfig.transitionResetInteractiveComponents !== undefined) {
        navigationData.resetInteractiveComponents = connectionConfig.transitionResetInteractiveComponents
      }
      return navigationData
    }
    case 'OBJECT_ANIMATION':
      return {
        type: 'OBJECT_ANIMATION',
      }
    default:
      return null
  }
}

export function tQNewExpressionParser(e) {
  // Use extracted Phase 21 Advanced Variable Parser
  // Original tQ function logic moved to ./modules/variable-expression-processing.ts
  const variableProcessor = createAdvancedVariableExpressionProcessor(undefined,
    // config
    {
      w1,
      Hr,
    },
    // hrUtilities
    debugStateI,
    // dIFunction
    _$$sH) // sHFunction  );
  const variableParser = createAdvancedVariableParser(variableProcessor, debugStateI)
  return variableParser.convertVariableToInternal(e)
}

export const NodeAPI = {
  /**
   * Returns a string representation of the node.
   * Original: toString
   */
  toString({
    vm,
    defineVmFunction,
  }, handle) {
    defineVmFunction({
      handle,
      key: 'toString',
      metricsKey: 'node.toString',
      /**
       * Callback to return string representation.
       */
      cb() {
        const idStr = vm.toString(vm.getProp(this, 'id'))
        return vm.newString(`[Node ${idStr}]`)
      },
      isAllowedInReadOnly: true,
      hasEditScope: false,
    })
  },
  /**
   * Clones the node if allowed in the current editor context.
   * Throws if cloning is not supported for the node type or editor.
   * Original: clone
   */
  clone({
    getNodeFactory,
    editorType,
    defineVmFunction,
    getNode,
    documentAccessState,
  }, handle) {
    defineVmFunction({
      handle,
      key: 'clone',
      metricsKey: 'node.clone',
      /**
       * Callback to perform node cloning.
       */
      cb() {
        const node = getNode(this)
        const nodeType = node.type
        const isDesignOrIllustration = editorType === _$$nT.Design || editorType === _$$nT.Illustration
        const isWhiteboard = editorType === _$$nT.Whiteboard
        if (nodeType === 'DOCUMENT' || isDesignOrIllustration && _$$tO.includes(nodeType) || isWhiteboard && fx.includes(nodeType)) {
          throw new Error(`Cloning ${nodeType} nodes is not supported in the current editor`)
        }
        if (editorType === _$$nT.Sites && nodeType === 'CANVAS')
          throw new Error('Cannot add pages to a Site')
        if (node.isResponsiveSet)
          throw new Error('Cannot clone a webpage')
        const cloned = node.clone()
        if (nodeType === 'CANVAS') {
          markPageLoaded(cloned, documentAccessState, {
            ignoreReduxState: true,
          })
        }
        return getNodeFactory().createNode(cloned, 'node.clone')
      },
      isAllowedInReadOnly: false,
      hasEditScope: true,
    })
  },
  cloneWidget({
    vm: e,
    pluginID: t,
    getNodeFactory: i,
    widgetManager: n,
    defineVmFunction: r,
    getNode: a,
    sceneGraph: s,
  }, o) {
    r({
      handle: o,
      key: 'cloneWidget',
      metricsKey: 'node.cloneWidget',
      cb(r, o) {
        if (!n)
          return e.undefined
        let l = a(this)
        if (l.widgetId !== t)
          return e.undefined
        let d = l.clone()
        let c = i().createNode(d, 'node.cloneWidget')
        let u = a(c)
        u.reversedChildrenGuids.forEach((e) => {
          let t = s.get(e)
          t?.removeSelfAndChildren()
        })
        let {
          syncedState,
          syncedMap,
        } = processWidgetSyncData(e, r, o)
        _$$rJ(u, syncedState, syncedMap)
        n.scheduleRender(d)
        return c
      },
      isAllowedInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  setWidgetSyncedState({
    vm: e,
    pluginID: t,
    widgetManager: i,
    pluginVersionID: n,
    defineVmFunction: r,
    getNode: a,
  }, s) {
    r({
      handle: s,
      key: 'setWidgetSyncedState',
      metricsKey: 'node.setWidgetSyncedState',
      cb(r, s) {
        if (!i) {
          _$$k2.warn('Attempting to set widget synced state from a plugin. This is not supported.')
          return e.undefined
        }
        let o = a(this)
        let l = o.widgetId
        let d = o.guid
        if (l !== t)
          return e.undefined
        if (o.widgetVersionId !== n) {
          let t = !o.widgetVersionId
          let i = !n
          if (i !== t) {
            i && !t && _$$k2.warn('Attempting to set widget synced state from a widget that is a local widget to a published widget.')
            !i && t && _$$k2.warn('Attempting to set widget synced state from a published widget to a local widget.')
            return e.undefined
          }
          o.widgetVersionId = n
        }
        let {
          syncedState,
          syncedMap,
        } = processWidgetSyncData(e, r, s)
        _$$sH2(o, syncedState, syncedMap)
        i.scheduleRender(d)
        return e.undefined
      },
      isAllowedInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  remove({
    vm: e,
    defineVmFunction: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'remove',
      metricsKey: 'node.remove',
      cb() {
        i(this).removeSelfAndChildren()
        return e.undefined
      },
      isAllowedInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  exportNode({
    vm,
    defineVmFunction,
    getNode,
    validatedPermissions,
    documentAccessState,
    pluginID,
    editorType,
    openFileKey,
  }, handle) {
    defineVmFunction({
      handle,
      key: 'exportAsync',
      metricsKey: 'node.exportAsync',
      cb: (settingsHandle) => {
        const {
          promise,
          resolve,
          reject,
        } = vm.newPromise()
        try {
          // Track export analytics if enabled
          this.trackExportAnalytics(pluginID, editorType, openFileKey)
          const node = getNode(this)
          documentAccessState.checkAllowedPage(node, {
            method: 'exportAsync',
          })

          // Parse and validate export settings
          const settings = this.parseExportSettings(settingsHandle, validatedPermissions, vm)

          // Handle special export formats
          if (this.isSpecialFormat(settings.format)) {
            return this.handleSpecialFormat(node, settings, vm, resolve)
          }

          // Validate SVG export constraints
          this.validateSvgExportConstraints(node, settings, reject, vm)

          // Process export
          vm.registerPromise(this.processNodeExport(node, settings)).then(exportData => this.handleExportSuccess(exportData, settings, resolve, reject, vm)).catch(error => this.handleExportError(error, reject, vm, openFileKey, pluginID))
        }
        catch (error) {
          this.handleUnexpectedError(error, openFileKey, pluginID)
          return promise
        }
        return promise
      },
      isAllowedInReadOnly: true,
      hasEditScope: false,
    })
  },
  // Helper methods for export functionality
  trackExportAnalytics(pluginID, editorType, openFileKey) {
    if (getFeatureFlags().plugins_check_viewer_export_restricted && !CQ()) {
      az.trackDefinedEvent('extensibility.plugins_check_viewer_export_restricted', {
        apiMethod: 'node.exportAsync',
        pluginId: pluginID,
        editorType: Bu(editorType),
        fileKey: openFileKey,
        userId: o8(),
      })
    }
  },
  parseExportSettings(settingsHandle, validatedPermissions, vm) {
    const hasSpecialPermissions = validatedPermissions.permissions.includes('cortex') || validatedPermissions.permissions.includes('firstdraft')
    const settingsSchema = _$$N.getExportAsyncSetting(hasSpecialPermissions)
    let settings = _$$u({
      vm,
      handle: settingsHandle,
      zSchema: settingsSchema.optional(),
      property: 'settings',
    }) || {
      format: 'PNG',
    }

    // Handle SVG_STRING format conversion
    if (settings.format === 'SVG_STRING') {
      settings.format = 'SVG'
      settings._returnAsString = true
    }
    return settings
  },
  isSpecialFormat(format) {
    return format === 'JSON_REST_V1' || format === 'FIRST_DRAFT_JSON'
  },
  handleSpecialFormat(node, settings, vm, resolve) {
    if (settings.format === 'JSON_REST_V1') {
      resolve(vm.deepWrap(node.getRestfulJSON()))
    }
    else if (settings.format === 'FIRST_DRAFT_JSON') {
      resolve(vm.deepWrap(node.getFirstDraftJSON()))
    }
  },
  validateSvgExportConstraints(node, settings, reject, vm) {
    const isInternalOnlyNode = this.checkInternalOnlyNode(node)
    if (isInternalOnlyNode && settings.format === 'SVG' && settings.contentsOnly !== true) {
      reject(vm.newString('You must set contentsOnly to true when exporting a remote component as an SVG'))
    }
  },
  checkInternalOnlyNode(node) {
    let currentNode = node
    while (currentNode) {
      if (currentNode.isInternalOnlyNode)
        return true
      currentNode = currentNode.parentNode
    }
    return false
  },
  processNodeExport(node, settings) {
    return node.loadImagesAndExport(iw([settings]))
  },
  handleExportSuccess(exportData, settings, resolve, reject, vm) {
    if (exportData.length === 0) {
      reject(vm.newString('Failed to export node. This node may not have any visible layers.'))
      return
    }
    if (settings._returnAsString) {
      const svgString = new TextDecoder().decode(exportData)
      resolve(vm.newString(svgString))
    }
    else {
      resolve(vm.newUint8Array(exportData))
    }
  },
  handleExportError(error, reject, vm, openFileKey, pluginID) {
    x1('node.exportAsync', 'Failed at node.loadImagesAndExport', {
      error,
      fileKey: openFileKey,
      pluginId: pluginID,
    }, {
      reportAsSentryError: true,
      logToConsole: NUh.NEVER,
    })
    reject(vm.newString('Failed to export node'))
  },
  handleUnexpectedError(error, openFileKey, pluginID) {
    x1('node.exportAsync', 'Unexpected error', {
      error,
      fileKey: openFileKey,
      pluginId: pluginID,
    }, {
      reportAsSentryError: true,
      logToConsole: NUh.NEVER,
    })
    return error
  },
  resolvedVariableModes({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'resolvedVariableModes',
      canWriteInReadOnly: !1,
      hasEditScope: !1,
      options: {
        enumerable: !0,
        metricsKey: 'node.resolvedVariableModes',
        get() {
          return e.deepWrap(i(this).resolvedVariableModes())
        },
      },
    })
  },
  explicitVariableModes({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'explicitVariableModes',
      canWriteInReadOnly: !1,
      hasEditScope: !1,
      options: {
        enumerable: !0,
        metricsKey: 'node.explicitVariableModes',
        get() {
          return e.deepWrap(i(this).explicitVariableModes())
        },
      },
    })
  },
  parent({
    vm: e,
    getNodeFactory: t,
    defineVmProp: i,
    getNode: n,
  }, r) {
    i({
      handle: r,
      key: 'parent',
      options: {
        enumerable: !0,
        metricsKey: 'node.parent',
        get() {
          let i = n(this).parentGuid
          if (i === null)
            return e.$$null
          let r = t().createNode(i, 'node.parent')
          let a = n(r)
          return a.type === 'CANVAS' && a.isInternalOnlyNode ? e.$$null : r
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !1,
    })
  },
  getTopLevelFrame({
    vm: e,
    getNodeFactory: t,
    defineVmFunction: i,
    getNode: n,
    editorType: r,
  }, a) {
    i({
      handle: a,
      key: 'getTopLevelFrame',
      metricsKey: 'node.getTopLevelFrame',
      cb() {
        if (r !== _$$nT.Design && r !== _$$nT.Illustration)
          throw new Error('getTopLevelFrame is only available in Figma Design')
        let i = n(this)
        let a = i.findContainingTopLevelFrameOrSelf()
        return a === null || a === AD ? e.undefined : i.guid === a ? this : t().createNode(a, 'node.topLevelFrame')
      },
      isAllowedInReadOnly: !0,
      hasEditScope: !1,
    })
  },
  name({
    vm: e,
    defineVmProp: t,
    getNode: i,
    documentAccessState: n,
  }, r) {
    t({
      handle: r,
      key: 'name',
      options: {
        enumerable: !0,
        metricsKey: 'node.name',
        get() {
          let t = i(this)
          return t.type === 'DOCUMENT' ? e.newString(Y5.getCurrentFileName()) : e.newString(t.name)
        },
        set(t) {
          let r = i(this)
          if (r.type === 'TEXT' || MT(r.type)) {
            r.autoRename = !1
          }
          else if (r.type === 'DOCUMENT') {
            if (e.isString(t)) {
              _$$k2.warn('Setting the document name is currently not supported')
              return e.undefined
            }
            throw new Error('Setting the document name is currently not supported')
          }
          r.name = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$z.string(),
            property: 'name',
          })
          if (r.type === 'CANVAS') {
            if (n.hasLoadedPageId(r.guid)) {
              let e = uS({
                openFile: debugState.getState().openFile,
                loadedPageNode: r,
                pageName: r.name,
              })
              r.isPageDivider = e
            }
            else {
              _$$i2(r, r.name) ? _$$k2.warn('Cannot set page divider status for unloaded pages. Please call loadAsync() first.') : r.isPageDivider = !1
            }
          }
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  isPageDivider({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'isPageDivider',
      options: {
        enumerable: !0,
        metricsKey: 'node.isPageDivider',
        get() {
          return e.newBoolean(i(this).isPageDivider)
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !1,
    })
  },
  isHomepage({
    vm: e,
    defineVmProp: t,
    getNode: i,
    editorType: n,
    sceneGraph: r,
  }, a) {
    t({
      handle: a,
      key: 'isHomepage',
      options: {
        enumerable: !0,
        metricsKey: 'node.isHomepage',
        get() {
          let t = i(this)
          let n = t.containingCanvas
          let a = r.get(n)
          return e.newBoolean(a?.defaultResponsiveSetId === t.id)
        },
        set(t) {
          let a = i(this)
          let s = getNodeById(a.containingCanvas, r)
          if (!a || !s || a.type !== 'RESPONSIVE_SET' && a.type !== 'WEBPAGE') {
            _$$k2.warn('Cannot call homepageId on non webpage node')
            return e.undefined
          }
          if (n !== _$$nT.Sites) {
            _$$k2.warn('Cannot call homepageId on non Sites editor')
            return e.undefined
          }
          if (_$$u({
            vm: e,
            handle: t,
            zSchema: _$$z.boolean(),
            property: 'isHomepage',
          })) {
            let e = s?.setDefaultResponsiveSetId(a.id)
            e && _$$k2.error(e)
          }
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  visible({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'visible',
      options: {
        enumerable: !0,
        metricsKey: 'node.visible',
        get() {
          return e.newBoolean(i(this).visible)
        },
        set(t) {
          i(this).visible = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$z.boolean(),
            property: 'visible',
          })
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  locked({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'locked',
      options: {
        enumerable: !0,
        metricsKey: 'node.locked',
        get() {
          return e.newBoolean(i(this).locked)
        },
        set(t) {
          let n = i(this)
          n.type === 'SLIDE_GRID' || n.type === 'SLIDE_ROW' || n.type === 'SLIDE' || (n.locked = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$z.boolean(),
            property: 'locked',
          }))
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  expanded({
    vm: e,
    editorType: t,
    defineVmProp: i,
    getNode: n,
  }, r) {
    i({
      handle: r,
      key: 'expanded',
      options: {
        enumerable: !0,
        metricsKey: 'node.expanded',
        get() {
          return e.newBoolean(n(this).isExpanded)
        },
        set(i) {
          t === _$$nT.DevHandoff || (n(this).isExpanded = _$$u({
            vm: e,
            handle: i,
            zSchema: _$$z.boolean(),
            property: 'expanded',
          }))
          return e.undefined
        },
      },
      canWriteInReadOnly: !0,
      hasEditScope: !0,
    })
  },
  removed({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'removed',
      options: {
        enumerable: !0,
        metricsKey: 'node.removed',
        get() {
          try {
            i(this)
            return e.newBoolean(!1)
          }
          catch (t) {
            if (t instanceof ApplicationError)
              return e.newBoolean(!0)
            throw t
          }
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  children({
    vm: e,
    getNodeFactory: t,
    defineVmProp: i,
    documentAccessState: n,
    getNode: r,
    sceneGraph: a,
  }, s) {
    i({
      handle: s,
      key: 'children',
      options: {
        enumerable: !0,
        metricsKey: 'node.children',
        get() {
          let i = e.newArray()
          let s = r(this)
          n.checkAllowedPage(s, {
            property: 'children',
          })
          if (s.type === 'TABLE') {
            let n = s.sortedTableCells
            for (let r = 0; r < n.length; r++) e.setProp(i, r.toString(), t().createNode(n[r], 'node.children'))
          }
          else {
            let n = s.reversedChildrenGuids
            let r = n.length
            if (e.getStringProp(this, 'id') !== '0:0') {
              for (let a = 0; a < r; a++) {
                e.setProp(i, a.toString(), t().createNode(n[r - a - 1], 'node.children'))
              }
            }
            else {
              for (let s = 0; s < r; s++) {
                let l = n[r - s - 1]
                if (!getNodeById(l, a).isInternalOnlyNode) {
                  e.setProp(i, onode5.toString(), t().createNode(l, 'node.children'))
                  onode5++
                }
              }
            }
          }
          e.deepFreezeObject(i)
          return i
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !1,
    })
  },
  stuckNodes({
    vm: e,
    getNodeFactory: t,
    defineVmProp: i,
    getNode: n,
  }, r) {
    i({
      handle: r,
      key: 'stuckNodes',
      options: {
        enumerable: !0,
        metricsKey: 'node.stuckNodes',
        get() {
          let i = e.newArray()
          let r = n(this).stuckNodes.map(e => e.guid)
          for (let n = 0; n < r.length; n++) e.setProp(i, String(n), t().createNode(r[n], 'node.stuckNodes'))
          e.deepFreezeObject(i)
          return i
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !1,
    })
  },
  stuckTo({
    vm: e,
    getNodeFactory: t,
    defineVmProp: i,
    getNode: n,
  }, r) {
    i({
      handle: r,
      key: 'stuckTo',
      options: {
        enumerable: !0,
        metricsKey: 'node.stuckTo',
        get() {
          let i = n(this)
          return i.stickableHost == null ? e.$$null : t().createNode(i.stickableHost, 'node.stuckTo')
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !1,
    })
  },
  findOne({
    vm: e,
    getNodeFactory: t,
    defineVmFunction: i,
    documentAccessState: n,
    getNode: r,
    sceneGraph: a,
  }, s) {
    i({
      handle: s,
      key: 'findOne',
      metricsKey: 'node.findOne',
      cb(i) {
        let s = (n, r) => {
          let o = n.type === 'TABLE' ? n.sortedTableCells.reverse() : n.reversedChildrenGuids
          let l = o.length
          for (let n = 0; n < l; n++) {
            let d = getNodeById(o[l - n - 1], a)
            if (r && d.isInternalOnlyNode || isInImmutableContext(e, d))
              continue
            let c = t().createNode(d.guid, 'node.findOne')
            let u = e.callFunction(i, e.$$null, c)
            if (u.type === 'FAILURE')
              throw new Error(`"findOne" callback crashed: ${u.error.message}`)
            if (e.toBoolean(u.handle))
              return c
            let p = s(d, !1)
            if (void 0 !== p)
              return p
          }
        }
        let o = r(this)
        n.checkAllowedMethodDocumentOrPage(o, {
          method: 'findOne',
        })
        let l = s(o, o.guid === '0:0')
        return void 0 !== l ? l : e.$$null
      },
      isAllowedInReadOnly: !0,
      hasEditScope: !1,
    })
  },
  /**
   * findAll - Traverse node hierarchy and find matching nodes based on callback
   *
   * Recursively traverses the node tree starting from the current node and returns
   * all nodes that match the provided callback function. Handles special cases like
   * table cells, internal nodes, and immutable contexts with proper filtering.
   *
   * @param config - Configuration object with VM, node factory, and utility functions
   * @param handle - VM handle for the node to define the method on
   */
  findAll(config, handle) {
    const {
      defineVmFunction,
    } = config
    defineVmFunction({
      handle,
      key: 'findAll',
      metricsKey: 'node.findAll',
      cb: callbackHandle => this.executeFindAllTraversal(callbackHandle, config),
      isAllowedInReadOnly: true,
      hasEditScope: false,
    })
  },
  /**
   * Execute findAll traversal with callback filtering
   * @private
   */
  executeFindAllTraversal(callbackHandle, config) {
    const {
      vm,
      getNodeFactory,
      documentAccessState,
      getNode,
      sceneGraph,
    } = config
    const hasCallback = vm.toBoolean(callbackHandle)
    const resultArray = vm.newArray()
    let resultIndex = 0
    const traverseNode = (currentNode, isRootLevel) => {
      const children = this.getNodeChildren(currentNode)
      for (let i = children.length - 1; i >= 0; i--) {
        const childNode = getNodeById(children[i], sceneGraph)
        if (this.shouldSkipNode(childNode, isRootLevel, vm)) {
          continue
        }
        const nodeHandle = getNodeFactory().createNode(childNode.guid, 'node.findAll')
        if (this.shouldIncludeNode(nodeHandle, hasCallback, callbackHandle, vm)) {
          vm.setProp(resultArray, String(resultIndex), nodeHandle)
          resultIndex++
        }

        // Recursively traverse child nodes
        traverseNode(childNode, false)
      }
    }
    const rootNode = getNode(this)
    documentAccessState.checkAllowedMethodDocumentOrPage(rootNode, {
      method: 'findAll',
    })
    traverseNode(rootNode, rootNode.guid === '0:0')
    return resultArray
  },
  /**
   * Get children nodes for traversal
   * @private
   */
  getNodeChildren(node) {
    return node.type === 'TABLE' ? node.sortedTableCells.reverse() : node.reversedChildrenGuids
  },
  /**
   * Check if node should be skipped during traversal
   * @private
   */
  shouldSkipNode(node, isRootLevel, vm) {
    return isRootLevel && node.isInternalOnlyNode || isInImmutableContext(vm, node)
  },
  /**
   * Check if node should be included in results
   * @private
   */
  shouldIncludeNode(nodeHandle, hasCallback, callbackHandle, vm) {
    if (!hasCallback) {
      return true
    }
    const callbackResult = vm.callFunction(callbackHandle, vm.$$null, nodeHandle)
    if (callbackResult.type === 'FAILURE') {
      throw new Error(`"findAll" callback crashed: ${callbackResult.error.message}`)
    }
    return vm.toBoolean(callbackResult.handle)
  },
  /**
   * findAllWithCriteria - Find nodes matching specific criteria
   *
   * Uses optimized search with criteria-based filtering for better performance.
   * Supports filtering by node types, plugin data, and shared plugin data with
   * proper validation and namespace checking.
   *
   * @param config - Configuration object with VM, plugin ID, and utility functions
   * @param handle - VM handle for the node to define the method on
   */
  findAllWithCriteria(config, handle) {
    const {
      defineVmFunction,
    } = config
    defineVmFunction({
      handle,
      key: 'findAllWithCriteria',
      metricsKey: 'node.findAllWithCriteria',
      cb: criteriaHandle => this.executeFindAllWithCriteria(criteriaHandle, config),
      isAllowedInReadOnly: true,
      hasEditScope: false,
    })
  },
  /**
   * Execute findAllWithCriteria search
   * @private
   */
  executeFindAllWithCriteria(criteriaHandle, config) {
    const {
      vm,
      getNodeFactory,
      pluginID,
      documentAccessState,
      getNode,
    } = config
    const criteria = _$$u({
      vm,
      handle: criteriaHandle,
      zSchema: _$$N.FindCriteriaWithPluginDataSchema,
      property: 'criteria',
    })
    this.validateCriteria(criteria, pluginID)
    const processedCriteria = this.processCriteria(criteria, pluginID)
    const resultArray = vm.newArray()
    const rootNode = getNode(this)
    documentAccessState.checkAllowedMethodDocumentOrPage(rootNode, {
      method: 'findAllWithCriteria',
    })
    let resultIndex = 0
    for (const [nodeId, nodeType] of rootNode.findAllWithCriteria(processedCriteria)) {
      const nodeHandle = getNodeFactory().createNodeWithDevFriendlyId(nodeId, nodeType.toUpperCase(), 'node.findAllWithCriteria')
      vm.setProp(resultArray, String(resultIndex), nodeHandle)
      resultIndex++
    }
    return resultArray
  },
  /**
   * Validate search criteria
   * @private
   */
  validateCriteria(criteria, pluginID) {
    if (criteria.sharedPluginData?.namespace) {
      validateNamespace(criteria.sharedPluginData.namespace)
    }
    if (criteria.pluginData && !pluginID) {
      throw new Error('Cannot filter by pluginData outside of a plugin')
    }
    if (Object.values(criteria).every(value => !value)) {
      throw new Error('Must specify at least one criteria with findAllWithCriteria')
    }
  },
  /**
   * Process and normalize criteria for search
   * @private
   */
  processCriteria(criteria, pluginID) {
    let processedPluginData
    if (criteria.pluginData && pluginID) {
      processedPluginData = {
        ...criteria.pluginData,
        pluginID,
      }
    }
    return {
      ...criteria,
      types: criteria.types,
      pluginData: processedPluginData,
    }
  },
  findChild({
    vm: e,
    getNodeFactory: t,
    defineVmFunction: i,
    getNode: n,
    sceneGraph: r,
    documentAccessState: a,
  }, s) {
    i({
      handle: s,
      key: 'findChild',
      metricsKey: 'node.findChild',
      cb(i) {
        let s = n(this)
        a.checkAllowedPage(s, {
          method: 'findChild',
        })
        let o = s.guid === '0:0'
        let l = s.reversedChildrenGuids
        let d = l.length
        for (let n = 0; n < d; n++) {
          let a = getNodeById(l[d - n - 1], r)
          if (o && a.isInternalOnlyNode)
            continue
          let s = t().createNode(a.guid, 'node.findChild')
          let c = e.callFunction(i, e.$$null, s)
          if (c.type === 'FAILURE')
            throw new Error(`"findChild" callback crashed: ${c.error.message}`)
          if (e.toBoolean(c.handle))
            return s
        }
        return e.$$null
      },
      isAllowedInReadOnly: !0,
      hasEditScope: !1,
    })
  },
  findChildren({
    vm,
    getNodeFactory,
    defineVmFunction,
    getNode,
    sceneGraph,
    documentAccessState,
  }, handle) {
    defineVmFunction({
      handle,
      key: 'findChildren',
      metricsKey: 'node.findChildren',
      cb(callbackHandle) {
        const node = getNode(this)
        documentAccessState.checkAllowedPage(node, {
          method: 'findChildren',
        })
        const isRoot = node.guid === '0:0'
        const result = vm.newArray()
        let resultIndex = 0
        const children = node.type === 'TABLE' ? node.sortedTableCells.reverse() : node.reversedChildrenGuids
        for (let i = 0; i < children.length; i++) {
          const childNode = getNodeById(children[children.length - i - 1], sceneGraph)
          if (isRoot && childNode.isInternalOnlyNode || isInImmutableContext(vm, childNode)) {
            continue
          }
          const childHandle = getNodeFactory().createNode(childNode.guid, 'node.findChildren')
          const cbResult = vm.callFunction(callbackHandle, vm.$$null, childHandle)
          if (cbResult.type === 'FAILURE') {
            throw new Error(`"findChildren" callback crashed: ${cbResult.error.message}`)
          }
          if (vm.toBoolean(cbResult.handle)) {
            vm.setProp(result, `${resultIndex}`, childHandle)
            resultIndex++
          }
        }
        return result
      },
      isAllowedInReadOnly: true,
      hasEditScope: false,
    })
  },
  findWidgetNodesByWidgetId({
    vm,
    getNodeFactory,
    defineVmFunction,
    getNode,
    sceneGraph,
    documentAccessState,
  }, handle) {
    defineVmFunction({
      handle,
      key: 'findWidgetNodesByWidgetId',
      metricsKey: 'node.findWidgetNodesByWidgetId',
      cb(widgetIdHandle) {
        const result = vm.newArray()
        const widgetId = _$$u({
          vm,
          handle: widgetIdHandle,
          zSchema: _$$z.string(),
          property: 'widgetId',
        })
        if (!widgetId)
          return result
        const node = getNode(this)
        documentAccessState.checkAllowedMethodDocumentOrPage(node, {
          method: 'findWidgetNodesByWidgetId',
        })
        const found = node.findAllWithCriteria({
          types: ['WIDGET'],
        })
        let idx = 0
        found.forEach(([id]) => {
          const n = sceneGraph.get(id)
          if (n?.widgetId !== widgetId)
            return
          const handle = getNodeFactory().createNode(id, 'node.findWidgetNodesByWidgetId')
          vm.setProp(result, idx.toString(), handle)
          idx++
        })
        return result
      },
      isAllowedInReadOnly: true,
      hasEditScope: false,
    })
  },
  loadAsync({
    vm,
    defineVmFunction,
    documentAccessState,
    getNode,
  }, handle) {
    defineVmFunction({
      handle,
      key: 'loadAsync',
      metricsKey: 'node.loadAsync',
      cb() {
        const node = getNode(this)
        if (node.type !== 'CANVAS')
          throw new Error('Cannot call loadAsync on a non-page node.')
        const {
          promise,
          resolve,
          reject,
        } = vm.newPromise()
        vm.registerPromise(ensurePluginPageLoaded(node.guid, documentAccessState)).then(() => {
          resolve(vm.$$null)
        }).catch((err) => {
          reject(vm.newString(err.message))
        })
        return promise
      },
      isAllowedInReadOnly: true,
      hasEditScope: false,
    })
  },
  appendChild({
    vm,
    defineVmFunction,
    getNode,
    sceneGraph,
    documentAccessState,
    enableResponsiveSetHierarchyMutations,
  }, handle) {
    defineVmFunction({
      handle,
      key: 'appendChild',
      metricsKey: 'node.appendChild',
      cb(childHandle) {
        const node = getNode(this)
        if (node.isOrInResponsiveSet && !enableResponsiveSetHierarchyMutations)
          throw new Error('Cannot modify children of nodes in a webpage.')
        documentAccessState.checkAllowedPage(node, {
          method: 'appendChild',
        })
        node.appendChild(getNode(childHandle))
        return vm.$$null
      },
      isAllowedInReadOnly: false,
      hasEditScope: true,
    })
    defineVmFunction({
      handle,
      key: 'insertChild',
      metricsKey: 'node.insertChild',
      cb(indexHandle, childHandle) {
        let index = _$$u({
          vm,
          handle: indexHandle,
          zSchema: _$$N.Integer,
          property: 'index',
        })
        const node = getNode(this)
        if (node.isOrInResponsiveSet && !enableResponsiveSetHierarchyMutations)
          throw new Error('Cannot modify children of nodes in a webpage.')
        documentAccessState.checkAllowedPage(node, {
          method: 'insertChild',
        })
        if (vm.getStringProp(this, 'id') === '0:0') {
          const children = node.reversedChildrenGuids
          let len = children.length
          for (let i = 0; i < len && i < index; i++) {
            if (getNodeById(children[len - i - 1], sceneGraph).isInternalOnlyNode)
              index++
          }
        }
        node.insertChild(getNode(childHandle), index)
        return vm.$$null
      },
      isAllowedInReadOnly: false,
      hasEditScope: true,
    })
  },
  widgetId({
    vm,
    defineVmProp,
    getNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'widgetId',
      options: {
        enumerable: true,
        metricsKey: 'node.widgetId',
        get() {
          const node = getNode(this)
          return node.type !== 'WIDGET' ? (_$$k2.warn('Cannot call widgetId on non widget node'), vm.undefined) : vm.newString(node.widgetId)
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: false,
    })
  },
  widgetSyncedState({
    vm: e,
    pluginID: t,
    defineVmProp: i,
    getNode: n,
  }, r) {
    i({
      handle: r,
      key: 'widgetSyncedState',
      options: {
        enumerable: !0,
        metricsKey: 'node.widgetSyncedState',
        get() {
          let i = n(this)
          return t !== i.widgetId ? e.newObject() : e.deepWrap(RL('current', i))
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !1,
    })
  },
  constraints({
    vm: e,
    defineVmProp: t,
    stats: i,
    getNode: n,
  }, r) {
    t({
      handle: r,
      key: 'constraints',
      options: {
        enumerable: !0,
        metricsKey: 'node.constraints',
        get() {
          let t = n(this)
          if (hasResizeToFit(t) || t.type === 'BOOLEAN_OPERATION')
            return e.undefined
          let i = e.deepWrap({
            horizontal: t.horizontalConstraint,
            vertical: t.verticalConstraint,
          })
          e.deepFreezeObject(i)
          return i
        },
        set(t) {
          let r = n(this)
          if (hasResizeToFit(r)) {
            throw new Error('Groups do not have a constraint property. Please set the constraints on the node\'s children.')
          }
          if (r.type === 'BOOLEAN_OPERATION') {
            throw new Error('Boolean operations do not have a constraint property. Please set the constraints on the node\'s children.')
          }
          let {
            vertical,
            horizontal,
          } = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.Constraints,
            property: 'constraints',
          })
          r.verticalConstraint = vertical
          r.horizontalConstraint = horizontal
          i.stackFieldSet(r.guid, 'horizontal-constraint')
          i.stackFieldSet(r.guid, 'vertical-constraint')
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  layoutAlign({
    vm: e,
    defineVmProp: t,
    stats: i,
    getNode: n,
  }, r) {
    t({
      handle: r,
      key: 'layoutAlign',
      options: {
        enumerable: !0,
        metricsKey: 'node.layoutAlign',
        get() {
          let t
          t = n(this).stackChildAlignSelf
          return e.newString(layoutAlignToString(t))
        },
        set(t) {
          let r = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.LayoutAlign,
            property: 'layoutAlign',
          })
          if (!getFeatureFlags().ce_legacy_al && r !== 'INHERIT' && r !== 'STRETCH') {
            _$$k2.warn(`${r} is no longer a supported value for layoutAlign`)
            return e.undefined
          }
          r === 'INHERIT' && (r = 'AUTO')
          let a = n(this)
          a.stackChildAlignSelf = r
          i.stackFieldSet(a.guid, 'stack-child-align-self')
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  layoutMode({
    vm,
    defineVmProp,
    stats,
    getNode,
    enableResponsiveSetHierarchyMutations,
  }, handle) {
    defineVmProp({
      handle,
      key: 'layoutMode',
      options: {
        enumerable: true,
        metricsKey: 'node.layoutMode',
        get() {
          return vm.newString(getNode(this).stackMode)
        },
        set(value) {
          const node = getNode(this)
          if (node.isOrInResponsiveSet && !enableResponsiveSetHierarchyMutations && !node.isInWidget) {
            throw new Error('Cannot change layoutMode in a webpage')
          }
          const mode = _$$u({
            vm,
            handle: value,
            zSchema: _$$N.LayoutMode,
            property: 'layoutMode',
          })
          if (node.stackWrap === 'WRAP' && mode !== 'HORIZONTAL')
            node.stackWrap = 'NO_WRAP'
          if (mode === 'GRID') {
            node.stackCounterSizing = 'FIXED'
            node.stackPrimarySizing = 'FIXED'
            node.stackMode = mode
            node.setGridRowCount(2)
            node.setGridColumnCount(2)
          }
          else {
            node.stackMode = mode
          }
          stats.stackFieldSet(node.guid, 'stack-mode')
          return vm.undefined
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: true,
    })
  },
  layoutWrap({
    vm,
    defineVmProp,
    stats,
    getNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'layoutWrap',
      options: {
        enumerable: true,
        metricsKey: 'node.layoutWrap',
        get() {
          return vm.newString(getNode(this).stackWrap)
        },
        set(value) {
          const wrap = _$$u({
            vm,
            handle: value,
            zSchema: _$$N.StackWrap,
            property: 'layoutWrap',
          })
          const node = getNode(this)
          if (wrap === 'WRAP' && node.stackMode !== 'HORIZONTAL') {
            throw new Error('Can only set layoutWrap = WRAP on nodes with layoutMode === HORIZONTAL')
          }
          node.stackWrap = wrap
          stats.stackFieldSet(node.guid, 'stack-wrap')
          return vm.undefined
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: true,
    })
  },
  counterAxisAlignContent({
    vm,
    defineVmProp,
    stats,
    getNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'counterAxisAlignContent',
      options: {
        enumerable: true,
        metricsKey: 'node.counterAxisAlignContent',
        get() {
          return vm.newString(getNode(this).stackCounterAlignContent)
        },
        set(value) {
          const node = getNode(this)
          const alignContent = _$$u({
            vm,
            handle: value,
            zSchema: _$$N.StackCounterAlignContent,
            property: 'counterAxisAlignContent',
          })
          node.stackCounterAlignContent = alignContent
          stats.stackFieldSet(node.guid, 'stack-counter-align-content')
          return vm.undefined
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: true,
    })
  },
  counterAxisSizingMode({
    vm,
    defineVmProp,
    stats,
    getNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'counterAxisSizingMode',
      options: {
        enumerable: true,
        metricsKey: 'node.counterAxisSizingMode',
        get() {
          return sizingModeToString(vm, getNode(this).stackCounterSizing)
        },
        set(value) {
          const sizingMode = _$$u({
            vm,
            handle: value,
            zSchema: getFeatureFlags().ce_legacy_al ? _$$N.SizingModeLegacy : _$$N.SizingMode,
            property: 'counterAxisSizingMode',
          })
          const node = getNode(this)
          switch (sizingMode) {
            case 'FIXED':
              node.stackCounterSizing = 'FIXED'
              break
            case 'AUTO':
              node.stackCounterSizing = 'RESIZE_TO_FIT_WITH_IMPLICIT_SIZE'
          }
          stats.stackFieldSet(node.guid, 'stack-counter-sizing')
          return vm.undefined
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: true,
    })
  },
  primaryAxisSizingMode({
    vm,
    defineVmProp,
    stats,
    getNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'primaryAxisSizingMode',
      options: {
        enumerable: true,
        metricsKey: 'node.primaryAxisSizingMode',
        get() {
          return sizingModeToString(vm, getNode(this).stackPrimarySizing)
        },
        set(value) {
          const sizingMode = _$$u({
            vm,
            handle: value,
            zSchema: getFeatureFlags().ce_legacy_al ? _$$N.SizingModeLegacy : _$$N.SizingMode,
            property: 'primaryAxisSizingMode',
          })
          const node = getNode(this)
          switch (sizingMode) {
            case 'FIXED':
              node.stackPrimarySizing = 'FIXED'
              break
            case 'AUTO':
              node.stackPrimarySizing = 'RESIZE_TO_FIT_WITH_IMPLICIT_SIZE'
              break
            case 'LEGACY_AUTO':
              node.stackPrimarySizing = 'RESIZE_TO_FIT'
          }
          stats.stackFieldSet(node.guid, 'stack-primary-sizing')
          return vm.undefined
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: true,
    })
  },
  primaryAxisAlignItems({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'primaryAxisAlignItems',
      options: {
        enumerable: !0,
        metricsKey: 'node.primaryAxisAlignItems',
        get() {
          let t
          t = i(this).stackPrimaryAlignItems
          return e.newString(primaryAxisAlignItemsToString(t))
        },
        set(t) {
          let n = _$$u({
            vm: e,
            handle: t,
            zSchema: getFeatureFlags().ce_legacy_al ? _$$N.StackJustifyLegacy : _$$N.StackJustify,
            property: 'primaryAxisAlignItems',
          })
          let r = i(this)
          switch (n) {
            case 'MIN':
              r.stackPrimaryAlignItems = 'MIN'
              break
            case 'MAX':
              r.stackPrimaryAlignItems = 'MAX'
              break
            case 'CENTER':
              r.stackPrimaryAlignItems = 'CENTER'
              break
            case 'SPACE_BETWEEN':
              r.stackPrimaryAlignItems = getFeatureFlags().ce_stack_justify_space_between ? 'SPACE_BETWEEN' : 'SPACE_EVENLY'
              break
            case 'SPACE_BETWEEN_LEGACY':
              r.stackPrimaryAlignItems = 'SPACE_EVENLY'
          }
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  counterAxisAlignItems({
    vm: e,
    defineVmProp: t,
    stats: i,
    getNode: n,
  }, r) {
    t({
      handle: r,
      key: 'counterAxisAlignItems',
      options: {
        enumerable: !0,
        metricsKey: 'node.counterAxisAlignItems',
        get() {
          return e.newString(n(this).stackCounterAlignItems)
        },
        set(t) {
          let r = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.StackAlign,
            property: 'counterAxisAlignItems',
          })
          let a = n(this)
          if (r === 'BASELINE' && a.stackMode !== 'HORIZONTAL') {
            throw new Error('counterAxisAlignItems = BASELINE can only be set when layoutMode === HORIZONTAL')
          }
          a.stackCounterAlignItems = r
          i.stackFieldSet(a.guid, 'stack-counter-align-items')
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  layoutGrow({
    vm: e,
    defineVmProp: t,
    stats: i,
    getNode: n,
  }, r) {
    t({
      handle: r,
      key: 'layoutGrow',
      options: {
        enumerable: !0,
        metricsKey: 'node.layoutGrow',
        get() {
          return e.newNumber(n(this).stackChildPrimaryGrow)
        },
        set(t) {
          let r = n(this)
          r.stackChildPrimaryGrow = _$$u({
            vm: e,
            handle: t,
            zSchema: getFeatureFlags().sts_some_fill ? _$$N.PositiveInteger : _$$N.ZeroOrOne,
            property: 'layoutGrow',
          })
          i.stackFieldSet(r.guid, 'stack-child-primary-grow')
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  layoutSizingHorizontal({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'layoutSizingHorizontal',
      options: {
        enumerable: !0,
        metricsKey: 'node.layoutSizingHorizontal',
        get() {
          let t = i(this).stackHorizontalLayoutSize
          return e.newString(layoutSizingToString(t))
        },
        set(t) {
          let n = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.LayoutSizing,
            property: 'layoutSizingHorizontal',
          })
          i(this).stackHorizontalLayoutSize = stringToLayoutSizing(n)
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  layoutSizingVertical({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'layoutSizingVertical',
      options: {
        enumerable: !0,
        metricsKey: 'node.layoutSizingVertical',
        get() {
          let t = i(this).stackVerticalLayoutSize
          return e.newString(layoutSizingToString(t))
        },
        set(t) {
          let n = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.LayoutSizing,
            property: 'layoutSizingVertical',
          })
          i(this).stackVerticalLayoutSize = stringToLayoutSizing(n)
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  horizontalPadding({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'horizontalPadding',
      options: {
        enumerable: !0,
        metricsKey: 'node.horizontalPadding',
        get() {
          _$$k2.warn('reading horizontalPadding is no longer supported as left and right padding may differ')
          return e.newNumber(i(this).stackLeftPadding)
        },
        set(t) {
          let n = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.PositiveFloat,
            property: 'horizontalPadding',
          })
          i(this).stackLeftPadding = n
          i(this).stackRightPadding = n
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  verticalPadding({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'verticalPadding',
      options: {
        enumerable: !0,
        metricsKey: 'node.verticalPadding',
        get() {
          _$$k2.warn('reading verticalPadding is no longer supported as top and bottom padding may differ')
          return e.newNumber(i(this).stackTopPadding)
        },
        set(t) {
          let n = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.PositiveFloat,
            property: 'verticalPadding',
          })
          i(this).stackTopPadding = n
          i(this).stackBottomPadding = n
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  paddingLeft({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'paddingLeft',
      options: {
        enumerable: !0,
        metricsKey: 'node.paddingLeft',
        get() {
          return e.newNumber(i(this).stackLeftPadding)
        },
        set(t) {
          i(this).stackLeftPadding = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.PositiveFloat,
            property: 'paddingLeft',
          })
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  paddingRight({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'paddingRight',
      options: {
        enumerable: !0,
        metricsKey: 'node.paddingRight',
        get() {
          return e.newNumber(i(this).stackRightPadding)
        },
        set(t) {
          i(this).stackRightPadding = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.PositiveFloat,
            property: 'paddingRight',
          })
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  paddingTop({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'paddingTop',
      options: {
        enumerable: !0,
        metricsKey: 'node.paddingTop',
        get() {
          return e.newNumber(i(this).stackTopPadding)
        },
        set(t) {
          i(this).stackTopPadding = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.PositiveFloat,
            property: 'paddingTop',
          })
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  paddingBottom({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'paddingBottom',
      options: {
        enumerable: !0,
        metricsKey: 'node.paddingBottom',
        get() {
          return e.newNumber(i(this).stackBottomPadding)
        },
        set(t) {
          i(this).stackBottomPadding = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.PositiveFloat,
            property: 'paddingBottom',
          })
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  itemSpacing({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'itemSpacing',
      options: {
        enumerable: !0,
        metricsKey: 'node.itemSpacing',
        get() {
          return e.newNumber(i(this).stackSpacing)
        },
        set(t) {
          i(this).stackSpacing = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.Float,
            property: 'itemSpacing',
          })
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  counterAxisSpacing({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'counterAxisSpacing',
      options: {
        enumerable: !0,
        metricsKey: 'node.counterAxisSpacing',
        get() {
          return e.newNumber(i(this).stackCounterSpacing)
        },
        set(t) {
          i(this).stackCounterSpacing = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.PositiveFloat.nullable(),
            property: 'counterAxisSpacing',
          })
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  layoutPositioning({
    vm: e,
    defineVmProp: t,
    stats: i,
    getNode: n,
  }, r) {
    t({
      handle: r,
      key: 'layoutPositioning',
      options: {
        enumerable: !0,
        metricsKey: 'node.layoutPositioning',
        get() {
          return e.newString(n(this).stackPositioning)
        },
        set(t) {
          let r = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.LayoutPositioning,
            property: 'layoutPositioning',
          })
          let a = n(this)
          if (r === 'AUTO') {
            a.stackPositioning = r
          }
          else {
            let e = a.parentNode
            if (!e || e.stackMode === 'NONE') {
              throw new Error('Can only set layoutPositioning = ABSOLUTE if the parent node has layoutMode !== NONE')
            }
            a.stackPositioning = r
          }
          i.stackFieldSet(a.guid, 'stack-positioning')
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  gridRowCount({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'gridRowCount',
      options: {
        enumerable: !0,
        metricsKey: 'node.gridRowCount',
        get() {
          return e.newNumber(i(this).gridRowCount)
        },
        set(t) {
          i(this).setGridRowCount(_$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.PositiveInteger,
            property: 'gridRowCount',
          }))
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  gridColumnCount({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'gridColumnCount',
      options: {
        enumerable: !0,
        metricsKey: 'node.gridColumnCount',
        get() {
          return e.newNumber(i(this).gridColumnCount)
        },
        set(t) {
          i(this).setGridColumnCount(_$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.PositiveInteger,
            property: 'gridColumnCount',
          }))
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  gridRowGap({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'gridRowGap',
      canWriteInReadOnly: !1,
      hasEditScope: !0,
      options: {
        enumerable: !0,
        metricsKey: 'node.gridRowGap',
        get() {
          return e.newNumber(i(this).gridRowGap)
        },
        set(t) {
          i(this).gridRowGap = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.PositiveFloat,
            property: 'gridRowGap',
          })
          return e.undefined
        },
      },
    })
  },
  gridColumnGap({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'gridColumnGap',
      options: {
        enumerable: !0,
        metricsKey: 'node.gridColumnGap',
        get() {
          return e.newNumber(i(this).gridColumnGap)
        },
        set(t) {
          i(this).gridColumnGap = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.PositiveFloat,
            property: 'gridColumnGap',
          })
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  gridRowSpan({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'gridRowSpan',
      options: {
        enumerable: !0,
        metricsKey: 'node.gridRowSpan',
        get() {
          return e.newNumber(i(this).gridRowSpan)
        },
        set(t) {
          i(this).gridRowSpan = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.FiniteNumber.min(1).int(),
            property: 'gridRowSpan',
          })
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  gridColumnSpan({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'gridColumnSpan',
      options: {
        enumerable: !0,
        metricsKey: 'node.gridColumnSpan',
        get() {
          return e.newNumber(i(this).gridColumnSpan)
        },
        set(t) {
          i(this).gridColumnSpan = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.FiniteNumber.min(1).int(),
            property: 'gridColumnSpan',
          })
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  gridRowSizes(e, i) {
    defineGridTrackSizesProperty('row', 'gridRowSizes', e, i)
  },
  gridColumnSizes(e, i) {
    defineGridTrackSizesProperty('column', 'gridColumnSizes', e, i)
  },
  appendChildAt(e, t) {
    let {
      vm,
      defineVmFunction,
      getNode,
    } = e
    defineVmFunction({
      handle: t,
      key: 'appendChildAt',
      metricsKey: 'node.appendChildAt',
      isAllowedInReadOnly: !1,
      hasEditScope: !0,
      cb(e, t, n) {
        let a = getNode(this)
        let s = getNode(e)
        let o = _$$u({
          vm,
          handle: n,
          zSchema: _$$N.PositiveInteger,
          property: 'index',
        })
        let l = _$$u({
          vm,
          handle: t,
          zSchema: _$$N.Integer,
          property: 'rowIndex',
        })
        if (o < 0 || l < 0) {
          throw new Error(`Column index and row index must be non-negative integers, got ${o} and ${l}`)
        }
        if (o >= a.gridColumnCount || l >= a.gridRowCount) {
          throw new Error(`Column index ${o} or row index ${l} out of bounds for grid with ${a.gridColumnCount} columns and ${a.gridRowCount} rows`)
        }
        a.appendChildToGridAtPosition(s.guid, l, o)
        return vm.undefined
      },
    })
  },
  setGridChildPosition(e, t) {
    let {
      vm,
      defineVmFunction,
      getNode,
    } = e
    defineVmFunction({
      handle: t,
      key: 'setGridChildPosition',
      metricsKey: 'node.setGridChildPosition',
      isAllowedInReadOnly: !1,
      hasEditScope: !0,
      cb(e, t) {
        getNode(this).setGridChildPosition(_$$u({
          vm,
          handle: e,
          zSchema: _$$N.Integer,
          property: 'rowIndex',
        }), _$$u({
          vm,
          handle: t,
          zSchema: _$$N.PositiveInteger,
          property: 'columnIndex',
        }))
        return vm.undefined
      },
    })
  },
  gridRowAnchorIndex({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'gridRowAnchorIndex',
      options: {
        enumerable: !0,
        metricsKey: 'node.gridRowAnchorIndex',
        get() {
          return e.newNumber(i(this).gridRowAnchorIndex)
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !1,
    })
  },
  gridColumnAnchorIndex({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'gridColumnAnchorIndex',
      options: {
        enumerable: !0,
        metricsKey: 'node.gridColumnAnchorIndex',
        get() {
          return e.newNumber(i(this).gridColumnAnchorIndex)
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !1,
    })
  },
  gridChildHorizontalAlign({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'gridChildHorizontalAlign',
      options: {
        enumerable: !0,
        metricsKey: 'node.gridChildHorizontalAlign',
        get() {
          return e.newString(i(this).gridChildHorizontalAlign)
        },
        set(t) {
          i(this).gridChildHorizontalAlign = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.GridChildAlign,
            property: 'gridChildHorizontalAlign',
          })
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  gridChildVerticalAlign({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'gridChildVerticalAlign',
      options: {
        enumerable: !0,
        metricsKey: 'node.gridChildVerticalAlign',
        get() {
          return e.newString(i(this).gridChildVerticalAlign)
        },
        set(t) {
          i(this).gridChildVerticalAlign = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.GridChildAlign,
            property: 'gridChildVerticalAlign',
          })
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  gridRowSizingCSS({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'gridRowSizingCSS',
      options: {
        enumerable: !0,
        metricsKey: 'node.gridRowSizingCSS',
        get() {
          return e.newString(i(this).gridRowSizingCSS)
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !1,
    })
  },
  gridColumnSizingCSS({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'gridColumnSizingCSS',
      options: {
        enumerable: !0,
        metricsKey: 'node.gridColumnSizingCSS',
        get() {
          return e.newString(i(this).gridColumnSizingCSS)
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !1,
    })
  },
  itemReverseZIndex({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'itemReverseZIndex',
      options: {
        enumerable: !0,
        metricsKey: 'node.itemReverseZIndex',
        get() {
          return e.newBoolean(i(this).stackReverseZIndex)
        },
        set(t) {
          let n = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$z.boolean(),
            property: 'itemReverseZIndex',
          })
          let r = i(this)
          if (r.stackMode === 'NONE') {
            throw new Error('Can only set itemReverseZIndex on nodes with layoutMode !== NONE')
          }
          r.stackReverseZIndex = n
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  strokesIncludedInLayout({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'strokesIncludedInLayout',
      options: {
        enumerable: !0,
        metricsKey: 'node.strokesIncludedInLayout',
        get() {
          return e.newBoolean(i(this).bordersTakeSpace)
        },
        set(t) {
          let n = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$z.boolean(),
            property: 'strokesIncludedInLayout',
          })
          let r = i(this)
          if (r.stackMode === 'NONE') {
            throw new Error('Can only set strokesIncludedInLayout on nodes with layoutMode !== NONE')
          }
          r.bordersTakeSpace = n
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  relativeTransform({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'relativeTransform',
      options: {
        enumerable: !0,
        metricsKey: 'node.relativeTransform',
        get() {
          let t = e.deepWrap(transformMatrixToArray(i(this).relativeTransform))
          e.deepFreezeObject(t)
          return t
        },
        set(t) {
          let n = i(this)
          n.type === 'SLIDE_GRID' || n.type === 'SLIDE_ROW' || n.type === 'SLIDE' || (i(this).relativeTransform = arrayToTransformMatrix(_$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.Matrix,
            property: 'relativeTransform',
          })))
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  absoluteTransform({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'absoluteTransform',
      options: {
        enumerable: !0,
        metricsKey: 'node.absoluteTransform',
        get() {
          let t = e.deepWrap(transformMatrixToArray(i(this).absoluteTransform))
          e.deepFreezeObject(t)
          return t
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !1,
    })
  },
  rotation({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'rotation',
      options: {
        enumerable: !0,
        metricsKey: 'node.rotation',
        get() {
          let t = i(this)
          return e.newNumber(t.rotation)
        },
        set(t) {
          let n = i(this)
          if (n.type === 'SLIDE')
            return e.undefined
          let r = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.Float,
            property: 'rotation',
          })
          n.rotation = r
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  x({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'x',
      options: {
        enumerable: !0,
        metricsKey: 'node.x',
        get() {
          return e.newNumber(i(this).x)
        },
        set(t) {
          let n = i(this)
          n.type === 'SLIDE_GRID' || (n.x = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.Float,
            property: 'x',
          }))
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  y({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'y',
      options: {
        enumerable: !0,
        metricsKey: 'node.y',
        get() {
          return e.newNumber(i(this).y)
        },
        set(t) {
          let n = i(this)
          n.type === 'SLIDE_GRID' || (n.y = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.Float,
            property: 'y',
          }))
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  width({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'width',
      options: {
        enumerable: !0,
        metricsKey: 'node.width',
        get() {
          return e.newNumber(i(this).size.x)
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !1,
    })
  },
  height({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'height',
      options: {
        enumerable: !0,
        metricsKey: 'node.height',
        get() {
          return e.newNumber(i(this).size.y)
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !1,
    })
  },
  devStatus({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'devStatus',
      options: {
        enumerable: !0,
        metricsKey: 'node.devStatus',
        get() {
          let t = i(this).getStatusInfo()
          if (!t || t.status === zIx.NONE)
            return e.$$null
          let n = e.deepWrap({
            type: convertBuildStatusToString(t.status),
            ...(t.description && {
              description: t.description,
            }),
          })
          e.deepFreezeObject(n)
          return n
        },
        set(t) {
          let n = i(this)
          let r = n.parentNode
          if (r?.type !== 'CANVAS' && r?.type !== 'SECTION') {
            throw new Error('Cannot set devStatus on a node that is not directly under a page or section')
          }
          for (; r;) {
            if (r.hasReadyStatus) {
              throw new Error('Cannot set devStatus on a node inside another node with non-null devStatus')
            }
            r = r.parentNode
          }
          let a = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.NodeStatus.nullable(),
            property: 'devStatus',
          })
          if (a?.type === convertBuildStatusToString(zIx.BUILD)) {
            _$$L({
              nodeIds: [n.guid],
              status: zIx.BUILD,
              description: a.description,
              sourceForLogging: 'plugin',
              editScopeType: zkO.PLUGIN,
            })
          }
          else if (a?.type === convertBuildStatusToString(zIx.COMPLETED)) {
            _$$L({
              nodeIds: [n.guid],
              status: zIx.COMPLETED,
              description: a.description,
              sourceForLogging: 'plugin',
              editScopeType: zkO.PLUGIN,
            })
          }
          else {
            let t = n.getStatusInfo()
            if (!t || t.status === zIx.NONE)
              return e.undefined
            _$$L({
              nodeIds: [n.guid],
              status: zIx.NONE,
              sourceForLogging: 'plugin',
              editScopeType: zkO.PLUGIN,
            })
          }
          return e.undefined
        },
      },
      canWriteInReadOnly: !0,
      hasEditScope: !0,
    })
  },
  minWidth: defineMinMaxProperty('minWidth', 'min'),
  minHeight: defineMinMaxProperty('minHeight', 'min'),
  maxWidth: defineMinMaxProperty('maxWidth', 'max'),
  maxHeight: defineMinMaxProperty('maxHeight', 'max'),
  absoluteRenderBounds({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'absoluteRenderBounds',
      options: {
        enumerable: !0,
        metricsKey: 'node.absoluteRenderBounds',
        get() {
          let t = i(this).absoluteRenderBounds
          if (!t)
            return e.$$null
          let n = createVmRect(e, t)
          e.shallowFreezeObject(n)
          return n
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !1,
    })
  },
  absoluteBoundingBox({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'absoluteBoundingBox',
      options: {
        enumerable: !0,
        metricsKey: 'node.absoluteBoundingBox',
        get() {
          let t = i(this).absoluteBoundingBox
          if (!t)
            return e.$$null
          let n = createVmRect(e, t)
          e.shallowFreezeObject(n)
          return n
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !1,
    })
  },
  resizeWithoutConstraints({
    vm: e,
    defineVmFunction: t,
    stats: i,
    getNode: n,
    editorType: a,
  }, s) {
    t({
      handle: s,
      key: 'resizeWithoutConstraints',
      metricsKey: 'node.resizeWithoutConstraints',
      cb(t, s) {
        let o = n(this)
        if (a === _$$nT.Cooper && Pk(o)) {
          throw new Error('Cannot resize Locked Buzz Asset Node or its children')
        }
        o.hasMissingFont && i.resizeNodeWithMissingFont()
        let {
          width,
          height,
        } = validateResizeDimensions(e, o, t, s)
        o.resizeWithoutConstraints(width, height)
        return e.undefined
      },
      isAllowedInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  resizeWithConstraints({
    vm: e,
    defineVmFunction: t,
    stats: i,
    getNode: n,
    editorType: a,
  }, s) {
    t({
      handle: s,
      key: 'resize',
      metricsKey: 'node.resize',
      cb(t, s) {
        let o = n(this)
        if (a === _$$nT.Cooper && Pk(o)) {
          throw new Error('Cannot resize Locked Buzz Asset Node or its children')
        }
        o.hasMissingFont && i.resizeNodeWithMissingFont()
        let {
          width,
          height,
        } = validateResizeDimensions(e, o, t, s)
        o.resizeWithConstraints(width, height)
        return e.undefined
      },
      isAllowedInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  rescale({
    vm: e,
    defineVmFunction: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'rescale',
      metricsKey: 'node.rescale',
      cb(t) {
        let n = i(this)
        if (n.type === 'SLIDE')
          return e.undefined
        let r = _$$u({
          vm: e,
          handle: t,
          zSchema: _$$N.Float,
          property: 'scale',
        })
        let {
          x,
          y,
        } = n.size
        Math.abs(r) * x < 0.01 || Math.abs(r) * y < 0.01 ? _$$k2.warn('Cannot scale node to have a width or height less than 0.01') : n.rescale(r)
        return e.undefined
      },
      isAllowedInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  constrainProportions({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'constrainProportions',
      options: {
        enumerable: !0,
        metricsKey: 'node.constrainProportions',
        get() {
          console.warn('constrainProportions has been replaced by targetAspectRatio. Please use targetAspectRatio going forward.')
          return e.newBoolean(!!i(this).targetAspectRatio)
        },
        set(t) {
          let n = i(this)
          let r = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$z.boolean(),
            property: 'constrainProportions',
          })
          console.warn('constrainProportions has been replaced by targetAspectRatio. Please use lockAspectRatio and unlockAspectRatio going forward.')
          r ? n.lockAspectRatio() : n.unlockAspectRatio()
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  targetAspectRatio({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'targetAspectRatio',
      options: {
        enumerable: !0,
        metricsKey: 'node.targetAspectRatio',
        get() {
          let t = i(this).targetAspectRatio
          if (!t)
            return e.$$null
          let n = e.newObject()
          e.setProp(n, 'x', e.newNumber(t.x))
          e.setProp(n, 'y', e.newNumber(t.y))
          return n
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !1,
    })
  },
  lockAspectRatio({
    vm: e,
    defineVmFunction: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'lockAspectRatio',
      metricsKey: 'node.lockAspectRatio',
      cb() {
        i(this).lockAspectRatio()
        return e.undefined
      },
      isAllowedInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  unlockAspectRatio({
    vm: e,
    defineVmFunction: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'unlockAspectRatio',
      metricsKey: 'node.unlockAspectRatio',
      cb() {
        i(this).unlockAspectRatio()
        return e.undefined
      },
      isAllowedInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  opacity({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'opacity',
      options: {
        enumerable: !0,
        metricsKey: 'node.opacity',
        get() {
          return e.newNumber(i(this).opacity)
        },
        set(t) {
          i(this).opacity = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.ZeroToOne,
            property: 'opacity',
          })
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  blendMode({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'blendMode',
      options: {
        enumerable: !0,
        metricsKey: 'node.blendMode',
        get() {
          return e.newString(i(this).blendMode)
        },
        set(t) {
          i(this).blendMode = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.BlendMode,
            property: 'blendMode',
          })
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  isMask({
    vm,
    defineVmProp,
    getNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'isMask',
      options: {
        enumerable: true,
        metricsKey: 'node.isMask',
        get() {
          return vm.newBoolean(getNode(this).mask)
        },
        set(value) {
          getNode(this).mask = _$$u({
            vm,
            handle: value,
            zSchema: _$$z.boolean(),
            property: 'isMask',
          })
          return vm.undefined
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: true,
    })
  },
  maskType({
    vm,
    defineVmProp,
    getNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'maskType',
      options: {
        enumerable: true,
        metricsKey: 'node.maskType',
        get() {
          const type = getNode(this).maskType
          return vm.newString(type === 'OUTLINE' ? 'VECTOR' : type)
        },
        set(value) {
          const n = _$$u({
            vm,
            handle: value,
            zSchema: _$$N.MaskType,
            property: 'maskType',
          })
          getNode(this).maskType = n === 'VECTOR' ? 'OUTLINE' : n
          return vm.undefined
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: true,
    })
  },
  effects({
    vm,
    defineVmProp,
    getNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'effects',
      options: {
        enumerable: true,
        metricsKey: 'node.effects',
        get() {
          const effects = vm.deepWrap(getNode(this).effects.map(processEffect))
          vm.deepFreezeObject(effects)
          return effects
        },
        set(value) {
          const node = getNode(this)
          node.effects = _$$u({
            vm,
            handle: value,
            zSchema: _$$m().ce_il_root ? _$$N.EffectsIncludingDrawMode : _$$N.Effects,
            property: 'effects',
          }).map(e => processEffectWithValidation(e, node))
          return vm.undefined
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: true,
    })
  },
  effectStyleId({
    vm,
    defineVmIncrementalProp,
    incrementalSafeApi,
    getNode,
    documentAccessState,
    allowIncrementalUnsafeApiCalls,
  }, handle) {
    defineVmIncrementalProp({
      handle,
      key: 'effectStyleId',
      metricsKey: 'node.effectStyleId',
      incrementalSafeApiSetKey: 'setEffectStyleIdAsync',
      incrementalSafeApiSetMetricsKey: 'node.setEffectStyleIdAsync',
      retainGetter: true,
      enumerable: true,
      parseThis: e => getNode(e),
      resolveValue: t => vm.newString(_$$nM(t.inheritedEffectStyle)),
      prepareDocument: async () => {
        await loadInternalCanvasMemoized(documentAccessState)
      },
      setValue: (node, value) => {
        const styleId = _$$eX(_$$u({
          vm,
          handle: value,
          zSchema: _$$z.string(),
          property: 'effectStyleId',
        }))
        node.inheritedEffectStyle = styleId
        return vm.undefined
      },
      incrementalSafeApi,
      parseIncrementalValueArg: t => vm.toString(t),
      setValueIncremental: (node, value) => {
        node.inheritedEffectStyle = _$$eX(value)
        return vm.undefined
      },
      allowIncrementalUnsafeApiCalls,
      canWriteInReadOnly: false,
      hasEditScope: true,
    })
  },
  cornerRadius({
    vm: e,
    defineVmProp: t,
    mixedSentinel: i,
    getNode: n,
  }, r) {
    t({
      handle: r,
      key: 'cornerRadius',
      options: {
        enumerable: !0,
        metricsKey: 'node.cornerRadius',
        get() {
          let t = n(this)
          if (hasResizeToFit(t))
            return e.undefined
          let r = t.cornerRadiusOrMixed
          return r === 'mixed' ? i : e.newNumber(r)
        },
        set(t) {
          let i = n(this)
          if (hasResizeToFit(i)) {
            throw new Error('Groups do not have a cornerRadius property. Please use frames instead.')
          }
          if (i.type === 'SLIDE')
            throw new Error('Cannot set cornerRadius on slide nodes')
          let r = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.PositiveFloat,
            property: 'cornerRadius',
          })
          i.setCornerRadiusAndClobber(r)
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  cornerSmoothing({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'cornerSmoothing',
      options: {
        enumerable: !0,
        metricsKey: 'node.cornerSmoothing',
        get() {
          let t = i(this)
          return hasResizeToFit(t) ? e.undefined : e.newNumber(t.cornerSmoothing)
        },
        set(t) {
          let n = i(this)
          if (hasResizeToFit(n)) {
            throw new Error('Groups do not have a cornerSmoothing property. Please use frames instead.')
          }
          if (n.type === 'SLIDE')
            throw new Error('Cannot set cornerSmoothing on slide nodes')
          n.cornerSmoothing = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.ZeroToOne,
            property: 'cornerSmoothing',
          })
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  /**
   * Handles getting and setting the widget hover style for a node.
   * Refactored for clarity, type safety, and maintainability.
   * Original: widgetHoverStyle
   * @param param0 - Context object containing vm, defineVmProp, imageStore, videoStore, getNode
   * @param handle - The handle for the VM property
   */
  widgetHoverStyle({
    vm,
    defineVmProp,
    imageStore,
    videoStore,
    getNode,
  }, handle) {
    // Only allow in ScopedNoOpVm context
    if (!(vm instanceof ScopedNoOpVm))
      return
    defineVmProp({
      handle,
      key: 'widgetHoverStyle',
      options: {
        enumerable: true,
        metricsKey: 'node.widgetHoverStyle',
        /**
         * Getter for widgetHoverStyle property.
         * Returns a deeply wrapped object containing fill, stroke, and opacity if present.
         */
        get() {
          const node = getNode(this)
          const hoverStyle = node.widgetHoverStyle || {}
          const result: any = {}
          if (hoverStyle.fill) {
            result.fill = convertPaintArrayData(hoverStyle.fill.data)
          }
          if (hoverStyle.stroke) {
            result.stroke = convertPaintArrayData(hoverStyle.stroke.data)
          }
          if (hoverStyle.opacity !== undefined) {
            result.opacity = hoverStyle.opacity
          }
          return vm.deepWrap(result)
        },
        /**
         * Setter for widgetHoverStyle property.
         * Accepts an object with fill, stroke, and opacity, processes paints, and assigns to node.
         */
        set(value) {
          const node = getNode(this)
          const unwrapped = vm.deepUnwrap(value)
          const processed: any = {}
          if (unwrapped.fill) {
            const fillBlobs = []
            processed.fill = {
              data: mapPaintConfigurations(imageStore, videoStore, unwrapped.fill, fillBlobs),
              blobs: fillBlobs,
            }
          }
          if (unwrapped.stroke) {
            const strokeBlobs = []
            processed.stroke = {
              data: mapPaintConfigurations(imageStore, videoStore, unwrapped.stroke, strokeBlobs),
              blobs: strokeBlobs,
            }
          }
          if (unwrapped.opacity !== undefined) {
            processed.opacity = unwrapped.opacity
          }
          node.widgetHoverStyle = processed
          return vm.undefined
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: true,
    })
  },
  fills(e, t) {
    handlePaintProperty(e, t, 'fills')
    const {
      vm,
      defineVmFunction,
      getNode,
      documentAccessState,
      imageStore,
      videoStore,
    } = e
    defineVmFunction({
      handle: t,
      key: 'setFillsAsync',
      metricsKey: 'node.setFillsAsync',
      cb(paintsHandle) {
        const node = getNode(this)
        const paints = _$$u({
          vm,
          handle: paintsHandle,
          zSchema: _$$N.PaintsWithPattern,
          property: 'fills',
        })
        const patternSourceIds: string[] = []
        for (const paint of paints) {
          if (paint.type === 'PATTERN') {
            patternSourceIds.push(paint.sourceNodeId)
          }
        }
        const {
          promise,
          resolve,
          reject,
        } = vm.newPromise()
        vm.registerPromise(loadAllPluginPages(patternSourceIds, documentAccessState)).then(() => {
          for (const id of patternSourceIds) {
            if (!mQ(id)) {
              reject(vm.newString(`Pattern source node ${id} not found`))
              return
            }
          }
          const blobs = []
          const mappedPaints = mapPaintConfigurations(imageStore, videoStore, paints, blobs)
          permissionScopeHandler.plugin('plugin-set-fills-async', () => node.fillPaintsForPluginOnly = {
            data: mappedPaints,
            blobs,
          })
          resolve(vm.undefined)
        }).catch((error) => {
          reject(vm.newString(error))
        })
        return promise
      },
      isAllowedInReadOnly: false,
      hasEditScope: true,
    })
  },
  fillStyleId({
    vm: e,
    defineVmIncrementalProp: t,
    mixedSentinel: i,
    incrementalSafeApi: n,
    getNode: r,
    documentAccessState: a,
    allowIncrementalUnsafeApiCalls: s,
  }, o) {
    t({
      handle: o,
      key: 'fillStyleId',
      metricsKey: 'node.fillStyleId',
      incrementalSafeApiSetKey: 'setFillStyleIdAsync',
      incrementalSafeApiSetMetricsKey: 'node.setFillStyleIdAsync',
      retainGetter: true,
      enumerable: true,
      parseThis: handle => r(handle),
      resolveValue: (node) => {
        const styleId = node.inheritedFillStyleOrMixed
        return styleId === 'mixed' ? i : e.newString(_$$nM(styleId))
      },
      prepareDocument: async () => {
        await loadInternalCanvasMemoized(a)
      },
      setValue: (node, valueHandle) => {
        const styleId = _$$eX(_$$u({
          vm: e,
          handle: valueHandle,
          zSchema: _$$z.string(),
          property: 'fillStyleId',
        }))
        node.inheritedFillStyle = styleId
        return e.undefined
      },
      incrementalSafeApi: n,
      parseIncrementalValueArg: valueHandle => e.toString(valueHandle),
      setValueIncremental: (node, styleIdString) => {
        node.inheritedFillStyle = _$$eX(styleIdString)
        return e.undefined
      },
      allowIncrementalUnsafeApiCalls: s,
      canWriteInReadOnly: false,
      hasEditScope: true,
    })
  },
  strokes({
    vm: e,
    defineVmProp: t,
    defineVmFunction: i,
    imageStore: n,
    videoStore: r,
    getNode: a,
    documentAccessState: s,
  }, o) {
    i({
      handle: o,
      key: 'setStrokesAsync',
      metricsKey: 'node.setStrokesAsync',
      cb(paintsHandle) {
        const node = a(this)
        const paints = _$$u({
          vm: e,
          handle: paintsHandle,
          zSchema: _$$N.PaintsWithPattern,
          property: 'strokes',
        })
        const patternSourceIds: string[] = []
        for (const paint of paints) {
          if (paint.type === 'PATTERN') {
            patternSourceIds.push(paint.sourceNodeId)
          }
        }
        const {
          promise,
          resolve,
          reject,
        } = e.newPromise()
        e.registerPromise(loadAllPluginPages(patternSourceIds, s)).then(() => {
          for (const id of patternSourceIds) {
            if (!mQ(id)) {
              reject(e.newString(`Pattern source node ${id} not found`))
              return
            }
          }
          const blobs = []
          const mappedPaints = mapPaintConfigurations(n, r, paints, blobs)
          permissionScopeHandler.plugin('plugin-set-strokes-async', () => node.strokePaints = {
            data: mappedPaints,
            blobs,
          })
          resolve(e.undefined)
        }).catch((error) => {
          reject(e.newString(error))
        })
        return promise
      },
      isAllowedInReadOnly: false,
      hasEditScope: true,
    })
    t({
      handle: o,
      key: 'strokes',
      options: {
        enumerable: true,
        metricsKey: 'node.strokes',
        get() {
          const node = a(this)
          const strokes = e.deepWrap(convertPaintArrayData(node.strokePaints.data))
          e.deepFreezeObject(strokes)
          return strokes
        },
        set(valueHandle) {
          const node = a(this)
          const paints = _$$u({
            vm: e,
            handle: valueHandle,
            zSchema: _$$N.Paints,
            property: 'strokes',
          })
          const blobs = []
          node.strokePaints = {
            data: mapPaintConfigurations(n, r, paints, blobs),
            blobs,
          }
          return e.undefined
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: true,
    })
  },
  fillGeometry({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'fillGeometry',
      options: {
        enumerable: !0,
        metricsKey: 'node.fillGeometry',
        get() {
          let t = i(this)
          let n = e.deepWrap(t.fillGeometry)
          e.deepFreezeObject(n)
          return n
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !1,
    })
  },
  strokeGeometry({
    vm,
    defineVmProp,
    getNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'strokeGeometry',
      options: {
        enumerable: true,
        metricsKey: 'node.strokeGeometry',
        get() {
          const node = getNode(this)
          const wrapped = vm.deepWrap(node.strokeGeometry)
          vm.deepFreezeObject(wrapped)
          return wrapped
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: false,
    })
  },
  strokeStyleId({
    vm,
    defineVmIncrementalProp,
    incrementalSafeApi,
    getNode,
    documentAccessState,
    allowIncrementalUnsafeApiCalls,
  }, handle) {
    defineVmIncrementalProp({
      handle,
      key: 'strokeStyleId',
      metricsKey: 'node.strokeStyleId',
      incrementalSafeApiSetKey: 'setStrokeStyleIdAsync',
      incrementalSafeApiSetMetricsKey: 'node.setStrokeStyleIdAsync',
      retainGetter: true,
      enumerable: true,
      parseThis: e => getNode(e),
      resolveValue: node => vm.newString(_$$nM(node.inheritedFillStyleForStroke)),
      prepareDocument: async () => {
        await loadInternalCanvasMemoized(documentAccessState)
      },
      setValue: (node, value) => {
        const styleId = _$$eX(_$$u({
          vm,
          handle: value,
          zSchema: _$$z.string(),
          property: 'strokeStyleId',
        }))
        node.inheritedFillStyleForStroke = styleId
        return vm.undefined
      },
      incrementalSafeApi,
      parseIncrementalValueArg: value => vm.toString(value),
      setValueIncremental: (node, value) => {
        node.inheritedFillStyleForStroke = _$$eX(value)
        return vm.undefined
      },
      allowIncrementalUnsafeApiCalls,
      canWriteInReadOnly: false,
      hasEditScope: true,
    })
  },
  strokeWeight({
    vm,
    defineVmProp,
    mixedSentinel,
    getNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'strokeWeight',
      options: {
        enumerable: true,
        metricsKey: 'node.strokeWeight',
        get() {
          const node = getNode(this)
          if (!node.borderStrokeWeightsIndependent)
            return vm.newNumber(node.strokeWeight)
          const {
            borderTopWeight,
            borderBottomWeight,
            borderLeftWeight,
            borderRightWeight,
          } = node
          return borderTopWeight === borderBottomWeight && borderTopWeight === borderLeftWeight && borderTopWeight === borderRightWeight ? vm.newNumber(borderTopWeight) : mixedSentinel
        },
        set(value) {
          const node = getNode(this)
          const weight = _$$u({
            vm,
            handle: value,
            zSchema: _$$N.PositiveFloat,
            property: 'strokeWeight',
          })
          node.strokeWeight = weight
          node.borderStrokeWeightsIndependent = false
          node.borderTopWeight = weight
          node.borderBottomWeight = weight
          node.borderLeftWeight = weight
          node.borderRightWeight = weight
          return vm.undefined
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: true,
    })
  },
  strokeTopWeight: defineStrokeWeightProperty('strokeTopWeight', 'borderTopWeight'),
  strokeBottomWeight: defineStrokeWeightProperty('strokeBottomWeight', 'borderBottomWeight'),
  strokeLeftWeight: defineStrokeWeightProperty('strokeLeftWeight', 'borderLeftWeight'),
  strokeRightWeight: defineStrokeWeightProperty('strokeRightWeight', 'borderRightWeight'),
  strokeAlign({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'strokeAlign',
      options: {
        enumerable: !0,
        metricsKey: 'node.strokeAlign',
        get() {
          return e.newString(i(this).strokeAlign)
        },
        set(t) {
          i(this).strokeAlign = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.StrokeAlign,
            property: 'strokeAlign',
          })
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  strokeCap({
    vm: e,
    defineVmProp: t,
    mixedSentinel: i,
    getNode: n,
  }, r) {
    t({
      handle: r,
      key: 'strokeCap',
      options: {
        enumerable: !0,
        metricsKey: 'node.strokeCap',
        get() {
          let t = n(this).strokeCapOrMixed
          return t === 'mixed' ? i : e.newString(t)
        },
        set(t) {
          n(this).strokeCap = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.StrokeCap,
            property: 'strokeCap',
          })
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  strokeJoin({
    vm: e,
    defineVmProp: t,
    mixedSentinel: i,
    getNode: n,
  }, r) {
    t({
      handle: r,
      key: 'strokeJoin',
      options: {
        enumerable: !0,
        metricsKey: 'node.strokeJoin',
        get() {
          let t = n(this).strokeJoinOrMixed
          return t === 'mixed' ? i : e.newString(t)
        },
        set(t) {
          n(this).strokeJoin = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.StrokeJoin,
            property: 'strokeJoin',
          })
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  handleMirroring({
    vm: e,
    defineVmProp: t,
    mixedSentinel: i,
    getNode: n,
  }, r) {
    t({
      handle: r,
      key: 'handleMirroring',
      options: {
        enumerable: !0,
        metricsKey: 'node.handleMirroring',
        get() {
          let t = n(this).handleMirroringOrMixed
          return t === 'mixed' ? i : e.newString(t)
        },
        set(t) {
          n(this).handleMirroring = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.HandleMirroring,
            property: 'handleMirroring',
          })
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  strokeMiterLimit({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'strokeMiterLimit',
      options: {
        enumerable: !0,
        metricsKey: 'node.strokeMiterLimit',
        get() {
          return e.newNumber(i(this).strokeMiterLimit)
        },
        set(t) {
          i(this).strokeMiterLimit = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.FiniteNumber.min(1).max(16),
            property: 'strokeMiterLimit',
          })
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  dashPattern({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'dashPattern',
      options: {
        enumerable: !0,
        metricsKey: 'node.dashPattern',
        get() {
          let t = i(this)
          let n = e.deepWrap(t.dashPattern)
          e.deepFreezeObject(n)
          return n
        },
        set(t) {
          let n = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$z.array(_$$N.PositiveFloat),
            property: 'dashPattern',
          })
          if (n.length > NfO.getMaxDashPattern())
            throw new Error('A maximum of 8 dash patterns is supported')
          i(this).dashPattern = n
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  backgrounds({
    vm: e,
    defineVmProp: t,
    imageStore: i,
    videoStore: n,
    getNode: r,
  }, a) {
    t({
      handle: a,
      key: 'backgrounds',
      options: {
        enumerable: !0,
        metricsKey: 'node.backgrounds',
        get() {
          let t = r(this)
          let i = t.type !== 'CANVAS' ? e.deepWrap(convertPaintArrayData(t.fills)) : e.deepWrap(convertPaintArrayData(t.backgroundPaints.data))
          e.deepFreezeObject(i)
          return i
        },
        set(t) {
          let a = r(this)
          let s = []
          let o = {
            data: mapPaintConfigurations(i, n, _$$u({
              vm: e,
              handle: t,
              zSchema: _$$N.Paints,
              property: 'backgrounds',
            }), s),
            blobs: s,
          }
          if (a.type !== 'CANVAS') {
            if (hasResizeToFit(a)) {
              _$$k2.warn('backgrounds on groups are no longer supported')
              return e.undefined
            }
            a.fills = o.data
          }
          else {
            for (let e of o.data) {
              if (e.colorVar) {
                throw new Error('page backgrounds cannot be bound to variables')
              }
            }
            a.backgroundPaints = o
          }
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  pageNodeChanges({
    addEventHandlersTo: e,
  }, t) {
    e(t, ['nodechange'], 'node')
  },
  prototypeBackgrounds({
    vm: e,
    defineVmProp: t,
    imageStore: i,
    videoStore: n,
    getNode: r,
  }, a) {
    t({
      handle: a,
      key: 'prototypeBackgrounds',
      options: {
        enumerable: !0,
        metricsKey: 'node.prototypeBackgrounds',
        get() {
          let t = r(this).prototypeBackgroundColor
          let i = [{
            type: 'SOLID',
            color: t,
            visible: !0,
            opacity: t.a,
            blendMode: 'NORMAL',
          }]
          let n = e.deepWrap(convertPaintArrayData(i))
          e.deepFreezeObject(n)
          return n
        },
        set(t) {
          let a = r(this)
          let s = []
          let o = {
            data: mapPaintConfigurations(i, n, _$$u({
              vm: e,
              handle: t,
              zSchema: _$$N.Paints,
              property: 'prototypeBackgrounds',
            }), s),
            blobs: s,
          }
          if (o.data.length !== 1 || o.data[0].type !== 'SOLID') {
            throw new Error('Prototype page backgrounds must be a single solid paint')
          }
          let l = o.data[0]
          if (l.blendMode !== 'NORMAL') {
            throw new Error('Prototype page backgrounds must use the normal blend mode')
          }
          let d = l.opacity ?? 1
          a.prototypeBackgroundColor = {
            ...l.color,
            a: d,
          }
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  backgroundStyleId({
    vm: e,
    defineVmProp: t,
    getNode: i,
    incrementalSafeApi: n,
    allowIncrementalUnsafeApiCalls: r,
  }, a) {
    t({
      handle: a,
      key: 'backgroundStyleId',
      options: {
        enumerable: !0,
        metricsKey: 'node.backgroundStyleId',
        get() {
          let t = i(this)
          let n = _$$nM(t.inheritedFillStyle)
          return e.newString(n)
        },
        set(t) {
          n && checkIncrementalUnsafeMember(r, 'node.backgroundStyleId =', 'node.setFillStyleIdAsync')
          let a = i(this)
          let s = _$$eX(_$$u({
            vm: e,
            handle: t,
            zSchema: _$$z.string(),
            property: 'backgroundStyleId',
          }))
          hasResizeToFit(a) ? _$$k2.warn('backgrounds on groups are no longer supported') : a.inheritedFillStyle = s
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  layoutGrids({
    vm,
    defineVmProp,
    getNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'layoutGrids',
      options: {
        enumerable: true,
        metricsKey: 'node.layoutGrids',
        get() {
          const grids = getNode(this).layoutGrids
          const wrapped = vm.deepWrap(grids === undefined ? [] : grids.map(processGridLayout))
          vm.deepFreezeObject(wrapped)
          return wrapped
        },
        set(value) {
          getNode(this).layoutGrids = _$$u({
            vm,
            handle: value,
            zSchema: _$$N.LayoutGrids,
            property: 'layoutGrids',
          }).map(convertGridLayoutConfig)
          return vm.undefined
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: true,
    })
  },
  gridStyleId({
    vm,
    defineVmIncrementalProp,
    incrementalSafeApi,
    getNode,
    documentAccessState,
    allowIncrementalUnsafeApiCalls,
  }, handle) {
    defineVmIncrementalProp({
      handle,
      key: 'gridStyleId',
      metricsKey: 'node.gridStyleId',
      incrementalSafeApiSetKey: 'setGridStyleIdAsync',
      incrementalSafeApiSetMetricsKey: 'node.setGridStyleIdAsync',
      retainGetter: true,
      enumerable: true,
      parseThis: e => getNode(e),
      resolveValue: node => vm.newString(_$$nM(node.inheritedGridStyle)),
      prepareDocument: async () => {
        await loadInternalCanvasMemoized(documentAccessState)
      },
      setValue: (node, value) => {
        node.inheritedGridStyle = _$$eX(_$$u({
          vm,
          handle: value,
          zSchema: _$$z.string(),
          property: 'gridStyleId',
        }))
        return vm.undefined
      },
      incrementalSafeApi,
      parseIncrementalValueArg: value => vm.toString(value),
      setValueIncremental: (node, value) => {
        node.inheritedGridStyle = _$$eX(value)
        return vm.undefined
      },
      allowIncrementalUnsafeApiCalls,
      canWriteInReadOnly: false,
      hasEditScope: true,
    })
  },
  clipsContent({
    vm,
    defineVmProp,
    getNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'clipsContent',
      options: {
        enumerable: true,
        metricsKey: 'node.clipsContent',
        get() {
          return vm.newBoolean(!getNode(this).frameMaskDisabled)
        },
        set(value) {
          getNode(this).frameMaskDisabled = !_$$u({
            vm,
            handle: value,
            zSchema: _$$z.boolean(),
            property: 'clipsContent',
          })
          return vm.undefined
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: true,
    })
  },
  overflowDirection({
    vm,
    defineVmProp,
    getNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'overflowDirection',
      options: {
        enumerable: true,
        metricsKey: 'node.overflowDirection',
        get() {
          return vm.newString(getNode(this).scrollDirection)
        },
        set(value) {
          getNode(this).scrollDirection = _$$u({
            vm,
            handle: value,
            zSchema: _$$N.OverflowDirection,
            property: 'overflowDirection',
          })
          return vm.undefined
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: true,
    })
  },
  numberOfFixedChildren({
    vm,
    defineVmProp,
    getNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'numberOfFixedChildren',
      options: {
        enumerable: true,
        metricsKey: 'node.numberOfFixedChildren',
        get() {
          return vm.newNumber(getNode(this).fixedChildrenCount)
        },
        set(value) {
          const node = getNode(this)
          const count = _$$u({
            vm,
            handle: value,
            zSchema: _$$N.PositiveInteger,
            property: 'numberOfFixedChildren',
          })
          if (count > node.reversedChildrenGuids.length) {
            throw new Error('numberOfFixedChildren must be <= the number of children in the node')
          }
          node.fixedChildrenCount = count
          return vm.undefined
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: true,
    })
  },
  description({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'description',
      options: {
        enumerable: !0,
        metricsKey: 'node.description',
        get() {
          let t = i(this)
          return e.newString(At(t.description))
        },
        set(t) {
          i(this).description = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$z.string(),
            property: 'description',
          })
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  descriptionMarkdown({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'descriptionMarkdown',
      options: {
        enumerable: !0,
        metricsKey: 'node.descriptionMarkdown',
        get() {
          let t = i(this)
          return e.newString(zb(t.description))
        },
        set(t) {
          let n = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$z.string(),
            property: 'description',
          })
          let r = _$$nB(n)
          let {
            html,
          } = Kq(r)
          let s = At(html)
          i(this).setDescriptionRich(html, s)
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  documentationLinks({
    vm,
    defineVmProp,
    getNode,
  }, handle) {
    const self = this
    defineVmProp({
      handle,
      key: 'documentationLinks',
      options: {
        enumerable: true,
        metricsKey: 'node.documentationLinks',
        get() {
          const linksArray = vm.newArray()
          const node = getNode(this)
          const uris = node.symbolLinks?.filter(link => link.uri).map(link => link.uri) || []
          for (let i = 0; i < uris.length; i++) {
            const linkObject = vm.newObject()
            vm.setProp(linkObject, 'uri', vm.newString(uris[i]))
            vm.setProp(linksArray, i.toString(), linkObject)
          }
          return linksArray
        },
        set(value) {
          const node = getNode(self)
          const links = _$$u({
            vm,
            handle: value,
            zSchema: _$$z.array(_$$z.strictObject({
              uri: _$$z.string(),
            })),
            property: 'documentationLinks',
          })
          node.symbolLinks = []
          if (links.length > 1) {
            throw new Error('Documentation links API takes a list of size 0 or 1')
          }
          if (links.length === 1) {
            let uri = links[0].uri
            if (!uri.mathc(/^\w+:/)) {
              throw new Error('Documentation link URI must be an absolute URL with a scheme (e.g., https://example.com)')
            }
            node.symbolLinks = [{
              uri,
            }]
          }
          return vm.undefined
        },
        canWriteInReadOnly: false,
        hasEditScope: true,
      },
    })
  },
  /**
   * Remote property API - checks if node is a subscribed asset from library
   * @param vm - Virtual machine instance for creating boolean values
   * @param defineVmProp - Function to define VM property with getter
   * @param getNode - Function to retrieve node from VM handle
   * @param handle - VM handle for the node
   */
  remote({
    vm,
    defineVmProp,
    getNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'remote',
      options: {
        enumerable: true,
        metricsKey: 'node.remote',
        get() {
          const node = getNode(this)
          return vm.newBoolean(node.isSubscribedAsset)
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: false,
    })
  },
  /**
   * Get publish status API - returns async publish status for the node
   * @param vm - Virtual machine instance for promise and function management
   * @param getNode - Function to retrieve node from VM handle
   * @param handle - VM handle for the node
   */
  getPublishStatus({
    vm,
    getNode,
  }, handle) {
    vm.defineFunction(handle, 'getPublishStatusAsync', 'node.getPublishStatusAsync', () => {
      const node = getNode(this)
      const {
        promise,
        resolve,
        reject,
      } = vm.newPromise()
      vm.registerPromise(getNodePublishStatus(node)).then(status => resolve(vm.newString(status)), () => reject(vm.newString('Failed to get node publish status')))
      return promise
    })
  },
  /**
   * Hidden from publishing property API - controls node visibility in publishing
   * @param vm - Virtual machine instance for boolean and property management
   * @param defineVmProp - Function to define VM property with getter/setter
   * @param getNode - Function to retrieve node from VM handle
   * @param handle - VM handle for the node
   */
  hiddenFromPublishing({
    vm,
    defineVmProp,
    getNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'hiddenFromPublishing',
      options: {
        enumerable: true,
        metricsKey: 'node.hiddenFromPublishing',
        get() {
          const node = getNode(this)
          return vm.newBoolean(node.hiddenFromPublishing)
        },
        set(value) {
          const hiddenValue = _$$u({
            vm,
            handle: value,
            zSchema: _$$z.boolean(),
            property: 'hiddenFromPublishing',
          })
          getNode(this).hiddenFromPublishing = hiddenValue
          return vm.undefined
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: true,
    })
  },
  /**
   * Default variant property API - gets the default variant for component sets
   * @param vm - Virtual machine instance for object management
   * @param defineVmProp - Function to define VM property with getter
   * @param getNodeFactory - Function to get node factory for creating nodes
   * @param getNode - Function to retrieve node from VM handle
   * @param handle - VM handle for the node
   */
  defaultVariant({
    vm,
    defineVmProp,
    getNodeFactory,
    getNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'defaultVariant',
      options: {
        enumerable: true,
        metricsKey: 'node.defaultVariant',
        get() {
          /**
           * Helper method to get default variant node from component set
           * @param componentSetNode - The component set node to find default variant for
           * @returns Default variant node or null if not found
           */
          function getDefaultVariantNode(componentSetNode) {
            const sceneGraph = componentSetNode.sceneGraph
            const assetKey = Egt.getAssetKeyForPublish(componentSetNode.guid)
            const publishedComponentSet = _$$m3(debugState.getState())[assetKey]

            // Check published component set for default state
            if (publishedComponentSet) {
              for (const childGuid of componentSetNode.reversedChildrenGuids) {
                const childNode = sceneGraph.get(childGuid)
                if (childNode && childNode.componentKey === publishedComponentSet.default_state_key) {
                  return childNode
                }
              }
            }

            // Fallback to local default state
            const localDefaultStateGuid = glU.getDefaultStateForLocalStateGroup(componentSetNode.guid)
            const localDefaultState = sceneGraph.get(localDefaultStateGuid)
            return localDefaultStateGuid && localDefaultState !== undefined ? localDefaultState : null
          }

          const defaultVariantNode = getDefaultVariantNode(getNode(this))
          return defaultVariantNode ? getNodeFactory().createNode(defaultVariantNode.guid, 'node.defaultVariant') : vm.$$null
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: false,
    })
  },
  mainComponent({
    vm: e,
    defineVmProp: t,
    defineVmIncrementalProp: i,
    getNodeFactory: n,
    incrementalSafeApi: r,
    getNode: a,
    sceneGraph: s,
    documentAccessState: o,
    allowIncrementalUnsafeApiCalls: l,
  }, d) {
    i({
      handle: d,
      key: 'mainComponent',
      metricsKey: 'node.mainComponent',
      incrementalSafeApiKey: 'getMainComponentAsync',
      incrementalSafeApiMetricsKey: 'node.getMainComponentAsync',
      hasEditScope: !0,
      enumerable: !0,
      canWriteInReadOnly: !1,
      resolveValue: (t) => {
        let i = t.symbolId
        return i && void 0 !== s.get(i) ? n().createNode(i, 'node.mainComponent') : e.$$null
      },
      setValue: (e, t) => {
        let i = a(t)
        NfO.replaceSymbolBackingInstance(e.guid, i.guid)
      },
      prepareDocument: async (e) => {
        e.symbolId && (await ensurePluginPageLoaded(e.symbolId, o))
      },
      parseThis(e) {
        return a(e)
      },
      incrementalSafeApi: r,
      allowIncrementalUnsafeApiCalls: l,
    })
    t({
      handle: d,
      key: 'masterComponent',
      options: {
        enumerable: !0,
        get() {
          r && checkIncrementalUnsafeMember(l, 'node.masterComponent', 'node.getMainComponentAsync')
          let t = a(this).symbolId
          return t && void 0 !== s.get(t) ? n().createNode(t, 'node.mainComponent') : e.$$null
        },
        set(e) {
          let t = a(this)
          let i = a(e)
          NfO.replaceSymbolBackingInstance(t.guid, i.guid)
        },
        metricsKey: 'node.masterComponent',
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  scaleFactor({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'scaleFactor',
      options: {
        enumerable: !0,
        metricsKey: 'node.scaleFactor',
        get() {
          return e.newNumber(i(this).instanceScaleFactor)
        },
        set(t) {
          i(this).instanceScaleFactor = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.NonZeroPositiveFloat,
            property: 'scaleFactor',
          })
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  key({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'key',
      options: {
        enumerable: !0,
        metricsKey: 'node.key',
        get() {
          let t = i(this)
          return e.newString(t.assetKeyForPublish ?? '')
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !1,
    })
  },
  createInstance({
    defineVmFunction: e,
    getNodeFactory: t,
    getNode: i,
  }, n) {
    e({
      handle: n,
      key: 'createInstance',
      metricsKey: 'node.createInstance',
      cb() {
        let e = i(this).createInstance()?.guid || ''
        return t().createNode(e, 'node.createInstance')
      },
      isAllowedInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  swapComponent({
    vm: e,
    defineVmFunction: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'swapComponent',
      metricsKey: 'node.swapComponent',
      cb(t) {
        let n = i(t)
        if (n.type !== 'SYMBOL')
          throw new Error('Cannot swap to non-component node')
        i(this).swapComponent(n)
        return e.undefined
      },
      isAllowedInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  detachInstance({
    defineVmFunction,
    getNodeFactory,
    getNode,
  }, handle) {
    defineVmFunction({
      handle,
      key: 'detachInstance',
      metricsKey: 'node.detachInstance',
      cb() {
        const node = getNode(this)
        if (node.type !== 'INSTANCE')
          throw new Error('Cannot detach a non-instance')
        const detached = node.detachInstance()
        return getNodeFactory().createNode(detached, 'node.detachInstance')
      },
      isAllowedInReadOnly: false,
      hasEditScope: true,
    })
  },
  detachedInfo({
    vm,
    defineVmProp,
    getNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'detachedInfo',
      options: {
        enumerable: true,
        metricsKey: 'node.detachedInfo',
        get() {
          const node = getNode(this)
          if (node.type === 'INSTANCE' || node.type === 'SYMBOL')
            return vm.$$null
          const info = node.detachedInfo
          if (!info)
            return vm.$$null
          const isLibrary = !!info.componentKey
          const obj = vm.newObject()
          if (isLibrary) {
            vm.setProp(obj, 'type', vm.newString('library'))
            vm.setProp(obj, 'componentKey', vm.newString(info.componentKey))
          }
          else {
            vm.setProp(obj, 'type', vm.newString('local'))
            vm.setProp(obj, 'componentId', vm.newString(info.symbolId))
          }
          return obj
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: false,
    })
  },
  tableNumRows({
    vm,
    defineVmProp,
    getNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'numRows',
      options: {
        enumerable: true,
        metricsKey: 'node.numRows',
        get() {
          return vm.newNumber(getNode(this).tableNumRows)
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: false,
    })
  },
  tableNumColumns({
    vm,
    defineVmProp,
    getNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'numColumns',
      options: {
        enumerable: true,
        metricsKey: 'node.numColumns',
        get() {
          return vm.newNumber(getNode(this).tableNumColumns)
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: false,
    })
  },
  tableCellRowIndex({
    vm,
    defineVmProp,
    getNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'rowIndex',
      options: {
        enumerable: true,
        metricsKey: 'node.rowIndex',
        get() {
          return vm.newNumber(getNode(this).tableCellRowIndex)
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: false,
    })
  },
  tableCellColumnIndex({
    vm,
    defineVmProp,
    getNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'columnIndex',
      options: {
        enumerable: true,
        metricsKey: 'node.columnIndex',
        get() {
          return vm.newNumber(getNode(this).tableCellColumnIndex)
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: false,
    })
  },
  cellAt({
    vm: e,
    defineVmFunction: t,
    getNodeFactory: i,
    getNode: n,
  }, r) {
    t({
      handle: r,
      key: 'cellAt',
      metricsKey: 'node.cellAt',
      cb(t, r) {
        let a = n(this)
        if (a.type !== 'TABLE')
          throw new Error('Can only get cells from a table node')
        let s = _$$u({
          vm: e,
          handle: t,
          zSchema: _$$z.number().int().min(0).max(a.tableNumRows - 1),
          property: 'rowIndex',
        })
        let o = _$$u({
          vm: e,
          handle: r,
          zSchema: _$$z.number().int().min(0).max(a.tableNumColumns - 1),
          property: 'columnIndex',
        })
        let l = a.cellAt(s, o)
        if (l)
          return i().createNode(l, 'node.cellAt')
        throw new Error('Could not find cell')
      },
      isAllowedInReadOnly: !0,
      hasEditScope: !1,
    })
  },
  insertRow({
    vm: e,
    defineVmFunction: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'insertRow',
      metricsKey: 'node.insertRow',
      cb(t) {
        let n = i(this)
        if (n.type !== 'TABLE')
          throw new Error('Can only get cells from a table node')
        let r = _$$u({
          vm: e,
          handle: t,
          zSchema: _$$z.number().int().min(0).max(n.tableNumRows),
          property: 'index',
        })
        n.insertRow(r)
        return e.undefined
      },
      isAllowedInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  insertColumn({
    vm: e,
    defineVmFunction: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'insertColumn',
      metricsKey: 'node.insertColumn',
      cb(t) {
        let n = i(this)
        if (n.type !== 'TABLE')
          throw new Error('Can only get cells from a table node')
        let r = _$$u({
          vm: e,
          handle: t,
          zSchema: _$$z.number().int().min(0).max(n.tableNumColumns),
          property: 'index',
        })
        n.insertColumn(r)
        return e.undefined
      },
      isAllowedInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  removeRow({
    vm: e,
    defineVmFunction: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'removeRow',
      metricsKey: 'node.removeRow',
      cb(t) {
        let n = i(this)
        if (n.type !== 'TABLE')
          throw new Error('Can only get cells from a table node')
        let r = _$$u({
          vm: e,
          handle: t,
          zSchema: _$$z.number().int().min(0).max(n.tableNumRows - 1),
          property: 'index',
        })
        n.removeRow(r)
        return e.undefined
      },
      isAllowedInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  removeColumn({
    vm: e,
    defineVmFunction: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'removeColumn',
      metricsKey: 'node.removeColumn',
      cb(t) {
        let n = i(this)
        if (n.type !== 'TABLE')
          throw new Error('Can only get cells from a table node')
        let r = _$$u({
          vm: e,
          handle: t,
          zSchema: _$$z.number().int().min(0).max(n.tableNumColumns - 1),
          property: 'index',
        })
        n.removeColumn(r)
        return e.undefined
      },
      isAllowedInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  moveRow({
    vm: e,
    defineVmFunction: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'moveRow',
      metricsKey: 'node.moveRow',
      cb(t, n) {
        let r = i(this)
        if (r.type !== 'TABLE')
          throw new Error('Can only get cells from a table node')
        let a = _$$u({
          vm: e,
          handle: t,
          zSchema: _$$z.number().int().min(0).max(r.tableNumRows - 1),
          property: 'fromIndex',
        })
        let s = _$$u({
          vm: e,
          handle: n,
          zSchema: _$$z.number().int().min(0).max(r.tableNumRows - 1),
          property: 'toIndex',
        })
        r.moveRow(a, s)
        return e.undefined
      },
      isAllowedInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  moveColumn({
    vm,
    defineVmFunction,
    getNode,
  }, handle) {
    defineVmFunction({
      handle,
      key: 'moveColumn',
      metricsKey: 'node.moveColumn',
      cb(fromHandle, toHandle) {
        const node = getNode(this)
        if (node.type !== 'TABLE')
          throw new Error('Can only get cells from a table node')
        const fromIndex = _$$u({
          vm,
          handle: fromHandle,
          zSchema: _$$z.number().int().min(0).max(node.tableNumColumns - 1),
          property: 'fromIndex',
        })
        const toIndex = _$$u({
          vm,
          handle: toHandle,
          zSchema: _$$z.number().int().min(0).max(node.tableNumColumns - 1),
          property: 'toIndex',
        })
        node.moveColumn(fromIndex, toIndex)
        return vm.undefined
      },
      isAllowedInReadOnly: false,
      hasEditScope: true,
    })
  },
  resizeRow({
    vm,
    defineVmFunction,
    getNode,
  }, handle) {
    defineVmFunction({
      handle,
      key: 'resizeRow',
      metricsKey: 'node.resizeRow',
      cb(indexHandle, heightHandle) {
        const node = getNode(this)
        if (node.type !== 'TABLE')
          throw new Error('Can only get cells from a table node')
        const index = _$$u({
          vm,
          handle: indexHandle,
          zSchema: _$$z.number().int().min(0).max(node.tableNumRows - 1),
          property: 'index',
        })
        const height = _$$u({
          vm,
          handle: heightHandle,
          zSchema: _$$N.PositiveFloat,
          property: 'height',
        })
        node.resizeRow(index, height)
        return vm.undefined
      },
      isAllowedInReadOnly: false,
      hasEditScope: true,
    })
  },
  resizeColumn({
    vm,
    defineVmFunction,
    getNode,
  }, handle) {
    defineVmFunction({
      handle,
      key: 'resizeColumn',
      metricsKey: 'node.resizeColumn',
      cb(indexHandle, widthHandle) {
        const node = getNode(this)
        if (node.type !== 'TABLE')
          throw new Error('Can only get cells from a table node')
        const index = _$$u({
          vm,
          handle: indexHandle,
          zSchema: _$$z.number().int().min(0).max(node.tableNumColumns - 1),
          property: 'index',
        })
        const width = _$$u({
          vm,
          handle: widthHandle,
          zSchema: _$$N.PositiveFloat,
          property: 'width',
        })
        node.resizeColumn(index, width)
        return vm.undefined
      },
      isAllowedInReadOnly: false,
      hasEditScope: true,
    })
  },
  textStyleId({
    vm,
    defineVmIncrementalProp,
    mixedSentinel,
    incrementalSafeApi,
    getNode,
    documentAccessState,
    allowIncrementalUnsafeApiCalls,
  }, handle) {
    defineVmIncrementalProp({
      handle,
      key: 'textStyleId',
      metricsKey: 'node.textStyleId',
      incrementalSafeApiSetKey: 'setTextStyleIdAsync',
      incrementalSafeApiSetMetricsKey: 'node.setTextStyleIdAsync',
      retainGetter: true,
      enumerable: true,
      parseThis: e => getNode(e),
      resolveValue: (node) => {
        const val = node.inheritedTextStyleOrMixed
        return val === 'mixed' ? mixedSentinel : vm.newString(_$$nM(val))
      },
      prepareDocument: async () => {
        await loadInternalCanvasMemoized(documentAccessState)
      },
      setValue: (node, value) => {
        const styleId = _$$eX(_$$u({
          vm,
          handle: value,
          zSchema: _$$z.string(),
          property: 'textStyleId',
        }))
        node.inheritedTextStyle = styleId
        return vm.undefined
      },
      incrementalSafeApi,
      parseIncrementalValueArg: value => vm.toString(value),
      setValueIncremental: (node, value) => {
        node.inheritedTextStyle = _$$eX(value)
        return vm.undefined
      },
      allowIncrementalUnsafeApiCalls,
      canWriteInReadOnly: false,
      hasEditScope: true,
    })
  },
  characters({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'characters',
      options: {
        enumerable: !0,
        metricsKey: 'node.characters',
        get() {
          return e.newString(i(this).characters)
        },
        set(t) {
          i(this).characters = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$z.string(),
            property: 'characters',
          })
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  insertCharacters({
    vm: e,
    defineVmFunction: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'insertCharacters',
      metricsKey: 'node.insertCharacters',
      cb(t, n, r) {
        let a = _$$u({
          vm: e,
          handle: t,
          zSchema: _$$N.PositiveInteger,
          property: 'start',
        })
        let s = _$$u({
          vm: e,
          handle: n,
          zSchema: _$$z.string(),
          property: 'characters',
        })
        let o = _$$u({
          vm: e,
          handle: r,
          zSchema: _$$z.enum(['BEFORE', 'AFTER']).optional(),
          property: 'useStyle',
        })
        let l = i(this)
        if (a > l.characters.length) {
          throw new Error('Cannot insert characters at index greater than the length of the text')
        }
        l.spliceCharacters(a, a, s, o || 'BEFORE')
        return e.undefined
      },
      isAllowedInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  deleteCharacters({
    vm: e,
    defineVmFunction: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'deleteCharacters',
      metricsKey: 'node.deleteCharacters',
      cb(t, n) {
        let r = _$$u({
          vm: e,
          handle: t,
          zSchema: _$$N.PositiveInteger,
          property: 'start',
        })
        let a = _$$u({
          vm: e,
          handle: n,
          zSchema: _$$N.PositiveInteger,
          property: 'end',
        })
        let s = i(this)
        let o = s.characters.length
        if (r > o || a > o) {
          throw new Error('Cannot delete characters at index greater than the length of the text')
        }
        if (r > a)
          throw new Error('deleteCharacters must have (start <= end)')
        s.spliceCharacters(r, a, '', 'BEFORE')
        return e.undefined
      },
      isAllowedInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  hasMissingFont({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'hasMissingFont',
      options: {
        enumerable: !0,
        metricsKey: 'node.hasMissingFont',
        get() {
          return e.newBoolean(i(this).hasMissingFont)
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !1,
    })
  },
  autoRename({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'autoRename',
      options: {
        enumerable: !0,
        metricsKey: 'node.autoRename',
        get() {
          return e.newBoolean(i(this).autoRename)
        },
        set(t) {
          let n = i(this)
          if (n.isInstanceSublayer) {
            _$$k2.warn('autoRename on instance sublayers is not supported')
            return e.undefined
          }
          let r = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$z.boolean(),
            property: 'autoRename',
          })
          r && (n.name = n.characters.trim().replace(/\s+/g, ' '))
          n.autoRename = r
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  fontSize({
    vm: e,
    defineVmProp: t,
    mixedSentinel: i,
    getNode: n,
  }, r) {
    t({
      handle: r,
      key: 'fontSize',
      options: {
        enumerable: !0,
        metricsKey: 'node.fontSize',
        get() {
          let t = n(this).fontSizeOrMixed
          return t === 'mixed' ? i : e.newNumber(t)
        },
        set(t) {
          n(this).fontSize = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$z.number().min(1).finite(),
            property: 'fontSize',
          })
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  hangingPunctuation({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'hangingPunctuation',
      options: {
        enumerable: !0,
        metricsKey: 'node.hangingPunctuation',
        get() {
          return e.newBoolean(i(this).hangingPunctuation)
        },
        set(t) {
          i(this).hangingPunctuation = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$z.boolean(),
            property: 'hangingPunctuation',
          })
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  hangingList({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'hangingList',
      options: {
        enumerable: !0,
        metricsKey: 'node.hangingList',
        get() {
          return e.newBoolean(i(this).hangingList)
        },
        set(t) {
          i(this).hangingList = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$z.boolean(),
            property: 'hangingList',
          })
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  paragraphIndent({
    vm: e,
    defineVmProp: t,
    mixedSentinel: i,
    getNode: n,
  }, r) {
    t({
      handle: r,
      key: 'paragraphIndent',
      options: {
        enumerable: !0,
        metricsKey: 'node.paragraphIndent',
        get() {
          let t = getFeatureFlags().ce_mixed_text_spacing ? n(this).paragraphIndentOrMixed : n(this).paragraphIndent
          return t === 'mixed' ? i : e.newNumber(t)
        },
        set(t) {
          n(this).paragraphIndent = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.PositiveFloat,
            property: 'paragraphIndent',
          })
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  paragraphSpacing({
    vm: e,
    defineVmProp: t,
    mixedSentinel: i,
    getNode: n,
  }, r) {
    t({
      handle: r,
      key: 'paragraphSpacing',
      options: {
        enumerable: !0,
        metricsKey: 'node.paragraphSpacing',
        get() {
          let t = getFeatureFlags().ce_mixed_text_spacing ? n(this).paragraphSpacingOrMixed : n(this).paragraphSpacing
          return t === 'mixed' ? i : e.newNumber(t)
        },
        set(t) {
          n(this).paragraphSpacing = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.PositiveFloat,
            property: 'paragraphSpacing',
          })
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  listSpacing({
    vm: e,
    defineVmProp: t,
    mixedSentinel: i,
    getNode: n,
  }, r) {
    t({
      handle: r,
      key: 'listSpacing',
      options: {
        enumerable: !0,
        metricsKey: 'node.listSpacing',
        get() {
          let t = getFeatureFlags().ce_mixed_text_spacing ? n(this).listSpacingOrMixed : n(this).listSpacing
          return t === 'mixed' ? i : e.newNumber(t)
        },
        set(t) {
          n(this).listSpacing = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.PositiveFloat,
            property: 'listSpacing',
          })
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  letterSpacing({
    vm: e,
    defineVmProp: t,
    mixedSentinel: i,
    getNode: n,
  }, r) {
    t({
      handle: r,
      key: 'letterSpacing',
      options: {
        enumerable: !0,
        metricsKey: 'node.letterSpacing',
        get() {
          let t = n(this).letterSpacingOrMixed
          if (t === 'mixed')
            return i
          let r = e.deepWrap({
            unit: t.units,
            value: t.value,
          })
          e.deepFreezeObject(r)
          return r
        },
        set(t) {
          let i = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.LetterSpacing,
            property: 'letterSpacing',
          })
          n(this).letterSpacing = {
            units: i.unit,
            value: i.value,
          }
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  textAlignHorizontal({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'textAlignHorizontal',
      options: {
        enumerable: !0,
        metricsKey: 'node.textAlignHorizontal',
        get() {
          return e.newString(i(this).textAlignHorizontal)
        },
        set(t) {
          i(this).textAlignHorizontal = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.TextAlignHorizontal,
            property: 'textAlignHorizontal',
          })
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  textAlignVertical({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'textAlignVertical',
      options: {
        enumerable: !0,
        metricsKey: 'node.textAlignVertical',
        get() {
          return e.newString(i(this).textAlignVertical)
        },
        set(t) {
          i(this).textAlignVertical = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.TextAlignVertical,
            property: 'textAlignVertical',
          })
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  textCase({
    vm: e,
    defineVmProp: t,
    mixedSentinel: i,
    getNode: n,
  }, r) {
    t({
      handle: r,
      key: 'textCase',
      options: {
        enumerable: !0,
        metricsKey: 'node.textCase',
        get() {
          let t = n(this)
          return normalizeTextCase(e, i, t.textCaseOrMixed, t.fontVariantCapsOrMixed)
        },
        set(t) {
          let i = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.TextCase,
            property: 'textCase',
          })
          let r = n(this)
          let {
            textCase,
            fontVariantCaps,
          } = processTextCaseForSmallCaps(r, 0, -1, i)
          r.textCase = textCase
          r.fontVariantCaps = fontVariantCaps
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  textDecoration({
    vm: e,
    defineVmProp: t,
    mixedSentinel: i,
    getNode: n,
  }, r) {
    t({
      handle: r,
      key: 'textDecoration',
      options: {
        enumerable: !0,
        metricsKey: 'node.textDecoration',
        get() {
          let t = n(this).textDecorationOrMixed
          return t === 'mixed' ? i : e.newString(t)
        },
        set(t) {
          n(this).textDecoration = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.TextDecoration,
            property: 'textDecoration',
          })
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  textDecorationStyle({
    vm: e,
    defineVmProp: t,
    mixedSentinel: i,
    getNode: n,
  }, r) {
    t({
      handle: r,
      key: 'textDecorationStyle',
      options: {
        enumerable: !0,
        metricsKey: 'node.textDecorationStyle',
        get() {
          let t = n(this).textDecorationStyleOrMixed
          return t === null ? e.$$null : t === 'mixed' ? i : e.newString(t)
        },
        set(t) {
          n(this).textDecorationStyle = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.TextDecorationStyle,
            property: 'textDecorationStyle',
          })
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  textDecorationSkipInk({
    vm: e,
    defineVmProp: t,
    mixedSentinel: i,
    getNode: n,
  }, r) {
    t({
      handle: r,
      key: 'textDecorationSkipInk',
      options: {
        enumerable: !0,
        metricsKey: 'node.textDecorationSkipInk',
        get() {
          let t = n(this).textDecorationSkipInkOrMixed
          return t === null ? e.$$null : t === 'mixed' ? i : e.newBoolean(t)
        },
        set(t) {
          n(this).textDecorationSkipInk = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$z.boolean(),
            property: 'textDecorationSkipInk',
          })
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  textDecorationOffset({
    vm: e,
    defineVmProp: t,
    mixedSentinel: i,
    getNode: n,
  }, r) {
    t({
      handle: r,
      key: 'textDecorationOffset',
      options: {
        enumerable: !0,
        metricsKey: 'node.textDecorationOffset',
        get() {
          let t = n(this).textDecorationOffsetOrMixed
          if (t === null)
            return e.$$null
          if (t === 'mixed')
            return i
          let r = e.deepWrap(ik(t))
          e.deepFreezeObject(r)
          return r
        },
        set(t) {
          n(this).textDecorationOffset = iR(_$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.TextDecorationOffset,
            property: 'textDecorationOffset',
          }))
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  textDecorationThickness({
    vm: e,
    defineVmProp: t,
    mixedSentinel: i,
    getNode: n,
  }, r) {
    t({
      handle: r,
      key: 'textDecorationThickness',
      options: {
        enumerable: !0,
        metricsKey: 'node.textDecorationThickness',
        get() {
          let t = n(this).textDecorationThicknessOrMixed
          if (t === null)
            return e.$$null
          if (t === 'mixed')
            return i
          let r = e.deepWrap(convertTextDecorationThicknessFromLegacy(t))
          e.deepFreezeObject(r)
          return r
        },
        set(t) {
          n(this).textDecorationThickness = convertTextDecorationThicknessToLegacy(_$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.TextDecorationThickness,
            property: 'textDecorationThickness',
          }))
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  textDecorationColor({
    vm: e,
    defineVmProp: t,
    mixedSentinel: i,
    imageStore: n,
    videoStore: r,
    getNode: a,
  }, s) {
    t({
      handle: s,
      key: 'textDecorationColor',
      options: {
        enumerable: !0,
        metricsKey: 'node.textDecorationColor',
        get() {
          let t = a(this).textDecorationFillsOrMixed
          if (t === null)
            return e.$$null
          if (t === 'mixed')
            return i
          let n = extractSolidColorFromPaints(t)
          let r = e.deepWrap(n)
          e.deepFreezeObject(r)
          return r
        },
        set(t) {
          let i = a(this)
          let s = []
          let o = {
            data: processValidPaintValues(n, r, _$$u({
              vm: e,
              handle: t,
              zSchema: _$$N.TextDecorationColor,
              property: 'textDecorationColor',
            }), s),
            blobs: s,
          }
          if (o.data.length === 0) {
            i.textDecorationFills = []
            return e.undefined
          }
          if (o.data.length !== 1 || void 0 !== o.data[0] && o.data[0].type !== 'SOLID') {
            throw new Error('Text decoration color must be a single solid paint')
          }
          i.textDecorationFills = o.data
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  textAutoResize({
    vm,
    defineVmProp,
    stats,
    getNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'textAutoResize',
      options: {
        enumerable: true,
        metricsKey: 'node.textAutoResize',
        get() {
          const node = getNode(this)
          const {
            textAutoResize,
            textTruncation,
          } = node
          const isTruncateMode = textAutoResize === 'NONE' && textTruncation === 'ENDING'
          if (isTruncateMode && !onode5) {
            console.warn('[textAutoResize](file:///Users/allen/sigma-main/src/905/897942.ts#L46-L48) will stop returning `TRUNCATE` in a future version - read from `textTruncation` instead')
            onode5 = true
          }
          return vm.newString(isTruncateMode ? 'TRUNCATE' : textAutoResize)
        },
        set(value) {
          const autoResizeValue = _$$u({
            vm,
            handle: value,
            zSchema: _$$N.TextAutoResize,
            property: 'textAutoResize',
          })
          const isTruncateMode = autoResizeValue === 'TRUNCATE'
          const node = getNode(this)
          node.textAutoResize = isTruncateMode ? 'NONE' : autoResizeValue
          node.textTruncation = isTruncateMode ? 'ENDING' : 'DISABLED'
          stats.stackFieldSet(node.guid, 'text-auto-resize')
          stats.stackFieldSet(node.guid, 'text-truncation')
          if (isTruncateMode) {
            console.warn('setting `textAutoResize = "TRUNCATE"` is deprecated and will be removed in a future version. please use `textTruncation = "ENDING"` instead')
          }
          return vm.undefined
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: true,
    })
  },
  lineHeight({
    vm,
    defineVmProp,
    mixedSentinel,
    getNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'lineHeight',
      options: {
        enumerable: true,
        metricsKey: 'node.lineHeight',
        get() {
          const lineHeight = getNode(this).lineHeightOrMixed
          if (lineHeight === 'mixed') {
            return mixedSentinel
          }
          const wrappedLineHeight = vm.deepWrap(iC(lineHeight))
          vm.deepFreezeObject(wrappedLineHeight)
          return wrappedLineHeight
        },
        set(value) {
          const lineHeightValue = _$$u({
            vm,
            handle: value,
            zSchema: _$$N.LineHeight,
            property: 'lineHeight',
          })
          getNode(this).lineHeight = iT(lineHeightValue)
          return vm.undefined
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: true,
    })
  },
  leadingTrim({
    vm,
    defineVmProp,
    getNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'leadingTrim',
      options: {
        enumerable: true,
        metricsKey: 'node.leadingTrim',
        get() {
          return vm.newString(getNode(this).leadingTrim)
        },
        set(value) {
          const leadingTrimValue = _$$u({
            vm,
            handle: value,
            zSchema: _$$N.LeadingTrim,
            property: 'leadingTrim',
          })
          getNode(this).leadingTrim = leadingTrimValue
          return vm.undefined
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: true,
    })
  },
  textTruncation({
    vm,
    defineVmProp,
    getNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'textTruncation',
      options: {
        enumerable: true,
        metricsKey: 'node.textTruncation',
        get() {
          const textTruncation = getNode(this).textTruncation
          return vm.newString(textTruncation)
        },
        set(value) {
          const textTruncationValue = _$$u({
            vm,
            handle: value,
            zSchema: _$$N.TextTruncation,
            property: 'textTruncation',
          })
          getNode(this).textTruncation = textTruncationValue
          return vm.undefined
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: true,
    })
  },
  maxLines({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'maxLines',
      options: {
        enumerable: !0,
        metricsKey: 'node.maxLines',
        get() {
          let t = i(this).maxLines
          return t ? e.newNumber(t) : e.$$null
        },
        set(t) {
          i(this).maxLines = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.MaxLines,
            property: 'maxLines',
          })
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  hyperlink({
    vm: e,
    defineVmProp: t,
    mixedSentinel: i,
    getNode: n,
  }, r) {
    t({
      handle: r,
      key: 'hyperlink',
      options: {
        enumerable: !0,
        metricsKey: 'node.hyperlink',
        get() {
          let t = n(this).hyperlinkOrMixed
          if (t === 'mixed')
            return i
          let r = e.deepWrap(t)
          e.deepFreezeObject(r)
          return r
        },
        set(t) {
          let i = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.TextHyperlinkOptions,
            property: 'value',
          })
          n(this).setRangeHyperlink(0, -1, i)
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  fontName({
    vm: e,
    defineVmProp: t,
    mixedSentinel: i,
    getNode: n,
  }, r) {
    t({
      handle: r,
      key: 'fontName',
      options: {
        enumerable: !0,
        metricsKey: 'node.fontName',
        get() {
          let t = n(this).fontNameOrMixed
          if (t === 'mixed')
            return i
          let r = e.deepWrap({
            family: t.family,
            style: t.style,
          })
          e.deepFreezeObject(r)
          return r
        },
        set(t) {
          n(this).fontName = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.FontName,
            property: 'fontName',
          })
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  fontWeight({
    vm: e,
    defineVmProp: t,
    mixedSentinel: i,
    getNode: n,
  }, r) {
    t({
      handle: r,
      key: 'fontWeight',
      options: {
        enumerable: !0,
        metricsKey: 'node.fontWeight',
        get() {
          let t = n(this).fontWeightOrMixed
          return t === 'mixed' ? i : e.newNumber(t)
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  openTypeFeatures({
    vm: e,
    defineVmProp: t,
    mixedSentinel: i,
    getNode: n,
  }, r) {
    t({
      handle: r,
      key: 'openTypeFeatures',
      options: {
        enumerable: !0,
        metricsKey: 'node.openTypeFeatures',
        get() {
          let t = n(this)
          return processOpenTypeFeatures({
            vm: e,
            mixedSentinel: i,
          }, t.toggledOnOpenTypeFeatures, t.toggledOffOpenTypeFeatures, t.fontVariantNumericFigure, t.fontVariantNumericSpacing, t.fontVariantNumericFraction, t.fontVariantPosition)
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !1,
    })
  },
  canUpgradeToNativeBidiSupport({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'canUpgradeToNativeBidiSupport',
      options: {
        enumerable: !0,
        metricsKey: 'node.canUpgradeToNativeBidiSupport',
        get() {
          return e.newBoolean(i(this).textBidiVersion < 1)
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !1,
    })
  },
  useNativeBidiSupport({
    vm: e,
    defineVmFunction: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'useNativeBidiSupport',
      metricsKey: 'node.useNativeBidiSupport',
      cb() {
        i(this).textBidiVersion = 1
        return e.undefined
      },
      isAllowedInReadOnly: !1,
      hasEditScope: !1,
    })
  },
  /**
   * pointCount - Manages the point count property for polygon and star nodes
   *
   * Provides getter/setter for the number of points in polygon/star shapes.
   * Validates that point count is at least 3 and is an integer value.
   *
   * @param context - API context containing vm, defineVmProp, and getNode
   * @param handle - VM handle for the node prototype
   */
  pointCount({
    vm,
    defineVmProp,
    getNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'pointCount',
      options: {
        enumerable: true,
        metricsKey: 'node.pointCount',
        get() {
          const node = getNode(this)
          return vm.newNumber(node.count)
        },
        set(valueHandle) {
          const node = getNode(this)
          const pointCount = _$$u({
            vm,
            handle: valueHandle,
            zSchema: _$$z.number().min(3).int().finite(),
            property: 'pointCount',
          })
          node.count = pointCount
          return vm.undefined
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: true,
    })
  },
  /**
   * vectorNetwork - Manages vector network data for vector nodes
   *
   * Provides comprehensive vector network management including vertices, segments,
   * and regions with proper validation, incremental API support, and paint processing.
   * Handles both synchronous and asynchronous operations for vector data manipulation.
   *
   * @param context - API context with vm, defineVmIncrementalProp, stores, etc.
   * @param handle - VM handle for the node prototype
   */
  vectorNetwork({
    vm,
    defineVmIncrementalProp,
    incrementalSafeApi,
    imageStore,
    videoStore,
    getNode,
    sceneGraph,
    documentAccessState,
    allowIncrementalUnsafeApiCalls,
  }, handle) {
    /**
     * parseVectorNetworkInput - Parse and validate vector network input data
     *
     * Processes vector network data from VM handles, applying defaults and
     * validating structure. Handles fill styles, paints, and region data.
     *
     * @param inputHandle - VM handle containing vector network data
     * @returns Processed vector network object with validated structure
     */
    function parseVectorNetworkInput(inputHandle) {
      // Extract and apply defaults to input data
      const vectorData = Kb(_$$u({
        vm,
        handle: inputHandle,
        zSchema: _$$N.VectorNetwork,
        property: 'vectorNetwork',
      }), {
        regions: [],
      })

      // Apply defaults to segments (tangent vectors)
      vectorData.segments = vectorData.segments.map(segment => Kb(segment, {
        tangentStart: {
          x: 0,
          y: 0,
        },
        tangentEnd: {
          x: 0,
          y: 0,
        },
      }))

      // Process vector network structure
      const processedNetwork = {
        vertices: vectorData.vertices,
        segments: vectorData.segments,
        regions: vectorData.regions.map(processVectorRegion),
      }

      // Validate the final vector network structure
      ur(processedNetwork)
      return processedNetwork
    }

    /**
     * processVectorRegion - Process a single vector region with fills and styles
     *
     * Handles region winding rules, loops, fill styles, and paint configurations.
     * Manages both style references and direct paint specifications.
     *
     * @param region - Raw region data from input
     * @returns Processed region object with validated fills and styles
     */
    function processVectorRegion(region) {
      const processedRegion: ProcessedRegion = {
        windingRule: region.windingRule,
        loops: region.loops,
      }

      // Handle fill style ID reference
      if (region.fillStyleId) {
        const styleRef = _$$eX(region.fillStyleId)
        assertNotNullish(styleRef, `Invalid fillStyleId ${region.fillStyleId}`)
        processedRegion.fillStyleRef = styleRef
      }

      // Handle direct fill paints
      if (region.fills) {
        const paintBlobs = []
        processedRegion.fillPaints = {
          data: mapPaintConfigurations(imageStore, videoStore, region.fills, paintBlobs),
          blobs: paintBlobs,
        }
      }
      return processedRegion
    }

    // Setup incremental property with comprehensive vector network handling
    defineVmIncrementalProp({
      handle,
      key: 'vectorNetwork',
      metricsKey: 'node.vectorNetwork',
      incrementalSafeApiSetKey: 'setVectorNetworkAsync',
      incrementalSafeApiSetMetricsKey: 'node.setVectorNetworkAsync',
      incrementalSafeApi,
      retainGetter: true,
      enumerable: true,
      canWriteInReadOnly: false,
      hasEditScope: true,
      parseThis: nodeHandle => getNode(nodeHandle),
      /**
       * resolveValue - Convert internal vector data to API format
       *
       * Processes internal vector network data and converts it to the format
       * expected by the plugin API, with proper freezing for immutability.
       *
       * @param node - The node containing vector network data
       * @returns VM-wrapped vector network object
       */
      resolveValue(node) {
        const vectorData = processVectorData(Kx(node))
        const wrappedData = vm.deepWrap(vectorData)
        vm.deepFreezeObject(wrappedData)
        return wrappedData
      },
      /**
       * prepareDocument - Prepare document for vector network operations
       *
       * Ensures document is properly loaded for vector network access.
       * Required for incremental safe API operations.
       */
      async prepareDocument() {
        await loadInternalCanvasMemoized(documentAccessState)
      },
      /**
       * setValue - Set vector network data synchronously
       *
       * Processes input data and applies it to the node's vector network.
       * Used for direct property assignment operations.
       *
       * @param node - Target node to modify
       * @param inputHandle - VM handle with new vector network data
       * @returns VM undefined value
       */
      setValue(node, inputHandle) {
        const processedNetwork = parseVectorNetworkInput(inputHandle)
        _$$iN(node, processedNetwork, sceneGraph)
        return vm.undefined
      },
      /**
       * parseIncrementalValueArg - Parse input for incremental operations
       *
       * Processes vector network input for async incremental operations.
       *
       * @param inputHandle - VM handle with vector network data
       * @returns Processed vector network object
       */
      parseIncrementalValueArg: inputHandle => parseVectorNetworkInput(inputHandle),
      /**
       * setValueIncremental - Set vector network data asynchronously
       *
       * Applies processed vector network data in incremental safe mode.
       * Used for async property assignment operations.
       *
       * @param node - Target node to modify
       * @param processedNetwork - Pre-processed vector network data
       * @returns VM undefined value
       */
      setValueIncremental: (node, processedNetwork) => {
        _$$iN(node, processedNetwork, sceneGraph)
        return vm.undefined
      },
      allowIncrementalUnsafeApiCalls,
    })
  },
  readOnlyVectorNetwork({
    vm: e,
    defineVmIncrementalProp: t,
    incrementalSafeApi: i,
    getNode: n,
    documentAccessState: r,
    allowIncrementalUnsafeApiCalls: a,
  }, s) {
    t({
      handle: s,
      key: 'vectorNetwork',
      metricsKey: 'node.vectorNetwork',
      incrementalSafeApi: i,
      retainGetter: !0,
      enumerable: !0,
      canWriteInReadOnly: !1,
      hasEditScope: !0,
      parseThis: e => n(e),
      resolveValue(t) {
        let i = processVectorData(Kx(t))
        let n = e.deepWrap(i)
        e.deepFreezeObject(n)
        return n
      },
      async prepareDocument() {
        await loadInternalCanvasMemoized(r)
      },
      allowIncrementalUnsafeApiCalls: a,
    })
  },
  vectorPaths({
    vm: e,
    defineVmProp: t,
    getNode: i,
    sceneGraph: n,
  }, r) {
    t({
      handle: r,
      key: 'vectorPaths',
      options: {
        enumerable: !0,
        metricsKey: 'node.vectorPaths',
        get() {
          let t = i(this)
          let n = Kx(t)
          let r = Hn(n)
          let a = e.deepWrap(r)
          e.deepFreezeObject(a)
          return a
        },
        set(t) {
          let r = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.VectorPaths,
            property: 'vectorPaths',
          })
          let a = VS(r)
          let s = i(this)
          _$$iN(s, a, n)
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  readOnlyVectorPaths({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'vectorPaths',
      options: {
        enumerable: !0,
        metricsKey: 'node.vectorPaths',
        get() {
          let t = i(this)
          let n = Kx(t)
          let r = Hn(n)
          let a = e.deepWrap(r)
          e.deepFreezeObject(a)
          return a
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  guides({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'guides',
      options: {
        enumerable: !0,
        metricsKey: 'node.guides',
        get() {
          const s2 = i(this).guides.map((e) => {
            assertNotNullish(e.axis, 'Figma Internal Error: guide missing data')
            assertNotNullish(e.offset, 'Figma Internal Error: guide missing data')
            return {
              axis: e.axis,
              offset: e.offset,
            }
          })
          let t = e.deepWrap(s2)
          e.deepFreezeObject(t)
          return t
        },
        set(t) {
          i(this).guides = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.Guides,
            property: 'guides',
          }).map(e => ({
            axis: e.axis,
            offset: e.offset,
            guid: Hr,
          }))
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  prototypeStartNode({
    vm: e,
    defineVmProp: t,
    getNodeFactory: i,
    getNode: n,
    sceneGraph: r,
  }, a) {
    t({
      handle: a,
      key: 'prototypeStartNode',
      options: {
        enumerable: !0,
        metricsKey: 'node.prototypeStartNode',
        get() {
          let t = n(this).effectivePrototypeStartNodeId
          return t && void 0 !== r.get(t) ? i().createNode(t, 'node.prototypeStartNode') : e.$$null
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !1,
    })
  },
  flowStartingPoints({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'flowStartingPoints',
      options: {
        enumerable: !0,
        metricsKey: 'node.flowStartingPoints',
        get() {
          let t = i(this)
          if (t.type !== 'CANVAS')
            return e.$$null
          let n = e.deepWrap(t.flowStartingPoints)
          e.deepFreezeObject(n)
          return n
        },
        set(t) {
          let n = i(this)
          let r = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.FlowStartingPoints,
            property: 'flowStartingPoints',
          })
          n.flowStartingPoints = r
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  playbackSettings({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'playbackSettings',
      options: {
        enumerable: !0,
        metricsKey: 'node.playbackSettings',
        get() {
          let t
          let n = {
            autoplay: void 0 === (t = i(this).videoPlayback).autoplay || t.autoplay,
            loop: void 0 === t.mediaLoop || t.mediaLoop,
            muted: void 0 !== t.muted && t.muted,
          }
          let r = e.deepWrap(n)
          e.deepFreezeObject(r)
          return r
        },
        set(t) {
          let n = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.PlaybackSettings,
            property: 'playbackSettings',
          })
          i(this).videoPlayback = {
            autoplay: n.autoplay,
            mediaLoop: n.loop,
            muted: n.muted,
          }
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  reactions({
    vm,
    allowIncrementalUnsafeApiCalls,
    defineVmIncrementalProp,
    documentAccessState,
    getNode,
    incrementalSafeApi,
  }, handle) {
    const parseReactions = handleValue => _$$u({
      vm,
      handle: handleValue,
      zSchema: _$$N.Reactions,
      property: 'reactions',
    })
    defineVmIncrementalProp({
      handle,
      key: 'reactions',
      allowIncrementalUnsafeApiCalls,
      incrementalSafeApi,
      metricsKey: 'node.reactions',
      incrementalSafeApiSetKey: 'setReactionsAsync',
      incrementalSafeApiSetMetricsKey: 'node.setReactionsAsync',
      retainGetter: true,
      enumerable: true,
      canWriteInReadOnly: false,
      hasEditScope: true,
      parseThis: e => getNode(e),
      resolveValue(node) {
        const mapReactions = (interactions) => {
          const result: InteractionReaction[] = []
          for (const interaction of interactions) {
            const action = interaction.actions && interaction.actions.length > 0 ? tZ(interaction.actions[0]) : null
            const actions = interaction.actions ? interaction.actions.map(tZ).filter(tq) : []
            const event = interaction.event || {}
            let type = event?.interactionType || 'ON_CLICK'
            let trigger: TriggerEvent | null = {} as TriggerEvent
            switch (type) {
              case 'NONE':
                trigger = null
                break
              case 'ON_VOICE':
              case 'ON_CLICK':
              case 'ON_HOVER':
              case 'ON_PRESS':
              case 'ON_MEDIA_END':
                trigger.type = type
                break
              case 'DRAG':
                trigger.type = 'ON_DRAG'
                break
              case 'AFTER_TIMEOUT':
                trigger.type = type
                trigger.timeout = event.transitionTimeout ? event.transitionTimeout : 0.8
                break
              case 'MOUSE_IN':
              case 'MOUSE_ENTER':
              case 'MOUSE_OUT':
              case 'MOUSE_LEAVE':
              case 'MOUSE_UP':
              case 'MOUSE_DOWN':
                if (type === 'MOUSE_IN') {
                  trigger.type = 'MOUSE_ENTER'
                  trigger.deprecatedVersion = true
                }
                else if (type === 'MOUSE_ENTER') {
                  trigger.type = 'MOUSE_ENTER'
                }
                else if (type === 'MOUSE_OUT') {
                  trigger.type = 'MOUSE_LEAVE'
                  trigger.deprecatedVersion = true
                }
                else if (type === 'MOUSE_LEAVE') {
                  trigger.type = 'MOUSE_LEAVE'
                }
                else if (type === 'MOUSE_UP') {
                  trigger.type = 'MOUSE_UP'
                }
                else if (type === 'MOUSE_DOWN') {
                  trigger.type = 'MOUSE_DOWN'
                }
                trigger.delay = event.interactionMaintained ? event.interactionDuration || 0.3 : 0
                break
              case 'ON_KEY_DOWN':
                trigger.type = type
                trigger.device = event.keyTrigger?.triggerDevice || 'KEYBOARD'
                trigger.keyCodes = event.keyTrigger?.keyCodes || []
                break
              case 'ON_MEDIA_HIT':
                trigger.type = type
                trigger.mediaHitTime = event.mediaHitTime
                break
              default:
                trigger.type = type
            }
            result.push({
              action,
              actions,
              trigger,
            })
          }
          return result
        }
        const value = mapReactions(node.prototypeInteractions)
        const wrapped = vm.deepWrap(value)
        vm.deepFreezeObject(wrapped)
        return wrapped
      },
      async prepareDocument() {
        await loadInternalCanvasMemoized(documentAccessState)
      },
      setValue(node, value) {
        node.prototypeInteractions = t$(parseReactions(value))
      },
      parseIncrementalValueArg: parseReactions,
      setValueIncremental(node, value) {
        node.prototypeInteractions = t$(value)
      },
    })
  },
  overlayPositionType({
    vm,
    defineVmProp,
    getNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'overlayPositionType',
      options: {
        enumerable: true,
        metricsKey: 'node.overlayPositionType',
        get() {
          return vm.newString(getNode(this).overlayPositionType)
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: false,
    })
  },
  overlayBackgroundInteraction({
    vm,
    defineVmProp,
    getNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'overlayBackgroundInteraction',
      options: {
        enumerable: true,
        metricsKey: 'node.overlayBackgroundInteraction',
        get() {
          return vm.newString(getNode(this).overlayBackgroundInteraction)
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: false,
    })
  },
  overlayBackground({
    vm,
    defineVmProp,
    getNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'overlayBackground',
      options: {
        enumerable: true,
        metricsKey: 'node.overlayBackground',
        get() {
          const value = getNode(this).overlayBackground
          const wrapped = vm.deepWrap(value)
          vm.deepFreezeObject(wrapped)
          return wrapped
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: false,
    })
  },
  selection({
    vm,
    defineVmProp,
    getNodeFactory,
    getNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'selection',
      options: {
        enumerable: true,
        metricsKey: 'node.selection',
        get() {
          const arr = vm.newArray()
          let idx = 0
          for (const node of getNode(this).directlySelectedNodes) {
            if (node.isInImmutableFrame && node.type !== 'TABLE_CELL') {
              const n = validateImmutableFrame(node)
              vm.setProp(arr, idx.toString(), getNodeFactory().createNode(n.guid, 'node.selection'))
            }
            else {
              vm.setProp(arr, idx.toString(), getNodeFactory().createNode(node.guid, 'node.selection'))
            }
            idx++
          }
          vm.shallowFreezeObject(arr)
          return arr
        },
        set(val) {
          if (!vm.isArray(val))
            throw new Error('The selection must be an array')
          const len = vm.getNumberProp(val, 'length')
          const nodes: any[] = []
          for (let i = 0; i < len; i++) {
            const n = getNode(vm.getProp(val, i.toString()))
            Egt.expandUpToRoot(n.guid)
            nodes.push(n)
          }
          getNode(this).directlySelectedNodes = nodes
          return vm.undefined
        },
      },
      hasEditScope: true,
      canWriteInReadOnly: true,
    })
    defineVmProp({
      handle,
      key: 'selectedTextRange',
      options: {
        enumerable: true,
        metricsKey: 'node.selectedTextRange',
        get() {
          const range = getNode(this).getSelectedTextRange()
          if (!range)
            return vm.$$null
          const obj = vm.newObject()
          vm.setProp(obj, 'node', getNodeFactory().createNode(range.textNodeId, 'node.selectedTextRange'))
          vm.setProp(obj, 'start', vm.newNumber(range.start))
          vm.setProp(obj, 'end', vm.newNumber(range.end))
          vm.shallowFreezeObject(obj)
          return obj
        },
        set(val) {
          const node = getNode(this)
          if (vm.isNull(val)) {
            const t = node.directlySelectedNodes
            if (t.length === 1 && t[0].type === 'TEXT')
              Y5.triggerAction('leave-edit-mode')
            return vm.undefined
          }
          const r = _$$u({
            vm,
            handle: val,
            zSchema: _$$N.SelectedText,
            property: 'selectedTextRange',
          })
          const a = getNode(vm.getProp(val, 'node'))
          if (!r)
            return
          if (r.end < r.start)
            throw new Error('selectedTextRange must have (start <= end)')
          const s = a.characters.length
          if (r.start > s || r.end > s) {
            throw new Error('selectedTextRange must have (start < # of characters), (end < # of characters)')
          }
          node.directlySelectedNodes = [a]
          Y5.triggerAction('request-edit-mode')
          node.setSelectedTextRange(a.guid, r.start, r.end)
          return vm.undefined
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: true,
    })
  },
  booleanOperation({
    vm,
    defineVmProp,
    getNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'booleanOperation',
      options: {
        enumerable: true,
        metricsKey: 'node.booleanOperation',
        get() {
          let op = getNode(this).booleanOperation
          if (op === 'XOR')
            op = 'EXCLUDE'
          return vm.newString(op)
        },
        set(val) {
          let n = _$$u({
            vm,
            handle: val,
            zSchema: _$$N.BooleanOperation,
            property: 'booleanOperation',
          })
          if (n === 'EXCLUDE')
            n = 'XOR'
          getNode(this).booleanOperation = n
          return vm.undefined
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: true,
    })
  },
  innerRadius({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'innerRadius',
      options: {
        enumerable: !0,
        metricsKey: 'node.innerRadius',
        get() {
          return e.newNumber(i(this).starInnerScale)
        },
        set(t) {
          i(this).starInnerScale = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.ZeroToOne,
            property: 'innerRadius',
          })
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  arcData({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'arcData',
      options: {
        enumerable: !0,
        metricsKey: 'node.arcData',
        get() {
          let t = e.deepWrap(i(this).arcData)
          e.deepFreezeObject(t)
          return t
        },
        set(t) {
          i(this).arcData = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.ArcData,
            property: 'arcData',
          })
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  topLeftRadius({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'topLeftRadius',
      options: {
        enumerable: !0,
        metricsKey: 'node.topLeftRadius',
        get() {
          let t = i(this)
          return e.newNumber(t.rectangleCornerRadiiIndependent ? t.rectangleTopLeftCornerRadius : t.cornerRadius)
        },
        set(t) {
          let n = i(this)
          if (n.type === 'SLIDE') {
            n.rectangleCornerRadiiIndependent = !0
            n.rectangleTopLeftCornerRadius = _$$u({
              vm: e,
              handle: t,
              zSchema: _$$N.PositiveFloat,
              property: 'topLeftRadius',
            })
          }
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  topRightRadius({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'topRightRadius',
      options: {
        enumerable: !0,
        metricsKey: 'node.topRightRadius',
        get() {
          let t = i(this)
          return e.newNumber(t.rectangleCornerRadiiIndependent ? t.rectangleTopRightCornerRadius : t.cornerRadius)
        },
        set(t) {
          let n = i(this)
          if (n.type === 'SLIDE') {
            n.rectangleCornerRadiiIndependent = !0
            n.rectangleTopRightCornerRadius = _$$u({
              vm: e,
              handle: t,
              zSchema: _$$N.PositiveFloat,
              property: 'topRightRadius',
            })
          }
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  bottomLeftRadius({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'bottomLeftRadius',
      options: {
        enumerable: !0,
        metricsKey: 'node.bottomLeftRadius',
        get() {
          let t = i(this)
          return e.newNumber(t.rectangleCornerRadiiIndependent ? t.rectangleBottomLeftCornerRadius : t.cornerRadius)
        },
        set(t) {
          let n = i(this)
          if (n.type === 'SLIDE') {
            n.rectangleCornerRadiiIndependent = !0
            n.rectangleBottomLeftCornerRadius = _$$u({
              vm: e,
              handle: t,
              zSchema: _$$N.PositiveFloat,
              property: 'bottomLeftRadius',
            })
          }
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  bottomRightRadius({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'bottomRightRadius',
      options: {
        enumerable: !0,
        metricsKey: 'node.bottomLeftRadius',
        get() {
          let t = i(this)
          return e.newNumber(t.rectangleCornerRadiiIndependent ? t.rectangleBottomRightCornerRadius : t.cornerRadius)
        },
        set(t) {
          let n = i(this)
          if (n.type === 'SLIDE') {
            n.rectangleCornerRadiiIndependent = !0
            n.rectangleBottomLeftCornerRadius = _$$u({
              vm: e,
              handle: t,
              zSchema: _$$N.PositiveFloat,
              property: 'bottomRightRadius',
            })
          }
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  exportSettings({
    vm,
    defineVmProp,
    getNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'exportSettings',
      options: {
        enumerable: true,
        metricsKey: 'node.exportSettings',
        get() {
          const node = getNode(this)
          const type = node.type
          const settings = node.exportSettings ?? []
          const wrapped = vm.deepWrap(settings.map((setting) => {
            const format = setting.imageType === 'JPEG' ? 'JPG' : setting.imageType
            const result: ExportSetting = {
              format,
              suffix: setting.suffix || '',
              contentsOnly: !!setting.contentsOnly,
            }
            if (setting.colorProfile)
              result.colorProfile = setting.colorProfile
            if (type === 'TEXT')
              result.useAbsoluteBounds = !!setting.useAbsoluteBounds
            if (format === 'JPG' || format === 'PNG') {
              result.constraint = {
                type: setting.constraint.type.substring(8),
                value: setting.constraint.value,
              }
            }
            else if (format === 'SVG') {
              result.svgOutlineText = !!setting.svgOutlineText
              result.svgIdAttribute = setting.svgIDMode === 'ALWAYS'
              result.svgSimplifyStroke = !setting.svgForceStrokeMasks
            }
            return result
          }))
          vm.deepFreezeObject(wrapped)
          return wrapped
        },
        set(val) {
          const settings = _$$u({
            vm,
            handle: val,
            zSchema: _$$N.ExportSettings,
            property: 'exportSettings',
          })
          const node = getNode(this)
          if (node.type !== 'TEXT' && settings.some(e => e.useAbsoluteBounds !== undefined)) {
            throw new Error('Cannot set useAbsoluteBounds for ExportSetting on node that is not type text.')
          }
          node.exportSettings = iw(settings)
          return vm.undefined
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: true,
    })
  },
  pluginData({
    vm,
    defineVmFunction,
    pluginID,
    getNode,
    isPluginExemptFromPluginDataLimits,
  }, handle) {
    defineVmFunction({
      handle,
      key: 'getSharedPluginData',
      metricsKey: 'node.getSharedPluginData',
      cb(namespaceHandle, keyHandle) {
        const namespace = _$$u({
          vm,
          handle: namespaceHandle,
          zSchema: _$$z.string(),
          property: 'namespace',
        })
        validateNamespace(namespace)
        const key = _$$u({
          vm,
          handle: keyHandle,
          zSchema: _$$z.string(),
          property: 'key',
        })
        return vm.newString(getNode(this).getSharedPluginData(namespace, key))
      },
      isAllowedInReadOnly: true,
      hasEditScope: false,
    })
    defineVmFunction({
      handle,
      key: 'setSharedPluginData',
      metricsKey: 'node.setSharedPluginData',
      cb(namespaceHandle, keyHandle, valueHandle) {
        const namespace = _$$u({
          vm,
          handle: namespaceHandle,
          zSchema: _$$z.string(),
          property: 'namespace',
        })
        validateNamespace(namespace)
        const key = _$$u({
          vm,
          handle: keyHandle,
          zSchema: _$$z.string(),
          property: 'key',
        })
        const value = _$$u({
          vm,
          handle: valueHandle,
          zSchema: _$$z.string(),
          property: 'value',
        })
        fp(pluginID, [namespace, key, value], isPluginExemptFromPluginDataLimits)
        getNode(this).setSharedPluginData(namespace, key, value)
        const stats = vm.getStats()
        if (stats) {
          const id = vm.getStringProp(this, 'id')
          stats.recordSetSharedPluginDataSize(id, namespace, key, value)
        }
        return vm.undefined
      },
      isAllowedInReadOnly: true,
      hasEditScope: true,
    })
    defineVmFunction({
      handle,
      key: 'getSharedPluginDataKeys',
      metricsKey: 'node.getSharedPluginDataKeys',
      cb(namespaceHandle) {
        const namespace = _$$u({
          vm,
          handle: namespaceHandle,
          zSchema: _$$z.string(),
          property: 'namespace',
        })
        validateNamespace(namespace)
        return vm.deepWrap(getNode(this).getSharedPluginDataKeys(namespace))
      },
      isAllowedInReadOnly: true,
      hasEditScope: false,
    })
    defineVmFunction({
      handle,
      key: 'getPluginData',
      metricsKey: 'node.getPluginData',
      cb(keyHandle) {
        dnode7(pluginID, 'get private plugin data')
        const key = _$$u({
          vm,
          handle: keyHandle,
          zSchema: _$$z.string(),
          property: 'key',
        })
        return vm.newString(getNode(this).getPluginData(pluginID, key))
      },
      isAllowedInReadOnly: true,
      hasEditScope: false,
    })
    defineVmFunction({
      handle,
      key: 'setPluginData',
      metricsKey: 'node.setPluginData',
      cb(keyHandle, valueHandle) {
        dnode7(pluginID, 'set private plugin data')
        const key = _$$u({
          vm,
          handle: keyHandle,
          zSchema: _$$z.string(),
          property: 'key',
        })
        const value = _$$u({
          vm,
          handle: valueHandle,
          zSchema: _$$z.string(),
          property: 'value',
        })
        fp(pluginID, [key, value], isPluginExemptFromPluginDataLimits)
        getNode(this).setPluginData(pluginID, key, value)
        const stats = vm.getStats()
        if (stats) {
          const id = vm.getStringProp(this, 'id')
          stats.recordSetPluginDataSize(id, key, value)
        }
        return vm.undefined
      },
      isAllowedInReadOnly: true,
      hasEditScope: true,
    })
    defineVmFunction({
      handle,
      key: 'getPluginDataKeys',
      metricsKey: 'node.getPluginDataKeys',
      cb() {
        dnode7(pluginID, 'get private plugin data keys')
        return vm.deepWrap(getNode(this).getPluginDataKeys(pluginID))
      },
      isAllowedInReadOnly: true,
      hasEditScope: false,
    })
  },
  variableConsumptionMap({
    vm,
    defineVmProp,
    defineVmFunction,
    getNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'variableConsumptionMap',
      options: {
        enumerable: true,
        metricsKey: 'node.variableConsumptionMap',
        get() {
          return vm.deepWrap(getNode(this).getVariableConsumptionMap())
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: false,
    })
    defineVmFunction({
      handle,
      key: 'updateVariableConsumption',
      metricsKey: 'node.updateVariableConsumption',
      cb(nodeFieldHandle, variableDataHandle) {
        const nodeField = _$$u({
          vm,
          handle: nodeFieldHandle,
          zSchema: _$$z.string(),
          property: 'nodeField',
        })
        const variableData = _$$u({
          vm,
          handle: variableDataHandle,
          zSchema: _$$N.VariableDataSchema,
          property: 'variableData',
        })
        const warnMsg = getNode(this).updateVariableConsumption(nodeField, variableData)
        if (warnMsg)
          _$$k2.warn(warnMsg)
        return vm.undefined
      },
      isAllowedInReadOnly: false,
      hasEditScope: true,
    })
  },
  boundVariables({
    vm,
    defineVmProp,
    getNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'boundVariables',
      options: {
        enumerable: true,
        metricsKey: 'node.boundVariables',
        get() {
          return vm.deepWrap(getNode(this).boundVariables)
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: false,
    })
  },
  inferredVariables({
    vm,
    defineVmProp,
    getNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'inferredVariables',
      options: {
        enumerable: true,
        metricsKey: 'node.inferredVariables',
        get() {
          return vm.deepWrap(getNode(this).inferredVariables)
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: false,
    })
  },
  availableInferredVariables({
    vm,
    defineVmProp,
    getNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'availableInferredVariables',
      options: {
        enumerable: true,
        metricsKey: 'node.availableInferredVariables',
        get() {
          return vm.deepWrap(getNode(this).availableInferredVariables)
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: false,
    })
  },
  setBoundVariable({
    vm,
    defineVmFunction,
    incrementalSafeApi,
    pluginVersionID,
    getNode,
    stats,
    allowIncrementalUnsafeApiCalls,
  }, handle) {
    defineVmFunction({
      handle,
      key: 'setBoundVariable',
      metricsKey: 'node.setBoundVariable',
      cb(fieldHandle, variableHandle) {
        const fieldStr = _$$u({
          vm,
          handle: fieldHandle,
          zSchema: _$$z.string(),
          property: 'field',
        })
        if (fieldStr === 'fills' || fieldStr === 'strokes') {
          throw new Error('fills and strokes variable bindings must be set on paints directly')
        }
        if (fieldStr === 'componentProperties') {
          throw new Error('componentProperties variable bindings must be set on componentProperties directly')
        }
        const field = _$$u({
          vm,
          handle: fieldHandle,
          zSchema: variableDefinitions.VariableBindableNodeField,
          property: 'field',
        })
        const getVariableId = ({
          callerName,
          consoleLogger,
          getNode,
          incrementalSafeApi,
          pluginVersionID,
          vm,
          handle,
          allowIncrementalUnsafeApiCalls,
        }) => {
          if (vm.isNull(handle) || vm.isUndefined(handle))
            return null
          if (vm.isObject(handle)) {
            const node = getNode(handle)
            if (!node || node.type !== 'VARIABLE') {
              throw new Error(`Cannot call ${callerName}  with a non-variable node.`)
            }
            return vm.getStringProp(handle, 'id')
          }
          if (vm.isString(handle)) {
            if (incrementalSafeApi && !allowIncrementalUnsafeApiCalls) {
              throw new Error(`Cannot call ${callerName} with a variable id. Please pass a variable object instead.`)
            }
            (incrementalSafeApi && allowIncrementalUnsafeApiCalls || !pluginVersionID) && consoleLogger.warn(`Calling ${callerName} with a variable id is deprecated. Please pass the variable node instead.`)
            return _$$u({
              vm,
              handle,
              zSchema: _$$z.string(),
              property: 'variableId',
            })
          }
          throw new Error(`Cannot call ${callerName} without a variable node parameter.`)
        }
        const variableId = getVariableId({
          callerName: 'setBoundVariable',
          consoleLogger: _$$k2,
          getNode,
          incrementalSafeApi,
          pluginVersionID,
          vm,
          handle: variableHandle,
          allowIncrementalUnsafeApiCalls,
        })
        stats.increment(`node.setBoundVariable ${variableId === null ? 'Remove' : 'Add'}`)
        getNode(this).setBoundVariable(field, variableId)
        return vm.undefined
      },
      isAllowedInReadOnly: false,
      hasEditScope: true,
    })
  },
  variableConsumerModes({
    vm: e,
    defineVmFunction: t,
    getNode: i,
    incrementalSafeApi: n,
    pluginVersionID: r,
    allowIncrementalUnsafeApiCalls: a,
  }, s) {
    t({
      handle: s,
      key: 'clearExplicitVariableModeForCollection',
      metricsKey: 'node.clearExplicitVariableModeForCollection',
      cb(t) {
        let s = validateAndExtractCollectionId({
          callerName: 'clearExplicitVariableModeForCollection',
          consoleLogger: _$$k2,
          getNode: i,
          incrementalSafeApi: n,
          pluginVersionID: r,
          vm: e,
          vmHandle: t,
          allowIncrementalUnsafeApiCalls: a,
        })
        i(this).clearExplicitVariableConsumerModeForCollection(s)
        return e.undefined
      },
      isAllowedInReadOnly: !1,
      hasEditScope: !0,
    })
    t({
      handle: s,
      key: 'setExplicitVariableModeForCollection',
      metricsKey: 'node.setExplicitVariableModeForCollection',
      cb(t, s) {
        let o = validateAndExtractCollectionId({
          callerName: 'setExplicitVariableModeForCollection',
          consoleLogger: _$$k2,
          getNode: i,
          incrementalSafeApi: n,
          pluginVersionID: r,
          vm: e,
          vmHandle: t,
          allowIncrementalUnsafeApiCalls: a,
        })
        let l = _$$u({
          vm: e,
          handle: s,
          zSchema: _$$z.string(),
          property: 'variableModeID',
        })
        i(this).setExplicitVariableModeForCollection(o, l)
        return e.undefined
      },
      isAllowedInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  pluginRelaunchData({
    vm: e,
    defineVmFunction: t,
    pluginID: i,
    isWidget: n,
    getNode: r,
  }, a) {
    t({
      handle: a,
      key: 'getRelaunchData',
      metricsKey: 'node.getRelaunchData',
      cb() {
        dnode7(i, 'get relaunch data')
        return e.deepWrap(r(this).getRelaunchData(i))
      },
      isAllowedInReadOnly: !0,
      hasEditScope: !1,
    })
    t({
      handle: a,
      key: 'setRelaunchData',
      metricsKey: 'node.setRelaunchData',
      cb(t) {
        if (n)
          throw new Error('Cannot set relaunch data in a widget')
        dnode7(i, 'set relaunch data')
        let a = _$$u({
          vm: e,
          handle: t,
          zSchema: _$$N.RelaunchData,
          property: 'relaunchData',
        })
        let s = r(this)
        for (let e in a) {
          if (a[e].length > 1e3) {
            throw new Error('Maximum allowed description length is 1000 characters')
          }
        }
        s.setRelaunchData(i, a)
        return e.undefined
      },
      isAllowedInReadOnly: !0,
      hasEditScope: !0,
    })
  },
  textRangeFunctions({
    vm,
    defineVmFunction,
    defineVmIncrementalMethod,
    mixedSentinel,
    imageStore,
    videoStore,
    getNode,
    incrementalSafeApi,
    documentAccessState,
    allowIncrementalUnsafeApiCalls,
  }, handle) {
    const parseRange = (node, startHandle, endHandle) => {
      const start = _$$u({
        vm,
        handle: startHandle,
        zSchema: _$$N.PositiveInteger,
        property: 'start',
      })
      const end = _$$u({
        vm,
        handle: endHandle,
        zSchema: _$$N.PositiveInteger,
        property: 'end',
      })
      if (start >= end) {
        throw new Error('Empty range selected. \'end\' must be greater than \'start\'')
      }
      if (end > node.characters.length) {
        throw new Error('Range outside of available characters. \'start\' must be less than node.characters.length and \'end\' must be less than or equal to node.characters.length')
      }
      return [start, end]
    }
    defineVmFunction({
      handle,
      key: 'getRangeFontSize',
      metricsKey: 'node.getRangeFontSize',
      cb(start, end) {
        const node = getNode(this)
        const [s, e] = parseRange(node, start, end)
        const val = node.getRangeFontSize(s, e)
        return val === 'mixed' ? mixedSentinel : vm.newNumber(val)
      },
      isAllowedInReadOnly: true,
      hasEditScope: false,
    })
    defineVmFunction({
      handle,
      key: 'setRangeFontSize',
      metricsKey: 'node.setRangeFontSize',
      cb(start, end, value) {
        const node = getNode(this)
        const [s, e] = parseRange(node, start, end)
        const v = _$$u({
          vm,
          handle: value,
          zSchema: _$$z.number().finite().min(1),
          property: 'value',
        })
        node.setRangeFontSize(s, e, v)
        return vm.undefined
      },
      isAllowedInReadOnly: false,
      hasEditScope: true,
    })
    defineVmFunction({
      handle,
      key: 'getRangeFontName',
      metricsKey: 'node.getRangeFontName',
      cb(start, end) {
        const node = getNode(this)
        const [s, e] = parseRange(node, start, end)
        const val = node.getRangeFontName(s, e)
        if (val === 'mixed')
          return mixedSentinel
        const wrapped = vm.deepWrap({
          family: val.family,
          style: val.style,
        })
        vm.deepFreezeObject(wrapped)
        return wrapped
      },
      isAllowedInReadOnly: true,
      hasEditScope: false,
    })
    defineVmFunction({
      handle,
      key: 'setRangeFontName',
      metricsKey: 'node.setRangeFontName',
      cb(start, end, value) {
        const node = getNode(this)
        const [s, e] = parseRange(node, start, end)
        const v = _$$u({
          vm,
          handle: value,
          zSchema: _$$N.FontName,
          property: 'value',
        })
        node.setRangeFontName(s, e, v)
        return vm.undefined
      },
      isAllowedInReadOnly: false,
      hasEditScope: true,
    })
    defineVmFunction({
      handle,
      key: 'getRangeAllFontNames',
      metricsKey: 'node.getRangeAllFontNames',
      cb(start, end) {
        const node = getNode(this)
        const [s, e] = parseRange(node, start, end)
        const arr = node.getRangeAllFontNames(s, e)
        const wrapped = vm.deepWrap(arr.map(({
          family,
          style,
        }) => ({
          family,
          style,
        })))
        vm.deepFreezeObject(wrapped)
        return wrapped
      },
      isAllowedInReadOnly: true,
      hasEditScope: false,
    })
    defineVmFunction({
      handle,
      key: 'getRangeFontWeight',
      metricsKey: 'node.getRangeFontWeight',
      cb(start, end) {
        const node = getNode(this)
        const [s, e] = parseRange(node, start, end)
        const val = node.getRangeFontWeight(s, e)
        if (val === 'mixed')
          return mixedSentinel
        const n = vm.newNumber(val)
        vm.deepFreezeObject(n)
        return n
      },
      isAllowedInReadOnly: true,
      hasEditScope: false,
    })
    defineVmFunction({
      handle,
      key: 'getRangeTextDecoration',
      metricsKey: 'node.getRangeTextDecoration',
      cb(start, end) {
        const node = getNode(this)
        const [s, e] = parseRange(node, start, end)
        const val = node.getRangeTextDecoration(s, e)
        return val === 'mixed' ? mixedSentinel : vm.newString(val)
      },
      isAllowedInReadOnly: true,
      hasEditScope: false,
    })
    defineVmFunction({
      handle,
      key: 'setRangeTextDecoration',
      metricsKey: 'node.setRangeTextDecoration',
      cb(start, end, value) {
        const node = getNode(this)
        const [s, e] = parseRange(node, start, end)
        const v = _$$u({
          vm,
          handle: value,
          zSchema: _$$N.TextDecoration,
          property: 'value',
        })
        node.setRangeTextDecoration(s, e, v)
        return vm.undefined
      },
      isAllowedInReadOnly: false,
      hasEditScope: true,
    })
    defineVmFunction({
      handle,
      key: 'getRangeTextDecorationStyle',
      metricsKey: 'node.getRangeTextDecorationStyle',
      cb(start, end) {
        const node = getNode(this)
        const [s, e] = parseRange(node, start, end)
        const val = node.getRangeTextDecorationStyle(s, e)
        return val === null ? vm.$$null : val === 'mixed' ? mixedSentinel : vm.newString(val)
      },
      isAllowedInReadOnly: true,
      hasEditScope: false,
    })
    defineVmFunction({
      handle,
      key: 'setRangeTextDecorationStyle',
      metricsKey: 'node.setRangeTextDecorationStyle',
      cb(start, end, value) {
        const node = getNode(this)
        const [s, e] = parseRange(node, start, end)
        const v = _$$u({
          vm,
          handle: value,
          zSchema: _$$N.TextDecorationStyle,
          property: 'value',
        })
        node.setRangeTextDecorationStyle(s, e, v)
        return vm.undefined
      },
      isAllowedInReadOnly: false,
      hasEditScope: true,
    })
    defineVmFunction({
      handle,
      key: 'getRangeTextDecorationSkipInk',
      metricsKey: 'node.getRangeTextDecorationSkipInk',
      cb(start, end) {
        const node = getNode(this)
        const [s, e] = parseRange(node, start, end)
        const val = node.getRangeTextDecorationSkipInk(s, e)
        return val === null ? vm.$$null : val === 'mixed' ? mixedSentinel : vm.newBoolean(val)
      },
      isAllowedInReadOnly: true,
      hasEditScope: false,
    })
    defineVmFunction({
      handle,
      key: 'setRangeTextDecorationSkipInk',
      metricsKey: 'node.setRangeTextDecorationSkipInk',
      cb(start, end, value) {
        const node = getNode(this)
        const [s, e] = parseRange(node, start, end)
        const v = _$$u({
          vm,
          handle: value,
          zSchema: _$$z.boolean(),
          property: 'value',
        })
        node.setRangeTextDecorationSkipInk(s, e, v)
        return vm.undefined
      },
      isAllowedInReadOnly: false,
      hasEditScope: true,
    })
    defineVmFunction({
      handle,
      key: 'getRangeTextDecorationOffset',
      metricsKey: 'node.getRangeTextDecorationOffset',
      cb(start, end) {
        const node = getNode(this)
        const [s, e] = parseRange(node, start, end)
        const val = node.getRangeTextDecorationOffset(s, e)
        if (val === null)
          return vm.$$null
        if (val === 'mixed')
          return mixedSentinel
        const wrapped = vm.deepWrap(ik(val))
        vm.deepFreezeObject(wrapped)
        return wrapped
      },
      isAllowedInReadOnly: true,
      hasEditScope: false,
    })
    defineVmFunction({
      handle,
      key: 'setRangeTextDecorationOffset',
      metricsKey: 'node.setRangeTextDecorationOffset',
      cb(start, end, value) {
        const node = getNode(this)
        const [s, e] = parseRange(node, start, end)
        const v = iR(_$$u({
          vm,
          handle: value,
          zSchema: _$$N.TextDecorationOffset,
          property: 'value',
        }))
        node.setRangeTextDecorationOffset(s, e, v)
        return vm.undefined
      },
      isAllowedInReadOnly: false,
      hasEditScope: true,
    })
    defineVmFunction({
      handle,
      key: 'getRangeTextDecorationThickness',
      metricsKey: 'node.getRangeTextDecorationThickness',
      cb(start, end) {
        const node = getNode(this)
        const [s, e] = parseRange(node, start, end)
        const val = node.getRangeTextDecorationThickness(s, e)
        if (val === null)
          return vm.$$null
        if (val === 'mixed')
          return mixedSentinel
        const wrapped = vm.deepWrap(convertTextDecorationThicknessFromLegacy(val))
        vm.deepFreezeObject(wrapped)
        return wrapped
      },
      isAllowedInReadOnly: true,
      hasEditScope: false,
    })
    defineVmFunction({
      handle,
      key: 'setRangeTextDecorationThickness',
      metricsKey: 'node.setRangeTextDecorationThickness',
      cb(start, end, value) {
        const node = getNode(this)
        const [s, e] = parseRange(node, start, end)
        const v = convertTextDecorationThicknessToLegacy(_$$u({
          vm,
          handle: value,
          zSchema: _$$N.TextDecorationThickness,
          property: 'value',
        }))
        node.setRangeTextDecorationThickness(s, e, v)
        return vm.undefined
      },
      isAllowedInReadOnly: false,
      hasEditScope: true,
    })
    defineVmFunction({
      handle,
      key: 'getRangeTextDecorationColor',
      metricsKey: 'node.getRangeTextDecorationColor',
      cb(start, end) {
        const node = getNode(this)
        const [s, e] = parseRange(node, start, end)
        const val = node.getRangeTextDecorationFillPaints(s, e)
        if (val === null)
          return vm.$$null
        if (val === 'mixed')
          return mixedSentinel
        const color = extractSolidColorFromPaints(val.data)
        const wrapped = vm.deepWrap(color)
        vm.deepFreezeObject(wrapped)
        return wrapped
      },
      isAllowedInReadOnly: true,
      hasEditScope: false,
    })
    defineVmFunction({
      handle,
      key: 'setRangeTextDecorationColor',
      metricsKey: 'node.setRangeTextDecorationColor',
      cb(start, end, value) {
        const node = getNode(this)
        const [s, e] = parseRange(node, start, end)
        const blobs = []
        const paints = {
          data: processValidPaintValues(imageStore, videoStore, _$$u({
            vm,
            handle: value,
            zSchema: _$$N.TextDecorationColor,
            property: 'textDecorationColor',
          }), blobs),
          blobs,
        }
        node.setRangeTextDecorationFillPaints(s, e, paints)
        return vm.undefined
      },
      isAllowedInReadOnly: false,
      hasEditScope: true,
    })
    defineVmFunction({
      handle,
      key: 'getRangeTextCase',
      metricsKey: 'node.getRangeTextCase',
      cb(start, end) {
        const node = getNode(this)
        const [s, e] = parseRange(node, start, end)
        return normalizeTextCase(vm, mixedSentinel, node.getRangeTextCase(s, e), node.getRangeFontVariantCaps(s, e))
      },
      isAllowedInReadOnly: true,
      hasEditScope: false,
    })
    defineVmFunction({
      handle,
      key: 'setRangeTextCase',
      metricsKey: 'node.setRangeTextCase',
      cb(start, end, value) {
        const node = getNode(this)
        const [s, e] = parseRange(node, start, end)
        const {
          textCase,
          fontVariantCaps,
        } = processTextCaseForSmallCaps(node, s, e, _$$u({
          vm,
          handle: value,
          zSchema: _$$N.TextCase,
          property: 'textCase',
        }))
        node.setRangeTextCase(s, e, textCase)
        node.setRangeFontVariantCaps(s, e, fontVariantCaps)
        return vm.undefined
      },
      isAllowedInReadOnly: false,
      hasEditScope: true,
    })
    defineVmFunction({
      handle,
      key: 'getRangeOpenTypeFeatures',
      metricsKey: 'node.getRangeOpenTypeFeatures',
      cb(start, end) {
        const node = getNode(this)
        const [s, e] = parseRange(node, start, end)
        return processOpenTypeFeatures({
          vm,
          mixedSentinel,
        }, node.getRangeToggledOnOpenTypeFeatures(s, e), node.getRangeToggledOffOpenTypeFeatures(s, e), node.getRangeFontVariantNumericFigure(s, e), node.getRangeFontVariantNumericSpacing(s, e), node.getRangeFontVariantNumericFraction(s, e), node.getRangeFontVariantPosition(s, e))
      },
      isAllowedInReadOnly: true,
      hasEditScope: false,
    })
    defineVmFunction({
      handle,
      key: 'getRangeLineHeight',
      metricsKey: 'node.getRangeLineHeight',
      cb(start, end) {
        const node = getNode(this)
        const [s, e] = parseRange(node, start, end)
        const val = node.getRangeLineHeight(s, e)
        if (val === 'mixed')
          return mixedSentinel
        const wrapped = vm.deepWrap(iC(val))
        vm.deepFreezeObject(wrapped)
        return wrapped
      },
      isAllowedInReadOnly: true,
      hasEditScope: false,
    })
    defineVmFunction({
      handle,
      key: 'setRangeLineHeight',
      metricsKey: 'node.setRangeLineHeight',
      cb(start, end, value) {
        const node = getNode(this)
        const [s, e] = parseRange(node, start, end)
        const v = iT(_$$u({
          vm,
          handle: value,
          zSchema: _$$N.LineHeight,
          property: 'value',
        }))
        node.setRangeLineHeight(s, e, v)
        return vm.undefined
      },
      isAllowedInReadOnly: false,
      hasEditScope: true,
    })
    if (getFeatureFlags().ce_mixed_text_spacing) {
      defineVmFunction({
        handle,
        key: 'getRangeParagraphSpacing',
        metricsKey: 'node.getRangeParagraphSpacing',
        cb(start, end) {
          const node = getNode(this)
          const [s, e] = parseRange(node, start, end)
          const val = node.getRangeParagraphSpacing(s, e)
          return val === 'mixed' ? mixedSentinel : vm.newNumber(val)
        },
        isAllowedInReadOnly: true,
        hasEditScope: false,
      })
      defineVmFunction({
        handle,
        key: 'setRangeParagraphSpacing',
        metricsKey: 'node.setRangeParagraphSpacing',
        cb(start, end, value) {
          const node = getNode(this)
          const [s, e] = parseRange(node, start, end)
          const v = _$$u({
            vm,
            handle: value,
            zSchema: _$$z.number().finite().min(0),
            property: 'value',
          })
          node.setRangeParagraphSpacing(s, e, v)
          return vm.undefined
        },
        isAllowedInReadOnly: false,
        hasEditScope: true,
      })
    }
    defineVmFunction({
      handle,
      key: 'getRangeLetterSpacing',
      metricsKey: 'node.getRangeLetterSpacing',
      cb(start, end) {
        const node = getNode(this)
        const [s, e] = parseRange(node, start, end)
        const val = node.getRangeLetterSpacing(s, e)
        if (val === 'mixed')
          return mixedSentinel
        const wrapped = vm.deepWrap({
          unit: val.units,
          value: val.value,
        })
        vm.deepFreezeObject(wrapped)
        return wrapped
      },
      isAllowedInReadOnly: true,
      hasEditScope: false,
    })
    defineVmFunction({
      handle,
      key: 'setRangeLetterSpacing',
      metricsKey: 'node.setRangeLetterSpacing',
      cb(start, end, value) {
        const node = getNode(this)
        const [s, e] = parseRange(node, start, end)
        const v = _$$u({
          vm,
          handle: value,
          zSchema: _$$N.LetterSpacing,
          property: 'value',
        })
        node.setRangeLetterSpacing(s, e, {
          units: v.unit,
          value: v.value,
        })
        return vm.undefined
      },
      isAllowedInReadOnly: false,
      hasEditScope: true,
    })
    defineVmFunction({
      handle,
      key: 'getRangeBoundVariable',
      metricsKey: 'node.getRangeBoundVariable',
      cb(start, end, fieldHandle) {
        const node = getNode(this)
        const [s, e] = parseRange(node, start, end)
        const field = _$$u({
          vm,
          handle: fieldHandle,
          zSchema: variableDefinitions.VariableBindableTextField,
          property: 'field',
        })
        const val = node.getRangeBoundVariable(s, e, field)
        return val === 'mixed' ? mixedSentinel : vm.deepWrap(val)
      },
      isAllowedInReadOnly: true,
      hasEditScope: false,
    })
    defineVmFunction({
      handle,
      key: 'setRangeBoundVariable',
      metricsKey: 'node.setRangeBoundVariable',
      cb(start, end, fieldHandle, variableHandle) {
        const node = getNode(this)
        const [s, e] = parseRange(node, start, end)
        const field = _$$u({
          vm,
          handle: fieldHandle,
          zSchema: getFeatureFlags().ce_mixed_text_spacing ? variableDefinitions.VariableBindableTextField : variableDefinitions.VariableBindableSubstringField,
          property: 'field',
        })
        if (vm.isNull(variableHandle)) {
          node.setRangeBoundVariable(s, e, field, null)
          return vm.undefined
        }
        if (getNode(variableHandle).type !== 'VARIABLE') {
          throw new Error('Cannot call setBoundVariable with a non-variable node.')
        }
        const id = vm.getStringProp(variableHandle, 'id')
        node.setRangeBoundVariable(s, e, field, id)
        return vm.undefined
      },
      isAllowedInReadOnly: false,
      hasEditScope: true,
    })
    defineVmFunction({
      handle,
      key: 'getRangeFills',
      metricsKey: 'node.getRangeFills',
      cb(start, end) {
        const node = getNode(this)
        const [s, e] = parseRange(node, start, end)
        const val = node.getRangeFillPaints(s, e)
        if (val === 'mixed')
          return mixedSentinel
        const wrapped = vm.deepWrap(convertPaintArrayData(val.data))
        vm.deepFreezeObject(wrapped)
        return wrapped
      },
      isAllowedInReadOnly: true,
      hasEditScope: false,
    })
    defineVmFunction({
      handle,
      key: 'setRangeFills',
      metricsKey: 'node.setRangeFills',
      cb(start, end, value) {
        const node = getNode(this)
        const [s, e] = parseRange(node, start, end)
        const blobs = []
        const paints = {
          data: mapPaintConfigurations(imageStore, videoStore, _$$u({
            vm,
            handle: value,
            zSchema: _$$N.Paints,
            property: 'value',
          }), blobs),
          blobs,
        }
        node.setRangeFillPaints(s, e, paints)
        return vm.undefined
      },
      isAllowedInReadOnly: false,
      hasEditScope: true,
    })
    defineVmFunction({
      handle,
      key: 'getRangeTextStyleId',
      metricsKey: 'node.getRangeTextStyleId',
      cb(start, end) {
        const node = getNode(this)
        const [s, e] = parseRange(node, start, end)
        const val = node.getRangeInheritedTextStyle(s, e)
        return val === 'mixed' ? mixedSentinel : vm.newString(_$$nM(val))
      },
      isAllowedInReadOnly: true,
      hasEditScope: false,
    })
    defineVmIncrementalMethod({
      handle,
      key: 'setRangeTextStyleId',
      metricsKey: 'node.setRangeTextStyleId',
      incrementalSafeApiKey: 'setRangeTextStyleIdAsync',
      incrementalSafeApiMetricsKey: 'node.setRangeTextStyleIdAsync',
      parseThis: getNode,
      parseArg(node, start, end, value) {
        const [s, e] = parseRange(node, start, end)
        return {
          start: s,
          end: e,
          styleKey: _$$eX(_$$u({
            vm,
            handle: value,
            zSchema: _$$z.string(),
            property: 'value',
          })),
        }
      },
      prepareDocument: async () => {
        await loadInternalCanvasMemoized(documentAccessState)
      },
      resolveValue: (node, {
        start,
        end,
        styleKey,
      }) => {
        node.setRangeInheritedTextStyle(start, end, styleKey)
        return vm.undefined
      },
      incrementalSafeApi,
      allowIncrementalUnsafeApiCalls,
      isAllowedInReadOnly: false,
      hasEditScope: true,
    })
    defineVmFunction({
      handle,
      key: 'getRangeFillStyleId',
      metricsKey: 'node.getRangeFillStyleId',
      cb(start, end) {
        const node = getNode(this)
        const [s, e] = parseRange(node, start, end)
        const val = node.getRangeInheritedFillStyle(s, e)
        return val === 'mixed' ? mixedSentinel : vm.newString(_$$nM(val))
      },
      isAllowedInReadOnly: true,
      hasEditScope: false,
    })
    defineVmIncrementalMethod({
      handle,
      key: 'setRangeFillStyleId',
      metricsKey: 'node.setRangeFillStyleId',
      incrementalSafeApiKey: 'setRangeFillStyleIdAsync',
      incrementalSafeApiMetricsKey: 'node.setRangeFillStyleIdAsync',
      parseThis: getNode,
      parseArg(node, start, end, value) {
        const [s, e] = parseRange(node, start, end)
        return {
          start: s,
          end: e,
          styleKey: _$$eX(_$$u({
            vm,
            handle: value,
            zSchema: _$$z.string(),
            property: 'value',
          })),
        }
      },
      prepareDocument: async () => {
        await loadInternalCanvasMemoized(documentAccessState)
      },
      resolveValue: (node, {
        start,
        end,
        styleKey,
      }) => {
        node.setRangeInheritedFillStyle(start, end, styleKey)
        return vm.undefined
      },
      incrementalSafeApi,
      allowIncrementalUnsafeApiCalls,
      isAllowedInReadOnly: false,
      hasEditScope: true,
    })
    defineVmFunction({
      handle,
      key: 'getRangeListOptions',
      metricsKey: 'node.getRangeListOptions',
      cb(start, end) {
        const node = getNode(this)
        const [s, e] = parseRange(node, start, end)
        const val = node.getRangeLineType(s, e)
        return val === 'mixed' ? mixedSentinel : vm.deepWrap(convertListOption(val))
      },
      isAllowedInReadOnly: true,
      hasEditScope: false,
    })
    defineVmFunction({
      handle,
      key: 'setRangeListOptions',
      metricsKey: 'node.setRangeListOptions',
      cb(start, end, value) {
        const node = getNode(this)
        const [s, e] = parseRange(node, start, end)
        const v = _$$u({
          vm,
          handle: value,
          zSchema: _$$N.TextListOptions,
          property: 'options',
        })
        let type
        if (v.type === 'ORDERED')
          type = 'ORDERED_LIST'; else if (v.type === 'UNORDERED')
          type = 'UNORDERED_LIST'; else if (v.type === 'NONE')
          type = 'PLAIN'; else throw new Error('Unknown list option')
        node.setRangeLineType(s, e, type)
        return vm.undefined
      },
      isAllowedInReadOnly: false,
      hasEditScope: true,
    })
    if (getFeatureFlags().ce_mixed_text_spacing) {
      defineVmFunction({
        handle,
        key: 'getRangeListSpacing',
        metricsKey: 'node.getRangeListSpacing',
        cb(start, end) {
          const node = getNode(this)
          const [s, e] = parseRange(node, start, end)
          const val = node.getRangeListSpacing(s, e)
          return val === 'mixed' ? mixedSentinel : vm.newNumber(val)
        },
        isAllowedInReadOnly: true,
        hasEditScope: false,
      })
      defineVmFunction({
        handle,
        key: 'setRangeListSpacing',
        metricsKey: 'node.setRangeListSpacing',
        cb(start, end, value) {
          const node = getNode(this)
          const [s, e] = parseRange(node, start, end)
          const v = _$$u({
            vm,
            handle: value,
            zSchema: _$$z.number().finite().min(0),
            property: 'value',
          })
          node.setRangeListSpacing(s, e, v)
          return vm.undefined
        },
        isAllowedInReadOnly: false,
        hasEditScope: true,
      })
    }
    defineVmFunction({
      handle,
      key: 'getRangeIndentation',
      metricsKey: 'node.getRangeIndentation',
      cb(start, end) {
        const node = getNode(this)
        const [s, e] = parseRange(node, start, end)
        const val = node.getRangeLineIndentation(s, e)
        return val === 'mixed' ? mixedSentinel : vm.newNumber(val)
      },
      isAllowedInReadOnly: true,
      hasEditScope: false,
    })
    defineVmFunction({
      handle,
      key: 'setRangeIndentation',
      metricsKey: 'node.setRangeIndentation',
      cb(start, end, value) {
        const node = getNode(this)
        const [s, e] = parseRange(node, start, end)
        const v = _$$u({
          vm,
          handle: value,
          zSchema: _$$N.TextIndentation,
          property: 'indentation',
        })
        node.setRangeLineIndentation(s, e, v)
        return vm.undefined
      },
      isAllowedInReadOnly: false,
      hasEditScope: true,
    })
    if (getFeatureFlags().ce_mixed_text_spacing) {
      defineVmFunction({
        handle,
        key: 'getRangeParagraphIndent',
        metricsKey: 'node.getRangeParagraphIndent',
        cb(start, end) {
          const node = getNode(this)
          const [s, e] = parseRange(node, start, end)
          const val = node.getRangeParagraphIndent(s, e)
          return val === 'mixed' ? mixedSentinel : vm.newNumber(val)
        },
        isAllowedInReadOnly: true,
        hasEditScope: false,
      })
      defineVmFunction({
        handle,
        key: 'setRangeParagraphIndent',
        metricsKey: 'node.setRangeParagraphIndent',
        cb(start, end, value) {
          const node = getNode(this)
          const [s, e] = parseRange(node, start, end)
          const v = _$$u({
            vm,
            handle: value,
            zSchema: _$$z.number().finite().min(0),
            property: 'value',
          })
          node.setRangeParagraphIndent(s, e, v)
          return vm.undefined
        },
        isAllowedInReadOnly: false,
        hasEditScope: true,
      })
    }
    defineVmFunction({
      handle,
      key: 'getRangeHyperlink',
      metricsKey: 'node.getRangeHyperlink',
      cb(start, end) {
        const node = getNode(this)
        const [s, e] = parseRange(node, start, end)
        const val = node.getRangeHyperlink(s, e)
        return val === 'mixed' ? mixedSentinel : vm.deepWrap(val || vm.$$null)
      },
      isAllowedInReadOnly: true,
      hasEditScope: false,
    })
    defineVmFunction({
      handle,
      key: 'setRangeHyperlink',
      metricsKey: 'node.setRangeHyperlink',
      cb(start, end, value) {
        const node = getNode(this)
        const [s, e] = parseRange(node, start, end)
        const v = _$$u({
          vm,
          handle: value,
          zSchema: _$$N.TextHyperlinkOptions,
          property: 'hyperlink',
        })
        node.setRangeHyperlink(s, e, v)
        return vm.undefined
      },
      isAllowedInReadOnly: false,
      hasEditScope: true,
    })
    defineVmFunction({
      handle,
      key: 'getStyledTextSegments',
      metricsKey: 'node.getStyledTextSegments',
      cb(fieldsHandle, start, end) {
        let node = getNode(this)
        let fields = _$$u({
          vm,
          handle: fieldsHandle,
          zSchema: _$$N.StyledTextSegmentFields,
          property: 'getStyledTextSegments',
        })
        if (fields.includes('textCase'))
          fields.push('fontVariantCaps')
        if (fields.includes('openTypeFeatures')) {
          fields.push('fontVariantNumericFigure', 'fontVariantNumericSpacing', 'fontVariantNumericFraction', 'fontVariantPosition', 'toggledOnOTFeatures', 'toggledOffOTFeatures')
        }
        if (fields.includes('textDecorationColor'))
          fields.push('textDecorationFills')
        let segments
        if (vm.isUndefined(start) && vm.isUndefined(end)) {
          segments = node.getStyledTextSegments(fields)
        }
        else if (vm.isUndefined(start) || vm.isUndefined(end)) {
          throw new TypeError('Invalid range. Must provide both \'start\' and \'end\'')
        }
        else {
          const [s, e] = parseRange(node, start, end)
          segments = node.getStyledTextSegments(fields, s, e)
        }
        const arr = vm.newArray()
        for (const [idx, seg] of segments.entries()) {
          const obj = vm.newObject()
          vm.setProp(obj, 'characters', vm.newString(seg.characters))
          vm.setProp(obj, 'start', vm.newNumber(seg.start))
          vm.setProp(obj, 'end', vm.newNumber(seg.end))
          if (seg.fontSize !== undefined)
            vm.setProp(obj, 'fontSize', vm.newNumber(seg.fontSize))
          if (seg.fontName !== undefined) {
            const fontName = vm.deepWrap({
              family: seg.fontName.family,
              style: seg.fontName.style,
            })
            vm.setProp(obj, 'fontName', fontName)
          }
          if (seg.fontWeight !== undefined)
            vm.setProp(obj, 'fontWeight', vm.newNumber(seg.fontWeight))
          if (seg.textDecoration !== undefined)
            vm.setProp(obj, 'textDecoration', vm.newString(seg.textDecoration))
          if (seg.textDecorationStyle !== undefined) {
            vm.setProp(obj, 'textDecorationStyle', seg.textDecorationStyle ? vm.newString(seg.textDecorationStyle) : vm.$$null)
          }
          if (seg.textDecorationSkipInk !== undefined) {
            vm.setProp(obj, 'textDecorationSkipInk', seg.textDecorationSkipInk !== null ? vm.newBoolean(seg.textDecorationSkipInk) : vm.$$null)
          }
          if (seg.textDecorationOffset !== undefined) {
            vm.setProp(obj, 'textDecorationOffset', seg.textDecorationOffset ? vm.deepWrap(ik(seg.textDecorationOffset)) : vm.$$null)
          }
          if (seg.textDecorationThickness !== undefined) {
            vm.setProp(obj, 'textDecorationThickness', seg.textDecorationThickness ? vm.deepWrap(convertTextDecorationThicknessFromLegacy(seg.textDecorationThickness)) : vm.$$null)
          }
          if (seg.textDecorationFills !== undefined) {
            vm.setProp(obj, 'textDecorationColor', seg.textDecorationFills ? vm.deepWrap(extractSolidColorFromPaints(seg.textDecorationFills.data)) : vm.$$null)
          }
          if (seg.textCase !== undefined) {
            vm.setProp(obj, 'textCase', normalizeTextCase(vm, mixedSentinel, seg.textCase, seg.fontVariantCaps))
          }
          if (seg.lineHeight !== undefined)
            vm.setProp(obj, 'lineHeight', vm.deepWrap(iC(seg.lineHeight)))
          if (seg.letterSpacing !== undefined) {
            const ls = vm.deepWrap({
              unit: seg.letterSpacing.units,
              value: seg.letterSpacing.value,
            })
            vm.setProp(obj, 'letterSpacing', ls)
          }
          if (seg.fills !== undefined) {
            vm.setProp(obj, 'fills', vm.deepWrap(convertPaintArrayData(seg.fills.data)))
          }
          if (seg.textStyleId !== undefined) {
            vm.setProp(obj, 'textStyleId', vm.newString(_$$nM(seg.textStyleId)))
          }
          if (seg.fillStyleId !== undefined) {
            vm.setProp(obj, 'fillStyleId', vm.newString(_$$nM(seg.fillStyleId)))
          }
          if (seg.listOptions !== undefined) {
            vm.setProp(obj, 'listOptions', vm.deepWrap(convertListOption(seg.listOptions)))
          }
          if (seg.indentation !== undefined)
            vm.setProp(obj, 'indentation', vm.newNumber(seg.indentation))
          if (seg.hyperlink !== undefined) {
            vm.setProp(obj, 'hyperlink', seg.hyperlink ? vm.deepWrap(seg.hyperlink) : vm.$$null)
          }
          if (seg.boundVariables !== undefined) {
            vm.setProp(obj, 'boundVariables', seg.boundVariables ? vm.deepWrap(seg.boundVariables) : vm.$$null)
          }
          if (seg.textStyleOverrides !== undefined) {
            vm.setProp(obj, 'textStyleOverrides', seg.textStyleOverrides ? vm.deepWrap(seg.textStyleOverrides) : vm.$$null)
          }
          if (seg.paragraphSpacing !== undefined) {
            vm.setProp(obj, 'paragraphSpacing', vm.newNumber(seg.paragraphSpacing))
          }
          if (seg.listSpacing !== undefined)
            vm.setProp(obj, 'listSpacing', vm.newNumber(seg.listSpacing))
          if (seg.paragraphIndent !== undefined) {
            vm.setProp(obj, 'paragraphIndent', vm.newNumber(seg.paragraphIndent))
          }
          if (seg.fontVariantNumericFigure !== undefined && seg.fontVariantNumericSpacing !== undefined && seg.fontVariantNumericFraction !== undefined && seg.toggledOnOTFeatures !== undefined && seg.toggledOffOTFeatures !== undefined && seg.fontVariantPosition !== undefined) {
            vm.setProp(obj, 'openTypeFeatures', processOpenTypeFeatures({
              vm,
              mixedSentinel,
            }, seg.toggledOnOTFeatures, seg.toggledOffOTFeatures, seg.fontVariantNumericFigure, seg.fontVariantNumericSpacing, seg.fontVariantNumericFraction, seg.fontVariantPosition))
          }
          vm.setProp(arr, idx.toString(), obj)
        }
        vm.deepFreezeObject(arr)
        return arr
      },
      isAllowedInReadOnly: true,
      hasEditScope: false,
    })
  },
  outlineStroke({
    vm: e,
    defineVmFunction: t,
    getNodeFactory: i,
    getNode: n,
    pluginID: r,
  }, a) {
    t({
      handle: a,
      key: 'outlineStroke',
      metricsKey: 'node.outlineStroke',
      cb() {
        let t = n(this)
        let a = t.outlineStroke()
        if (!a)
          return e.$$null
        try {
          return i().createNode(a, 'node.outlineStroke')
        }
        catch (i) {
          if (i instanceof ApplicationError && t.type === 'TEXT') {
            x1('node.outlineStroke', 'Attempted to create an outline stroke from a text node with no existing stroke', {
              pluginId: r,
            }, {
              reportAsSentryError: !0,
              logToConsole: NUh.NEVER,
            })
            return e.$$null
          }
          throw i
        }
      },
      isAllowedInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  shapeWithTextType({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'shapeType',
      options: {
        enumerable: !0,
        metricsKey: 'node.shapeType',
        get() {
          return e.newString(i(this).shapeWithTextType)
        },
        set(t) {
          i(this).shapeWithTextType = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.ShapeWithTextType,
            property: 'shapeType',
          })
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  authorName({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'authorName',
      options: {
        enumerable: !0,
        metricsKey: 'node.authorName',
        get() {
          return e.newString(i(this).authorName)
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !1,
    })
  },
  authorVisible({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'authorVisible',
      options: {
        enumerable: !0,
        metricsKey: 'node.authorVisible',
        get() {
          return e.newBoolean(i(this).authorVisible)
        },
        set(t) {
          i(this).authorVisible = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$z.boolean(),
            property: 'authorVisible',
          })
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  isWideWidth({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'isWideWidth',
      options: {
        enumerable: !0,
        metricsKey: 'node.isWideWidth',
        get() {
          return e.newBoolean(i(this).isWideWidth)
        },
        set(t) {
          i(this).isWideWidth = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$z.boolean(),
            property: 'isWideWidth',
          })
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  codeLanguage({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'codeLanguage',
      options: {
        enumerable: !0,
        metricsKey: 'node.codeLanguage',
        get() {
          let t = i(this).codeBlockLanguage
          return t ? e.newString(t) : e.undefined
        },
        set(t) {
          let n = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.CodeBlockLanguage,
            property: 'codeLanguage',
          })
          if (n === 'DART') {
            $D(_$$e.EXTENSIBILITY, new Error('codeLanguage incorrectly set to DART'))
            n = 'TYPESCRIPT'
          }
          i(this).codeBlockLanguage = n
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  code({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'code',
      options: {
        enumerable: !0,
        metricsKey: 'node.code',
        get() {
          let t = i(this).textSublayer
          return t ? e.newString(t.characters) : e.undefined
        },
        set(t) {
          let n = i(this).textSublayer
          n && (n.characters = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$z.string(),
            property: 'characters',
          }))
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  variantGroupProperties({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'variantGroupProperties',
      options: {
        enumerable: !0,
        metricsKey: 'node.variantGroupProperties',
        get() {
          let t = i(this).variantGroupProperties()
          return e.deepWrap(t)
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !1,
    })
  },
  variantProperties({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'variantProperties',
      options: {
        enumerable: !0,
        metricsKey: 'node.variantProperties',
        get() {
          let t = i(this)
          if (!t || t.type !== 'INSTANCE' && !t.isState)
            return e.$$null
          let n = t.variantProperties()
          return e.deepWrap(n)
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !1,
    })
  },
  componentPropertyDefinitions({
    vm: e,
    defineVmProp: t,
    defineVmFunction: i,
    getNode: n,
  }, r) {
    t({
      handle: r,
      key: 'componentPropertyDefinitions',
      options: {
        enumerable: !0,
        metricsKey: 'node.componentPropertyDefinitions',
        get() {
          let t = n(this)
          return e.deepWrap(t.componentPropertyDefinitions())
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !1,
    })
    i({
      handle: r,
      key: 'addComponentProperty',
      metricsKey: 'node.addComponentProperty',
      cb(t, i, r, a) {
        let s
        let o = n(this)
        let l = _$$u({
          vm: e,
          handle: t,
          zSchema: _$$z.string(),
          property: 'node.addComponentProperty.name',
        })
        let d = _$$u({
          vm: e,
          handle: i,
          zSchema: getFeatureFlags().ds_variable_props_number_def ? _$$N.ComponentPropertyTypeWithNumber : _$$N.ComponentPropertyType,
          property: 'node.addComponentProperty.type',
        })
        let c = getFeatureFlags().ds_variable_props_number_def ? _$$N.ComponentPropertyValueWithNumberAndVariable : _$$N.ComponentPropertyValueWithVariable
        let u = _$$u({
          vm: e,
          handle: r,
          zSchema: c,
          property: 'node.addComponentProperty.defaultValue',
        })
        let p = _$$u({
          vm: e,
          handle: a,
          zSchema: _$$N.ComponentPropertyOptions,
          property: 'node.addComponentProperty.options',
        })
        let m = p ? p.preferredValues : void 0
        s = d === 'VARIANT'
          ? o.addVariantComponentPropertyDefinition(l, u)
          : o.addComponentPropertyDefinition(l, (function (e) {
            switch (e) {
              case 'BOOLEAN':
                return 'BOOL'
              case 'TEXT':
                return 'TEXT'
              case 'INSTANCE_SWAP':
                return 'INSTANCE_SWAP'
              case 'NUMBER':
                return 'NUMBER'
              case 'IMAGE':
                return 'IMAGE'
              case 'SLOT':
                return 'SLOT'
              default:
                return ''
            }
          }(d)), u, m)
        return e.newString(s)
      },
      isAllowedInReadOnly: !1,
      hasEditScope: !0,
    })
    i({
      handle: r,
      key: 'editComponentProperty',
      metricsKey: 'node.editComponentProperty',
      cb(t, i) {
        let r = n(this)
        let a = _$$u({
          vm: e,
          handle: t,
          zSchema: _$$z.string(),
          property: 'node.editComponentProperty.propertyName',
        })
        let s = getFeatureFlags().ds_variable_props_number_def ? _$$N.ComponentPropertyDefinitionSchemaWithNumberAndVariable : _$$N.ComponentPropertyDefinitionSchemaWithVariable
        let o = _$$u({
          vm: e,
          handle: i,
          zSchema: s,
          property: 'node.editComponentProperty.newValue',
        })
        let l = r.editComponentPropertyDefinition(a, o.name, o.defaultValue, o.preferredValues)
        return l ? e.deepWrap(l) : e.undefined
      },
      isAllowedInReadOnly: !1,
      hasEditScope: !0,
    })
    i({
      handle: r,
      key: 'deleteComponentProperty',
      metricsKey: 'node.deleteComponentProperty',
      cb(t) {
        let i = n(this)
        let r = _$$u({
          vm: e,
          handle: t,
          zSchema: _$$z.string(),
          property: 'node.deleteComponentProperty.propertyName',
        })
        i.deleteComponentPropertyDefinition(r)
        return e.undefined
      },
      isAllowedInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  componentPropertyReferences({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'componentPropertyReferences',
      options: {
        enumerable: !0,
        metricsKey: 'node.componentPropertyReferences',
        get() {
          let t = i(this).componentPropertyReferences()
          return e.deepWrap(t)
        },
        set(t) {
          let n = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.ComponentPropertyReferences,
            property: 'node.componentPropertyReferences.value',
          })
          i(this).setComponentPropertyReferences(n)
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  componentProperties({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'componentProperties',
      options: {
        enumerable: !0,
        metricsKey: 'node.componentProperties',
        get() {
          let t = i(this).componentProperties()
          return e.deepWrap(t)
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !1,
    })
  },
  isExposedInstance({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'isExposedInstance',
      options: {
        enumerable: !0,
        metricsKey: 'node.isExposedInstance',
        get() {
          return e.newBoolean(i(this).isBubbled)
        },
        set(t) {
          let n = i(this).setPropsAreBubbled(_$$u({
            vm: e,
            handle: t,
            zSchema: _$$z.boolean(),
            property: 'isExposedInstance.value',
          }))
          if (n)
            throw new Error(n)
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  exposedInstances({
    vm,
    defineVmProp,
    getNodeFactory,
    getNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'exposedInstances',
      options: {
        enumerable: true,
        metricsKey: 'node.exposedInstances',
        get() {
          const guids = getNode(this).exposedInstances.map(x => x.guid)
          const arr = vm.newArray()
          let idx = 0
          for (const guid of guids) {
            const node = getNodeFactory().createNode(guid, 'node.exposedInstances')
            if (!vm.isNull(node)) {
              vm.setProp(arr, idx.toString(), node)
              idx++
            }
          }
          vm.deepFreezeObject(arr)
          return arr
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: false,
    })
  },
  overrides({
    vm,
    defineVmProp,
    getNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'overrides',
      options: {
        enumerable: true,
        metricsKey: 'node.overrides',
        get() {
          const overrides = getNode(this).overrides
          for (const o of overrides) {
            const idx = o.overriddenFields.indexOf('strokeTopWeight')
            if (idx >= 0)
              o.overriddenFields[idx] = 'stokeTopWeight'
          }
          const wrapped = vm.deepWrap(overrides)
          vm.deepFreezeObject(wrapped)
          return wrapped
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: false,
    })
  },
  resetOverrides({
    vm,
    defineVmFunction,
    getNode,
  }, handle) {
    defineVmFunction({
      handle,
      key: 'resetOverrides',
      metricsKey: 'node.resetOverrides',
      cb() {
        getNode(this).resetOverrides()
        return vm.undefined
      },
      isAllowedInReadOnly: false,
      hasEditScope: true,
    })
  },
  instances({
    vm,
    defineVmIncrementalProp,
    getNodeFactory,
    incrementalSafeApi,
    getNode,
    documentAccessState,
    allowIncrementalUnsafeApiCalls,
  }, handle) {
    defineVmIncrementalProp({
      handle,
      key: 'instances',
      metricsKey: 'node.instances',
      enumerable: true,
      incrementalSafeApiKey: 'getInstancesAsync',
      incrementalSafeApiMetricsKey: 'node.getInstancesAsync',
      canWriteInReadOnly: false,
      resolveValue: (node) => {
        const guids = node.instances.map(x => x.guid)
        const arr = vm.newArray()
        for (let i = 0; i < guids.length; i++) {
          const n = getNodeFactory().createNode(guids[i], 'node.instances')
          vm.setProp(arr, String(i), n)
        }
        vm.shallowFreezeObject(arr)
        return arr
      },
      prepareDocument: async (node) => {
        const guids = node.instances.map(x => x.guid)
        await loadAllPluginPages(guids, documentAccessState)
      },
      parseThis: getNode,
      incrementalSafeApi,
      allowIncrementalUnsafeApiCalls,
      hasEditScope: false,
    })
  },
  textSublayer({
    vm,
    defineVmProp,
    getNodeFactory,
    getNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'text',
      options: {
        enumerable: true,
        metricsKey: 'node.text',
        get() {
          const sub = getNode(this).textSublayer
          return sub ? getNodeFactory().createNode(sub.guid, 'node.text') : vm.$$null
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: false,
    })
  },
  immutableFrameLabel({
    vm: e,
    defineVmProp: t,
    getNodeFactory: i,
    getNode: n,
  }, r) {
    t({
      handle: r,
      key: 'textBackground',
      options: {
        enumerable: !0,
        metricsKey: 'node.textBackground',
        get() {
          let t = n(this)
          let r = t.immutableFrameLabel?.guid
          return r ? i().createNode(r, 'node.textBackground') : e.$$null
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !1,
    })
  },
  /**
   * Connector Endpoints API - manages connector start and end endpoints.
   * Provides getter/setter for connectorStart and connectorEnd properties.
   * Original: connectorEndpoints
   */
  connectorEndpoints({
    vm,
    defineVmProp,
    getNode,
    pluginVersionID,
  }, handle) {
    /**
     * Defines a connector endpoint property (start or end).
     * @param endpointKey - 'connectorStart' or 'connectorEnd'
     */
    const defineEndpointProp = (endpointKey) => {
      defineVmProp({
        handle,
        key: endpointKey,
        options: {
          enumerable: true,
          metricsKey: `node.${endpointKey}`,
          get() {
            const endpoint = getNode(this)[endpointKey]
            const result: any = {
              endpointNodeId: endpoint.endpointNodeID,
            }
            if (endpoint.magnet === SpR.NONE) {
              result.position = endpoint.position
            }
            else {
              result.magnet = _$$w3.ConnectorMagnet[endpoint.magnet]
            }
            const wrapped = vm.deepWrap(result)
            vm.deepFreezeObject(wrapped)
            return wrapped
          },
          set(value) {
            const node = getNode(this)
            const endpointValue = Kb(_$$u({
              vm,
              handle: value,
              zSchema: _$$N.ConnectorEndpoint,
              property: endpointKey,
            }), {
              endpointNodeId: node.containingCanvas,
              magnet: 'NONE',
              position: {
                x: 0,
                y: 0,
              },
            })
            if (!sH(endpointValue.endpointNodeId))
              throw new Error('Invalid endpointNodeId')
            if (!pluginVersionID && node.connectorLineType === 'STRAIGHT' && endpointValue.magnet !== 'CENTER' && endpointValue.magnet !== 'NONE') {
              throw new Error('Straight connector endpoints may only use the CENTER or NONE magnets.\n\nThis error only shows up in development code for now. This restriction will be enforced for published plugins in 2024. Please update your code to ensure that your plugin/widget continues to work.')
            }
            if (node.connectorLineType === 'ELBOWED' && endpointValue.magnet === 'CENTER') {
              throw new Error('Elbowed connector endpoints may not use the CENTER magnet')
            }
            if (node.connectorLineType === 'CURVED' && endpointValue.magnet === 'CENTER') {
              throw new Error('Curved connector endpoints may not use the CENTER magnet')
            }
            node[endpointKey] = {
              endpointNodeID: endpointValue.endpointNodeId,
              magnet: _$$w3.ConnectorMagnet[endpointValue.magnet],
              position: endpointValue.position,
            }
          },
        },
        canWriteInReadOnly: false,
        hasEditScope: true,
      })
    }
    defineEndpointProp('connectorStart')
    defineEndpointProp('connectorEnd')
  },
  /**
   * Connector Stroke Cap API - manages connector stroke cap properties.
   * Provides getter/setter for connectorStartStrokeCap and connectorEndStrokeCap.
   * Original: connectorStrokeCap
   */
  connectorStrokeCap({
    vm,
    defineVmProp,
    getNode,
  }, handle) {
    /**
     * Defines a connector stroke cap property.
     * @param propKey - API property key
     * @param nodeField - Node field key
     */
    const defineStrokeCapProp = (propKey, nodeField) => {
      defineVmProp({
        handle,
        key: propKey,
        options: {
          enumerable: true,
          metricsKey: `node.${propKey}`,
          get() {
            const value = getNode(this)[nodeField]
            return value ? vm.deepWrap(value) : vm.undefined
          },
          set(value) {
            getNode(this)[nodeField] = _$$u({
              vm,
              handle: value,
              zSchema: _$$N.ConnectorStrokeCap,
              property: propKey,
            })
          },
        },
        canWriteInReadOnly: false,
        hasEditScope: true,
      })
    }
    defineStrokeCapProp('connectorStartStrokeCap', 'connectorStartCap')
    defineStrokeCapProp('connectorEndStrokeCap', 'connectorEndCap')
  },
  /**
   * Connector Line Type API - manages connector line type property.
   * Provides getter/setter for connectorLineType.
   * Original: connectorLineType
   */
  connectorLineType({
    vm,
    defineVmProp,
    getNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'connectorLineType',
      options: {
        enumerable: true,
        metricsKey: 'node.connectorLineType',
        get() {
          return vm.newString(getNode(this).connectorLineType)
        },
        set(value) {
          getNode(this).connectorLineType = _$$u({
            vm,
            handle: value,
            zSchema: _$$N.ConnectorLineType,
            property: 'connectorLineType',
          })
          return vm.undefined
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: true,
    })
  },
  setProperties({
    vm: e,
    defineVmFunction: t,
    getNode: i,
  }, r) {
    t({
      handle: r,
      key: 'setProperties',
      metricsKey: 'node.setProperties',
      cb(t) {
        let r = _$$u({
          vm: e,
          handle: t,
          zSchema: _$$z.record(getFeatureFlags().ds_variable_props_number_def ? _$$z.union([_$$z.boolean(), _$$z.string(), _$$z.number().finite(), variableDefinitions.VariableBinding]) : _$$z.union([_$$z.boolean(), _$$z.string(), variableDefinitions.VariableBinding])),
          property: 'setProperties.properties',
        })
        i(this).setProperties(r)
        return e.undefined
      },
      isAllowedInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  attachedConnectors({
    vm: e,
    defineVmProp: t,
    getNodeFactory: i,
    getNode: n,
  }, r) {
    t({
      handle: r,
      key: 'attachedConnectors',
      options: {
        enumerable: !0,
        metricsKey: 'node.attachedConnectors',
        get() {
          let t = n(this).attachedConnectorIDs
          let r = e.newArray()
          for (let n = 0; n < t.length; n++) {
            e.setProp(r, String(n), i().createNode(t[n], 'node.attachedConnectors'))
          }
          e.deepFreezeObject(r)
          return r
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !1,
    })
  },
  embedData({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'embedData',
      options: {
        enumerable: !0,
        metricsKey: 'node.embedData',
        get() {
          return e.deepWrap(i(this).embedData)
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !1,
    })
  },
  linkUnfurlData({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'linkUnfurlData',
      options: {
        enumerable: !0,
        metricsKey: 'node.linkUnfurlData',
        get() {
          return e.deepWrap(i(this).linkPreviewData)
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !1,
    })
  },
  mediaData({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'mediaData',
      options: {
        enumerable: !0,
        metricsKey: 'node.mediaData',
        get() {
          return e.deepWrap(i(this).mediaData)
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !1,
    })
  },
  getAuthorAsync({
    vm: e,
    defineVmFunction: t,
    validatedPermissions: i,
    getNode: n,
  }, r) {
    t({
      handle: r,
      key: 'getAuthorAsync',
      metricsKey: 'node.getAuthorAsync',
      cb() {
        let t = n(this)
        let {
          promise,
          resolve,
          reject,
        } = e.newPromise()
        if (!i.permissions.includes('fileusers')) {
          reject(e.deepWrap('Not allowed to fetch author. To do so add \'fileusers\' to the permission field of your plugin\'s manifest.json'))
          return promise
        }
        let o = t.stampData
        if (!(o?.stampedByUserId || o?.userId)) {
          resolve(e.$$null)
          return promise
        }
        let l = ''
        o?.userId && !o.stampedByUserId ? l = o?.userId : o.stampedByUserId && (l = o?.stampedByUserId)
        e.registerPromise(ug({
          state: debugState.getState(),
          dispatch: debugState.dispatch,
          userId: l,
        })).then((t) => {
          if (!t) {
            resolve(e.$$null)
            return
          }
          let {
            id,
            img_url,
            handle,
          } = t
          resolve(e.deepWrap({
            id,
            name: handle,
            photoUrl: tB(new URL(img_url))?.toString(),
          }))
        }, () => {
          reject(e.deepWrap('unable to fetch author'))
        })
        return promise
      },
      isAllowedInReadOnly: !0,
      hasEditScope: !1,
    })
  },
  /**
   * Handles getting and setting annotations for a node.
   * Original: annotations
   * @param param0 - Context object containing vm, defineVmProp, getNode, editorType
   * @param handle - The handle for the VM property
   */
  annotations({
    vm,
    defineVmProp,
    getNode,
    editorType,
  }, handle) {
    defineVmProp({
      handle,
      key: 'annotations',
      options: {
        enumerable: true,
        metricsKey: 'node.annotations',
        get() {
          const annotationsArray = vm.newArray()
          if (getFeatureFlags().plugins_annotations_seat_check && !fb()) {
            vm.deepFreezeObject(annotationsArray)
            return annotationsArray
          }
          for (const [idx, annotation] of getNode(this).annotations.entries()) {
            const {
              label,
              properties,
              categoryId,
            } = annotation
            const annotationObj = vm.newObject()
            if (label) {
              const labelType = j_(label)
              const labelValue = labelType === 'lexical' ? El(label) : At(label)
              vm.setProp(annotationObj, 'label', vm.newString(labelValue))
              const labelMarkdown = labelType === 'lexical' ? cd(label) : zb(label)
              vm.setProp(annotationObj, 'labelMarkdown', vm.newString(labelMarkdown))
            }
            if (properties.length > 0) {
              const propsArr = vm.newArray()
              properties.forEach((prop, propIdx) => {
                const propObj = vm.deepWrap({
                  type: propertyTypeToApiNameMap[prop.type],
                })
                vm.setProp(propsArr, String(propIdx), propObj)
              })
              vm.setProp(annotationObj, 'properties', propsArr)
            }
            if (categoryId) {
              vm.setProp(annotationObj, 'categoryId', vm.newString(categoryId))
            }
            vm.setProp(annotationsArray, String(idx), annotationObj)
          }
          vm.deepFreezeObject(annotationsArray)
          return annotationsArray
        },
        set(value) {
          if (editorType !== _$$nT.DevHandoff && editorType !== _$$nT.Design && editorType !== _$$nT.Illustration) {
            throw new Error('Annotations can only be written in Dev Mode or Design Mode')
          }
          if (getFeatureFlags().plugins_annotations_seat_check && !fb()) {
            throw new Error('A Full seat is required to write annotations')
          }
          const node = getNode(this)
          const annotations = _$$u({
            vm,
            handle: value,
            zSchema: _$$N.AnnotationsMarkdownMultipleAnnotationsPerNode,
            property: 'annotations',
          })
          if (annotations.length === 0) {
            node.setAnnotations([])
            return vm.undefined
          }
          const result: AnnotationCategoryData[] = []
          for (const ann of annotations) {
            const {
              label,
              properties,
              categoryId,
            } = ann
            const hasLabelMarkdown = 'labelMarkdown' in ann && !!ann.labelMarkdown
            if (!label && !hasLabelMarkdown && (!properties || properties.length === 0)) {
              throw new Error('Setting an annotation with no content is invalid, set the annotations field to [] instead')
            }
            if (properties && properties.length > 0) {
              const types = properties.map(p => p.type)
              if (new Set(types).size !== types.length) {
                throw new Error('Duplicate property types are not allowed')
              }
              properties.forEach((prop) => {
                const mappedType = apiNameToPropertyTypeMap[prop.type]
                if (!_$$J(node, mappedType, true)) {
                  throw new Error(`Invalid property "${prop.type}" for a ${_$$w4(node)} node`)
                }
              })
            }
            let labelStr = ''
            if (label) {
              labelStr = getFeatureFlags().ext_lexical_markdown_annotations ? `{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"${label}","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}` : Ul(label)
            }
            else if (hasLabelMarkdown && ann.labelMarkdown) {
              const parsed = _$$nB(ann.labelMarkdown)
              const converted = Kq(parsed)
              labelStr = getFeatureFlags().ext_lexical_markdown_annotations ? converted.lexical : converted.html
            }
            if (categoryId !== undefined && !fn(sH(categoryId))) {
              throw new Error(`Invalid categoryId: ${categoryId}`)
            }
            result.push({
              label: labelStr,
              properties: properties?.map(p => ({
                type: apiNameToPropertyTypeMap[p.type],
              })) ?? [],
              categoryId: categoryId ?? null,
            })
          }
          node.setAnnotations(result)
          return vm.undefined
        },
      },
      isAllowedInFocusViewInteractiveInspection: false,
      canWriteInReadOnly: true,
      hasEditScope: true,
    })
  },
  /**
   * Handles getting, adding, editing, and deleting measurements for a node.
   * Original: measurements
   * @param param0 - Context object containing vm, defineVmFunction, getNode, editorType, sceneGraph, getNodeFactory, documentAccessState
   * @param handle - The handle for the VM function
   */
  measurements({
    vm,
    defineVmFunction,
    getNode,
    editorType,
    sceneGraph,
    getNodeFactory,
    documentAccessState,
  }, handle) {
    /**
     * Maps a measurement object to a VM object.
     * @param measurement - The measurement data
     * @param metricsKey - The metrics key for context
     */
    const mapMeasurementToVm = (measurement, metricsKey) => {
      let offsetValue
      const endNode = sceneGraph.getFromStablePath(measurement.toNode)
      if (!endNode) {
        throw new Error(`Couldn't find endNode of measurement ${measurement.id}`)
      }
      const startNode = getNodeFactory().createNode(measurement.fromNode, metricsKey)
      const endNodeObj = getNodeFactory().createNode(endNode.guid, metricsKey)
      const fromSide = constraintPositionMapping[measurement.fromNodeSide]
      const toSide = measurement.toSameSide
        ? fromSide
        : (() => {
          switch (fromSide) {
            case 'TOP':
              return 'BOTTOM'
            case 'BOTTOM':
              return 'TOP'
            case 'LEFT':
              return 'RIGHT'
            case 'RIGHT':
              return 'LEFT'
          }
        })()
      offsetValue = measurement.outerOffsetFixed === 0
        ? {
          type: 'INNER',
          relative: measurement.innerOffsetRelative,
        }
        : {
          type: 'OUTER',
          fixed: measurement.outerOffsetFixed,
        }
      const startObj = vm.newObject()
      vm.setProp(startObj, 'node', startNode)
      vm.setProp(startObj, 'side', vm.newString(fromSide))
      const endObj = vm.newObject()
      vm.setProp(endObj, 'node', endNodeObj)
      vm.setProp(endObj, 'side', vm.newString(toSide))
      const measurementObj = vm.newObject()
      vm.setProp(measurementObj, 'id', vm.newString(measurement.id))
      vm.setProp(measurementObj, 'start', startObj)
      vm.setProp(measurementObj, 'end', endObj)
      vm.setProp(measurementObj, 'offset', vm.deepWrap(offsetValue))
      vm.setProp(measurementObj, 'freeText', vm.newString(measurement.freeText))
      return measurementObj
    }

    /**
     * Finds the start node for a measurement on the current page.
     * @param id - Measurement id
     * @param pageGuid - Page guid
     */
    const findStartNode = (id, pageGuid) => {
      const measurement = w3z.findMeasurement(id, pageGuid)
      if (!measurement)
        throw new Error('Couldn\'t find measurement on the current page')
      const node = sceneGraph.get(measurement.fromNode)
      if (!node) {
        throw new Error('Couldn\'t find start node for the measurement on the current page')
      }
      return node
    }

    // getMeasurements
    defineVmFunction({
      handle,
      key: 'getMeasurements',
      metricsKey: 'node.getMeasurements',
      cb() {
        const arr = vm.newArray()
        if (getFeatureFlags().plugins_annotations_seat_check && !fb()) {
          vm.deepFreezeObject(arr)
          return arr
        }
        const node = getNode(this)
        const currentPage = sceneGraph.getCurrentPage()
        if (node.guid !== currentPage?.guid && !documentAccessState.hasLoadedPageId(node.guid)) {
          throw new Error('Cannot call getMeasurements() on background page that has not been loaded. Remember to call loadAsync() first.')
        }
        w3z.getMeasurementsForPage(node.guid).forEach((measurement, idx) => {
          const mapped = mapMeasurementToVm(measurement, 'node.getMeasurements')
          vm.setProp(arr, idx.toString(), mapped)
        })
        vm.deepFreezeObject(arr)
        return arr
      },
      isAllowedInReadOnly: true,
      hasEditScope: false,
    })

    // getMeasurementsForNode
    defineVmFunction({
      handle,
      key: 'getMeasurementsForNode',
      metricsKey: 'node.getMeasurementsForNode',
      cb(target) {
        const arr = vm.newArray()
        if (getFeatureFlags().plugins_annotations_seat_check && !fb()) {
          vm.deepFreezeObject(arr)
          return arr
        }
        const node = getNode(this)
        const targetNode = getNode(target)
        if (targetNode.containingCanvas !== node.guid)
          throw new Error('Node is not on the current page')
        w3z.getMeasurementsForNode(targetNode.guid).forEach((measurement, idx) => {
          const mapped = mapMeasurementToVm(measurement, 'node.getMeasurementsForNode')
          vm.setProp(arr, idx.toString(), mapped)
        })
        vm.deepFreezeObject(arr)
        return arr
      },
      isAllowedInReadOnly: true,
      hasEditScope: false,
    })

    // Only allow add/edit/delete in certain editor types
    if (editorType === _$$nT.DevHandoff || editorType === _$$nT.Design || editorType === _$$nT.Illustration) {
      // addMeasurement
      defineVmFunction({
        handle,
        key: 'addMeasurement',
        metricsKey: 'node.addMeasurement',
        cb(start, end, options) {
          if (getFeatureFlags().plugins_annotations_seat_check && !fb())
            throw new Error('A Full seat is required to add measurements')
          const node = getNode(this)
          const startObj = _$$u({
            vm,
            handle: start,
            zSchema: _$$N.AnnotationMeasurementStartEnd,
            property: 'start',
          })
          const endObj = _$$u({
            vm,
            handle: end,
            zSchema: _$$N.AnnotationMeasurementStartEnd,
            property: 'end',
          })
          const opts = _$$u({
            vm,
            handle: options,
            zSchema: _$$N.AnnotationMeasurementAddOptions.optional(),
            property: 'options',
          })
          const startNode = getNode(vm.getProp(start, 'node'))
          const endNode = getNode(vm.getProp(end, 'node'))
          if (startNode.containingCanvas !== node.guid)
            throw new Error('Start node is not on the current page')
          if (endNode.containingCanvas !== node.guid)
            throw new Error('End node is not on the current page')
          if (!startNode.canHaveAnnotation) {
            throw new Error(`Can't add measurement to a ${_$$w4(startNode)} node`)
          }
          if (!endNode.canHaveAnnotation) {
            throw new Error(`Can't add measurement to a ${_$$w4(endNode)} node`)
          }
          const axis = side => side === 'TOP' || side === 'BOTTOM' ? 'y' : 'x'
          if (startNode.guid === endNode.guid && startObj.side === endObj.side)
            throw new Error('Measurement can\'t point to itself')
          if (axis(startObj.side) !== axis(endObj.side)) {
            throw new Error(`Measurement start side ${startObj.side} and end side ${endObj.side} must be on the same axis`)
          }
          const fromSide = reverseConstraintPositionMapping[startObj.side]
          const toSide = reverseConstraintPositionMapping[endObj.side]
          let innerOffset = 0
          let outerOffset = 0
          if (opts?.offset) {
            if (opts.offset.type === 'INNER') {
              innerOffset = opts.offset.relative
            }
            else {
              innerOffset = opts.offset.fixed > 0 ? 1 : -1
              outerOffset = opts.offset.fixed
            }
          }
          return mapMeasurementToVm(startNode.addMeasurement(endNode.guid, fromSide, toSide, innerOffset, outerOffset, opts?.freeText), 'node.addMeasurement')
        },
        isAllowedInReadOnly: true,
        isAllowedInFocusViewInteractiveInspection: false,
        hasEditScope: true,
      })

      // editMeasurement
      defineVmFunction({
        handle,
        key: 'editMeasurement',
        metricsKey: 'node.editMeasurement',
        cb(id, newValue) {
          if (getFeatureFlags().plugins_annotations_seat_check && !fb())
            throw new Error('A Full seat is required to edit measurements')
          const node = getNode(this)
          const measurementId = _$$u({
            vm,
            handle: id,
            zSchema: _$$z.string(),
            property: 'id',
          })
          const value = _$$u({
            vm,
            handle: newValue,
            zSchema: _$$N.AnnotationMeasurementEditValue,
            property: 'newValue',
          })
          const measurementNode = findStartNode(measurementId, node.guid)
          const update: any = {}
          if (value.offset) {
            let innerOffset = 0
            let outerOffset = 0
            if (value.offset.type === 'INNER') {
              innerOffset = value.offset.relative
            }
            else {
              innerOffset = value.offset.fixed > 0 ? 1 : -1
              outerOffset = value.offset.fixed
            }
            update.offset = {
              innerOffsetRelative: innerOffset,
              outerOffsetFixed: outerOffset,
            }
          }
          if (value.freeText !== undefined)
            update.freeText = value.freeText
          return mapMeasurementToVm(measurementNode.updateMeasurement(measurementId, update), 'node.editMeasurement')
        },
        isAllowedInReadOnly: true,
        isAllowedInFocusViewInteractiveInspection: false,
        hasEditScope: true,
      })

      // deleteMeasurement
      defineVmFunction({
        handle,
        key: 'deleteMeasurement',
        metricsKey: 'node.deleteMeasurement',
        cb(id) {
          if (getFeatureFlags().plugins_annotations_seat_check && !fb())
            throw new Error('A Full seat is required to delete measurements')
          const node = getNode(this)
          const measurementId = _$$u({
            vm,
            handle: id,
            zSchema: _$$z.string(),
            property: 'id',
          })
          findStartNode(measurementId, node.guid).removeMeasurement(measurementId)
          return vm.undefined
        },
        isAllowedInReadOnly: true,
        isAllowedInFocusViewInteractiveInspection: false,
        hasEditScope: true,
      })
    }
  },
  getRelatedLinksAsync({
    vm: e,
    defineVmFunction: t,
    getNode: i,
    sceneGraph: n,
  }, r) {
    t({
      handle: r,
      key: 'getRelatedLinksAsync',
      metricsKey: 'node.getRelatedLinksAsync',
      cb(t) {
        return fetchRelatedLinks({
          vmThis: this,
          vm: e,
          vmOptions: t,
          resourceStr: 'related links',
          getNode: i,
          sceneGraph: n,
        })
      },
      isAllowedInReadOnly: !0,
      hasEditScope: !1,
    })
  },
  getDevResourcesAsync({
    vm: e,
    defineVmFunction: t,
    getNode: i,
    sceneGraph: n,
  }, r) {
    t({
      handle: r,
      key: 'getDevResourcesAsync',
      metricsKey: 'node.getDevResourcesAsync',
      cb(t) {
        return fetchRelatedLinks({
          vmThis: this,
          vm: e,
          vmOptions: t,
          resourceStr: 'dev resources',
          getNode: i,
          sceneGraph: n,
        })
      },
      isAllowedInReadOnly: !0,
      hasEditScope: !1,
    })
  },
  addRelatedLinkAsync({
    vm: e,
    defineVmFunction: t,
    pluginID: i,
    getNode: n,
  }, r) {
    t({
      handle: r,
      key: 'addRelatedLinkAsync',
      metricsKey: 'node.addRelatedLinkAsync',
      cb(t, r) {
        return addRelatedLink({
          vmThis: this,
          vm: e,
          vmUrl: t,
          vmName: r,
          resourceName: 'related link',
          pluginID: i,
          getNode: n,
        })
      },
      isAllowedInReadOnly: !0,
      hasEditScope: !0,
    })
  },
  addDevResourceAsync({
    vm: e,
    defineVmFunction: t,
    pluginID: i,
    getNode: n,
  }, r) {
    t({
      handle: r,
      key: 'addDevResourceAsync',
      metricsKey: 'node.addDevResourceAsync',
      cb(t, r) {
        return addRelatedLink({
          vmThis: this,
          vm: e,
          vmUrl: t,
          vmName: r,
          resourceName: 'dev resource',
          pluginID: i,
          getNode: n,
        })
      },
      isAllowedInReadOnly: !0,
      hasEditScope: !0,
    })
  },
  editRelatedLinkAsync({
    vm: e,
    defineVmFunction: t,
    pluginID: i,
    getNode: n,
  }, r) {
    t({
      handle: r,
      key: 'editRelatedLinkAsync',
      metricsKey: 'node.editRelatedLinkAsync',
      cb(t, r) {
        return editRelatedLink({
          vm: e,
          vmThis: this,
          vmCurrentUrl: t,
          vmNewValue: r,
          resourceName: 'related link',
          pluginID: i,
          getNode: n,
        })
      },
      isAllowedInReadOnly: !0,
      hasEditScope: !0,
    })
  },
  editDevResourceAsync({
    vm: e,
    defineVmFunction: t,
    pluginID: i,
    getNode: n,
  }, r) {
    t({
      handle: r,
      key: 'editDevResourceAsync',
      metricsKey: 'node.editDevResourceAsync',
      cb(t, r) {
        return editRelatedLink({
          vm: e,
          vmThis: this,
          vmCurrentUrl: t,
          vmNewValue: r,
          resourceName: 'dev resource',
          pluginID: i,
          getNode: n,
        })
      },
      isAllowedInReadOnly: !0,
      hasEditScope: !0,
    })
  },
  deleteRelatedLinkAsync({
    vm: e,
    defineVmFunction: t,
    pluginID: i,
    getNode: n,
  }, r) {
    t({
      handle: r,
      key: 'deleteRelatedLinkAsync',
      metricsKey: 'node.deleteRelatedLinkAsync',
      cb(t) {
        return deleteRelatedLink(e, this, t, 'related link', i, n)
      },
      isAllowedInReadOnly: !0,
      hasEditScope: !0,
    })
  },
  deleteDevResourceAsync({
    vm: e,
    defineVmFunction: t,
    pluginID: i,
    getNode: n,
  }, r) {
    t({
      handle: r,
      key: 'deleteDevResourceAsync',
      metricsKey: 'node.deleteDevResourceAsync',
      cb(t) {
        return deleteRelatedLink(e, this, t, 'dev resource', i, n)
      },
      isAllowedInReadOnly: !0,
      hasEditScope: !0,
    })
  },
  setRelatedLinkPreviewAsync({
    vm: e,
    defineVmFunction: t,
    pluginID: i,
    pluginVersionID: n,
    apiMode: r,
    getNode: a,
  }, s) {
    t({
      handle: s,
      key: 'setRelatedLinkPreviewAsync',
      metricsKey: 'node.setRelatedLinkPreviewAsync',
      cb(t, s) {
        return setRelatedLinkPreview({
          vm: e,
          vmThis: this,
          vmUrl: t,
          vmLinkPreview: s,
          pluginID: i,
          pluginVersionID: n,
          apiMode: r,
          resourceName: 'related link',
          getNode: a,
        })
      },
      isAllowedInReadOnly: !0,
      hasEditScope: !0,
    })
  },
  setDevResourcePreviewAsync({
    vm: e,
    defineVmFunction: t,
    pluginID: i,
    pluginVersionID: n,
    apiMode: r,
    getNode: a,
  }, s) {
    t({
      handle: s,
      key: 'setDevResourcePreviewAsync',
      metricsKey: 'node.setDevResourcePreviewAsync',
      cb(t, s) {
        return setRelatedLinkPreview({
          vm: e,
          vmThis: this,
          vmUrl: t,
          vmLinkPreview: s,
          pluginID: i,
          pluginVersionID: n,
          apiMode: r,
          resourceName: 'dev resource',
          getNode: a,
        })
      },
      isAllowedInReadOnly: !0,
      hasEditScope: !0,
    })
  },
  inferredAutoLayout({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'inferredAutoLayout',
      isAllowedInWidgetRender: !0,
      canWriteInReadOnly: !1,
      hasEditScope: !1,
      options: {
        enumerable: !0,
        metricsKey: 'node.inferredAutoLayout',
        get() {
          let t
          let n = i(this)
          let r = w3z.getInferredAutoLayoutResult(n.guid)
          if (r) {
            t = e.deepWrap({
              layoutMode: _$$w3.StackMode[r.stackMode],
              paddingLeft: r.stackPaddingLeft,
              paddingRight: r.stackPaddingRight,
              paddingTop: r.stackPaddingTop,
              paddingBottom: r.stackPaddingBottom,
              counterAxisSizingMode: mapSizingModeToString(_$$w3.StackSize[r.stackCounterSizing]),
              primaryAxisSizingMode: mapSizingModeToString(_$$w3.StackSize[r.stackPrimarySizing]),
              primaryAxisAlignItems: primaryAxisAlignItemsToString(_$$w3.StackJustify[r.stackPrimaryAlignItems]),
              counterAxisAlignItems: _$$w3.StackAlign[r.stackCounterAlignItems],
              layoutAlign: layoutAlignToString(_$$w3.StackCounterAlign[r.stackChildAlignSelf]),
              layoutGrow: r.stackChildPrimaryGrow,
              itemSpacing: r.stackSpacing,
              layoutPositioning: _$$w3.StackPositioning[r.stackPositioning],
            })
          }
          else {
            if (!n.stackMode || n.stackMode === 'NONE')
              return e.$$null
            t = e.deepWrap({
              layoutMode: n.stackMode,
              paddingLeft: n.stackLeftPadding,
              paddingRight: n.stackRightPadding,
              paddingTop: n.stackTopPadding,
              paddingBottom: n.stackBottomPadding,
              counterAxisSizingMode: mapSizingModeToString(n.stackCounterSizing),
              primaryAxisSizingMode: mapSizingModeToString(n.stackPrimarySizing),
              primaryAxisAlignItems: primaryAxisAlignItemsToString(n.stackPrimaryAlignItems),
              counterAxisAlignItems: n.stackCounterAlignItems,
              layoutAlign: layoutAlignToString(n.stackChildAlignSelf),
              layoutGrow: n.stackChildPrimaryGrow,
              itemSpacing: n.stackSpacing,
              layoutPositioning: n.stackPositioning,
            })
          }
          e.deepFreezeObject(t)
          return t
        },
      },
    })
  },
  getCSSAsync({
    vm: e,
    defineVmFunction: t,
    getNode: i,
    pluginID: n,
    editorType: r,
    openFileKey: a,
  }, s) {
    t({
      handle: s,
      key: 'getCSSAsync',
      metricsKey: 'node.getCSSAsync',
      cb() {
        getFeatureFlags().plugins_get_css_async_dev_seat && !fb() && az.trackDefinedEvent('extensibility.plugins_get_css_async_dev_seat', {
          pluginId: n,
          editorType: Bu(r),
          fileKey: a,
          userId: o8(),
        })
        getFeatureFlags().plugins_check_viewer_export_restricted && !CQ() && az.trackDefinedEvent('extensibility.plugins_check_viewer_export_restricted', {
          apiMethod: 'node.getCSSAsync',
          pluginId: n,
          editorType: Bu(r),
          fileKey: a,
          userId: o8(),
        })
        let t = i(this)
        let {
          promise,
          resolve,
          reject,
        } = e.newPromise()
        e.registerPromise(getFeatureFlags4(t)).then((t) => {
          if (t.error) {
            reject(e.deepWrap(t.error))
            return
          }
          let i = (function (e) {
            let t = e.filter(e => e.language === 'css')
            let i = {}
            for (let e of t) {
              for (let t of e.lines) {
                let [e, n] = typeof t.code == 'string' ? t.code.split(':') : [void 0, void 0]
                if (!e || !n)
                  continue
                let r = e.trim()
                let a = n.trim().replace(';', '')
                i[r] = a
              }
            }
            return i
          }(t.code))
          resolve(e.deepWrap(i))
        }, () => {
          reject(e.deepWrap('unable to generate code'))
        })
        return promise
      },
      isAllowedInReadOnly: !0,
      hasEditScope: !1,
    })
  },
  isAsset({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'isAsset',
      isAllowedInWidgetRender: !0,
      canWriteInReadOnly: !1,
      hasEditScope: !1,
      options: {
        enumerable: !0,
        metricsKey: 'node.isAsset',
        get() {
          let t = i(this)
          return e.deepWrap(t.isDevModeAsset)
        },
      },
    })
  },
  documentColorProfile({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'documentColorProfile',
      options: {
        enumerable: !0,
        metricsKey: 'node.documentColorProfile',
        get() {
          let t = i(this)
          if (t.type !== 'DOCUMENT') {
            throw new Error('documentColorProfile only exists on the root node')
          }
          return e.newString(t.documentColorProfile)
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !1,
    })
  },
  sectionContentsHidden({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'sectionContentsHidden',
      options: {
        enumerable: !0,
        metricsKey: 'node.sectionContentsHidden',
        get() {
          return e.newBoolean(i(this).sectionContentsHidden)
        },
        set(t) {
          i(this).sectionContentsHidden = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$z.boolean(),
            property: 'sectionContentsHidden',
          })
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  interactiveSlideElementType({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'interactiverSlideElementType',
      options: {
        enumerable: !0,
        metricsKey: 'node.interactiveSlideElementType',
        get() {
          let t = i(this)
          return e.newString(t.interactiveSlideElementType ?? 'NONE')
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !1,
    })
  },
  focusedSlide({
    vm: e,
    defineVmProp: t,
    getNode: i,
    getNodeFactory: n,
  }, r) {
    t({
      handle: r,
      key: 'focusedSlide',
      options: {
        enumerable: !0,
        metricsKey: 'node.focusedSlide',
        get() {
          let t = i(this).focusedNodeId
          return t && t !== '-1:-1' ? n().createNode(t, 'node.focusedSlide') : e.$$null
        },
        set(t) {
          let n = i(this)
          let r = i(t)
          if (r.type !== 'SLIDE')
            throw new Error('focusedSlide must be a Slide')
          n.focusedNodeId = r.guid
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !1,
    })
  },
  focusedNode({
    vm: e,
    defineVmProp: t,
    getNode: i,
    getNodeFactory: n,
  }, r) {
    t({
      handle: r,
      key: 'focusedNode',
      options: {
        enumerable: !0,
        metricsKey: 'node.focusedNode',
        get() {
          let t = i(this).focusedNodeId
          return t && t !== '-1:-1' ? n().createNode(t, 'node.focusedNode') : e.$$null
        },
        set(t) {
          let n = i(this)
          let r = i(t)
          n.focusedNodeId = r.guid
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !1,
    })
  },
  isSkippedSlide({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'isSkippedSlide',
      options: {
        enumerable: !0,
        metricsKey: 'node.isSkippedSlide',
        get() {
          let t = i(this)
          return e.newBoolean(t.isSkippedSlide)
        },
        set(t) {
          i(this).isSkippedSlide = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$z.boolean(),
            property: 'isSkippedSlide',
          })
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  getSlideTransition({
    vm,
    defineVmFunction,
    getNode,
  }, handle) {
    defineVmFunction({
      handle,
      key: 'getSlideTransition',
      metricsKey: 'node.getSlideTransition',
      cb() {
        const node = getNode(this)
        if (node?.isSlide && Ez5) {
          const transition = Ez5.slideAnimationBindings().getSlideTransition(node.guid)
          return vm.deepWrap({
            style: (() => {
              switch (transition.type) {
                case v$l.DISSOLVE:
                  return 'DISSOLVE'
                case v$l.SLIDE_FROM_LEFT:
                  return 'SLIDE_FROM_LEFT'
                case v$l.SLIDE_FROM_RIGHT:
                  return 'SLIDE_FROM_RIGHT'
                case v$l.SLIDE_FROM_BOTTOM:
                  return 'SLIDE_FROM_BOTTOM'
                case v$l.SLIDE_FROM_TOP:
                  return 'SLIDE_FROM_TOP'
                case v$l.PUSH_FROM_LEFT:
                  return 'PUSH_FROM_LEFT'
                case v$l.PUSH_FROM_RIGHT:
                  return 'PUSH_FROM_RIGHT'
                case v$l.PUSH_FROM_BOTTOM:
                  return 'PUSH_FROM_BOTTOM'
                case v$l.PUSH_FROM_TOP:
                  return 'PUSH_FROM_TOP'
                case v$l.MOVE_FROM_LEFT:
                  return 'MOVE_FROM_LEFT'
                case v$l.MOVE_FROM_RIGHT:
                  return 'MOVE_FROM_RIGHT'
                case v$l.MOVE_FROM_TOP:
                  return 'MOVE_FROM_TOP'
                case v$l.MOVE_FROM_BOTTOM:
                  return 'MOVE_FROM_BOTTOM'
                case v$l.SLIDE_OUT_TO_LEFT:
                  return 'SLIDE_OUT_TO_LEFT'
                case v$l.SLIDE_OUT_TO_RIGHT:
                  return 'SLIDE_OUT_TO_RIGHT'
                case v$l.SLIDE_OUT_TO_TOP:
                  return 'SLIDE_OUT_TO_TOP'
                case v$l.SLIDE_OUT_TO_BOTTOM:
                  return 'SLIDE_OUT_TO_BOTTOM'
                case v$l.MOVE_OUT_TO_LEFT:
                  return 'MOVE_OUT_TO_LEFT'
                case v$l.MOVE_OUT_TO_RIGHT:
                  return 'MOVE_OUT_TO_RIGHT'
                case v$l.MOVE_OUT_TO_TOP:
                  return 'MOVE_OUT_TO_TOP'
                case v$l.MOVE_OUT_TO_BOTTOM:
                  return 'MOVE_OUT_TO_BOTTOM'
                case v$l.SMART_ANIMATE:
                  return 'SMART_ANIMATE'
                default:
                  return 'NONE'
              }
            })(),
            duration: transition.duration,
            curve: (() => {
              switch (transition.easingType) {
                case mgy.IN_CUBIC:
                  return 'EASE_IN'
                case mgy.OUT_CUBIC:
                  return 'EASE_OUT'
                case mgy.INOUT_CUBIC:
                  return 'EASE_IN_AND_OUT'
                case mgy.LINEAR:
                  return 'LINEAR'
                case mgy.GENTLE_SPRING:
                  return 'GENTLE'
                case mgy.SPRING_PRESET_ONE:
                  return 'QUICK'
                case mgy.SPRING_PRESET_TWO:
                  return 'BOUNCY'
                case mgy.SPRING_PRESET_THREE:
                  return 'SLOW'
                default:
                  return 'LINEAR'
              }
            })(),
            timing: transition.trigger.type === tbx.AFTER_DELAY
              ? {
                type: 'AFTER_DELAY',
                delay: transition.trigger.delay,
              }
              : {
                type: 'ON_CLICK',
              },
          })
        }
        return vm.$$null
      },
      isAllowedInReadOnly: true,
      hasEditScope: true,
    })
  },
  setSlideTransition({
    vm,
    defineVmFunction,
    getNode,
  }, handle) {
    defineVmFunction({
      handle,
      key: 'setSlideTransition',
      metricsKey: 'node.setSlideTransition',
      cb(value) {
        const node = getNode(this)
        if (node?.isSlide && Ez5) {
          const transition = _$$u({
            vm,
            handle: value,
            zSchema: _$$z.object({
              style: _$$z.enum(animationTransitionStyles),
              duration: _$$z.number().finite().gte(0.01).lte(10),
              curve: _$$z.enum(animationEasingCurves),
              timing: _$$z.object({
                type: _$$z.enum(animationTriggerTypes),
                delay: _$$z.number().finite().gte(0).lte(30).optional(),
              }),
            }),
            property: 'slideTransition',
          })
          Ez5.slideAnimationBindings().setSlideTransition(node.guid, {
            type: (() => {
              switch (transition.style) {
                case 'DISSOLVE':
                  return v$l.DISSOLVE
                case 'SLIDE_FROM_LEFT':
                  return v$l.SLIDE_FROM_LEFT
                case 'SLIDE_FROM_RIGHT':
                  return v$l.SLIDE_FROM_RIGHT
                case 'SLIDE_FROM_BOTTOM':
                  return v$l.SLIDE_FROM_BOTTOM
                case 'SLIDE_FROM_TOP':
                  return v$l.SLIDE_FROM_TOP
                case 'PUSH_FROM_LEFT':
                  return v$l.PUSH_FROM_LEFT
                case 'PUSH_FROM_RIGHT':
                  return v$l.PUSH_FROM_RIGHT
                case 'PUSH_FROM_BOTTOM':
                  return v$l.PUSH_FROM_BOTTOM
                case 'PUSH_FROM_TOP':
                  return v$l.PUSH_FROM_TOP
                case 'MOVE_FROM_LEFT':
                  return v$l.MOVE_FROM_LEFT
                case 'MOVE_FROM_RIGHT':
                  return v$l.MOVE_FROM_RIGHT
                case 'MOVE_FROM_TOP':
                  return v$l.MOVE_FROM_TOP
                case 'MOVE_FROM_BOTTOM':
                  return v$l.MOVE_FROM_BOTTOM
                case 'SLIDE_OUT_TO_LEFT':
                  return v$l.SLIDE_OUT_TO_LEFT
                case 'SLIDE_OUT_TO_RIGHT':
                  return v$l.SLIDE_OUT_TO_RIGHT
                case 'SLIDE_OUT_TO_TOP':
                  return v$l.SLIDE_OUT_TO_TOP
                case 'SLIDE_OUT_TO_BOTTOM':
                  return v$l.SLIDE_OUT_TO_BOTTOM
                case 'MOVE_OUT_TO_LEFT':
                  return v$l.MOVE_OUT_TO_LEFT
                case 'MOVE_OUT_TO_RIGHT':
                  return v$l.MOVE_OUT_TO_RIGHT
                case 'MOVE_OUT_TO_TOP':
                  return v$l.MOVE_OUT_TO_TOP
                case 'MOVE_OUT_TO_BOTTOM':
                  return v$l.MOVE_OUT_TO_BOTTOM
                case 'SMART_ANIMATE':
                  return v$l.SMART_ANIMATE
                default:
                  return v$l.NONE
              }
            })(),
            duration: transition.duration,
            easingType: (() => {
              switch (transition.curve) {
                case 'EASE_IN':
                  return mgy.IN_CUBIC
                case 'EASE_OUT':
                  return mgy.OUT_CUBIC
                case 'EASE_IN_AND_OUT':
                  return mgy.INOUT_CUBIC
                case 'LINEAR':
                  return mgy.LINEAR
                case 'GENTLE':
                  return mgy.GENTLE_SPRING
                case 'QUICK':
                  return mgy.SPRING_PRESET_ONE
                case 'BOUNCY':
                  return mgy.SPRING_PRESET_TWO
                case 'SLOW':
                  return mgy.SPRING_PRESET_THREE
                default:
                  return mgy.LINEAR
              }
            })(),
            trigger: transition.timing.type === 'AFTER_DELAY'
              ? {
                type: tbx.AFTER_DELAY,
                delay: transition.timing.delay ?? 0,
              }
              : {
                type: tbx.ON_CLICK,
                delay: 0,
              },
          })
          return vm.undefined
        }
        return vm.$$null
      },
      isAllowedInReadOnly: true,
      hasEditScope: true,
    })
  },
}
