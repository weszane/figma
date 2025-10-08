import { isValidSessionLocalID, parseSessionLocalID, sessionLocalIDToString } from "../905/871411"

interface NodeResolutionOptions {
  /** The scene graph to resolve nodes from */
  sceneGraph: any
  /** Currently selected node IDs */
  selectionNodeIds: string[]
  /** Tool arguments that may contain a specific nodeId */
  toolArgs?: { nodeId?: string }
  /** Whether multiple nodes are allowed */
  allowMultiNode: boolean
  /** Whether page node is allowed as fallback */
  allowPageNode: boolean
}

interface NodeIdValidatorOptions {
  /** Raw node ID to validate and normalize */
  rawNodeId: string
}

interface NodeResolverOptions {
  /** Scene graph to search in */
  sceneGraph: any
  /** Normalized node ID to look up */
  nodeId: string
}

interface SelectionProcessorOptions {
  /** Scene graph to search in */
  sceneGraph: any
  /** Selected node IDs to process */
  selectedNodeIds: string[]
  /** Whether multiple nodes are allowed */
  allowMultiNode: boolean
  /** Whether to allow page node as fallback */
  allowPageNode: boolean
}

/**
 * Validates and normalizes a raw node ID string
 * @param options - Configuration for node ID validation
 * @returns Normalized node ID string
 * @throws Error if the node ID is invalid
 */
function validateAndNormalizeNodeId(options: NodeIdValidatorOptions): string {
  const { rawNodeId } = options

  // Replace hyphens with colons to match expected format
  const formattedId = rawNodeId.replace(/-/g, ":")
  const parsedId = parseSessionLocalID(formattedId)

  if (parsedId === null || !isValidSessionLocalID(parsedId)) {
    throw new Error(`Invalid nodeId provided: ${rawNodeId}`)
  }

  return sessionLocalIDToString(parsedId)
}

/**
 * Resolves a single node from the scene graph by its ID
 * @param options - Configuration for node resolution
 * @returns The resolved node
 * @throws Error if node cannot be found
 */
function resolveNodeById(options: NodeResolverOptions): any {
  const { sceneGraph, nodeId } = options
  const node = sceneGraph.get(nodeId)

  if (!node) {
    throw new Error("Could not find node from the provided nodeId")
  }

  return node
}

/**
 * Processes selection based on current selection state and configuration
 * @param options - Configuration for selection processing
 * @returns Array of resolved nodes
 * @throws Error if no valid nodes can be resolved
 */
function processSelection(options: SelectionProcessorOptions): any[] {
  const { sceneGraph, selectedNodeIds, allowMultiNode, allowPageNode } = options

  // Handle empty selection
  if (selectedNodeIds.length === 0) {
    if (allowPageNode) {
      const currentPage = sceneGraph.getCurrentPage()
      if (!currentPage) {
        throw new Error("No page found")
      }
      return [currentPage]
    }
    throw new Error("Nothing is selected")
  }

  // Resolve nodes from selection
  const resolvedNodes = selectedNodeIds
    .map(id => sceneGraph.get(id))
    .filter(node => node !== null)

  if (resolvedNodes.length === 0) {
    throw new Error("Could not find node from selection")
  }

  // Validate multi-node selection
  if (resolvedNodes.length > 1 && !allowMultiNode) {
    throw new Error("Multiple nodes selected. Only selecting a single node is supported.")
  }

  return resolvedNodes
}

/**
 * Resolves nodes based on tool arguments or current selection
 * @param options - Configuration for node resolution
 * @returns Array of resolved nodes
 * @throws Error when node resolution fails
 */
export function resolveNodes(options: NodeResolutionOptions): any[] {
  const { sceneGraph, selectionNodeIds, toolArgs, allowMultiNode, allowPageNode } = options

  // Handle explicit node ID from tool args
  if (toolArgs?.nodeId) {
    // Validate tool args nodeId format
    if (typeof toolArgs.nodeId !== "string" || toolArgs.nodeId.trim() === "") {
      throw new Error(`Invalid nodeId provided in toolArgs: ${JSON.stringify(toolArgs)}`)
    }

    try {
      // Normalize and validate the provided node ID
      const normalizedNodeId = validateAndNormalizeNodeId({
        rawNodeId: toolArgs.nodeId,
      })

      // Resolve the specific node
      const node = resolveNodeById({
        sceneGraph,
        nodeId: normalizedNodeId,
      })

      return [node]
    }
    catch {
      throw new Error(`No node could not be found for the provided nodeId: ${toolArgs.nodeId}. Make sure the Figma desktop app is open and the document containing the node is the active tab.`)
    }
  }

  // Process based on current selection
  return processSelection({
    sceneGraph,
    selectedNodeIds: selectionNodeIds,
    allowMultiNode,
    allowPageNode,
  })
}

export const Q = resolveNodes
