import { zl, eU } from "../figma_app/27355";
import { Qw } from "../905/989992";
import { QB } from "../905/143890";
import { Bu } from "../figma_app/604494";
var $$n1;
export function $$l0(e, t = !1) {
  let i = t ? zl.get($$n1.currentCommunitySearchAtom) : zl.get($$n1.currentSearchAtom);
  return null === i ? e.length > 0 : "input-text" !== i.input.type || i.input.value !== e;
}
(e => {
  e.setFragmentSearchLoading = function (t, i, n, s, o) {
    zl.set(s ? e.currentCommunitySearchAtom : e.currentSearchAtom, {
      searchId: t,
      input: i,
      result: Qw.loading(),
      sortBy: n,
      overrideParams: o
    });
  };
  e.setFragmentSearchError = function (t, i, n) {
    zl.set(n ? e.currentCommunitySearchAtom : e.currentSearchAtom, e => null === e || e.searchId !== t ? e : {
      ...e,
      result: Qw.error(i)
    });
  };
  e.setFragmentSearchResults = function (t, i, n, s) {
    zl.set(s ? e.currentCommunitySearchAtom : e.currentSearchAtom, e => null === e || e.searchId !== t ? e : {
      ...e,
      result: Qw.loaded(i)
    });
    zl.set(e.fragmentSearchEntryPointAtom, n);
  };
  e.getSearchId = function (t) {
    return zl.get(t ? e.currentCommunitySearchAtom : e.currentSearchAtom)?.searchId;
  };
  e.currentSearchAtom = eU(null);
  e.currentCommunitySearchAtom = eU(null);
  e.sortByAtom = eU(t => t(e.currentSearchAtom)?.sortBy || QB[0], (t, i, n) => {
    let r = t(e.currentSearchAtom);
    r && "loaded" === r.result.status && r.result.data && i(e.currentSearchAtom, {
      ...r,
      sortBy: n
    });
  });
  e.isFragmentSearchAtom = eU(e => e(Bu));
  e.recentFragmentsAtom = eU(null);
  e.fragmentSearchEntryPointAtom = eU(null);
})($$n1 || ($$n1 = {}));
export const G = $$l0;
export const h = $$n1;