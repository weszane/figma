import { useCallback } from "react";
import { useDispatch } from "../vendor/514228";
import { Ay } from "../905/612521";
import { Fo } from "../905/63728";
import { kg } from "../figma_app/976345";
import { sf } from "../905/929976";
import { dq } from "../905/845253";
import { V0, dN } from "../figma_app/858344";
import { UNASSIGNED } from "../905/247093";
if (443 == require.j) {}
if (443 == require.j) {}
export function $$m0() {
  let e = dq();
  let t = useDispatch();
  return useCallback((r, a) => {
    if (t(kg({
      clickedResourceType: "workspace",
      resourceIdOrKey: r ?? void 0
    })), Fo(a) || a.shiftKey) {
      let t = `/files/${e}/workspace/${r ?? UNASSIGNED}/directory/teams`;
      Ay.redirect(t, "_blank");
      a.preventDefault();
    } else t(sf({
      view: "workspace",
      subView: V0.DIRECTORY,
      workspaceId: r,
      selectedTab: dN.TEAMS
    }));
  }, [e, t]);
}
export const $ = $$m0;