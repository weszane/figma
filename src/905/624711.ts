import { useSelector } from "react-redux";
import { useAtomWithSubscription } from "../figma_app/27355";
import { trackEventAnalytics } from "../905/449184";
import { OM, wf } from "../905/124270";
import { li } from "../905/182534";
import { dd } from "../figma_app/604494";
export function $$d0() {
  let e = useAtomWithSubscription(OM);
  let t = useAtomWithSubscription(dd);
  let i = useAtomWithSubscription(wf);
  let d = useSelector(e => e.search.sessionId);
  let c = useSelector(e => e.search.queryId);
  let u = useSelector(e => e.search.parameters.query);
  let p = li();
  return (n, r) => {
    let s = !r || !(r.length > 0);
    let o = {
      facetSessionId: e,
      fragmentSearchSessionId: t,
      facetQueryId: i,
      facetQuery: r,
      fromZeroState: s,
      facetResourceType: n.resourceType,
      facetFolderId: n.folderId,
      facetTeamId: n.teamId,
      facetOrgId: n.orgId,
      facetCreatorId: n.creatorId,
      fileBrowserEntrypoint: p,
      sessionId: d,
      queryId: c,
      query: u
    };
    trackEventAnalytics("facet_applied", o);
  };
}
export const n = $$d0;
