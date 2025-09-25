import { useEffect } from 'react'
import { analyticsEventManager } from '../905/449184'
import { useWebLoggerTimer } from '../905/485103'
import { getFeatureFlags } from '../905/601108'
import { resourceUtils } from '../905/989992'
import { BU, LK } from '../figma_app/199513'
import { setupResourceAtomHandler } from '../figma_app/566371'

/**
 * Handles folder preview file pagination and logging.
 * Refactored from $$c0.
 */
export const setupFolderPreviewHandler = getFeatureFlags().folder_preview_file_pagination
  ? function handlePaginatedFolderPreview({
    folderId,
      shouldShowOnlyTrashedFiles,
  }: {
    folderId: string
    shouldShowOnlyTrashedFiles: boolean
  }) {
    // setupResourceAtomHandler
    const [resourceAtom, resourceActions] = setupResourceAtomHandler(BU({
      folderId,
      sort_column: 'touched_at',
      sort_order: 'desc',
      page_size: 8,
      shouldShowOnlyTrashedFiles,
      skipFetchingRepoBranches: true,
    }))

    // resourceUtils.useTransform
    const previewFiles = resourceUtils.useTransform(resourceAtom, atom => atom.files)

    // Determine if we should fetch next page
    const shouldFetchNextPage
        = previewFiles.status === 'loaded'
          && previewFiles.data.length < 8
          && resourceAtom.hasNextPage
          && !resourceAtom.isFetchingNextPage

    // Fetch next page if needed
    useEffect(() => {
      if (shouldFetchNextPage) {
        resourceActions.fetchNextPage()
      }
    }, [shouldFetchNextPage, resourceActions])

    // Log preview load time
    logFolderPreviewLoadTime({
      folderId,
      isReady: previewFiles.status === 'loaded',
      isPaginated: true,
    })

    return previewFiles
  }
  : function handleNonPaginatedFolderPreview({
    folderId,
      shouldShowOnlyTrashedFiles,
  }: {
    folderId: string
    shouldShowOnlyTrashedFiles: boolean
  }) {
    // resourceUtils.useTransform
    const previewFiles = resourceUtils.useTransform(
      LK(folderId, true, shouldShowOnlyTrashedFiles),
      atom => atom.previewFiles,
    )

    // Log preview load time
    logFolderPreviewLoadTime({
      folderId,
      isReady: previewFiles.status === 'loaded',
      isPaginated: false,
    })

    return previewFiles
  }

/**
 * Logs folder preview file load time.
 * Refactored from u.
 * @param params - Logging parameters
 */
function logFolderPreviewLoadTime({
  folderId,
  isReady,
  isPaginated,
}: {
  folderId: string
  isReady: boolean
  isPaginated: boolean
}) {
  useWebLoggerTimer(isReady, (durationMs, isTimeout, isError) => {
    if (!isTimeout && !isError && durationMs !== 0) {
      analyticsEventManager.trackDefinedMetric('file_browser.folder_preview_files_load_time', {
        durationMs,
        isPaginated,
        folderId,
      })
    }
  })
}

// Export with refactored name
export const R = setupFolderPreviewHandler
