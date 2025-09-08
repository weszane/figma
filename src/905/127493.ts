import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { A } from "../vendor/723372";
import { defaultComponentAttribute } from "../905/577641";
import { C7, Jc } from "../905/117474";
export let $$l0 = forwardRef(({
  children: e,
  ...t
}, i) => {
  let {
    cellProps
  } = function ({
    className: e,
    htmlAttributes: t,
    ...i
  }) {
    return {
      cellProps: {
        role: "gridcell",
        tabIndex: 0,
        className: A("grid-cell-primitive__cell__rGvkT", e),
        ...t,
        ...i
      }
    };
  }(t);
  return jsx("div", {
    ...cellProps,
    ...defaultComponentAttribute,
    ref: i,
    children: e
  });
});
$$l0.displayName = "Cell";
export let $$d1 = '[role="gridcell"]';
export function $$c3(e, t) {
  let i = h(e);
  if (t ? 2 !== i : 0 === i) {
    let i = C7({
      current: e
    });
    "reverse" === t ? i.focusLast() : i.focusFirst();
  } else e.focus();
}
export function $$u4(e = "forward", t) {
  let i = g();
  if (null === i) return !1;
  let [n, r] = i;
  if (!t) {
    p(r, e);
    return !0;
  }
  let a = Jc(r);
  if (0 === a.length) return !1;
  let s = a.indexOf(n);
  return !(s < 0) && ("forward" === e && s < a.length - 1 || "reverse" === e && s > 0 ? (p(r, e), !0) : !!t(e) || ("reverse" === e && r.focus(), !1));
}
function p(e, t) {
  let i = C7({
    current: e
  });
  "forward" === t ? i.focusNext({
    wrap: !0
  }) : i.focusPrevious({
    wrap: !0
  });
}
export function $$m2(e) {
  let t = g();
  if (null === t) return !1;
  let [i, n] = t;
  let r = n !== i;
  return 0 === e ? !r : 1 === e ? r : r && 0 !== h(n);
}
function h(e) {
  let t = Jc(e);
  if (1 === t.length) {
    let e = t[0];
    let i = e.tagName.toLowerCase();
    if ("button" === i || "input" === i && "checkbox" === e.type) return 0;
  }
  return t.length > 0 ? 1 : 2;
}
function g() {
  let e = document.activeElement;
  if (!(e instanceof HTMLElement)) return null;
  let t = e.closest($$d1);
  return t ? [e, t] : null;
}
export const fh = $$l0;
export const GB = $$d1;
export const Nd = $$m2;
export const lg = $$c3;
export const uB = $$u4;