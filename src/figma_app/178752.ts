import { useMemo, useEffect } from "react";
import { useSelector, useStore } from "react-redux";
import { useLatestRef } from "../figma_app/922077";
import { useSubscription } from "../figma_app/288654";
import { updateLibrarySubscriptions } from "../figma_app/933328";
import { getParentOrgId } from "../905/872904";
import { WorkspaceSubscribedLibrariesForFile } from "../figma_app/43951";
import { PrimaryWorkflowEnum } from "../figma_app/633080";
import { useCurrentFileKey } from "../figma_app/516028";
import { getUserId } from "../905/372672";
export function $$_1(e) {
  let t = useSelector(e => e.library);
  let r = getUserId();
  let a = useSelector(e => e.recentlyUsed.libraryItems);
  return useMemo(() => {
    let n = [];
    for (let i of a[e]) if ((null !== r ? i.last_added_at_by_user_id?.[r] : void 0) && (i.type === PrimaryWorkflowEnum.COMPONENT || i.type === PrimaryWorkflowEnum.STATE_GROUP)) {
      let e = function (e, t) {
        let r = e.library_key;
        let n = e.team_id;
        let i = e.node_id;
        return e.type === PrimaryWorkflowEnum.COMPONENT ? t.publishedByLibraryKey.components[n]?.[r]?.[i] || t.defaultPublished.componentsByLibraryKey[r]?.[i] : e.type === PrimaryWorkflowEnum.STATE_GROUP ? t.publishedByLibraryKey.stateGroups[n]?.[r]?.[i] || t.defaultPublished.stateGroupsByLibraryKey[r]?.[i] : void 0;
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
  let e = useCurrentFileKey();
  let t = getParentOrgId();
  let r = useStore();
  let c = useSubscription(WorkspaceSubscribedLibrariesForFile, {
    fileKey: e
  }, {
    enabled: !!e && !!t
  });
  let p = useLatestRef(c);
  useEffect(() => {
    if (!p?.data || !c.data) return;
    let e = c.data?.file?.computedWorkspacePublicInfo?.workspace?.librarySubscriptions || [];
    let t = p.data?.file?.computedWorkspacePublicInfo?.workspace?.librarySubscriptions || [];
    updateLibrarySubscriptions(r, t, e);
  }, [r, c, p]);
}
export const XS = $$h0;
export const g5 = $$_1;