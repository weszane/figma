/**
 * Handles fullscreen state and other shared app state.
 * Original variable names preserved in comments for traceability.
 */

export let fullscreenValue // $$n5
export let inputValue // $$i1
export let additionalValue // $$a14
export let resolvePromise // s

/**
 * Promise that resolves when fullscreen state is set.
 * @see $$o10
 */
export let fullscreenPromise = new Promise<void>((resolve) => {
  resolvePromise = resolve
})

/**
 * Sets the fullscreen value and resolves the fullscreenPromise.
 * @param value - The fullscreen value
 * @see $$l12
 */
export function setFullscreen(value: any): void {
  fullscreenValue = value // $$n5
  window._fullscreen_ = fullscreenValue
  resolvePromise()
}

/**
 * Sets the input value.
 * @param value - The input value
 * @see $$d4
 */
export function setInputValue(value: any): void {
  inputValue = value // $$i1
}

/**
 * User value.
 * @see $$u8
 */
export let userValue: any = null

/**
 * Sets the user value.
 * @param value - The user value
 * @see $$c13
 */
export function setUserValue(value: any): void {
  userValue = value // $$u8
}

/**
 * Session value.
 * @see $$_6
 */
export let sessionValue: any = null
/**
 * Modal value.
 * @see $$m3
 */
export let modalValue: any = null

/**
 * Flag value.
 * @see $$f11
 */
export let flagValue: any = null


/**
 * Sets the session value.
 * @param value - The session value
 * @see $$p9
 */
export function setSessionValue(value: any): void {
  sessionValue = value // $$_6
}



/**
 * Sets the modal value.
 * @param value - The modal value
 * @see $$h7
 */
export function setModalValue(value: any): void {
  modalValue = value // $$m3
}



/**
 * Sets the flag value.
 * @param value - The flag value
 * @see $$g0
 */
export function setFlagValue(value: any): void {
  flagValue = value // $$f11
}



/**
 * Sets the additional value.
 * @param value - The additional value
 * @see $$E2
 */
export function setAdditionalValue(value: any): void {
  additionalValue = value // $$a14
}

// Exported aliases for refactored names
export const Y5 = fullscreenValue // $$n5
export const BI = inputValue // $$i1
export const w8 = additionalValue // $$a14
export const lQ = fullscreenPromise // $$o10
export const s$ = setFullscreen // $$l12
export const XT = setInputValue // $$d4
export const uF = setUserValue // $$c13
export const _W = userValue // $$u8
export const fT = setSessionValue // $$p9
export const ZP = sessionValue // $$_6
export const Zi = setModalValue // $$h7
export const Vv = modalValue // $$m3
export const $q = setFlagValue // $$g0
export const r1 = flagValue // $$f11
export const QT = setAdditionalValue // $$E2
