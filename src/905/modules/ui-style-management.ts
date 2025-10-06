/**
 * UI and Style Management Module
 * 
 * This module handles UI component styling, paint management, and style operations.
 * Extracted from the main plugin file to improve code organization and maintainability.
 * 
 * Key responsibilities:
 * - Style management (local styles, style keys, style movement)
 * - Paint conversion between internal and external formats
 * - Component property application
 * - Plugin data management
 * - Color and style utilities
 */

/**
 * Mock interfaces for external dependencies
 */
interface SceneNode {
  id: string
  guid: string
  type: string
  name?: string
  styleType?: string
  styleKeyForPublish?: string
  setProperties?: (props: any, nested?: boolean) => void
  setPluginData?: (pluginId: string, key: string, value: string) => void
  setSharedPluginData?: (namespace: string, key: string, value: string) => void
  swapComponent?: (component: any) => void
  updateIfIsNestedInstance?: () => void
  getMatchingInstanceSublayer?: (name: string) => any
  materializeDescendants?: () => void
  visible?: boolean
}

interface Paint {
  type: string
  color?: { r: number; g: number; b: number; a?: number }
  visible?: boolean
  opacity?: number
  blendMode?: string
  gradientTransform?: any
  gradientStops?: any[]
  scalingFactor?: number
  spacing?: { x: number; y: number }
  sourceNodeId?: string
  boundVariables?: any
}

interface _StyleData {
  key: string
  version: string
  node_id?: string
  type?: string
  name?: string
  styles?: any[]
  subfolders?: _StyleData[]
}

interface ComponentProps {
  componentId?: string
  componentProps?: any
  sharedPluginData?: Record<string, string>
  pluginData?: Record<string, string>
  nestedInstancesVisibility?: Record<string, boolean>
  componentPropsNested?: Record<string, any>
}

interface PluginRuntime {
  pluginID: string
  logWarning: (message: string) => void
}

interface SceneGraph {
  scene: any
  getStyleNodeByRef: (ref: any) => SceneNode | null
}

/**
 * Style Management Runtime
 * Handles style operations and transformations
 */
export class StyleManagementRuntime {
  constructor(
    sceneGraph: SceneGraph,
    runtime: PluginRuntime
  ) { }

  /**
   * Convert local style to style key format
   */
  localStyleToStyleKey(style: any) {
    return {
      key: style.key,
      version: 'INVALID', // Mock version constant
    }
  }

  /**
   * Convert fullscreen style data to local style format
   */
  fullscreenStyleDataToLocalStyle(styleData: any) {
    // Mock implementation - create a basic local style structure
    return {
      key: styleData.key || '',
      name: styleData.name || '',
      type: styleData.type || 'UNKNOWN',
      node_id: styleData.node_id || '',
      styles: styleData.styles || [],
      subfolders: styleData.subfolders || []
    }
  }

  /**
   * Get style by reference
   */
  get(styleRef: any): SceneNode | null {
    const parsedRef = this.parseStyleRef(styleRef)
    if (!parsedRef) return null

    const styleNode = this.sceneGraph.getStyleNodeByRef(parsedRef)
    return styleNode && !this.isSoftDeleted(styleNode) ? styleNode : null
  }

  /**
   * Move style to new position
   */
  moveStyle(targetNode: SceneNode, referenceNode: SceneNode | null, styleType: string): string {
    try {
      const styleTypeValue = this.getStyleTypeValue(targetNode.styleType)
      if (typeof styleTypeValue !== 'number') {
        return 'Unable to parse style type of target node'
      }

      const allStyles = this.getAllLocalStyles(styleTypeValue)
      const styleMap = this.createStyleMap(allStyles, styleType)
      const flattenedStyles = this.flattenStyles(styleMap)

      const targetFolder = this.getTargetFolder(targetNode.name)
      let targetStyle = null
      let referenceStyle = null
      let targetParent = null
      let referenceParent = null

      // Find target and reference styles in flattened structure
      for (let i = 0; i < flattenedStyles.length; i++) {
        const style = flattenedStyles[i]
        if (style.type === 'STYLE_FOLDER') {
          targetParent = style
        } else {
          if (style.node_id === targetNode.guid) {
            targetStyle = style
            // targetParent already set from previous folder
          }
          if (referenceNode !== null && style.node_id === referenceNode.guid) {
            referenceStyle = style
            referenceParent = i + 1 < flattenedStyles.length ? flattenedStyles[i + 1] : null
          }
        }
      }

      if (!targetStyle) {
        return `No local target node found with style key: ${targetNode.styleKeyForPublish}`
      }

      if (referenceNode === null) {
        // Move to top level
        this.moveStyleToPosition(targetStyle, targetParent, null, targetFolder)
      } else {
        if (!referenceStyle) {
          return `No local reference node found with style key: ${referenceNode.styleKeyForPublish}`
        }

        if (this.getTargetFolder(referenceNode.name) !== targetFolder) {
          return 'Target and reference node must live in the same folder.'
        }

        this.moveStyleToPosition(targetStyle, referenceStyle, referenceParent, targetFolder)
      }

      return ''
    } catch (error) {
      return `Error moving style: ${error}`
    }
  }

