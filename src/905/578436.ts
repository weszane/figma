/**
 * Generates a unique name by appending a number to the base name if it already exists in the list.
 * Original function name: $$n0
 * @param baseName - The base name to check and potentially append a number to.
 * @param existingNames - An array of existing names to check against.
 * @returns The unique name with an appended number if necessary.
 */
export function generateUniqueName(baseName: string, existingNames: string[]): string {
  const escapedBase = baseName.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')
  const regex = new RegExp(`^${escapedBase} [0-9]+$`)
  const hasBase = existingNames.includes(baseName)
  const maxNumber = existingNames.reduce((max, name) => {
    if (regex.test(name)) {
      return Math.max(parseInt(name.substring(baseName.length)), max)
    }
    return max
  }, 1)
  return hasBase ? `${baseName} ${maxNumber + 1}` : baseName
}

/**
 * Strips the number suffix from a name, if present.
 * Original function name: $$r1
 * @param name - The name to strip the suffix from.
 * @returns The name without the number suffix.
 */
export function stripNumberSuffix(name: string): string {
  const regex = /^(.*) \d+$/
  const match = name.match(regex)
  return match && typeof match[1] === 'string' ? match[1] : name
}

// Refactored exports to match new function names
export const g = generateUniqueName
export const s = stripNumberSuffix
