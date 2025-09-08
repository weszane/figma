import { useCallback } from "react";
import { useDispatch, useSelector } from "../vendor/514228";
import { useAtomWithSubscription, Xr } from "../figma_app/27355";
import { hO, Hl, G4 } from "../figma_app/545293";
import { CZ, l4 } from "../905/124270";
import { jN } from "../905/171315";
import { Hv } from "../905/61477";
import { oB, sf } from "../905/929976";
import { hideModalHandler } from "../905/156213";
import { nG, qr, Je, PP, PI } from "../905/977218";
import { WY, $L, uH, Rr } from "../figma_app/162807";
import { vj } from "../905/574958";
import { QB, bN } from "../figma_app/707808";
import { S } from "../905/417453";
export function $$_1(e, t, i) {
  let r = useAtomWithSubscription(Hv);
  let s = useAtomWithSubscription(CZ);
  let l = $$A0(e, t, i);
  return useCallback((e, t, i, n) => {
    l(e, r, s, t, i, n);
  }, [l, s, r]);
}
export function $$A0(e, t, i) {
  let d = useDispatch();
  let _ = useSelector(e => e.currentUserOrgId);
  let A = S(_)?.searches;
  let y = Xr(l4(WY.RESOURCE));
  let b = useSelector(e => e.search.sessionId);
  let v = useSelector(e => e.selectedView);
  let I = useAtomWithSubscription(hO.currentSearchAtom);
  let E = useAtomWithSubscription(hO.sortByAtom);
  return useCallback((n, r, a, o, f, _, x = !1) => {
    if (d(oB()), "fragment_search_modal" === e) {
      if (!I) throw Error("currentFragmentSearch not set");
      Hl(I.input, "input-text" === I.input.type ? G4.ACTIONS_ASSETS_TAB_DETAIL : G4.ACTIONS_VISUAL_SEARCH_VIEW, a, E);
      return;
    }
    if (vj.Session.trackSearchQueryTyped(b, v, n), _ && n.length > 0 && d(nG({
      searchQuery: n,
      previousSearches: A
    })), i && !x) {
      f && (o || (a && a.searchModelType || (y(jN($L.ALL_FILES)), a = {
        ...a,
        searchModelType: uH.FILES
      }), d(qr({})), d(Je({
        entryPoint: e
      }))), d(PP({
        top: 0
      })), d(sf({
        view: "search",
        entryPoint: e,
        previousView: v && (QB(v) || bN(v)) ? v : void 0
      })), d(hideModalHandler()));
      let i = o ? Rr.ALL_TYPES_STREAMING : Rr.ALL_TYPES_BLOCKING;
      d(PI({
        query: n,
        searchModelType: r,
        searchScope: t,
        debounce: !0,
        forceRefreshSearchResults: f && !o,
        searchTypeBehavior: i,
        facetFilters: a
      }));
      return;
    }
    o || x || (d(PP({
      top: 0
    })), d(sf({
      view: "search",
      entryPoint: e,
      previousView: v && (QB(v) || bN(v)) ? v : void 0
    })));
    d(PI({
      query: n,
      searchModelType: r,
      searchScope: t,
      debounce: o,
      facetFilters: a,
      overrideIsFullResultsView: x
    }));
  }, [d, i, t, A, e, y, b, v, I, E]);
}
export const L = $$A0;
export const y = $$_1;