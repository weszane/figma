import { d4 } from "../vendor/514228";
import { md } from "../figma_app/27355";
import { sx } from "../905/449184";
import { OM, wf } from "../905/124270";
import { Q8 } from "../905/61477";
export function $$l0() {
  let e = md(OM);
  let t = md(wf);
  let i = md(Q8);
  let l = d4(e => e.search.sessionId);
  let d = d4(e => e.search.queryId);
  return (n, r, s) => {
    sx("facet_query_result", {
      session_id: l,
      query_id: d,
      query: i,
      facet_session_id: e,
      facet_query_id: t,
      facet_query: n,
      facet_entrypoint: s,
      facet_type: r
    });
  };
}
export const P = $$l0;