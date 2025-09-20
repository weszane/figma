// Original file: /Users/allen/github/fig/src/figma_app/644808.ts
// Refactored to improve readability, group related constants, and add documentation.
// Original variable names are preserved in comments for traceability.
// Functionality remains identical.

/**
 * Enum for section types in the UI.
 * Original: $$l3
 */
export enum SectionType {
  HEADER = 0,
  SUGGESTIONS = 1,
  BREADCRUMB = 2,
  CONTENTS = 3,
}

/**
 * Enum for content types.
 * Original: $$d8
 */
export enum ContentType {
  LIBRARIES = 0,
  PAGES = 1,
  ASSETS = 2,
}

/**
 * Enum for search types.
 * Original: $$c9
 */
export enum SearchType {
  SEARCH_AND_FILTER = 0,
  LIBRARY_SEARCH_CHIP = 1,
}

/**
 * Enum for action types.
 * Original: $$u4
 */
export enum ActionType {
  SEARCH = 0,
  VISUAL_SEARCH_BUTTON = 1,
  SETTINGS = 2,
}

/**
 * Enum for button types.
 * Original: $$p5
 */
export enum ButtonType {
  BACK = 0,
  LIBRARY = 1,
  ELLIPSIS = 2,
  STUBS = 3,
}

/**
 * Enum for category types.
 * Original: $$_12
 */
export enum CategoryType {
  SITE_KIT = 0,
  TEMPLATES = 1,
  EXAMPLES = 2,
  COMPONENTS = 3,
  FOLDERS = 4,
}

/**
 * Enum for library types.
 * Original: $$h7
 */
export enum LibraryType {
  SITE_KIT = 0,
  LOCAL_AND_SUBSCRIBED = 1,
  PRESETS = 2,
  VISUAL_ASSETS = 3,
}

/**
 * Enum for kit types.
 * Original: $$g14
 */
export enum KitType {
  CTA = 0,
  UI_KITS = 1,
}

/**
 * Enum for mode types.
 * Original: $$f13
 */
export enum ModeType {
  DESIGN = 'design',
  SITE = 'site',
}

/**
 * String constants for various types.
 */
export const COMPONENT_TYPE = 'components' // Original: $$n6
export const EXAMPLE_TYPE = 'examples' // Original: $$i10
export const TEMPLATE_TYPE = 'templates' // Original: $$a1
export const ASSET_TYPE = 'assets' // Original: $$s2
export const PRIVATE_TYPE = 'privateToThisFile' // Original: $$o11

/**
 * Checks if the given object has embeds.
 * @param e - The object to check.
 * @returns True if embeds are defined, false otherwise.
 * Original: $$E0
 */
export function hasEmbeds(e: any): boolean {
  return e.embeds !== undefined
}

// Unused enum (original: m) - not exported, so omitted in refactor.

// Exports with refactored names for clarity, matching original export structure.
export const AZ = hasEmbeds
export const JS = TEMPLATE_TYPE
export const Mk = ASSET_TYPE
export const ON = SectionType
export const Wy = ActionType
export const Yv = ButtonType
export const c_ = COMPONENT_TYPE
export const gP = LibraryType
export const lM = ContentType
export const my = SearchType
export const nE = EXAMPLE_TYPE
export const o8 = PRIVATE_TYPE
export const tM = CategoryType
export const yW = ModeType
export const zr = KitType
