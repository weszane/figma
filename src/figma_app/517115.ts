import { generateUUIDv4 } from '../905/871474'
import { atomStoreManager, useAtomWithSubscription } from '../figma_app/27355'
import { createTrackedAtom } from '../figma_app/615482'

// UUID atom for generating and storing a unique identifier
const uuidAtom = createTrackedAtom<string | undefined>(undefined)

/**
 * Initialize UUID if not already set
 * Generates a new UUIDv4 and stores it in the atom if empty
 * @function initializeUUID
 */
export function initializeUUID() {
  if (!atomStoreManager.get(uuidAtom)) {
    atomStoreManager.set(uuidAtom, generateUUIDv4())
  }
}

/**
 * Get the current UUID value
 * @returns {string | undefined} The stored UUID or undefined if not set
 * @function getUUID
 */
export function getUUID() {
  return atomStoreManager.get(uuidAtom)
}

/**
 * Subscribe to UUID changes
 * @returns {string | undefined} The current UUID value with subscription
 * @function useUUIDSubscription
 */
export function useUUIDSubscription() {
  return useAtomWithSubscription(uuidAtom)
}

// Export aliases for backward compatibility
export const CK = useUUIDSubscription
export const NB = initializeUUID
export const r6 = getUUID
