/**
 * Checks if an element is focusable.
 * Original function name: $$n0
 * @param element - The DOM element to check.
 * @returns True if the element is focusable, false otherwise.
 */
export function isElementFocusable(element: HTMLElement): boolean {
  const nodeName = element.nodeName.toLowerCase()
  const hasTabIndex = element.getAttribute('tabindex') !== null
  const tabIndexNotNegative = element.getAttribute('tabindex') !== '-1'

  // Helper to check if element is hidden by CSS visibility
  function isHiddenByVisibility(el: HTMLElement): boolean {
    if (!(el.offsetWidth || el.offsetHeight || el.getClientRects().length))
      return true
    let visibility = getComputedStyle(el).visibility
    while (visibility === 'inherit' && el.parentElement) {
      el = el.parentElement
      visibility = getComputedStyle(el).visibility
    }
    return visibility === 'hidden'
  }

  const isFormElement = /^(?:input|select|textarea|button)$/.test(nodeName)
  const isAnchorWithHref = nodeName === 'a' && !!(element instanceof HTMLAnchorElement && element.href)
  const isEnabled = isFormElement ? !(element as HTMLButtonElement).disabled : isAnchorWithHref || hasTabIndex

  return tabIndexNotNegative && !!isEnabled && !isHiddenByVisibility(element)
}

// Refactored export name for B
export const B = isElementFocusable
