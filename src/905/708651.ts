import { jsx } from "react/jsx-runtime";
import { forwardRef, useMemo } from "react";
import a from "classnames";
var s = a;
let $$o0 = forwardRef(({
  children: e,
  className: t,
  style: i,
  gridColumnSizes: a,
  stickyTop: o = !1,
  stickyRight: l = !1,
  stickyBottom: d = !1,
  stickyLeft: c = !1,
  ...u
}, p) => {
  let m = useMemo(() => "string" == typeof a ? a : a.map(e => "number" == typeof e ? `${e}px` : e).join(" "), [a]);
  return jsx("table", {
    ...u,
    ref: p,
    className: s()("spreadsheet--root--GoiEA", o && "spreadsheet--stickyTop--ndU2j", l && "spreadsheet--stickyRight--6ryUx", d && "spreadsheet--stickyBottom--D4aGd", c && "spreadsheet--stickyLeft--Liwg0", t),
    style: {
      gridTemplateColumns: m,
      ...i
    },
    children: jsx("tbody", {
      className: "spreadsheet--body--a1SVF",
      children: e
    })
  });
});
let $$l2 = forwardRef(({
  children: e,
  className: t,
  style: i,
  ...r
}, a) => jsx("tr", {
  ...r,
  ref: a,
  className: s()("spreadsheet--row--Qg6tf", t),
  style: i,
  children: e
}));
let $$d1 = forwardRef(({
  children: e,
  className: t,
  style: i,
  ...r
}, a) => jsx("td", {
  ...r,
  ref: a,
  className: s()("spreadsheet--cell--gq5PL", t),
  style: i,
  children: e
}));
export const Zu = $$o0;
export const Jy = $$d1;
export const $y = $$l2;