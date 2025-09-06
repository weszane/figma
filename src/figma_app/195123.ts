import { accentedCharacters } from '../905/994647'

/**
 * Replaces every word character in the input string with the specified replacement character.
 * @param input - The string to process.
 * @param replacement - The character to replace each word character with. Defaults to "A".
 * @returns The processed string.
 * (Original: $$a4)
 */
export function replaceWordCharacters(input: string, replacement: string = 'A'): string {
  return input.replace(/\w/g, replacement)
}

/** Special separator string used for padding. */
const separator = '\uFEFF\u2005\uFEFF\xB7\uFEFF\u2005'

/**
 * Calculates the number of separators to insert based on the current word length.
 * @param wordLength - The length of the current word.
 * @returns The number of separators.
 * (Original: o)
 */
const getSeparatorCount = (wordLength: number): number => Math.ceil(2.1 * wordLength / 10.18)

/**
 * Transforms the input string by replacing spaces with special separators and mapping characters using accentedCharacters.
 * @param input - The string to process.
 * @returns The transformed string.
 * (Original: $$l3)
 */
export function transformWithAccents(input: string): string {
  const result: string[] = []
  const chars = input.split('')
  let wordLength = 0

  chars.forEach((char) => {
    if (char === ' ') {
      for (let i = 0; i < getSeparatorCount(wordLength); i++) result.push(separator)
      wordLength = 0
    }
    else {
      wordLength++
    }
    result.push(accentedCharacters[char] ?? char)
  })

  if (wordLength > 0) {
    for (let i = 0; i < getSeparatorCount(wordLength); i++) result.push(separator)
  }

  return result.join('')
}

/**
 * Wraps the input array with a prefix and suffix.
 * @param arr - The array to wrap.
 * @param prefix - The prefix string. Defaults to "[~".
 * @param suffix - The suffix string. Defaults to "~]".
 * @returns The wrapped array.
 * (Original: $$d1)
 */
export function wrapArray<T>(arr: T[], prefix: string = '[~', suffix: string = '~]'): (string | T)[] {
  return [prefix, ...arr, suffix]
}

/**
 * Encodes a string into zero-width characters using binary representation.
 * @param input - The string to encode.
 * @returns The encoded string.
 * (Original: $$c0)
 */
export function encodeZeroWidth(input: string): string {
  return input
    .split('')
    .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
    .join('')
    .split('')
    .map(bit => bit === '0' ? '\u200B' : '\u200C')
    .join('')
}

/**
 * Decodes a zero-width encoded string back to its original form.
 * @param input - The zero-width encoded string.
 * @returns The decoded string.
 * (Original: $$u2)
 */
export function decodeZeroWidth(input: string): string {
  return (
    input
      .split('')
      .map(char => char === '\u200B' ? '0' : '1')
      .join('')
      .match(/.{8}/g) || []
  )
    .map(byte => String.fromCharCode(parseInt(byte, 2)))
    .join('')
}

// Exported aliases for backward compatibility and refactored names
export const Bs = encodeZeroWidth
export const Jq = wrapArray
export const P5 = decodeZeroWidth
export const Sv = transformWithAccents
export const Zs = replaceWordCharacters
