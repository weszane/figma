import { identity } from 'lodash-es'
import { z } from 'zod'
import { atom } from '../figma_app/27355'

import { userIdAtom } from '../figma_app/864723'
import { createValidatedLocalStorageAtom } from './42220'

// Original function name: $$l0
// Original export name: P

/**
 * Options for configuring the recently used items atom.
 */
interface RecentlyUsedOptions {
  maxNumRecentlyUsed?: number
  transform?: (item: any, get: any) => any
}

/**
 * Creates an atom for managing a list of recently used items, stored in local storage and filtered by user ID.
 * Items are ordered by their last added timestamp for the current user.
 *
 * @param key - The local storage key.
 * @param property - The property name to match items.
 * @param schema - Zod schema for validating items.
 * @param options - Configuration options.
 * @returns An atom that reads the filtered list and writes by adding/updating items.
 */
export function createRecentlyUsedAtom(
  key: string,
  property: string,
  schema: z.ZodType,
  options: RecentlyUsedOptions = {
    maxNumRecentlyUsed: 20,
    transform: identity,
  },
) {
  // Original: let d = createValidatedLocalStorageAtom(...)
  const storageAtom = createValidatedLocalStorageAtom(
    key,
    [],
    z.array(schema.and(z.object({
      lastAddedAtUserId: z.record(z.string(), z.number()),
    }))),
    {
      subscribeToChanges: true,
    },
  )

  return atom(
    (get) => {
      const userId = get(userIdAtom)
      if (!userId)
        return []
      return get(storageAtom).filter(item => !!item.lastAddedAtUserId[userId])
    },
    (get, set, newItem) => {
      const currentItems = [...get(storageAtom)]
      const userId = get(userIdAtom)
      if (!userId)
        return

      const transformedItem = options.transform!(newItem, get)
      const existingIndex = currentItems.findIndex(item => item[property] === transformedItem[property])
      const existingItem = existingIndex > -1 ? currentItems.splice(existingIndex, 1)[0] : undefined

      const updatedTimestamps = {
        ...(existingItem?.lastAddedAtUserId ?? {}),
        [userId]: Date.now(),
      }

      set(storageAtom, [
        {
          ...transformedItem,
          lastAddedAtUserId: updatedTimestamps,
        },
        ...currentItems,
      ].slice(0, options.maxNumRecentlyUsed ?? 20))
    },
  )
}

// Original: export const P = $$l0
export const P = createRecentlyUsedAtom
