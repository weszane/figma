import { useMemo } from "react";
import { sortByPropertyWithOptions } from "../figma_app/656233";
import { resourceUtils } from "../905/989992";
import { useSubscription } from "../figma_app/288654";
import { createLoadedState } from "../905/723791";
import { FUserRoleType } from "../figma_app/191312";
import { WorkspacesCanAdminView, CurrentUserAssignedWorkspaceView, WorkspacePageView, OrgHasWorkspacesView, CanCreateTeamView } from "../figma_app/43951";
import { TeamCreationControls } from "../figma_app/482728";
import { UNASSIGNED } from "../905/247093";
export function $$p2(e) {
  let t = useSubscription(WorkspacesCanAdminView, {
    orgId: e
  });
  return useMemo(() => {
    if ("loaded" === t.status) {
      let e = (t.data?.org?.workspaces ?? []).filter(e => e.canAdmin);
      sortByPropertyWithOptions(e, "name");
      return createLoadedState(e);
    }
    return t;
  }, [t]);
}
export function $$_6(e) {
  let t = e?.baseOrgUser?.workspaceUsers;
  let r = t?.find(e => e.isMainWorkspace);
  return r?.workspaceId ?? null;
}
export function $$h0(e) {
  let t = useSubscription(CurrentUserAssignedWorkspaceView, {
    orgId: e
  });
  return resourceUtils.useTransform(t, e => $$_6(e.currentUser));
}
export function $$m3(e, t) {
  let r = useSubscription(WorkspacePageView, {
    orgId: e ?? "",
    workspaceId: t ?? ""
  }, {
    enabled: !!e && !!t
  });
  return null === t ? createLoadedState(UNASSIGNED) : r.transform(e => e.workspace);
}
export function $$g4(e) {
  return (e?.workspaces?.length || 0) > 0 && !!e?.bigmaEnabledAt;
}
export function $$f5(e) {
  let t = useSubscription(OrgHasWorkspacesView, {
    orgId: e
  });
  return resourceUtils.useTransform(t, e => $$g4(e.org));
}
export var $$E7 = (e => (e[e.IS_GUEST = 1] = "IS_GUEST", e[e.WRONG_WORKSPACE = 2] = "WRONG_WORKSPACE", e[e.TEAM_CREATION_CONTROL = 3] = "TEAM_CREATION_CONTROL", e[e.LG_LOADING = 4] = "LG_LOADING", e))($$E7 || {});
export function $$y1(e, t) {
  let r = useSubscription(CanCreateTeamView, {
    orgId: e?.id ?? null
  });
  let {
    permission,
    workspaceMember,
    canCreateTeamInWorkspace,
    teamCreationControls,
    loading
  } = useMemo(() => {
    if ("loaded" !== r.status) return {
      permission: FUserRoleType.GUEST,
      workspaceMember: null,
      canCreateTeamInWorkspace: !1,
      loading: !0
    };
    let e = r.data?.currentUser?.baseOrgUser;
    let n = e?.permission;
    return {
      permission: n,
      workspaceMember: e?.workspaceUsers?.find(e => e.isMainWorkspace),
      canCreateTeamInWorkspace: !!r.data?.org?.workspaces?.find(e => e.canCreateTeam && e.id === t),
      teamCreationControls: r.data?.org?.orgSharedSetting?.teamCreationControls,
      loading: !1
    };
  }, [r, t]);
  if (loading) return {
    canCreateTeam: !1,
    cannotCreateTeamReason: 4
  };
  let _ = teamCreationControls === TeamCreationControls.TEAM_CREATION_CONTROLS_ADMIN_ONLY;
  return permission === FUserRoleType.GUEST ? {
    canCreateTeam: !1,
    cannotCreateTeamReason: 1
  } : permission === FUserRoleType.ADMIN ? {
    canCreateTeam: !0,
    cannotCreateTeamReason: null
  } : permission !== FUserRoleType.MEMBER ? {
    canCreateTeam: !1,
    cannotCreateTeamReason: null
  } : t ? canCreateTeamInWorkspace ? {
    canCreateTeam: !0,
    cannotCreateTeamReason: null
  } : workspaceMember?.workspaceId !== t ? {
    canCreateTeam: !1,
    cannotCreateTeamReason: 2
  } : _ ? {
    canCreateTeam: !1,
    cannotCreateTeamReason: 3
  } : {
    canCreateTeam: !1,
    cannotCreateTeamReason: null
  } : workspaceMember ? {
    canCreateTeam: !1,
    cannotCreateTeamReason: 2
  } : _ ? {
    canCreateTeam: !1,
    cannotCreateTeamReason: 3
  } : {
    canCreateTeam: !0,
    cannotCreateTeamReason: null
  };
}
export const Au = $$h0;
export const LM = $$y1;
export const NJ = $$p2;
export const P = $$m3;
export const Zr = $$g4;
export const c4 = $$f5;
export const eO = $$_6;
export const z4 = $$E7;