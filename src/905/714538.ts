import { addFontFamily } from '../905/240327'
import { sharedFontActions } from '../905/784599'
import { initAction } from '../905/929976'
import { updateFontListAction } from '../figma_app/91703'
import { FontSourceType } from '../figma_app/763686'

/**
 * Determines the priority of a font source.
 * @param font - The font object.
 * @returns The priority value.
 * (Original function: l)
 */
function getFontSourcePriority(font: { source: FontSourceType, teamId?: string }): number {
  switch (font.source) {
    case FontSourceType.SHARED:
      return font.teamId ? 3 : 4
    case FontSourceType.LOCAL:
      return 2
    case FontSourceType.GOOGLE:
      return 1
    default:
      return 0
  }
}

/**
 * Finds the key of the font with the highest priority.
 * @param fonts - The fonts object.
 * @returns The key of the highest priority font.
 * (Original function: $$d1)
 */
export function getHighestPriorityFontKey(fonts: Record<string, any>): string | undefined {
  let highestKey: string | undefined
  let highestPriority = -1
  for (const [key, font] of Object.entries(fonts)) {
    const priority = getFontSourcePriority(font)
    if (priority > highestPriority) {
      highestPriority = priority
      highestKey = key
    }
  }
  return highestKey
}

/**
 * Returns the font with the highest priority.
 * @param fonts - The fonts object.
 * @returns The highest priority font object.
 * (Original function: $$c0)
 */
export function getHighestPriorityFont(fonts: Record<string, any>): any | undefined {
  if (!fonts)
    return
  const key = getHighestPriorityFontKey(fonts)
  if (key !== undefined)
    return fonts[key]
}

/**
 * Builds a mapping of font families to their highest priority styles.
 * @param fonts - The fonts object.
 * @returns The mapping object.
 * (Original function: $$u3)
 */
export function getFontStyleMapping(fonts: Record<string, any>): Record<string, Record<string, string>> {
  const mapping: Record<string, Record<string, string>> = {}
  for (const family in fonts) {
    mapping[family] = mapping[family] || {}
    for (const version in fonts[family]) {
      const styles = fonts[family][version].styles || {}
      for (const style in styles) {
        if (mapping[family][style]) {
          const existingVersion = mapping[family][style]
          const existingFont = fonts[family][existingVersion]
          if (getFontSourcePriority(fonts[family][version]) > getFontSourcePriority(existingFont)) {
            mapping[family][style] = version
          }
        }
        else {
          mapping[family][style] = version
        }
      }
    }
  }
  return mapping
}

/**
 * Checks if two font sources are equivalent.
 * @param a - First font object.
 * @param b - Second font object.
 * @returns True if equivalent, false otherwise.
 * (Original variable: p)
 */
function isFontSourceEqual(a: { source: FontSourceType, teamId?: string, orgId?: string }, b: { source: FontSourceType, teamId?: string, orgId?: string }): boolean {
  return a.source === b.source
    && (a.source !== FontSourceType.SHARED
      || !!a.teamId === !!b.teamId && !!a.orgId === !!b.orgId)
}

/**
 * Extracts relevant font properties.
 * @param font - The font object.
 * @returns The extracted properties.
 * (Original function: m)
 */
function extractFontProperties(font: any): any {
  return {
    weight: font.weight,
    stretch: font.stretch,
    italic: font.italic,
    postscript: font.postscript,
    sampleUrl: font.sampleUrl,
    previewUrl: font.previewUrl,
    id: font.id,
    variationAxes: font.variationAxes,
    modifiedAt: font.modifiedAt,
    userInstalled: font.userInstalled,
  }
}

/**
 * Ensures nested objects exist for font family and version.
 * @param fonts - The fonts object.
 * @param family - The font family.
 * @param version - The font version.
 * (Original function: h)
 */
function ensureFontFamilyVersion(fonts: any, family: string, version: string): void {
  fonts[family] = { ...fonts[family] }
  if (fonts[family][version]) {
    fonts[family][version] = { ...fonts[family][version] }
    fonts[family][version].styles = { ...fonts[family][version].styles }
  }
}

/**
 * Adds or updates a font in the fonts object.
 * @param fonts - The fonts object.
 * @param font - The font object to add/update.
 * (Original function: g)
 */
function addOrUpdateFont(fonts: any, font: any): void {
  const version = font.version || ''
  if ([font.family, version].reduce((acc, key) => (acc || {})[key], fonts)) {
    ensureFontFamilyVersion(fonts, font.family, version)
    if (isFontSourceEqual(fonts[font.family][version], font)) {
      if (
        font.variationAxes === undefined
        && fonts[font.family][version].styles[font.style]
        && fonts[font.family][version].styles[font.style].variationAxes !== undefined
      ) {
        return
      }
      fonts[font.family][version].styles[font.style] = extractFontProperties(font)
      return
    }
    if (!(getFontSourcePriority(font) > getFontSourcePriority(fonts[font.family][version]))) {
      return
    }
    fonts[font.family][version] = {
      source: font.source,
      teamId: font.teamId,
      orgId: font.orgId,
      styles: {},
    }
  }
  else {
    fonts[font.family] = fonts[font.family] || {}
    fonts[font.family][version] = {
      source: font.source,
      teamId: font.teamId,
      orgId: font.orgId,
      styles: {},
    }
  }
  ensureFontFamilyVersion(fonts, font.family, version)
  fonts[font.family][version].styles[font.style] = extractFontProperties(font)
}

/**
 * Reducer for font state management.
 * @param state - The current font state.
 * @param action - The dispatched action.
 * @returns The new font state.
 * (Original function: $$f2)
 */
export function fontReducer(state: any = {}, action: any): any {
  if (initAction.matches(action)) {
    return Object.create(null)
  }
  if (updateFontListAction.matches(action)) {
    const nextState = { ...state }
    const sourceSet = new Set(action.payload.sources)
    for (const family in nextState) {
      for (const version in nextState[family]) {
        if (sourceSet.has(nextState[family][version].source)) {
          nextState[family] = { ...nextState[family] }
          delete nextState[family][version]
          if (Object.keys(nextState[family]).length === 0) {
            delete nextState[family]
          }
        }
      }
    }
    for (const fontList of [
      action.payload.localFontsList,
      action.payload.indexFontsList,
      action.payload.indexFakeFontsList,
      action.payload.sharedFontsList,
    ]) {
      if (fontList !== undefined) {
        for (const font of fontList) {
          addFontFamily(font)
          addOrUpdateFont(nextState, font)
        }
      }
    }
    return nextState
  }
  if (sharedFontActions.put.matches(action)) {
    const nextState = { ...state }
    addOrUpdateFont(nextState, action.payload.font)
    return nextState
  }
  return state
}

// Exported names refactored for clarity and traceability
export const If = getHighestPriorityFont
export const a = getHighestPriorityFontKey
export const lG = fontReducer
export const pn = getFontStyleMapping
