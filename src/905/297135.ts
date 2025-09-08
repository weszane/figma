/**
 * Enums for clipboard actions.
 * Original name: $$n8
 */
export enum ClipboardAction {
  CUT = 0,
  COPY = 1,
  PASTE = 2,
}

/**
 * Enums for event types.
 * Original name: $$r0
 */
export enum EventTypeEnum {
  TEXT = 0,
  KEY_PRESS = 1,
  KEY_RELEASE = 2,
  MOUSE_MOVE = 3,
  MOUSE_ENTER = 4,
  MOUSE_LEAVE = 5,
  MOUSE_PRESS = 6,
  MOUSE_DRAG = 7,
  MOUSE_RELEASE = 8,
  MOUSE_WHEEL = 9,
  MOUSE_DROP = 10,
  MOUSE_ROTATE = 11,
  MOUSE_SCALE = 12,
  MOUSE_SCALE_END = 13,
  FOCUS_GAINED = 14,
  FOCUS_LOST = 15,
  CLIPBOARD = 16,
  MOUSE_MOVE_COALESCED = 17,
  MOUSE_DRAG_COALESCED = 18,
  CONTEXT_MENU_OPEN = 19,
  MOUSE_CANCEL = 20,
  APP_FOCUS_GAINED = 21,
  APP_FOCUS_LOST = 22,
}

/**
 * Enums for pointer types.
 * Original name: $$a6
 */
export enum PointerType {
  MOUSE = 0,
  TOUCH = 1,
  STYLUS = 2,
  TRACKPAD = 3,
}

/**
 * Enums for navigation bar types.
 * Original name: s
 */
export enum MobileNavBarType {
  MOBILE_NATIVE_NAVBAR = 0,
}

/**
 * Enums for navigation direction.
 * Original name: $$o4
 */
export enum PageNavigation {
  PREVIOUS = 0,
  NEXT = 1,
}

/**
 * Enums for keyboard layouts.
 * Original name: $$l5
 */
export enum KeyboardLayout {
  UNKNOWN = 0,
  US_QWERTY = 1,
  DVORAK = 2,
  GERMAN = 3,
  FRENCH_AZERTY = 4,
  HIRAGANA_KANA = 5,
  UK_MAC = 6,
  UK_PC = 7,
  SWEDISH = 8,
  FINNISH = 9,
  DANISH = 10,
  NORWEGIAN = 11,
  ITALIAN = 12,
  SPANISH = 13,
  SPANISH_LATAM = 14,
  CHINESE = 15,
  PORTUGUESE = 16,
  KOREAN = 17,
}

// Internal variables for module state
export let HTMLWindowView_Internal: any
export let HTMLWindow: any
export let WritableObservableValue_KeyboardLayout__Internal: any

/**
 * Base class for window views.
 * Original name: m
 */
export class HTMLWindowView {
  handle: any
  constructor(handle: any) {
    this.handle = handle
  }
}

/**
 * Mutable window view class.
 * Original name: h
 */
export class MutableHTMLWindowView extends HTMLWindowView {
  constructor(handle: any) {
    super(handle)
    this.handle = handle
  }
}

/**
 * Base class for writable observable values.
 * Original name: g
 */
export class WritableObservableValue_KeyboardLayout_ {
  handle: any
  constructor(handle: any) {
    this.handle = handle
  }
}

/**
 * Mutable writable observable value class.
 * Original name: $$f3
 */
export class MutableWritableObservableValue_KeyboardLayout_ extends WritableObservableValue_KeyboardLayout_ {
  /**
   * Returns a copy of the value.
   * Original method: getCopy
   */
  getCopy() {
    return WritableObservableValue_KeyboardLayout__Internal.getCopy(this.handle)
  }

  /**
   * Sets the value.
   * Original method: set
   */
  set(value: any) {
    WritableObservableValue_KeyboardLayout__Internal.set(this.handle, value)
  }

  /**
   * Subscribes from JS.
   * Original method: subscribeFromJs
   */
  subscribeFromJs(callback: any) {
    return WritableObservableValue_KeyboardLayout__Internal.subscribeFromJs(this.handle, callback)
  }

  /**
   * Unsubscribes from JS.
   * Original method: unsubscribeFromJs
   */
  unsubscribeFromJs(callback: any) {
    WritableObservableValue_KeyboardLayout__Internal.unsubscribeFromJs(this.handle, callback)
  }

  constructor(handle: any) {
    super(handle)
    this.handle = handle
  }
}

/**
 * Initializes internal references from the provided object.
 * Original function: $$_2
 */
export function setupInternalReferences(e: any) {
  HTMLWindowView_Internal = e.HTMLWindowView_Internal
  globalThis.HTMLWindowView = HTMLWindowView
  globalThis.MutableHTMLWindowView = MutableHTMLWindowView
  HTMLWindow = e.HTMLWindow
  WritableObservableValue_KeyboardLayout__Internal = e.WritableObservableValue_KeyboardLayout__Internal
  globalThis.WritableObservableValue_KeyboardLayout_ = WritableObservableValue_KeyboardLayout_
  globalThis.MutableWritableObservableValue_KeyboardLayout_ = MutableWritableObservableValue_KeyboardLayout_
}

/**
 * Returns the internal references.
 * Original function: $$A1
 */
export function getInternalReferences() {
  return {
    hTMLWindow: HTMLWindow,
    hTMLWindowView_Internal: HTMLWindowView_Internal,
    writableObservableValue_KeyboardLayout__Internal: WritableObservableValue_KeyboardLayout__Internal,
  }
}

// Exported variables with refactored names
export const Bx = EventTypeEnum
export const KO = getInternalReferences
export const LQ = setupInternalReferences
export const Sr = MutableWritableObservableValue_KeyboardLayout_
export const YV = PageNavigation
export const aT = KeyboardLayout
export const gm = PointerType
export const sd = HTMLWindow
export const zy = ClipboardAction
