/**
 * Generates an input element ID string based on the provided base name.
 * @param baseName - The base name to use for the input element.
 * @returns The input element ID string.
 * @originalName $$n0
 */
export function generateInputId(baseName: string): string {
  return `${baseName}-input`
}

/**
 * Generates a description element ID string based on the provided base name.
 * @param baseName - The base name to use for the description element.
 * @returns The description element ID string.
 * @originalName $$r1
 */
export function generateDescId(baseName: string): string {
  return `${baseName}-desc`
}

// Export aliases for backward compatibility and refactored usage
export const e = generateInputId
export const u = generateDescId
