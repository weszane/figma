import { createActionCreator } from "../905/73481"
import { resolveMessage } from "../905/231762"
import { VisualBellActions } from "../905/302958"
import { getI18nString } from "../905/303541"
import { createOptimistThunk } from "../905/350402"
import { putRepoOptimist } from "../905/466026"
import { moveFileThunk } from "../905/509236"
import { customHistory } from "../905/612521"
import { createOptimistCommitAction, createOptimistRevertAction } from "../905/676456"
import { handleOptimistTransaction } from "../905/842794"
import { sendWithRetry } from "../905/910117"
import { selectViewAction } from "../905/929976"
import { restoreTrashedFilesAndRepos } from "../figma_app/937413"

// Action creator for moving repositories
export const createRepoMoveAction = createActionCreator("REPO_MOVE")

// Thunk for moving repositories with optimistic updates
export const moveRepositoriesThunk = createOptimistThunk(
  async (
    thunkAPI,
    {
      repos,
      folderId,
      folderName,
      fromFileModal,
      onFinishCallback,
      isMultiMove,
      restoreFiles,
    }: {
      repos: Array<{ id: string, name: string }>
      folderId: string
      folderName: string
      fromFileModal: boolean
      onFinishCallback?: () => void
      isMultiMove: boolean
      restoreFiles: boolean
    },
  ) => {
    // Early return if no repos to move
    if (repos.length === 0) {
      return
    }

    // Prepare repository data for API request
    const repoUpdates = repos.map(repo => ({
      id: repo.id,
      folder_id: folderId,
    }))

    // Create a map of repo IDs to folder IDs for tracking
    const repoFolderMap: Record<string, string> = {}
    for (const { id, folder_id } of repoUpdates) {
      repoFolderMap[id] = folder_id
    }

    // Send batch update request
    const apiRequest = sendWithRetry.put("/api/repos_batch", {
      repos: repoUpdates,
      is_multi_move: isMultiMove,
      restore_files: restoreFiles,
    })

    try {
      // Handle optimistic transaction
      const response = await handleOptimistTransaction(
        apiRequest,
        thunkAPI.dispatch,
        createRepoMoveAction({
          repos,
          folderId,
        }),
      )

      // Process successful updates
      const successfulRepos = response.data.meta?.success || {}
      for (const repoId in successfulRepos) {
        thunkAPI.dispatch(
          putRepoOptimist({
            repo: successfulRepos[repoId],
          }),
        )
      }

      // Dispatch move file thunk for UI updates
      thunkAPI.dispatch(
        moveFileThunk({
          folderId,
          folderName,
          name: repos[0].name,
          fromFileModal,
          onFinishCallback,
        }),
      )
    }
    catch (error: any) {
      // Handle errors with visual bell notification
      thunkAPI.dispatch(
        VisualBellActions.enqueue({
          message: resolveMessage(
            error,
            error.data?.message
            || getI18nString(
              "collaboration.branching.an_error_occurred_while_updating_this_file",
            ),
          ),
          error: true,
        }),
      )
    }
  },
)

// Helper function for deleting/trashing repositories
function deleteRepositoriesHelper(thunkAPI: any, repoIds: string[], isPermanentDelete: boolean, optimistId: any, userInitiated: boolean, fileKeys: string[] = []): void {
  if (!userInitiated)
    return

  sendWithRetry
    .del("/api/repos_batch", {
      repo_ids: repoIds,
      trash_repos: !isPermanentDelete,
    })
    .then(() => {
      // Determine success message based on deletion type
      const successMessage = isPermanentDelete
        ? getI18nString("collaboration.branching.files_permanently_deleted")
        : getI18nString("collaboration.branching.files_trashed")

      // Commit the optimistic action
      thunkAPI.dispatch(createOptimistCommitAction(optimistId))

      // Show success notification with undo option for non-permanent deletes
      thunkAPI.dispatch(
        VisualBellActions.enqueue({
          message: successMessage,
          button: isPermanentDelete
            ? undefined
            : {
                text: getI18nString("collaboration.branching.undo_delete"),
                action: () => {
                  thunkAPI.dispatch(
                    restoreTrashedFilesAndRepos({
                      repoIds,
                      fileKeys,
                    }),
                  )
                  thunkAPI.dispatch(VisualBellActions.dequeue({}))
                },
              },
        }),
      )
    })
    .catch((error: any) => {
      // Revert optimistic action on failure
      thunkAPI.dispatch(createOptimistRevertAction(optimistId))

      // Show error notification
      thunkAPI.dispatch(
        VisualBellActions.enqueue({
          message: resolveMessage(
            error,
            error.data?.message
            || getI18nString(
              "collaboration.branching.an_error_occurred_while_deleting_these_files",
            ),
          ),
          error: true,
        }),
      )
    })
}

// Action creator for deleting repositories (move to trash)
export const createRepoDeleteAction = createActionCreator("REPO_DELETE")

// Thunk for deleting repositories with optimistic updates
export const deleteRepositoriesThunk = createOptimistThunk(
  (
    thunkAPI,
    {
      reposById,
      userInitiated,
      fileKeys,
    }: {
      reposById: Record<string, any>
      userInitiated: boolean
      fileKeys?: string[]
    },
  ) => {
    // Dispatch optimistic action
    const { optimistId } = thunkAPI.optimisticDispatch(
      createRepoDeleteAction({
        reposById,
        userInitiated,
        fileKeys,
      }),
    )

    // Perform actual deletion
    deleteRepositoriesHelper(
      thunkAPI,
      Object.keys(reposById),
      false, // not permanent delete
      optimistId,
      userInitiated,
      fileKeys || [],
    )

    // Handle navigation after deletion
    const state = thunkAPI.getState()
    if (state.user) {
      const openFile = state.openFile
      if (openFile && openFile.fileRepoId && reposById[openFile.fileRepoId]) {
        thunkAPI.dispatch(
          selectViewAction({
            view: "recentsAndSharing",
          }),
        )
      }
    }
    else {
      customHistory.reload("Repo deleted")
    }
  },
)

// Action creator for permanently deleting repositories
export const createRepoDeleteForeverAction = createActionCreator("REPO_DELETE_FOREVER")

// Thunk for permanently deleting repositories with optimistic updates
export const deleteRepositoriesForeverThunk = createOptimistThunk(
  (
    thunkAPI,
    {
      repoIds,
      userInitiated,
    }: {
      repoIds: string[]
      userInitiated: boolean
    },
  ) => {
    // Dispatch optimistic action
    const { optimistId } = thunkAPI.optimisticDispatch(
      createRepoDeleteForeverAction({
        repoIds,
        userInitiated,
      }),
    )

    // Perform actual permanent deletion
    deleteRepositoriesHelper(
      thunkAPI,
      repoIds,
      true, // permanent delete
      optimistId,
      userInitiated,
    )
  },
)

// Export action creators and thunks with descriptive names
export const $B = createRepoDeleteForeverAction
export const Y4 = createRepoDeleteAction
export const YM = deleteRepositoriesForeverThunk
export const aL = createRepoMoveAction
export const hT = deleteRepositoriesThunk
export const mE = moveRepositoriesThunk
