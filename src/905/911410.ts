import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { A } from "../vendor/723372";
import { Jn } from "../figma_app/272243";
import { W_ } from "../905/893109";
import { bL as _$$bL, cM } from "../905/163832";
let d = {
  sm: "window__sm__f5wSc"
};
let $$c1 = forwardRef(({
  width: e,
  maxHeight: t,
  children: i,
  htmlAttributes: r,
  ...c
}, u) => {
  let p;
  let m = {};
  let h = !1;
  if ("number" == typeof e ? m.width = W_(e) : e && (p = d[e]), t) {
    let e;
    "full" === t ? h = !0 : e = "number" == typeof t ? W_(t) : t;
    m["--fpl-contents-max-height"] = e;
  }
  return jsxs(_$$bL, {
    ...c,
    htmlAttributes: r,
    ref: u,
    style: m,
    className: A("window__root__KsyeI", p, {
      window__fullHeight__aDy3i: h
    }),
    children: [i, jsx(Jn, {})]
  });
});
$$c1.displayName = "Window.Root";
export let $$u0 = forwardRef(({
  children: e,
  defaultWidth: t,
  defaultHeight: i,
  constraints: r,
  onTransform: a,
  onEdgeDoubleClick: s,
  recordingKey: o,
  ...d
}, u) => jsx($$c1, {
  ...d,
  ref: u,
  onTransform: a,
  recordingKey: o,
  children: jsx(cM, {
    defaultWidth: t,
    defaultHeight: i,
    constraints: r,
    onTransform: a,
    onDoubleClick: s,
    ensureHeaderVisible: "header" === d.draggable,
    recordingKey: o,
    children: e
  })
}));
$$u0.displayName = "Window.ResizableRoot";
export const _L = $$u0;
export const bL = $$c1;