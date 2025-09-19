import { throwTypeError } from '../figma_app/465776'

/**
 * Font index URLs for help articles (original: $$r3, $$a4)
 */
export const FONT_INSTALLER_HELP_URL = 'https://help.figma.com/hc/en-us/articles/32801027692183-Troubleshoot-the-Figma-Font-installer'
export const ADD_FONT_HELP_URL = 'https://help.figma.com/hc/en-us/articles/360039956894-Add-a-font-to-Figma-Design#h_01HHJPRGW7HM4KP1G53T9K1G95'

/**
 * Font family names (original: $$d10, $$c11, $$u8, $$p7, $$m0)
 */
export const FONT_SF_PRO = 'SFPro'
export const FONT_SF_PRO_DISPLAY = 'SF Pro'
export const FONT_SF_PRO_ROUNDED = 'SF Pro Rounded'
export const FONT_SF_COMPACT = 'SF Compact'
export const FONT_SF_COMPACT_ROUNDED = 'SF Compact Rounded'

/**
 * Font weight mappings (original: g)
 */
const FONT_WEIGHT_MAP: Record<string, number> = {
  thin: 100,
  extralight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
}

/**
 * Font weight names (original: f)
 */
const FONT_WEIGHT_NAME_MAP: Record<number, string> = {
  100: 'Thin',
  200: 'Extra Light',
  300: 'Light',
  400: 'Regular',
  500: 'Medium',
  600: 'Semi Bold',
  700: 'Bold',
  800: 'Extra Bold',
  900: 'Black',
}

/**
 * Font index options
 */
export interface FontIndexOptions {
  baseUrl?: string
  shouldUseLocalFontIndex?: boolean
  shouldUse250317Index?: boolean
  format?: 'json' | 'kiwi' | string
}

/**
 * Resolves the font base URL based on options (original: s)
 * @param options FontIndexOptions
 * @returns string
 */
export function resolveFontBaseUrl(options: FontIndexOptions): string {
  if (options.baseUrl !== undefined)
    return options.baseUrl
  if (options.shouldUseLocalFontIndex)
    return 'http://localhost:8003/font'
  if (window.location?.hostname === 'figma-gov.com')
    return 'https://static.figma-gov.com/font'
  return 'https://static.figma.com/font'
}

/**
 * Returns the font index hash based on options (original: $$o1)
 * @param options FontIndexOptions
 * @returns string
 */
export function getFontIndexHash(options: FontIndexOptions): string {
  return options.shouldUse250317Index
    ? '798305269cb5be7625b77c5a0ed170a8'
    : '168b60c183c56896337507ffc5acc38f'
}

/**
 * Returns the font index URL based on options (original: $$l2)
 * @param options FontIndexOptions
 * @returns string
 */
export function getFontIndexUrl(options: FontIndexOptions): string {
  const baseUrl = resolveFontBaseUrl(options)
  const hash = getFontIndexHash(options)
  switch (options.format) {
    case 'json':
      return `${baseUrl}/index_${hash}.json`
    case 'kiwi':
      return `${baseUrl}/index_${hash}.kiwi.json`
    default:
      throwTypeError(options.format)
  }
}

/**
 * Returns the font file URL (original: $$h9)
 * @param fileName string
 * @param options FontIndexOptions
 * @returns string
 */
export function getFontFileUrl(fileName: string, options: FontIndexOptions): string {
  return `${resolveFontBaseUrl(options)}/${fileName}`
}

/**
 * Parses font style string to weight and italic (original: $$_5)
 * @param style string
 * @returns { fontWeight: number, italic: boolean }
 */
export function parseFontStyle(style: string): { fontWeight: number, italic: boolean } {
  const normalized = style.replace(/italic/gi, '').replace(/ /g, '').toLowerCase()
  return {
    fontWeight: FONT_WEIGHT_MAP[normalized] ?? 400,
    italic: style.includes('Italic'),
  }
}

/**
 * Returns font style name from weight and italic (original: $$A6)
 * @param weight number
 * @param italic boolean
 * @returns string
 */
export function getFontStyleName(weight?: number, italic?: boolean): string {
  if (!weight)
    return italic ? 'Italic' : 'Regular'
  const name = FONT_WEIGHT_NAME_MAP[weight] ?? 'Regular'
  if (italic)
    return name === 'Regular' ? 'Italic' : `${name} Italic`
  return name
}

// Exported aliases for backward compatibility with original names
export const D7 = FONT_SF_COMPACT_ROUNDED
export const Dg = getFontIndexHash
export const K = getFontIndexUrl
export const MJ = FONT_INSTALLER_HELP_URL
export const Nc = ADD_FONT_HELP_URL
export const PT = parseFontStyle
export const SJ = getFontStyleName
export const T_ = FONT_SF_COMPACT
export const V1 = FONT_SF_PRO_ROUNDED
export const cp = getFontFileUrl
export const qI = FONT_SF_PRO
export const rj = FONT_SF_PRO_DISPLAY
