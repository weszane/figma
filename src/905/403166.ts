import type { JSX } from 'react/jsx-runtime'
import { Fragment, jsx, jsxs } from 'react/jsx-runtime'
import { KindEnum } from '../905/129884'
import { buildStaticUrl } from '../figma_app/169182'
import { FruitTypes } from '../figma_app/763686'
import { dN } from '../vendor/291472'

/**
 * Emoji regex patterns and skin tone mapping.
 * Original variable names: $$l7, d, c, u, p, m, h, g
 */
export const emojiPresentationRegex = /\p{Emoji_Presentation}+(\u200D\p{Emoji_Presentation}+)?/gu
export const emojiShortcodeRegex = /:([\w\-+]+):(?::skin-tone-(\d):)?/
export const emojiShortcodeGlobalRegex = new RegExp(emojiShortcodeRegex.source, 'g')
export const emojiShortcodeExactRegex = new RegExp(`^${emojiShortcodeRegex.source}$`)
export const urlRegex = new RegExp(/[-\w@:%.+~#=]{1,256}\.[a-z0-9()]{1,6}\b([-\w()@:%+.~#?&/=]*)/.source, 'gi')
export const underscoreRegex = /_/g
export const emojiStaticBaseUrl = buildStaticUrl('emoji/5/')
export const skinToneMap: Record<number, string> = {
  2: '1f3fb',
  3: '1f3fc',
  4: '1f3fd',
  5: '1f3fe',
  6: '1f3ff',
}

/**
 * Checks if a string contains a valid emoji shortcode.
 * Original function name: $$f4
 */
export function hasEmojiShortcode(str: string): boolean {
  let match: RegExpExecArray | null = emojiShortcodeGlobalRegex.exec(str)
  while (match !== null) {
    const innerMatch = match[0].match(emojiShortcodeRegex)
    if (innerMatch && dN.get(innerMatch[1])) {
      emojiShortcodeGlobalRegex.lastIndex = 0
      return true
    }
    match = emojiShortcodeGlobalRegex.exec(str)
  }
  return false
}

/**
 * Checks if the emoji supports skin tone modifiers.
 * Original function name: $$_10
 */
export function isEmojiModifierBase(str: string): boolean {
  return !!/\p{Emoji_Modifier_Base}/u.test(getEmojiData(str)[0]?.unicode)
}

/**
 * Returns skin tone shortcode if valid.
 * Original variable name: A
 */
function getSkinToneShortcode(tone?: string | null): string | null {
  return tone && tone in skinToneMap ? `:skin-tone-${tone}:` : null
}

/**
 * Gets the user's preferred skin tone shortcode from localStorage.
 * Original function name: $$y0
 */
export function getUserSkinToneShortcode(): string | null {
  return getSkinToneShortcode(localStorage.getItem('emoji-mart.skin'))
}

/**
 * Splits emoji shortcode and skin tone.
 * Original function name: $$b3
 */
export function splitEmojiAndSkinTone(str: string): [string, string | null] {
  if (isEmojiModifierBase(str)) {
    const match = emojiShortcodeRegex.exec(str)
    if (match)
      return [`:${match[1]}:`, getSkinToneShortcode(match[2]) ?? '']
  }
  return [str, null]
}

/**
 * Highlights search term in emoji id.
 * Original function name: $$v5
 */
export function highlightEmojiIdMatch(
  emoji: { id: string },
  search: string,
): JSX.Element | string {
  const id = emoji.id.toLowerCase().replace(underscoreRegex, '-')
  const term = search.toLowerCase().replace(underscoreRegex, '-')
  const idx = id.indexOf(term)
  if (idx === -1)
    return id
  const before = id.slice(0, idx)
  const match = id.slice(idx, idx + term.length)
  const after = id.slice(idx + term.length)
  return jsxs(Fragment, {
    children: [before, jsx('b', { children: match }), after],
  })
}

/**
 * Checks if string is a valid emoji shortcode.
 * Original function name: $$I13
 */
export function isValidEmojiShortcode(str: string): boolean {
  const match = str.match(emojiShortcodeExactRegex)
  return !!match && !!dN.get(match[1])
}

/**
 * Converts native emoji to shortcode.
 * Original function name: $$E2
 */
export function nativeToShortcode(str: string): string {
  return dN.getShortcodeFromNative(str) || str
}

/**
 * Converts unified code to emoji character.
 * Original function name: $$x9
 */
export function unifiedToEmoji(unified: string): string {
  return String.fromCodePoint(...unified.split('-').map(e => parseInt(e, 16)))
}

/**
 * Gets emoji data from shortcode.
 * Original function name: $$S8
 */
export function getEmojiData(str: string): Array<{
  text: string
  meta: string | string[]
  unicode: string
}> {
  const match = str.match(emojiShortcodeRegex)
  if (match) {
    const id = match[1]
    const emojiData = dN.get(id)
    if (emojiData) {
      const skinTone = match[2] ? parseInt(match[2]) : null
      if (skinTone) {
        if (emojiData.skins[skinTone - 1]) {
          const unified = emojiData.skins[skinTone - 1].unified
          return [{
            text: unified,
            meta: emojiData.skins[skinTone - 1].shortcodes,
            unicode: unifiedToEmoji(unified),
          }]
        }
        if (skinToneMap[skinTone]) {
          const unified = emojiData.skins[0].unified
          return [
            {
              text: unified,
              meta: `:${emojiData.id}:`,
              unicode: unifiedToEmoji(unified),
            },
            {
              text: skinToneMap[skinTone],
              meta: `:skin-tone-${skinTone}:`,
              unicode: unifiedToEmoji(skinToneMap[skinTone]),
            },
          ]
        }
      }
      const unified = emojiData.skins[0].unified
      return [{
        text: unified,
        meta: `:${emojiData.id}:`,
        unicode: unifiedToEmoji(unified),
      }]
    }
  }
  return [{
    text: str,
    meta: str,
    unicode: str,
  }]
}

/**
 * Builds emoji image URL.
 * Original function name: $$w6
 */
export function buildEmojiImageUrl(
  unified: string,
  fruitType: FruitTypes = FruitTypes.APPLE,
): string {
  return `${emojiStaticBaseUrl + FruitTypes[fruitType].toLowerCase()}/small/${unified}.png`
}

/**
 * Splits string into emoji and non-emoji parts.
 * Original function name: $$C11
 */
export function splitEmojiAndText(str: string): string[] {
  const urlIndices = new Set<number>()
  let urlMatch: RegExpExecArray | null = urlRegex.exec(str)
  while (urlMatch !== null) {
    for (let i = urlMatch.index; i < urlMatch.index + urlMatch[0].length; i++) {
      urlIndices.add(i)
    }
    urlMatch = urlRegex.exec(str)
  }
  urlRegex.lastIndex = 0
  let lastIdx = 0
  const result: string[] = []
  let emojiMatch: RegExpExecArray | null = emojiShortcodeGlobalRegex.exec(str)
  while (emojiMatch !== null) {
    if (!urlIndices.has(emojiMatch.index)) {
      if (emojiMatch.index > lastIdx) {
        result.push(str.slice(lastIdx, emojiMatch.index))
      }
      result.push(emojiMatch[0])
      lastIdx = emojiMatch.index + emojiMatch[0].length
    }
    emojiMatch = emojiShortcodeGlobalRegex.exec(str)
  }
  if (lastIdx !== str.length) {
    result.push(str.slice(lastIdx, str.length))
  }
  emojiShortcodeGlobalRegex.lastIndex = 0
  return result
}

/**
 * Converts string with emoji shortcodes to native emoji string.
 * Original function name: $$T1
 */
export function convertShortcodesToNative(str: string): string {
  const parts = splitEmojiAndText(str)
  const result: string[] = []
  parts.forEach((part) => {
    if (isValidEmojiShortcode(part)) {
      getEmojiData(part).forEach((data) => {
        result.push(data.unicode)
      })
    }
    else {
      result.push(part)
    }
  })
  return result.join('')
}

/**
 * Converts string with emoji shortcodes to React elements.
 * Original function name: $$k12
 */
export function renderEmojiShortcodes(str: string): Array<JSX.Element | string> {
  if (!str)
    return ['']
  const result: Array<JSX.Element | string> = []
  splitEmojiAndText(str).forEach((part) => {
    if (isValidEmojiShortcode(part)) {
      getEmojiData(part).forEach((data) => {
        const key = Math.random().toString(36).substring(2)
        result.push(
          jsx('span', {
            'className': 'inline-emoji',
            'data-tooltip-type': KindEnum.TEXT,
            'data-tooltip': data.meta,
            'data-text': data.unicode,
            'children': data.unicode,
          }, key),
        )
      })
    }
    else {
      result.push(part)
    }
  })
  return result
}

// Exported aliases for refactored functions and variables
export const YJ = hasEmojiShortcode
export const uD = isEmojiModifierBase
export const PC = buildEmojiImageUrl
export const Py = emojiPresentationRegex
export const UF = getEmojiData
export const iA = unifiedToEmoji
export const wd = splitEmojiAndText
export const x6 = renderEmojiShortcodes
export const xM = isValidEmojiShortcode
export const Kh = splitEmojiAndSkinTone
export const OV = highlightEmojiIdMatch
export const H3 = nativeToShortcode
export const Bx = convertShortcodesToNative
export const $f = getUserSkinToneShortcode
