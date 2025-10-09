import { createActionCreator } from "../905/73481"
import { hideModal, showModalHandler } from "../905/156213"
import { CustomCauseError } from "../905/194389"
import { waitForAnimationFrame } from "../905/236856"
import { VisualBellActions } from "../905/302958"
import { getI18nString } from "../905/303541"
import { abandonBranchingChanges, commitBranchingStagedChanges, enterMergeDetachedState, isJoined, waitForJoinStatus } from "../905/346794"
import { createOptimistThunk } from "../905/350402"
import { trackEventAnalytics } from "../905/449184"
import { getKeyByDirection, mapDirectionToGitReferenceType } from "../905/491806"
import { CPPEventType, SourceDirection } from "../905/535806"
import { my, RK } from "../905/561832"
import { VisualBellIcon } from "../905/576487"
import { ds, fA, FK, gf, Mt } from "../905/585030"
import { customHistory } from "../905/612521"
import { handleError, handleModalError } from "../905/760074"
import { getRequest, sendWithRetry } from "../905/910117"
import { selectViewAction } from "../905/929976"
import { DiffError, DiffManager } from "../905/985490"
import { FEditorType } from "../figma_app/53721"
import { fullscreenValue } from "../figma_app/455680"
import { setPropertiesPanelTab } from "../figma_app/741237"
import { AutosaveEventType, DesignWorkspace, GitReferenceType, Multiplayer, OperationResult, PreviewStage, SchemaJoinStatus } from "../figma_app/763686"
import { updateLocalLibraryItemsThunk } from "../figma_app/864378"
import { desktopAPIInstance } from "../figma_app/876459"

/**
 * Copies image usages before merging branches
 * @param fileKey - The key of the file to copy image usages for
 * @param dispatch - Redux dispatch function
 * @param direction - The source direction of the merge
 */
async function copyImageUsagesBeforeMerge(
  fileKey: string,
  dispatch: Fn,
  direction: SourceDirection,
): Promise<void> {
  try {
    await sendWithRetry.post(`/api/files/${fileKey}/copy_image_usages_before_merge`)
  }
  catch (error) {
    const customError = new CustomCauseError("Error creating image usages", {
      cause: error,
    })
    handleError(customError, CPPEventType.ON_MERGE, direction)
    dispatch(VisualBellActions.enqueue({
      message: getI18nString("collaboration.branching.error_creating_image_usages"),
      error: true,
    }))
  }
}

/**
 * Creates an error handler thunk for merge operations
 */
export const createMergeErrorHandler = createOptimistThunk(({ dispatch }, action) => {
  const message = action?.message || getI18nString("collaboration.branching.error_merging")
  dispatch(VisualBellActions.enqueue({
    message,
    type: "file-merge-submit",
    error: true,
  }))
})

/**
 * Handles committing merge operations
 */
