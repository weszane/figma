import { browserCapabilities } from '../905/409121'
import { BrowserInfo } from '../figma_app/778880'

/**
 * Represents the structure for shortcut key information.
 */
export interface ShortcutKeyInfo {
  keyShortcutKey?: string
  keyShortcutShift?: boolean
  keyShortcutOption?: boolean
}

/**
 * Formats a keyboard shortcut string based on browser and OS.
 * Original: $$a1
 * @param shortcut ShortcutKeyInfo object
 * @returns Formatted shortcut string
 */
export function formatShortcutKey(shortcut: ShortcutKeyInfo): string {
  if (!shortcut.keyShortcutKey)
    return ''
  const isApple = browserCapabilities.isApple()
  let result = isApple ? '\u2318' : 'Ctrl+'
  if (shortcut.keyShortcutShift)
    result += isApple ? '\u21E7' : 'Shift+'
  if (shortcut.keyShortcutOption)
    result += isApple ? '\u2325' : BrowserInfo.chromeos ? 'Search+' : 'Alt+'
  return `   ${result}${shortcut.keyShortcutKey}`
}

/**
 * Removes HTML tags and decodes entities from a string.
 * Original: $$s0
 * @param input Input string
 * @returns Cleaned string
 */
export function stripHtmlTags(input: string): string {
  if (!input)
    return ''
  if (input.length < 1 || input.charAt(0) !== '<' || input.charAt(input.length - 1) !== '>')
    return input
  let result = input.replace(/(<\/[ph]\d?>)/g, '\n')
  result = result.replace(/(<([^>]+)>)/g, '')
  result = result.replace(/&nbsp;/g, '\xA0')
  return result.replace(/&amp;/g, '&')
}

const urlPattern = /(http(s)?:\/\/.)?(www\.)?[-\w@:%.+~#=]{2,256}\.[a-z]{2,6}\b([-\w@:%+.~#?&/=]*)/g
// eslint-disable-next-line regexp/no-unused-capturing-group
const strictUrlPattern = /^(http(s)?:\/\/.)?(www\.)?[-\w@:%.+~#=]{2,256}\.[a-z]{2,6}\b([-\w@:%+.~#?&/=]*)$/

/**
 * Checks if a string is a valid URL.
 * Original: $$d4
 * @param url Input string
 * @returns True if valid URL, else false
 */
export function isValidUrl(url: string): boolean {
  return new RegExp(strictUrlPattern).test(url.trim())
}

/**
 * Converts plain text to HTML paragraphs and links URLs.
 * Original: $$c3
 * @param text Input string
 * @returns HTML string
 */
export function textToHtmlParagraphs(text: string): string {
  if (!text)
    return ''
  if (text.length > 2 && text.charAt(0) === '<' && text.charAt(text.length - 1) === '>')
    return text
  let result = text.replace(/^.*/gm, '<p>$&</p>')
  result = result.replace(urlPattern, match => `<a href="${match}">${match}</a>`)
  result = result.replace(/<p><\/p>/g, '<p><br></p>')
  return result.replace(/(\r\n|\n|\r)/g, '')
}

/**
 * Checks if the stripped HTML string is empty.
 * Original: $$u2
 * @param input Input string
 * @returns True if empty, else false
 */
export function isStrippedHtmlEmpty(input: string): boolean {
  return stripHtmlTags(input)?.trim() === ''
}

// Export aliases for backward compatibility
export const $J = stripHtmlTags // $$s0
export const OZ = formatShortcutKey // $$a1
export const ZB = isStrippedHtmlEmpty // $$u2
export const mm = textToHtmlParagraphs // $$c3
export const mv = isValidUrl // $$d4
