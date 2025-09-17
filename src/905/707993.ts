import { useMemo } from 'react'
import { toCollectionSchema } from '../905/148729'
import { useCollectionDatabaseIdFromStableId } from '../905/366917'
import { VisualBellConnectionErrorHandler } from '../905/370185'
import { logCmsError } from '../905/937198'
import { OneCollectionView } from '../figma_app/43951'
import { useSubscription } from '../figma_app/288654'
import { useCurrentFileKey } from '../figma_app/516028'
/**
 * Fetches and returns a collection schema and status for a given stable collection ID.
 * Handles connection errors and logs CMS errors if any occur.
 * @param params - Object containing the collectionStableId.
 * @returns An object with the collection schema and status.
 * @see $$u0
 */
export function getCollectionView({
  collectionStableId,
}: {
  collectionStableId: string
}) {
  // Get the current file key
  const fileKey = useCurrentFileKey()

  // Get the database ID for the collection
  const { collectionDatabaseId } = useCollectionDatabaseIdFromStableId({
    collectionStableId,
  })

  // Enable subscription only if both IDs are present
  const isEnabled = !!collectionDatabaseId && fileKey != null

  // Subscribe to the collection view
  const subscription = useSubscription(
    OneCollectionView,
    {
      fileKey: fileKey ?? '',
      collectionId: collectionDatabaseId ?? '',
    },
    { enabled: isEnabled },
  )

  // Handle connection errors visually
  VisualBellConnectionErrorHandler(subscription)

  // Memoize the result for performance
  return useMemo(() => {
    // Log CMS error if subscription returns errors
    if (subscription.status === 'errors') {
      logCmsError('OneCollectionView returned an error', {
        collectionStableId,
        collectionDatabaseId,
        query: subscription,
      })
    }

    return {
      collection: toCollectionSchema(subscription.data?.oneFileCmsCollection?.collectionV2),
      status: subscription.status,
    }
  }, [collectionDatabaseId, collectionStableId, subscription])
}

// Export with original name for backward compatibility
export const G = getCollectionView
