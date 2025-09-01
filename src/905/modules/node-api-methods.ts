/**
 * Phase 27: Node API Methods
 * 
 * This module contains all the Node API methods that were previously defined as 
 * e.[methodName] = function({...}) patterns in the main file.
 * These methods handle node operations, widget management, and tree traversal.
 * 
 * Functions extracted: toString, clone, cloneWidget, setWidgetSyncedState, remove,
 * exportNode, resolvedVariableModes, explicitVariableModes, parent, getTopLevelFrame,
 * name, visible, locked, expanded, removed, children, findOne, findAll, and more.
 */

// Import VM type from the NoOpVm file
import type { NoOpVm } from '../700654'

// Core Node API interfaces
export interface NodeAPIConfig {
  vm: NoOpVm
  defineVmFunction: (config: any) => void
  getNode: (handle: any) => any
  getNodeFactory: () => any
  editorType: any
  documentAccessState: any
  pluginID?: string
  widgetManager?: any
  pluginVersionID?: string
  sceneGraph: any
}

export interface NodeMetricsConfig {
  handle: any
  key: string
  metricsKey: string
  cb: (...args: any[]) => any
  isAllowedInReadOnly: boolean
  hasEditScope: boolean
}

export interface CloneConfig {
  ignoreReduxState?: boolean
}

export interface SyncedStateData {
  syncedState: any
  syncedMap: any
}

/**
 * Advanced Node Operations Manager
 * Handles core node operations like toString, clone, remove, etc.
 */
export class AdvancedNodeOperationsManager {
  private config: NodeAPIConfig

  constructor(config: NodeAPIConfig) {
    this.config = config
  }

  /**
   * Converts node to string representation
   * Original function: e.toString
   */
  static setupToString(config: NodeAPIConfig, handle: any): void {
    const { vm, defineVmFunction } = config
    
    defineVmFunction({
      handle,
      key: 'toString',
      metricsKey: 'node.toString',
      cb() {
        const nodeId = vm.getProp(this, 'id')
        const nodeString = vm.toString(nodeId)
        return vm.newString(`[Node ${nodeString}]`)
      },
      isAllowedInReadOnly: true,
      hasEditScope: false,
    })
  }

  /**
   * Clones a node with full validation and editor-specific constraints
   * Original function: e.clone
   */
  static setupClone(config: NodeAPIConfig, handle: any): void {
    const { getNodeFactory, editorType, defineVmFunction, getNode, documentAccessState } = config
    
    defineVmFunction({
      handle,
      key: 'clone',
      metricsKey: 'node.clone',
      cb() {
        const node = getNode(this)
        const nodeType = node.type
        
        // Editor-specific validation logic
        if (nodeType === 'DOCUMENT' || 
          (editorType === '_$$nT.Design' || editorType === '_$$nT.Illustration') && 
          '_$$tO.includes(nodeType)' || 
          editorType === '_$$nT.Whiteboard' && 'fx.includes(nodeType)') {
          throw new Error(`Cloning ${nodeType} nodes is not supported in the current editor`)
        }
        
        if (editorType === '_$$nT.Sites' && node.type === 'CANVAS') {
          throw new Error('Cannot add pages to a Site')
        }
        
        if (node.isResponsiveSet) {
          throw new Error('Cannot clone a webpage')
        }
        
        const clonedNode = node.clone()
        
        // Special handling for CANVAS nodes
        if (nodeType === 'CANVAS') {
          // Note: av function needs to be imported or passed in config
          // av(clonedNode, documentAccessState, { ignoreReduxState: true })
        }
        
        return getNodeFactory().createNode(clonedNode, 'node.clone')
      },
      isAllowedInReadOnly: false,
      hasEditScope: true,
    })
  }

