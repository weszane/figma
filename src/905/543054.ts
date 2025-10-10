import { reportError } from "../905/11"
import { getSpellCheckLanguage } from "../905/145989"
import { ServiceCategories } from "../905/165054"
import { getLanguages, isHaveSpellingLanguages } from "../905/283918"
import { debugState } from "../905/407919"
import { BRAND_WORDS_URL, DEFAULT_MODE, LANGUAGE_DICTIONARIES, SpellCheckEngine } from "../905/461516"
import { processTextForSpellCheck } from "../905/627729"
import { checkDesktopSpellCheckSupport } from "../905/666831"
import { logInfo } from "../905/714362"
import { createNoOpValidator } from "../figma_app/181241"
import { BrowserInfo } from "../figma_app/778880"
import { desktopAPIInstance } from "../figma_app/876459"
import { isInteractionPathCheck } from "../figma_app/897289"
// Refactored code: renamed variables, added types, simplified logic, improved readability

let currentSpellCheckEngine: SpellCheckEngine | undefined

class SpellCheckWordsFetcher {
  private spellCheckWordsSchemaValidator = createNoOpValidator()

  constructor() {
    // Initialize with a no-op validator
  }

  async getSpellCheckWords() {
    return this.spellCheckWordsSchemaValidator.validate(async ({ xr }: any) => {
      return await xr.get("/api/spell-check-words")
    })
  }
}

const spellCheckWordsFetcher = new SpellCheckWordsFetcher()

/**
 * Fetches custom words for spell checking from the server.
 * Origin: $$A7
 */
export async function fetchCustomSpellCheckWords(): Promise<string[]> {
  if (isInteractionPathCheck()) {
    return []
  }

  try {
    const response = await spellCheckWordsFetcher.getSpellCheckWords()
    if (response.status === 200) {
      const { words } = response.data.meta as any
      return words.map((wordEntry: { word: string }) => wordEntry.word)
    }
  }
  catch {
    // Silently fail and return empty array
  }

  return []
}

/**
 * Fetches brand-specific words for spell checking.
 * Origin: $$y2
 */
export async function fetchBrandWords(): Promise<string[]> {
  try {
    const response = await fetch(BRAND_WORDS_URL)
    const text = await response.text()
    return text.split("\n").filter(line => line.length > 0)
  }
  catch {
    // Silently fail and return empty array
  }

  return []
}

/**
 * Extracts words from the user's name for spell checking.
 * Origin: $$b6
 */
export function extractUserWordsForSpellCheck(): string[] {
  try {
    const userName = debugState.getState().user?.name || ""
    return processTextForSpellCheck(userName)
      .filter(entry => entry.text.length > 0)
      .map(entry => entry.text)
  }
  catch {
    // Silently fail and return empty array
  }

  return []
}

interface SupportedLanguagesManager {
  _supportedLanguages: string[]
  _triedFetchingDesktopLanguages: boolean
}

class SupportedLanguagesManagerImpl implements SupportedLanguagesManager {
  _supportedLanguages: string[] = []
  _triedFetchingDesktopLanguages: boolean = false

  /**
   * Adds languages to the supported list with proper formatting.
   */
  addLanguages(languages: string[]): void {
    for (let language of languages) {
      let formattedLanguage = language.replace("_", "-")

      // Special case for Arabic (Syria)
      if (language === "ars") {
        formattedLanguage = "ar-SY"
      }

      this._supportedLanguages.push(formattedLanguage)
    }
  }

  /**
   * Returns all supported languages.
   */
  getSupportedLanguages(): string[] {
    return this._supportedLanguages
  }

  /**
   * Checks if a language is supported.
   */
  supportsLanguage(language: string): boolean {
    return !!this._supportedLanguages && this._supportedLanguages.includes(language)
  }

  /**
   * Populates supported languages based on the spell check engine.
   */
  async populateSupportedLanguages(engine: SpellCheckEngine): Promise<void> {
    let languages: string[] = []
    const macDefaultLanguages = BrowserInfo.mac ? [DEFAULT_MODE] : []

    switch (engine) {
      case SpellCheckEngine.DESKTOP:
        {
          if (!desktopAPIInstance) {
            reportError(
              ServiceCategories.DESKTOP,
              new Error(
                "desktopApp is not defined, this should not happen as desktop spellcheck has already been initialized",
              ),
            )
            return
          }

          let desktopLanguages = await desktopAPIInstance.spellingGetLanguages()

          logInfo("populateSupportedLanguages", "desktopLanguages", {
            type: typeof desktopLanguages,
            isArray: Array.isArray(desktopLanguages),
            isNull: desktopLanguages === null,
            isUndefined: desktopLanguages === undefined,
          })

          if (desktopLanguages === undefined) {
            if (!this._triedFetchingDesktopLanguages) {
              this._triedFetchingDesktopLanguages = true
              return this.populateSupportedLanguages(engine)
            }
            desktopLanguages = []
          }

          languages = [...macDefaultLanguages, ...desktopLanguages]
        }
        break

      case SpellCheckEngine.AGENT:
        languages = [...macDefaultLanguages, ...(await getLanguages())]
        break

      default:
        languages = Object.keys(LANGUAGE_DICTIONARIES)
    }

    this.addLanguages(languages)
  }
}

const supportedLanguagesManager = new SupportedLanguagesManagerImpl()

/**
 * Initializes supported languages for the given spell check engine.
 * Origin: $$I0
 */
export function initializeSupportedLanguages(engine: SpellCheckEngine): void {
  supportedLanguagesManager.populateSupportedLanguages(engine)
}

/**
 * Gets all supported languages.
 * Origin: $$E1
 */
export function getSupportedLanguages(): string[] {
  return supportedLanguagesManager.getSupportedLanguages()
}

/**
 * Determines the appropriate spell check language.
 * Origin: $$x3
 */
export function determineSpellCheckLanguage(contextLanguage?: string): string {
  const spellCheckLanguage = getSpellCheckLanguage(contextLanguage)

  if (spellCheckLanguage && supportedLanguagesManager.supportsLanguage(spellCheckLanguage)) {
    return spellCheckLanguage
  }

  const browserLanguage = (() => {
    const languages = navigator.languages
    return languages !== undefined ? languages[0] : navigator.language
  })()

  if (browserLanguage && supportedLanguagesManager.supportsLanguage(browserLanguage)) {
    return browserLanguage
  }

  return supportedLanguagesManager.getSupportedLanguages()[0] ?? "en-US"
}

/**
 * Determines the current spell check engine.
 * Origin: $$S4
 */
export async function determineCurrentSpellCheckEngine(): Promise<SpellCheckEngine> {
  if (!currentSpellCheckEngine) {
    currentSpellCheckEngine = (await checkDesktopSpellCheckSupport())
      ? SpellCheckEngine.DESKTOP
      : !isInteractionPathCheck() && (await isHaveSpellingLanguages())
          ? SpellCheckEngine.AGENT
          : SpellCheckEngine.HUNSPELL
  }

  return currentSpellCheckEngine
}

/**
 * Gets the current spell check engine.
 * Origin: $$w5
 */
export function getCurrentSpellCheckEngine(): SpellCheckEngine | undefined {
  return currentSpellCheckEngine
}

// Export aliases maintaining original names on the left side
export const fJ = initializeSupportedLanguages
export const LE = getSupportedLanguages
export const N_ = fetchBrandWords
export const Ev = determineSpellCheckLanguage
export const x5 = determineCurrentSpellCheckEngine
export const i3 = getCurrentSpellCheckEngine
export const oz = extractUserWordsForSpellCheck
export const LJ = fetchCustomSpellCheckWords
