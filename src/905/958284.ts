import { generateUUIDv4 } from "../905/871474"

/**
 * Appends a UUID v4 to the given string with double underscore separator
 * Original function: $$r0
 * @param input - The string to append UUID to
 * @returns The input string with UUID appended
 */
export function appendUUID(input: string): string {
  return `${input}__${generateUUIDv4()}`
}

/**
 * Regular expression pattern to match double underscore followed by
 * alphanumeric characters, hyphens, case insensitive
 * Original pattern: /__[0-9A-Z\-]+$/i
 */
const UUID_PATTERN = /__[0-9A-Z\-]+$/i

/**
 * Removes UUID suffix from the given string
 * Original function: $$s1
 * @param input - The string to remove UUID from
 * @returns The input string with UUID suffix removed
 */
export function removeUUID(input: string): string {
  return input.replace(UUID_PATTERN, "")
}

// Export aliases for backward compatibility
export const t = appendUUID
export const y = removeUUID
