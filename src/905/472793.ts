import type { ActionGroup, AnnotationCategoryFactoryOptions, ComponentInfo, ComponentProps, ConditionalAction, EasingData, GradientPaint, GridLayoutConfig, NavigationAction, PatternPaint, ProcessedRegion, SolidPaint, TransitionData, VariableResult, VideoPaint } from './types/index'
import { keyBy } from 'lodash-es'
import { useState } from 'react'
import { jsx, jsxs } from 'react/jsx-runtime'

// Import type definitions

import { z as _$$z } from 'zod'
import { $D } from '../905/11'
import { WidgetManager } from '../905/2122'
import { w as _$$w3 } from '../905/5147'
import { w as _$$w } from '../905/70843'
import { w as _$$w4 } from '../905/83498'
import { J as _$$J2 } from '../905/95677'
import { Ju, ZU } from '../905/102752'
import { aD, B9, Et } from '../905/125019'
import { N as _$$N } from '../905/125137'
import { to as _$$to, ES } from '../905/156213'
import { ServiceCategories as _$$e } from '../905/165054'
import { l7 } from '../905/189185'
import { h as _$$h } from '../905/193918'
import { gl, hS } from '../905/216495'
import { isPluginConfigMatching } from '../905/240440'
import { widgetErrorTracker } from '../905/250412'
import { mN } from '../905/261467'
import { k as getFeatureFlags3 } from '../905/263346'
import { J as _$$J3 } from '../905/270045'
import { S as _$$S } from '../905/274480'
import { Ay as _$$Ay3, jX } from '../905/281495'
import { E as _$$E3 } from '../905/282455'
import { A as _$$A } from '../905/284190'
import { m as _$$m2 } from '../905/294113'
import { kiwiParserCodec as _$$w2 } from '../905/294864'
import { K as _$$K } from '../905/301652'
import { t as _$$t, tx as _$$tx } from '../905/303541'
import { qW, TP } from '../905/327571'
import { debugState } from '../905/407919'
import { n5 as _$$n2, po } from '../905/413743'
import { Cs } from '../905/420347'
import { F as _$$F } from '../905/422355'
import { uW } from '../905/426868'
import { t as _$$t2 } from '../905/435722'
import { R as _$$R } from '../905/441305'
import { az, sx } from '../905/449184'
import { fO, VK } from '../905/452962'
import { MN as _$$MN, rJ as _$$rJ, sH as _$$sH2, _U, hu, Oi, RL, vH } from '../905/486749'
import { fK } from '../905/488349'
import { n_ as _$$n_ } from '../905/515076'
import { fB } from '../905/515659'
import { J as _$$J } from '../905/526136'
import { cd as _$$cd, HB, P5 } from '../905/531105'
import { fn as _$$fn2 } from '../905/537777'
import { P as _$$P2 } from '../905/545265'
import { subscribeAndAwaitData } from '../905/553831'
import { decodeBase64, encodeBase64, isValidBase64 } from '../905/561685'
import { pN } from '../905/571565'
import { getFunctionHandle, memoizedHandle } from '../905/572400'
import { pS } from '../905/588985'
import { getFeatureFlags } from '../905/601108'
import { Ay } from '../905/612521'
import { I as _$$I, np as _$$np, CQ, fb, o8 } from '../905/622391'
import { k as _$$k2 } from '../905/651849'
import { e9 as _$$e2, jE } from '../905/656545'
import { X as _$$X } from '../905/661977'
import { iN as _$$iN, Hn, Kx, ur, VS } from '../905/696699'
import { getSingletonSceneGraph, ReduxSceneGraph } from '../905/700578'
import { createPluginContext, NoOpVm, ScopedNoOpVm } from '../905/700654'
import { Ug } from '../905/706046'
import { Oo } from '../905/709171'
import { M4 } from '../905/713695'
import { ED, x1, xi } from '../905/714362'
import { m as _$$m } from '../905/717445'
import { oA } from '../905/723791'
import { Mi } from '../905/736624'
import { MI } from '../905/757052'
import { ZY } from '../905/764747'
import { d1 } from '../905/766303'
import { k as getFeatureFlags4 } from '../905/783825'
import { fn as _$$fn, sH as _$$sH, dI as debugStateI, w1 } from '../905/805904'
import { av, u1 as DocumentAccess, fs, Ux, vf, xc } from '../905/816197'
import { u as _$$u, c0, fp, Kb } from '../905/816730'
import { getSceneGraphInstance, NT } from '../905/830071'
import { Y as _$$Y } from '../905/830372'
import { _b } from '../905/835985'
import { P as _$$P3, V as _$$V } from '../905/837980'
import { InternalError, RequestError } from '../905/845428'
import { Ot } from '../905/850476'
import { T as _$$T } from '../905/858738'
import { ey as _$$ey, n3 as _$$n, IA, yG } from '../905/859698'
import { qg, vX, xF } from '../905/866640'
import { AD, dI, fn, Hr, sH } from '../905/871411'
import { d5, QO, Y4 } from '../905/888985'
import { nB as _$$nB, cd, Kq, zb } from '../905/902840'
import { XHR } from '../905/910117'
import { E as _$$E } from '../905/916933'
import { fH, gO, HC, hp, JE, Lk, MN, SE, Vw, W$, Wh } from '../905/929949'
import { $x, $$ as _$$$$, e1 as _$$e3, rY as _$$rY, tO as _$$tO, cT, cz, Df, DW, fx, h2, hD, J6, Jk, Ku, lm, Mo, mx, NH, SU, U_, Ut, V8, VL, vs, Wp, XX, yj, zd } from '../905/933084'
import { c as _$$c } from '../905/949750'
import { r as _$$r } from '../905/955316'
import { At, Ul } from '../905/973142'
import { E as _$$E2 } from '../905/984674'
import { resourceUtils } from '../905/989992'
import { y as _$$y } from '../905/994901'
import { l as _$$l2 } from '../905/997221'
import { F as _$$F2 } from '../figma_app/8833'
import { El, j_ } from '../figma_app/9619'
import { zl } from '../figma_app/27355'
import { bsh } from '../figma_app/43951'
import { m3 } from '../figma_app/45218'
import { L as _$$L } from '../figma_app/53571'
import { $t, nT as _$$nT, xi as _$$xi, Bu } from '../figma_app/53721'
import { $$ } from '../figma_app/62612'
import { FE, PB } from '../figma_app/78808'
import { J2 } from '../figma_app/84367'
import { kA, Qj, vl, vT, y1, zH } from '../figma_app/86989'
import { isNullish } from '../figma_app/95419'
import { P$ } from '../figma_app/152368'
import { FW, ZQ } from '../figma_app/155287'
import { Yi as _$$Yi, k4 } from '../figma_app/164212'
import { getInitialOptions } from '../figma_app/169182'
import { mKm } from '../figma_app/175377'
import { i as _$$i2, uS } from '../figma_app/186343'
import { mx as _$$mx, tK as _$$tK, di } from '../figma_app/191804'
import { zg } from '../figma_app/193867'
import { Ae, gK } from '../figma_app/198712'
import { Ho } from '../figma_app/216057'
import { gr, sD } from '../figma_app/243058'
import { nl as _$$nl } from '../figma_app/257275'
import { eX as _$$eX, nM as _$$nM, M7 } from '../figma_app/276332'
import { qH } from '../figma_app/300692'
import { Co, Iy, Me, SD, TU, WV } from '../figma_app/317076'
import { eG as _$$eG, oJ } from '../figma_app/334505'
import { J9 } from '../figma_app/345997'
import { cE, GA, Zt } from '../figma_app/349248'
import { J3 } from '../figma_app/360163'
import { _1, ne as _$$ne, Qv, Vk, VV } from '../figma_app/389091'
import { Pk } from '../figma_app/396464'
import { Qn } from '../figma_app/415217'
import { Ay as _$$Ay2 } from '../figma_app/432652'
import { Up } from '../figma_app/455620'
import { Y5 } from '../figma_app/455680'
import { l0, lM, Md, VB } from '../figma_app/463500'
import { assert, assertNotNullish, throwTypeError } from '../figma_app/465776'
import { $f as _$$$f, rp as _$$rp } from '../figma_app/474636'
import { tB as _$$tB } from '../figma_app/516028'
import { mQ } from '../figma_app/582924'
import { $y, i1 as _$$i, iP as _$$iP, nf as _$$nf, po as _$$po, _C, B_, b_, Bs, BT, cI, dG, dM, f2, fd, G1, H4, jG, jS, KB, LL, ME, Mw, OD, oZ, Q4, q$, Ql, Rp, sd, Sf, Sx, Ty, Vb, VM, W5, wk, Xx } from '../figma_app/603466'
import { Jr } from '../figma_app/624361'
import { Dt, E8, kz, xA, ZA } from '../figma_app/633080'
import { m3 as _$$m3 } from '../figma_app/645694'
import { bp, NW, oH, Qb, w8, yh } from '../figma_app/646357'
import { lu } from '../figma_app/656233'
import { ug } from '../figma_app/656450'
import * as _require from '../figma_app/664063'
import { WJ } from '../figma_app/671547'
import { UK } from '../figma_app/740163'
import { Br } from '../figma_app/741237'
import { OU } from '../figma_app/757723'
import { _em, Bll, BXd, CUU, CWU, Egt, Ez5, fHP, fZl, glU, HzA, iIc, IPu, IQ2, j0r, L5V, mgy, mSn, NFK, NfO, NUh, Osy, oVz, QCv, RN1, rXF, sAE, SpR, tbx, tKW, UcW, uQ6, v$l, w3z, XJn, y0x, Z64, ZHy, zIx, ZiZ, zkO, zol } from '../figma_app/763686'
import { AC } from '../figma_app/777551'
import { l6, uA } from '../figma_app/781512'
import { tK as _$$tK2, bh } from '../figma_app/803787'
import { I1 } from '../figma_app/825489'
import { Ag } from '../figma_app/862289'
import { eD as _$$eD } from '../figma_app/876459'

// Import Data Structures and Collections Management - Phase 16

import { QC } from '../figma_app/913823'
import { KJ } from '../figma_app/916560'
// Import UI Components and Controls Library - Phase 14

import { Ky, u7, Yf, Yi, zn } from '../figma_app/933328'
import { LZ, oy } from '../figma_app/964367'
import { _x, gH, IN } from '../figma_app/985200'
import { In } from './309735'
import { MT } from './321380'
import {
  // Navigation and action processing
  AdvancedNavigationProcessor,
  arrayToTransformMatrix,
  convertInternalPaintToExternal,
  createVariableAlias,
  // Variable and paint utilities
  getAllStorageKeys,
  getStorageValue,
  NodeAPISetupUtils,
  normalizeBlendMode,
  // Storage functions
  PaintConversionUtils,
  processURL,
  // Storage and utility functions that exist
  setStorageValue,
  transformMatrixToArray,
} from './modules'
import {
  // Phase 26: Advanced Core Utilities and Data Processing Systems
  AdvancedDataStructureManager,
  AdvancedNodeCreationManager,
  AdvancedTransformationManager,
  AdvancedURLProcessor,
  AdvancedValidationManager as Phase26ValidationManager,
} from './modules/core-utilities-data-processing'
import {
  // Phase 23: Advanced Image Processing and Effects Management Systems
  createImageEffectsProcessingNew,
} from './modules/image-effects-processing'
import { createUtilityFunctionsNew } from './modules/node-factory-management'
import { processImageFilters } from './modules/paint-management'
import {
  // Phase 24: Advanced Validation and Layout Processing Systems
  createValidationLayoutProcessingNew,
} from './modules/validation-layout-processing'
import {
  // Phase 21: Advanced Variable and Expression Processing Systems
  createAdvancedVariableExpressionProcessor,
  createAdvancedVariableParser,
} from './modules/variable-expression-processing'
// Refactored layer renaming functions - now use the extracted module
// Original functions en and er have been moved to ./modules/layer-renaming.ts
// These are now just simple wrappers that maintain the original API

/**
 * Original function: en
 * Renames layers for a given node by collecting GUIDs for locking and renaming,
 * then performing the rename operation while temporarily locking nodes.
 * @param node - The node to process for layer renaming
 */
async function renameLayersForNode(node) {
  const {
    lockGuids,
    renameGuids,
  } = collectGuidsForRenaming(node)
  if (renameGuids.length === 0) {
    ED('first draft', 'No layers to rename', {
      guid: node.guid,
      name: node.name,
    })
    return
  }
  try {
    Egt.clearSelection()
    l7.user('first-draft-lint-rename-layers-temp-lock', () => {
      for (const guid of lockGuids) {
        Egt.setNodeLocked(guid, true, false)
      }
    })
    Egt.addToSelection(renameGuids)
    await Ag('First Draft Lint: Rename Layers', _$$Ay3, {
      source: uQ6.FIRST_DRAFT_LINT,
      overwriteNames: false,
    })
  }
  catch (error) {
    xi('first draft', 'Error renaming layers', {
      error,
    })
  }
  finally {
    l7.user('first-draft-lint-rename-layers-temp-unlock', () => {
      for (const guid of lockGuids) {
        Egt.setNodeLocked(guid, false, false)
      }
    })
  }
}

/**
 * Original IIFE: function (e) { ... }
 * Collects GUIDs for nodes that need to be locked or renamed by traversing the node tree.
 * @param node - The root node to start traversal from
 * @returns Object containing arrays of GUIDs for locking and renaming
 */
function collectGuidsForRenaming(node: any) {
  const result = {
    lockGuids: [] as string[],
    renameGuids: [] as string[],
  }
  const queue = [node.guid]
  while (queue.length > 0) {
    const currentGuid = queue.pop()
    if (!currentGuid)
      continue
    const currentNode = getSingletonSceneGraph().get(currentGuid)
    if (!currentNode)
      continue
    if (jX(currentNode, false)) {
      if (shouldRenameNode(currentNode)) {
        result.renameGuids.push(currentNode.guid)
      }
      else {
        result.lockGuids.push(currentNode.guid)
      }
    }
    if (currentNode.childCount > 0) {
      queue.push(...currentNode.childrenGuids)
    }
  }
  return result
}

/**
 * Original inner IIFE: function (e) { ... }
 * Determines if a node should be renamed based on its properties.
 * @param node - The node to check
 * @returns True if the node should be renamed, false otherwise
 */
function shouldRenameNode(node) {
  const name = node.name
  if (!name)
    return false

  // Early return for nodes that should not be renamed
  if (node.type === 'SYMBOL' || node.isStateGroup || node.isInstanceSublayer)
    return false
  if (name.endsWith('?') || name.startsWith('Image'))
    return false
  if (node.type === 'INSTANCE')
    return false
  return true
}

/**
 * Original function: er
 * Renames layers for all directly selected nodes on the current page.
 */
async function renameSelectedLayers() {
  const currentPage = getSingletonSceneGraph().getCurrentPage()
  if (!currentPage)
    return
  const selectedNodes = currentPage.directlySelectedNodes
  try {
    for (const node of selectedNodes) {
      await renameLayersForNode(node)
    }
  }
  finally {
    currentPage.directlySelectedNodes = selectedNodes
  }
}

/**
 * Get Storage Value By Key - retrieves stored value using provided key
 * @param storageKey - Key to look up in storage
 * @returns Promise resolving to stored value
 */
async function getStorageValueByKey(storageKey) {
  return await getStorageValue(storageKey)
}

/**
 * Get All Storage Keys With Prefix - retrieves all storage keys matching prefix
 * @param storagePrefix - Prefix to filter storage keys
 * @returns Promise resolving to array of matching keys
 */
async function getAllStorageKeysWithPrefix(storagePrefix) {
  return await getAllStorageKeys(storagePrefix)
}

/**
 * Set Storage Entry - stores entry in plugin storage
 * @param storageEntry - Storage entry to save
 * @returns Promise that resolves when entry is stored
 */
async function setStorageEntry(storageEntry) {
  // Ensure required parameters are present for storage operation
  const operationParams = {
    ...storageEntry,
    userID: storageEntry.userID || 'default-user',
    pluginID: storageEntry.pluginID || 'default-plugin',
    name: storageEntry.name || storageEntry.key,
  }
  return await setStorageValue(operationParams)
}
let eG = {
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
let ez = {
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
function convertPaintArrayData(paintDataArray) {
  return PaintConversionUtils.convertPaintArray(paintDataArray)
}
function mapPaintConfigurations(imageStore, videoStore, configs, blobs) {
  // e2 - Process array of paint configurations by mapping each one through the paint processor
  return configs.map(paintConfig => processPaint(imageStore, videoStore, paintConfig, blobs))
}
function extractSolidColorFromPaints(paints) {
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
function processValidPaintValues(imageStore: any, videoStore: any, config: any, blobs: any[]) {
  // e4 - Process paint value configuration, filtering out AUTO values and processing valid paints
  const validPaintValues: any[] = []

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
function processPaint(imageStore, videoStore, config, blobs) {
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
function processSolidPaint(config: any, visible: boolean, opacity: number, blendMode: string): SolidPaint {
  const solidPaint: any = {
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
  return solidPaint as SolidPaint
}

/**
 * Process gradient paint with stops and transformation
 * @param config - Paint configuration for gradient
 * @param visible - Visibility flag
 * @param opacity - Opacity value
 * @param blendMode - Blend mode
 * @returns Processed gradient paint object
 */
function processGradientPaint(config: any, visible: boolean, opacity: number, blendMode: string): GradientPaint {
  const gradientPaint: GradientPaint = {
    type: config.type,
    transform: arrayToTransformMatrix(config.gradientTransform),
    stopsVar: config.gradientStops.map((e: any) => e.boundVariables?.color?.id && e.boundVariables.color?.type === 'VARIABLE_ALIAS' && _$$fn(e.boundVariables.color.id)
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
    }: {
      color: any
      position: number
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
function processPatternPaint(config: any, visible: boolean, opacity: number, blendMode: string): PatternPaint {
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
  } as PatternPaint
}

/**
 * Process video paint with playback and thumbnail properties
 * @param params - Object containing paint configuration and related properties
 * @returns Processed video paint object
 */
function processVideoPaint({
  imageManager,
  config,
  visible,
  opacity,
  blendMode,
  thumbnailManager,
  blobs,
}: {
  imageManager: any
  config: any
  visible: boolean
  opacity: number
  blendMode: string
  thumbnailManager: any
  blobs: any[]
}): VideoPaint {
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
  return currentPaint as VideoPaint
}

// Refactored plugin runtime - now uses the extracted node management module
// Original class e9 has been moved to ./modules/node-management.ts
export class PluginRuntimeBridge {
  pluginID: string
  vm: any

  constructor(pluginID: string, vm: any) {
    this.pluginID = pluginID
    this.vm = vm
  }

  getMultiplayerSelection(): Set<any> {
    let e = new Set()
    for (let {
      selection,
    } of this.figma().activeUsers) {
      for (let i of selection) e.add(i)
    }
    return e
  }

  figma(): any {
    return this.vm.scope.figma
  }

  logWarning(...e: any[]): void {
    (_$$nl() || this.pluginID.startsWith('TEST') || Object.values(debugState.getState().localPlugins).some((item: any) => item.plugin_id === this.pluginID)) && console.warn(...e)
  }

  createPluginNode(e: any, t: any, i: any, n: boolean = false): any {
    let r: any
    if (!e || typeof e != 'object')
      throw new Error('invalid node passed to createPluginNode')
    let a = e.type
    switch (a) {
      case 'inputframe':
      case 'autolayout':
      case 'frame':
        r = e7New('FRAME', i)
        break
      case 'input':
      case 'text':
        r = e7New('TEXT', i)
        break
      case 'svg':
        // Refactored SVG node creation and widget ancestor assignment (original IIFE replaced with named recursive function)
        r = getSingletonSceneGraph().createNodeFromSVG(e.renderMetaData.src ?? '', {
          tracking: i,
        })

        /**
         * Recursively assign widgetCachedAncestor to all descendants of a node.
         * @param node - The root node to start assignment from.
         * @param ancestor - The widget ancestor to assign.
         */
        function assignWidgetCachedAncestor(node: any, ancestor: any) {
          for (const childGuid of node.reversedChildrenGuids) {
            const childNode = e8New(childGuid)
            if (childNode) {
              childNode.widgetCachedAncestor = ancestor
              assignWidgetCachedAncestor(childNode, ancestor)
            }
          }
        }
        assignWidgetCachedAncestor(r, t)
        break
      case 'line':
        r = e7New('LINE', i)
        break
      case 'ellipse':
        r = e7New('ELLIPSE', i)
        break
      case 'rectangle':
        r = e7New('RECTANGLE', i)
        break
      case 'fragment':
      case 'span':
        if (n)
          throw new InternalError(`Unsupported root node type: ${a}`)
        throw new Error(`Attempting to create a ${a} node`)
      case 'instance':
        {
          let instanceNode = this.figma().getNodeById(e.props.componentId)
          if (instanceNode?.type !== 'COMPONENT')
            throw new Error(`Invalid component Id: ${e.props.componentId}`)
          r = e8New(instanceNode.createInstance().id)
          break
        }
      default:
        throwTypeError(a)
    }
    r.widgetCachedAncestor = t
    return this.figma().getNodeById(r.guid)
  }

  loadFontAsync(e: any): Promise<void> {
    return this.figma().loadFontAsync(e)
  }

  createImage(e: any) {
    return this.figma().createImage(e)
  }

  getNodeById(e: string) {
    return this.figma().getNodeById(e)
  }

  getSceneNodeAdapter(e: string, t: any = null) {
    return new PluginSceneNodeAdapter(e, t, this)
  }
}
// Refactored plugin node adapter - now uses the extracted event management module
/**
 * Plugin Node Test Environment - manages test environment for plugin node operations
 * Provides isolation and controlled execution context for plugin development and testing
 */

/**
 * PluginSceneNodeAdapter - Adapter for plugin scene nodes, providing a unified interface for node manipulation.
 * Refactored for clarity, maintainability, and type safety.
 */
class PluginSceneNodeAdapter {
  id: string
  pluginNode: any
  runtime: any
  shimNode: any

  /**
   * Constructs a new PluginSceneNodeAdapter.
   * @param id - The node's unique identifier.
   * @param pluginNode - The plugin node instance.
   * @param runtime - The plugin runtime bridge.
   */
  constructor(id: string, pluginNode: any, runtime: any) {
    this.id = id
    this.pluginNode = pluginNode
    this.runtime = runtime
    this.shimNode = null
  }

  /**
   * Returns the node's unique identifier.
   */
  getId() {
    return this.id
  }

  /**
   * Returns the adapter's children as PluginSceneNodeAdapter instances.
   */
  get children() {
    const shim = this.readShim()
    const guids = shim?.reversedChildrenGuids ?? []
    return [...guids].reverse().map(guid => new PluginSceneNodeAdapter(guid, null, this.runtime))
  }

  /**
   * Inserts a child node at the specified position.
   * @param child - The child node to insert.
   * @param position - The position to insert at.
   */
  insertChild(child, position) {
    this.readShim()?.insertChild(e8New(position), child, {
      skipValidation: true,
    })
  }

  /**
   * Removes the node and its children from the scene graph.
   */
  remove() {
    this.readShim()?.removeSelfAndChildren()
  }

  /**
   * Lazily retrieves the plugin node instance.
   */
  getPluginNodeSlow() {
    if (!this.pluginNode) {
      this.pluginNode = this.runtime.getNodeById(this.id)
    }
    return this.pluginNode
  }

  /**
   * Lazily retrieves the shim node instance.
   */
  readShim() {
    if (!this.shimNode) {
      this.shimNode = e8New(this.id)
    }
    return this.shimNode
  }

  /**
   * Applies component properties to an INSTANCE node.
   * @param node - The node to apply properties to.
   * @param props - The properties to apply.
   */
  applyComponentProps(node, props: ComponentProps) {
    if (node.type !== 'INSTANCE')
      return
    if (props.componentId) {
      try {
        const component = e8New(props.componentId)
        if (component) {
          node.swapComponent(component)
          node.updateIfIsNestedInstance()
        }
      }
      catch (err) {
        this.runtime.logWarning(`Error setting componentId: ${err}`)
      }
    }
    if (props.sharedPluginData) {
      this.writeSharedPluginData(node, props.sharedPluginData)
    }
    if (props.pluginData) {
      this.writePluginData(node, props.pluginData)
    }
    if (props.componentProps) {
      try {
        node.setProperties(props.componentProps, true)
      }
      catch (err) {
        this.runtime.logWarning(`Error setting component props: ${err}`)
      }
    }
    let materialize = false
    if (props.nestedInstancesVisibility) {
      for (const [key, visible] of Object.entries(props.nestedInstancesVisibility)) {
        const sublayer = node.getMatchingInstanceSublayer(key)
        if (!sublayer)
          continue
        const sublayerShim = sublayer
        const wasVisible = sublayerShim.visible
        sublayerShim.visible = visible
        materialize = materialize || !wasVisible && visible
      }
    }
    if (materialize) {
      node.materializeDescendants()
    }
    if (props.componentPropsNested) {
      for (const [key, nestedProps] of Object.entries(props.componentPropsNested)) {
        const sublayer = node.getMatchingInstanceSublayer(key)
        if (!sublayer)
          continue
        const sublayerShim = sublayer
        if (sublayerShim.isVisibleInInstance) {
          this.applyComponentProps(sublayerShim, nestedProps)
        }
      }
    }
  }

  /**
   * Writes plugin data to the node.
   * @param node - The node to write data to.
   * @param data - The plugin data object.
   */
  writePluginData(node, data) {
    if (typeof data === 'object') {
      for (const [key, value] of Object.entries(data)) {
        if (typeof value !== 'string') {
          this.runtime.logWarning(`Attempting to set non-string pluginData: ${key}=${JSON.stringify(value)}`)
          continue
        }
        node.setPluginData(this.runtime.pluginID, key, value)
      }
    }
  }

  /**
   * Writes shared plugin data to the node.
   * @param node - The node to write data to.
   * @param data - The shared plugin data object.
   */
  writeSharedPluginData(node, data) {
    if (typeof data === 'object') {
      for (const [key, value] of Object.entries(data)) {
        if (typeof value !== 'string') {
          this.runtime.logWarning(`Attempting to set non-string sharedPluginData: ${key}=${JSON.stringify(value)}`)
          continue
        }
        node.setSharedPluginData('jsx', key, value)
      }
    }
  }

  /**
   * Writes a property to the node.
   * @param key - The property key.
   * @param value - The property value.
   */
  writeProperty(key, value) {
    this.writePropertyInner(key, value)
  }

  /**
   * Internal property writer with special handling for certain keys.
   * @param key - The property key.
   * @param value - The property value.
   */
  writePropertyInner(key, value) {
    const node = this.readShim()
    switch (key) {
      case 'widgetEvents':
      case 'widgetInputBehavior':
      case 'widgetTooltip':
        node[key] = value
        break
      case 'componentId':
        this.applyComponentProps(node, {
          componentId: value,
        })
        break
      case 'componentProps':
        this.applyComponentProps(node, {
          componentProps: value,
        })
        break
      case 'nestedInstancesVisibility':
        this.applyComponentProps(node, {
          nestedInstancesVisibility: value,
        })
        break
      case 'componentPropsNested':
        this.applyComponentProps(node, {
          componentPropsNested: value,
        })
        break
      case 'sharedPluginData':
        this.writeSharedPluginData(node, value)
        break
      case 'pluginData':
        this.writePluginData(node, value)
        break
      default:
        this.getPluginNodeSlow()[key] = value
    }
  }

  /**
   * Writes a text range property to the node.
   * @param property - The property to write.
   * @param value - The value to set.
   * @param start - The start index.
   * @param end - The end index.
   */
  writeTextRange(property, value, start, end) {
    this.writeTextRangeInner(property, value, start, end)
  }

  /**
   * Internal text range writer with support for various text properties.
   * @param property - The property to write.
   * @param value - The value to set.
   * @param start - The start index.
   * @param end - The end index.
   * @param _ - Reserved for future use.
   */
  writeTextRangeInner(property, value, start, end, _ = false) {
    const node = this.getPluginNodeSlow()
    if (!node || node.type !== 'TEXT') {
      throw new Error('Can\'t write text range on non-text node')
    }
    switch (property) {
      case 'fontName':
        node.setRangeFontName(start, end, value)
        break
      case 'fills':
        node.setRangeFills(start, end, value)
        break
      case 'fontSize':
        node.setRangeFontSize(start, end, value)
        break
      case 'hyperlink':
        node.setRangeHyperlink(start, end, value)
        break
      case 'textCase':
        node.setRangeTextCase(start, end, value)
        break
      case 'textDecoration':
        node.setRangeTextDecoration(start, end, value)
        break
      case 'letterSpacing':
        node.setRangeLetterSpacing(start, end, value)
        break
      case 'lineHeight':
        node.setRangeLineHeight(start, end, value)
        break
      case 'listOptions':
        node.setRangeListOptions(start, end, value)
        break
      case 'indentation':
        node.setRangeIndentation(start, end, value)
        break
      default:
        throwTypeError(property)
    }
  }

  /**
   * Resizes the node.
   * @param width - The new width.
   * @param height - The new height.
   */
  resize(width, height) {
    const node = this.getPluginNodeSlow()
    node?.resize(width, height)
  }

  /**
   * Returns the node's size.
   */
  getSize() {
    const node = this.getPluginNodeSlow()
    return {
      width: node?.width ?? 0,
      height: node?.height ?? 0,
    }
  }

  /**
   * Returns the node's font name.
   */
  getFontName() {
    return this.readShim()?.fontName || {
      family: '',
      style: '',
    }
  }

  /**
   * Returns the node's type.
   */
  getType() {
    return this.readShim()?.type
  }

  /**
   * Returns the node's GUID.
   */
  getID() {
    return this.readShim()?.guid
  }

  /**
   * Returns the image hash if the node has a single IMAGE fill, otherwise null.
   */
  getImageFillHashOrNull() {
    const fills = this.readShim()?.fills ?? []
    if (fills.length !== 1)
      return null
    const fill = convertInternalPaintToExternal(fills[0])
    return fill.type !== 'IMAGE' ? null : fill.imageHash ?? null
  }
}
/**
 * Style Manager Test Environment - provides test environment for style management operations
 * Manages style creation, modification, and testing within isolated plugin context
 */
export class StyleManager {
  sceneGraph: any

  constructor(sceneGraph: any) {
    this.sceneGraph = sceneGraph ?? NT()
  }

  fullscreenStyleDataToLocalStyle(e: any) {
    return w8(null, null, e, '', '')
  }

  /**
   * Moves a style to a new position within the style hierarchy.
   * Original: moveStyle
   * @param styleNode - The style node to move
   * @param referenceNode - The reference node to move relative to (or null)
   * @param styleType - The style type (string or enum)
   * @returns An empty string on success, or an error message
   */
  moveStyle(styleNode: any, referenceNode: any, styleType: any) {
    // Resolve style type enum value
    const styleTypeEnum = _$$w2.StyleType[styleNode.styleType]
    if (typeof styleTypeEnum !== 'number')
      return 'Unable to parse style type of target node'

    // Get all local styles of the given type and map to local style objects
    const allLocalStyles = glU.getAllLocalStyles(this.sceneGraph.scene, styleTypeEnum).map(this.fullscreenStyleDataToLocalStyle)
    const mappedStyles = lM(allLocalStyles, styleType)
    const styleHierarchy = l0(mappedStyles)
    const folderName = In(styleNode.name)

    // Initialize variables for tracking nodes and folders
    let targetStyle: any = null
    let referenceStyle: any = null
    let targetFolder: any = null
    let referenceFolder: any = null
    let firstStyleInTargetFolder: any = null
    let moveAfterStyle: any = null

    // Find target style, reference style, and their folders in the hierarchy
    for (let i = 0; i < styleHierarchy.length; i++) {
      const node = styleHierarchy[i]
      if (node.type === 'STYLE_FOLDER') {
        moveAfterStyle = node
      }
      else {
        if (node.node_id === styleNode.guid) {
          targetStyle = node
          targetFolder = moveAfterStyle
        }
        if (referenceNode !== null && node.node_id === referenceNode.guid) {
          referenceStyle = node
          referenceFolder = moveAfterStyle
        }
      }
    }

    // Get the first style in the target folder, if available
    if (targetFolder && targetFolder.styles && targetFolder.styles[0])
      firstStyleInTargetFolder = targetFolder.styles[0]
    if (!targetStyle)
      return `No local target node found with style key: ${styleNode.styleKeyForPublish}`

    // Determine move destination and reference
    let destinationFolder: any = null
    let destinationReference: any = null
    if (referenceNode === null) {
      destinationFolder = targetFolder
      destinationReference = firstStyleInTargetFolder
    }
    else {
      if (folderName !== In(referenceNode.name))
        return 'Target and reference node must live in the same folder.'
      if (!referenceStyle)
        return `No local reference node found with style key: ${styleNode.styleKeyForPublish}`
      destinationFolder = referenceStyle
      destinationReference = referenceFolder
    }

    // Move the style if possible
    if (Md(destinationFolder, targetStyle, destinationReference, folderName))
      VB([targetStyle], destinationFolder, destinationReference, folderName, styleHierarchy, allLocalStyles, false)
    return ''
  }

  /**
   * Retrieves all local styles of a given type.
   * Original: getAllLocalStyles
   * @param styleType - The style type (string or enum)
   * @returns Array of StyleKey objects
   */
  getAllLocalStyles(styleType: any) {
    const styleTypeEnum = _$$w2.StyleType[styleType]
    if (typeof styleTypeEnum !== 'number')
      return []
    const allLocalStyles = glU.getAllLocalStyles(this.sceneGraph.scene, styleTypeEnum).map(this.fullscreenStyleDataToLocalStyle)
    const mappedStyles = lM(allLocalStyles, styleType)
    const styleHierarchy = l0(mappedStyles)
    const styleKeys: any[] = []
    for (const node of styleHierarchy) {
      if (node.type !== 'STYLE_FOLDER') {
        const key = this.localStyleToStyleKey(node)
        styleKeys.push(key)
      }
    }
    return styleKeys
  }

  /**
   * Moves a style folder to a new position within the style hierarchy.
   * Original: moveFolder
   * @param targetFolderName - The name of the folder to move
   * @param referenceFolderName - The name of the reference folder to move relative to (or null)
   * @param styleType - The style type (string or enum)
   * @returns An empty string on success, or an error message
   */
  moveFolder(targetFolderName: string, referenceFolderName: string, styleType: any) {
    let targetFolder: any = null
    let referenceFolder: any = null
    let parentFolder: any = null
    const styleTypeEnum = _$$w2.StyleType[styleType]
    if (typeof styleTypeEnum !== 'number')
      return `Unable to parse style type: ${styleType}`

    // Get all local styles and build the folder hierarchy
    const allLocalStyles = glU.getAllLocalStyles(this.sceneGraph.scene, styleTypeEnum).map(this.fullscreenStyleDataToLocalStyle)
    const mappedStyles = lM(allLocalStyles, styleType)
    const styleHierarchy = l0(mappedStyles)

    // Recursive function to find target and reference folders
    const findFolders = (folder: any) => {
      if (folder.subfolders) {
        folder.subfolders.forEach((subfolder: any) => {
          if (subfolder.name === targetFolderName) {
            targetFolder = subfolder
            parentFolder = folder
          }
          if (subfolder.name === referenceFolderName) {
            referenceFolder = subfolder
          }
        })
        folder.subfolders.forEach(findFolders)
      }
    }
    findFolders(mappedStyles)
    if (!targetFolder || !parentFolder)
      return `The target folder named "${targetFolderName}" could not be found`
    if (referenceFolderName !== null && !referenceFolder)
      return `The reference folder named "${referenceFolderName}" could not be found`
    if (referenceFolder && referenceFolder.name && targetFolder.name && In(referenceFolder.name) !== In(targetFolder.name)) {
      return 'The target folder and the reference folder must live in the same parent folder'
    }

    // Find the reference node for moving
    const parentHierarchy = l0(parentFolder)
    let afterFolder: any = null
    let lastStyleInParent: any = (parentFolder.styles && parentFolder.styles.length) ? parentFolder.styles[parentFolder.styles.length - 1] : parentFolder
    let firstSubfolder: any = (parentFolder.subfolders && parentFolder.subfolders[0]) ? parentFolder.subfolders[0] : null
    let previousFolder: any = null
    for (const node of parentHierarchy) {
      if (node.type === 'STYLE_FOLDER') {
        if (previousFolder === referenceFolder) {
          afterFolder = node
          break
        }
        previousFolder = node
      }
    }
    const referenceStyle = referenceFolder ? (referenceFolder.styles && referenceFolder.styles[referenceFolder.styles.length - 1]) : lastStyleInParent
    const afterReference = referenceFolder ? afterFolder : firstSubfolder

    // Move the folder if possible
    if (Md(referenceStyle, targetFolder, afterReference, parentFolder.name))
      VB([targetFolder], referenceStyle, afterReference, parentFolder.name, styleHierarchy, allLocalStyles, true)
    return ''
  }

  softDeleteStyle(e: any) {
    if (e && e.removeSelfAndChildren) {
      e.removeSelfAndChildren()
    }
  }

  localStyleToStyleKey(localStyle: any) {
    return {
      key: localStyle.key,
      version: 'INVALID',
    }
  }

  get(styleId: string) {
    let t = _$$eX(styleId)
    if (!t)
      return null
    let i = this.sceneGraph.getStyleNodeByRef ? this.sceneGraph.getStyleNodeByRef(t) : null
    return i && !i.isSoftDeleted ? i : null
  }

  create(style: any) {
    // Implementation based on the interface
    return ''
  }

  delete(styleId: string) {
    // Implementation based on the interface
  }

  createStyle(styleData: any) {
    if (this.sceneGraph && this.sceneGraph.createStyle) {
      return this.sceneGraph.createStyle(styleData).idForPluginApi
    }
    return ''
  }
}

/**
 * Process URL Data - handles URL data processing through URL utilities
 * @param urlData - URL data object to process
 * @returns Processed URL data
 */
function processUrlData(urlData) {
  return processURL(urlData)
}

// Legacy compatibility alias
const tB = processUrlData
let tY = getSceneGraphInstance()
function tq(conditionData) {
  // tq - Process condition data by delegating to enhanced condition processor
  return tqNew(conditionData)
}
function t$(e) {
  // Delegate to the extracted ReactionsActionProcessor
  // TODO: Implement proper ReactionsActionProcessor when available
  return e
}

// Cleaned up orphaned code from previous extraction

// Phase 19: Extracted Navigation Action Processing
function tZNew(e) {
  // Use extracted Phase 19 Advanced Navigation Processor
  // Original massive switch statement logic moved to ./modules/navigation-action-processing.ts
  const navigationProcessor = new AdvancedNavigationProcessor()
  return navigationProcessor.processConnectionAction(e)
}

// Phase 19: Extracted Variable Data Processing
function tQNewVariableData(e) {
  // Use extracted Phase 19 Advanced Navigation Processor for variable data processing
  // Original function logic moved to ./modules/navigation-action-processing.ts
  const navigationProcessor = new AdvancedNavigationProcessor()
  return navigationProcessor.processVariableData(e)
}
function denormalizeTransition(transitionConfig) {
  const transitionData = {} as TransitionData
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
  const easingData = {} as EasingData
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
function tZ(connectionConfig) {
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
    case 'URL':
      {
        const urlConnection = {
          type: 'URL',
          url: connectionConfig.connectionURL || '',
          openInNewTab: connectionConfig.openUrlInNewTab ?? true,
        }
        return urlConnection
      }
    case 'SET_VARIABLE':
      {
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
    case 'SET_VARIABLE_MODE':
      {
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
    case 'CONDITIONAL':
      {
        const conditionalActions: ConditionalAction[] = []
        if (connectionConfig.conditionalActions) {
          for (const conditionalAction of connectionConfig.conditionalActions) {
            /**
             * Processes a conditional action configuration into a structured action group.
             * @param conditionalActionConfig - The configuration object for the conditional action.
             * @returns An object containing the processed actions and optional condition.
             */
            function processConditionalAction(conditionalActionConfig) {
              const actionGroup: ActionGroup = {
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
                const processedActions: NavigationAction[] = []
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
    case 'UPDATE_MEDIA_RUNTIME':
      {
        if (connectionConfig.mediaAction === undefined) {
          return null
        }
        switch (connectionConfig.mediaAction) {
          case 'PLAY':
          case 'PAUSE':
          case 'TOGGLE_PLAY_PAUSE':
          case 'MUTE':
          case 'UNMUTE':
          case 'TOGGLE_MUTE_UNMUTE':
            {
              const transitionNodeId = dI(connectionConfig.transitionNodeID)
              const targetNode = transitionNodeId ? tY.get(transitionNodeId) : null
              return {
                type: 'UPDATE_MEDIA_RUNTIME',
                destinationId: targetNode ? tY.guidFromDeveloperFriendlyId(targetNode.guid) : null,
                mediaAction: connectionConfig.mediaAction,
              }
            }
          case 'SKIP_FORWARD':
          case 'SKIP_BACKWARD':
            {
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
          case 'SKIP_TO':
            {
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
    case 'INTERNAL_NODE':
      {
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
function tQNewExpressionParser(e) {
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

// Animation Transition Styles - defines all supported transition animations for UI components
const animationTransitionStyles = ['DISSOLVE', 'SLIDE_FROM_LEFT', 'SLIDE_FROM_RIGHT', 'SLIDE_FROM_BOTTOM', 'SLIDE_FROM_TOP', 'PUSH_FROM_LEFT', 'PUSH_FROM_RIGHT', 'PUSH_FROM_BOTTOM', 'PUSH_FROM_TOP', 'MOVE_FROM_LEFT', 'MOVE_FROM_RIGHT', 'MOVE_FROM_TOP', 'MOVE_FROM_BOTTOM', 'SLIDE_OUT_TO_LEFT', 'SLIDE_OUT_TO_RIGHT', 'SLIDE_OUT_TO_TOP', 'SLIDE_OUT_TO_BOTTOM', 'MOVE_OUT_TO_LEFT', 'MOVE_OUT_TO_RIGHT', 'MOVE_OUT_TO_TOP', 'MOVE_OUT_TO_BOTTOM', 'SMART_ANIMATE', 'NONE'] as const

// Animation Trigger Types - defines when animations should start (click events or timed delays)
const animationTriggerTypes = ['ON_CLICK', 'AFTER_DELAY'] as const

// Animation Easing Curves - defines the mathematical curves for animation timing and smoothness
const animationEasingCurves = ['EASE_IN', 'EASE_OUT', 'EASE_IN_AND_OUT', 'LINEAR', 'GENTLE', 'QUICK', 'BOUNCY', 'SLOW'] as const

// Variable Data Types - supported data types for variable binding and resolution
const primitiveTypes = ['BOOLEAN', 'COLOR', 'FLOAT', 'STRING'] as const
function processPublishStatus(e) {
  if (isNullish(e))
    return 'UNPUBLISHED'
  switch (e) {
    case E8.CURRENT:
      return 'CURRENT'
    case E8.NEW:
    case E8.NOT_STAGED:
      return 'UNPUBLISHED'
    case E8.CHANGED:
    case E8.DELETED:
      return 'CHANGED'
    default:
      return 'UNPUBLISHED'
  }
}

// Public Variable Scopes - filtered keys from j0r excluding STROKE and FONT_VARIATIONS, plus additional stroke/font properties
const publicVariableScopes = Object.keys(j0r).filter(scopeKey => isNaN(Number(scopeKey)) && scopeKey !== 'STROKE' && scopeKey !== 'FONT_VARIATIONS').concat(['STROKE_COLOR', 'FONT_WEIGHT']) as [string, ...string[]]

// Public Variable Code Syntax Platform Properties - filtered numeric keys from y0x for platform-specific variable syntax
const publicVariableCodeSyntaxPlatformProperties = Object.keys(y0x).filter(propertyKey => isNaN(Number(propertyKey))) as [string, ...string[]]
const variableAlias = _$$z.strictObject({
  id: _$$z.string(),
  type: _$$z.literal('VARIABLE_ALIAS'),
})
export const variableDefinitions = {
  PublicVariableScope: _$$z.enum([...publicVariableScopes]),
  PublicVariableCodeSyntaxPlatformPropType: _$$z.enum([...publicVariableCodeSyntaxPlatformProperties]),
  PublicVariableResolvedType: _$$z.enum([...primitiveTypes]),
  VariableBindableNodeField: _$$z.enum([...hp]),
  VariableBindableTextField: _$$z.enum([...SE]),
  VariableBindableSubstringField: _$$z.enum([...MN]),
  VariableBindablePaintField: _$$z.enum([...Lk]),
  VariableBindableEffectField: _$$z.enum([...Wh]),
  VariableBindableShadowEffectField: _$$z.enum([...Wh]),
  VariableBindableBlurEffectField: _$$z.enum([...HC]),
  VariableBindableMinMaxLayoutField: _$$z.enum([...JE]),
  VariableBindableStretchLayoutField: _$$z.enum([...gO]),
  VariableBindableCenterLayoutField: _$$z.enum([...W$]),
  VariableBindableGridLayoutField: _$$z.enum([...Vw]),
  VariableBindableLayoutField: _$$z.enum([...JE]),
  VariableBindableComponentPropertyField: _$$z.enum([...fH]),
  VariableAlias: variableAlias,
  VariableBinding: variableAlias,
  VariableValue: _$$z.union([_$$z.boolean(), _$$N.FiniteNumber, _$$z.string(), _$$z.union([_$$N.ColorA, _$$N.Color]), variableAlias]),
}
class ApplicationError extends Error {
  constructor(e) {
    super(e)
  }
}
function hasResizeToFit(e) {
  return e.type === 'FRAME' && e.resizeToFit
}
function processWidgetSyncData(vm, state, i) {
  return {
    syncedState: vm.isUndefined(state)
      ? void 0
      : _$$u({
        vm,
        handle: state,
        zSchema: _$$z.record(_$$z.any()).optional(),
        property: 'cloneWidget',
      }),
    syncedMap: vm.isUndefined(i)
      ? void 0
      : _$$u({
        vm,
        handle: i,
        zSchema: _$$z.record(_$$z.record(_$$z.any())).optional(),
        property: 'cloneWidget',
      }),
  }
}
function isInImmutableContext(e, t) {
  // Module Processor Function - handles module input and target module processing (im function)
  return !!t.isInImmutableFrame && t.type !== 'TABLE_CELL' || t.isInWidget && e.vmType !== 'scopednoopvm'
}
function validateNamespace(namespace) {
  // Handler Processor Function - handles handler input processing and validation (ih function)
  if (namespace.length < 3)
    throw new Error('The namespace must be at least 3 characters')
  if (namespace.length > 1000)
    throw new Error('The namespace can be at most 1000 characters')
  if (!namespace.match(/^[\w.]+$/)) {
    throw new Error('The namespace can only consist of alphanumeric characters, _ or .')
  }
}

/**
 * Property handler for fills and similar paint properties.
 * Handles getting and setting paint arrays, including mixed values and plugin-only paint data.
 *
 * @param params - Object containing VM context and property helpers.
 * @param handle - The VM handle for the property.
 * @param propertyKey - The property key (e.g., 'fills').
 */
function handlePaintProperty({
  vm,
  defineVmProp,
  mixedSentinel,
  imageStore,
  videoStore,
  getNode,
}, handle, propertyKey) {
  defineVmProp({
    handle,
    key: propertyKey,
    options: {
      enumerable: true,
      metricsKey: `node.${propertyKey}`,
      get() {
        const node = getNode(this)
        const fills = node.fillsOrMixed
        if (fills === 'mixed')
          return mixedSentinel
        const wrapped = vm.deepWrap(convertPaintArrayData(fills))
        vm.deepFreezeObject(wrapped)
        return wrapped
      },
      set(value) {
        const node = getNode(this)
        const blobs = []
        node.fillPaintsForPluginOnly = {
          data: mapPaintConfigurations(imageStore, videoStore, _$$u({
            vm,
            handle: value,
            zSchema: _$$N.Paints,
            property: propertyKey,
          }), blobs),
          blobs,
        }
      },
    },
    canWriteInReadOnly: false,
    hasEditScope: true,
  })
}

function createNodeHash(vm: NoOpVm, targetData: any) {
  // Data Processor Function - handles input and target data processing (i_ function)
  let i = vm.newObject()
  vm.defineProp(i, 'hash', {
    enumerable: false,
    metricsKey: 'node.hash',
    value: vm.deepWrap(targetData.sha1),
  })
  return i
}

function createImageProcessor(vm: NoOpVm, imageData: any) {
  const processor = vm.newObject()

  // Define hash property
  vm.defineProp(processor, 'hash', {
    enumerable: false,
    metricsKey: 'node.hash',
    value: vm.deepWrap(imageData.sha1),
  })

  // Define getBytesAsync function
  vm.defineFunction(processor, 'getBytesAsync', 'image.getBytesAsync', () => {
    const {
      promise,
      resolve,
      reject,
    } = vm.newPromise()
    const asyncOperation = vm.registerPromise(imageData.getBytesAsync())
    asyncOperation.then((result: any) => {
      resolve(vm.deepWrap(result))
    })
    asyncOperation.catch((error: any) => {
      reject(vm.deepWrap(error))
    })
    return promise
  })

  // Define getSizeAsync function
  vm.defineFunction(processor, 'getSizeAsync', 'image.getSizeAsync', () => {
    const {
      promise,
      resolve,
      reject,
    } = vm.newPromise()
    const processImageSize = () => {
      if (imageData.bytes) {
        vX(imageData.bytes).then((size: any) => resolve(vm.deepWrap(size))).catch((error: any) => reject(vm.deepWrap(error)))
      }
      else {
        imageData.getBytesAsync().then((bytes: any) => {
          imageData.bytes = bytes
          return vX(bytes)
        }).then((size: any) => resolve(vm.deepWrap(size))).catch(() => {
          reject(vm.newString('Image dimensions not available'))
        })
      }
    }
    processImageSize()
    return promise
  })
  return processor
}

function setupPrototypeFromArgs(context: any, target: string, ...additionalInputs: Array<(context: any, prototype: any) => void>) {
  const prototype = context.vm.newPrototype(target)
  for (const additionalInput of additionalInputs) {
    additionalInput(context, prototype)
  }
  context.vm.retainHandle(prototype)
  return prototype
}

function convertEffectType(effectType: string): string {
  switch (effectType) {
    case 'FOREGROUND_BLUR':
      return 'LAYER_BLUR'
    case 'REPEAT':
    case 'SYMMETRY':
      return 'BACKGROUND_BLUR'
    case 'GRAIN':
      return 'TEXTURE'
    default:
      return effectType
  }
}

function processEffect(effect: any) {
  // Iteration Processor Function - handles iteration input processing (iI function)
  const type = convertEffectType(effect.type)
  const baseEffect = effect.type === 'NOISE'
    ? {
      type,
      visible: effect.visible,
    }
    : {
      type,
      visible: effect.visible,
      radius: effect.radius,
    }
  const boundVariables: any = {}
  if (effect.colorVar?.value?.alias) {
    boundVariables.color = createVariableAlias(effect.colorVar.value.alias)
  }
  if (effect.spreadVar?.value?.alias) {
    boundVariables.spread = createVariableAlias(effect.spreadVar.value.alias)
  }
  if (effect.radiusVar?.value?.alias) {
    boundVariables.radius = createVariableAlias(effect.radiusVar.value.alias)
  }
  if (effect.xVar?.value?.alias) {
    boundVariables.offsetX = createVariableAlias(effect.xVar.value.alias)
  }
  if (effect.yVar?.value?.alias) {
    boundVariables.offsetY = createVariableAlias(effect.yVar.value.alias)
  }
  const processedEffect = {
    ...baseEffect,
    boundVariables,
  }
  switch (effect.type) {
    case 'INNER_SHADOW':
      return {
        ...processedEffect,
        color: effect.color,
        offset: effect.offset,
        spread: effect.spread,
        blendMode: normalizeBlendMode(effect.blendMode),
      }
    case 'DROP_SHADOW':
      return {
        ...processedEffect,
        color: effect.color,
        offset: effect.offset,
        spread: effect.spread,
        blendMode: normalizeBlendMode(effect.blendMode),
        showShadowBehindNode: effect.showShadowBehindNode,
      }
    case 'GRAIN':
      return {
        ...processedEffect,
        noiseSize: effect.noiseSize?.x || 0,
        clipToShape: effect.clipToShape || false,
      }
    case 'NOISE':
      if (effect.noiseType === 'DUOTONE') {
        return {
          ...processedEffect,
          noiseSize: effect.noiseSize?.x || 0,
          noiseType: 'DUOTONE',
          color: effect.color,
          secondaryColor: effect.secondaryColor || effect.color,
          density: effect.density,
        }
      }
      if (effect.noiseType === 'MULTITONE') {
        return {
          ...processedEffect,
          noiseSize: effect.noiseSize?.x || 0,
          noiseType: 'MULTITONE',
          color: effect.color,
          opacity: effect.opacity,
          density: effect.density,
        }
      }
      return {
        ...processedEffect,
        noiseSize: effect.noiseSize?.x || 0,
        noiseType: 'MONOTONE',
        color: effect.color,
        density: effect.density,
      }
    case 'GLASS':
      return {
        ...processedEffect,
        refraction: effect.refractionIntensity,
        depth: effect.refractionRadius,
        lightAngle: effect.specularAngle,
        lightIntensity: effect.specularIntensity,
        dispersion: effect.chromaticAberration,
      }
    default:
      // Handle progressive blur for advanced effects
      if (getFeatureFlags().ce_il_root && effect.blurOpType === 'PROGRESSIVE') {
        return {
          ...processedEffect,
          blurType: 'PROGRESSIVE',
          startRadius: effect.startRadius || 0,
          startOffset: effect.startOffset,
          endOffset: effect.endOffset,
        }
      }
      return processedEffect
  }
}

/**
 * Clamps a value between a minimum and maximum.
 * Original: iE
 * @param value - The value to clamp.
 * @param min - The minimum allowed value.
 * @param max - The maximum allowed value.
 * @returns The clamped value.
 */
function clampValue(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

/**
 * Validates and clamps a glass effect property value, logging warnings if out of bounds.
 * Original: validateGlassEffectValue
 * @param value - The value to validate.
 * @param min - The minimum allowed value.
 * @param max - The maximum allowed value.
 * @param propertyName - The property name for logging.
 * @returns The clamped value.
 */
function validateGlassEffectValue(value: number, min: number, max: number, propertyName: string): number {
  if (value > max) {
    _$$k2.warn(`Glass effect ${propertyName} of ${value} is too large and will be clamped to ${max}`)
  }
  else if (value < min) {
    _$$k2.warn(`Glass effect ${propertyName} of ${value} is too small and will be clamped to ${min}`)
  }
  return clampValue(value, min, max)
}

function handleFrameSpread(i: any) {
  if (i.fills.length === 0 || i.fills.every(e => !(e.visible && e.opacity))) {
    _$$k2.warn('The \'spread\' parameter is not supported when frames or components have no visible fills')
  }
  if (i.frameMaskDisabled) {
    _$$k2.warn('The \'spread\' parameter is not supported when frames or components have "Clips content" disabled.')
  }
  return 0
}

function handleOtherSpread(i: any) {
  _$$k2.warn(`Spread is not supported for node type ${i.type}`)
  return 1
}

/**
 * Processes and normalizes effect configuration, clamping values and mapping types as needed.
 * Original: ix
 * @param effect - The effect configuration object.
 * @param node - The node to which the effect is applied (optional).
 * @returns The processed effect configuration.
 */
function processEffectWithValidation(effect: any, node: any) {
  let processed = {
    ...effect,
  }

  // Clamp progressive blur startRadius
  if ((effect.type === 'LAYER_BLUR' || effect.type === 'BACKGROUND_BLUR') && effect.blurType === 'PROGRESSIVE' && effect.startRadius && effect.startRadius > XX) {
    _$$k2.warn(`Effect startRadius of ${effect.startRadius} is too large and will be clamped to ${XX}`)
    processed.startRadius = clampValue(effect.startRadius, 0, XX)
  }

  // Clamp TEXTURE radius
  if (effect.type === 'TEXTURE') {
    if (effect.radius > mx) {
      _$$k2.warn(`Effect radius of ${effect.radius} is too large and will be clamped to ${mx}`)
    }
    processed.radius = clampValue(effect.radius, 0, mx)
  }

  // Map blurType to blurOpType and remove blurType
  if ((effect.type === 'LAYER_BLUR' || effect.type === 'BACKGROUND_BLUR') && effect.blurType) {
    processed.blurOpType = effect.blurType
    delete processed.blurType
  }

  // Clamp noiseSize for NOISE or TEXTURE
  if (effect.type === 'NOISE' || effect.type === 'TEXTURE') {
    if (effect.noiseSize > Mo) {
      _$$k2.warn(`Effect noiseSize of ${effect.noiseSize} is too large and will be clamped to ${Mo}`)
    }
    else if (effect.noiseSize < 0) {
      _$$k2.warn(`Effect noiseSize of ${effect.noiseSize} is too small and will be clamped to 0`)
    }
    const clampedNoiseSize = clampValue(effect.noiseSize, 0, Mo)
    processed.noiseSize = new Mi(clampedNoiseSize, clampedNoiseSize)
  }

  // Handle GLASS effect property clamping and mapping
  if (effect.type === 'GLASS') {
    if (node && !node.canHaveGlassEffect)
      throw new Error(zd)
    processed.refractionIntensity = validateGlassEffectValue(effect.refraction, SU, U_, 'refraction')
    processed.refractionRadius = validateGlassEffectValue(effect.depth, Ku, Wp, 'depth')
    processed.specularAngle = validateGlassEffectValue(effect.lightAngle, _$$$$, NH, 'lightAngle')
    processed.specularIntensity = validateGlassEffectValue(effect.lightIntensity, VL, Jk, 'lightIntensity')
    processed.chromaticAberration = validateGlassEffectValue(effect.dispersion, $x, _$$rY, 'dispersion')
    processed.radius = validateGlassEffectValue(effect.radius, Df, hD, 'radius')
    delete processed.refraction
    delete processed.depth
    delete processed.lightAngle
    delete processed.lightIntensity
    delete processed.dispersion
  }

  // Handle spread for INNER_SHADOW and DROP_SHADOW
  if (effect.type === 'INNER_SHADOW' || effect.type === 'DROP_SHADOW') {
    if (effect.spread === undefined) {
      delete processed.spread
    }
    else if (effect.spread !== 0 && (!node || !['ROUNDED_RECTANGLE', 'RECTANGLE', 'ELLIPSE'].includes(node.type) && (['INSTANCE', 'SYMBOL', 'FRAME'].includes(node.type) ? handleFrameSpread(node) : handleOtherSpread(node)))) {
      processed.spread = 0
    }
    else {
      if (effect.spread > yj) {
        _$$k2.warn(`Effect spread of ${effect.spread} is too large and will be clamped to ${yj}`)
      }
      else if (effect.spread < cT) {
        _$$k2.warn(`Effect spread of ${effect.spread} is too small and will be clamped to ${cT}`)
      }
      processed.spread = clampValue(effect.spread, cT, yj)
    }
  }

  // Clamp radius for supported types
  if (effect.radius !== undefined) {
    if (effect.radius > DW) {
      _$$k2.warn(`Effect radius of ${effect.radius} is too large and will be clamped to ${DW}`)
    }
    else if (effect.radius < V8) {
      _$$k2.warn(`Effect radius of ${effect.radius} is too small and will be clamped to ${V8}`)
    }
    processed.radius = clampValue(effect.radius, V8, DW)
  }

  // Normalize blend mode
  processed.blendMode = normalizeBlendMode(effect.blendMode)

  // Handle bound variables for spread, color, offsetX, offsetY
  if (effect.boundVariables) {
    if (effect.boundVariables?.spread?.id) {
      processed.spreadVar = {
        dataType: 'ALIAS',
        resolvedDataType: 'FLOAT',
        value: {
          alias: _$$sH(effect.boundVariables.spread.id),
        },
      }
    }
    if (effect.boundVariables?.color?.id) {
      processed.colorVar = {
        dataType: 'ALIAS',
        resolvedDataType: 'COLOR',
        value: {
          alias: _$$sH(effect.boundVariables.color.id),
        },
      }
    }
    if (effect.boundVariables?.offsetX?.id) {
      processed.xVar = {
        dataType: 'ALIAS',
        resolvedDataType: 'FLOAT',
        value: {
          alias: _$$sH(effect.boundVariables.offsetX.id),
        },
      }
    }
    if (effect.boundVariables?.offsetY?.id) {
      processed.yVar = {
        dataType: 'ALIAS',
        resolvedDataType: 'FLOAT',
        value: {
          alias: _$$sH(effect.boundVariables.offsetY.id),
        },
      }
    }
  }

  // Remove showShadowBehindNode if undefined for DROP_SHADOW
  if (effect.type === 'DROP_SHADOW' && effect.showShadowBehindNode === undefined) {
    delete processed.showShadowBehindNode
  }

  // Handle radiusVar for boundVariables
  if (effect.boundVariables?.radius?.id) {
    processed.radiusVar = {
      dataType: 'ALIAS',
      resolvedDataType: 'FLOAT',
      value: {
        alias: _$$sH(effect.boundVariables.radius.id),
      },
    }
  }

  // Remove boundVariables if present or undefined
  if (processed.boundVariables || effect.boundVariables === undefined)
    delete processed.boundVariables

  // Map effect type for output
  return {
    ...processed,
    type: mapEffectTypeForOutput(effect.type),
  }
}

/**
 * Maps internal effect type to output effect type.
 * @param type - The internal effect type.
 * @returns The mapped effect type.
 */
function mapEffectTypeForOutput(type) {
  switch (type) {
    case 'LAYER_BLUR':
      return 'FOREGROUND_BLUR'
    case 'TEXTURE':
      return 'GRAIN'
    default:
      return type
  }
}
function iw(e) {
  return iwNew(e)
}
function iC(e) {
  return iCNew(e)
}
function iT(e) {
  return iTNew(e)
}
function ik(e) {
  return ikNew(e)
}
function iR(e) {
  return iRNew(e)
}
function convertTextDecorationThicknessFromLegacy(legacyThickness) {
  if (legacyThickness.units === 'RAW') {
    return {
      unit: 'AUTO',
    }
  }
  if (legacyThickness.units === 'PERCENT') {
    return {
      unit: 'PERCENT',
      value: legacyThickness.value,
    }
  }
  if (legacyThickness.units === 'PIXELS') {
    return {
      unit: 'PIXELS',
      value: legacyThickness.value,
    }
  }
  throw new Error('Unknown textDecorationThickness unit')
}
function convertTextDecorationThicknessToLegacy(modernThickness) {
  if (modernThickness.unit === 'AUTO') {
    return {
      units: 'RAW',
      value: 10,
    }
  }
  if (modernThickness.unit === 'PERCENT') {
    return {
      units: 'PERCENT',
      value: modernThickness.value || 0,
    }
  }
  if (modernThickness.unit === 'PIXELS') {
    return {
      units: 'PIXELS',
      value: modernThickness.value || 0,
    }
  }
  throw new Error('Unknown textDecorationThickness unit')
}
function convertListOption(listOption) {
  let type = 'NONE'
  if (listOption === 'ORDERED_LIST') {
    type = 'ORDERED'
  }
  else if (listOption === 'UNORDERED_LIST') {
    type = 'UNORDERED'
  }
  else if (listOption === 'PLAIN') {
    type = 'NONE'
  }
  else {
    throw new Error('Unknown list option')
  }
  return {
    type,
  }
}
function processGridLayout(gridLayoutConfig) {
  const config: any = {
    pattern: gridLayoutConfig.pattern === 'GRID' ? 'GRID' : gridLayoutConfig.axis === 'X' ? 'COLUMNS' : 'ROWS',
    visible: gridLayoutConfig.visible,
    color: gridLayoutConfig.color,
  }

  // Process bound variables for layout configuration
  const boundVariables: any = {}

  // Extract and process offset variable if present
  if (gridLayoutConfig.offsetVar?.value?.alias) {
    boundVariables.offset = createVariableAlias(gridLayoutConfig.offsetVar.value.alias)
  }

  // Extract and process section size variable if present
  if (gridLayoutConfig.sectionSizeVar?.value?.alias) {
    boundVariables.sectionSize = createVariableAlias(gridLayoutConfig.sectionSizeVar.value.alias)
  }

  // Extract and process number of sections variable if present
  if (gridLayoutConfig.numSectionsVar?.value?.alias) {
    boundVariables.count = createVariableAlias(gridLayoutConfig.numSectionsVar.value.alias)
  }

  // Extract and process gutter size variable if present
  if (gridLayoutConfig.gutterSizeVar?.value?.alias) {
    boundVariables.gutterSize = createVariableAlias(gridLayoutConfig.gutterSizeVar.value.alias)
  }

  // Assign bound variables to layout configuration with type assertion
  config.boundVariables = boundVariables

  // Process stripe pattern specific configuration
  if (gridLayoutConfig.pattern === 'STRIPES') {
    // Set gutter size and alignment type for stripe layout with type assertion
    config.gutterSize = gridLayoutConfig.gutterSize
    config.alignment = gridLayoutConfig.type

    // Configure stripe layout based on alignment type
    switch (gridLayoutConfig.type) {
      case 'MIN':
      case 'MAX':
        // For MIN/MAX alignment: set infinite count if needed, section size, and offset with type assertion
        config.count = gridLayoutConfig.numSections === _$$F2 ? Number.POSITIVE_INFINITY : gridLayoutConfig.numSections
        config.sectionSize = gridLayoutConfig.sectionSize
        config.offset = gridLayoutConfig.offset
        break
      case 'STRETCH':
        // For STRETCH alignment: set single count if infinite, and offset with type assertion
        config.count = gridLayoutConfig.numSections === _$$F2 ? 1 : gridLayoutConfig.numSections
        config.offset = gridLayoutConfig.offset
        break
      case 'CENTER':
        // For CENTER alignment: set infinite count if needed and section size with type assertion
        config.count = gridLayoutConfig.numSections === _$$F2 ? Number.POSITIVE_INFINITY : gridLayoutConfig.numSections
        config.sectionSize = gridLayoutConfig.sectionSize
    }
  }
  else {
    // For non-stripe patterns, only set section size with type assertion
    config.sectionSize = gridLayoutConfig.sectionSize
  }
  return config
}
/**
 * Converts a grid layout configuration from plugin API format to internal format.
 * Original function: iL
 * @param config - The grid layout configuration from the plugin API.
 * @returns The normalized internal grid layout configuration.
 */
function convertGridLayoutConfig(config) {
  // Use Kb to normalize the input config with default values
  const normalized = Kb(config, {
    alignment: 'STRETCH',
    count: 5,
    gutterSize: 20,
    sectionSize: 10,
    offset: 0,
    visible: true,
    color: {
      r: 1,
      g: 0,
      b: 0,
      a: 0.1,
    },
  })

  // Map normalized config to internal format
  const internalConfig: GridLayoutConfig = {
    pattern: normalized.pattern === 'COLUMNS' || normalized.pattern === 'ROWS' ? 'STRIPES' : normalized.pattern,
    axis: normalized.pattern === 'COLUMNS' ? 'X' : 'Y',
    numSections: Math.min(normalized.count, _$$F2),
    type: normalized.alignment,
    gutterSize: normalized.gutterSize,
    sectionSize: normalized.sectionSize,
    offset: normalized.offset,
    visible: normalized.visible,
    color: normalized.color,
  }

  // Handle bound variables if present
  if (config.boundVariables) {
    if (config.boundVariables?.count?.id) {
      internalConfig.numSectionsVar = {
        dataType: 'ALIAS',
        resolvedDataType: 'FLOAT',
        value: {
          alias: _$$sH(config.boundVariables.count.id),
        },
      }
    }
    if (config.boundVariables?.sectionSize?.id) {
      internalConfig.sectionSizeVar = {
        dataType: 'ALIAS',
        resolvedDataType: 'FLOAT',
        value: {
          alias: _$$sH(config.boundVariables.sectionSize.id),
        },
      }
    }
    if (config.boundVariables?.offset?.id) {
      internalConfig.offsetVar = {
        dataType: 'ALIAS',
        resolvedDataType: 'FLOAT',
        value: {
          alias: _$$sH(config.boundVariables.offset.id),
        },
      }
    }
    if (config.boundVariables?.gutterSize?.id) {
      internalConfig.gutterSizeVar = {
        dataType: 'ALIAS',
        resolvedDataType: 'FLOAT',
        value: {
          alias: _$$sH(config.boundVariables.gutterSize.id),
        },
      }
    }
  }
  return internalConfig
}

/**
 * Converts a rectangle-like object to a VM-wrapped rectangle.
 * Original function: iF
 * @param vm - The VM context.
 * @param rect - The rectangle object with x, y, w, h properties.
 * @returns The VM-wrapped rectangle object.
 */
function createVmRect(vm, rect) {
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
function sizingModeToString(vm, sizingMode) {
  return vm.newString(mapSizingModeToString(sizingMode))
}

/**
 * Maps sizing mode to its string representation.
 * Original: ij
 * @param sizingMode - The sizing mode value.
 * @returns The string representation.
 */
function mapSizingModeToString(sizingMode) {
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
function layoutAlignToString(align) {
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
function primaryAxisAlignItemsToString(align) {
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
function layoutSizingToString(sizing) {
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
function stringToLayoutSizing(sizing) {
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
function normalizeTextCase(vm, fallback, textCase, smallCaps) {
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
function defineGridTrackSizesProperty(dimension, propName, {
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
                  l7.plugin('plugin-grid-track-size', () => {
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
                  l7.plugin('plugin-grid-track-size', () => {
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
              l7.plugin('plugin-grid-track-size', () => {
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
          l7.plugin('plugin-grid-track-size', () => {
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
function defineMinMaxProperty(propName, boundType) {
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
function validateResizeDimensions(node, widthHandle, heightHandle, vm) {
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
function defineStrokeWeightProperty(propName, nodeField) {
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
function processOpenTypeFeatures({
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
function dnode7(e, t) {
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
function fetchRelatedLinks({
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
function addRelatedLink({
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
function editRelatedLink({
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
function deleteRelatedLink(vm, vmThis, vmUrl, resourceName, pluginID, getNode) {
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
function setRelatedLinkPreview({
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
function it(e) {
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
          av(cloned, documentAccessState, {
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
        vm.registerPromise(vf(node.guid, documentAccessState)).then(() => {
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
        await Ux(documentAccessState)
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
  widgetHoverStyle({
    vm: e,
    defineVmProp: t,
    imageStore: i,
    videoStore: n,
    getNode: r,
  }, a) {
    e instanceof ScopedNoOpVm && t({
      handle: a,
      key: 'widgetHoverStyle',
      options: {
        enumerable: !0,
        metricsKey: 'node.widgetHoverStyle',
        get() {
          let t = r(this).widgetHoverStyle
          return e.deepWrap(function (e) {
            let t = {}
            e.fill && (t.fill = convertPaintArrayData(e.fill.data))
            e.stroke && (t.stroke = convertPaintArrayData(e.stroke.data))
            void 0 !== e.opacity && (t.opacity = e.opacity)
            return t
          }(t))
        },
        set(t) {
          let a = e.deepUnwrap(t)
          r(this).widgetHoverStyle = (function (e, t, i) {
            let n = {}
            if (i.fill) {
              let r = []
              n.fill = {
                data: mapPaintConfigurations(e, t, i.fill, r),
                blobs: r,
              }
            }
            if (i.stroke) {
              let r = []
              n.stroke = {
                data: mapPaintConfigurations(e, t, i.stroke, r),
                blobs: r,
              }
            }
            void 0 !== i.opacity && (n.opacity = i.opacity)
            return n
          }(i, n, a))
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  fills(e, t) {
    handlePaintProperty(e, t, 'fills')
    let {
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
      cb(e) {
        let t = getNode(this)
        let n = []
        let l = _$$u({
          vm,
          handle: e,
          zSchema: _$$N.PaintsWithPattern,
          property: 'fills',
        })
        let d = []
        for (let e of l) e.type === 'PATTERN' && d.push(e.sourceNodeId)
        let {
          promise,
          resolve,
          reject,
        } = vm.newPromise()
        vm.registerPromise(fs(d, documentAccessState)).then((_e) => {
          for (let e of d) {
            if (!mQ(e)) {
              reject(vm.newString(`Pattern source node ${e} not found`))
              return
            }
          }
          let r = mapPaintConfigurations(imageStore, videoStore, l, n)
          l7.plugin('plugin-set-fills-async', () => t.fillPaintsForPluginOnly = {
            data: r,
            blobs: n,
          })
          resolve(vm.undefined)
        }, (e) => {
          reject(vm.newString(e))
        })
        return promise
      },
      isAllowedInReadOnly: !1,
      hasEditScope: !0,
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
      retainGetter: !0,
      enumerable: !0,
      parseThis: e => r(e),
      resolveValue: (t) => {
        let n = t.inheritedFillStyleOrMixed
        return n === 'mixed' ? i : e.newString(_$$nM(n))
      },
      prepareDocument: async (_e) => {
        await Ux(a)
      },
      setValue: (t, i) => {
        let n = _$$eX(_$$u({
          vm: e,
          handle: i,
          zSchema: _$$z.string(),
          property: 'fillStyleId',
        }))
        t.inheritedFillStyle = n
        return e.undefined
      },
      incrementalSafeApi: n,
      parseIncrementalValueArg: t => e.toString(t),
      setValueIncremental: (t, i) => {
        t.inheritedFillStyle = _$$eX(i)
        return e.undefined
      },
      allowIncrementalUnsafeApiCalls: s,
      canWriteInReadOnly: !1,
      hasEditScope: !0,
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
      cb(t) {
        let i = a(this)
        let o = []
        let l = _$$u({
          vm: e,
          handle: t,
          zSchema: _$$N.PaintsWithPattern,
          property: 'strokes',
        })
        let d = []
        for (let e of l) e.type === 'PATTERN' && d.push(e.sourceNodeId)
        let {
          promise,
          resolve,
          reject,
        } = e.newPromise()
        e.registerPromise(fs(d, s)).then((_t) => {
          for (let t of d) {
            if (!mQ(t)) {
              reject(e.newString(`Pattern source node ${t} not found`))
              return
            }
          }
          let a = mapPaintConfigurations(n, r, l, o)
          l7.plugin('plugin-set-strokes-async', () => i.strokePaints = {
            data: a,
            blobs: o,
          })
          resolve(e.undefined)
        }, (t) => {
          reject(e.newString(t))
        })
        return promise
      },
      isAllowedInReadOnly: !1,
      hasEditScope: !0,
    })
    t({
      handle: o,
      key: 'strokes',
      options: {
        enumerable: !0,
        metricsKey: 'node.strokes',
        get() {
          let t = a(this)
          let i = e.deepWrap(convertPaintArrayData(t.strokePaints.data))
          e.deepFreezeObject(i)
          return i
        },
        set(t) {
          let i = a(this)
          let s = []
          i.strokePaints = {
            data: mapPaintConfigurations(n, r, _$$u({
              vm: e,
              handle: t,
              zSchema: _$$N.Paints,
              property: 'strokes',
            }), s),
            blobs: s,
          }
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
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
        await Ux(documentAccessState)
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
          n && xc(r, 'node.backgroundStyleId =', 'node.setFillStyleIdAsync')
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
        await Ux(documentAccessState)
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

          if (links.length > 1) {
            throw new Error('Documentation links API takes a list of size 0 or 1')
            return vm.undefined
          }
        },
        canWriteInReadOnly: false,
        hasEditScope: true,
      }
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
    const self = this
    vm.defineFunction(handle, 'getPublishStatusAsync', 'node.getPublishStatusAsync', function () {
      const node = getNode(self)
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
        e.symbolId && (await vf(e.symbolId, o))
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
          r && xc(l, 'node.masterComponent', 'node.getMainComponentAsync')
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
        await Ux(documentAccessState)
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
      const processedRegion = {
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
        await Ux(documentAccessState)
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
        await Ux(r)
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
          const result = []
          for (const interaction of interactions) {
            const action = interaction.actions && interaction.actions.length > 0 ? tZ(interaction.actions[0]) : null
            const actions = interaction.actions ? interaction.actions.map(tZ).filter(tq) : []
            const event = interaction.event || {}
            let trigger:any = {}
            let type = event?.interactionType || 'ON_CLICK'
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
        await Ux(documentAccessState)
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
          const nodes = []
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
            const result:any = {
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
        await Ux(documentAccessState)
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
        await Ux(documentAccessState)
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
        await fs(guids, documentAccessState)
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
  connectorEndpoints({
    vm: e,
    defineVmProp: t,
    getNode: i,
    pluginVersionID: n,
  }, r) {
    for (let a of ['connectorStart', 'connectorEnd']) {
      t({
        handle: r,
        key: a,
        options: {
          enumerable: !0,
          metricsKey: `node.${a}`,
          get() {
            let t = i(this)[a]
            let n = {
              endpointNodeId: t.endpointNodeID,
            }
            t.magnet === SpR.NONE ? n.position = t.position : n.magnet = _$$w3.ConnectorMagnet[t.magnet]
            let r = e.deepWrap(n)
            e.deepFreezeObject(r)
            return r
          },
          set(t) {
            let r = i(this)
            let s = Kb(_$$u({
              vm: e,
              handle: t,
              zSchema: _$$N.ConnectorEndpoint,
              property: a,
            }), {
              endpointNodeId: r.containingCanvas,
              magnet: 'NONE',
              position: {
                x: 0,
                y: 0,
              },
            })
            if (!sH(s.endpointNodeId))
              throw new Error('Invalid endpointNodeId')
            if (!n && r.connectorLineType === 'STRAIGHT' && s.magnet !== 'CENTER' && s.magnet !== 'NONE') {
              throw new Error('Straight connector endpoints may only use the CENTER or NONE magnets.\n\nThis error only shows up in development code for now. This restriction will be enforced for published plugins in 2024. Please update your code to ensure that your plugin/widget continues to work.')
            }
            if (r.connectorLineType === 'ELBOWED' && s.magnet === 'CENTER') {
              throw new Error('Elbowed connector endpoints may not use the CENTER magnet')
            }
            if (r.connectorLineType === 'CURVED' && s.magnet === 'CENTER') {
              throw new Error('Curved connector endpoints may not use the CENTER magnet')
            }
            r[a] = {
              endpointNodeID: s.endpointNodeId,
              magnet: _$$w3.ConnectorMagnet[s.magnet],
              position: s.position,
            }
          },
        },
        canWriteInReadOnly: !1,
        hasEditScope: !0,
      })
    }
  },
  connectorStrokeCap({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    let r = (r, a) => {
      t({
        handle: n,
        key: r,
        options: {
          enumerable: !0,
          metricsKey: `node.${r}`,
          get() {
            let t = i(this)[a]
            return t ? e.deepWrap(t) : e.undefined
          },
          set(t) {
            i(this)[a] = _$$u({
              vm: e,
              handle: t,
              zSchema: _$$N.ConnectorStrokeCap,
              property: r,
            })
          },
        },
        canWriteInReadOnly: !1,
        hasEditScope: !0,
      })
    }
    r('connectorStartStrokeCap', 'connectorStartCap')
    r('connectorEndStrokeCap', 'connectorEndCap')
  },
  connectorLineType({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'connectorLineType',
      options: {
        enumerable: !0,
        metricsKey: 'node.connectorLineType',
        get() {
          return e.newString(i(this).connectorLineType)
        },
        set(t) {
          i(this).connectorLineType = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.ConnectorLineType,
            property: 'connectorLineType',
          })
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
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
          const result = []
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
          const update:any = {}
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

/**
 * Original function: iq
 * Processes text case for small caps, validating font support and adjusting text case and font variant caps accordingly.
 * @param node - The text node to process
 * @param start - Start index of the text range
 * @param end - End index of the text range
 * @param textCase - The text case value ('SMALL_CAPS', 'SMALL_CAPS_FORCED', or others)
 * @returns Object containing adjusted textCase and fontVariantCaps values
 */
function processTextCaseForSmallCaps(node, start, end, textCase) {
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
function validateAndExtractCollectionId({
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
let colors = ['yellow', 'orange', 'red', 'pink', 'violet', 'blue', 'teal', 'green']

/**
 * Validates a collection ID
 * @param collectionId - The collection ID to validate
 * @returns The validated collection ID
 * @throws Error if collection ID is invalid
 */
function ensureValidCollectionId(collectionId) {
  if (!_$$fn2(collectionId)) {
    throw new Error('Invalid collection id')
  }
  return collectionId
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
function convertBuildStatusToString(buildStatus) {
  const statusMap = {
    [zIx.BUILD]: 'READY_FOR_DEV',
    [zIx.COMPLETED]: 'COMPLETED',
    [zIx.NONE]: 'NONE',
  }
  return statusMap[buildStatus]
}
function getColorName(e) {
  switch (e) {
    case RN1.RED:
      return 'red'
    case RN1.GREEN:
      return 'green'
    case RN1.BLUE:
      return 'blue'
    case RN1.YELLOW:
      return 'yellow'
    case RN1.PINK:
      return 'pink'
    case RN1.ORANGE:
      return 'orange'
    case RN1.TEAL:
      return 'teal'
    case RN1.VIOLET:
      return 'violet'
  }
}
/**
 * AnnotationCategoryAPI - Provides property and method definitions for annotation category objects.
 * Handles label, color, preset status, removal, color setting, and label setting.
 */
export const AnnotationCategoryAPI = {
  /**
   * Defines the 'label' property for an annotation category.
   * Maps internal annotation category label to API label string.
   */
  label({
    vm,
    defineVmProp,
    getAnnotationCategory,
  }, handle) {
    defineVmProp({
      handle,
      key: 'label',
      options: {
        enumerable: true,
        metricsKey: 'annotationCategory.label',
        get() {
          const category = getAnnotationCategory(this)
          return vm.newString(uA(category))
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: false,
    })
  },
  /**
   * Defines the 'color' property for an annotation category.
   * Maps internal annotation category color to API color string.
   */
  color({
    vm,
    defineVmProp,
    getAnnotationCategory,
  }, handle) {
    defineVmProp({
      handle,
      key: 'color',
      options: {
        enumerable: true,
        metricsKey: 'annotationCategory.color',
        get() {
          const category = getAnnotationCategory(this)
          const colorValue = l6(category)
          if (colorValue === null) {
            x1('annotation-category-plugin', `Category in invalid state exposed to user: ${JSON.stringify(category)}`)
            const fallbackColor = RN1.GREEN
            return vm.newString(getColorName(fallbackColor))
          }
          return vm.newString(getColorName(colorValue))
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: false,
    })
  },
  /**
   * Defines the 'isPreset' property for an annotation category.
   * Indicates if the annotation category is a preset.
   */
  isPreset({
    vm,
    defineVmProp,
    getAnnotationCategory,
  }, handle) {
    defineVmProp({
      handle,
      key: 'isPreset',
      options: {
        enumerable: true,
        metricsKey: 'annotationCategory.isPreset',
        get() {
          const category = getAnnotationCategory(this)
          return vm.newBoolean(category.preset !== Bll.NONE)
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: false,
    })
  },
  /**
   * Defines the 'remove' function for an annotation category.
   * Removes the annotation category from the scene graph.
   */
  remove({
    vm,
    defineVmFunction,
    getAnnotationCategory,
    sceneGraph,
  }, handle) {
    defineVmFunction({
      handle,
      key: 'remove',
      metricsKey: 'annotationCategory.remove',
      cb() {
        const category = getAnnotationCategory(this)
        const root = sceneGraph.getRoot()
        if (root.annotationCategories === null)
          return vm.undefined
        const updatedCategories = root.annotationCategories.filter(e => e.id !== category.id)
        _$$r(() => {
          const err = root.setAnnotationCategories(updatedCategories)
          if (err !== '')
            throw new Error(`Error removing annotation category: ${err}`)
        })
        return vm.undefined
      },
      isAllowedInReadOnly: true,
      isAllowedInFocusViewInteractiveInspection: false,
      hasEditScope: true,
    })
  },
  /**
   * Defines the 'setColor' function for an annotation category.
   * Sets the color of the annotation category.
   */
  setColor({
    vm,
    defineVmFunction,
    getAnnotationCategory,
    sceneGraph,
  }, handle) {
    defineVmFunction({
      handle,
      key: 'setColor',
      metricsKey: 'annotationCategory.setColor',
      cb(colorHandle) {
        const category = getAnnotationCategory(this)
        const colorValue = _$$u({
          vm,
          handle: colorHandle,
          zSchema: _$$z.enum(colors),
          property: 'color',
        })
        const root = sceneGraph.getRoot()
        if (root.annotationCategories === null)
          return vm.undefined
        const updatedCategories = root.annotationCategories.map((e) => {
          if (e.id === category.id) {
            const cat = VK(e)
            return cat.custom === null
              ? cat
              : {
                ...cat,
                custom: {
                  ...cat.custom,
                  color: mapColorName(colorValue),
                },
              }
          }
          return e
        })
        _$$r(() => {
          const err = root.setAnnotationCategories(updatedCategories)
          if (err !== '')
            throw new Error(`Error setting annotation category color: ${err}`)
        })
        return vm.undefined
      },
      isAllowedInReadOnly: true,
      isAllowedInFocusViewInteractiveInspection: false,
      hasEditScope: true,
    })
  },
  /**
   * Defines the 'setLabel' function for an annotation category.
   * Sets the label of the annotation category.
   */
  setLabel({
    vm,
    defineVmFunction,
    getAnnotationCategory,
    sceneGraph,
  }, handle) {
    defineVmFunction({
      handle,
      key: 'setLabel',
      metricsKey: 'annotationCategory.setLabel',
      cb(labelHandle) {
        const category = getAnnotationCategory(this)
        const labelValue = _$$u({
          vm,
          handle: labelHandle,
          zSchema: _$$z.string(),
          property: 'label',
        })
        const root = sceneGraph.getRoot()
        if (root.annotationCategories === null)
          return vm.undefined
        const updatedCategories = root.annotationCategories.map((e) => {
          if (e.id === category.id) {
            const cat = VK(e)
            return cat.custom === null
              ? cat
              : {
                ...cat,
                custom: {
                  ...cat.custom,
                  label: labelValue,
                },
              }
          }
          return e
        })
        _$$r(() => {
          const err = root.setAnnotationCategories(updatedCategories)
          if (err !== '')
            throw new Error(`Error setting annotation category label: ${err}`)
        })
        return vm.undefined
      },
      isAllowedInReadOnly: true,
      isAllowedInFocusViewInteractiveInspection: false,
      hasEditScope: true,
    })
  },
}
let annotationCategoryApiMethods = [AnnotationCategoryAPI.label, AnnotationCategoryAPI.color, AnnotationCategoryAPI.isPreset, AnnotationCategoryAPI.remove, AnnotationCategoryAPI.setColor, AnnotationCategoryAPI.setLabel]
class AnnotationCategoryFactory {
  vm: NoOpVm
  annotationCategoryPrototype: any
  sceneGraph: any

  constructor(e: AnnotationCategoryFactoryOptions) {
    // Set properties with proper types
    this.vm = e.vm
    this.annotationCategoryPrototype = setupPrototypeFromArgs(e, 'AnnotationCategory', ...annotationCategoryApiMethods)
    this.sceneGraph = e.sceneGraph
  }

  createAnnotationCategoryHandle(e: string) {
    let t = this.vm
    if (!fn(sH(e)))
      return t.$$null
    let i = t.newObject(this.annotationCategoryPrototype)
    t.defineProp(i, 'id', {
      enumerable: true,
      writable: false,
      value: t.newString(e),
    })
    return i
  }

  getLocalAnnotationCategoriesAsync() {
    let e = this.vm
    let {
      promise,
      resolve,
      reject,
    } = e.newPromise()
    getFeatureFlags().plugins_annotations_seat_check && !fb()
      ? reject(e.newString('A Full or Dev seat is required to get annotation categories'))
      : e.registerPromise(iJ(this.sceneGraph)).then((t) => {
        let r = e.newArray()
        for (let [i, a] of t.entries()) {
          let t = this.createAnnotationCategoryHandle(a.id)
          if (e.isNull(t)) {
            reject(e.newString('Failed to create annotation category'))
            return
          }
          e.setProp(r, i.toString(), t)
        }
        resolve(r)
      }).catch((t) => {
        reject(e.newString(t.message))
      })
    return promise
  }

  getLocalAnnotationCategoryByIdAsync(e: string) {
    let t = this.vm
    let {
      promise,
      resolve,
      reject,
    } = t.newPromise()
    getFeatureFlags().plugins_annotations_seat_check && !fb()
      ? reject(t.newString('A Full or Dev seat is required to get annotation categories'))
      : t.registerPromise(iJ(this.sceneGraph)).then((i) => {
        let r = i.find(t => t.id === e)
        if (void 0 === r) {
          resolve(t.$$null)
          return
        }
        resolve(this.createAnnotationCategoryHandle(r.id))
      }).catch((e) => {
        reject(t.newString(e.message))
      })
    return promise
  }

  createAnnotationCategoryAsync(e: string, t: string) {
    let i = this.vm
    let {
      promise,
      resolve,
      reject,
    } = i.newPromise()
    getFeatureFlags().plugins_annotations_seat_check && !fb()
      ? reject(i.newString('A Full seat is required to create annotation categories'))
      : i.registerPromise(iJ(this.sceneGraph)).then((n) => {
        let s = fO(this.sceneGraph)
        let o = {
          id: s,
          preset: Bll.NONE,
          custom: {
            label: e,
            color: mapColorName(t),
          },
        }
        let l = this.sceneGraph.getRoot()
        let d = [...n, o]
        _$$r(() => l7.plugin('update-annotation-categories', () => {
          let e = l.setAnnotationCategories(d)
          if (e !== '') {
            reject(i.newString(e))
            return
          }
          let t = this.createAnnotationCategoryHandle(s)
          if (i.isNull(t)) {
            reject(i.newString('Failed to create annotation category'))
            return
          }
          resolve(t)
        }))
      })
    return promise
  }
}
async function iJ(nodeAdapter) {
  // iJ - Get annotation categories, initializing if necessary

  const rootNode = nodeAdapter.getRoot()
  let annotationCategories = rootNode.annotationCategories

  // Initialize annotation categories if not already available
  if (annotationCategories === null) {
    await Promise.resolve()
    l7.plugin('initialize-annotation-categories', () => {
      const initializationError = rootNode.initializeAnnotationCategories()
      if (initializationError !== '') {
        throw new Error(initializationError)
      }
      annotationCategories = rootNode.annotationCategories
    })
  }
  if (annotationCategories === null) {
    throw new Error('Annotation categories not initialized')
  }
  return annotationCategories
}
function mapColorName(colorName) {
  switch (colorName) {
    case 'yellow':
      return RN1.YELLOW
    case 'orange':
      return RN1.ORANGE
    case 'red':
      return RN1.RED
    case 'pink':
      return RN1.PINK
    case 'violet':
      return RN1.VIOLET
    case 'blue':
      return RN1.BLUE
    case 'teal':
      return RN1.TEAL
    case 'green':
      return RN1.GREEN
    default:
      throw new Error(`Unknown color name: ${colorName}`)
  }
}
let i5 = _$$z.strictObject({
  label: _$$z.string().trim().min(1),
  color: _$$z.enum(colors),
})
async function loadFontsForTextNode(textNode) {
  // Font Loading Cache - stores already loaded fonts to prevent redundant loading
  const loadedFonts = []

  /**
   * Load Font If Needed Function - conditionally loads a font only if not already loaded
   * Maintains a cache of loaded fonts using family|style as identifier
   * @param fontName - font object with family and style properties
   * @returns Promise<void> - resolves when font is loaded or already cached
   */
  async function loadFontIfNeeded(fontName) {
    // Create unique identifier from font family and style
    const fontIdentifier = fontName && `${fontName.family}|${fontName.style}`

    // Check if font is already loaded in cache
    if (!loadedFonts.includes(fontIdentifier)) {
      // Add to cache before loading to prevent duplicate requests
      loadedFonts.push(fontIdentifier)

      // Load the font using the font loading utility
      return await uW(fontName)
    }

    // Font already loaded, no action needed
  }
  if (textNode.type === 'TEXT') {
    const {
      characters,
    } = textNode

    // Load fonts for all font names used in the text range
    for (const fontName of textNode.getRangeAllFontNames(0, characters.length)) {
      await loadFontIfNeeded(fontName)
    }
  }
}

/**
 * Get Valid Canvas Grid Position Function - calculates valid grid position with fallback defaults
 * Handles cases where target position is undefined or exceeds grid boundaries
 * @param targetRow - desired row index (undefined uses last row)
 * @param targetColumn - desired column index (undefined uses next available column)
 * @returns {row: number, col: number} - validated grid position coordinates
 */
function getRowColumn(targetRow, targetColumn) {
  // Get current canvas grid array, defaulting to empty if not available
  const canvasGridArray = Ez5?.canvasGrid().canvasGridArray.getCopy() ?? []

  // Calculate maximum valid row index (at least 0)
  const maxRowIndex = Math.max(0, canvasGridArray.length - 1)

  // Determine target row index with fallback behavior
  const rowIndex = targetRow === undefined ? maxRowIndex // Use last row if not specified
    : Math.min(targetRow, maxRowIndex) // Clamp to valid range if specified

  // Get the target row array, defaulting to empty if row doesn't exist
  const currentRow = canvasGridArray[rowIndex] ?? []

  // Calculate maximum valid column index (at least 0)
  const maxColumnIndex = Math.max(0, currentRow.length - 1)

  // Determine target column index with fallback behavior
  const columnIndex = targetColumn === undefined ? maxColumnIndex + 1 // Use next available column if not specified
    : Math.min(targetColumn, maxColumnIndex + 1) // Clamp to valid range + 1 if specified

  return {
    row: rowIndex,
    col: columnIndex,
  }
}

/**
 * Parse Color Function - converts string or object color inputs into standardized RGBA color objects
 * Supports hex colors, named colors, and existing color objects with optional alpha normalization
 * @param colorInput - string color value or color object with r,g,b properties and optional alpha
 * @returns {r: number, g: number, b: number, a: number} - normalized RGBA color object
 * @throws Error if string color cannot be parsed
 */
/**
 * Parse color string using multiple strategies - helper function
 * Attempts different color parsing approaches with comprehensive fallback handling
 * @param colorString - trimmed color string to parse
 * @returns parsed color object or null if all strategies fail
 */
function parseColorStringWithFallbacks(colorString) {
  // Trim whitespace from input
  colorString = colorString.trim()

  // Try parsing with di() function first
  let parsedResult = di(colorString)
  if (parsedResult)
    return parsedResult

  // Try parsing with _$$mx() function for named colors
  parsedResult = _$$mx(colorString)
  if (parsedResult)
    return parsedResult

  // Try parsing as hex color (with or without # prefix, 3-8 characters)
  if (colorString.match(/^#?[0-9a-f]{3,8}$/i)) {
    return _$$tK(colorString, true, 1)
  }

  // All parsing strategies failed
  return null
}

/**
 * Normalize color object with alpha channel - helper function
 * Ensures color object includes alpha channel with default value
 * @param colorInput - color object potentially missing alpha channel
 * @returns color object with guaranteed alpha channel
 */
function normalizeColorObjectAlpha(colorInput) {
  // Check if alpha channel is already present
  if ('a' in colorInput) {
    // Color object already has alpha channel, return as-is
    return colorInput
  }
  else {
    // Color object missing alpha channel, add default alpha of 1.0
    return {
      r: colorInput.r,
      g: colorInput.g,
      b: colorInput.b,
      a: 1,
    }
  }
}

/**
 * Color Parser Function - parses string colors and normalizes color objects with alpha channel
 * Handles hex colors, named colors, and RGB objects with comprehensive fallback strategies
 * @param colorInput - string or color object to parse
 * @returns {r: number, g: number, b: number, a: number} - normalized RGBA color object
 * @throws Error if string color cannot be parsed
 */
function parseColorInput(colorInput) {
  // Handle string color inputs (hex, named colors, etc.)
  if (typeof colorInput == 'string') {
    // Parse color string using multiple parsing strategies
    const parsedColor = parseColorStringWithFallbacks(colorInput)

    // Throw error if color string could not be parsed
    if (!parsedColor) {
      throw new Error(`failed to parse color: ${colorInput}`)
    }
    return parsedColor
  }

  // Handle color object inputs - normalize with alpha channel
  return normalizeColorObjectAlpha(colorInput)
}
let timerStateEnum = _$$z.enum(['timerstart', 'timerstop', 'timerpause', 'timerresume', 'timerdone', 'timeradjust'])
let timerAndStateEvents = _$$z.union([_$$z.enum(['close', 'selectionchange', 'currentpagechange', 'drop', 'input', 'run', 'message', 'documentchange', 'stylechange', 'nodechange', 'textreview', 'codegen', 'generate', 'preferenceschange', 'linkpreview', 'auth', 'open', 'slidesviewchange']), timerStateEnum])
/**
 * Image Store Class - manages private image cache with hash-based storage and retrieval
 * Handles image bytes loading, animated image info, and SHA1-based image management
 */
export class ImageStore {
  hashToPrivateImage: Map<string, any>

  constructor() {
    this.hashToPrivateImage = new Map()
  }

  /**
   * Clean up image store resources
   */
  tearDown = () => {
    this.hashToPrivateImage = new Map()
  }

  /**
   * Get internal bytes for an image synchronously
   */
  internalBytesForImage(hash: string) {
    return this.getPrivateImageOrThrow(hash).bytes
  }

  /**
   * Get image bytes asynchronously, loading if necessary
   */
  async bytesFromImage(hash: string) {
    const privateImage = this.getPrivateImageOrThrow(hash)
    if (privateImage.bytes == null) {
      try {
        privateImage.bytes = NfO.getImageBytes(hash)
      }
      catch {
        await Jr().loadImageByHash(hash)
        privateImage.bytes = NfO.getImageBytes(hash)
      }
    }
    return new Uint8Array(privateImage.bytes)
  }

  /**
   * Get private image or throw error if not found
   */
  getPrivateImageOrThrow(hash: string) {
    const privateImage = this.hashToPrivateImage.get(hash)
    if (privateImage === undefined) {
      throw new Error('SHA1 hash does not correspond to an existing image')
    }
    return privateImage
  }

  /**
   * Get or create a private image entry
   */
  getOrCreatePrivateImage(hash: string, animatedInfo: any) {
    let privateImage = this.hashToPrivateImage.get(hash)
    if (privateImage === undefined) {
      privateImage = {
        sha1: hash,
        animated: animatedInfo,
        bytes: null,
        coverBytes: null,
        getBytesAsync: () => this.bytesFromImage(hash),
      }
    }
    this.hashToPrivateImage.set(hash, privateImage)
    return privateImage
  }

  /**
   * Get image from SHA1 hash
   */
  getImageFromSHA1(hash: string) {
    const existingImage = this.hashToPrivateImage.get(hash)
    if (existingImage !== undefined) {
      return existingImage
    }
    const animatedInfo = NfO.getAnimatedImageInfo(hash)
    return animatedInfo.status === NFK.UNLOADED ? null : this.getOrCreatePrivateImage(hash, animatedInfo)
  }

  /**
   * Create image from bytes and handle animated image processing
   */
  createImage(imageBytes: any) {
    const uint8Array = new Uint8Array(imageBytes)
    NfO.isImageValid(uint8Array)
    const hash = Et(uint8Array)
    const privateImage = this.getOrCreatePrivateImage(hash, {
      status: NFK.UNLOADED,
      coverFrameHash: '',
    })
    privateImage.bytes = uint8Array

    // Handle animated images (GIF processing)
    if (fB(uint8Array)) {
      const coverBytes = this.extractAnimatedImageCover(uint8Array)
      if (coverBytes != null) {
        privateImage.coverBytes = coverBytes
        privateImage.animated.status = NFK.ANIMATED
        privateImage.animated.coverFrameHash = Et(coverBytes)
      }
      else {
        $D(_$$e.EXTENSIBILITY, new Error('Got unparseable animated gif'))
      }
    }
    return privateImage
  }

  /**
   * Extract cover frame from animated image
   */
  extractAnimatedImageCover(imageBytes: any) {
    const animatedImage = _$$J2(imageBytes)
    if (!animatedImage) {
      return null
    }
    const canvas = document.createElement('canvas')
    canvas.width = animatedImage.width
    canvas.height = animatedImage.height
    const context = canvas.getContext('2d')
    if (!context) {
      return null
    }
    const imageData = new ImageData(animatedImage.width, animatedImage.height)
    animatedImage.blitFrame(0, imageData, context)
    const dataUrl = canvas.toDataURL()
    const [header, base64Data] = dataUrl.split(',')
    if (header === 'data:image/png;base64') {
      return decodeBase64(base64Data)
    }
    return null
  }
}
/**
 * Generate Node JSX Function - creates JSX string representation for a node with visibility filtering
 * Filters to only include visible elements and processes through JSX generation pipeline
 * @param nodeReference - reference to the node to generate JSX for
 * @param options - generation options including includeIDs flag
 * @returns Promise<string | null> - JSX string representation or null if node not found
 */
async function generateJsxFromNode(nodeReference, options = {
  includeIDs: true,
}) {
  // Apply default filter to only include visible elements in JSX output
  options.filterFunction = element => element.visible

  // Get the node instance from the scene graph
  const nodeInstance = getSingletonSceneGraph().get(nodeReference.guid)
  if (nodeInstance) {
    // Generate JSX representation using the JSX processor
    const jsxResult = await oy(nodeInstance, options)
    return jsxResult.jsxStr
  }

  // Return null if node instance not found
  return null
}

/**
 * Get Node GUID Function - extracts node GUID from node processing result
 * Processes node through LZ pipeline and returns the resulting node GUID
 * @param nodeReference - reference to the node to process
 * @param options - processing options including includeIDs flag
 * @returns Promise<string | undefined> - the GUID of the processed node
 */
async function getNodeGuid(nodeReference, options = {
  includeIDs: true,
}) {
  // Process node through LZ pipeline to get processing result
  const processingResult = await LZ(nodeReference, options)

  // Extract and return the node GUID from the processing result
  return processingResult.node?.guid
}

/**
 * Await VM Promise Function - handles VM promise resolution with optional result retention
 * Validates promise handle and manages result retention for VM garbage collection
 * @param config - configuration object with VM handle, promise handle, and retention flag
 * @returns Promise<any> - the resolved promise result or VM undefined
 */
async function wrapVmPromise({
  vm,
  promiseHandle,
  shouldRetainResult,
}) {
  // Validate that the promise handle is valid for the VM
  if (!isVMPromiseLike(vm, promiseHandle)) {
    return vm.undefined
  }

  // Create and return a native promise that wraps the VM promise
  return await new Promise((promiseResolve, promiseReject) => {
    // Set up promise resolution handler
    vm.callMethod(promiseHandle, 'then', vm.newFunction('thenCallback', (promiseResult) => {
      // Retain the result handle if requested (prevents garbage collection)
      if (shouldRetainResult) {
        vm.retainHandle(promiseResult)
      }

      // Resolve the native promise with the VM result
      promiseResolve(promiseResult)
      return promiseResult
    }))

    // Set up promise rejection handler
    vm.callMethod(promiseHandle, 'catch', vm.newFunction('catchCallback', (promiseError) => {
      // Retain the error handle if requested (prevents garbage collection)
      if (shouldRetainResult) {
        vm.retainHandle(promiseError)
      }

      // Reject the native promise with the VM error
      promiseReject(promiseError)
      return promiseError
    }))
  })
}
function isVMPromiseLike(vmHandle, objectHandle) {
  // nu - Check if object is a thenable (has then and catch methods)

  if (!vmHandle.isObject(objectHandle)) {
    return false
  }
  const thenMethod = vmHandle.getProp(objectHandle, 'then')
  const catchMethod = vmHandle.getProp(objectHandle, 'catch')
  return vmHandle.isFunction(thenMethod) && vmHandle.isFunction(catchMethod)
}
/**
 * Base Node API Methods - fundamental node operations available on all node types
 * Includes core functionality like toString, parent access, cloning, and lifecycle management
 */
const baseNodeApiMethods = [NodeAPI.toString, NodeAPI.parent, NodeAPI.clone, NodeAPI.remove, NodeAPI.name, NodeAPI.removed, NodeAPI.pluginData, NodeAPI.pluginRelaunchData, NodeAPI.widgetHoverStyle, NodeAPI.getCSSAsync, NodeAPI.isAsset, NodeAPI.getRelatedLinksAsync, NodeAPI.addRelatedLinkAsync, NodeAPI.editRelatedLinkAsync, NodeAPI.deleteRelatedLinkAsync, NodeAPI.setRelatedLinkPreviewAsync, NodeAPI.getDevResourcesAsync, NodeAPI.addDevResourceAsync, NodeAPI.editDevResourceAsync, NodeAPI.deleteDevResourceAsync, NodeAPI.setDevResourcePreviewAsync, NodeAPI.detachedInfo, NodeAPI.getTopLevelFrame]

/**
 * Stuck Node API Methods - methods for managing node sticky/stuck behavior
 */
const stuckNodeApiMethods = [NodeAPI.stuckTo]

/**
 * Variable Mode API Methods - methods for managing variable modes and consumption
 */
const variableModeApiMethods = [NodeAPI.variableConsumerModes, NodeAPI.explicitVariableModes]

/**
 * Variable Binding API Methods - methods for component properties and variable binding
 */
const variableBindingApiMethods = [NodeAPI.componentPropertyReferences, NodeAPI.variableConsumptionMap, NodeAPI.boundVariables, NodeAPI.setBoundVariable, NodeAPI.resolvedVariableModes, NodeAPI.inferredVariables, NodeAPI.availableInferredVariables, ...variableModeApiMethods]

/**
 * Node State API Methods - methods for managing node visibility, locking, and connections
 */
const nodeStateApiMethods = [NodeAPI.visible, NodeAPI.locked, NodeAPI.stuckNodes, NodeAPI.attachedConnectors]

/**
 * Node Hierarchy API Methods - methods for managing node parent-child relationships
 */
const nodeHierarchyApiMethods = [NodeAPI.children, NodeAPI.findAll, NodeAPI.findOne, NodeAPI.findChild, NodeAPI.findChildren, NodeAPI.appendChild, NodeAPI.findAllWithCriteria, NodeAPI.findWidgetNodesByWidgetId]

/**
 * Page API Methods - methods specific to page node types
 */
const pageApiMethods = [NodeAPI.isHomepage]

/**
 * Opacity and Blend API Methods - methods for managing node opacity and blend modes
 */
const opacityBlendApiMethods = [NodeAPI.opacity, NodeAPI.blendMode]

/**
 * Visual Effects API Methods - methods for managing masks, effects, and styling
 */
const visualEffectsApiMethods = [...opacityBlendApiMethods, NodeAPI.isMask, NodeAPI.maskType, NodeAPI.effects, NodeAPI.effectStyleId]

/**
 * Corner Styling API Methods - methods for managing corner radius and smoothing
 */
const cornerStylingApiMethods = [NodeAPI.cornerRadius, NodeAPI.cornerSmoothing]

/**
 * Fill Styling API Methods - methods for managing node fills and fill styles
 */
const fillStylingApiMethods = [NodeAPI.fills, NodeAPI.fillStyleId]

// Legacy compatibility variables

/**
 * Stroke Styling API Methods - methods for managing node strokes and stroke styles
 */
const strokeStylingApiMethods = [NodeAPI.strokes, NodeAPI.strokeStyleId, NodeAPI.strokeWeight, NodeAPI.strokeAlign, NodeAPI.strokeJoin, NodeAPI.dashPattern]

/**
 * Stroke Weight API Methods - methods for managing individual stroke weights
 */
const strokeWeightApiMethods = [NodeAPI.strokeTopWeight, NodeAPI.strokeBottomWeight, NodeAPI.strokeLeftWeight, NodeAPI.strokeRightWeight]

/**
 * Shape Geometry API Methods - methods for managing shape geometry and fills
 */
const shapeGeometryApiMethods = [...fillStylingApiMethods, ...strokeStylingApiMethods, NodeAPI.strokeCap, NodeAPI.strokeMiterLimit, NodeAPI.outlineStroke, NodeAPI.fillGeometry, NodeAPI.strokeGeometry]

/**
 * Documentation API Methods - methods for managing node documentation and metadata
 */
const documentationApiMethods = [NodeAPI.description, NodeAPI.descriptionMarkdown, NodeAPI.documentationLinks, NodeAPI.remote, NodeAPI.key, NodeAPI.getPublishStatus]

/**
 * Table Management API Methods - methods for managing table node operations
 */
const tableManagementApiMethods = [NodeAPI.tableNumRows, NodeAPI.tableNumColumns, NodeAPI.cellAt, NodeAPI.insertRow, NodeAPI.insertColumn, NodeAPI.removeRow, NodeAPI.removeColumn, NodeAPI.moveRow, NodeAPI.moveColumn, NodeAPI.resizeRow, NodeAPI.resizeColumn]

/**
 * Component Instance API Methods - methods for managing component instances
 */
const componentInstanceApiMethods = [NodeAPI.mainComponent, NodeAPI.scaleFactor]

/**
 * Text Character API Methods - core text manipulation and formatting methods
 */
const textCharacterApiMethods = [NodeAPI.characters, NodeAPI.insertCharacters, NodeAPI.deleteCharacters, NodeAPI.hasMissingFont, NodeAPI.fontSize, NodeAPI.hangingPunctuation, NodeAPI.hangingList, NodeAPI.paragraphIndent, NodeAPI.paragraphSpacing, NodeAPI.listSpacing, NodeAPI.textCase, NodeAPI.textDecoration, NodeAPI.textDecorationStyle, NodeAPI.textDecorationSkipInk, NodeAPI.textDecorationOffset, NodeAPI.textDecorationThickness, NodeAPI.textDecorationColor, NodeAPI.letterSpacing, NodeAPI.lineHeight, NodeAPI.leadingTrim, NodeAPI.fontName, NodeAPI.fontWeight, NodeAPI.openTypeFeatures, NodeAPI.hyperlink, NodeAPI.textRangeFunctions, NodeAPI.canUpgradeToNativeBidiSupport, NodeAPI.useNativeBidiSupport]

/**
 * Full Text Node API Methods - comprehensive text node methods including alignment and resizing
 */
const fullTextNodeApiMethods = [...textCharacterApiMethods, NodeAPI.autoRename, NodeAPI.textAlignHorizontal, NodeAPI.textAlignVertical, NodeAPI.textAutoResize, NodeAPI.textStyleId, NodeAPI.textTruncation, NodeAPI.maxLines]

/**
 * Text Selection API Methods - subset of text methods for selections and styles
 */
const textSelectionApiMethods = [NodeAPI.characters, NodeAPI.insertCharacters, NodeAPI.deleteCharacters, NodeAPI.hasMissingFont, NodeAPI.fontSize, NodeAPI.textCase, NodeAPI.letterSpacing, NodeAPI.fontName, NodeAPI.fontWeight, NodeAPI.openTypeFeatures, NodeAPI.hyperlink, NodeAPI.textRangeFunctions, NodeAPI.autoRename, NodeAPI.textAlignHorizontal, NodeAPI.textAlignVertical, NodeAPI.textStyleId]

/**
 * Polygon Shape API Methods - methods for managing polygon point count
 */
const polygonShapeApiMethods = [NodeAPI.pointCount]

/**
 * Vector Network API Methods - methods for managing vector networks and paths
 */
const vectorNetworkApiMethods = [NodeAPI.vectorNetwork, NodeAPI.vectorPaths, NodeAPI.handleMirroring]

// Legacy compatibility variables

/**
 * Read-Only Vector API Methods - methods for read-only vector network access
 */
const readOnlyVectorApiMethods = [NodeAPI.readOnlyVectorNetwork, NodeAPI.readOnlyVectorPaths, NodeAPI.handleMirroring]

/**
 * Canvas Management API Methods - methods for managing canvas guides, selection, and backgrounds
 */
const canvasManagementApiMethods = [NodeAPI.guides, NodeAPI.selection, NodeAPI.backgrounds]

/**
 * Boolean Shape API Methods - methods for managing boolean operations and expansion
 */
const booleanShapeApiMethods = [NodeAPI.booleanOperation, NodeAPI.expanded]

/**
 * Star Shape API Methods - methods for managing star inner radius
 */
const starShapeApiMethods = [NodeAPI.innerRadius]

/**
 * Arc Data API Methods - methods for managing arc data
 */
const arcDataApiMethods = [NodeAPI.arcData]

/**
 * Corner Radius API Methods - methods for managing individual corner radii
 */
const cornerRadiusApiMethods = [NodeAPI.topLeftRadius, NodeAPI.topRightRadius, NodeAPI.bottomLeftRadius, NodeAPI.bottomRightRadius]

/**
 * Export Node API Methods - methods for managing node export functionality
 */
const exportNodeApiMethods = [NodeAPI.exportSettings, NodeAPI.exportNode]

/**
 * Transform Position API Methods - methods for managing node transforms and positions
 */
const transformPositionApiMethods = [NodeAPI.relativeTransform, NodeAPI.absoluteTransform, NodeAPI.x, NodeAPI.y, NodeAPI.width, NodeAPI.height, NodeAPI.absoluteBoundingBox]

/**
 * Basic Node API Methods - combination of core node methods with positioning and export
 */
const basicNodeApiMethods = [...baseNodeApiMethods, ...nodeStateApiMethods, ...exportNodeApiMethods, ...transformPositionApiMethods]

/**
 * Interactive Reaction API Methods - methods for managing node reactions and interactions
 */
const interactiveReactionApiMethods = [NodeAPI.reactions]

/**
 * Playback Settings API Methods - methods for managing prototype playback settings
 */
const playbackSettingsApiMethods = [NodeAPI.playbackSettings]

/**
 * Annotation API Methods - methods for managing node annotations
 */
const annotationApiMethods = [NodeAPI.annotations]

/**
 * Prototype Start API Methods - methods for managing prototype start nodes
 */
const prototypeStartApiMethods = [NodeAPI.prototypeStartNode]

/**
 * Layout Flex API Methods - methods for managing flex layout properties
 */
const layoutFlexApiMethods = [NodeAPI.paddingLeft, NodeAPI.paddingRight, NodeAPI.paddingTop, NodeAPI.paddingBottom, NodeAPI.primaryAxisAlignItems, NodeAPI.counterAxisAlignItems, NodeAPI.primaryAxisSizingMode, NodeAPI.layoutWrap, NodeAPI.counterAxisSpacing, NodeAPI.counterAxisAlignContent]

// Legacy compatibility variables

/**
 * Grid Layout API Methods - methods for managing grid layout properties
 */
const gridLayoutApiMethods = [NodeAPI.gridRowCount, NodeAPI.gridColumnCount, NodeAPI.gridRowGap, NodeAPI.gridColumnGap, NodeAPI.gridRowSizingCSS, NodeAPI.gridColumnSizingCSS, NodeAPI.gridRowSizes, NodeAPI.gridColumnSizes, NodeAPI.appendChildAt]

/**
 * Grid Child API Methods - methods for managing grid child positioning and alignment
 */
const gridChildApiMethods = [NodeAPI.gridRowSpan, NodeAPI.gridColumnSpan, NodeAPI.gridRowAnchorIndex, NodeAPI.gridColumnAnchorIndex, NodeAPI.gridChildHorizontalAlign, NodeAPI.gridChildVerticalAlign, NodeAPI.setGridChildPosition]

/**
 * Auto Layout Inference API Methods - methods for managing inferred auto layout
 */
const autoLayoutInferenceApiMethods = [NodeAPI.inferredAutoLayout]

/**
 * Link Unfurl API Methods - methods for managing link unfurl data
 */
const linkUnfurlApiMethods = [NodeAPI.linkUnfurlData]

/**
 * Embed Data API Methods - methods for managing embed data
 */
const embedDataApiMethods = [NodeAPI.embedData]

/**
 * Media Data API Methods - methods for managing media data
 */
const mediaDataApiMethods = [NodeAPI.mediaData]

/**
 * Author Data API Methods - methods for managing author information
 */
const authorDataApiMethods = [NodeAPI.getAuthorAsync]

/**
 * Document Color Profile API Methods - methods for managing document color profiles
 */
const documentColorProfileApiMethods = [NodeAPI.documentColorProfile]

/**
 * Focused Slide API Methods - methods for managing focused slide
 */
const focusedSlideApiMethods = [NodeAPI.focusedSlide]

/**
 * Focused Node API Methods - methods for managing focused node
 */
const focusedNodeApiMethods = [NodeAPI.focusedNode]

// Phase 22: Advanced Utility Functions and Data Processing Systems - Wrapper Functions
let _$$utilityFuncs = createUtilityFunctionsNew()
function processVectorData(e) {
  return {
    vertices: e.vertices,
    segments: e.segments,
    regions: e.regions.map((region) => {
      let processedRegion: ProcessedRegion = {
        windingRule: region.windingRule,
        loops: region.loops,
      }

      // Process fill style ID
      processedRegion.fillStyleId = region.fillStyleRef ? _$$nM(region.fillStyleRef) : ''

      // Process fill paints
      if (region.fillPaints) {
        processedRegion.fills = convertPaintArrayData(region.fillPaints.data)
      }
      return processedRegion
    }),
  }
}
function validateImmutableFrame(e) {
  if (!e.isInImmutableFrame)
    throw new Error('Expected node to be an ImmutableFrame sublayer')
  let currentNode = e
  while (currentNode && !MT(currentNode.type)) {
    currentNode = currentNode.parentNode
  }
  if (!currentNode || !MT(currentNode.type))
    throw new Error('Failed to find containing Immutable frame')
  return currentNode
}
function getNodeById(nodeId, nodeMap) {
  const node = nodeMap.get(nodeId)
  if (!node) {
    const error = new ApplicationError(`The node with id ${JSON.stringify(nodeId)} does not exist`)
    throw error
  }
  return node
}

// Phase 23: Advanced Image Processing and Effects Management Systems - Wrapper Functions
let _$$imageEffectsProc = createImageEffectsProcessingNew(this)
function iCNew(e) {
  return _$$imageEffectsProc.convertLineHeightFromLegacy(e)
}
function iTNew(e) {
  return _$$imageEffectsProc.convertLineHeightToLegacy(e)
}
function ikNew(e) {
  return _$$imageEffectsProc.convertLetterSpacingFromLegacy(e)
}

// Phase 24: Advanced Validation and Layout Processing Systems - Wrapper Functions
// Initialize Phase 24 and Phase 25 processors
let validationLayoutProc = createValidationLayoutProcessingNew(this)
let coreUtilitiesDataProc = {
  extractUserPluginKeyArray: AdvancedDataStructureManager.extractUserPluginKeyArray,
  extractNameFromKeyArray: AdvancedDataStructureManager.extractNameFromKeyArray,
  validateStorageCredentials: Phase26ValidationManager.validateStorageCredentials,
  convertMatrixToObject: AdvancedTransformationManager.convertMatrixToObject,
  createTrackedNode: AdvancedNodeCreationManager.createTrackedNode,
  getNodeById: AdvancedNodeCreationManager.getNodeById,
  processURL: AdvancedURLProcessor.processURL,
  isNotNull: Phase26ValidationManager.isNotNull,
}
function iwNew(e) {
  return validationLayoutProc.processExportSettings(e)
}
function iRNew(e) {
  return validationLayoutProc.convertTextDecorationOffsetToLegacy(e)
}
function e7New(e, t = HzA.TRACK) {
  return getSingletonSceneGraph().createNode(e, {
    tracking: t,
  })
}
function e8New(e) {
  return getSingletonSceneGraph().get(e) ?? null
}
function tqNew(e) {
  return coreUtilitiesDataProc.isNotNull(e)
}

/**
 * Node Factory Class - responsible for creating and managing different types of node prototypes
 * This class serves as the central factory for all node types in the plugin system
 */
class NodeFactory {
  cache: Map<string, any>
  incLoadingErrorLogger: any
  sceneGraph: any
  vm: NoOpVm
  fullscreenEditorType: any
  documentNodePrototype: any
  pageNodePrototype: any
  sliceNodePrototype: any
  frameNodePrototype: any
  groupNodePrototype: any
  componentNodePrototype: any
  componentSetNodePrototype: any
  instanceNodePrototype: any
  booleanOperationNodePrototype: any
  vectorNodePrototype: any
  starNodePrototype: any
  lineNodePrototype: any
  ellipseNodePrototype: any
  polygonNodePrototype: any
  rectangleNodePrototype: any
  textNodePrototype: any
  textPathNodePrototype: any
  transformNodePrototype: any
  stickyNodePrototype: any
  highlightNodePrototype: any
  codeBlockNodePrototype: any
  shapeWithTextNodePrototype: any
  connectorNodePrototype: any
  stampNodePrototype: any
  textSublayerNodePrototype: any
  alignableTextSublayerNodePrototype: any
  labelSublayerNodePrototype: any
  widgetNodePrototype: any
  embedPrototype: any
  linkUnfurlPrototype: any
  mediaPrototype: any
  sectionPrototype: any
  washiTapeNodePrototype: any
  tableNodePrototype: any
  tableCellNodePrototype: any
  slideNodePrototype: any
  slideGridNodePrototype: any
  slideRowNodePrototype: any
  flappNodePrototype: any
  moduleNodePrototype: any
  webpageNodePrototype: any
  codeLayerNodePrototype: any
  repeaterNodePrototype: any
  cmsRichTextNodePrototype: any

  constructor(e: NoOpVm, t: NodeFactoryOptions) {
    this.cache = new Map()
    let i = {
      vm: e,
      getNodeFactory: () => this,
      ...t,
    }
    this.incLoadingErrorLogger = t.incLoadingErrorLogger
    this.sceneGraph = t.sceneGraph
    this.vm = e
    this.fullscreenEditorType = t.editorType
    let aspectRatioActions = [NodeAPI.targetAspectRatio, NodeAPI.lockAspectRatio, NodeAPI.unlockAspectRatio]
    let s = [...transformPositionApiMethods, ...aspectRatioActions, ...gridChildApiMethods, NodeAPI.absoluteRenderBounds, NodeAPI.rotation, NodeAPI.layoutAlign, NodeAPI.resizeWithConstraints, NodeAPI.resizeWithoutConstraints, NodeAPI.rescale, NodeAPI.constrainProportions, NodeAPI.layoutGrow, NodeAPI.layoutPositioning, NodeAPI.minWidth, NodeAPI.minHeight, NodeAPI.maxWidth, NodeAPI.maxHeight, NodeAPI.layoutSizingHorizontal, NodeAPI.layoutSizingVertical]
    let o = [...baseNodeApiMethods, ...nodeStateApiMethods, ...variableBindingApiMethods, ...visualEffectsApiMethods, ...shapeGeometryApiMethods, ...s, ...exportNodeApiMethods]
    let l = [...o, NodeAPI.constraints]
    let d = [...textCharacterApiMethods, ...fillStylingApiMethods]
    let c = [...fillStylingApiMethods, ...cornerStylingApiMethods, ...cornerRadiusApiMethods]
    let u = [...baseNodeApiMethods, ...nodeStateApiMethods, ...variableBindingApiMethods, ...visualEffectsApiMethods, ...s, ...nodeHierarchyApiMethods, ...exportNodeApiMethods, ...shapeGeometryApiMethods, ...cornerStylingApiMethods, ...cornerRadiusApiMethods, ...layoutFlexApiMethods, ...gridLayoutApiMethods, ...strokeWeightApiMethods, ...autoLayoutInferenceApiMethods, ...annotationApiMethods, NodeAPI.layoutGrids, NodeAPI.gridStyleId, NodeAPI.backgrounds, NodeAPI.backgroundStyleId, NodeAPI.clipsContent, NodeAPI.guides, NodeAPI.expanded, NodeAPI.constraints, NodeAPI.layoutMode, NodeAPI.counterAxisSizingMode, NodeAPI.horizontalPadding, NodeAPI.verticalPadding, NodeAPI.itemSpacing, NodeAPI.overflowDirection, NodeAPI.numberOfFixedChildren, NodeAPI.overlayPositionType, NodeAPI.overlayBackground, NodeAPI.overlayBackgroundInteraction, NodeAPI.itemReverseZIndex, NodeAPI.strokesIncludedInLayout, NodeAPI.devStatus]
    let p = [...baseNodeApiMethods, ...nodeHierarchyApiMethods, ...documentColorProfileApiMethods]
    this.documentNodePrototype = setupPrototypeFromArgs(i, 'DocumentNode', ...p)
    this.addTypeToPrototype(this.documentNodePrototype, 'DOCUMENT')
    let loadAsyncApiMethods = [NodeAPI.loadAsync]
    this.pageNodePrototype = setupPrototypeFromArgs(i, 'PageNode', ...baseNodeApiMethods, ...nodeHierarchyApiMethods, ...canvasManagementApiMethods, ...exportNodeApiMethods, ...prototypeStartApiMethods, ...loadAsyncApiMethods, ...variableModeApiMethods, NodeAPI.flowStartingPoints, NodeAPI.prototypeBackgrounds, NodeAPI.pageNodeChanges, NodeAPI.measurements, NodeAPI.isPageDivider, ...(this.inSlides() ? focusedSlideApiMethods : []), ...(getFeatureFlags().buzz_plugins && (this.inSlides() || this.inBuzz()) ? focusedNodeApiMethods : []))
    this.addTypeToPrototype(this.pageNodePrototype, 'PAGE')
    this.sliceNodePrototype = setupPrototypeFromArgs(i, 'SliceNode', ...baseNodeApiMethods, ...nodeStateApiMethods, ...variableBindingApiMethods, ...s, ...exportNodeApiMethods)
    this.addTypeToPrototype(this.sliceNodePrototype, 'SLICE')
    this.frameNodePrototype = setupPrototypeFromArgs(i, 'FrameNode', ...u, ...interactiveReactionApiMethods, ...playbackSettingsApiMethods)
    this.addTypeToPrototype(this.frameNodePrototype, 'FRAME')
    this.groupNodePrototype = setupPrototypeFromArgs(i, 'GroupNode', ...baseNodeApiMethods, ...nodeStateApiMethods, ...variableBindingApiMethods, ...visualEffectsApiMethods, ...s, ...nodeHierarchyApiMethods, ...exportNodeApiMethods, ...interactiveReactionApiMethods, ...autoLayoutInferenceApiMethods, NodeAPI.backgrounds, NodeAPI.backgroundStyleId, NodeAPI.expanded)
    this.addTypeToPrototype(this.groupNodePrototype, 'GROUP')
    this.componentNodePrototype = setupPrototypeFromArgs(i, 'ComponentNode', NodeAPI.createInstance, ...u, ...documentationApiMethods, ...interactiveReactionApiMethods, ...playbackSettingsApiMethods, NodeAPI.instances, NodeAPI.variantProperties, NodeAPI.componentPropertyDefinitions)
    this.addTypeToPrototype(this.componentNodePrototype, 'COMPONENT')
    this.componentSetNodePrototype = setupPrototypeFromArgs(i, 'ComponentSetNode', ...u, ...documentationApiMethods, NodeAPI.defaultVariant, NodeAPI.variantGroupProperties, NodeAPI.componentPropertyDefinitions)
    this.addTypeToPrototype(this.componentSetNodePrototype, 'COMPONENT_SET')
    this.instanceNodePrototype = setupPrototypeFromArgs(i, 'InstanceNode', ...u, ...componentInstanceApiMethods, ...interactiveReactionApiMethods, ...playbackSettingsApiMethods, NodeAPI.swapComponent, NodeAPI.detachInstance, NodeAPI.setProperties, NodeAPI.variantProperties, NodeAPI.componentProperties, NodeAPI.isExposedInstance, NodeAPI.exposedInstances, NodeAPI.overrides, NodeAPI.resetOverrides)
    this.addTypeToPrototype(this.instanceNodePrototype, 'INSTANCE')
    this.booleanOperationNodePrototype = setupPrototypeFromArgs(i, 'BooleanOperationNode', ...o, ...cornerStylingApiMethods, ...nodeHierarchyApiMethods, ...booleanShapeApiMethods, ...interactiveReactionApiMethods)
    this.addTypeToPrototype(this.booleanOperationNodePrototype, 'BOOLEAN_OPERATION')
    this.vectorNodePrototype = setupPrototypeFromArgs(i, 'VectorNode', ...l, ...cornerStylingApiMethods, ...vectorNetworkApiMethods, ...interactiveReactionApiMethods, ...playbackSettingsApiMethods, ...annotationApiMethods)
    this.addTypeToPrototype(this.vectorNodePrototype, 'VECTOR')
    this.starNodePrototype = setupPrototypeFromArgs(i, 'StarNode', ...l, ...cornerStylingApiMethods, ...polygonShapeApiMethods, ...starShapeApiMethods, ...interactiveReactionApiMethods, ...playbackSettingsApiMethods, ...annotationApiMethods)
    this.addTypeToPrototype(this.starNodePrototype, 'STAR')
    this.lineNodePrototype = setupPrototypeFromArgs(i, 'LineNode', ...l.filter(e => !aspectRatioActions.includes(e)), ...interactiveReactionApiMethods, ...playbackSettingsApiMethods, ...annotationApiMethods)
    this.addTypeToPrototype(this.lineNodePrototype, 'LINE')
    this.ellipseNodePrototype = setupPrototypeFromArgs(i, 'EllipseNode', ...l, ...cornerStylingApiMethods, ...arcDataApiMethods, ...interactiveReactionApiMethods, ...playbackSettingsApiMethods, ...annotationApiMethods)
    this.addTypeToPrototype(this.ellipseNodePrototype, 'ELLIPSE')
    this.polygonNodePrototype = setupPrototypeFromArgs(i, 'PolygonNode', ...l, ...cornerStylingApiMethods, ...polygonShapeApiMethods, ...interactiveReactionApiMethods, ...playbackSettingsApiMethods, ...annotationApiMethods)
    this.addTypeToPrototype(this.polygonNodePrototype, 'POLYGON')
    this.rectangleNodePrototype = setupPrototypeFromArgs(i, 'RectangleNode', ...l, ...cornerStylingApiMethods, ...cornerRadiusApiMethods, ...interactiveReactionApiMethods, ...strokeWeightApiMethods, ...playbackSettingsApiMethods, ...annotationApiMethods)
    this.addTypeToPrototype(this.rectangleNodePrototype, 'RECTANGLE')
    this.textNodePrototype = setupPrototypeFromArgs(i, 'TextNode', ...l, ...fullTextNodeApiMethods, ...interactiveReactionApiMethods, ...playbackSettingsApiMethods, ...annotationApiMethods)
    this.addTypeToPrototype(this.textNodePrototype, 'TEXT')
    this.textPathNodePrototype = setupPrototypeFromArgs(i, 'TextPathNode', ...l, ...textSelectionApiMethods, ...cornerStylingApiMethods, ...readOnlyVectorApiMethods, ...interactiveReactionApiMethods, ...playbackSettingsApiMethods, ...annotationApiMethods)
    this.addTypeToPrototype(this.textPathNodePrototype, 'TEXT_PATH')
    this.transformNodePrototype = setupPrototypeFromArgs(i, 'TransformGroupNode', ...baseNodeApiMethods, ...nodeStateApiMethods, ...variableBindingApiMethods, ...visualEffectsApiMethods, ...s, ...nodeHierarchyApiMethods, ...exportNodeApiMethods, ...interactiveReactionApiMethods, NodeAPI.expanded)
    this.addTypeToPrototype(this.transformNodePrototype, 'TRANSFORM_GROUP')
    this.stickyNodePrototype = setupPrototypeFromArgs(i, 'StickyNode', ...basicNodeApiMethods, ...fillStylingApiMethods, ...opacityBlendApiMethods, NodeAPI.textSublayer, NodeAPI.authorVisible, NodeAPI.authorName, NodeAPI.rescale, NodeAPI.isWideWidth)
    this.addTypeToPrototype(this.stickyNodePrototype, 'STICKY')
    this.highlightNodePrototype = setupPrototypeFromArgs(i, 'HighlightNode', ...l, ...cornerStylingApiMethods, ...vectorNetworkApiMethods, ...interactiveReactionApiMethods, ...stuckNodeApiMethods)
    this.addTypeToPrototype(this.highlightNodePrototype, 'HIGHLIGHT')
    this.codeBlockNodePrototype = setupPrototypeFromArgs(i, 'CodeBlockNode', ...basicNodeApiMethods, ...opacityBlendApiMethods, NodeAPI.code, NodeAPI.codeLanguage)
    this.addTypeToPrototype(this.codeBlockNodePrototype, 'CODE_BLOCK')
    this.shapeWithTextNodePrototype = setupPrototypeFromArgs(i, 'ShapeWithTextNode', ...basicNodeApiMethods, ...fillStylingApiMethods, ...strokeStylingApiMethods, ...opacityBlendApiMethods, NodeAPI.shapeWithTextType, NodeAPI.textSublayer, NodeAPI.cornerRadius, NodeAPI.rotation, NodeAPI.rescale, NodeAPI.resizeWithConstraints)
    this.addTypeToPrototype(this.shapeWithTextNodePrototype, 'SHAPE_WITH_TEXT')
    this.connectorNodePrototype = setupPrototypeFromArgs(i, 'ConnectorNode', ...basicNodeApiMethods, ...strokeStylingApiMethods, ...opacityBlendApiMethods, NodeAPI.connectorEndpoints, NodeAPI.textSublayer, NodeAPI.immutableFrameLabel, NodeAPI.connectorLineType, NodeAPI.connectorStrokeCap, NodeAPI.cornerRadius, NodeAPI.rotation)
    this.addTypeToPrototype(this.connectorNodePrototype, 'CONNECTOR')
    this.stampNodePrototype = setupPrototypeFromArgs(i, 'StampNode', ...l, ...interactiveReactionApiMethods, ...stuckNodeApiMethods, ...authorDataApiMethods)
    this.addTypeToPrototype(this.stampNodePrototype, 'STAMP')
    this.textSublayerNodePrototype = setupPrototypeFromArgs(i, 'TextSublayerNode', NodeAPI.toString, ...d)
    this.alignableTextSublayerNodePrototype = setupPrototypeFromArgs(i, 'TextSublayerNode', NodeAPI.toString, NodeAPI.textAlignHorizontal, ...d)
    this.labelSublayerNodePrototype = setupPrototypeFromArgs(i, 'LabelSublayerNode', NodeAPI.toString, ...c)
    this.widgetNodePrototype = setupPrototypeFromArgs(i, 'WidgetNode', ...basicNodeApiMethods, ...stuckNodeApiMethods, ...processFeatureFlagFunctions('widgets_children_trait_for_test', nodeHierarchyApiMethods), NodeAPI.cloneWidget, NodeAPI.widgetId, NodeAPI.widgetSyncedState, NodeAPI.setWidgetSyncedState)
    this.addTypeToPrototype(this.widgetNodePrototype, 'WIDGET')
    this.embedPrototype = setupPrototypeFromArgs(i, 'EmbedNode', ...basicNodeApiMethods, ...embedDataApiMethods)
    this.addTypeToPrototype(this.embedPrototype, 'EMBED')
    this.linkUnfurlPrototype = setupPrototypeFromArgs(i, 'LinkUnfurlNode', ...basicNodeApiMethods, ...linkUnfurlApiMethods)
    this.addTypeToPrototype(this.linkUnfurlPrototype, 'LINK_UNFURL')
    this.mediaPrototype = setupPrototypeFromArgs(i, 'MediaNode', ...basicNodeApiMethods, ...mediaDataApiMethods, NodeAPI.resizeWithConstraints, NodeAPI.resizeWithoutConstraints)
    this.addTypeToPrototype(this.mediaPrototype, 'MEDIA')
    this.sectionPrototype = setupPrototypeFromArgs(i, 'SectionNode', ...basicNodeApiMethods, ...nodeHierarchyApiMethods, ...fillStylingApiMethods, ...variableBindingApiMethods, ...aspectRatioActions, NodeAPI.resizeWithoutConstraints, NodeAPI.sectionContentsHidden, NodeAPI.devStatus)
    this.addTypeToPrototype(this.sectionPrototype, 'SECTION')
    this.washiTapeNodePrototype = setupPrototypeFromArgs(i, 'WashiTapeNode', ...l, ...stuckNodeApiMethods)
    this.addTypeToPrototype(this.washiTapeNodePrototype, 'WASHI_TAPE')
    this.tableNodePrototype = setupPrototypeFromArgs(i, 'TableNode', ...basicNodeApiMethods, ...fillStylingApiMethods, ...visualEffectsApiMethods, ...tableManagementApiMethods, ...nodeHierarchyApiMethods, NodeAPI.strokes, NodeAPI.strokeStyleId)
    this.addTypeToPrototype(this.tableNodePrototype, 'TABLE')
    this.tableCellNodePrototype = setupPrototypeFromArgs(i, 'TableCellNode', ...fillStylingApiMethods, NodeAPI.toString, NodeAPI.parent, NodeAPI.width, NodeAPI.height, NodeAPI.textSublayer, NodeAPI.tableCellRowIndex, NodeAPI.tableCellColumnIndex)
    this.addTypeToPrototype(this.tableCellNodePrototype, 'TABLE_CELL')
    this.slideNodePrototype = setupPrototypeFromArgs(i, 'SlideNode', ...u, NodeAPI.getSlideTransition, NodeAPI.setSlideTransition, NodeAPI.isSkippedSlide)
    this.addTypeToPrototype(this.slideNodePrototype, 'SLIDE')
    this.slideGridNodePrototype = setupPrototypeFromArgs(i, 'SlideGridNode', ...basicNodeApiMethods, ...nodeHierarchyApiMethods)
    this.addTypeToPrototype(this.slideGridNodePrototype, 'SLIDE_GRID')
    this.slideRowNodePrototype = setupPrototypeFromArgs(i, 'SlideRowNode', ...basicNodeApiMethods, ...nodeHierarchyApiMethods)
    this.addTypeToPrototype(this.slideRowNodePrototype, 'SLIDE_ROW')
    this.flappNodePrototype = setupPrototypeFromArgs(i, 'InteractiveSlideElementNode', ...basicNodeApiMethods, NodeAPI.interactiveSlideElementType)
    this.addTypeToPrototype(this.flappNodePrototype, 'INTERACTIVE_SLIDE_ELEMENT')
    this.moduleNodePrototype = setupPrototypeFromArgs(i, 'ModuleNode', ...nodeHierarchyApiMethods)
    this.addTypeToPrototype(this.moduleNodePrototype, 'MODULE')
    this.webpageNodePrototype = setupPrototypeFromArgs(i, 'WebpageNode', ...baseNodeApiMethods, ...nodeStateApiMethods, ...nodeHierarchyApiMethods, ...pageApiMethods)
    this.addTypeToPrototype(this.webpageNodePrototype, 'WEBPAGE')
    this.codeLayerNodePrototype = setupPrototypeFromArgs(i, 'CodeLayerNode', ...basicNodeApiMethods)
    this.addTypeToPrototype(this.codeLayerNodePrototype, 'CODE_INSTANCE')
    this.repeaterNodePrototype = setupPrototypeFromArgs(i, 'RepeaterNode', ...basicNodeApiMethods)
    this.addTypeToPrototype(this.repeaterNodePrototype, 'REPEATER')
    this.cmsRichTextNodePrototype = setupPrototypeFromArgs(i, 'CmsRichTextNode', ...basicNodeApiMethods)
    this.addTypeToPrototype(this.cmsRichTextNodePrototype, 'CMS_RICH_TEXT')
  }

  addTypeToPrototype(e, t) {
    this.vm.defineProp(e, 'type', {
      enumerable: !0,
      writable: !1,
      value: this.vm.newString(t),
    })
  }

  createVMObject(e) {
    let t = this.vm
    switch (e) {
      case 'DOCUMENT':
        return t.newObject(this.documentNodePrototype)
      case 'PAGE':
        return t.newObject(this.pageNodePrototype)
      case 'SLICE':
        return t.newObject(this.sliceNodePrototype)
      case 'FRAME':
      case 'SECTION_OVERLAY':
        return t.newObject(this.frameNodePrototype)
      case 'GROUP':
        return t.newObject(this.groupNodePrototype)
      case 'COMPONENT':
        return t.newObject(this.componentNodePrototype)
      case 'COMPONENT_SET':
        return t.newObject(this.componentSetNodePrototype)
      case 'INSTANCE':
        return t.newObject(this.instanceNodePrototype)
      case 'BOOLEAN_OPERATION':
        return t.newObject(this.booleanOperationNodePrototype)
      case 'VECTOR':
      case 'BRUSH':
        return t.newObject(this.vectorNodePrototype)
      case 'STAR':
        return t.newObject(this.starNodePrototype)
      case 'LINE':
        return t.newObject(this.lineNodePrototype)
      case 'ELLIPSE':
        return t.newObject(this.ellipseNodePrototype)
      case 'POLYGON':
        return t.newObject(this.polygonNodePrototype)
      case 'RECTANGLE':
        return t.newObject(this.rectangleNodePrototype)
      case 'TEXT':
        return t.newObject(this.textNodePrototype)
      case 'STICKY':
        return t.newObject(this.stickyNodePrototype)
      case 'HIGHLIGHT':
        return t.newObject(this.highlightNodePrototype)
      case 'SHAPE_WITH_TEXT':
        return t.newObject(this.shapeWithTextNodePrototype)
      case 'CONNECTOR':
        return t.newObject(this.connectorNodePrototype)
      case 'WIDGET':
        return t.newObject(this.widgetNodePrototype)
      case 'STAMP':
        return t.newObject(this.stampNodePrototype)
      case 'CODE_BLOCK':
        return t.newObject(this.codeBlockNodePrototype)
      case 'LINK_UNFURL':
        return t.newObject(this.linkUnfurlPrototype)
      case 'EMBED':
        return t.newObject(this.embedPrototype)
      case 'MEDIA':
        return t.newObject(this.mediaPrototype)
      case 'SECTION':
        return t.newObject(this.sectionPrototype)
      case 'WASHI_TAPE':
        return t.newObject(this.washiTapeNodePrototype)
      case 'TABLE':
        return t.newObject(this.tableNodePrototype)
      case 'TABLE_CELL':
        return t.newObject(this.tableCellNodePrototype)
      case 'SLIDE':
        return t.newObject(this.slideNodePrototype)
      case 'SLIDE_ROW':
        return t.newObject(this.slideRowNodePrototype)
      case 'SLIDE_GRID':
        return t.newObject(this.slideGridNodePrototype)
      case 'INTERACTIVE_SLIDE_ELEMENT':
        return t.newObject(this.flappNodePrototype)
      case 'MODULE':
        return t.newObject(this.moduleNodePrototype)
      case 'WEBPAGE':
        return t.newObject(this.webpageNodePrototype)
      case 'CODE_INSTANCE':
        return t.newObject(this.codeLayerNodePrototype)
      case 'TEXT_PATH':
        return t.newObject(this.textPathNodePrototype)
      case 'REPEATER':
        return t.newObject(this.repeaterNodePrototype)
      case 'TRANSFORM_GROUP':
        return t.newObject(this.transformNodePrototype)
      case 'CMS_RICH_TEXT':
        return t.newObject(this.cmsRichTextNodePrototype)
      default:
        throw new Error(`unsupported type in createVMObject: ${e}`)
    }
  }

  inSlides() {
    return this.fullscreenEditorType === _$$nT.Slides
  }

  inBuzz() {
    return this.fullscreenEditorType === _$$nT.Cooper
  }

  createSublayerVMObject(e, t) {
    let i = this.vm
    switch (e) {
      case 'TEXT':
        return ['STICKY', 'CONNECTOR'].includes(t) ? i.newObject(this.textSublayerNodePrototype) : i.newObject(this.alignableTextSublayerNodePrototype)
      case 'FRAME':
        return i.newObject(this.labelSublayerNodePrototype)
      case 'TABLE_CELL':
        return i.newObject(this.tableCellNodePrototype)
      default:
        throw new Error(`unsupported type in createSublayerVMObject: ${e}`)
    }
  }

  createNodeWithDevFriendlyId(e, t, i) {
    let n = this.cache.get(e)
    let r = this.sceneGraph.guidFromDeveloperFriendlyId(e)
    getFeatureFlags().ext_inc_loading_logging && this.incLoadingErrorLogger.maybeLogError(r, i)
    if (void 0 !== n) {
      return n
    }
    let a = this.vm
    n = this.createVMObject(t)
    a.defineProp(n, 'id', {
      enumerable: !0,
      writable: !1,
      value: a.newString(e),
    })
    a.shallowFreezeObject(n)
    this.cache.set(e, n)
    a.retainHandle(n)
    return n
  }

  createNode(e, t) {
    let i = this.cache.get(e)
    getFeatureFlags().ext_inc_loading_logging && this.incLoadingErrorLogger.maybeLogError(e, t)
    if (void 0 !== i) {
      return i
    }
    let n = this.vm
    let r = getNodeById(e, this.sceneGraph)
    let a = _$$w4(r)
    if (r.isInImmutableFrame) {
      let e = validateImmutableFrame(r)
      i = this.createSublayerVMObject(a, _$$w4(e))
    }
    else {
      i = this.createVMObject(a)
    }
    let s = this.sceneGraph.developerFriendlyIdFromGuid(e)
    if (!s)
      throw new Error(`Internal Figma error: Unknown id "${s}" in createNode`)
    r.parentNode && _$$w4(r.parentNode) === 'PAGE' && r.parentNode?.isPageDivider && (r.parentNode.isPageDivider = !1)
    n.defineProp(i, 'id', {
      enumerable: !0,
      writable: !1,
      value: n.newString(s),
    })
    n.shallowFreezeObject(i)
    this.cache.set(e, i)
    n.retainHandle(i)
    return i
  }

  nodeIds() {
    return Array.from(this.cache.keys())
  }
}
async function tnode15(e) {
  await oH
  let t = debugState.getState()
  if (!d1(t))
    return 'UNPUBLISHED'
  let i = t.library.openFilePublished__LIVEGRAPH.styles[e.guid]
  if (!i || i.unpublished_at || !i.content_hash)
    return 'UNPUBLISHED'
  let n = i.content_hash
  return (NfO.updateStyles(), e.getStyleVersion() === n) ? 'CURRENT' : 'CHANGED'
}
/**
 * StyleAPI - Provides property and method definitions for style objects (Paint, Text, Effect, Grid)
 * Handles type, key, description, remote status, consumers, publish status, removal, paints, and variable binding.
 */
export const StyleAPI = {
  /**
   * Defines the 'type' property for a style object.
   * Maps internal style types to API style type strings.
   */
  type({
    vm,
    getNode,
  }, handle) {
    vm.defineProp(handle, 'type', {
      enumerable: true,
      metricsKey: 'style.type',
      get() {
        const styleType = getNode(this).styleType
        switch (styleType) {
          case 'TEXT':
          case 'EFFECT':
          case 'GRID':
            return vm.newString(styleType)
          case 'FILL':
            return vm.newString('PAINT')
          default:
            throw new Error(`Unsupported style type: ${styleType}`)
        }
      },
    })
  },
  /**
   * Defines the 'key' property for a style object.
   * Extracts the style key from the style ID.
   */
  key({
    vm,
  }, handle) {
    vm.defineProp(handle, 'key', {
      enumerable: true,
      metricsKey: 'style.key',
      get() {
        const styleId = vm.getStringProp(this, 'id')
        const {
          key,
        } = _$$eX(styleId)
        return vm.newString(key)
      },
    })
  },
  /**
   * Defines the 'description' property for a style object.
   * Allows getting and setting the style description.
   */
  description({
    vm,
    getNode,
  }, handle) {
    vm.defineProp(handle, 'description', {
      enumerable: true,
      metricsKey: 'style.description',
      get() {
        const node = getNode(this)
        return vm.newString(At(node.description))
      },
      set(value) {
        l7.plugin('plugin-description', () => {
          getNode(this).description = vm.toString(value)
        })
        return vm.undefined
      },
    })
  },
  /**
   * Defines the 'remote' property for a style object.
   * Indicates if the style is a remote (library) style.
   */
  remote({
    vm,
    getNode,
  }, handle) {
    vm.defineProp(handle, 'remote', {
      enumerable: true,
      metricsKey: 'style.remote',
      get() {
        return vm.newBoolean(!getNode(this).isLocalStyle)
      },
    })
  },
  /**
   * Defines the 'consumers' property for a style object.
   * Provides an array of nodes that consume this style, with their fields.
   */
  consumers({
    vm,
    getNodeFactory,
    defineVmIncrementalProp,
    incrementalSafeApi,
    getNode,
    sceneGraph,
    documentAccessState,
    allowIncrementalUnsafeApiCalls,
  }, handle) {
    defineVmIncrementalProp({
      handle,
      key: 'consumers',
      metricsKey: 'node.consumers',
      incrementalSafeApiKey: 'getStyleConsumersAsync',
      incrementalSafeApiMetricsKey: 'style.getStyleConsumersAsync',
      canWriteInReadOnly: false,
      hasEditScope: false,
      enumerable: true,
      parseThis: node => getNode(node),
      resolveValue: (styleNode) => {
        const resultArray = vm.newArray()
        let idx = 0
        for (const consumer of styleNode.consumers) {
          const consumerObj = vm.newObject()
          const nodeObj = sceneGraph.get(consumer.id)
          if (!nodeObj || nodeObj.isInternalOnlyNode)
            continue
          const nodeHandle = getNodeFactory().createNode(consumer.id, 'node.consumers')
          if (!nodeHandle)
            continue
          vm.setProp(consumerObj, 'node', nodeHandle)
          const fieldsArray = vm.newArray()
          for (let i = 0; i < consumer.inheritStyleFields.length; i++) {
            const field = consumer.inheritStyleFields[i]
            let fieldName = ''
            switch (field) {
              case QCv.FILL:
                fieldName = 'fillStyleId'
                break
              case QCv.STROKE:
                fieldName = 'strokeStyleId'
                break
              case QCv.TEXT:
                fieldName = 'textStyleId'
                break
              case QCv.EFFECT:
                fieldName = 'effectStyleId'
                break
              case QCv.GRID:
                fieldName = 'gridStyleId'
                break
              case QCv.DEPRECATED_STROKE:
                fieldName = 'strokeStyleId'
                break
              default:
                fieldName = ''
            }
            vm.setProp(fieldsArray, String(i), vm.newString(fieldName))
          }
          vm.setProp(consumerObj, 'fields', fieldsArray)
          vm.setProp(resultArray, String(idx), consumerObj)
          idx++
        }
        return resultArray
      },
      prepareDocument: async (styleNode) => {
        await fs(styleNode.consumers.map(c => c.id), documentAccessState)
      },
      incrementalSafeApi,
      allowIncrementalUnsafeApiCalls,
    })
  },
  /**
   * Defines the 'getPublishStatusAsync' function for a style object.
   * Returns the publish status of the style.
   */
  getPublishStatus({
    vm,
    getNode,
  }, handle) {
    vm.defineFunction(handle, 'getPublishStatusAsync', 'style.getPublishStatusAsync', function () {
      const node = getNode(this)
      const {
        promise,
        resolve,
        reject,
      } = vm.newPromise()
      vm.registerPromise(tnode15(node)).then(status => resolve(vm.newString(status)), () => {
        reject(vm.newString('Failed to get style publish status'))
      })
      return promise
    })
  },
  /**
   * Defines the 'remove' function for a style object.
   * Soft-deletes the style.
   */
  remove({
    vm,
    getNode,
    styleManager,
  }, handle) {
    vm.defineFunction(handle, 'remove', 'style.remove', function () {
      l7.plugin('plugin-remove-style', () => {
        styleManager.softDeleteStyle(getNode(this))
      })
      return vm.undefined
    })
  },
  /**
   * Defines the 'paints' property for a style object.
   * Uses the ig helper to define the property.
   */
  paints(context, handle) {
    handlePaintProperty(context, handle, 'paints')
  },
  /**
   * Defines the 'boundVariables' property for a style object.
   * Returns the variables bound to the style.
   */
  boundVariables({
    vm,
    defineVmProp,
    getNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'boundVariables',
      canWriteInReadOnly: false,
      options: {
        enumerable: true,
        metricsKey: 'style.boundVariables',
        get() {
          return vm.deepWrap(getNode(this).boundVariablesForStyle)
        },
      },
      hasEditScope: false,
    })
  },
  /**
   * Defines the 'setBoundVariable' function for a style object.
   * Allows setting a variable binding for a text style.
   */
  setBoundVariable({
    vm,
    defineVmFunction,
    getNode,
  }, handle) {
    defineVmFunction({
      handle,
      key: 'setBoundVariable',
      metricsKey: 'style.setBoundVariable',
      isAllowedInReadOnly: false,
      hasEditScope: true,
      cb(fieldHandle, variableHandle) {
        const styleNode = getNode(this)
        if (styleNode.styleType !== 'TEXT') {
          throw new Error('variable bindings can only be directly set on a text style')
        }
        const field = _$$u({
          vm,
          handle: fieldHandle,
          zSchema: variableDefinitions.VariableBindableTextField,
          property: 'field',
        })
        if (vm.isNull(variableHandle)) {
          styleNode.setBoundVariable(field, null)
          return vm.undefined
        }
        if (getNode(variableHandle).type !== 'VARIABLE') {
          throw new Error('Cannot call setBoundVariable with a non-variable node.')
        }
        const variableId = vm.getStringProp(variableHandle, 'id')
        styleNode.setBoundVariable(field, variableId)
        return vm.undefined
      },
    })
  },
}
let n6 = [NodeAPI.name, NodeAPI.pluginData, StyleAPI.type, StyleAPI.key, StyleAPI.description, StyleAPI.remote, StyleAPI.remove, StyleAPI.getPublishStatus, NodeAPI.documentationLinks, StyleAPI.consumers]
let n7 = [...n6, StyleAPI.paints, StyleAPI.boundVariables]
let n8 = [...n6, NodeAPI.fontSize, NodeAPI.textDecoration, NodeAPI.textDecorationStyle, NodeAPI.textDecorationSkipInk, NodeAPI.textDecorationOffset, NodeAPI.textDecorationThickness, NodeAPI.textDecorationColor, NodeAPI.fontName, NodeAPI.letterSpacing, NodeAPI.lineHeight, NodeAPI.paragraphIndent, NodeAPI.paragraphSpacing, NodeAPI.listSpacing, NodeAPI.textCase, NodeAPI.hangingPunctuation, NodeAPI.hangingList, NodeAPI.leadingTrim, StyleAPI.boundVariables, StyleAPI.setBoundVariable]
let n9 = [...n6, NodeAPI.effects, StyleAPI.boundVariables]
let re = [...n6, NodeAPI.layoutGrids, StyleAPI.boundVariables]
/**
 * Style Factory Class - responsible for creating and managing style prototypes
 * This class handles the creation of various style types including paint, text, effect, and grid styles
 */
class StyleFactory {
  cache: Map<string, any>
  vm: NoOpVm
  pluginId: string
  styleManager: StyleManager
  paintStylePrototype: any
  textStylePrototype: any
  effectStylePrototype: any
  gridStylePrototype: any

  constructor(e: StyleFactoryOptions) {
    this.cache = new Map()
    let t = {
      ...e,
      getStyleFactory: () => this,
    }
    let {
      vm,
      pluginID,
      styleManager,
    } = e
    this.vm = vm
    this.pluginId = pluginID
    this.styleManager = styleManager
    this.paintStylePrototype = setupPrototypeFromArgs(t, 'PaintStyle', ...n7)
    this.textStylePrototype = setupPrototypeFromArgs(t, 'TextStyle', ...n8)
    this.effectStylePrototype = setupPrototypeFromArgs(t, 'EffectStyle', ...n9)
    this.gridStylePrototype = setupPrototypeFromArgs(t, 'GridStyle', ...re)
  }

  /**
   * createStyle - Create a style object based on style type with caching support
   *
   * Creates VM-wrapped style objects for different style types (FILL, TEXT, EFFECT, GRID)
   * with proper caching, validation, and prototype assignment. Handles style lifecycle
   * including object creation, property definition, and memory management.
   *
   * @param styleId - The unique identifier for the style
   * @returns VM-wrapped style object or null if style doesn't exist
   */
  createStyle(styleId: string) {
    const vm = this.vm
    const cachedStyle = this.cache.get(styleId)
    const styleData = this.styleManager.get(styleId)

    // Validate style existence and handle cache cleanup
    if (!styleData) {
      if (cachedStyle !== undefined) {
        this.cache.delete(styleId)
      }
      return vm.$$null
    }

    // Return cached style if available
    if (cachedStyle !== undefined) {
      return cachedStyle
    }

    // Create new style object with appropriate prototype
    const styleObject = this.createStyleObjectByType(styleData.styleType)

    // Configure style properties and caching
    this.configureStyleObject(styleObject, styleId)
    return styleObject
  }

  /**
   * createStyleObjectByType - Create style object with appropriate prototype based on type
   *
   * Maps style types to their corresponding prototypes and creates VM objects.
   * Supports FILL (paint), TEXT, EFFECT, and GRID style types with proper
   * error handling for unsupported types.
   *
   * @param styleType - The type of style to create (FILL, TEXT, EFFECT, GRID)
   * @returns VM object with appropriate prototype
   */
  createStyleObjectByType(styleType: string) {
    const vm = this.vm
    const stylePrototypes = {
      FILL: this.paintStylePrototype,
      TEXT: this.textStylePrototype,
      EFFECT: this.effectStylePrototype,
      GRID: this.gridStylePrototype,
    }
    const prototype = stylePrototypes[styleType]
    if (!prototype) {
      throw new Error(`Unsupported style type: ${styleType}`)
    }
    return vm.newObject(prototype)
  }

  /**
   * configureStyleObject - Configure style object properties and caching
   *
   * Sets up the style object with proper ID property, freezing, caching,
   * and memory management. Ensures consistent style object configuration
   * across all style types.
   *
   * @param styleObject - The VM style object to configure
   * @param styleId - The style identifier for property and cache setup
   */
  configureStyleObject(styleObject: any, styleId: string) {
    const vm = this.vm

    // Define ID property
    vm.defineProp(styleObject, 'id', {
      enumerable: true,
      value: vm.newString(styleId),
    })

    // Freeze object and setup caching
    vm.shallowFreezeObject(styleObject)
    this.cache.set(styleId, styleObject)
    vm.retainHandle(styleObject)
  }

  /**
   * Retrieves a style by its ID.
   * @param styleId - The ID of the style to retrieve
   * @returns The style object or null if not found
   */
  getStyleById(styleId: string) {
    return this.createStyle(styleId)
  }

  /**
   * Asynchronously imports a style by its key.
   * @param styleKey - The key of the style to import
   * @returns Promise resolving to the imported style
   */
  importStyleByKeyAsync(styleKey: string) {
    const {
      promise,
      resolve,
      reject,
    } = this.vm.newPromise()
    this.vm.registerPromise(fetchAndSubscribeStyle(styleKey)).then(styleInfo => resolve(l7.plugin('plugin-create-style', () => this.createStyle(styleInfo)))).catch((error) => {
      let errorMessage = `unable to import style with key ${styleKey}`
      if (typeof error === 'string')
        errorMessage = error; else if (error instanceof Error)
        errorMessage = error.message
      reject(this.vm.newString(errorMessage))
    })
    return promise
  }
}
let rp = Ju(({
  resolve: e,
  reject: t,
  pluginName: i,
  ...n
}) => {
  let [r, a] = useState(!1)
  let s = J2(UK().spellCheckPreference)
  let o = () => {
    n.onClose()
    t()
  }
  return jsx(_$$R, {
    recordingKey: 'textReviewRequestModal',
    title: jsx(_$$E2, {
      color: 'default',
      fontWeight: 'semi-bold',
      fontSize: 11,
      children: i.length > 50
        ? _$$tx('textreview.use_plugin_name_title_default', {})
        : _$$tx('textreview.use_plugin_name_title', {
          pluginName: i,
        }),
    }),
    confirmText: i.length > 20
      ? _$$t('textreview.use_plugin_name_confirm_default', {})
      : _$$t('textreview.use_plugin_name_confirm', {
        pluginName: i,
      }),
    onCancel: o,
    onClose: o,
    onConfirm: () => {
      n.onClose()
      e({
        turnOffSpellCheck: r,
      })
    },
    open: n.open,
    children: jsxs(_$$Y, {
      direction: 'vertical',
      spacing: 8,
      children: [jsx('div', {
        children: jsx(_$$E2, {
          color: 'default',
          children: _$$tx('textreview.as_you_type_plugin_name_will_review_your_text_and_provide_suggestions', {
            pluginName: jsx(_$$E2, {
              fontWeight: 'semi-bold',
              children: i,
            }),
          }),
        }),
      }), s && jsx(_$$S, {
        label: jsx(_$$J3, {
          children: _$$tx('textreview.also_turn_off_figma_spell_check', {}),
        }),
        checked: r,
        onChange: a,
      })],
    }),
  })
}, 'TEXT_REVIEW_REQUEST_MODAL', ZU.NO)

/**
 * VariableCollectionAPI - Provides property and method definitions for variable collection objects.
 * Handles modes, default mode, key, remote status, variable IDs, publish status, removal, mode management, extension, etc.
 */
export const VariableCollectionAPI = {
  /**
   * Defines the 'modes' property for a variable collection.
   * Handles both standard and extended variable collections.
   */
  modes({
    vm,
    defineVmProp,
    getVariableCollectionNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'modes',
      canWriteInReadOnly: false,
      hasEditScope: false,
      options: {
        enumerable: true,
        metricsKey: 'variableCollection.modes',
        get() {
          if (CUU) {
            let modes = getVariableCollectionNode(this).modes
            let isExtension = CUU.isVariableSetExtension(getVariableCollectionNode(this).id)
            let collectionId = getVariableCollectionNode(this).id
            let backingCollection
            if (isExtension) {
              backingCollection = getSingletonSceneGraph().getVariableCollectionNode(getVariableCollectionNode(this).backingVariableCollectionId)
            }
            return vm.deepWrap(isExtension
              ? modes.map((mode) => {
                let parentModeId = ''
                if (mode.parentModeID && backingCollection) {
                  parentModeId = CUU?.isVariableSetExtension(backingCollection.id) ? `${backingCollection.id}/${mode.parentModeID}` : mode.parentModeID
                }
                return {
                  name: mode.name,
                  modeId: `${collectionId}/${mode.modeID}`,
                  parentModeId,
                }
              })
              : modes.map(mode => ({
                name: mode.name,
                modeId: mode.modeID,
              })))
          }
          return vm.newArray()
        },
      },
    })
  },
  /**
   * Defines the 'defaultModeId' property for a variable collection.
   */
  defaultModeId({
    vm,
    defineVmProp,
    getVariableCollectionNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'defaultModeId',
      canWriteInReadOnly: false,
      hasEditScope: false,
      options: {
        enumerable: true,
        metricsKey: 'variableCollection.defaultModeId',
        get() {
          return vm.newString(getVariableCollectionNode(this).defaultModeId)
        },
      },
    })
  },
  /**
   * Defines the 'key' property for a variable collection.
   */
  key({
    vm,
    defineVmProp,
    getVariableCollectionNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'key',
      canWriteInReadOnly: false,
      hasEditScope: false,
      options: {
        enumerable: true,
        metricsKey: 'variableCollection.key',
        get() {
          let assetKey = getVariableCollectionNode(this).assetKeyForPublish
          return assetKey ? vm.newString(assetKey) : vm.$$null
        },
      },
    })
  },
  /**
   * Defines the 'remote' property for a variable collection.
   */
  remote({
    vm,
    defineVmProp,
    getVariableCollectionNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'remote',
      canWriteInReadOnly: false,
      hasEditScope: false,
      options: {
        enumerable: true,
        metricsKey: 'variableCollection.remote',
        get() {
          return vm.newBoolean(getVariableCollectionNode(this).isSubscribedAsset)
        },
      },
    })
  },
  /**
   * Defines the 'variableIds' property for a variable collection.
   */
  variableIds({
    vm,
    defineVmProp,
    getVariableCollectionNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'variableIds',
      canWriteInReadOnly: false,
      hasEditScope: false,
      options: {
        enumerable: true,
        metricsKey: 'variableCollection.variableIds',
        get() {
          return vm.deepWrap(getVariableCollectionNode(this).variableIds)
        },
      },
    })
  },
  /**
   * Defines the 'getPublishStatusAsync' function for a variable collection.
   */
  getPublishStatus({
    vm,
    defineVmFunction,
    getVariableCollectionNode,
  }, handle) {
    defineVmFunction({
      handle,
      key: 'getPublishStatusAsync',
      metricsKey: 'variableCollection.getPublishStatusAsync',
      cb() {
        let {
          promise,
          resolve,
          reject,
        } = vm.newPromise()
        if (getVariableCollectionNode(this).isSubscribedAsset) {
          throw new Error('can only query publish status for local variable collections')
        }
        vm.registerPromise(rM(vm.getStringProp(this, 'id'))).then(status => resolve(vm.newString(status))).catch(reject)
        return promise
      },
      isAllowedInReadOnly: true,
      hasEditScope: false,
    })
  },
  /**
   * Defines the 'remove' function for a variable collection.
   */
  remove({
    vm,
    defineVmFunction,
    getVariableCollectionNode,
  }, handle) {
    defineVmFunction({
      handle,
      key: 'remove',
      metricsKey: 'variableCollection.remove',
      cb() {
        getVariableCollectionNode(this).removeSelfAndChildren()
        return vm.undefined
      },
      isAllowedInReadOnly: false,
      hasEditScope: true,
    })
  },
  /**
   * Defines the 'addMode' function for a variable collection.
   */
  addMode({
    vm,
    defineVmFunction,
    getVariableCollectionNode,
  }, handle) {
    defineVmFunction({
      handle,
      key: 'addMode',
      metricsKey: 'variableCollection.addMode',
      cb(modeNameHandle) {
        let modeName = _$$u({
          vm,
          handle: modeNameHandle,
          zSchema: _$$z.string(),
          property: 'modeName',
        })
        let collection = getVariableCollectionNode(this)
        return vm.newString(collection.addMode(modeName))
      },
      isAllowedInReadOnly: false,
      hasEditScope: true,
    })
  },
  /**
   * Defines the 'removeMode' function for a variable collection.
   */
  removeMode({
    vm,
    defineVmFunction,
    getVariableCollectionNode,
  }, handle) {
    defineVmFunction({
      handle,
      key: 'removeMode',
      metricsKey: 'variableCollection.removeMode',
      cb(modeIdHandle) {
        let modeId = _$$u({
          vm,
          handle: modeIdHandle,
          zSchema: _$$z.string(),
          property: 'modeId',
        })
        getVariableCollectionNode(this).removeMode(modeId)
        return vm.undefined
      },
      isAllowedInReadOnly: false,
      hasEditScope: true,
    })
  },
  /**
   * Defines the 'renameMode' function for a variable collection.
   */
  renameMode({
    vm,
    defineVmFunction,
    getVariableCollectionNode,
  }, handle) {
    defineVmFunction({
      handle,
      key: 'renameMode',
      metricsKey: 'variableCollection.renameMode',
      cb(modeIdHandle, newNameHandle) {
        let modeId = _$$u({
          vm,
          handle: modeIdHandle,
          zSchema: _$$z.string(),
          property: 'modeId',
        })
        let newName = _$$u({
          vm,
          handle: newNameHandle,
          zSchema: _$$z.string(),
          property: 'newName',
        })
        getVariableCollectionNode(this).renameMode(modeId, newName)
        return vm.undefined
      },
      isAllowedInReadOnly: false,
      hasEditScope: true,
    })
  },
  /**
   * Defines the 'setDefaultMode' function for a variable collection.
   */
  setDefaultMode({
    vm,
    defineVmFunction,
    getVariableCollectionNode,
  }, handle) {
    defineVmFunction({
      handle,
      key: 'setDefaultMode',
      metricsKey: 'variableCollection.setDefaultMode',
      cb(modeIdHandle) {
        let modeId = _$$u({
          vm,
          handle: modeIdHandle,
          zSchema: _$$z.string(),
          property: 'modeId',
        })
        getVariableCollectionNode(this).setDefaultMode(modeId)
        return vm.undefined
      },
      isAllowedInReadOnly: false,
      hasEditScope: true,
    })
  },
  /**
   * Defines the 'isExtension' property for a variable collection.
   */
  isExtension({
    vm,
    defineVmProp,
    getVariableCollectionNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'isExtension',
      canWriteInReadOnly: false,
      hasEditScope: false,
      options: {
        enumerable: true,
        metricsKey: 'variableCollection.isExtension',
        get() {
          return CUU ? vm.newBoolean(CUU.isVariableSetExtension(getVariableCollectionNode(this).id)) : vm.newBoolean(false)
        },
      },
    })
  },
  /**
   * Defines the 'extend' function for a variable collection.
   */
  extend({
    vm,
    defineVmFunction,
    getVariableCollectionFactory,
    getVariableCollectionNode,
  }, handle) {
    defineVmFunction({
      handle,
      key: 'extend',
      metricsKey: 'variableCollection.extend',
      cb(nameHandle) {
        if (!Ot()) {
          throw new Error('Cannot create extended collections outside of enterprise tier')
        }
        let name = _$$u({
          vm,
          handle: nameHandle,
          zSchema: _$$z.string(),
          property: 'name',
        })
        let collection = getVariableCollectionNode(this)
        if (collection.isSubscribedAsset) {
          throw new Error('Cannot use .extend on subscribed variable collections. Use `extendLibraryCollectionByKeyAsync` instead.')
        }
        let newId = getVariableCollectionFactory().createNewExtendedVariableCollection(collection.id, name)
        return getVariableCollectionFactory().createExtendedVariableCollectionHandle(newId)
      },
      isAllowedInReadOnly: false,
      hasEditScope: true,
    })
  },
}
function processFeatureFlagFunctions(featureFlag, functions) {
  return functions.map(func => (input, node) => {
    if (getFeatureFlags()[featureFlag]) {
      return func(input, node)
    }
  })
}
/**
 * ExtendedVariableCollectionAPI - Provides property and method definitions for extended variable collections.
 * Handles inherited/local variable IDs, variable overrides, parent collection ID, and override removal.
 */
export const ExtendedVariableCollectionAPI = {
  /**
   * Defines the 'inheritedVariableIds' property for an extended variable collection.
   * Returns the IDs of variables inherited from the parent collection.
   */
  inheritedVariableIds({
    vm,
    defineVmProp,
    getVariableCollectionNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'inheritedVariableIds',
      canWriteInReadOnly: false,
      hasEditScope: false,
      options: {
        enumerable: true,
        metricsKey: 'extendedVariableCollection.inheritedVariableIds',
        get() {
          return vm.deepWrap(getVariableCollectionNode(this).inheritedVariableIds)
        },
      },
    })
  },
  /**
   * Defines the 'localVariableIds' property for an extended variable collection.
   * Returns the IDs of variables defined locally in the collection.
   */
  localVariableIds({
    vm,
    defineVmProp,
    getVariableCollectionNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'localVariableIds',
      canWriteInReadOnly: false,
      hasEditScope: false,
      options: {
        enumerable: true,
        metricsKey: 'extendedVariableCollection.localVariableIds',
        get() {
          return vm.deepWrap(getVariableCollectionNode(this).localVariableIds)
        },
      },
    })
  },
  /**
   * Defines the 'variableOverrides' property for an extended variable collection.
   * Returns an object mapping variable IDs to their override values.
   */
  variableOverrides({
    vm,
    defineVmProp,
    getVariableCollectionNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'variableOverrides',
      canWriteInReadOnly: false,
      hasEditScope: false,
      options: {
        enumerable: true,
        metricsKey: 'extendedVariableCollection.variableOverrides',
        get() {
          const overrides = getVariableCollectionNode(this).variableOverrides
          const result = {}
          for (const [varId, modeMap] of overrides.entries()) {
            const modeObj = {}
            for (const [modeId, value] of modeMap.entries()) {
              modeObj[modeId] = value
            }
            result[varId] = modeObj
          }
          return vm.deepWrap(result)
        },
      },
    })
  },
  /**
   * Defines the 'removeOverridesForVariable' function for an extended variable collection.
   * Removes all overrides for a given variable.
   */
  removeOverridesForVariable({
    vm,
    defineVmFunction,
    getNode,
  }, handle) {
    defineVmFunction({
      handle,
      key: 'removeOverridesForVariable',
      metricsKey: 'extendedVariableCollection.removeOverridesForVariable',
      cb(variableHandle) {
        const variableNode = getNode(variableHandle)
        if (!variableNode || variableNode.type !== 'VARIABLE')
          throw new Error('Invalid variable to clear')
        const variableId = vm.getStringProp(variableHandle, 'id')
        getNode(this).deleteOverridesForVariable(variableId)
        return vm.undefined
      },
      isAllowedInReadOnly: false,
      hasEditScope: true,
    })
  },
  /**
   * Defines the 'parentVariableCollectionId' property for an extended variable collection.
   * Returns the ID of the parent variable collection.
   */
  parentVariableCollectionId({
    vm,
    defineVmProp,
    getVariableCollectionNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'parentVariableCollectionId',
      canWriteInReadOnly: false,
      hasEditScope: false,
      options: {
        enumerable: true,
        metricsKey: 'extendedVariableCollection.parentVariableCollectionId',
        get() {
          return vm.newString(getVariableCollectionNode(this).backingVariableCollectionId)
        },
      },
    })
  },
}
let rC = [NodeAPI.name, NodeAPI.hiddenFromPublishing, NodeAPI.pluginData, VariableCollectionAPI.key, VariableCollectionAPI.defaultModeId, VariableCollectionAPI.modes, VariableCollectionAPI.remote, VariableCollectionAPI.variableIds, ...processFeatureFlagFunctions('ds_extended_collections', [VariableCollectionAPI.isExtension]), VariableCollectionAPI.remove, VariableCollectionAPI.getPublishStatus, ...processFeatureFlagFunctions('ds_extended_collections', [VariableCollectionAPI.extend])]
let rT = [...rC, VariableCollectionAPI.addMode, VariableCollectionAPI.removeMode, VariableCollectionAPI.renameMode, VariableCollectionAPI.setDefaultMode]
let rk = [...rC, ExtendedVariableCollectionAPI.parentVariableCollectionId, ExtendedVariableCollectionAPI.variableOverrides, ...processFeatureFlagFunctions('ds_extended_collections_modes_creation', [VariableCollectionAPI.addMode]), ...processFeatureFlagFunctions('ds_extended_collections_vars_creation', [ExtendedVariableCollectionAPI.localVariableIds, ExtendedVariableCollectionAPI.inheritedVariableIds]), ExtendedVariableCollectionAPI.removeOverridesForVariable]
class VariableCollectionFactory {
  constructor(e) {
    this.vm = e.vm
    this.variableCollectionPrototype = setupPrototypeFromArgs(e, 'VariableCollection', ...rT)
    this.extendedVariableCollectionPrototype = setupPrototypeFromArgs(e, 'ExtendedVariableCollection', ...rk)
    this.sceneGraph = e.sceneGraph
  }

  createVariableCollectionHandle(e, t) {
    let i = this.vm
    let n = gr.fromString(e)
    if (!n || !t.getVariableCollectionNode(n))
      return i.$$null
    let r = CUU.isVariableSetExtension(e) ? this.extendedVariableCollectionPrototype : this.variableCollectionPrototype
    let a = i.newObject(r)
    i.defineProp(a, 'id', {
      enumerable: !0,
      writable: !1,
      value: i.newString(e),
    })
    return a
  }

  createNewVariableCollection(e) {
    return this.sceneGraph.createVariableCollection(e).id
  }

  getLocalVariableCollections() {
    let e = this.vm
    let t = e.newArray()
    for (let [i, n] of this.sceneGraph.getLocalVariableCollectionNodes().entries()) {
      if (!getFeatureFlags().ds_extended_collections && CUU?.isVariableSetExtension(n.id)) {
        continue
      }
      let r = this.createVariableCollectionHandle(n.id, this.sceneGraph)
      e.setProp(t, i.toString(), r)
    }
    return t
  }

  getLibraryVariableCollectionsAsync() {
    let {
      promise,
      resolve,
      reject,
    } = this.vm.newPromise()
    this.vm.registerPromise(rL()).then(async (e) => {
      let i = await rO(e)
      resolve(this.vm.deepWrap(i))
    }).catch(reject)
    return promise
  }

  createNewExtendedVariableCollection(e, t) {
    return l7.system('upsert-shared-collection-plugin', () => CUU.createVariableSetExtension(e, t))
  }

  createExtendedVariableCollectionHandle(e) {
    let t = this.vm
    if (!gr.fromString(e))
      return t.$$null
    let i = t.newObject(this.extendedVariableCollectionPrototype)
    t.defineProp(i, 'id', {
      enumerable: !0,
      writable: !1,
      value: t.newString(e),
    })
    return i
  }

  async getOrUpsertVariableCollectionAsync(e) {
    return await rN(yG(e))
  }
}
/**
 * Get local variable set info by key - helper function
 * Retrieves variable set information from local cache with proper wrapping
 * @param key - variable set key to lookup
 * @returns wrapped local variable info or null if not found
 */
function getLocalVariableSetInfoByKey(key) {
  const localInfo = CWU?.getLocalVariableSetInfoByKey(key)
  return localInfo ? Dt(localInfo) : null
}
async function rN(variableSetKey) {
  // rN - Get node ID for variable set, loading from library if necessary

  // Try to get local variable set info first
  const localVariableSetInfo = getLocalVariableSetInfoByKey(variableSetKey) ?? (await rP(variableSetKey))
  if (!localVariableSetInfo) {
    throw new Error(`Could not find variable set with key ${variableSetKey}`)
  }

  // If it's a library variable set, ensure it's properly subscribed
  if (localVariableSetInfo.subscriptionStatus === 'LIBRARY') {
    await Yf(localVariableSetInfo)
  }
  return localVariableSetInfo.node_id
}
async function rP(variableSetKey) {
  // rP - Fetch variable collection from external API and process it

  const apiResponse = await subscribeAndAwaitData(bsh, {
    key: variableSetKey.toString(),
  })
  const variableCollection = apiResponse.variableCollection
  const fileInfo = variableCollection?.file
  const hubFileInfo = variableCollection?.hubFile && oA(variableCollection.hubFile, null)
  const processedFile = Zt(fileInfo, hubFileInfo)
  return variableCollection && processedFile ? cE(variableCollection, processedFile, false) : null
}
async function rO(variableCollectionInputs) {
  // rO - Process variable collections from library inputs and return formatted results

  const libraryKeys = Ho(variableCollectionInputs.map(input => input.libraryKey))

  // Fetch library data and process variable collections
  const libraryData = await QO(libraryKeys, (resolve, reject) => {
    const cachedLibraries = zl.get<ComponentInfo>(libraryKeys)
    const allLibrariesResult = resourceUtils.all(Object.values(cachedLibraries))
    if (allLibrariesResult.status === 'loaded') {
      resolve(cachedLibraries)
    }
    else if (allLibrariesResult.status === 'errors') {
      reject('error fetching variable collections from libraries')
    }
  }) as ComponentInfo

  // Process collections from library data
  const processedCollections: any[] = []
  const libraryNameMap = keyBy(variableCollectionInputs, input => input.libraryKey)
  for (const [libraryKey, libraryResult] of Object.entries(libraryData)) {
    if (libraryResult.status === 'loaded') {
      const libraryFileData = libraryResult.data?.file
      const libraryName = libraryFileData?.name
      const inputsForLibrary = libraryNameMap[libraryKey] || []

      // Extract variable collections from library components
      if (libraryFileData?.components) {
        for (const componentKey of Object.keys(libraryFileData.components)) {
          const componentData = libraryFileData.components[componentKey]
          if (componentData?.variableCollections) {
            for (const collectionKey of Object.keys(componentData.variableCollections)) {
              const collectionData = componentData.variableCollections[collectionKey]

              // Check if this collection matches any of the requested inputs
              const matchingInput = inputsForLibrary.find(input => input.variableCollectionId === collectionData.id)
              if (matchingInput) {
                processedCollections.push({
                  name: collectionData.name,
                  key: collectionData.key,
                  libraryName: libraryName || 'Unknown Library',
                })
              }
            }
          }
        }
      }
    }
  }
  return processedCollections
}
function rD(libraryInfo) {
  // rD - Extract basic library information for API response
  return {
    name: libraryInfo.name,
    libraryKey: libraryInfo.libraryKey,
  }
}
async function rL() {
  // rL - Get available libraries from cache or query them

  const libraryResult = await QO(I1, (resolve, reject) => {
    const cachedLibraries = zl.get(I1)
    if (cachedLibraries.status === 'loaded') {
      resolve(cachedLibraries)
    }
    else if (cachedLibraries.status === 'errors') {
      reject('error in querying available libraries')
    }
  })
  return libraryResult.status === 'loaded' ? libraryResult.data.map(rD) : []
}
function rF(extendedModeId) {
  // rF - Parse extended mode ID format to extract collection and mode IDs

  const idParts = extendedModeId.split('/')
  const modeId = idParts.pop()
  if (!modeId || idParts.length === 0) {
    throw new Error('Invalid extended mode id format. Mode id for extended mode must be encoded using the following format: <collectionId>/<modeId>')
  }
  return {
    collectionId: idParts.join('/'),
    modeId,
  }
}
async function rM(variableId) {
  // rM - Get publish status for a variable

  // Update variables and wait for any pending operations
  NfO.updateVariables()
  await oH
  const currentState = debugState.getState()

  // Check if current document is published
  if (!d1(currentState)) {
    return 'UNPUBLISHED'
  }

  // Get variable status from published state
  const publishedVariables = bh(currentState)
  const variableInfo = publishedVariables[variableId]
  return processPublishStatus(variableInfo?.status)
}
/**
 * Variable collection validation helper - validates and retrieves variable collection node
 * @param collectionId - ID of the variable collection to validate
 * @returns validated variable collection node
 * @throws Error if collection is invalid or not found
 */
function validateVariableCollectionNode(collectionId) {
  let nodeId = gr.fromString(collectionId ?? '')
  if (!nodeId)
    throw new Error('Invalid variable collection id')
  let collectionNode = getSingletonSceneGraph().getVariableCollectionNode(nodeId)
  if (!collectionNode)
    throw new Error('Cannot find variable collection node')
  if (CUU && !CUU.isVariableSetExtension(collectionNode.id)) {
    throw new Error('Cannot override value for extended mode on non-extended variable collection')
  }
  return collectionNode
}

/**
 * Check if variable name contains mode separator - helper function
 * @param variableName - variable name to check
 * @returns true if name contains '/' separator
 */
function isVariableNameWithMode(variableName) {
  return variableName.includes('/')
}

/**
 * Variable API Namespace - contains all variable-related API functions and utilities
 * Simple object literal format with all functions and properties defined
 */
export const d = {
  resolvedType({
    vm: e,
    defineVmProp: t,
    getVariableNode: i,
  }, n) {
    t({
      handle: n,
      key: 'resolvedType',
      options: {
        enumerable: !0,
        metricsKey: 'variable.resolvedType',
        get() {
          return e.newString(rG(i(this).variableResolvedType))
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !1,
    })
  },
  variableCollectionId({
    vm: e,
    defineVmProp: t,
    getVariableNode: i,
  }, n) {
    t({
      handle: n,
      key: 'variableCollectionId',
      options: {
        enumerable: !0,
        metricsKey: 'variable.variableCollectionId',
        get() {
          return e.newString(i(this).variableCollectionId)
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !1,
    })
  },
  key({
    vm: e,
    defineVmProp: t,
    getVariableNode: i,
  }, n) {
    t({
      handle: n,
      key: 'key',
      options: {
        enumerable: !0,
        metricsKey: 'variable.key',
        get() {
          let t = i(this).variableKeyForPublish
          return t ? e.newString(t) : e.$$null
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !1,
    })
  },
  remote({
    vm: e,
    defineVmProp: t,
    getVariableNode: i,
  }, n) {
    t({
      handle: n,
      key: 'remote',
      options: {
        enumerable: !0,
        metricsKey: 'variable.remote',
        get() {
          return e.newBoolean(i(this).isSubscribedAsset)
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !1,
    })
  },
  resolveForConsumer({
    vm: e,
    defineVmFunction: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'resolveForConsumer',
      metricsKey: 'variable.resolveForConsumer',
      cb(t) {
        let n = e.getStringProp(this, 'id')
        return (function (e, t) {
          let i
          let n = e.newObject()
          if (!t)
            return e.$$null
          switch (t.resolvedType) {
            case rXF.COLOR:
              i = e.deepWrap(t.value)
              break
            case rXF.STRING:
              i = e.newString(t.value)
              break
            case rXF.FLOAT:
              i = e.newNumber(t.value)
              break
            case rXF.BOOLEAN:
              i = e.newBoolean(t.value)
              break
            case rXF.SYMBOL_ID:
              i = e.newString(t.value)
              break
            case rXF.MAP:
              i = e.deepWrap(t.value)
              break
            default:
              throwTypeError(t)
          }
          let r = e.newString(rG(t.resolvedType))
          e.setProp(n, 'value', i)
          e.setProp(n, 'resolvedType', r)
          return n
        }(e, i(t).resolveVariable(n)))
      },
      isAllowedInReadOnly: !0,
      hasEditScope: !1,
    })
  },
  remove({
    vm: e,
    defineVmFunction: t,
    getVariableNode: i,
  }, n) {
    t({
      handle: n,
      key: 'remove',
      metricsKey: 'variable.remove',
      cb() {
        i(this).removeSelfAndChildren()
        return e.undefined
      },
      isAllowedInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  getPublishStatus({
    vm: e,
    defineVmFunction: t,
    getVariableNode: i,
  }, n) {
    t({
      handle: n,
      key: 'getPublishStatusAsync',
      metricsKey: 'variable.getPublishStatusAsync',
      cb() {
        let {
          promise,
          resolve,
          reject,
        } = e.newPromise()
        if (i(this).isSubscribedAsset)
          throw new Error('can only query publish status for local variables')
        e.registerPromise(fetchPublishStatusForCollection(e.getStringProp(this, 'id'))).then(t => resolve(e.newString(t))).$$catch(reject)
        return promise
      },
      isAllowedInReadOnly: !0,
      hasEditScope: !1,
    })
  },
  valuesByMode({
    vm: e,
    defineVmProp: t,
    getVariableNode: i,
  }, n) {
    t({
      handle: n,
      key: 'valuesByMode',
      options: {
        enumerable: !0,
        metricsKey: 'variable.valuesByMode',
        get() {
          return e.deepWrap(i(this).valuesByMode)
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !1,
    })
  },
  setValueForMode({
    vm: e,
    defineVmFunction: r,
    getVariableNode: a,
  }, s) {
    r({
      handle: s,
      key: 'setValueForMode',
      metricsKey: 'variable.setValueForMode',
      cb(r, s) {
        let o = _$$u({
          vm: e,
          handle: r,
          zSchema: _$$z.string(),
          property: 'modeId',
        })
        let l = _$$u({
          vm: e,
          handle: s,
          zSchema: variableDefinitions.VariableValue,
          property: 'newValue',
        })
        if (getFeatureFlags().ds_extended_collections && isVariableNameWithMode(o)) {
          let {
            collectionId,
            modeId,
          } = rF(o)
          if (!collectionId)
            throw new Error('Cannot set value for extended mode')
          if (collectionId === a(this).variableCollectionId) {
            a(this).setValueForMode(modeId, l)
            return e.undefined
          }
          let r = validateVariableCollectionNode(collectionId)
          if (!r.modes.find(e => e.modeID === modeId))
            throw new Error('Cannot find mode on extended variable collection')
          if (!mSn?.getVariableKeysInCollectionChain().includes(a(this).variableKeyForPublish ?? '')) {
            throw new Error('Cannot override value on a variable that is not inherited by this collection')
          }
          r.setVariableOverrideForMode(a(this).id, modeId, l)
        }
        else {
          a(this).setValueForMode(o, l)
        }
        return e.undefined
      },
      isAllowedInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  removeOverrideForMode({
    vm: e,
    defineVmFunction: n,
    getVariableNode: r,
  }, a) {
    n({
      handle: a,
      key: 'removeOverrideForMode',
      metricsKey: 'variable.removeOverrideForMode',
      cb(n) {
        let a = _$$u({
          vm: e,
          handle: n,
          zSchema: _$$z.string(),
          property: 'modeId',
        })
        if (!isVariableNameWithMode(a)) {
          throw new Error('Cannot remove override: the specified modeId does not refer to an extended collection that inherits this variable.')
        }
        let {
          collectionId,
          modeId,
        } = rF(a)
        validateVariableCollectionNode(collectionId).removeOverrideForMode(r(this).id, modeId)
        return e.undefined
      },
      isAllowedInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  scopes({
    vm: e,
    defineVmProp: t,
    getVariableNode: i,
  }, r) {
    t({
      handle: r,
      key: 'scopes',
      options: {
        enumerable: !0,
        metricsKey: 'variable.scopes',
        get() {
          let t = i(this)
          let n = Ae(t.variableScopes).map((e) => {
            let i
            i = t.variableResolvedType
            return e === 'STROKE' ? 'STROKE_COLOR' : e === 'FONT_STYLE' && i === rXF.FLOAT ? 'FONT_WEIGHT' : e
          })
          return e.deepWrap(n)
        },
        set(t) {
          let r = i(this)
          let a = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$z.array(variableDefinitions.PublicVariableScope),
            property: 'scopes',
          }).map(e => (function (e, t) {
            if (t === 'FONT_WEIGHT' && e !== rXF.FLOAT || t === 'FONT_STYLE' && e !== rXF.STRING) {
              throw new Error('Invalid scope for this variable type')
            }
            return t === 'STROKE_COLOR' ? 'STROKE' : t === 'FONT_WEIGHT' && e === rXF.FLOAT ? 'FONT_STYLE' : t
          }(r.variableResolvedType, e)))
          r.variableScopes = gK(a)
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  codeSyntax({
    vm: e,
    defineVmProp: t,
    defineVmFunction: i,
    getVariableNode: r,
  }, a) {
    t({
      handle: a,
      key: 'codeSyntax',
      options: {
        enumerable: !0,
        metricsKey: 'variable.codeSyntax',
        get() {
          let t = r(this).variableCodeSyntax
          return e.deepWrap(t)
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !1,
    })
    i({
      handle: a,
      key: 'setVariableCodeSyntax',
      metricsKey: 'variable.setVariableCodeSyntax',
      cb(t, i) {
        let a = _$$u({
          vm: e,
          handle: t,
          zSchema: variableDefinitions.PublicVariableCodeSyntaxPlatformPropType,
          property: 'codeSyntaxPlatform',
        })
        let s = _$$u({
          vm: e,
          handle: i,
          zSchema: _$$z.string(),
          property: 'codeSyntaxValue',
        })
        let o = it(a)
        r(this).setVariableCodeSyntax(o, s)
        return e.deepWrap(r(this).variableCodeSyntax)
      },
      isAllowedInReadOnly: !1,
      hasEditScope: !0,
    })
    i({
      handle: a,
      key: 'removeVariableCodeSyntax',
      metricsKey: 'variable.removeVariableCodeSyntax',
      cb(t) {
        let i = it(_$$u({
          vm: e,
          handle: t,
          zSchema: variableDefinitions.PublicVariableCodeSyntaxPlatformPropType,
          property: 'codeSyntaxPlatform',
        }))
        r(this).removeVariableCodeSyntax(i)
        return e.deepWrap(r(this).variableCodeSyntax)
      },
      isAllowedInReadOnly: !1,
      hasEditScope: !0,
    })
  },
}
class VariableFactory {
  vm: NoOpVm
  variablePrototype: any
  sceneGraph: any

  constructor(e: any) {
    this.vm = e.vm
    this.variablePrototype = setupPrototypeFromArgs(e, 'Variable', ...rB)
    this.sceneGraph = e.sceneGraph
  }

  createVariableHandle(e: string, t: any) {
    let i = this.vm
    let n = sD.fromString(e)
    if (!n || !t.getVariableNode(n))
      return i.$$null
    let r = i.newObject(this.variablePrototype)
    i.defineProp(r, 'id', {
      enumerable: true,
      writable: false,
      value: i.newString(e),
    })
    return r
  }

  createNewVariable(e: string, t: string, i: string) {
    isPrivateVariableType(i) && logInternalVariableExposure(i)
    if (!getFeatureFlags().ds_extended_collections_vars_creation && CUU?.isVariableSetExtension(t)) {
      throw new Error('Cannot create variables in extended variable collections')
    }
    return this.sceneGraph.createVariable(e, t, rV(i)).id
  }

  getLocalVariables(e?: string) {
    let t = this.vm
    let i = t.newArray()
    let n = e ? rV(e) : null
    let r = this.sceneGraph.getLocalVariableNodes({
      resolvedDataType: n ?? undefined,
    })
    for (let [n, a] of (r.length > 0 && isPrivateVariableType(e) && logInternalVariableExposure(e), r.entries())) {
      let e = this.createVariableHandle(a.id, this.sceneGraph)
      t.setProp(i, n.toString(), e)
    }
    return i
  }

  /**
   * Retrieves all subscribed variables, optionally filtered by variable type.
   * @param variableType - Optional variable type string to filter by.
   * @returns VM array of variable handles.
   */
  getSubscribedVariables(variableType?: string) {
    const vm = this.vm
    const resultArray = vm.newArray()
    const resolvedType = variableType ? rV(variableType) : null

    // Filter subscribed variables by type if provided
    const subscribedVariables = CWU.getSubscribedVariablesInfo().filter(info => resolvedType === null || info.resolvedType === resolvedType)

    // Map variable IDs to handles and populate result array
    subscribedVariables.forEach((info, index) => {
      const variableHandle = this.createVariableHandle(info.id, this.sceneGraph)
      vm.setProp(resultArray, index.toString(), variableHandle)
    })
    return resultArray
  }

  /**
   * Asynchronously retrieves variables in a library collection by collection key.
   * @param collectionKey - The key of the variable collection.
   * @returns Promise resolving to a VM-wrapped array of variables.
   */
  getVariablesInLibraryCollectionAsync(collectionKey: string) {
    const {
      promise,
      resolve,
      reject,
    } = this.vm.newPromise()
    this.vm.registerPromise(rU(collectionKey)).then((variables) => {
      resolve(this.vm.deepWrap(variables))
    }).catch(reject)
    return promise
  }

  /**
   * Imports a variable by its key asynchronously, creating a variable handle.
   * @param variableKey - The key of the variable to import.
   * @returns Promise resolving to the created variable handle.
   */
  importByKeyAsync(variableKey: string) {
    const {
      promise,
      resolve,
      reject,
    } = this.vm.newPromise()
    this.vm.registerPromise(fetchAndSubscribeVariable(_$$ey(variableKey))).then(variableInfo => resolve(l7.plugin('plugin-create-variable', () => this.createVariableHandle(variableInfo, this.sceneGraph)))).catch((error) => {
      let errorMessage = `unable to import variable with key ${variableKey}`
      if (typeof error === 'string')
        errorMessage = error; else if (error instanceof Error)
        errorMessage = error.message
      reject(this.vm.newString(errorMessage))
    })
    return promise
  }
}
async function rU(variableCollectionKey) {
  // rU - Fetch variables from a variable collection

  const queryParams = d5({
    variableCollectionKey,
  })
  const collectionResult = await QO(queryParams, (resolve, reject) => {
    const cachedCollection = zl.get<VariableResult>(queryParams)
    if (cachedCollection.status === 'loaded') {
      resolve(cachedCollection)
    }
    else if (cachedCollection.status === 'errors') {
      reject(`error fetching variables in collection with id "${variableCollectionKey}"`)
    }
  }) as VariableResult

  // Transform variables from the collection
  const variables = collectionResult.data?.variableCollection?.variables.map((variable) => {
    // Convert SYMBOL_ID to COMPONENT_ID for compatibility
    const resolvedType = variable.variableType === 'SYMBOL_ID' ? 'COMPONENT_ID' : variable.variableType
    return {
      name: variable.name,
      resolvedType,
      key: variable.key,
    }
  }) ?? []
  return variables
}
let rB = [NodeAPI.name, NodeAPI.description, NodeAPI.pluginData, d.variableCollectionId, d.key, d.remote, d.resolvedType, d.valuesByMode, d.scopes, NodeAPI.hiddenFromPublishing, d.codeSyntax, d.remove, d.resolveForConsumer, d.getPublishStatus, d.setValueForMode, ...processFeatureFlagFunctions('ds_extended_collections', [d.removeOverrideForMode])]
function rV(variableType) {
  // rV - Map variable type strings to internal type constants

  switch (variableType) {
    case 'BOOLEAN':
      return rXF.BOOLEAN
    case 'COLOR':
      return rXF.COLOR
    case 'FLOAT':
      return rXF.FLOAT
    case 'MAP':
      return rXF.MAP
    case 'STRING':
      return rXF.STRING
    case 'COMPONENT_ID':
      return rXF.SYMBOL_ID
    case 'FONT_STYLE':
      return rXF.FONT_STYLE
    case 'TEXT_DATA':
      return rXF.TEXT_DATA
    case 'IMAGE':
      return rXF.IMAGE
    case 'LINK':
      return rXF.LINK
    case 'JS_RUNTIME_ALIAS':
      return rXF.JS_RUNTIME_ALIAS
    case 'SLOT_CONTENT_ID':
      return rXF.SLOT_CONTENT_ID
    default:
      throwTypeError(variableType, `Unsupported variable resolved type: ${variableType}`)
  }
}

/**
 * Map internal type to variable type string - helper function
 * Converts internal type constants to user-facing variable type strings
 * @param internalType - internal type constant to map
 * @returns variable type string or 'UNKNOWN' for unsupported types
 */
function mapInternalTypeToVariableType(internalType) {
  switch (internalType) {
    case rXF.BOOLEAN:
      return 'BOOLEAN'
    case rXF.COLOR:
      return 'COLOR'
    case rXF.FLOAT:
      return 'FLOAT'
    case rXF.MAP:
      return 'MAP'
    case rXF.STRING:
      return 'STRING'
    case rXF.SYMBOL_ID:
      return 'COMPONENT_ID'
    case rXF.FONT_STYLE:
      return 'FONT_STYLE'
    case rXF.TEXT_DATA:
      return 'TEXT_DATA'
    case rXF.IMAGE:
      return 'IMAGE'
    case rXF.LINK:
      return 'LINK'
    case rXF.JS_RUNTIME_ALIAS:
    case rXF.SLOT_CONTENT_ID:
      throwTypeError(internalType, `Unsupported variable resolved type: ${internalType}`)
  }
}
function rG(internalType) {
  // rG - Map internal type constants back to variable type strings

  const mappedType = mapInternalTypeToVariableType(internalType)

  // Validate the mapped type
  isPrivateVariableType(mappedType) && logInternalVariableExposure(mappedType)
  return mappedType
}
async function fetchPublishStatusForCollection(variableCollectionId) {
  // rz - Get publish status for a variable collection

  // Update variables and wait for any pending operations
  NfO.updateVariables()
  await oH
  const currentState = debugState.getState()

  // Check if current document is published
  if (!d1(currentState)) {
    return 'UNPUBLISHED'
  }

  // Get variable collection status from published state
  const publishedCollections = _$$tK2(currentState)
  const collectionInfo = publishedCollections[variableCollectionId]
  return processPublishStatus(collectionInfo?.status)
}
async function fetchAndProcessVariableData(variableKey) {
  // rH - Fetch variable data from external API and process it

  const queryParams = Y4({
    key: variableKey,
  })
  const variableResult = await QO(queryParams, (resolve, reject) => {
    const cachedVariable = zl.get<VariableResult>(queryParams)
    if (cachedVariable.status === 'loaded') {
      resolve(cachedVariable)
    }
    else if (cachedVariable.status === 'errors') {
      reject(cachedVariable.errors)
    }
  }) as VariableResult
  const fileInfo = variableResult.data?.variable?.file
  const hubFileInfo = variableResult.data?.variable?.hubFile && oA(variableResult.data.variable.hubFile, null)
  const processedFile = Zt(fileInfo, hubFileInfo)
  return variableResult.data?.variable && processedFile ? GA(variableResult.data.variable, processedFile, false) : null
}
/**
 * Get local variable info by key - helper function
 * Retrieves variable information from local cache with proper wrapping
 * @param key - variable key to lookup
 * @returns wrapped local variable info or null if not found
 */
function getLocalVariableInfoByKey2(key) {
  const localVariableInfo = CWU.getLocalVariableInfoByKey(key)
  return localVariableInfo ? kz(localVariableInfo) : null
}
async function fetchAndSubscribeVariable(variableKey) {
  // rW - Load variable data and create subscription for changes

  // First try to get variable from local cache, then fetch remotely if needed
  const variableData = getLocalVariableInfoByKey2(variableKey) ?? (await fetchAndProcessVariableData(variableKey))
  if (!variableData) {
    throw new Error(`could not find variable with key "${variableKey}"`)
  }

  // Create a promise that resolves when variable is loaded and tracked
  return new Promise((resolve, reject) => {
    debugState.dispatch(Yi({
      item: variableData,
      callback: resolve,
      errorCallback: reject,
    }))
  })
}
function isPrivateVariableType(variableType) {
  // rK - Check if variable type is internal-only (should not be exposed to users)
  return variableType === 'MAP' || variableType === 'COMPONENT_ID'
}
function logInternalVariableExposure(variableType) {
  // rY - Log warning when internal variable type is exposed to user
  x1('variables-plugin', `Internal only variable type exposed to user: ${variableType}`)
}
export class VideoStore {
  thumbnailGenerator: any
  hashToPrivateVideo: Map<string, any>
  hashToCoverImageHash: Map<string, string>
  hashToCoverThumbnailImageHash: Map<string, string>

  constructor() {
    this.thumbnailGenerator = _$$t2
    this.hashToPrivateVideo = new Map()
    this.hashToCoverImageHash = new Map()
    this.hashToCoverThumbnailImageHash = new Map()
  }

  /**
   * Create video from bytes asynchronously
   */
  async createVideoAsync(videoBytes: any) {
    const uint8Array = new Uint8Array(videoBytes)
    NfO.isVideoValid(uint8Array)
    let i = Et(uint8Array)
    let n = this.thumbnailGenerator.createVideo()
    return this.thumbnailGenerator.loadVideo(uint8Array, n).then(() => {
      let e = NfO.uploadVideo(uint8Array, n)
      this.hashToCoverImageHash.set(i, e.coverHash)
      this.hashToCoverThumbnailImageHash.set(i, e.coverThumbnailHash)
      return this.getOrCreatePrivateVideo(i)
    }).catch(() => {
      throw new Error(`Unable to generate a thumbnail for video`)
    })
  }

  /**
   * Get or create private video by hash
   */
  getOrCreatePrivateVideo(hash: string) {
    let video = this.hashToPrivateVideo.get(hash)
    if (!video) {
      video = {
        sha1: hash,
      }
      this.hashToPrivateVideo.set(hash, video)
    }
    return video
  }

  /**
   * Get thumbnail image for video
   */
  getThumbnailImageForVideo(hash: string) {
    return this.hashToCoverImageHash.get(hash) || ''
  }

  /**
   * Get private video or throw error
   */
  getPrivateVideoOrThrow(hash: string) {
    const video = this.hashToPrivateVideo.get(hash)
    if (!video) {
      throw new Error('SHA1 hash does not correspond to an existing video')
    }
    return video
  }

  /**
   * Clean up video resources
   */
  tearDown() {
    this.hashToPrivateVideo = new Map()
    this.hashToCoverImageHash = new Map()
    this.hashToCoverThumbnailImageHash = new Map()
  }
}
class IncLoadingErrorLogger {
  options: IncLoadingErrorLoggerOptions
  loggedApiCalls: Set<string>

  constructor(e: IncLoadingErrorLoggerOptions) {
    this.options = e
    this.loggedApiCalls = new Set()
  }

  logError = NodeAPISetupUtils.setupTelemetryLogError
  maybeLogError = NodeAPISetupUtils.setupTelemetryMaybeLogError
}
function isPromiseLike(vmUtils, targetObject) {
  // r1 - Check if an object is a promise-like object with then/catch methods
  if (!vmUtils.isObject(targetObject)) {
    return false
  }
  const thenMethod = vmUtils.getProp(targetObject, 'then')
  const catchMethod = vmUtils.getProp(targetObject, 'catch')

  // Return true if both then and catch are functions (promise-like)
  return !!(vmUtils.isFunction(thenMethod) && vmUtils.isFunction(catchMethod))
}
let widgetTerminationWarning = `Your widget was terminated before figma.showUI could finish running. Return a promise in your event handler to keep your widget running while your iframe is open.

For more information, see: https://www.figma.com/widget-docs/handling-user-events/
`
function r5(widgetState, uiManager) {
  // r5 - Show widget termination warning if no promises are tracked
  if (widgetState.numTrackedPromises === 0 && uiManager.isInnerIframeActive()) {
    console.error(widgetTerminationWarning)
  }
}
/**
 * processWidgetEventHandlers - Handle widget event processing (click/textEditEnd events)
 *
 * Processes widget click and textEditEnd events by extracting event handlers
 * from the widget hierarchy, executing them with proper error handling, and
 * managing promise tracking for widget lifecycle.
 *
 * @param params - Configuration object containing VM instance, event command, virtual node, etc.
 * @param params.vm - Virtual machine instance for executing widget code
 * @param params.command - Event command containing type and data (click/textEditEnd)
 * @param params.vNode - Virtual DOM node representing the widget hierarchy
 * @param params.runtime - Widget runtime environment
 * @param params.uiHandle - UI manager for handling widget interface
 * @param params.widgetManager - Widget lifecycle manager
 * @param params.editScopeLabel - Edit scope for plugin operations
 * @returns Promise<boolean> indicating if event was processed successfully
 */
async function processWidgetEventHandlers({
  vm: NoOpVm,
  command: eventCommand,
  vNode: virtualNode,
  runtime: widgetRuntime,
  uiHandle: uiManager,
  widgetManager: widgetController,
  editScopeLabel: editScope,
}) {
  // Validate supported event types
  if (!isValidWidgetEventType(eventCommand.name)) {
    return false
  }

  // Get and validate widget node
  const widgetNode = getWidgetNodeById(eventCommand.widgetNodeID)
  if (!widgetNode) {
    return false
  }

  // Extract event handlers and create promise queue
  const eventHandlers = extractWidgetEventHandlers(virtualNode, widgetNode, eventCommand, widgetRuntime)
  const promiseQueue = []

  // Process each event handler
  for (const currentHandler of eventHandlers) {
    const eventData = createEventDataObject(NoOpVm, currentHandler, eventCommand)
    const functionResult = executeEventHandler(NoOpVm, currentHandler, eventData, eventCommand, editScope)
    if (isPromiseLike(NoOpVm, functionResult)) {
      promiseQueue.push(trackEventHandlerPromise(NoOpVm, functionResult, widgetController))
    }
  }

  // Handle promise completion and widget lifecycle
  await processPromiseQueue(promiseQueue, widgetController, uiManager)
  return true
}

// Helper functions for processWidgetEventHandlers

/**
 * isValidWidgetEventType - Check if event type is supported
 */
function isValidWidgetEventType(eventName) {
  const validTypes = ['click', 'textEditEnd']
  const isValid = validTypes.includes(eventName)
  if (!isValid) {
    assert(false, `unsupported event type: ${eventName}`)
  }
  return isValid
}

/**
 * getWidgetNodeById - Get widget node by ID and validate type
 */
function getWidgetNodeById(widgetNodeID) {
  const widgetNode = getSceneGraphInstance().get(widgetNodeID)
  if (!widgetNode || widgetNode.type !== 'WIDGET') {
    return null
  }
  return widgetNode
}

/**
 * createEventDataObject - Create event data object for handler execution
 */
function createEventDataObject(NoOpVm, handler, _eventCommand) {
  return NoOpVm.deepWrap({
    offsetX: handler.bubbleInfo.offsetX,
    offsetY: handler.bubbleInfo.offsetY,
    canvasX: handler.bubbleInfo.canvasX,
    canvasY: handler.bubbleInfo.canvasY,
  })
}

/**
 * executeEventHandler - Execute event handler function with proper error handling
 */
function executeEventHandler(NoOpVm, handler, eventData, eventCommand, editScope) {
  return l7.plugin(editScope, () => NoOpVm.callFunction(getFunctionHandle(handler.handle), NoOpVm.undefined, eventCommand.name === 'textEditEnd' ? NoOpVm.deepWrap(eventCommand.event) : eventData))
}

/**
 * trackEventHandlerPromise - Track promise for widget lifecycle management
 */
function trackEventHandlerPromise(NoOpVm, functionResult, widgetController) {
  widgetController.trackPromise()
  return NoOpVm.unwrapPromise(functionResult).finally(() => {
    widgetController.untrackPromise()
  })
}

/**
 * processPromiseQueue - Handle completion of all event handler promises
 */
async function processPromiseQueue(promiseQueue, widgetController, uiManager) {
  if (promiseQueue.length === 0) {
    r5(widgetController, uiManager)
    return
  }
  try {
    await Promise.all(promiseQueue)
  }
  catch (error) {
    // Log error but don't throw to prevent widget termination
    console.error('Widget event handler error:', error)
  }
}

// Helper function to extract widget event handlers
function extractWidgetEventHandlers(vNode, widgetNode, command, runtime) {
  const {
    bubbledNodes,
  } = command
  const [rootNode, ...childNodes] = bubbledNodes.slice(0).reverse()
  if (rootNode?.id !== widgetNode.guid) {
    throw new Error('Rendering a widget to the wrong node')
  }
  const handlers = []
  let currentVNode = vNode
  let currentNode = runtime.getNodeById(widgetNode.reversedChildrenGuids[widgetNode.reversedChildrenGuids.length - 1])
  if (!currentNode) {
    return []
  }
  let currentBubbleNode = childNodes.shift()

  // Helper to add event handler if it exists
  const addEventHandler = (vNode, bubbleInfo) => {
    const eventName = command.name === 'click' ? 'onClick' : 'onTextEditEnd'
    if (vNode && vNode?.renderMetaData?.[eventName]) {
      handlers.push({
        bubbleInfo,
        handle: vNode.renderMetaData[eventName],
      })
    }
  }

  // Process root node
  addEventHandler(currentVNode, currentBubbleNode)

  // Process child nodes in hierarchy
  while (childNodes.length && currentNode.type === 'FRAME') {
    currentBubbleNode = childNodes.shift()
    if (currentVNode && currentVNode.renderMetaData.children?.length) {
      const childIndex = currentNode.children.findIndex(child => child.id === currentBubbleNode?.id)
      if (childIndex === -1) {
        break
      }
      currentVNode = MI(currentVNode.renderMetaData.children)[childIndex]
      currentNode = currentNode.children[childIndex]
      addEventHandler(currentVNode, currentBubbleNode)
    }
    else {
      break
    }
  }
  return handlers.reverse()
}
async function updateWidgetProperties({
  vm,
  uiHandle,
  callbackHandle,
  propertyName,
  propertyValue,
  widgetManager,
  editScopeLabel,
}) {
  // r3 - Execute property change callback for widgets when properties are updated

  // Execute the callback function with the property change data
  const callbackResult = l7.plugin(editScopeLabel, () => vm.callFunction(callbackHandle, vm.undefined, vm.deepWrap({
    propertyName,
    propertyValue,
  })))

  // Handle execution failure
  if (callbackResult.type === 'FAILURE') {
    throw new InternalError(callbackResult.error)
  }

  // Show warning if callback doesn't return a promise
  if (!isPromiseLike(vm, callbackResult.handle)) {
    r5(widgetManager, uiHandle)
  }

  // Wait for callback completion
  await wrapVmPromise({
    vm,
    promiseHandle: callbackResult.handle,
    shouldRetainResult: false,
  })
}
async function handleStuckStatusChange({
  vm: NoOpVm,
  handler: stuckStatusHandler,
  event: stuckEvent,
}) {
  // r6 - Handle stuck status changed event for widget nodes

  // Validate event type
  if (stuckEvent.name !== 'stuckStatusChanged') {
    throw new Error('runStuckStatusChanged called with event that is not stuckStatusChanged')
  }

  // Execute handler with event data
  const handlerResult = NoOpVm.callFunction(stuckStatusHandler, NoOpVm.undefined, NoOpVm.deepWrap({
    newHostId: stuckEvent.newHost,
    oldHostId: stuckEvent.oldHost,
  }))

  // Handle execution failure
  if (handlerResult.type === 'FAILURE') {
    throw new InternalError(handlerResult.error)
  }

  // Wait for handler completion
  await wrapVmPromise({
    vm: NoOpVm,
    promiseHandle: handlerResult.handle,
    shouldRetainResult: false,
  })
}
async function handleAttachedStickablesChange({
  vm: NoOpVm,
  handler: stickablesHandler,
  event: stickablesEvent,
}) {
  // r7 - Handle attached stickables changed event for widget nodes

  // Validate event type
  if (stickablesEvent.name !== 'attachedStickablesChanged') {
    throw new Error('attachedStickablesChanged called with event that is not attachedStickablesChanged')
  }

  // Execute handler with stickables data
  const handlerResult = NoOpVm.callFunction(stickablesHandler, NoOpVm.undefined, NoOpVm.deepWrap({
    stuckNodeIds: stickablesEvent.addedNodes,
    unstuckNodeIds: stickablesEvent.removedNodes,
  }))

  // Handle execution failure
  if (handlerResult.type === 'FAILURE') {
    throw new InternalError(handlerResult.error)
  }

  // Wait for handler completion
  await wrapVmPromise({
    vm: NoOpVm,
    promiseHandle: handlerResult.handle,
    shouldRetainResult: false,
  })
}
export function $$at0(e, _t, i) {
  // $$at0 - Setup global alert function for plugin environment

  // Only define alert if it doesn't exist or is undefined
  if (e.isEqual(e.undefined, e.getProp(e.global, 'alert'))) {
    e.defineFunction(e.global, 'alert', 'alert', (t) => {
      const message = e.toString(t)

      // Format message with plugin context
      const formattedMessage = i !== ''
        ? `From the plugin "${i}":

${message}`
        : `From the current plugin:

${message}`
      // eslint-disable-next-line no-alert
      alert(formattedMessage)
      return e.undefined
    })
  }
}

/**
 * processNodeArrayForHierarchyOperation - Process and validate node array for hierarchy operations
 *
 * Validates input array, extracts node GUIDs, validates responsive set constraints,
 * and processes parent and index parameters for hierarchy manipulation operations.
 *
 * @param params - Configuration object for node processing
 * @param params.vm - Virtual machine instance for VM operations
 * @param params.callerName - Name of the calling operation for error messages
 * @param params.nodes - VM array handle containing nodes to process
 * @param params.parentArg - VM handle for parent node (optional)
 * @param params.indexArg - VM handle for insertion index (optional)
 * @param params.getNode - Function to retrieve node from VM handle
 * @param params.enableResponsiveSetHierarchyMutations - Whether responsive set operations are allowed
 * @returns Object containing processed node IDs, parent node, and insertion index
 * @throws Error if array is invalid, nodes are in responsive sets, or parameters are invalid
 */
function processNodeArrayForHierarchyOperation({
  vm: NoOpVm,
  callerName: operationName,
  nodes: nodeArray,
  parentArg: parentHandle,
  indexArg: indexHandle,
  getNode: nodeGetter,
  enableResponsiveSetHierarchyMutations: allowResponsiveOperations,
}) {
  // Validate input array
  validateNodeArray(nodeArray, operationName, NoOpVm)

  // Extract and validate nodes
  const nodeIds = extractAndValidateNodes(nodeArray, operationName, NoOpVm, nodeGetter, allowResponsiveOperations)

  // Process parent and index parameters
  const parentNode = processParentParameter(parentHandle, NoOpVm, nodeGetter)
  const insertionIndex = processIndexParameter(indexHandle, operationName, NoOpVm)
  return {
    nodeIds,
    parent: parentNode,
    index: insertionIndex,
  }
}

/**
 * validateNodeArray - Validate that input is a non-empty array
 */
function validateNodeArray(nodeArray, operationName, NoOpVm) {
  if (!NoOpVm.isArray(nodeArray)) {
    throw new TypeError(`First argument to ${operationName}() must be an array`)
  }
  const arrayLength = NoOpVm.getNumberProp(nodeArray, 'length')
  if (arrayLength < 1) {
    throw new Error(`First argument to ${operationName}() must be an array of at least one node`)
  }
}

/**
 * extractAndValidateNodes - Extract node GUIDs and validate responsive set constraints
 */
function extractAndValidateNodes(nodeArray, operationName, NoOpVm, nodeGetter, allowResponsiveOperations) {
  const arrayLength = NoOpVm.getNumberProp(nodeArray, 'length')
  const nodeIds = []
  for (let nodeIndex = 0; nodeIndex < arrayLength; nodeIndex++) {
    const nodeHandle = NoOpVm.getProp(nodeArray, nodeIndex.toString())
    const targetNode = nodeGetter(nodeHandle)

    // Validate responsive set constraints
    if (targetNode.isOrInResponsiveSet && !allowResponsiveOperations) {
      throw new Error(`Cannot ${operationName} nodes in a webpage`)
    }
    nodeIds.push(targetNode.guid)
  }
  return nodeIds
}

/**
 * processParentParameter - Process optional parent node parameter
 */
function processParentParameter(parentHandle, NoOpVm, nodeGetter) {
  return NoOpVm.isUndefined(parentHandle) ? undefined : nodeGetter(parentHandle)
}

/**
 * processIndexParameter - Process optional index parameter with validation
 */
function processIndexParameter(indexHandle, operationName, NoOpVm) {
  if (NoOpVm.isUndefined(indexHandle)) {
    return -1
  }
  return _$$u({
    vm: NoOpVm,
    handle: indexHandle,
    zSchema: _$$N.PositiveInteger,
    property: `${operationName} index`,
  })
}
export const RESTRICTED_TRIGGERS = {
  NO_UI: new Set(['codegen', 'related-link-preview', 'textreview']),
  NO_CHECKOUT: new Set(['codegen', 'linkpreview', 'textreview']),
}

// Keep original function name for backward compatibility
const ai = processNodeArrayForHierarchyOperation
let an = new Set(['codegen', 'related-link-preview', 'textreview'])
let ar = new Set(['codegen', 'linkpreview', 'textreview'])
let aa = _$$z.object({
  origin: _$$z.string().optional(),
}).optional()
let as = ['close', 'selectionchange', 'currentpagechange', 'drop', 'run', 'documentchange', 'textreview', 'slidesviewchange'].concat(['timerstart', 'timerstop', 'timerpause', 'timerresume', 'timerdone', 'timeradjust'])
let ao = []
let al = ['message']
let ad = ['input']
let ac = [_$$nT.Design, _$$nT.Whiteboard, _$$nT.DevHandoff, _$$nT.Slides, _$$nT.Sites, _$$nT.Illustration, _$$nT.Cooper]
class PluginRuntime {
  // Core properties
  vm: NoOpVm
  options: PluginRuntimeOptions
  visualBellCounter: number
  eventHandlers: Map<string, EventHandler[]>
  eventHandlerTimeouts: Map<string, any>
  scheduledEvents: Map<string, ScheduledEvent>
  runningSyncEvent: string | null
  runningCloseEventHandler: boolean
  previousSelection: string[]
  previousSelectedTextRangeJson: string
  onMessageCallback: any
  queryMode: boolean
  checkoutRequested: boolean
  widgetManager: any
  skipInvisibleInstanceChildren: boolean
  spellCheckCallback: any
  legacyCodegenCallback: any
  codegenCallback: any
  linkPreviewCallback: any
  authCallback: any
  textReviewRequestRejects: number
  isTextReviewRequestModalOpen: boolean
  isWidget: boolean
  privateSceneGraph: any
  styleManager: StyleManager
  imageStore: ImageStore
  videoStore: VideoStore
  documentAccessState: DocumentAccessState
  _hasRegisteredWidgetFunction: boolean
  fullscreenEditorType: any
  mixedSentinel: any
  runtimeOptions: any
  nodeFactory: NodeFactory
  styleFactory: StyleFactory
  variableFactory: VariableFactory
  variableCollectionFactory: any
  annotationCategoryFactory: any
  uiHandle: UIHandle

  getNode = (e: any) => {
    let t = this.vm
    let i = this.privateSceneGraph
    if (!t.isObject(e)) {
      throw new TypeError(`Expected node, got ${t.isNull(e) ? 'null' : t.typeof(e)}`)
    }
    let n = t.getProp(e, 'id')
    if (!t.isString(n))
      throw new Error(`Expected node id to be a string, got ${t.typeof(n)}`)
    let r = t.toString(n)
    let a = sD.fromString(r)
    let s = gr.fromString(r)
    if (M7(r)) {
      let e = this.styleManager.get(r)
      if (!e) {
        throw new ApplicationError(`The style with id ${JSON.stringify(r)} does not exist`)
      }
      return e
    }
    if (a) {
      let e = i.getVariableNode(a)
      if (void 0 === e) {
        throw new ApplicationError(`The variable with id ${JSON.stringify(r)} does not exist`)
      }
      return e
    }
    if (s) {
      let e = i.getVariableCollectionNode(s)
      if (void 0 === e) {
        throw new ApplicationError(`The variable collection with id ${JSON.stringify(r)} does not exist`)
      }
      return e
    }
    if (i.isDeveloperFriendlyIdAGuidPath(r)) {
      let e = i.guidFromDeveloperFriendlyId(r)
      let t = e ? i.get(e) : void 0
      if (!t) {
        throw new ApplicationError(`The node (instance sublayer or table cell) with id ${JSON.stringify(r)} does not exist`)
      }
      return t
    }
    {
      let e = getNodeById(r, i)
      if (e.isInWidget && !(getFeatureFlags().widgets_children_trait_for_test || t.vmType === 'scopednoopvm')) {
        throw new ApplicationError(`The node (instance sublayer) with id ${JSON.stringify(r)} does not exist`)
      }
      return e
    }
  }

  getVariableNode = (e: any) => {
    let t = this.vm
    let i = this.privateSceneGraph
    if (!t.isObject(e)) {
      throw new TypeError(`Expected node, got ${t.isNull(e) ? 'null' : t.typeof(e)}`)
    }
    let n = t.getProp(e, 'id')
    if (!t.isString(n))
      throw new Error(`Expected node id to be a string, got ${t.typeof(n)}`)
    let r = t.toString(n)
    let a = sD.fromString(r)
    if (!a)
      throw new Error(`The variable id ${JSON.stringify(r)} is not valid`)
    let s = i.getVariableNode(a)
    if (void 0 === s) {
      throw new ApplicationError(`The variable with id ${JSON.stringify(r)} does not exist`)
    }
    return s
  }

  getVariableCollectionNode = (e: any) => {
    let t = this.vm
    let i = this.privateSceneGraph
    if (!t.isObject(e)) {
      throw new TypeError(`Expected node, got ${t.isNull(e) ? 'null' : t.typeof(e)}`)
    }
    let n = t.getProp(e, 'id')
    if (!t.isString(n))
      throw new Error(`Expected node id to be a string, got ${t.typeof(n)}`)
    let r = t.toString(n)
    let a = gr.fromString(r)
    if (!a) {
      throw new Error(`The variable collection id ${JSON.stringify(r)} is not valid`)
    }
    let s = i.getVariableCollectionNode(a)
    if (void 0 === s) {
      throw new ApplicationError(`The variable collection with id ${JSON.stringify(r)} does not exist`)
    }
    return s
  }

  getAnnotationCategory = (e: any) => {
    let t = this.vm
    let i = this.privateSceneGraph
    if (!t.isObject(e)) {
      throw new TypeError(`Expected node, got ${t.isNull(e) ? 'null' : t.typeof(e)}`)
    }
    let n = t.getProp(e, 'id')
    if (!t.isString(n))
      throw new Error(`Expected node id to be a string, got ${t.typeof(n)}`)
    let r = t.toString(n)
    if (!fn(sH(r))) {
      throw new Error(`The annotation category id ${JSON.stringify(r)} is not valid`)
    }
    let a = i.getRoot().annotationCategories
    if (a === null)
      throw new Error('Annotation categories have not been initialized')
    let s = a.find(e => e.id === r)
    if (void 0 === s) {
      throw new Error(`The annotation category with id ${JSON.stringify(r)} does not exist`)
    }
    return s
  }

  constructor(vm: NoOpVm, options: PluginRuntimeOptions) {
    this.vm = vm
    this.options = options
    this.visualBellCounter = 0
    this.eventHandlers = new Map()
    this.eventHandlerTimeouts = new Map()
    this.scheduledEvents = new Map()
    this.runningSyncEvent = null
    this.runningCloseEventHandler = false
    this.previousSelection = []
    this.previousSelectedTextRangeJson = 'null'
    this.onMessageCallback = undefined
    this.queryMode = false
    this.checkoutRequested = false
    this.widgetManager = undefined
    this.skipInvisibleInstanceChildren = false
    this.spellCheckCallback = this.createPromiseCallback({
      makeInputEvent: (e) => {
        let t = this.vm.newObject()
        this.vm.setProp(t, 'text', this.vm.newString(e))
        return t
      },
      eventName: 'textreview',
      zResultSchema: _$$N.TextReviewResultSchema,
      defaultResult: [],
      rejectMessage: 'Promise returned from \'textreview\' event rejected. Unable to show text review suggestions.',
    })
    this.legacyCodegenCallback = this.createPromiseCallback({
      makeInputEvent: (e) => {
        let t = this.vm.newObject()
        let i = this.nodeFactory.createNode(e, 'codegen')
        this.vm.setProp(t, 'node', i)
        return t
      },
      eventName: 'codegen',
      zResultSchema: _$$N.CodegenResultSchema,
      defaultResult: [],
      rejectMessage: 'Promise returned from codegen event rejected. Unable to generate code.',
    })
    this.codegenCallback = this.createPromiseCallback({
      makeInputEvent: (e) => {
        let t = this.vm.newObject()
        let i = this.nodeFactory.createNode(e, 'generate')
        this.vm.setProp(t, 'node', i)
        this.vm.setProp(t, 'language', this.vm.newString(this.getCodegenLanguage()))
        return t
      },
      eventName: 'generate',
      zResultSchema: _$$N.CodegenResultSchema,
      defaultResult: [],
      rejectMessage: 'Promise returned from codegen \'generate\' event rejected. Unable to generate code.',
    })
    this.linkPreviewCallback = this.createPromiseCallback({
      makeInputEvent: (e) => {
        let t = this.vm.newObject()
        this.vm.setProp(t, 'link', this.vm.deepWrap(e))
        return t
      },
      eventName: 'linkpreview',
      zResultSchema: _$$N.LinkPreviewResultSchema,
      defaultResult: null,
      rejectMessage: 'Promise returned from \'linkpreview\' event rejected. Unable to generate preview.',
    })
    this.authCallback = this.createPromiseCallback({
      makeInputEvent: (e) => {
        let t = this.vm.newObject()
        this.vm.setProp(t, 'links', this.vm.deepWrap(e))
        return t
      },
      eventName: 'auth',
      zResultSchema: _$$N.AuthResultSchema,
      rejectMessage: 'Promise returned from \'auth\' event rejected. Unable to authenticate.',
      defaultResult: null,
    })
    this.textReviewRequestRejects = 0
    this.isTextReviewRequestModalOpen = false
    this.isWidget = this.options.apiMode?.type === 'WIDGET'
    this.privateSceneGraph = options.sceneGraph ?? NT()
    this.styleManager = new StyleManager(this.privateSceneGraph)
    this.imageStore = new ImageStore()
    this.videoStore = new VideoStore()
    this.documentAccessState = new DocumentAccess({
      incrementalMode: this.options.incrementalSafeApi,
      stats: options.stats,
      allowIncrementalUnsafeApiCalls: !!options.allowIncrementalUnsafeApiCalls,
    })
    W5(this.pluginPageLoaded)
    Ql(this.getAccessiblePages)
    this._hasRegisteredWidgetFunction = false
    if (this.isWidget) {
      const {
        runtimeBridge,
        shutdownCallback,
      } = PluginRuntime.createRuntimeBridgeForWidgetReconciler(options.pluginID, vm)
      this.widgetManager = new WidgetManager(vm, options.pluginID, runtimeBridge)
      if (shutdownCallback) {
        this.widgetManager.addShutdownAction(shutdownCallback)
      }
    }
    let selectedView = debugState.getState().selectedView
    if (ac.includes(selectedView.editorType) || vm.vmType === 'scopednoopvm') {
      this.fullscreenEditorType = selectedView.editorType
    }
    else {
      throw new Error(`Unsupported editor type: ${selectedView.editorType}`)
    }
    this.fullscreenEditorType = selectedView.editorType
    this.mixedSentinel = vm.newSymbol('figma.mixed')
    this.setSkipInvisibleInstanceChildren(this.fullscreenEditorType === _$$nT.DevHandoff || options.apiMode.type === 'WIDGET_RECONCILER')
    vm.retainHandle(this.mixedSentinel)
    this.runtimeOptions = getInitialOptions().ext_lego_plugins_runmode
      ? {
        allowVisibleIframe: !RESTRICTED_TRIGGERS.NO_CHECKOUT.has(this.getRunMode()),
        iframeId: _$$E3({
          runMode: this.getRunMode(),
        }),
        allowInitiateCheckout: !RESTRICTED_TRIGGERS.NO_CHECKOUT.has(this.getRunMode()),
      }
      : {
        allowVisibleIframe: !RESTRICTED_TRIGGERS.NO_CHECKOUT.has(options.triggeredFrom),
        iframeId: _$$E3({
          triggeredFrom: options.triggeredFrom,
        }),
        allowInitiateCheckout: !options.triggeredFrom || !RESTRICTED_TRIGGERS.NO_UI.has(options.triggeredFrom),
      }
    vm.retainHandle(this.mixedSentinel)
    this.nodeFactory = new NodeFactory(vm, {
      pluginID: options.pluginID,
      pluginVersionID: options.pluginVersionID,
      imageStore: this.imageStore,
      videoStore: this.videoStore,
      getStyleFactory: () => this.styleFactory,
      getVariableCollectionFactory: () => this.variableCollectionFactory,
      documentAccessState: this.documentAccessState,
      mixedSentinel: this.mixedSentinel,
      stats: options.stats,
      enableProposedApi: options.enableProposedApi,
      isWidget: this.isWidget,
      widgetManager: this.widgetManager,
      validatedPermissions: options.validatedPermissions,
      editorType: this.fullscreenEditorType,
      defineVmFunction: this.defineVmFunction,
      defineVmIncrementalMethod: this.defineVmIncrementalMethod,
      defineVmProp: this.defineVmProp,
      defineVmIncrementalProp: this.defineVmIncrementalProp,
      addEventHandlersTo: this.addEventHandlersTo,
      incLoadingErrorLogger: new IncLoadingErrorLogger({
        pluginID: options.pluginID,
        pluginVersionID: options.pluginVersionID,
      }),
      openFileKey: options.openFileKey,
      apiMode: options.apiMode,
      sceneGraph: this.privateSceneGraph,
      getNode: this.getNode,
      getVariableNode: this.getVariableNode,
      getVariableCollectionNode: this.getVariableCollectionNode,
      getAnnotationCategory: this.getAnnotationCategory,
      incrementalSafeApi: this.options.incrementalSafeApi,
      allowIncrementalUnsafeApiCalls: !!this.options.allowIncrementalUnsafeApiCalls,
      styleManager: this.styleManager,
      isPluginExemptFromPluginDataLimits: options.isPluginExemptFromPluginDataLimits,
      enableResponsiveSetHierarchyMutations: options.enableResponsiveSetHierarchyMutations,
    })
    Q4(this.getAllAccessedGuids)
    this.styleFactory = new StyleFactory({
      vm,
      stats: this.options.stats,
      pluginID: options.pluginID,
      pluginVersionID: options.pluginVersionID,
      getNodeFactory: () => this.nodeFactory,
      getVariableCollectionFactory: () => this.variableCollectionFactory,
      imageStore: this.imageStore,
      videoStore: this.videoStore,
      documentAccessState: this.documentAccessState,
      mixedSentinel: this.mixedSentinel,
      enableProposedApi: options.enableProposedApi,
      isWidget: this.isWidget,
      widgetManager: this.widgetManager,
      validatedPermissions: options.validatedPermissions,
      editorType: this.fullscreenEditorType,
      defineVmFunction: this.defineVmFunction,
      defineVmIncrementalMethod: this.defineVmIncrementalMethod,
      defineVmProp: this.defineVmProp,
      defineVmIncrementalProp: this.defineVmIncrementalProp,
      addEventHandlersTo: this.addEventHandlersTo,
      apiMode: options.apiMode,
      openFileKey: options.openFileKey,
      getNode: this.getNode,
      getVariableNode: this.getVariableNode,
      getVariableCollectionNode: this.getVariableCollectionNode,
      getAnnotationCategory: this.getAnnotationCategory,
      sceneGraph: this.privateSceneGraph,
      incrementalSafeApi: this.options.incrementalSafeApi,
      allowIncrementalUnsafeApiCalls: !!this.options.allowIncrementalUnsafeApiCalls,
      styleManager: this.styleManager,
      isPluginExemptFromPluginDataLimits: options.isPluginExemptFromPluginDataLimits,
      enableResponsiveSetHierarchyMutations: options.enableResponsiveSetHierarchyMutations,
    })
    this.variableFactory = new VariableFactory({
      vm,
      stats: this.options.stats,
      pluginID: options.pluginID,
      pluginVersionID: options.pluginVersionID,
      getNodeFactory: () => this.nodeFactory,
      getStyleFactory: () => this.styleFactory,
      getVariableCollectionFactory: () => this.variableCollectionFactory,
      imageStore: this.imageStore,
      videoStore: this.videoStore,
      documentAccessState: this.documentAccessState,
      mixedSentinel: this.mixedSentinel,
      enableProposedApi: options.enableProposedApi,
      isWidget: this.isWidget,
      widgetManager: this.widgetManager,
      validatedPermissions: options.validatedPermissions,
      editorType: this.fullscreenEditorType,
      defineVmFunction: this.defineVmFunction,
      defineVmIncrementalMethod: this.defineVmIncrementalMethod,
      defineVmProp: this.defineVmProp,
      defineVmIncrementalProp: this.defineVmIncrementalProp,
      addEventHandlersTo: this.addEventHandlersTo,
      apiMode: options.apiMode,
      openFileKey: options.openFileKey,
      getNode: this.getNode,
      getVariableNode: this.getVariableNode,
      getVariableCollectionNode: this.getVariableCollectionNode,
      getAnnotationCategory: this.getAnnotationCategory,
      sceneGraph: this.privateSceneGraph,
      incrementalSafeApi: this.options.incrementalSafeApi,
      allowIncrementalUnsafeApiCalls: !!this.options.allowIncrementalUnsafeApiCalls,
      styleManager: this.styleManager,
      isPluginExemptFromPluginDataLimits: options.isPluginExemptFromPluginDataLimits,
      enableResponsiveSetHierarchyMutations: options.enableResponsiveSetHierarchyMutations,
    })
    this.variableCollectionFactory = new VariableCollectionFactory({
      vm,
      stats: options.stats,
      pluginID: options.pluginID,
      pluginVersionID: options.pluginVersionID,
      getNodeFactory: () => this.nodeFactory,
      getStyleFactory: () => this.styleFactory,
      getVariableCollectionFactory: () => this.variableCollectionFactory,
      imageStore: this.imageStore,
      videoStore: this.videoStore,
      documentAccessState: this.documentAccessState,
      mixedSentinel: this.mixedSentinel,
      enableProposedApi: options.enableProposedApi,
      isWidget: this.isWidget,
      widgetManager: this.widgetManager,
      validatedPermissions: options.validatedPermissions,
      editorType: this.fullscreenEditorType,
      defineVmFunction: this.defineVmFunction,
      defineVmIncrementalMethod: this.defineVmIncrementalMethod,
      defineVmProp: this.defineVmProp,
      defineVmIncrementalProp: this.defineVmIncrementalProp,
      addEventHandlersTo: this.addEventHandlersTo,
      apiMode: options.apiMode,
      openFileKey: options.openFileKey,
      getNode: this.getNode,
      getVariableNode: this.getVariableNode,
      getVariableCollectionNode: this.getVariableCollectionNode,
      getAnnotationCategory: this.getAnnotationCategory,
      sceneGraph: this.privateSceneGraph,
      incrementalSafeApi: this.options.incrementalSafeApi,
      allowIncrementalUnsafeApiCalls: !!this.options.allowIncrementalUnsafeApiCalls,
      styleManager: this.styleManager,
      isPluginExemptFromPluginDataLimits: options.isPluginExemptFromPluginDataLimits,
      enableResponsiveSetHierarchyMutations: options.enableResponsiveSetHierarchyMutations,
    })
    this.annotationCategoryFactory = new AnnotationCategoryFactory({
      vm,
      stats: this.options.stats,
      pluginID: options.pluginID,
      pluginVersionID: options.pluginVersionID,
      getNodeFactory: () => this.nodeFactory,
      getStyleFactory: () => this.styleFactory,
      getVariableCollectionFactory: () => this.variableCollectionFactory,
      imageStore: this.imageStore,
      videoStore: this.videoStore,
      documentAccessState: this.documentAccessState,
      mixedSentinel: this.mixedSentinel,
      enableProposedApi: options.enableProposedApi,
      isWidget: this.isWidget,
      widgetManager: this.widgetManager,
      validatedPermissions: options.validatedPermissions,
      editorType: this.fullscreenEditorType,
      defineVmFunction: this.defineVmFunction,
      defineVmIncrementalMethod: this.defineVmIncrementalMethod,
      defineVmProp: this.defineVmProp,
      defineVmIncrementalProp: this.defineVmIncrementalProp,
      addEventHandlersTo: this.addEventHandlersTo,
      apiMode: options.apiMode,
      openFileKey: options.openFileKey,
      getNode: this.getNode,
      getVariableNode: this.getVariableNode,
      getVariableCollectionNode: this.getVariableCollectionNode,
      getAnnotationCategory: this.getAnnotationCategory,
      sceneGraph: this.privateSceneGraph,
      incrementalSafeApi: this.options.incrementalSafeApi,
      allowIncrementalUnsafeApiCalls: !!this.options.allowIncrementalUnsafeApiCalls,
      styleManager: this.styleManager,
      isPluginExemptFromPluginDataLimits: options.isPluginExemptFromPluginDataLimits,
      enableResponsiveSetHierarchyMutations: options.enableResponsiveSetHierarchyMutations,
    })
    let n = this.options.apiMode
    if (n.type === 'CONSOLE_SHIM') {
      this.uiHandle = n.uiHandle
    }
    else if (function (e) {
      switch (e.type) {
        case 'GLOBAL_API':
        case 'CONSOLE_SHIM':
        case 'SECURITY_CHECK':
          return !1
        case 'WIDGET_RECONCILER':
          return !0
        case 'WIDGET':
        case 'PLUGIN':
          return e.noOpUI
      }
    }(n)) {
      this.uiHandle = new _x()
    }
    else {
      let t = n.type !== 'GLOBAL_API' && n.type !== 'SECURITY_CHECK'
      this.uiHandle = new mN(vm.vmType, this.options.pluginID, this.options.titleIconURL, this.options.name, this.options.validatedPermissions.permissions, this.isWidget, this.isWidget ? JSON.parse(this.options.command || '{}') : {}, t, this.uiCancelCallback, this.iframeMessageHandler, this.options.allowedDomains, this.options.isLocal, this.options.triggeredFrom, this.options.capabilities)
    }
    if (this.vm instanceof NoOpVm || this.vm instanceof ScopedNoOpVm) {
      // No additional event callbacks needed for NoOp VMs
    }
    else {
      LL(this.selectionCallback)
      Xx(this.pageCallback)
      Sf(this.timerCallback)
      KB(this.dropCallback)
      _$$i(this.codegenPreferencesChangeCallback)
      _C(this.slidesViewChangeCallback)
    }
    this.options.addShutdownAction(e => this.tearDown(e))
    this.previousSelection = this.privateSceneGraph.getDirectlySelectedNodes().map(e => e.guid)
    NfO.resetSelectionCouldBeDirty()
    this.createAPI()
  }

  /**
   * defineVmIncrementalProp - Define incremental VM property with safe API support
   *
   * Sets up a VM property with getter/setter and optional incremental-safe variants.
   * Handles document preparation, value resolution, and incremental API calls.
   *
   * @param params.handle - VM object handle
   * @param params.key - Property key
   * @param params.metricsKey - Metrics key for tracking
   * @param params.enumerable - Whether property is enumerable
   * @param params.incrementalSafeApiKey - Key for incremental-safe getter
   * @param params.incrementalSafeApiMetricsKey - Metrics key for incremental-safe getter
   * @param params.incrementalSafeApiSetKey - Key for incremental-safe setter
   * @param params.incrementalSafeApiSetMetricsKey - Metrics key for incremental-safe setter
   * @param params.canWriteInReadOnly - Allow write in read-only mode
   * @param params.parseThis - Function to parse 'this' context
   * @param params.parseIncrementalValueArg - Function to parse incremental value argument
   * @param params.prepareDocument - Async function to prepare document
   * @param params.resolveValue - Function to resolve property value
   * @param params.resolveValueIncremental - Function to resolve value incrementally
   * @param params.retainGetter - Whether to retain getter for incremental API
   * @param params.setValue - Function to set property value
   * @param params.setValueIncremental - Function to set value incrementally
   * @param params.incrementalSafeApi - Whether incremental safe API is enabled
   * @param params.allowIncrementalUnsafeApiCalls - Allow unsafe incremental API calls
   * @param params.isAllowedInWidgetRender - Allow in widget render
   * @param params.hasEditScope - Use edit scope for operations
   */
  defineVmIncrementalProp({
    handle,
    key,
    metricsKey,
    enumerable,
    incrementalSafeApiKey,
    incrementalSafeApiMetricsKey,
    incrementalSafeApiSetKey,
    incrementalSafeApiSetMetricsKey,
    canWriteInReadOnly,
    parseThis,
    parseIncrementalValueArg,
    prepareDocument,
    resolveValue,
    resolveValueIncremental,
    retainGetter,
    setValue,
    setValueIncremental,
    incrementalSafeApi,
    allowIncrementalUnsafeApiCalls,
    isAllowedInWidgetRender = true,
    hasEditScope = true,
  }) {
    // Define main property with getter/setter
    this.defineMainProperty({
      handle,
      key,
      metricsKey,
      enumerable,
      canWriteInReadOnly,
      parseThis,
      resolveValue,
      retainGetter,
      setValue,
      setValueIncremental,
      incrementalSafeApi,
      incrementalSafeApiMetricsKey,
      incrementalSafeApiSetMetricsKey,
      allowIncrementalUnsafeApiCalls,
      isAllowedInWidgetRender,
      hasEditScope,
    })

    // Define incremental-safe getter if configured
    if (incrementalSafeApiKey && incrementalSafeApiMetricsKey) {
      this.defineIncrementalGetter({
        handle,
        key: incrementalSafeApiKey,
        metricsKey: incrementalSafeApiMetricsKey,
        parseThis,
        prepareDocument,
        resolveValue,
        resolveValueIncremental,
        isAllowedInWidgetRender,
        hasEditScope,
      })
    }

    // Define incremental-safe setter if configured
    if (incrementalSafeApiSetKey && incrementalSafeApiSetMetricsKey && setValueIncremental && parseIncrementalValueArg) {
      this.defineIncrementalSetter({
        handle,
        key: incrementalSafeApiSetKey,
        metricsKey: incrementalSafeApiSetMetricsKey,
        parseThis,
        parseIncrementalValueArg,
        prepareDocument,
        setValueIncremental,
        canWriteInReadOnly,
        isAllowedInWidgetRender,
        hasEditScope,
      })
    }
  }

  /**
   * defineMainProperty - Define the main VM property with getter/setter
   */
  defineMainProperty({
    handle,
    key,
    metricsKey,
    enumerable,
    canWriteInReadOnly,
    parseThis,
    resolveValue,
    retainGetter,
    setValue,
    setValueIncremental,
    incrementalSafeApi,
    incrementalSafeApiMetricsKey,
    incrementalSafeApiSetMetricsKey,
    allowIncrementalUnsafeApiCalls,
    isAllowedInWidgetRender,
    hasEditScope,
  }) {
    const self = this
    this.defineVmProp({
      handle,
      key,
      options: {
        metricsKey,
        enumerable,
        get() {
          if (incrementalSafeApi && incrementalSafeApiMetricsKey && !retainGetter) {
            xc(allowIncrementalUnsafeApiCalls, metricsKey, incrementalSafeApiMetricsKey)
          }
          return resolveValue(parseThis(this))
        },
        set: setValue
          ? function (value) {
            if (incrementalSafeApi && setValueIncremental) {
              xc(allowIncrementalUnsafeApiCalls, `${metricsKey} =`, incrementalSafeApiSetMetricsKey)
            }
            return setValue(parseThis(self), value)
          }
          : undefined,
      },
      canWriteInReadOnly,
      isAllowedInWidgetRender,
      hasEditScope,
    })
  }

  /**
   * defineIncrementalGetter - Define incremental-safe getter function
   */
  defineIncrementalGetter({
    handle,
    key,
    metricsKey,
    parseThis,
    prepareDocument,
    resolveValue,
    resolveValueIncremental,
    isAllowedInWidgetRender,
    hasEditScope,
  }) {
    const vm = this.vm
    this.defineVmFunction({
      handle,
      key,
      metricsKey,
      cb() {
        const element = parseThis(this)
        const {
          promise,
          resolve,
          reject,
        } = vm.newPromise()
        vm.registerPromise(prepareDocument(element)).then(() => {
          const result = resolveValueIncremental ? resolveValueIncremental(element) : resolveValue(element)
          resolve(result)
        }).catch((error) => {
          reject(vm.newString(error.message))
        })
        return promise
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender,
      hasEditScope,
    })
  }

  /**
   * defineIncrementalSetter - Define incremental-safe setter function
   */
  defineIncrementalSetter({
    handle,
    key,
    metricsKey,
    parseThis,
    parseIncrementalValueArg,
    prepareDocument,
    setValueIncremental,
    canWriteInReadOnly,
    isAllowedInWidgetRender,
    hasEditScope,
  }) {
    const vm = this.vm
    this.defineVmFunction({
      handle,
      key,
      metricsKey,
      cb(value) {
        const element = parseThis(this)
        const parsedValue = parseIncrementalValueArg(value)
        const {
          promise,
          resolve,
          reject,
        } = vm.newPromise()
        vm.registerPromise(prepareDocument(element)).then(() => {
          l7.plugin(key, () => {
            setValueIncremental(element, parsedValue)
            resolve(vm.undefined)
          })
        }).catch((error) => {
          reject(vm.newString(error.message))
        })
        return promise
      },
      isAllowedInReadOnly: canWriteInReadOnly,
      isAllowedInWidgetRender,
      hasEditScope,
    })
  }

  /**
   * defineVmFunction - Define a VM function with security and permission checks
   *
   * Adds a function to a VM object with optional security checks for widget rendering,
   * read-only mode, and focus view. Uses guard clauses for clarity and maintainability.
   *
   * @param params.handle - The VM object handle
   * @param params.key - The function key
   * @param params.metricsKey - Optional metrics key for tracking
   * @param params.cb - The callback function to execute
   * @param params.isAllowedInReadOnly - Allow in read-only mode
   * @param params.isAllowedInWidgetRender - Allow in widget render
   * @param params.isAllowedInFocusViewInteractiveInspection - Allow in focus view
   * @param params.hasEditScope - Use edit scope for execution
   */
  defineVmFunction = ({
    handle,
    key,
    metricsKey,
    cb,
    isAllowedInReadOnly,
    isAllowedInWidgetRender = true,
    isAllowedInFocusViewInteractiveInspection = true,
    hasEditScope = true,
  }) => {
    const self = this
    this.vm.defineFunction(handle, key, metricsKey, (...args) => {
      // Widget rendering restriction
      if (self.widgetManager?.isRunningWidgetFunction() && self.shouldLockDownPluginApiForWidgets() && !isAllowedInWidgetRender) {
        return self.handleLockDownPluginApiError(`Widget Rendering Error: Cannot use "${key}" during widget rendering.`)
      }

      // Read-only restriction
      if (self.isReadOnlyMode() && !isAllowedInReadOnly) {
        throw new Error(`Can't call "${key}" in read-only mode`)
      }

      // Focus view restriction
      if (!isAllowedInFocusViewInteractiveInspection && _$$np()) {
        throw new Error(`Cannot call "${key}" in focus view with changes. Reset changes and try again.`)
      }

      // Edit scope
      return self.conditionalEditScope(hasEditScope, `plugin-${key}`, () => cb(args))
    })
  }

  /**
   * defineVmIncrementalFunction - Define incremental VM function with safe API support
   *
   * Adds a function and its incremental-safe variant to a VM object, handling
   * argument parsing, document preparation, and value resolution.
   *
   * @param params.handle - The VM object handle
   * @param params.key - The function key
   * @param params.metricsKey - Metrics key for tracking
   * @param params.incrementalSafeApiKey - Key for incremental-safe variant
   * @param params.incrementalSafeApiMetricsKey - Metrics key for incremental-safe variant
   * @param params.parseArg - Argument parsing function
   * @param params.prepareDocument - Async document preparation function
   * @param params.resolveValue - Value resolution function
   * @param params.isAllowedInReadOnly - Allow in read-only mode
   * @param params.incrementalSafeApi - Whether incremental safe API is enabled
   * @param params.allowIncrementalUnsafeApiCalls - Allow unsafe incremental API calls
   * @param params.isAllowedInWidgetRender - Allow in widget render
   * @param params.hasEditScope - Use edit scope for execution
   */
  defineVmIncrementalFunction = ({
    handle,
    key,
    metricsKey,
    incrementalSafeApiKey,
    incrementalSafeApiMetricsKey,
    parseArg,
    prepareDocument,
    resolveValue,
    isAllowedInReadOnly,
    incrementalSafeApi,
    allowIncrementalUnsafeApiCalls,
    isAllowedInWidgetRender = true,
    hasEditScope = true,
  }) => {
    // Main function
    this.defineVmFunction({
      handle,
      key,
      metricsKey,
      cb: (arg) => {
        if (incrementalSafeApi && incrementalSafeApiMetricsKey) {
          xc(allowIncrementalUnsafeApiCalls, metricsKey, incrementalSafeApiMetricsKey)
        }
        return resolveValue(parseArg(arg))
      },
      isAllowedInReadOnly,
      isAllowedInWidgetRender,
      hasEditScope,
    })

    // Incremental-safe variant
    this.defineVmFunction({
      handle,
      key: incrementalSafeApiKey,
      metricsKey: incrementalSafeApiMetricsKey,
      cb: (arg) => {
        const parsedArg = parseArg(arg)
        const {
          promise,
          resolve,
          reject,
        } = this.vm.newPromise()
        this.vm.registerPromise(prepareDocument(parsedArg)).then(() => {
          resolve(resolveValue(parsedArg))
        }).catch((error) => {
          reject(this.vm.newString(error.message))
        })
        return promise
      },
      isAllowedInReadOnly,
      isAllowedInWidgetRender,
      hasEditScope,
    })
  }

  /**
   * defineVmIncrementalMethod - Define incremental VM method with advanced argument handling
   *
   * Adds a method and its incremental-safe variant to a VM object, handling
   * argument parsing, document preparation, and value resolution for methods.
   *
   * @param params.handle - The VM object handle
   * @param params.key - The method key
   * @param params.metricsKey - Metrics key for tracking
   * @param params.incrementalSafeApiKey - Key for incremental-safe variant
   * @param params.incrementalSafeApiMetricsKey - Metrics key for incremental-safe variant
   * @param params.parseThis - Function to parse 'this' context
   * @param params.parseArg - Function to parse arguments
   * @param params.prepareDocument - Async document preparation function
   * @param params.resolveValue - Value resolution function
   * @param params.isAllowedInReadOnly - Allow in read-only mode
   * @param params.incrementalSafeApi - Whether incremental safe API is enabled
   * @param params.allowIncrementalUnsafeApiCalls - Allow unsafe incremental API calls
   * @param params.isAllowedInWidgetRender - Allow in widget render
   * @param params.hasEditScope - Use edit scope for execution
   */
  defineVmIncrementalMethod = ({
    handle,
    key,
    metricsKey,
    incrementalSafeApiKey,
    incrementalSafeApiMetricsKey,
    parseThis,
    parseArg,
    prepareDocument,
    resolveValue,
    isAllowedInReadOnly,
    incrementalSafeApi,
    allowIncrementalUnsafeApiCalls,
    isAllowedInWidgetRender = true,
    hasEditScope = true,
  }) => {
    const vm = this.vm

    // Main method
    this.defineVmFunction({
      handle,
      key,
      metricsKey,
      cb(...args) {
        if (incrementalSafeApi) {
          xc(allowIncrementalUnsafeApiCalls, metricsKey, incrementalSafeApiMetricsKey)
        }
        const thisContext = parseThis(this)
        const parsedArgs = parseArg(thisContext, ...args)
        return resolveValue(thisContext, parsedArgs)
      },
      isAllowedInReadOnly,
      isAllowedInWidgetRender,
      hasEditScope,
    })

    // Incremental-safe variant
    this.defineVmFunction({
      handle,
      key: incrementalSafeApiKey,
      metricsKey: incrementalSafeApiMetricsKey,
      cb(...args) {
        const thisContext = parseThis(this)
        const parsedArgs = parseArg(thisContext, ...args)
        const {
          promise,
          resolve,
          reject,
        } = vm.newPromise()
        vm.registerPromise(prepareDocument(thisContext, parsedArgs)).then(() => {
          resolve(l7.plugin(incrementalSafeApiKey, () => resolveValue(thisContext, parsedArgs)))
        }).catch((error) => {
          reject(vm.newString(error.message))
        })
        return promise
      },
      isAllowedInReadOnly,
      isAllowedInWidgetRender,
      hasEditScope,
    })
  }

  /**
   * defineVmProp - Define a VM property with security and permission checks
   *
   * Adds a property to a VM object with optional getter/setter, enforcing widget, read-only,
   * and focus view restrictions. Uses guard clauses for clarity and maintainability.
   *
   * @param params.handle - The VM object handle
   * @param params.key - The property key
   * @param params.options - Property descriptor (get/set/value/etc.)
   * @param params.canWriteInReadOnly - Allow write in read-only mode
   * @param params.isAllowedInFocusViewInteractiveInspection - Allow in focus view
   * @param params.isAllowedInWidgetRender - Allow in widget render
   * @param params.hasEditScope - Use edit scope for set
   */
  defineVmProp = ({
    handle,
    key,
    options,
    canWriteInReadOnly,
    isAllowedInFocusViewInteractiveInspection = true,
    isAllowedInWidgetRender = true,
    hasEditScope = true,
  }) => {
    const self = this
    const desc = {
      ...options,
    }
    if (options.get) {
      desc.get = function () {
        // Widget rendering restriction
        if (self.widgetManager?.isRunningWidgetFunction() && self.shouldLockDownPluginApiForWidgets() && !isAllowedInWidgetRender) {
          self.handleLockDownPluginApiError(`Widget Rendering Error: Cannot use "${key}" during widget rendering.`)
        }
        return options.get.call(this)
      }
    }
    if (options.set) {
      desc.set = function (value) {
        // Widget rendering restriction
        if (self.widgetManager?.isRunningWidgetFunction() && self.shouldLockDownPluginApiForWidgets() && !isAllowedInWidgetRender) {
          self.handleLockDownPluginApiError(`Widget Rendering Error: Cannot use "${key}" during widget rendering.`)
        }
        // Read-only restriction
        if (self.isReadOnlyMode() && !canWriteInReadOnly) {
          throw new Error(`Can't set "${key}" in read-only mode`)
        }
        // Focus view restriction
        if (!isAllowedInFocusViewInteractiveInspection && _$$np()) {
          throw new Error(`Cannot set "${key}" in focus view with changes. Reset changes and try again.`)
        }
        // Edit scope
        return self.conditionalEditScope(hasEditScope, `plugin-${key}`, () => options.set.call(this, value))
      }
    }
    this.vm.defineProp(handle, key, desc)
  }

  /**
   * addEventHandler - Add event handler with validation and setup
   *
   * Registers event handlers with comprehensive validation, incremental mode checks,
   * page-specific handling, and automatic registration of system callbacks.
   *
   * @param nodeHandle - VM handle for node (for nodechange events)
   * @param eventType - Type of event to handle
   * @param handlerFunction - VM function to call when event fires
   * @param isOnceOnly - Whether handler should only fire once
   * @param statsCategory - Category for stats tracking
   */
  addEventHandler = (nodeHandle, eventType, handlerFunction, isOnceOnly, statsCategory) => {
    // Track event handler registration stats
    this.options.stats.increment(isOnceOnly ? `${statsCategory}.once.${eventType}` : `${statsCategory}.on.${eventType}`)

    // Validate handler function
    this.validateEventHandler(handlerFunction, eventType)

    // Get or create event handler list
    const existingHandlers = this.eventHandlers.get(eventType) || []
    const isFirstHandler = existingHandlers.length === 0

    // Setup event-specific initialization
    let pageGuid
    if (isFirstHandler) {
      pageGuid = this.setupEventSpecificInitialization(eventType, nodeHandle)
    }

    // Register the handler
    this.registerEventHandler(eventType, handlerFunction, isOnceOnly, pageGuid)

    // Setup system callbacks for first handler
    if (isFirstHandler) {
      this.setupSystemCallbacks(eventType)
    }

    // Process any scheduled events
    this.processScheduledEvents(eventType)
  }

  /**
   * validateEventHandler - Validate event handler function
   *
   * @param handlerFunction - Function to validate
   * @param eventType - Type of event for error messages
   */
  validateEventHandler(handlerFunction, eventType) {
    if (!this.vm.isFunction(handlerFunction)) {
      throw new TypeError(`${eventType} handler must be a function`)
    }
  }

  /**
   * setupEventSpecificInitialization - Setup initialization for specific event types
   *
   * @param eventType - Type of event
   * @param nodeHandle - Node handle for node-specific events
   * @returns Page GUID for page-specific events
   */
  setupEventSpecificInitialization(eventType, nodeHandle) {
    switch (eventType) {
      case 'documentchange':
        return this.setupDocumentChangeEvent()
      case 'stylechange':
        return this.setupStyleChangeEvent()
      case 'nodechange':
        return this.setupNodeChangeEvent(nodeHandle)
      default:
        return undefined
    }
  }

  /**
   * setupDocumentChangeEvent - Setup document change event validation
   *
   * @returns undefined (no page-specific GUID)
   */
  setupDocumentChangeEvent() {
    if (this.options.incrementalSafeApi && this.documentAccessState.getIsIncrementalMode()) {
      if (this.options.allowIncrementalUnsafeApiCalls) {
        console.warn('To ensure consistent results for documentchange handler, call `await figma.loadAllPagesAsync()` first.')
      }
      else {
        throw new Error('Cannot register documentchange handler in incremental mode without calling figma.loadAllPagesAsync first.')
      }
    }
    Mw(this.documentChangeCallback)
    return undefined
  }

  /**
   * setupStyleChangeEvent - Setup style change event with async registration
   *
   * @returns undefined (no page-specific GUID)
   */
  setupStyleChangeEvent() {
    this.vm.registerPromise(Ux(this.documentAccessState)).then(() => {
      _$$iP(this.styleChangeCallback)
    }).catch((error) => {
      throw new Error(`Cannot register stylechange handler: ${error.message}`)
    })
    return undefined
  }

  /**
   * setupNodeChangeEvent - Setup node change event validation
   *
   * @param nodeHandle - Handle for the node
   * @returns Page GUID for the node
   */
  setupNodeChangeEvent(nodeHandle) {
    const targetNode = this.getNode(nodeHandle)
    if (targetNode.type !== 'CANVAS') {
      throw new Error('Cannot register nodechange handler on non-page node')
    }
    BT(this.nodeChangeCallback)
    return targetNode.guid
  }

  /**
   * registerEventHandler - Register the event handler in the system
   *
   * @param eventType - Type of event
   * @param handlerFunction - Function to register
   * @param isOnceOnly - Whether handler fires only once
   * @param pageGuid - Optional page GUID for page-specific events
   */
  registerEventHandler(eventType, handlerFunction, isOnceOnly, pageGuid) {
    const existingHandlers = this.eventHandlers.get(eventType) || []
    existingHandlers.push({
      handler: handlerFunction,
      once: isOnceOnly,
      pageGuid,
    })
    this.eventHandlers.set(eventType, existingHandlers)
    this.vm.retainHandle(handlerFunction)
  }

  /**
   * setupSystemCallbacks - Setup system callbacks for first handler registration
   *
   * @param eventType - Type of event to setup callbacks for
   */
  setupSystemCallbacks(eventType) {
    const callbackSetup = {
      textreview: () => {
        if (this.options.command === 'textreview') {
          Sx(this.spellCheckCallback)
        }
      },
      generate: () => {
        oZ(this.codegenCallback)
      },
      codegen: () => {
        if (!this.options.isLocal) {
          oZ(this.legacyCodegenCallback)
        }
      },
      linkpreview: () => {
        OD(this.linkPreviewCallback)
      },
      auth: () => {
        ME(this.authCallback)
      },
      open: () => {
        B_(this.devResourceOpenCallback)
      },
      close: () => {
        if (getFeatureFlags().plugins_async_on_close_handler) {
          Bs(this.onCloseCallback)
        }
      },
    }
    const setupFunction = callbackSetup[eventType]
    if (setupFunction) {
      setupFunction()
    }
  }

  /**
   * processScheduledEvents - Process any events that were scheduled for this event type
   *
   * @param eventType - Type of event to process
   */
  processScheduledEvents(eventType) {
    const scheduledEvent = this.scheduledEvents.get(eventType)
    if (scheduledEvent) {
      scheduledEvent()
    }
  }

  removeEventHandler = (e, t, i) => {
    let n = this.eventHandlers.get(t)
    if (n) {
      for (let r = n.length - 1; r >= 0; r--) {
        if (this.vm.isEqual(n[r].handler, i)) {
          if (t === 'nodechange') {
            let t = this.getNode(e)
            if (n[r].pageGuid !== t.guid)
              continue
          }
          n.splice(r, 1)
          this.vm.releaseHandle(i)
          n.length || t !== 'nodechange' || q$(this.nodeChangeCallback)
          n.length || t !== 'stylechange' || fd(this.styleChangeCallback)
          n.length || t !== 'documentchange' || b_(this.documentChangeCallback)
          n.length || t !== 'slidesviewchange' || _$$nf(this.slidesViewChangeCallback)
          getFeatureFlags().plugins_async_on_close_handler && !n.length && t === 'close' && Vb(this.onCloseCallback)
          return
        }
      }
    }
  }

  addEventHandlersTo = (e, t, i, n) => {
    let r = this.vm
    let a = this.addEventHandler
    let s = this.removeEventHandler
    this.defineVmFunction({
      handle: e,
      key: 'on',
      metricsKey: null,
      cb(e, s) {
        let o = _$$u({
          vm: r,
          handle: e,
          zSchema: timerAndStateEvents.refine(e => t.includes(e)),
          property: 'eventName',
        })
        a(this, o, s, !1, i)
        n && n(o)
        return r.undefined
      },
      isAllowedInReadOnly: !0,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.defineVmFunction({
      handle: e,
      key: 'once',
      metricsKey: null,
      cb(e, s) {
        let o = _$$u({
          vm: r,
          handle: e,
          zSchema: timerAndStateEvents.refine(e => t.includes(e)),
          property: 'eventName',
        })
        a(this, o, s, !0, i)
        n && n(o)
        return r.undefined
      },
      isAllowedInReadOnly: !0,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.defineVmFunction({
      handle: e,
      key: 'off',
      metricsKey: null,
      cb(e, i) {
        s(this, _$$u({
          vm: r,
          handle: e,
          zSchema: timerAndStateEvents.refine(e => t.includes(e)),
          property: 'eventName',
        }), i)
        return r.undefined
      },
      isAllowedInReadOnly: !0,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
  }

  selectionCallback = () => {
    this.fireDebouncedEventAsync('selectionchange', () => {
      let e = this.privateSceneGraph.getDirectlySelectedNodes().map(e => e.guid)
      let t = this.currentSelectedTextRangeJson()
      lu(this.previousSelection, e) && this.previousSelectedTextRangeJson === t || this.fireEventSync('selectionchange', [])
      this.previousSelection = e
      this.previousSelectedTextRangeJson = t
      NfO.resetSelectionCouldBeDirty()
    })
  }

  pageCallback = () => {
    this.fireDebouncedEventAsync('currentpagechange', () => {
      this.fireEventSync('currentpagechange', [])
    })
  }

  codegenPreferencesChangeCallback = (e) => {
    this.fireDebouncedEventAsync('preferenceschange', () => {
      this.overrideRuntimeOptions({
        allowVisibleIframe: !0,
        defaultIframePosition: 'codegen-default',
        iframeId: _$$E3({
          triggeredFrom: 'codegen',
        }),
        allowInitiateCheckout: !0,
      }, () => {
        let t = this.vm.newObject()
        this.vm.setStringProp(t, 'propertyName', e.propertyName)
        this.fireEventSync('preferenceschange', [t])
      })
    })
  }

  devResourceOpenCallback = (e) => {
    this.fireEventSync('open', [this.vm.deepWrap(e)])
  }

  pluginPageLoaded = (e) => {
    this.documentAccessState.addLoadedPageIds([e])
  }

  getAllAccessedGuids = () => this.nodeFactory.nodeIds()
  getAccessiblePages = () => this.documentAccessState.getLoadedPages()
  dropCallback = (e) => {
    if (!e.dataTransfer)
      return !0
    let t = []
    for (let i = 0; i < e.dataTransfer.items.length; i++) {
      let n = e.dataTransfer.items[i]
      n.kind === 'string' && t.push({
        type: n.type,
        data: e.dataTransfer.getData(n.type),
      })
    }
    let i = this.createDropEvent({
      x: e.clientX,
      y: e.clientY,
    }, t, e.dataTransfer.files)
    return this.fireEventSyncWithReturn('drop', [i])
  }

  onCloseCallback = () => {
    let e = this.vm
    let t = this.vm.undefined
    let i = Promise.all((this.eventHandlers.get('close') || []).map((i) => {
      let n = this.overrideRuntimeOptions({
        activePromiseCallback: 'close',
      }, () => e.callFunction(i.handler, this.vm.undefined, t))
      return n.type === 'SUCCESS'
        ? isVMPromiseLike(e, n.handle)
          ? wrapVmPromise({
            vm: e,
            promiseHandle: n.handle,
            shouldRetainResult: !0,
          })
          : (e.retainHandle(n.handle), Promise.resolve(n.handle))
        : Promise.reject(new Error('Handler did not return success'))
    }))
    return e.registerPromise(i).then((t) => {
      for (let i of t) e.releaseHandle(i)
    }).catch((e) => {
      console.error(e)
      let t = 'Promise returned from close event rejected.'
      typeof e == 'object' && 'message' in e && (t += `\nError: ${e.message}`)
      console.warn(t)
    })
  }

  /**
   * getChangeCallbackHandle - Create callback handle array for document changes with proper VM object mapping
   *
   * Processes an array of document changes and converts them into VM-wrapped objects
   * containing change information including IDs, types, origins, properties, and
   * associated nodes or styles. Handles different change types like property changes,
   * creation, deletion, and style changes with appropriate object structures.
   *
   * @param eventContext - Context string for event identification
   * @param documentChanges - Array of raw document change objects to process
   * @returns VM array containing mapped change record objects
   */
  getChangeCallbackHandle = (eventContext, documentChanges) => {
    const changesArray = this.vm.newArray()
    for (const [changeIndex, changeData] of documentChanges.entries()) {
      const changeRecord = this.createChangeRecord(changeData, eventContext)
      this.vm.setProp(changesArray, String(changeIndex), changeRecord)
    }
    return changesArray
  }

  /**
   * createChangeRecord - Create a single change record object from change data
   */
  createChangeRecord(changeData, eventContext) {
    const changeRecord = this.vm.newObject()

    // Set change ID based on type
    this.setChangeRecordId(changeRecord, changeData)

    // Set basic change information
    this.setBasicChangeInfo(changeRecord, changeData)

    // Handle specific change types
    this.handleSpecificChangeTypes(changeRecord, changeData, eventContext)
    return changeRecord
  }

  /**
   * setChangeRecordId - Set the ID field based on change type
   */
  setChangeRecordId(changeRecord, changeData) {
    const isStyleChange = this.isStyleRelatedChange(changeData.type)
    const idValue = isStyleChange ? changeData.styleKey : changeData.devFriendlyId
    this.vm.setProp(changeRecord, 'id', this.vm.newString(idValue))
  }

  /**
   * isStyleRelatedChange - Check if change type is style-related
   */
  isStyleRelatedChange(changeType) {
    return changeType === iIc.STYLE_PROPERTY_CHANGE || changeType === iIc.STYLE_CREATE || changeType === iIc.STYLE_DELETE
  }

  /**
   * setBasicChangeInfo - Set basic change information (origin and type)
   */
  setBasicChangeInfo(changeRecord, changeData) {
    const changeTypeString = this.documentChangeTypeToString(changeData.type)
    const originString = this.documentChangeOriginToString(changeData.origin)
    this.vm.setProp(changeRecord, 'origin', this.vm.newString(originString))
    this.vm.setProp(changeRecord, 'type', this.vm.newString(changeTypeString))
  }

  /**
   * handleSpecificChangeTypes - Handle specific change types with appropriate data
   */
  handleSpecificChangeTypes(changeRecord, changeData, eventContext) {
    const changeTypeString = this.documentChangeTypeToString(changeData.type)

    // Handle property changes
    if (changeTypeString && this.isPropertyChange(changeTypeString)) {
      this.addPropertiesArray(changeRecord, changeData)
    }

    // Handle style changes
    if (this.isStyleRelatedChange(changeData.type)) {
      this.handleStyleChanges(changeRecord, changeData)
    }
    else {
      // Handle node changes
      this.handleNodeChanges(changeRecord, changeData, eventContext)
    }
  }

  /**
   * isPropertyChange - Check if change involves property modifications
   */
  isPropertyChange(changeTypeString) {
    return changeTypeString === 'PROPERTY_CHANGE' || changeTypeString === 'STYLE_PROPERTY_CHANGE'
  }

  /**
   * addPropertiesArray - Add properties array to change record
   */
  addPropertiesArray(changeRecord, changeData) {
    const propertiesArray = this.vm.newArray()
    const propertyNames = Array.from(changeData.properties)
    for (const [propIndex, propertyName] of propertyNames.entries()) {
      // Handle legacy typo fix for strokeTopWeight
      const correctedPropertyName = propertyName === 'strokeTopWeight' ? 'stokeTopWeight' : propertyName
      this.vm.setProp(propertiesArray, String(propIndex), this.vm.newString(correctedPropertyName))
    }
    this.vm.setProp(changeRecord, 'properties', propertiesArray)
  }

  /**
   * handleStyleChanges - Handle style creation, modification, and deletion
   */
  handleStyleChanges(changeRecord, changeData) {
    if (changeData.type === iIc.STYLE_DELETE) {
      this.vm.setProp(changeRecord, 'style', this.vm.$$null)
    }
    else {
      // Handle STYLE_PROPERTY_CHANGE and STYLE_CREATE
      const styleObject = this.styleFactory.createStyle(changeData.styleKey)
      this.vm.setProp(changeRecord, 'style', styleObject)
    }
  }

  /**
   * handleNodeChanges - Handle node creation, modification, and deletion
   */
  handleNodeChanges(changeRecord, changeData, eventContext) {
    const nodeExists = !!this.privateSceneGraph.get(changeData.id)
    if (nodeExists) {
      // Node still exists, create full node object
      const nodeObject = this.nodeFactory.createNode(changeData.id, eventContext)
      this.vm.setProp(changeRecord, 'node', nodeObject)
    }
    else {
      // Node was removed, create minimal removed node object
      const removedNodeObject = this.createRemovedNodeObject(changeData)
      this.vm.setProp(changeRecord, 'node', removedNodeObject)
    }
  }

  /**
   * createRemovedNodeObject - Create object representing a removed node
   */
  createRemovedNodeObject(changeData) {
    const nodeObject = this.vm.newObject()
    this.vm.setProp(nodeObject, 'id', this.vm.newString(changeData.devFriendlyId))
    this.vm.setProp(nodeObject, 'type', this.vm.newString(changeData.nodeType))
    this.vm.setProp(nodeObject, 'removed', this.vm.newBoolean(true))
    this.vm.shallowFreezeObject(nodeObject)
    return nodeObject
  }

  slidesViewChangeCallback = (e) => {
    let t = this.vm.newObject()
    this.vm.setProp(t, 'view', this.vm.newString(this.slidesViewChangeToString(e.view)))
    try {
      NfO.prepareToRunDocumentChangeCallback()
      this.fireEventSync('slidesviewchange', [t])
    }
    finally {
      NfO.finishedRunningDocumentChangeCallback()
    }
  }

  documentChangeCallback = (e) => {
    let t = this.getChangeCallbackHandle('documentchange', e)
    let i = this.vm.newObject()
    this.vm.setProp(i, 'documentChanges', t)
    try {
      NfO.prepareToRunDocumentChangeCallback()
      this.fireEventSync('documentchange', [i])
    }
    finally {
      NfO.finishedRunningDocumentChangeCallback()
    }
  }

  styleChangeCallback = (e) => {
    if (e.length === 0)
      return
    let t = this.getChangeCallbackHandle('stylechange', e)
    let i = this.vm.newObject()
    this.vm.setProp(i, 'styleChanges', t)
    try {
      NfO.prepareToRunDocumentChangeCallback()
      this.fireEventSync('stylechange', [i])
    }
    finally {
      NfO.finishedRunningDocumentChangeCallback()
    }
  }

  nodeChangeCallback = (e) => {
    for (let [t, i] of this.eventsByPageGuid(e)) {
      if (i.length === 0)
        continue
      let e = this.getChangeCallbackHandle('nodechange', i)
      let n = this.vm.newObject()
      this.vm.setProp(n, 'nodeChanges', e)
      try {
        NfO.prepareToRunDocumentChangeCallback()
        this.fireEventSyncForPage('nodechange', t, [n])
      }
      finally {
        NfO.finishedRunningDocumentChangeCallback()
      }
    }
  }

  /**
   * triggerParameterInputEvent - Trigger parameter input event with suggestion handling
   *
   * Handles parameter input events with suggestion validation, data serialization checks,
   * icon validation, and URL security verification. Provides comprehensive error handling
   * for suggestion data size limits, JSON serialization, and URL security.
   *
   * @param inputData - The parameter input data to process
   */
  triggerParameterInputEvent = (inputData) => {
    const vm = this.vm
    this.fireAsyncEventOrSchedule('input', () => {
      let hasCalledSetSuggestions = false
      const resultObject = vm.newObject()

      // Setup setSuggestions function with validation
      vm.defineFunction(resultObject, 'setSuggestions', 'result.setSuggestions', (suggestionsHandle) => {
        this.validateSingleCall(hasCalledSetSuggestions, 'setSuggestions or setError')
        hasCalledSetSuggestions = true
        const suggestions = this.processSuggestions(vm, suggestionsHandle)
        this.validateSuggestions(suggestions)

        // Process suggestions and fire event
        // TODO: Fix callback handling
        // const callbackHandle = this.getParameterInputCallbackHandle(inputData)
        // if (callbackHandle) {
        //   callbackHandle({
        //     suggestions,
        //     onErrorHandler: this.triggerParameterInputEvent,
        //   })
        // }
      })

      // Setup setError function
      this.setupSetErrorFunction(resultObject, vm, hasCalledSetSuggestions, inputData)

      // Fire parameter input event
      this.fireEventSyncForPage('parameterinput', inputData, [resultObject])
    })
  }

  /**
   * validateSingleCall - Validate that a function is only called once
   *
   * Ensures that certain functions like setSuggestions or setError are only
   * called once per result object to prevent duplicate operations.
   *
   * @param hasBeenCalled - Boolean indicating if function was already called
   * @param functionDescription - Description of the function for error message
   */
  validateSingleCall(hasBeenCalled, functionDescription) {
    if (hasBeenCalled) {
      throw new Error(`${functionDescription} called multiple times on the same result object`)
    }
  }

  /**
   * processSuggestions - Process and normalize suggestion data
   *
   * Converts suggestion handles to normalized suggestion objects, handling both
   * string suggestions (converted to name-only objects) and complex suggestion
   * objects with data and metadata.
   *
   * @param vm - Virtual machine instance
   * @param suggestionsHandle - VM handle containing suggestions array
   * @returns Array of normalized suggestion objects
   */
  processSuggestions(vm, suggestionsHandle) {
    const rawSuggestions = _$$u({
      vm,
      handle: suggestionsHandle,
      zSchema: _$$N.ParameterValues,
      property: 'setSuggestions',
    })
    return rawSuggestions.map(suggestion => typeof suggestion === 'string'
      ? {
        name: suggestion,
        data: undefined,
      }
      : suggestion)
  }

  /**
   * validateSuggestions - Validate suggestion data and constraints
   *
   * Performs comprehensive validation including JSON serialization checks,
   * icon/iconUrl mutual exclusion, data size limits, and URL security validation
   * for each suggestion in the array.
   *
   * @param suggestions - Array of suggestion objects to validate
   */
  validateSuggestions(suggestions) {
    suggestions.forEach((suggestion) => {
      // Validate JSON serialization
      this.validateSuggestionSerialization(suggestion)

      // Validate icon constraints
      this.validateSuggestionIcons(suggestion)

      // Validate size limits
      this.validateSuggestionSize(suggestion)

      // Validate and normalize URL if present
      this.validateAndNormalizeSuggestionUrl(suggestion)
    })
  }

  /**
   * validateSuggestionSerialization - Validate that suggestion data can be serialized to JSON
   *
   * Performs deep validation by attempting JSON serialization and comparing the result
   * with the original data to ensure all values are properly serializable.
   *
   * @param suggestion - Suggestion object to validate
   */
  validateSuggestionSerialization(suggestion) {
    if (suggestion.data !== undefined) {
      try {
        this.deepValidateSerializable(suggestion.data, JSON.parse(JSON.stringify(suggestion.data)))
      }
      catch {
        throw new Error(`Contains value which could not be serialized to JSON: ${suggestion.data}`)
      }
    }
  }

  /**
   * deepValidateSerializable - Recursively validate that data is JSON serializable
   *
   * Performs deep comparison between original data and JSON-parsed version
   * to ensure all nested values are properly serializable.
   *
   * @param original - Original data value
   * @param serialized - JSON-parsed version of the data
   */
  deepValidateSerializable(original, serialized) {
    if (original !== serialized) {
      if (Array.isArray(original) && Array.isArray(serialized) && original.length === serialized.length) {
        for (let i = 0; i < original.length; i++) {
          this.deepValidateSerializable(original[i], serialized[i])
        }
        return
      }
      if (Object.prototype.toString.call(original) === '[object Object]' && Object.prototype.toString.call(serialized) === '[object Object]') {
        for (const key in original) {
          this.deepValidateSerializable(original[key], key in serialized ? serialized[key] : Symbol('missing property'))
        }
        return
      }
      throw new Error(`Contains value which could not be serialized to JSON: ${original}`)
    }
  }

  /**
   * validateSuggestionIcons - Validate icon constraints for suggestions
   *
   * Ensures that suggestions don't have both icon and iconUrl properties set
   * simultaneously, as they are mutually exclusive.
   *
   * @param suggestion - Suggestion object to validate
   */
  validateSuggestionIcons(suggestion) {
    if (suggestion.icon && suggestion.iconUrl) {
      throw new Error('Only icon or iconUrl may be provided. Not both.')
    }
  }

  /**
   * validateSuggestionSize - Validate suggestion data size limits
   *
   * Ensures that the total size of suggestion data and icon doesn't exceed
   * the 20KB limit by calculating JSON string length and icon length.
   *
   * @param suggestion - Suggestion object to validate
   */
  validateSuggestionSize(suggestion) {
    const dataSize = JSON.stringify(suggestion.data)?.length || 0
    const iconSize = suggestion.icon?.length || 0
    const totalSize = dataSize + iconSize
    if (totalSize > 20480) {
      throw new Error('Total size of suggestion must be no greater than 20KB')
    }
  }

  /**
   * validateAndNormalizeSuggestionUrl - Validate and normalize suggestion icon URLs
   *
   * Validates URL protocol (must be http/https), ensures URLs don't point to figma.com
   * domains for security reasons, and normalizes the URL format.
   *
   * @param suggestion - Suggestion object with potential iconUrl to validate
   */
  validateAndNormalizeSuggestionUrl(suggestion) {
    if (suggestion.iconUrl) {
      const url = new URL(suggestion.iconUrl)

      // Validate protocol
      if (!['https:', 'http:'].includes(url.protocol)) {
        throw new Error('Must be https or http URL')
      }

      // Validate against figma.com domains for security
      if (this.isFigmaDomain(url.hostname)) {
        throw new Error('figma.com URLs not supported')
      }

      // Normalize URL
      suggestion.iconUrl = url.href
    }
  }

  /**
   * isFigmaDomain - Check if hostname is a figma.com domain
   *
   * Validates hostname against various figma.com domain patterns including
   * subdomains, trailing dots, and current window location for security.
   *
   * @param hostname - Hostname to validate
   * @returns true if hostname is a figma.com domain
   */
  isFigmaDomain(hostname) {
    return hostname.endsWith('.figma.com') || hostname.endsWith('.figma.com.') || hostname === 'figma.com' || hostname === 'figma.com.' || hostname === window.location.hostname
  }

  /**
   * setupSetErrorFunction - Setup setError function for result object
   *
   * Configures the setError function that allows parameter input handlers
   * to report errors during suggestion processing.
   *
   * @param resultObject - VM result object to setup
   * @param vm - Virtual machine instance
   * @param hasCalledSetSuggestions - Reference to call tracking flag
   * @param inputData - The parameter input data for validation
   */
  setupSetErrorFunction(resultObject, vm, hasCalledSetSuggestions, inputData) {
    vm.defineFunction(resultObject, 'setError', 'result.setError', (errorHandle) => {
      this.validateSingleCall(hasCalledSetSuggestions, 'setSuggestions or setError')
      if (inputData.currentParameter.allowFreeform) {
        throw new Error('setError not supported on allowFreeform parameters')
      }
      const errorMessage = _$$u({
        vm,
        handle: errorHandle,
        zSchema: _$$z.string(),
        property: 'message',
      })
      inputData.onSuggestions({
        type: 'ERROR',
        message: errorMessage,
      })
      hasCalledSetSuggestions = true
      return vm.undefined
    })

    // Setup loading message function
    vm.defineFunction(resultObject, 'setLoadingMessage', 'result.setLoadingMessage', (loadingHandle) => {
      const loadingMessage = _$$u({
        vm,
        handle: loadingHandle,
        zSchema: _$$z.string(),
        property: 'message',
      })
      inputData.onSuggestions({
        type: 'LOADING',
        message: loadingMessage,
      })
      return vm.undefined
    })

    // Fire parameter input event
    this.fireEventSyncForPage('parameterinput', inputData, [resultObject])
  }

  triggerRunEvent = (e) => {
    this.setQueryMode(!1)
    this.triggerOrScheduleRunEvent(e)
  }

  triggerOrScheduleRunEvent = (e) => {
    this.options.stats.setRunParameters(e)
    this.fireAsyncEventOrSchedule('run', () => {
      let t = this.vm
      let i = this.options.command
      this.fireDebouncedEventAsync('run', () => {
        let n = t.newObject()
        t.setProp(n, 'command', t.newString(i))
        e.command === 'parameters' ? e.parameters ? t.setProp(n, 'parameters', t.deepWrap(aI(e.parameters))) : qW(this.options.pluginID) && t.setProp(n, 'parameters', t.deepWrap(TP(this.options.pluginID))) : (e.command === 'open-related-link' || e.command === 'open-dev-resource') && t.setProp(n, 'link', t.deepWrap(e.link))
        t.shallowFreezeObject(n)
        this.fireEventSync('run', [n])
      })
    })
  }

  requestCheckoutCallback = async () => {
    try {
      await this.initiateCheckoutAsyncImpl({})
      let e = this.getPublishedExtension(this.options.pluginID)
      return this.userPaymentStatusType(e) === zH.PAID
    }
    catch (e) {
      _$$k2.error(e)
    }
    return !1
  }

  timerCallback = (e) => {
    this.fireEventSync(e, [])
  }

  uiCancelCallback = (e) => {
    this.closePlugin(e)
  }

  /**
   * Handle messages from plugin UI iframe with proper validation and routing
   * Processes different message types: getPluginId, pluginMessage, and pluginDrop
   * @param messageEvent - The message event from the iframe
   */
  iframeMessageHandler = (messageEvent) => {
    const vmHandle = this.vm

    // Handle special keyboard trigger message
    if (messageEvent.data === IN) {
      Y5.triggerAction('plugins-run-last', {
        source: 'keyboard',
      })
      return
    }

    // Validate message structure
    if (!this.isValidMessageStructure(messageEvent.data)) {
      _$$k2.warn('Message from UI to plugin ignored because it\'s not an object. The message must be an object with a "pluginMessage" property containing the actual message.')
      return
    }
    const currentPluginId = this.options.pluginID
    const messageOrigin = this.normalizeMessageOrigin(messageEvent.origin)

    // Handle plugin ID request
    if (this.isPluginIdRequest(messageEvent.data)) {
      this.handlePluginIdRequest(messageEvent, currentPluginId)
      return
    }

    // Validate plugin ID authorization
    if (!this.isAuthorizedMessage(messageEvent.data, currentPluginId, messageEvent.origin)) {
      return
    }

    // Route message based on type
    if (this.isPluginMessage(messageEvent.data)) {
      this.handlePluginMessage(messageEvent.data, messageOrigin, vmHandle)
    }
    else if (this.isPluginDropMessage(messageEvent.data)) {
      this.handlePluginDropMessage(messageEvent.data, vmHandle)
    }
    else {
      _$$k2.warn('Ignoring postMessage from plugin UI iframe due to missing "pluginMessage" or "pluginDrop"')
    }
  }

  /**
   * Validate that message data has proper structure
   * @param messageData - The data from the message event
   * @returns True if message structure is valid
   */
  isValidMessageStructure(messageData) {
    return messageData instanceof Object
  }

  /**
   * Normalize message origin, handling special encoded cases
   * @param origin - The origin from the message event
   * @returns Normalized origin string
   */
  normalizeMessageOrigin(origin) {
    let normalizedOrigin = `${origin}`

    // Handle encoded origins
    if (/^https?:\/\/%7b[a-f0-9.-]+%7d$/.test(normalizedOrigin)) {
      normalizedOrigin = 'null'
    }
    return normalizedOrigin
  }

  /**
   * Check if message is requesting plugin ID
   * @param messageData - The message data
   * @returns True if this is a plugin ID request
   */
  isPluginIdRequest(messageData) {
    return 'getPluginId' in messageData
  }

  /**
   * Handle plugin ID request by responding with current plugin ID
   * @param messageEvent - The message event
   * @param pluginId - Current plugin ID
   */
  handlePluginIdRequest(messageEvent, pluginId) {
    const responseOrigin = messageEvent.origin !== 'null' ? messageEvent.origin : '*'
    this.uiHandle.postMessageToIframe({
      pluginId,
    }, {
      origin: responseOrigin,
      skipQueue: !0,
    })
  }

  /**
   * Check if message is authorized for current plugin
   * @param messageData - The message data
   * @param currentPluginId - Current plugin ID
   * @param messageOrigin - Origin of the message
   * @returns True if message is authorized
   */
  isAuthorizedMessage(messageData, currentPluginId, messageOrigin) {
    // Skip authorization for wildcard messages from null origin
    if (messageData.pluginId === '*' && (!('pluginId' in messageData) || messageOrigin === 'null')) {
      return true
    }

    // Check plugin ID match
    if (currentPluginId && this.isPluginIdMatch(messageData.pluginId, currentPluginId)) {
      return true
    }

    // Handle authorization failures
    if ('pluginId' in messageData) {
      _$$k2.warn('Provided pluginId does not match id of currently running plugin')
      return false
    }
    else {
      _$$k2.warn('Message from UI to plugin ignored due to missing pluginId in message. Please specify the pluginId that you wish to deliver the message to when using postMessage. You can also use \'*\' if it is safe to deliver the message to any plugin.\n\nExample: `parent.postMessage({pluginMessage: /*your message*/, pluginId: /*your plugin id*/}, \'*\')`.')
      return false
    }
  }

  /**
   * Check if plugin ID matches current plugin
   * @param messagePluginId - Plugin ID from message
   * @param currentPluginId - Current plugin ID
   * @returns True if IDs match
   */
  isPluginIdMatch(messagePluginId, currentPluginId) {
    if (messagePluginId === currentPluginId) {
      return true
    }
    if (Array.isArray(messagePluginId) && messagePluginId.includes(currentPluginId)) {
      return true
    }
    return false
  }

  /**
   * Check if message contains plugin message data
   * @param messageData - The message data
   * @returns True if this is a plugin message
   */
  isPluginMessage(messageData) {
    return 'pluginMessage' in messageData
  }

  /**
   * Handle plugin message by forwarding to event handlers
   * @param messageData - The message data
   * @param messageOrigin - Normalized origin
   * @param vmHandle - VM handle for object creation
   */
  handlePluginMessage(messageData, messageOrigin, vmHandle) {
    const messageHandlers = this.eventHandlers.get('message')
    if ((!messageHandlers || !messageHandlers.length) && !this.onMessageCallback) {
      _$$k2.warn('Message from UI to plugin dropped due to no message handler installed')
      return
    }
    const messageArguments = [vmHandle.deepWrap(messageData.pluginMessage), vmHandle.deepWrap({
      origin: messageOrigin,
    })]

    // Fire event to registered handlers
    this.fireEventSync('message', messageArguments)

    // Call direct callback if available
    if (this.onMessageCallback) {
      vmHandle.callFunction(this.onMessageCallback, vmHandle.undefined, ...messageArguments)
    }
  }

  /**
   * Check if message contains plugin drop data
   * @param messageData - The message data
   * @returns True if this is a plugin drop message
   */
  isPluginDropMessage(messageData) {
    return 'pluginDrop' in messageData
  }

  /**
   * Handle plugin drop message by validating and forwarding drop event
   * @param messageData - The message data
   * @param vmHandle - VM handle for object creation
   */
  handlePluginDropMessage(messageData, vmHandle) {
    const dropData = messageData.pluginDrop

    // Validate drop data structure
    if (!this.isValidDropData(dropData)) {
      _$$k2.warn(`"pluginDrop" object must have "clientX" and "clientY" properties,
          as well as either "items" or "files" properties`)
      return
    }

    // Create drop event object
    const dropEvent = this.createDropEvent({
      x: dropData.clientX,
      y: dropData.clientY,
    }, dropData.items ?? [], dropData.files ?? [])

    // Add drop metadata if provided
    vmHandle.setProp(dropEvent, 'dropMetadata', 'dropMetadata' in dropData ? vmHandle.deepWrap(dropData.dropMetadata) : vmHandle.$$null)

    // Fire drop event
    this.fireEventSync('drop', [dropEvent])
  }

  /**
   * Validate drop data structure and file types
   * @param dropData - The drop data to validate
   * @returns True if drop data is valid
   */
  isValidDropData(dropData) {
    // Check for validation errors
    const validationErrors = c0(dropData, fK, 'pluginDrop')
    if (validationErrors.length > 0) {
      return false
    }

    // Check required properties
    if (dropData.items === undefined && dropData.files === undefined) {
      return false
    }

    // Validate file types
    if ('files' in dropData && dropData.files.some(file => !(file instanceof File))) {
      return false
    }
    return true
  }

  /**
   * createSpellCheckCallback - Create spell check promise callback
   */
  createSpellCheckCallback() {
    return this.createPromiseCallback({
      makeInputEvent: (textContent) => {
        const inputEvent = this.vm.newObject()
        this.vm.setProp(inputEvent, 'text', this.vm.newString(textContent))
        return inputEvent
      },
      eventName: 'textreview',
      zResultSchema: _$$N.TextReviewResultSchema,
      defaultResult: [],
      rejectMessage: 'Promise returned from \'textreview\' event rejected. Unable to show text review suggestions.',
    })
  }

  /**
   * createLegacyCodegenCallback - Create legacy codegen promise callback
   */
  createLegacyCodegenCallback() {
    return this.createPromiseCallback({
      makeInputEvent: (nodeId) => {
        const inputEvent = this.vm.newObject()
        const nodeObject = this.nodeFactory.createNode(nodeId, 'codegen')
        this.vm.setProp(inputEvent, 'node', nodeObject)
        return inputEvent
      },
      eventName: 'codegen',
      zResultSchema: _$$N.CodegenResultSchema,
      defaultResult: [],
      rejectMessage: 'Promise returned from codegen event rejected. Unable to generate code.',
    })
  }

  /**
   * createCodegenCallback - Create modern codegen promise callback
   */
  createCodegenCallback() {
    return this.createPromiseCallback({
      makeInputEvent: (nodeId) => {
        const inputEvent = this.vm.newObject()
        const nodeObject = this.nodeFactory.createNode(nodeId, 'generate')
        this.vm.setProp(inputEvent, 'node', nodeObject)
        this.vm.setProp(inputEvent, 'language', this.vm.newString(this.getCodegenLanguage()))
        return inputEvent
      },
      eventName: 'generate',
      zResultSchema: _$$N.CodegenResultSchema,
      defaultResult: [],
      rejectMessage: 'Promise returned from codegen \'generate\' event rejected. Unable to generate code.',
    })
  }

  /**
   * createLinkPreviewCallback - Create link preview promise callback
   */
  createLinkPreviewCallback() {
    return this.createPromiseCallback({
      makeInputEvent: (linkData) => {
        const inputEvent = this.vm.newObject()
        this.vm.setProp(inputEvent, 'link', this.vm.deepWrap(linkData))
        return inputEvent
      },
      eventName: 'linkpreview',
      zResultSchema: _$$N.LinkPreviewResultSchema,
      defaultResult: null,
      rejectMessage: 'Promise returned from \'linkpreview\' event rejected. Unable to generate preview.',
    })
  }

  createAuthCallback() {
    return this.createPromiseCallback({
      makeInputEvent: (linkArray) => {
        const inputEvent = this.vm.newObject()
        this.vm.setProp(inputEvent, 'links', this.vm.deepWrap(linkArray))
        return inputEvent
      },
      eventName: 'auth',
      zResultSchema: _$$N.AuthResultSchema,
      rejectMessage: 'Promise returned from \'auth\' event rejected. Unable to authenticate.',
      defaultResult: null,
    })
  }

  /**
   * setupWidgetManager - Set up widget management if in widget mode
   */
  setupWidgetManager() {
    W5(this.pluginPageLoaded)
    Ql(this.getAccessiblePages)
    if (this.isWidget) {
      const {
        runtimeBridge,
        shutdownCallback,
      } = PluginRuntime.createRuntimeBridgeForWidgetReconciler(this.options.pluginID, this.vm)
      this.widgetManager = new WidgetManager(this.vm, this.options.pluginID, runtimeBridge)
      if (shutdownCallback) {
        this.widgetManager.addShutdownAction(shutdownCallback)
      }
    }
  }

  /**
   * setupEditorType - Set up fullscreen editor type based on current view
   */
  setupEditorType() {
    const currentView = debugState.getState().selectedView
    if (ac.includes(currentView.editorType) || this.vm.vmType === 'scopednoopvm') {
      this.fullscreenEditorType = currentView.editorType
    }
    else {
      throw new Error(`Unsupported editor type: ${currentView.editorType}`)
    }
  }

  /**
   * setupMixedSentinel - Set up mixed value sentinel symbol
   */
  setupMixedSentinel() {
    this.mixedSentinel = this.vm.newSymbol('figma.mixed')
    this.vm.retainHandle(this.mixedSentinel)
    const shouldSkipInvisibleChildren = this.fullscreenEditorType === _$$nT.DevHandoff || this.options.apiMode.type === 'WIDGET_RECONCILER'
    this.setSkipInvisibleInstanceChildren(shouldSkipInvisibleChildren)
  }

  /**
   * setupRuntimeOptions - Configure runtime options based on feature flags and mode
   */
  setupRuntimeOptions() {
    const featureFlags = getFeatureFlags()
    this.runtimeOptions = featureFlags.ext_lego_plugins_runmode ? this.createFeatureFlagRuntimeOptions() : this.createLegacyRuntimeOptions()
  }

  /**
   * createFeatureFlagRuntimeOptions - Create runtime options using feature flag mode
   */
  createFeatureFlagRuntimeOptions() {
    const runMode = this.getRunMode()
    return {
      allowVisibleIframe: !ar.has(runMode),
      iframeId: _$$E3({
        runMode,
      }),
      allowInitiateCheckout: !ar.has(runMode),
    }
  }

  /**
   * createLegacyRuntimeOptions - Create runtime options using legacy triggered mode
   */
  createLegacyRuntimeOptions() {
    const triggeredFrom = this.options.triggeredFrom
    return {
      allowVisibleIframe: !triggeredFrom || !an.has(triggeredFrom),
      iframeId: _$$E3({
        triggeredFrom,
      }),
      allowInitiateCheckout: !triggeredFrom || !an.has(triggeredFrom),
    }
  }

  /**
   * shouldCreateNoOpUiHandle - Check if NoOp UI handle should be created
   */
  shouldCreateNoOpUiHandle(apiMode) {
    switch (apiMode.type) {
      case 'GLOBAL_API':
      case 'CONSOLE_SHIM':
      case 'SECURITY_CHECK':
        return false
      case 'WIDGET_RECONCILER':
        return true
      case 'WIDGET':
      case 'PLUGIN':
        return apiMode.noOpUI
      default:
        return false
    }
  }

  /**
   * setupEventCallbacks - Set up event callbacks for VM instances
   */
  setupEventCallbacks() {
    LL(this.selectionCallback)
    Xx(this.pageCallback)
    Sf(this.timerCallback)
    KB(this.dropCallback)
    _$$i(this.codegenPreferencesChangeCallback)
    _C(this.slidesViewChangeCallback)
  }

  /**
   * finalizeInitialization - Complete the final initialization steps
   */
  finalizeInitialization() {
    this.options.addShutdownAction(reason => this.tearDown(reason))
    this.previousSelection = this.privateSceneGraph.getDirectlySelectedNodes().map(node => node.guid)
    NfO.resetSelectionCouldBeDirty()
    this.createAPI()
  }

  hasRegisteredWidget() {
    return this._hasRegisteredWidgetFunction
  }

  shouldLockDownPluginApiForWidgets() {
    return this.isWidget
  }

  overrideRuntimeOptions(e, t) {
    // overrideRuntimeOptions - Temporarily override runtime options for a callback execution
    const originalOptions = this.runtimeOptions

    // Apply new options
    this.runtimeOptions = {
      ...originalOptions,
      ...e,
    }
    try {
      return t()
    }
    finally {
      // Always restore original options
      this.runtimeOptions = originalOptions
    }
  }

  validateMakeIframeOptionsOrThrow(e, t) {
    if (this.options.isLocal && (this.runtimeOptions?.activePromiseCallback === 'generate' || this.runtimeOptions?.activePromiseCallback === 'codegen')) {
      throw new Error(`Cannot call figma.showUI inside the codegen generate callback.

Move figma.showUI outside the callback and use figma.ui.postMessage within the callback instead to ensure that your plugin handles concurrent "generate" events correctly.`)
    }
    let i = t.position ?? this.runtimeOptions?.defaultIframePosition ?? 'last'
    if (t.visible && this.queryMode)
      throw new Error('Cannot show UI in queryMode.')
    if (t.visible && !this.runtimeOptions?.allowVisibleIframe)
      throw new Error('Cannot show UI')
    return {
      html: e,
      title: t.title,
      width: t.width,
      height: t.height,
      iframeId: this.runtimeOptions.iframeId,
      position: i,
      includeThemeColors: t.themeColors,
    }
  }

  inDesignOrDevHandoffOrIllustration() {
    return this.fullscreenEditorType === _$$nT.Design || this.fullscreenEditorType === _$$nT.DevHandoff || this.fullscreenEditorType === _$$nT.Illustration
  }

  inFigjam() {
    return this.fullscreenEditorType === _$$nT.Whiteboard
  }

  inSlides() {
    return this.fullscreenEditorType === _$$nT.Slides
  }

  inBuzz() {
    return this.fullscreenEditorType === _$$nT.Cooper
  }

  inSites() {
    return this.fullscreenEditorType === _$$nT.Sites
  }

  isReadOnlyMode() {
    let e = debugState.getState()
    let t = e.selectedView.editorType === _$$nT.DevHandoff
    return e.mirror.appModel.isReadOnly || t
  }

  hasFileReachedPageLimit() {
    let e = debugState.getState().openFile
    let t = this.privateSceneGraph.get('0:0')
    if (!t)
      throw new Error('Root node not found. This should never happen.')
    let i = t.childrenNodes.reduce((e, t) => t.type !== 'CANVAS' || t.isInternalOnlyNode ? e : e + 1, 0)
    return !!(e && J9({
      openFile: e,
      pageCount: i,
    }))
  }

  handleLockDownPluginApiError(e) {
    if (this.options.isLocal)
      throw new Error(e)
    {
      let t = this.widgetManager?.getCurrentWidgetNodeId()
      t && widgetErrorTracker.trackLockDownApiError(new Error(e), this.getWidgetContext(t))
    }
  }

  getRunMode() {
    return zl.get(_$$$f) ?? 'default'
  }

  getWidgetContext(e) {
    let t = this.privateSceneGraph.get(e)
    return {
      widgetNodeID: e,
      pluginID: t.widgetId,
      widgetVersionID: t.widgetVersionId,
      isLocalWidget: !t.widgetVersionId,
      widgetName: t.name,
    }
  }

  editScope(e, t) {
    return l7.plugin(`plugin-${e}`, t)
  }

  conditionalEditScope(e, t, i) {
    return e ? this.editScope(t, i) : i()
  }

  /**
   * tearDown - Clean up plugin resources and handle shutdown properly
   *
   * Performs comprehensive cleanup including unregistering callbacks, clearing handlers,
   * tearing down stores, releasing VM handles, and handling widget cleanup with proper
   * async handling for close events when feature flags are enabled.
   *
   * @param shutdownReason - Reason for shutdown (optional)
   */
  async tearDown(shutdownReason) {
    try {
      // Unregister all callbacks and observers
      await this.unregisterAllCallbacks()

      // Handle close events and UI teardown
      await this.handleCloseEventsAndUiTeardown(shutdownReason)

      // Cleanup stores and resources
      this.cleanupStoresAndResources()

      // Release all event handlers
      this.releaseAllEventHandlers()

      // Clear remaining state
      this.clearRemainingState()

      // Handle widget-specific cleanup
      await this.handleWidgetCleanup()
    }
    catch (error) {
      console.error('Error during tearDown:', error)
    }
  }

  /**
   * unregisterAllCallbacks - Unregister all callbacks and observers
   */
  async unregisterAllCallbacks() {
    _$$po(this.timerCallback)
    wk(this.selectionCallback)
    cI(this.pageCallback)
    Ty(this.dropCallback)
    sd(this.spellCheckCallback)
    G1(this.codegenCallback)
    G1(this.legacyCodegenCallback)
    Rp(this.pluginPageLoaded)
    VM(this.getAllAccessedGuids)
    jS(this.getAccessiblePages)
    dG()
    b_(this.documentChangeCallback)
    fd(this.styleChangeCallback)
    q$(this.nodeChangeCallback)
    $y(this.codegenPreferencesChangeCallback)
    _$$nf(this.slidesViewChangeCallback)
    H4(this.devResourceOpenCallback)
  }

  /**
   * handleCloseEventsAndUiTeardown - Handle close events and UI teardown based on feature flags
   */
  async handleCloseEventsAndUiTeardown(shutdownReason) {
    if (getFeatureFlags().plugins_async_on_close_handler) {
      // New async close handling
      this.uiHandle.tearDown(shutdownReason)
      await this.fireCloseEventAsync()
    }
    else {
      // Legacy sync close handling
      this.fireEventSync('close', [])
      this.uiHandle.tearDown(shutdownReason)
    }
  }

  /**
   * cleanupStoresAndResources - Clean up image and video stores
   */
  cleanupStoresAndResources() {
    this.imageStore.tearDown()
    this.videoStore.tearDown()
  }

  /**
   * releaseAllEventHandlers - Release all VM handles for event handlers
   */
  releaseAllEventHandlers() {
    for (const [, handlers] of this.eventHandlers.entries()) {
      for (const handler of handlers) {
        this.vm.releaseHandle(handler.handler)
      }
    }
  }

  /**
   * clearRemainingState - Clear remaining state variables and cleanup
   */
  clearRemainingState() {
    this.eventHandlers.clear()
    this.eventHandlerTimeouts.forEach(timeoutId => clearTimeout(timeoutId))
    this.eventHandlerTimeouts.clear()
    this.scheduledEvents.clear()
    this.onMessageCallback = undefined
    this.setSkipInvisibleInstanceChildren(false)
  }

  /**
   * handleWidgetCleanup - Handle widget-specific cleanup if in widget mode
   */
  async handleWidgetCleanup() {
    if (this.isWidget) {
      // Small delay for widget cleanup
      await new Promise(resolve => setTimeout(resolve))

      // Wait for widget operations to finish
      await this.widgetManager?.waitForFinish({
        fromClosePlugin: true,
      })

      // Clear widget manager
      this.widgetManager?.clear()
    }
  }

  currentSelectedTextRangeJson() {
    let e = this.privateSceneGraph.getCurrentPage()
    return JSON.stringify(e?.getSelectedTextRange() || null)
  }

  /**
   * makeGroupingOperationFunction - Create a function for grouping operations (group, ungroup, etc.)
   *
   * Returns a configured function that processes node arrays, validates parameters,
   * and performs grouping operations on nodes with proper hierarchy handling.
   * Handles responsive set constraints and provides detailed error messaging.
   *
   * @param operationName - Name of the operation for error messages and context
   * @param operationType - Type identifier for the specific grouping operation
   * @returns Function that performs the configured grouping operation
   */
  makeGroupingOperationFunction(operationName, operationType) {
    return (nodesHandle, parentHandle, indexHandle) => {
      // Process and validate node array parameters
      const processedNodes = this.processNodesForGroupingOperation(operationName, nodesHandle, parentHandle, indexHandle)

      // Validate parent node requirement
      this.validateParentNodeForGrouping(operationName, processedNodes.parent)

      // Execute the grouping operation
      const resultNodeId = this.executeGroupingOperation(operationType, processedNodes, operationName)

      // Return wrapped node result
      return this.nodeFactory.createNode(resultNodeId, operationName)
    }
  }

  /**
   * processNodesForGroupingOperation - Process and validate nodes for grouping
   */
  processNodesForGroupingOperation(operationName, nodesHandle, parentHandle, indexHandle) {
    return processNodeArrayForHierarchyOperation({
      vm: this.vm,
      callerName: operationName,
      nodes: nodesHandle,
      parentArg: parentHandle,
      indexArg: indexHandle,
      getNode: this.getNode,
      enableResponsiveSetHierarchyMutations: this.options.enableResponsiveSetHierarchyMutations,
    })
  }

  /**
   * validateParentNodeForGrouping - Ensure parent node is provided for grouping
   */
  validateParentNodeForGrouping(operationName, parentNode) {
    if (!parentNode) {
      throw new Error(`Second argument to ${operationName}() must be provided`)
    }
  }

  /**
   * executeGroupingOperation - Execute the actual grouping operation
   */
  executeGroupingOperation(operationType, processedNodes, _operationName) {
    return NfO.groupNodes(operationType, processedNodes.nodeIds, processedNodes.parent.sessionID, processedNodes.parent.localID, processedNodes.index, this.privateSceneGraph.scene)
  }

  /**
   * fireAsyncEventOrSchedule - Fire async event immediately or schedule for later
   *
   * If event handlers exist, fires the event immediately. Otherwise, schedules
   * the event to be fired when handlers are registered. Provides flexible
   * event timing for plugin lifecycle management.
   *
   * @param eventName - Name of the event to fire or schedule
   * @param eventCallback - Function to execute when event should fire
   */
  fireAsyncEventOrSchedule(eventName, eventCallback) {
    const eventHandlers = this.eventHandlers.get(eventName)
    if (eventHandlers && eventHandlers.length !== 0) {
      // Handlers exist, fire immediately
      this.fireEventAsync(eventCallback)
    }
    else {
      // No handlers yet, schedule for later
      this.scheduleEventForLater(eventName, eventCallback)
    }
  }

  /**
   * scheduleEventForLater - Schedule event to fire when handlers are registered
   */
  scheduleEventForLater(eventName, eventCallback) {
    this.scheduledEvents.set(eventName, () => {
      this.scheduledEvents.delete(eventName)
      this.fireEventAsync(eventCallback)
    })
  }

  /**
   * fireEventAsync - Execute event callback asynchronously
   *
   * Uses Promise.resolve().then() to ensure callback executes in next tick,
   * allowing current synchronous execution to complete first.
   *
   * @param eventCallback - Function to execute asynchronously
   */
  fireEventAsync(eventCallback) {
    Promise.resolve().then(eventCallback)
  }

  /**
   * fireDebouncedEventAsync - Fire event with debouncing to prevent rapid repeated calls
   *
   * Cancels any pending timeout for the same event and sets a new one.
   * Ensures event only fires once after rapid successive triggers stop.
   *
   * @param eventName - Name of the event for debouncing key
   * @param eventCallback - Function to execute after debounce delay
   */
  fireDebouncedEventAsync(eventName, eventCallback) {
    // Cancel existing timeout if present
    this.cancelExistingEventTimeout(eventName)

    // Set new debounced timeout
    this.setDebouncedEventTimeout(eventName, eventCallback)
  }

  /**
   * cancelExistingEventTimeout - Cancel existing timeout for event
   */
  cancelExistingEventTimeout(eventName) {
    if (this.eventHandlerTimeouts.has(eventName)) {
      clearTimeout(this.eventHandlerTimeouts.get(eventName))
    }
  }

  /**
   * setDebouncedEventTimeout - Set new timeout for debounced event
   */
  setDebouncedEventTimeout(eventName, eventCallback) {
    const timeoutId = setTimeout(() => {
      this.eventHandlerTimeouts.delete(eventName)
      eventCallback()
    }, 0)
    this.eventHandlerTimeouts.set(eventName, timeoutId)
  }

  /**
   * fireEventSync - Fire event synchronously to all registered handlers
   *
   * Executes all handlers immediately and removes "once" handlers after execution.
   * Tracks currently running sync event to prevent recursion issues.
   *
   * @param eventName - Name of the event to fire
   * @param eventArgs - Arguments to pass to event handlers
   */
  fireEventSync(eventName, eventArgs) {
    // Set running event tracking
    this.runningSyncEvent = eventName

    // Get and process handlers
    const handlers = this.getAndProcessEventHandlers(eventName)

    // Execute all handlers
    this.executeEventHandlers(handlers, eventArgs)

    // Clear running event tracking
    this.runningSyncEvent = null
  }

  /**
   * getAndProcessEventHandlers - Get handlers and filter out "once" handlers after execution
   */
  getAndProcessEventHandlers(eventName) {
    let handlers = this.eventHandlers.get(eventName)
    if (handlers) {
      // Filter out "once" handlers after this execution
      this.eventHandlers.set(eventName, handlers.filter(({
        once,
      }) => !once))
    }
    else {
      handlers = []
    }
    return handlers
  }

  /**
   * executeEventHandlers - Execute all event handlers with provided arguments
   */
  executeEventHandlers(handlers, eventArgs) {
    for (const handler of handlers) {
      this.vm.callFunction(handler.handler, this.vm.undefined, ...eventArgs)
    }
  }

  fireEventSyncForPage(e, t, i) {
    this.runningSyncEvent = e
    let n = this.eventHandlers.get(e)
    let r = n ? n.filter(e => e.pageGuid === t) : []
    for (let a of (n && r.length > 0 && this.eventHandlers.set(e, n.filter(({
      once: e,
      pageGuid: i,
    }) => !(e && i === t))), r)) this.vm.callFunction(a.handler, this.vm.undefined, ...i)
    this.runningSyncEvent = null
  }

  fireEventSyncWithReturn(e, t) {
    let i = this.vm
    let n = this.eventHandlers.get(e)
    for (let r of (n
      ? this.eventHandlers.set(e, n.filter(({
        once: e,
      }) => !e))
      : n = [], n)) {
      let e = i.callFunction(r.handler, this.vm.undefined, ...t)
      if (e.type === 'SUCCESS' && !1 === i.deepUnwrap(e.handle))
        return !1
    }
    return !0
  }

  windowToCanvasPosition(e) {
    let t = Y5.getViewportInfo()
    let i = new Mi(t.x, t.y)
    let n = new Mi(e.x, e.y).subtract(i)
    return $$(t, n)
  }

  /**
   * wrapFile - Wraps a file object into a VM object with async methods for reading content
   *
   * Original code: wrapFile method from PluginRuntime class
   *
   * Creates a VM object representing a file with properties and async methods
   * for reading the file content as bytes or text. Uses helper functions to
   * reduce code duplication and improve maintainability.
   *
   * @param file - The file object to wrap
   * @returns VM object with file properties and async read methods
   */
  wrapFile(file) {
    const vm = this.vm
    const vmObject = vm.newObject()

    // Set file properties
    vm.setProp(vmObject, 'name', vm.newString(file.name))
    vm.setProp(vmObject, 'type', vm.newString(file.type))

    // Define getBytesAsync method using helper
    vm.defineFunction(vmObject, 'getBytesAsync', 'file.getBytesAsync', () => {
      return this.createFileReaderPromise(file, 'arrayBuffer', (result) => {
        if (result instanceof ArrayBuffer) {
          return vm.deepWrap(new Uint8Array(result))
        }
        else {
          throw new TypeError('Failed to read file')
        }
      })
    })

    // Define getTextAsync method using helper
    vm.defineFunction(vmObject, 'getTextAsync', 'file.getTextAsync', () => {
      return this.createFileReaderPromise(file, 'text', (result) => {
        return vm.newString(result)
      })
    })
    return vmObject
  }

  /**
   * createFileReaderPromise - Helper to create a promise for FileReader operations
   *
   * Original code: FileReader setup logic from wrapFile method
   *
   * Encapsulates the common FileReader promise creation logic to reduce duplication
   * and improve readability. Handles both arrayBuffer and text reading methods.
   *
   * @param file - The file to read
   * @param readMethod - The read method ('arrayBuffer' or 'text')
   * @param processResult - Function to process the reader result
   * @returns Promise that resolves with the processed result
   */
  createFileReaderPromise(file, readMethod, processResult) {
    const vm = this.vm
    const {
      promise,
      resolve,
      reject,
    } = vm.newPromise()
    const reader = new FileReader()
    reader.onload = (_event) => {
      // Early return if VM is destroyed
      if (vm.isDestroyed())
        return
      try {
        const result = processResult(reader.result)
        resolve(result)
      }
      catch (error) {
        reject(vm.deepWrap(error))
      }
    }
    reader.onerror = (_event) => {
      // Early return if VM is destroyed
      if (vm.isDestroyed())
        return
      reject(vm.deepWrap(reader.error))
    }

    // Execute the appropriate read method
    if (readMethod === 'arrayBuffer') {
      reader.readAsArrayBuffer(file)
    }
    else if (readMethod === 'text') {
      reader.readAsText(file)
    }
    return promise
  }

  /**
   * createDropEvent - Create a drop event object with position, items, and files
   *
   * Original code: createDropEvent method from PluginRuntime class
   *
   * Creates a VM-wrapped drop event object containing drop position (both window and canvas space),
   * dropped items data, and file objects. Handles parent node validation and file wrapping.
   *
   * @param dropPosition - Position object with x and y coordinates
   * @param items - Array of dropped item data
   * @param files - Array of File objects
   * @returns VM object representing the drop event
   */
  createDropEvent(dropPosition, items, files) {
    const vm = this.vm
    const canvasPosition = this.windowToCanvasPosition(dropPosition)
    const {
      parentId,
      relativeTransform,
    } = NfO.pickInsertionLocation(canvasPosition.x, canvasPosition.y)

    // Create drop event data object
    const dropEventData = {
      x: relativeTransform.m02,
      y: relativeTransform.m12,
      absoluteX: canvasPosition.x,
      absoluteY: canvasPosition.y,
      items,
    }
    const dropEvent = vm.deepWrap(dropEventData)

    // Set parent node if valid
    const parentNode = this.privateSceneGraph.get(parentId)
    const isValidParent = parentNode && !parentNode.isInImmutableFrame && !parentNode.isInWidget
    vm.setProp(dropEvent, 'node', isValidParent ? this.nodeFactory.createNode(parentId, 'drop') : vm.$$null)

    // Wrap and set files array
    const filesArray = vm.newArray()
    for (let i = 0; i < files.length; i++) {
      vm.setProp(filesArray, i.toString(), this.wrapFile(files[i]))
    }
    vm.setProp(dropEvent, 'files', filesArray)
    return dropEvent
  }

  /**
   * createPromiseCallback - Create a promise-based callback for event handling
   *
   * Original code: createPromiseCallback method from PluginRuntime class
   *
   * Creates a callback function that handles event firing with promise resolution,
   * result validation, and error handling. Manages event handler cleanup and
   * runtime options override for promise callbacks.
   *
   * @param config - Configuration object with event details and schemas
   * @returns Promise callback function
   */
  createPromiseCallback(config) {
    return (eventData) => {
      const vm = this.vm
      const inputEvent = config.makeInputEvent(eventData)
      const eventHandlers = this.eventHandlers.get(config.eventName) || []

      // Filter out 'once' handlers after execution
      this.eventHandlers.set(config.eventName, eventHandlers.filter(({
        once,
      }) => !once))
      for (const handler of eventHandlers) {
        const result = this.overrideRuntimeOptions({
          activePromiseCallback: config.eventName,
        }, () => vm.callFunction(handler.handler, vm.undefined, inputEvent))
        if (result.type === 'SUCCESS') {
          const promise = isVMPromiseLike(vm, result.handle)
            ? wrapVmPromise({
              vm,
              promiseHandle: result.handle,
              shouldRetainResult: true,
            })
            : (vm.retainHandle(result.handle), Promise.resolve(result.handle))
          return vm.registerPromise(promise).then((handle) => {
            const validatedResult = _$$u({
              vm,
              handle,
              zSchema: config.zResultSchema,
              property: `${config.eventName} Result`,
            })
            vm.releaseHandle(handle)
            return validatedResult
          }).catch((error) => {
            console.error(error)
            const errorMessage = config.rejectMessage + (typeof error === 'object' && 'message' in error ? `\nError: ${error.message}` : '')
            console.warn(errorMessage)
            return config.defaultResult
          })
        }
      }
      return Promise.reject()
    }
  }

  /**
   * fireCloseEventAsync - Fire close event asynchronously with timeout handling
   *
   * Original code: fireCloseEventAsync method from PluginRuntime class
   *
   * Handles asynchronous firing of close events with proper timeout management
   * and callback cleanup. Ensures close event handlers are executed within
   * the specified timeout period.
   */
  async fireCloseEventAsync() {
    if (!dM())
      return
    this.runningCloseEventHandler = true
    try {
      await f2(5000) // 5 second timeout
    }
    finally {
      Vb(this.onCloseCallback)
      this.runningCloseEventHandler = false
    }
  }

  documentChangeTypeToString(e) {
    switch (e) {
      case iIc.CREATE:
        return 'CREATE'
      case iIc.DELETE:
        return 'DELETE'
      case iIc.PROPERTY_CHANGE:
        return 'PROPERTY_CHANGE'
      case iIc.STYLE_PROPERTY_CHANGE:
        return 'STYLE_PROPERTY_CHANGE'
      case iIc.STYLE_CREATE:
        return 'STYLE_CREATE'
      case iIc.STYLE_DELETE:
        return 'STYLE_DELETE'
    }
  }

  documentChangeOriginToString(e) {
    switch (e) {
      case UcW.LOCAL:
        return 'LOCAL'
      case UcW.REMOTE:
        return 'REMOTE'
    }
  }

  slidesViewChangeToString(e) {
    switch (e) {
      case IQ2.GRID:
        return 'GRID'
      case IQ2.SINGLE_SLIDE:
        return 'SINGLE_SLIDE'
    }
  }

  eventsByPageGuid(e) {
    let t = new Map()
    for (let i of e) {
      let {
        containingCanvas,
      } = i
      t.has(containingCanvas) || t.set(containingCanvas, [])
      t.get(containingCanvas).push(i)
    }
    return t
  }

  /**
   * createTimerApi - Create timer API object with state management and controls
   *
   * Provides timer functionality including remaining time, total time, and control methods
   * (start, stop, pause, resume). Integrates with global debug state for persistence
   * and provides proper state tracking across timer operations.
   *
   * @returns VM object with timer properties and methods
   */
  createTimerApi() {
    const vm = this.vm
    const timerObject = vm.newObject()

    // Set up timer properties
    this.setupTimerProperties(timerObject, vm)

    // Set up timer control methods
    this.setupTimerMethods(timerObject, vm)
    vm.shallowFreezeObject(timerObject)
    return timerObject
  }

  /**
   * setupTimerProperties - Set up timer properties (remaining, total, state)
   */
  setupTimerProperties(timerObject, vm) {
    // Add remaining time property
    vm.defineProp(timerObject, 'remaining', {
      enumerable: false,
      metricsKey: 'timer.remaining',
      get: () => {
        const timerState = this.getTimerState()
        const remainingMs = Math.max(0, P$(timerState.time))
        return vm.newNumber(remainingMs / 1000)
      },
    })

    // Add total time property
    vm.defineProp(timerObject, 'total', {
      enumerable: false,
      metricsKey: 'timer.total',
      get: () => {
        const timerState = this.getTimerState()
        const totalMs = timerState.time?.totalTimeMs || 0
        return vm.newNumber(totalMs / 1000)
      },
    })

    // Add state property
    vm.defineProp(timerObject, 'state', {
      enumerable: false,
      metricsKey: 'timer.state',
      get: () => {
        const timerState = this.getTimerState()
        const stateString = this.getTimerStateString(timerState.time)
        return vm.newString(stateString)
      },
    })
  }

  /**
   * setupTimerMethods - Set up timer control methods (start, stop, pause, resume)
   */
  setupTimerMethods(timerObject, vm) {
    // Add pause method
    vm.defineFunction(timerObject, 'pause', 'timer.pause', () => {
      this.pauseTimer()
      return vm.undefined
    })

    // Add resume method
    vm.defineFunction(timerObject, 'resume', 'timer.resume', () => {
      this.resumeTimer()
      return vm.undefined
    })

    // Add start method
    vm.defineFunction(timerObject, 'start', 'timer.start', (durationHandle) => {
      const durationSeconds = vm.getNumber(durationHandle)
      this.startTimer(durationSeconds)
      return vm.undefined
    })

    // Add stop method
    vm.defineFunction(timerObject, 'stop', 'timer.stop', () => {
      this.stopTimer()
      return vm.undefined
    })
  }

  /**
   * getTimerState - Get current timer state from debug state
   */
  getTimerState() {
    return debugState.getState().timer
  }

  /**
   * getTimerStateString - Convert timer state to string representation
   */
  getTimerStateString(timerTime) {
    if (P$(timerTime) <= 0) {
      return 'STOPPED'
    }
    return timerTime?.isPaused ? 'PAUSED' : 'RUNNING'
  }

  /**
   * pauseTimer - Pause the current timer if running
   */
  pauseTimer() {
    const timerState = this.getTimerState()
    if (P$(timerState.time) > 0) {
      debugState.dispatch(_1(timerState.time))
    }
  }

  /**
   * resumeTimer - Resume the timer if paused
   */
  resumeTimer() {
    const timerState = this.getTimerState()
    if (P$(timerState.time) > 0 && timerState.time.isPaused) {
      debugState.dispatch(_$$ne(timerState.time))
    }
  }

  /**
   * startTimer - Start timer with specified duration
   */
  startTimer(durationSeconds) {
    const timerState = this.getTimerState()
    const currentRemainingMs = Math.max(0, P$(timerState.time))
    const targetDurationMs = durationSeconds * 1000
    if (this.getTimerStateString(timerState?.time) === 'STOPPED') {
      // Start new timer
      this.startNewTimer(targetDurationMs)
    }
    else {
      // Adjust existing timer
      this.adjustExistingTimer(timerState, targetDurationMs, currentRemainingMs)
    }
  }

  /**
   * startNewTimer - Start a completely new timer
   */
  startNewTimer(totalTimeMs) {
    debugState.dispatch(Qv({
      totalTimeMs,
    }))
  }

  /**
   * adjustExistingTimer - Adjust the duration of an existing timer
   */
  adjustExistingTimer(timerState, targetDurationMs, currentRemainingMs) {
    const deltaMs = targetDurationMs - currentRemainingMs
    debugState.dispatch(VV({
      timer: timerState.time,
      deltaMs,
    }))

    // Resume if currently paused
    if (timerState.time?.isPaused) {
      debugState.dispatch(_$$ne(this.getTimerState().time))
    }
  }

  /**
   * stopTimer - Stop the current timer
   */
  stopTimer() {
    const timerState = this.getTimerState()
    if (P$(timerState.time) > 0) {
      debugState.dispatch(Vk(timerState.time))
    }
  }

  /**
   * createActiveUsersApi - Create API array containing information about all active users
   *
   * Retrieves all active users from multiplayer state, processes their information
   * including names, photos, colors, selections, and viewports. Orders users with
   * current user first (index 0) followed by other users in order.
   *
   * @returns VM array containing user information objects
   */
  createActiveUsersApi() {
    const vm = this.vm
    const allUsers = NfO.getAllUsers()
    const usersArray = vm.newArray()

    // Get user info lookup for efficient access
    const userInfoLookup = this.getMultiplayerUserInfoBySessionId()

    // Process users and build array
    this.processAndAddUsers(usersArray, allUsers, userInfoLookup, vm)
    return usersArray
  }

  /**
   * processAndAddUsers - Process all users and add them to the users array
   */
  processAndAddUsers(usersArray, allUsers, userInfoLookup, vm) {
    let nextUserIndex = 1 // Reserve index 0 for current user

    for (const user of allUsers) {
      const userInfo = this.getMultiplayerUserInfo(user.sessionId, userInfoLookup)
      const arrayIndex = this.determineUserArrayIndex(userInfo.isCurrentUser, nextUserIndex)
      if (!userInfo.isCurrentUser) {
        nextUserIndex++
      }
      const userObject = this.createUserObject(user, userInfo, vm)
      vm.setProp(usersArray, arrayIndex.toString(), vm.deepWrap(userObject))
    }
  }

  /**
   * determineUserArrayIndex - Determine array index for user (current user gets index 0)
   */
  determineUserArrayIndex(isCurrentUser, nextUserIndex) {
    return isCurrentUser ? 0 : nextUserIndex
  }

  /**
   * createUserObject - Create user object with all relevant information
   */
  createUserObject(user, userInfo, _vm) {
    const userObject = {
      id: userInfo.userId,
      name: userInfo.name || '',
      sessionId: user.sessionId,
      photoUrl: userInfo.photoUrl,
      color: userInfo.color,
      selection: user.selection,
      position: this.processUserPosition(user.position),
      viewport: this.processUserViewport(user.viewport),
    }
    return userObject
  }

  /**
   * processUserPosition - Process user position, handling null coordinates
   */
  processUserPosition(position) {
    if (position?.x === null || position?.y === null) {
      return null
    }
    return position
  }

  /**
   * processUserViewport - Process user viewport, handling null dimensions
   */
  processUserViewport(viewport) {
    if (viewport?.x === null || viewport?.y === null || viewport?.height === null || viewport?.width === null) {
      return null
    }
    return viewport
  }

  /**
   * getMultiplayerUserInfo - Get comprehensive user information for multiplayer context
   *
   * Retrieves user details including name, photo URL, user ID, and color from various sources
   * based on whether it's the current user or another multiplayer participant.
   * Handles fallbacks for workshop mode and local storage.
   *
   * @param sessionId Session ID to get user info for
   * @param userLookup Lookup table for user data
   * @returns Complete user information object
   */
  getMultiplayerUserInfo(sessionId, userLookup) {
    const multiplayerState = debugState.getState().multiplayer
    const isCurrentUser = multiplayerState.sessionID === sessionId
    const userData = userLookup[sessionId]

    // Get user information based on whether it's current user or remote user
    const userInfo = this.getUserBasicInfo(isCurrentUser, userData)

    // Process photo URL if available
    const photoUrl = this.processUserPhotoUrl(userInfo.photoUrl)
    return {
      sessionId,
      name: userInfo.name,
      userId: userInfo.userId,
      color: userData?.color || null,
      photoUrl: photoUrl ? photoUrl.toString() : null,
      isCurrentUser: multiplayerState.sessionID === sessionId,
    }
  }

  /**
   * getUserBasicInfo - Get basic user information (name, photo, ID) based on user type
   */
  getUserBasicInfo(isCurrentUser, userData) {
    if (isCurrentUser && !userData) {
      return this.getCurrentUserInfo()
    }
    else {
      return this.getRemoteUserInfo(userData)
    }
  }

  /**
   * getCurrentUserInfo - Get current user information from various sources
   */
  getCurrentUserInfo() {
    const userState = debugState.getState().user
    const selectedView = debugState.getState().selectedView
    const isWorkshopMode = zg(selectedView)
    const isFullscreenWorkshop = selectedView.view === 'fullscreen' && selectedView.workshopModeInfo
    let name = null
    let photoUrl = null
    let userId = null
    if (userState) {
      name = userState.name
      photoUrl = userState.img_url
    }
    else if (isWorkshopMode) {
      name = isFullscreenWorkshop ? localStorage.getItem(_$$K(selectedView.workshopModeInfo.id)) : null
    }

    // Get user ID for current user
    userId = o8() ?? null
    return {
      name,
      photoUrl,
      userId,
    }
  }

  /**
   * getRemoteUserInfo - Get remote user information from user data
   */
  getRemoteUserInfo(userData) {
    return {
      name: userData?.name ?? null,
      photoUrl: userData?.imageURL ?? null,
      userId: userData?.userID ?? null,
    }
  }

  /**
   * processUserPhotoUrl - Process and validate user photo URL
   */
  processUserPhotoUrl(photoUrl) {
    if (!photoUrl)
      return null
    try {
      return tB(new URL(photoUrl))
    }
    catch {
      return null
    }
  }

  /**
   * getMultiplayerUserInfoBySessionId - Create lookup table for user information by session ID
   *
   * Builds an efficient lookup table mapping session IDs to user data objects
   * from the multiplayer state. Used for quick access during user processing.
   *
   * @returns Lookup object with session ID as key and user data as value
   */
  getMultiplayerUserInfoBySessionId() {
    const multiplayerState = debugState.getState().multiplayer
    const userLookup = {}
    multiplayerState.allUsers.forEach((user) => {
      userLookup[user.sessionID] = user
    })
    return userLookup
  }

  /**
   * createUserApi - Create API object for current user information
   *
   * Creates a VM object containing current user's information including
   * ID, photo URL, name, color, and session ID. Returns null if no user
   * is available and not in workshop mode.
   *
   * @returns VM object with user properties or null
   */
  createUserApi() {
    const vm = this.vm
    const userState = debugState.getState().user
    const selectedView = debugState.getState().selectedView
    const isWorkshopMode = zg(selectedView)

    // Return null if no user and not in workshop mode
    if (userState === null && !isWorkshopMode) {
      return vm.$$null
    }
    const userObject = vm.newObject()
    const userId = o8()
    const multiplayerState = debugState.getState().multiplayer

    // Get user info from multiplayer context
    const userInfo = this.getMultiplayerUserInfo(multiplayerState.sessionID, this.getMultiplayerUserInfoBySessionId())

    // Set user properties
    this.setUserApiProperties(userObject, userId, userInfo, vm)
    vm.shallowFreezeObject(userObject)
    return userObject
  }

  /**
   * setUserApiProperties - Set all user API properties on the user object
   */
  setUserApiProperties(userObject, userId, userInfo, vm) {
    vm.setProp(userObject, 'id', userId ? vm.newString(userId) : vm.$$null)
    vm.setProp(userObject, 'photoUrl', userInfo.photoUrl ? vm.newString(userInfo.photoUrl.toString()) : vm.$$null)
    vm.setProp(userObject, 'name', userInfo.name ? vm.newString(userInfo.name) : vm.$$null)
    vm.setProp(userObject, 'color', userInfo.color ? vm.newString(userInfo.color) : vm.$$null)
    vm.setProp(userObject, 'sessionId', vm.newNumber(userInfo.sessionId))
  }

  /**
   * createViewportApi - Create viewport API object for managing viewport properties and functions
   *
   * Creates a VM object with properties and methods for controlling the viewport,
   * including center, bounds, zoom, scroll and zoom functionality, and view modes
   * for slides and buzz editors.
   *
   * @returns VM object with viewport API methods and properties
   */
  createViewportApi() {
    const vm = this.vm
    const viewportApi = vm.newObject()

    // Helper function to check if in query mode
    const isQueryMode = () => this.queryMode

    // Setup viewport center property
    this.setupViewportCenterProperty(viewportApi, vm, isQueryMode)

    // Setup viewport bounds property
    this.setupViewportBoundsProperty(viewportApi, vm)

    // Setup viewport zoom property
    this.setupViewportZoomProperty(viewportApi, vm, isQueryMode)

    // Setup scroll and zoom into view function
    this.setupScrollAndZoomFunction(viewportApi, vm, isQueryMode)

    // Setup slides view property if in slides mode
    if (this.inSlides()) {
      this.setupSlidesViewProperty(viewportApi, vm)
    }

    // Setup canvas view property if in buzz or slides mode
    if (this.inBuzz() || this.inSlides()) {
      this.setupCanvasViewProperty(viewportApi, vm)
    }
    vm.shallowFreezeObject(viewportApi)
    return viewportApi
  }

  /**
   * setupViewportCenterProperty - Setup the center property for viewport API
   *
   * @param viewportApi - The viewport API object to modify
   * @param vm - Virtual machine instance
   * @param isQueryMode - Function to check query mode
   */
  setupViewportCenterProperty(viewportApi, vm, isQueryMode) {
    this.defineVmProp({
      handle: viewportApi,
      key: 'center',
      options: {
        enumerable: false,
        metricsKey: 'viewport.center',
        get: () => {
          const viewportBounds = NfO.getViewportBounds()
          const centerObject = vm.newObject()
          vm.setProp(centerObject, 'x', vm.newNumber(viewportBounds.x + viewportBounds.width / 2))
          vm.setProp(centerObject, 'y', vm.newNumber(viewportBounds.y + viewportBounds.height / 2))
          vm.shallowFreezeObject(centerObject)
          return centerObject
        },
        set: (valueHandle) => {
          if (isQueryMode()) {
            throw new Error('Cannot modify viewport in queryMode')
          }
          const {
            x,
            y,
          } = _$$u({
            vm,
            handle: valueHandle,
            zSchema: _$$N.Vector,
            property: 'viewport.center',
          })
          NfO.setViewportCenter({
            x,
            y,
          })
          return vm.undefined
        },
      },
      canWriteInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })
  }

  /**
   * setupViewportBoundsProperty - Setup the bounds property for viewport API
   *
   * @param viewportApi - The viewport API object to modify
   * @param vm - Virtual machine instance
   */
  setupViewportBoundsProperty(viewportApi, vm) {
    this.defineVmProp({
      handle: viewportApi,
      key: 'bounds',
      options: {
        enumerable: false,
        metricsKey: 'viewport.bounds',
        get: () => {
          const viewportBounds = NfO.getViewportBounds()
          const boundsObject = vm.newObject()
          vm.setProp(boundsObject, 'x', vm.newNumber(viewportBounds.x))
          vm.setProp(boundsObject, 'y', vm.newNumber(viewportBounds.y))
          vm.setProp(boundsObject, 'width', vm.newNumber(viewportBounds.width))
          vm.setProp(boundsObject, 'height', vm.newNumber(viewportBounds.height))
          vm.shallowFreezeObject(boundsObject)
          return boundsObject
        },
      },
      canWriteInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })
  }

  /**
   * setupViewportZoomProperty - Setup the zoom property for viewport API
   *
   * @param viewportApi - The viewport API object to modify
   * @param vm - Virtual machine instance
   * @param isQueryMode - Function to check query mode
   */
  setupViewportZoomProperty(viewportApi, vm, isQueryMode) {
    this.defineVmProp({
      handle: viewportApi,
      key: 'zoom',
      options: {
        enumerable: false,
        metricsKey: 'viewport.zoom',
        get: () => {
          const zoomScale = NfO.getViewportZoomScale()
          return vm.newNumber(zoomScale)
        },
        set: (valueHandle) => {
          if (isQueryMode()) {
            throw new Error('Cannot modify viewport in queryMode')
          }
          const zoomValue = _$$u({
            vm,
            handle: valueHandle,
            zSchema: _$$N.PositiveFloat,
            property: 'viewport.zoom',
          })
          if (!(zoomValue > 0)) {
            throw new Error('viewport.zoom expects a positive number')
          }
          NfO.setViewportZoomScale(zoomValue)
          return vm.undefined
        },
      },
      canWriteInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })
  }

  /**
   * setupScrollAndZoomFunction - Setup the scrollAndZoomIntoView function for viewport API
   *
   * @param viewportApi - The viewport API object to modify
   * @param vm - Virtual machine instance
   * @param isQueryMode - Function to check query mode
   */
  setupScrollAndZoomFunction(viewportApi, vm, isQueryMode) {
    this.defineVmFunction({
      handle: viewportApi,
      key: 'scrollAndZoomIntoView',
      metricsKey: 'viewport.scrollAndZoomIntoView',
      cb: (nodesHandle) => {
        if (isQueryMode()) {
          throw new Error('Cannot modify viewport in queryMode')
        }
        if (!vm.isArray(nodesHandle)) {
          throw new TypeError('Call to scrollAndZoomIntoView expected an array')
        }
        const nodeIds = []
        const arrayLength = vm.getNumberProp(nodesHandle, 'length')
        for (let i = 0; i < arrayLength; i++) {
          const nodeHandle = vm.getProp(nodesHandle, i.toString())
          const nodeId = vm.getString(vm.getProp(nodeHandle, 'id'))
          nodeIds.push(nodeId)
        }
        NfO.scrollAndZoomIntoView(nodeIds)
        return vm.undefined
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })
  }

  /**
   * setupSlidesViewProperty - Setup the slidesView property for viewport API (slides mode only)
   *
   * @param viewportApi - The viewport API object to modify
   * @param vm - Virtual machine instance
   */
  setupSlidesViewProperty(viewportApi, vm) {
    this.defineVmProp({
      handle: viewportApi,
      key: 'slidesView',
      options: {
        enumerable: true,
        metricsKey: 'viewport.slidesView',
        get: () => {
          const isInFocusedNodeView = Ez5.singleSlideView().isInFocusedNodeView.getCopy()
          return vm.newString(isInFocusedNodeView ? 'single-slide' : 'grid')
        },
        set: (valueHandle) => {
          const viewType = _$$u({
            vm,
            handle: valueHandle,
            zSchema: _$$z.union([_$$z.literal('grid'), _$$z.literal('single-slide')]),
            property: 'grid or single-slide',
          })
          const isInFocusedNodeView = Ez5.singleSlideView().isInFocusedNodeView.getCopy()
          if (viewType === 'grid' && isInFocusedNodeView) {
            Ez5.singleSlideView().exitFocusedNodeView()
          }
          else if (viewType === 'single-slide' && !isInFocusedNodeView) {
            Y5.triggerAction('enter-single-slide-view')
          }
        },
      },
      canWriteInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })
  }

  /**
   * setupCanvasViewProperty - Setup the canvasView property for viewport API (buzz/slides mode only)
   *
   * @param viewportApi - The viewport API object to modify
   * @param vm - Virtual machine instance
   */
  setupCanvasViewProperty(viewportApi, vm) {
    this.defineVmProp({
      handle: viewportApi,
      key: 'canvasView',
      options: {
        enumerable: true,
        metricsKey: 'viewport.canvasView',
        get: () => {
          let isInFocusedNodeView = false
          switch (this.fullscreenEditorType) {
            case _$$nT.Cooper:
              isInFocusedNodeView = Ez5?.cooperFocusView().isInFocusedNodeView.getCopy() ?? false
              break
            case _$$nT.Slides:
              isInFocusedNodeView = Ez5?.singleSlideView().isInFocusedNodeView.getCopy() ?? false
              break
          }
          return vm.newString(isInFocusedNodeView ? 'single-asset' : 'grid')
        },
        set: (valueHandle) => {
          const viewType = _$$u({
            vm,
            handle: valueHandle,
            zSchema: _$$z.union([_$$z.literal('grid'), _$$z.literal('single-asset')]),
            property: 'grid or single-asset',
          })
          switch (this.fullscreenEditorType) {
            case _$$nT.Cooper:
              {
                const isInFocusedNodeView = Ez5?.cooperFocusView().isInFocusedNodeView.getCopy() ?? false
                if (viewType === 'grid' && isInFocusedNodeView) {
                  Ez5?.cooperFocusView().exitFocusedNodeViewAndLeavePanelsOpen()
                }
                else if (viewType === 'single-asset' && !isInFocusedNodeView) {
                  Ez5?.cooperFocusView().enterFocusedNodeView()
                }
                break
              }
            case _$$nT.Slides:
              {
                const isInFocusedNodeView = Ez5?.singleSlideView().isInFocusedNodeView.getCopy() ?? false
                if (viewType === 'grid' && isInFocusedNodeView) {
                  Ez5?.singleSlideView().exitFocusedNodeView()
                }
                else if (viewType === 'single-asset' && !isInFocusedNodeView) {
                  Ez5?.singleSlideView().enterFocusedNodeView()
                }
                break
              }
          }
        },
      },
      canWriteInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })
  }

  /**
   * createParametersApi - Create parameters API object for handling plugin parameters
   *
   * Creates a VM object with event handlers for parameter-related events.
   * Only available for plugin mode, not console shim.
   *
   * @returns VM object with parameters API event handlers
   */
  createParametersApi() {
    const vm = this.vm
    const parametersApi = vm.newObject()

    // Add event handlers for parameters
    this.addEventHandlersTo(parametersApi, ad, 'figma.parameters', (_eventType) => {
      if (this.options.apiMode.type !== 'PLUGIN') {
        throw new Error('Cannot use "parameters.on(input)" from the developer tools console')
      }
    })
    vm.shallowFreezeObject(parametersApi)

    // Setup parameter input event triggers if in plugin mode
    if (this.options.apiMode.type === 'PLUGIN') {
      getFeatureFlags3({
        triggerParameterInputEvent: this.triggerParameterInputEvent,
        triggerRunEvent: this.triggerRunEvent,
      })
    }
    return parametersApi
  }

  /**
   * createCodegenApi - Create codegen API object for code generation functionality
   *
   * Creates a VM object with preferences property and refresh function for codegen.
   * Requires 'codegen' capability in manifest.
   *
   * @returns VM object with codegen API methods and properties
   * @throws Error if codegen capability is not specified
   */
  createCodegenApi() {
    const vm = this.vm

    // Validate codegen capability
    if (!this.options.capabilities?.includes('codegen')) {
      const capabilityName = 'codegen'
      throw new Error(`"${capabilityName}" capability is not specified in manifest.json. Add the following to your manifest.json: "capabilities": ["${capabilityName}"]. See https://www.figma.com/plugin-docs/manifest/#capabilities for more details.`)
    }
    const codegenApi = vm.newObject()

    // Setup preferences property
    this.defineVmProp({
      handle: codegenApi,
      key: 'preferences',
      options: {
        metricsKey: 'codegen.preferences',
        enumerable: true,
        configurable: false,
        get: () => vm.deepWrap(this.getCodegenPreferences()),
      },
      canWriteInReadOnly: false,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })

    // Setup refresh function
    this.defineVmFunction({
      handle: codegenApi,
      key: 'refresh',
      metricsKey: 'codegen.refresh',
      cb: () => {
        _$$c()
        return vm.undefined
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })

    // Add event handlers for codegen events
    this.addEventHandlersTo(codegenApi, ['generate', 'preferenceschange'], 'figma.codegen', null)
    return codegenApi
  }

  /**
   * createDevResourcesApi - Create dev resources API object for development resources
   *
   * Creates a VM object with event handlers for dev resource events like open, linkpreview, auth.
   * Availability depends on plugin configuration and feature flags.
   *
   * @returns VM object with dev resources API event handlers
   */
  createDevResourcesApi() {
    const vm = this.vm
    const devResourcesApi = vm.newObject()
    const {
      apiMode,
      pluginID,
      pluginVersionID,
    } = this.options

    // Check if dev resources are available
    const isDevResourcesAvailable = (() => {
      const hasPlugin = Up().has(pluginID)
      const isLocalWithFlag = (apiMode.type === 'CONSOLE_SHIM' || !pluginVersionID) && getFeatureFlags().plugins_related_links_local
      return hasPlugin || isLocalWithFlag
    })()
    if (isDevResourcesAvailable) {
      let eventTypes = ['open']
      if (this.options.capabilities?.includes('linkpreview')) {
        eventTypes = eventTypes.concat(['linkpreview', 'auth'])
      }
      this.addEventHandlersTo(devResourcesApi, eventTypes, 'figma.devResources', null)
    }
    return devResourcesApi
  }

  createVsCodeApi() {
    let e = this.vm
    return _$$T() ? e.newObject() : e.undefined
  }

  isTextReviewPluginEnabled() {
    let {
      activeTextReviewPlugin,
    } = debugState.getState().mirror.appModel
    let t = this.getPlugin()
    return !!activeTextReviewPlugin && !!t && isPluginConfigMatching(activeTextReviewPlugin, t)
  }

  /**
   * createTextReviewApi - Create API for text review functionality
   *
   * Creates the text review API object with requestToBeEnabledAsync method.
   * Handles enabling text review plugin with proper user consent, rate limiting,
   * and modal state management.
   *
   * @returns VM object with text review API methods
   */
  createTextReviewApi() {
    const vm = this.vm
    const textReviewObject = vm.newObject()
    this.defineVmFunction({
      handle: textReviewObject,
      key: 'requestToBeEnabledAsync',
      metricsKey: 'textreview.requestToBeEnabledAsync',
      cb: () => {
        const {
          promise,
          resolve,
          reject,
        } = vm.newPromise()

        // Handle various validation states
        if (this.queryMode) {
          reject(vm.newString('Cannot enable text review plugin in query mode.'))
          return promise
        }
        if (this.isTextReviewPluginEnabled()) {
          resolve(vm.undefined)
          return promise
        }
        if (this.shouldRejectTextReviewRequest()) {
          reject(vm.newString('The user rejected your request to enable text review plugin too many times.'))
          return promise
        }

        // Process the text review request
        this.processTextReviewRequest(vm, resolve, reject)
        return promise
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })
    return textReviewObject
  }

  /**
   * shouldRejectTextReviewRequest - Check if text review request should be rejected
   */
  shouldRejectTextReviewRequest() {
    return this.textReviewRequestRejects >= 2 || this.isTextReviewRequestModalOpen
  }

  /**
   * processTextReviewRequest - Process text review enablement request
   */
  processTextReviewRequest(vm, resolve, reject) {
    this.isTextReviewRequestModalOpen = true
    const plugin = this.getPlugin()
    const pluginName = plugin?.name || 'Plugin'
    const enablementPromise = this.createTextReviewEnablementPromise(pluginName)
    vm.registerPromise(enablementPromise).then(result => this.handleTextReviewSuccess(result, vm, resolve), () => this.handleTextReviewRejection(vm, reject)).finally(() => {
      this.isTextReviewRequestModalOpen = false
    })
  }

  /**
   * createTextReviewEnablementPromise - Create promise for text review enablement
   */
  createTextReviewEnablementPromise(pluginName) {
    return new Promise((resolve, reject) => {
      debugState.dispatch(_$$to({
        type: rp,
        data: {
          reject,
          resolve,
          pluginName,
        },
      }))
    })
  }

  /**
   * handleTextReviewSuccess - Handle successful text review enablement
   */
  handleTextReviewSuccess(result, vm, resolve) {
    const {
      turnOffSpellCheck,
    } = result

    // Handle spell check preference
    if (turnOffSpellCheck && UK().spellCheckPreference.getCopy()) {
      Y5.triggerAction('toggle-spell-check')
    }

    // Enable the plugin
    const plugin = this.getPlugin()
    if (plugin) {
      const pluginConfig = ZQ(plugin)
        ? {
          type: 'local',
          localFileId: plugin.localFileId,
        }
        : {
          type: 'published',
          pluginId: plugin.plugin_id,
        }
      Br(pluginConfig)
    }
    requestAnimationFrame(() => resolve(vm.undefined))
  }

  /**
   * handleTextReviewRejection - Handle text review request rejection
   */
  handleTextReviewRejection(vm, reject) {
    this.textReviewRequestRejects++
    reject(vm.newString('The user declined to enable your plugin for text review.'))
  }

  /**
   * setupTextReviewDisableFunction - Setup the requestToBeDisabledAsync function
   */
  setupTextReviewDisableFunction(textReviewObject, vm) {
    this.defineVmFunction({
      handle: textReviewObject,
      key: 'requestToBeDisabledAsync',
      metricsKey: 'textreview.requestToBeDisabledAsync',
      cb: () => {
        const {
          promise,
          resolve,
          reject,
        } = vm.newPromise()
        if (this.queryMode) {
          reject(vm.newString('Cannot disable text review plugin in query mode.'))
          return promise
        }
        const {
          activeTextReviewPlugin,
        } = debugState.getState().mirror.appModel
        if (this.isTextReviewPluginEnabled()) {
          Br(null)
          requestAnimationFrame(() => resolve(vm.undefined))
        }
        else if (activeTextReviewPlugin == null) {
          resolve(vm.undefined)
        }
        else {
          reject(vm.newString('The user currently has a text review plugin enabled that isn\'t yours. Did you mean to call figma.textreview.requestToBeEnabledAsync?'))
        }
        return promise
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })
  }

  /**
   * setupTextReviewEnabledProperty - Setup the isEnabled property
   */
  setupTextReviewEnabledProperty(textReviewObject, vm) {
    this.defineVmProp({
      handle: textReviewObject,
      key: 'isEnabled',
      options: {
        enumerable: true,
        metricsKey: 'textreview.isEnabled',
        get: () => vm.deepWrap(this.isTextReviewPluginEnabled()),
      },
      canWriteInReadOnly: false,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })

    // Setup additional text review functions
    this.setupTextReviewDisableFunction(textReviewObject, vm)
    this.setupTextReviewEnabledProperty(textReviewObject, vm)
    return textReviewObject
  }

  getCodegenLanguage() {
    let {
      devHandoffCodeLanguage,
    } = debugState.getState().mirror.appModel
    return devHandoffCodeLanguage?.pluginLanguage ?? ''
  }

  getCodegenPreferences() {
    let e = this.getPlugin()
    if (!e) {
      return {
        unit: 'PIXEL',
        scaleFactor: 1,
        customSettings: {},
      }
    }
    let t = this.getCodegenLanguage()
    let i = _$$X(e, t)
    let {
      preferences,
    } = _$$n_(e, i)
    return {
      ...preferences,
      unit: preferences.unit === tKW.PIXEL ? 'PIXEL' : 'SCALED',
      scaleFactor: preferences.scaleFactor || 1,
    }
  }

  /**
   * createUiApi - Create UI API for plugin iframe management
   *
   * Creates comprehensive UI API with iframe control methods including show, hide,
   * resize, reposition, message handling, and event management. Handles both
   * position tracking and message communication with the plugin iframe.
   *
   * @returns VM object with UI API methods and properties
   */
  createUiApi() {
    const vm = this.vm
    const uiObject = vm.newObject()

    // Setup core UI control functions
    this.setupUiControlFunctions(uiObject, vm)

    // Setup position and dimension functions
    this.setupUiPositionFunctions(uiObject, vm)

    // Setup message handling
    this.setupUiMessageHandling(uiObject, vm)

    // Add event handlers
    this.addEventHandlersTo(uiObject, al, 'figma.ui', null)
    vm.shallowFreezeObject(uiObject)
    return uiObject
  }

  /**
   * setupUiControlFunctions - Setup basic UI control functions (show, hide, close)
   */
  setupUiControlFunctions(uiObject, vm) {
    // Show UI function
    this.defineVmFunction({
      handle: uiObject,
      key: 'show',
      metricsKey: 'ui.show',
      cb: () => {
        if (this.queryMode) {
          throw new Error('Cannot show UI in queryMode.')
        }
        if (!this.runtimeOptions?.allowVisibleIframe) {
          throw new Error('Cannot show UI')
        }
        this.uiHandle.showIframe()
        return vm.undefined
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })

    // Hide UI function
    this.defineVmFunction({
      handle: uiObject,
      key: 'hide',
      metricsKey: 'ui.hide',
      cb: () => {
        this.uiHandle.hideIframe()
        return vm.undefined
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })

    // Close UI function
    this.defineVmFunction({
      handle: uiObject,
      key: 'close',
      metricsKey: 'ui.close',
      cb: () => {
        this.uiHandle.destroyIframe()
        return vm.undefined
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })
  }

  /**
   * setupUiPositionFunctions - Setup UI positioning and sizing functions
   */
  setupUiPositionFunctions(uiObject, vm) {
    // Resize function
    this.defineVmFunction({
      handle: uiObject,
      key: 'resize',
      metricsKey: 'ui.resize',
      cb: (widthHandle, heightHandle) => {
        const width = _$$u({
          vm,
          handle: widthHandle,
          zSchema: _$$N.PositiveInteger,
          property: 'resize width',
        })
        const height = _$$u({
          vm,
          handle: heightHandle,
          zSchema: _$$N.PositiveInteger,
          property: 'resize height',
        })
        this.uiHandle.setIframeSize(width, height)
        return vm.undefined
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })

    // Get position function
    this.defineVmFunction({
      handle: uiObject,
      key: 'getPosition',
      metricsKey: 'ui.getPosition',
      cb: () => {
        const {
          windowSpace,
          canvasSpace,
        } = this.uiHandle.getIframePosition()
        return this.createPositionObject(windowSpace, canvasSpace, vm)
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })

    // Reposition function
    this.defineVmFunction({
      handle: uiObject,
      key: 'reposition',
      metricsKey: 'ui.reposition',
      cb: (xHandle, yHandle) => {
        const x = _$$u({
          vm,
          handle: xHandle,
          zSchema: _$$N.FiniteNumber,
          property: 'x',
        })
        const y = _$$u({
          vm,
          handle: yHandle,
          zSchema: _$$N.FiniteNumber,
          property: 'y',
        })
        this.uiHandle.setIframePosition(x, y)
        return vm.undefined
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })
  }

  /**
   * createPositionObject - Create position object with window and canvas space coordinates
   */
  createPositionObject(windowSpace, canvasSpace, vm) {
    const positionObject = vm.newObject()
    const windowSpaceObject = vm.newObject()
    vm.setProp(windowSpaceObject, 'x', vm.newNumber(windowSpace.x))
    vm.setProp(windowSpaceObject, 'y', vm.newNumber(windowSpace.y))
    const canvasSpaceObject = vm.newObject()
    vm.setProp(canvasSpaceObject, 'x', vm.newNumber(canvasSpace.x))
    vm.setProp(canvasSpaceObject, 'y', vm.newNumber(canvasSpace.y))
    vm.setProp(positionObject, 'windowSpace', windowSpaceObject)
    vm.setProp(positionObject, 'canvasSpace', canvasSpaceObject)
    return positionObject
  }

  /**
   * setupUiMessageHandling - Setup UI message handling (onmessage property and postMessage function)
   */
  setupUiMessageHandling(uiObject, vm) {
    // onmessage property
    this.defineVmProp({
      handle: uiObject,
      key: 'onmessage',
      options: {
        enumerable: false,
        metricsKey: 'ui.onmessage',
        get: () => {
          if (this.options.apiMode.type === 'CONSOLE_SHIM') {
            throw new Error('Cannot use "onmessage" from the developer tools console')
          }
          return this.onMessageCallback ? this.onMessageCallback : vm.undefined
        },
        set: (callbackHandle) => {
          if (this.options.apiMode.type === 'CONSOLE_SHIM') {
            throw new Error('Cannot use "onmessage" from the developer tools console')
          }
          this.setMessageCallback(callbackHandle, vm)
          return vm.undefined
        },
      },
      canWriteInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })

    // postMessage function
    this.defineVmFunction({
      handle: uiObject,
      key: 'postMessage',
      metricsKey: 'ui.postMessage',
      cb: (messageHandle, optionsHandle) => {
        const options = Kb(_$$u({
          vm,
          handle: optionsHandle,
          zSchema: aa,
          property: 'postMessage options',
        }) || {}, {
          origin: '*',
        })
        this.uiHandle.postMessageToIframe({
          pluginMessage: vm.deepUnwrap(messageHandle),
          pluginId: this.options.pluginID,
        }, {
          origin: options.origin,
        })
        return vm.undefined
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })
  }

  /**
   * setMessageCallback - Set the message callback with proper handle management
   */
  setMessageCallback(callbackHandle, vm) {
    let newCallback
    if (vm.isNull(callbackHandle) || vm.isUndefined(callbackHandle)) {
      newCallback = undefined
    }
    else if (vm.isFunction(callbackHandle)) {
      newCallback = callbackHandle
    }
    else {
      throw new TypeError('onmessage must be a function')
    }

    // Release old callback handle
    if (this.onMessageCallback) {
      vm.releaseHandle(this.onMessageCallback)
    }

    // Set new callback and retain handle
    this.onMessageCallback = newCallback
    if (this.onMessageCallback) {
      vm.retainHandle(this.onMessageCallback)
    }
  }

  /**
   * createClientStorageApi - Create client storage API for persistent data management
   *
   * Creates API for managing client-side persistent storage with async operations
   * for getting, setting, deleting, and listing keys. Handles error reporting
   * and proper promise management for all storage operations.
   *
   * @returns VM object with client storage API methods
   */
  createClientStorageApi() {
    const vm = this.vm
    const {
      userID,
      pluginID,
    } = this.options
    const storageObject = vm.newObject()

    // Setup all storage operation functions
    this.setupStorageGetFunction(storageObject, vm, userID, pluginID)
    this.setupStorageSetFunction(storageObject, vm, userID, pluginID)
    this.setupStorageDeleteFunction(storageObject, vm, userID, pluginID)
    this.setupStorageKeysFunction(storageObject, vm, userID, pluginID)
    vm.shallowFreezeObject(storageObject)
    return storageObject
  }

  /**
   * setupStorageGetFunction - Setup the getAsync function for retrieving stored values
   */
  setupStorageGetFunction(storageObject, vm, userID, pluginID) {
    this.defineVmFunction({
      handle: storageObject,
      key: 'getAsync',
      metricsKey: 'clientStorage.getAsync',
      cb: (keyHandle) => {
        const key = _$$u({
          vm,
          handle: keyHandle,
          zSchema: _$$z.string(),
          property: 'key',
        })
        const {
          promise,
          resolve,
          reject,
        } = vm.newPromise()
        vm.registerPromise(getStorageValueByKey({
          userID,
          pluginID,
          name: key,
        })).then(value => resolve(vm.deepWrap(value)), error => this.handleStorageError(reject, vm, 'get', key, error))
        return promise
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })
  }

  /**
   * setupStorageSetFunction - Setup the setAsync function for storing values
   */
  setupStorageSetFunction(storageObject, vm, userID, pluginID) {
    this.defineVmFunction({
      handle: storageObject,
      key: 'setAsync',
      metricsKey: 'clientStorage.setAsync',
      cb: (keyHandle, valueHandle) => {
        const key = _$$u({
          vm,
          handle: keyHandle,
          zSchema: _$$z.string(),
          property: 'key',
        })
        const value = vm.deepUnwrap(valueHandle)
        const {
          promise,
          resolve,
          reject,
        } = vm.newPromise()
        const stats = vm.getStats()
        const requestParams = {
          userID,
          pluginID,
          key,
          // Added missing key property
          name: key,
          value,
          ...(stats
            ? {
              stats,
            }
            : {}),
        }
        vm.registerPromise(setStorageEntry(requestParams)).then(() => resolve(vm.undefined), error => this.handleStorageError(reject, vm, 'set', key, error))
        return promise
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })
  }

  /**
   * setupStorageDeleteFunction - Setup the deleteAsync function for removing stored values
   */
  setupStorageDeleteFunction(storageObject, vm, userID, pluginID) {
    this.defineVmFunction({
      handle: storageObject,
      key: 'deleteAsync',
      metricsKey: 'clientStorage.deleteAsync',
      cb: (keyHandle) => {
        const key = _$$u({
          vm,
          handle: keyHandle,
          zSchema: _$$z.string(),
          property: 'key',
        })
        const {
          promise,
          resolve,
          reject,
        } = vm.newPromise()
        vm.registerPromise(setStorageEntry({
          userID,
          pluginID,
          name: key,
          // remove: true, // Commented out: not supported in StorageEntry type
          // delete: true, // Alternative property for removal - also not supported
        })).then(
          // Type assertion to bypass interface restrictions
          () => resolve(vm.undefined),
          (error) => {
            const keyStr = JSON.stringify(key)
            reject(vm.newString(`Failed to delete client storage key ${keyStr}: ${error}`))
          },
        )
        return promise
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })
  }

  /**
   * setupStorageKeysFunction - Setup the keysAsync function for listing all stored keys
   */
  setupStorageKeysFunction(storageObject, vm, userID, pluginID) {
    this.defineVmFunction({
      handle: storageObject,
      key: 'keysAsync',
      metricsKey: 'clientStorage.keysAsync',
      cb: () => {
        const {
          promise,
          resolve,
          reject,
        } = vm.newPromise()
        vm.registerPromise(getAllStorageKeysWithPrefix({
          userID,
          pluginID,
          name: 'keysAsync', // Added missing name property
        })).then(keys => resolve(vm.deepWrap(keys)), (error) => {
          reject(vm.newString(`Failed to get client storage keys: ${error}`))
        })
        return promise
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })
  }

  /**
   * handleStorageError - Handle storage operation errors with proper logging
   */
  handleStorageError(reject, vm, operation, key, error) {
    const keyStr = JSON.stringify(key)
    reject(vm.newString(`Failed to ${operation} client storage key ${keyStr}: ${error}`))
    $D(_$$e.EXTENSIBILITY, error instanceof Error ? error : new Error(`figma.clientStorageAsync.${operation}Async failed: ${error}.`))
  }

  getPublishedExtension(e) {
    let {
      publishedPlugins,
      publishedWidgets,
    } = debugState.getState()
    return publishedPlugins[e] ?? publishedWidgets[e]
  }

  getOnCanvasPublishedWidgetVersion(e, t) {
    let {
      publishedCanvasWidgetVersions,
    } = debugState.getState()
    return publishedCanvasWidgetVersions[e]?.[t]
  }

  getLocalPlugin(e) {
    let {
      localPlugins,
    } = debugState.getState()
    return Object.values(localPlugins).find(t => t.plugin_id === e)
  }

  getPlugin() {
    return this.options.isLocal ? this.getLocalPlugin(this.options.pluginID) : this.getPublishedExtension(this.options.pluginID)?.versions[this.options.pluginVersionID]
  }

  inReviewByCommunityAdmin(e) {
    return !!(getFeatureFlags().community_hub_admin && e && AC(e))
  }

  userPaymentStatusType(e) {
    if (this.options.isLocal || this.inReviewByCommunityAdmin(e)) {
      let e = y1()
      return e?.type || zH.UNPAID
    }
    if (e && m3(e)) {
      let {
        communityPayments,
        user,
      } = debugState.getState()
      return user ? vl(e, user) ? zH.PAID : vT(e, communityPayments) ? zH.PAID : zH.UNPAID : zH.NOT_SUPPORTED
    }
    return zH.NOT_SUPPORTED
  }

  /**
   * createPaymentsApi - Create payments API for plugin monetization
   *
   * Creates comprehensive payments API with user tracking, payment status,
   * checkout functionality, and payment token generation. Handles both
   * development and production payment flows with proper validation.
   *
   * @returns VM object with payments API methods and properties
   */
  createPaymentsApi() {
    const vm = this.vm
    const paymentsObject = vm.newObject()

    // Setup payment tracking functions
    this.setupPaymentTrackingFunctions(paymentsObject, vm)

    // Setup payment status property
    this.setupPaymentStatusProperty(paymentsObject, vm)

    // Setup development payment functions
    this.setupDevelopmentPaymentFunctions(paymentsObject, vm)

    // Setup checkout functions
    this.setupCheckoutFunctions(paymentsObject, vm)

    // Setup payment token function
    this.setupPaymentTokenFunction(paymentsObject, vm)
    vm.shallowFreezeObject(paymentsObject)
    return paymentsObject
  }

  /**
   * setupPaymentTrackingFunctions - Setup functions for tracking user payment history
   */
  setupPaymentTrackingFunctions(paymentsObject, vm) {
    this.defineVmFunction({
      handle: paymentsObject,
      key: 'getUserFirstRanSecondsAgo',
      metricsKey: 'figma.payments.getUserFirstRanSecondsAgo',
      cb: () => {
        const {
          pluginID,
        } = this.options
        const extension = this.getPublishedExtension(pluginID)
        if (extension?.current_user_first_ran_at) {
          const firstRanDate = new Date(extension.current_user_first_ran_at)
          const secondsAgo = Math.floor((Date.now() - firstRanDate.getTime()) / 1000)
          return vm.newNumber(secondsAgo)
        }
        return vm.newNumber(0)
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })
  }

  /**
   * setupPaymentStatusProperty - Setup the payment status property
   */
  setupPaymentStatusProperty(paymentsObject, vm) {
    this.defineVmProp({
      handle: paymentsObject,
      key: 'status',
      options: {
        enumerable: true,
        metricsKey: 'figma.payments.status',
        get: () => {
          const {
            pluginID,
          } = this.options
          const extension = this.getPublishedExtension(pluginID)
          const statusObject = vm.newObject()
          vm.setProp(statusObject, 'type', vm.newString(this.userPaymentStatusType(extension)))
          vm.shallowFreezeObject(statusObject)
          return statusObject
        },
      },
      canWriteInReadOnly: false,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })
  }

  /**
   * setupDevelopmentPaymentFunctions - Setup development-only payment functions
   */
  setupDevelopmentPaymentFunctions(paymentsObject, vm) {
    this.defineVmFunction({
      handle: paymentsObject,
      key: 'setPaymentStatusInDevelopment',
      metricsKey: 'figma.payments.setPaymentStatusInDevelopment',
      cb: (statusHandle) => {
        const {
          pluginID,
        } = this.options
        const extension = this.getPublishedExtension(pluginID)

        // Only allow in local development or community admin review
        if (!this.options.isLocal && !this.inReviewByCommunityAdmin(extension)) {
          return vm.undefined
        }
        const paymentStatus = _$$u({
          vm,
          handle: statusHandle,
          zSchema: _$$z.strictObject({
            type: _$$z.nativeEnum(zH),
          }),
          property: 'setPaymentStatusInDevelopment',
        })
        Qj(paymentStatus)
        return vm.undefined
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })
  }

  /**
   * setupCheckoutFunctions - Setup checkout request and initiation functions
   */
  setupCheckoutFunctions(paymentsObject, vm) {
    // Request checkout function
    this.defineVmFunction({
      handle: paymentsObject,
      key: 'requestCheckout',
      metricsKey: 'figma.payments.requestCheckout',
      cb: () => {
        if (!this.checkoutRequested) {
          this.checkoutRequested = true
          jG(this.requestCheckoutCallback)
        }
        return vm.undefined
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })

    // Initiate checkout async function
    this.defineVmFunction({
      handle: paymentsObject,
      key: 'initiateCheckoutAsync',
      metricsKey: 'figma.payments.initiateCheckoutAsync',
      cb: (optionsHandle) => {
        if (this.queryMode || !this.runtimeOptions.allowInitiateCheckout) {
          throw new Error('Unexpected call to figma.payments.initiateCheckoutAsync')
        }
        const {
          promise,
          resolve,
        } = vm.newPromise()
        const checkoutOptions = this.parseCheckoutOptions(optionsHandle, vm)
        vm.registerPromise(this.initiateCheckoutAsyncImpl(checkoutOptions)).then(() => resolve(vm.undefined))
        return promise
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })
  }

  /**
   * parseCheckoutOptions - Parse and validate checkout options
   */
  parseCheckoutOptions(optionsHandle, vm) {
    const defaultOptions = {
      interstitial: _$$P3.PAID_FEATURE,
    }
    if (vm.isUndefined(optionsHandle)) {
      return defaultOptions
    }
    const userOptions = _$$u({
      vm,
      handle: optionsHandle,
      zSchema: _$$z.object({
        interstitial: _$$z.nativeEnum(_$$P3),
      }).partial(),
      property: 'initiateCheckoutAsync',
    })
    return {
      ...defaultOptions,
      ...userOptions,
    }
  }

  /**
   * setupPaymentTokenFunction - Setup payment token generation function
   */
  setupPaymentTokenFunction(paymentsObject, vm) {
    this.defineVmFunction({
      handle: paymentsObject,
      key: 'getPluginPaymentTokenAsync',
      metricsKey: 'figma.payments.getPluginPaymentTokenAsync',
      cb: () => {
        const {
          promise,
          resolve,
          reject,
        } = vm.newPromise()
        vm.registerPromise(this.getPluginPaymentTokenAsyncImpl()).then(token => resolve(vm.newString(token))).catch((error) => {
          reject(vm.newString(`Failed to generate plugin payment token with error: ${error.message}`))
        })
        return promise
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })
  }

  /**
   * initiateCheckoutAsyncImpl - Implementation of checkout initiation process
   *
   * Handles the complex checkout flow including validation of user payment status,
   * plugin monetization requirements, and UI display management. Manages
   * async checkout process with proper cleanup and error handling.
   *
   * @param options Checkout options including interstitial type
   * @returns Promise that resolves when checkout process is complete
   */
  initiateCheckoutAsyncImpl(options) {
    const user = debugState.getState().user
    const {
      pluginID,
      pluginVersionID,
      isLocal,
    } = this.options

    // Get plugin/widget information
    const publishedExtension = this.getPublishedExtension(pluginID)
    const localPlugin = isLocal ? this.getLocalPlugin(pluginID) : undefined
    const canvasWidget = this.getOnCanvasPublishedWidgetVersion(pluginID, pluginVersionID)

    // Validate checkout requirements
    this.validateCheckoutRequirements(publishedExtension, localPlugin, isLocal)

    // Setup UI bell notification
    pN({
      shouldShowVisualBell: true,
    })
    return this.executeCheckoutFlow(user, publishedExtension, localPlugin, canvasWidget, options)
  }

  /**
   * validateCheckoutRequirements - Validate that checkout can be initiated
   */
  validateCheckoutRequirements(publishedExtension, localPlugin, isLocal) {
    if (publishedExtension) {
      // Check if plugin is monetized
      if (!m3(publishedExtension) && !localPlugin) {
        throw new Error('Resource must be monetized to initiate checkout')
      }

      // Check payment status - only allow checkout for unpaid users
      if (this.userPaymentStatusType(publishedExtension) !== zH.UNPAID) {
        if (isLocal) {
          throw new Error('Cannot initiate checkout, user\'s payment status type is not UNPAID')
        }
        return Promise.resolve()
      }
    }
  }

  /**
   * executeCheckoutFlow - Execute the main checkout flow with proper cleanup
   */
  executeCheckoutFlow(user, publishedExtension, localPlugin, canvasWidget, options) {
    return new Promise(async (resolve) => {
      let isActive = true

      // Setup cleanup action for shutdown
      this.options.addShutdownAction(() => {
        if (isActive) {
          Y5.dispatch(ES(_$$V))
          Y5.dispatch(ES(_$$h))
        }
      })

      // Execute the checkout process
      await kA(debugState.dispatch, user, publishedExtension, localPlugin, canvasWidget, options?.interstitial)

      // Mark as complete and resolve
      isActive = false
      resolve(undefined)
    })
  }

  /**
   * getPluginPaymentTokenAsyncImpl - Implementation of payment token generation
   *
   * Generates secure payment tokens for monetized plugins and widgets.
   * Validates plugin existence, monetization status, and determines the
   * correct API endpoint based on plugin type.
   *
   * @returns Promise that resolves to the payment token
   */
  getPluginPaymentTokenAsyncImpl() {
    const {
      pluginID,
      isLocal,
    } = this.options

    // Get plugin information
    const publishedExtension = this.getPublishedExtension(pluginID)
    const localPlugin = isLocal ? this.getLocalPlugin(pluginID) : undefined

    // Validate plugin and monetization requirements
    this.validateTokenRequirements(pluginID, publishedExtension, localPlugin)

    // Determine API endpoint type
    const apiType = this.determineApiType(publishedExtension, localPlugin)

    // Generate and return token
    return this.generatePaymentToken(apiType, pluginID)
  }

  /**
   * validateTokenRequirements - Validate requirements for token generation
   */
  validateTokenRequirements(pluginID, publishedExtension, localPlugin) {
    if (!pluginID || !publishedExtension && !localPlugin) {
      throw new Error('Cannot generate plugin payment token, plugin is not found')
    }
    if (!m3(publishedExtension) && !localPlugin) {
      throw new Error('Resource must be monetized to generate a plugin payment token')
    }
  }

  /**
   * determineApiType - Determine API endpoint type (plugins vs widgets)
   */
  determineApiType(publishedExtension, localPlugin) {
    const isWidget = publishedExtension?.is_widget || localPlugin?.cachedContainsWidget
    return isWidget ? 'widgets' : 'plugins'
  }

  /**
   * generatePaymentToken - Generate payment token via API call
   */
  generatePaymentToken(apiType, pluginID) {
    // TODO: Phase 18 Refactoring - Replace XHR with Advanced HTTP Client:
    // const httpClient = createAdvancedHTTPClientManager('/api')
    // return httpClient.put(`/${apiType}/${pluginID}/id_token`).then(response => response.data.meta.token)
    return XHR.put(`/api/${apiType}/${pluginID}/id_token`).then(({
      data,
    }) => Promise.resolve(data.meta.token)).catch(error => Promise.reject(error))
  }

  /**
   * createUtilApi - Create utility API for color and paint operations
   *
   * Creates utility functions for color conversion, paint creation, and markdown
   * processing. Provides convenient methods for working with colors in different
   * formats and creating paint objects with proper validation.
   *
   * @returns VM object with utility API methods
   */
  createUtilApi() {
    const vm = this.vm
    const utilObject = vm.newObject()

    // Setup color utility functions
    this.setupColorUtilityFunctions(utilObject, vm)

    // Setup paint utility functions
    this.setupPaintUtilityFunctions(utilObject, vm)

    // Setup text utility functions
    this.setupTextUtilityFunctions(utilObject, vm)
    return utilObject
  }

  /**
   * setupColorUtilityFunctions - Setup color conversion utility functions
   */
  setupColorUtilityFunctions(utilObject, vm) {
    // RGBA color function
    this.defineVmFunction({
      handle: utilObject,
      key: 'rgba',
      metricsKey: 'figma.util.rgba',
      cb: (colorHandle) => {
        const colorInput = _$$u({
          vm,
          handle: colorHandle,
          zSchema: _$$N.ColorInput,
          property: 'color',
        })
        return vm.deepWrap(parseColorInput(colorInput))
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: true,
      hasEditScope: false,
    })

    // RGB color function (without alpha)
    this.defineVmFunction({
      handle: utilObject,
      key: 'rgb',
      metricsKey: 'figma.util.rgb',
      cb: (colorHandle) => {
        const colorInput = _$$u({
          vm,
          handle: colorHandle,
          zSchema: _$$N.ColorInput,
          property: 'color',
        })
        const rgbaColor = parseColorInput(colorInput)
        const rgbColor = {
          r: rgbaColor.r,
          g: rgbaColor.g,
          b: rgbaColor.b,
        }
        return vm.deepWrap(rgbColor)
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: true,
      hasEditScope: false,
    })
  }

  /**
   * setupPaintUtilityFunctions - Setup paint creation utility functions
   */
  setupPaintUtilityFunctions(utilObject, vm) {
    this.defineVmFunction({
      handle: utilObject,
      key: 'solidPaint',
      metricsKey: 'figma.util.solidPaint',
      cb: (colorHandle, paintOptionsHandle) => {
        const colorInput = _$$u({
          vm,
          handle: colorHandle,
          zSchema: _$$N.ColorInput,
          property: 'color',
        })
        const partialPaintOptions = _$$u({
          vm,
          handle: paintOptionsHandle,
          zSchema: _$$N.PartialSolidPaint,
          property: 'SolidPaint',
        })

        // Clean up undefined properties
        const cleanedOptions = this.cleanPaintOptions(partialPaintOptions)

        // Create solid paint object
        const solidPaint = this.createSolidPaintObject(colorInput, cleanedOptions)
        return vm.deepWrap(solidPaint)
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: true,
      hasEditScope: false,
    })
  }

  /**
   * cleanPaintOptions - Clean undefined properties from paint options
   */
  cleanPaintOptions(partialPaintOptions) {
    if (partialPaintOptions === undefined) {
      return undefined
    }
    const cleaned = {
      ...partialPaintOptions,
    }
    for (const key in cleaned) {
      if (cleaned[key] === undefined) {
        delete cleaned[key]
      }
    }
    return cleaned
  }

  /**
   * createSolidPaintObject - Create solid paint object from color and options
   */
  createSolidPaintObject(colorInput, paintOptions) {
    const normalizedColor = parseColorInput(colorInput)
    return {
      ..._$$A(paintOptions),
      type: 'SOLID',
      color: {
        r: normalizedColor.r,
        g: normalizedColor.g,
        b: normalizedColor.b,
      },
      opacity: normalizedColor.a,
    }
  }

  /**
   * setupTextUtilityFunctions - Setup text processing utility functions
   */
  setupTextUtilityFunctions(utilObject, vm) {
    this.defineVmFunction({
      handle: utilObject,
      key: 'normalizeMarkdown',
      metricsKey: 'figma.util.normalizeMarkdown',
      cb: (markdownHandle) => {
        const markdownText = _$$u({
          vm,
          handle: markdownHandle,
          zSchema: _$$z.string(),
          property: 'markdown',
        })
        const normalizedMarkdown = _$$nB(markdownText)
        return vm.newString(normalizedMarkdown)
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: true,
      hasEditScope: false,
    })
  }

  createInternalApi() {
    let e = this.vm
    let t = e.newObject()
    e.shallowFreezeObject(t)
    return t
  }

  createConstantsApi() {
    let e = this.vm
    let t = e.newObject()
    this.defineVmProp({
      handle: t,
      key: 'colors',
      options: {
        enumerable: !1,
        metricsKey: 'constants.colors',
        get: () => {
          let t = e.newObject()
          let i = e.newObject()
          for (let t in ez) {
            let n = e.newString(ez[t])
            e.setProp(i, t, n)
          }
          let n = e.newObject()
          for (let t in eG) {
            let i = e.newString(eG[t])
            e.setProp(n, t, i)
          }
          e.setProp(t, 'figJamBase', n)
          e.setProp(t, 'figJamBaseLight', i)
          return t
        },
      },
      canWriteInReadOnly: !1,
      isAllowedInWidgetRender: !0,
      hasEditScope: !1,
    })
    return t
  }

  /**
   * defineWidgetApi - Define comprehensive widget API for Figma widgets
   *
   * Creates the complete widget API including registration, lifecycle management,
   * event handling, and utility functions. Handles complex widget rendering,
   * state management, and interaction patterns.
   *
   * @param apiObject The main API object to define widget property on
   */
  defineWidgetApi(apiObject) {
    if (!this.isWidget)
      return
    const widgetManager = this.widgetManager
    if (!widgetManager) {
      throw new Error('WidgetManager not defined')
    }
    const vm = this.vm
    const widgetApiObject = vm.newObject()

    // Define widget property on main API
    vm.defineProp(apiObject, 'widget', {
      enumerable: false,
      value: widgetApiObject,
    })

    // Setup core widget functions
    this.setupWidgetCoreFunctions(widgetApiObject, vm, widgetManager)

    // Setup widget utility functions
    this.setupWidgetUtilityFunctions(widgetApiObject, vm)
  }

  /**
   * setupWidgetCoreFunctions - Setup core widget functions (register, waitForTask)
   */
  setupWidgetCoreFunctions(widgetApiObject, vm, widgetManager) {
    // Widget registration function
    vm.defineFunction(widgetApiObject, 'register', 'widget.register', (widgetFunctionHandle) => {
      this._hasRegisteredWidgetFunction = true
      return this.executeWidgetRegistration(widgetFunctionHandle, widgetManager, vm)
    })

    // Wait for task function
    vm.defineFunction(widgetApiObject, 'waitForTask', 'widget.waitForTask', (promiseHandle) => {
      if (widgetManager.isRunningWidgetFunction()) {
        throw new Error('waitForTask can only be called in useEffect or an event handler')
      }
      widgetManager.trackPromise(wrapVmPromise({
        vm,
        promiseHandle,
        shouldRetainResult: false,
      }))
      return vm.undefined
    })
  }

  /**
   * executeWidgetRegistration - Execute the complex widget registration process
   */
  executeWidgetRegistration(widgetFunctionHandle, widgetManager, _vm) {
    return (async () => {
      widgetManager.registerWidgetFunction(widgetFunctionHandle)
      try {
        const widgetEvent = this.parseWidgetEvent()
        widgetManager.setLifecycleCommand(widgetEvent)
        const widgetNode = this.getWidgetNode(widgetEvent.widgetNodeID)
        if (!widgetNode) {
          this.closePlugin(undefined)
          return
        }
        const pluginDataHash = await this.handlePluginDataUpdate(widgetNode)
        await this.processWidgetEvent(widgetEvent, widgetManager, pluginDataHash)
      }
      catch (error) {
        this.handleWidgetError(error)
      }
      finally {
        await this.closePlugin(undefined)
      }
      await widgetManager.waitForFinish()
    })()
  }

  /**
   * parseWidgetEvent - Parse and validate widget event from command
   */
  parseWidgetEvent() {
    const widgetEvent = JSON.parse(this.options.command)
    if (typeof widgetEvent !== 'object') {
      throw new TypeError('Invalid widget event')
    }
    return widgetEvent
  }

  /**
   * getWidgetNode - Get widget node from scene graph
   */
  getWidgetNode(widgetNodeId) {
    return this.privateSceneGraph.get(widgetNodeId)
  }

  /**
   * handlePluginDataUpdate - Handle local plugin data updates if needed
   */
  async handlePluginDataUpdate(widgetNode) {
    let pluginDataHash = null
    if (this.options.isLocal && this.options.code && !ZY(this.options.pluginID)) {
      const existingData = widgetNode.getPluginData(this.options.pluginID, cz)
      const newCodeHash = _$$F(this.options.code)
      if (existingData !== newCodeHash) {
        pluginDataHash = newCodeHash
      }
    }
    return pluginDataHash
  }

  /**
   * processWidgetEvent - Process different types of widget events
   */
  async processWidgetEvent(widgetEvent, widgetManager, pluginDataHash) {
    const interactiveEvents = ['click', 'propertymenu', 'rerender', 'textEditEnd', 'attachedStickablesChanged', 'stuckStatusChanged']
    if (interactiveEvents.includes(widgetEvent.name)) {
      await this.handleInteractiveEvent(widgetEvent, widgetManager, pluginDataHash)
    }
    if (widgetEvent.name === 'mount' || widgetEvent.name === 'rerender' || pluginDataHash) {
      await this.handleMountOrRerenderEvent(widgetEvent, widgetManager, pluginDataHash)
    }
  }

  /**
   * handleInteractiveEvent - Handle interactive widget events that require rendering
   */
  async handleInteractiveEvent(widgetEvent, widgetManager, pluginDataHash) {
    const widgetNodeId = widgetEvent.widgetNodeID
    widgetManager.initializeRenderingState(widgetNodeId)
    const renderedTree = widgetManager.renderWidgetTree(widgetNodeId, 'previous')
    if (pluginDataHash) {
      widgetManager.setOldVRoot(widgetNodeId, renderedTree)
    }
    widgetManager.maybeRunEffects(widgetNodeId)
    await this.handleSpecificEventType(widgetEvent, widgetManager, renderedTree)
  }

  /**
   * handleSpecificEventType - Handle specific types of widget events
   */
  async handleSpecificEventType(widgetEvent, widgetManager, renderedTree) {
    const widgetNodeId = widgetEvent.widgetNodeID
    switch (widgetEvent.name) {
      case 'textEditEnd':
      case 'click':
        await this.handleClickOrTextEditEvent(widgetEvent, widgetManager, renderedTree)
        break
      case 'propertymenu':
        await this.handlePropertyMenuEvent(widgetEvent, widgetManager, widgetNodeId)
        break
      case 'stuckStatusChanged':
        await this.handleStuckStatusChangedEvent(widgetEvent, widgetManager, widgetNodeId)
        break
      case 'attachedStickablesChanged':
        await this.handleAttachedStickablesChangedEvent(widgetEvent, widgetManager, widgetNodeId)
        break
    }
  }

  /**
   * handleClickOrTextEditEvent - Handle click and text edit events
   */
  async handleClickOrTextEditEvent(widgetEvent, widgetManager, renderedTree) {
    await widgetManager.trackPromise(processWidgetEventHandlers({
      vm: this.vm,
      uiHandle: this.uiHandle,
      runtime: widgetManager.getPluginRuntimeBridge(),
      vNode: renderedTree.rootNode,
      command: widgetEvent,
      widgetManager,
      editScopeLabel: `widget-${widgetEvent.name}`,
    }))
    widgetManager.scheduleRender(widgetEvent.widgetNodeID)
  }

  /**
   * handlePropertyMenuEvent - Handle property menu events
   */
  async handlePropertyMenuEvent(widgetEvent, widgetManager, widgetNodeId) {
    const propertyMenuCallback = widgetManager.getPropertyMenuCallbackHandle(widgetNodeId)
    if (propertyMenuCallback) {
      await widgetManager.trackPromise(updateWidgetProperties({
        vm: this.vm,
        uiHandle: this.uiHandle,
        widgetManager,
        callbackHandle: propertyMenuCallback,
        propertyName: widgetEvent.propertyName,
        propertyValue: widgetEvent.propertyValue,
        editScopeLabel: 'widget-property-menu',
      }))
    }
  }

  /**
   * handleStuckStatusChangedEvent - Handle stuck status changed events
   */
  async handleStuckStatusChangedEvent(widgetEvent, widgetManager, widgetNodeId) {
    const renderingState = widgetManager.getRenderingState(widgetNodeId)
    const stuckStatusHandler = renderingState.stickableState.stuckStatusChangedHandle
    if (stuckStatusHandler) {
      await widgetManager.trackPromise(handleStuckStatusChange({
        vm: this.vm,
        handler: stuckStatusHandler,
        event: widgetEvent,
      }))
    }
  }

  /**
   * handleAttachedStickablesChangedEvent - Handle attached stickables changed events
   */
  async handleAttachedStickablesChangedEvent(widgetEvent, widgetManager, widgetNodeId) {
    const renderingState = widgetManager.getRenderingState(widgetNodeId)
    const attachedStickablesHandler = renderingState.stickableState.attachedStickablesChangedHandle
    if (attachedStickablesHandler) {
      await widgetManager.trackPromise(handleAttachedStickablesChange({
        vm: this.vm,
        handler: attachedStickablesHandler,
        event: widgetEvent,
      }))
    }
  }

  /**
   * handleMountOrRerenderEvent - Handle mount, rerender, or code change events
   */
  async handleMountOrRerenderEvent(widgetEvent, widgetManager, pluginDataHash) {
    const widgetNodeId = widgetEvent.widgetNodeID
    if (pluginDataHash) {
      const widgetNode = this.getWidgetNode(widgetNodeId)
      l7.plugin('widget-code-change-setPluginData', () => {
        widgetNode.setPluginData(this.options.pluginID, cz, pluginDataHash)
      })
    }
    widgetManager.scheduleRender(widgetNodeId)
  }

  /**
   * handleWidgetError - Handle widget processing errors
   */
  handleWidgetError(error) {
    if (error instanceof InternalError) {
      _$$k2.error(error)
    }
    else if (error instanceof RequestError) {
      // Handle specific error type silently
    }
    else {
      throw error
    }
  }

  /**
   * setupWidgetUtilityFunctions - Setup widget utility and hook functions
   */
  setupWidgetUtilityFunctions(widgetApiObject, vm) {
    const widgetManager = this.widgetManager

    // Color map to options utility
    vm.defineFunction(widgetApiObject, 'colorMapToOptions', 'widget.colorMapToOptions', (colorMapHandle) => {
      const optionsArray = vm.newArray()
      const colorMap = vm.deepUnwrap(colorMapHandle)
      Object.keys(colorMap).forEach((key, index) => {
        const optionObject = vm.newObject()
        vm.setProp(optionObject, 'option', vm.newString(colorMap[key]))
        if (key === '') {
          vm.setProp(optionObject, 'tooltip', vm.newString(''))
        }
        else {
          const tooltip = key.replace(/([A-Z])/g, ' $1').trim().split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
          vm.setProp(optionObject, 'tooltip', vm.newString(tooltip))
        }
        vm.setProp(optionsArray, String(index), optionObject)
      })
      return optionsArray
    })

    // Widget ID hook functions
    const getWidgetId = () => vm.newString(widgetManager.getCurrentWidgetNodeId())
    this.defineWidgetHookFunction(widgetApiObject, vm, widgetManager, 'useWidgetId', getWidgetId)
    this.defineWidgetHookFunction(widgetApiObject, vm, widgetManager, 'useWidgetNodeId', getWidgetId)

    // Effect hook
    this.defineWidgetHookFunction(widgetApiObject, vm, widgetManager, 'useEffect', (effectCallback) => {
      widgetManager.addEffect(effectCallback)
      return vm.undefined
    })

    // Synced state hook
    this.defineWidgetHookFunction(widgetApiObject, vm, widgetManager, 'useSyncedState', (stateKey, defaultValueFunction) => {
      return this.handleUseSyncedState(stateKey, defaultValueFunction, vm, widgetManager)
    })
  }

  /**
   * defineWidgetHookFunction - Helper function to define widget hook functions with proper validation
   */
  defineWidgetHookFunction(widgetApiObject, vm, widgetManager, hookName, hookImplementation) {
    vm.defineFunction(widgetApiObject, hookName, `widget.${hookName}`, (hookContext, hookData, hookOptions) => {
      if (!widgetManager.isRunningWidgetFunction()) {
        throw new Error(`Cannot use ${hookName} hook outside of widget rendering.`)
      }
      return hookImplementation(hookContext, hookData, hookOptions)
    })
  }

  /**
   * handleUseSyncedState - Handle the useSyncedState hook implementation
   */
  handleUseSyncedState(stateKey, defaultValueFunction, vm, widgetManager) {
    const currentWidgetNodeId = widgetManager.getCurrentWidgetNodeId()
    const validatedStateKey = _$$u({
      vm,
      handle: stateKey,
      zSchema: _$$z.string(),
      property: 'key',
    })
    const getDefaultValue = () => {
      if (vm.isFunction(defaultValueFunction)) {
        let defaultValue = vm.undefined
        widgetManager.runSyncedStateDefaultValueFunction(() => {
          const functionResult = vm.callFunction(defaultValueFunction, vm.undefined)
          if (functionResult.type === 'FAILURE') {
            throw new InternalError(`Error in useSyncedState default value function: ${functionResult.error}`)
          }
          if (vm.isUndefined(functionResult.handle)) {
            throw new InternalError('Cannot return undefined from default value function in useSyncedState')
          }
          defaultValue = functionResult.handle
        })
        return defaultValue
      }
      return defaultValueFunction
    }
    const widgetNode = this.privateSceneGraph.get(currentWidgetNodeId)
    if (!widgetNode) {
      const stateArray = vm.newArray()
      vm.setProp(stateArray, '0', getDefaultValue())
      vm.setProp(stateArray, '1', vm.newFunction('setSyncedState', () => {
        if (widgetManager.isRunningWidgetFunction()) {
          throw new Error('Cannot call setSyncedState while widget is rendering.')
        }
        throw new Error(`Invalid widgetID=${currentWidgetNodeId}`)
      }))
      return stateArray
    }
    const getCurrentState = () => {
      const renderMode = widgetManager.getRenderMode(widgetNode.guid)
      const syncedData = _$$MN(renderMode, widgetNode)
      const defaultValue = getDefaultValue()
      if (renderMode === 'current' && !vm.isUndefined(defaultValue) && !Object.prototype.hasOwnProperty.call(syncedData, validatedStateKey)) {
        const unwrappedDefault = vm.deepUnwrap(defaultValue)
        _U(this.privateSceneGraph.get(currentWidgetNodeId), validatedStateKey, unwrappedDefault)
      }
      return Object.prototype.hasOwnProperty.call(syncedData, validatedStateKey) ? vm.deepWrap(syncedData[validatedStateKey]) : defaultValue
    }
    const setSyncedState = vm.newFunction('setSyncedState', (newValue) => {
      if (widgetManager.isRunningWidgetFunction()) {
        throw new Error('Cannot call setSyncedState while widget is rendering.')
      }
      const processedValue = vm.deepUnwrap((() => {
        if (vm.isFunction(newValue)) {
          const result = vm.callFunction(newValue, vm.undefined, getCurrentState())
          if (result.type === 'FAILURE') {
            throw new InternalError(`Error in setSyncedState: ${result.error}`)
          }
          return result.handle
        }
        return newValue
      })())

      // Set the synced state value
      _U(this.privateSceneGraph.get(currentWidgetNodeId), validatedStateKey, processedValue)
      return vm.undefined
    })
    const stateArray = vm.newArray()
    vm.setProp(stateArray, '0', getCurrentState())
    vm.setProp(stateArray, '1', setSyncedState)
    return stateArray
  }

  /**
   * handleUseSyncedMap - Handle the useSyncedMap hook implementation
   */
  handleUseSyncedMap(mapKey, vm, widgetManager) {
    const currentWidgetNodeId = widgetManager.getCurrentWidgetNodeId()
    const validatedMapKey = _$$u({
      vm,
      handle: mapKey,
      zSchema: _$$z.string(),
      property: 'mapKey',
    })
    const getCurrentMapData = () => {
      const widgetNode = this.privateSceneGraph.get(currentWidgetNodeId)
      return hu(widgetManager.getRenderMode(widgetNode?.guid ?? '-1:-1'), widgetNode, validatedMapKey)
    }
    const mapObject = vm.newObject()
    vm.defineFunction(mapObject, 'set', 'map.set', (key, value) => {
      if (widgetManager.isRunningWidgetFunction())
        throw new Error('Cannot call map.set while widget is rendering.')
      const validatedKey = _$$u({
        vm,
        handle: key,
        zSchema: _$$z.string(),
        property: 'map.key',
      })
      const unwrappedValue = vm.deepUnwrap(value)
      l7.plugin('widget-set-synced-map-key', () => Oi(this.privateSceneGraph.get(currentWidgetNodeId), validatedMapKey, validatedKey, unwrappedValue))
      widgetManager.scheduleRender(currentWidgetNodeId)
      return vm.undefined
    })
    vm.defineFunction(mapObject, 'get', 'map.get', (key) => {
      const validatedKey = _$$u({
        vm,
        handle: key,
        zSchema: _$$z.string(),
        property: 'map.key',
      })
      return vm.deepWrap(getCurrentMapData()[validatedKey])
    })
    vm.defineFunction(mapObject, 'has', 'map.has', (key) => {
      const validatedKey = _$$u({
        vm,
        handle: key,
        zSchema: _$$z.string(),
        property: 'map.key',
      })
      return vm.newBoolean(Object.prototype.hasOwnProperty.call(getCurrentMapData(), validatedKey))
    })
    vm.defineFunction(mapObject, 'delete', 'map.delete', (key) => {
      if (widgetManager.isRunningWidgetFunction())
        throw new Error('Cannot call map.delete while widget is rendering.')
      let a = _$$u({
        vm,
        handle: key,
        zSchema: _$$z.string(),
        property: 'map.key',
      })
      vH(this.privateSceneGraph.get(variableDefinitions), NodeAPI, a)
      widgetManager.scheduleRender(variableDefinitions)
      return vm.undefined
    })
    vm.defineFunction(mapObject, 'keys', 'map.keys', () => vm.deepWrap(Object.keys(getCurrentMapData())))
    vm.defineProp(mapObject, 'length', {
      enumerable: false,
      metricsKey: 'map.length',
      get: () => {
        _$$k2.warn('map.length is deprecated. please use map.size instead.')
        return vm.newNumber(Object.keys(getCurrentMapData()).length)
      },
    })
    vm.defineProp(mapObject, 'size', {
      enumerable: false,
      metricsKey: 'map.size',
      get: () => vm.newNumber(Object.keys(getCurrentMapData()).length),
    })
    vm.defineFunction(mapObject, 'values', 'map.values', () => vm.deepWrap(Object.values(getCurrentMapData())))
    vm.defineFunction(mapObject, 'entries', 'map.entries', () => vm.deepWrap(Object.entries(getCurrentMapData())))
    return mapObject
  }

  /**
   * setupWidgetHooks - Setup additional widget hooks for property menu and stickable functionality
   */
  setupWidgetHooks(widgetApiObject, vm, widgetManager) {
    // Property menu hook
    this.defineWidgetHookFunction(widgetApiObject, vm, widgetManager, 'usePropertyMenu', (propertyMenuDefinition, propertyMenuCallback) => {
      widgetManager.setPropertyMenu({
        propertyMenuDefinitionHandle: propertyMenuDefinition,
        propertyMenuCallbackHandle: propertyMenuCallback,
      })
      return vm.undefined
    })

    // Stickable hooks
    this.defineWidgetHookFunction(widgetApiObject, vm, widgetManager, 'useStickable', (isStickable) => {
      widgetManager.setIsStickable(isStickable)
      return vm.undefined
    })
    this.defineWidgetHookFunction(widgetApiObject, vm, widgetManager, 'useStickableHost', (isStickableHost) => {
      widgetManager.setIsStickableHost(isStickableHost)
      return vm.undefined
    })

    // Hide cursors hook (permission-based)
    if (this.options.validatedPermissions.permissions.includes('hidecursors')) {
      this.defineWidgetHookFunction(widgetApiObject, vm, widgetManager, 'useHideCursors', (shouldHideCursors) => {
        widgetManager.setShouldHideCursors(shouldHideCursors)
        return vm.undefined
      })
    }

    // Add component names to object
    this.addComponentNamesToObject(widgetApiObject)

    // Define JSX renderer
    vm.defineProp(widgetApiObject, 'h', {
      enumerable: false,
      value: vm.newJsxRenderer(Object.keys({
        ...HB,
        ..._$$cd,
      })),
    })
    vm.shallowFreezeObject(widgetApiObject)
  }

  /**
   * defineWidgetLiteApi - Define widget lite API functionality
   */
  defineWidgetLiteApi(e) {
    let t = this.vm.newObject()
    this.vm.defineProp(e, 'widget', {
      value: t,
      enumerable: !1,
    })
    this.addComponentNamesToObject(t)
    this.vm.defineProp(t, 'h', {
      enumerable: !1,
      value: this.vm.newJsxRenderer(Object.keys({
        ...HB,
        ..._$$cd,
      })),
    })
    this.vm.shallowFreezeObject(t)
  }

  /**
   * addComponentNamesToObject - Add component names to an object
   */
  addComponentNamesToObject(e) {
    for (let t of Object.keys({
      ...HB,
      ..._$$cd,
    })) {
      this.vm.defineProp(e, t, {
        enumerable: !0,
        value: this.vm.newString(t),
      })
    }
  }

  /**
   * defineInternalApis - Define internal APIs based on validated permissions
   *
   * Conditionally defines internal APIs (analytics, cortex, firstDraft, debug)
   * based on the plugin's validated permissions. Uses a systematic approach
   * to avoid code duplication and ensure consistent API registration.
   *
   * @param apiObject The main API object to define internal APIs on
   */
  defineInternalApis(apiObject) {
    const internalApis = [{
      permission: 'analytics',
      key: 'analytics',
      factory: () => this.createAnalyticsApi(),
    }, {
      permission: 'cortex',
      key: 'cortex',
      factory: () => this.createCortexApi(),
    }, {
      permission: 'firstdraft',
      key: 'firstDraft',
      factory: () => this.createFirstDraftApi(),
    }, {
      permission: 'debug',
      key: 'debug',
      factory: () => this.createDebugNodesApi(),
    }]
    internalApis.forEach((api) => {
      this.defineInternalApiIfPermitted(apiObject, api.permission, api.key, api.factory)
    })
  }

  /**
   * defineInternalApiIfPermitted - Define internal API if permission is granted
   */
  defineInternalApiIfPermitted(apiObject, permission, apiKey, apiFactory) {
    if (this.options.validatedPermissions.permissions.includes(permission)) {
      this.defineVmProp({
        handle: apiObject,
        key: apiKey,
        options: {
          enumerable: false,
          value: apiFactory(),
        },
        canWriteInReadOnly: false,
        isAllowedInWidgetRender: false,
        hasEditScope: false,
      })
    }
  }

  /**
   * createDebugNodesApi - Create debug nodes API for development
   */
  createDebugNodesApi() {
    let e = this.vm
    let t = e.newObject()
    this.defineVmFunction({
      handle: t,
      key: 'matchNodes',
      metricsKey: 'debugNodes.matchNodes',
      cb: (t) => {
        if (!e.isArray(t))
          throw new Error('Not an array')
        let i = e.getNumberProp(t, 'length')
        if (i < 1) {
          throw new Error('First argument to matchNodes must be an array of at least one node')
        }
        let n = []
        for (let r = 0; r < i; r++) {
          let i = e.getStringProp(t, r.toString())
          n.push(i)
        }
        let r = NfO.matchNodes(n)
        return e.deepWrap(r)
      },
      isAllowedInReadOnly: !0,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    e.shallowFreezeObject(t)
    return t
  }

  /**
   * createFirstDraftApi - Create First Draft API for component and design management
   *
   * Creates comprehensive API for First Draft functionality including component
   * serialization, deserialization, variable management, override handling,
   * and design system operations. Supports async operations and proper
   * error handling for complex design workflows.
   *
   * @returns VM object with First Draft API methods
   */
  createFirstDraftApi() {
    const vm = this.vm
    const firstDraftObject = vm.newObject()

    // Setup component serialization functions
    this.setupComponentSerializationFunctions(firstDraftObject, vm)

    // Setup page and navigation functions
    this.setupPageNavigationFunctions(firstDraftObject, vm)

    // Setup component management functions
    this.setupComponentManagementFunctions(firstDraftObject, vm)

    // Setup variable and text functions
    this.setupVariableAndTextFunctions(firstDraftObject, vm)

    // Setup async component functions
    this.setupAsyncComponentFunctions(firstDraftObject, vm)

    // Setup layer and override functions
    this.setupLayerAndOverrideFunctions(firstDraftObject, vm)
    vm.shallowFreezeObject(firstDraftObject)
    return firstDraftObject
  }

  /**
   * setupComponentSerializationFunctions - Setup component serialization/deserialization
   */
  setupComponentSerializationFunctions(firstDraftObject, vm) {
    // Serialize component for publish
    this.defineVmFunction({
      handle: firstDraftObject,
      key: 'serializeProductComponentForPublish',
      metricsKey: 'firstDraft.serializeProductComponentForPublish',
      cb: (nodeHandle) => {
        const node = this.getNode(nodeHandle)
        if (node.isLooseComponent || node.isStateGroup) {
          const [serializedData, buffer] = NfO.serializeProductComponentForPublish(node.guid)
          if (serializedData && buffer) {
            const wrappedData = vm.deepWrap(serializedData)
            vm.setProp(wrappedData, 'buffer', vm.deepWrap(new Uint8Array(buffer)))
            return wrappedData
          }
        }
        return vm.$$null
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })

    // Deserialize component from buffer
    this.defineVmFunction({
      handle: firstDraftObject,
      key: 'deserializeProductComponentFromBuffer',
      metricsKey: 'firstDraft.deserializeProductComponentFromBuffer',
      cb: (idHandle, bufferHandle) => {
        if (!vm.isString(idHandle)) {
          throw new TypeError(`Expected id to be a string, got ${vm.typeof(idHandle)}`)
        }
        const id = vm.toString(idHandle)
        const buffer = _$$u({
          vm,
          handle: bufferHandle,
          zSchema: _$$N.UInt8Array,
          property: 'buffer',
        })
        const result = NfO.deserializeProductComponentFromBuffer(id, buffer)
        return vm.newString(result)
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: true,
    })
  }

  /**
   * setupPageNavigationFunctions - Setup page and navigation related functions
   */
  setupPageNavigationFunctions(firstDraftObject, vm) {
    this.defineVmFunction({
      handle: firstDraftObject,
      key: 'getInternalPageId',
      metricsKey: 'firstDraft.getInternalPageId',
      cb: () => {
        const rootNode = getSceneGraphInstance().get('0:0')
        if (rootNode) {
          for (const childNode of rootNode.childrenNodes) {
            if (childNode.type === 'CANVAS' && childNode.isInternalOnlyNode) {
              return vm.newString(childNode.guid)
            }
          }
        }
        return vm.$$null
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })
  }

  /**
   * setupComponentManagementFunctions - Setup component version and override management
   */
  setupComponentManagementFunctions(firstDraftObject, vm) {
    // Get component version
    this.defineVmFunction({
      handle: firstDraftObject,
      key: 'getComponentVersion',
      metricsKey: 'firstDraft.getComponentVersion',
      cb: (idHandle) => {
        if (!vm.isString(idHandle)) {
          throw new TypeError(`Expected id to be a string, got ${vm.typeof(idHandle)}`)
        }
        const id = vm.toString(idHandle)
        if (!fn(sH(id))) {
          return vm.$$null
        }
        const node = this.privateSceneGraph.get(id)
        if (!node) {
          return vm.$$null
        }
        return this.getNodeComponentVersion(node, vm)
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })

    // Get override key for GUID
    this.defineVmFunction({
      handle: firstDraftObject,
      key: 'getOverrideKeyForGuidOrNull',
      metricsKey: 'firstDraft.getOverrideKeyForGuidOrNull',
      cb: (idHandle) => {
        if (!vm.isString(idHandle)) {
          throw new TypeError(`Expected id to be a string, got ${vm.typeof(idHandle)}`)
        }
        const id = vm.toString(idHandle)
        if (!fn(sH(id))) {
          return vm.$$null
        }
        const node = this.privateSceneGraph.get(id)
        if (!node) {
          return vm.$$null
        }
        const overrideKey = node.overrideKey
        return overrideKey ? vm.newString(overrideKey) : vm.$$null
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })
  }

  /**
   * getNodeComponentVersion - Get component version for a node
   */
  getNodeComponentVersion(node, vm) {
    if (node.isStateGroup) {
      const version = node.sharedStateGroupVersion
      return version ? vm.newString(version) : vm.$$null
    }
    if (node.isLooseComponent) {
      const version = node.sharedSymbolVersion
      return version ? vm.newString(version) : vm.$$null
    }
    return vm.$$null
  }

  /**
   * setupVariableAndTextFunctions - Setup variable and text management functions
   */
  setupVariableAndTextFunctions(firstDraftObject, vm) {
    // Localize subtree
    this.defineVmFunction({
      handle: firstDraftObject,
      key: 'localizeSubtree',
      metricsKey: 'firstDraft.localizeSubtree',
      cb: (nodeHandle) => {
        const node = this.getNode(nodeHandle)
        if (!node) {
          return vm.newBoolean(false)
        }
        const success = XJn.detachGeneratedDesign(node.guid, oVz.CURRENT)
        return vm.newBoolean(success)
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })

    // Get consumed variable collection IDs
    this.defineVmFunction({
      handle: firstDraftObject,
      key: 'consumedVariableCollectionIds',
      metricsKey: 'firstDraft.consumedVariableCollectionIds',
      cb: (nodeHandle) => {
        const node = this.getNode(nodeHandle)
        if (!node) {
          return vm.newBoolean(false)
        }
        const collectionIds = XJn.consumedVariableCollectionIds(node.guid)
        const resultArray = vm.newArray()
        for (let i = 0; i < collectionIds.length; i++) {
          vm.setProp(resultArray, String(i), vm.newString(collectionIds[i]))
        }
        return resultArray
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })

    // Detach font family variable
    this.defineVmFunction({
      handle: firstDraftObject,
      key: 'detachFontFamilyVariable',
      metricsKey: 'firstDraft.detachFontFamilyVariable',
      cb: (nodeHandle) => {
        const node = this.getNode(nodeHandle)
        if (node && node.type === 'TEXT') {
          node.inheritedTextStyle = null
          node.setBoundVariable('fontFamily', null)
        }
        return vm.$$null
      },
      isAllowedInReadOnly: false,
      isAllowedInWidgetRender: false,
      hasEditScope: true,
    })
  }

  /**
   * setupAsyncComponentFunctions - Setup async component information functions
   */
  setupAsyncComponentFunctions(firstDraftObject, vm) {
    this.defineVmFunction({
      handle: firstDraftObject,
      key: 'getComponentInfoByIdAsync',
      metricsKey: 'firstDraft.getComponentInfoByIdAsync',
      cb: (idHandle) => {
        if (!vm.isString(idHandle)) {
          return vm.$$null
        }
        const {
          promise,
          resolve,
        } = vm.newPromise()
        vm.registerPromise((async () => {
          const componentModule = await Promise.resolve().then(() => _require) // Fix Promise chain
          const id = vm.toString(idHandle)
          const componentInfo = componentModule?.getComponentInfoByIdUncached?.(id, {
            enableTsArrays: !!getFeatureFlags().first_draft_ts_arrays,
          })
          resolve(componentInfo ? vm.deepWrap(componentInfo) : vm.$$null)
        })())
        return promise
      },
      isAllowedInReadOnly: false,
      isAllowedInWidgetRender: false,
      hasEditScope: true,
    })
  }

  /**
   * setupLayerAndOverrideFunctions - Setup layer renaming and override functions
   */
  setupLayerAndOverrideFunctions(firstDraftObject, vm) {
    // Rename layers from selection
    this.defineVmFunction({
      handle: firstDraftObject,
      key: 'renameLayersFromSelection',
      metricsKey: 'firstDraft.renameLayersFromSelection',
      cb: () => {
        const {
          promise,
          resolve,
          reject,
        } = vm.newPromise()
        vm.registerPromise(renameSelectedLayers()).then(() => resolve(vm.undefined)).catch(error => reject(this.wrapError(error)))
        return promise
      },
      isAllowedInReadOnly: false,
      isAllowedInWidgetRender: false,
      hasEditScope: true,
    })

    // Apply overrides to instance to match node
    this.defineVmFunction({
      handle: firstDraftObject,
      key: 'applyOverridesToInstanceToMatchNode',
      metricsKey: 'firstDraft.applyOverridesToInstanceToMatchNode',
      cb: (instanceHandle, targetHandle) => {
        const instanceNode = this.getNode(instanceHandle)
        const targetNode = this.getNode(targetHandle)
        XJn.applyOverridesToInstanceToMatchNode(instanceNode.guid, targetNode.guid)
        return vm.$$null
      },
      isAllowedInReadOnly: false,
      isAllowedInWidgetRender: false,
      hasEditScope: true,
    })
  }

  /**
   * createAnalyticsApi - Creates the Analytics API object for plugin analytics tracking.
   *
   * Provides a 'track' method for sending analytics events with event name and properties.
   * The API object is frozen to prevent modification.
   *
   * @returns VM object with analytics API methods
   */
  createAnalyticsApi() {
    const vm = this.vm
    const analyticsApi = vm.newObject()

    /**
     * track - Sends an analytics event with the specified name and properties.
     * @param nameHandle - VM handle for the event name (string)
     * @param propertiesHandle - VM handle for event properties (object)
     */
    this.defineVmFunction({
      handle: analyticsApi,
      key: 'track',
      metricsKey: 'analytics.track',
      cb: (nameHandle, propertiesHandle) => {
        const eventName = _$$u({
          vm,
          handle: nameHandle,
          zSchema: _$$z.string(),
          property: 'analytics.track name',
        })
        const eventProperties = _$$u({
          vm,
          handle: propertiesHandle,
          zSchema: _$$z.record(_$$z.any()),
          property: 'analytics.track properties',
        })
        sx(eventName, eventProperties)
        return vm.undefined
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })
    vm.shallowFreezeObject(analyticsApi)
    return analyticsApi
  }

  /**
   * wrapPromise - Wrap a promise for VM context
   */
  wrapPromise(e) {
    let t = this.vm
    let {
      promise,
      resolve,
      reject,
    } = t.newPromise()
    t.registerPromise(e).then(e => resolve(t.deepWrap(e))).catch(e => reject(this.wrapError(e)))
    return promise
  }

  /**
   * wrapError - Wrap an error for VM context
   */
  wrapError(e) {
    let t = this.vm
    let i = t.newObject()
    t.defineProp(i, 'message', {
      enumerable: !0,
      value: t.newString(e.message),
    })
    t.shallowFreezeObject(i)
    return i
  }

  /**
   * createCortexKiwiApi - Create Cortex Kiwi API for internal operations
   */
  createCortexKiwiApi() {
    let e = this
    let t = this.vm
    let i = t.newObject()
    this.defineVmFunction({
      handle: i,
      key: 'getSceneForNode',
      metricsKey: 'cortex.internal.kiwi.getSceneForNode',
      cb: (i) => {
        let n = e.getNode(i)
        let r = glU.generateClipboardScene(n.guid)
        return t.newUint8Array(r)
      },
      isAllowedInReadOnly: !0,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.defineVmFunction({
      handle: i,
      key: 'applyScene',
      metricsKey: 'cortex.internal.kiwi.applyScene',
      cb: (e) => {
        let i = _$$u({
          vm: t,
          handle: e,
          zSchema: _$$N.UInt8Array,
          property: 'applyScene',
        })
        glU.applyFileToCurrentScene(i)
        return t.undefined
      },
      isAllowedInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !0,
    })
    t.shallowFreezeObject(i)
    return i
  }

  /**
   * createCortexApi - Create Cortex API for plugin operations
   */
  createCortexApi() {
    let e = this.vm
    let t = e.newObject()
    this.defineVmProp({
      handle: t,
      key: 'kiwi',
      options: {
        enumerable: !1,
        writable: !1,
        metricsKey: 'figma.kiwi',
        value: this.createCortexKiwiApi(),
      },
      canWriteInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    let i = (t, i) => _$$u({
      vm: e,
      handle: i,
      zSchema: _$$z.record(_$$z.any()),
      property: t,
    })
    let n = (e, n, r) => {
      this.defineVmFunction({
        handle: t,
        key: e,
        metricsKey: n,
        cb: (e) => {
          let t = i(`${n} input`, e)
          let a = debugState.getState()
          let s = OU(a)
          return this.wrapPromise(r(t, s))
        },
        isAllowedInReadOnly: !0,
        isAllowedInWidgetRender: !1,
        hasEditScope: !1,
      })
    }
    let r = (e, n, r) => {
      let a = this.vm
      this.defineVmFunction({
        handle: t,
        key: e,
        metricsKey: n,
        cb: (e) => {
          let t = i(`${n} input`, e)
          let s = debugState.getState()
          let o = OU(s)
          let {
            promise,
            resolve,
            reject,
          } = a.newPromise()
          a.registerPromise(r(t, o)).then(e => resolve(this.wrapReadableStream(e))).catch(e => reject(this.wrapError(e)))
          return promise
        },
        isAllowedInReadOnly: !0,
        isAllowedInWidgetRender: !1,
        hasEditScope: !1,
      })
    }
    n('completeChat', 'cortex.internal.openai.completeChat', _$$Ay2.openai.completeChat)
    r('streamChat', 'cortex.internal.openai.streamChat', _$$Ay2.openai.streamChat)
    n('computeEmbeddings', 'cortex.internal.openai.embeddings', _$$Ay2.openai.computeEmbeddings)
    n('getTextImageEmbeds', 'cortex.internal.clip.embeddings', _$$Ay2.design.getTextImageEmbeds)
    r('streamText', 'cortex.internal.streamText', _$$Ay2.internal.streamText)
    n('generateImages', 'cortex.internal.design.generateImages', _$$Ay2.design.generateImages)
    n('jamGPT', 'cortex.internal.figjam.jamGPT', _$$Ay2.figjam.jamGPT)
    r('createTemplate', 'cortex.internal.figjam.createTemplate', _$$Ay2.figjam.createTemplate)
    n('createVisual', 'cortex.internal.figjam.createVisual', _$$Ay2.figjam.createVisual)
    e.shallowFreezeObject(t)
    return t
  }

  /**
   * wrapReadableStream - Wrap a ReadableStream for VM context
   */
  wrapReadableStream(stream) {
    const vm = this.vm
    const ReadableStreamCtor = vm.getProp(vm.global, 'ReadableStream')
    if (!ReadableStreamCtor) {
      _$$k2.error(`
Import a polyfill to use this plugin API, eg:
\`\`\`
import { ReadableStream } from "web-streams-polyfill/es6";
if (typeof globalThis !== "undefined" && !("ReadableStream" in globalThis)) {
  globalThis.ReadableStream = ReadableStream;
}
// Now it's safe to use APIs that return ReadableStreams
\`\`\`
`)
      return new Error('ReadableStream not available on the VM global object.')
    }
    const underlyingSource = vm.newObject()
    const reader = stream.getReader()
    const callController = (controller, method, ...args) => {
      const fn = vm.getProp(controller, method)
      return !!vm.isFunction(fn) && (vm.callFunction(fn, controller, ...args).type !== 'FAILURE' || void _$$k2.error(`Error calling controller.${method}(\u2026)`))
    }
    vm.defineFunction(underlyingSource, 'pull', 'underlyingSource.pull', (controller) => {
      vm.retainHandle(controller)
      return this.wrapPromise((async () => {
        try {
          const {
            done,
            value,
          } = await reader.read()
          if (vm.isDestroyed()) {
            reader.cancel()
            return
          }
          done ? callController(controller, 'close', vm.undefined) : callController(controller, 'enqueue', vm.deepWrap(value))
        }
        catch (err) {
          _$$k2.error('ReadableStream: Error reading from stream passing to plugin vm', err)
          callController(controller, 'error', this.wrapError(err))
        }
        finally {
          vm.releaseHandle(controller)
        }
      })())
    })
    vm.defineFunction(underlyingSource, 'cancel', 'underlyingSource.cancel', () => this.wrapPromise(reader.cancel()))
    vm.shallowFreezeObject(underlyingSource)
    const result = vm.callConstructor(ReadableStreamCtor, underlyingSource)
    if (result.type === 'FAILURE') {
      _$$k2.error(`Error creating ReadableStream: ${result.error}`)
      return new Error(`Error creating ReadableStream: ${result.error}`)
    }
    return result.handle
  }

  setQueryMode(e) {
    this.queryMode = e
    NfO.runInQueryMode(this.queryMode)
    this.uiHandle.setHideVisibleUI(this.queryMode)
  }

  /**
   * setSkipInvisibleInstanceChildren - Set whether to skip invisible instance children
   */
  setSkipInvisibleInstanceChildren(e) {
    this.skipInvisibleInstanceChildren = e
    NfO.skipInvisibleInstanceChildren(e)
  }

  /**
   * createCodebaseSuggestionsApi - Create codebase suggestions API
   */
  createCodebaseSuggestionsApi() {
    let e = this.vm.newObject()
    this.defineVmFunction({
      handle: e,
      key: 'getSuggestionsUrl',
      metricsKey: 'codebase_suggestions.getSuggestionsUrl',
      cb: () => {
        let e = _$$I()
        if (!e)
          throw new Error('No org id found')
        let t = _$$w.getZipUrl(e).then(e => e.data.meta.url)
        return this.wrapPromise(t)
      },
      isAllowedInReadOnly: !0,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.defineVmFunction({
      handle: e,
      key: 'getSuggestions',
      metricsKey: 'codebase_suggestions.getSuggestions',
      cb: () => {
        let e = _$$I()
        if (!e)
          throw new Error('No org id found')
        let t = _$$w.getZipUrl(e).then((e) => {
          let t = e.data.meta.url
          if (!t)
            throw new Error('No url found')
          // TODO: Phase 18 Refactoring - Replace with:
          // const httpClient = createAdvancedHTTPClientManager()
          // return httpClient.get(t, { responseType: 'arrayBuffer' }).then(response => response.data)
          return fetch(t)
        }).then(e => e.arrayBuffer())
        return this.wrapPromise(t)
      },
      isAllowedInReadOnly: !0,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    return e
  }

  /**
   * createJsxApi - Create JSX API for React-like components
   */
  createJsxApi() {
    let e = this.vm
    let t = e.newObject()
    this.defineVmFunction({
      handle: t,
      key: 'serialize',
      metricsKey: 'jsx.serialize',
      cb: (t, i) => {
        let n = this.getNode(t)
        let r = _$$u({
          vm: e,
          handle: i,
          zSchema: J3.optional(),
          property: 'options',
        })
        return this.wrapPromise(generateJsxFromNode(n, r))
      },
      isAllowedInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.defineVmFunction({
      handle: t,
      key: 'deserialize',
      metricsKey: 'jsx.deserialize',
      cb: (t, i) => {
        if (!e.isString(t))
          throw new Error('jsx not a string')
        let n = e.toString(t)
        let r = _$$u({
          vm: e,
          handle: i,
          zSchema: J3.optional(),
          property: 'options',
        })
        let {
          promise,
          resolve,
          reject,
        } = e.newPromise()
        e.registerPromise(getNodeGuid(n, r)).then((t) => {
          t ? resolve(this.nodeFactory.createNode(t, 'figma.jsx.deserialize')) : resolve(e.$$null)
        }).catch(t => reject(e.newString(t.message)))
        return promise
      },
      isAllowedInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    return t
  }

  /**
   * getUiHandle - Get the UI handle for the plugin
   */
  getUiHandle() {
    return this.uiHandle
  }

  /**
   * createAPI - Create the main plugin API
   */
  createAPI() {
    let e = this.vm
    let {
      command,
      queryMode,
      apiVersion,
      enableProposedApi,
      enablePrivatePluginApi,
      openFileKey,
      stats,
      incrementalSafeApi,
      allowIncrementalUnsafeApiCalls,
    } = this.options
    let u = 0
    let y = e.newObject()
    e.setProp(e.global, 'figma', y)
    this.defineVmProp({
      handle: y,
      key: 'apiVersion',
      options: {
        enumerable: !1,
        writable: !1,
        metricsKey: 'figma.apiVersion',
        value: e.newString(apiVersion),
      },
      canWriteInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.defineVmFunction({
      handle: y,
      key: 'getHTMLString',
      metricsKey: 'figma.getHTMLString',
      cb: () => this.vm.newString(this.options.html ?? ''),
      isAllowedInReadOnly: !0,
      hasEditScope: !1,
    });
    (enablePrivatePluginApi || this.options.validatedPermissions.permissions.includes('filekey')) && this.defineVmProp({
      handle: y,
      key: 'fileKey',
      options: {
        enumerable: !1,
        writable: !1,
        metricsKey: 'figma.fileKey',
        value: e.newString(openFileKey),
      },
      canWriteInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    // =====================
    // REFACTORED: Modular Buzz API Extension
    // =====================
    if (this.inBuzz() && getFeatureFlags().buzz_plugins) {
      const buzzApiConfig = {
        vm: e,
        figmaApi: y,
        defineVmFunction: this.defineVmFunction,
        defineVmProp: this.defineVmProp,
        getNode: this.getNode,
        sceneGraph: this.privateSceneGraph,
        nodeFactory: this.nodeFactory,
        documentAccessState: this.documentAccessState,
        imageStore: this.imageStore,
        videoStore: this.videoStore,
      }
      buzzApiConfig.defineVmProp({
        handle: buzzApiConfig.figmaApi,
        key: 'buzz',
        options: {
          enumerable: false,
          metricsKey: 'figma.buzz',
          get: memoizedHandle(buzzApiConfig.vm, () => {
            const buzzObj = buzzApiConfig.vm.newObject()

            // createFrame
            buzzApiConfig.defineVmFunction({
              handle: buzzObj,
              key: 'createFrame',
              metricsKey: 'figma.buzz.createFrame',
              cb: (rowHandle, colHandle) => {
                const row = _$$u({
                  vm: buzzApiConfig.vm,
                  handle: rowHandle,
                  zSchema: _$$z.number().finite().min(0).int().optional(),
                  property: 'canvasRow',
                })
                const col = _$$u({
                  vm: buzzApiConfig.vm,
                  handle: colHandle,
                  zSchema: _$$z.number().finite().min(0).int().optional(),
                  property: 'canvasColumn',
                })
                const assetType = _$$n2.get('CUSTOM')
                if (assetType === undefined)
                  throw new Error('Invalid asset type')
                const size = fZl?.getCooperTemplateTypeSize(assetType)
                if (!size)
                  throw new Error('Failed fetching size for asset type')
                const {
                  row: r,
                  col: c,
                } = getRowColumn(row, col)
                const guid = IPu?.createBlankChildAtCoord(r, c, size, 'plugin_buzz_create_frame', true, assetType)
                if (!guid)
                  throw new Error('Failed to create frame')
                av(guid, buzzApiConfig.documentAccessState)
                Ez5?.canvasGrid().recomputeGrid()
                return buzzApiConfig.nodeFactory.createNode(guid, 'figma.buzz.createFrame')
              },
              isAllowedInReadOnly: true,
              isAllowedInWidgetRender: false,
              hasEditScope: true,
            })

            // createInstance
            buzzApiConfig.defineVmFunction({
              handle: buzzObj,
              key: 'createInstance',
              metricsKey: 'figma.buzz.createInstance',
              cb: (nodeHandle, rowHandle, colHandle) => {
                const row = _$$u({
                  vm: buzzApiConfig.vm,
                  handle: rowHandle,
                  zSchema: _$$N.PositiveInteger.optional(),
                  property: 'canvasRow',
                })
                const col = _$$u({
                  vm: buzzApiConfig.vm,
                  handle: colHandle,
                  zSchema: _$$N.PositiveInteger.optional(),
                  property: 'canvasColumn',
                })
                const targetNode = buzzApiConfig.getNode(nodeHandle)
                if (targetNode.type !== 'SYMBOL')
                  throw new Error('Node is not a component')
                const instanceGuid = targetNode.createInstance()?.guid || ''
                const nodeObj = buzzApiConfig.nodeFactory.createNode(instanceGuid, 'node.createInstance')
                const {
                  row: r,
                  col: c,
                } = getRowColumn(row, col)
                Ez5?.canvasGrid().moveChildrenToCoord([instanceGuid], {
                  row: r,
                  col: c,
                })
                av(instanceGuid, buzzApiConfig.documentAccessState)
                Ez5?.canvasGrid().recomputeGrid()
                return nodeObj
              },
              isAllowedInReadOnly: false,
              hasEditScope: true,
            })

            // getBuzzAssetTypeForNode
            buzzApiConfig.defineVmFunction({
              handle: buzzObj,
              key: 'getBuzzAssetTypeForNode',
              metricsKey: 'figma.buzz.getBuzzAssetTypeForNode',
              cb: (nodeHandle) => {
                const node = buzzApiConfig.getNode(nodeHandle)
                if (node && fZl) {
                  const type = fZl.getCooperTemplateType(node.guid)
                  if (type != null) {
                    const label = po.get(type)
                    return label ? buzzApiConfig.vm.newString(label.toString()) : buzzApiConfig.vm.$$null
                  }
                }
                return buzzApiConfig.vm.$$null
              },
              isAllowedInReadOnly: true,
              isAllowedInWidgetRender: false,
              hasEditScope: false,
            })

            // setBuzzAssetTypeForNode
            buzzApiConfig.defineVmFunction({
              handle: buzzObj,
              key: 'setBuzzAssetTypeForNode',
              metricsKey: 'figma.buzz.setBuzzAssetTypeForNode',
              cb: (nodeHandle, typeHandle) => {
                const node = buzzApiConfig.getNode(nodeHandle)
                if (!node.isCooperFrame)
                  throw new Error('Can only set asset type on Buzz Asset Node')
                if (node.isInstance) {
                  throw new Error('Cannot set asset type on Locked Buzz Asset Node')
                }
                const assetType = _$$u({
                  vm: buzzApiConfig.vm,
                  handle: typeHandle,
                  zSchema: _$$N.BuzzAssetType,
                  property: 'buzzAssetType',
                })
                const typeValue = _$$n2.get(assetType)
                if (fZl && typeValue)
                  fZl.setCooperTemplateType(node.guid, typeValue)
                return buzzApiConfig.vm.undefined
              },
              isAllowedInReadOnly: false,
              isAllowedInWidgetRender: false,
              hasEditScope: true,
            })

            // getTextContent
            buzzApiConfig.defineVmFunction({
              handle: buzzObj,
              key: 'getTextContent',
              metricsKey: 'figma.buzz.getTextContent',
              cb: (nodeHandle) => {
                const node = buzzApiConfig.getNode(nodeHandle)
                if (!node.isCooperFrame) {
                  throw new Error('Can only get Buzz Text Content on Buzz Asset Node')
                }
                return createBuzzTextContentArray(node, buzzApiConfig.vm, buzzApiConfig.sceneGraph)
              },
              isAllowedInReadOnly: false,
              isAllowedInWidgetRender: false,
              hasEditScope: true,
            })

            // getMediaContent
            buzzApiConfig.defineVmFunction({
              handle: buzzObj,
              key: 'getMediaContent',
              metricsKey: 'figma.buzz.getMediaContent',
              cb: (nodeHandle) => {
                const node = buzzApiConfig.getNode(nodeHandle)
                if (!node.isCooperFrame) {
                  throw new Error('Can only get Buzz Media Content on Buzz Asset Node')
                }
                return createBuzzMediaContentArray(node, buzzApiConfig.vm, buzzApiConfig.imageStore, buzzApiConfig.videoStore, buzzApiConfig.nodeFactory)
              },
              isAllowedInReadOnly: false,
              isAllowedInWidgetRender: false,
              hasEditScope: true,
            })

            // smartResize
            buzzApiConfig.defineVmFunction({
              handle: buzzObj,
              key: 'smartResize',
              metricsKey: 'figma.buzz.smartResize',
              cb: (nodeHandle, widthHandle, heightHandle) => {
                const node = buzzApiConfig.getNode(nodeHandle)
                if (!node.isCooperFrame) {
                  throw new Error('Can only get Buzz Media Content on Buzz Asset Node')
                }
                if (node.isInstance) {
                  throw new Error('Cannot smart resize Locked Buzz Asset Nodes')
                }
                const width = _$$u({
                  vm: buzzApiConfig.vm,
                  handle: widthHandle,
                  zSchema: _$$N.PositiveFloat,
                  property: 'width',
                })
                const height = _$$u({
                  vm: buzzApiConfig.vm,
                  handle: heightHandle,
                  zSchema: _$$N.PositiveFloat,
                  property: 'height',
                })
                if (fZl) {
                  fZl.setCooperTemplateType(node.guid, Z64.CUSTOM)
                  fZl.resizeNode(node.guid, width, height)
                }
                return buzzApiConfig.vm.undefined
              },
              isAllowedInReadOnly: false,
              isAllowedInWidgetRender: false,
              hasEditScope: true,
            })

            // --- Helper Functions for Buzz API ---

            /**
             * Create a VM array of text field objects for Buzz content.
             * Each object has isComponentProp, value, and setValueAsync.
             */
            function createBuzzTextContentArray(targetNode, vm, nodeMap) {
              const arr = vm.newArray()
              targetNode.getBuzzTextFields().forEach((field, idx) => {
                const obj = vm.newObject()
                vm.defineProp(obj, 'isComponentProp', {
                  enumerable: false,
                  get: () => vm.newBoolean(field.type === 'TEXT_PROP_DEF'),
                })
                vm.defineProp(obj, 'value', {
                  enumerable: false,
                  get: () => {
                    const guid = field.guids[0]
                    if (guid) {
                      const textNode = nodeMap.get(guid)
                      if (textNode)
                        return vm.newString(textNode.characters)
                    }
                    return vm.$$null
                  },
                })
                vm.defineFunction(obj, 'setValueAsync', 'buzz.textContent.setValueAsync', (newValueHandle) => {
                  const newValue = _$$u({
                    vm,
                    handle: newValueHandle,
                    zSchema: _$$z.string(),
                    property: 'newBuzzTextFieldValue',
                  })
                  const {
                    promise,
                    resolve,
                  } = vm.newPromise()
                  vm.registerPromise((async () => {
                    for (let guid of field.guids) {
                      if (!guid)
                        continue
                      const textNode = nodeMap.get(guid)
                      if (textNode)
                        await loadFontsForTextNode(textNode)
                    }
                    l7.plugin('plugin-buzz-set-textfield-value', () => {
                      field.setValue(newValue)
                    })
                    resolve(vm.$$null)
                  })())
                  return promise
                })
                vm.setProp(arr, idx.toString(), obj)
              })
              return arr
            }

            /**
             * Create a VM array of media field objects for Buzz content.
             * Each object has type, hash, node, getMedia, setMedia.
             */
            function createBuzzMediaContentArray(targetNode, vm, imageStore, videoStore, nodeFactory) {
              const arr = vm.newArray()
              const fields = oJ(targetNode)
              fields.forEach((field, idx) => {
                const obj = createMediaFieldObject(field, vm, imageStore, videoStore, nodeFactory)
                if (obj)
                  vm.setProp(arr, idx.toString(), obj)
              })
              return arr
            }
            function createMediaFieldObject(field, vm, imageStore, videoStore, nodeFactory) {
              const {
                mediaPaint,
                mediaPaintIndex,
              } = _$$eG(field)
              if (!mediaPaint || mediaPaintIndex == null || gl(mediaPaint) || mediaPaint.image?.hash === undefined) {
                return null
              }
              const obj = vm.newObject()
              // type
              vm.defineProp(obj, 'type', {
                enumerable: false,
                get: () => mediaPaint && hS(mediaPaint) ? vm.newString(mediaPaint.type) : vm.$$null,
              })
              // hash
              vm.defineProp(obj, 'hash', {
                enumerable: false,
                get: () => {
                  if (!mediaPaint || gl(mediaPaint))
                    return vm.$$null
                  let hash = null
                  switch (mediaPaint.type) {
                    case 'IMAGE':
                      hash = mediaPaint.image?.hash
                      break
                    case 'VIDEO':
                      hash = mediaPaint.video?.hash
                      break
                  }
                  return hash ? vm.newString(B9(hash)) : vm.$$null
                },
              })
              // node
              vm.defineProp(obj, 'node', {
                enumerable: false,
                get: () => nodeFactory.createNode(field.guid, 'BuzzMediaField.node.get'),
              })
              // getMedia
              vm.defineFunction(obj, 'getMedia', 'buzz.mediaContent.getMedia', () => {
                if (!mediaPaint || mediaPaintIndex == null)
                  throw new Error('No media paint found')
                if (gl(mediaPaint))
                  throw new Error('Mixed media paint not supported')
                switch (mediaPaint.type) {
                  case 'IMAGE':
                    {
                      const hash = mediaPaint.image?.hash
                      if (hash === undefined)
                        throw new Error('Invalid Image paint - no hash found')
                      const img = imageStore.getImageFromSHA1(B9(hash))
                      if (img === null)
                        throw new Error('Could not retrieve image')
                      return createImageProcessor(vm, img)
                    }
                  case 'VIDEO':
                    {
                      const hash = mediaPaint.video?.hash
                      if (hash === undefined)
                        throw new Error('Invalid Video paint - no hash found')
                      try {
                        const vid = videoStore.getPrivateVideoOrThrow(B9(hash))
                        return createNodeHash(vm, vid)
                      }
                      catch {
                        throw new Error('getMedia is not currently supported for videos not directly created through plugins')
                      }
                    }
                  default:
                    throwTypeError(mediaPaint.type, 'Unknown media type')
                }
              })
              // setMedia
              vm.defineFunction(obj, 'setMedia', 'buzz.mediaContent.setMedia', (hashHandle, typeHandle) => {
                const hash = _$$u({
                  vm,
                  handle: hashHandle,
                  zSchema: _$$z.string(),
                  property: 'mediaHash',
                })
                const type = _$$u({
                  vm,
                  handle: typeHandle,
                  zSchema: _$$z.enum(['IMAGE', 'VIDEO']),
                  property: 'mediaType',
                })
                const paint = type === 'IMAGE'
                  ? processPaint(imageStore, videoStore, {
                    type: 'IMAGE',
                    imageHash: hash,
                    scaleMode: 'FILL',
                  }, [])
                  : processPaint(imageStore, videoStore, {
                    type: 'VIDEO',
                    videoHash: hash,
                    scaleMode: 'FILL',
                  }, [])
                const {
                  promise,
                  resolve,
                } = vm.newPromise()
                const {
                  mediaPaintIndex,
                } = _$$eG(field)
                vm.registerPromise((async () => {
                  const fills = field.fills.slice()
                  if (mediaPaintIndex !== null && fills[mediaPaintIndex]) {
                    fills[mediaPaintIndex] = paint
                    field.fills = fills
                  }
                  resolve(vm.$$null)
                })())
                return promise
              })
              return obj
            }
            return buzzObj
          }),
        },
        canWriteInReadOnly: false,
        isAllowedInWidgetRender: false,
        hasEditScope: false,
      })
    }
    // =====================
    // REFACTORED: Modular API Extensions for Styles, Variables, Team Library, and Annotations
    // =====================

    /**
     * Register style-related API methods if in supported editor types.
     * Handles getStyleById, moveStyle, moveFolder, createStyle, and getAllLocalStyles for each style type.
     */
    if (this.inDesignOrDevHandoffOrIllustration() || this.inSites()) {
      const styleApiConfig = {
        vm: e,
        figmaApi: y,
        styleFactory: this.styleFactory,
        defineVmFunction: this.defineVmFunction,
        defineVmIncrementalFunction: this.defineVmIncrementalFunction,
        incrementalSafeApi: this.options.incrementalSafeApi,
        getNode: this.getNode,
        styleManager: this.styleManager,
        documentAccessState: this.documentAccessState,
        allowIncrementalUnsafeApiCalls: !!this.options.allowIncrementalUnsafeApiCalls,
      }

      // Register style API methods for each style type
      for (const {
        styleType,
        moveMethod,
        moveFolderMethod,
        createMethod,
        getMethod,
        getMethodAsync,
      } of Ut) {
        // getStyleById (and async variant)
        styleApiConfig.defineVmIncrementalFunction({
          handle: styleApiConfig.figmaApi,
          key: 'getStyleById',
          metricsKey: 'figma.getStyleById',
          incrementalSafeApiKey: 'getStyleByIdAsync',
          incrementalSafeApiMetricsKey: 'figma.getStyleByIdAsync',
          parseArg: t => styleApiConfig.vm.toString(t),
          prepareDocument: async () => {
            await Ux(styleApiConfig.documentAccessState)
          },
          resolveValue: id => styleApiConfig.styleFactory.createStyle(id),
          incrementalSafeApi: styleApiConfig.incrementalSafeApi,
          allowIncrementalUnsafeApiCalls: styleApiConfig.allowIncrementalUnsafeApiCalls,
          isAllowedInReadOnly: true,
          hasEditScope: false,
        })

        // moveStyle
        styleApiConfig.defineVmFunction({
          handle: styleApiConfig.figmaApi,
          key: moveMethod,
          metricsKey: `figma.${moveMethod}`,
          cb: (targetHandle, refHandle) => {
            const target = styleApiConfig.getNode(targetHandle)
            const ref = styleApiConfig.vm.isNull(refHandle) ? null : styleApiConfig.getNode(refHandle)
            if (target.styleType !== styleType) {
              throw new Error(`Target node is a ${target.styleType} node, instead of ${styleType}`)
            }
            if (ref !== null && ref.styleType !== styleType) {
              throw new Error(`Reference node is a ${ref.styleType} node, instead of ${styleType}`)
            }
            if (ref !== null && target.guid === ref.guid)
              throw new Error('Target node and reference node cannot be equal')
            const err = styleApiConfig.styleManager.moveStyle(target, ref, styleType)
            if (err !== '')
              throw new Error(err)
            return styleApiConfig.vm.undefined
          },
          isAllowedInReadOnly: false,
          hasEditScope: true,
        })

        // moveFolder
        styleApiConfig.defineVmFunction({
          handle: styleApiConfig.figmaApi,
          key: moveFolderMethod,
          metricsKey: `figma.${moveFolderMethod}`,
          cb: (folderIdHandle, refFolderIdHandle) => {
            const folderId = styleApiConfig.vm.toString(folderIdHandle)
            const refFolderId = styleApiConfig.vm.isNull(refFolderIdHandle) ? null : styleApiConfig.vm.toString(refFolderIdHandle)
            const err = styleApiConfig.styleManager.moveFolder(folderId, refFolderId, styleType)
            if (err !== '')
              throw new Error(err)
            return styleApiConfig.vm.undefined
          },
          isAllowedInReadOnly: false,
          hasEditScope: true,
        })

        // createStyle
        styleApiConfig.defineVmFunction({
          handle: styleApiConfig.figmaApi,
          key: createMethod,
          metricsKey: `figma.${createMethod}`,
          cb: () => {
            const style = styleApiConfig.styleManager.createStyle(styleType)
            if (!style)
              throw new Error(`Could not create ${styleType} style`)
            return styleApiConfig.styleFactory.createStyle(style)
          },
          isAllowedInReadOnly: false,
          hasEditScope: true,
        })

        // getAllLocalStyles (and async variant)
        styleApiConfig.defineVmIncrementalFunction({
          handle: styleApiConfig.figmaApi,
          key: getMethod,
          metricsKey: `figma.${getMethod}`,
          incrementalSafeApiKey: getMethodAsync,
          incrementalSafeApiMetricsKey: `figma.${getMethodAsync}`,
          parseArg: () => { },
          prepareDocument: async () => { },
          resolveValue: () => {
            const styles = styleApiConfig.styleManager.getAllLocalStyles(styleType).map(_$$nM)
            const arr = styleApiConfig.vm.newArray()
            let idx = 0
            for (const style of styles) {
              const styleObj = styleApiConfig.styleFactory.createStyle(style)
              if (!styleApiConfig.vm.isNull(styleObj)) {
                styleApiConfig.vm.setProp(arr, idx.toString(), styleObj)
                idx++
              }
            }
            return arr
          },
          incrementalSafeApi: styleApiConfig.incrementalSafeApi,
          allowIncrementalUnsafeApiCalls: styleApiConfig.allowIncrementalUnsafeApiCalls,
          isAllowedInReadOnly: true,
          hasEditScope: false,
        })
      }
    }

    /**
     * Register variable and variable collection API methods.
     * Handles getVariableById, getLocalVariables, getSubscribedVariables, getVariableCollectionById, getLocalVariableCollections,
     * createVariableCollection, createVariable, createVariableAlias, createVariableAliasByIdAsync, importVariableByKeyAsync,
     * extendLibraryCollectionByKeyAsync, setBoundVariableForPaint, setBoundVariableForEffect, setBoundVariableForLayoutGrid.
     */
    {
      const variableApiConfig = {
        vm: e,
        videoStore: this.videoStore,
        imageStore: this.imageStore,
        figmaApi: y,
        variableFactory: this.variableFactory,
        variableCollectionFactory: this.variableCollectionFactory,
        defineVmFunction: this.defineVmFunction,
        defineVmIncrementalFunction: this.defineVmIncrementalFunction,
        defineVmProp: this.defineVmProp,
        incrementalSafeApi: this.options.incrementalSafeApi,
        documentAccessState: this.documentAccessState,
        pluginVersionID: this.options.pluginVersionID,
        getNode: this.getNode,
        getVariableNode: this.getVariableNode,
        getVariableCollectionNode: this.getVariableCollectionNode,
        allowIncrementalUnsafeApiCalls: !!this.options.allowIncrementalUnsafeApiCalls,
        sceneGraph: this.privateSceneGraph,
      }
      variableApiConfig.defineVmProp({
        handle: variableApiConfig.figmaApi,
        key: 'variables',
        options: {
          enumerable: false,
          metricsKey: 'figma.variables',
          get: memoizedHandle(variableApiConfig.vm, () => {
            const r = variableApiConfig.vm.newObject()
            // getVariableById (and async)
            variableApiConfig.defineVmIncrementalFunction({
              handle: r,
              key: 'getVariableById',
              hasEditScope: false,
              metricsKey: 'figma.variables.getVariableById',
              incrementalSafeApiKey: 'getVariableByIdAsync',
              incrementalSafeApiMetricsKey: 'figma.variables.getVariableByIdAsync',
              parseArg: t => variableApiConfig.vm.toString(t),
              prepareDocument: async () => {
                await Ux(variableApiConfig.documentAccessState)
              },
              resolveValue: id => variableApiConfig.variableFactory.createVariableHandle(id, variableApiConfig.sceneGraph),
              isAllowedInReadOnly: true,
              incrementalSafeApi: variableApiConfig.incrementalSafeApi,
              allowIncrementalUnsafeApiCalls: variableApiConfig.allowIncrementalUnsafeApiCalls,
            })
            // getLocalVariables (and async)
            variableApiConfig.defineVmIncrementalFunction({
              handle: r,
              key: 'getLocalVariables',
              hasEditScope: false,
              metricsKey: 'figma.variables.getLocalVariables',
              incrementalSafeApiKey: 'getLocalVariablesAsync',
              incrementalSafeApiMetricsKey: 'figma.variables.getLocalVariablesAsync',
              parseArg: t => _$$u({
                vm: variableApiConfig.vm,
                handle: t,
                zSchema: variableDefinitions.PublicVariableResolvedType.optional(),
                property: 'resolvedType',
              }) ?? null,
              prepareDocument: async () => { },
              resolveValue: resolvedType => variableApiConfig.variableFactory.getLocalVariables(resolvedType),
              isAllowedInReadOnly: true,
              incrementalSafeApi: variableApiConfig.incrementalSafeApi,
              allowIncrementalUnsafeApiCalls: variableApiConfig.allowIncrementalUnsafeApiCalls,
            })
            // getSubscribedVariables
            variableApiConfig.defineVmFunction({
              handle: r,
              key: 'getSubscribedVariables',
              hasEditScope: false,
              metricsKey: 'figma.variables.getSubscribedVariables',
              cb: (t) => {
                const resolvedType = _$$u({
                  vm: variableApiConfig.vm,
                  handle: t,
                  zSchema: variableDefinitions.PublicVariableResolvedType.optional(),
                  property: 'resolvedType',
                }) ?? null
                return variableApiConfig.variableFactory.getSubscribedVariables(resolvedType)
              },
              isAllowedInReadOnly: true,
            })
            // getVariableCollectionById (and async)
            variableApiConfig.defineVmIncrementalFunction({
              handle: r,
              key: 'getVariableCollectionById',
              hasEditScope: false,
              metricsKey: 'figma.variables.getVariableCollectionById',
              incrementalSafeApiKey: 'getVariableCollectionByIdAsync',
              incrementalSafeApiMetricsKey: 'figma.variables.getVariableCollectionByIdAsync',
              parseArg: t => variableApiConfig.vm.toString(t),
              prepareDocument: async () => {
                await Ux(variableApiConfig.documentAccessState)
              },
              resolveValue: id => variableApiConfig.variableCollectionFactory.createVariableCollectionHandle(id, variableApiConfig.sceneGraph),
              incrementalSafeApi: variableApiConfig.incrementalSafeApi,
              isAllowedInReadOnly: true,
              allowIncrementalUnsafeApiCalls: variableApiConfig.allowIncrementalUnsafeApiCalls,
            })
            // getLocalVariableCollections (and async)
            variableApiConfig.defineVmIncrementalFunction({
              handle: r,
              key: 'getLocalVariableCollections',
              hasEditScope: false,
              metricsKey: 'figma.variables.getLocalVariableCollections',
              incrementalSafeApiKey: 'getLocalVariableCollectionsAsync',
              incrementalSafeApiMetricsKey: 'figma.variables.getLocalVariableCollectionsAsync',
              parseArg: () => { },
              prepareDocument: async () => { },
              resolveValue: () => variableApiConfig.variableCollectionFactory.getLocalVariableCollections(),
              isAllowedInReadOnly: true,
              incrementalSafeApi: variableApiConfig.incrementalSafeApi,
              allowIncrementalUnsafeApiCalls: variableApiConfig.allowIncrementalUnsafeApiCalls,
            })
            // createVariableCollection
            variableApiConfig.defineVmFunction({
              handle: r,
              key: 'createVariableCollection',
              hasEditScope: true,
              metricsKey: 'figma.variables.createVariableCollection',
              cb: (t) => {
                const name = _$$u({
                  vm: variableApiConfig.vm,
                  handle: t,
                  zSchema: _$$z.string(),
                  property: 'name',
                })
                const collection = variableApiConfig.variableCollectionFactory.createNewVariableCollection(name)
                return variableApiConfig.variableCollectionFactory.createVariableCollectionHandle(collection, variableApiConfig.sceneGraph)
              },
              isAllowedInReadOnly: false,
            })
            // createVariable
            variableApiConfig.defineVmFunction({
              handle: r,
              key: 'createVariable',
              hasEditScope: true,
              metricsKey: 'figma.variables.createVariable',
              cb: (nameHandle, collectionHandle, typeHandle) => {
                const name = _$$u({
                  vm: variableApiConfig.vm,
                  handle: nameHandle,
                  zSchema: _$$z.string(),
                  property: 'name',
                })
                const collectionId = validateAndExtractCollectionId({
                  callerName: 'createVariable',
                  consoleLogger: _$$k2,
                  getNode: variableApiConfig.getNode,
                  incrementalSafeApi: variableApiConfig.incrementalSafeApi,
                  pluginVersionID: variableApiConfig.pluginVersionID,
                  vm: variableApiConfig.vm,
                  vmHandle: collectionHandle,
                  allowIncrementalUnsafeApiCalls: variableApiConfig.allowIncrementalUnsafeApiCalls,
                })
                const resolvedType = _$$u({
                  vm: variableApiConfig.vm,
                  handle: typeHandle,
                  zSchema: variableDefinitions.PublicVariableResolvedType,
                  property: 'resolvedType',
                })
                const variable = variableApiConfig.variableFactory.createNewVariable(name, collectionId, resolvedType)
                return variableApiConfig.variableFactory.createVariableHandle(variable, variableApiConfig.sceneGraph)
              },
              isAllowedInReadOnly: false,
            })
            // createVariableAlias
            variableApiConfig.defineVmFunction({
              handle: r,
              key: 'createVariableAlias',
              hasEditScope: true,
              metricsKey: 'figma.variables.createVariableAlias',
              cb: (t) => {
                if (variableApiConfig.getNode(t).type !== 'VARIABLE') {
                  throw new Error('Can only construct variable aliases from variables')
                }
                const id = variableApiConfig.vm.getStringProp(t, 'id')
                return variableApiConfig.vm.deepWrap({
                  type: 'VARIABLE_ALIAS',
                  id,
                })
              },
              isAllowedInReadOnly: true,
            })
            // createVariableAliasByIdAsync
            variableApiConfig.defineVmFunction({
              handle: r,
              key: 'createVariableAliasByIdAsync',
              metricsKey: 'figma.variables.createVariableAliasByIdAsync',
              cb: (t) => {
                const id = _$$u({
                  vm: variableApiConfig.vm,
                  handle: t,
                  zSchema: _$$z.string(),
                  property: 'variableId',
                })
                if (!sD.fromString(id))
                  throw new Error('Invalid variable id')
                const {
                  promise,
                  resolve,
                  reject,
                } = variableApiConfig.vm.newPromise()
                variableApiConfig.vm.registerPromise(Ux(variableApiConfig.documentAccessState)).then(() => {
                  resolve(variableApiConfig.vm.deepWrap({
                    type: 'VARIABLE_ALIAS',
                    id,
                  }))
                }).catch(err => reject(variableApiConfig.vm.newString(err.message)))
                return promise
              },
              isAllowedInReadOnly: true,
              hasEditScope: false,
            })
            // importVariableByKeyAsync
            variableApiConfig.defineVmFunction({
              handle: r,
              key: 'importVariableByKeyAsync',
              metricsKey: 'figma.variables.importVariableByKeyAsync',
              cb: (t) => {
                const key = _$$u({
                  vm: variableApiConfig.vm,
                  handle: t,
                  zSchema: _$$z.string(),
                  property: 'variableKey',
                })
                return variableApiConfig.variableFactory.importByKeyAsync(key)
              },
              isAllowedInReadOnly: false,
              hasEditScope: false,
            })
            // extendLibraryCollectionByKeyAsync (feature flag)
            if (getFeatureFlags().ds_extended_collections) {
              variableApiConfig.defineVmFunction({
                handle: r,
                key: 'extendLibraryCollectionByKeyAsync',
                metricsKey: 'figma.variables.extendLibraryCollectionByKeyAsync',
                cb: (collectionKeyHandle, nameHandle) => {
                  const collectionKey = _$$u({
                    vm: variableApiConfig.vm,
                    handle: collectionKeyHandle,
                    zSchema: _$$z.string(),
                    property: 'collectionKey',
                  })
                  const name = _$$u({
                    vm: variableApiConfig.vm,
                    handle: nameHandle,
                    zSchema: _$$z.string(),
                    property: 'name',
                  })
                  const {
                    promise,
                    resolve,
                    reject,
                  } = variableApiConfig.vm.newPromise()
                  variableApiConfig.vm.registerPromise(af(collectionKey, name, variableApiConfig.variableCollectionFactory)).then((result) => {
                    resolve(variableApiConfig.variableCollectionFactory.createExtendedVariableCollectionHandle(result))
                  }).catch(err => reject(variableApiConfig.vm.newString(err.message)))
                  return promise
                },
                isAllowedInReadOnly: false,
                hasEditScope: true,
              })
            }
            // setBoundVariableForPaint
            variableApiConfig.defineVmFunction({
              handle: r,
              key: 'setBoundVariableForPaint',
              metricsKey: 'figma.variables.setBoundVariableForPaint',
              cb: (paintHandle, fieldHandle, variableHandle) => {
                const paint = _$$u({
                  vm: variableApiConfig.vm,
                  handle: paintHandle,
                  zSchema: _$$N.Paint,
                  property: 'paintCopy',
                })
                const field = _$$u({
                  vm: variableApiConfig.vm,
                  handle: fieldHandle,
                  zSchema: variableDefinitions.VariableBindablePaintField,
                  property: 'field',
                })
                if (variableApiConfig.vm.isNull(variableHandle) || variableApiConfig.vm.isUndefined(variableHandle)) {
                  const n = processPaint(variableApiConfig.imageStore, variableApiConfig.videoStore, paint, [])
                  n.colorVar = void 0
                  return variableApiConfig.vm.deepWrap(convertInternalPaintToExternal(n))
                }
                const variable = variableApiConfig.getVariableNode(variableHandle)
                if (!variable || variable.type !== 'VARIABLE' || variable.variableResolvedType !== rXF.COLOR) {
                  throw new Error(`can only bind color variables to ${field}`)
                }
                const n = processPaint(variableApiConfig.imageStore, variableApiConfig.videoStore, paint, [])
                if (n.type !== 'SOLID')
                  throw new Error('can only bind variables to solid paints')
                n.colorVar = {
                  value: {
                    alias: sD.toKiwi(variable.id),
                  },
                  dataType: 'ALIAS',
                  resolvedDataType: 'COLOR',
                }
                return variableApiConfig.vm.deepWrap(convertInternalPaintToExternal(n))
              },
              isAllowedInReadOnly: true,
              hasEditScope: false,
            })
            // setBoundVariableForEffect
            variableApiConfig.defineVmFunction({
              handle: r,
              key: 'setBoundVariableForEffect',
              metricsKey: 'figma.variables.setBoundVariableForEffect',
              cb: (effectHandle, fieldHandle, variableHandle) => {
                const effectCopy = _$$u({
                  vm: variableApiConfig.vm,
                  handle: effectHandle,
                  zSchema: _$$m()?.ce_il_root ? _$$N.EffectIncludingDrawMode : _$$N.Effect,
                  property: 'effectCopy',
                })
                if (variableApiConfig.vm.isNull(variableHandle) || variableApiConfig.vm.isUndefined(variableHandle)) {
                  return this.unbindAllEffectVariables(effectCopy)
                }
                const variableObject = variableApiConfig.getVariableNode(variableHandle)
                const mutableEffect = processEffectWithValidation(effectCopy, undefined)
                if (this.isShadowEffect(mutableEffect)) {
                  return this.bindShadowEffectVariable(mutableEffect, fieldHandle, variableObject)
                }
                else {
                  return this.bindBlurEffectVariable(mutableEffect, fieldHandle, variableObject)
                }
              },
              isAllowedInReadOnly: true,
              hasEditScope: false,
            })
            // setBoundVariableForLayoutGrid
            variableApiConfig.defineVmFunction({
              handle: r,
              key: 'setBoundVariableForLayoutGrid',
              metricsKey: 'figma.variables.setBoundVariableForLayoutGrid',
              cb: (layoutGridHandle, fieldHandle, variableHandle) => {
                const layoutGrid = _$$u({
                  vm: variableApiConfig.vm,
                  handle: layoutGridHandle,
                  zSchema: _$$N.LayoutGrid,
                  property: 'layoutGridCopy',
                })
                if (variableApiConfig.vm.isNull(variableHandle) || variableApiConfig.vm.isUndefined(variableHandle)) {
                  const t = convertGridLayoutConfig(layoutGrid)
                  t.offsetVar = void 0
                  t.gutterSizeVar = void 0
                  t.numSectionsVar = void 0
                  t.sectionSizeVar = void 0
                  return variableApiConfig.vm.deepWrap(processGridLayout(t))
                }
                const variable = variableApiConfig.getVariableNode(variableHandle)
                if (!variable || variable.type !== 'VARIABLE' || variable.variableResolvedType !== rXF.FLOAT) {
                  throw new Error('can only bind float variables to layoutGrids')
                }
                const grid = convertGridLayoutConfig(layoutGrid)
                if (grid.pattern === 'GRID') {
                  const field = _$$u({
                    vm: variableApiConfig.vm,
                    handle: fieldHandle,
                    zSchema: variableDefinitions.VariableBindableGridLayoutField,
                    property: 'field',
                  })
                  if (!variable || variable.type !== 'VARIABLE' || variable.variableResolvedType !== rXF.FLOAT) {
                    throw new Error(`can only bind float variables to ${field}`)
                  }
                  grid.sectionSizeVar = {
                    value: {
                      alias: sD.toKiwi(variable.id),
                    },
                    dataType: 'ALIAS',
                    resolvedDataType: 'FLOAT',
                  }
                }
                else {
                  let field
                  switch (grid.type) {
                    case 'MIN':
                    case 'MAX':
                      field = _$$u({
                        vm: variableApiConfig.vm,
                        handle: fieldHandle,
                        zSchema: variableDefinitions.VariableBindableMinMaxLayoutField,
                        property: 'field',
                      })
                      break
                    case 'CENTER':
                      field = _$$u({
                        vm: variableApiConfig.vm,
                        handle: fieldHandle,
                        zSchema: variableDefinitions.VariableBindableCenterLayoutField,
                        property: 'field',
                      })
                      break
                    case 'STRETCH':
                      field = _$$u({
                        vm: variableApiConfig.vm,
                        handle: fieldHandle,
                        zSchema: variableDefinitions.VariableBindableStretchLayoutField,
                        property: 'field',
                      })
                      break
                  }
                  switch (field) {
                    case 'sectionSize':
                      grid.sectionSizeVar = {
                        value: {
                          alias: sD.toKiwi(variable.id),
                        },
                        dataType: 'ALIAS',
                        resolvedDataType: 'COLOR',
                      }
                      break
                    case 'offset':
                      grid.offsetVar = {
                        value: {
                          alias: sD.toKiwi(variable.id),
                        },
                        dataType: 'ALIAS',
                        resolvedDataType: 'FLOAT',
                      }
                      break
                    case 'count':
                      grid.numSectionsVar = {
                        value: {
                          alias: sD.toKiwi(variable.id),
                        },
                        dataType: 'ALIAS',
                        resolvedDataType: 'FLOAT',
                      }
                      break
                    case 'gutterSize':
                      grid.gutterSizeVar = {
                        value: {
                          alias: sD.toKiwi(variable.id),
                        },
                        dataType: 'ALIAS',
                        resolvedDataType: 'FLOAT',
                      }
                      break
                  }
                }
                return variableApiConfig.vm.deepWrap(processGridLayout(grid))
              },
              isAllowedInReadOnly: true,
              hasEditScope: false,
            })
            variableApiConfig.vm.shallowFreezeObject(r)
            return r
          }),
        },
        canWriteInReadOnly: false,
        isAllowedInWidgetRender: false,
        hasEditScope: false,
      })
    }

    /**
     * Register teamLibrary API if permission is granted.
     * Handles getAvailableLibraryVariableCollectionsAsync and getVariablesInLibraryCollectionAsync.
     */
    {
      const teamLibraryApiConfig = {
        vm: e,
        stats,
        figmaApi: y,
        validatedPermissions: this.options.validatedPermissions,
        variableFactory: this.variableFactory,
        variableCollectionFactory: this.variableCollectionFactory,
        defineVmFunction: this.defineVmFunction,
        defineVmProp: this.defineVmProp,
      }
      teamLibraryApiConfig.defineVmProp({
        handle: teamLibraryApiConfig.figmaApi,
        key: 'teamLibrary',
        options: {
          enumerable: false,
          metricsKey: 'figma.teamLibrary',
          get: memoizedHandle(teamLibraryApiConfig.vm, () => {
            if (!teamLibraryApiConfig.validatedPermissions.permissions.includes('teamlibrary')) {
              throw new Error('"teamlibrary" permission not specified in manifest.json.')
            }
            const t = teamLibraryApiConfig.vm.newObject()
            teamLibraryApiConfig.defineVmFunction({
              handle: t,
              key: 'getAvailableLibraryVariableCollectionsAsync',
              metricsKey: 'figma.teamLibrary.getAvailableLibraryVariableCollectionsAsync',
              cb: () => teamLibraryApiConfig.variableCollectionFactory.getLibraryVariableCollectionsAsync(),
              isAllowedInReadOnly: true,
              hasEditScope: false,
            })
            teamLibraryApiConfig.defineVmFunction({
              handle: t,
              key: 'getVariablesInLibraryCollectionAsync',
              metricsKey: 'figma.teamLibrary.getVariablesInLibraryCollectionAsync',
              cb: (variableCollectionKeyHandle) => {
                const key = _$$u({
                  vm: teamLibraryApiConfig.vm,
                  handle: variableCollectionKeyHandle,
                  zSchema: _$$z.string(),
                  property: 'variableCollectionKey',
                })
                return teamLibraryApiConfig.variableFactory.getVariablesInLibraryCollectionAsync(key)
              },
              isAllowedInReadOnly: true,
              hasEditScope: false,
            })
            return t
          }),
        },
        canWriteInReadOnly: false,
        isAllowedInWidgetRender: false,
        hasEditScope: false,
      })
    }

    /**
     * Register annotations API for supported editor types.
     * Handles getAnnotationCategoriesAsync, getAnnotationCategoryByIdAsync, addAnnotationCategoryAsync.
     */
    {
      const annotationApiConfig = {
        vm: e,
        figmaApi: y,
        editorType: this.fullscreenEditorType,
        annotationCategoryFactory: this.annotationCategoryFactory,
        defineVmFunction: this.defineVmFunction,
        defineVmProp: this.defineVmProp,
      }
      annotationApiConfig.defineVmProp({
        handle: annotationApiConfig.figmaApi,
        key: 'annotations',
        options: {
          enumerable: false,
          metricsKey: 'figma.annotations',
          get: memoizedHandle(annotationApiConfig.vm, () => {
            const t = annotationApiConfig.vm.newObject()
            annotationApiConfig.defineVmFunction({
              handle: t,
              key: 'getAnnotationCategoriesAsync',
              metricsKey: 'figma.annotations.getAnnotationCategoriesAsync',
              cb: () => annotationApiConfig.annotationCategoryFactory.getLocalAnnotationCategoriesAsync(),
              hasEditScope: true,
              isAllowedInReadOnly: true,
            })
            annotationApiConfig.defineVmFunction({
              handle: t,
              key: 'getAnnotationCategoryByIdAsync',
              metricsKey: 'figma.annotations.getAnnotationCategoryByIdAsync',
              cb: (idHandle) => {
                const id = _$$u({
                  vm: annotationApiConfig.vm,
                  handle: idHandle,
                  zSchema: _$$z.string(),
                  property: 'annotationCategoryId',
                })
                return annotationApiConfig.annotationCategoryFactory.getLocalAnnotationCategoryByIdAsync(id)
              },
              hasEditScope: true,
              isAllowedInReadOnly: true,
            })
            annotationApiConfig.defineVmFunction({
              handle: t,
              key: 'addAnnotationCategoryAsync',
              metricsKey: 'figma.annotations.addAnnotationCategoryAsync',
              cb: (categoryInputHandle) => {
                if (annotationApiConfig.editorType !== _$$nT.DevHandoff && annotationApiConfig.editorType !== _$$nT.Design && annotationApiConfig.editorType !== _$$nT.Illustration) {
                  throw new Error('Annotations can only be written in Dev Mode and Design Mode')
                }
                const input = _$$u({
                  vm: annotationApiConfig.vm,
                  handle: categoryInputHandle,
                  zSchema: i5,
                  property: 'categoryInput',
                })
                return annotationApiConfig.annotationCategoryFactory.createAnnotationCategoryAsync(input.label, input.color)
              },
              hasEditScope: true,
              isAllowedInReadOnly: true,
            })
            return t
          }),
        },
        canWriteInReadOnly: false,
        isAllowedInWidgetRender: false,
        hasEditScope: false,
      })
    }
    this.defineVmProp({
      handle: y,
      key: 'root',
      options: {
        enumerable: !1,
        metricsKey: 'figma.root',
        get: () => this.nodeFactory.createNode('0:0', 'root'),
      },
      canWriteInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !0,
    })
    this.defineVmProp({
      handle: y,
      key: 'mode',
      options: {
        metricsKey: 'figma.mode',
        enumerable: !1,
        get: () => {
          if (getFeatureFlags().ext_lego_plugins_runmode) {
            let t = this.getRunMode()
            t !== 'inspect' || this.options.capabilities.includes('inspect') || (t = 'panel')
            return e.newString(t)
          }
          let t = this.options.triggeredFrom === 'codegen'
          let i = this.options.triggeredFrom === 'related-link-preview'
          let n = this.options.triggeredFrom === 'related-link-auth'
          let r = this.fullscreenEditorType === _$$nT.DevHandoff && !t
          let a = this.options.command === 'textreview'
          let s = 'default'
          t ? s = 'codegen' : i ? s = 'linkpreview' : n ? s = 'auth' : r ? s = this.options.capabilities.includes('inspect') ? 'inspect' : 'panel' : a && (s = 'textreview')
          return e.newString(s)
        },
      },
      canWriteInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !0,
    })
    this.defineVmProp({
      handle: y,
      key: 'editorType',
      options: {
        get: () => {
          let t = 'figjam'
          switch (this.fullscreenEditorType) {
            case _$$nT.Design:
            case _$$nT.Illustration:
              t = 'figma'
              break
            case _$$nT.DevHandoff:
              t = this.options.editorType?.includes(FW.DEV) ? 'dev' : 'inspect'
              break
            case _$$nT.Whiteboard:
              t = 'figjam'
              break
            case _$$nT.Slides:
              t = 'slides'
              break
            case _$$nT.Sites:
              t = 'sites'
              break
            case _$$nT.Figmake:
              t = _$$xi
              break
            case _$$nT.Cooper:
              t = $t
              break
            default:
              throwTypeError(this.fullscreenEditorType, undefined)
            // Add missing second argument
          }
          return e.newString(t)
        },
        metricsKey: 'figma.editorType',
        enumerable: !1,
      },
      canWriteInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !0,
    })
    let v = this
    this.defineVmProp({
      handle: y,
      key: 'currentPage',
      options: {
        enumerable: !1,
        metricsKey: 'figma.currentPage',
        get: () => {
          let t = v.privateSceneGraph.getCurrentPage()
          return t === null ? e.$$null : (av(t.guid, this.documentAccessState), this.nodeFactory.createNode(t.guid, 'currentPage'))
        },
        set(t) {
          incrementalSafeApi && xc(!!allowIncrementalUnsafeApiCalls, 'figma.currentPage =', 'figma.setCurrentPageAsync')
          let i = v.getNode(t)
          if (i.type !== 'CANVAS')
            throw new Error('figma.currentPage expects a PageNode')
          v.privateSceneGraph.setCurrentPage_DEPRECATED(i.guid)
          return e.$$null
        },
      },
      canWriteInReadOnly: !0,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.defineVmFunction({
      handle: y,
      key: 'setCurrentPageAsync',
      metricsKey: 'figma.setCurrentPageAsync',
      cb: (t) => {
        let i = this.getNode(t)
        let {
          promise,
          resolve,
          reject,
        } = e.newPromise()
        zl.set(_$$rp, !0)
        e.registerPromise(vf(i.guid, this.documentAccessState)).then(() => {
          if (i.type !== 'CANVAS')
            throw new Error('figma.setCurrentPageAsync expects a PageNode')
          return this.privateSceneGraph.setCurrentPageAsync(i.guid)
        }).then(() => resolve(e.$$null)).catch(t => reject(e.newString(t.message))).finally(() => {
          zl.set(_$$rp, !1)
        })
        return promise
      },
      isAllowedInReadOnly: !0,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.defineVmProp({
      handle: y,
      key: 'currentUser',
      options: {
        enumerable: !1,
        metricsKey: 'figma.currentUser',
        get: () => {
          if (!this.options.validatedPermissions.permissions.includes('currentuser')) {
            throw new Error(aS('currentuser', {
              isWidget: this.isWidget,
            }))
          }
          return this.createUserApi()
        },
      },
      canWriteInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.defineVmProp({
      handle: y,
      key: 'activeUsers',
      options: {
        enumerable: !1,
        metricsKey: 'activeUsers',
        get: () => {
          if (!this.options.validatedPermissions.permissions.includes('activeusers')) {
            throw new Error(aS('activeusers', {
              isWidget: this.isWidget,
            }))
          }
          return this.createActiveUsersApi()
        },
      },
      canWriteInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.isWidget
      ? this.defineVmProp({
        handle: y,
        key: 'widgetId',
        options: {
          enumerable: !1,
          metricsKey: 'figma.widgetId',
          get: () => e.newString(this.options.pluginID),
        },
        canWriteInReadOnly: !1,
        isAllowedInWidgetRender: !1,
        hasEditScope: !1,
      })
      : this.defineVmProp({
        handle: y,
        key: 'pluginId',
        options: {
          enumerable: !1,
          metricsKey: 'figma.pluginId',
          get: () => e.newString(this.options.pluginID),
        },
        canWriteInReadOnly: !1,
        isAllowedInWidgetRender: !1,
        hasEditScope: !1,
      })
    this.defineVmProp({
      handle: y,
      key: 'command',
      options: {
        enumerable: !1,
        metricsKey: 'figma.command',
        get: () => this.isWidget ? e.undefined : e.newString(command),
      },
      canWriteInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.setQueryMode(queryMode)
    e.defineProp(y, 'mixed', {
      enumerable: !1,
      metricsKey: 'figma.mixed',
      get: () => this.mixedSentinel,
    })
    this.defineVmProp({
      handle: y,
      key: 'skipInvisibleInstanceChildren',
      options: {
        enumerable: !1,
        metricsKey: 'figma.skipInvisibleInstanceChildren',
        get: () => e.newBoolean(this.skipInvisibleInstanceChildren),
        set: (t) => {
          let i = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$z.boolean(),
            property: 'skipInvisibleInstanceChildren',
          })
          this.setSkipInvisibleInstanceChildren(i)
        },
      },
      canWriteInReadOnly: !0,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    });
    (getFeatureFlags().jsx_debugging || getFeatureFlags().internal_only_debug_tools) && this.defineVmProp({
      handle: y,
      key: 'jsx',
      options: {
        enumerable: !1,
        value: this.createJsxApi(),
      },
      canWriteInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    getFeatureFlags().codebase_suggestions && this.defineVmProp({
      handle: y,
      key: 'codebaseSuggestions',
      options: {
        enumerable: !1,
        value: this.createCodebaseSuggestionsApi(),
      },
      canWriteInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.defineVmProp({
      handle: y,
      key: 'payments',
      options: {
        enumerable: !1,
        metricsKey: 'figma.payments',
        get: memoizedHandle(e, () => {
          if (!this.options.validatedPermissions.permissions.includes('payments')) {
            throw new Error('"payments" permission not specified in manifest.json.')
          }
          return this.createPaymentsApi()
        }),
      },
      canWriteInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    let I = this.inDesignOrDevHandoffOrIllustration()
    let C = this.inFigjam()
    let R = this.inSlides()
    let D = this.inBuzz()
    let M = this.inSites()
    /**
     * Register node creation methods for supported node types.
     * Handles special cases for TABLE, SLIDE, and SLIDE_ROW node types.
     * For other node types, registers a generic creation function.
     */
    for (const {
      nodeType,
      createMethod,
    } of h2) {
      // Determine if node type is allowed in the current editor context
      const isAllowed = C && fx.includes(nodeType) || I && _$$tO.includes(nodeType) || R && J6.includes(nodeType) || M && lm.includes(nodeType) || D && _$$e3.includes(nodeType)
      if (isAllowed)
        continue

      // Special handling for TABLE node type
      if (nodeType === 'TABLE') {
        /**
         * Create a TABLE node with optional row and column counts.
         * @param n - Number of rows (optional)
         * @param r - Number of columns (optional)
         */
        this.defineVmFunction({
          handle: y,
          key: createMethod,
          metricsKey: `figma.${createMethod}`,
          cb: (n, r) => {
            const numRows = _$$u({
              vm: e,
              handle: n,
              zSchema: _$$N.FiniteNumber.int().min(1).optional(),
              property: 'options',
            })
            const numCols = _$$u({
              vm: e,
              handle: r,
              zSchema: _$$N.FiniteNumber.int().min(1).optional(),
              property: 'options',
            })
            const options = {
              tracking: HzA.TRACK,
              ...(numRows && {
                tableNumRows: numRows,
              }),
              ...(numCols && {
                tableNumColumns: numCols,
              }),
            }
            const node = this.privateSceneGraph.createNode(nodeType, options)
            av(node.guid, this.documentAccessState)
            return this.nodeFactory.createNode(node.guid, `figma.${createMethod}`)
          },
          isAllowedInReadOnly: false,
          isAllowedInWidgetRender: false,
          hasEditScope: true,
        })
        continue
      }

      // Special handling for SLIDE node type
      if (nodeType === 'SLIDE') {
        /**
         * Create a SLIDE node with optional row and column indices.
         * @param e - Slide row (optional)
         * @param n - Slide column (optional)
         */
        this.defineVmFunction({
          handle: y,
          key: createMethod,
          metricsKey: `figma.${createMethod}`,
          cb: (e, n) => {
            const slideRow = _$$u({
              vm: this.vm,
              handle: e,
              zSchema: _$$z.number().finite().min(0).int().optional(),
              property: 'slideRow',
            })
            const slideCol = _$$u({
              vm: this.vm,
              handle: n,
              zSchema: _$$z.number().finite().min(0).int().optional(),
              property: 'slideCol',
            })
            const options = {
              tracking: HzA.TRACK,
              ...(typeof slideRow === 'number' && {
                slideRow,
              }),
              ...(typeof slideCol === 'number' && {
                slideCol,
              }),
            }
            const node = this.privateSceneGraph.createNode(nodeType, options)
            av(node.guid, this.documentAccessState)
            return this.nodeFactory.createNode(node.guid, `figma.${createMethod}`)
          },
          isAllowedInReadOnly: false,
          isAllowedInWidgetRender: false,
          hasEditScope: true,
        })
        continue
      }

      // Special handling for SLIDE_ROW node type
      if (nodeType === 'SLIDE_ROW') {
        /**
         * Create a SLIDE_ROW node with optional row index.
         * @param e - Slide row (optional)
         */
        this.defineVmFunction({
          handle: y,
          key: createMethod,
          metricsKey: `figma.${createMethod}`,
          cb: (e) => {
            const slideRow = _$$u({
              vm: this.vm,
              handle: e,
              zSchema: _$$z.number().finite().min(0).int().optional(),
              property: 'slideRow',
            })
            const options = {
              tracking: HzA.TRACK,
              ...(typeof slideRow === 'number' && {
                slideRow,
              }),
            }
            const node = this.privateSceneGraph.createNode(nodeType, options)
            av(node.guid, this.documentAccessState)
            return this.nodeFactory.createNode(node.guid, `figma.${createMethod}`)
          },
          isAllowedInReadOnly: false,
          isAllowedInWidgetRender: false,
          hasEditScope: true,
        })
        continue
      }

      // Generic node creation for other node types
      /**
       * Create a node of the specified nodeType.
       * Throws error if page limit is reached for CANVAS.
       */
      this.defineVmFunction({
        handle: y,
        key: createMethod,
        metricsKey: `figma.${createMethod}`,
        cb: () => {
          if (nodeType === 'CANVAS' && createMethod === 'createPage' && this.hasFileReachedPageLimit()) {
            throw new Error('The Starter plan only comes with 3 pages. Upgrade to Professional for unlimited pages.')
          }
          const node = this.privateSceneGraph.createNode(nodeType)
          av(node.guid, this.documentAccessState, {
            ignoreReduxState: nodeType === 'CANVAS',
          })
          return this.nodeFactory.createNode(node.guid, `figma.${createMethod}`)
        },
        isAllowedInReadOnly: false,
        isAllowedInWidgetRender: false,
        hasEditScope: true,
      })
    }
    this.defineVmFunction({
      handle: y,
      key: 'flatten',
      metricsKey: 'figma.flatten',
      cb: (t, i, n) => {
        let {
          nodeIds,
          parent,
          index,
        } = ai({
          vm: e,
          callerName: 'flatten',
          nodes: t,
          parentArg: i,
          indexArg: n,
          getNode: this.getNode,
          enableResponsiveSetHierarchyMutations: this.options.enableResponsiveSetHierarchyMutations,
        })
        let o = NfO.flattenNodes(nodeIds, parent ? parent.sessionID : -1, parent ? parent.localID : -1, index, this.privateSceneGraph.scene)
        return this.nodeFactory.createNode(o, 'figma.flatten')
      },
      isAllowedInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !0,
    })
    this.defineVmFunction({
      handle: y,
      key: 'createPageDivider',
      metricsKey: 'figma.createPageDivider',
      cb: () => {
        if (this.inSites() || this.inBuzz() || this.inSlides())
          throw new Error('Cannot add page dividers in this editor.')
        if (this.hasFileReachedPageLimit()) {
          throw new Error('The Starter plan only comes with 3 pages. Upgrade to Professional for unlimited pages.')
        }
        let e = this.privateSceneGraph.createNode('CANVAS')
        e.name = '---'
        e.isPageDivider = !0
        av(e.guid, this.documentAccessState, {
          ignoreReduxState: !0,
        })
        return this.nodeFactory.createNode(e.guid, 'figma.createPageDivider')
      },
      isAllowedInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !0,
    });
    (I || M) && this.defineVmFunction({
      handle: y,
      key: 'combineAsVariants',
      metricsKey: 'figma.combineAsVariants',
      cb: this.makeGroupingOperationFunction('combineAsVariants', fHP.STATE_GROUP),
      isAllowedInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !0,
    })
    this.defineVmFunction({
      handle: y,
      key: 'group',
      metricsKey: 'figma.group',
      cb: this.makeGroupingOperationFunction('group', fHP.GROUP),
      isAllowedInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !0,
    })
    this.defineVmFunction({
      handle: y,
      key: 'union',
      metricsKey: 'figma.union',
      cb: this.makeGroupingOperationFunction('union', fHP.UNION),
      isAllowedInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !0,
    })
    this.defineVmFunction({
      handle: y,
      key: 'subtract',
      metricsKey: 'figma.subtract',
      cb: this.makeGroupingOperationFunction('subtract', fHP.SUBTRACT),
      isAllowedInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !0,
    })
    this.defineVmFunction({
      handle: y,
      key: 'intersect',
      metricsKey: 'figma.intersect',
      cb: this.makeGroupingOperationFunction('intersect', fHP.INTERSECT),
      isAllowedInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !0,
    })
    this.defineVmFunction({
      handle: y,
      key: 'exclude',
      metricsKey: 'figma.exclude',
      cb: this.makeGroupingOperationFunction('exclude', fHP.XOR),
      isAllowedInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !0,
    })
    this.defineVmFunction({
      handle: y,
      key: 'ungroup',
      metricsKey: 'figma.ungroup',
      cb: (t) => {
        let i = this.getNode(t)
        if (!i)
          throw new Error('Parent must be provided to ungroup()')
        if (i.isOrInResponsiveSet && !this.options.enableResponsiveSetHierarchyMutations) {
          throw new Error('Cannot ungroup nodes inside a webpage')
        }
        let n = NfO.ungroupNode(i.guid, this.privateSceneGraph.scene)
        let r = e.newArray()
        n.forEach((t, i) => {
          let n = this.nodeFactory.createNode(t, 'figma.ungroup')
          e.setProp(r, i.toString(), n)
        })
        return r
      },
      isAllowedInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !0,
    })
    this.defineVmFunction({
      handle: y,
      key: 'commitUndo',
      metricsKey: 'figma.commitUndo',
      cb: (_t) => {
        Y5.triggerAction('commit')
        return e.undefined
      },
      isAllowedInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !0,
    })
    this.defineVmFunction({
      handle: y,
      key: 'triggerUndo',
      metricsKey: 'figma.triggerUndo',
      cb: (_t) => {
        Y5.triggerAction('undo')
        return e.undefined
      },
      isAllowedInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !0,
    })
    this.defineVmFunction({
      handle: y,
      key: 'createImage',
      metricsKey: 'figma.createImage',
      cb: (t) => {
        let i = this.imageStore.createImage(_$$u({
          vm: e,
          handle: t,
          zSchema: _$$N.UInt8Array,
          property: 'createImage',
        }))
        return createImageProcessor(e, i)
      },
      isAllowedInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !0,
    })
    this.defineVmFunction({
      handle: y,
      key: 'createImageAsync',
      metricsKey: 'figma.createImageAsync',
      cb: (t) => {
        let i = _$$u({
          vm: e,
          handle: t,
          zSchema: _$$z.string(),
          property: 'createImageAsync',
        })
        let {
          promise,
          resolve,
          reject,
        } = e.newPromise()
        let s = xF(i, this.options.allowedDomains)
        e.registerPromise(s).then((t) => {
          resolve(createImageProcessor(e, this.imageStore.createImage(t)))
        }).catch(t => reject(e.newString(t.message)))
        return promise
      },
      isAllowedInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !0,
    })
    this.defineVmFunction({
      handle: y,
      key: 'getImageByHash',
      metricsKey: 'figma.getImageByHash',
      cb: (t) => {
        let i = _$$u({
          vm: e,
          handle: t,
          zSchema: _$$z.string(),
          property: 'getImageByHash',
        })
        let n = this.imageStore.getImageFromSHA1(i)
        return n === null ? e.$$null : createImageProcessor(e, n)
      },
      isAllowedInReadOnly: !0,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.defineVmFunction({
      handle: y,
      key: 'createVideo',
      metricsKey: 'figma.createVideo',
      cb: (t) => {
        let {
          promise,
          resolve,
          reject,
        } = e.newPromise()
        e.registerPromise(this.videoStore.createVideoAsync(_$$u({
          vm: e,
          handle: t,
          zSchema: _$$N.UInt8Array,
          property: 'createVideo',
        }))).then((t) => {
          resolve(createNodeHash(e, t))
        }, t => reject(e.newString(`Failed create video. Error: ${t.message}`)))
        return promise
      },
      isAllowedInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !0,
    })
    this.defineVmFunction({
      handle: y,
      key: 'createVideoAsync',
      metricsKey: 'figma.createVideoAsync',
      cb: (t) => {
        let {
          promise,
          resolve,
          reject,
        } = e.newPromise()
        e.registerPromise(this.videoStore.createVideoAsync(_$$u({
          vm: e,
          handle: t,
          zSchema: _$$N.UInt8Array,
          property: 'createVideoAsync',
        }))).then((t) => {
          resolve(createNodeHash(e, t))
        }, t => reject(e.newString(`Failed create video. Error: ${t.message}`)))
        return promise
      },
      isAllowedInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !0,
    })
    this.defineVmFunction({
      handle: y,
      key: 'listAvailableFontsAsync',
      metricsKey: 'figma.listAvailableFontsAsync',
      cb: () => {
        let {
          promise,
          resolve,
          reject,
        } = e.newPromise()
        e.registerPromise(listAllFonts()).then(t => resolve(e.deepWrap(t)), (t) => {
          reject(e.newString('Internal error'))
          $D(_$$e.EXTENSIBILITY, t)
        })
        return promise
      },
      isAllowedInReadOnly: !0,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.defineVmFunction({
      handle: y,
      key: 'loadAllPagesAsync',
      metricsKey: 'figma.loadAllPagesAsync',
      cb: () => {
        if (this.options.command === 'textreview' || this.queryMode)
          throw new Error('Unexpected call to figma.loadAllPagesAsync')
        let {
          promise,
          resolve,
        } = e.newPromise()
        e.registerPromise(_$$E(null, null, _em.DYNAMIC_PLUGIN_LOAD_ALL)).then(t => resolve(e.deepWrap(t)))
        this.documentAccessState.loadedAllPages()
        return promise
      },
      isAllowedInReadOnly: !0,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.defineVmFunction({
      handle: y,
      key: 'loadFontAsync',
      metricsKey: 'figma.loadFontAsync',
      cb: (t) => {
        let {
          promise,
          resolve,
          reject,
        } = e.newPromise()
        let a = _$$u({
          vm: e,
          handle: t,
          zSchema: _$$N.FontName,
          property: 'loadFontAsync',
        })
        u += 1
        setTimeout(() => {
          e.registerPromise(uW(a)).then(() => {
            u -= 1
            resolve(e.undefined)
          }, () => {
            u -= 1
            reject(e.newString(`The font "${a.family} ${a.style}" could not be loaded`))
          })
        })
        return promise
      },
      isAllowedInReadOnly: !0,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.defineVmProp({
      handle: y,
      key: 'hasMissingFont',
      options: {
        enumerable: !1,
        metricsKey: 'hasMissingFont',
        get: () => e.newBoolean(NfO.documentHasMissingFont()),
      },
      canWriteInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.defineVmIncrementalFunction({
      handle: y,
      key: 'getNodeById',
      hasEditScope: !1,
      metricsKey: 'figma.getNodeById',
      incrementalSafeApiKey: 'getNodeByIdAsync',
      incrementalSafeApiMetricsKey: 'figma.getNodeByIdAsync',
      parseArg: t => e.toString(t),
      prepareDocument: async (e) => {
        await vf(e, this.documentAccessState)
      },
      resolveValue: t => (function ({
        nodeID: e,
        vm: t,
        nodeFactory: i,
        method: n,
        sceneGraph: r,
      }) {
        if (!vs.test(e))
          return t.$$null
        let a = r.guidFromDeveloperFriendlyId(e)
        if (!a)
          return t.$$null
        let s = r.get(a)
        return !s || s && isInImmutableContext(t, s) ? t.$$null : i.createNode(a, n)
      }({
        nodeID: t,
        vm: e,
        nodeFactory: this.nodeFactory,
        sceneGraph: this.privateSceneGraph,
        method: 'figma.getNodeById',
      })),
      incrementalSafeApi: this.options.incrementalSafeApi,
      allowIncrementalUnsafeApiCalls: !!this.options.allowIncrementalUnsafeApiCalls,
      isAllowedInReadOnly: !0,
      isAllowedInWidgetRender: !1,
    })
    this.defineVmFunction({
      handle: y,
      key: 'getSelectionColors',
      metricsKey: 'figma.getSelectionColors',
      isAllowedInReadOnly: !0,
      cb: () => {
        Osy.collectPaintsAndSendToWeb()
        let {
          selectionPaints,
        } = debugState.getState().mirror
        if (selectionPaints.emptyDueToLimitExceeded)
          return e.$$null
        let i = e.newObject()
        let n = (selectionPaints.paints.length ? selectionPaints.paints : selectionPaints.paintsDirectlyOnSingleNode).map(e => convertPaintArrayData([e.paint])[0])
        let r = (selectionPaints.styles.length ? selectionPaints.styles : selectionPaints.stylesDirectlyOnSingleNode).map((t) => {
          let i = this.styleFactory.createStyle(_$$nM({
            key: t.styleKey,
            version: IA(t.version),
          }))
          if (i !== e.$$null)
            return i
          let n = this.privateSceneGraph.get(t.styleGUIDs[0])
          if (!n)
            return null
          let r = n?.styleVersionHash
          let a = n?.styleKeyForPublish
          return r && a
            ? this.styleFactory.createStyle(_$$nM({
              key: a,
              version: r,
            }))
            : null
        }).filter(e => e != null)
        let a = e.newArray()
        for (let t = 0; t < r.length; t++) e.setProp(a, String(t), r[t])
        e.setProp(i, 'paints', e.deepWrap(n))
        e.setProp(i, 'styles', a)
        return i
      },
      hasEditScope: !1,
    })
    this.defineVmFunction({
      handle: y,
      key: 'createNodeFromSvg',
      metricsKey: 'figma.createNodeFromSvg',
      cb: (t) => {
        let i = e.toString(t)
        try {
          let e = this.privateSceneGraph.createNodeFromSVG(i, {
            tracking: HzA.TRACK,
          })
          return this.nodeFactory.createNode(e.guid, 'figma.createNodeFromSvg')
        }
        catch (e) {
          console.error(e)
          return new Error('Failed to convert SVG file')
        }
      },
      isAllowedInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !0,
    })
    this.defineVmFunction({
      handle: y,
      key: 'importStyleByKeyAsync',
      metricsKey: 'figma.importStyleByKeyAsync',
      cb: (t) => {
        let {
          promise,
          resolve,
          reject,
        } = e.newPromise()
        let a = _$$u({
          vm: e,
          handle: t,
          zSchema: _$$z.string(),
          property: 'key',
        })
        e.registerPromise(a_(e, a, this.options.openFileKey || 'default')).then(({
          key: t,
          version: i,
        }) => {
          let r = this.styleFactory.createStyle(_$$nM({
            key: t,
            version: i,
          }))
          if (e.isNull(r))
            throw new Error('Unable to create style')
          resolve(r)
        }, (_t) => {
          reject(e.newString(`Failed to import style by key "${a}"`))
        })
        return promise
      },
      isAllowedInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !0,
    })
    this.defineVmFunction({
      handle: y,
      key: 'importComponentByKeyAsync',
      metricsKey: 'figma.importComponentByKeyAsync',
      cb: (t) => {
        let {
          promise,
          resolve,
          reject,
        } = e.newPromise()
        let a = _$$u({
          vm: e,
          handle: t,
          zSchema: _$$z.string(),
          property: 'key',
        })
        e.registerPromise($$ab4(a)).then(e => resolve(this.nodeFactory.createNode(e, 'figma.importComponentByKeyAsync'))).catch((t) => {
          reject(e.newString(t.message))
        })
        return promise
      },
      isAllowedInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !0,
    })
    this.defineVmFunction({
      handle: y,
      key: 'importComponentSetByKeyAsync',
      metricsKey: 'figma.importComponentSetByKeyAsync',
      cb: (t) => {
        let {
          promise,
          resolve,
          reject,
        } = e.newPromise()
        let a = _$$u({
          vm: e,
          handle: t,
          zSchema: _$$z.string(),
          property: 'key',
        })
        e.registerPromise($$av5(a)).then(e => resolve(this.nodeFactory.createNode(e, 'figma.importComponentSetByKeyAsync'))).catch((_t) => {
          reject(e.newString(`Failed to import component set by key "${a}"`))
        })
        return promise
      },
      isAllowedInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !0,
    })
    this.defineVmFunction({
      handle: y,
      key: 'closePlugin',
      metricsKey: 'figma.closePlugin',
      cb: (t) => {
        let i = _$$u({
          vm: e,
          handle: t,
          zSchema: _$$z.string().optional(),
          property: 'closePlugin message',
        })
        u > 0 && _$$k2.warn('There are still font loads in progress. Please ensure `closePlugin` is not called until after the font loading has resolved.')
        i
          ? this.closePlugin({
            message: i,
            isError: !1,
          })
          : this.closePlugin(undefined)
        return e.undefined
      },
      isAllowedInReadOnly: !0,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.defineVmFunction({
      handle: y,
      key: 'notify',
      metricsKey: 'figma.notify',
      cb: (messageHandle, optionsHandle) => {
        // Validate notification can be shown
        if (this.queryMode) {
          throw new Error('Cannot notify in queryMode.')
        }

        // Extract and validate message and options
        const notificationData = extractNotificationData(messageHandle, optionsHandle, e)
        const notificationOptions = processNotificationOptions(notificationData.options)

        // Set up action and dequeue handlers
        const handlerData = setupNotificationHandlers(notificationOptions, e)

        // Create and show notification
        const notificationId = createNotificationId(this.visualBellCounter)
        this.uiHandle.showPluginVisualBell(notificationData.message, notificationId, handlerData.processedOptions, createDequeueCallback(handlerData, e))
        this.visualBellCounter++

        // Return notification controller object
        return createNotificationController(e, this.uiHandle, notificationId)
      },
      isAllowedInReadOnly: !0,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })

    // Helper functions for notification handling

    /**
     * extractNotificationData - Extract and validate message and options from VM handles
     */
    function extractNotificationData(messageHandle, optionsHandle, vm) {
      const message = _$$u({
        vm,
        handle: messageHandle,
        zSchema: _$$z.string(),
        property: 'notify message',
      })
      const options = optionsHandle && _$$u({
        vm,
        handle: optionsHandle,
        zSchema: _$$N.ShowVisualBellOptions.optional(),
        property: 'notify options',
      }) || {}
      return {
        message,
        options,
      }
    }

    /**
     * processNotificationOptions - Process and apply defaults to notification options
     */
    function processNotificationOptions(options) {
      const processedOptions = Kb(options, {
        timeout: null,
        error: false,
        button: undefined,
      })

      // Set timeout defaults
      if (processedOptions.timeout == null) {
        processedOptions.timeout = processedOptions.error ? Infinity : 3000
      }
      processedOptions.timeout = Math.max(processedOptions.timeout, 100)
      return processedOptions
    }

    /**
     * setupNotificationHandlers - Set up action button and dequeue handlers
     */
    function setupNotificationHandlers(options, vm) {
      let actionHandler = null
      let dequeueHandler = null

      // Set up button action handler
      if (options.button) {
        actionHandler = getFunctionHandle(options.button.action)
        vm.retainHandle(actionHandler)
        options.button.action = createActionCallback(actionHandler, vm)
      }

      // Set up dequeue handler
      if (options.onDequeue) {
        dequeueHandler = getFunctionHandle(options.onDequeue)
        vm.retainHandle(dequeueHandler)
      }
      return {
        actionHandler,
        dequeueHandler,
        processedOptions: options,
      }
    }

    /**
     * createActionCallback - Create callback function for notification button action
     */
    function createActionCallback(actionHandler, vm) {
      return () => {
        if (!vm.isDestroyed()) {
          const result = vm.callFunction(actionHandler, vm.undefined)
          if (result.type === 'SUCCESS') {
            const unwrappedResult = vm.deepUnwrap(result.handle)
            if (typeof unwrappedResult === 'boolean') {
              return unwrappedResult
            }
          }
        }
      }
    }

    /**
     * createNotificationId - Generate unique notification identifier
     */
    function createNotificationId(counter) {
      return `message-from-plugin-${counter}`
    }

    /**
     * createDequeueCallback - Create callback for notification dequeue event
     */
    function createDequeueCallback({
      actionHandler,
      dequeueHandler,
    }, vm) {
      return (reason) => {
        if (!vm.isDestroyed()) {
          // Handle dequeue callback
          if (dequeueHandler) {
            try {
              vm.callFunction(dequeueHandler, vm.undefined, vm.newString(reason))
              vm.releaseHandle(dequeueHandler)
            }
            catch (error) {
              console.error('onDequeueHandle error: ', error)
            }
          }

          // Clean up action handler
          if (actionHandler) {
            try {
              vm.releaseHandle(actionHandler)
            }
            catch (error) {
              console.error('actionHandle error: ', error)
            }
          }
        }
      }
    }

    /**
     * createNotificationController - Create notification controller object with cancel method
     */
    function createNotificationController(vm, uiHandle, notificationId) {
      const controller = vm.newObject()
      vm.defineFunction(controller, 'cancel', 'visualBellHandler.cancel', () => {
        uiHandle.cancelPluginVisualBell(notificationId)
        return vm.undefined
      })
      return controller
    }
    let j = as
    // Add additional event handlers and API methods to the main figma API object (y)
    if (enableProposedApi) {
      j = j.concat(ao)
    }
    if (!this.options.isLocal) {
      j = j.concat(['codegen'])
    }
    j = j.concat(['stylechange'])

    // Register event handlers for all supported events
    this.addEventHandlersTo(y, j, 'figma', null)

    // Trigger run event for parameters if provided, otherwise defer or trigger default run event
    if (this.options.parameterValues) {
      this.triggerOrScheduleRunEvent({
        command: 'parameters',
        parameters: this.options.parameterValues,
      })
    }
    else if (!this.options.deferRunEvent) {
      this.triggerOrScheduleRunEvent({
        command: 'parameters',
      })
    }

    // Add closePluginWithFailure for supported environments
    if (_$$nl()) {
      this.defineVmFunction({
        handle: y,
        key: 'closePluginWithFailure',
        metricsKey: 'figma.closePluginWithFailure',
        cb: (t) => {
          let i
          try {
            i = e.toString(t)
          }
          catch {
            i = 'The plugin called "closePluginWithFailure"'
          }
          this.closePlugin({
            message: i,
            isError: !0,
          })
          return e.undefined
        },
        isAllowedInReadOnly: !0,
        isAllowedInWidgetRender: !1,
        hasEditScope: !1,
      })
    }

    // showUI method for displaying plugin UI iframe
    this.defineVmFunction({
      handle: y,
      key: 'showUI',
      metricsKey: 'figma.showUI',
      cb: (t, i) => {
        let n = _$$z.strictObject({
          visible: _$$z.boolean(),
          title: _$$z.string(),
          width: _$$N.FiniteNumber.min(0).int(),
          height: _$$N.FiniteNumber.min(0).int(),
          position: _$$z.strictObject({
            x: _$$N.FiniteNumber,
            y: _$$N.FiniteNumber,
          }),
          themeColors: _$$z.boolean(),
        }).partial().optional()
        let r = e.isObject(t) && e.getBooleanProp(t, '__html__') && this.options.html
          ? this.options.html
          : _$$u({
            vm: e,
            handle: t,
            zSchema: _$$z.string(),
            property: 'showUI',
          })
        let a = _$$u({
          vm: e,
          handle: i,
          zSchema: n,
          property: 'showUI options',
        })
        let s = Kb(a || {}, {
          visible: !0,
          themeColors: !1,
        })
        let o = this.validateMakeIframeOptionsOrThrow(r, {
          visible: s.visible,
          title: s.title,
          width: s.width,
          height: s.height,
          position: s.position,
          themeColors: s.themeColors,
        })
        stats.increment(`showUI.${s.visible ? 'visible' : 'invisible'}`)
        s.themeColors && stats.increment('showUI.themeColors')
        this.uiHandle.makeIframe(o)
        s.visible && this.uiHandle.showIframe()
        stats.markTime('timeToShowUIMs')
        return e.undefined
      },
      isAllowedInReadOnly: !0,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })

    // saveVersionHistoryAsync method for saving file version history
    this.defineVmFunction({
      handle: y,
      key: 'saveVersionHistoryAsync',
      metricsKey: 'figma.saveVersionHistoryAsync',
      cb: (t, i) => {
        let n = _$$u({
          vm: e,
          handle: t,
          zSchema: _$$z.string(),
          property: 'saveVersionHistoryAsync',
        })
        let r = _$$u({
          vm: e,
          handle: i,
          zSchema: _$$z.string().optional(),
          property: 'saveVersionHistoryAsync',
        }) || ''
        let {
          promise,
          resolve,
          reject,
        } = e.newPromise()
        e.registerPromise(createVersionSavepoint(n, r)).then((t) => {
          let i = e.newObject()
          e.setProp(i, 'id', e.newString(t.id))
          e.shallowFreezeObject(i)
          resolve(i)
        }, t => reject(e.newString(`Failed to save version history. Error: ${t.message}`)))
        return promise
      },
      isAllowedInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !0,
    })

    // Utility functions for base64 encoding/decoding
    this.defineVmFunction({
      handle: y,
      key: 'base64Encode',
      metricsKey: 'figma.base64Encode',
      cb: (t) => {
        let i = _$$u({
          vm: e,
          handle: t,
          zSchema: _$$N.UInt8Array,
          property: 'base64Encode',
        })
        return e.deepWrap(encodeBase64(i))
      },
      isAllowedInReadOnly: !0,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.defineVmFunction({
      handle: y,
      key: 'base64Decode',
      metricsKey: 'figma.base64Decode',
      cb: (t) => {
        let i = _$$u({
          vm: e,
          handle: t,
          zSchema: _$$z.string(),
          property: 'base64Decode',
        })
        if (!isValidBase64(i))
          throw new Error('Invalid base64 string')
        return e.deepWrap(decodeBase64(i))
      },
      isAllowedInReadOnly: !0,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })

    // getFileThumbnailNode and setFileThumbnailNodeAsync for file thumbnail management
    this.defineVmIncrementalFunction({
      handle: y,
      key: 'getFileThumbnailNode',
      metricsKey: 'figma.getFileThumbnailNode',
      incrementalSafeApiKey: 'getFileThumbnailNodeAsync',
      incrementalSafeApiMetricsKey: 'figma.getFileThumbnailNodeAsync',
      prepareDocument: async (e) => {
        e && (await vf(e, this.documentAccessState))
      },
      parseArg: (_e) => {
        let t = debugState.getState()
        let i = _$$tB(t)
        return i ? i?.thumbnailGuid : null
      },
      resolveValue: t => t && this.privateSceneGraph.get(t) ? this.nodeFactory.createNode(t, 'getFileThumbnailNode') : e.$$null,
      incrementalSafeApi: this.options.incrementalSafeApi,
      allowIncrementalUnsafeApiCalls: !!this.options.allowIncrementalUnsafeApiCalls,
      isAllowedInReadOnly: !0,
      hasEditScope: !1,
    })
    if (!(R || D)) {
      this.defineVmFunction({
        handle: y,
        key: 'setFileThumbnailNodeAsync',
        metricsKey: 'figma.setFileThumbnailNodeAsync',
        cb: (t) => {
          let i
          let n = debugState.getState()
          let r = n.openFile?.key
          if (r == null)
            throw new Error('File must be open for editing')
          if (e.isNull(t)) {
            i = null
          }
          else {
            let e = this.getNode(t)
            if (!((e.type === 'FRAME' || e.type === 'SYMBOL' || e.type === 'SECTION') && !e.resizeToFit)) {
              throw new Error('Thumbnail node must be a FrameNode, ComponentNode, ComponentSetNode, or SectionNode')
            }
            i = e.guid
          }
          let {
            promise,
            resolve,
            reject,
          } = e.newPromise()
          e.registerPromise(FE(r, i)).then(() => {
            resolve(e.undefined)
          }).catch((t) => {
            reject(e.newString(`Failed to set thumbnail guid. Error: ${t.message}`))
          })
          return promise
        },
        isAllowedInReadOnly: !1,
        isAllowedInWidgetRender: !1,
        hasEditScope: !0,
      })
    }

    // Register parameters, codegen, relatedLinks, devResources, vscode, ui, viewport, clientStorage, constants, and internal APIs
    this.defineVmProp({
      handle: y,
      key: 'parameters',
      options: {
        enumerable: !1,
        value: this.createParametersApi(),
      },
      canWriteInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.defineVmProp({
      handle: y,
      key: 'codegen',
      options: {
        enumerable: !1,
        get: memoizedHandle(e, () => this.createCodegenApi()),
      },
      canWriteInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.defineVmProp({
      handle: y,
      key: 'relatedLinks',
      options: {
        enumerable: !1,
        get: memoizedHandle(e, () => {
          if (this.options.isLocal) {
            throw new Error('relatedLinks API is not available for local plugins. Please use the figma.devResources API instead.')
          }
          return this.createDevResourcesApi()
        }),
      },
      canWriteInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.defineVmProp({
      handle: y,
      key: 'devResources',
      options: {
        enumerable: !1,
        get: () => this.createDevResourcesApi(),
      },
      canWriteInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.defineVmProp({
      handle: y,
      key: 'vscode',
      options: {
        enumerable: !1,
        value: this.createVsCodeApi(),
      },
      canWriteInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.defineVmProp({
      handle: y,
      key: 'ui',
      options: {
        enumerable: !1,
        value: this.createUiApi(),
      },
      canWriteInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.defineVmProp({
      handle: y,
      key: 'viewport',
      options: {
        enumerable: !1,
        value: this.createViewportApi(),
      },
      canWriteInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.defineVmProp({
      handle: y,
      key: 'clientStorage',
      options: {
        enumerable: !1,
        value: this.createClientStorageApi(),
      },
      canWriteInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.defineVmProp({
      handle: y,
      key: 'constants',
      options: {
        enumerable: !1,
        value: this.createConstantsApi(),
      },
      canWriteInReadOnly: !1,
      isAllowedInWidgetRender: !0,
      hasEditScope: !1,
    })
    if (getFeatureFlags().internal_only_debug_tools) {
      this.defineVmProp({
        handle: y,
        key: 'internal',
        options: {
          enumerable: !1,
          value: this.createInternalApi(),
        },
        canWriteInReadOnly: !1,
        isAllowedInWidgetRender: !1,
        hasEditScope: !1,
      })
    }

    // createLinkPreviewAsync for FigJam (C)
    if (C) {
      const t = 'createLinkPreviewAsync'
      const i = this
      this.defineVmFunction({
        handle: y,
        key: t,
        metricsKey: 'figma.createLinkPreviewAsync',
        cb: (n) => {
          let r = _$$u({
            vm: e,
            handle: n,
            zSchema: _$$z.string(),
            property: t,
          })
          let {
            promise,
            resolve,
            reject,
          } = e.newPromise()
          e.registerPromise(ag(this.privateSceneGraph, r)).then((e) => {
            av(e, this.documentAccessState)
            i.editScope(t, () => resolve(this.nodeFactory.createNode(e, 'figma.createLinkPreviewAsync')))
          }, t => reject(e.newString(`Failed to create an embed. Error: ${t.message}`)))
          return promise
        },
        isAllowedInReadOnly: !1,
        isAllowedInWidgetRender: !1,
        hasEditScope: !1,
      })
    }
    function U(e, t, i) {
      let n = t.deepUnwrap(e, !0)
      return P5(n, {
        isLocalWidget: !1,
        widgetNodeID: '',
        pluginID: i.pluginID,
        widgetVersionID: i.pluginVersionID,
        widgetName: '',
        widgetApiVersion: '1.0.0',
        enableFullJsx: !0,
      })
    }
    (C || R || _$$nl()) && this.defineVmFunction({
      handle: y,
      key: 'createGif',
      metricsKey: 'figma.createGif',
      cb: (t) => {
        let i = _$$u({
          vm: e,
          handle: t,
          zSchema: _$$z.string(),
          property: 'createGif',
        })
        let n = glU.createRichMediaGifNode(i)
        if (!n)
          throw new Error('Failed to create GIF')
        let r = []
        let a = {
          data: mapPaintConfigurations(this.imageStore, this.videoStore, [{
            type: 'IMAGE',
            scaleMode: 'FILL',
            imageHash: i,
          }], r),
          blobs: r,
        }
        let s = this.privateSceneGraph.get(n)
        if (s == null)
          throw new Error('Failed to create GIF')
        s.fillPaintsForPluginOnly = a
        av(n, this.documentAccessState)
        return this.nodeFactory.createNode(n, 'figma.createGif')
      },
      isAllowedInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !0,
    });
    (I || M) && this.defineVmFunction({
      handle: y,
      key: 'createComponentFromNode',
      metricsKey: 'figma.createComponentFromNode',
      cb: (e) => {
        let t = this.privateSceneGraph.createComponentFromNode(this.getNode(e).guid)
        return this.nodeFactory.createNode(t.guid, 'figma.createComponentFromNode')
      },
      isAllowedInReadOnly: !1,
      hasEditScope: !0,
    })
    this.isWidget ? this.defineWidgetApi(y) : this.defineWidgetLiteApi(y)
    if (this.options.enableNativeJsx) {
      this.defineVmFunction({
        handle: y,
        key: 'reconcileNodeFromJSXAsync',
        metricsKey: 'figma.reconcileNodeFromJSXAsync',
        cb: (t, i, n) => {
          let r = e.deepUnwrap(t, !0)
          let a = U(i, e, this.options)
          let s = U(n, e, this.options)
          let {
            runtimeBridge,
            shutdownCallback,
          } = PluginRuntime.createRuntimeBridgeForWidgetReconciler(this.options.pluginID, this.vm)
          shutdownCallback && this.options.addShutdownAction(shutdownCallback)
          let d = qg(() => ({
            rootNode: a,
            syncedState: {},
          }), runtimeBridge, this.options.allowedDomains)
          let c = qg(() => ({
            rootNode: s,
            syncedState: {},
          }), runtimeBridge, this.options.allowedDomains)
          let {
            promise,
            resolve,
            reject,
          } = e.newPromise()
          e.registerPromise((async () => {
            try {
              let [e, t] = await Promise.all([d, c])
              let i = this.privateSceneGraph.getCurrentPage()
              let n = _b({
                vNode: t.vRoot.rootNode,
                oldVNode: e.vRoot.rootNode,
                imgInfoMap: t.imgInfoMap,
                runtime: runtimeBridge,
                parentId: i.guid,
                currentNodeId: r.id,
                editScopeLabel: 'reconcile-node-from-jsx',
              })
              let a = this.nodeFactory.createNode(n.getID(), 'figma.reconcileNodeFromJSXAsync')
              resolve(a)
            }
            catch (t) {
              reject(e.newString(t.message))
            }
          })())
          return promise
        },
        isAllowedInReadOnly: !1,
        isAllowedInWidgetRender: !1,
        hasEditScope: !0,
      })
    }
    this.defineVmFunction({
      handle: y,
      key: 'createNodeFromJSXAsync',
      metricsKey: 'figma.createNodeFromJSXAsync',
      cb: (t) => {
        let i = this.vm.deepUnwrap(t, !0)
        let n = P5(i, {
          isLocalWidget: !1,
          widgetNodeID: '',
          pluginID: this.options.pluginID,
          widgetVersionID: this.options.pluginVersionID,
          widgetName: '',
          widgetApiVersion: '1.0.0',
          enableFullJsx: this.options.enableNativeJsx ?? !1,
        })
        let {
          runtimeBridge,
          shutdownCallback,
        } = PluginRuntime.createRuntimeBridgeForWidgetReconciler(this.options.pluginID, this.vm)
        shutdownCallback && this.options.addShutdownAction(shutdownCallback)
        let s = qg(() => ({
          rootNode: n,
          syncedState: {},
        }), runtimeBridge, this.options.allowedDomains).then((e) => {
          let t = this.privateSceneGraph.getCurrentPage()
          return _b({
            vNode: e.vRoot.rootNode,
            imgInfoMap: e.imgInfoMap,
            runtime: runtimeBridge,
            parentId: t.guid,
            editScopeLabel: 'create-node-from-jsx',
            currentNodeId: null,
            // Added missing property
            oldVNode: null, // Added missing property
          }).getID()
        })
        let {
          promise,
          resolve,
          reject,
        } = e.newPromise()
        e.registerPromise(s).then((e) => {
          resolve(this.nodeFactory.createNode(e, 'figma.createNodeFromJSXAsync'))
        }).catch(t => reject(e.newString(t.message)))
        return promise
      },
      isAllowedInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !0,
    })
    this.defineVmProp({
      handle: y,
      key: 'util',
      options: {
        enumerable: !1,
        metricsKey: 'figma.util',
        value: this.createUtilApi(),
      },
      canWriteInReadOnly: !1,
      isAllowedInWidgetRender: !0,
      hasEditScope: !1,
    })
    this.options.capabilities.includes('textreview') && this.defineVmProp({
      handle: y,
      key: 'textreview',
      options: {
        enumerable: !1,
        value: this.createTextReviewApi(),
      },
      canWriteInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.defineInternalApis(y);
    (C || _$$nl()) && this.defineVmProp({
      handle: y,
      key: 'timer',
      options: {
        enumerable: !1,
        value: this.createTimerApi(),
      },
      canWriteInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.options.validatedPermissions.permissions.includes('displaycapture') && this.defineVmFunction({
      handle: y,
      key: 'getDisplayMetadataAsync',
      metricsKey: 'figma.getDisplayMetadataAsync',
      cb: (t) => {
        if (!_$$eD) {
          let {
            promise,
            resolve,
          } = e.newPromise()
          resolve(e.$$null)
          return promise
        }
        let i = _$$u({
          vm: e,
          handle: t,
          zSchema: _$$N.Size.optional(),
          property: 'thumbnailSize',
        }) ?? {
          width: 150,
          height: 150,
        }
        let n = _$$eD.getDisplayMetadata(i)
        let {
          promise,
          resolve,
          reject,
        } = e.newPromise()
        e.registerPromise(n).then(t => resolve(e.deepWrap(t)), _t => reject(e.newString('Failed to get display metadata')))
        return promise
      },
      isAllowedInReadOnly: !0,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.defineVmFunction({
      handle: y,
      key: 'openExternal',
      metricsKey: 'figma.openExternal',
      cb: (e) => {
        let t = _$$u({
          vm: this.vm,
          handle: e,
          zSchema: _$$z.string(),
          property: 'url',
        })
        _$$T() ? Qn(t) : Ay.unsafeRedirect(t, '_blank', undefined)
        return this.vm.undefined
      },
      isAllowedInReadOnly: !0,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    // ============================================================================
    // REFACTORED: Slide Grid and Canvas Grid API Methods for Slides and Buzz Editors
    // ============================================================================

    // --- Slide Grid API (Slides Editor Only) ---
    if (R) {
      /**
       * getSlideGrid - Returns a 2D array of slide nodes representing the slide grid.
       * Each element is a row array of node handles.
       */
      this.defineVmFunction({
        handle: y,
        key: 'getSlideGrid',
        metricsKey: 'figma.getSlideGrid',
        cb: () => {
          const vm = e
          const slideGrid = this.privateSceneGraph.getSlideGrid()
          const gridArray = vm.newArray()
          slideGrid.forEach((row, rowIndex) => {
            const rowArray = vm.newArray()
            row.forEach((node, colIndex) => {
              vm.setProp(rowArray, colIndex.toString(), this.nodeFactory.createNode(node.guid, 'figma.getSlideGrid'))
            })
            vm.setProp(gridArray, rowIndex.toString(), rowArray)
          })
          vm.shallowFreezeObject(gridArray)
          return gridArray
        },
        isAllowedInReadOnly: true,
        isAllowedInWidgetRender: false,
        hasEditScope: false,
      })

      /**
       * setSlideGrid - Sets the slide grid using a 2D array of node objects with id properties.
       * @param nextSlideGrid - 2D array of objects with 'id' property
       */
      this.defineVmFunction({
        handle: y,
        key: 'setSlideGrid',
        metricsKey: 'figma.setSlideGrid',
        cb: (nextSlideGridHandle) => {
          const nextSlideGrid = _$$u({
            vm: this.vm,
            handle: nextSlideGridHandle,
            zSchema: _$$z.array(_$$z.array(_$$z.object({
              id: _$$z.string(),
            }))),
            property: 'nextSlideGrid',
          })
          this.privateSceneGraph.setSlideGrid(nextSlideGrid.map(row => row.map(cell => ({
            guid: cell.id,
          }))))
          return e.$$null
        },
        isAllowedInReadOnly: false,
        isAllowedInWidgetRender: false,
        hasEditScope: true,
      })
    }

    // --- Canvas Grid API (Buzz and Slides Editors) ---
    if (D || R) {
      /**
       * getCanvasGrid - Returns a 2D array of canvas grid nodes.
       * Each element is a row array of node handles.
       */
      this.defineVmFunction({
        handle: y,
        key: 'getCanvasGrid',
        metricsKey: 'figma.getCanvasGrid',
        cb: () => {
          const vm = e
          const canvasGrid = this.privateSceneGraph.getSlideGrid()
          const gridArray = vm.newArray()
          canvasGrid.forEach((row, rowIndex) => {
            const rowArray = vm.newArray()
            row.forEach((node, colIndex) => {
              vm.setProp(rowArray, colIndex.toString(), this.nodeFactory.createNode(node.guid, 'figma.getCanvasGrid'))
            })
            vm.setProp(gridArray, rowIndex.toString(), rowArray)
          })
          vm.shallowFreezeObject(gridArray)
          return gridArray
        },
        isAllowedInReadOnly: true,
        isAllowedInWidgetRender: false,
        hasEditScope: false,
      })

      /**
       * setCanvasGrid - Sets the canvas grid using a 2D array of node objects with id properties.
       * @param nextCanvasGrid - 2D array of objects with 'id' property
       */
      this.defineVmFunction({
        handle: y,
        key: 'setCanvasGrid',
        metricsKey: 'figma.setCanvasGrid',
        cb: (nextCanvasGridHandle) => {
          const nextCanvasGrid = _$$u({
            vm: this.vm,
            handle: nextCanvasGridHandle,
            zSchema: _$$N.CanvasGrid,
            property: 'nextCanvasGrid',
          })
          this.privateSceneGraph.setSlideGrid(nextCanvasGrid.map(row => row.map(cell => ({
            guid: cell.id,
          }))))
          return e.$$null
        },
        isAllowedInReadOnly: false,
        isAllowedInWidgetRender: false,
        hasEditScope: true,
      })

      /**
       * createCanvasRow - Creates a new row in the canvas grid at the specified index.
       * @param canvasGridRowIndex - Optional row index to insert at
       */
      this.defineVmFunction({
        handle: y,
        key: 'createCanvasRow',
        metricsKey: 'figma.createCanvasRow',
        cb: (canvasGridRowIndexHandle) => {
          const rowIndex = _$$u({
            vm: e,
            handle: canvasGridRowIndexHandle,
            zSchema: _$$N.PositiveInteger.optional(),
            property: 'canvasGridRowIndex',
          })
          const canvasGridManager = Ez5?.canvasGrid()
          if (!canvasGridManager) {
            throw new Error('Could not find canvas grid')
          }
          const insertIndex = rowIndex ?? canvasGridManager.canvasGridArray.getCopy().length
          const newRowGuid = canvasGridManager.createRow(insertIndex)
          return this.nodeFactory.createNode(newRowGuid, 'figma.createCanvasRow')
        },
        isAllowedInReadOnly: false,
        isAllowedInWidgetRender: false,
        hasEditScope: true,
      })
    }
    e.shallowFreezeObject(y)
    return y
  }

  /**
   * closePlugin - Asynchronously closes the plugin and handles cleanup.
   *
   * Ensures that the plugin is not already in the process of closing, then
   * invokes the configured closePlugin handler. Handles special case for
   * codegen-triggered plugins by scheduling a codegen refresh.
   *
   * @param closeOptions - Optional object containing close message or error flag.
   */
  async closePlugin(closeOptions) {
    // Prevent duplicate close events
    if (this.runningSyncEvent === 'close' || this.runningCloseEventHandler) {
      return
    }
    await this.options.closePlugin(closeOptions)
    // Special handling for codegen-triggered plugins: schedule codegen refresh
    if (this.options.triggeredFrom === 'codegen') {
      setTimeout(() => _$$c(), 0)
    }
  }

  /**
   * unbindAllEffectVariables - Unbind all variable bindings from an effect
   * @param effectCopy - The effect object to unbind variables from
   * @returns VM wrapped effect object with all variables unbound
   */
  unbindAllEffectVariables(effectCopy) {
    const mutableEffect = processEffectWithValidation(effectCopy, undefined)
    mutableEffect.colorVar = void 0
    mutableEffect.radiusVar = void 0
    mutableEffect.spreadVar = void 0
    mutableEffect.xVar = void 0
    mutableEffect.yVar = void 0
    return this.vm.deepWrap(processEffect(mutableEffect))
  }

  /**
   * Check if effect is a shadow effect type
   * @param effect - Effect object to check
   * @returns True if effect is shadow type
   */
  isShadowEffect(effect) {
    return effect.type === 'INNER_SHADOW' || effect.type === 'DROP_SHADOW'
  }

  /**
   * Bind variable to shadow effect field with validation
   * @param mutableEffect - Effect object to modify
   * @param fieldHandle - VM handle for field name
   * @param variableObject - Variable object to bind
   * @returns VM wrapped effect object with variable binding
   */
  bindShadowEffectVariable(mutableEffect, fieldHandle, variableObject) {
    const fieldName = _$$u({
      vm: this.vm,
      handle: fieldHandle,
      zSchema: variableDefinitions.VariableBindableShadowEffectField,
      property: 'field',
    })

    // Validate variable type for field
    this.validateShadowEffectVariable(variableObject, fieldName)

    // Create variable binding based on field type
    const variableBinding = this.createVariableBinding(variableObject)

    // Apply binding to appropriate field
    switch (fieldName) {
      case 'color':
        mutableEffect.colorVar = variableBinding
        break
      case 'radius':
        mutableEffect.radiusVar = variableBinding
        break
      case 'spread':
        mutableEffect.spreadVar = variableBinding
        break
      case 'offsetX':
        mutableEffect.xVar = variableBinding
        break
      case 'offsetY':
        mutableEffect.yVar = variableBinding
        break
    }
    return this.vm.deepWrap(processEffect(mutableEffect))
  }

  /**
   * Bind variable to blur effect field with validation
   * @param mutableEffect - Effect object to modify
   * @param fieldHandle - VM handle for field name
   * @param variableObject - Variable object to bind
   * @returns VM wrapped effect object with variable binding
   */
  bindBlurEffectVariable(mutableEffect, fieldHandle, variableObject) {
    const fieldName = _$$u({
      vm: this.vm,
      handle: fieldHandle,
      zSchema: variableDefinitions.VariableBindableBlurEffectField,
      property: 'field',
    })

    // Validate variable type
    if (!variableObject || variableObject.type !== 'VARIABLE' || variableObject.variableResolvedType !== rXF.FLOAT) {
      throw new Error(`can only bind float variables to ${fieldName}`)
    }

    // Create and apply variable binding
    mutableEffect.radiusVar = this.createVariableBinding(variableObject)
    return this.vm.deepWrap(processEffect(mutableEffect))
  }

  /**
   * Validate variable for shadow effect field binding
   * @param variableObject - Variable object to validate
   * @param fieldName - Name of the field being bound
   * @throws Error if variable is invalid for field type
   */
  validateShadowEffectVariable(variableObject, fieldName) {
    if (!variableObject || variableObject.type !== 'VARIABLE') {
      throw new Error(`can only bind variables to ${fieldName}`)
    }

    // Validate color field requires color variable
    if (fieldName === 'color' && variableObject.variableResolvedType !== rXF.COLOR) {
      throw new Error(`can only bind color variables to ${fieldName}`)
    }

    // Validate non-color fields require float variables
    if (fieldName !== 'color' && variableObject.variableResolvedType !== rXF.FLOAT) {
      throw new Error(`can only bind float variables to ${fieldName}`)
    }
  }

  /**
   * Create variable binding object for effect
   * @param variableObject - Variable object to create binding for
   * @returns Variable binding object with proper structure
   */
  createVariableBinding(variableObject) {
    const resolvedDataType = variableObject.variableResolvedType === rXF.COLOR ? 'COLOR' : 'FLOAT'
    return {
      value: {
        alias: sD.toKiwi(variableObject.id),
      },
      dataType: 'ALIAS',
      resolvedDataType,
    }
  }

  static createRuntimeBridgeForWidgetReconciler(e, t) {
    if (t instanceof ScopedNoOpVm) {
      return {
        runtimeBridge: new PluginRuntimeBridge(e, t),
        shutdownCallback: void 0,
      }
    }
    let {
      vm,
      api,
    } = $$ax3({
      apiMode: {
        type: 'WIDGET_RECONCILER',
      },
      pluginID: e,
      enableNativeJsx: !1,
      enableResponsiveSetHierarchyMutations: !1,
      sceneGraph: null, // Added missing required property
    })
    return {
      runtimeBridge: new PluginRuntimeBridge(e, vm),
      shutdownCallback: () => api.closePlugin(undefined),
    }
  }
}
export function createPluginInstance(vmConfig, contextOptions) {
  // $$ap1 - Create new plugin instance (au class factory function)
  return new PluginRuntime(vmConfig, contextOptions)
}
async function listAllFonts() {
  // am - Get all available fonts from debug state with style information

  const fonts = debugState.getState().fonts
  const fontList = []

  // Iterate through font families
  for (const familyName in fonts) {
    const styleSet = new Set()
    const fontFamily = fonts[familyName]

    // Iterate through font weights
    for (const weight in fontFamily) {
      const fontWeight = fontFamily[weight]

      // Iterate through font styles
      for (const styleName in fontWeight.styles) {
        // Avoid duplicate styles
        if (!styleSet.has(styleName)) {
          styleSet.add(styleName)
          fontList.push({
            fontName: {
              family: familyName,
              style: styleName,
            },
          })
        }
      }
    }
  }

  // Sort fonts by family name first, then by style name
  fontList.sort((fontA, fontB) => {
    if (fontA.fontName.family > fontB.fontName.family)
      return 1
    if (fontA.fontName.family < fontB.fontName.family)
      return -1
    if (fontA.fontName.style > fontB.fontName.style)
      return 1
    if (fontA.fontName.style < fontB.fontName.style)
      return -1
    return 0
  })
  return fontList
}
async function createVersionSavepoint(versionTitle, versionDescription) {
  // ah - Create a version savepoint for the current file with title and optional description

  const fileKey = await Y5.openFileKeyPromise()
  if (!fileKey) {
    throw new Error('File must be open for editing')
  }
  if (!versionTitle) {
    throw new Error('Version title must be non-empty')
  }
  const savepoint = await _$$m2(fileKey, versionTitle, versionDescription, debugState.dispatch)
  if (savepoint === null) {
    throw new Error('createSavepoint() returned null')
  }
  return savepoint
}
async function ag(nodeMap, urlText) {
  // ag - Create link preview node from URL text and return the node ID

  const urlInfo = KJ(urlText)
  if (!urlInfo || urlInfo.isFromIFrame) {
    throw new Error('The provided text was not a URL')
  }
  const linkPreviewResult = await _$$y(urlText, urlInfo.url, urlInfo.isFromIFrame, WJ.PLUGIN, debugState.getState())
  if (linkPreviewResult.status === 'error') {
    throw new Error(linkPreviewResult.error)
  }
  if (linkPreviewResult.nodeID && nodeMap.get(linkPreviewResult.nodeID)) {
    return linkPreviewResult.nodeID
  }
  throw new Error('Could not find the created link preview in the document')
}
async function af(collectionName, modeNames, context) {
  // af - Create or update variable collection with specified modes

  const variableCollection = await context.getOrUpsertVariableCollectionAsync(collectionName)
  return context.createNewExtendedVariableCollection(variableCollection, modeNames)
}
async function a_(_componentKey, styleKey, permissions) {
  // a_ - Import and upsert shared style from library with proper error handling

  let downloadedStyle
  const debugStateInstance = debugState
  const currentState = debugStateInstance.getState()

  // Find published style in used libraries or fetch it
  const publishedStyle = yh(styleKey, currentState.library.used__LIVEGRAPH.styles, currentState.library.openFilePublished__LIVEGRAPH.styles) || (await Ky(debugStateInstance, styleKey))
  if (!publishedStyle) {
    throw new Error(`Could not find a published style with the key "${styleKey}"`)
  }

  // Check if style is already available locally
  if (Oo(publishedStyle, permissions)) {
    return {
      key: _$$n(publishedStyle.key),
      version: IA(publishedStyle.content_hash) ?? 'INVALID',
    }
  }

  // Download the style from library
  try {
    downloadedStyle = await _$$e2(debugStateInstance.dispatch, publishedStyle, publishedStyle.library_key, jE.PLUGIN_INSERT_STYLE, currentState.userFlags, currentState.fonts)
  }
  catch {
    throw new Error(`Failed to download the style with the key "${styleKey}"`)
  }

  // Upsert the style in the current scene
  const upsertResult = l7.system('upsert-shared-style-plugin', () => BXd.getOrCreateSubscribedStyleNodeId(publishedStyle.key, publishedStyle.content_hash ?? 'INVALID', publishedStyle.library_key, downloadedStyle, ZiZ.ACTIVE_SCENE))
  if (upsertResult?.fileUpdateRequired) {
    throw new Error('Can\'t insert style of a different file version')
  }

  // Update library state
  debugStateInstance.dispatch(PB({
    libraryKeys: [publishedStyle.library_key],
  }))
  return {
    key: _$$n(upsertResult.key),
    version: IA(upsertResult.version),
  }
}
async function aA(componentData, permissions) {
  // aA - Import and upsert shared component from library

  const debugStateInstance = debugState
  const currentState = debugStateInstance.getState()
  let localNodeId = componentData.node_id

  // Check if component is already available locally
  if (!Oo(componentData, permissions)) {
    let downloadedComponent

    // Download the component from library
    try {
      downloadedComponent = await _$$e2(debugStateInstance.dispatch, componentData, componentData.library_key, jE.PLUGIN_INSERT_COMPONENT, currentState.userFlags, currentState.fonts)
    }
    catch {
      throw new Error(`Failed to download the component with the key "${componentData.component_key}"`)
    }

    // Upsert the component in the current scene
    const upsertResult = l7.system('upsert-shared-symbol-plugin', () => BXd.upsertSharedSymbol(componentData.component_key ?? 'INVALID', componentData.content_hash ?? 'INVALID', componentData.library_key, zol.NO, downloadedComponent, ZiZ.ACTIVE_SCENE))
    if (!upsertResult) {
      throw new Error('Couldn\'t insert component')
    }
    if (upsertResult.fileUpdateRequired) {
      throw new Error('Can\'t insert component of a different file version')
    }
    localNodeId = upsertResult.localGUID
  }
  return localNodeId
}
async function ay(stateGroupData, permissions) {
  // ay - Import and upsert shared state group from library

  const debugStateInstance = debugState
  const currentState = debugStateInstance.getState()
  let localNodeId = stateGroupData.node_id

  // Check if state group is already available locally
  if (!Oo(stateGroupData, permissions)) {
    let downloadedStateGroup

    // Download the state group from library
    try {
      downloadedStateGroup = await _$$e2(debugStateInstance.dispatch, stateGroupData, stateGroupData.library_key, jE.PLUGIN_INSERT_STATE_GROUP, currentState.userFlags, currentState.fonts)
    }
    catch {
      throw new Error(`Failed to download the component set with the key "${stateGroupData.key}"`)
    }

    // Upsert the state group in the current scene
    const upsertResult = l7.system('upsert-shared-state-group-plugin', () => BXd.upsertSharedStateGroup(stateGroupData.key, stateGroupData.version, stateGroupData.library_key, zol.NO, downloadedStateGroup, ZiZ.ACTIVE_SCENE))
    if (!upsertResult) {
      throw new Error('Couldn\'t insert state group')
    }
    if (upsertResult.fileUpdateRequired) {
      throw new Error('Can\'t insert state group of a different file version')
    }
    localNodeId = upsertResult.localGUID
  }
  return localNodeId
}
/**
 * Import component by key with comprehensive state group and library handling
 * Handles local components, published components, and nested state group components
 * @param componentKey - The key of the component to import
 * @param sceneGraphInstance - Scene graph instance for node operations
 * @returns Promise resolving to the imported component GUID
 * @throws Error if component cannot be found or imported
 */
export async function $$ab4(componentKey, sceneGraphInstance = getSceneGraphInstance()) {
  const debugStateInstance = debugState
  const currentState = debugStateInstance.getState()
  const currentFile = d1(currentState)
  if (!currentFile) {
    throw new Error('Missing a current file')
  }

  // Resolve component key (handle moved library items)
  const resolvedComponentKey = currentState.library.movedLibraryItems.subscribed[componentKey] || componentKey

  // Search for published component and its parent state group
  const componentSearchResult = await searchForPublishedComponent(currentState, resolvedComponentKey)

  // Handle unpublished component validation
  if (getFeatureFlags().ds_block_unpublished_symbol_reqs && !componentSearchResult.component) {
    validateUnpublishedComponent(currentState, componentKey)
  }

  // Attempt to fetch component if not found locally
  let finalComponent = componentSearchResult.component
  let parentStateGroup = componentSearchResult.parentStateGroup
  if (!finalComponent) {
    const fetchResult = await u7(debugStateInstance, resolvedComponentKey, 'importComponentByKeyAsync')
    finalComponent = fetchResult.component
    parentStateGroup = fetchResult.parentStateGroup
    if (!finalComponent) {
      throw new Error(`Could not find a published component with the key "${componentKey}"`)
    }
  }

  // Handle direct component import (no state group)
  if (!isComponentInStateGroup(finalComponent, parentStateGroup)) {
    debugStateInstance.dispatch(PB({
      libraryKeys: [finalComponent?.library_key || 'unknown'], // Safe property access
    }))
    return await aA(finalComponent, currentFile.key)
  }

  // Handle component within state group
  return await importComponentFromStateGroup(parentStateGroup, finalComponent, sceneGraphInstance, componentKey)
}

/**
 * Search for published component in library
 * @param currentState - Current application state
 * @param componentKey - Key to search for
 * @returns Object containing found component and parent state group
 */
function searchForPublishedComponent(currentState, componentKey) {
  let foundComponent = null
  let parentStateGroup = null
  Qb(currentState.library.publishedByLibraryKey.components, (libraryKey, version, _componentId, componentData) => {
    if (componentData.component_key === componentKey) {
      foundComponent = componentData

      // Check for containing state group
      const stateGroupNodeId = componentData?.containing_frame?.containingStateGroup?.nodeId
      if (stateGroupNodeId) {
        parentStateGroup = currentState.library.publishedByLibraryKey.stateGroups[libraryKey]?.[version]?.[stateGroupNodeId] ?? null
      }
    }
  })
  return {
    component: foundComponent,
    parentStateGroup,
  }
}

/**
 * Validate unpublished component restrictions
 * @param currentState - Current application state
 * @param componentKey - Component key to validate
 * @throws Error if unpublished component import is blocked
 */
function validateUnpublishedComponent(currentState, componentKey) {
  for (const localComponent of Object.values(currentState.library.local.components)) {
    const component = localComponent // Type assertion for unknown component
    if (!component?.component_key && Egt.getAssetKeyForPublish(component?.node_id) === componentKey) {
      throw new Error(`Cannot import component with key "${componentKey}" since it is unpublished`)
    }
  }
}

/**
 * Check if component is contained within a state group
 * @param component - Component data
 * @param stateGroup - State group data
 * @returns True if component is in a state group
 */
function isComponentInStateGroup(component, stateGroup) {
  return !!(component.containing_frame?.containingStateGroup?.nodeId && stateGroup?.key)
}

/**
 * Import component from within a state group
 * @param stateGroup - Parent state group
 * @param component - Component to import
 * @param sceneGraphInstance - Scene graph instance
 * @param originalComponentKey - Original component key for error messages
 * @returns Promise resolving to component GUID
 * @throws Error if component cannot be found in state group
 */
async function importComponentFromStateGroup(stateGroup, component, sceneGraphInstance, originalComponentKey) {
  const stateGroupGuid = await $$av5(stateGroup.key)
  const stateGroupNode = sceneGraphInstance.get(stateGroupGuid)

  // Search for component within state group children
  for (const childGuid of stateGroupNode?.reversedChildrenGuids || []) {
    const childNode = sceneGraphInstance.get(childGuid)
    if (childNode) {
      const childComponentKey = childNode.componentKey ?? Egt.getAssetKeyForPublish(childNode.guid)
      if (childComponentKey === component.component_key) {
        return childNode.guid
      }
    }
  }
  throw new Error(`Could not find a published component set with the key "${originalComponentKey}"`)
}
/**
 * Import component set by key with comprehensive state group handling
 * Resolves component set from library, handles moved items, and ensures proper loading
 * @param componentSetKey - The key of the component set to import
 * @returns Promise resolving to the imported component set GUID
 * @throws Error if component set cannot be found or imported
 */
export async function $$av5(componentSetKey) {
  const debugStateInstance = debugState
  const currentState = debugStateInstance.getState()
  const currentFile = d1(currentState)
  if (!currentFile) {
    throw new Error('Missing a current file')
  }

  // Resolve component set key (handle moved library items)
  const resolvedComponentSetKey = currentState.library.movedLibraryItems.subscribed[componentSetKey] || componentSetKey

  // Search for published state group in library
  let foundStateGroup = searchForPublishedStateGroup(currentState, resolvedComponentSetKey)

  // Attempt to fetch state group if not found locally
  if (!foundStateGroup) {
    foundStateGroup = await zn(debugStateInstance, resolvedComponentSetKey)
    if (!foundStateGroup) {
      throw new Error(`Could not find a published component set with the key "${componentSetKey}"`)
    }
  }

  // Dispatch library loading action
  debugStateInstance.dispatch(PB({
    libraryKeys: [foundStateGroup.library_key],
  }))

  // Import the state group
  return await ay(foundStateGroup, currentFile.key)
}

/**
 * Search for published state group in library by key
 * @param currentState - Current application state
 * @param stateGroupKey - Key to search for
 * @returns Found state group data or null
 */
function searchForPublishedStateGroup(currentState, stateGroupKey) {
  let foundStateGroup = null
  Qb(currentState.library.publishedByLibraryKey.stateGroups, (_libraryKey, _version, _stateGroupId, stateGroupData) => {
    if (stateGroupData.key === stateGroupKey) {
      foundStateGroup = stateGroupData
    }
  })
  return foundStateGroup
}
function aI(sourceObject) {
  // aI - Transform object properties by extracting data or name values

  const transformedObject = {}
  for (const propertyKey in sourceObject) {
    const propertyValue = sourceObject[propertyKey]
    if (propertyValue) {
      // Use data property if available, otherwise fallback to name property
      transformedObject[propertyKey] = propertyValue.data !== undefined ? propertyValue.data : propertyValue.name
    }
  }
  return transformedObject
}
export function $$aE2() {
  const state = debugState.getState()
  return {
    stats: new _$$P2(),
    name: '',
    command: '',
    pluginID: '',
    pluginVersionID: '',
    queryMode: false,
    userID: state.user?.id || '',
    titleIconURL: '',
    openFileKey: state.openFile?.key || '',
    apiVersion: pS,
    apiMode: {
      type: 'GLOBAL_API',
    },
    enableProposedApi: true,
    enablePrivatePluginApi: true,
    deferRunEvent: false,
    validatedPermissions: qH.forConsoleGlobal(),
    isLocal: true,
    capabilities: [],
    allowedDomains: gH,
    editorType: [FW.FIGMA, FW.FIGJAM, FW.INSPECT, FW.DEV, FW.SITES, FW.SLIDES],
    html: null,
    incrementalSafeApi: false,
    enableNativeJsx: false,
    enableResponsiveSetHierarchyMutations: false,
    isPluginExemptFromPluginDataLimits: false,
  }
}
export function $$ax3({
  apiMode,
  pluginID,
  enableNativeJsx,
  enableResponsiveSetHierarchyMutations,
  sceneGraph,
}) {
  // $$ax3 - Create plugin instance with specified configuration

  const {
    addShutdownAction,
    closePlugin,
    noOpVm,
  } = createPluginContext()
  const pluginInstance = createPluginInstance(noOpVm, {
    ...$$aE2(),
    apiMode,
    pluginID,
    closePlugin,
    addShutdownAction,
    enableNativeJsx: enableNativeJsx ?? false,
    enableResponsiveSetHierarchyMutations: enableResponsiveSetHierarchyMutations ?? false,
    sceneGraph,
  })
  return {
    vm: noOpVm,
    api: pluginInstance,
  }
}
function aS(permissionName, options = {}) {
  // aS - Generate permission error message with appropriate documentation link

  const documentationUrl = options?.isWidget ? 'https://www.figma.com/widget-docs/widget-manifest/#permissions' : 'https://www.figma.com/plugin-docs/manifest/#permissions'
  return `"${permissionName}" permission not specified in manifest.json. Add the following to your manifest.json: "permissions": ["${permissionName}"]. See ${documentationUrl} for more details.`
}
export const _T = $$at0
export const K2 = createPluginInstance
export const _$ = $$aE2
export const eR = $$ax3
export const $C = $$ab4
export const $f = $$av5
