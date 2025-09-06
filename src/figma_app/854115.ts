import { atom } from 'jotai'

/**
 * Atom to store an array of items.
 * Original name: $$n0
 */
export const figmaItemsAtom = atom([])

/**
 * Finds the GUID or publishID for a given element.
 * Original name: $$i1
 *
 * @param elementId - The ID of the element to look up.
 * @param elementMap - A map containing element data.
 * @param canvasManager - An object providing access to the internal canvas.
 * @returns The GUID if found, otherwise the publishID.
 */
export function findComponentGuidOrPublishId(
  elementId: string,
  elementMap: Map<string, any>,
  canvasManager: { getInternalCanvas: () => any },
): string | undefined {
  const element = elementMap.get(elementId)
  const symbolElement = elementMap.get(element?.symbolId ?? '')
  if (symbolElement?.componentKey) {
    const canvas = canvasManager.getInternalCanvas()
    for (const node of canvas?.childrenNodes ?? []) {
      if (node.componentKey === symbolElement?.componentKey) {
        return node.guid
      }
      if (node.isStateGroup) {
        for (const childNode of node.childrenNodes) {
          if (childNode.componentKey === symbolElement?.componentKey) {
            return childNode.guid
          }
        }
      }
    }
  }
  return symbolElement?.publishID
}

// Refactored exports to match new names
export const J = figmaItemsAtom
export const n = findComponentGuidOrPublishId
