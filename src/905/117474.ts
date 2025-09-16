import { isFocusable, isTabbable, tabbable } from 'tabbable'
import { findClosestAncestor } from '../905/987614'

/**
 * Checks if the given element is the currently active element.
 * @param element - The DOM element to check.
 * @returns True if the element is active, false otherwise.
 * (Original: $$a3)
 */
export function isActiveElement(element: Element): boolean {
  return document.activeElement === element
}

/**
 * Checks if the active element is contained within the given element.
 * @param element - The DOM element to check.
 * @returns True if the active element is contained, false otherwise.
 * (Original: $$s2)
 */
export function containsActiveElement(element: Element): boolean {
  return element.contains(document.activeElement)
}

/**
 * Finds the closest ancestor of the element that is focusable.
 * @param element - The DOM element to start from.
 * @returns The closest focusable ancestor or null.
 * (Original: $$o5)
 */
export function closestFocusableAncestor(element: Element): Element | null {
  return findClosestAncestor(element, isFocusable)
}

/**
 * Focuses the given element and selects its content if possible.
 * @param element - The DOM element to focus.
 * @returns The focused element or null.
 * (Original: $$l6)
 */
export function focusAndSelect(element: HTMLElement | null): HTMLElement | null {
  if (!element)
    return null
  element.focus()
  if ('select' in element && typeof (element as any).select === 'function') {
    (element as any).select()
  }
  return element
}

/**
 * Returns all tabbable elements within the given element, including shadow roots.
 * @param element - The DOM element to search within.
 * @returns Array of tabbable elements.
 * (Original: $$d1)
 */
export function getTabbableElements(element: Element): Element[] {
  return tabbable(element, { getShadowRoot: true })
}

/**
 * Returns the next node and the last node in the tree walker for the given element.
 * @param element - The DOM element to start from.
 * @returns Tuple of [nextNode, lastNode].
 * (Original: $$c4)
 */
export function getNextAndLastNode(element: Element): [Node | null, Node | null] {
  const walker = createTreeWalker(isTabbable)(element)
  const next = walker.nextNode()
  walker.currentNode = element
  return [next, getLastNode(walker)]
}

/**
 * Provides focus navigation utilities for a ref object.
 * @param ref - React ref object containing a DOM element.
 * @param options - Options for navigation criteria.
 * @returns Object with focus navigation methods.
 * (Original: $$u0)
 */
export function setupFocusNavigator<T extends { current: Element | null }>(
  ref: T,
  { criteria = 'tabbable' }: { criteria?: 'tabbable' | 'focusable' } = {},
) {
  const walkerFactory = criteria === 'tabbable' ? createTreeWalker(isTabbable) : createTreeWalker(isFocusable)

  return {
    /**
     * Focuses the next element in the navigation order.
     * @param options - Options for wrapping navigation.
     * @returns The focused element or null.
     */
    focusNext({ wrap = false } = {}): HTMLElement | null {
      const current = ref.current
      if (!current)
        return null
      const walker = walkerFactory(current, document.activeElement)
      let next = walker.nextNode()
      if (!next && wrap) {
        walker.currentNode = current
        next = walker.nextNode()
      }
      return focusAndSelect(next as HTMLElement | null)
    },

    /**
     * Focuses the previous element in the navigation order.
     * @param options - Options for wrapping navigation.
     * @returns The focused element or null.
     */
    focusPrevious({ wrap = false } = {}): HTMLElement | null {
      const current = ref.current
      if (!current)
        return null
      const walker = walkerFactory(current, document.activeElement)
      if (walker.currentNode === current) {
        return focusAndSelect(getLastNode(walker) as HTMLElement | null)
      }
      let prev = walker.previousNode()
      if ((!prev || prev === current) && wrap) {
        walker.currentNode = current
        prev = getLastNode(walker)
      }
      return prev === current ? null : focusAndSelect(prev as HTMLElement | null)
    },

    /**
     * Focuses the first element in the navigation order.
     * @returns The focused element or null.
     */
    focusFirst(): HTMLElement | null {
      const current = ref.current
      return current ? focusAndSelect(walkerFactory(current).nextNode() as HTMLElement | null) : null
    },

    /**
     * Focuses the last element in the navigation order.
     * @returns The focused element or null.
     */
    focusLast(): HTMLElement | null {
      const current = ref.current
      return current ? focusAndSelect(getLastNode(walkerFactory(current)) as HTMLElement | null) : null
    },
  }
}

/**
 * Creates a TreeWalker for the given filter function.
 * @param filter - Function to filter nodes.
 * @returns Function to create a TreeWalker.
 * (Original: h)
 */
function createTreeWalker(
  filter: (node: Node) => boolean,
): (root: Node, startNode?: Node) => TreeWalker {
  return (root, startNode) => {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, node => filter(node) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP)
    if (startNode && root.contains(startNode)) {
      walker.currentNode = startNode
    }
    return walker
  }
}

/**
 * Gets the last node in the TreeWalker.
 * @param walker - The TreeWalker instance.
 * @returns The last node.
 * (Original: g)
 */
function getLastNode(walker: TreeWalker): Node | null {
  while (walker.lastChild()) { /* move to last child */ }
  return walker.currentNode
}

// Refactored exports with new names
export const C7 = setupFocusNavigator
export const Jc = getTabbableElements
export const ae = containsActiveElement
export const ar = isActiveElement
export const bk = getNextAndLastNode
export const bq = closestFocusableAncestor
export const pW = focusAndSelect
