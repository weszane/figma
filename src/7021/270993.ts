import { t as _$$t } from "../905/303541";
import { F as _$$F } from "../905/302958";
import { Eh } from "../figma_app/617654";
import { u } from "../905/774364";
import { nF } from "../905/350402";
import { yJ } from "../figma_app/990058";
let $$d1 = nF(async (e, t) => {
  let {
    currentUserOrgId
  } = e.getState();
  if (!currentUserOrgId) throw Error("currentOrgId not set while attempting to self-assign workspace");
  await Eh.selfAssignWorkspace({
    orgId: currentUserOrgId,
    workspaceId: t.workspace.id
  }).then(a => {
    let n;
    let o = t.workspace.name;
    o && (n = _$$t("workspace.you_joined_the_workspace", {
      groupName: o
    }), e.dispatch(_$$F.enqueue({
      type: "self-assign-workspace",
      message: n
    })));
    e.dispatch(yJ({
      orgUser: a.data.meta,
      userInitiated: !1
    }));
  }).catch(t => {
    e.dispatch(_$$F.enqueue({
      type: "self-assign-workspace",
      message: t.data?.message || _$$t("workspace.an_error_occurred_while_submitting_your_workspace_selection"),
      error: !0
    }));
  });
});
let $$c0 = nF(async (e, t) => {
  try {
    let a = t.workspace.defaultTeams?.map(e => e.teamId) || [];
    let n = a.filter(e => !t.teamIds.includes(e));
    let r = t.teamIds.filter(e => !a.includes(e));
    n.length && (await u.deleteDefaultTeams({
      workspaceId: t.workspace.id,
      removedTeamIds: n
    }));
    r.length && (await u.addDefaultTeams({
      workspaceId: t.workspace.id,
      addedTeamIds: r
    }));
    e.dispatch(_$$F.enqueue({
      type: "workspace-default-teams-set",
      message: _$$t("workspace.succesfully_updated_default_teams")
    }));
  } catch (t) {
    e.dispatch(_$$F.enqueue({
      type: "workspace-default-teams-set",
      message: t.data?.message || _$$t("workspace.failed_to_update_default_teams_please_try_again"),
      error: !0
    }));
  }
});
export const F = $$c0;
export const x = $$d1; 
