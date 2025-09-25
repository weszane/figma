import { upperFirst, words } from 'lodash-es'

/**
 * Converts a string to a slug format.
 * Original: $$o2
 * @param input - The input string.
 * @returns The slugified string.
 */
export function toSlug(input: string): string {
  const cleaned = cleanString(input).trim().replace(/[\s/]+/g, '-')
  if (cleaned.match(/^[-\w]*$/))
    return cleaned

  const camel = toCamelCase(cleaned)
    .replace(/[A-Z]+(?![a-z])|[A-Z]|\d+/g, (match, idx) => (idx !== 0 ? '-' : '') + match.toLowerCase())
    .replace(/^[^A-Z0-9\-]+/i, '')

  return camel === '' ? 'unnamed' : camel
}

/**
 * Converts a string to camel case and removes leading non-alphabetic characters.
 * Original: $$l1
 * @param input - The input string.
 * @returns The camel-cased string or 'unnamed'.
 */
export function toCamelName(input: string): string {
  const camel = toCamelCase(cleanString(input)).replace(/^[^A-Z]+/i, '')
  return camel === '' ? 'unnamed' : camel
}

/**
 * Alias for toCamelName.
 * Original: $$d0
 */
export const toDefaultName = toCamelName

/**
 * Converts a string to a valid identifier.
 * Original: $$c3
 * @param input - The input string.
 * @returns The identifier string.
 */
export function toIdentifier(input: string): string {
  let result = toCamelCase(input)
  if (result.match(/^\d/g))
    result = `_${result}`
  result = cleanString(result).replace(/\W/g, '_')
  return result || '_'
}

/**
 * Converts a string to camel case using lodash-es words and upperFirst.
 * Original: u
 * @param input - The input string.
 * @returns The camel-cased string.
 */
function toCamelCase(input: string): string {
  // Remove apostrophes and unicode right single quotes
  const wordArr = words(input.replace(/['\u2019]/g, ''))
  return wordArr.reduce((acc, word, idx) => idx ? acc + upperFirst(word) : acc + word, '')
}

/**
 * Cleans a string by removing unicode, quotes, and normalizing whitespace.
 * Original: p
 * @param input - The input string.
 * @returns The cleaned string.
 */
function cleanString(input: string): string {
  return input
    .replace(/[\u007F-\uFFFF]/g, '')
    .replace(/'/g, '')
    .replace(/"/g, '')
    .replace(/\r\n/g, ' ')
    .replace(/\n/g, ' ')
    .replace(/\r/g, ' ')
}

// Refactored exports
export const LE = toDefaultName
export const O$ = toCamelName
export const OX = toSlug
export const YT = toIdentifier
