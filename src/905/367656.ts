import { AutoLayoutNodeWrapper } from "../905/121113"
import { memoizeFn } from "../905/707098"
/**
 * Represents a 2D transformation matrix for handling node transformations
 * Includes operations for translation, rotation, scaling, and matrix multiplication
 */
class TransformMatrix {
  transform: number[][]

  constructor(transform: number[][]) {
    this.transform = transform
  }

  /**
   * Creates a new TransformMatrix instance from a 2D array
   * @param transform - 2x3 transformation matrix
   * @returns new TransformMatrix instance
   */
  static from(transform: number[][]): TransformMatrix {
    return new TransformMatrix(transform)
  }

  /**
   * Gets a specific value from the transformation matrix
   * @param row - Row index
   * @param col - Column index
   * @returns Value at the specified position
   */
  get(row: number, col: number): number {
    return this.transform[row][col]
  }

  /**
   * Translates the transformation matrix by x and y values
   * @param x - Horizontal translation
   * @param y - Vertical translation
   * @returns New translated TransformMatrix
   */
  translate(x: number, y: number): TransformMatrix {
    return TransformMatrix.from([
      [this.get(0, 0), this.get(0, 1), this.get(0, 2) + x],
      [this.get(1, 0), this.get(1, 1), this.get(1, 2) + y],
    ])
  }

  /**
   * Gets the rotation angle in radians
   * @returns Rotation angle in radians
   */
  getAngle(): number {
    const a = this.transform[0][0]
    return Math.atan2(this.transform[0][1], a)
  }

  /**
   * Gets the rotation angle in degrees
   * @returns Rotation angle in degrees
   */
  getAngleDeg(): number {
    return this.getAngle() * (180 / Math.PI)
  }

  /**
   * Checks if the transformation is flipped vertically
   * @returns True if vertically flipped
   */
  isFlippedVertical(): boolean {
    const [[a, b], [c, d]] = this.transform
    return a * d - b * c < 0
  }

  /**
   * Flips the transformation vertically
   * @returns New vertically flipped TransformMatrix
   */
  flipVertical(): TransformMatrix {
    return new TransformMatrix([[1, 0, 0], [0, -1, 0]]).multiply(this)
  }

  /**
   * Multiplies this transformation matrix with another
   * @param other - The other transformation matrix
   * @returns New TransformMatrix representing the multiplication result
   */
  multiply(other: TransformMatrix): TransformMatrix {
    const [[a, b, c], [d, e, f]] = this.transform
    const [[g, h, i], [j, k, l]] = other.transform

    return new TransformMatrix([
      [a * g + b * j, a * h + b * k, a * i + b * l + c],
      [d * g + e * j, d * h + e * k, d * i + e * l + f],
    ])
  }

  /**
   * Rotates a point using this transformation matrix
   * @param point - The point to rotate [x, y]
   * @returns Rotated point [x, y]
   */
  rotatePoint(point: [number, number]): [number, number] {
    const [[a, b, c], [d, e, f]] = this.transform
    const [x, y] = point
    return [a * x + b * y + c, d * x + e * y + f]
  }

  /**
   * Removes positional components from the transformation
   * @returns New TransformMatrix without position
   */
  skipPosition(): TransformMatrix {
    const [[a, b], [c, d]] = this.transform
    return new TransformMatrix([[a, b, 0], [c, d, 0]])
  }

  /**
   * Checks if the transformation includes rotation
   * @returns True if rotated
   */
  isRotated(): boolean {
    const a = this.transform[0][0]
    const b = this.transform[0][1]
    const c = this.transform[1][0]
    const d = this.transform[1][1]
    return !(a - 1 < 1e-5 && b - 0 < 1e-5 && c - 0 < 1e-5 && d - 1 < 1e-5)
  }

