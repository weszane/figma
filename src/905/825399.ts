import { useSetAtom } from "jotai/react"
import { useCallback, useMemo, useState } from "react"
import { useDispatch } from "react-redux"
import { mapLibraryAttributes } from "../905/128063"
import { setLibrariesAtom, useLibraries } from "../905/420347"
import { getFeatureFlags } from "../905/601108"
import { getFirstActiveProjectResourceConnection } from "../905/606579"
import { liveStoreInstance } from "../905/713695"
import { createErrorState, createLoadedState, createLoadingState } from "../905/723791"
import { getParentOrgId } from "../905/872904"
import { SharingGroupsByResourceConnection } from "../figma_app/43951"
import { batchPutFileAction } from "../figma_app/78808"
import { isNotNullish } from "../figma_app/95419"
import { useSubscribedLibraries } from "../figma_app/155728"
import { librariesQuery } from "../figma_app/229259"
import { useSubscription } from "../figma_app/288654"
import { hasTeamPaidAccess } from "../figma_app/345997"
import { selectCurrentFile } from "../figma_app/516028"
import { useParentOrgOfOpenFile } from "../figma_app/543529"
import { handleStatusChangeEffect, setupResourceAtomHandler } from "../figma_app/566371"
import { getCurrentTeam } from "../figma_app/598018"
import { isPublishedLibraryWithAssets, isTeamLibrary } from "../figma_app/633080"
import { useFigmaLibrariesEnabled } from "../figma_app/657017"
import { getLibraryInfo, getLibraryInfoV2 } from "../figma_app/933328"

// Original: $$k10
/**
 * Hook to determine access levels for the current team and organization.
 * @returns Object with hasProAccess, hasOrgAccess, and hasEntAccess booleans.
 */
export function useTeamOrgAccess() {
  const team = getCurrentTeam()
  const parentOrg = useParentOrgOfOpenFile()
  return {
    hasProAccess: hasTeamPaidAccess(team) || !!parentOrg,
    hasOrgAccess: !!parentOrg,
    hasEntAccess: !!parentOrg && !!parentOrg.bigma_enabled,
  }
}

// Original: R
/**
 * Query for fetching library information.
 */
export const libraryInfoQuery = liveStoreInstance.Query({
  fetch: (params: any) => liveStoreInstance.fetch(getLibraryInfo(params)),
  output: (result: any) => ({
    libraryStats: result.data,
    publishedLibraries: result.data.files.map((file: any) => mapLibraryAttributes(file)) ?? [],
  }),
})

// Original: $$N5
/**
 * Hook to manage published libraries with optional local library inclusion.
 * @param options - Configuration options.
 * @returns Object with result (libraries) and status.
 */
export function usePublishedLibraries({
  includeLocalLibrary = false,
  enabled = true,
} = {}) {
  const orgId = getParentOrgId()
  const currentFile = selectCurrentFile()
  const dispatch = useDispatch<AppDispatch>()
  const [oldQueryResult] = setupResourceAtomHandler(libraryInfoQuery({
    currentOrgId: orgId,
    subscriptionFileKey: currentFile?.key,
    includeThumbnails: true,
  }), {
    enabled: enabled && !getFeatureFlags().dse_lk_libraries_endpoint_v2,
  })
  const [newQueryResult] = setupResourceAtomHandler(getLibraryInfoV2({
    orgId,
    subscriptionFileKey: currentFile?.key,
  }), {
    enabled: enabled && !!getFeatureFlags().dse_lk_libraries_endpoint_v2,
  })
  const activeResult = getFeatureFlags().dse_lk_libraries_endpoint_v2 ? newQueryResult : oldQueryResult
  const setLibraries = useSetAtom(setLibrariesAtom)
  handleStatusChangeEffect(oldQueryResult, (data: any) => {
    const files = data.libraryStats.files.map((fileData: any) => fileData.file)
    if (files.length > 0) {
      dispatch(batchPutFileAction({
        files,
        subscribeToRealtime: false,
      }))
    }
    setLibraries(data.publishedLibraries)
  })
  handleStatusChangeEffect(newQueryResult, (data: any) => {
    setLibraries(data)
  })
  const libraries = useMemo(() => getFeatureFlags().dse_lk_libraries_endpoint_v2 ? newQueryResult.data : oldQueryResult.data?.publishedLibraries ?? [], [oldQueryResult, newQueryResult])
  const filteredLibraries = useMemo(() => libraries ? includeLocalLibrary ? libraries : libraries.filter((lib: any) => lib.library_key !== currentFile?.libraryKey) : [], [includeLocalLibrary, currentFile?.libraryKey, libraries])
  return useMemo(() => ({
    result: filteredLibraries,
    status: activeResult.status,
  }), [filteredLibraries, activeResult])
}

