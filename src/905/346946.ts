import { round } from '../905/719694'

// Matrix type definitions
type Matrix2D = [[number, number, number], [number, number, number]]
type Point2D = [number, number]
type TransformMatrix = [[number, number], [number, number]]

/**
 * Calculates the angle of rotation from a transformation matrix
 * @param matrix - The transformation matrix
 * @returns The angle in radians
 */
export function getAngle(matrix: Matrix2D): number {
  const cosTheta = matrix[0][0]
  return Math.atan2(matrix[0][1], cosTheta)
}

/**
 * Multiplies two 2D transformation matrices
 * @param matrixA - First matrix
 * @param matrixB - Second matrix
 * @returns The resulting matrix from multiplication
 */
export function multiplyMatrices(matrixA: Matrix2D, matrixB: Matrix2D): Matrix2D {
  const [[a, b, c], [d, e, f]] = matrixA
  const [[g, h, i], [j, k, l]] = matrixB

  return [
    [a * g + b * j, a * h + b * k, a * i + b * l + c],
    [d * g + e * j, d * h + e * k, d * i + e * l + f],
  ]
}

/**
 * Applies a transformation matrix to a point
 * @param matrix - The transformation matrix
 * @param point - The point to transform
 * @returns The transformed point
 */
export function rotatePoint(matrix: Matrix2D, point: Point2D): Point2D {
  const [[a, b, c], [d, e, f]] = matrix
  const [x, y] = point

  return [
    a * x + b * y + c,
    d * x + e * y + f,
  ]
}

/**
 * Converts a 2x2 transform matrix to a 3x3 matrix by adding zero translation
 * @param transform - The 2x2 transform matrix
 * @returns The 3x3 matrix with zero translation
 */
export function skipPosition(transform: TransformMatrix): Matrix2D {
  const [[a, b], [c, d]] = transform
  return [[a, b, 0], [c, d, 0]]
}

/**
 * Calculates the angle in degrees from a transformation matrix
 * @param matrix - The transformation matrix
 * @returns The angle in degrees
 */
export function getAngleDegrees(matrix: Matrix2D): number {
  return getAngle(matrix) * (180 / Math.PI)
}

/**
 * Checks if a transformation matrix represents a vertical flip
 * @param matrix - The transformation matrix
 * @returns True if vertically flipped, false otherwise
 */
export function isFlippedVertical(matrix: Matrix2D): boolean {
  const [[a, b], [c, d]] = matrix
  return a * d - b * c < 0
}

/**
 * Applies a vertical flip transformation
 * @param matrix - The matrix to flip
 * @returns The vertically flipped matrix
 */
export function flipVertical(matrix: Matrix2D): Matrix2D {
  return multiplyMatrices([[1, 0, 0], [0, -1, 0]], matrix)
}

/**
 * Creates a rotation matrix centered at a specific point
 * @param angleDegrees - Rotation angle in degrees
 * @param centerX - X coordinate of the center point
 * @param centerY - Y coordinate of the center point
 * @returns The centered rotation matrix
 */
export function getCenteredRotation(angleDegrees: number, centerX: number, centerY: number): Matrix2D {
  const angleRadians = angleDegrees * Math.PI / 180
  const cos = Math.cos(angleRadians)
  const sin = Math.sin(angleRadians)

  return multiplyMatrices(
    [[1, 0, centerX / 2], [0, 1, centerY / 2]],
    multiplyMatrices(
      [[cos, sin, 0], [-sin, cos, 0]],
      [[1, 0, -centerX / 2], [0, 1, -centerY / 2]],
    ),
  )
}

/**
 * Calculates relative bounds and rotation information
 * @param element - Element with relative transform and dimensions
 * @returns Object containing bounding box, rotation transform, and original transform
 */
