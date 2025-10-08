import { getSingletonSceneGraph } from "../905/700578"
import { assert } from "../figma_app/465776"

/**
 * Finds the first responsive set or webpage node in the directly selected nodes or their ancestors,
 * or in the children nodes if none found.
 * @param page - The page node to search in.
 * @returns The found node or null.
 */
function findResponsiveNode(page: any): any {
  for (const selectedNode of page.directlySelectedNodes) {
    let currentNode = selectedNode
    while (currentNode) {
      if (currentNode.isBreakpointFrame || currentNode.isDerivedWebpageBreakpoint || currentNode.isResponsiveSetOrWebpage) {
        return currentNode
      }
      currentNode = currentNode.parentNode
    }
  }
  return page.childrenNodes.find((child: any) => child.isResponsiveSetOrWebpage)
}

/**
 * Finds the largest frame child node by width.
 * @param node - The parent node to search in.
 * @returns The largest frame node or null.
 */
function findLargestFrame(node: any): any {
  let largestFrame = null
  for (const child of node.childrenNodes) {
    if (child && child.type === "FRAME" && (!largestFrame || child.size.x > largestFrame.size.x)) {
      largestFrame = child
    }
  }
  return largestFrame
}

/**
 * Gets the starting node ID and initial size for the given node ID or current page.
 * @param nodeId - Optional node ID to start from.
 * @returns An object with startingNodeId and initialSize, or null if not found.
 */
export function getStartingNodeInfo(nodeId?: string): { startingNodeId: string, initialSize: any } | null {
  const sceneGraph = getSingletonSceneGraph()
  const currentPage = sceneGraph.getCurrentPage()
  assert(currentPage !== null)

  const targetNode = (nodeId ? sceneGraph.get(nodeId) : null) || findResponsiveNode(currentPage)
  if (!targetNode) {
    return null
  }

  let startingNodeId: string
  let initialSize: any

  if (targetNode.parentNode?.isResponsiveSetOrWebpage) {
    startingNodeId = targetNode.parentNode.guid
    initialSize = targetNode.size
  }
  else {
    startingNodeId = targetNode.guid
    const largestFrame = findLargestFrame(targetNode)
    if (!largestFrame) {
      return null
    }
    initialSize = largestFrame.size
  }

  return {
    startingNodeId,
    initialSize,
  }
}

export const d = getStartingNodeInfo
