// Original file: /Users/allen/sigma-main/src/905/736624.ts
// Refactored to use meaningful names, add types, JSDoc comments, and ensure immutability where possible.
// Grouped related functionality: Point class for 2D vectors/points, and utility functions for rectangles.
// Split large methods if needed, but here the class is manageable.
// Simplified conditionals in rectDistance.
// Added interfaces for Rect and Point for type safety.
// Ensured static methods return Point instances for consistency.
// Updated exports to match new names.

import { isNotNullish } from '../figma_app/95419'

/**
 * Interface for a 2D point or vector.
 */
export interface IPoint {
  x: number
  y: number
}

/**
 * Interface for a rectangle with position and size.
 */
interface Rect {
  x: number
  y: number
  width: number
  height: number
}

/**
 * Class representing a 2D point or vector. Original: $$r0
 */
export class Point implements IPoint {
  x: number
  y: number

  /**
   * Creates a new Point. Original constructor.
   * @param x - The x-coordinate.
   * @param y - The y-coordinate.
   */
  constructor(x = 0, y = 0) {
    this.x = x
    this.y = y
  }

  /**
   * Clones this point. Original: clone
   * @returns A new Point with the same coordinates.
   */
  clone(): Point {
    return new Point(this.x, this.y)
  }

  /**
   * Checks if this point equals another. Original: equals
   * @param other - The other point to compare.
   * @returns True if equal, false otherwise.
   */
  equals(other: Point): boolean {
    return this.x === other.x && this.y === other.y
  }

  /**
   * Returns a string representation. Original: toString
   * @returns String in format "(x, y)".
   */
  toString(): string {
    return `(${this.x}, ${this.y})`
  }

  /**
   * Adds another point to this one. Original: add
   * @param other - The point to add.
   * @returns A new Point with the sum.
   */
  add(other: Point): Point {
    return new Point(this.x + other.x, this.y + other.y)
  }

  /**
   * Adds multiple points. Original: static add
   * @param points - The points to add.
   * @returns A new Point with the total sum.
   */
  static add(...points: (IPoint | null | undefined)[]): Point {
    return points
      .filter(isNotNullish)
      .reduce((acc, p) => new Point(acc.x + p.x, acc.y + p.y), new Point(0, 0))
  }

  /**
   * Subtracts another point from this one. Original: subtract
   * @param other - The point to subtract.
   * @returns A new Point with the difference.
   */
  subtract(other: Point): Point {
    return new Point(this.x - other.x, this.y - other.y)
  }

  /**
   * Subtracts two points. Original: static subtract
   * @param a - The first point.
   * @param b - The point to subtract.
   * @returns A new Point with the difference.
   */
  static subtract(a: IPoint, b: IPoint): Point {
    return new Point(a.x - b.x, a.y - b.y)
  }

  /**
   * Scales a point by a factor. Original: static scale
   * @param factor - The scaling factor.
   * @param point - The point to scale.
   * @returns A new scaled Point.
   */
  static scale(factor: number, point: IPoint): Point {
    return new Point(factor * point.x, factor * point.y)
  }

  /**
   * Takes the absolute value of a point's coordinates. Original: static abs
   * @param point - The point.
   * @returns A new Point with absolute coordinates.
   */
  static abs(point: IPoint): Point {
    return new Point(Math.abs(point.x), Math.abs(point.y))
  }

  /**
   * Returns the maximum of x and y. Original: static max
   * @param point - The point.
   * @returns The maximum value.
   */
  static max(point: Point): number {
    return Math.max(point.x, point.y)
  }

  /**
   * Scales this point by a factor. Original: scale
   * @param factor - The scaling factor.
   * @returns A new scaled Point.
   */
  scale(factor: number): Point {
    return new Point(this.x * factor, this.y * factor)
  }

  /**
   * Multiplies this point by another (component-wise). Original: multiply
   * @param other - The other point.
   * @returns A new Point with the product.
   */
  multiply(other: Point): Point {
    return new Point(this.x * other.x, this.y * other.y)
  }

  /**
   * Divides this point by another (component-wise). Original: divide
   * @param other - The other point.
   * @returns A new Point with the quotient.
   */
  divide(other: Point): Point {
    return new Point(this.x / other.x, this.y / other.y)
  }

  /**
   * Computes the dot product with another point. Original: dot
   * @param other - The other point.
   * @returns The dot product.
   */
  dot(other: Point): number {
    return Point.dot(this, other)
  }

  /**
   * Converts to an angle in radians. Original: toAngle
   * @returns The angle.
   */
  toAngle(): number {
    return Math.atan2(this.y, this.x)
  }

  /**
   * Bounds a point within a rectangle. Original: static bound
   * @param point - The point to bound.
   * @param bounds - The bounding rectangle.
   * @returns A new bounded Point or the original if no bounds.
   */
  static bound(point: IPoint, bounds?: { min: IPoint, max: IPoint }): IPoint {
    if (!bounds)
      return point
    return {
      x: Math.max(Math.min(point.x, bounds.max.x), bounds.min.x),
      y: Math.max(Math.min(point.y, bounds.max.y), bounds.min.y),
    }
  }

