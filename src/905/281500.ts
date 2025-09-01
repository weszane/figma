import { useCallback } from "react";
import { md, fp } from "../figma_app/27355";
import { hO } from "../figma_app/545293";
import { J, jM, P_, l4 } from "../905/124270";
import { C8, M2, q1, gh } from "../905/171315";
import { R9, Q8, BA, sC } from "../905/61477";
import { WY, uH } from "../figma_app/162807";
import { L } from "../905/713563";
export function $$u0(e) {
  let t = e?.type ?? null;
  let i = md(J);
  let u = md(jM);
  let p = md(P_);
  let [m, h] = fp(R9);
  let g = md(Q8);
  let f = md(BA);
  let _ = md(sC);
  let A = md(hO.isFragmentSearchAtom);
  let [y, b] = fp(l4(t));
  let v = L(A ? "fragment_search_modal" : "file_browser", _, !0);
  return useCallback(() => {
    if (!e || !y) return;
    let t = null;
    e.type === WY.RESOURCE && y.type === WY.RESOURCE ? t = null : e.type === WY.CREATOR && y.type === WY.CREATOR ? t = C8(e, M2.REMOVE_FROM_GROUP, y) : e.type === WY.SPACE && y.type === WY.SPACE && (t = q1(e, M2.REMOVE_FROM_GROUP, y));
    b(t);
    let n = gh(t || {
      type: e.type,
      value: null
    }, u, i, p, m ?? void 0);
    h(n?.searchModelType ?? null);
    v(g, uH.FILES, n, f, !1, !1);
  }, [e, i, y, u, p, f, v, m, g, b, h]);
}
export const v = $$u0;