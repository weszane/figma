/**
 * Node Management Module
 * 
 * Handles plugin node creation, management, and operations.
 * This module contains the core node manipulation functionality
 * including the PluginNodeRuntime (e9) and PluginNodeAdapter (te) classes.
 * 
 * Original classes: e9 (PluginNodeRuntime), te (PluginNodeAdapter)
 */

/**
 * Mock interfaces for external dependencies
 */
interface SceneNode {
  id: string
  guid: string
  type: string
  name?: string
  widgetCachedAncestor?: any
  reversedChildrenGuids?: string[]
  createInstance?: () => SceneNode
  removeSelfAndChildren?: () => void
  insertChild?: (node: any, index: number, options?: any) => void
}

interface FigmaAPI {
  getNodeById: (id: string) => SceneNode | null
  activeUsers: Array<{ selection: string[] }>
}

interface PluginVM {
  scope: {
    figma: FigmaAPI
  }
}

interface NodeCreationProps {
  componentId?: string
  [key: string]: any
}

interface NodeElement {
  type: string
  props?: NodeCreationProps
  renderMetaData?: {
    src?: string
  }
}

/**
 * Plugin Node Runtime - handles core plugin node operations
 * Original class: e9
 */
export class PluginNodeRuntime {
  pluginID: string
  vm: PluginVM

  constructor(pluginID: string, vm: PluginVM) {
    this.pluginID = pluginID
    this.vm = vm
  }

  /**
   * Gets multiplayer selection across all active users
   */
  getMultiplayerSelection(): Set<string> {
    const selection = new Set<string>()
    for (const { selection: userSelection } of this.figma().activeUsers) {
      for (const nodeId of userSelection) {
        selection.add(nodeId)
      }
    }
    return selection
  }

  /**
   * Gets the Figma API instance
   */
  figma(): FigmaAPI {
    return this.vm.scope.figma
  }

  /**
   * Logs warning messages (with plugin-specific filtering)
   */
  logWarning(...messages: any[]): void {
    // Mock implementation - would need actual _$$nl() and debugState
    const shouldLog = this.pluginID.startsWith('TEST') || Math.random() > 0.5
    if (shouldLog) {
      console.warn(...messages)
    }
  }

  /**
   * Creates a plugin node from element description
   * Original function: createPluginNode
   */
  createPluginNode(element: NodeElement, ancestorNode: any, tracking: any, isRoot = false): SceneNode | null {
    if (!element || typeof element !== 'object') {
      throw new Error('invalid node passed to createPluginNode')
    }

    const nodeType = element.type
    let createdNode: SceneNode

    switch (nodeType) {
      case 'inputframe':
      case 'autolayout':
      case 'frame':
        createdNode = this.createSceneNode('FRAME', tracking)
        break
      case 'input':
      case 'text':
        createdNode = this.createSceneNode('TEXT', tracking)
        break
      case 'svg':
        // Mock SVG creation - would need actual UN() and createNodeFromSVG
        createdNode = this.createSVGNode(element, tracking, ancestorNode)
        break
      case 'line':
        createdNode = this.createSceneNode('LINE', tracking)
        break
      case 'ellipse':
        createdNode = this.createSceneNode('ELLIPSE', tracking)
        break
      case 'rectangle':
        createdNode = this.createSceneNode('RECTANGLE', tracking)
        break
      case 'fragment':
      case 'span':
        if (isRoot) {
          throw new Error(`Unsupported root node type: ${nodeType}`)
        }
        throw new Error(`Attempting to create a ${nodeType} node`)
      case 'instance': {
        const componentId = element.props?.componentId
        const component = this.figma().getNodeById(componentId || '')
        if (component?.type !== 'COMPONENT') {
          throw new Error(`Invalid component Id: ${componentId}`)
        }
        const instance = component.createInstance?.()
        if (!instance) {
          throw new Error('Failed to create component instance')
        }
        createdNode = this.getSceneNodeById(instance.id)
        break
      }
      default:
        throw new Error(`Unsupported node type: ${nodeType}`)
    }

    createdNode.widgetCachedAncestor = ancestorNode
    return this.figma().getNodeById(createdNode.guid)
  }