  /**
   * Move folder to new position
   */
  moveFolder(targetFolderName: string, referenceFolderName: string | null, styleType: string): string {
    try {
      const styleTypeValue = this.getStyleTypeValue(styleType)
      if (typeof styleTypeValue !== 'number') {
        return `Unable to parse style type: ${styleType}`
      }

      const allStyles = this.getAllLocalStyles(styleTypeValue)
      const styleMap = this.createStyleMap(allStyles, styleType)

      let targetFolder = null as any
      let referenceFolder = null as any
      let targetParent = null as any

      const findFolders = (currentFolder: any) => {
        currentFolder.subfolders?.forEach((folder: any) => {
          if (folder.name === targetFolderName) {
            targetFolder = folder
            targetParent = currentFolder
          }
          if (folder.name === referenceFolderName) {
            referenceFolder = folder
          }
        })
        currentFolder.subfolders?.forEach(findFolders)
      }

      findFolders(styleMap)

      if (!targetFolder || !targetParent) {
        return `The target folder named "${targetFolderName}" could not be found`
      }

      if (referenceFolderName !== null && !referenceFolder) {
        return `The reference folder named "${referenceFolderName}" could not be found`
      }

      if (referenceFolder && this.getTargetFolder(referenceFolder.name) !== this.getTargetFolder(targetFolder.name)) {
        return 'The target folder and the reference folder must live in the same parent folder'
      }

      // Perform the folder move operation
      this.moveFolderToPosition(targetFolder, referenceFolder, targetParent)
      return ''
    } catch (error) {
      return `Error moving folder: ${error}`
    }
  }

  // Helper methods (mock implementations)
  parseStyleRef(ref: any): any {
    return ref // Mock implementation
  }

  isSoftDeleted(_node: SceneNode): boolean {
    return false // Mock implementation
  }

  getStyleTypeValue(styleType?: string): number | undefined {
    const styleTypes: Record<string, number> = {
      'FILL': 0,
      'STROKE': 1,
      'TEXT': 2,
      'EFFECT': 3
    }
    return styleType ? styleTypes[styleType] : undefined
  }

  getAllLocalStyles(_styleType: number): any[] {
    return [] // Mock implementation
  }

  createStyleMap(_styles: any[], _styleType: string): any {
    return { styles: [], subfolders: [] } // Mock implementation
  }

  flattenStyles(_styleMap: any): any[] {
    return [] // Mock implementation
  }

  getTargetFolder(name?: string): string {
    return name || 'default'
  }

  moveStyleToPosition(_target: any, _reference: any, _parent: any, _folder: string): void {
    // Mock implementation
  }

  moveFolderToPosition(_target: any, _reference: any, _parent: any): void {
    // Mock implementation
  }
}

/**
 * Paint Conversion Utilities
 * Handles conversion between internal and external paint formats
 */
