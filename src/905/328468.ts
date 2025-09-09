import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useRef, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { c2 } from "../905/382883";
import { useAtomWithSubscription, Xr } from "../figma_app/27355";
import { L8, rG } from "../905/124270";
import { gl, FR, oM } from "../905/171315";
import { k } from "../905/252342";
import { v as _$$v } from "../905/281500";
import { r as _$$r } from "../905/264954";
import { jD, uR } from "../figma_app/162807";
export function $$h0() {
  let e = useAtomWithSubscription(L8);
  let t = useAtomWithSubscription(rG);
  return jsx(Fragment, {
    children: e.map((e, i) => jsx(g, {
      facet: e,
      index: i,
      isActive: c2(e, t)
    }, `pill-${i}`))
  });
}
function g({
  facet: e,
  index: t,
  isActive: i
}) {
  let s = useRef(null);
  let h = useSelector(e => e.modalShown?.type === _$$r);
  let g = useAtomWithSubscription(L8);
  let f = Xr(rG);
  let _ = _$$v(e);
  let A = gl(e.type);
  let y = FR(e);
  let b = k();
  let v = useCallback(t => {
    i ? (f(null), s.current?.blur()) : (t.stopPropagation(), f(e), s.current?.focus());
  }, [e, i, f]);
  let I = useCallback(n => {
    i && (("Backspace" === n.key || "Delete" === n.key) && (_(), b(oM(e), jD.PILL, uR.AUTOCOMPLETE)), "ArrowLeft" === n.key && t > 0 && f(g[t - 1]), "ArrowRight" === n.key && (t < g.length - 1 ? f(g[t + 1]) : f(null)));
  }, [g, t, i, _, f, b, e]);
  let E = useCallback(e => {
    h && v(e);
  }, [h, v]);
  useEffect(() => {
    i && s.current?.focus();
  }, [i]);
  return jsxs("button", {
    className: i ? "facet_pills--activePill--ct05I facet_pills--pill--aJOOg faceted_search_bar--activePill--ydT4P" : "facet_pills--pill--aJOOg",
    onKeyDown: I,
    onMouseDown: E,
    ref: s,
    children: [jsx("span", {
      className: "facet_pills--type--mX1lK",
      children: A
    }), y]
  });
}
export const K = $$h0;