  /**
   * Creates a centered rotation transformation
   * @param angle - Rotation angle in degrees
   * @param width - Width of the element
   * @param height - Height of the element
   * @returns New TransformMatrix with centered rotation
   */
  static getCenteredRotation(angle: number, width: number, height: number): TransformMatrix {
    const translateToCenter = new TransformMatrix([[1, 0, -width / 2], [0, 1, -height / 2]])
    const translateFromCenter = new TransformMatrix([[1, 0, width / 2], [0, 1, height / 2]])
    const radians = angle * Math.PI / 180
    const rotation = new TransformMatrix([
      [Math.cos(radians), Math.sin(radians), 0],
      [-Math.sin(radians), Math.cos(radians), 0],
    ])

    return translateFromCenter.multiply(rotation.multiply(translateToCenter))
  }
}

/**
 * Provides cached access to node properties with computed values
 * Handles layout calculations, transformations, and positioning
 */
export class LayoutNode {
  _cachedProperties: Record<string, any>
  _EXPENSIVE_TO_READ_node: any
  nodeCache: ObjectOf

  constructor(node: any, nodeCache: ObjectOf) {
    this._cachedProperties = {}
    this._EXPENSIVE_TO_READ_node = node
    this.nodeCache = nodeCache
  }

  /**
   * Creates an empty LayoutNode instance
   * @returns New empty LayoutNode
   */
  static empty(): LayoutNode {
    return new LayoutNode({
      width: 0,
      height: 0,
      relativeTransform: [[0, 0, 0], [0, 0, 0]],
      layoutGrow: 0,
      layoutAlign: "MIN",
      layoutPositioning: "AUTO",
      minHeight: 0,
      minWidth: 0,
      maxHeight: 0,
      maxWidth: 0,
    }, null)
  }

  /**
   * Reads a value from the node with caching
   * @param key - Property key
   * @param getter - Function to get the value
   * @returns Property value
   */
  readValue(key: string, getter: (node: any) => any): any {
    return memoizeFn(this._cachedProperties, key, this._EXPENSIVE_TO_READ_node, getter)
  }

  // Basic dimension properties
  get width(): number {
    return this.readValue("width", node => node.width)
  }

  get height(): number {
    return this.readValue("height", node => node.height)
  }

  get minWidth(): number {
    return this.readValue("minWidth", node => node.minWidth)
  }

  get maxWidth(): number {
    return this.readValue("maxWidth", node => node.maxWidth)
  }

  get minHeight(): number {
    return this.readValue("minHeight", node => node.minHeight)
  }

  get maxHeight(): number {
    return this.readValue("maxHeight", node => node.maxHeight)
  }

  // Layout properties
  get layoutGrow(): number {
    return this.readValue("layoutGrow", node => node.layoutGrow)
  }

  get layoutAlign(): string {
    return this.readValue("layoutAlign", node => node.layoutAlign)
  }

  /**
   * Gets the relative transformation matrix with parent adjustments
   * @returns TransformMatrix for relative transformation
   */
  get relativeTransform(): TransformMatrix {
    return this.readValue("relativeTransform", (node) => {
      let transform = TransformMatrix.from(node.relativeTransform)

      if (!this.parent?._EXPENSIVE_TO_READ_node)
        return transform

      if (this.parent?.layout._EXPENSIVE_TO_READ_node instanceof AutoLayoutNodeWrapper) {
        const adjustedX = transform.get(0, 2) - this.parent.layout.relativeBounds().bounds.x
        const adjustedY = transform.get(1, 2) - this.parent.layout.relativeBounds().bounds.y
        return TransformMatrix.from([
          [transform.get(0, 0), transform.get(0, 1), adjustedX],
          [transform.get(1, 0), transform.get(1, 1), adjustedY],
        ])
      }

      return transform
    })
  }

  get layoutPositioning(): string {
    return this.readValue("layoutPositioning", node => node.layoutPositioning)
  }

  get constraints(): any {
    return this.readValue("constraints", (node) => {
      if ("constraints" in node)
        return node.constraints
    })
  }

  get targetAspectRatio(): number | undefined {
    return this.readValue("targetAspectRatio", node => node.targetAspectRatio ?? undefined)
  }

