import { atom, atomStoreManager, useAtomWithSubscription } from '../figma_app/27355'

/**
 * Atom representing a counter value, initialized to 0.
 */
const counterAtom = atom(0)

/**
 * Increments the counter atom by 1.
 */
export function incrementCounter() {
  atomStoreManager.set(counterAtom, e => e + 1)
}

/**
 * Hook to subscribe to the counter atom's value.
 * @returns The current counter value.
 */
export function useCounter() {
  return useAtomWithSubscription(counterAtom)
}

// Aliases for backward compatibility
export const R = useCounter
export const c = incrementCounter
