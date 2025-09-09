import { getI18nState } from '../figma_app/363242'

/**
 * String case conversion utilities
 */

/**
 * Capitalizes the first letter of a string.
 * Original function: $$i15
 * @param str - The input string.
 * @returns The capitalized string.
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * Converts a kebab-case string to camelCase.
 * Original function: $$a25
 * @param str - The input string.
 * @returns The camelCase string.
 */
export function kebabToCamel(str: string): string {
  return str.toLowerCase().replace(/-(.)/g, (_, letter) => letter.toUpperCase())
}

/**
 * Converts a camelCase string to snake_case.
 * Original function: $$s24
 * @param str - The input string.
 * @returns The snake_case string.
 */
export function camelToSnake(str: string): string {
  return str
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .toLowerCase()
    .replace(/[\W_]+/g, '_')
}

/**
 * Converts a camelCase string to kebab-case.
 * Original function: $$o10
 * @param str - The input string.
 * @returns The kebab-case string.
 */
export function camelToKebab(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

/**
 * Converts a camelCase string to snake_case with leading underscore.
 * Original function: $$l16
 * @param str - The input string.
 * @returns The snake_case string with leading underscore.
 */
export function camelToSnakeWithLeading(str: string): string {
  return str.replace(/([A-Z])/g, '_$1').toLowerCase()
}

/**
 * Converts a string to title case.
 * Original function: $$E1
 * @param str - The input string.
 * @returns The title case string.
 */
export function toTitleCase(str: string): string {
  const words = str.replace(/_|-/g, ' ').split(' ')
  return words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')
}

/**
 * HTML escaping utilities
 */

/**
 * Escapes HTML entities in a string.
 * Original function: $$d19
 * @param str - The input string.
 * @returns The escaped string.
 */
export function escapeHtml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

/**
 * Encoding and decoding utilities
 */

/**
 * Converts a string to a Uint8Array using UTF-8 encoding.
 * Original function: $$c12
 * @param str - The input string.
 * @returns The Uint8Array.
 */
export function stringToUint8Array(str: string): Uint8Array {
  const unescaped = unescape(encodeURIComponent(str))
  const array = new Uint8Array(unescaped.length)
  for (let i = 0; i < unescaped.length; i++) {
    array[i] = unescaped.charCodeAt(i)
  }
  return array
}

/**
 * Ensures a string is well-formed by handling surrogate pairs.
 * Original function: $$u21
 * @param str - The input string.
 * @returns The well-formed string.
 */
export function toWellFormed(str: string): string {
  if (String.prototype.toWellFormed) {
    return str.toWellFormed()
  }
  return handleSurrogates(str)
}

/**
 * Helper function to handle surrogate pairs.
 * @param str - The input string.
 * @returns The processed string.
 */
function handleSurrogates(str: string): string {
  const isHighSurrogate = (code: number) => (code & 0xFC00) === 0xD800
  let result = ''
  for (let i = 0; i < str.length; ++i) {
    const code = str.charCodeAt(i)
    if (!isHighSurrogate(code)) {
      result += str.charAt(i)
      continue
    }
    if ((code & 0x400) !== 0 || i + 1 >= str.length) {
      result += '\uFFFD'
      continue
    }
    const nextCode = str.charCodeAt(i + 1)
    if (isHighSurrogate(nextCode) && (nextCode & 0x400) !== 0) {
      result += str.charAt(i) + str.charAt(i + 1)
      ++i
      continue
    }
    result += '\uFFFD'
  }
  return result
}

/**
 * Splits a string into an array of characters, handling surrogate pairs.
 * Original function: $$_8
 * @param str - The input string.
 * @returns The array of characters.
 */
export function splitIntoCharacters(str: string): string[] {
  const chars: string[] = []
  for (let i = 0; i < str.length; i++) {
    const char = getCharacter(str, i)
    chars.push(char)
    i += char.length - 1
  }
  return chars
}

/**
 * Helper function to get a single character, handling surrogates.
 * @param str - The input string.
 * @param index - The starting index.
 * @returns The character.
 */
function getCharacter(str: string, index: number): string {
  const code = str.charCodeAt(index)
  if (Number.isNaN(code))
    return ''
  if (code < 0xD800 || code > 0xDFFF)
    return str.charAt(index)
  if (code >= 0xD800 && code <= 0xDBFF) {
    if (str.length <= index + 1)
      throw new Error('High surrogate without following low surrogate')
    const nextCode = str.charCodeAt(index + 1)
    if (nextCode < 0xDC00 || nextCode > 0xDFFF)
      throw new Error('High surrogate without following low surrogate')
    return str.charAt(index) + str.charAt(index + 1)
  }
  throw new Error('Not the start of a single- or multibyte-character')
}

/**
 * Decodes a base64 string to a Uint8Array.
 * Original function: $$C11
 * @param str - The base64 string.
 * @returns The Uint8Array.
 */
export function base64ToUint8Array(str: string): Uint8Array {
  const lookup: number[] = []
  for (let i = 0; i < 127; i++) {
    lookup[i] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.indexOf(String.fromCharCode(i))
  }
  const length = str.length >>> 2
  const array = new Uint8Array(3 * length)
  let index = 0
  for (let i = 0; i < length << 2;) {
    const a = lookup[str.charCodeAt(i++)]
    const b = lookup[str.charCodeAt(i++)]
    const c = lookup[str.charCodeAt(i++)]
    const d = lookup[str.charCodeAt(i++)]
    array[index++] = (a << 2) | (b >>> 4)
    if (c >= 0)
      array[index++] = (b << 4) | (c >>> 2)
    if (d >= 0)
      array[index++] = (c << 6) | d
  }
  return index === array.length ? array : array.subarray(0, index)
}

/**
 * Encodes a Uint8Array to a base64 string.
 * Original function: $$w5
 * @param array - The Uint8Array.
 * @returns The base64 string.
 */
export function uint8ArrayToBase64(array: Uint8Array): string {
  let result = ''
  for (let i = 0; i < array.length; i += 1024) {
    result += String.fromCharCode(...array.subarray(i, i + 1024))
  }
  return btoa(result)
}

/**
 * Converts a Uint8Array to a hexadecimal string.
 * Original function: $$O9
 * @param array - The Uint8Array.
 * @returns The hex string.
 */
export function uint8ArrayToHex(array: Uint8Array): string {
  let result = ''
  for (let i = 0; i < array.length; i++) {
    result += (`00${array[i].toString(16)}`).slice(-2)
  }
  return result
}

/**
 * Formatting utilities
 */

/**
 * Truncates a string to a specified length with ellipsis.
 * Original function: $$p3
 * @param str - The input string.
 * @param maxLength - The maximum length.
 * @returns The truncated string.
 */
export function truncate(str: string, maxLength: number): string {
  return str.length > maxLength ? `${str.slice(0, maxLength - 1).trimEnd()}…` : str
}

/**
 * Formats a number with abbreviations (k, m, b).
 * Original function: $$T0
 * @param num - The number.
 * @returns The formatted string.
 */
export function formatNumber(num: number): string {
  if (num < 1000)
    return num.toString()
  if (num < 100000)
    return `${Math.floor(num / 100) / 10}k`
  if (num < 1000000)
    return `${Math.floor(num / 1000)}k`
  if (num < 100000000)
    return `${Math.floor(num / 100000) / 10}m`
  if (num < 1000000000)
    return `${Math.floor(num / 1000000)}m`
  if (num < 100000000000)
    return `${Math.floor(num / 100000000) / 10}b`
  return `${Math.floor(num / 1000000000)}b`
}

/**
 * Returns the plural form of a word based on count.
 * Original function: $$y6
 * @param count - The count.
 * @param singular - The singular form.
 * @param plural - The plural form (optional).
 * @returns The appropriate form.
 */
export function pluralize(count: number, singular: string, plural?: string): string {
  plural = plural || `${singular}s`
  return count === 1 ? singular : plural
}

/**
 * Formats a count with its pluralized unit.
 * Original function: $$b23
 * @param count - The count.
 * @param singular - The singular unit.
 * @param plural - The plural unit (optional).
 * @returns The formatted string.
 */
export function formatCount(count: number | null, singular: string, plural?: string): string {
  count = count ?? 0
  return `${count} ${pluralize(count, singular, plural)}`
}

/**
 * URL and slug utilities
 */

const RESERVED_CHARS = /[:/?#[\]@!$&'()*+,;=%.]/g

/**
 * Encodes a string for use in a URI.
 * Original function: $$S22
 * @param str - The input string.
 * @returns The encoded string.
 */
export function encodeUri(str: string): string {
  let encoded = str.replace(RESERVED_CHARS, '-').replace(/ /g, '-')
  return encodeURIComponent(encoded)
}

/**
 * Converts a string to a slug.
 * Original function: $$v13
 * @param str - The input string.
 * @param options - Options for slugification.
 * @returns The slug.
 */
export function slugify(str: string, options: { stripLeadingHyphens?: boolean, stripTrailingHyphens?: boolean } = {}): string {
  const { stripLeadingHyphens = true, stripTrailingHyphens = true } = options
  let slug = str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036F]/g, '')
    .replace(/[ .\-_/\\:;|,&+=*]/g, '-')
    .replace(/[^a-z0-9\-]/g, '')
    .replace(/-+/g, '-')
  if (stripLeadingHyphens)
    slug = slug.replace(/^-+/, '')
  slug = slug.substring(0, 100)
  if (stripTrailingHyphens)
    slug = slug.replace(/-+$/, '')
  return slug
}

