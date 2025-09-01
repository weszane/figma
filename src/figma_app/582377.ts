import { useState, useEffect } from "react";
import { getFeatureFlags } from "../905/601108";
let $$a1 = {
  minZoomPercentage: 76,
  zoomScaleOverlap: 64,
  clusterClickResultViewportPercentage: 35,
  rebuildClustersZoomDelay: 50,
  disableSidebar: !1
};
let s = new Set();
export function $$o2(e) {
  if (!getFeatureFlags().internal_only_debug_tools) return;
  let t = "function" == typeof e ? e({
    ...$$a1
  }) : e;
  $$a1 = {
    ...$$a1,
    ...t
  };
  requestAnimationFrame(() => {
    s.forEach(e => e($$a1));
  });
}
export function $$l0() {
  let [e, t] = useState($$a1);
  useEffect(() => {
    let e = e => {
      t(e);
    };
    s.add(e);
    return () => {
      s.$$delete(e);
    };
  }, [t]);
  return e;
}
export const Z5 = $$l0;
export const i$ = $$a1;
export const uw = $$o2;