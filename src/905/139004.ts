import { BasicNodeProperties } from "../905/113996"
import { ComponentNodeProperties } from "../905/136718"
import { InstanceNodeProperties } from "../905/248554"
import { LayoutNode } from "../905/367656"
import { FrameNodeProperties } from "../905/687364"
import { NodeProperties } from "../905/897942"
import { ShapeNodeProperties } from "../905/971516"

/**
 * Enum representing sizing modes for layout nodes.
 * @enum {number}
 */
export enum SizingModeEnum {
  FIXED = 0,
  FILL_PARENT = 1,
  HUG_CONTENTS = 2,
}

/**
 * Type guard to check if a node has layout constraints.
 * @param node - The node to check
 * @returns True if node is an instance of layout-constrained node types
 */
export function isLayoutConstrainedNode(node: any): boolean {
  return (
    node instanceof FrameNodeProperties
    || node instanceof ShapeNodeProperties
    || node instanceof InstanceNodeProperties
    || node instanceof ComponentNodeProperties
  )
}

/**
 * Type guard to check if a node is a basic node property instance.
 * @param node - The node to check
 * @returns True if node is an instance of NodeProperties
 */
export function isBasicNode(node: any): boolean {
  return node instanceof NodeProperties
}

/**
 * Type guard to check if a node supports auto-layout features.
 * @param node - The node to check
 * @returns True if node supports auto-layout
 */
export function isAutoLayoutSupportedNode(node: any): boolean {
  return (
    node instanceof FrameNodeProperties
    || node instanceof ComponentNodeProperties
    || node instanceof BasicNodeProperties
    || node instanceof InstanceNodeProperties
  )
}

/**
 * Base class representing a generic node in the layout system.
 * Provides common properties and methods for all node types.
 */
export class GenericNode {
  id: string
  name: string
  type: string
  layout: LayoutNode

  constructor() {
    this.id = "unimplemented"
    this.name = "unimplemented"
    this.type = "unimplemented"
    this.layout = LayoutNode.empty()
  }

  /**
   * Create a GenericNode from another node object.
   * @param sourceNode - The source node to copy properties from
   * @returns A new GenericNode instance with copied properties
   */
  static from(sourceNode: any): GenericNode {
    const node = new GenericNode()
    node.type = sourceNode.type
    node.name = sourceNode.name
    node.id = sourceNode.id
    return node
  }

  /**
   * Check if this node uses auto-layout.
   * @returns False by default, subclasses may override
   */
  isAutoLayout(): boolean {
    return false
  }

  /**
   * Check if this node is a grid layout.
   * @returns False by default, subclasses may override
   */
  isGrid(): boolean {
    return false
  }

  /**
   * Set the name of this node.
   * @param name - The new name for the node
   */
  setName(_name: string): void { }

  /**
   * Get the value of a variable associated with this node.
   * @param variableName - The name of the variable to retrieve
   * @returns Null by default, subclasses may override
   */
  getVariableValue(_variableName: string): any {
    return null
  }
}

/**
 * Determine sizing mode based on parent's vertical layout configuration.
 * @param node - The node to evaluate
 * @returns The appropriate sizing mode
 */
