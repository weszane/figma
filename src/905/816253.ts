// Original file: /Users/allen/sigma-main/src/905/816253.ts
// Refactored to improve readability, add types, and group related functionality.
// All exports maintain the same names and functionality as the original code.

/**
 * Type definition for language code keys.
 */
type LanguageCodeKey = 'EN' | 'JA' | 'FR' | 'DE' | 'ES_ES' | 'ES_LA' | 'KO_KR' | 'PT_BR' | 'NL_NL' | 'PL_PL' | 'IT_IT' | 'AAA' | 'AAL' | 'DU_PS' | 'DU_DS'

/**
 * Type definition for language code values.
 */
type LanguageCode = string

/**
 * Object mapping language code keys to their string values.
 * Original: $$n4
 */
export const languageCodes: Record<LanguageCodeKey, LanguageCode> = {
  EN: 'en',
  JA: 'ja',
  FR: 'fr',
  DE: 'de',
  ES_ES: 'es-es',
  ES_LA: 'es-la',
  KO_KR: 'ko-kr',
  PT_BR: 'pt-br',
  NL_NL: 'nl-nl',
  PL_PL: 'pl-pl',
  IT_IT: 'it-it',
  AAA: 'aaa',
  AAL: 'aal',
  DU_PS: 'du-ps',
  DU_DS: 'du-ds',
}

/**
 * Array of all language codes.
 * Original: $$r2
 */
export const allLanguages: LanguageCode[] = [
  languageCodes.EN,
  languageCodes.JA,
  languageCodes.FR,
  languageCodes.DE,
  languageCodes.ES_ES,
  languageCodes.ES_LA,
  languageCodes.KO_KR,
  languageCodes.PT_BR,
  languageCodes.NL_NL,
  languageCodes.PL_PL,
  languageCodes.IT_IT,
  languageCodes.AAA,
  languageCodes.AAL,
  languageCodes.DU_PS,
  languageCodes.DU_DS,
]

/**
 * Default language code (English).
 * Original: $$a1
 */
export const defaultLanguage: LanguageCode = languageCodes.EN

/**
 * Subset of language codes for some specific use case.
 * Original: $$s0
 */
export const subsetLanguages: LanguageCode[] = [
  languageCodes.EN,
  languageCodes.JA,
  languageCodes.FR,
  languageCodes.DE,
  languageCodes.ES_ES,
  languageCodes.ES_LA,
  languageCodes.KO_KR,
  languageCodes.PT_BR,
  languageCodes.DU_DS,
]

/**
 * Another subset of language codes.
 * Original: $$o3
 */
export const anotherSubset: LanguageCode[] = [
  languageCodes.FR,
  languageCodes.DE,
  languageCodes.NL_NL,
  languageCodes.PL_PL,
  languageCodes.IT_IT,
  languageCodes.DU_PS,
  languageCodes.DU_DS,
]

// Loose references (likely for side effects or debugging, kept as is for functionality)
// Original: $$n4.FR, $$n4.DE, $$n4.DU_DS


/**
 * Array of specific language codes (AAA and AAL).
 * Original: $$l5
 */
export const specialLanguages: LanguageCode[] = [languageCodes.AAA, languageCodes.AAL]

// Exports with original names to maintain compatibility
/**
 * Exported subset of languages.
 * Original export: EO (from $$s0)
 */
export const EO = subsetLanguages

/**
 * Exported default language.
 * Original export: MY (from $$a1)
 */
export const MY = defaultLanguage

/**
 * Exported array of all languages.
 * Original export: Yv (from $$r2)
 */
export const Yv = allLanguages

/**
 * Exported another subset of languages.
 * Original export: cN (from $$o3)
 */
export const cN = anotherSubset

/**
 * Exported language codes object.
 * Original export: hT (from $$n4)
 */
export const hT = languageCodes

/**
 * Exported special languages array.
 * Original export: iJ (from $$l5)
 */
export const iJ = specialLanguages