export const commitMerge = createOptimistThunk(async ({ dispatch, getState }, action) => {
  const {
    mergeParams,
    checkpointDiff,
    pendingMessage,
    conflictResolutionDetails,
    user,
    branchModalTrackingId,
  } = action

  const openFile = getState().openFile
  const openFileKey = openFile?.key
  const gitReferenceType = mapDirectionToGitReferenceType(mergeParams.direction)

  // Hide modal and set tracking ID
  dispatch(hideModal())
  mergeParams.branchModalTrackingId = branchModalTrackingId

  // Validate open file exists
  if (!openFile) {
    dispatch(createMergeErrorHandler())
    dispatch(handleBranchModalExit({
      hideModal: false,
      mergeParams,
      userInitiated: false,
      reason: "commitMerge_failed_with_error",
      error: "missing openFile",
    }))
    handleError(new Error("commitMerge: missing openFile"), CPPEventType.ON_MERGE, mergeParams.direction)
    return
  }

  const targetFileKey = getKeyByDirection(mergeParams)

  // Set checkpoint keys
  mergeParams.toCheckpointKey = checkpointDiff.to_checkpoint_key
  mergeParams.fromCheckpointKey = checkpointDiff.from_checkpoint_key
  mergeParams.branchModalTrackingId = branchModalTrackingId

  // Handle file switching scenario
  if (targetFileKey !== openFileKey) {
    mergeParams.mergeOnFileOpen = true
    if (desktopAPIInstance) {
      mergeParams.checkpointDiffURL = checkpointDiff.signed_url
    }

    if (desktopAPIInstance) {
      dispatch(handleBranchModalExit({
        hideModal: false,
        mergeParams,
        userInitiated: false,
        reason: "switching_files_in_desktop",
      }))
    }
    else {
      await abandonBranchingChanges(false)
    }

    dispatch(selectViewAction({
      view: "fullscreen",
      fileKey: mergeParams.direction === SourceDirection.TO_SOURCE ? mergeParams.sourceKey : mergeParams.branchKey,
      editorType: FEditorType.Design,
      mergeParams,
    }))
  }
  else {
    // Handle same file merge
    dispatch(VisualBellActions.enqueue({
      message: pendingMessage,
      icon: VisualBellIcon.SPINNER,
      type: "file-merge-submit",
    }))

    dispatch(beginBranchMerge({}))

    if (mergeParams.direction === SourceDirection.TO_SOURCE) {
      gf(GitReferenceType.BRANCH, PreviewStage.STAGE)
    }

    const targetCheckpointKey = mergeParams.direction === SourceDirection.FROM_SOURCE ? checkpointDiff.to_checkpoint_key : null

    // Determine if all changes are picked from branch
    mergeParams.pickedAllFromBranch = (
      mergeParams.direction === SourceDirection.FROM_SOURCE
      && conflictResolutionDetails?.nonConflictingGroups === 0
      && conflictResolutionDetails?.mainPickGroups === 0
      && conflictResolutionDetails?.branchPickGroups > 0
    )

    try {
      const file = {
        key: openFile.key,
        file_repo_id: openFile.fileRepoId,
      }

      const diffProcessor = new FK({
        mergeParams,
        file,
        conflictResolutionDetails: conflictResolutionDetails || null,
      })

      const processedDiff = await fA(
        mergeParams,
        DiffManager.getDiffMigrationVersion(gitReferenceType),
        targetCheckpointKey,
        diffProcessor,
        checkpointDiff.key,
      )

      await handleCommitDiffResult(processedDiff, dispatch, mergeParams, user.id, diffProcessor)
      dispatch(updateLocalLibraryItemsThunk())
    }
    catch (error) {
      dispatch(createMergeErrorHandler())
      const mergeError = new CustomCauseError("Error committing merge", {
        cause: error,
      })
      handleError(mergeError, CPPEventType.ON_MERGE, mergeParams.direction)

      dispatch(handleBranchModalExit({
        userInitiated: false,
        reason: "commitMerge_failed_with_error",
        error: error.message,
        hideModal: false,
        mergeParams,
      }))
    }
  }
})

/**
 * Handles branch modal exit and analytics tracking
 */
export const handleBranchModalExit = createOptimistThunk(({ dispatch, getState }, action) => {
  if (action.hideModal) {
    dispatch(hideModal())
  }

  ds().then(() => {
    trackEventAnalytics("Branch Modal Exited", {
      direction: action.mergeParams.direction,
      branch_key: action.mergeParams.branchKey,
      source_key: action.mergeParams.sourceKey,
      branchModalTrackingId: action.mergeParams.branchModalTrackingId,
      userInitiated: action.userInitiated,
      reason: action.reason,
    })

    const canEdit = getState().openFile?.canEdit
    if (canEdit) {
      setPropertiesPanelTab(DesignWorkspace.DESIGN)
      fullscreenValue.triggerAction("enter-layout-mode")
    }
    else {
      setPropertiesPanelTab(DesignWorkspace.INSPECT)
      fullscreenValue.triggerAction("enter-preview-mode")
    }
  }).catch((error) => {
    const refreshError = new CustomCauseError("Refreshing due to error in abandonDiff", {
      cause: error,
    })
    handleModalError(refreshError)
    customHistory.reload("Merge cancelled")
  })
})

/**
 * Handles merge operations when file needs to be opened first
 */