export class PaintConversionUtils {
  /**
   * Convert internal paint to external format
   */
  static convertInternalPaintToExternal(paint: Paint): any {
    if (!paint) return null

    const visible = paint.visible !== false
    const opacity = paint.opacity !== undefined ? paint.opacity : 1
    const blendMode = paint.blendMode || 'NORMAL'

    switch (paint.type) {
      case 'SOLID':
        return {
          type: paint.type,
          color: {
            ...paint.color,
            a: 1,
          },
          visible,
          opacity,
          blendMode,
        }

      case 'GRADIENT_LINEAR':
      case 'GRADIENT_RADIAL':
      case 'GRADIENT_ANGULAR':
      case 'GRADIENT_DIAMOND':
        return {
          type: paint.type,
          transform: this.transformGradient(paint.gradientTransform),
          stopsVar: paint.gradientStops?.map(stop => this.convertGradientStop(stop)) || [],
          stops: paint.gradientStops?.map(({ color, position }) => ({ color, position })) || [],
          visible,
          opacity,
          blendMode,
        }

      case 'PATTERN':
        return this.convertPatternPaint(paint, visible, opacity, blendMode)

      default:
        throw new Error(`Unsupported paint type: ${paint.type}`)
    }
  }

  /**
   * Convert array of paints
   */
  static convertPaintArray(paints: Paint[]): any[] {
    return paints ? paints.map(this.convertInternalPaintToExternal) : []
  }

  /**
   * Convert text decoration color
   */
  static convertTextDecorationColor(paints: Paint[]): any {
    if (!paints || paints.length === 0) {
      return { value: 'AUTO' }
    }

    const convertedPaints = this.convertPaintArray(paints)
    if (convertedPaints.length !== 1) {
      throw new Error('Text decoration color must have exactly one paint')
    }

    const paint = convertedPaints[0]
    if (paint.type !== 'SOLID') {
      throw new Error('Text decoration color must be a solid color')
    }

    return { value: paint }
  }

  // Helper methods
  static transformGradient(transform: any): any {
    return transform // Mock implementation
  }

  static convertGradientStop(stop: any): any {
    if (stop.boundVariables?.color?.id && stop.boundVariables.color?.type === 'VARIABLE_ALIAS') {
      return {
        color: stop.color,
        position: stop.position,
        colorVar: {
          dataType: 'ALIAS',
          resolvedDataType: 'COLOR',
          value: {
            alias: stop.boundVariables.color.id,
          },
        },
      }
    }
    return {
      color: stop.color,
      position: stop.position,
    }
  }

  static convertPatternPaint(paint: Paint, visible: boolean, opacity: number, blendMode: string): any {
    // Clamp scaling factor
    if (paint.scalingFactor !== undefined) {
      const minScale = 0.01 // Mock constant
      const maxScale = 100 // Mock constant
      paint.scalingFactor = Math.min(Math.max(paint.scalingFactor, minScale), maxScale)
    }

    // Clamp spacing
    if (paint.spacing !== undefined) {
      const minSpacing = -1000 // Mock constant
      const maxSpacing = 1000 // Mock constant
      paint.spacing.x = Math.min(Math.max(paint.spacing.x, minSpacing), maxSpacing)
      paint.spacing.y = Math.min(Math.max(paint.spacing.y, minSpacing), maxSpacing)
    }

    return {
      type: paint.type,
      visible,
      opacity,
      blendMode,
      scalingFactor: paint.scalingFactor,
      spacing: paint.spacing,
      sourceNodeId: paint.sourceNodeId,
    }
  }
}

/**
 * Component Property Manager
 * Handles component property application and plugin data management
 */
export class ComponentPropertyManager {
  constructor(runtime: PluginRuntime) { }

  /**
   * Apply component properties to a node
   */
  applyComponentProps(node: SceneNode, props: ComponentProps): void {
    if (node.type !== 'INSTANCE') return

    // Handle component ID
    if (props.componentId) {
      try {
        const component = this.getComponent(props.componentId)
        if (component && node.swapComponent) {
          node.swapComponent(component)
          node.updateIfIsNestedInstance?.()
        }
      } catch (error) {
        this.runtime.logWarning(`Error setting componentId: ${error}`)
      }
    }

    // Handle plugin data
    if (props.sharedPluginData) {
      this.writeSharedPluginData(node, props.sharedPluginData)
    }
    if (props.pluginData) {
      this.writePluginData(node, props.pluginData)
    }

    // Handle component properties
    if (props.componentProps) {
      try {
        node.setProperties?.(props.componentProps, true)
      } catch (error) {
        this.runtime.logWarning(`Error setting component props: ${error}`)
      }
    }

    // Handle nested instance visibility
    let shouldMaterialize = false
    if (props.nestedInstancesVisibility) {
      for (const [name, visible] of Object.entries(props.nestedInstancesVisibility)) {
        const sublayer = node.getMatchingInstanceSublayer?.(name)
        if (!sublayer) continue

        const wasVisible = sublayer.visible
        sublayer.visible = visible
        shouldMaterialize = shouldMaterialize || (!wasVisible && visible)
      }
    }

    if (shouldMaterialize) {
      node.materializeDescendants?.()
    }

    // Handle nested component properties
    if (props.componentPropsNested) {
      for (const [name, nestedProps] of Object.entries(props.componentPropsNested)) {
        const sublayer = node.getMatchingInstanceSublayer?.(name)
        if (!sublayer || !sublayer.isVisibleInInstance) continue

        this.applyComponentProps(sublayer, nestedProps)
      }
    }
  }

