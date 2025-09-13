import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { A as _$$A } from "../vendor/723372";
import { M } from "../905/850310";
import { Y } from "../905/246212";
import { identity } from "../905/893109";
var n = {};
require.d(n, {
  group: () => g,
  input: () => m,
  lg: () => u,
  md: () => c,
  root: () => $$p,
  specificityHack: () => h
});
var c = "input__md__8Ieqg";
var u = "input__lg__8bKGi";
var $$p = "input__root__zuNvf";
var m = "input__input__fmfv0";
var h = "input__specificity-hack__mgE8y";
var g = "input__group__tnF8A";
let f = {
  md: c,
  lg: u
};
let _ = forwardRef(({
  className: e,
  size: t = "md",
  ...i
}, n) => jsx(Y, {
  ...i,
  ref: n,
  className: _$$A(m, f[t], e)
}));
_.displayName = "Input";
let A = forwardRef(({
  size: e = "md",
  colspan: t,
  className: i,
  ...a
}, o) => jsx(Y.Root, {
  ...a,
  ref: o,
  className: _$$A($$p, n[e], i),
  style: {
    [identity("--colspan")]: t
  }
}));
A.displayName = "Input.Root";
let y = forwardRef(({
  size: e = "md",
  columns: t,
  ...i
}, a) => jsx("div", {
  ...i,
  ref: a,
  className: _$$A(g, n[e]),
  style: {
    [identity("--columns")]: t
  }
}));
y.displayName = "Input.Group";
let b = forwardRef((e, t) => {
  let i = M(e);
  return jsx($$v0, {
    ...i,
    ref: t
  });
});
b.displayName = "Input.Lazy";
export let $$v0 = Object.assign(_, {
  Root: A,
  Group: y,
  Lazy: b
});
export const p = $$v0;