import { closeFullscreenAction } from "../905/541060"
import { initAction } from "../905/929976"
import { updateMirror } from "../figma_app/91703"
import { traverseAncestors, traverseChildren } from "../figma_app/387100"
import { debug } from "../figma_app/465776"
// Renamed variables, added types, simplified logic, and improved readability
// Origin: $$l2 function for managing selection state

interface SelectionPayload {
  add?: Record<string, any>
  remove?: Record<string, any>
  replace?: Record<string, any>
}

interface Action {
  type: string
  payload?: {
    selection?: SelectionPayload
  }
  matches: (action: Action) => boolean
}

type SelectionState = Record<string, any>

export function updateSelectionState(
  currentState: SelectionState = Object.create(null),
  action: Action,
): SelectionState {
  // Reset selection state for certain actions
  if (initAction.matches(action) || closeFullscreenAction.matches(action)) {
    return Object.create(null)
  }

  // Handle selection updates
  if (updateMirror.matches(action) && action.payload?.selection) {
    const { add, remove, replace } = action.payload.selection

    // Validate that we have either add/remove or replace, but not both
    debug(
      !((add || remove) && replace),
      "We expect either an add or remove OR a replace.",
    )

    // If replace is provided, use it directly
    if (replace) {
      return replace
    }

    // Merge add operations with current state and remove specified keys
    const newState = Object.assign(Object.create(null), currentState, add)
    if (remove) {
      for (const key in remove) {
        delete newState[key]
      }
    }

    return newState
  }

  // Return unchanged state if no relevant action
  return currentState
}

// Origin: $$d5 function for traversing children of nodes
export function traverseNodeChildren(
  nodeMap: Map<string, any>,
  targetNodes: Record<string, any>,
  callback: (node: any) => void,
): void {
  for (const nodeId in targetNodes) {
    const node = nodeMap.get(nodeId)
    if (node) {
      traverseChildren(node, callback)
    }
  }
}

// Origin: $$c1 function for applying callback to nodes
export function applyToNodes(
  nodeMap: Map<string, any>,
  targetNodes: Record<string, any>,
  callback: (node: any) => void,
): void {
  for (const nodeId in targetNodes) {
    const node = nodeMap.get(nodeId)
    if (node) {
      callback(node)
    }
  }
}

// Origin: $$u0 function for checking node existence
export function isNodeSelected(
  selectionState: Record<string, any>,
  nodeId: string,
): boolean {
  return !!selectionState[nodeId]
}

// Origin: $$p4 function for checking node presence with traversal
export function isNodePresentWithTraversal(
  nodeMap: Map<string, any>,
  targetNodes: Record<string, any>,
  nodeId: string,
): boolean {
  return !!findNodeWithTraversal(nodeMap, targetNodes, nodeId)
}

// Origin: $$_3 function for finding nodes with ancestor traversal
export function findNodeWithTraversal(
  nodeMap: Map<string, any>,
  targetNodes: Record<string, any>,
  nodeId: string,
): any | null {
  // Direct lookup
  if (targetNodes[nodeId]) {
    return nodeMap.get(nodeId) || null
  }

  // Traverse ancestors to find matching node
  let foundNode: any = null
  traverseAncestors(nodeMap, nodeId, (node: any) => {
    if (!foundNode && targetNodes[node.guid]) {
      foundNode = node
      return "stop" // Stop traversal
    }
    return undefined // Continue traversal
  })

  return foundNode
}

// Export aliases with descriptive names
export const K3 = isNodeSelected
export const YI = applyToNodes
export const bp = updateSelectionState
export const cX = findNodeWithTraversal
export const sp = isNodePresentWithTraversal
export const y2 = traverseNodeChildren
