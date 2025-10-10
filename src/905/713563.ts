import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAtomWithSubscription, useSetAtom } from "../figma_app/27355";
import { hO, Hl, G4 } from "../figma_app/545293";
import { CZ, l4 } from "../905/124270";
import { createResourceFacet } from "../905/171315";
import { searchModelTypeAtom } from "../905/61477";
import { hideDropdownAction, selectViewAction } from "../905/929976";
import { hideModalHandler } from "../905/156213";
import { updateRecentSearchesWithSortThunk, searchClearResponsesAction, searchSessionEnteredSearchViewViaEnterAction, searchSetScrollTopAction, searchThunk } from "../905/977218";
import { CreatorResourceType, SearchModelType, PublicModelType, SearchTypeMode } from "../figma_app/162807";
import { SearchAnalytics } from "../905/574958";
import { isIncludedView, isOrgView } from "../figma_app/707808";
import { S } from "../905/417453";
export function $$_1(e, t, i) {
  let r = useAtomWithSubscription(searchModelTypeAtom);
  let s = useAtomWithSubscription(CZ);
  let l = $$A0(e, t, i);
  return useCallback((e, t, i, n) => {
    l(e, r, s, t, i, n);
  }, [l, s, r]);
}
export function $$A0(e, t, i) {
  let d = useDispatch<AppDispatch>();
  let _ = useSelector(e => e.currentUserOrgId);
  let A = S(_)?.searches;
  let y = useSetAtom(l4(CreatorResourceType.RESOURCE));
  let b = useSelector(e => e.search.sessionId);
  let v = useSelector(e => e.selectedView);
  let I = useAtomWithSubscription(hO.currentSearchAtom);
  let E = useAtomWithSubscription(hO.sortByAtom);
  return useCallback((n, r, a, o, f, _, x = !1) => {
    if (d(hideDropdownAction()), "fragment_search_modal" === e) {
      if (!I) throw Error("currentFragmentSearch not set");
      Hl(I.input, "input-text" === I.input.type ? G4.ACTIONS_ASSETS_TAB_DETAIL : G4.ACTIONS_VISUAL_SEARCH_VIEW, a, E);
      return;
    }
    if (SearchAnalytics.Session.trackSearchQueryTyped(b, v, n), _ && n.length > 0 && d(updateRecentSearchesWithSortThunk({
      searchQuery: n,
      previousSearches: A
    })), i && !x) {
      f && (o || (a && a.searchModelType || (y(createResourceFacet(SearchModelType.ALL_FILES)), a = {
        ...a,
        searchModelType: PublicModelType.FILES
      }), d(searchClearResponsesAction({})), d(searchSessionEnteredSearchViewViaEnterAction({
        entryPoint: e
      }))), d(searchSetScrollTopAction({
        top: 0
      })), d(selectViewAction({
        view: "search",
        entryPoint: e,
        previousView: v && (isIncludedView(v) || isOrgView(v)) ? v : void 0
      })), d(hideModalHandler()));
      let i = o ? SearchTypeMode.ALL_TYPES_STREAMING : SearchTypeMode.ALL_TYPES_BLOCKING;
      d(searchThunk({
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
    o || x || (d(searchSetScrollTopAction({
      top: 0
    })), d(selectViewAction({
      view: "search",
      entryPoint: e,
      previousView: v && (isIncludedView(v) || isOrgView(v)) ? v : void 0
    })));
    d(searchThunk({
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