import { useMemo, useRef } from 'react'
import { shallowEqual } from 'react-redux'
import { liveStoreInstance, setupResourceAtomHandler } from '../905/713695'
import { areSetsSubset } from '../905/760682'
import { getParentOrgId } from '../905/872904'
import { librariesAPI } from '../905/939602'
import { atom, atomStoreManager, createRemovableAtomFamily, useAtomWithSubscription } from '../figma_app/27355'
import { isNotNullish } from '../figma_app/95419'
import { useCurrentFileKey } from '../figma_app/516028'

// Original: let $$n0
export let librariesQueryNamespace: any = {}

// Original: let m = createRemovableAtomFamily(() => atom(null))
let libraryAtomFamily = createRemovableAtomFamily(() => atom(null))

// Original: let h = createRemovableAtomFamily(e => atom(t => e.map(e => t(m(e)))), shallowEqual)
let librariesAtomFamily = createRemovableAtomFamily(libraryKeys => atom(currentLibraries => libraryKeys.map(key => currentLibraries(libraryAtomFamily(key)))), shallowEqual)

// Original: let $$g3 = atom(null, (e, t, i) => { ... })
export let setLibrariesAtom = atom<any, any[], any>(null, (get, set, libraries) => {
  libraries.filter(isNotNullish).forEach((library) => {
    set(libraryAtomFamily(library.library_key), library)
  })
})

/**
 * Hook to fetch libraries by keys with caching and subscription.
 * Original: export function $$f1(e, t)
 * @param libraryKeys - Array of library keys to fetch
 * @param options - Options for revalidation
 * @returns Object with status and data
 */
export function useLibraries(libraryKeys: any[], options?: { revalidateOnMount?: boolean }) {
  let libraries = useAtomWithSubscription(librariesAtomFamily(libraryKeys)).filter(isNotNullish)
  let fetchedKeys = useMemo(() => new Set(libraries.map(lib => lib.library_key)), [libraries])
  let unfetchedKeys = useMemo(() => libraryKeys.filter(key => !fetchedKeys.has(key)), [libraryKeys, fetchedKeys])

  // Helper function to memoize the set of unfetched keys
  let memoizedUnfetchedKeys = useMemo(() => {
    let currentSet = new Set(unfetchedKeys)
    let ref = useRef(currentSet)
    let previous = ref.current
    if (!areSetsSubset(currentSet, previous)) {
      ref.current = currentSet
    }
    return Array.from(ref.current)
  }, [unfetchedKeys])

  let orgId = getParentOrgId()
  let fileKey = useCurrentFileKey()
  let [queryResult] = setupResourceAtomHandler(librariesQueryNamespace.LibrariesByLibraryKeysQuery({
    libraryKeys: options?.revalidateOnMount ? libraryKeys : memoizedUnfetchedKeys,
    subscriptionFileKey: fileKey,
    orgId,
  }), {
    enabled: options?.revalidateOnMount || unfetchedKeys.length > 0,
    revalidateOnMount: options?.revalidateOnMount,
  })

  return queryResult.status === 'loading'
    ? {
        status: 'loading',
        data: libraries,
      }
    : {
        status: 'loaded',
        data: libraries,
      }
}

/**
 * Hook to fetch a single library by key.
 * Original: export function $$_2(e, t)
 * @param libraryKey - The library key to fetch
 * @param options - Options for revalidation
 * @returns Object with status and data for the single library
 */
export function useLibrary(libraryKey: any, options?: { revalidateOnMount?: boolean }) {
  let result = useLibraries(useMemo(() => libraryKey ? [libraryKey] : [], [libraryKey]), options)
  return useMemo(() => ({
    status: result.status,
    data: result.data[0] ?? null,
  }), [result])
}

// Original: ($$n0 || ($$n0 = {})).LibrariesByLibraryKeysQuery = liveStoreInstance.Query({ ... })
(librariesQueryNamespace || (librariesQueryNamespace = {})).LibrariesByLibraryKeysQuery = liveStoreInstance.Query({
  fetch: async ({
    libraryKeys,
    subscriptionFileKey,
    orgId,
  }) => {
    if (libraryKeys.length === 0)
      return []
    let response = await librariesAPI.getLibrariesByLibraryKeys({
      libraryKeys,
      subscriptionFileKey,
      orgId,
    })
    response.data.meta.forEach((library) => {
      atomStoreManager.set(libraryAtomFamily(library.library_key), library)
    })
    return response.data.meta
  },
  stalenessPolicy: 'never',
})

// Original exports: export const Cs = $$n0; export const bj = $$f1; export const on = $$_2; export const qU = $$g3
export const Cs = librariesQueryNamespace
export const bj = useLibraries
export const on = useLibrary
export const qU = setLibrariesAtom
