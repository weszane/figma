import { FontSourceType } from '../figma_app/763686'
import { getFalseValue } from '../figma_app/897289'

/**
 * Set to store font family names.
 * (original variable: a)
 */
const fontFamilySet = new Set<string>()

/**
 * Adds a font family to the set if conditions are met.
 * - If input is a string and getFalseValue() returns true, add the string.
 * - If input is an object with source === FontSourceType.GOOGLE, add its family property.
 * @param font Font family name or font object.
 * (original function: $$s1)
 */
export function addFontFamily(font: string | { source: FontSourceType, family: string }) {
  if (typeof font === 'string' && getFalseValue()) {
    fontFamilySet.add(font)
    return
  }
  if (
    typeof font === 'object'
    && font.source === FontSourceType.GOOGLE
  ) {
    fontFamilySet.add(font.family)
  }
}

/**
 * Checks if a font family exists in the set.
 * @param family Font family name.
 * @returns True if the family exists, false otherwise.
 * (original function: $$o0)
 */
export function hasFontFamily(family: string): boolean {
  return fontFamilySet.has(family)
}

// Export aliases for backward compatibility
export const H = hasFontFamily
export const n = addFontFamily
