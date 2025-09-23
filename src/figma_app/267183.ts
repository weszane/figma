import { z } from 'zod'
import { createRecentlyUsedAtom } from '../905/262370'

import { atomStoreManager, createRemovableAtomFamily, useAtomWithSubscription } from '../figma_app/27355'
import { openFileAtom } from '../figma_app/516028'

// Original variable name: l
// Atom family for managing recently used items of a specific type
const recentlyUsedAtomFamily = createRemovableAtomFamily((itemType: string) => createRecentlyUsedAtom(`recently-used-${itemType}s`, 'key', z.object({
  type: z.literal(itemType),
  key: z.string(),
  libraryKey: z.string(),
}), {
  transform: (item: any, get: any) => {
    const openFile = get(openFileAtom)
    return {
      type: item.type,
      key: item.subscriptionStatus === 'LOCAL' ? item.keyForPublish : item.key,
      libraryKey: item.subscriptionStatus === 'LOCAL' ? (openFile?.libraryKey ?? '') : item.sourceLibraryKey,
    }
  },
}))

/**
 * Hook to use the recently used atom for a given item type.
 * Original function name: $$d1
 * @param itemType - The type of the item (e.g., 'component')
 * @returns The atom subscription
 */
export function useRecentlyUsed(itemType: string) {
  return useAtomWithSubscription(recentlyUsedAtomFamily(itemType))
}

/**
 * Sets a recently used item in the atom store.
 * Original function name: $$c0
 * @param item - The item to set
 */
export function setRecentlyUsed(item: any) {
  atomStoreManager.set(recentlyUsedAtomFamily(item.type), item)
}

// Original export: e
export const e = setRecentlyUsed
// Original export: o
export const o = useRecentlyUsed
