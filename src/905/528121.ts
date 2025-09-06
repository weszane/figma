import { languageCodes } from '../905/816253'



/**
 * Maps a language code to its display name.
 * Original function name: $$r1
 * @param code - Language code from languageCodes
 * @returns Display name for the language
 */
export function getLanguageDisplayName(code: string): string | undefined {
  switch (code) {
    case languageCodes.EN:
      return 'English'
    case languageCodes.JA:
      return '\u65E5\u672C\u8A9E'
    case languageCodes.FR:
      return 'Français'
    case languageCodes.DE:
      return 'Deutsch'
    case languageCodes.ES_ES:
      return 'Español (España)'
    case languageCodes.ES_LA:
      return 'Español (Latinoamérica)'
    case languageCodes.KO_KR:
      return '한국어'
    case languageCodes.PT_BR:
      return 'Português (Brasil)'
    case languageCodes.NL_NL:
      return 'Nederlands'
    case languageCodes.PL_PL:
      return 'Polski'
    case languageCodes.IT_IT:
      return 'Italiano'
    case languageCodes.AAA:
      return 'AAA (Pseudolocale: Figma → AAA)'
    case languageCodes.AAL:
      return 'AAL (Pseudolocale: Figma → [~~Ḟīīğṁąą~~])'
    case languageCodes.DU_PS:
      return 'Dummy (Partially Supported)'
    case languageCodes.DU_DS:
      return 'Dummy (Developing Support)'
    default:
      return undefined
  }
}

/**
 * Maps a language code to its i18n resource key.
 * Original function name: $$a0
 * @param code - Language code from languageCodes
 * @returns i18n resource key or undefined
 */
export function getI18nResourceKey(code: string): string | undefined {
  switch (code) {
    case languageCodes.FR:
      return 'i18n_fr'
    case languageCodes.DE:
      return 'i18n_de'
    case languageCodes.DU_DS:
      return 'i18n_du_ds'
    // These languages do not have a resource key
    case languageCodes.NL_NL:
    case languageCodes.PL_PL:
    case languageCodes.IT_IT:
    case languageCodes.DU_PS:
      return undefined
    default:
      return undefined
  }
}

/**
 * Maps language codes to their community page paths.
 * Original variable name: $$s2
 */
export const communityPagePaths: Record<string, string> = {
  'es-la': '/es-la/comunidad',
  'en': '/community',
  'ja': '/ja-jp/community',
  'es-es': '/es-es/comunidad',
  'ko-kr': '/ko-kr/community',
  'pt-br': '/pt-br/comunidade',
}
