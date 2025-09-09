import type { Matrix2x3 } from '../905/117560'
import { determinant, inverse } from 'ml-matrix'
import { applyMatrix2x3, toArray2x3 } from '../905/117560'
import { throwTypeError } from '../figma_app/465776'

/**
 * Represents a 2D point.
 */
export interface Point2D { x: number, y: number }

/**
 * Converts a 2x3 matrix to three transformed points for linear gradients.
 * Original: $$o2
 * @param matrix - The input 2x3 matrix.
 * @returns Array of transformed points.
 */
export function getLinearGradientPoints(matrix: Matrix2x3): Point2D[] {
  let mat = [...toArray2x3(matrix), [0, 0, 1]]
  if (determinant(mat) === 0) {
    mat = [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
  }
  const inv = inverse(mat).to2DArray()
  const [x0, y0] = applyMatrix2x3(inv, [0, 0.5])
  const [x1, y1] = applyMatrix2x3(inv, [1, 0.5])
  const [x2, y2] = applyMatrix2x3(inv, [0, 1])
  return [
    { x: x0, y: y0 },
    { x: x1, y: y1 },
    { x: x2, y: y2 },
  ]
}

/**
 * Converts a 2x3 matrix to three transformed points for radial/angular/diamond gradients.
 * Original: $$l0
 * @param matrix - The input 2x3 matrix.
 * @returns Array of transformed points.
 */
export function getRadialGradientPoints(matrix: Matrix2x3): Point2D[] {
  let mat = [...toArray2x3(matrix), [0, 0, 1]]
  if (determinant(mat) === 0) {
    mat = [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
  }
  const inv = inverse(mat).to2DArray()
  const [x0, y0] = applyMatrix2x3(inv, [0.5, 0.5])
  const [x1, y1] = applyMatrix2x3(inv, [1, 0.5])
  const [x2, y2] = applyMatrix2x3(inv, [0.5, 1])
  return [
    { x: x0, y: y0 },
    { x: x1, y: y1 },
    { x: x2, y: y2 },
  ]
}

/**
 * Calculates the transformation matrix for gradients based on type and points.
 * Original: $$d1
 * @param type - The gradient type.
 * @param points - Array of points.
 * @returns The transformation matrix.
 */
export function getGradientTransformMatrix(type: string, points: Point2D[]): number[][] {
  let refPoints: Point2D[]
  switch (type) {
    case 'gradient-linear':
      refPoints = [
        { x: 0, y: 0.5 },
        { x: 1, y: 0.5 },
        { x: 0, y: 1 },
      ]
      break
    case 'gradient-radial':
    case 'gradient-angular':
    case 'gradient-diamond':
      refPoints = [
        { x: 0.5, y: 0.5 },
        { x: 1, y: 0.5 },
        { x: 0.5, y: 1 },
      ]
      break
    default:
      throwTypeError(type)
  }
  // Extract coordinates for clarity
  const [r, a, s] = [refPoints[0].x, refPoints[1].x, refPoints[2].x]
  const [o, l, d] = [points[0].x, points[0].y, points[1].x]
  const [c, u] = [points[1].y, points[2].x]
  const p = points[2].y

  // Matrix calculation logic (from $$d1)
  const m = c - p
  const h = d - u
  const g = d * p - c * u
  const f = -1 * (l - p)
  const _ = l - c
  const A = -1 * h
  const y = o - u
  const b = -1 * (o - d)
  const v = -1 * (o * p - l * u)
  const I = o * c - l * d
  const E = o * m - l * h + 1 * g

  if (E === 0) {
    return [[0, 0, 0], [0, 0, 0]]
  }
  return [
    [
      (m * r + f * a + _ * s) / E,
      (A * r + y * a + b * s) / E,
      (g * r + v * a + I * s) / E,
    ],
    [
      (0.5 * m + 0.5 * f + 1 * _) / E,
      (0.5 * A + 0.5 * y + 1 * b) / E,
      (0.5 * g + 0.5 * v + 1 * I) / E,
    ],
  ]
}

// Export aliases for backward compatibility
export const NN = getRadialGradientPoints // $$l0
export const cN = getGradientTransformMatrix // $$d1
export const gJ = getLinearGradientPoints // $$o2
