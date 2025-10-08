import { memoizeWithDeepEquality } from '../905/270781'
import { selectSceneGraph, selectSceneGraphSelectionKeys } from '../figma_app/889655'
/**
 * Checks if a fill is an image fill.
 * Original name: o
 * @param fill - The fill object to check.
 * @returns True if the fill is an image fill.
 */
function isImageFill(fill: any): boolean {
  return fill.type === 'IMAGE' && fill.image && fill.visible && fill.opacity !== 0
}

/**
 * Checks if a node is an image node.
 * Original name: $$s0
 * @param node - The node to check.
 * @returns True if the node is an image node.
 */
export function isImageNode(node: any): boolean {
  return !!(node.fills.some(isImageFill) && node.childCount === 0)
}

/**
 * Gets the types of selected items in the scene graph.
 * Original name: $$a1
 * @param state - The state object.
 * @returns An array of item types.
 */
export const getSelectedItemTypes = memoizeWithDeepEquality((state: any): string[] => {
  const sceneGraph = selectSceneGraph(state)
  const selectionKeys = selectSceneGraphSelectionKeys(state)
  const types: string[] = []
  selectionKeys.forEach((key: string) => {
    const item = sceneGraph.get(key)
    if (item) {
      types.push(isImageNode(item) ? 'IMAGE' : item.type)
    }
  })
  return types
})

// Aliases for backward compatibility
export const A = isImageNode
export const l = getSelectedItemTypes
