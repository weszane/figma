import { jsx } from "react/jsx-runtime";
import { useRef, createContext, useEffect } from "react";
import { U1 } from "../figma_app/343967";
import { N } from "../905/57692";
import { Xr } from "../figma_app/27355";
import l from "classnames";
import { t as _$$t } from "../905/303541";
import { Dm } from "../figma_app/8833";
import { bo } from "../figma_app/447445";
import { S, f as _$$f } from "../figma_app/109947";
var d = l;
export function $$h0({
  children: e
}) {
  let t = useRef(null);
  f(t, S);
  let r = U1(t);
  return jsx(bo, {
    children: jsx(N, {
      ref: r,
      "aria-label": _$$t("fullscreen.toolbar.aria_label"),
      className: d()("toolbelt--root--jwHGa", Dm),
      children: e
    })
  });
}
export let $$m2 = createContext(!1);
export function $$g1(e) {
  let t = useRef(null);
  f(t, _$$f);
  return jsx($$m2.Provider, {
    value: !0,
    children: jsx("div", {
      className: "toolbelt--toolbeltWrapper--3VLHu",
      ref: t,
      "data-onboarding-key": e["data-onboarding-key"],
      "data-testid": e["data-testid"],
      children: e.children
    })
  });
}
function f(e, t) {
  let r = Xr(t);
  useEffect(() => (r(e), () => {
    r(null);
  }), [e, r]);
}
export const Iy = $$h0;
export const XS = $$g1;
export const TH = $$m2;