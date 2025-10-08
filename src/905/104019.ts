import { getFeatureFlags } from "../905/601108"
import { canPerformActionCheck } from "../905/622391"
import { isE2ETraffic } from "../figma_app/169182"
import { isInteractionPathCheck } from "../figma_app/897289"
// Original code variables and functions:
// let n; -> playbackValue
// let r; -> propertyName
// let a; -> chromeExtensionString
// let s; -> mozExtensionString
// let u = !1; -> isInitialized = false;
// function $$p1() -> setupPlaybackHandler
// function $$m0() -> clearPlaybackHandler
// function h(e) -> decodeString
// function g() -> getPropertyName
// export const JX = $$m0; -> export const clearPlaybackHandlerAlias = clearPlaybackHandler;
// export const e5 = $$p1; -> export const setupPlaybackHandlerAlias = setupPlaybackHandler;

/**
 * Decodes an obfuscated string by shifting each character's char code down by 1.
 * @param encoded - The encoded string to decode.
 * @returns The decoded string.
 */
function decodeString(encoded: string): string {
  return Array.from(encoded).map(char => String.fromCharCode(char.charCodeAt(0) - 1)).join("")
}

/**
 * Gets the property name for the window object, defaulting to a decoded value if not set.
 * @returns The property name string.
 */
function getPropertyName(): string {
  return propertyName || decodeString("gjhnb")
}

/**
 * Sets up a playback handler on the window object with getter and setter logic.
 * Ensures initialization happens only once and checks various conditions.
 */
export function setupPlaybackHandler(): void {
  if (isInitialized)
    return
  isInitialized = true

  if (!getFeatureFlags().ext_init_wdf || isInteractionPathCheck() || isE2ETraffic())
    return

  Object.defineProperty(window, getPropertyName(), {
    get: (): any => {
      // Early return if stack trace indicates extension origin or action cannot be performed
      if (isExtensionStackTrace() || !canPerformActionCheck())
        return
      return playbackValue
    },
    set: (value: any): void => {
      playbackValue = value != null ? value : undefined
    },
  })
}

/**
 * Clears the playback handler by setting the window property to undefined.
 */
export function clearPlaybackHandler(): void {
  (window as any)[getPropertyName()] = undefined
}

/**
 * Checks if the current stack trace originates from a browser extension.
 * @returns True if the stack includes decoded extension strings, false otherwise.
 */
function isExtensionStackTrace(): boolean {
  // eslint-disable-next-line unicorn/error-message
  const stack = new Error().stack
  if (!stack)
    return false

  if (!chromeExtensionString) {
    chromeExtensionString = decodeString("dispnf.fyufotjpo;00")
  }
  if (!mozExtensionString) {
    mozExtensionString = decodeString("np{.fyufotjpo;00")
  }

  return stack.includes(chromeExtensionString) || stack.includes(mozExtensionString)
}

let playbackValue: any
let propertyName: string
let chromeExtensionString: string
let mozExtensionString: string
let isInitialized = false

export const JX = clearPlaybackHandler
export const e5 = setupPlaybackHandler
