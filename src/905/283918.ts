import { makeDesktopGetRequest, makeDesktopPostRequest } from '../905/535224'
import { filterSuggestions, transformLocaleCode } from '../905/927060'
/**
 * Gets the list of available languages for spelling.
 * Original function: $$a0
 * @returns Promise<string[]> - Array of language codes or empty array on error.
 */
export async function getLanguages(): Promise<string[]> {
  try {
    const { data } = await makeDesktopGetRequest('/spelling/get-languages')
    if (Array.isArray(data.result)) {
      return data.result
    }
  }
  catch {
    // Ignore errors
  }
  return []
}

/**
 * Ignores specified words for the given language.
 * Original function: s
 * @param words - Array of words to ignore.
 * @param language - Language code.
 */
async function ignoreWords(words: string[], language: string): Promise<void> {
  if (words.length !== 0) {
    await makeDesktopPostRequest('/spelling/ignore-words', { words, language }, 'application/json')
  }
}

/**
 * Checks if languages are available for spelling.
 * Original function: o
 * @returns Promise<boolean> - True if languages are available, false otherwise.
 */
async function hasLanguages(): Promise<boolean> {
  try {
    const { data } = await makeDesktopGetRequest('/spelling/get-languages')
    return Array.isArray(data.result)
  }
  catch {
    return false
  }
}

/**
 * Checks if spelling functionality is available.
 * Original function: $$l2
 * @returns Promise<boolean> - True if spelling is available, false otherwise.
 */
export async function isHaveSpellingLanguages(): Promise<boolean> {
  return await hasLanguages()
}

/**
 * Spelling agent class for handling spell checking operations.
 * Original class: $$d1
 */
export const SpellingAgent = class {
  name: string
  language: string

  constructor() {
    this.name = 'agent'
    this.language = ''
  }

  /**
   * Initializes the agent with language and words to ignore.
   * @param language - Language code to set.
   * @param wordsToIgnore - Array of words to ignore.
   */
  async initialize(language: string, wordsToIgnore: string[]): Promise<void> {
    this.setLanguage(language)
    await this.addWords(wordsToIgnore)
  }

  /**
   * Performs spell check on the given text.
   * @param text - Text to check.
   * @returns Promise<any[]> - Filtered suggestions or empty array.
   */
  async spellCheckText(text: string): Promise<any[]> {
    const { data } = await makeDesktopPostRequest('/spelling/check', { text, language: this.language }, 'application/json')
    if (Array.isArray(data.result)) {
      return filterSuggestions(text, data.result)
    }
    return []
  }

  /**
   * Gets suggestions for a misspelled word.
   * @param word - Word to get suggestions for.
   * @returns Promise<string[] | false> - Array of suggestions or false if none.
   */
  async getSuggestionsForWord(word: string): Promise<string[] | false> {
    const { data } = await makeDesktopPostRequest('/spelling/suggest', { text: word, language: this.language }, 'application/json')
    if (Array.isArray(data.result)) {
      return data.result
    }
    return false
  }

  /**
   * Sets the language for the agent.
   * @param language - Language code.
   * @returns Promise<boolean> - Always true.
   */
  async setLanguage(language: string): Promise<boolean> {
    this.language = transformLocaleCode(language)
    return true
  }

  /**
   * Adds words to ignore for the current language.
   * @param words - Array of words to add.
   */
  async addWords(words: string[]): Promise<void> {
    await ignoreWords(words, this.language)
  }
}
export const Rq = getLanguages
export const UV = SpellingAgent
export const wp = isHaveSpellingLanguages
