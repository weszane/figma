/**
 * Checks if the given string matches the figma domain pattern.
 * @param domain - The domain string to test.
 * @returns True if the domain matches figma.com or figma.engineering with ports 8080 or 8443.
 * @originalName $$n1
 */
export function isFigmaDomain(domain: string): boolean {
  // eslint-disable-next-line regexp/no-unused-capturing-group
  return /figma\.(com|(engineering:(8080|8443)))$/.test(domain)
}

/**
 * Replaces the first occurrence of ':' with '-'.
 * @param value - The string to transform.
 * @returns The transformed string.
 * @originalName $$r0
 */
export function replaceColonWithDash(value: string): string {
  return value.replace(':', '-')
}

/**
 * Removes 'VariableID:' prefix and replaces ':' with '-'.
 * @param value - The string to transform.
 * @returns The transformed string.
 * @originalName $$a2
 */
export function normalizeVariableId(value: string): string {
  return replaceColonWithDash(value.replace('VariableID:', ''))
}

// Refactored exports for clarity and traceability
export const EO = replaceColonWithDash // original: EO = $$r0
export const F4 = isFigmaDomain // original: F4 = $$n1
export const Ml = normalizeVariableId // original: Ml = $$a2
