import { useCallback, useState, useEffect, useRef } from "react";
import { A } from "../vendor/90566";
import { hC } from "../figma_app/901889";
import { ZC } from "../figma_app/39751";
import { g } from "../905/880308";
import { q5 } from "../figma_app/516028";
import { iZ } from "../905/372672";
import { n as _$$n } from "../905/884252";
export function $$u3() {
  let e = iZ();
  let t = q5();
  return {
    org_id: t?.parentOrgId ?? void 0,
    user_id: e?.id
  };
}
export function $$p0({
  debounce: e
} = {}) {
  let {
    org_id,
    user_id
  } = $$u3();
  let s = hC();
  let o = A(s, 2e3);
  let {
    currentVariableSet
  } = _$$n();
  let d = currentVariableSet?.node_id;
  let m = e ? o : s;
  return useCallback((e, {
    collection_id: n,
    ...r
  } = {}) => {
    m(e, {
      ...r,
      collection_id: n ?? d,
      org_id,
      user_id
    });
  }, [d, org_id, m, user_id]);
}
export function $$m2(e) {
  let [t, i] = useState(void 0);
  let {
    currentVariableSet
  } = _$$n();
  let a = currentVariableSet?.node_id;
  let l = "" === e;
  let d = ZC(l);
  useEffect(() => {
    i(g());
  }, [a]);
  useEffect(() => {
    l && !d && i(g());
  }, [l, d]);
  return t;
}
export function $$h1({
  filterState: e,
  resultsCount: t,
  currentVariableSetId: i
}) {
  let r = $$p0({
    debounce: !0
  });
  let a = ZC(i);
  let o = ZC(e);
  let l = useRef(!1);
  let d = useCallback(n => {
    r("ds_variables_modal.content_loaded", {
      action: n,
      collection_id: i,
      filter_state: JSON.stringify(e),
      results_count: t
    });
  }, [i, e, t, r]);
  useEffect(() => {
    l.current || (l.current = !0, d("opened-modal"));
  }, [d]);
  useEffect(() => {
    a && i !== a && d("changed-collection");
  }, [i, a, d]);
  useEffect(() => {
    o && e.query !== o.query && d("searched");
  }, [e, o, d]);
  useEffect(() => {
    o && e.filters !== o.filters && d("changed-filters");
  }, [e, o, d]);
}
export const $d = $$p0;
export const BT = $$h1;
export const dB = $$m2;
export const zG = $$u3;