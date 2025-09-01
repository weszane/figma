/**
 * Returns the global window object if available, otherwise globalThis.
 * Throws an error if neither is found.
 * @returns {Window | typeof globalThis}
 */
export function getGlobalThis() {
  if (typeof window !== 'undefined') {
    return window
  }
  if (typeof globalThis !== 'undefined') {
    return globalThis
  }
  throw new Error('Failed to get window or globalThis')
}

/**
 * Alias for getGlobalObject.
 */
export const n = getGlobalThis
