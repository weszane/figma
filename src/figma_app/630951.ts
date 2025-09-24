import { useMemo } from 'react'
import { useSelector } from 'react-redux'

import { getCurrentHubFileVersionName } from '../905/71785'
import { resourceDataAndPresetKeysV2SetAtom } from '../905/72677'
import { useAtomWithSubscription } from '../figma_app/27355'
import { LibrarySubscriptionType, useSubscribedLibraries } from '../figma_app/155728'
import { COMMUNITY_LIBRARY_FILE } from '../figma_app/633080'

import { useFigmaLibrariesEnabled } from '../figma_app/657017'
// Types for better type safety
interface Publisher {
  name: string
  profile_handle: string
}

interface LibraryFile {
  id: string
  thumbnail_url: string
  library_key?: string
  publisher: Publisher
}

interface TransformedLibraryFile {
  name: string
  key: string
  type: typeof COMMUNITY_LIBRARY_FILE
  thumbnail_url: string
  library_key: string
  author_name: string
  author_handle: string
}

interface LibraryData {
  file: TransformedLibraryFile
  components: any[]
  stateGroups: any[]
  styles: any[]
  variables: any[]
  variableSets: any[]
}

interface LibraryWithCounts {
  library_file_key: string
  library_file_name: string
  thumbnail_url: string
  num_components: number
  num_state_groups: number
  num_styles: number
  num_variable_collections: number
  num_variables: number
  num_module_assets: number
  num_library_assets: number
  type: typeof COMMUNITY_LIBRARY_FILE
  library_key: string
  author_name: string
  author_handle: string
}

interface UiKitStatus {
  hasAnyUiKit: boolean
  status: 'loading' | 'loaded'
}

// Constants
export const uiKitsTooltipSymbol = 'ui_kits_tooltip_onboarding_key'

/**
 * Checks if a string is a valid library key (not 22 characters long and contains only digits).
 * Original: $$h7
 */
export const isValidLibraryKey = (key: string): boolean => key.length !== 22 && !key.match(/\D/)

/**
 * Hook to validate and memoize a library key.
 * Original: $$m0
 */
export function useValidLibraryKey(key: string | null | undefined): string | null {
  return useMemo(() => key && isValidLibraryKey(key) ? key : null, [key])
}

/**
 * Transforms a library file object into a standardized format for community libraries.
 * Original: $$g3
 */
export function transformCommunityLibraryFile(file: LibraryFile): TransformedLibraryFile {
  const name = getCurrentHubFileVersionName(file)
  const {
    id,
    thumbnail_url,
    library_key,
    publisher,
  } = file
  return {
    name,
    key: id,
    type: COMMUNITY_LIBRARY_FILE,
    thumbnail_url,
    library_key: library_key ?? '',
    author_name: publisher.name,
    author_handle: publisher.profile_handle,
  }
}

/**
 * Transforms a library file object from a different source into a standardized format.
 * Original: $$f1
 */
export function transformLibraryFile(file: {
  library_file_name: string
  library_file_key: string
  thumbnail_url: string
  library_key: string
  author_name: string
  author_handle: string
}): TransformedLibraryFile {
  const {
    library_file_name,
    library_file_key,
    thumbnail_url,
    library_key,
    author_name,
    author_handle,
  } = file
  return {
    name: library_file_name,
    key: library_file_key,
    type: COMMUNITY_LIBRARY_FILE,
    thumbnail_url,
    library_key,
    author_name,
    author_handle,
  }
}

/**
 * Transforms library data by adding counts of various assets.
 * Original: $$E5
 */
export function transformLibraryWithCounts(data: LibraryData): LibraryWithCounts {
  const {
    file,
    components,
    stateGroups,
    styles,
    variables,
    variableSets,
  } = data
  const {
    name,
    key,
    type,
    thumbnail_url,
    library_key,
    author_name,
    author_handle,
  } = file
  return {
    library_file_key: key,
    library_file_name: name,
    thumbnail_url,
    num_components: components.length,
    num_state_groups: stateGroups.length,
    num_styles: styles.length,
    num_variable_collections: variableSets.length,
    num_variables: variables.length,
    num_module_assets: 0,
    num_library_assets: 0,
    type,
    library_key,
    author_name,
    author_handle,
  }
}

/**
 * Hook to determine if there are any UI kits available based on subscriptions and enabled libraries.
 * Original: $$y2
 */
export function useHasAnyUiKit(): UiKitStatus {
  const librariesEnabled = useFigmaLibrariesEnabled()
  const subscribedLibraries = useSubscribedLibraries()
  const resourceDataAndPresetKeys = useAtomWithSubscription(resourceDataAndPresetKeysV2SetAtom)

  if (!librariesEnabled) {
    return {
      hasAnyUiKit: false,
      status: 'loaded',
    }
  }

  if (subscribedLibraries.status === 'loading') {
    return {
      hasAnyUiKit: false,
      status: 'loading',
    }
  }

  if (subscribedLibraries.data && subscribedLibraries.status === 'loaded') {
    return {
      hasAnyUiKit: subscribedLibraries.data.some(lib => resourceDataAndPresetKeys.has(lib.libraryKey)),
      status: 'loaded',
    }
  }

  return {
    hasAnyUiKit: false,
    status: 'loaded',
  }
}

/**
 * Hook to check if there are subscribed libraries (excluding community) or local components.
 * Original: $$b6
 */
export function useHasSubscribedLibrariesOrLocalComponents(): boolean {
  const subscribedLibraries = useSubscribedLibraries()
  const localComponentsCount = useSelector<AppState, number>((state) => Object.keys(state.library.local.components).length)
  const resourceDataAndPresetKeys = useAtomWithSubscription(resourceDataAndPresetKeysV2SetAtom)

  if (subscribedLibraries.data && subscribedLibraries.status === 'loaded') {
    const hasSubscribedNonCommunity = subscribedLibraries.data.some(
      lib => !resourceDataAndPresetKeys.has(lib.libraryKey) && lib.subscriptionType !== LibrarySubscriptionType.COMMUNITY,
    )
    return hasSubscribedNonCommunity || localComponentsCount > 0
  }

  return false
}

// Legacy exports for backward compatibility (refactored names)
export const $Q = useValidLibraryKey
export const GS = transformLibraryFile
export const I7 = useHasAnyUiKit
export const N4 = transformCommunityLibraryFile
export const RJ = uiKitsTooltipSymbol
export const hT = transformLibraryWithCounts
export const oe = useHasSubscribedLibrariesOrLocalComponents
export const wJ = isValidLibraryKey
