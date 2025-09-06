/* eslint-disable no-fallthrough */
import { x4 } from '../figma_app/211694'

/**
 * Checks if the debug flow is active based on the stored date.
 * @returns {boolean} True if the debug flow is active, false otherwise.
 * (Original: $$r1)
 */
export function isDebugFlowActive(): boolean {
  const debugFlowDate = x4?.getItem('ddr_user_debug_flow')
  return !!debugFlowDate && new Date(debugFlowDate) > new Date()
}

/**
 * Generates a hash value for a given string and seed.
 * Implements a MurmurHash-like algorithm.
 * @param {string} input - The string to hash.
 * @param {number} seed - The seed value for hashing.
 * @returns {number} The resulting hash value.
 * (Original: $$a0)
 */
export function murmurHash(input: string, seed: number): number {
  let hash: number
  let k: number
  const remainder = input.length & 3
  const bytes = input.length - remainder
  let h = seed
  let i = 0

  // Process 4 bytes at a time
  while (i < bytes) {
    k = (input.charCodeAt(i) & 0xFF)
      | ((input.charCodeAt(++i) & 0xFF) << 8)
      | ((input.charCodeAt(++i) & 0xFF) << 16)
      | ((input.charCodeAt(++i) & 0xFF) << 24)
    ++i

    k = ((k & 0xFFFF) * 0xCC9E2D51 + (((k >>> 16) * 0xCC9E2D51 & 0xFFFF) << 16)) & 0xFFFFFFFF
    k = (k << 15 | k >>> 17)
    k = ((k & 0xFFFF) * 0x1B873593 + (((k >>> 16) * 0x1B873593 & 0xFFFF) << 16)) & 0xFFFFFFFF

    h ^= k
    h = (h << 13 | h >>> 19)
    hash = ((h & 0xFFFF) * 5 + (((h >>> 16) * 5 & 0xFFFF) << 16)) & 0xFFFFFFFF
    h = (hash & 0xFFFF) + 0x6B64 + (((hash >>> 16) + 0xE654 & 0xFFFF) << 16)
  }

  // Handle remaining bytes
  k = 0
  switch (remainder) {
    case 3:
      k ^= (input.charCodeAt(i + 2) & 0xFF) << 16
    case 2:
      k ^= (input.charCodeAt(i + 1) & 0xFF) << 8
    case 1:
      k ^= (input.charCodeAt(i) & 0xFF)
      k = ((k & 0xFFFF) * 0xCC9E2D51 + (((k >>> 16) * 0xCC9E2D51 & 0xFFFF) << 16)) & 0xFFFFFFFF
      k = (k << 15 | k >>> 17)
      k = ((k & 0xFFFF) * 0x1B873593 + (((k >>> 16) * 0x1B873593 & 0xFFFF) << 16)) & 0xFFFFFFFF
      h ^= k
  }

  // Finalization mix
  h ^= input.length
  h ^= h >>> 16
  h = ((h & 0xFFFF) * 0x85EBCA6B + (((h >>> 16) * 0x85EBCA6B & 0xFFFF) << 16)) & 0xFFFFFFFF
  h ^= h >>> 13
  h = ((h & 0xFFFF) * 0xC2B2AE35 + (((h >>> 16) * 0xC2B2AE35 & 0xFFFF) << 16)) & 0xFFFFFFFF
  h ^= h >>> 16

  return h >>> 0
}

// Export aliases for backward compatibility
export const u = murmurHash // (Original: u)
export const z = isDebugFlowActive // (Original: z)
