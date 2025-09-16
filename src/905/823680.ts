import { useMemo } from 'react'
import { updateRefOrCallback } from '../905/177375'

/**
 * Creates a memoized callback that updates all provided refs or callbacks.
 * Returns undefined if all arguments are null or undefined.
 *
 * @param refsOrCallbacks - List of refs or callback functions to update.
 * @returns A function that updates each ref/callback with the given value, or undefined.
 * @see $$a0
 */
export function setupRefUpdater(...refsOrCallbacks: (any)[]) {
  return useMemo(() => {
    // Early return if all refs/callbacks are null or undefined
    if (refsOrCallbacks.every(item => item == null))
      return undefined

    // Original: t => { for (let i of e) updateRefOrCallback(i, t); }
    return (value: any) => {
      for (const refOrCallback of refsOrCallbacks) {
        updateRefOrCallback(refOrCallback, value)
      }
    }
  }, refsOrCallbacks)
}

// Export with refactored name
export const S = setupRefUpdater
