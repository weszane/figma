/**
 * Field reference utilities and type guards for schema manipulation
 * Original file: 552287.ts
 */

// =============================================================================
// Constants
// =============================================================================

/** Null field reference constant (originally $$n5) */
export const NULL_FIELD_REF = null

// =============================================================================
// Type Guards
// =============================================================================

/**
 * Checks if an object has a 'fields' property (originally $$r3)
 * @param obj - Object to check
 * @returns True if object has fields property
 */
export function hasFieldsProperty(obj: any): boolean {
  return !!obj && 'fields' in obj
}

/**
 * Checks if value is an array (originally function 'a')
 * @param value - Value to check
 * @returns True if value is an array
 */
function isArray(value: any): boolean {
  return !!value && Array.isArray(value)
}

/**
 * Checks if value is a plain object without fields property (originally function 's')
 * @param value - Value to check
 * @returns True if value is a plain object
 */
function isPlainObject(value: any): boolean {
  return !!value && typeof value == 'object' && !('fields' in value) && !Array.isArray(value)
}

/**
 * Checks if object doesn't have cursorColumnSet property (originally $$o13)
 * @param obj - Object to check
 * @returns True if object lacks cursorColumnSet
 */
export function isNotCursorColumnSet(obj: any): boolean {
  return !!obj && !('cursorColumnSet' in obj)
}

/**
 * Checks if object has cursor-related properties (originally $$l2)
 * @param obj - Object to check
 * @returns True if object has cursor properties
 */
export function hasCursorProperties(obj: any): boolean {
  return !!obj && 'cursorColumnSet' in obj && 'selectedCursorColumn' in obj && 'sortOrder' in obj
}

/**
 * Checks if field type is object or objects (originally $$d1)
 * @param field - Field object with type property
 * @returns True if field type is object-based
 */
export function isObjectType(field: any): boolean {
  return field.type.kind === 'object' || field.type.kind === 'objects'
}

/**
 * Checks if object is embedded (originally $$c12)
 * @param obj - Object to check
 * @returns True if object is embedded
 */
export function isEmbedded(obj: any): boolean {
  return 'embedded' in obj && obj.embedded
}

/**
 * Checks if field is computed (originally $$u6)
 * @param field - Field object to check
 * @returns True if field is computed
 */
export function isComputed(field: any): boolean {
  return 'computed' in field && !!field.computed
}

// =============================================================================
// Reference Creators
// =============================================================================

/**
 * Creates a field reference (originally $$p8)
 * @param ref - Reference value
 * @returns Field reference object
 */
export function createFieldRef(ref: any) {
  return {
    type: 'field',
    ref,
  }
}

/**
 * Creates a view reference (originally $$m4)
 * @param ref - Reference value
 * @returns View reference object
 */
export function createViewRef(ref: any) {
  return {
    type: 'view',
    ref,
  }
}

/**
 * Creates a session reference (originally $$h7)
 * @param ref - Reference value
 * @returns Session reference object
 */
export function createSessionRef(ref: any) {
  return {
    type: 'session',
    ref,
  }
}

/**
 * Creates a parent reference (originally $$g0)
 * @param ref - Reference value
 * @returns Parent reference object
 */
export function createParentRef(ref: any) {
  return {
    type: 'parent',
    ref,
  }
}

// =============================================================================
// Field Reference Manipulation
// =============================================================================

/**
 * Creates an aliased field reference (originally $$f11)
 * @param aliasedField - The aliased field
 * @param fields - Field definition or field object
 * @returns Aliased field reference object
 */
export function createAliasedFieldRef(aliasedField: any, fields: any): any {
  return fields && hasFieldsProperty(fields)
    ? {
        aliasedField,
        optional: fields.optional,
        fields: fields.fields,
      }
    : {
        aliasedField,
        fields,
      }
}

/**
 * Makes a field reference optional (originally $$$$_10)
 * @param fieldRef - Field reference to make optional
 * @returns Optional field reference
 */
export function makeFieldRefOptional(fieldRef: any): any {
  return fieldRef
    ? hasFieldsProperty(fieldRef)
      ? fieldRef.aliasedField
        ? {
            aliasedField: fieldRef.aliasedField,
            optional: true,
            fields: fieldRef.fields,
          }
        : {
            optional: true,
            fields: fieldRef.fields,
          }
      : {
          optional: true,
          fields: fieldRef,
        }
    : {
        optional: true,
        fields: null,
      }
}

/**
 * Merges multiple field references (originally $$A9)
 * @param fieldRefs - Field references to merge
 * @returns Merged field reference
 */
