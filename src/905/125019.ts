/**
 * SHA1 core transformation function.
 * @param words - Int32Array of working words.
 * @param hash - Int32Array of hash state.
 * @param block - Uint8Array of 64-byte block.
 * (Original name: n)
 */
function sha1Transform(words: Int32Array, hash: Int32Array, block: Uint8Array): void {
  // Prepare message schedule
  for (let i = 0; i < 16; i++) {
    words[i]
      = (block[i << 2] << 24)
        | (block[(i << 2) + 1] << 16)
        | (block[(i << 2) + 2] << 8)
        | (block[(i << 2) + 3])
  }
  for (let i = 16; i < 80; i++) {
    const temp = words[i - 3] ^ words[i - 8] ^ words[i - 14] ^ words[i - 16]
    words[i] = (temp << 1) | (temp >>> 31)
  }

  // Initialize working variables
  let a = hash[0]
  let b = hash[1]
  let c = hash[2]
  let d = hash[3]
  let e = hash[4]

  // Main loop
  for (let i = 0; i < 80; i++) {
    let f: number, k: number
    if (i < 20) {
      f = (b & c) | (~b & d)
      k = 0x5A827999
    }
    else if (i < 40) {
      f = b ^ c ^ d
      k = 0x6ED9EBA1
    }
    else if (i < 60) {
      f = (b & c) | (b & d) | (c & d)
      k = 0x8F1BBCDC
    }
    else {
      f = b ^ c ^ d
      k = 0xCA62C1D6
    }
    const temp = (((a << 5) | (a >>> 27)) + e + words[i] + f + k) | 0
    e = d
    d = c
    c = (b << 30) | (b >>> 2)
    b = a
    a = temp
  }

  // Update hash state
  hash[0] = (hash[0] + a) | 0
  hash[1] = (hash[1] + b) | 0
  hash[2] = (hash[2] + c) | 0
  hash[3] = (hash[3] + d) | 0
  hash[4] = (hash[4] + e) | 0
}

/**
 * Computes SHA1 hash of a Uint8Array.
 * @param input - Input data as Uint8Array.
 * @returns SHA1 hash as hex string.
 * (Original name: $$r1)
 */
export function sha1Hex(input: Uint8Array): string {
  const digest = new Uint8Array(20)
  const words = new Int32Array(80)
  const block = new Uint8Array(64)
  const hash = new Int32Array([
    0x67452301,
    0xEFCDAB89,
    0x98BADCFE,
    0x10325476,
    0xC3D2E1F0,
  ])
  let offset = 0
  let blockOffset = 0
  let remaining = input.length

  // Process input blocks
  while (remaining > 0) {
    block[blockOffset] = input[offset]
    offset++
    blockOffset++
    remaining--
    if (blockOffset === 64) {
      sha1Transform(words, hash, block)
      blockOffset = 0
    }
  }

  // Padding
  block[blockOffset++] = 128
  if (blockOffset > 56) {
    while (blockOffset < 64) block[blockOffset++] = 0
    sha1Transform(words, hash, block)
    blockOffset = 0
  }
  while (blockOffset < 56) block[blockOffset++] = 0

  // Append length (in bits)
  let bitLen = offset << 3
  for (let i = 7; i >= 0; i--) {
    block[56 + i] = bitLen & 0xFF
    bitLen >>>= 8
  }
  sha1Transform(words, hash, block)

  // Output digest as hex
  for (let i = 0; i < 5; i++) {
    let val = hash[i]
    for (let j = 3; j >= 0; j--) {
      digest[(i << 2) + j] = val & 0xFF
      val >>>= 8
    }
  }
  return Array.from(digest).map(b => (256 | b).toString(16).slice(1)).join('')
}

/**
 * Computes SHA1 hash of a string.
 * @param str - Input string.
 * @returns SHA1 hash as hex string.
 * (Original name: $$a4)
 */
export function sha1HexFromString(str: string): string {
  return sha1Hex(new TextEncoder().encode(str))
}

/**
 * Validates and converts a SHA1 hash Uint8Array to hex string.
 * @param hash - SHA1 hash as Uint8Array.
 * @returns SHA1 hash as hex string.
 * (Original name: $$s3)
 */
export function sha1HexFromBytes(hash: Uint8Array): string {
  validateSha1Bytes(hash)
  return bytesToHex(hash)
}

/**
 * Validates and converts a SHA1 hash hex string to Uint8Array.
 * @param hex - SHA1 hash as hex string.
 * @returns SHA1 hash as Uint8Array.
 * (Original name: $$o2)
 */
export function sha1BytesFromHex(hex: string): Uint8Array {
  validateSha1Hex(hex)
  const bytes = new Uint8Array(20)
  for (let i = 0; i < 40; i += 2) {
    bytes[i / 2] = parseInt(hex.slice(i, i + 2), 16)
  }
  return bytes
}

/**
 * Converts a Uint8Array to hex string.
 * @param bytes - Input bytes.
 * @returns Hex string.
 * (Original name: $$l0)
 */
export function bytesToHex(bytes: Uint8Array): string {
  return Array.from(bytes).map(b => (256 | b).toString(16).slice(1)).join('')
}

/**
 * Validates SHA1 hash bytes.
 * @param bytes - Input bytes.
 * @throws Error if invalid length.
 */
function validateSha1Bytes(bytes: Uint8Array): void {
  if (bytes.length !== 20)
    throw new Error('Invalid SHA1 hash')
}

/**
 * Validates SHA1 hash hex string.
 * @param hex - Input hex string.
 * @throws Error if invalid format.
 */
function validateSha1Hex(hex: string): void {
  if (!/^[0-9A-F]{40}$/i.test(hex))
    throw new Error('Invalid SHA1 hash')
}

// Exported aliases (refactored import/export names)
export const B9 = bytesToHex
export const Et = sha1Hex
export const aD = sha1BytesFromHex
export const nj = sha1HexFromBytes
export const yS = sha1HexFromString
