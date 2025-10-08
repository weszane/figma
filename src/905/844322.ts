import { restoreRecentPrototype } from '../905/70982'
import { handleOptimistTransactionWithError } from '../905/150006'
import { VisualBellActions } from '../905/302958'
import { getI18nString } from '../905/303541'
import { createOptimistThunk } from '../905/350402'
import { moveFileThunk } from '../905/509236'
import { FlashActions } from '../905/573154'
import { liveStoreInstance } from '../905/713695'
import { isBranch } from '../905/760074'
import { getCurrentLiveGraphClient } from '../905/761735'
import { getTrashedFolderFilesById } from '../905/862913'
import { restoreTrashedFilesAction, restoreTrashedFilesMutation } from '../905/880488'
import { sendWithRetry } from '../905/910117'
import { selectViewAction } from '../905/929976'
import { filePutAction, moveFileAction } from '../figma_app/78808'
import { setTeamOptimistThunk } from '../figma_app/240735'
import { trackFileCopyEvent, trackMultipleFileEvent } from '../figma_app/314264'
import { mapFileProperties } from '../figma_app/349248'
import { createAtomSetter } from '../figma_app/566371'
import { getDraftsSidebarString } from '../figma_app/633080'

interface FileRestoreParams {
  fileKeys: Record<string, any>
  userInitiated: boolean
}

interface FileMoveParams {
  files: Array<any>
  folderId: string
  isDraftsToMove?: boolean
  isMultiMove?: boolean
  restoreFiles?: boolean
  folderName?: string
  fromFileModal?: boolean
  onFinishCallback?: () => void
  name?: string
}

interface BatchRestoreResponse {
  status: number
  response: string
  meta?: {
    success: Record<string, any>
    team?: any
  }
  message?: string
}

interface FileUpdateData {
  File: Record<string, any>
}

/**
 * Handles restoration of trashed files with optimistic updates
 * Original name: $$E2
 */
export const handleRestoreTrashedFiles = createOptimistThunk((store: any, params: FileRestoreParams) => {
  // Handle non-user initiated restores immediately
  if (!params.userInitiated) {
    store.dispatch(restoreTrashedFilesAction(params))
    return Promise.resolve()
  }

  const state = store.getState()
  const fileKeys = Object.keys(params.fileKeys)

  // Send restore request
  const restoreRequest = sendWithRetry.post('/api/files_batch/restore', {
    files: fileKeys.map(key => ({ key })),
    batch_fail_on_file_limit: true,
  })

  // Check if restoring a single branch
  let isRestoringBranch = false
  if (fileKeys.length === 1) {
    const firstFileKey = fileKeys[0]
    const file = params.fileKeys[firstFileKey]
    if (file && isBranch(file)) {
      isRestoringBranch = true
    }
  }

  // Track the restore event
  trackFileCopyEvent('File Restored', fileKeys, store.getState())

  // Dispatch optimistic action
  const optimistTransaction = store.optimisticDispatch(restoreTrashedFilesAction(params))

  restoreRequest.then((response: BatchRestoreResponse) => {
    // Handle partial success (status 207)
    if (response.status === 207) {
      optimistTransaction.revert()

      try {
        const parsedResponse = JSON.parse(response.response)
        const successfulFiles = Object.keys(parsedResponse.meta.success)
        const trashedFiles = getTrashedFolderFilesById(successfulFiles, store.getState())

        store.dispatch(handleRestoreTrashedFilesHelper({
          fileKeys: trashedFiles,
          userInitiated: false,
        }))
        store.dispatch(FlashActions.error(parsedResponse.message))
      }
      catch  {
        // Handle parsing errors with appropriate error messages
        if (isRestoringBranch) {
          store.dispatch(FlashActions.error(getI18nString('collaboration.branching.error_restoring_branches', {
            branchCount: 1,
          })))
        }
        else {
          store.dispatch(FlashActions.error(getI18nString('file_browser.file_browser_actions.file_restore_error')))
        }
      }
    }
    else {
      // Handle full success
      let successMessage: string
      let showButtonAction: { text: string, action: () => void } | undefined

      // Determine success message based on file type
      successMessage = isRestoringBranch
        ? getI18nString('file_browser.file_browser_actions.branch_restored')
        : getI18nString('file_browser.file_browser_actions.files_restored_success', {
          numFiles: fileKeys.length,
        })

      // Check if all files are in the same folder to show "Show in folder" button
      let commonFolderId: string | null = null
      let allInSameFolder = true

      for (const fileKey of fileKeys) {
        if (commonFolderId === null) {
          commonFolderId = state.fileByKey[fileKey].folder_id
        }
        else if (commonFolderId !== state.fileByKey[fileKey].folder_id) {
          allInSameFolder = false
          break
        }
      }

      // Create show in folder button if applicable
      if (allInSameFolder && !isRestoringBranch) {
        const currentView = store.getState().selectedView
        const shouldShowButton = !(currentView && currentView.view === 'folder' && currentView.folderId === commonFolderId)

        if (shouldShowButton && commonFolderId != null) {
          showButtonAction = {
            text: `Show in ${state.user?.drafts_folder_id === commonFolderId ? getDraftsSidebarString() : 'project'}`,
            action: () => {
              store.dispatch(selectViewAction({
                view: 'folder',
                folderId: commonFolderId!,
              }))
              store.dispatch(VisualBellActions.dequeue({}))
            },
          }
        }
      }

      // Show success notification
      store.dispatch(VisualBellActions.enqueue({
        type: 'file_restored',
        message: successMessage,
        button: showButtonAction,
      }))

      // Update file trashed status optimistically
      const fileUpdates: FileUpdateData = fileKeys.reduce((acc, fileKey) => ({
        File: {
          ...acc.File,
          [fileKey]: {
            isTrashed: false,
            trashedAt: null,
          },
        },
      }), { File: {} })

      optimistTransaction.commit()
      getCurrentLiveGraphClient()?.optimisticallyUpdate(fileUpdates, restoreRequest)
    }
  }).catch(({ response }: { response: string }) => {
    // Handle request errors
    try {
      const parsedError = JSON.parse(response)
      store.dispatch(FlashActions.error(parsedError.message))
    }
    catch  {
      store.dispatch(FlashActions.error(getI18nString('file_browser.file_browser_actions.file_restore_error')))
    }
    optimistTransaction.revert()
  })

  return restoreRequest
})

