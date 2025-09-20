import { useMemo } from 'react'
import { liveStoreInstance } from '../905/713695'
import { librariesAPI } from '../905/939602'
import { atom, useAtomWithSubscription } from '../figma_app/27355'
import { isNotNullish } from '../figma_app/95419'
import { setupResourceAtomHandler } from './566371'

/**
 * Query for default libraries metadata using liveStoreInstance.
 * Original: $$d4
 */
export const queryDefaultLibrariesMeta = liveStoreInstance.Query({
  fetch: async () => (await librariesAPI.getDefaultLibraries({
    editorType: 'whiteboard_shapes',
  })).data.meta,
})

/**
 * Atom for subscribed library keys as a Set.
 * Original: $$c3
 */
export const subscribedLibraryKeysAtom = atom((get) => {
  const queryResult: ObjectOf = get(queryDefaultLibrariesMeta({}))
  return queryResult.data
    ? new Set(queryResult.data.files.map(file => file.library_key).filter(isNotNullish))
    : new Set()
})

/**
 * Atom mapping library_key to library name.
 * Original: $$u0
 */
export const libraryKeyToNameAtom = atom((get) => {
  const queryResult: ObjectOf = get(queryDefaultLibrariesMeta({}))
  if (!queryResult.data)
    return {}
  const mapping: Record<string, string> = {}
  for (const file of queryResult.data.files) {
    const key = file.library_key
    if (key)
      mapping[key] = file.name
  }
  return mapping
})

/**
 * Hook to get library items and metadata.
 * Original: $$p6
 */
export function useLibraryItemsAndMetadata() {
  const [resource] = setupResourceAtomHandler(queryDefaultLibrariesMeta({}))
  const subscribedFiles = useMemo(
    () => resource.data ? resource.data.files : [],
    [resource],
  )

  const libraryKeyToSubscribedItems = useMemo(() => {
    if (!resource.data)
      return {}
    const items: Record<string, any[]> = {}
    const components = resource.data.components
    const stateGroups = resource.data.state_groups

    for (const component of components) {
      const key = component.library_key
      if (
        key
        && !component.containing_frame?.containingStateGroup
      ) {
        (items[key] ??= []).push(component)
      }
    }
    for (const group of stateGroups) {
      const key = group.library_key
      if (key)
        (items[key] ??= []).push(group)
    }
    Object.values(items).forEach((arr) => {
      arr.sort((a, b) => a.name.localeCompare(b.name))
    })
    return items
  }, [resource])

  return {
    libraryItems: useMemo(
      () => ({
        subscribedFiles,
        libraryKeyToSubscribedItems,
      }),
      [subscribedFiles, libraryKeyToSubscribedItems],
    ),
    metadata: resource.data?.library_metadata_by_library_key,
  }
}

/**
 * Get library name by key from mapping.
 * Original: $$_5
 * @param mapping - Record of library keys to names
 * @param key - Library key
 * @returns Library name or empty string
 */
export function getLibraryNameByKey(mapping: Record<string, string>, key: string): string {
  return mapping[key] ?? ''
}

/**
 * Hook to get library name by key.
 * Original: $$h2
 * @param key - Library key
 * @returns Library name or empty string
 */
export function useLibraryName(key: string): string {
  return getLibraryNameByKey(useAtomWithSubscription(libraryKeyToNameAtom), key)
}

/**
 * Hook to get subscribed library keys as a Set.
 * Original: $$m1
 */
export function useSubscribedLibraryKeys(): Set<string> {
  return useAtomWithSubscription(subscribedLibraryKeysAtom)
}

// Exported aliases for refactored names
export const Ai = libraryKeyToNameAtom
export const Kl = useSubscribedLibraryKeys
export const dF = useLibraryName
export const e3 = subscribedLibraryKeysAtom
export const oH = queryDefaultLibrariesMeta
export const ot = getLibraryNameByKey
export const uE = useLibraryItemsAndMetadata
