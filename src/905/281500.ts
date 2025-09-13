import { useCallback } from "react";
import { useAtomWithSubscription, useAtomValueAndSetter } from "../figma_app/27355";
import { hO } from "../figma_app/545293";
import { J, jM, P_, l4 } from "../905/124270";
import { C8, M2, q1, gh } from "../905/171315";
import { R9, Q8, BA, sC } from "../905/61477";
import { CreatorResourceType, PublicModelType } from "../figma_app/162807";
import { L } from "../905/713563";
export function $$u0(e) {
  let t = e?.type ?? null;
  let i = useAtomWithSubscription(J);
  let u = useAtomWithSubscription(jM);
  let p = useAtomWithSubscription(P_);
  let [m, h] = useAtomValueAndSetter(R9);
  let g = useAtomWithSubscription(Q8);
  let f = useAtomWithSubscription(BA);
  let _ = useAtomWithSubscription(sC);
  let A = useAtomWithSubscription(hO.isFragmentSearchAtom);
  let [y, b] = useAtomValueAndSetter(l4(t));
  let v = L(A ? "fragment_search_modal" : "file_browser", _, !0);
  return useCallback(() => {
    if (!e || !y) return;
    let t = null;
    e.type === CreatorResourceType.RESOURCE && y.type === CreatorResourceType.RESOURCE ? t = null : e.type === CreatorResourceType.CREATOR && y.type === CreatorResourceType.CREATOR ? t = C8(e, M2.REMOVE_FROM_GROUP, y) : e.type === CreatorResourceType.SPACE && y.type === CreatorResourceType.SPACE && (t = q1(e, M2.REMOVE_FROM_GROUP, y));
    b(t);
    let n = gh(t || {
      type: e.type,
      value: null
    }, u, i, p, m ?? void 0);
    h(n?.searchModelType ?? null);
    v(g, PublicModelType.FILES, n, f, !1, !1);
  }, [e, i, y, u, p, f, v, m, g, b, h]);
}
export const v = $$u0;