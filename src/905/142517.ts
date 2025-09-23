import { atom } from 'jotai'
import { atomStoreManager } from '../905/490038'

/**
 * Creates a custom atom that subscribes to external updates and increments its value.
 *
 * @param params - Object containing get and subscribe functions.
 * @returns A Jotai atom that triggers updates based on external subscription.
 *
 * Original function name: $$a0
 */
export function setupSubscriptionAtom<T>({
  get,
  subscribe,
}: {
  get: () => T
  subscribe: (callback: () => void) => () => void
}) {
  let isMounted = false
  const countAtom = atom(0)

  /**
   * Increments the value of countAtom in the atomStoreManager.
   * Original variable name: s
   */
  const incrementAtom = () => atomStoreManager.set(countAtom, val => val + 1)

  // Attach mount lifecycle to atom
  countAtom.onMount = () => {
    isMounted = true
    const unsubscribe = subscribe(incrementAtom)
    return () => {
      isMounted = false
      unsubscribe()
      Promise.resolve().then(incrementAtom)
    }
  }

  /**
   * Atom that triggers updates and returns the current value from get().
   * Original return atom in $$a0
   */
  return atom((getAtom) => {
    getAtom(countAtom)
    Promise.resolve().then(() => {
      if (!isMounted)
        incrementAtom()
    })
    return get()
  }) as T
}

// Refactored export name for S
export const S = setupSubscriptionAtom
