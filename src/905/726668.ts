import { keyBy } from 'lodash-es'
import { useMemo, useRef } from 'react'
import { getFeatureFlags } from '../905/601108'

import { logError } from '../905/714362'
import { resourceUtils } from '../905/989992'
import { LibraryMetadataByLibraryKey } from '../figma_app/43951'
import { isNotNullish } from '../figma_app/95419'
import { useMultiSubscription, useSubscription } from '../figma_app/288654'

/**
 * Transforms library metadata into a standardized object.
 * Original function name: g
 * @param metadata - The library metadata object.
 * @param errorSet - Set to track libraries with errors.
 * @returns The transformed library object or null.
 */
function transformLibraryMetadata(metadata: any, errorSet?: Set<string>): any {
  if (!metadata.libraryKeyToFile) {
    return null
  }
  const { file, hubFile, libraryKey } = metadata.libraryKeyToFile
  if (hubFile?.currentHubFileVersion) {
    return {
      libraryKey,
      isHubFile: true,
      name: hubFile.currentHubFileVersion.name,
      thumbnailUrl: hubFile.thumbnailUrl,
    }
  }
  if (file) {
    return {
      libraryKey,
      isHubFile: false,
      name: file.name,
      thumbnailUrl: file.thumbnailUrl,
      thumbnailUrlOverride: file.thumbnailUrlOverride,
      thumbnailGuid: file.thumbnailGuid,
    }
  }
  // Log error if library not found and feature flag is enabled
  if (!errorSet?.has(libraryKey) && getFeatureFlags().dse_lk_library_metadata_sentry) {
    logError('designSystems', 'Unexpectedly failed to access library by key', { libraryKey }, { reportAsSentryError: true })
    errorSet?.add(libraryKey)
  }
  return null
}

/**
 * Hook to get library metadata for a single library key.
 * Original function name: $$m1
 * @param libraryKey - The key of the library.
 * @param options - Options including enabled flag.
 * @returns The transformed library metadata.
 */
export function useLibraryMetadata(libraryKey: string, { enabled = true } = {}) {
  const subscription = useSubscription(LibraryMetadataByLibraryKey, { libraryKey }, { enabled })
  return useMemo(() => subscription.transform(data => transformLibraryMetadata(data)), [subscription])
}

/**
 * Hook to get library metadata for multiple library keys.
 * Original function name: $$h0
 * @param libraryKeys - Array of library keys.
 * @param options - Options including enabled flag.
 * @returns Object keyed by library key with transformed metadata.
 */
export function useMultipleLibraryMetadata(libraryKeys: string[], { enabled = true } = {}) {
  const keys = useMemo(() => libraryKeys.map(key => ({ libraryKey: key })), [libraryKeys])
  const subscriptions = useMultiSubscription(LibraryMetadataByLibraryKey, keys, { enabled })
  const errorSet = useRef(new Set<string>())
  return useMemo(() => resourceUtils.all(subscriptions.map(sub => sub.result)).transform((results) => {
    const transformed = results.map(result => transformLibraryMetadata(result, errorSet.current)).filter(isNotNullish)
    return keyBy(transformed, item => item.libraryKey)
  }), [subscriptions])
}

// Exported with original names for compatibility
export const V = useMultipleLibraryMetadata
export const e = useLibraryMetadata
