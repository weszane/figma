/**
 * Layer Renaming Module
 * 
 * Handles automatic layer renaming functionality for design systems
 * and first draft lint operations.
 * 
 * Original functions: en (renameLayersInNode), er (renameSelectedLayers)
 */

/**
 * Interface for layer filtering criteria
 */
interface LayerFilterCriteria {
  lockGuids: string[]
  renameGuids: string[]
}

/**
 * Interface for basic node structure
 */
interface BaseNode {
  guid: string
  name?: string
  type: string
  childCount: number
  childrenGuids: string[]
  isStateGroup?: boolean
  isInstanceSublayer?: boolean
}

/**
 * Interface for page/selection context
 */
interface PageContext {
  directlySelectedNodes: BaseNode[]
}

/**
 * Mock interfaces for external dependencies (to be replaced with actual implementations)
 */
interface LayerRenamingService {
  get: (guid: string) => BaseNode | null
  getCurrentPage: () => PageContext | null
}

interface SelectionService {
  clearSelection: () => void
  addToSelection: (guids: string[]) => void
  setNodeLocked: (guid: string, locked: boolean, skipValidation: boolean) => void
}

interface LoggingService {
  logInfo: (category: string, message: string, data?: any) => void
  logError: (category: string, message: string, data?: any) => void
}

interface RenamingEngine {
  performRename: (description: string, strategy: any, options: any) => Promise<void>
}

// Placeholder implementations (to be replaced with actual services)
const mockLayerService: LayerRenamingService = {
  get: () => null,
  getCurrentPage: () => null,
}

const mockSelectionService: SelectionService = {
  clearSelection: () => { },
  addToSelection: () => { },
  setNodeLocked: () => { },
}

const mockLoggingService: LoggingService = {
  logInfo: (category, message, data) => console.warn(`[${category}] ${message}`, data),
  logError: (category, message, data) => console.error(`[${category}] ${message}`, data),
}

const mockRenamingEngine: RenamingEngine = {
  performRename: async () => { },
}

/**
 * Checks if a node should be renamed based on design system rules
 * Original logic from the en function
 */
function shouldRenameNode(node: BaseNode): boolean {
  const name = node.name
  
  // Skip if no name
  if (!name) return false
  
  // Skip specific node types
  if (node.type === 'SYMBOL' || 
    node.isStateGroup || 
    node.isInstanceSublayer ||
    node.type === 'INSTANCE') {
    return false
  }
  
  // Skip nodes with special naming patterns
  if (name.endsWith('?') || 
    name.startsWith('Image')) {
    return false
  }
  
  return true
}

/**
 * Checks if a node is renameable (simplified version)
 */
function isNodeRenameable(node: BaseNode): boolean {
  // Simplified check - in real implementation this would use jX function
  return node.type !== 'DOCUMENT' && !node.name?.startsWith('_')
}

/**
 * Categorizes nodes into those that should be locked vs renamed
 * Original function: Logic extracted from en function
 */
function categorizeNodesForRenaming(rootNode: BaseNode, layerService: LayerRenamingService): LayerFilterCriteria {
  const result: LayerFilterCriteria = {
    lockGuids: [],
    renameGuids: [],
  }
  
  const nodesToProcess = [rootNode.guid]
  
  while (nodesToProcess.length > 0) {
    const currentGuid = nodesToProcess.pop()
    if (!currentGuid) continue
    
    const currentNode = layerService.get(currentGuid)
    if (!currentNode) continue
    
    // Check if node is renameable and visible
    if (isNodeRenameable(currentNode)) {
      if (shouldRenameNode(currentNode)) {
        result.renameGuids.push(currentNode.guid)
      } else {
        result.lockGuids.push(currentNode.guid)
      }
    }
    
    // Add children to processing queue
    if (currentNode.childCount > 0) {
      nodesToProcess.push(...currentNode.childrenGuids)
    }
  }
  
  return result
}

/**
 * Renames layers within a specific node hierarchy
 * Original function: en
 */
