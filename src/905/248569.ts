import { namedColors } from '../figma_app/191804'
import { ColorSpaceEnum } from '../figma_app/763686'

/**
 * @file Color utilities for Figma app.
 * Refactored for clarity, maintainability, and type safety.
 */

/**
 * RGBA color type.
 */
export interface RGBA {
  r: number
  g: number
  b: number
  a: number
}

/**
 * Calculates CRC32 hash for a given string.
 * @param input - Input string
 * @returns CRC32 hash as number
 * (Original: a)
 */
function crc32(input: string): number {
  let table: number[] = []
  for (let i = 0; i < 256; i++) {
    let c = i
    for (let j = 0; j < 8; j++) {
      c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1)
    }
    table[i] = c
  }
  let crc = -1
  for (let i = 0; i < input.length; i++) {
    crc = (crc >>> 8) ^ table[(crc ^ input.charCodeAt(i)) & 0xFF]
  }
  return (-1 ^ crc) >>> 0
}

/**
 * Removes all non-hexadecimal characters from a string.
 * @param hex - Input string
 * @returns Cleaned hex string
 * (Original: s)
 */
function cleanHex(hex: string): string {
  return hex.replace(/[^A-F0-9]/gi, '')
}

/**
 * Converts a hex string to its ASCII representation.
 * @param hex - Hex string
 * @returns ASCII string
 * (Original: o)
 */
function hexToAscii(hex: string): string {
  let ascii = ''
  for (let i = 0; i < hex.length; i += 2) {
    ascii += String.fromCharCode(parseInt(hex.substr(i, 2), 16))
  }
  return ascii
}

/**
 * Generates a CRC32 hash from a hex string.
 * @param hex - Input hex string
 * @returns CRC32 hash as uppercase hex string
 * (Original: l)
 */
function hashHex(hex: string): string {
  return crc32(hexToAscii(cleanHex(hex))).toString(16).toUpperCase().padStart(8, '0')
}

/**
 * Converts a normalized color channel value to a 2-digit hex string.
 * @param value - Channel value (0-1)
 * @returns Hex string
 * (Original: d)
 */
function channelToHex(value: number): string {
  return Math.round(255 * value).toString(16).toUpperCase().padStart(2, '0')
}

/**
 * Generates PNG hex data for a color and color space.
 * @param hex - Color hex string
 * @param colorSpace - Color space enum
 * @returns PNG hex data string
 * (Original: c)
 */
function generatePngHex(hex: string, colorSpace: ColorSpaceEnum): string {
  const header = `504C5445 ${hex}`
  const hash = hashHex(header)
  if (colorSpace === ColorSpaceEnum.DISPLAY_P3) {
    return `
      89504E47 0D0A1A0A 0000000D 49484452 00000001 00000001 08030000 0028CB34
      BB000001 62694343 50696363 00002891 7590BD4B C35014C5 4FAB52D0 3A880E1D
      1C328943 D4D20A76 71682B14 45305405 AB539A7E 096D7C24 29527113 5729F81F
      58C15970 B0885470 71701044 0711DD9C 3A29B868 78DE9754 DA22DEC7 E5FD389C
      73B95CC0 1B50192B F60228E9 96914CC4 A4B5D4BA E47B8387 9E53AA66 B2A8A22C
      0AFEFDBB EBF3D1F5 DE4F8859 4DBB7610 D94F5C97 CE2E9776 9E02537F FD5DD59F
      C99A1AFD DFD4418D 1916E091 89956D8B 09DE251E 316829E2 AAE0BCCB C782D32E
      9F3B9E95 649CF896 58D20A6A 86B8492C A73BF47C 07978A65 ADB583D8 DE9FD557
      97C51CEA 51CC6113 26188A50 51810405 E17FFCD3 8E3F8E2D 72576050 2E8F022C
      CA444911 13B2C4F3 D0A16112 32710841 EA90B873 EB7E0FAD FBC96D6D EF15986D
      70CE2FDA DA420338 9DA193D5 DBDA7804 181A006E EA4C3554 47EAA1F6 E672C0FB
      09309802 86EF28B3 61E6C221 777B7F0C E87BE1FC 630CF01D 027695F3 AF23CEED
      1A859F81 2BFD0717 296ABCEC 1BF56300 000003 ${header} ${hash} 0000 00077449
      4D4507E7 010C0637 2418AA2F C5000000 0D494441 54081D01 0200FDFF 00000002
      0001CDE3 D12B0000 00004945 4E44AE42 6082
    `
  }
  return `
    89504E47 0D0A1A0A 0000000D 49484452 00000001 00000001 08030000 0028CB34
    BB000000 20634852 4D00007A 26000080 840000FA 00000080 E8000075 300000EA
    6000003A 98000017 709CBA51 3C000000 03 ${header} ${hash} 00000007 74494D45
    07E7010C 06210D46 80027E00 00000D49 44415408 1D010200 FDFF0000 00020001
    CDE3D12B 00000000 49454E44 AE426082
  `
}