  /**
   * Computes the dot product of two points. Original: static dot
   * @param a - The first point.
   * @param b - The second point.
   * @returns The dot product.
   */
  static dot(a: Point, b: Point): number {
    return a.x * b.x + a.y * b.y
  }

  /**
   * Interpolates between two points. Original: static interpolate
   * @param a - The start point.
   * @param b - The end point.
   * @param t - The interpolation factor (0 to 1).
   * @returns A new interpolated Point.
   */
  static interpolate(a: Point, b: Point, t: number): Point {
    return new Point(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t)
  }

  /**
   * Rounds this point's coordinates. Original: rounded
   * @returns A new rounded Point.
   */
  rounded(): Point {
    return new Point(Math.round(this.x), Math.round(this.y))
  }

  /**
   * Rounds a point's coordinates. Original: static rounded
   * @param point - The point to round.
   * @returns A new rounded Point.
   */
  static rounded(point: IPoint): Point {
    return new Point(Math.round(point.x), Math.round(point.y))
  }

  /**
   * Computes the magnitude (size) of a point. Original: static size
   * @param point - The point.
   * @returns The magnitude.
   */
  static size(point: Point): number {
    return Math.sqrt(Point.dot(point, point))
  }

  /**
   * Computes the magnitude of this point. Original: size
   * @returns The magnitude.
   */
  size(): number {
    return Point.size(this)
  }

  /**
   * Normalizes this point to a unit vector. Original: unit
   * @returns A new unit Point or zero if magnitude is zero.
   */
  unit(): Point {
    const mag = this.size()
    return this.scale(mag === 0 ? 0 : 1 / mag)
  }

  /**
   * Computes the distance to another point. Original: distanceTo
   * @param other - The other point.
   * @returns The distance.
   */
  distanceTo(other: Point): number {
    return Point.size(this.subtract(other))
  }

  /**
   * Computes the distance between two points. Original: static distance
   * @param a - The first point.
   * @param b - The second point.
   * @returns The distance.
   */
  static distance(a: Point, b: Point): number {
    return Point.size(Point.subtract(a, b))
  }

  /**
   * Clamps this point within a rectangle. Original: clamp
   * @param rect - The rectangle.
   * @returns A new clamped Point.
   */
  clamp(rect: Rect): Point {
    return new Point(
      Math.max(rect.x, Math.min(rect.x + rect.width, this.x)),
      Math.max(rect.y, Math.min(rect.y + rect.height, this.y)),
    )
  }

  /**
   * Clamps the x-coordinate within a rectangle. Original: clampX
   * @param rect - The rectangle.
   * @returns A new Point with clamped x.
   */
  clampX(rect: Rect): Point {
    return new Point(
      Math.max(rect.x, Math.min(rect.x + rect.width, this.x)),
      this.y,
    )
  }

  /**
   * Clamps the y-coordinate within a rectangle. Original: clampY
   * @param rect - The rectangle.
   * @returns A new Point with clamped y.
   */
  clampY(rect: Rect): Point {
    return new Point(
      this.x,
      Math.max(rect.y, Math.min(rect.y + rect.height, this.y)),
    )
  }

  /**
   * Rotates this point 90 degrees clockwise. Original: rotate90
   * @returns A new rotated Point.
   */
  rotate90(): Point {
    return new Point(-this.y, this.x)
  }
}

/**
 * Checks if a point is inside a rectangle. Original: $$a2
 * @param rect - The rectangle.
 * @param point - The point.
 * @returns True if inside, false otherwise.
 */
export function isPointInRect(rect: Rect, point: Point): boolean {
  return point.x >= rect.x && point.y >= rect.y && point.x <= rect.x + rect.width && point.y <= rect.y + rect.height
}

/**
 * Expands a rectangle by a margin. Original: $$s1
 * @param rect - The rectangle.
 * @param margin - The margin to add.
 * @returns A new expanded Rect.
 */
export function expandRect(rect: Rect, margin: number): Rect {
  return {
    x: rect.x - margin,
    y: rect.y - margin,
    width: rect.width + 2 * margin,
    height: rect.height + 2 * margin,
  }
}

/**
 * Computes the distance between two rectangles. Original: $$o3
 * Returns 0 if overlapping, otherwise the minimum distance.
 * @param a - The first rectangle.
 * @param b - The second rectangle.
 * @returns The distance.
 */
export function rectDistance(a: Rect, b: Rect): number {
  const centerA = { x: a.x + a.width / 2, y: a.y + a.height / 2 }
  const centerB = { x: b.x + b.width / 2, y: b.y + b.height / 2 }
  const dx = Math.abs(centerA.x - centerB.x)
  const dy = Math.abs(centerA.y - centerB.y)
  const overlapX = dx - (a.width + b.width) / 2
  const overlapY = dy - (a.height + b.height) / 2
  const overlapXExists = overlapX <= 0
  const overlapYExists = overlapY <= 0
  if (overlapXExists && overlapYExists)
    return 0
  if (!overlapXExists && overlapYExists)
    return overlapX
  if (overlapXExists && !overlapYExists)
    return overlapY
  return Math.sqrt(overlapX * overlapX + overlapY * overlapY)
}

// Updated exports to match refactored names
export const Mi = Point
export const UI = expandRect
export const gR = isPointInRect
export const gt = rectDistance
