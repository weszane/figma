import { useMemo, useEffect } from "react";
import { useSelector, useStore } from "../vendor/514228";
import { ZC } from "../figma_app/39751";
import { Rs } from "../figma_app/288654";
import { eB } from "../figma_app/933328";
import { LH } from "../905/872904";
import { MWb } from "../figma_app/43951";
import { PW } from "../figma_app/633080";
import { tS } from "../figma_app/516028";
import { TA } from "../905/372672";
export function $$_1(e) {
  let t = useSelector(e => e.library);
  let r = TA();
  let a = useSelector(e => e.recentlyUsed.libraryItems);
  return useMemo(() => {
    let n = [];
    for (let i of a[e]) if ((null !== r ? i.last_added_at_by_user_id?.[r] : void 0) && (i.type === PW.COMPONENT || i.type === PW.STATE_GROUP)) {
      let e = function (e, t) {
        let r = e.library_key;
        let n = e.team_id;
        let i = e.node_id;
        return e.type === PW.COMPONENT ? t.publishedByLibraryKey.components[n]?.[r]?.[i] || t.defaultPublished.componentsByLibraryKey[r]?.[i] : e.type === PW.STATE_GROUP ? t.publishedByLibraryKey.stateGroups[n]?.[r]?.[i] || t.defaultPublished.stateGroupsByLibraryKey[r]?.[i] : void 0;
      }(i, t);
      e && n.push(e);
    }
    return {
      productComponents: n,
      templates: []
    };
  }, [a, e, t, r]);
}
export function $$h0() {
  let e = tS();
  let t = LH();
  let r = useStore();
  let c = Rs(MWb, {
    fileKey: e
  }, {
    enabled: !!e && !!t
  });
  let p = ZC(c);
  useEffect(() => {
    if (!p?.data || !c.data) return;
    let e = c.data?.file?.computedWorkspacePublicInfo?.workspace?.librarySubscriptions || [];
    let t = p.data?.file?.computedWorkspacePublicInfo?.workspace?.librarySubscriptions || [];
    eB(r, t, e);
  }, [r, c, p]);
}
export const XS = $$h0;
export const g5 = $$_1;