import { isBrowser } from '../905/268204'

/**
 * Checks if CSS.registerProperty is supported in the browser.
 * Original name: $$n1
 */
export const isCSSRegisterPropertySupported = isBrowser && CSS.registerProperty

/**
 * Identity function that returns the input value unchanged.
 * Original name: $$r2
 * @param value - The value to return.
 * @returns The input value.
 */
export const identity = (value: any): any => value

/**
 * Converts a number to a pixel string, or returns "0" if falsy.
 * Original name: $$a4
 * @param value - The number to convert.
 * @returns The pixel string.
 */
export const toPixels = (value: number | null | undefined): string => value ? `${value.toFixed(1)}px` : '0'

/**
 * Converts a number to a rem string.
 * Original name: $$s3
 * @param value - The number to convert.
 * @returns The rem string.
 */
export const toRem = (value: number): string => `${value / 16}rem`

/**
 * Converts a number to a percentage string.
 * Original name: $$o0
 * @param value - The number to convert (as a fraction, e.g., 0.5 for 50%).
 * @returns The percentage string.
 */
export const toPercent = (value: number): string => `${(100 * value).toFixed(2)}%`

// Maintain original export aliases for backward compatibility
export const GX = toPercent
export const M8 = isCSSRegisterPropertySupported
export const Vg = identity
export const W_ = toRem
export const px = toPixels
