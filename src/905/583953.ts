// Original class name: $$$$s0
// Refactored to: AffineTransform (a 2D affine transformation matrix class)

import { Rectangle } from './249071'
import { Vector2D } from './512402'
/**
 * Represents a 2D affine transformation matrix.
 * This class provides methods for creating, manipulating, and applying 2D transformations.
 */
export class AffineTransform {
  /** Matrix element m00 */
  public m00: number
  /** Matrix element m01 */
  public m01: number
  /** Matrix element m02 */
  public m02: number
  /** Matrix element m10 */
  public m10: number
  /** Matrix element m11 */
  public m11: number
  /** Matrix element m12 */
  public m12: number

  /** Epsilon value for floating-point comparisons */
  static kEpsilon = 1e-6
  /** Squared epsilon value */
  static kEpsilonSqr = AffineTransform.kEpsilon * AffineTransform.kEpsilon

  /**
   * Creates an identity matrix.
   * @returns A new identity AffineTransform.
   */
  static identity(): AffineTransform {
    return AffineTransform.fromNumbers(1, 0, 0, 0, 1, 0)
  }

  /**
   * Creates a matrix from individual numbers.
   * @param m00 - Matrix element m00
   * @param m01 - Matrix element m01
   * @param m02 - Matrix element m02
   * @param m10 - Matrix element m10
   * @param m11 - Matrix element m11
   * @param m12 - Matrix element m12
   * @returns A new AffineTransform with the specified values.
   */
  static fromNumbers(m00: number, m01: number, m02: number, m10: number, m11: number, m12: number): AffineTransform {
    const matrix = new AffineTransform()
    matrix.m00 = m00
    matrix.m01 = m01
    matrix.m02 = m02
    matrix.m10 = m10
    matrix.m11 = m11
    matrix.m12 = m12
    return matrix
  }

  /**
   * Creates a matrix from vectors.
   * @param offset - Offset vector
   * @param axisX - X-axis vector
   * @param axisY - Y-axis vector
   * @returns A new AffineTransform.
   */
  static fromVectors(offset: Vector2D, axisX: Vector2D, axisY: Vector2D): AffineTransform {
    const matrix = new AffineTransform()
    matrix.m00 = axisX.x
    matrix.m01 = axisY.x
    matrix.m02 = offset.x
    matrix.m10 = axisX.y
    matrix.m11 = axisY.y
    matrix.m12 = offset.y
    return matrix
  }

  /**
   * Creates a matrix from another FigMatrix-like object.
   * @param figMatrix - The source matrix object
   * @returns A new AffineTransform.
   */
  static fromFigMatrix(figMatrix: { m00: number, m01: number, m02: number, m10: number, m11: number, m12: number }): AffineTransform {
    const matrix = new AffineTransform()
    matrix.m00 = figMatrix.m00
    matrix.m01 = figMatrix.m01
    matrix.m02 = figMatrix.m02
    matrix.m10 = figMatrix.m10
    matrix.m11 = figMatrix.m11
    matrix.m12 = figMatrix.m12
    return matrix
  }

  /**
   * Converts this matrix to a FigMatrix object.
   * @returns An object with matrix elements.
   */
  toFigMatrix(): { m00: number, m01: number, m02: number, m10: number, m11: number, m12: number } {
    return {
      m00: this.m00,
      m01: this.m01,
      m02: this.m02,
      m10: this.m10,
      m11: this.m11,
      m12: this.m12,
    }
  }

  /**
   * Gets the X-axis vector.
   * @returns The X-axis as a Vector2D.
   */
  axisX(): Vector2D {
    return new Vector2D(this.m00, this.m10)
  }

  /**
   * Gets the Y-axis vector.
   * @returns The Y-axis as a Vector2D.
   */
  axisY(): Vector2D {
    return new Vector2D(this.m01, this.m11)
  }

  /**
   * Gets the offset vector.
   * @returns The offset as a Vector2D.
   */
  offset(): Vector2D {
    return new Vector2D(this.m02, this.m12)
  }

  /**
   * Gets the rotation angle in radians.
   * @returns The rotation angle in radians.
   */
  toRadians(): number {
    return Math.atan2(this.m10, this.m00)
  }

  /**
   * Gets the rotation angle in degrees.
   * @returns The rotation angle in degrees.
   */
  toDegrees(): number {
    return (180 * Math.atan2(this.m10, this.m00)) / Math.PI
  }

  /**
   * Gets the scale factors.
   * @returns The scale as a Vector2D (x-scale, y-scale).
   */
  toScale(): Vector2D {
    const { m00, m01, m10, m11 } = this
    return new Vector2D(Math.sqrt(m00 * m00 + m10 * m10), Math.sqrt(m01 * m01 + m11 * m11))
  }

  /**
   * Checks if the matrix contains NaN values.
   * @returns True if any element is NaN, false otherwise.
   */
  hasNaN(): boolean {
    return isNaN(this.m00) || isNaN(this.m01) || isNaN(this.m02)
      || isNaN(this.m10) || isNaN(this.m11) || isNaN(this.m12)
  }

