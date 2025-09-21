/**
 * Checks if the given element is an HTMLElement and has either
 * 'data-fullscreen-intercept' or 'data-fullscreen-intercept-dangerously-include-tab' attribute.
 * @param element - The element to check.
 * @returns True if the element meets the criteria, false otherwise.
 * @originalName $$n0
 */
export function isFullscreenInterceptElement(element: unknown): boolean {
  if (!(element instanceof HTMLElement))
    return false
  return (
    element.hasAttribute('data-fullscreen-intercept')
    || element.hasAttribute('data-fullscreen-intercept-dangerously-include-tab')
  )
}

// Export with original variable name for compatibility
export const t = isFullscreenInterceptElement
