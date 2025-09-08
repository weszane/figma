/**
 * Returns the list of codegen languages from the manifest, or a default empty language if none exist.
 * @param manifestWrapper - Object containing the manifest with codegenLanguages.
 * @returns Array of codegen language objects.
 * (Original function: $$n1)
 */
export function getCodegenLanguages(manifestWrapper: { manifest?: { codegenLanguages?: Array<{ value: string, label: string }> } }) {
  const languages = manifestWrapper.manifest?.codegenLanguages ?? []
  return languages.length > 0 ? languages : [{ value: '', label: '' }]
}

/**
 * Finds a codegen language by value, or returns the first available language.
 * @param manifestWrapper - Object containing the manifest with codegenLanguages.
 * @param value - The value to search for.
 * @returns The matching codegen language object, or the first one if not found.
 * (Original function: $$r0)
 */
export function findCodegenLanguage(manifestWrapper: { manifest?: { codegenLanguages?: Array<{ value: string, label: string }> } }, value: string) {
  const languages = getCodegenLanguages(manifestWrapper)
  return languages.find(lang => lang.value === value) ?? languages[0]
}

// Export refactored names for imports
export const X = findCodegenLanguage
export const m = getCodegenLanguages