/**
 * Merges multiple field references (originally $$A9)
 * @param fieldRefs - Field references to merge
 * @returns Merged field reference
 */
export function mergeFieldRefs(...fieldRefs: any[]): any {
  // Handle single field reference case
  if (fieldRefs.length === 1) {
    return JSON.parse(JSON.stringify(fieldRefs[0]))
  }

  // Reduce multiple field references into one
  return fieldRefs.reduce((accumulated, current) => {
    return mergeTwoFieldRefs(accumulated, current, '')
  })
}

/**
 * Merges two field references recursively (originally inner function mergeTwo)
 * @param target - Target field reference
 * @param source - Source field reference to merge
 * @param location - Current location path for error reporting
 * @returns Merged field reference
 */
function mergeTwoFieldRefs(target: any, source: any, location: string): any {
  const result = { ...target }

  for (const key of Object.keys(source)) {
    if (key in target) {
      result[key] = mergeFieldRefValues(target[key], source[key], `${location}.${key}`)
    } else {
      result[key] = source[key]
    }
  }

  return result
}

/**
 * Merges two field reference values with type checking (originally inner function mergeValues)
 * @param targetValue - Target value to merge
 * @param sourceValue - Source value to merge
 * @param path - Current path for error reporting
 * @returns Merged value
 */
function mergeFieldRefValues(targetValue: any, sourceValue: any, path: string): any {
  // If values are identical, return as-is
  if (targetValue === sourceValue) {
    return targetValue
  }

  // Handle field references with fields property
  if (hasFieldsProperty(targetValue) && hasFieldsProperty(sourceValue)) {
    return mergeFieldRefsWithFields(targetValue, sourceValue, path)
  }

  // Handle arrays (schema arguments)
  if (isArray(targetValue) && isArray(sourceValue)) {
    return mergeArrayFieldRefs(targetValue, sourceValue, path)
  }

  // Handle plain objects
  if (isPlainObject(targetValue) && isPlainObject(sourceValue)) {
    return mergeTwoFieldRefs(targetValue, sourceValue, path)
  }

  throw new Error(`Cannot merge mismatching fieldref types at loc ${path}`)
}

/**
 * Merges field references that have fields property (originally part of mergeValues)
 * @param targetValue - Target field reference with fields
 * @param sourceValue - Source field reference with fields
 * @param path - Current path for error reporting
 * @returns Merged field reference
 */
function mergeFieldRefsWithFields(targetValue: any, sourceValue: any, path: string): any {
  const hasMatchingDecorators = 
    targetValue?.aliasedField === sourceValue?.aliasedField && 
    targetValue?.optional === sourceValue?.optional

  if (!hasMatchingDecorators) {
    throw new Error(`Cannot merge fieldrefs with mismatching decorators at loc ${path}`)
  }

  const merged = { ...targetValue }
  merged.fields = mergeFieldRefValues(targetValue.fields, sourceValue.fields, path)
  return merged
}

/**
 * Merges array-type field references (originally part of mergeValues)
 * @param targetArray - Target array field reference
 * @param sourceArray - Source array field reference
 * @param path - Current path for error reporting
 * @returns Merged array field reference
 */
function mergeArrayFieldRefs(targetArray: any[], sourceArray: any[], path: string): any[] {
  const targetFirst = targetArray[0]
  const sourceFirst = sourceArray[0]

  // Check if first elements match (schema compatibility check)
  if (JSON.stringify(targetFirst) !== JSON.stringify(sourceFirst)) {
    throw new Error(`Cannot merge fieldrefs with mismatching schema args at loc ${path}`)
  }

  const merged = [...targetArray]

  // Merge second elements if both exist
  if (targetArray[1] && sourceArray[1]) {
    merged[1] = mergeTwoFieldRefs(targetArray[1], sourceArray[1], path)
  } else {
    merged[1] = mergeFieldRefValues(targetArray[1], sourceArray[1], path)
  }

  return merged
}

// =============================================================================
// Exported Aliases (maintaining original export names)
// =============================================================================

export const $t = createParentRef
export const CL = isObjectType
export const E9 = hasCursorProperties
export const Mt = hasFieldsProperty
export const WY = createViewRef
export const _ = NULL_FIELD_REF
export const _b = isComputed
export const dZ = createSessionRef
export const dc = createFieldRef
export const h1 = mergeFieldRefs
export const lq = makeFieldRefOptional
export const nK = createAliasedFieldRef
export const qy = isEmbedded
export const vs = isNotCursorColumnSet
