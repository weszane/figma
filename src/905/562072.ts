import { useCallback } from "react";
import { useAtomWithSubscription, Xr } from "../figma_app/27355";
import { useDebouncedCallback } from "use-debounce";
import { CZ } from "../905/294085";
import { hO, Hl } from "../figma_app/545293";
import { openFileAtom } from "../figma_app/516028";
export function $$d0({
  debounceWait: e = 300,
  entryPoint: t,
  overrideParams: i,
  isCommunity: d,
  onSearchSuccess: c,
  isFigmake: u
}) {
  let p = useAtomWithSubscription(openFileAtom);
  let m = Xr(d ? hO.currentCommunitySearchAtom : hO.currentSearchAtom);
  let h = useDebouncedCallback(Hl, e);
  let g = useAtomWithSubscription(CZ);
  let f = useAtomWithSubscription(hO.sortByAtom);
  let _ = useCallback(() => {
    h.cancel();
    m(null);
  }, [h, m]);
  return {
    debouncedFragmentTextSearch: useCallback(e => {
      p && (e ? h({
        type: "input-text",
        value: e,
        file_key: p.key
      }, t, d ? void 0 : g, d ? "percent_match" : f, i, d, c, u) : _());
    }, [h, t, _, p, g, f, i, d, c, u]),
    clearFragmentSearchAndCancelDebounce: _,
    cancelDebouncedFragmentTextSearch: h.cancel,
    flushDebouncedFragmentTextSearch: h.flush
  };
}
export const S = $$d0;
