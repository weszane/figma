import { debug } from '../figma_app/465776'

/**
 * Compares two numbers and returns -1, 0, or 1.
 * @param a - First number
 * @param b - Second number
 * @returns -1 if a < b, 1 if a > b, 0 if equal
 * (Original: $$i0)
 */
export function compareNumbers(a: number, b: number): number {
  return +(a < b) - +(a > b)
}

/**
 * Default separator character.
 * (Original: $$a2)
 */
export const separatorChar: string = '!'

/**
 * Checks if a string contains only printable ASCII characters and does not end with a space.
 * @param str - Input string
 * @returns True if valid, false otherwise
 * (Original: $$s6)
 */
export function isPrintableAscii(str: string): boolean {
  if (str === '' || str.charCodeAt(str.length - 1) === 32)
    return false
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i)
    if (code < 32 || code > 126)
      return false
  }
  return true
}

/**
 * Returns the previous printable ASCII string.
 * @param str - Input string
 * @returns Previous string
 * (Original: $$o4)
 */
export function previousAsciiString(str: string): string {
  debug(str.length !== 0, 'previousAsciiString: input should not be empty')
  const lastIdx = str.length - 1
  let idx = lastIdx
  while (idx >= 0) {
    const code = str.charCodeAt(idx)
    if (code > 33) {
      const prev = str.substr(0, idx) + String.fromCharCode(code - 1)
      debug(isPrintableAscii(prev), 'previousAsciiString: result not printable')
      return prev
    }
    idx--
  }
  const fallback = `${str.substr(0, lastIdx)} ~`
  debug(isPrintableAscii(fallback), 'previousAsciiString: fallback not printable')
  return fallback
}

/**
 * Returns the next printable ASCII string.
 * @param str - Input string
 * @returns Next string
 * (Original: $$l3)
 */
export function nextAsciiString(str: string): string {
  debug(str.length !== 0, 'nextAsciiString: input should not be empty')
  let idx = str.length - 1
  while (idx >= 0) {
    const code = str.charCodeAt(idx)
    if (code < 126) {
      const next = str.substr(0, idx) + String.fromCharCode(code + 1)
      debug(isPrintableAscii(next), 'nextAsciiString: result not printable')
      return next
    }
    idx--
  }
  const fallback = `${str}!`
  debug(isPrintableAscii(fallback), 'nextAsciiString: fallback not printable')
  return fallback
}

/**
 * Finds a midpoint string between two ASCII strings.
 * @param a - Lower string
 * @param b - Upper string
 * @returns Midpoint string
 * (Original: $$d5)
 */
export function midpointAsciiString(a: string, b: string): string {
  debug(a < b, 'midpointAsciiString: a should be less than b')
  const lenA = a.length
  const lenB = b.length
  let overflow = false
  let result = ''
  for (let i = 0, maxLen = Math.max(lenA, lenB); i < maxLen; i++) {
    const codeA = i < lenA ? a.charCodeAt(i) : 32
    const codeB = i < lenB && !overflow ? b.charCodeAt(i) : 126
    if (codeA === codeB) {
      result += String.fromCharCode(codeA)
    }
    else if (codeB - codeA > 1) {
      result += String.fromCharCode((codeA + codeB) >> 1)
      overflow = false
      break
    }
    else {
      result += String.fromCharCode(codeA)
      overflow = true
    }
  }
  if (overflow)
    result += 'O'
  debug(a < result, 'midpointAsciiString: result should be greater than a')
  debug(result < b, 'midpointAsciiString: result should be less than b')
  debug(isPrintableAscii(result), 'midpointAsciiString: result not printable')
  return result
}

const asciiPrecision = Math.floor(Math.log10(95) + 1)

/**
 * Converts a printable ASCII string to a float between 0 and 1.
 * @param str - Input string
 * @returns Float representation
 * (Original: $$u1)
 */
export function asciiStringToFloat(str: string): number {
  const parts: string[] = []
  for (let i = 0; i < str.length; i++) {
    const n = (str.charCodeAt(i) - 32) / 95
    parts.push(n.toFixed(asciiPrecision).slice(2, 2 + asciiPrecision))
  }
  return parseFloat(`0.${parts.join('')}`)
}

// Export aliases for backward compatibility
export const Ez = compareNumbers
export const PZ = asciiStringToFloat
export const TZ = separatorChar
export const e6 = nextAsciiString
export const hu = previousAsciiString
export const kI = midpointAsciiString
export const qO = isPrintableAscii
