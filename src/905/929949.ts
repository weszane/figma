import { VariableDataType, VariableResolvedDataType } from '../905/880730'
import { VariablesBindings } from '../figma_app/13528'
import { throwTypeError } from '../figma_app/465776'
import { allEqual } from '../figma_app/656233'

/**
 * Supported variable resolved data types.
 * (original: $$o13)
 */
const supportedResolvedTypes = [
  VariableResolvedDataType.COLOR,
  VariableResolvedDataType.FLOAT,
  VariableResolvedDataType.STRING,
  VariableResolvedDataType.BOOLEAN,
] as const

/**
 * All text style property keys.
 * (original: $$l5)
 */
const textStyleProperties = [
  'fontFamily',
  'fontSize',
  'fontStyle',
  'fontWeight',
  'letterSpacing',
  'lineHeight',
  'paragraphSpacing',
  'paragraphIndent',
] as const

/**
 * Font style property keys.
 * (original: $$d4)
 */
const fontStyleProperties = [
  'fontFamily',
  'fontSize',
  'fontStyle',
  'fontWeight',
  'letterSpacing',
  'lineHeight',
] as const

/**
 * All supported node property keys.
 * (original: $$c12)
 */
const nodeProperties = [
  'height',
  'width',
  'characters',
  'itemSpacing',
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
  'visible',
  'cornerRadius',
  'topLeftRadius',
  'topRightRadius',
  'bottomLeftRadius',
  'bottomRightRadius',
  'strokeWeight',
  'strokeTopWeight',
  'strokeBottomWeight',
  'strokeLeftWeight',
  'strokeRightWeight',
  'minWidth',
  'maxWidth',
  'minHeight',
  'maxHeight',
  'counterAxisSpacing',
  'opacity',
  'gridRowGap',
  'gridColumnGap',
  ...textStyleProperties,
] as const

/**
 * Color property keys.
 * (original: $$u2)
 */
const colorProperties = ['color'] as const

/**
 * Shadow property keys.
 * (original: $$p9)
 */
const shadowProperties = [
  'color',
  'radius',
  'spread',
  'offsetX',
  'offsetY',
] as const

/**
 * Radius property keys.
 * (original: $$m0)
 */
const radiusProperties = ['radius'] as const

/**
 * Section size property keys.
 * (original: $$h6)
 */
const sectionSizeProperties = ['sectionSize'] as const

/**
 * Grid section property keys.
 * (original: $$g1)
 */
const gridSectionProperties = [
  'sectionSize',
  'count',
  'offset',
  'gutterSize',
] as const

/**
 * Grid section property keys without offset.
 * (original: $$f7)
 */
const gridSectionPropertiesNoOffset = [
  'sectionSize',
  'count',
  'gutterSize',
] as const

/**
 * Grid section property keys without sectionSize.
 * (original: $$_11)
 */
const gridSectionPropertiesNoSectionSize = [
  'count',
  'offset',
  'gutterSize',
] as const

/**
 * Value property key.
 * (original: $$A10)
 */
const valueProperty = ['value'] as const

/**
 * Resolves a variable value based on its resolved type.
 * (original: $$y8)
 * @param resolvedType VariableResolvedDataType
 * @param value any
 * @returns object with resolvedType, type, and value
 */
