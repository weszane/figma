// Dictionary configuration for spell checking
const DEFAULT_MODE = "auto"
const BRAND_WORDS_URL = "https://figma.com/figma-spell-check-dictionaries/brand-words_9ee8fe6ad8a6c77912d1a4a3b425ea24.txt.gz"

// Language dictionary configurations
export const LANGUAGE_DICTIONARIES = {
  "en-US": {
    dicURL: "https://figma.com/figma-spell-check-dictionaries/en_US_87b793e804079be9980473b9e9f4e75b.dic.gz",
    affURL: "https://figma.com/figma-spell-check-dictionaries/en_US_eaae9bae63b305440b412a48e1653a26.aff.gz",
  },
  "en-GB": {
    dicURL: "https://figma.com/figma-spell-check-dictionaries/en_GB_729537dc2b007c0e2b4fb1804516d703.dic.gz",
    affURL: "https://figma.com/figma-spell-check-dictionaries/en_GB_e8f2d38522a8a4ccf48dc814b4926a77.aff.gz",
  },
  "en-CA": {
    dicURL: "https://figma.com/figma-spell-check-dictionaries/en_CA_4c0d7bf95c46a2dfb12c10e48d2177c2.dic.gz",
    affURL: "https://figma.com/figma-spell-check-dictionaries/en_CA_eaae9bae63b305440b412a48e1653a26.aff.gz",
  },
  "ru": {
    dicURL: "https://figma.com/figma-spell-check-dictionaries/ru_RU_4a8ee657162e6bde9ce7cbd8b4245459.dic.gz",
    affURL: "https://figma.com/figma-spell-check-dictionaries/ru_RU_f6c36a57e345fcdf76f8dccf598434c2.aff.gz",
  },
} as const

/**
 * Get dictionary configuration for a given language
 * @param language - The language code (e.g., 'en-US')
 * @returns Dictionary configuration or default configuration
 */
export function getDictionaryConfig(language: string) {
  return Object.keys(LANGUAGE_DICTIONARIES).includes(language)
    ? LANGUAGE_DICTIONARIES[language]
    : Object.values(LANGUAGE_DICTIONARIES)[0]
}

/**
 * Sleep for a specified amount of time
 * @param ms - Time in milliseconds to sleep
 * @returns Promise that resolves after the specified time
 */
async function sleep(ms: number): Promise<void> {
  await new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * Wait for a condition to be true with timeout
 * @param condition - Function that returns boolean condition to wait for
 * @param interval - Interval between checks in milliseconds (default: 500)
 * @param timeout - Maximum time to wait in milliseconds (default: 5000)
 * @throws Error if maximum sleep time is reached
 */
export async function waitForCondition(
  condition: () => boolean,
  interval: number = 500,
  timeout: number = 5000,
): Promise<void> {
  const startTime = performance.now()

  while (condition()) {
    await sleep(interval)
    if (performance.now() - startTime >= timeout) {
      throw new Error("max sleep time reached")
    }
  }
}

/**
 * Spell check engine types
 */
export enum SpellCheckEngine {
  DESKTOP = 0,
  AGENT = 1,
  HUNSPELL = 2,
}

// Export aliases for backward compatibility
export const LR = waitForCondition
export const QC = SpellCheckEngine
export const SB = BRAND_WORDS_URL
export const fi = LANGUAGE_DICTIONARIES
export const hz = DEFAULT_MODE
export const iW = getDictionaryConfig
