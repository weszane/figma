import { useMemo } from "react";
import { MIXED_MARKER } from "../905/216495";
import { B9 } from "../figma_app/722362";
import { $ } from "../905/330495";
export function $$o0(e) {
  let t = B9();
  let {
    backingSymbolGUID,
    backingStateGroupGUID
  } = $(e);
  let l = useMemo(() => {
    let r = [];
    for (let n of e) {
      let e = t.get(n);
      if (e && "INSTANCE" !== e.type) {
        for (; e?.isInstanceSublayer;) e = e.parentNode;
        e?.type === "INSTANCE" && r.push(e);
      }
    }
    return r;
  }, [e, t]);
  let d = useMemo(() => {
    let e = null;
    for (let r of l) {
      if (!r.symbolId) continue;
      let n = t.get(r.symbolId);
      if (n) {
        if (e) {
          if (e.guid !== n.guid) return MIXED_MARKER;
        } else e = n;
      }
    }
    e?.isState && e.parentGuid && (e = e.parentNode);
    return e;
  }, [l, t]);
  let c = useMemo(() => {
    let r = [];
    for (let n of e) {
      let e = t.get(n);
      e && "INSTANCE" === e.type && e.isInstanceSublayer && r.push(e);
    }
    return r;
  }, [e, t]);
  let u = useMemo(() => !!(null == d && (backingSymbolGUID || backingStateGroupGUID)), [d, backingSymbolGUID, backingStateGroupGUID]);
  let p = useMemo(() => !!(null == backingSymbolGUID && null == backingStateGroupGUID && d), [d, backingSymbolGUID, backingStateGroupGUID]);
  return useMemo(() => ({
    backingSymbolOrStateGroupOfContainingInstances: d,
    containingInstancesOfSublayers: l,
    onlyInstances: u,
    onlyInstanceSublayers: p,
    nestedInstances: c
  }), [d, l, u, p, c]);
}
export const p = $$o0;