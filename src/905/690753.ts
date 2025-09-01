import { oneLine } from 'common-tags'
import { validateAndParseArgument } from '../905/119577'
import { findItemByName, hasTypeProperty } from '../905/957591'
import { CustomError } from '../905/962682'

/**
 * Creates a validation error with a formatted message
 * Original function: $$o2
 * @param fieldPath - Array of field names representing the path
 * @param message - Error message to display
 * @returns CustomError instance with formatted message
 */
export function createValidationError(fieldPath: string[], message: string): CustomError {
  return new CustomError(`${fieldPath.join('.')} - ${message}`)
}

/**
 * Validates field arguments against their schema definitions
 * Original function: $$l3
 * @param fieldPath - Array representing the current field path
 * @param providedArgs - Arguments provided for validation
 * @param requiredFields - Schema fields that are required
 * @param availableArgs - Available argument definitions
 * @param isComputedField - Whether this is for a computed field
 * @param configContext - Configuration context with session and legacy config
 * @param options - Validation options including skipArgValidation flag
 */
export function validateFieldArguments(
  fieldPath: string[],
  providedArgs: Record<string, { ref: string, type: string }>,
  requiredFields: any[],
  availableArgs: any[],
  isComputedField: boolean,
  configContext: any,
  options?: { skipArgValidation?: boolean },
): void {
  // Validate each provided argument
  for (const [argName, argValue] of Object.entries(providedArgs)) {
    const fieldDefinition = findItemByName(requiredFields, argName)

    if (!fieldDefinition) {
      throw createValidationError(fieldPath, oneLine`
        Found arg with name '${argName}', but the field doesn't accept an
        arg with this name`)
    }

    if (hasTypeProperty(argValue)) {
      if (options?.skipArgValidation) {
        continue
      }

      const argSource = argValue.type === 'session'
        ? configContext.session.args
        : availableArgs
      const argDefinition = findItemByName(argSource, argValue.ref)

      if (!argDefinition) {
        throw createValidationError(fieldPath, oneLine`
          Found arg with name '${argValue.ref}', but there isn't a declaration of
          an arg with this name`)
      }

      validateArgNullability(fieldPath, argDefinition, fieldDefinition, argValue.ref)
      validateArgTypeCompatibility(
        fieldPath,
        argDefinition,
        fieldDefinition,
        isComputedField,
        configContext,
      )
    }
    else {
      const validationResult = validateAndParseArgument(configContext, fieldDefinition, argValue)
      if (validationResult.type === 'error') {
        throw createValidationError(fieldPath, `Arg '${validationResult.argName}': ${validationResult.msg}`)
      }
    }
  }

  // Check for missing required arguments
  validateRequiredArguments(fieldPath, providedArgs, requiredFields)
}

/**
 * Validates that nullable arguments are not used for non-nullable fields
 * Helper function extracted from validateFieldArguments
 */
function validateArgNullability(
  fieldPath: string[],
  argDefinition: any,
  fieldDefinition: any,
  argRef: string,
): void {
  if (argDefinition.nullable && !fieldDefinition.nullable) {
    throw createValidationError(fieldPath, oneLine`
      Query arg '${argRef}' is nullable but used as a field argument that
      is not nullable`)
  }
}

/**
 * Validates type compatibility between arguments and fields
 * Helper function extracted from validateFieldArguments
 */
function validateArgTypeCompatibility(
  fieldPath: string[],
  argDefinition: any,
  fieldDefinition: any,
  isComputedField: boolean,
  configContext: any,
): void {
  const isCompatible = areTypesCompatible(argDefinition.type, fieldDefinition.type)
  const exemptionType = isComputedField ? 'computedFieldArg' : 'viewArg'
  const isExempted = configContext.legacyConfig.isTypeConversionExempted(
    exemptionType,
    argDefinition.type.kind,
    fieldDefinition.type.kind,
    `${fieldPath.join('.')}.${argDefinition.name}`,
  )

  if (!isCompatible && !isExempted) {
    throw createValidationError(fieldPath, oneLine`
      Query arg '${argDefinition.name}' of type ${argDefinition.type.kind} is being
      used for field argument '${fieldDefinition.name}' of type
      ${fieldDefinition.type.kind}`)
  }
}

/**
 * Validates that all required arguments are provided
 * Helper function extracted from validateFieldArguments
 */
function validateRequiredArguments(
  fieldPath: string[],
  providedArgs: Record<string, any>,
  requiredFields: any[],
): void {
  for (const { name } of requiredFields) {
    if (providedArgs[name] === undefined) {
      throw createValidationError(fieldPath, `Argument '${name}' is required`)
    }
  }
}

/**
 * Validates that argument names are unique within a declaration
 * Original function: $$d1
 * @param declarationName - Name of the declaration being validated
 * @param argumentList - List of arguments to check for duplicates
 */
export function validateUniqueArgumentNames(declarationName: string, argumentList: any[]): void {
  const usedNames = new Set<string>()

  for (const { name } of argumentList) {
    if (usedNames.has(name)) {
      throw new CustomError(oneLine`
        ${declarationName} declares multiple arguments named '${name}'
      `)
    }
    usedNames.add(name)
  }
}

/**
 * Checks if two types are compatible for argument validation
 * Original function: $$c0
 * @param sourceType - The source type to check compatibility from
 * @param targetType - The target type to check compatibility to
 * @returns true if types are compatible, false otherwise
 */
export function areTypesCompatible(sourceType: any, targetType: any): boolean {
  // Handle map types recursively
  if (sourceType.kind === 'map' && targetType.kind === 'map') {
    return areTypesCompatible(sourceType.valueType, targetType.valueType)
  }

  // Handle list types recursively
  if (sourceType.kind === 'list' && targetType.kind === 'list') {
    return areTypesCompatible(sourceType.ofType, targetType.ofType)
  }

  // Handle object types - must have same name
  if ((sourceType.kind === 'object' && targetType.kind === 'object')
    || (sourceType.kind === 'objects' && targetType.kind === 'objects')) {
    return sourceType.name === targetType.name
  }

  // Handle exact kind matches
  if (sourceType.kind === targetType.kind) {
    return true
  }

  // Handle special type conversions
  return isSpecialTypeConversion(sourceType.kind, targetType.kind)
}

/**
 * Checks for allowed special type conversions
 * Helper function extracted from areTypesCompatible
 */
function isSpecialTypeConversion(sourceKind: string, targetKind: string): boolean {
  return (
    (sourceKind === 'date' && targetKind === 'datetime')
    || (sourceKind === 'bigint' && targetKind === 'string')
    || (sourceKind === 'uuid' && targetKind === 'string')
  )
}

// Legacy exports for backward compatibility (original export aliases)
export const MZ = areTypesCompatible // $$c0
export const S = validateUniqueArgumentNames // $$d1
export const g$ = createValidationError // $$o2
export const uH = validateFieldArguments // $$l3
