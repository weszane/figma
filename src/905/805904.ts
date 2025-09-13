import { VariableIdHandler } from '../figma_app/243058'

/**
 * Converts a variable ID string to its Kiwi representation.
 * Original function: $$r3
 * @param variableIdString - The variable ID as a string.
 * @returns The Kiwi representation or null if invalid.
 */
export function convertVariableIdToKiwi(variableIdString: string) {
  const variableId = VariableIdHandler.fromString(variableIdString)
  return variableId ? VariableIdHandler.toKiwi(variableId) : null
}

/**
 * Checks if a given string is a valid variable ID.
 * Original function: $$a2
 * @param variableIdString - The variable ID as a string.
 * @returns True if valid, false otherwise.
 */
export function isValidVariableId(variableIdString: string) {
  const variableId = VariableIdHandler.fromString(variableIdString)
  return !!variableId && VariableIdHandler.isValid(variableId)
}

/**
 * Creates a variable reference object from a GUID.
 * Original function: $$s4
 * @param guid - The GUID string.
 * @returns An object with the GUID.
 */
export function createVariableReference(guid: any) {
  return {
    guid,
  }
}

/**
 * Converts a Kiwi representation to a variable ID string.
 * Original function: $$o1
 * @param kiwi - The Kiwi representation.
 * @returns The variable ID string or "(invalid variable id)" if invalid.
 */
export function convertKiwiToVariableIdString(kiwi: any) {
  const variableId = VariableIdHandler.fromKiwi(kiwi)
  return variableId ? VariableIdHandler.toString(variableId) : '(invalid variable id)'
}

/**
 * Gets the variable ID string from a GUID by creating a reference and converting.
 * Original function: $$l5
 * @param guid - The GUID string.
 * @returns The variable ID string.
 */
export function getVariableIdStringFromGuid(guid: any) {
  return convertKiwiToVariableIdString(createVariableReference(guid))
}

/**
 * Creates a variable ID string from a key and version reference.
 * Original function: $$d0
 * @param key - The key string.
 * @param version - The version number.
 * @returns The variable ID string.
 */
export function createVariableIdStringFromRef(key: string, version: number) {
  return VariableIdHandler.toString(VariableIdHandler.fromRef({
    key,
    version,
  }))
}

// Exported aliases with updated function names
export const Hc = createVariableIdStringFromRef
export const dI = convertKiwiToVariableIdString
export const fn = isValidVariableId
export const sH = convertVariableIdToKiwi
export const w1 = createVariableReference
export const wL = getVariableIdStringFromGuid
