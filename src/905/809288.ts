import n from "../vendor/73823";
var r = n;
let a = () => !0;
function s(e) {
  return Array.isArray(e) ? e : [e];
}
function o(e, t) {
  return "parent" === t ? [e.parent] : e.children;
}
export function $$l4(e, t, i, {
  includeSelf: n,
  shouldSkipAfter: a,
  shouldBreakAfter: d
} = {}) {
  let c = s(e);
  let u = n ? [...c] : r()(c, e => o(e, t));
  for (;;) {
    let e = u.pop();
    if (!e || (i(e), d?.(e))) return;
    if (!a?.(e)) for (let i of o(e, t)) u.push(i);
  }
}
export function $$d2(e, t, i, n = {}) {
  let r = [];
  $$l4(e, t, e => r.push(i(e)), n);
  return r;
}
export function $$c0(e, t, i, {
  includeSelf: n,
  shouldSkipAfter: r,
  shouldBreakAfter: a
} = {}) {
  let s;
  $$l4(e, t, e => {
    i(e) && (s = e);
  }, {
    includeSelf: n,
    shouldSkipAfter: r,
    shouldBreakAfter: e => null != s || a?.(e) || !1
  });
  return s;
}
export function $$u5(e, t, i, n = {}) {
  let r = [];
  $$l4(e, t, e => {
    i(e) && r.push(e);
  }, n);
  return r;
}
export function $$p3(e, t, i = a, n = {}) {
  let r = 0;
  $$l4(e, t, e => {
    i(e) && r++;
  }, n);
  return r;
}
export function $$m6(e, t, i, n = {}) {
  return null != $$c0(s(e), t, i, n);
}
export function $$h1(e, t, i, n = {}) {
  return !$$m6(s(e), t, e => !i(e), n);
}
export const I6 = $$c0;
export const Si = $$h1;
export const Tj = $$d2;
export const U9 = $$p3;
export const jJ = $$l4;
export const pb = $$u5;
export const zN = $$m6;