import { computeBackingGUIDs } from "../905/92359"
import { isInvalidValue } from "../905/216495"
import { getPublishedNodeId } from "../figma_app/97042"
// Refactored function with improved readability, type safety, and simplified logic
// Original function name: $$s0

interface Node {
  stateGroupKey: string
  type: string
  guid?: string
  symbolId?: string
  isState?: boolean
  isStateGroup?: boolean
  sourceLibraryKey?: string
  assetKeyForPublish?: string
  parentNode?: Node
}

interface BackingInfo {
  backingLibraryKey: string | null
  backingNodeId: string | null
  backingComponentKey?: string
  backingStateGroupKey?: string
}

export function getBackingNodeInfo(
  nodeId: string,
  nodeMap: Map<string, Node>,
  defaultLibraryKey: string,
): BackingInfo {
  const node = nodeMap.get(nodeId)

  // Return null values if node doesn't exist
  if (!node) {
    return {
      backingLibraryKey: null,
      backingNodeId: null,
    }
  }

  // Compute backing GUIDs based on node type
  const guid = node.type === "INSTANCE" ? node.symbolId : node.guid
  const { backingSymbolGUID, backingStateGroupGUID } = computeBackingGUIDs(
    new Set([guid ?? ""]),
    nodeMap,
  )

  // Initialize backing nodes
  let backingSymbolNode: Node | null = null
  let backingStateGroupNode: Node | null = null

  // Retrieve backing nodes if GUIDs are valid
  if (!isInvalidValue(backingSymbolGUID) && backingSymbolGUID !== null) {
    backingSymbolNode = nodeMap.get(backingSymbolGUID)
  }

  if (!isInvalidValue(backingStateGroupGUID) && backingStateGroupGUID !== null) {
    backingStateGroupNode = nodeMap.get(backingStateGroupGUID)
  }

  // Handle INSTANCE nodes with symbolId
  if (node.type === "INSTANCE" && node.symbolId) {
    const symbolNode = nodeMap.get(node.symbolId)

    // If symbol is a state, return state group info
    if (symbolNode?.isState) {
      const libraryKey = backingStateGroupNode?.sourceLibraryKey
      return {
        backingNodeId: getPublishedNodeId(backingStateGroupNode),
        backingComponentKey: backingSymbolNode?.assetKeyForPublish ?? undefined,
        backingStateGroupKey: backingStateGroupNode?.stateGroupKey ?? backingStateGroupNode?.assetKeyForPublish ?? undefined,
        backingLibraryKey: libraryKey && libraryKey !== "" ? libraryKey : defaultLibraryKey,
      }
    }

    // Otherwise return symbol info
    const libraryKey = backingSymbolNode?.sourceLibraryKey
    return {
      backingNodeId: getPublishedNodeId(backingSymbolNode),
      backingComponentKey: backingSymbolNode?.assetKeyForPublish ?? undefined,
      backingLibraryKey: libraryKey && libraryKey !== "" ? libraryKey : defaultLibraryKey,
    }
  }

  // Handle SYMBOL nodes
  if (node.type === "SYMBOL") {
    if (node.isState) {
      // For state symbols, use parent node info
      const parentNode = node.parentNode
      return {
        backingNodeId: getPublishedNodeId(parentNode),
        backingComponentKey: parentNode?.assetKeyForPublish ?? undefined,
        backingLibraryKey: parentNode?.sourceLibraryKey && parentNode.sourceLibraryKey !== ""
          ? parentNode.sourceLibraryKey
          : defaultLibraryKey,
      }
    }
    else {
      // For regular symbols, use node info
      return {
        backingNodeId: getPublishedNodeId(node),
        backingComponentKey: node.assetKeyForPublish ?? undefined,
        backingLibraryKey: node.sourceLibraryKey && node.sourceLibraryKey !== ""
          ? node.sourceLibraryKey
          : defaultLibraryKey,
      }
    }
  }

  // Handle state group nodes
  if (node.isStateGroup) {
    return {
      backingNodeId: getPublishedNodeId(node),
      backingComponentKey: node.assetKeyForPublish ?? undefined,
      backingLibraryKey: node.sourceLibraryKey && node.sourceLibraryKey !== ""
        ? node.sourceLibraryKey
        : defaultLibraryKey,
    }
  }

  // Default case for unsupported node types
  return {
    backingLibraryKey: null,
    backingNodeId: null,
  }
}

export const K = getBackingNodeInfo