export const handleMergeOnFileOpen = createOptimistThunk(async ({ dispatch, getState }, action) => {
  if (action.mergeParams.mergeOnFileOpen) {
    // Wait for animation frame and ensure connection
    await waitForAnimationFrame()
    if (!isJoined()) {
      Multiplayer.updateConnectionStateIfNeeded(true)
      await waitForJoinStatus(SchemaJoinStatus.JOINED)
    }

    dispatch(VisualBellActions.enqueue({
      message: getI18nString("collaboration.branching.merging"),
      icon: VisualBellIcon.SPINNER,
      type: "file-merge-submit",
    }))

    // Check if app model is read-only
    if (getState().mirror.appModel.isReadOnly) {
      handleError(
        new Error("mergeOnFileOpen: app model is in read only state"),
        CPPEventType.ON_MERGE,
        action.mergeParams.direction,
      )

      dispatch(createMergeErrorHandler({
        message: getI18nString("collaboration.branching.file_is_in_view_only_state_please_current_refresh_tab_and_try_again"),
      }))
      return
    }

    try {
      dispatch(beginBranchMerge({}))

      let migrationVersion = action.migrationVersion
      const gitReferenceType = mapDirectionToGitReferenceType(action.mergeParams.direction)

      // Handle checkpoint diff URL if present
      if (action.mergeParams.checkpointDiffURL) {
        const copyImageUsagesPromise = copyImageUsagesBeforeMerge(
          action.mergeParams.branchKey,
          dispatch,
          action.mergeParams.direction,
        )

        const fetchDiffPromise = getRequest(action.mergeParams.checkpointDiffURL, null, {
          responseType: "arraybuffer",
        }).then((response) => {
          const diffData = response.data
          const setResult = DiffManager.setDiff(
            gitReferenceType,
            diffData,
            action.mergeParams.sourceKey,
            action.mergeParams.branchKey,
            -1,
          )

          if (setResult === OperationResult.VERSION_MISMATCH) {
            migrationVersion = DiffManager.getDiffMigrationVersion(gitReferenceType)
          }
        })

        await Promise.all([copyImageUsagesPromise, fetchDiffPromise])
      }
      else {
        migrationVersion = DiffManager.getDiffMigrationVersion(gitReferenceType)
      }

      // Track incremental merge analytics
      try {
        const guids = DiffManager.getAllGuids(gitReferenceType, action.mergeParams.branchModalTrackingId || 0)

        trackEventAnalytics("Branching Incremental To Source Merge", {
          isIncremental: Multiplayer.isIncrementalSession(),
          isValidatingIncremental: Multiplayer.isValidatingIncremental(),
          guidCount: guids.length,
          branchKey: action.mergeParams.branchKey,
          sourceKey: action.mergeParams.sourceKey,
        }, {
          forwardToDatadog: true,
        })

        await Mt(guids, AutosaveEventType.BRANCHING_MERGE_TO_MAIN, {
          branchKey: action.mergeParams.branchKey,
          sourceKey: action.mergeParams.sourceKey,
          branchModalTrackingId: action.mergeParams.branchModalTrackingId || 0,
        })
      }
      catch (error) {
        if (Multiplayer.isValidatingIncremental()) {
          handleError(
            new CustomCauseError("Incremental loading validation failed", { cause: error }),
            CPPEventType.ON_MERGE,
            action.mergeParams.direction,
          )
        }
        else {
          throw error
        }
      }

      await enterMergeDetachedState()
      gf(gitReferenceType, PreviewStage.STAGE)

      const diffProcessor = new FK({
        mergeParams: action.mergeParams,
        file: action.editingFile,
        conflictResolutionDetails: null,
      })

      const processedDiff = await fA(
        action.mergeParams,
        migrationVersion,
        null,
        diffProcessor,
        null,
      )

      await handleCommitDiffResult(processedDiff, dispatch, action.mergeParams, action.user.id, diffProcessor)
    }
    catch (error) {
      if (error instanceof DiffError) {
        dispatch(createMergeErrorHandler({
          message: getI18nString("collaboration.branching.couldn_t_proceed_with_merge_please_accept_updates_from_main_before_merging_your_branch"),
        }))
        DiffManager.clearDiffs()
      }
      else {
        dispatch(createMergeErrorHandler())
        dispatch(handleBranchModalExit({
          hideModal: false,
          mergeParams: action.mergeParams,
          userInitiated: false,
          reason: "mergeOnFileOpen_failed_with_error",
          error: error.message,
        }))
      }

      handleError(
        new CustomCauseError("merge: Failed to commit diff", { cause: error }),
        CPPEventType.ON_MERGE,
        action.mergeParams.direction,
      )

      dispatch(handleBranchModalExit({
        hideModal: false,
        mergeParams: action.mergeParams,
        userInitiated: false,
        reason: "handleCommitDiffResult_failed_with_error",
        error: error.message,
      }))
    }
  }
})

/**
 * Handles the result of committing a diff
 */
