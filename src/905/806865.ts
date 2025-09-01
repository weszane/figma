import { germanLanguages, latinLanguages, romanceLanguages } from '../905/994647'

/**
 * Checks if the current window is the top window or has the same origin as the parent.
 * Original name: a
 * @returns {boolean} True if same origin or top, false otherwise.
 */
function isSameOriginOrTop(): boolean {
  if (self.window?.self === self.window?.top)
    return true
  let isSameOrigin = false
  try {
    isSameOrigin = window.self.origin === window.parent.origin
  }
  catch {
    isSameOrigin = false
  }
  return isSameOrigin
}

/**
 * Gets the pathname from the parent window if conditions are met.
 * Original name: $$r2
 * @returns {string | undefined} The pathname or undefined.
 */
export function getParentPathname(): string | undefined {
  if (isSameOriginOrTop())
    return window.parent?.location?.pathname
}

/**
 * Gets the search string from the parent window if conditions are met.
 * Original name: $$s1
 * @returns {string | undefined} The search string or undefined.
 */
export function getParentSearch(): string | undefined {
  if (isSameOriginOrTop())
    return window.parent?.location?.search
}

/**
 * Determines language fallbacks based on the input locale string.
 * Original name: $$o0
 * @param {string} locale - The locale string (e.g., "en-US").
 * @returns {string[]} Array of language codes for fallbacks.
 */
export function getLanguageFallbacks(locale: string): string[] {
  const [lang, region] = locale.toLowerCase().replace('_', '-').split('-')
  switch (lang) {
    case 'fr':
      if (!region || romanceLanguages.has(region))
        return ['fr', 'en']
      return ['en']
    case 'de':
      if (!region || germanLanguages.has(region))
        return ['de', 'en']
      return ['en']
    case 'ja':
      return ['ja', 'en']
    case 'es':
      if (region && latinLanguages.has(region))
        return ['es-la', 'en']
      if (region === 'es' || !region)
        return ['es-es', 'en']
      return ['en']
    case 'ko':
      if (region === 'kr' || !region)
        return ['ko-kr', 'en']
      return ['en']
    case 'pt':
      if (region === 'br')
        return ['pt-br', 'en']
      return ['en']
    case 'nl':
      if (region === 'nl' || !region)
        return ['nl-nl', 'en']
      return ['en']
    case 'pl':
      if (region === 'pl' || !region)
        return ['pl-pl', 'en']
      return ['en']
    case 'it':
      if (region === 'it' || !region)
        return ['it-it', 'en']
      return ['en']
    case 'aal':
      return ['aal', 'en']
    case 'aaa':
      return ['aaa', 'en']
    case 'en':
    default:
      return ['en']
  }
}

/**
 * Gets the search string from the current window location.
 * Original name: $$l3
 * @returns {string} The search string.
 */
export function getCurrentSearch(): string {
  return window.location.search
}

// Updated exports to match refactored function names
export const $W = getLanguageFallbacks
export const $e = getParentSearch
export const Np = getParentPathname
export const bQ = getCurrentSearch