// Original: $$P11
/**
 * Hook to manage Figma libraries.
 * @returns Object with result (libraries) and status.
 */
export function useFigmaLibraries() {
  const figmaEnabled = useFigmaLibrariesEnabled()
  const [queryResult] = setupResourceAtomHandler(librariesQuery(undefined), {
    enabled: figmaEnabled,
  })
  const setLibraries = useSetAtom(setLibrariesAtom)
  handleStatusChangeEffect(queryResult, (data: any) => {
    setLibraries(data.map((lib: any) => mapLibraryAttributes(lib)))
  })
  return {
    result: useMemo(() => queryResult.data?.map((lib: any) => mapLibraryAttributes(lib)) ?? [], [queryResult]),
    status: queryResult.status,
  }
}

// Original: $$O4
/**
 * Checks if a library is subscribed.
 * @param library - The library object.
 * @returns Boolean indicating if subscribed.
 */
export function isLibrarySubscribed(library: any) {
  const subscribedLibraries = useSubscribedLibraries()
  return useMemo(() => subscribedLibraries.data?.some((sub: any) => sub.libraryKey === library.library_key), [library, subscribedLibraries.data])
}

// Original: $$D8
/**
 * Hook to get a callback for checking if a library is subscribed.
 * @returns Callback function that takes a library key and returns boolean.
 */
export function useIsLibrarySubscribed() {
  const subscribedLibraries = useSubscribedLibraries()
  return useCallback((libraryKey: string) => subscribedLibraries.data?.some((sub: any) => sub.libraryKey === libraryKey), [subscribedLibraries.data])
}

// Original: $$L3
/**
 * Extracts team library information from a list of libraries.
 * @param libraries - Array of libraries.
 * @returns Object with name and id if team library found, else undefined.
 */
export function getTeamLibraryInfo(libraries: any[]) {
  return useMemo(() => {
    const teamLib = libraries.find(isTeamLibrary)
    if (teamLib && teamLib.workspace_id && teamLib.workspace_name) {
      return {
        name: teamLib.workspace_name,
        id: teamLib.workspace_id,
      }
    }
  }, [libraries])
}

// Original: $$F12
/**
 * Hook for handling scroll state.
 * @param initialScrolled - Initial scrolled state.
 * @returns Object with isScrolled and handleScroll.
 */
export function useScrollHandler(initialScrolled = 0) {
  const [isScrolled, setIsScrolled] = useState(initialScrolled > 0)
  return {
    isScrolled,
    handleScroll: useCallback((scrollTop: number) => {
      setIsScrolled(scrollTop > 0)
    }, []),
  }
}

// Original: $$M7
/**
 * Filters libraries with assets based on feature flags.
 * @param libraryKeys - Set of library keys.
 * @param fallbackData - Fallback data with result and status.
 * @returns State object with filtered libraries.
 */
export function filterLibrariesWithAssets(libraryKeys: Set<string>, fallbackData: any) {
  const keysArray = useMemo(() => Array.from(libraryKeys), [libraryKeys])
  const libraries = useLibraries(keysArray)
  return useMemo(() => {
    if (getFeatureFlags().dse_library_modal_recommended_perf) {
      return libraries.status === "loaded" ? createLoadedState(libraries.data.filter(isPublishedLibraryWithAssets)) : createLoadingState()
    }
    if (fallbackData.status === "loading") {
      return createLoadingState()
    }
    if (fallbackData.status !== "loaded") {
      return createErrorState([])
    }
    return createLoadedState(mapLibrariesByKeys(libraryKeys, fallbackData.result))
  }, [libraries, libraryKeys, fallbackData])
}

// Original: $$j2
/**
 * Maps libraries by their keys from a result array.
 * @param libraryKeys - Set of library keys.
 * @param libraries - Array of libraries.
 * @returns Array of matched libraries.
 */
export function mapLibrariesByKeys(libraryKeys: Set<string>, libraries: any[]) {
  return Array.from(libraryKeys).map(key => libraries.find(lib => lib.library_key === key)).filter(isNotNullish)
}

// Original: $$U6
/**
 * Filters subscribed libraries with assets.
 * @param subscriptions - Array of subscriptions.
 * @param fallbackData - Fallback data.
 * @returns State object with filtered libraries.
 */
