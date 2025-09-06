import { jsx } from "react/jsx-runtime";
import { useCallback } from "react";
import { useDispatch, useSelector } from "../vendor/514228";
import { useAtomWithSubscription, Xr } from "../figma_app/27355";
import { hO } from "../figma_app/545293";
import { l4 } from "../905/124270";
import { L } from "../905/713563";
import { Q8, sC, R9 } from "../905/61477";
import { oB } from "../905/929976";
import { uH, WY } from "../figma_app/162807";
import { q } from "../905/801222";
import { m as _$$m } from "../905/424666";
import { i as _$$i } from "../905/831708";
export function $$g0({
  facetType: e,
  id: t,
  path: r
}) {
  let g = useDispatch();
  let f = useAtomWithSubscription(Q8);
  let E = useAtomWithSubscription(sC);
  let y = useSelector(e => "search" === e.selectedView.view);
  let b = Xr(l4(e));
  let T = Xr(R9);
  let I = useAtomWithSubscription(hO.isFragmentSearchAtom);
  let S = L(I ? "fragment_search_modal" : "file_browser", E, !0);
  let v = useCallback((e, t, r) => {
    e.preventDefault();
    g(oB());
    b(t);
    T(r?.searchModelType ?? null);
    S(f, uH.FILES, r, y, !1, !1);
  }, [b, g, y, S, f, T]);
  return e === WY.RESOURCE ? jsx(_$$m, {
    id: `${t}-resource-panel`,
    path: [...r, 0],
    setFacetValue: v
  }) : e === WY.CREATOR ? jsx(q, {
    id: `${t}-creator-panel`,
    path: [...r, 1],
    setFacetValue: v
  }) : e === WY.SPACE ? jsx(_$$i, {
    id: `${t}-space-panel`,
    path: [...r, 2],
    setFacetValue: v
  }) : null;
}
export const s = $$g0;