function resolveVariableValue(resolvedType: VariableResolvedDataType, value: any) {
  /**
   * Helper to validate and normalize value by type.
   */
  function normalizeValue(type: VariableResolvedDataType, val: any) {
    switch (type) {
      case VariableResolvedDataType.BOOLEAN:
        return typeof val === 'boolean' ? val : null
      case VariableResolvedDataType.STRING:
        return typeof val === 'string' ? val : null
      case VariableResolvedDataType.FLOAT:
        if (Array.isArray(val))
          return val.every(e => typeof e === 'number') && allEqual(val) ? val[0] : null
        return typeof val === 'number' ? val : null
      case VariableResolvedDataType.COLOR:
      case VariableResolvedDataType.MAP:
        return typeof val === 'object' ? val : null
      case VariableResolvedDataType.SYMBOL_ID:
        return typeof val === 'string' ? val : null
      case VariableResolvedDataType.FONT_STYLE:
      case VariableResolvedDataType.TEXT_DATA:
      case VariableResolvedDataType.IMAGE:
      case VariableResolvedDataType.LINK:
      case VariableResolvedDataType.JS_RUNTIME_ALIAS:
      case VariableResolvedDataType.SLOT_CONTENT_ID:
        return typeof val === 'object' ? val : null
    }
  }

  const normalized = normalizeValue(resolvedType, value)

  switch (resolvedType) {
    case VariableResolvedDataType.BOOLEAN:
      return {
        resolvedType,
        type: VariableDataType.BOOLEAN,
        value: normalized ?? false,
      }
    case VariableResolvedDataType.STRING:
      return {
        resolvedType,
        type: VariableDataType.STRING,
        value: normalized ?? VariablesBindings?.getDefaultStringVariableValue() ?? '',
      }
    case VariableResolvedDataType.FLOAT:
      return {
        resolvedType,
        type: VariableDataType.FLOAT,
        value: normalized ?? 0,
      }
    case VariableResolvedDataType.COLOR:
      return {
        resolvedType,
        type: VariableDataType.COLOR,
        value: normalized ?? { r: 1, g: 1, b: 1, a: 1 },
      }
    case VariableResolvedDataType.MAP:
      return {
        resolvedType,
        type: VariableDataType.MAP,
        value: normalized ?? {},
      }
    case VariableResolvedDataType.SYMBOL_ID:
      return {
        resolvedType,
        type: VariableDataType.SYMBOL_ID,
        value: normalized ?? 'SymbolId:-1:-1',
      }
    case VariableResolvedDataType.FONT_STYLE:
      return {
        resolvedType,
        type: VariableDataType.FONT_STYLE,
        value: normalized ?? {},
      }
    case VariableResolvedDataType.TEXT_DATA:
      return {
        resolvedType,
        type: VariableDataType.TEXT_DATA,
        value: normalized ?? {},
      }
    case VariableResolvedDataType.JS_RUNTIME_ALIAS:
      return {
        resolvedType: VariableResolvedDataType.STRING,
        type: VariableDataType.JS_RUNTIME_ALIAS,
        value: normalized ?? {},
      }
    case VariableResolvedDataType.IMAGE:
      return {
        resolvedType,
        type: VariableDataType.IMAGE,
        value: normalized ?? {},
      }
    case VariableResolvedDataType.LINK:
      return {
        resolvedType,
        type: VariableDataType.LINK,
        value: normalized ?? {},
      }
    case VariableResolvedDataType.SLOT_CONTENT_ID:
      return {
        resolvedType,
        type: VariableDataType.SLOT_CONTENT_ID,
        value: normalized ?? {},
      }
    default:
      throwTypeError(resolvedType, 'Unknown VariableResolvedDataType')
  }
}

/**
 * Returns the string name for a VariableResolvedDataType.
 * (original: $$b3)
 * @param resolvedType VariableResolvedDataType
 * @returns string
 */
export function getResolvedTypeName(resolvedType: VariableResolvedDataType): string {
  switch (resolvedType) {
    case VariableResolvedDataType.BOOLEAN:
      return 'BOOLEAN'
    case VariableResolvedDataType.COLOR:
      return 'COLOR'
    case VariableResolvedDataType.FLOAT:
      return 'FLOAT'
    case VariableResolvedDataType.STRING:
      return 'STRING'
    case VariableResolvedDataType.SYMBOL_ID:
      return 'SYMBOL_ID'
    case VariableResolvedDataType.MAP:
      return 'MAP'
    case VariableResolvedDataType.FONT_STYLE:
      return 'FONT_STYLE'
    case VariableResolvedDataType.TEXT_DATA:
      return 'TEXT_DATA'
    case VariableResolvedDataType.IMAGE:
      return 'IMAGE'
    case VariableResolvedDataType.LINK:
      return 'LINK'
    case VariableResolvedDataType.JS_RUNTIME_ALIAS:
      return 'JS_RUNTIME_ALIAS'
    case VariableResolvedDataType.SLOT_CONTENT_ID:
      return 'SLOT_CONTENT_ID'
    default:
      throwTypeError(resolvedType)
  }
}

// Export with original names for compatibility
export const HC = radiusProperties
export const JE = gridSectionProperties
export const Lk = colorProperties
export const Lv = getResolvedTypeName
export const MN = fontStyleProperties
export const SE = textStyleProperties
export const Vw = sectionSizeProperties
export const W$ = gridSectionPropertiesNoOffset
export const WI = resolveVariableValue
export const Wh = shadowProperties
export const fH = valueProperty
export const gO = gridSectionPropertiesNoSectionSize
export const hp = nodeProperties
export const ts = supportedResolvedTypes
