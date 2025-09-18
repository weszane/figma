/**
 * Normalizes RGB values in an RGBA array by dividing by alpha and scaling to 255.999.
 * @param array - The RGBA array to modify.
 * @param size - The size of the array to process.
 * @throws Error if size exceeds array length.
 */
export function normalizeRGBA(array: Uint8Array, size: number): void {
  if (size > array.length)
    throw new Error(`Size ${size} is larger than array ${array.length}`)
  const end = size - 3
  for (let i = 0; i < end; i += 4) {
    const alpha = 255.999 / array[i + 3]
    array[i] *= alpha
    array[i + 1] *= alpha
    array[i + 2] *= alpha
  }
}

/**
 * Sets alpha values in an RGBA array to 255 (fully opaque).
 * @param array - The RGBA array to modify.
 * @param size - The size of the array to process.
 * @throws Error if size exceeds array length.
 */
export function setAlphaToOpaque(array: Uint8Array, size: number): void {
  if (size > array.length)
    throw new Error(`Size ${size} is larger than array ${array.length}`)
  for (let i = 3; i < size; i += 4) {
    array[i] = 255
  }
}

// Original exports refactored to match new names
export const X = normalizeRGBA
export const e = setAlphaToOpaque
