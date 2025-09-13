import { blake2bHex } from 'blakejs'

/**
 * let a = new Map()
 * Cache for storing generated unique keys to avoid recomputation.$s0(e) {
 */
const cache = new Map<string, string>()
/**
 * Generates a unique key by hashing the input with Blake2b and prefixing it.
 * Uses memoization to cache results for performance.
 * @param input - The string to hash and generate a key for.xport const $ = $$s0
 * @returns The unique key in the format 'lk-<hash>'.
 */
export function generateUniqueKey(input: string): string {
  if (cache.has(input)) {
    return cache.get(input)!
  }
  const key = `lk-${blake2bHex(input)}`
  cache.set(input, key)
  return key
}

// Alias export for backward compatibility (original: $$s0 and $)
export const $ = generateUniqueKey