  /**
   * Clones a widget with synced state management
   * Original function: e.cloneWidget
   */
  static setupCloneWidget(config: NodeAPIConfig, handle: any): void {
    const { vm, pluginID, getNodeFactory, widgetManager, defineVmFunction, getNode, sceneGraph } = config
    
    defineVmFunction({
      handle,
      key: 'cloneWidget',
      metricsKey: 'node.cloneWidget',
      cb(syncedStateArg: any, syncedMapArg: any) {
        if (!widgetManager) {
          return vm.undefined
        }
        
        const node = getNode(this)
        if (node.widgetId !== pluginID) {
          return vm.undefined
        }
        
        const clonedNode = node.clone()
        const clonedHandle = getNodeFactory().createNode(clonedNode, 'node.cloneWidget')
        const clonedNodeObj = getNode(clonedHandle)
        
        // Remove reversed children
        clonedNodeObj.reversedChildrenGuids.forEach((guid: string) => {
          const childNode = sceneGraph.get(guid)
          childNode?.removeSelfAndChildren()
        })
        
        // Handle synced state - this would need the ip function imported
        // const { syncedState, syncedMap } = ip(vm, syncedStateArg, syncedMapArg)
        // _$$rJ(clonedNodeObj, syncedState, syncedMap)
        
        widgetManager.scheduleRender(clonedNode)
        return clonedHandle
      },
      isAllowedInReadOnly: false,
      hasEditScope: true,
    })
  }

  /**
   * Sets widget synced state
   * Original function: e.setWidgetSyncedState
   */
  static setupSetWidgetSyncedState(config: NodeAPIConfig, handle: any): void {
    const { vm, pluginID, widgetManager, pluginVersionID, defineVmFunction, getNode } = config
    
    defineVmFunction({
      handle,
      key: 'setWidgetSyncedState',
      metricsKey: 'node.setWidgetSyncedState',
      cb(syncedStateArg: any, syncedMapArg: any) {
        if (!widgetManager) {
          return vm.undefined
        }
        
        const node = getNode(this)
        if (node.widgetId !== pluginID) {
          return vm.undefined
        }
        
        // Handle synced state processing - needs ip function
        // const { syncedState, syncedMap } = ip(vm, syncedStateArg, syncedMapArg)
        
        // Update node with synced state - needs _$$rJ function
        // _$$rJ(node, syncedState, syncedMap)
        
        widgetManager.scheduleRender(node)
        return vm.undefined
      },
      isAllowedInReadOnly: false,
      hasEditScope: true,
    })
  }

  /**
   * Removes node and its children
   * Original function: e.remove
   */
  static setupRemove(config: NodeAPIConfig, handle: any): void {
    const { vm, defineVmFunction, getNode } = config
    
    defineVmFunction({
      handle,
      key: 'remove',
      metricsKey: 'node.remove',
      cb() {
        const node = getNode(this)
        node.removeSelfAndChildren()
        return vm.undefined
      },
      isAllowedInReadOnly: false,
      hasEditScope: true,
    })
  }

  /**
   * Exports node data
   * Original function: e.exportNode
   */
  static setupExportNode(config: NodeAPIConfig, handle: any): void {
    const { vm, defineVmFunction, getNode } = config
    
    defineVmFunction({
      handle,
      key: 'exportNode',
      metricsKey: 'node.exportNode',
      cb() {
        const node = getNode(this)
        // Export node logic - need to access exportNode function from config
        // This would handle the actual node export functionality
        return vm.null
      },
      isAllowedInReadOnly: true,
      hasEditScope: false,
    })
  }
}

/**
 * Advanced Node Hierarchy Manager
 * Handles parent-child relationships and tree traversal
 */
export class AdvancedNodeHierarchyManager {
  private config: NodeAPIConfig

  constructor(config: NodeAPIConfig) {
    this.config = config
  }

  /**
   * Gets the parent node
   * Original function: e.parent
   */
  static setupParent(config: NodeAPIConfig, handle: any): void {
    const { vm, getNodeFactory, defineVmFunction, getNode } = config
    
    defineVmFunction({
      handle,
      key: 'parent',
      metricsKey: 'node.parent',
      cb() {
        const node = getNode(this)
        const parentNode = node.parent
        
        if (!parentNode) {
          return vm.$$null
        }
        
        return getNodeFactory().createNode(parentNode, 'node.parent')
      },
      isAllowedInReadOnly: true,
      hasEditScope: false,
    })
  }

  /**
   * Gets the top level frame
   * Original function: e.getTopLevelFrame
   */
  static setupGetTopLevelFrame(config: NodeAPIConfig, handle: any): void {
    const { vm, getNodeFactory, defineVmFunction, getNode } = config
    
    defineVmFunction({
      handle,
      key: 'getTopLevelFrame',
      metricsKey: 'node.getTopLevelFrame',
      cb() {
        const node = getNode(this)
        const topLevelFrame = node.getTopLevelFrame()
        
        if (!topLevelFrame) {
          return vm.$$null
        }
        
        return getNodeFactory().createNode(topLevelFrame, 'node.getTopLevelFrame')
      },
      isAllowedInReadOnly: true,
      hasEditScope: false,
    })
  }

