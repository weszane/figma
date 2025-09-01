/**
 * Event Management and API Interaction Module
 *
 * This module contains event handlers, API wrappers, promise management,
 * and runtime interaction classes extracted from the main plugin file.
 *
 * Key responsibilities:
 * - Event handling and callback management
 * - Promise registration and async operation coordination
 * - API wrapper classes and factory functions
 * - Runtime and adapter pattern implementations
 * - Error handling and status management
 * - Interaction state and event coordination
 */

import { ComponentPropertyManager, PluginNodeAdapter, PluginNodeRuntime, StyleManagementRuntime } from './index'

/**
 * Event Processing and Handler Management
 */
export class EventProcessingManager {
  private eventQueue: Array<() => void> = []
  private isProcessing = false
  private promiseRegistry = new Map<string, Promise<any>>()

  /**
   * Register and manage asynchronous operations
   */
  registerPromise<T>(promise: Promise<T>, key?: string): Promise<T> {
    const promiseKey = key || `promise_${Date.now()}_${Math.random()}`
    this.promiseRegistry.set(promiseKey, promise)

    // Clean up after completion
    promise.finally(() => {
      this.promiseRegistry.delete(promiseKey)
    })

    return promise
  }

  /**
   * Queue event for processing
   */
  queueEvent(handler: () => void): void {
    this.eventQueue.push(handler)
    this.processQueue()
  }

  /**
   * Process queued events
   */
  private async processQueue(): Promise<void> {
    if (this.isProcessing)
      return

    this.isProcessing = true
    try {
      while (this.eventQueue.length > 0) {
        const handler = this.eventQueue.shift()
        if (handler) {
          await new Promise((resolve) => {
            try {
              handler()
              resolve(void 0)
            }
            catch (error) {
              console.error('Event handler error:', error)
              resolve(void 0)
            }
          })
        }
      }
    }
    finally {
      this.isProcessing = false
    }
  }

  /**
   * Get pending promise count
   */
  getPendingPromiseCount(): number {
    return this.promiseRegistry.size
  }

  /**
   * Wait for all pending promises to complete
   */
  async waitForAll(): Promise<void> {
    const promises = Array.from(this.promiseRegistry.values())
    await Promise.all(promises)
  }
}

/**
 * Enhanced Plugin Runtime Wrapper
 * Manages plugin lifecycle and API interactions
 */
export class PluginRuntimeWrapper {
  private runtime: PluginNodeRuntime
  private eventManager: EventProcessingManager
  private multiplayerSelection: any[] = []

  constructor(pluginId: string, scope: any) {
    this.runtime = new PluginNodeRuntime(pluginId, scope)
    this.eventManager = new EventProcessingManager()
  }

  /**
   * Get multiplayer selection
   */
  getMultiplayerSelection(): any[] {
    return this.multiplayerSelection
  }

  /**
   * Update multiplayer selection
   */
  setMultiplayerSelection(selection: any[]): void {
    this.multiplayerSelection = selection
  }

  /**
   * Access to figma API
   */
  figma(): any {
    return this.runtime.figma()
  }

  /**
   * Log warning with context
   */
  logWarning(...args: any[]): void {
    console.warn('[Plugin Warning]:', ...args)
    this.runtime.logWarning(...args)
  }

  /**
   * Create plugin node with enhanced error handling
   */
  createPluginNode(nodeId: string, nodeData: any, parent: any, isRoot = false): any {
    try {
      // Convert string nodeId to appropriate format for the runtime
      const nodeElement = typeof nodeId === 'string' ? { id: nodeId, ...nodeData } : nodeId
      return this.runtime.createPluginNode(nodeElement, nodeData, parent, isRoot)
    }
    catch (error) {
      this.logWarning('Failed to create plugin node:', error)
      throw error
    }
  }

  /**
   * Load font with promise management
   */
  async loadFontAsync(fontName: any): Promise<void> {
    const fontPromise = this.runtime.loadFontAsync(fontName)
    return this.eventManager.registerPromise(fontPromise, `font_${fontName.family}`)
  }

  /**
   * Create image with validation
   */
  createImage(imageData: Uint8Array): any {
    if (!imageData || imageData.length === 0) {
      throw new Error('Invalid image data provided')
    }
    return this.runtime.createImage(imageData)
  }

  /**
   * Get node by ID with caching
   */
  private nodeCache = new Map<string, any>()

  getNodeById(nodeId: string): any {
    if (this.nodeCache.has(nodeId)) {
      return this.nodeCache.get(nodeId)
    }

    const node = this.runtime.getNodeById(nodeId)
    if (node) {
      this.nodeCache.set(nodeId, node)
    }
    return node
  }

  /**
   * Get scene node adapter with enhanced features
   */
  getSceneNodeAdapter(nodeId: string, parent: any = null): any {
    const node = this.getNodeById(nodeId)
    if (!node)
      return null

    return this.runtime.getSceneNodeAdapter(nodeId, parent)
  }

