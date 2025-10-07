/**
 * Selects an element by its data-element-target attribute.
 * Original function name: $$n0
 * @param target - The target value for the data-element-target attribute.
 * @returns The matching element or null.
 */
export function getElementByDataTarget(target: string): Element | null {
  return document.querySelector(`[data-element-target=${target}]`)
}

/**
 * Checks if a node is contained within a container element.
 * Original function name: $$r1
 * @param node - The node to check.
 * @param container - The container element.
 * @returns True if the node is contained in the container, false otherwise.
 */
export function isNodeContainedIn(node: Node | null, container: Element | null): boolean {
  return !!container && !!node && node instanceof Node && container.contains(node)
}

// Refactored export aliases (original: Tc = $$n0, n3 = $$r1)
export const Tc = getElementByDataTarget
export const n3 = isNodeContainedIn