export async function renameLayersInNode(
  node: BaseNode,
  layerService: LayerRenamingService = mockLayerService,
  selectionService: SelectionService = mockSelectionService,
  loggingService: LoggingService = mockLoggingService,
  renamingEngine: RenamingEngine = mockRenamingEngine
): Promise<void> {
  const { lockGuids, renameGuids } = categorizeNodesForRenaming(node, layerService)
  
  if (renameGuids.length === 0) {
    loggingService.logInfo('first draft', 'No layers to rename', {
      guid: node.guid,
      name: node.name,
    })
    return
  }
  
  try {
    // Clear current selection
    selectionService.clearSelection()
    
    // Temporarily lock nodes that shouldn't be renamed
    for (const guid of lockGuids) {
      selectionService.setNodeLocked(guid, true, false)
    }
    
    // Select nodes to be renamed
    selectionService.addToSelection(renameGuids)
    
    // Perform the renaming operation
    await renamingEngine.performRename('First Draft Lint: Rename Layers', null, {
      source: 'FIRST_DRAFT_LINT',
      overwriteNames: false,
    })
    
  } catch (error) {
    loggingService.logError('first draft', 'Error renaming layers', { error })
  } finally {
    // Unlock previously locked nodes
    for (const guid of lockGuids) {
      selectionService.setNodeLocked(guid, false, false)
    }
  }
}

/**
 * Renames layers in all currently selected nodes
 * Original function: er
 */
export async function renameSelectedLayers(
  layerService: LayerRenamingService = mockLayerService,
  selectionService: SelectionService = mockSelectionService,
  loggingService: LoggingService = mockLoggingService,
  renamingEngine: RenamingEngine = mockRenamingEngine
): Promise<void> {
  const currentPage = layerService.getCurrentPage()
  if (!currentPage) {
    loggingService.logError('layer-renaming', 'No current page found for layer renaming')
    return
  }
  
  const selectedNodes = currentPage.directlySelectedNodes
  
  try {
    // Process each selected node
    for (const node of selectedNodes) {
      await renameLayersInNode(node, layerService, selectionService, loggingService, renamingEngine)
    }
  } finally {
    // Restore original selection (this would need actual implementation)
    // currentPage.directlySelectedNodes = selectedNodes
  }
}

/**
 * Configuration for layer renaming operations
 */
export interface LayerRenamingConfig {
  overwriteNames: boolean
  source?: string
  skipInstanceChildren?: boolean
  skipSpecialNodes?: boolean
}

/**
 * Enhanced layer renaming with configuration options
 */
export async function renameLayersWithConfig(
  nodes: BaseNode[],
  _config: LayerRenamingConfig = { overwriteNames: false },
  layerService: LayerRenamingService = mockLayerService,
  selectionService: SelectionService = mockSelectionService,
  loggingService: LoggingService = mockLoggingService,
  renamingEngine: RenamingEngine = mockRenamingEngine
): Promise<void> {
  for (const node of nodes) {
    try {
      await renameLayersInNode(node, layerService, selectionService, loggingService, renamingEngine)
    } catch (error) {
      loggingService.logError('layer-renaming', `Failed to rename layers in node ${node.guid}`, { error })
      // Continue with other nodes even if one fails
    }
  }
}

/**
 * Utility function to check if a layer name follows naming conventions
 */
export function isLayerNameValid(name: string): boolean {
  if (!name || name.trim().length === 0) return false
  
  // Check for common anti-patterns
  const antiPatterns = [
    /^(frame|group|rectangle|ellipse|text|line)\s*\d*$/i, // Default names
    /^untitled/i, // Untitled elements
    /^\s*$/, // Empty or whitespace only
  ]
  
  return !antiPatterns.some(pattern => pattern.test(name.trim()))
}

/**
 * Gets statistics about layer naming in a node hierarchy
 */
export function getLayerNamingStats(
  rootNode: BaseNode,
  layerService: LayerRenamingService = mockLayerService
): {
  total: number
  validNames: number
  invalidNames: number
  unnamed: number
} {
  const stats = {
    total: 0,
    validNames: 0,
    invalidNames: 0,
    unnamed: 0,
  }
  
  const nodesToProcess = [rootNode.guid]
  
  while (nodesToProcess.length > 0) {
    const currentGuid = nodesToProcess.pop()
    if (!currentGuid) continue
    
    const currentNode = layerService.get(currentGuid)
    if (!currentNode) continue
    
    stats.total++
    
    const name = currentNode.name
    if (!name) {
      stats.unnamed++
    } else if (isLayerNameValid(name)) {
      stats.validNames++
    } else {
      stats.invalidNames++
    }
    
    // Add children to processing queue
    if (currentNode.childCount > 0) {
      nodesToProcess.push(...currentNode.childrenGuids)
    }
  }
  
  return stats
}
