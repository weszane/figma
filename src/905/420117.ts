import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import a from "classnames";
import { pv, xH, Uq, JJ, Q_, eK, RH, N, Fi, Er, Wj } from "../figma_app/134671";
var s = a;
var $$l0 = (e => (e.DEFAULT = "default", e.DISABLED = "disabled", e.DISABLED_TERTIARY = "disabled_tertiary", e.SELECTED = "selected", e.IN_SELECTION = "in_selection", e.COMPONENT = "component", e.OVERRIDDEN = "overridden", e))($$l0 || {});
export let $$d1 = forwardRef(function ({
  className: e,
  colorTheme: t = "default",
  disableHover: i = !1,
  isNarrow: r = !1,
  hasIcon: a = !1,
  children: l,
  onPress: d,
  actionOnMouseDown: c = !1,
  isNonInteractive: u = !1,
  ...p
}, m) {
  let h = s()({
    [pv]: !0,
    [xH]: "default" === t,
    [Uq]: "component" === t,
    [JJ]: a,
    [Q_]: "disabled" === t,
    [eK]: "disabled_tertiary" === t,
    [RH]: "selected" === t,
    [N]: "in_selection" === t,
    [Fi]: r,
    [Er]: i,
    [Wj]: "overridden" === t
  }, e);
  return u ? jsx("div", {
    className: h,
    ...p,
    children: l
  }) : jsx("button", {
    onClick: c ? void 0 : d,
    onMouseDown: c ? d : void 0,
    ref: m,
    className: h,
    ...p,
    children: l
  });
});
export const J = $$l0;
export const Z = $$d1;