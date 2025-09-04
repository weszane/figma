import type { GridLayoutConfig, ProcessedRegion } from '../types'
import { N as _$$N } from '../125137'
import { l7 } from '../189185'
import { Ay as _$$Ay3, jX } from '../281495'
import { MT } from '../321380'
import { debugState } from '../407919'
import { uW } from '../426868'
import { getFeatureFlags } from '../601108'
import { k as _$$k2 } from '../651849'
import { getSingletonSceneGraph } from '../700578'
import { ED, xi } from '../714362'
import { Mi } from '../736624'
import { d1 } from '../766303'
import { sH as _$$sH } from '../805904'
import { loadAllPluginPages } from '../816197'
import { u as _$$u, Kb } from '../816730'
import { vX } from '../866640'
import { fH, gO, HC, hp, JE, Lk, MN, SE, Vw, W$, Wh } from '../929949'
import {
  $x,
  $$ as _$$$$,
  rY as _$$rY,
  cT,
  Df,
  DW,
  hD,
  Jk,
  Ku,
  Mo,
  mx,
  NH,
  SU,
  U_,
  V8,
  VL,
  Wp,
  XX,
  yj,
  zd,
} from '../933084'
import { At } from '../973142'
import { F as _$$F2 } from '../../figma_app/8833'
import { isNullish } from '../../figma_app/95419'
import { mx as _$$mx, tK as _$$tK, di } from '../../figma_app/191804'
import { eX as _$$eX, nM as _$$nM } from '../../figma_app/276332'
import { E8 } from '../../figma_app/633080'
import { oH } from '../../figma_app/646357'
import { Egt, Ez5, j0r, NfO, QCv, RN1, uQ6, y0x } from '../../figma_app/763686'
import { bh } from '../../figma_app/803787'
import { Ag } from '../../figma_app/862289'
import { LZ, oy } from '../../figma_app/964367'
import {
  createVariableAlias,
  getAllStorageKeys,
  getStorageValue,
  normalizeBlendMode,
  processURL,
  setStorageValue,
} from '../modules'
import {
  AdvancedDataStructureManager,
  AdvancedNodeCreationManager,
  AdvancedTransformationManager,
  AdvancedURLProcessor,
  AdvancedValidationManager as Phase26ValidationManager,
} from '../modules/core-utilities-data-processing'
import { createImageEffectsProcessingNew } from '../modules/image-effects-processing'
import { createUtilityFunctionsNew } from '../modules/node-factory-management'
import { createValidationLayoutProcessingNew } from '../modules/validation-layout-processing'
import { colors } from './annotation'
import { ApplicationError, convertPaintArrayData, mapPaintConfigurations, NodeAPI } from './node-api'

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
export function collectGuidsForRenaming(node) {
  const result: any = {
    lockGuids: [],
    renameGuids: [],
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
export function shouldRenameNode(node) {
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
export async function renameSelectedLayers() {
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
export async function getStorageValueByKey(storageKey) {
  return await getStorageValue(storageKey)
}

/**
 * Get All Storage Keys With Prefix - retrieves all storage keys matching prefix
 * @param storagePrefix - Prefix to filter storage keys
 * @returns Promise resolving to array of matching keys
 */
export async function getAllStorageKeysWithPrefix(storagePrefix) {
  return await getAllStorageKeys(storagePrefix)
}

/**
 * Set Storage Entry - stores entry in plugin storage
 * @param storageEntry - Storage entry to save
 * @returns Promise that resolves when entry is stored
 */
export async function setStorageEntry(storageEntry) {
  // Ensure required parameters are present for storage operation
  const operationParams = {
    ...storageEntry,
    userID: storageEntry.userID || 'default-user',
    pluginID: storageEntry.pluginID || 'default-plugin',
    name: storageEntry.name || storageEntry.key,
  }
  return await setStorageValue(operationParams)
}

export let eG = {
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
export let ez = {
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
 * Process URL Data - handles URL data processing through URL utilities
 * @param urlData - URL data object to process
 * @returns Processed URL data
 */
export function processUrlData(urlData) {
  return processURL(urlData)
}

export function tq(conditionData) {
  // tq - Process condition data by delegating to enhanced condition processor
  return tqNew(conditionData)
}

export function t$(e) {
  // Delegate to the extracted ReactionsActionProcessor
  // TODO: Implement proper ReactionsActionProcessor when available
  return e
}

// Variable Data Types - supported data types for variable binding and resolution
const primitiveTypes = ['BOOLEAN', 'COLOR', 'FLOAT', 'STRING'] as const

export function processPublishStatus(e) {
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

export function hasResizeToFit(e) {
  return e.type === 'FRAME' && e.resizeToFit
}

export function processWidgetSyncData(vm, state, i) {
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

export function isInImmutableContext(e, t) {
  // Module Processor Function - handles module input and target module processing (im function)
  return !!t.isInImmutableFrame && t.type !== 'TABLE_CELL' || t.isInWidget && e.vmType !== 'scopednoopvm'
}

export function validateNamespace(namespace) {
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
export function handlePaintProperty({
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

export function createNodeHash(vm, targetData) {
  // Data Processor Function - handles input and target data processing (i_ function)
  let i = vm.newObject()
  vm.defineProp(i, 'hash', {
    enumerable: false,
    metricsKey: 'node.hash',
    value: vm.deepWrap(targetData.sha1),
  })
  return i
}

export function createImageProcessor(vm, imageData) {
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
    asyncOperation.then((result) => {
      resolve(vm.deepWrap(result))
    })
    asyncOperation.catch((error) => {
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
        vX(imageData.bytes).then(size => resolve(vm.deepWrap(size))).catch(error => reject(vm.deepWrap(error)))
      }
      else {
        imageData.getBytesAsync().then((bytes) => {
          imageData.bytes = bytes
          return vX(bytes)
        }).then(size => resolve(vm.deepWrap(size))).catch(() => {
          reject(vm.newString('Image dimensions not available'))
        })
      }
    }
    processImageSize()
    return promise
  })
  return processor
}

export function convertEffectType(effectType) {
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

export function processEffect(effect) {
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
export function clampValue(value, min, max) {
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
export function validateGlassEffectValue(value, min, max, propertyName) {
  if (value > max) {
    _$$k2.warn(`Glass effect ${propertyName} of ${value} is too large and will be clamped to ${max}`)
  }
  else if (value < min) {
    _$$k2.warn(`Glass effect ${propertyName} of ${value} is too small and will be clamped to ${min}`)
  }
  return clampValue(value, min, max)
}

export function handleFrameSpread(i) {
  if (i.fills.length === 0 || i.fills.every(e => !(e.visible && e.opacity))) {
    _$$k2.warn('The \'spread\' parameter is not supported when frames or components have no visible fills')
  }
  if (i.frameMaskDisabled) {
    _$$k2.warn('The \'spread\' parameter is not supported when frames or components have "Clips content" disabled.')
  }
  return 0
}

export function handleOtherSpread(i) {
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
export function processEffectWithValidation(effect, node) {
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
export function mapEffectTypeForOutput(type) {
  switch (type) {
    case 'LAYER_BLUR':
      return 'FOREGROUND_BLUR'
    case 'TEXTURE':
      return 'GRAIN'
    default:
      return type
  }
}

export function iw(e) {
  return iwNew(e)
}

export function iC(e) {
  return iCNew(e)
}

export function iT(e) {
  return iTNew(e)
}

export function ik(e) {
  return ikNew(e)
}

export function iR(e) {
  return iRNew(e)
}

export function convertTextDecorationThicknessFromLegacy(legacyThickness) {
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

export function convertTextDecorationThicknessToLegacy(modernThickness) {
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

export function convertListOption(listOption) {
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

export function processGridLayout(gridLayoutConfig) {
  const config: GridLayoutConfig = {
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
export function convertGridLayoutConfig(config) {
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

export function mapColorName(colorName) {
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

export let i5 = _$$z.strictObject({
  label: _$$z.string().trim().min(1),
  color: _$$z.enum(colors),
})

export async function loadFontsForTextNode(textNode) {
  // Font Loading Cache - stores already loaded fonts to prevent redundant loading
  const loadedFonts: any[] = []

  /**
   * Load Font If Needed Function - conditionally loads a font only if not already loaded
   * Maintains a cache of loaded fonts using family|style as identifier
   * @param fontName - font object with family and style properties
   * @returns Promise<void> - resolves when font is loaded or already cached
   */
  async function loadFontIfNeeded(fontName) {
    // Create unique identifier from font family and style
    const fontIdentifier: string = fontName && `${fontName.family}|${fontName.style}`

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
export function getRowColumn(targetRow?: number, targetColumn?: number) {
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
export function parseColorStringWithFallbacks(colorString) {
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
export function normalizeColorObjectAlpha(colorInput) {
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
export function parseColorInput(colorInput: unknown) {
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
export let timerAndStateEvents = _$$z.union([_$$z.enum(['close', 'selectionchange', 'currentpagechange', 'drop', 'input', 'run', 'message', 'documentchange', 'stylechange', 'nodechange', 'textreview', 'codegen', 'generate', 'preferenceschange', 'linkpreview', 'auth', 'open', 'slidesviewchange']), timerStateEnum])

/**
 * Generate Node JSX Function - creates JSX string representation for a node with visibility filtering
 * Filters to only include visible elements and processes through JSX generation pipeline
 * @param nodeReference - reference to the node to generate JSX for
 * @param options - generation options including includeIDs flag
 * @returns Promise<string | null> - JSX string representation or null if node not found
 */
export async function generateJsxFromNode(nodeReference, options: any = {
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
export async function getNodeGuid(nodeReference, options = {
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
export async function wrapVmPromise({
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

export function isVMPromiseLike(vmHandle, objectHandle) {
  // nu - Check if object is a thenable (has then and catch methods)

  if (!vmHandle.isObject(objectHandle)) {
    return false
  }
  const thenMethod = vmHandle.getProp(objectHandle, 'then')
  const catchMethod = vmHandle.getProp(objectHandle, 'catch')
  return vmHandle.isFunction(thenMethod) && vmHandle.isFunction(catchMethod)
}

// Phase 22: Advanced Utility Functions and Data Processing Systems - Wrapper Functions
let _$$utilityFuncs = createUtilityFunctionsNew()

export function processVectorData(e) {
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

export function validateImmutableFrame(e) {
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

export function getNodeById(nodeId, nodeMap) {
  const node = nodeMap.get(nodeId)
  if (!node) {
    const error = new ApplicationError(`The node with id ${JSON.stringify(nodeId)} does not exist`)
    throw error
  }
  return node
}

// Phase 23: Advanced Image Processing and Effects Management Systems - Wrapper Functions
let _$$imageEffectsProc = createImageEffectsProcessingNew(this)

export function iCNew(e) {
  return _$$imageEffectsProc.convertLineHeightFromLegacy(e)
}

export function iTNew(e) {
  return _$$imageEffectsProc.convertLineHeightToLegacy(e)
}

export function ikNew(e) {
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

export function iwNew(e) {
  return validationLayoutProc.processExportSettings(e)
}

export function iRNew(e) {
  return validationLayoutProc.convertTextDecorationOffsetToLegacy(e)
}

export function tqNew(e) {
  return coreUtilitiesDataProc.isNotNull(e)
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
        } = _$$eX(styleId)!
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
        await loadAllPluginPages(styleNode.consumers.map(c => c.id), documentAccessState)
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
    vm.defineFunction(handle, 'getPublishStatusAsync', 'style.getPublishStatusAsync', () => {
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
    vm.defineFunction(handle, 'remove', 'style.remove', () => {
      const node = getNode(this)
      l7.plugin('plugin-remove-style', () => {
        styleManager.softDeleteStyle(node)
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
export let n7 = [...n6, StyleAPI.paints, StyleAPI.boundVariables]
export let n8 = [...n6, NodeAPI.fontSize, NodeAPI.textDecoration, NodeAPI.textDecorationStyle, NodeAPI.textDecorationSkipInk, NodeAPI.textDecorationOffset, NodeAPI.textDecorationThickness, NodeAPI.textDecorationColor, NodeAPI.fontName, NodeAPI.letterSpacing, NodeAPI.lineHeight, NodeAPI.paragraphIndent, NodeAPI.paragraphSpacing, NodeAPI.listSpacing, NodeAPI.textCase, NodeAPI.hangingPunctuation, NodeAPI.hangingList, NodeAPI.leadingTrim, StyleAPI.boundVariables, StyleAPI.setBoundVariable]
export let n9 = [...n6, NodeAPI.effects, StyleAPI.boundVariables]
export let re = [...n6, NodeAPI.layoutGrids, StyleAPI.boundVariables]

export async function rM(variableId) {
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

export let an = new Set(['codegen', 'related-link-preview', 'textreview'])
