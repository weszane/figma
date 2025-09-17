import { useEffect, useMemo } from 'react'
import { generateUUIDv4 } from '../905/871474'
import { setupCollectionSummary } from '../905/880040'
import { logCmsDebug, logCmsError } from '../905/937198'
import { useCurrentFileKey } from '../figma_app/516028'

/**
 * Status objects for collection database ID lookup.
 * Original variables: d, c, u
 */
const STATUS_DISABLED = {
  collectionDatabaseId: null,
  status: 'disabled',
}
const STATUS_LOADING = {
  collectionDatabaseId: null,
  status: 'loading',
}
const STATUS_ERRORS = {
  collectionDatabaseId: null,
  status: 'errors',
}

/**
 * Memoized cache for collectionStableId to databaseId mapping.
 * Original variable: l
 */
const collectionIdCache = new Map<string, string | null>()

/**
 * Returns the database ID and status for a given collectionStableId.
 * Original function: $$p0
 * @param params - Object containing collectionStableId
 * @returns Object with collectionDatabaseId and status
 */
export function useCollectionDatabaseIdFromStableId({
  collectionStableId,
}: {
  collectionStableId: string | null
}) {
  const fileKey = useCurrentFileKey()
  const { collections, status } = setupCollectionSummary({ fileKey })

  // Clear cache if fileKey changes to a new UUID
  useEffect(() => {
    if (fileKey !== generateUUIDv4()) {
      collectionIdCache.clear()
    }
  }, [fileKey])

  return useMemo(() => {
    if (collectionStableId == null)
      return STATUS_DISABLED

    const cachedId = collectionIdCache.get(collectionStableId)
    if (cachedId != null) {
      return {
        collectionDatabaseId: cachedId,
        status: 'loaded',
      }
    }

    if (collectionStableId === '' || status === 'disabled')
      return STATUS_DISABLED
    if (status === 'loading')
      return STATUS_LOADING
    if (status === 'errors')
      return STATUS_ERRORS

    if (collections == null) {
      logCmsError('[useCollectionDatabaseIdFromCollectionStableId] collections is null', {
        collectionStableId,
        fileKey,
      })
      return STATUS_ERRORS
    }

    const foundId = collections.find(col => col.stableId === collectionStableId)?.databaseId ?? null
    if (foundId == null) {
      logCmsDebug('Collection not found', {
        collectionStableId,
        fileKey,
      })
    }
    else {
      collectionIdCache.set(collectionStableId, foundId)
    }

    return {
      collectionDatabaseId: foundId,
      status: 'loaded',
    }
  }, [collectionStableId, collections, fileKey, status])
}

/** Exported alias for useCollectionDatabaseIdFromStableId (original: k) */
export const k = useCollectionDatabaseIdFromStableId