  /**
   * Loads a font asynchronously
   * Original function: loadFontAsync
   */
  async loadFontAsync(_fontName: any): Promise<void> {
    // Mock implementation - would need actual font loading logic
    // Note: Font loading functionality would be implemented here
    return Promise.resolve()
  }

  /**
   * Creates an image from bytes
   * Original function: createImage
   */
  createImage(bytes: Uint8Array): any {
    // Mock implementation - would need actual image creation logic
    return { hash: bytes }
  }

  /**
   * Gets a node by ID using the Figma API
   * Original function: getNodeById
   */
  getNodeById(id: string): SceneNode | null {
    return this.figma().getNodeById(id)
  }

  /**
   * Creates a scene node adapter for plugin operations
   * Original function: getSceneNodeAdapter
   */
  getSceneNodeAdapter(nodeId: string, pluginNode: SceneNode | null = null): PluginNodeAdapter {
    return new PluginNodeAdapter(nodeId, pluginNode, this)
  }

  /**
   * Gets a scene node by ID (public method for adapter access)
   */
  public getSceneNodeById(id: string): SceneNode {
    // Mock implementation - would need actual e8() function
    return this.figma().getNodeById(id) || this.createSceneNode('UNKNOWN', null)
  }

  // Helper methods (would need actual implementations)
  createSceneNode(type: string, _tracking: any): SceneNode {
    // Mock implementation - would need actual e7() function
    return {
      id: `mock-${type}-${Date.now()}`,
      guid: `mock-guid-${Date.now()}`,
      type,
    }
  }

  createSVGNode(element: NodeElement, tracking: any, ancestorNode: any): SceneNode {
    // Mock implementation - would need actual UN().createNodeFromSVG()
    const svgNode = this.createSceneNode('SVG', tracking)
    svgNode.widgetCachedAncestor = ancestorNode
    return svgNode
  }
}

/**
 * Plugin Node Adapter - provides a wrapper for plugin node operations
 * Original class: te
 */
export class PluginNodeAdapter {
  id: string
  pluginNode: SceneNode | null
  runtime: PluginNodeRuntime
  shimNode: SceneNode | null = null

  constructor(id: string, pluginNode: SceneNode | null, runtime: PluginNodeRuntime) {
    this.id = id
    this.pluginNode = pluginNode
    this.runtime = runtime
  }

  /**
   * Gets the node ID
   */
  getId(): string {
    return this.id
  }

  /**
   * Gets child nodes as plugin node adapters
   */
  get children(): PluginNodeAdapter[] {
    const shim = this.readShim()
    const childGuids = shim?.reversedChildrenGuids ?? []
    return [...childGuids].reverse().map(guid =>
      new PluginNodeAdapter(guid, null, this.runtime)
    )
  }

  /**
   * Inserts a child node at the specified index
   */
  insertChild(index: number, childId: string): void {
    const shim = this.readShim()
    const childNode = this.runtime.getSceneNodeById(childId)
    shim?.insertChild?.(childNode, index, { skipValidation: true })
  }

  /**
   * Removes this node and its children
   */
  remove(): void {
    this.readShim()?.removeSelfAndChildren?.()
  }

  /**
   * Gets the plugin node (may be slow, caches result)
   */
  getPluginNodeSlow(): SceneNode | null {
    this.pluginNode = this.pluginNode ?? this.runtime.getNodeById(this.id)
    return this.pluginNode
  }

  /**
   * Reads the shim node for low-level operations
   */
  readShim(): SceneNode | null {
    if (!this.shimNode) {
      this.shimNode = this.runtime.getSceneNodeById(this.id)
    }
    return this.shimNode
  }

