/**
 * Finds the closest ancestor of the given element that satisfies the predicate.
 * Traverses up the DOM tree until the predicate returns true or the stop element is reached.
 * @param element - The starting DOM element.
 * @param predicate - A function to test each ancestor element.
 * @param stopElement - The element at which to stop traversing.
 * @returns The matching ancestor element, or null if not found.
 * (Original function: $$n0)
 */
export function findClosestAncestor(element: Element | null, predicate: (el: Element) => boolean, stopElement?: Element): Element | null {
  let current = element
  while (current) {
    if (predicate(current))
      return current
    if (current === stopElement)
      break
    current = current.parentElement
  }
  return null
}

/**
 * Compares the position of two DOM elements in the document.
 * Returns 1 if the first element follows the second, -1 if it precedes, or 0 if they are the same.
 * @param a - The first DOM element.
 * @param b - The second DOM element.
 * @returns 1, -1, or 0 based on their relative position.
 * (Original function: $$r1)
 */
export function compareElementPosition(a: Node, b: Node): number {
  const position = a.compareDocumentPosition(b)
  if (position & Node.DOCUMENT_POSITION_PRECEDING)
    return 1
  if (position & Node.DOCUMENT_POSITION_FOLLOWING)
    return -1
  return 0
}

// Refactored exports for compatibility with original names
export const R = findClosestAncestor
export const y = compareElementPosition
