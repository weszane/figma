import { resourceDataToSubscriptionMapAtom } from '../905/72677'
import { atomStoreManager } from '../figma_app/27355'
import { LibrarySourceEnum } from '../figma_app/633080'

// Original function: $$s0
/**
 * Retrieves the partner type for a given resource key from the subscription map.
 * @param resourceKey - The key to look up in the subscription map.
 * @returns The partner type if found, otherwise undefined.
 */
export function getPartnerType(resourceKey: string | null | undefined): string | undefined {
  if (resourceKey == null) {
    return undefined;
  }
  const subscriptionMap = atomStoreManager.get(resourceDataToSubscriptionMapAtom);
  return subscriptionMap[resourceKey]?.partner_type ?? undefined;
}

// Original function: $$o1
/**
 * Maps a LibrarySourceEnum value to its corresponding string representation.
 * @param source - The library source enum value.
 * @returns The string representation of the source, or undefined if not matched.
 */
export function getLibrarySourceString(source: LibrarySourceEnum): string | undefined {
  switch (source) {
    case LibrarySourceEnum.LIBRARY:
      return 'library';
    case LibrarySourceEnum.HUBFILE:
      return 'hubFile';
    default:
      return undefined;
  }
}

// Refactored export names to match the new function names
export const X = getPartnerType;
export const z = getLibrarySourceString;
