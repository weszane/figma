/**
 * Generates a lookup table for hexadecimal string representations of byte values.
 * @original n
 */
const hexTable: string[] = Array.from({ length: 256 }, (_, i) =>
  (i + 256).toString(16).substr(1))

/**
 * Generates a random UUID (version 4).
 * Uses crypto.getRandomValues if available, otherwise falls back to Math.random.
 * @returns {string} A UUID string.
 * @original $$a0
 */
export function generateUUIDv4(): string {
  const bytes = new Uint8Array(16)

  // Use crypto for secure random values if available
  if (self.crypto && self.crypto.getRandomValues) {
    self.crypto.getRandomValues(bytes)
  }
  else {
    // Fallback to Math.random (less secure)
    let random = 0
    for (let i = 0; i < 16; i++) {
      if ((i & 3) === 0) {
        random = Math.random() * 0x100000000
      }
      bytes[i] = (random >>> ((i & 3) << 3)) & 0xFF
    }
  }

  // Set version and variant bits according to RFC 4122
  bytes[6] = (bytes[6] & 0x0F) | 0x40 // Version 4
  bytes[8] = (bytes[8] & 0x3F) | 0x80 // Variant

  // Format UUID string
  let idx = 0
  return [
    hexTable[bytes[idx++]],
    hexTable[bytes[idx++]],
    hexTable[bytes[idx++]],
    hexTable[bytes[idx++]],
    '-',
    hexTable[bytes[idx++]],
    hexTable[bytes[idx++]],
    '-',
    hexTable[bytes[idx++]],
    hexTable[bytes[idx++]],
    '-',
    hexTable[bytes[idx++]],
    hexTable[bytes[idx++]],
    '-',
    hexTable[bytes[idx++]],
    hexTable[bytes[idx++]],
    hexTable[bytes[idx++]],
    hexTable[bytes[idx++]],
    hexTable[bytes[idx++]],
    hexTable[bytes[idx++]],
  ].join('')
}

/**
 * Alias for generateUUIDv4.
 * @original g
 */
export const g = generateUUIDv4