  /**
   * Write plugin data to a node
   */
  writePluginData(node: SceneNode, data: Record<string, string>): void {
    if (typeof data !== 'object') return

    for (const [key, value] of Object.entries(data)) {
      if (typeof value !== 'string') {
        this.runtime.logWarning(`Attempting to set non-string pluginData: ${key}=${JSON.stringify(value)}`)
        continue
      }
      node.setPluginData?.(this.runtime.pluginID, key, value)
    }
  }

  /**
   * Write shared plugin data to a node
   */
  writeSharedPluginData(node: SceneNode, data: Record<string, string>): void {
    if (typeof data !== 'object') return

    for (const [key, value] of Object.entries(data)) {
      if (typeof value !== 'string') {
        this.runtime.logWarning(`Attempting to set non-string sharedPluginData: ${key}=${JSON.stringify(value)}`)
        continue
      }
      node.setSharedPluginData?.('jsx', key, value)
    }
  }

  /**
   * Write a single property to a node
   */
  writeProperty(node: SceneNode, property: string, value: any): void {
    if (property === 'widgetEvents' || property === 'widgetInputBehavior' || property === 'widgetTooltip') {
      // Handle widget-specific properties
      const nodeShim = this.getNodeShim(node)
      if (nodeShim) {
        nodeShim[property] = value
      }
    } else if (property === 'componentId') {
      this.applyComponentProps(node, { componentId: value })
    } else if (property === 'componentProps') {
      this.applyComponentProps(node, { componentProps: value })
    } else if (property === 'nestedInstancesVisibility') {
      this.applyComponentProps(node, { nestedInstancesVisibility: value })
    } else if (property === 'componentPropsNested') {
      this.applyComponentProps(node, { componentPropsNested: value })
    }
  }

  // Helper methods
  getComponent(_componentId: string): any {
    return null // Mock implementation
  }

  getNodeShim(_node: SceneNode): any {
    return null // Mock implementation
  }
}

/**
 * UI Style Constants
 * Common style values and color palettes
 */
export const UI_STYLE_CONSTANTS = {
  DEFAULT_STYLE: {
    style: '',
  },
  BLEND_MODES: ['NORMAL', 'MULTIPLY', 'SCREEN', 'OVERLAY', 'SOFT_LIGHT', 'HARD_LIGHT'],
  ANIMATION_TYPES: ['EASE_IN', 'EASE_OUT', 'EASE_IN_AND_OUT', 'LINEAR', 'GENTLE', 'QUICK', 'BOUNCY', 'SLOW'],
  WIDGET_PROPERTIES: ['widgetEvents', 'widgetInputBehavior', 'widgetTooltip'],
}

/**
 * Factory functions for creating UI and style management instances
 */
export function createStyleManagementRuntime(sceneGraph: SceneGraph, runtime: PluginRuntime): StyleManagementRuntime {
  return new StyleManagementRuntime(sceneGraph, runtime)
}

export function createComponentPropertyManager(runtime: PluginRuntime): ComponentPropertyManager {
  return new ComponentPropertyManager(runtime)
}

/**
 * Utility functions for paint conversion (maintaining backward compatibility)
 */
export function convertInternalPaintToExternal(paint: Paint): any {
  return PaintConversionUtils.convertInternalPaintToExternal(paint)
}

export function convertPaintArray(paints: Paint[]): any[] {
  return PaintConversionUtils.convertPaintArray(paints)
}

export function convertTextDecorationColor(paints: Paint[]): any {
  return PaintConversionUtils.convertTextDecorationColor(paints)
}
