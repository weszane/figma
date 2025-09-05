import { useSelector } from "../vendor/514228";
import { md } from "../figma_app/27355";
import { sx } from "../905/449184";
import { OM } from "../905/124270";
import { li } from "../905/182534";
export function $$l0() {
  let e = md(OM);
  let t = useSelector(e => e.search.sessionId);
  let i = useSelector(e => e.search.queryId);
  let l = useSelector(e => e.search.parameters.query);
  let d = li();
  return (n, r, s) => {
    let o = {
      facetSessionId: e,
      facetClearType: r,
      sessionId: t,
      queryId: i,
      query: l,
      facetResourceType: n.resourceType,
      facetFolderId: n.folderId,
      facetTeamId: n.teamId,
      facetOrgId: n.orgId,
      facetCreatorId: n.creatorId,
      fileBrowserEntrypoint: d,
      facetEntrypoint: s
    };
    sx("facet_cleared", o);
  };
}
export const k = $$l0;