  /**
   * Gets the parent node with type checking
   * @returns Parent LayoutNode or undefined
   */
  get parent(): LayoutNode | undefined {
    return this.readValue("parent", (node) => {
      const parent = node.parent
      if (parent) {
        const type = parent.type
        const validTypes = ["LINE", "ELLIPSE", "RECTANGLE", "FRAME", "GROUP", "COMPONENT", "COMPONENT_SET", "INSTANCE", "TEXT"]
        if (!validTypes.includes(type)) {
          return this.nodeCache?.getNode(parent)
        }
      }
    })
  }

  /**
   * Calculates absolute positioning based on constraints
   * @returns Positioning information with horizontal and vertical constraints
   */
  absolutePosition(): {
    horizontal: { type: string, offset: number }
    vertical: { type: string, offset: number }
  } {
    const { x, y, width, height } = this.relativeBounds().bounds

    if (!this.parent || !this.constraints) {
      return {
        vertical: {
          type: "top",
          offset: y,
        },
        horizontal: {
          type: "left",
          offset: x,
        },
      }
    }

    const { width: parentWidth, height: parentHeight } = this.parent.layout.relativeBounds().bounds
    const widthDiff = parentWidth - width
    const heightDiff = parentHeight - height

    return {
      horizontal: x <= widthDiff / 2 || widthDiff === 0
        ? {
            type: "left",
            offset: x,
          }
        : {
            type: "right",
            offset: widthDiff - x,
          },
      vertical: y <= heightDiff / 2 || heightDiff === 0
        ? {
            type: "top",
            offset: y,
          }
        : {
            type: "bottom",
            offset: heightDiff - y,
          },
    }
  }

  /**
   * Calculates relative bounds with rotation and flipping adjustments
   * @returns Bounds information with rotation and transformation
   */
  relativeBounds(): {
    bounds: { x: number, y: number, width: number, height: number }
    rotation: TransformMatrix
    transform: TransformMatrix
  } {
    let transform = this.relativeTransform

    // Adjust for flipping if needed
    if (TransformMatrix.getCenteredRotation(transform.getAngleDeg(), this.width, this.height).isFlippedVertical()) {
      transform = transform.flipVertical()
    }

    // Calculate corner points
    const centerToOrigin = TransformMatrix.from([[1, 0, -this.width / 2], [0, 1, -this.height / 2]])
    const originToCenter = TransformMatrix.from([[1, 0, this.width / 2], [0, 1, this.height / 2]])

    const adjustedTransform = originToCenter.multiply(transform.skipPosition().multiply(centerToOrigin))

    // Get all four corners
    const topLeft = adjustedTransform.rotatePoint([0, 0])
    const bottomLeft = adjustedTransform.rotatePoint([0, this.height])
    const topRight = adjustedTransform.rotatePoint([this.width, 0])
    const bottomRight = adjustedTransform.rotatePoint([this.width, this.height])

    // Find bounding box
    const minX = Math.min(topLeft[0], bottomLeft[0], topRight[0], bottomRight[0])
    const minY = Math.min(topLeft[1], bottomLeft[1], topRight[1], bottomRight[1])
    const width = Math.max(topLeft[0], bottomLeft[0], topRight[0], bottomRight[0]) - minX
    const height = Math.max(topLeft[1], bottomLeft[1], topRight[1], bottomRight[1]) - minY

    // Center the bounds
    const centeringTransform = TransformMatrix.from([
      [1, 0, (width - this.width) / 2],
      [0, 1, (height - this.height) / 2],
    ]).multiply(adjustedTransform)

    const offsetX = centeringTransform.get(0, 2)
    const offsetY = centeringTransform.get(1, 2)

    return {
      bounds: {
        x: transform.get(0, 2) - offsetX,
        y: transform.get(1, 2) - offsetY,
        width,
        height,
      },
      rotation: centeringTransform,
      transform,
    }
  }

  /**
   * Checks if absolute positioning should be used
   * @returns True if absolute positioning is required
   */
  shouldUseAbsolutePosition(): boolean {
    return this.layoutPositioning === "ABSOLUTE"
  }
}

export const t = LayoutNode
