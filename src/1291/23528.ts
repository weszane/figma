import { useState, useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import { o2 } from "../figma_app/968813";
import { getMentionsResult } from "../905/772425";
import { zW } from "../905/162414";
import { contactsAPIService } from "../figma_app/477548";
import { d0 } from "../9410/353422";
let c = {
  list: contactsAPIService.getRecentFaceStamps,
  search: contactsAPIService.searchFaceStamps
};
export function $$u0({
  maxResults: e
}) {
  let t = useDispatch();
  let s = zW({
    maxResultsCount: e,
    api: c,
    includeHiResAvatars: !0
  });
  let [l, u] = useState(!1);
  let [m, _] = useState(!1);
  let [g, p] = useState(null);
  let x = d0();
  let h = useCallback(e => {
    if (!x) {
      _(!0);
      u(!1);
      p(e);
      return;
    }
    u(!0);
    _(!1);
    getMentionsResult(e, s, !1).then(s => {
      _(!0);
      let i = s?.mentions || [];
      p(e);
      t(o2(i));
      u(!1);
    });
  }, [s, t, x]);
  return useMemo(() => ({
    faceStampServerSideSearch: h,
    faceStampSearchIsLoading: l,
    faceStampSearchHasResolved: m,
    lastFaceStampSearchQuery: g,
    setLastFaceStampSearchQuery: p
  }), [m, l, h, g]);
}
export const A = $$u0;