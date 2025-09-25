import { isMac } from '../905/881471'

/**
 * Checks if any modifier key (Alt, Meta, Shift, Ctrl) is pressed.
 * Original name: $$r1
 * @param e - Keyboard event
 * @returns True if any modifier key is pressed
 */
export function isModifierKey(e: KeyboardEvent): boolean {
  return e.altKey || e.metaKey || e.shiftKey || e.ctrlKey
}

/**
 * Checks if the platform-specific command/control key is pressed.
 * Original name: $$a0
 * @param e - Keyboard event
 * @returns True if the command key (Mac) or control key (others) is pressed
 */
export function isCommandKeyActive(e: KeyboardEvent): boolean {
  return isMac ? e.metaKey : e.ctrlKey
}

// Export aliases for backward compatibility
export const F = isCommandKeyActive
export const y = isModifierKey
