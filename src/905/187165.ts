import { createContext } from 'react'
import { isFullscreenSitesView } from '../905/561485'
import { localStorageRef } from '../905/657224'
import { FEditorType } from '../figma_app/53721'
import { isFullscreenOverview } from '../figma_app/88239'
import { getBorderStyle, whiteColor } from '../figma_app/191804'
import { isFigmakeFullscreenView } from '../figma_app/552876'
import { SelfDesignType } from '../figma_app/763686'
import { getFalseValue } from '../figma_app/897289'

// Check for mpGlobal existence, fallback to getFalseValue and warn if not defined (original: typeof mpGlobal != 'undefined' || getFalseValue() || console.warn('mpGlobal not defined!'))
// const isMpGlobalDefined = typeof mpGlobal !== 'undefined' || getFalseValue() || console.warn('mpGlobal not defined!')

// Theme preference key (original: $$p1)
export const DEBUG_THEME_PREFERENCE_KEY = typeof mpGlobal !== 'undefined'
  ? mpGlobal.DEBUG_THEME_PREFERENCE_KEY
  : 'test-theme-preference'

// Dark theme media query (original: $$m5)
export const DARK_THEME_MEDIA_QUERY = typeof mpGlobal !== 'undefined'
  ? mpGlobal.DARK_THEME_MEDIA_QUERY
  : window.matchMedia('(prefers-color-scheme: dark)')

/**
 * Get theme preference from local storage (original: $$h0)
 * @returns {string | null}
 */
export function getThemePreferenceFromLocalStorage(): string | null {
  return typeof mpGlobal !== 'undefined'
    ? mpGlobal.themePreferenceFromLocalStorage(localStorageRef)
    : null
}

// Enhanced contrast preference key (original: $$g11)
export const GLOBAL_DEBUG_ENHANCED_CONTRAST_PREFERENCE = 'global-debug-enhanced-contrast-preference'

/**
 * Check if enhanced contrast is enabled (original: $$f2)
 * @returns {boolean}
 */
export function isEnhancedContrastEnabled(): boolean {
  if (localStorageRef) {
    const value = localStorageRef?.getItem(GLOBAL_DEBUG_ENHANCED_CONTRAST_PREFERENCE)
    return value?.toLowerCase() === 'true'
  }
  return false
}

/**
 * Get editor view type (original: $$_4)
 * @param {any} e - Editor context
 * @param {SelfDesignType} t - Self design type
 * @returns {string}
 */
export function getEditorViewType(
  e: any,
  t: SelfDesignType,
): string {
  if (!e)
    return 'design'
  if (e.view === 'fullscreen' && e.editorType === FEditorType.Whiteboard)
    return 'whiteboard'
  if (
    e.view === 'fullscreen'
    && (e.editorType === FEditorType.DevHandoff || isFullscreenOverview(e))
  ) {
    return 'dev-handoff'
  }
  if (
    (e.view === 'prototype' && e.file?.editor_type === 'slides')
    || (e.view === 'fullscreen' && e.editorType === FEditorType.Slides && t !== SelfDesignType.DESIGN)
  ) {
    return 'piper'
  }
  if (
    e.view === 'fullscreen'
    && e.editorType === FEditorType.Cooper
    && t !== SelfDesignType.DESIGN
  ) {
    return 'cooper'
  }
  if (e.view === 'fullscreen' && e.editorType === FEditorType.Illustration)
    return 'sulli'
  if (isFullscreenSitesView(e) || isFigmakeFullscreenView(e))
    return 'seascape'
  return 'design'
}

/**
 * Get visible theme (original: $$A3)
 * @param {string} theme
 * @returns {string}
 */
export function getVisibleTheme(theme: string): string {
  return typeof mpGlobal !== 'undefined'
    ? mpGlobal.getVisibleTheme(theme)
    : 'light'
}

/**
 * Get background color for theme (original: $$y10)
 * @param {string} theme
 * @returns {string}
 */
export function getBackgroundColorForTheme(theme: string): string {
  return typeof mpGlobal !== 'undefined'
    ? mpGlobal.getBackgroundColorForTheme(theme)
    : '1E1E1E'
}

/**
 * Check if editor is whiteboard fullscreen (original: $$b8)
 * @param {any} e
 * @returns {boolean}
 */
export function isWhiteboardFullscreen(e: any): boolean {
  return e?.view === 'fullscreen' && e.editorType === FEditorType.Whiteboard
}

// Proxy for context default value (original: $$v7)
export const defaultContextValue = new Proxy({}, {
  get: () => null,
})

// React context for theme (original: $$I9)
export const ThemeContext = createContext(defaultContextValue)

/**
 * Get border style for theme (original: $$E6)
 * @param {any} e - Theme object
 * @param {string} t - Border type
 * @param {string} i - Border intensity
 * @param {string} n - Color key (default: 'colorBg')
 * @returns {string}
 */
export function getThemeBorderStyle(
  e: any,
  t: string,
  i: string,
  n: string = 'colorBg',
): string {
  const color = (e && e[n]) ?? whiteColor
  return getBorderStyle(color, t, i)
}

// Export aliases for backward compatibility
export const FB = getThemePreferenceFromLocalStorage
export const ON = DEBUG_THEME_PREFERENCE_KEY
export const Q5 = isEnhancedContrastEnabled
export const i_ = getVisibleTheme
export const ju = getEditorViewType
export const n4 = DARK_THEME_MEDIA_QUERY
export const pw = getThemeBorderStyle
export const rf = defaultContextValue
export const sT = isWhiteboardFullscreen
export const uW = ThemeContext
export const w2 = getBackgroundColorForTheme
export const yt = GLOBAL_DEBUG_ENHANCED_CONTRAST_PREFERENCE
