export function $$n6(e, t, r) {
  null == r ? e.removeAttribute(t) : e.setAttribute(t, r);
}
export function $$i2(e, t) {
  return null != e && "function" == typeof e.closest && null != e.closest(`[${t}]`);
}
export function $$a7(e, t, r) {
  let n = e;
  for (; n;) {
    if (r(n)) return n;
    if (n === t) break;
    n = n.parentElement;
  }
  return null;
}
export function $$s4(e) {
  for (;;) {
    var t;
    if (null == e) return null;
    if (null != (t = e) && t instanceof HTMLElement) return e;
    if (!("parentNode" in e)) return null;
    e = e.parentNode;
  }
}
export function $$o5(e) {
  return !!e && !!(u(e) || d(e) || $$_0(e) || e.isContentEditable || e.hasAttribute("tabindex"));
}
export function $$l3(e) {
  return !!e && "INPUT" === e.tagName;
}
function d(e) {
  return !!e && !!("A" === e.tagName && e.hasAttribute("href"));
}
function c(e) {
  return "button" === e.type || "submit" === e.type;
}
function u(e) {
  return !!e && !!("BUTTON" === e.tagName || $$l3(e) && c(e));
}
export function $$p1(e) {
  return d(e) || !!e && !!(u(e) || function (e, ...t) {
    let r = e.getAttribute("role");
    return null !== r && t.includes(r);
  }(e, "button"));
}
export function $$_0(e) {
  return !!e && (!!$$l3(e) && !c(e) || "SELECT" === e.tagName || "TEXTAREA" === e.tagName);
}
export const Ap = $$_0;
export const Bu = $$p1;
export const NX = $$i2;
export const Og = $$l3;
export const SD = $$s4;
export const Xx = $$o5;
export const c2 = $$n6;
export const qR = $$a7;