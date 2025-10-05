/**
 * Represents a node with stroke-related properties
 * Original name: $$n1
 */
export class StrokeNodeWrapper {
  readonly node: any

  constructor(node: any) {
    this.node = node
  }

  /**
   * Gets the maximum dimension (width or height) of the node
   */
  get size(): number {
    return Math.max(this.node.width, this.node.height)
  }

  /**
   * Gets the strokes of the node
   */
  get strokes(): any {
    return this.node.strokes
  }

  /**
   * Gets the stroke alignment of the node
   */
  get strokeAlign(): any {
    return this.node.strokeAlign
  }

  /**
   * Gets the bottom stroke weight
   */
  get strokeBottomWeight(): number {
    return this.node.strokeWeight
  }

  /**
   * Gets the top stroke weight
   */
  get strokeTopWeight(): number {
    return this.node.strokeWeight
  }

  /**
   * Gets the left stroke weight
   */
  get strokeLeftWeight(): number {
    return this.node.strokeWeight
  }

  /**
   * Gets the right stroke weight
   */
  get strokeRightWeight(): number {
    return this.node.strokeWeight
  }

  /**
   * Gets the bottom right radius
   */
  get bottomRightRadius(): number {
    return this.size
  }

  /**
   * Gets the top left radius
   */
  get topLeftRadius(): number {
    return this.size
  }

  /**
   * Gets the top right radius
   */
  get topRightRadius(): number {
    return this.size
  }

  /**
   * Gets the bottom left radius
   */
  get bottomLeftRadius(): number {
    return this.size
  }

  /**
   * Gets the dash pattern of the node
   */
  get dashPattern(): any {
    return this.node.dashPattern
  }
}

/**
 * Represents layout properties with fixed dimensions
 * Original name: $$r0
 */
export class FixedLayoutNodeWrapper {
  readonly node: any
  private readonly _width: number
  private readonly _height: number

  constructor(node: any, width: number, height: number) {
    this.node = node
    this._width = width
    this._height = height
  }

  /**
   * Gets the layout grow property
   */
  get layoutGrow(): any {
    return this.node.layoutGrow
  }

  /**
   * Gets the layout alignment
   */
  get layoutAlign(): any {
    return this.node.layoutAlign
  }

  /**
   * Gets the constraints of the node
   */
  get constraints(): any {
    return this.node.constraints
  }

  /**
   * Gets the layout positioning
   */
  get layoutPositioning(): any {
    return this.node.layoutPositioning
  }

  /**
   * Gets the fixed width
   */
  get width(): number {
    return this._width
  }

  /**
   * Gets the fixed height
   */
  get height(): number {
    return this._height
  }

  /**
   * Gets the minimum height constraint
   */
  get minHeight(): number | undefined {
    return this.node.minHeight
  }

  /**
   * Gets the maximum height constraint
   */
  get maxHeight(): number | undefined {
    return this.node.maxHeight
  }

  /**
   * Gets the minimum width constraint
   */
  get minWidth(): number | undefined {
    return this.node.minWidth
  }

  /**
   * Gets the maximum width constraint
   */
  get maxWidth(): number | undefined {
    return this.node.maxWidth
  }

  /**
   * Gets the relative transform matrix based on node position
   */
  get relativeTransform(): number[][] {
    return [[1, 0, this.node.x], [0, 1, this.node.y]]
  }

  /**
   * Gets the target aspect ratio (always null for fixed layout)
   */
  get targetAspectRatio(): null {
    return null
  }
}

/**
 * Represents an auto-layout node wrapper
 * Original name: $$a2
 */
export class AutoLayoutNodeWrapper {
  private readonly node: any

  constructor(node: any) {
    this.node = node
  }

  /**
   * Gets the constraints (always stretch for auto-layout)
   */
  get constraints(): { vertical: string, horizontal: string } {
    return {
      vertical: "STRETCH",
      horizontal: "STRETCH",
    }
  }

  /**
   * Gets the layout grow property
   */
  get layoutGrow(): any {
    return this.node.layoutGrow
  }

  /**
   * Gets the layout alignment
   */
  get layoutAlign(): any {
    return this.node.layoutAlign
  }

  /**
   * Gets the layout positioning
   */
  get layoutPositioning(): any {
    return this.node.layoutPositioning
  }

  /**
   * Gets the width of the node
   */
  get width(): number {
    return this.node.width
  }

  /**
   * Gets the height of the node
   */
  get height(): number {
    return this.node.height
  }

  /**
   * Gets the relative transform of the node
   */
  get relativeTransform(): any {
    return this.node.relativeTransform
  }

  /**
   * Gets the parent of the node
   */
  get parent(): any {
    return this.node.parent
  }

  /**
   * Gets the minimum height constraint
   */
  get minHeight(): number | undefined {
    return this.node.minHeight
  }

  /**
   * Gets the maximum height constraint
   */
  get maxHeight(): number | undefined {
    return this.node.maxHeight
  }

  /**
   * Gets the minimum width constraint
   */
  get minWidth(): number | undefined {
    return this.node.minWidth
  }

  /**
   * Gets the maximum width constraint
   */
  get maxWidth(): number | undefined {
    return this.node.maxWidth
  }

  /**
   * Gets the target aspect ratio
   */
  get targetAspectRatio(): number | null {
    return this.node.targetAspectRatio ?? null
  }
}

// Export aliases for backward compatibility
export const Q = FixedLayoutNodeWrapper
export const Ux = StrokeNodeWrapper
export const dN = AutoLayoutNodeWrapper
