export interface CoreUtilsType {
  /**
   * Converts a Unicode code point to lowercase.
   * @CoreUtils.codePointToLowerCase
   */
  codePointToLowerCase: (codePoint: number) => number

  /**
   * Converts a Unicode code point to uppercase.
   * @CoreUtils.codePointToUpperCase
   */
  codePointToUpperCase: (codePoint: number) => number

  /**
   * Converts a string to lowercase.
   * @CoreUtils.stringToLowerCase
   */
  stringToLowerCase: (str: string) => string

  /**
   * Converts a string to uppercase.
   * @CoreUtils.stringToUpperCase
   */
  stringToUpperCase: (str: string) => string

  /**
   * Sets a value in localStorage.
   * @CoreUtils.setLocalStorage
   */
  setLocalStorage: (key: string, value: string) => void

  /**
   * Gets a value from localStorage.
   * @CoreUtils.getLocalStorage
   */
  getLocalStorage: (key: string) => string | null

  /**
   * Checks if a key exists in localStorage.
   * @CoreUtils.hasLocalStorage
   */
  hasLocalStorage: (key: string) => boolean

  /**
   * Removes a key from localStorage.
   * @CoreUtils.clearLocalStorage
   */
  clearLocalStorage: (key: string) => void

  /**
   * Creates a new RegExp object.
   * @CoreUtils.regexNew
   */
  regexNew: (pattern: string) => RegExp

  /**
   * Searches for a match in a string using a RegExp.
   * @CoreUtils.regexSearch
   */
  regexSearch: (regexp: RegExp, text: string) => { index: number, match: string, subgroups: string[] } | null

  /**
   * Finds all matches in a string using a RegExp.
   * @CoreUtils.regexFindAll
   */
  regexFindAll: (regexp: RegExp, text: string) => string[]

  /**
   * Splits a string using a RegExp.
   * @CoreUtils.regexSplit
   */
  regexSplit: (regexp: RegExp, text: string) => string[]

  /**
   * Tests if a string matches a RegExp.
   * @CoreUtils.regexMatch
   */
  regexMatch: (regexp: RegExp, text: string) => boolean

  /**
   * Replaces all matches in a string using a RegExp.
   * @CoreUtils.regexReplaceAll
   */
  regexReplaceAll: (regexp: RegExp, text: string, replacement: string) => string

  /**
   * Removes all spaces from a string.
   * @CoreUtils.regexRemoveSpaces
   */
  regexRemoveSpaces: (text: string) => string
}

/**
 * Utility functions for common operations.
 * @CoreUtils
 */
export const CoreUtils: CoreUtilsType = {
  /**
   * Converts a Unicode code point to lowercase.
   * @CoreUtils.codePointToLowerCase
   */
  codePointToLowerCase: (codePoint: number): number =>
    codePoint > 65535 ? codePoint : String.fromCharCode(codePoint).toLowerCase().charCodeAt(0),

  /**
   * Converts a Unicode code point to uppercase.
   * @CoreUtils.codePointToUpperCase
   */
  codePointToUpperCase: (codePoint: number): number =>
    codePoint > 65535 ? codePoint : String.fromCharCode(codePoint).toUpperCase().charCodeAt(0),

  /**
   * Converts a string to lowercase.
   * @CoreUtils.stringToLowerCase
   */
  stringToLowerCase: (str: string): string => str.toLowerCase(),

  /**
   * Converts a string to uppercase.
   * @CoreUtils.stringToUpperCase
   */
  stringToUpperCase: (str: string): string => str.toUpperCase(),

  /**
   * Sets a value in localStorage.
   * @CoreUtils.setLocalStorage
   */
  setLocalStorage(key: string, value: string): void {
    try {
      window.localStorage[key] = value
    }
    catch {
      // Silently fail if localStorage is not available
    }
  },

  /**
   * Gets a value from localStorage.
   * @CoreUtils.getLocalStorage
   */
  getLocalStorage(key: string): string | null {
    try {
      return window.localStorage[key] || null
    }
    catch {
      return null
    }
  },

  /**
   * Checks if a key exists in localStorage.
   * @CoreUtils.hasLocalStorage
   */
  hasLocalStorage(key: string): boolean {
    try {
      return key in window.localStorage
    }
    catch {
      return false
    }
  },

  /**
   * Removes a key from localStorage.
   * @CoreUtils.clearLocalStorage
   */
  clearLocalStorage(key: string): void {
    try {
      window.localStorage.removeItem(key)
    }
    catch {
      // Silently fail if localStorage is not available
    }
  },

  /**
   * Creates a new RegExp object.
   * @CoreUtils.regexNew
   */
  regexNew: (pattern: string): RegExp => new RegExp(pattern),

  /**
   * Searches for a match in a string using a RegExp.
   * @CoreUtils.regexSearch
   */
  regexSearch(regexp: RegExp, text: string): { index: number, match: string, subgroups: string[] } | null {
    const match = regexp.exec(text)
    if (!match)
      return null

    const matchedText = match.shift() as string
    return {
      index: new TextEncoder().encode(text.slice(0, match.index)).length,
      match: matchedText,
      subgroups: match,
    }
  },

  /**
   * Finds all matches in a string using a RegExp.
   * @CoreUtils.regexFindAll
   */
  regexFindAll(regexp: RegExp, text: string): string[] {
    const globalRegex = new RegExp(regexp.source, "g")
    const matches: string[] = []
    let match: RegExpExecArray | null

    // eslint-disable-next-line no-cond-assign
    while ((match = globalRegex.exec(text)) !== null) {
      matches.push(match[0])
    }

    return matches
  },

  /**
   * Splits a string using a RegExp.
   * @CoreUtils.regexSplit
   */
  regexSplit: (regexp: RegExp, text: string): string[] => text.split(regexp),

  /**
   * Tests if a string matches a RegExp.
   * @CoreUtils.regexMatch
   */
  regexMatch: (regexp: RegExp, text: string): boolean => regexp.test(text),

  /**
   * Replaces all matches in a string using a RegExp.
   * @CoreUtils.regexReplaceAll
   */
  regexReplaceAll(regexp: RegExp, text: string, replacement: string): string {
    const globalRegex = new RegExp(regexp.source, "g")
    return text.replace(globalRegex, replacement)
  },

  /**
   * Removes all spaces from a string.
   * @CoreUtils.regexRemoveSpaces
   */
  regexRemoveSpaces: (text: string): string => text.replace(/\s+/g, ""),
}

/**
 * Alias for CoreUtils.
 * @x
 */
export const x = CoreUtils
