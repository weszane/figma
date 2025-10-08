import { jsx, Fragment } from "react/jsx-runtime";
import { useRef, useEffect, useMemo } from "react";
import { getFeatureFlags } from "../905/601108";
import { Xr, useAtomValueAndSetter } from "../figma_app/27355";
import o from "classnames";
import { parsePxNumber } from "../figma_app/783094";
import { useResizeObserverRef } from "../figma_app/708845";
import { f as _$$f } from "../figma_app/109947";
import { Dm } from "../figma_app/8833";
import { d as _$$d } from "../9410/847929";
import { xn, Yk } from "../figma_app/644079";
import { gB } from "../9410/517270";
import { L } from "../905/453756";
import { G } from "../figma_app/481531";
import { ze } from "../figma_app/751648";
import { fq, IH } from "../figma_app/604494";
import { o as _$$o } from "../905/40561";
import { tT, N8 } from "../figma_app/708115";
import { j4N } from "../figma_app/27776";
import { X } from "../905/846650";
var l = o;
let T = parsePxNumber(j4N);
function w(e) {
  let t = useRef(null);
  let i = Xr(fq);
  let o = useResizeObserverRef(t);
  let {
    centeredInPanels
  } = gB();
  useEffect(() => (o?.height && i(o.height), () => {
    i(0);
  }), [o, i]);
  let b = function () {
    let [e] = useAtomValueAndSetter(_$$f);
    let t = e?.current?.getBoundingClientRect();
    let i = !!(t && t.height > 0);
    let r = xn();
    let o = Yk();
    let l = L();
    let d = G();
    let c = ze();
    return useMemo(() => {
      if (getFeatureFlags().figjam_quick_actions_v2 && !l && (!i || c)) return {
        bottom: o + (c && d ? 0 : 12)
      };
      if (!i) return null;
      let e = getFeatureFlags().figjam_quick_actions_v2 ? 12 : 8;
      return {
        bottom: T + r + (t?.height || 0) + e
      };
    }, [r, i, t?.height, o, l, d, c]);
  }();
  let [v, E] = _$$d();
  let w = useMemo(() => centeredInPanels ? {
    left: v - E
  } : null, [centeredInPanels, v, E]);
  return jsx(Fragment, {
    children: jsx("div", {
      ref: t,
      style: {
        bottom: 72,
        ...b,
        left: 0,
        ...w
      },
      className: l()(tT, Dm),
      "data-testid": "quick-actions-v2",
      children: jsx(j, {
        children: e.children
      })
    })
  });
}
export function $$S0(e) {
  return jsx(w, {
    children: e.children
  });
}
function j(e) {
  let t = useRef(null);
  let i = Xr(IH);
  useEffect(() => (t.current && i(t), () => {
    i(null);
  }), [i]);
  let a = _$$o();
  return jsx("div", {
    ref: t,
    style: {
      maxWidth: X,
      minWidth: a
    },
    className: l()(N8, Dm),
    "data-cancel-insertable-resource-drag-and-drop": "true",
    children: e.children
  });
}
export const p = $$S0;