import { GET_CODE, GET_METADATA } from "../905/724174"

/**
 * Checks if the given value matches GET_METADATA or optionally GET_CODE
 * @param value - The value to check
 * @param allowCode - Whether to also check for GET_CODE
 * @returns True if the value matches the criteria
 */
export function isMetadataOrCode(value: unknown, allowCode?: boolean): boolean {
  return value === GET_METADATA || (allowCode && value === GET_CODE)
}

/**
 * Checks if the given value matches GET_METADATA
 * @param value - The value to check
 * @returns True if the value matches GET_METADATA
 */
export function isMetadata(value: unknown): boolean {
  return value === GET_METADATA
}

// Aliases for backward compatibility
export const G = isMetadataOrCode
export const k = isMetadata
