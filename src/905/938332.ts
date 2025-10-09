import { D, d } from "../905/433403"
import { getFeatureFlags } from "../905/601108"
import { getBackingNodeInfo } from "../905/621769"
import { atomStoreManager } from "../figma_app/27355"
import { checkComponentBrowserAccess } from "../figma_app/601682"

// Refactored to improve readability, add type safety, and simplify logic
// Renamed variables, added types, simplified nested functions, improved error handling

interface Node {
  type: string
  guid: string
  name: string
  childrenNodes?: Node[]
}

interface SceneGraph {
  // Define based on actual structure if available
  [key: string]: any
}



interface ComponentInfo {
  nodeId: string
  nodeGuid: string
  name: string
  libraryKey: string | null
}

interface LibraryState {
  publishedByLibraryKey: {
    components: {
      [teamId: string]: {
        [libraryKey: string]: Record<string, unknown>
      }
    }
  }
}

interface OpenFile {
  teamId?: string
  libraryKey?: string
}

interface StoreState {
  openFile?: OpenFile
  library: LibraryState
  mirror: {
    sceneGraph: SceneGraph
  }
}

interface StoreContext {
  getState: () => StoreState
}

/**
 * Checks if the feature flag is enabled and user has access to component browser
 * @param context - Redux thunk store context
 */
function shouldShowUnmappedComponentsBanner(context: StoreContext): boolean {
  // Check if feature flag is disabled
  if (!getFeatureFlags().dt_mcp_unmapped_components_banner) {
    return false
  }

  const state = context.getState()
  const openFile = state.openFile

  // No open file
  if (!openFile) {
    return false
  }

  const libraryState = state.library.publishedByLibraryKey
  const teamId = openFile.teamId
  const libraryKey = openFile.libraryKey

  // Check if there are components in the library
  const hasComponents = !!(
    teamId
    && libraryKey
    && Object.keys(libraryState.components[teamId]?.[libraryKey] ?? []).length > 0
  )

  return !!checkComponentBrowserAccess(openFile, hasComponents)
}

/**
 * Extracts all SYMBOL and INSTANCE nodes from a node tree
 * @param node - Root node to traverse
 * @returns Array of symbol and instance nodes
 */
function extractSymbolAndInstanceNodes(node: Node): Node[] {
  const result: Node[] = []

  function traverse(currentNode: Node): void {
    // Add node if it's a SYMBOL or INSTANCE
    if (currentNode.type === "SYMBOL" || currentNode.type === "INSTANCE") {
      result.push(currentNode)
      return
    }

    // Traverse children if they exist
    if (Array.isArray(currentNode.childrenNodes)) {
      currentNode.childrenNodes.forEach(traverse)
    }
  }

  traverse(node)
  return result
}

/**
 * Processes nodes to extract unmapped component information
 * @param rootNode - Root node to process
 * @param storeContext - Redux store context
 * @returns Array of unmapped component info
 */
function processUnmappedComponents(rootNode: Node, storeContext: StoreContext): ComponentInfo[] {
  const symbolAndInstanceNodes = extractSymbolAndInstanceNodes(rootNode)
  const unmappedComponents: ComponentInfo[] = []
  const sceneGraph = storeContext.getState().mirror.sceneGraph

  symbolAndInstanceNodes.forEach((node) => {
    const { backingNodeId, backingLibraryKey } = getBackingNodeInfo(
      node.guid,
      sceneGraph,
      null,
    )

    // Skip if no backing node ID
    if (!backingNodeId) {
      return
    }

    const componentInfo: ComponentInfo = {
      nodeId: backingNodeId,
      nodeGuid: node.guid,
      name: node.name,
      libraryKey: backingLibraryKey || null,
    }

    // Avoid duplicates by checking if component already exists
    const isDuplicate = unmappedComponents.some(
      existing => existing.nodeId === backingNodeId,
    )

    if (!isDuplicate) {
      unmappedComponents.push(componentInfo)
    }
  })

  return unmappedComponents
}

/**
 * Updates atom store with unmapped components data
 * Original function name: $$l0
 * @param rootNode - Root node to analyze
 * @param processedNodesSet - Set of already processed node GUIDs
 * @param storeContext - Redux store context
 */
export function updateUnmappedComponentsStore(
  rootNode: Node,
  processedNodesSet: Set<string>,
  storeContext: StoreContext,
): void {
  // Early exit if banner shouldn't be shown
  if (!shouldShowUnmappedComponentsBanner(storeContext)) {
    return
  }

  try {
    // Process nodes to get unmapped components
    const unmappedComponents = processUnmappedComponents(rootNode, storeContext)

    // Filter out already processed nodes
    const newUnmappedComponents = unmappedComponents.filter(
      component => !processedNodesSet.has(component.nodeGuid),
    )

    // Update atom stores
    atomStoreManager.set(D, newUnmappedComponents)
    atomStoreManager.set(d, newUnmappedComponents.length > 0)
  }
  catch (error) {
    console.error("Error storing unmapped components:", error)
  }
}

export const Q = updateUnmappedComponentsStore
