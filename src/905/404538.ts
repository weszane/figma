import { groupBy } from 'lodash-es'
import { shallowEqual } from 'react-redux'
import { liveStoreInstance } from '../905/713695'
import { librariesAPI } from '../905/939602'
import { atom, atomStoreManager, createRemovableAtomFamily } from '../figma_app/27355'
import { isNotNullish } from '../figma_app/95419'

/**
 * Types for query parameters and results
 */
interface UnpublishedStylesQueryParams {
  styleKeys: string[]
  orgId: string
}

interface MissingStyleKeyToLibraryKeyQueryParams {
  styleKeys: string[]
}

interface EverPublishedLibraryQueryParams {
  libraryKeys: string[]
}

/**
 * Query for unpublished styles.
 * Original: UnpublishedStylesQuery
 */
export const UnpublishedStylesQuery = liveStoreInstance.Query({
  /**
   * Fetch unpublished styles for given style keys and orgId.
   * @param params - UnpublishedStylesQueryParams
   * @returns Array of unpublished style objects
   */
  fetch: async ({ styleKeys, orgId }: UnpublishedStylesQueryParams) => {
    if (styleKeys.length === 0)
      return []
    const atomFamily = createRemovableAtomFamily(() => atom(void 0), shallowEqual)
    const missingKeys = styleKeys.filter(
      key => atomStoreManager.get(atomFamily({ styleKey: key, orgId })) === void 0,
    )
    if (missingKeys.length > 0) {
      const response = await librariesAPI.postUnpublishedStyles({
        styleKeys: missingKeys,
        orgId,
      })
      if (response.status === 200) {
        // Mark missing keys as null
        missingKeys.forEach((key) => {
          atomStoreManager.set(atomFamily({ styleKey: key, orgId }), null)
        });
        // Store fetched styles
        (response?.data?.meta?.styles ?? []).forEach((style) => {
          atomStoreManager.set(atomFamily({ styleKey: style.key, orgId }), style)
        })
      }
    }
    return styleKeys
      .map(key => atomStoreManager.get(atomFamily({ styleKey: key, orgId })))
      .filter(isNotNullish)
  },
})

/**
 * Query for missing style keys mapped to library keys.
 * Original: MissingStyleKeyToLibraryKeyQuery
 */
export const MissingStyleKeyToLibraryKeyQuery = liveStoreInstance.Query({
  /**
   * Fetch mapping of missing style keys to library keys.
   * @param params - MissingStyleKeyToLibraryKeyQueryParams
   * @returns Grouped style keys by library key
   */
  fetch: async ({ styleKeys }: MissingStyleKeyToLibraryKeyQueryParams) => {
    if (styleKeys.length === 0)
      return {}
    const atomFamily = createRemovableAtomFamily(() => atom(void 0))
    const missingKeys = styleKeys.filter(
      key => atomStoreManager.get(atomFamily(key)) === void 0,
    )
    if (missingKeys.length > 0) {
      const response = await librariesAPI.postMissingStylesByLibraryKey<{ meta: Record<string, string[]> }>({
        styleKeys: missingKeys,
      })
      if (response.status === 200) {
        // Mark missing keys as null
        missingKeys.forEach(key => atomStoreManager.set(atomFamily(key), null))
        // Store mapping from API response
        Object.entries(response?.data?.meta ?? {}).forEach(([libraryKey, keys]) => {
          keys.forEach(key => atomStoreManager.set(atomFamily(key), libraryKey))
        })
      }
    }
    const foundKeys = styleKeys.filter(key => !!atomStoreManager.get(atomFamily(key)))
    return groupBy(foundKeys, key => atomStoreManager.get(atomFamily(key)))
  },
})

/**
 * Query for ever published libraries.
 * Original: EverPublishedLibraryQuery
 */
export const EverPublishedLibraryQuery = liveStoreInstance.Query({
  /**
   * Fetch library keys that have ever been published.
   * @param params - EverPublishedLibraryQueryParams
   * @returns Array of published library keys
   */
  fetch: async ({ libraryKeys }: EverPublishedLibraryQueryParams) => {
    if (libraryKeys.length === 0)
      return []
    const atomFamily = createRemovableAtomFamily(() => atom(void 0))
    const missingKeys = libraryKeys.filter(
      key => atomStoreManager.get(atomFamily(key)) === void 0,
    )
    if (missingKeys.length > 0) {
      const response = await librariesAPI.postEverPublishedLibraries({
        libraryKeys: missingKeys,
      })
      if (response.status === 200) {
        // Mark missing keys as false
        missingKeys.forEach(key => atomStoreManager.set(atomFamily(key), false));
        // Mark published keys as true
        (response?.data?.meta ?? []).forEach(key => atomStoreManager.set(atomFamily(key), true))
      }
    }
    return libraryKeys.filter(key => atomStoreManager.get(atomFamily(key)) === true)
  },
})

export const _x = UnpublishedStylesQuery
export const e6 = EverPublishedLibraryQuery
export const qE = MissingStyleKeyToLibraryKeyQuery
