/**
 * Creates a pseudo-random number generator function.
 * Original: $$n0
 * @param seed - The initial seed value for the generator.
 * @returns A function that generates a pseudo-random number between 0 and 1.
 */
export function createPseudoRandomGenerator(seed: number): () => number {
  let state = seed

  /**
   * Generates the next pseudo-random number.
   * @returns A number between 0 and 1.
   */
  const generate = (): number => {
    // Update state with a series of bitwise operations (hash-like transformation)
    state = (state + 0x7ED55D16 + (state << 12)) & 0xFFFFFFFF
    state = (0xC761C23C ^ state ^ (state >>> 19)) & 0xFFFFFFFF
    state = (state + 0x165667B1 + (state << 5)) & 0xFFFFFFFF
    state = (state + 0xD3A2646C ^ (state << 9)) & 0xFFFFFFFF
    state = (state + 0xFD7046C5 + (state << 3)) & 0xFFFFFFFF
    state = (state ^ (state >>> 16)) & 0xFFFFFFFF

    // Mask and normalize to [0, 1)
    return (state & 0xFFFFFFF) / 0x10000000
  }

  return generate
}

// Original export: g
export const g = createPseudoRandomGenerator
