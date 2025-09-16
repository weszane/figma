import { atom } from 'jotai'
import { l as _$$l } from '../905/716947'

/**
 * Key used for interaction test fake file.
 * Original: $$o1
 */
export const INTERACTION_FAKE_FILE_KEY = 'INTERACTION_TEST_FAKE_FILE_KEY'

/**
 * Internal registry for tracking items.
 * Original: l
 */
const registry: Record<string, unknown> = {}

/**
 * Removes an entry from the registry.
 * Original: $$d0
 * @param key - The key to remove from the registry.
 */
export function removeRegistryEntry(key: string): void {
  delete registry[key]
}

/**
 * Atom representing interaction test state.
 * Original: $$c3
 */
export const interactionTestAtom = atom(false)

/**
 * Placeholder for future use.
 * Original: $$u2
 */
export let unusedValue: unknown = null

// Refactored exports for clarity and traceability
export const Bm = removeRegistryEntry
export const Zt = INTERACTION_FAKE_FILE_KEY
export const pz = unusedValue
export const yw = interactionTestAtom
