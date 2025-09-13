import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { customHistory } from "../905/612521";
import { isCommandEvent } from "../905/63728";
import { kg } from "../figma_app/976345";
import { sf } from "../905/929976";
import { useCurrentUserOrgId } from "../905/845253";
import { DUserRole, TGroupType } from "../figma_app/858344";
import { UNASSIGNED } from "../905/247093";
if (443 == require.j) {}
if (443 == require.j) {}
export function $$m0() {
  let e = useCurrentUserOrgId();
  let t = useDispatch();
  return useCallback((r, a) => {
    if (t(kg({
      clickedResourceType: "workspace",
      resourceIdOrKey: r ?? void 0
    })), isCommandEvent(a) || a.shiftKey) {
      let t = `/files/${e}/workspace/${r ?? UNASSIGNED}/directory/teams`;
      customHistory.redirect(t, "_blank");
      a.preventDefault();
    } else t(sf({
      view: "workspace",
      subView: DUserRole.DIRECTORY,
      workspaceId: r,
      selectedTab: TGroupType.TEAMS
    }));
  }, [e, t]);
}
export const $ = $$m0;