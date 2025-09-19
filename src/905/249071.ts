import { Vector2D } from '../905/512402'

/**
 * Represents a 2D rectangle with origin and size.
 * Original class name: $$a0
 */
export class Rectangle {
  origin: Vector2D
  size: Vector2D

  /**
   * Creates a Rectangle from a rect data object.
   * Original: $$a0.fromRectD
   * @param e - The rect data with origin and size.
   * @returns A new Rectangle instance.
   */
  static fromRectD(e: { origin: Vector2D, size: Vector2D }): Rectangle {
    return new Rectangle(Vector2D.fromVectorD(e.origin), Vector2D.fromVectorD(e.size))
  }

  /**
   * Clones the rectangle.
   * Original: $$a0.clone
   * @returns A new Rectangle instance with the same origin and size.
   */
  clone(): Rectangle {
    return new Rectangle(this.origin.clone(), this.size.clone())
  }

  /**
   * Checks if this rectangle equals another.
   * Original: $$a0.equals
   * @param e - The other rectangle to compare.
   * @returns True if equal, false otherwise.
   */
  equals(e: Rectangle): boolean {
    return this.origin.equals(e.origin) && this.size.equals(e.size)
  }

  /**
   * Gets the left edge x-coordinate.
   * Original: $$a0.left
   * @returns The left x-coordinate.
   */
  left(): number {
    return this.origin.x
  }

  /**
   * Gets the top edge y-coordinate.
   * Original: $$a0.top
   * @returns The top y-coordinate.
   */
  top(): number {
    return this.origin.y
  }

  /**
   * Gets the right edge x-coordinate.
   * Original: $$a0.right
   * @returns The right x-coordinate.
   */
  right(): number {
    return this.size.x === Number.POSITIVE_INFINITY ? Number.POSITIVE_INFINITY : this.origin.x + this.width()
  }

  /**
   * Gets the bottom edge y-coordinate.
   * Original: $$a0.bottom
   * @returns The bottom y-coordinate.
   */
  bottom(): number {
    return this.size.y === Number.POSITIVE_INFINITY ? Number.POSITIVE_INFINITY : this.origin.y + this.height()
  }

  /**
   * Gets the bottom-right corner.
   * Original: $$a0.bottomRight
   * @returns A Vector2D of the bottom-right point.
   */
  bottomRight(): Vector2D {
    return new Vector2D(this.right(), this.bottom())
  }

  /**
   * Gets the bottom-left corner.
   * Original: $$a0.bottomLeft
   * @returns A Vector2D of the bottom-left point.
   */
  bottomLeft(): Vector2D {
    return new Vector2D(this.left(), this.bottom())
  }

  /**
   * Gets the top-left corner.
   * Original: $$a0.topLeft
   * @returns A Vector2D of the top-left point.
   */
  topLeft(): Vector2D {
    return new Vector2D(this.left(), this.top())
  }

  /**
   * Gets the top-right corner.
   * Original: $$a0.topRight
   * @returns A Vector2D of the top-right point.
   */
  topRight(): Vector2D {
    return new Vector2D(this.right(), this.top())
  }

  /**
   * Gets the top-center point.
   * Original: $$a0.topCenter
   * @returns A Vector2D of the top-center point.
   */
  topCenter(): Vector2D {
    return new Vector2D(this.center().x, this.top())
  }

  /**
   * Gets the bottom-center point.
   * Original: $$a0.bottomCenter
   * @returns A Vector2D of the bottom-center point.
   */
  bottomCenter(): Vector2D {
    return new Vector2D(this.center().x, this.bottom())
  }

  /**
   * Gets the center-left point.
   * Original: $$a0.centerLeft
   * @returns A Vector2D of the center-left point.
   */
  centerLeft(): Vector2D {
    return new Vector2D(this.left(), this.center().y)
  }

  /**
   * Gets the center-right point.
   * Original: $$a0.centerRight
   * @returns A Vector2D of the center-right point.
   */
  centerRight(): Vector2D {
    return new Vector2D(this.right(), this.center().y)
  }

  /**
   * Gets the center point.
   * Original: $$a0.center
   * @returns A Vector2D of the center point.
   */
  center(): Vector2D {
    return new Vector2D(this.origin.x + this.size.x / 2, this.origin.y + this.size.y / 2)
  }

