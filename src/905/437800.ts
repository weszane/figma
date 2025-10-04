/**
 * Checks if the browser supports the Web Animations API
 * Original function name: $$n0
 * @returns {boolean} True if both Element.prototype.animate and Element.prototype.getAnimations are functions
 */
export function isWebAnimationsApiSupported(): boolean {
  return (
    typeof Element.prototype.animate === 'function'
    && typeof Element.prototype.getAnimations === 'function'
  )
}

/**
 * Alias for isWebAnimationsApiSupported
 * Original variable name: x
 */
export const x = isWebAnimationsApiSupported