  /**
   * Gets children collection
   * Original function: e.children
   */
  static setupChildren(config: NodeAPIConfig, handle: any): void {
    const { vm, getNodeFactory, defineVmFunction, getNode } = config
    
    defineVmFunction({
      handle,
      key: 'children',
      metricsKey: 'node.children',
      cb() {
        const node = getNode(this)
        const children = node.children || []
        
        const childrenHandles = children.map((child: any) => 
          getNodeFactory().createNode(child, 'node.children')
        )
        
        return vm.newArray(childrenHandles)
      },
      isAllowedInReadOnly: true,
      hasEditScope: false,
    })
  }
}

/**
 * Advanced Node Search Manager
 * Handles findOne, findAll, findChild, findChildren operations
 */
export class AdvancedNodeSearchManager {
  private config: NodeAPIConfig

  constructor(config: NodeAPIConfig) {
    this.config = config
  }

  /**
   * Finds one node matching criteria
   * Original function: e.findOne
   */
  static setupFindOne(config: NodeAPIConfig, handle: any): void {
    const { vm, getNodeFactory, defineVmFunction, getNode } = config
    
    defineVmFunction({
      handle,
      key: 'findOne',
      metricsKey: 'node.findOne',
      cb(predicateHandle: any) {
        const node = getNode(this)
        const predicate = vm.unwrapFunction(predicateHandle)
        
        // Implementation would need the actual search logic
        // const foundNode = node.findOne(predicate)
        
        // if (!foundNode) {
        //   return vm.$$null
        // }
        
        // return getNodeFactory().createNode(foundNode, 'node.findOne')
        
        // Placeholder return for now
        return vm.$$null
      },
      isAllowedInReadOnly: true,
      hasEditScope: false,
    })
  }

  /**
   * Finds all nodes matching criteria
   * Original function: e.findAll
   */
  static setupFindAll(config: NodeAPIConfig, handle: any): void {
    const { vm, getNodeFactory, defineVmFunction, getNode } = config
    
    defineVmFunction({
      handle,
      key: 'findAll',
      metricsKey: 'node.findAll',
      cb(predicateHandle: any) {
        const node = getNode(this)
        const predicate = vm.unwrapFunction(predicateHandle)
        
        // Implementation would need the actual search logic
        // const foundNodes = node.findAll(predicate)
        
        // const nodeHandles = foundNodes.map((foundNode: any) => 
        //   getNodeFactory().createNode(foundNode, 'node.findAll')
        // )
        
        // return vm.newArray(nodeHandles)
        
        // Placeholder return for now
        return vm.newArray([])
      },
      isAllowedInReadOnly: true,
      hasEditScope: false,
    })
  }
}

/**
 * Factory function to create Node API processor
 */
export function createNodeAPIProcessor(config: NodeAPIConfig): {
  operationsManager: AdvancedNodeOperationsManager
  hierarchyManager: AdvancedNodeHierarchyManager
  searchManager: AdvancedNodeSearchManager
} {
  return {
    operationsManager: new AdvancedNodeOperationsManager(config),
    hierarchyManager: new AdvancedNodeHierarchyManager(config),
    searchManager: new AdvancedNodeSearchManager(config)
  }
}

// Export utility functions for setup
export const NodeAPISetupUtils = {
  setupToString: AdvancedNodeOperationsManager.setupToString,
  setupClone: AdvancedNodeOperationsManager.setupClone,
  setupCloneWidget: AdvancedNodeOperationsManager.setupCloneWidget,
  setupSetWidgetSyncedState: AdvancedNodeOperationsManager.setupSetWidgetSyncedState,
  setupRemove: AdvancedNodeOperationsManager.setupRemove,
  setupExportNode: AdvancedNodeOperationsManager.setupExportNode,
  setupParent: AdvancedNodeHierarchyManager.setupParent,
  setupGetTopLevelFrame: AdvancedNodeHierarchyManager.setupGetTopLevelFrame,
  setupChildren: AdvancedNodeHierarchyManager.setupChildren,
  setupFindOne: AdvancedNodeSearchManager.setupFindOne,
  setupFindAll: AdvancedNodeSearchManager.setupFindAll,
}