/**
 * Encodes PNG hex data as a base64 data URI.
 * @param hex - Color hex string
 * @param colorSpace - Color space enum
 * @returns PNG data URI
 * (Original: u)
 */
function pngDataUri(hex: string, colorSpace: ColorSpaceEnum): string {
  const pngHex = generatePngHex(hex, colorSpace).replace(/[^A-F0-9]/gi, '')
  return `data:image/png;base64,${btoa(hexToAscii(pngHex))}`
}

/**
 * Generates a PNG data URI for an RGBA color.
 * @param color - RGBA color
 * @param colorSpace - Color space enum
 * @returns PNG data URI
 * (Original: $$p2)
 */
export function createColorDataUri(color: RGBA, colorSpace: ColorSpaceEnum): string {
  return pngDataUri(`${channelToHex(color.r)}${channelToHex(color.g)}${channelToHex(color.b)}`, colorSpace)
}

/**
 * Parses a hex color string to RGBA.
 * @param hex - Hex color string
 * @returns RGBA color or undefined
 * (Original: m)
 */
function parseHexColor(hex: string): RGBA | undefined {
  if (hex[0] === '#') {
    return {
      r: parseInt(hex.substring(1, 3), 16) / 255,
      g: parseInt(hex.substring(3, 5), 16) / 255,
      b: parseInt(hex.substring(5, 7), 16) / 255,
      a: 1,
    }
  }
}

/**
 * Parses an rgba() or rgb() CSS color string to RGBA.
 * @param css - CSS color string
 * @returns RGBA color or undefined
 * (Original: h)
 */
function parseCssColor(css: string): RGBA | undefined {
  const match = css.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/)
  if (match) {
    return {
      r: parseInt(match[1], 10) / 255,
      g: parseInt(match[2], 10) / 255,
      b: parseInt(match[3], 10) / 255,
      a: match[4] ? parseFloat(match[4]) : 1,
    }
  }
}

/**
 * Parses a color string to RGBA, supporting hex, CSS, and named colors.
 * @param color - Color string
 * @returns RGBA color
 * (Original: $$g1)
 */
export function getRGBAFromColor(color: string): RGBA {
  let result: RGBA | undefined
  try {
    result = parseHexColor(color) || parseCssColor(color) || (namedColors[color] && parseHexColor(namedColors[color]))
    if (result)
      return result
  }
  catch {}
  return { r: 0, g: 0, b: 0, a: 0 }
}

/**
 * Rounds a number to 4 decimal places.
 * @param value - Number
 * @returns Rounded number
 * (Original: f)
 */
function round4(value: number): number {
  return +value.toFixed(4)
}

/**
 * Formats RGBA color as a display-p3 CSS color string.
 * @param color - RGBA color
 * @param alphaMultiplier - Optional alpha multiplier
 * @returns CSS color string
 * (Original: $$_0)
 */
export function FormatDisplayP3Color(color: RGBA, alphaMultiplier = 1): string {
  const { r, g, b, a = 1 } = color
  const alpha = a * alphaMultiplier
  return alpha === 1
    ? `color(display-p3 ${round4(r)} ${round4(g)} ${round4(b)})`
    : `color(display-p3 ${round4(r)} ${round4(g)} ${round4(b)} / ${alpha.toFixed(2)})`
}
