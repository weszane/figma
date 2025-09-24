import type { TSSceneGraph } from '../figma_app/518682'
import { NodeTsApiUnavailableError, SceneGraphUnavailableError } from '../figma_app/518682'
import { NodeTsApi, SceneGraphTsApi } from '../figma_app/763686'

// Original function: $$a0
/**
 * Traverses up the node hierarchy to find the nearest canvas node.
 * @param node - The starting node to traverse from.
 * @returns The nearest canvas node or the original node if no canvas is found.
 */
export function findNearestCanvas(node: any): any {
  let current = node
  while (current.parentNode && current.type !== 'CANVAS' && current.parentNode.type !== 'CANVAS') {
    current = current.parentNode
  }
  return current
}

// Original function: $$s1
/**
 * Finds a component node within a state group based on symbol ID and component key.
 * @param componentKey - The key of the component to find.
 * @param symbolNode - The symbol node containing the ID.
 * @param nodeMap - A map of node IDs to nodes.
 * @returns The found component node or null if not found.
 * @throws {SceneGraphUnavailableError} If SceneGraphTsApi is unavailable.
 * @throws {NodeTsApiUnavailableError} If NodeTsApi is unavailable.
 */
export function findComponentInStateGroup(componentKey: string, symbolNode: any, nodeMap: TSSceneGraph): any | null {
  if (!componentKey) {
    return null
  }
  if (!NodeTsApi) {
    throw new SceneGraphUnavailableError()
  }
  if (!SceneGraphTsApi) {
    throw new NodeTsApiUnavailableError()
  }
  const symbolId = symbolNode.symbolId
  if (symbolId) {
    const symbolEntry = nodeMap.get(symbolId)
    if (symbolEntry) {
      const stateGroup = nodeMap.get(symbolEntry.containingStateGroupId)
      if (stateGroup) {
        const component = stateGroup.childrenNodes.find((child: any) => child.componentKey === componentKey)
        if (component) {
          return component
        }
      }
    }
  }
  return null
}

// Refactored exports
export const B = findNearestCanvas
export const t = findComponentInStateGroup
