import { useState, useCallback, useEffect } from "react";
import { xj, ok } from "../figma_app/851625";
import { J } from "../905/931050";
import { Xm, gB, e1 } from "../905/723791";
import { getI18nString } from "../905/303541";
import { UNASSIGNED } from "../905/247093";
import { Eh } from "../figma_app/617654";
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
  let [r, o] = useState(Xm());
  let l = useCallback(async () => await Eh.getWorkspaceTeamsCounts({
    orgId: e
  }), [e]);
  let c = J(() => l(), [l]);
  return (useEffect(() => {
    xj(c) ? o(gB(c.value.data.meta)) : ok(c) ? o(e1([])) : o(Xm());
  }, [c]), t) ? r : Xm();
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