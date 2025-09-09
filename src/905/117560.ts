/**
 * Represents a 2x3 matrix in object form.
 */
export interface Matrix2x3 {
  m00: number
  m01: number
  m02: number
  m10: number
  m11: number
  m12: number
}

/**
 * Converts a Matrix2x3 object to a 2x3 array.
 * @param matrix - The Matrix2x3 object.
 * @returns A 2x3 array representation of the matrix.
 * (Original function: $$n1)
 */
export function toArray2x3(matrix: Matrix2x3): number[][] {
  return [
    [matrix.m00, matrix.m01, matrix.m02],
    [matrix.m10, matrix.m11, matrix.m12],
  ]
}

/**
 * Converts a 2x3 array to a Matrix2x3 object.
 * @param arr - The 2x3 array.
 * @returns The Matrix2x3 object.
 * (Original function: $$r0)
 */
export function toMatrix2x3(arr: number[][]): Matrix2x3 {
  return {
    m00: arr[0][0],
    m01: arr[0][1],
    m02: arr[0][2],
    m10: arr[1][0],
    m11: arr[1][1],
    m12: arr[1][2],
  }
}

/**
 * Applies a 2x3 matrix transformation to a 2D vector.
 * @param matrix - The 2x3 matrix as a 2D array.
 * @param vector - The 2D vector [x, y].
 * @returns The transformed 2D vector.
 * (Original function: $$a2)
 */
export function applyMatrix2x3(matrix: number[][], vector: [number, number]): [number, number] {
  return [
    vector[0] * matrix[0][0] + vector[1] * matrix[0][1] + matrix[0][2],
    vector[0] * matrix[1][0] + vector[1] * matrix[1][1] + matrix[1][2],
  ]
}

// Refactored exports for compatibility with original names
export const D6 = toMatrix2x3 // $$r0
export const Hi = toArray2x3 // $$n1
export const xN = applyMatrix2x3 // $$a2
