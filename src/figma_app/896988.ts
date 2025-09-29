import { noop } from 'lodash-es'
import { getModifierBitmask, isArrowKey, isCommandEvent, isModifierMatch, KeyCodes, ModifierKeyCodes } from '../905/63728'
import { setSharedValue } from '../905/91142'
import { fullscreenValue } from '../figma_app/455680'
import { getCurrentKeyboardLayout } from '../figma_app/475303'
import { setButtonBaseKeyDownCallback } from '../figma_app/637027'
import { EventTypeEnum, Fullscreen, KeyboardLayout } from '../figma_app/763686'
import { BrowserInfo } from '../figma_app/778880'

enum KeyboardEventResponse {
  YES = 0,
  NO = 1,
}

// Callback function reference for handling key events
let keyPressCallback: () => void = noop

/**
 * Sets the callback function to be executed on key press events
 * @param callback - Function to be called on key press
 */
export function setKeyPressCallback(callback: () => void): void {
  keyPressCallback = callback
}

/**
 * Main function to handle keyboard events based on fullscreen state
 * @param event - Keyboard event object
 * @param param1 - Condition parameter (default: 0)
 * @param param2 - Condition parameter (default: 1)
 * @returns Whether the event was handled
 */
export function handleKeyboardEventByState(event: KeyboardEvent, param1 = 0, param2 = 1): boolean {
  return shouldHandleKeyEvent(event, param1, param2) && forwardKeyboardEvent(event)
}

/**
 * Determines if a keyboard event should be handled based on fullscreen visibility
 * @param event - Keyboard event object
 * @param param1 - Condition parameter (default: 0)
 * @param param2 - Condition parameter (default: 1)
 * @returns Whether the event should be handled
 */
export function shouldHandleKeyEvent(event: KeyboardEvent, param1 = 0, param2 = 1): boolean {
  return !!(fullscreenValue && fullscreenValue.isRootElementVisible()) && !shouldIgnoreKeyEvent(event, param1, param2)
}

/**
 * Determines if a keyboard event should be ignored
 * @param event - Keyboard event object
 * @param ignoreParam - Condition parameter (default: 1)
 * @param checkParam - Condition parameter (default: 1)
 * @returns Whether the event should be ignored
 */
export function shouldIgnoreKeyEvent(event: KeyboardEvent, ignoreParam = 1, checkParam = 1): boolean {
  const keyCode = event.keyCode
  const isCommand = isCommandEvent(event)

  // Allow certain navigation keys through
  if (keyCode === KeyCodes.TAB && isModifierMatch(event, ModifierKeyCodes.SHIFT)) {
    return false
  }
  else if (isArrowKey(event.keyCode)) {
    return false
  }
  else if (
    BrowserInfo.mac
    && event.ctrlKey
    && (keyCode === KeyCodes.A || keyCode === KeyCodes.B || keyCode === KeyCodes.D
      || keyCode === KeyCodes.E || keyCode === KeyCodes.F || keyCode === KeyCodes.H
      || keyCode === KeyCodes.K || keyCode === KeyCodes.L || keyCode === KeyCodes.N
      || keyCode === KeyCodes.O || keyCode === KeyCodes.P || keyCode === KeyCodes.T
      || keyCode === KeyCodes.V)
  ) {
    return false
  }
  else if (
    keyCode === KeyCodes.DELETE
    || keyCode === KeyCodes.BACKSPACE
    || keyCode === KeyCodes.NUMPAD_DELETE
    || keyCode === KeyCodes.SPACE
    || keyCode === KeyCodes.ENTER
    || keyCode === KeyCodes.HOME
    || keyCode === KeyCodes.END
    || keyCode === KeyCodes.PAGE_UP
    || keyCode === KeyCodes.PAGE_DOWN
    || (keyCode === KeyCodes.A && checkParam === 1)
  ) {
    return false
  }
  else if (isCommand && keyCode === KeyCodes.Z && ignoreParam === 1) {
    return false
  }
  else if (isCommand || event.ctrlKey) {
    return true // Ignore command/ctrl combinations
  }
  else if (keyCode === KeyCodes.F6) {
    return true // Ignore F6
  }

  return false // Don't ignore by default
}

/**
 * Forwards keyboard events to the appropriate handlers
 * @param event - Keyboard event object
 * @returns Whether the event was handled
 */
export function forwardKeyboardEvent(event: KeyboardEvent): boolean {
  let eventType: EventTypeEnum

  if (event.type === 'keydown') {
    eventType = EventTypeEnum.KEY_PRESS
    keyPressCallback()
  }
  else {
    if (event.type !== 'keyup') {
      console.error('Invalid event passed to forwardKeyboardEvent')
      return false
    }
    eventType = EventTypeEnum.KEY_RELEASE
  }

  const keyboardLayout = getCurrentKeyboardLayout()
  const keyboardEventData = {
    type: eventType,
    which: event.which,
    modifierKeys: getModifierBitmask(event),
    isRepeat: event.repeat,
    code: event.code ?? (event as any).nativeEvent?.code,
    shouldUseLayoutAndCode: keyboardLayout !== KeyboardLayout.UNKNOWN,
    layout: keyboardLayout,
  }

  const wasHandled = !!Fullscreen && Fullscreen.handleKeyboardShortcut(keyboardEventData)

  if (wasHandled) {
    event.preventDefault()
  }

  return wasHandled
}

// Set up callbacks
setButtonBaseKeyDownCallback(handleKeyboardEventByState)
setSharedValue(handleKeyboardEventByState)

// Exported constants for backward compatibility
export const BI = shouldIgnoreKeyEvent
export const U5 = shouldHandleKeyEvent
export const VA = KeyboardEventResponse
export const W0 = KeyboardEventResponse
export const f7 = forwardKeyboardEvent
export const jr = handleKeyboardEventByState
export const nB = setKeyPressCallback