  /**
   * Gets the width.
   * Original: $$a0.width
   * @returns The width.
   */
  width(): number {
    return this.size.x
  }

  /**
   * Gets the height.
   * Original: $$a0.height
   * @returns The height.
   */
  height(): number {
    return this.size.y
  }

  /**
   * Transposes the rectangle.
   * Original: $$a0.transpose
   * @returns A new transposed Rectangle.
   */
  transpose(): Rectangle {
    return new Rectangle(this.origin.transpose(), this.size.transpose())
  }

  /**
   * Offsets the rectangle by a vector.
   * Original: $$a0.offsetBy
   * @param e - The offset vector.
   * @returns A new offset Rectangle.
   */
  offsetBy(e: Vector2D): Rectangle {
    return new Rectangle(this.origin.plus(e), this.size)
  }

  /**
   * Scales the rectangle by a factor.
   * Original: $$a0.scaledBy
   * @param e - The scale factor.
   * @returns A new scaled Rectangle.
   */
  scaledBy(e: number): Rectangle {
    return new Rectangle(this.origin.multiplyBy(e), this.size.multiplyBy(e))
  }

  /**
   * Checks if the rectangle is invalid.
   * Original: $$a0.isInvalid
   * @returns True if invalid, false otherwise.
   */
  isInvalid(): boolean {
    return this.size.x < 0 || this.size.y < 0 || this.origin.hasNaN() || this.size.hasNaN()
  }

  /**
   * Checks if the rectangle is valid.
   * Original: $$a0.isValid
   * @returns True if valid, false otherwise.
   */
  isValid(): boolean {
    return !this.isInvalid()
  }

  /**
   * Checks if the rectangle is empty.
   * Original: $$a0.isEmpty
   * @returns True if empty, false otherwise.
   */
  isEmpty(): boolean {
    return !!this.isInvalid() || this.size.x <= 0 || this.size.y <= 0
  }

  /**
   * Computes the union with another rectangle.
   * Original: $$a0.unionWith
   * @param e - The other rectangle.
   * @returns A new Rectangle representing the union.
   */
  unionWith(e: Rectangle): Rectangle {
    const minOrigin = Vector2D.min(this.origin, e.origin)
    const maxBottomRight = Vector2D.max(this.bottomRight(), e.bottomRight())
    return minOrigin.equals(maxBottomRight) ? this : new Rectangle(minOrigin, maxBottomRight.minus(minOrigin))
  }

  /**
   * Checks if this rectangle contains another including boundaries.
   * Original: $$a0.containsIncludingBoundary
   * @param e - The other rectangle.
   * @returns True if contains, false otherwise.
   */
  containsIncludingBoundary(e: Rectangle): boolean {
    return !this.isEmpty() && !e.isInvalid() && this.left() <= e.left() && this.right() >= e.right() && this.top() <= e.top() && this.bottom() >= e.bottom()
  }

  /**
   * Checks if this rectangle contains a point including boundaries.
   * Original: $$a0.containsPointIncludingBoundary
   * @param e - The point.
   * @returns True if contains, false otherwise.
   */
  containsPointIncludingBoundary(e: Vector2D): boolean {
    return !this.isEmpty() && this.left() <= e.x && e.x <= this.right() && this.top() <= e.y && e.y <= this.bottom()
  }

  /**
   * Computes the intersection with another rectangle.
   * Original: $$a0.intersectWith
   * @param e - The other rectangle.
   * @returns A new Rectangle representing the intersection.
   */
  intersectWith(e: Rectangle): Rectangle {
    if (this.isInvalid() || e.isInvalid()) {
      return Rectangle.invalidRect()
    }
    const maxOrigin = Vector2D.max(this.origin, e.origin)
    const minBottomRight = Vector2D.min(this.bottomRight(), e.bottomRight())
    const result = new Rectangle(maxOrigin, minBottomRight.minus(maxOrigin))
    if (result.origin.hasNaN() || result.size.hasNaN()) {
      throw new Error('Rectangle.intersectWith produced a result with NaN')
    }
    return result.isInvalid() ? Rectangle.invalidRect() : result
  }

