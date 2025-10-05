import { resolveMessage } from "../905/231762"
import { VisualBellActions } from "../905/302958"
import { getI18nString } from "../905/303541"
import { createOptimistAction } from "../905/350402"
import { createOptimistCommitAction, createOptimistRevertAction } from "../905/676456"
import { sendWithRetry } from "../905/910117"



interface RestoreResponseData {
  meta?: {
    success?: Record<string, boolean>
  }
  message?: string
}

/**
 * Action creator for restoring repositories with optimistic updates
 * Original name: $$l0
 */
export const restoreRepositories = createOptimistAction(
  "REPO_RESTORE",
  (
    dispatchContext,
    payload,
    meta,
  ) => {
    const { reposById, userInitiated } = payload
    const { optimistId } = meta

    // Only proceed with API call if initiated by user
    if (!userInitiated)
      return

    sendWithRetry
      .post("/api/repos_batch/restore", {
        repo_ids: Object.keys(reposById),
      })
      .then((response) => {
        // Handle partial success scenario
        if (response.status === 207) {
          dispatchContext.dispatch(createOptimistRevertAction(optimistId))

          try {
            // Extract successfully restored repo IDs
            const successfulRepoIds = Object.keys(response.data?.meta?.success || {})
            const successfulReposById: Record<string, unknown> = {}

            successfulRepoIds.forEach((repoId) => {
              successfulReposById[repoId] = reposById[repoId]
            })

            // Re-dispatch action for successful repos without user initiation
            dispatchContext.dispatch(restoreRepositories({
              reposById: successfulReposById,
              userInitiated: false,
            }))

            // Show error message for failed repos
            dispatchContext.dispatch(VisualBellActions.enqueue({
              message: resolveMessage(
                response,
                (response.data as RestoreResponseData).message || getI18nString("collaboration.branching.an_error_occurred_while_restoring_these_files"),
              ),
              error: true,
            }))
          }
          catch {
            dispatchContext.dispatch(VisualBellActions.enqueue({
              message: getI18nString("collaboration.branching.an_error_occurred_while_restoring_these_files"),
              error: true,
            }))
          }
        }
        // Handle complete success scenario
        else {
          const successMessage = getI18nString("collaboration.branching.files_restored")
          dispatchContext.dispatch(createOptimistCommitAction(optimistId))
          dispatchContext.dispatch(VisualBellActions.enqueue({
            message: successMessage,
          }))
        }
      })
      .catch((error) => {
        // Handle network or other errors
        dispatchContext.dispatch(createOptimistRevertAction(optimistId))
        dispatchContext.dispatch(VisualBellActions.enqueue({
          message: resolveMessage(
            error,
            error.data?.message || getI18nString("collaboration.branching.an_error_occurred_while_restoring_these_files"),
          ),
          error: true,
        }))
      })
  },
)

// Export alias for backward compatibility
export const i = restoreRepositories
