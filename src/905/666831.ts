import { logInfo } from "../905/714362"
import { filterSuggestions, transformLocaleCode } from "../905/927060"
// Refactored code: Renamed variables and functions for clarity, added TypeScript types, improved readability
import { desktopAPIInstance } from "../figma_app/876459"

// Check if the desktop app supports spell checking by fetching available languages
export async function checkDesktopSpellCheckSupport(): Promise<boolean> {
  if (desktopAPIInstance) {
    const languages = await desktopAPIInstance.spellingGetLanguages()
    logInfo("Desktop app spellcheck support check", "spellingGetLanguages", {
      type: typeof languages,
      isArray: Array.isArray(languages),
      isNull: languages === null,
      isUndefined: undefined === languages,
    })
    return !!languages
  }
  return false
}

// Desktop spell checker implementation
export class DesktopSpellChecker {
  name: string
  language: string

  constructor() {
    this.name = "Desktop"
    this.language = ""
  }

  // Initialize spell checker with language and ignored words
  async initialize(language: string, ignoredWords?: string[]): Promise<void> {
    this.setLanguage(language)
    await desktopAPIInstance.spellingIgnore(ignoredWords || [])
  }

  // Get spelling suggestions for a word
  async getSuggestionsForWord(word: string): Promise<string[]> {
    return await desktopAPIInstance.spellingSuggest(word, this.language)
  }

  // Spell check a text and return filtered suggestions
  async spellCheckText(text: string): Promise<any> {
    const spellingResults = await desktopAPIInstance.spellingCheckSpelling(text, this.language)
    return filterSuggestions(text, spellingResults)
  }

  // Set the language for spell checking
  async setLanguage(languageCode: string): Promise<boolean> {
    this.language = transformLocaleCode(languageCode)
    return true
  }

  // Add words to the ignore list
  async addWords(words: string[]): Promise<void> {
    await desktopAPIInstance.spellingIgnore(words, this.language)
  }
}

export const V = checkDesktopSpellCheckSupport
export const f = DesktopSpellChecker
