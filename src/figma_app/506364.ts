import { getSpellCheckStorageKey } from "../905/145989"
import { LRUCache } from "../905/196201"
import { SpellingAgent } from "../905/283918"
import { TextReviewPluginManager } from "../905/326527"
import { debugState } from "../905/407919"
import { trackEventAnalytics } from "../905/449184"
import { SpellCheckEngine } from "../905/461516"
import { determineCurrentSpellCheckEngine, determineSpellCheckLanguage, extractUserWordsForSpellCheck, fetchBrandWords, fetchCustomSpellCheckWords, getSupportedLanguages } from "../905/543054"
import { DesktopSpellChecker } from "../905/666831"
import { HunspellSpellChecker } from "../905/715541"
import { mapEditorTypeToProductType } from "../figma_app/314264"
import { fullscreenValue } from "../figma_app/455680"
import { desktopAPIInstance } from "../figma_app/876459"
// Refactored spell check manager with improved readability, type safety, and clearer logic
// Renamed variables, added types, simplified promise handling, and improved method organization

// Type definitions for better type safety
interface SpellCheckImplementation {
  name?: string
  initialize: (language: string, words: string[]) => Promise<void>
  setLanguage: (language: string) => Promise<void>
  getSuggestionsForWord: (word: string) => Promise<string[]>
  spellCheckText: (text: string) => Promise<any>
}
interface TextReviewResult {
  // Assuming some structure for text review results
  suggestions?: string[]
  errors?: any[]
}
class SpellCheckManager {
  _suggestionsCache: LRUCache<string, string[]>
  _textReviewPluginRunner: TextReviewPluginManager
  _currentPromise: Promise<SpellCheckImplementation> | null
  _current: any | undefined
  constructor() {
    this._suggestionsCache = new LRUCache<string, string[]>(100)
    this._textReviewPluginRunner = new TextReviewPluginManager()
    this._currentPromise = null
    this._current = undefined
  }

  /**
   * Initialize the spell check implementation with required data
   */
  async setCurrentImplementation(implementation: DesktopSpellChecker | SpellingAgent | HunspellSpellChecker, language: string): Promise<void> {
    // Fetch all required word lists
    const customWords = await fetchCustomSpellCheckWords()
    const brandWords = await fetchBrandWords()
    const userWords = extractUserWordsForSpellCheck()

    // Initialize the implementation with combined word list
    await implementation.initialize(language, [...customWords, ...brandWords, ...userWords])
    this._current = implementation

    // Log initialization details
    const supportedLanguages = await getSupportedLanguages()
    console.log(`[spell-check] using implementation: ${this._current?.name}. Current language: ${language}. Supported languages: ${supportedLanguages}`)

    // Track analytics event
    const debugViewState = debugState.getState()
    const productType = mapEditorTypeToProductType(debugViewState.selectedView.editorType)
    trackEventAnalytics("Spell Check Ready", {
      productType,
      language,
      implementationName: this._current?.name,
      userIgnoreWordsCount: customWords.length,
    })
  }

  /**
   * Get current spell check implementation, loading it if necessary
   */
  get current(): Promise<SpellCheckImplementation> {
    if (!this._currentPromise) {
      this._currentPromise = (async (): Promise<SpellCheckImplementation> => {
        await this.ensureImplementationLoaded()
        return this._current as SpellCheckImplementation
      })()
    }
    return this._currentPromise
  }

  /**
   * Ensure the appropriate spell check implementation is loaded
   */
  async ensureImplementationLoaded(): Promise<void> {
    // Return early if already loaded
    if (this._current) {
      return
    }

    // Determine which engine to use
    const engine = await determineCurrentSpellCheckEngine()
    const storageKey = getSpellCheckStorageKey(engine)
    const language = determineSpellCheckLanguage(storageKey)

    // Load the appropriate implementation based on engine type
    switch (engine) {
      case SpellCheckEngine.DESKTOP:
        await this.setCurrentImplementation(new DesktopSpellChecker(), language)
        break
      case SpellCheckEngine.AGENT:
        await this.setCurrentImplementation(new SpellingAgent(), language)
        break
      case SpellCheckEngine.HUNSPELL:
        await this.setCurrentImplementation(new HunspellSpellChecker(), language)
        break
    }
  }

  /**
   * Get spelling suggestions for a word, using cache when possible
   */
  async getSuggestionsForWord(word: string): Promise<string[]> {
    // Check cache first
    if (this._suggestionsCache.has(word)) {
      return Promise.resolve(this._suggestionsCache.get(word) || [])
    }

    // Get suggestions from implementation and cache them
    const suggestions = await (await this.current).getSuggestionsForWord(word)
    this._suggestionsCache.set(word, suggestions)
    return suggestions
  }

  /**
   * Check spelling of text
   */
  async spellCheckText(text: string): Promise<any> {
    return (await this.current).spellCheckText(text)
  }

  /**
   * Run text review plugin if enabled
   */
  async runTextReviewPlugin(text: string): Promise<TextReviewResult[]> {
    if (TextReviewPluginManager.shouldUsePluginForSpellChecking()) {
      return await this._textReviewPluginRunner.reviewText(text)
    }
    return []
  }

  /**
   * Get the name of the current API implementation
   */
  getAPIName(): string {
    return this._current?.name || "N/A"
  }

  /**
   * Determine if spell check should be enabled when first activated
   */
  shouldEnableWhenFirstActivated(): boolean {
    const languages = navigator.languages || [navigator.language]
    return (function (hasDesktopAPI: boolean, userLanguages: readonly string[]) {
      // Enable if desktop API is available
      if (hasDesktopAPI) {
        return true
      }
      try {
        // Extract language codes (e.g., 'en' from 'en-US')
        const languageCodes = userLanguages.map(lang => (lang || "").toLowerCase()).map(lang => lang.split("-")[0])

        // Enable only for English or Russian by default
        if (!(languageCodes.includes("en") || languageCodes.includes("ru"))) {
          return false
        }
      }
      catch {
        // In case of error, enable by default
        return true
      }
      return true
    }(!!desktopAPIInstance, languages))
  }

  /**
   * Reset the spell checker state
   */
  reset(): void {
    this._current = undefined
    this._currentPromise = null
    this._suggestionsCache.reset()
  }
}

// Create singleton instance
export const spellCheckManager = new SpellCheckManager()

// Export functions with descriptive names (original names preserved in exports)
export async function getCurrentSpellCheckImplementation(): Promise<SpellCheckImplementation | undefined> {
  await spellCheckManager.ensureImplementationLoaded()
  return spellCheckManager._current
}
export async function setSpellCheckLanguage(storageKey: string): Promise<void> {
  await spellCheckManager.ensureImplementationLoaded()
  spellCheckManager._suggestionsCache.reset()
  return spellCheckManager._current?.setLanguage(storageKey)
}
export async function updateSpellCheckLanguageAndRefresh(storageKey: string): Promise<void> {
  await setSpellCheckLanguage(determineSpellCheckLanguage(storageKey))
  if (fullscreenValue && fullscreenValue.isReady()) {
    fullscreenValue.triggerAction("redo-spell-checking")
  }
}

// Original exports preserved for compatibility
export let $$b0 = spellCheckManager
export const $4 = spellCheckManager
export const Xw = getCurrentSpellCheckImplementation
export const jI = setSpellCheckLanguage
export const up = updateSpellCheckLanguageAndRefresh
