import { BrowserInfo } from '../figma_app/778880'
// Original: $$r0
/**
 * Transforms a locale code based on browser info, specifically for macOS handling.
 * @param locale - The original locale string.
 * @returns The transformed locale string.
 */
export function transformLocaleCode(locale: string): string {
  if (!BrowserInfo.mac) {
    return locale
  }
  if (locale === 'ar-SY') {
    return 'ars'
  }
  if (locale === 'en-US') {
    return 'en'
  }
  return locale.replace('-', '_')
}

// Original: a
const excludedWords = ['your', 'you\'re', 'lose', 'were', 'we\'re']

// Original: $$s1
/**
 * Filters suggestions based on excluded words if on macOS.
 * @param text - The text string to check substrings against.
 * @param suggestions - Array of suggestion objects with start and end indices.
 * @returns The filtered array of suggestions.
 */
export function filterSuggestions(
  text: string,
  suggestions: Array<{ start: number, end: number }>,
): Array<{ start: number, end: number }> {
  if (!BrowserInfo.mac) {
    return suggestions
  }
  return suggestions.filter(item =>
    !excludedWords.includes(text.substring(item.start, item.end).toLowerCase()),
  )
}

// Original: l
export const l = transformLocaleCode

// Original: r
export const r = filterSuggestions
