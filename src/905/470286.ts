/**
 * Checks if a given path matches specific route patterns
 * Original function name: $$n0
 * @param path - The path string to test against route patterns
 * @returns boolean indicating if path matches deck, presenter, or proto routes
 */
export function isSpecialRoutePath(path: string): boolean {
  const deckPresenterPattern = /^\/(deck|presenter)\//
  const protoPattern = /^\/(proto)\//

  return deckPresenterPattern.test(path) || protoPattern.test(path)
}

// Alias for backward compatibility
export const Sh = isSpecialRoutePath
