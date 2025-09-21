import { jsx } from "react/jsx-runtime";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAtomWithSubscription, Xr } from "../figma_app/27355";
import { hO } from "../figma_app/545293";
import { l4 } from "../905/124270";
import { L } from "../905/713563";
import { searchInputAtom, searchScopeAtom, selectedItemAtom } from "../905/61477";
import { hideDropdownAction } from "../905/929976";
import { PublicModelType, CreatorResourceType } from "../figma_app/162807";
import { q } from "../905/801222";
import { m as _$$m } from "../905/424666";
import { i as _$$i } from "../905/831708";
export function $$g0({
  facetType: e,
  id: t,
  path: r
}) {
  let g = useDispatch();
  let f = useAtomWithSubscription(searchInputAtom);
  let E = useAtomWithSubscription(searchScopeAtom);
  let y = useSelector(e => "search" === e.selectedView.view);
  let b = Xr(l4(e));
  let T = Xr(selectedItemAtom);
  let I = useAtomWithSubscription(hO.isFragmentSearchAtom);
  let S = L(I ? "fragment_search_modal" : "file_browser", E, !0);
  let v = useCallback((e, t, r) => {
    e.preventDefault();
    g(hideDropdownAction());
    b(t);
    T(r?.searchModelType ?? null);
    S(f, PublicModelType.FILES, r, y, !1, !1);
  }, [b, g, y, S, f, T]);
  return e === CreatorResourceType.RESOURCE ? jsx(_$$m, {
    id: `${t}-resource-panel`,
    path: [...r, 0],
    setFacetValue: v
  }) : e === CreatorResourceType.CREATOR ? jsx(q, {
    id: `${t}-creator-panel`,
    path: [...r, 1],
    setFacetValue: v
  }) : e === CreatorResourceType.SPACE ? jsx(_$$i, {
    id: `${t}-space-panel`,
    path: [...r, 2],
    setFacetValue: v
  }) : null;
}
export const s = $$g0;