/**
 * Module for managing a shared value reference
 *
 * Original names:
 * - $$n0 -> sharedValue
 * - $$r1 -> setSharedValue
 * - j -> getSharedValue
 * - n -> updateSharedValue
 */

/** Shared value container */
export let sharedValue: any = null

/**
 * Updates the shared value
 * @param value - The new value to set
 */
export function setSharedValue(value: any): void {
  sharedValue = value
}

/** Getter for the current shared value */
export const j = sharedValue

/** Alias for updating the shared value */
export const n = setSharedValue
