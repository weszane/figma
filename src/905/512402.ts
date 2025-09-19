// Original helper function for property definition (likely from minification)
// Replaced with proper TypeScript property declarations in the class

/**
 * Represents a 2D vector with x and y coordinates.
 * Provides methods for vector operations, comparisons, and transformations.
 */
export class Vector2D {
  x: number
  y: number

  /**
   * Creates a Vector2D from a Fig vector object.
   * @param e - The Fig vector object with x and y properties.
   * @returns A new Vector2D instance.
   */
  static fromFigVector(e: { x: number, y: number }): Vector2D {
    return new Vector2D(e.x, e.y)
  }

  /**
   * Converts a Vector2D to a plain object with x and y properties.
   * @param e - The Vector2D instance to convert.
   * @returns An object with x and y properties.
   */
  static toVectorD(e: Vector2D): { x: number, y: number } {
    return {
      x: e.x,
      y: e.y,
    }
  }

  /**
   * Creates a Vector2D from a plain object with x and y properties.
   * @param e - The object with x and y properties.
   * @returns A new Vector2D instance.
   */
  static fromVectorD(e: { x: number, y: number }): Vector2D {
    return new Vector2D(e.x, e.y)
  }

  /**
   * Returns the maximum vector component-wise between two vectors.
   * @param e - First vector.
   * @param t - Second vector.
   * @returns A new Vector2D with maximum components.
   */
  static max(e: Vector2D, t: Vector2D): Vector2D {
    return new Vector2D(Math.max(e.x, t.x), Math.max(e.y, t.y))
  }

  /**
   * Returns the minimum vector component-wise between two vectors.
   * @param e - First vector.
   * @param t - Second vector.
   * @returns A new Vector2D with minimum components.
   */
  static min(e: Vector2D, t: Vector2D): Vector2D {
    return new Vector2D(Math.min(e.x, t.x), Math.min(e.y, t.y))
  }

  /**
   * Returns a vector with positive infinity values.
   * @returns A new Vector2D with infinity components.
   */
  static infinity(): Vector2D {
    return new Vector2D(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY)
  }

  /**
   * Returns an invalid vector with NaN values.
   * @returns A new Vector2D with NaN components.
   */
  static invalid(): Vector2D {
    return new Vector2D(Number.NaN, Number.NaN)
  }

  /**
   * Constructs a new Vector2D.
   * @param x - The x-coordinate (default 0).
   * @param y - The y-coordinate (default 0).
   */
  constructor(x: number = 0, y: number = 0) {
    this.x = x
    this.y = y
  }

  /**
   * Checks if the vector is invalid (contains NaN).
   * @returns True if either x or y is NaN.
   */
  isInvalid(): boolean {
    return this.hasNaN()
  }

  /**
   * Creates a clone of this vector.
   * @returns A new Vector2D with the same x and y values.
   */
  clone(): Vector2D {
    return new Vector2D(this.x, this.y)
  }

  /**
   * Checks if the vector contains NaN values.
   * @returns True if x or y is NaN.
   */
  hasNaN(): boolean {
    return Number.isNaN(this.x) || Number.isNaN(this.y)
  }

  /**
   * Checks equality with another vector.
   * @param e - The vector to compare.
   * @returns True if x and y are equal.
   */
  equals(e: Vector2D | null | undefined): boolean {
    return e && this.x === e.x && this.y === e.y
  }

  /**
   * Returns a string representation of the vector.
   * @returns String in the format "(x, y)".
   */
  toString(): string {
    return `(${this.x}, ${this.y})`
  }

  /**
   * Adds another vector to this one.
   * @param e - The vector to add.
   * @returns A new Vector2D with the sum.
   */
  plus(e: Vector2D): Vector2D {
    return new Vector2D(this.x + e.x, this.y + e.y)
  }

  /**
   * Increments this vector by another vector in place.
   * @param e - The vector to add.
   */
  incrementBy(e: Vector2D): void {
    this.x += e.x
    this.y += e.y
  }

  /**
   * Subtracts another vector from this one.
   * @param e - The vector to subtract.
   * @returns A new Vector2D with the difference.
   */
  minus(e: Vector2D): Vector2D {
    return new Vector2D(this.x - e.x, this.y - e.y)
  }

  /**
   * Calculates the distance to another vector.
   * @param e - The target vector.
   * @returns The Euclidean distance.
   */
  distanceTo(e: Vector2D): number {
    const dx = e.x - this.x
    const dy = e.y - this.y
    return Math.sqrt(dx * dx + dy * dy)
  }

  /**
   * Gets the component by index (0 for x, 1 for y).
   * @param e - The component index.
   * @returns The x or y value.
   */
  component(e: number): number {
    return e === 0 ? this.x : this.y
  }

  /**
   * Calculates the length (magnitude) of the vector.
   * @returns The Euclidean length.
   */
  length(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }

  /**
   * Converts the vector to an angle in radians.
   * @returns The angle from the positive x-axis.
   */
  toAngle(): number {
    return Math.atan2(this.y, this.x)
  }

  /**
   * Multiplies the vector by a scalar.
   * @param e - The scalar value.
   * @returns A new Vector2D scaled by e.
   */
  multiplyBy(e: number): Vector2D {
    return new Vector2D(this.x * e, this.y * e)
  }

  /**
   * Divides the vector by a scalar.
   * @param e - The scalar value.
   * @returns A new Vector2D divided by e.
   */
  divideBy(e: number): Vector2D {
    return new Vector2D(this.x / e, this.y / e)
  }

  /**
   * Transposes the vector (swaps x and y).
   * @returns A new Vector2D with x and y swapped.
   */
  transpose(): Vector2D {
    return new Vector2D(this.y, this.x)
  }

  /**
   * Rounds the components to the nearest integers.
   * @returns A new Vector2D with rounded components.
   */
  rounded(): Vector2D {
    return new Vector2D(Math.round(this.x), Math.round(this.y))
  }
}

// Refactored export name to match the new class name (original $$r0)
export const M = Vector2D
