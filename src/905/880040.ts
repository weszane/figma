import { useMemo } from 'react'
import { toCollectionSummary } from '../905/148729'
import { VisualBellConnectionErrorHandler } from '../905/370185'
import { logCmsError, logCmsWarning } from '../905/937198'
import { ListCollectionsView } from '../figma_app/43951'
import { isNotNullish } from '../figma_app/95419'
import { useSubscription } from '../figma_app/288654'
/**
 * Handles fetching and summarizing collections for a given fileKey.
 * Logs warnings and errors for empty or erroneous fileKeys.
 * @param params - Object containing fileKey string.
 * @returns Memoized summary of collections and status.
 */
export function setupCollectionSummary({
  fileKey,
}: {
  fileKey: string
}) {
  // $$c0: Warn if fileKey is empty
  if (fileKey === '') {
    logCmsWarning('fileKey is being passed as an empty string', {
      fileKey,
    }, {
      reportAsSentryError: true,
    })
  }

  // $$c0: Enable subscription only if fileKey is not empty
  const isEnabled = (fileKey ?? '') !== ''
  const subscription = useSubscription(ListCollectionsView, {
    fileKey: fileKey ?? '',
  }, {
    enabled: isEnabled,
  })

  // $$c0: Handle connection errors visually
  VisualBellConnectionErrorHandler(subscription)

  /**
   * $$c0: Memoize the result to avoid unnecessary recalculations.
   */
  return useMemo(() => {
    if (subscription.status === 'errors') {
      logCmsError('ListCollectionsView returned an error', {
        fileKey,
        query: JSON.stringify(subscription),
      })
      return {
        collections: null,
        status: subscription.status,
      }
    }

    // $$c0: Transform and filter collections data
    const collections = subscription.data?.fileCmsCollections
      ?.map(item => item.collectionV2)
      ?.map(toCollectionSummary)
      ?.filter(isNotNullish) ?? null

    return {
      collections,
      status: subscription.status,
    }
  }, [fileKey, subscription])
}

// Refactored export name for clarity and consistency
export const X = setupCollectionSummary