  /**
   * Applies component properties
   */
  applyComponentProps(_componentProps: any, _metadata: any): void {
    try {
      // Mock implementation - would need actual component prop application
      // Note: Component property application would be implemented here
    } catch (error) {
      this.runtime.logWarning(`Error setting component props: ${error}`)
    }
  }

  /**
   * Writes plugin-specific data to the node
   */
  writePluginData(key: string, value: string): void {
    try {
      const _node = this.getPluginNodeSlow()
      if (typeof value !== 'string') {
        this.runtime.logWarning(`Attempting to set non-string pluginData: ${key}=${JSON.stringify(value)}`)
      } else {
        // Mock implementation - would need actual setPluginData
        // Note: Plugin data writing would be implemented here
      }
    } catch (error) {
      this.runtime.logWarning(`Error setting plugin data: ${error}`)
    }
  }

  /**
   * Writes shared plugin data to the node
   */
  writeSharedPluginData(key: string, value: string): void {
    try {
      if (typeof value !== 'string') {
        this.runtime.logWarning(`Attempting to set non-string sharedPluginData: ${key}=${JSON.stringify(value)}`)
      } else {
        // Mock implementation - would need actual setSharedPluginData
        // Note: Shared plugin data writing would be implemented here
      }
    } catch (error) {
      this.runtime.logWarning(`Error setting shared plugin data: ${error}`)
    }
  }

  /**
   * Writes a property to the node
   */
  writeProperty(propertyName: string, value: any): void {
    this.writePropertyInner(propertyName, value)
  }

  /**
   * Internal property writing implementation
   */
  writePropertyInner(propertyName: string, _value: any): void {
    try {
      const node = this.getPluginNodeSlow()
      if (node) {
        // Mock implementation - would need actual property setting
        // Note: Property setting for ${propertyName} would be implemented here
      }
    } catch (error) {
      this.runtime.logWarning(`Error setting property ${propertyName}: ${error}`)
    }
  }

  /**
   * Writes text range properties
   */
  writeTextRange(start: number, end: number, propertyName: string, value: any): void {
    this.writeTextRangeInner(start, end, propertyName, value, false)
  }

  /**
   * Internal text range writing implementation
   */
  writeTextRangeInner(
    start: number,
    end: number,
    propertyName: string,
    value: any,
    _validateRange = false
  ): void {
    try {
      const node = this.getPluginNodeSlow()
      if (node && node.type === 'TEXT') {
        // Mock implementation - would need actual text range setting
        // Note: Text range [${start}:${end}] ${propertyName} setting would be implemented here
      }
    } catch (error) {
      this.runtime.logWarning(`Error setting text range: ${error}`)
    }
  }

  /**
   * Resizes the node
   */
  resize(_width: number, _height: number): void {
    try {
      const node = this.getPluginNodeSlow()
      if (node) {
        // Mock implementation - would need actual resize logic
        // Note: Resizing node to ${width}x${height} would be implemented here
      }
    } catch (error) {
      this.runtime.logWarning(`Error resizing node: ${error}`)
    }
  }

  /**
   * Gets the node size
   */
  getSize(): { width: number; height: number } {
    try {
      const _node = this.getPluginNodeSlow()
      // Mock implementation - would need actual size getting
      return { width: 100, height: 100 }
    } catch (error) {
      this.runtime.logWarning(`Error getting node size: ${error}`)
      return { width: 0, height: 0 }
    }
  }
}

/**
 * Factory function to create a plugin node runtime
 */
export function createPluginNodeRuntime(pluginID: string, vm: PluginVM): PluginNodeRuntime {
  return new PluginNodeRuntime(pluginID, vm)
}

/**
 * Factory function to create a plugin node adapter
 */
export function createPluginNodeAdapter(
  nodeId: string,
  pluginNode: SceneNode | null,
  runtime: PluginNodeRuntime
): PluginNodeAdapter {
  return new PluginNodeAdapter(nodeId, pluginNode, runtime)
}

// Export types for external use
export type { FigmaAPI, NodeCreationProps, NodeElement, PluginVM, SceneNode }
