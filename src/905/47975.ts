import { useMemo } from 'react'
import { VisualBellConnectionErrorHandler } from '../905/370185'
import { logCmsError, logCmsWarning } from '../905/937198'
import { ResourceStatus } from '../905/957591'
import { HasCollectionsView } from '../figma_app/43951'
import { useSubscription } from '../figma_app/288654'

/**
 * Checks if a file has CMS collections and returns its status.
 * @param params - Object containing the fileKey.
 * @returns Object with hasCollection and status properties.
 * Original function name: $$d0
 */
export function checkFileCmsCollections({
  fileKey,
}: {
  fileKey: string
}) {
  // Warn if fileKey is empty
  if (fileKey === '') {
    logCmsWarning('fileKey is being passed as an empty string', {
      fileKey,
    }, {
      reportAsSentryError: true,
    })
  }

  const isEnabled = (fileKey ?? '') !== ''
  const subscriptionResult = useSubscription(HasCollectionsView, {
    fileKey: fileKey ?? '',
  }, {
    enabled: isEnabled,
  })

  // Handle connection errors visually
  VisualBellConnectionErrorHandler(subscriptionResult)

  /**
   * Memoized result for hasCollection and status.
   */
  return useMemo(() => {
    if (subscriptionResult.status === 'errors') {
      logCmsError('FileCmsCollectionView returned an error', {
        fileKey,
        query: JSON.stringify(subscriptionResult),
      })
      return {
        hasCollection: null,
        status: subscriptionResult.status,
      }
    }

    // If fileV2 is not loaded, fallback to checking fileCmsCollections length
    if (subscriptionResult.data?.fileV2?.status !== ResourceStatus.Loaded) {
      return {
        hasCollection: (subscriptionResult.data?.fileCmsCollections?.length ?? 0) > 0,
        status: subscriptionResult.status,
      }
    }

    // Otherwise, use fileHasCmsCollections from fileV2 data
    return {
      hasCollection: subscriptionResult.data?.fileV2?.data?.fileHasCmsCollections,
      status: subscriptionResult.status,
    }
  }, [fileKey, subscriptionResult])
}

/** Alias for checkFileCmsCollections (original export: $) */
export const $ = checkFileCmsCollections
