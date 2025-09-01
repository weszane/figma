import { useState, useMemo, useCallback, useEffect } from "react";
import { getFeatureFlags } from "../905/601108";
import { eU, Xr, md } from "../figma_app/27355";
import { Wh } from "../figma_app/615482";
import { e as _$$e } from "../figma_app/601186";
import { j } from "../figma_app/64343";
let d = Wh(() => eU(new Map()));
export function $$c0(e) {
  let [t, r] = useState(null);
  let s = j();
  let c = useMemo(() => new Set(s), [s]);
  let u = Xr(d);
  let p = md(d);
  let _ = !e.isLoading;
  let h = _ && !!e.lastSuccessfulPublishedResponsiveSetGuids;
  let m = _$$e();
  let g = null;
  e.isLoading || (g = e.lastSuccessfulPublishedResponsiveSetGuids);
  let f = null;
  e.isLoading || (f = e.lastPublishedAt);
  let E = useCallback((e, t) => {
    u(r => (r.set(e, t), new Map(r)));
  }, [u]);
  useEffect(() => {
    e.isLoading || f === t || (u(new Map()), r(f));
  }, [e, t, f, u]);
  return useMemo(() => {
    let e = new Set();
    return getFeatureFlags().sts_ppp ? _ ? (h ? (g?.forEach(t => {
      c.has(t) && e.add(t);
    }), p.forEach((t, r) => {
      !0 === t ? e.add(r) : e.$$delete(r);
    })) : s.forEach(t => {
      !1 !== p.get(t) && e.add(t);
    }), m && (e.add(m), p.set(m, !0)), {
      allResponsiveSetGuids: s,
      selectedResponsiveSetGuids: e,
      updateGuidSelectionState: E
    }) : {
      allResponsiveSetGuids: s,
      selectedResponsiveSetGuids: new Set(),
      updateGuidSelectionState: E
    } : {
      allResponsiveSetGuids: s,
      selectedResponsiveSetGuids: c,
      updateGuidSelectionState: E
    };
  }, [_, m, h, s, E, c, p, g]);
}
export const q = $$c0;