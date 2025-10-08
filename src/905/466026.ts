import { createActionCreator } from "../905/73481"
import { resolveMessage } from "../905/231762"
import { VisualBellActions } from "../905/302958"
import { getI18nString } from "../905/303541"
import { createOptimistAction, createOptimistThunk } from "../905/350402"
import { createOptimistCommitAction, createOptimistRevertAction } from "../905/676456"
import { getCurrentLiveGraphClient } from "../905/761735"
import { sendWithRetry } from "../905/910117"
import { isDevEnvironment } from "../figma_app/169182"
import { mapFileAndRepoProperties, mapFileLinkExpirationConfig, mapFileLinkExpirationConfigOptimistic } from "../figma_app/349248"

// Origin: /Users/allen/github/fig/src/905/466026.ts
// Refactored: Renamed variables, added TypeScript types/interfaces, simplified logic, added comments, improved readability.

// --- Type Definitions ---

// Represents a repository object.
export interface Repo {
  id: string;
  name: string;
  // Add other repo properties as needed.
}

// Represents a user object.
export interface User {
  id: string;
  // Add other user properties as needed.
}

interface PutRepoPayload {
  repo: Repo;
  userInitiated: boolean;
}



// --- Action Creators ---

export const setSelectedBranch = createActionCreator("REPO_SET_SELECTED_BRANCH");

export const putRepoPermissions = createActionCreator("REPO_PERMISSIONS_PUT");
export const batchPutRepos = createActionCreator("REPO_BATCH_PUT");
export const batchPutReposInSameFolder = createActionCreator("REPO_BATCH_PUT_IN_SAME_FOLDER");
export const postRepo = createActionCreator("REPO_POST");
export const postRecentBranch = createActionCreator("RECENT_BRANCH_POST");
export const deleteRecentRepo = createActionCreator("RECENT_REPOS_DELETE");
export const putRecentRepo = createActionCreator("RECENT_REPO_PUT");
export const initRecentRepos = createActionCreator("RECENT_REPOS_INIT");
export const postRecentRepo = createActionCreator("RECENT_REPO_POST");

// --- Optimist Thunks & Actions ---

/**
 * Optimistically sets the selected branch for a repo.
 */
export const setSelectedBranchOptimist = createOptimistThunk(
  ({dispatch}, { repo, name }: { repo: Repo; name: string }) => {
    dispatch(putRepoOptimist({
      repo: {
        id: repo.id,
        name,
      },
      userInitiated: true,
    }));
  }
);

/**
 * Optimistically updates repo properties and handles link expiration config.
 * Handles success/error callbacks and updates the live graph client.
 */
export const updateRepoOptimist = createOptimistThunk(
  (
    {dispatch},
    {
      repo,
      onError,
      onSuccess,
      linkExpirationConfigId,
      currentUser,
    }: {
      repo: Repo;
      onError?: () => void;
      onSuccess?: () => void;
      linkExpirationConfigId?: string;
      currentUser?: User;
    }
  ) => {
    // Send update request with retry logic.
    const updatePromise = sendWithRetry.put(`/api/repo/${repo.id}`, repo)
      .then(() => {
        onSuccess?.();
      })
      .catch((error) => {
        onError?.();
        dispatch(VisualBellActions.enqueue({
          message: getI18nString("collaboration.branching.an_error_occurred_while_updating_this_file"),
          error: true,
        }));
        if (isDevEnvironment()) {
          throw error;
        }
      });

    // Prepare optimistic update objects.
    const updatedProperties = {
      ...mapFileAndRepoProperties(repo),
      ...mapFileLinkExpirationConfig(repo, linkExpirationConfigId, currentUser),
    };
    const optimisticConfig = mapFileLinkExpirationConfigOptimistic(repo, linkExpirationConfigId, currentUser);

    // Optimistically update live graph client if there are properties.
    if (Object.keys(updatedProperties).length > 0) {
      getCurrentLiveGraphClient().optimisticallyUpdate(updatedProperties, updatePromise);
    }
    // Optimistically create config if present.
    if (optimisticConfig) {
      getCurrentLiveGraphClient().optimisticallyCreate(optimisticConfig, updatePromise);
    }
  }
);

/**
 * Optimist action for putting a repo.
 * Commits or reverts based on request result, and shows error messages.
 */
export const putRepoOptimist = createOptimistAction<PutRepoPayload, any>(
  "REPO_PUT",
  async ({dispatch}, { repo, userInitiated }, { optimistId }) => {
    if (userInitiated) {
      try {
        await sendWithRetry.put(`/api/repo/${repo.id}`, repo);
        dispatch(createOptimistCommitAction(optimistId));
      } catch (error: any) {
        dispatch(createOptimistRevertAction(optimistId));
        dispatch(VisualBellActions.enqueue({
          message: resolveMessage(error, error.data?.message || getI18nString("collaboration.branching.an_error_occurred_while_updating_this_file")),
          error: true,
        }));
      }
    }
  }
);

// --- Exported Aliases (for compatibility with original code) ---

export const CN = putRepoPermissions;
export const ER = postRecentBranch;
export const NN = setSelectedBranchOptimist;
export const bE = postRepo;
export const iC = deleteRecentRepo;
export const iE = postRecentRepo;
export const kE = setSelectedBranch;
export const nF = initRecentRepos;
export const nK = putRecentRepo;
export const nX = batchPutReposInSameFolder;
export const og = updateRepoOptimist;
export const uo = batchPutRepos;
export const yJ = putRepoOptimist;

// --- Notes ---
// - Assumed types for Repo and User based on usage.
// - External dependencies (e.g., createActionCreator, sendWithRetry, VisualBellActions, etc.) must be available.
// - Improved variable naming and added comments for clarity.
// - Simplified logic and added type safety.
// - No performance issues detected, but error handling in dev environment throws exceptions.