/**
 * Helper function for restoring trashed files
 * Original name: $$x1
 */
export const handleRestoreTrashedFilesHelper = createOptimistThunk((store: any, params: FileRestoreParams) => {
  createAtomSetter(restoreTrashedFilesMutation)(params)
  store.dispatch(restoreRecentPrototype({
    fileKeys: Object.keys(params.fileKeys),
  }))
})

/**
 * Handles moving files between folders with optimistic updates
 * Original name: S
 */
export const handleMoveFilesMutation = liveStoreInstance.Mutation((params: any, {
  objects: objectStore,
  livegraphClient,
}: { objects: any, livegraphClient: any }) => {
  const {
    files,
    folderId,
    isDraftsToMove,
    isMultiMove,
    restoreFiles,
  } = params

  // Update folder IDs in the object store
  files.forEach((file: any) => {
    objectStore.File.update(file.key, (fileData: any) => {
      fileData.folder_id = folderId
    })
  })

  // Send move request
  const moveRequest = sendWithRetry.put('/api/files_batch', {
    files: files.map((file: any) => ({
      key: file.key,
      folder_id: folderId,
      drafts_to_move: isDraftsToMove,
      is_multi_move: isMultiMove,
      restore_files: restoreFiles,
    })),
  })

  // Prepare optimistic updates
  const optimisticUpdates: FileUpdateData = files.reduce((acc, file) => {
    const mappedProperties = mapFileProperties({
      ...file,
      folder_id: folderId,
    }, file.key)

    if (mappedProperties) {
      acc.File = {
        ...acc.File,
        ...mappedProperties.File,
      }
    }
    return acc
  }, { File: {} })

  // Apply optimistic updates
  livegraphClient.optimisticallyUpdate(optimisticUpdates, moveRequest)
  return moveRequest
})

/**
 * Main function for moving files with error handling
 * Original name: $$w0
 */
export const handleMoveFiles = createOptimistThunk(async (store: any, params: FileMoveParams) => {
  const { files } = params

  if (files.length === 0) {
    return Promise.resolve()
  }

  const folderId = params.folderId
  const trackingData = {
    newFileFolderId: [folderId],
    newFileTeamId: [store.getState().folders[folderId]?.team_id],
  }

  // Track the move event
  trackMultipleFileEvent('File Moved', files, trackingData)

  // Execute the move operation
  const moveOperation = createAtomSetter(handleMoveFilesMutation)({
    files,
    isDraftsToMove: params.isDraftsToMove,
    isMultiMove: params.isMultiMove,
    folderId,
    restoreFiles: params.restoreFiles,
  })

  // Handle successful move
  moveOperation.then((result: { data: BatchRestoreResponse }) => {
    const response = result.data
    const successfulFiles = response && response.meta && response.meta.success || {}

    // Update files in store
    for (const fileKey in successfulFiles) {
      store.dispatch(filePutAction({
        file: successfulFiles[fileKey],
      }))
    }

    // Update team if provided
    const teamData = response?.meta?.team
    if (teamData) {
      store.dispatch(setTeamOptimistThunk({
        team: teamData,
        userInitiated: false,
      }))
    }

    // Dispatch move completion actions
    store.dispatch(moveFileThunk({
      folderId: params.folderId,
      name: params.files[0].name,
      folderName: params.folderName,
      fromFileModal: params.fromFileModal,
      onFinishCallback: params.onFinishCallback,
    }))
  })

  // Handle errors with fallback
  const moveAction = moveFileAction(params)
  return await handleOptimistTransactionWithError({
    requestPromise: moveOperation,
    fallbackError: getI18nString('file_browser.file_browser_actions.file_processing_error'),
    store,
    next: store.dispatch,
    action: moveAction,
  })
})

export const Cy = handleMoveFiles
export const Rh = handleRestoreTrashedFilesHelper
export const xy = handleRestoreTrashedFiles
