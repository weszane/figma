import { vh } from "../figma_app/181241";
export let $$r0 = new class {
  constructor() {
    this.PostUserSubscriptionByLibraryKeyValidator = vh();
    this.PostFileSubscriptionByLibraryKeyValidator = vh();
    this.PostTeamSubscriptionByLibraryKeyValidator = vh();
    this.PostWorkspaceSubscriptionByLibraryKeyValidator = vh();
    this.DeleteWorkspaceSubscriptionByLibraryKeyValidator = vh();
    this.PostOrgSubscriptionByLibraryKeyValidator = vh();
  }
  postUserSubscriptionByLibraryKey({
    libraryKey: e,
    subscriptions: t
  }) {
    return this.PostUserSubscriptionByLibraryKeyValidator.validate(async ({
      xr: i
    }) => await i.post(`/api/library_user_subscriptions/${e}`, {
      subscriptions: t,
      is_library_key: !0
    }));
  }
  postFileSubscriptionByLibraryKey({
    libraryKey: e,
    fileKey: t,
    isSubscribed: i
  }) {
    return this.PostFileSubscriptionByLibraryKeyValidator.validate(async ({
      xr: n
    }) => await n.post(`/api/library_file_subscriptions/${t}/${e}`, {
      is_subscribed: i,
      is_library_key: !0
    }));
  }
  postTeamSubscriptionByLibraryKey({
    libraryKey: e,
    subscriptions: t,
    teamId: i
  }) {
    return this.PostTeamSubscriptionByLibraryKeyValidator.validate(async ({
      xr: n
    }) => await n.post(`/api/library_team_subscriptions/${e}`, {
      subscriptions: t,
      team_id: i,
      is_library_key: !0
    }));
  }
  postWorkspaceSubscriptionByLibraryKey({
    libraryKey: e,
    subscriptions: t,
    workspaceId: i
  }) {
    return this.PostWorkspaceSubscriptionByLibraryKeyValidator.validate(async ({
      xr: n
    }) => await n.post(`/api/library_workspace_subscriptions/${e}`, {
      subscriptions: t,
      workspace_id: i,
      is_library_key: !0
    }));
  }
  deleteWorkspaceSubscriptionByLibraryKey({
    libraryKey: e,
    workspaceId: t
  }) {
    return this.DeleteWorkspaceSubscriptionByLibraryKeyValidator.validate(async ({
      xr: i
    }) => await i.del(`/api/library_workspace_subscriptions/${e}`, {
      workspace_id: t,
      is_library_key: !0
    }));
  }
  postOrgSubscriptionByLibraryKey({
    libraryKey: e,
    subscriptions: t,
    orgId: i
  }) {
    return this.PostOrgSubscriptionByLibraryKeyValidator.validate(async ({
      xr: n
    }) => await n.post(`/api/library_org_subscriptions/${e}`, {
      subscriptions: t,
      org_id: i,
      is_library_key: !0
    }));
  }
}();
export const A = $$r0;