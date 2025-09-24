import { createNoOpValidator } from "../figma_app/181241";

// Define interfaces for method parameters to add type safety
interface PostUserSubscriptionParams {
  libraryKey: string;
  subscriptions: any; // Replace 'any' with proper type if known
}

interface PostFileSubscriptionParams {
  libraryKey: string;
  fileKey: string;
  isSubscribed: boolean;
}

interface PostTeamSubscriptionParams {
  libraryKey: string;
  subscriptions: any; // Replace 'any' with proper type if known
  teamId: string;
}

interface PostWorkspaceSubscriptionParams {
  libraryKey: string;
  subscriptions: any; // Replace 'any' with proper type if known
  workspaceId: string;
}

interface DeleteWorkspaceSubscriptionParams {
  libraryKey: string;
  workspaceId: string;
}

interface PostOrgSubscriptionParams {
  libraryKey: string;
  subscriptions: any; // Replace 'any' with proper type if known
  orgId: string;
}

/**
 * Class for handling library subscription operations.
 * Original class was anonymous and exported as $$r0.
 */
class LibrarySubscriptionHandler {
  PostUserSubscriptionByLibraryKeyValidator: any;
  PostFileSubscriptionByLibraryKeyValidator: any;
  PostTeamSubscriptionByLibraryKeyValidator: any;
  PostWorkspaceSubscriptionByLibraryKeyValidator: any;
  DeleteWorkspaceSubscriptionByLibraryKeyValidator: any;
  PostOrgSubscriptionByLibraryKeyValidator: any;

  constructor() {
    this.PostUserSubscriptionByLibraryKeyValidator = createNoOpValidator();
    this.PostFileSubscriptionByLibraryKeyValidator = createNoOpValidator();
    this.PostTeamSubscriptionByLibraryKeyValidator = createNoOpValidator();
    this.PostWorkspaceSubscriptionByLibraryKeyValidator = createNoOpValidator();
    this.DeleteWorkspaceSubscriptionByLibraryKeyValidator = createNoOpValidator();
    this.PostOrgSubscriptionByLibraryKeyValidator = createNoOpValidator();
  }

  /**
   * Posts user subscription by library key.
   * Original method: postUserSubscriptionByLibraryKey
   */
  async postUserSubscriptionByLibraryKey(params: PostUserSubscriptionParams) {
    const { libraryKey: e, subscriptions: t } = params;
    return this.PostUserSubscriptionByLibraryKeyValidator.validate(async ({ xr: i }: { xr: any }) =>
      await i.post(`/api/library_user_subscriptions/${e}`, {
        subscriptions: t,
        is_library_key: true
      })
    );
  }

  /**
   * Posts file subscription by library key.
   * Original method: postFileSubscriptionByLibraryKey
   */
  async postFileSubscriptionByLibraryKey(params: PostFileSubscriptionParams) {
    const { libraryKey: e, fileKey: t, isSubscribed: i } = params;
    return this.PostFileSubscriptionByLibraryKeyValidator.validate(async ({ xr: n }: { xr: any }) =>
      await n.post(`/api/library_file_subscriptions/${t}/${e}`, {
        is_subscribed: i,
        is_library_key: true
      })
    );
  }

  /**
   * Posts team subscription by library key.
   * Original method: postTeamSubscriptionByLibraryKey
   */
  async postTeamSubscriptionByLibraryKey(params: PostTeamSubscriptionParams) {
    const { libraryKey: e, subscriptions: t, teamId: i } = params;
    return this.PostTeamSubscriptionByLibraryKeyValidator.validate(async ({ xr: n }: { xr: any }) =>
      await n.post(`/api/library_team_subscriptions/${e}`, {
        subscriptions: t,
        team_id: i,
        is_library_key: true
      })
    );
  }

  /**
   * Posts workspace subscription by library key.
   * Original method: postWorkspaceSubscriptionByLibraryKey
   */
  async postWorkspaceSubscriptionByLibraryKey(params: PostWorkspaceSubscriptionParams) {
    const { libraryKey: e, subscriptions: t, workspaceId: i } = params;
    return this.PostWorkspaceSubscriptionByLibraryKeyValidator.validate(async ({ xr: n }: { xr: any }) =>
      await n.post(`/api/library_workspace_subscriptions/${e}`, {
        subscriptions: t,
        workspace_id: i,
        is_library_key: true
      })
    );
  }

  /**
   * Deletes workspace subscription by library key.
   * Original method: deleteWorkspaceSubscriptionByLibraryKey
   */
  async deleteWorkspaceSubscriptionByLibraryKey(params: DeleteWorkspaceSubscriptionParams) {
    const { libraryKey: e, workspaceId: t } = params;
    return this.DeleteWorkspaceSubscriptionByLibraryKeyValidator.validate(async ({ xr: i }: { xr: any }) =>
      await i.del(`/api/library_workspace_subscriptions/${e}`, {
        workspace_id: t,
        is_library_key: true
      })
    );
  }

  /**
   * Posts org subscription by library key.
   * Original method: postOrgSubscriptionByLibraryKey
   */
  async postOrgSubscriptionByLibraryKey(params: PostOrgSubscriptionParams) {
    const { libraryKey: e, subscriptions: t, orgId: i } = params;
    return this.PostOrgSubscriptionByLibraryKeyValidator.validate(async ({ xr: n }: { xr: any }) =>
      await n.post(`/api/library_org_subscriptions/${e}`, {
        subscriptions: t,
        org_id: i,
        is_library_key: true
      })
    );
  }
}

// Instantiate the handler
export const librarySubscriptionHandler = new LibrarySubscriptionHandler();

// Export the instance with a meaningful name, matching the refactored class
export const A = librarySubscriptionHandler;
