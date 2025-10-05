/**
 * Sets or removes an attribute on an element based on the provided value.
 *
 * @param element - The DOM element to modify
 * @param attributeName - The name of the attribute to set or remove
 * @param value - The value to set; if null or undefined, the attribute is removed
 */
export function setOrRemoveAttribute(element: Element, attributeName: string, value: string | null | undefined): void {
  if (value == null) {
    element.removeAttribute(attributeName)
  }
  else {
    element.setAttribute(attributeName, value)
  }
}

/**
 * Checks if an element has a specific attribute in its ancestry chain.
 *
 * @param element - The DOM element to check
 * @param attributeName - The name of the attribute to look for
 * @returns True if the element or one of its ancestors has the attribute
 */
export function hasAncestorWithAttribute(element: Element | null, attributeName: string): boolean {
  return element != null
    && typeof element.closest === 'function'
    && element.closest(`[${attributeName}]`) != null
}

/**
 * Traverses up the DOM tree from an element to find the first ancestor that matches a condition.
 *
 * @param element - The starting DOM element
 * @param boundary - The boundary element to stop at (inclusive)
 * @param predicate - A function that tests each element
 * @returns The first matching element, or null if none found
 */
export function findAncestorMatchingCondition(
  element: Element | null,
  boundary: Element,
  predicate: (el: Element) => boolean,
): Element | null {
  let current: Element | null = element

  while (current) {
    if (predicate(current)) {
      return current
    }

    if (current === boundary) {
      break
    }

    current = current.parentElement
  }

  return null
}

/**
 * Finds the closest HTMLElement in the node's ancestry.
 *
 * @param node - The starting node
 * @returns The closest HTMLElement, or null if none found
 */
export function findClosestHTMLElement(node: Node | null): HTMLElement | null {
  while (node) {
    if (node instanceof HTMLElement) {
      return node
    }

    if (!('parentNode' in node)) {
      return null
    }

    node = node.parentNode
  }

  return null
}

/**
 * Checks if an element is focusable.
 *
 * @param element - The element to check
 * @returns True if the element is focusable
 */
export function isFocusable(element: HTMLElement | null): boolean {
  if (!element)
    return false

  return isButtonElement(element)
    || isLinkElement(element)
    || isInputEditable(element)
    || element.isContentEditable
    || element.hasAttribute("tabindex")
}

/**
 * Checks if an element is an input element.
 *
 * @param element - The element to check
 * @returns True if the element is an input
 */
export function isInputElement(element: Element | null): boolean {
  return !!element && element.tagName === "INPUT"
}

/**
 * Checks if an element is a link with an href attribute.
 *
 * @param element - The element to check
 * @returns True if the element is a link with href
 */
function isLinkElement(element: Element | null): boolean {
  return !!element && element.tagName === "A" && element.hasAttribute("href")
}

/**
 * Checks if an input element is a button-type input.
 *
 * @param element - The input element to check
 * @returns True if the input is a button or submit type
 */
function isButtonTypeInput(element: HTMLInputElement): boolean {
  return element.type === "button" || element.type === "submit"
}

/**
 * Checks if an element is a button or button-like element.
 *
 * @param element - The element to check
 * @returns True if the element is a button or button-like
 */
function isButtonElement(element: Element | null): boolean {
  return !!element && (
    element.tagName === "BUTTON"
    || (isInputElement(element) && isButtonTypeInput(element as HTMLInputElement))
  )
}

/**
 * Checks if an element is a button or behaves like a button.
 *
 * @param element - The element to check
 * @returns True if the element is button-like
 */
export function isButtonLike(element: Element | null): boolean {
  return isLinkElement(element) || !!element && (
    isButtonElement(element)
    || hasRole(element, "button")
  )
}

/**
 * Checks if an element is an editable input element.
 *
 * @param element - The element to check
 * @returns True if the element is an editable input
 */
export function isInputEditable(element: Element | null): boolean {
  return !!element && (
    (isInputElement(element) && !isButtonTypeInput(element as HTMLInputElement))
    || element.tagName === "SELECT"
    || element.tagName === "TEXTAREA"
  )
}

/**
 * Checks if an element has a specific role attribute.
 *
 * @param element - The element to check
 * @param roles - The roles to check for
 * @returns True if the element has one of the specified roles
 */
function hasRole(element: Element, ...roles: string[]): boolean {
  const role = element.getAttribute("role")
  return role !== null && roles.includes(role)
}

// Export aliases for backward compatibility
export const Ap = isInputEditable
export const Bu = isButtonLike
export const NX = hasAncestorWithAttribute
export const Og = isInputElement
export const SD = findClosestHTMLElement
export const Xx = isFocusable
export const c2 = setOrRemoveAttribute
export const qR = findAncestorMatchingCondition
