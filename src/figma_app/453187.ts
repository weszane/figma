import { useMemo } from "react";
import { Rs } from "../figma_app/288654";
import { WorkspaceModalPluginRequests } from "../figma_app/43951";
let s = (e, t, r) => {
  let s = Rs(WorkspaceModalPluginRequests, {
    orgId: e
  }, {
    enabled: !!e
  });
  return useMemo(() => {
    if ("loaded" === s.status) {
      let e = s.data?.currentUser?.baseOrgUser?.pluginRequests;
      if (e) return e.filter(e => {
        let n = r ? e.workspaceId === r : !!e.workspaceId == !!r;
        return e.pluginId === t && n;
      });
    }
    return [];
  }, [s, r, t]);
};
export function $$o0(e, t, r) {
  return s(e, t, r).filter(e => "pending" === e.status).length > 0;
}
export const a = $$o0;