export function getRelativeBoundsAndRotation(element: {
  relativeTransform: Matrix2D
  width: number
  height: number
}): {
  relativeBoundingBox: { x: number, y: number, width: number, height: number }
  rotationOnlyTransform: Matrix2D
  relativeTransform: Matrix2D
} {
  const { width, height } = element

  const transform = multiplyMatrices(
    [[1, 0, width / 2], [0, 1, height / 2]],
    multiplyMatrices(
      skipPosition(element.relativeTransform as any),
      [[1, 0, -width / 2], [0, 1, -height / 2]],
    ),
  )

  const point1 = rotatePoint(transform, [0, 0])
  const point2 = rotatePoint(transform, [0, height])
  const point3 = rotatePoint(transform, [width, 0])
  const point4 = rotatePoint(transform, [width, height])

  const minX = Math.min(point1[0], point2[0], point3[0], point4[0])
  const minY = Math.min(point1[1], point2[1], point3[1], point4[1])
  const maxX = Math.max(point1[0], point2[0], point3[0], point4[0])
  const maxY = Math.max(point1[1], point2[1], point3[1], point4[1])

  const boundingWidth = maxX - minX
  const boundingHeight = maxY - minY

  const adjustedTransform = multiplyMatrices(
    [[1, 0, (boundingWidth - width) / 2], [0, 1, (boundingHeight - height) / 2]],
    transform,
  )

  const [[, , translateX], [, , translateY]] = adjustedTransform

  return {
    relativeBoundingBox: {
      x: element.relativeTransform[0][2] - translateX,
      y: element.relativeTransform[1][2] - translateY,
      width: boundingWidth,
      height: boundingHeight,
    },
    rotationOnlyTransform: adjustedTransform,
    relativeTransform: element.relativeTransform,
  }
}

/**
 * Checks if an element has rotation applied
 * @param element - Element with relative transform
 * @returns True if rotated, false otherwise
 */
export function isRotated(element: { relativeTransform?: Matrix2D }): boolean {
  if (!element.relativeTransform) {
    return false
  }

  const [[a, b], [c, d]] = element.relativeTransform
  return !(a - 1 < 1e-5 && b - 0 < 1e-5 && c - 0 < 1e-5 && d - 1 < 1e-5)
}

/**
 * Rounds matrix values to specified decimal places
 * @param matrix - The matrix to round
 * @returns The rounded matrix
 */
export function roundTransform(matrix: Matrix2D): Matrix2D {
  return [
    [
      round(matrix[0][0], 5),
      round(matrix[0][1], 5),
      round(matrix[0][2], 5),
    ],
    [
      round(matrix[1][0], 5),
      round(matrix[1][1], 5),
      round(matrix[1][2], 5),
    ],
  ]
}

/**
 * Rounds bounding box values to integers
 * @param boundingBox - The bounding box to round
 * @returns The rounded bounding box
 */
export function roundBoundingBox(boundingBox: {
  x: number
  y: number
  width: number
  height: number
}): { x: number, y: number, width: number, height: number } {
  return {
    x: round(boundingBox.x),
    y: round(boundingBox.y),
    width: round(boundingBox.width),
    height: round(boundingBox.height),
  }
}

/**
 * Applies a transformation matrix to a point
 * @param matrix - The transformation matrix
 * @param point - The point to transform
 * @returns The transformed point
 */
export function applyMatrixToPoint(matrix: Matrix2D, point: Point2D): Point2D {
  return [
    point[0] * matrix[0][0] + point[1] * matrix[0][1] + matrix[0][2],
    point[0] * matrix[1][0] + point[1] * matrix[1][1] + matrix[1][2],
  ]
}

// Export functions to maintain compatibility
exports.getAngle = getAngle
exports.getAngleDeg = getAngleDegrees
exports.isFlippedVertical = isFlippedVertical
exports.flipVertical = flipVertical
exports.getCenteredRotation = getCenteredRotation
exports.multiply = multiplyMatrices
exports.rotatePoint = rotatePoint
exports.skipPosition = skipPosition
exports.getRelativeBoundsAndRotation = getRelativeBoundsAndRotation
exports.isRotated = isRotated
exports.roundTransform = roundTransform
exports.roundBoundingBox = roundBoundingBox
exports.applyMatrixToPoint = applyMatrixToPoint
