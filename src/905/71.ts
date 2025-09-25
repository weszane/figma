import { noop } from '../figma_app/465776'
import { REDACTABLE_PROPERTIES } from '../figma_app/841197'

/** Set of style-related property IDs that can be checked for existence */
export const STYLE_PROPERTY_IDS = new Set<string>([
  'styleIdForFill',
  'styleIdForStrokeFill',
  'styleIdForText',
  'styleIdForEffect',
  'styleIdForGrid',
])

/**
 * Checks if a given property is a style property ID
 * @param property - The property to check
 * @returns true if the property is a style property ID, false otherwise
 */
export function isStylePropertyId(property: string): boolean {
  return STYLE_PROPERTY_IDS.has(property)
}

// Initialize the set (likely for side effects or module loading)
noop(STYLE_PROPERTY_IDS)

/** Set of background paint properties */
export const BACKGROUND_PAINT_PROPERTIES = new Set<string>(['backgroundPaints'])

/**
 * Checks if a property relates to variable identification
 * @param property - The property to check
 * @returns true if the property is a variable ID property, false otherwise
 */
export function isVariableIdProperty(property: string): boolean {
  return property === 'id' || property === 'alias' || property === 'overriddenVariableId'
}

/**
 * Checks if a property relates to variable sets
 * @param property - The property to check
 * @returns true if the property is a variable set ID property, false otherwise
 */
export function isVariableSetIdProperty(property: string): boolean {
  return property === 'variableSetID' || property === 'backingVariableSetId' || property === 'parentVariableSetId'
}

/**
 * Checks if a property relates to code file identification
 * @param property - The property to check
 * @returns true if the property is a code file ID property, false otherwise
 */
export function isCodeFileIdProperty(property: string): boolean {
  return property === 'exportedFromCodeFileId' || property === 'codeFileId'
}

/**
 * Checks if a property is a backing code component ID
 * @param property - The property to check
 * @returns true if the property is a backing code component ID, false otherwise
 */
export function isBackingCodeComponentIdProperty(property: string): boolean {
  return property === 'backingCodeComponentId'
}

/**
 * Checks if a property belongs to a code library
 * @param property - The property to check
 * @returns true if the property is a code library ID property, false otherwise
 */
export function isCodeLibraryIdProperty(property: string): boolean {
  return property === 'belongsToCodeLibraryId'
}

/**
 * Checks if a property is a canvas node ID in a code file
 * @param property - The property to check
 * @returns true if the property is a code file canvas node ID, false otherwise
 */
export function isCodeFileCanvasNodeIdProperty(property: string): boolean {
  return property === 'codeFileCanvasNodeId'
}

/**
 * Checks if a property relates to symbol identification or special GUID handling
 * @param property - The property name to check
 * @param context - Optional context for additional checks
 * @returns true if the property matches symbol/GUID criteria, false otherwise
 */
export function isSymbolOrSpecialIdProperty(property: string, context?: string): boolean {
  return property === 'symbolID'
    || property === 'overriddenSymbolID'
    || property === 'endpointNodeID'
    || property === 'currentPage'
    || property === 'strokeBrushGuid'
    || property === 'sourceNodeId'
    || (property === 'guid' && context === 'diagramParentIndex')
}

/**
 * Checks if an object has RGBA color properties
 * @param obj - The object to check
 * @returns true if the object contains r, g, b, a properties, false otherwise
 */
export function hasRgbaColorProperties(obj: Record<string, unknown>): boolean {
  return ['r', 'g', 'b', 'a'].every(prop => prop in obj)
}

/**
 * Checks if an object contains valid GUID array data
 * @param obj - The object to check
 * @returns true if the object has guids array with valid entries, false otherwise
 */
export function hasValidGuidArray(obj: Record<string, unknown>): boolean {
  return 'guids' in obj
    && Array.isArray(obj.guids)
    && obj.guids.every(hasSessionAndLocalIds)
}

/**
 * Checks if an object has session and local ID properties
 * @param obj - The object to check
 * @returns true if the object contains sessionID and localID properties, false otherwise
 */
export function hasSessionAndLocalIds(obj: Record<string, unknown>): boolean {
  return ['sessionID', 'localID'].every(prop => prop in obj)
}

/**
 * Checks if an object has matrix transformation properties
 * @param obj - The object to check
 * @returns true if the object contains all matrix transformation properties, false otherwise
 */
