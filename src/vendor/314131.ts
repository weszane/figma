let t = Object.prototype.toString;
export function $$f8(e) {
  switch (t.call(e)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
    case "[object WebAssembly.Exception]":
      return !0;
    default:
      return $$b12(e, Error);
  }
}
function r(e, n) {
  return t.call(e) === `[object ${n}]`;
}
export function $$a6(e) {
  return r(e, "ErrorEvent");
}
export function $$o0(e) {
  return r(e, "DOMError");
}
export function $$u7(e) {
  return r(e, "DOMException");
}
export function $$l1(e) {
  return r(e, "String");
}
export function $$d3(e) {
  return "object" == typeof e && null !== e && "__sentry_template_string__" in e && "__sentry_template_values__" in e;
}
export function $$s11(e) {
  return null === e || $$d3(e) || "object" != typeof e && "function" != typeof e;
}
export function $$c4(e) {
  return r(e, "Object");
}
export function $$h14(e) {
  return "undefined" != typeof Event && $$b12(e, Event);
}
export function $$p13(e) {
  return "undefined" != typeof Element && $$b12(e, Element);
}
export function $$g9(e) {
  return r(e, "RegExp");
}
export function $$m5(e) {
  return !!(e && e.then && "function" == typeof e.then);
}
export function $$_10(e) {
  return $$c4(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e;
}
export function $$b12(e, n) {
  try {
    return e instanceof n;
  } catch (e) {
    return !1;
  }
}
export function $$y2(e) {
  return !!("object" == typeof e && null !== e && (e.__isVue || e._isVue));
}
export const BD = $$o0;
export const Kg = $$l1;
export const L2 = $$y2;
export const NF = $$d3;
export const Qd = $$c4;
export const Qg = $$m5;
export const T2 = $$a6;
export const W6 = $$u7;
export const bJ = $$f8;
export const gd = $$g9;
export const mE = $$_10;
export const sO = $$s11;
export const tH = $$b12;
export const vq = $$p13;
export const xH = $$h14;