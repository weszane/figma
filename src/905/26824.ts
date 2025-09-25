import { createActionCreator } from '../905/73481'
import { createOptimistThunk } from '../905/350402'
import { handleAtomEvent } from '../905/502364'
/**
 * Action creator for setting the keyboard shortcut panel tab.
 * (Original: $$s0)
 */
export const setKeyboardShortcutPanelTab = createActionCreator('SET_KEYBOARD_SHORTCUT_PANEL_TAB')

/**
 * Action creator for used keyboard shortcut.
 * (Original: $$o2)
 */
export const usedKeyboardShortcut = createActionCreator('USED_KEYBOARD_SHORTCUT')

/**
 * Optimist thunk for handling keyboard shortcut usage.
 * Dispatches the usedKeyboardShortcut action and handles paste event.
 * (Original: $$l1)
 * @param e - Redux-like dispatch context
 * @param t - Shortcut event payload
 */
export const handleKeyboardShortcutUsage = createOptimistThunk((e, t) => {
  if (t.key === 'paste') {
    handleAtomEvent({
      id: 'Used Keyboard Shortcut Paste',
    })
  }
  e.dispatch(usedKeyboardShortcut(t))
})

// Refactored exports for compatibility with original names
export const FU = setKeyboardShortcutPanelTab
export const v6 = handleKeyboardShortcutUsage
export const yu = usedKeyboardShortcut