  /**
   * Checks if this rectangle has intersection with another.
   * Original: $$a0.hasIntersectionWith
   * @param e - The other rectangle.
   * @returns True if intersects, false otherwise.
   */
  hasIntersectionWith(e: Rectangle): boolean {
    return !this.intersectWith(e).isEmpty()
  }

  /**
   * Expands the rectangle by a margin.
   * Original: $$a0.expand
   * @param e - The expansion value or vector.
   * @returns A new expanded Rectangle.
   */
  expand(e: number | Vector2D): Rectangle {
    if (this.isInvalid()) {
      return Rectangle.invalidRect()
    }
    if (typeof e === 'number') {
      return Rectangle.fromOriginAndSize(this.origin.x - e, this.origin.y - e, this.size.x + 2 * e, this.size.y + 2 * e)
    }
    return new Rectangle(this.origin.minus(e), this.size.plus(e.multiplyBy(2)))
  }

  /**
   * Creates an invalid rectangle.
   * Original: $$a0.invalidRect
   * @returns An invalid Rectangle.
   */
  static invalidRect(): Rectangle {
    return new Rectangle(new Vector2D(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY), new Vector2D(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY))
  }

  /**
   * Creates an infinite rectangle.
   * Original: $$a0.infinite
   * @returns An infinite Rectangle.
   */
  static infinite(): Rectangle {
    return new Rectangle(Vector2D.infinity().multiplyBy(-1), Vector2D.infinity())
  }

  /**
   * Creates a rectangle from origin and size.
   * Original: $$a0.fromOriginAndSize
   * @param e - Origin x.
   * @param t - Origin y.
   * @param i - Size x (width).
   * @param r - Size y (height).
   * @returns A new Rectangle.
   */
  static fromOriginAndSize(e: number, t: number, i: number, r: number): Rectangle {
    return new Rectangle(new Vector2D(e, t), new Vector2D(i, r))
  }

  /**
   * Creates a rectangle from center and size.
   * Original: $$a0.fromCenterSize
   * @param e - Center point.
   * @param t - Size vector.
   * @returns A new Rectangle.
   */
  static fromCenterSize(e: Vector2D, t: Vector2D): Rectangle {
    const halfSize = t.divideBy(2)
    return new Rectangle(e.minus(halfSize), t)
  }

  /**
   * Creates a rectangle from a fig rect object.
   * Original: $$a0.fromFigRect
   * @param e - The fig rect with x, y, w, h.
   * @returns A new Rectangle.
   */
  static fromFigRect(e: { x: number, y: number, w: number, h: number }): Rectangle {
    return new Rectangle(new Vector2D(e.x, e.y), new Vector2D(e.w, e.h))
  }

  /**
   * Computes bounds from two points.
   * Original: $$a0.computeBounds
   * @param e - First point.
   * @param t - Second point.
   * @returns A new Rectangle.
   */
  static computeBounds(e: Vector2D, t: Vector2D): Rectangle {
    const minPoint = Vector2D.min(e, t)
    return new Rectangle(minPoint, Vector2D.max(e, t).minus(minPoint))
  }

  /**
   * Computes bounds from an array of points.
   * Original: $$a0.computeBoundsFromPointArray
   * @param e - Array of points.
   * @returns A new Rectangle.
   */
  static computeBoundsFromPointArray(e: Vector2D[]): Rectangle {
    let minPoint = Vector2D.infinity()
    let maxPoint = Vector2D.infinity().multiplyBy(-1)
    for (const point of e) {
      minPoint = Vector2D.min(minPoint, point)
      maxPoint = Vector2D.max(maxPoint, point)
    }
    return new Rectangle(minPoint, maxPoint.minus(minPoint))
  }

  /**
   * Constructor for Rectangle.
   * Original: $$a0.constructor
   * @param origin - The origin vector (default: new Vector2D()).
   * @param size - The size vector (default: new Vector2D()).
   */
  constructor(origin: Vector2D = new Vector2D(), size: Vector2D = new Vector2D()) {
    this.origin = origin
    this.size = size
  }
}

// Original export: export const r = $$a0
export const r = Rectangle
