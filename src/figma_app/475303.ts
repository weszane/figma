import { setKeyboardShortcutPanelTab } from '../905/26824'
import { getI18nString } from '../905/303541'
import { debugState } from '../905/407919'
import { localStorageRef } from '../905/657224'
import { IpcStorageHandler } from '../905/724705'
import { sendWithRetry } from '../905/910117'
import { trackUserEvent } from '../figma_app/314264'
import { fullscreenValue } from '../figma_app/455680'
import { Fullscreen, KeyboardLayout } from '../figma_app/763686'

export const KEYBOARD_LAYOUT_PREFERENCE_KEY = 'keyboardLayoutPreference'

/**
 * Maps a KeyboardLayout enum value to its corresponding localized string.
 * @param layout - The keyboard layout enum value
 * @returns Localized string for the keyboard layout
 */
export function getKeyboardLayoutName(layout: KeyboardLayout): string {
  switch (layout) {
    case KeyboardLayout.US_QWERTY:
      return getI18nString('keyboard_settings.us_qwerty')
    case KeyboardLayout.DVORAK:
      return getI18nString('keyboard_settings.us_dvorak')
    case KeyboardLayout.GERMAN:
      return getI18nString('keyboard_settings.german_qwertz')
    case KeyboardLayout.FRENCH_AZERTY:
      return getI18nString('keyboard_settings.french_azerty')
    case KeyboardLayout.HIRAGANA_KANA:
      return getI18nString('keyboard_settings.japanese_kana')
    case KeyboardLayout.UK_MAC:
      return getI18nString('keyboard_settings.uk_mac')
    case KeyboardLayout.UK_PC:
      return getI18nString('keyboard_settings.uk_pc')
    case KeyboardLayout.SWEDISH:
      return getI18nString('keyboard_settings.swedish')
    case KeyboardLayout.DANISH:
      return getI18nString('keyboard_settings.danish')
    case KeyboardLayout.NORWEGIAN:
      return getI18nString('keyboard_settings.norwegian')
    case KeyboardLayout.ITALIAN:
      return getI18nString('keyboard_settings.italian')
    case KeyboardLayout.SPANISH:
      return getI18nString('keyboard_settings.spanish')
    case KeyboardLayout.FINNISH:
      return getI18nString('keyboard_settings.finnish')
    case KeyboardLayout.SPANISH_LATAM:
      return getI18nString('keyboard_settings.spanish_latin_america')
    case KeyboardLayout.CHINESE:
      return getI18nString('keyboard_settings.chinese')
    case KeyboardLayout.PORTUGUESE:
      return getI18nString('keyboard_settings.portuguese')
    case KeyboardLayout.KOREAN:
      return getI18nString('keyboard_settings.korean')
    case KeyboardLayout.UNKNOWN:
      return getI18nString('keyboard_settings.default_unknown')
  }
}

// Create maps for efficient keyboard layout lookups
const keyboardLayoutNameToEnumMap = new Map<string, KeyboardLayout>(
  Object.entries(KeyboardLayout).map(([name, value]) => [name, value as KeyboardLayout]),
)

const keyboardLayoutEnumToNameMap = new Map<KeyboardLayout, string>(
  Object.entries(KeyboardLayout).map(([name, value]) => [value as KeyboardLayout, name]),
)

/**
 * Parses a stored keyboard layout preference string and returns the corresponding layout.
 * @param storedValue - The stored keyboard layout preference string
 * @returns Object containing the parsed keyboard layout
 */
function parseStoredKeyboardLayout(storedValue: string): { layout: KeyboardLayout } {
  const [layoutName] = storedValue.split(':')
  const layout = keyboardLayoutNameToEnumMap.get(layoutName)

  return layoutName && layout
    ? { layout }
    : { layout: KeyboardLayout.UNKNOWN }
}

/**
 * Tracks keyboard layout preference changes for analytics.
 * @param options - Options containing layout change information
 */