export function filterSubscribedLibraries(subscriptions: any[], fallbackData: any) {
  const figmaEnabled = useFigmaLibrariesEnabled()
  const libraryKeys = useMemo(() => subscriptions.filter(sub => sub.isSubscribed !== false).map((sub) => {
    const communityLib = sub.communityLibrary
    if (!figmaEnabled && communityLib) {
      return undefined
    }
    const key = communityLib?.hubFile?.libraryKey ?? sub.library?.file?.libraryKey
    return key || undefined
  }).filter(isNotNullish), [subscriptions, figmaEnabled])
  const libraries = useLibraries(libraryKeys)
  return useMemo(() => {
    if (getFeatureFlags().dse_library_modal_recommended_perf) {
      return libraries.status === "loaded" ? createLoadedState(libraries.data.filter(isPublishedLibraryWithAssets)) : createLoadingState()
    }
    if (fallbackData.status !== "loaded") {
      return fallbackData
    }
    return createLoadedState(mapSubscribedLibraries(subscriptions, fallbackData.data, figmaEnabled))
  }, [libraries, subscriptions, fallbackData, figmaEnabled])
}

// Original: $$B1
/**
 * Maps subscribed libraries from subscriptions and data.
 * @param subscriptions - Array of subscriptions.
 * @param libraries - Array of libraries.
 * @param figmaEnabled - Boolean for Figma libraries.
 * @returns Array of matched libraries.
 */
export function mapSubscribedLibraries(subscriptions: any[], libraries: any[], figmaEnabled: boolean) {
  return subscriptions.filter(sub => sub.isSubscribed !== false).map((sub) => {
    const communityLib = sub.communityLibrary
    if (!figmaEnabled && communityLib) {
      return undefined
    }
    const key = communityLib?.hubFile?.libraryKey ?? sub.library?.file?.libraryKey
    return libraries.find(lib => lib.library_key === key)
  }).filter(isNotNullish)
}

// Original: $$V9
/**
 * Hook for libraries from sharing groups.
 * @param libraries - Array of libraries.
 * @returns State object with filtered libraries.
 */
export function useSharingGroupLibraries(libraries: any[]) {
  const resourceConnection = getFirstActiveProjectResourceConnection()
  const subscription = useSubscription(SharingGroupsByResourceConnection, {
    resourceConnectionId: resourceConnection?.id ?? "",
  }, {
    enabled: !!resourceConnection,
  })
  const libraryKeys = useMemo(() => (subscription.data?.resourceConnectionSharingGroups ?? []).map((group: any) => group.libraryKey || null).filter(isNotNullish), [subscription])
  const loadedLibraries = useLibraries(libraryKeys)
  return useMemo(() => {
    if (getFeatureFlags().dse_library_modal_recommended_perf) {
      return loadedLibraries.status === "loaded" ? createLoadedState(loadedLibraries.data.filter(isPublishedLibraryWithAssets)) : createLoadingState()
    }
    const sharingGroups = subscription.data?.resourceConnectionSharingGroups
    return createLoadedState(libraries.filter(lib => sharingGroups?.some((group: any) => group.libraryKey === lib.library_key)))
  }, [libraries, subscription, loadedLibraries])
}

// Original: $$G0
/**
 * Filters libraries by sharing groups.
 * @param libraries - Array of libraries.
 * @returns Filtered array of libraries.
 */
export function filterLibrariesBySharingGroups(libraries: any[]) {
  const resourceConnection = getFirstActiveProjectResourceConnection()
  const subscription = useSubscription(SharingGroupsByResourceConnection, {
    resourceConnectionId: resourceConnection?.id ?? "",
  }, {
    enabled: !!resourceConnection,
  })
  return useMemo(() => {
    const sharingGroups = subscription.data?.resourceConnectionSharingGroups
    return libraries.filter(lib => sharingGroups?.some((group: any) => group.libraryKey === lib.library_key))
  }, [libraries, subscription])
}

export const Ei = filterLibrariesBySharingGroups
export const LI = mapSubscribedLibraries
export const PW = mapLibrariesByKeys
export const Pq = getTeamLibraryInfo
export const Px = isLibrarySubscribed
export const Qj = usePublishedLibraries
export const W = filterSubscribedLibraries
export const _5 = filterLibrariesWithAssets
export const b1 = useIsLibrarySubscribed
export const eS = useSharingGroupLibraries
export const mG = useTeamOrgAccess
export const ry = useFigmaLibraries
export const yc = useScrollHandler
