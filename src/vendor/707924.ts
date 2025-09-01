function u(e) {
  var t;
  if ("undefined" == typeof window || null == window.navigator) return !1;
  let a = window.navigator.userAgentData?.brands;
  return Array.isArray(a) && a.some(t => e.test(t.brand)) || e.test(window.navigator.userAgent);
}
function n(e) {
  var t;
  return "undefined" != typeof window && null != window.navigator && e.test(window.navigator.userAgentData?.platform || window.navigator.platform);
}
function r(e) {
  let t = null;
  return () => (null == t && (t = e()), t);
}
let $$i2 = r(function () {
  return n(/^Mac/i);
});
let o = r(function () {
  return n(/^iPhone/i);
});
let $$l1 = r(function () {
  return n(/^iPad/i) || $$i2() && navigator.maxTouchPoints > 1;
});
let $$s5 = r(function () {
  return o() || $$l1();
});
r(function () {
  return $$i2() || $$s5();
});
let $$d0 = r(function () {
  return u(/AppleWebKit/i) && !c();
});
let c = r(function () {
  return u(/Chrome/i);
});
let $$m4 = r(function () {
  return u(/Android/i);
});
let $$h3 = r(function () {
  return u(/Firefox/i);
});
export const Tc = $$d0;
export const bh = $$l1;
export const cX = $$i2;
export const gm = $$h3;
export const m0 = $$m4;
export const un = $$s5;