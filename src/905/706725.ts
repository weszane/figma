import { atomStoreManager, atom } from "../figma_app/27355";
import { resourceUtils } from "../905/989992";
import { QB } from "../905/143890";
import { Bu } from "../figma_app/604494";
var $$n1;
export function $$l0(e, t = !1) {
  let i = t ? atomStoreManager.get($$n1.currentCommunitySearchAtom) : atomStoreManager.get($$n1.currentSearchAtom);
  return null === i ? e.length > 0 : "input-text" !== i.input.type || i.input.value !== e;
}
(e => {
  e.setFragmentSearchLoading = function (t, i, n, s, o) {
    atomStoreManager.set(s ? e.currentCommunitySearchAtom : e.currentSearchAtom, {
      searchId: t,
      input: i,
      result: resourceUtils.loading(),
      sortBy: n,
      overrideParams: o
    });
  };
  e.setFragmentSearchError = function (t, i, n) {
    atomStoreManager.set(n ? e.currentCommunitySearchAtom : e.currentSearchAtom, e => null === e || e.searchId !== t ? e : {
      ...e,
      result: resourceUtils.error(i)
    });
  };
  e.setFragmentSearchResults = function (t, i, n, s) {
    atomStoreManager.set(s ? e.currentCommunitySearchAtom : e.currentSearchAtom, e => null === e || e.searchId !== t ? e : {
      ...e,
      result: resourceUtils.loaded(i)
    });
    atomStoreManager.set(e.fragmentSearchEntryPointAtom, n);
  };
  e.getSearchId = function (t) {
    return atomStoreManager.get(t ? e.currentCommunitySearchAtom : e.currentSearchAtom)?.searchId;
  };
  e.currentSearchAtom = atom(null);
  e.currentCommunitySearchAtom = atom(null);
  e.sortByAtom = atom(t => t(e.currentSearchAtom)?.sortBy || QB[0], (t, i, n) => {
    let r = t(e.currentSearchAtom);
    r && "loaded" === r.result.status && r.result.data && i(e.currentSearchAtom, {
      ...r,
      sortBy: n
    });
  });
  e.isFragmentSearchAtom = atom(e => e(Bu));
  e.recentFragmentsAtom = atom(null);
  e.fragmentSearchEntryPointAtom = atom(null);
})($$n1 || ($$n1 = {}));
export const G = $$l0;
export const h = $$n1;