export function trackKeyboardLayoutChange(options: {
  layout: KeyboardLayout
  eventName?: string
  detectedLayout?: string
  detectedLayoutStr?: string
}): void {
  try {
    const state = debugState.getState()
    trackUserEvent('keyboard_layout_preference', state, {
      layout: KeyboardLayout[options.layout],
      eventName: options.eventName,
      detectedLayout: options.detectedLayout,
      detectedLayoutStr: options.detectedLayoutStr,
    })
  }
  catch {
    // Silently handle tracking errors
  }
}

/**
 * Updates the user's keyboard layout preference.
 * @param options - Object containing the new keyboard layout
 */
export function updateKeyboardLayoutPreference({ layout }: { layout: KeyboardLayout }): void {
  if (!localStorageRef) {
    return
  }

  const layoutValue = KeyboardLayout[layout]
  localStorageRef.setItem(KEYBOARD_LAYOUT_PREFERENCE_KEY, layoutValue)
  new IpcStorageHandler().sendToOtherTabs(KEYBOARD_LAYOUT_PREFERENCE_KEY, layoutValue)

  trackKeyboardLayoutChange({
    layout,
    eventName: 'user_manual_change',
  })

  Fullscreen.reloadShortcuts(layout)

  sendWithRetry.put('/api/user', {
    keyboard_preference: KeyboardLayout[layout],
    keyboard_preference_method: 'manual',
  })
}

/**
 * Handles keyboard layout updates from external sources.
 * @param storedValue - The stored keyboard layout preference string
 */
export function handleExternalKeyboardLayoutUpdate(storedValue: string): void {
  if (!localStorageRef) {
    return
  }

  localStorageRef.setItem(KEYBOARD_LAYOUT_PREFERENCE_KEY, storedValue)
  const { layout } = parseStoredKeyboardLayout(storedValue)

  if (fullscreenValue && fullscreenValue.isReady()) {
    Fullscreen.reloadShortcuts(layout)
  }
}

/**
 * Gets the current keyboard layout preference.
 * @returns The current keyboard layout
 */
export function getCurrentKeyboardLayout(): KeyboardLayout {
  // Try to get from localStorage first
  if (localStorageRef) {
    const storedValue = localStorageRef.getItem(KEYBOARD_LAYOUT_PREFERENCE_KEY)
    if (storedValue != null) {
      return parseStoredKeyboardLayout(storedValue).layout
    }
  }

  // Fallback to user's debug state
  if (!debugState) {
    return KeyboardLayout.UNKNOWN
  }

  const userKeyboardLayout = debugState.getState().user?.keyboard_layout
  const layout = keyboardLayoutNameToEnumMap.get(userKeyboardLayout)

  if (!userKeyboardLayout || !layout) {
    return KeyboardLayout.UNKNOWN
  }

  const resolvedLayout = userKeyboardLayout ? layout : KeyboardLayout.UNKNOWN
  handleExternalKeyboardLayoutUpdate(KeyboardLayout[resolvedLayout])

  return resolvedLayout
}

/**
 * Gets all available keyboard layout names.
 * @returns Array of keyboard layout names
 */
export function getAllKeyboardLayoutNames(): string[] {
  return Object.keys(KeyboardLayout)
}

/**
 * Creates keyboard layout menu options.
 * @returns Array of menu options for keyboard layout selection
 */
export function createKeyboardLayoutMenuOptions(): Array<{
  name: string
  callback: (e: any, t: any, r: Fn) => void
}> {
  return getAllKeyboardLayoutNames().length === 0
    ? []
    : [{
      name: 'keyboard-layout-menu-option',
      callback: (_e, _t, dispatch) => {
        dispatch(setKeyboardShortcutPanelTab({
          tab: 'layout',
        }))
        fullscreenValue.triggerAction('toggle-keyboard-shortcuts')
      },
    }]
}

// Export aliases for backward compatibility
export const As = getKeyboardLayoutName
export const CZ = trackKeyboardLayoutChange
export const Cg = handleExternalKeyboardLayoutUpdate
export const GP = getAllKeyboardLayoutNames
export const Ug = KEYBOARD_LAYOUT_PREFERENCE_KEY
export const dZ = keyboardLayoutEnumToNameMap
export const rd = updateKeyboardLayoutPreference
export const v7 = getCurrentKeyboardLayout
export const xt = createKeyboardLayoutMenuOptions
