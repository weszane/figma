import { useSelector } from "../vendor/514228";
import { Xr, md } from "../figma_app/27355";
import { sx } from "../905/449184";
import { MZ } from "../figma_app/925970";
import { OM } from "../905/124270";
import { li } from "../905/182534";
import { dd } from "../figma_app/604494";
export function $$c0() {
  let e = Xr(OM);
  let t = md(dd);
  let r = useSelector(e => e.search.sessionId);
  let c = useSelector(e => e.search.queryId);
  let u = useSelector(e => e.search.parameters.query);
  let p = li();
  return (n, i) => {
    let o = MZ();
    sx("facet_type_selected", {
      facetSessionId: o,
      fragmentSearchSessionId: t,
      sessionId: r,
      queryId: c,
      query: u,
      facet_entrypoint: n,
      facet_type: i,
      file_browser_entrypoint: p
    });
    e(o);
  };
}
export const f = $$c0;