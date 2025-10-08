import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { organizationAPIService } from "../figma_app/617654";
import { workspaceApiService } from "../905/774364";
import { createOptimistThunk } from "../905/350402";
import { updateOrgUserDescriptionAction } from "../figma_app/990058";
let $$d1 = createOptimistThunk(async (e, t) => {
  let {
    currentUserOrgId
  } = e.getState();
  if (!currentUserOrgId) throw Error("currentOrgId not set while attempting to self-assign workspace");
  await organizationAPIService.selfAssignWorkspace({
    orgId: currentUserOrgId,
    workspaceId: t.workspace.id
  }).then(a => {
    let n;
    let o = t.workspace.name;
    o && (n = getI18nString("workspace.you_joined_the_workspace", {
      groupName: o
    }), e.dispatch(VisualBellActions.enqueue({
      type: "self-assign-workspace",
      message: n
    })));
    e.dispatch(updateOrgUserDescriptionAction({
      orgUser: a.data.meta,
      userInitiated: !1
    }));
  }).catch(t => {
    e.dispatch(VisualBellActions.enqueue({
      type: "self-assign-workspace",
      message: t.data?.message || getI18nString("workspace.an_error_occurred_while_submitting_your_workspace_selection"),
      error: !0
    }));
  });
});
let $$c0 = createOptimistThunk(async (e, t) => {
  try {
    let a = t.workspace.defaultTeams?.map(e => e.teamId) || [];
    let n = a.filter(e => !t.teamIds.includes(e));
    let r = t.teamIds.filter(e => !a.includes(e));
    n.length && (await workspaceApiService.deleteDefaultTeams({
      workspaceId: t.workspace.id,
      removedTeamIds: n
    }));
    r.length && (await workspaceApiService.addDefaultTeams({
      workspaceId: t.workspace.id,
      addedTeamIds: r
    }));
    e.dispatch(VisualBellActions.enqueue({
      type: "workspace-default-teams-set",
      message: getI18nString("workspace.succesfully_updated_default_teams")
    }));
  } catch (t) {
    e.dispatch(VisualBellActions.enqueue({
      type: "workspace-default-teams-set",
      message: t.data?.message || getI18nString("workspace.failed_to_update_default_teams_please_try_again"),
      error: !0
    }));
  }
});
export const F = $$c0;
export const x = $$d1;