export function hasMatrixTransformProperties(obj: Record<string, unknown>): boolean {
  return ['m00', 'm01', 'm02', 'm10', 'm11', 'm12'].every(prop => prop in obj)
}

/**
 * Converts a 2D array to matrix transformation object if valid
 * @param arr - The array to convert
 * @returns Matrix object if valid, null otherwise
 */
export function arrayToMatrixTransform(arr: unknown): {
  m00: number
  m01: number
  m02: number
  m10: number
  m11: number
  m12: number
} | null {
  if (Array.isArray(arr)
    && arr.length === 2
    && arr.every(subArr => Array.isArray(subArr) && subArr.length === 3)) {
    return {
      m00: arr[0][0],
      m01: arr[0][1],
      m02: arr[0][2],
      m10: arr[1][0],
      m11: arr[1][1],
      m12: arr[1][2],
    }
  }
  return null
}

/**
 * Checks if an object has 2D coordinate properties
 * @param obj - The object to check
 * @returns true if the object contains x and y properties, false otherwise
 */
export function hasCoordinates(obj: Record<string, unknown>): boolean {
  return ['x', 'y'].every(prop => prop in obj)
}

/**
 * Checks if value is a Uint8Array
 * @param value - The value to check
 * @returns true if the value is a Uint8Array, false otherwise
 */
export function isUint8Array(value: unknown): value is Uint8Array {
  return value instanceof Uint8Array
}

/**
 * Checks if a property of a Uint8Array is a hash
 * @param value - The value to check
 * @param property - The property name
 * @returns true if the value is a Uint8Array and property is 'hash', false otherwise
 */
export function isUint8ArrayHash(value: unknown, property: string): value is Uint8Array {
  return value instanceof Uint8Array && property === 'hash'
}

/**
 * Checks if a value is a number for specific blob properties
 * @param value - The value to check
 * @param property - The property name
 * @returns true if value is number and property is blob-related, false otherwise
 */
export function isNumberForBlobProperty(value: unknown, property: string): value is number {
  return typeof value === 'number' && (property === 'commandsBlob' || property === 'dataBlob')
}

/**
 * Checks if a value is a boolean
 * @param value - The value to check
 * @returns true if the value is a boolean, false otherwise
 */
export function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean'
}

/**
 * Checks if a value is a number or bigint
 * @param value - The value to check
 * @returns true if the value is a number or bigint, false otherwise
 */
export function isNumberOrBigint(value: unknown): value is number | bigint {
  return typeof value === 'number' || typeof value === 'bigint'
}

/**
 * Checks if a value is a string
 * @param value - The value to check
 * @returns true if the value is a string, false otherwise
 */
export function isString(value: unknown): value is string {
  return typeof value === 'string'
}

/**
 * Checks if an object has type and label properties
 * @param obj - The object to check
 * @returns true if the object has type and label properties, false otherwise
 */
export function hasTypeAndLabel(obj: Record<string, unknown>): boolean {
  return typeof obj === 'object' && 'type' in obj && 'label' in obj
}

/**
 * Checks if a string value corresponds to a redactable property
 * @param value - The value to check
 * @param property - The property name
 * @returns true if value is string and property is redactable, false otherwise
 */
export function isStringForRedactableProperty(value: unknown, property: string): value is string {
  return typeof value === 'string' && REDACTABLE_PROPERTIES.has(property)
}

// Initialize background paint properties set
noop(BACKGROUND_PAINT_PROPERTIES)

// Export aliases for backward compatibility
export const EI = BACKGROUND_PAINT_PROPERTIES
export const FE = isCodeLibraryIdProperty
export const GP = STYLE_PROPERTY_IDS
export const Kg = isString
export const Lm = isBoolean
export const M_ = isNumberForBlobProperty
export const OA = hasMatrixTransformProperties
export const Ox = isVariableIdProperty
export const Rt = hasTypeAndLabel
export const SE = isStringForRedactableProperty
export const WX = hasCoordinates
export const W_ = hasSessionAndLocalIds
export const _o = hasRgbaColorProperties
export const aP = isSymbolOrSpecialIdProperty
export const aY = isUint8Array
export const ar = isStylePropertyId
export const hV = hasValidGuidArray
export const hd = isCodeFileCanvasNodeIdProperty
export const kf = isNumberOrBigint
export const qx = isUint8ArrayHash
export const r4 = isVariableSetIdProperty
export const rP = isBackingCodeComponentIdProperty
export const wA = isCodeFileIdProperty
export const yp = arrayToMatrixTransform