export function getSizingModeForVerticalParent(node: any): SizingModeEnum {
  // Check parent layout constraints
  if (
    (node.layout.parent?.isAutoLayout() || node.layout.parent?.isGrid())
    && node.layout.layoutPositioning !== "ABSOLUTE"
  ) {
    switch (node.layout.parent.autoLayout.layoutMode) {
      case "HORIZONTAL":
        if (node.layout.layoutGrow === 1)
          return SizingModeEnum.FILL_PARENT
        break
      case "VERTICAL":
        if (node.layout.layoutAlign === "STRETCH")
          return SizingModeEnum.FILL_PARENT
    }
    if (node.layout.parent?.isGrid() && node.layout.layoutGrow === 1)
      return SizingModeEnum.FILL_PARENT
  }

  // Handle horizontal layouts or grids with children
  if (
    (node.isGrid() || (node.isAutoLayout() && node.autoLayout.layoutMode === "HORIZONTAL"))
    && node.children.length > 0
  ) {
    switch (node.autoLayout.primaryAxisSizingMode) {
      case "AUTO":
        return SizingModeEnum.HUG_CONTENTS
      case "FIXED":
        return SizingModeEnum.FIXED
    }
  }

  // Handle vertical auto-layout with children
  if (node.isAutoLayout() && node.autoLayout.layoutMode === "VERTICAL" && node.children.length > 0) {
    switch (node.autoLayout.counterAxisSizingMode) {
      case "AUTO":
        return SizingModeEnum.HUG_CONTENTS
      case "FIXED":
        return SizingModeEnum.FIXED
    }
  }

  // Text handling
  return node instanceof NodeProperties && node.textAutoResize === "WIDTH_AND_HEIGHT"
    ? SizingModeEnum.HUG_CONTENTS
    : SizingModeEnum.FIXED
}

/**
 * Determine sizing mode based on parent's horizontal layout configuration.
 * @param node - The node to evaluate
 * @returns The appropriate sizing mode
 */
export function getSizingModeForHorizontalParent(node: any): SizingModeEnum {
  // Check parent layout constraints
  if (
    (node.layout.parent?.isAutoLayout() || node.layout.parent?.isGrid())
    && node.layout.layoutPositioning !== "ABSOLUTE"
  ) {
    switch (node.layout.parent.autoLayout.layoutMode) {
      case "VERTICAL":
        if (node.layout.layoutGrow === 1)
          return SizingModeEnum.FILL_PARENT
        break
      case "HORIZONTAL":
        if (node.layout.layoutAlign === "STRETCH")
          return SizingModeEnum.FILL_PARENT
    }
    if (node.layout.parent?.isGrid() && node.layout.layoutGrow === 1)
      return SizingModeEnum.FILL_PARENT
  }

  // Handle vertical auto-layout with children
  if (node.isAutoLayout() && node.autoLayout.layoutMode === "VERTICAL" && node.children.length > 0) {
    switch (node.autoLayout.primaryAxisSizingMode) {
      case "AUTO":
        return SizingModeEnum.HUG_CONTENTS
      case "FIXED":
        return SizingModeEnum.FIXED
    }
  }

  // Handle horizontal layouts or grids with children
  if (
    (node.isGrid() || (node.isAutoLayout() && node.autoLayout.layoutMode === "HORIZONTAL"))
    && node.children.length > 0
  ) {
    switch (node.autoLayout.counterAxisSizingMode) {
      case "AUTO":
        return SizingModeEnum.HUG_CONTENTS
      case "FIXED":
        return SizingModeEnum.FIXED
    }
  }

  // Text handling
  return node instanceof NodeProperties
    && (node.textAutoResize === "WIDTH_AND_HEIGHT" || node.textAutoResize === "HEIGHT")
    ? SizingModeEnum.HUG_CONTENTS
    : SizingModeEnum.FIXED
}

/**
 * Determine the appropriate sizing mode for a node based on its parent layout.
 * @param node - The node to evaluate
 * @returns The appropriate sizing mode
 */
export function getNodeSizingMode(node: any): SizingModeEnum {
  return node.layout.parent?.isAutoLayout() && node.layout.parent.autoLayout.layoutMode === "VERTICAL"
    ? getSizingModeForVerticalParent(node)
    : getSizingModeForHorizontalParent(node)
}

// Export aliases for backward compatibility
export const J3 = GenericNode
export const XQ = SizingModeEnum
export const fw = getNodeSizingMode
export const qn = getSizingModeForHorizontalParent
export const BL = getSizingModeForVerticalParent
export const u_ = isAutoLayoutSupportedNode
export const HW = isLayoutConstrainedNode
export const KH = isBasicNode
