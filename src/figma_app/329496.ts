import { useState, useCallback, useEffect } from "react";
import { isSuccess, isFailure } from "../figma_app/851625";
import { useAsyncWithReset } from "../905/931050";
import { createLoadingState, createLoadedState, createErrorState } from "../905/723791";
import { getI18nString } from "../905/303541";
import { UNASSIGNED } from "../905/247093";
import { organizationAPIService } from "../figma_app/617654";
import { FTeamAssignmentMethodType } from "../figma_app/191312";
export function $$u1(e) {
  let t = {};
  e.forEach(e => {
    let r = e.workspace_id ?? UNASSIGNED;
    t[r] = (t[r] ?? 0) + 1;
  });
  return t;
}
export function $$p2(e, t = !0) {
  let [r, o] = useState(createLoadingState());
  let l = useCallback(async () => await organizationAPIService.getWorkspaceTeamsCounts({
    orgId: e
  }), [e]);
  let c = useAsyncWithReset(() => l(), [l]);
  return (useEffect(() => {
    isSuccess(c) ? o(createLoadedState(c.value.data.meta)) : isFailure(c) ? o(createErrorState([])) : o(createLoadingState());
  }, [c]), t) ? r : createLoadingState();
}
export function $$_3(e, t) {
  return `${location.origin}/files/${t ? t + "/" : ""}workspace/${e}/directory/teams`;
}
export function $$h4(e) {
  let t = {};
  let r = 0;
  let n = 0;
  e.forEach(e => {
    if (e.workspace_id) {
      let r = t[e.workspace_id] ?? 0;
      r++;
      t[e.workspace_id] = r;
    } else e.team_id ? r++ : n++;
  });
  return {
    libraryCountByWorkspaceId: t,
    unassignedLibrariesCount: r,
    draftLibrariesCount: n
  };
}
export function $$m0(e, t) {
  let r = "";
  let n = "";
  if (e) {
    let i = "";
    if (e?.actor_user_id) {
      let r = t[e.actor_user_id];
      i = r?.user?.handle || r?.user?.name || "";
    }
    e?.idp_group && (i = e.idp_group?.name || "");
    r = function (e, t) {
      switch (e) {
        case FTeamAssignmentMethodType.SELF_SELECTED:
          return getI18nString("members_table.workspace_update_description.self_selected");
        case FTeamAssignmentMethodType.MOVED_BY_ADMIN:
          return t ? getI18nString("members_table.workspace_update_description.moved_by_admin", {
            adminName: t
          }) : getI18nString("members_table.workspace_update_description.moved_by_admin_generic");
        case FTeamAssignmentMethodType.AUTO_ASSIGNED:
          return getI18nString("members_table.workspace_update_description.auto_assigned");
        case FTeamAssignmentMethodType.SCIM_GROUP:
          return getI18nString("members_table.workspace_update_description.scim_group", {
            groupName: t
          });
        default:
          return null;
      }
    }(e.update_reason, i);
    n = e.assigned_at;
  }
  return {
    updateReason: r,
    updateTimestamp: n
  };
}
export const L7 = $$m0;
export const ZM = $$u1;
export const _W = $$p2;
export const fO = $$_3;
export const wM = $$h4;