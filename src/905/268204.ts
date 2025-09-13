/**
 * Determines if the code is running in a browser environment by checking if 'window' is defined.
 * Original: $$n0
 * @type {boolean}
 */
export const isBrowser: boolean = typeof window !== 'undefined'

/**
 * Alias for isBrowser, indicating browser availability.
 * Original: A
 * @type {boolean}
 */
export const A: boolean = isBrowser
