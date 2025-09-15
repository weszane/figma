import { atom } from '../figma_app/27355'
import { LibraryPresetSubscriptionsV2 } from '../figma_app/43951'
import { isNotNullish } from '../figma_app/95419'
import { getProviderConfigType } from '../figma_app/155411'
import { getInitialOptions } from '../figma_app/169182'
import { getResourceDataOrFallback } from './419236'

/**
 * Atom for preset library keys from initial options.
 * Original: c
 */
export const presetLibraryKeysAtom = atom(getInitialOptions().preset_library_keys ?? [])

/**
 * Atom for preset library keys v2 from initial options.
 * Original: u
 */
export const presetLibraryKeysV2Atom = atom(getInitialOptions().preset_library_keys_v2?.map((key: string) => key) ?? [])

interface LibraryData {
  data: {
    libraryPresetSubscriptionsV2: LibraryPresetSubscription[] | null
  }
  status: string
}
interface LibraryPresetSubscription {
  libraryKey: string
  hubFileId: string
  partner_type?: string | null
}
/**
 * Atom for fetching hub file IDs from LibraryPresetSubscriptionsV2.
 * Original: p
 */
export const hubFileIdsAtom = atom((get) => {
  const queryResult = get<LibraryData>(LibraryPresetSubscriptionsV2.Query({
    group: getProviderConfigType(),
  }))
  if (queryResult?.status !== 'loaded')
    return null
  return queryResult.data?.libraryPresetSubscriptionsV2?.map(sub => sub.hubFileId) ?? null
})

/**
 * Atom for fetching resource data for each library key.
 * Original: m
 */
export const resourceDataAtom = atom((get) => {
  const queryResult = get<LibraryData>(LibraryPresetSubscriptionsV2.Query({
    group: getProviderConfigType(),
  }))
  if (queryResult?.status !== 'loaded')
    return null
  const resourceData = queryResult.data?.libraryPresetSubscriptionsV2?.map((sub) => {
    const data = getResourceDataOrFallback(sub.libraryKey)
    return data == null ? null : data
  }) ?? null
  return resourceData?.filter(isNotNullish) ?? null
})

/**
 * Atom for a set of all hub file IDs and preset library keys.
 * Original: $$h2
 */
export const hubFileAndPresetKeysSetAtom = atom(get =>
  new Set([...(get(hubFileIdsAtom) ?? []), ...get(presetLibraryKeysAtom)].map(e => e)),
)

/**
 * Atom for a set of all resource data and preset library keys v2.
 * Original: $$g0
 */
export const resourceDataAndPresetKeysV2SetAtom = atom(get =>
  new Set([...(get(resourceDataAtom) ?? []), ...get(presetLibraryKeysV2Atom)]),
)

/**
 * Atom for mapping resource data to their corresponding subscription objects.
 * Original: $$f1
 */
export const resourceDataToSubscriptionMapAtom = atom((get) => {
  const queryResult = get<LibraryData>(LibraryPresetSubscriptionsV2.Query({
    group: getProviderConfigType(),
  }))
  if (queryResult?.status !== 'loaded')
    return {}
  const map: Record<string, typeof queryResult.data.libraryPresetSubscriptionsV2[0]> = {}
  for (const sub of queryResult.data.libraryPresetSubscriptionsV2 ?? []) {
    const data: string = getResourceDataOrFallback(sub.libraryKey)
    if (data != null) {
      map[data] = sub
    }
  }
  return map
})

// Exported names as per refactoring instructions
export const TG = resourceDataAndPresetKeysV2SetAtom
export const V9 = resourceDataToSubscriptionMapAtom
export const qq = hubFileAndPresetKeysSetAtom
