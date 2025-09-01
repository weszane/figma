/**
 * Base64 character set for encoding/decoding.
 */
const BASE64_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'

/**
 * Lookup table for decoding Base64 characters.
 * (original: n)
 */
const BASE64_LOOKUP: Int32Array = (() => {
  const lookup = new Int32Array(127)
  for (let i = 0; i < 127; i++) {
    lookup[i] = BASE64_CHARS.indexOf(String.fromCharCode(i))
  }
  return lookup
})()

/**
 * Decodes a Base64-encoded string into a Uint8Array.
 * @param base64Str - The Base64-encoded string.
 * @returns The decoded bytes as a Uint8Array.
 * (original: $$a0)
 */
export function decodeBase64(base64Str: string): Uint8Array {
  const length = base64Str.length >>> 2
  const output = new Uint8Array(3 * length)
  let outputIndex = 0
  let inputIndex = 0

  while (inputIndex < length << 2) {
    const s = BASE64_LOOKUP[base64Str.charCodeAt(inputIndex++) & 127]
    const o = BASE64_LOOKUP[base64Str.charCodeAt(inputIndex++) & 127]
    const l = BASE64_LOOKUP[base64Str.charCodeAt(inputIndex++) & 127]
    const d = BASE64_LOOKUP[base64Str.charCodeAt(inputIndex++) & 127]

    output[outputIndex++] = (s << 2) | (o >>> 4)
    if (l >= 0)
      output[outputIndex++] = (o << 4) | (l >>> 2)
    if (d >= 0)
      output[outputIndex++] = (l << 6) | d
  }

  return outputIndex === output.length ? output : output.subarray(0, outputIndex)
}

/**
 * Encodes a Uint8Array into a Base64 string.
 * @param bytes - The bytes to encode.
 * @returns The Base64-encoded string.
 * (original: $$s2)
 */
export function encodeBase64(bytes: Uint8Array): string {
  let result = ''
  const length = bytes.length
  for (let i = 0; i < length; i += 1024) {
    // Use spread operator to convert a chunk of bytes to a string (was: String.fromCharCode.apply)
    result += String.fromCharCode(...bytes.subarray(i, i + 1024))
  }
  return btoa(result)
}

/**
 * Encodes a UTF-8 string into a Base64 string.
 * @param str - The string to encode.
 * @returns The Base64-encoded string.
 * (original: $$o1)
 */
export function encodeStringToBase64(str: string): string {
  return encodeBase64(new TextEncoder().encode(str))
}

/**
 * Validates if a string is a valid Base64-encoded string.
 * @param base64Str - The string to validate.
 * @returns True if valid, false otherwise.
 * (original: $$l3)
 */
export function isValidBase64(base64Str: string): boolean {
  let length = base64Str.length
  if ((length & 3) !== 0)
    return false
  if (length === 0)
    return true
  if (base64Str[length - 1] === '=')
    length--
  if (base64Str[length - 1] === '=')
    length--
  for (let i = 0; i < length; ++i) {
    const code = base64Str.charCodeAt(i)
    if (code >= 127 || BASE64_LOOKUP[code] < 0)
      return false
  }
  return true
}

// Export aliases for backward compatibility
export const D4 = decodeBase64
export const aj = encodeStringToBase64
export const lF = encodeBase64
export const tf = isValidBase64