export async function handleCommitDiffResult(response: any, dispatch: Fn, mergeParams: any, userId: string, diffProcessor: any = null): Promise<void> {
  if (!response)
    return

  switch (response.status) {
    case 200:
    case 201: {
      const fileMerge = response.data.meta.file_merge

      if (diffProcessor) {
        diffProcessor.commitEnd(null, fileMerge.id)
      }

      dispatch(setOpenFileMerge({
        userId,
        fileMergeId: fileMerge.id,
      }))

      try {
        await commitBranchingStagedChanges({
          fileMergeId: fileMerge.id,
          userId,
          allowEmptyMerge: mergeParams.direction === SourceDirection.FROM_SOURCE,
        })

        if (diffProcessor) {
          diffProcessor.commitSynced(fileMerge.id)
        }

        dispatch(handleBranchModalExit({
          hideModal: false,
          mergeParams,
          userInitiated: true,
          reason: "user_initiated_merge",
        }))

        dispatch(finishBranchMerge({}))
      }
      catch (error) {
        dispatch(setBranchMergeError({}))

        handleError(
          new CustomCauseError("merge: Failed to handle commit result", { cause: error }),
          CPPEventType.ON_MERGE,
          mergeParams.direction,
          { file_merge_id: response.data?.failure_info?.file_merge_id },
        )

        dispatch(VisualBellActions.clearAll())
        dispatch(showModalHandler({
          type: my,
          data: {
            view: RK.COULD_NOT_COMPLETE,
            mergeParams,
            failureInfo: { file_merge_id: fileMerge.id },
          },
        }))

        dispatch(handleBranchModalExit({
          hideModal: false,
          mergeParams,
          userInitiated: false,
          reason: "handleCommitDiffResult_failed_with_error",
          error: error.message,
        }))
      }
      break
    }

    case 400: {
      dispatch(setBranchMergeError({}))

      let errorMessage: string
      let modalView: any

      switch (response.data.reason) {
        case "merge_in_progress":
          errorMessage = "FileMerge already exists"
          modalView = RK.COULD_NOT_COMPLETE
          break
        case "branch_point_mismatch":
          errorMessage = "Branch point is stale"
          modalView = RK.STALE_BRANCH_POINT
          break
        case "branch_archived":
          errorMessage = "Branch is archived"
          modalView = RK.BRANCH_ARCHIVED
          break
        case "checkpoint_mismatch":
          errorMessage = "Checkpoints not associated with source/branch files"
          modalView = RK.COULD_NOT_START
          break
        default:
          errorMessage = `Unknown 400 reason from server while creating FileMerge: ${response.data.reason}`
          modalView = RK.COULD_NOT_START
      }

      handleError(
        new CustomCauseError("merge: received 400 error when opening transactional merge", {
          cause: new Error(errorMessage),
        }),
        CPPEventType.ON_MERGE,
        mergeParams.direction,
        { file_merge_id: response.data.failure_info?.file_merge_id || null },
      )

      dispatch(VisualBellActions.clearAll())
      dispatch(showModalHandler({
        type: my,
        data: {
          view: modalView,
          mergeParams,
          failureInfo: response.data.failure_info || {},
        },
      }))

      dispatch(handleBranchModalExit({
        hideModal: false,
        mergeParams,
        userInitiated: false,
        reason: "handleCommitDiffResult_failed_with_error",
        error: errorMessage,
      }))
      break
    }

    default: {
      dispatch(setBranchMergeError({}))

      handleError(
        new Error("merge: Encountered unknown server error while creating FileMerge record"),
        CPPEventType.ON_MERGE,
        mergeParams.direction,
        { file_merge_id: response.data?.failure_info?.file_merge_id },
      )

      dispatch(VisualBellActions.clearAll())
      dispatch(showModalHandler({
        type: my,
        data: {
          view: RK.COULD_NOT_START,
          mergeParams,
          failureInfo: {},
        },
      }))

      dispatch(handleBranchModalExit({
        hideModal: false,
        mergeParams,
        userInitiated: false,
        reason: "handleCommitDiffResult_failed_with_error",
        error: "unknown server error while creating FileMerge record",
      }))
    }
  }
}

// Action creators
export const clearOpenFileMerge = createActionCreator("CLEAR_OPEN_FILE_MERGE")
export const setOpenFileMerge = createActionCreator("SET_OPEN_FILE_MERGE")
export const setBranchMergeError = createActionCreator("SET_BRANCH_MERGE_ERROR")
export const finishBranchMerge = createActionCreator("FINISH_BRANCH_MERGE")
export const beginBranchMerge = createActionCreator("BEGIN_BRANCH_MERGE")

// Exported actions
export const Ad = handleMergeOnFileOpen
export const E = finishBranchMerge
export const Nu = setBranchMergeError
export const S2 = commitMerge
export const SL = beginBranchMerge
export const ie = clearOpenFileMerge
export const nM = setOpenFileMerge
export const ov = handleBranchModalExit
