import { useSelector } from "react-redux";
import { useSetAtom, useAtomWithSubscription } from "../figma_app/27355";
import { trackEventAnalytics } from "../905/449184";
import { generateSessionId } from "../figma_app/925970";
import { OM } from "../905/124270";
import { li } from "../905/182534";
import { dd } from "../figma_app/604494";
export function $$c0() {
  let e = useSetAtom(OM);
  let t = useAtomWithSubscription(dd);
  let r = useSelector(e => e.search.sessionId);
  let c = useSelector(e => e.search.queryId);
  let u = useSelector(e => e.search.parameters.query);
  let p = li();
  return (n, i) => {
    let o = generateSessionId();
    trackEventAnalytics("facet_type_selected", {
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