const RESERVED_WORDS = ['thumbnail', 'icon', 'code', 'snapshot', 'duplicate', 'embed', 'canvas', 'remixes']

/**
 * Processes a string for use as a slug, checking against reserved words.
 * Original function: $$x17
 * @param str - The input string.
 * @returns The processed string or undefined.
 */
export function processSlug(str: string | null): string | undefined {
  if (str == null)
    return
  const slug = slugify(str)
  if (!RESERVED_WORDS.includes(slug))
    return encodeUri(slug)
}

/**
 * Checks if a string is a valid URL.
 * Original function: $$N18
 * @param str - The input string.
 * @returns True if valid URL.
 */
export function isValidUrl(str: string): boolean {
  // eslint-disable-next-line regexp/no-unused-capturing-group
  return /[-\w@:%.+~#=]{1,256}\.[a-z0-9()]{1,18}\b([-\w()@:%+.~#?&/=]*)/i.test(str)
}

/**
 * Sorting and list utilities
 */

const DEFAULT_COLLATOR_OPTIONS: Intl.CollatorOptions = { numeric: true, sensitivity: 'base' }

/**
 * Sorts an array using Intl.Collator.
 * Original function: $$m2
 * @param array - The array to sort.
 * @param keyFn - Function to get the key for comparison.
 * @param options - Collator options.
 * @returns The sorted array.
 */
export function sortWithCollator<T>(array: T[], keyFn: (item: T) => string, options: Intl.CollatorOptions = DEFAULT_COLLATOR_OPTIONS): T[] {
  const locale = getI18nState().getPrimaryLocale(false)
  const collator = new Intl.Collator(locale, options)
  return array.sort((a, b) => collator.compare(keyFn(a), keyFn(b)))
}

const LIST_FORMAT_CACHE: Record<string, Intl.ListFormat> = {}

/**
 * Formats a list using Intl.ListFormat.
 * Original function: $$f14
 * @param items - The list items.
 * @param type - The list type.
 * @returns The formatted string.
 */
export function formatList(items: string[], type: 'conjunction' | 'disjunction' | 'unit' = 'conjunction'): string {
  const locale = getI18nState().getPrimaryLocale(false)
  if (!LIST_FORMAT_CACHE[type]) {
    LIST_FORMAT_CACHE[type] = new Intl.ListFormat(locale, { type })
  }
  return LIST_FORMAT_CACHE[type].format(items)
}

/**
 * Comparison utilities
 */

/**
 * Removes all whitespace from a string.
 * Original function: $$R4
 * @param str - The input string.
 * @returns The string without spaces.
 */
export function removeSpaces(str: string): string {
  return str.replace(/\s+/g, '')
}

/**
 * Compares two strings ignoring whitespace.
 * Original function: $$L7
 * @param a - First string.
 * @param b - Second string.
 * @returns True if equal ignoring spaces.
 */
export function compareIgnoringSpaces(a: string, b: string): boolean {
  return removeSpaces(a) === removeSpaces(b)
}

/**
 * Checks if a string is empty or contains only whitespace.
 * Original function: $$P20
 * @param str - The input string.
 * @returns True if empty or whitespace.
 */
export function isWhitespace(str: string): boolean {
  return /^\s*$/.test(str)
}

/**
 * Exported aliases with refactored names
 */
export const Zr = capitalize
export const zS = kebabToCamel
export const uc = camelToSnake
export const VZ = camelToKebab
export const _5 = camelToSnakeWithLeading
export const hX = escapeHtml
export const YH = stringToUint8Array
export const lH = toWellFormed
export const Qt = splitIntoCharacters
export const Vs = base64ToUint8Array
export const H9 = uint8ArrayToBase64
export const Rw = uint8ArrayToHex
export const EJ = truncate
export const $M = formatNumber
export const LD = pluralize
export const td = formatCount
export const sy = encodeUri
export const Yv = slugify
export const fs = processSlug
export const gU = isValidUrl
export const DV = sortWithCollator
export const Yx = formatList
export const Ay = toTitleCase
export const FS = removeSpaces
export const Qp = compareIgnoringSpaces
export const jN = isWhitespace