  /**
   * Translates the matrix by the given offsets.
   * @param dx - X translation
   * @param dy - Y translation
   */
  translate(dx: number, dy: number): void {
    this.m02 = dx * this.m00 + dy * this.m01 + this.m02
    this.m12 = dx * this.m10 + dy * this.m11 + this.m12
  }

  /**
   * Rotates the matrix by the given angle.
   * @param angle - Rotation angle in radians
   */
  rotate(angle: number): void {
    if (angle === 0)
      return
    const sin = Math.sin(angle)
    const cos = Math.cos(angle)
    const newM00 = cos * this.m00 + sin * this.m01
    const newM01 = cos * this.m01 - sin * this.m00
    const newM10 = cos * this.m10 + sin * this.m11
    const newM11 = cos * this.m11 - sin * this.m10
    this.m00 = newM00
    this.m01 = newM01
    this.m10 = newM10
    this.m11 = newM11
  }

  /**
   * Scales the matrix by the given factors.
   * @param sx - X scale factor
   * @param sy - Y scale factor
   */
  scale(sx: number, sy: number): void {
    this.m00 *= sx
    this.m01 *= sy
    this.m10 *= sx
    this.m11 *= sy
  }

  /**
   * Multiplies this matrix by another matrix (in-place).
   * @param other - The matrix to multiply by
   */
  multiply(other: AffineTransform): void {
    const t00 = this.m00 * other.m00 + this.m01 * other.m10
    const t01 = this.m00 * other.m01 + this.m01 * other.m11
    const t02 = this.m00 * other.m02 + this.m01 * other.m12 + this.m02
    const t10 = this.m10 * other.m00 + this.m11 * other.m10
    const t11 = this.m10 * other.m01 + this.m11 * other.m11
    const t12 = this.m10 * other.m02 + this.m11 * other.m12 + this.m12
    this.m00 = t00
    this.m01 = t01
    this.m02 = t02
    this.m10 = t10
    this.m11 = t11
    this.m12 = t12
  }

  /**
   * Computes the determinant of the matrix.
   * @returns The determinant.
   */
  determinant(): number {
    return this.m00 * this.m11 - this.m01 * this.m10
  }

  /**
   * Inverts the matrix in-place.
   * @returns True if inversion succeeded, false otherwise.
   */
  invert(): boolean {
    const det = 1 / this.determinant()
    if (!isFinite(det))
      return false
    const inv = AffineTransform.fromNumbers(
      this.m11 * det,
      -this.m01 * det,
      (this.m01 * this.m12 - this.m11 * this.m02) * det,
      -this.m10 * det,
      this.m00 * det,
      (this.m10 * this.m02 - this.m00 * this.m12) * det,
    )
    if (inv.hasNaN())
      return false
    this.m00 = inv.m00
    this.m01 = inv.m01
    this.m02 = inv.m02
    this.m10 = inv.m10
    this.m11 = inv.m11
    this.m12 = inv.m12
    return true
  }

  /**
   * Transforms a rectangle using this matrix.
   * @param rect - The rectangle to transform
   * @returns The transformed rectangle.
   */
  transformRect(rect: Rectangle): Rectangle {
    if (rect.isInvalid())
      return rect
    if (this.axisX().y === 0 && this.axisY().x === 0) {
      return Rectangle.computeBounds(this.transformPoint(rect.topLeft()), this.transformPoint(rect.bottomRight()))
    }
    const points = [
      this.transformPoint(rect.topLeft()),
      this.transformPoint(rect.topRight()),
      this.transformPoint(rect.bottomLeft()),
      this.transformPoint(rect.bottomRight()),
    ]
    return Rectangle.computeBoundsFromPointArray(points)
  }

  /**
   * Transforms a point using this matrix.
   * @param point - The point to transform
   * @returns The transformed point.
   */
  transformPoint(point: Vector2D): Vector2D {
    return new Vector2D(
      this.m00 * point.x + this.m01 * point.y + this.m02,
      this.m10 * point.x + this.m11 * point.y + this.m12,
    )
  }

  /**
   * Transforms a direction vector (ignores translation).
   * @param direction - The direction to transform
   * @returns The transformed direction.
   */
  transformDirection(direction: Vector2D): Vector2D {
    return new Vector2D(
      this.m00 * direction.x + this.m01 * direction.y,
      this.m10 * direction.x + this.m11 * direction.y,
    )
  }

  /**
   * Inverse transforms a point.
   * @param point - The point to inverse transform
   * @returns The inverse transformed point, or invalid if not invertible.
   */
  inverseTransformPoint(point: Vector2D): Vector2D {
    const det = 1 / this.determinant()
    if (!isFinite(det))
      return Vector2D.invalid()
    const invPoint = new Vector2D(
      (this.m11 * point.x - this.m01 * point.y + this.m01 * this.m12 - this.m11 * this.m02) * det,
      (this.m00 * point.y - this.m10 * point.x + this.m10 * this.m02 - this.m00 * this.m12) * det,
    )
    return invPoint.hasNaN() ? Vector2D.invalid() : invPoint
  }

  /**
   * Constructor initializes the matrix to zero.
   */
  constructor() {
    this.m00 = this.m01 = this.m02 = this.m10 = this.m11 = this.m12 = 0
  }
}

// Original export: export const s = $$$$s0
// Refactored export name to match the class
export const s = AffineTransform
