/**
 * Checks if the current window is not the top-level window.
 * @returns {boolean} True if the current window is not the top window.
 * (Original function: $$n0)
 */
export function isNotTopWindow(): boolean {
  return self !== top
}

// Export with refactored name for clarity (Original export: G)
export const G = isNotTopWindow