  /**
   * Clear node cache
   */
  clearNodeCache(): void {
    this.nodeCache.clear()
  }

  /**
   * Get event manager
   */
  getEventManager(): EventProcessingManager {
    return this.eventManager
  }
}

/**
 * Enhanced Plugin Node Adapter
 * Provides high-level node manipulation interface
 */
export class PluginNodeAdapterWrapper {
  private adapter: PluginNodeAdapter
  private componentManager: ComponentPropertyManager
  private nodeId: string

  constructor(nodeId: string, nodeData: any, runtime: PluginRuntimeWrapper) {
    this.nodeId = nodeId

    // Create the underlying adapter
    const pluginRuntime = runtime instanceof PluginRuntimeWrapper
      ? (runtime as any).runtime
      : runtime

    this.adapter = new PluginNodeAdapter(nodeId, nodeData, pluginRuntime)
    this.componentManager = new ComponentPropertyManager(pluginRuntime)
  }

  /**
   * Get node ID
   */
  getId(): string {
    return this.nodeId
  }

  /**
   * Get children with adapter wrapping
   */
  get children(): PluginNodeAdapterWrapper[] {
    // Mock implementation - return empty array for now
    return []
  }

  /**
   * Get node type
   */
  getType(): string {
    return this.adapter.readShim()?.type || 'UNKNOWN'
  }

  /**
   * Get node name
   */
  getName(): string {
    return this.adapter.readShim()?.name || ''
  }

  /**
   * Set node name (mock implementation)
   */
  setName(name: string): void {
    // Mock implementation - would need to update the underlying node
    console.warn(`Setting node name to: ${name}`)
  }

  /**
   * Get node bounds
   */
  getBounds(): { width: number, height: number } {
    const shim = this.adapter.readShim()
    return {
      width: (shim as any)?.width ?? 0,
      height: (shim as any)?.height ?? 0,
    }
  }

  /**
   * Get node properties (mock implementation)
   */
  getProperties(): any {
    return this.adapter.readShim() || {}
  }

  /**
   * Update node properties (mock implementation)
   */
  updateProperties(properties: any): void {
    console.warn('Updating properties:', properties)
  }

  /**
   * Remove node and children (mock implementation)
   */
  remove(): void {
    console.warn(`Removing node: ${this.nodeId}`)
  }

  /**
   * Get component manager
   */
  getComponentManager(): ComponentPropertyManager {
    return this.componentManager
  }
}

/**
 * Style Management Wrapper
 * Enhanced style operations with event handling
 */
export class StyleManagerWrapper {
  private styleManager: StyleManagementRuntime
  private styleCache = new Map<string, any>()

  constructor(sceneGraph: any) {
    const mockRuntime = {
      pluginID: 'style-manager',
      logWarning: (message: string) => console.warn('[Style Manager]:', message),
    }
    this.styleManager = new StyleManagementRuntime(sceneGraph, mockRuntime)
  }

  /**
   * Convert local style to style key
   */
  localStyleToStyleKey(style: any): string {
    const result = this.styleManager.localStyleToStyleKey(style)
    return result?.key || 'unknown-style-key'
  }

  /**
   * Convert fullscreen style data to local style
   */
  fullscreenStyleDataToLocalStyle(styleData: any): any {
    return this.styleManager.fullscreenStyleDataToLocalStyle(styleData)
  }

  /**
   * Get style with caching
   */
  get(styleKey: string): any {
    if (this.styleCache.has(styleKey)) {
      return this.styleCache.get(styleKey)
    }

    const style = this.styleManager.get(styleKey)
    if (style) {
      this.styleCache.set(styleKey, style)
    }
    return style
  }

  /**
   * Move style with validation (mock implementation)
   */
  moveStyle(styleId: string, targetId: string, position: number): boolean {
    try {
      // Mock implementation - would interact with the actual style system
      console.warn(`Moving style ${styleId} to ${targetId} at position ${position}`)
      return true
    }
    catch (error) {
      console.error('Failed to move style:', error)
      return false
    }
  }

  /**
   * Move folder with validation (mock implementation)
   */
  moveFolder(folderId: string, targetId: string, position: number): boolean {
    try {
      // Mock implementation - would interact with the actual folder system
      console.warn(`Moving folder ${folderId} to ${targetId} at position ${position}`)
      return true
    }
    catch (error) {
      console.error('Failed to move folder:', error)
      return false
    }
  }

