import { useSelector } from "../vendor/514228";
import { fp } from "../figma_app/27355";
import { sx } from "../905/449184";
import { OM } from "../905/124270";
import { _6 } from "../figma_app/386952";
import { L0 } from "../figma_app/162807";
export function $$d0() {
  let [e, t] = fp(OM);
  let i = useSelector(e => e.search.sessionId);
  let d = useSelector(e => e.search.queryId);
  let c = useSelector(e => e.search.parameters.query);
  let u = "search" === _6().view ? L0.FULL_PAGE : L0.PREVIEW;
  return (n, r) => {
    e && (sx("facet_type_unselected", {
      facetSessionId: e,
      sessionId: i,
      queryId: d,
      query: c,
      facet_entrypoint: n,
      facet_type: r,
      file_browser_entrypoint: u
    }), t(null));
  };
}
export const A = $$d0;