  /**
   * Create style with enhanced metadata
   */
  createStyle(styleData: any): string {
    const styleId = `style_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

    // Cache the style for quick access
    this.styleCache.set(styleId, {
      id: styleId,
      ...styleData,
      createdAt: new Date().toISOString(),
    })

    return styleId
  }

  /**
   * Soft delete style with cleanup
   */
  softDeleteStyle(style: any): void {
    if (style && style.id) {
      this.styleCache.delete(style.id)
    }

    if (style && typeof style.removeSelfAndChildren === 'function') {
      style.removeSelfAndChildren()
    }
  }

  /**
   * Get all local styles with filtering
   */
  getAllLocalStyles(filter?: (style: any) => boolean): any[] {
    const allStyles = Array.from(this.styleCache.values())
    return filter ? allStyles.filter(filter) : allStyles
  }

  /**
   * Clear style cache
   */
  clearCache(): void {
    this.styleCache.clear()
  }
}

/**
 * Action Processing Utilities
 * Handle complex action mapping and validation
 */
export class ReactionsActionProcessor {
  /**
   * Process reaction actions with validation
   */
  static processReactionActions(actions: any[]): any[] {
    if (!actions || actions.length === 0) {
      return [{
        connectionType: 'NONE',
      }]
    }

    // Validate action count for plan restrictions
    if (actions.length > 1 && !this.isMultipleActionsAllowed()) {
      throw new Error('You cannot create multiple actions on Reactions with your current plan.')
    }

    return actions.map(action => this.processSingleAction(action))
  }

  /**
   * Process a single action with type handling
   */
  static processSingleAction(action: any): any {
    if (!action) {
      return {
        connectionType: 'NONE',
      }
    }

    const processedAction: any = {}

    // Handle different action types
    switch (action.type) {
      case 'URL':
        processedAction.connectionType = 'URL'
        processedAction.connectionURL = action.url || ''
        if (action.openInNewTab !== undefined) {
          processedAction.openUrlInNewTab = action.openInNewTab
        }
        break

      case 'NODE':
        processedAction.connectionType = 'NODE'
        processedAction.destinationId = action.destinationId
        if (action.navigation) {
          processedAction.navigation = action.navigation
        }
        break

      case 'BACK':
        processedAction.connectionType = 'BACK'
        break

      case 'CLOSE':
        processedAction.connectionType = 'CLOSE'
        break

      default:
        processedAction.connectionType = 'NONE'
    }

    return processedAction
  }

  /**
   * Check if multiple actions are allowed (mock implementation)
   */
  private static isMultipleActionsAllowed(): boolean {
    // This would normally check the user's plan/subscription
    return true // Mock: assume allowed for now
  }
}

/**
 * Error Management for Events
 */
export class EventErrorManager extends Error {
  public code: string
  public context: any

  constructor(message: string, code: string = 'EVENT_ERROR', context: any = {}) {
    super(message)
    this.name = 'EventErrorManager'
    this.code = code
    this.context = context
  }

  /**
   * Create API error
   */
  static apiError(message: string, context: any = {}): EventErrorManager {
    return new EventErrorManager(message, 'API_ERROR', context)
  }

  /**
   * Create validation error
   */
  static validationError(message: string, context: any = {}): EventErrorManager {
    return new EventErrorManager(message, 'VALIDATION_ERROR', context)
  }

  /**
   * Create runtime error
   */
  static runtimeError(message: string, context: any = {}): EventErrorManager {
    return new EventErrorManager(message, 'RUNTIME_ERROR', context)
  }
}

/**
 * Factory Functions for Easy Instantiation
 */

/**
 * Create plugin runtime wrapper with default configuration
 */
export function createPluginRuntimeWrapper(pluginId: string, scope: any): PluginRuntimeWrapper {
  return new PluginRuntimeWrapper(pluginId, scope)
}

/**
 * Create plugin node adapter wrapper
 */
export function createPluginNodeAdapterWrapper(
  nodeId: string,
  nodeData: any,
  runtime: PluginRuntimeWrapper,
): PluginNodeAdapterWrapper {
  return new PluginNodeAdapterWrapper(nodeId, nodeData, runtime)
}

/**
 * Create style manager wrapper
 */
export function createStyleManagerWrapper(sceneGraph: any): StyleManagerWrapper {
  return new StyleManagerWrapper(sceneGraph)
}

/**
 * Create event processing manager
 */
export function createEventProcessingManager(): EventProcessingManager {
  return new EventProcessingManager()
}

/**
 * Convenience Exports
 */
export {
  ReactionsActionProcessor as ActionProcessor,
  EventErrorManager as EventError,
  EventProcessingManager as EventManager,
  PluginNodeAdapterWrapper as NodeAdapterWrapper,
  PluginRuntimeWrapper as RuntimeWrapper,
  StyleManagerWrapper as StyleManager,
}

/**
 * Default Export - Comprehensive Event Management System
 */
export default {
  EventProcessingManager,
  PluginRuntimeWrapper,
  PluginNodeAdapterWrapper,
  StyleManagerWrapper,
  EventErrorManager,
  ReactionsActionProcessor,
  createPluginRuntimeWrapper,
  createPluginNodeAdapterWrapper,
  createStyleManagerWrapper,
  createEventProcessingManager,
}
