import { lR } from "../vendor/13174";
import { cX } from "../vendor/707924";
import { Y } from "../vendor/832206";
import { mD, TW } from "../vendor/601638";
let o = null;
let l = new Set();
let s = new Map();
let d = !1;
let c = !1;
function m(e, t) {
  for (let a of l) a(e, t);
}
function h(e) {
  d = !0;
  e.metaKey || !cX() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key || (o = "keyboard", m("keyboard", e));
}
function D(e) {
  o = "pointer";
  ("mousedown" === e.type || "pointerdown" === e.type) && (d = !0, m("pointer", e));
}
function f(e) {
  Y(e) && (d = !0, o = "virtual");
}
function p(e) {
  e.target !== window && e.target !== document && !lR && e.isTrusted && (d || c || (o = "virtual", m("virtual", e)), d = !1, c = !1);
}
function y() {
  lR || (d = !1, c = !0);
}
function g(e) {
  if ("undefined" == typeof window || "undefined" == typeof document || s.get(mD(e))) return;
  let t = mD(e);
  let a = TW(e);
  let u = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function () {
    d = !0;
    u.apply(this, arguments);
  };
  a.addEventListener("keydown", h, !0);
  a.addEventListener("keyup", h, !0);
  a.addEventListener("click", f, !0);
  t.addEventListener("focus", p, !0);
  t.addEventListener("blur", y, !1);
  "undefined" != typeof PointerEvent && (a.addEventListener("pointerdown", D, !0), a.addEventListener("pointermove", D, !0), a.addEventListener("pointerup", D, !0));
  t.addEventListener("beforeunload", () => {
    v(e);
  }, {
    once: !0
  });
  s.set(t, {
    focus: u
  });
}
let v = (e, t) => {
  let a = mD(e);
  let u = TW(e);
  t && u.removeEventListener("DOMContentLoaded", t);
  s.has(a) && (a.HTMLElement.prototype.focus = s.get(a).focus, u.removeEventListener("keydown", h, !0), u.removeEventListener("keyup", h, !0), u.removeEventListener("click", f, !0), a.removeEventListener("focus", p, !0), a.removeEventListener("blur", y, !1), "undefined" != typeof PointerEvent && (u.removeEventListener("pointerdown", D, !0), u.removeEventListener("pointermove", D, !0), u.removeEventListener("pointerup", D, !0)), s.$$delete(a));
};
export function $$b1() {
  return o;
}
export function $$E0(e) {
  o = e;
  m(e, null);
}
"undefined" != typeof document && function (e) {
  let t;
  let a = TW(void 0);
  "loading" !== a.readyState ? g(void 0) : (t = () => {
    g(void 0);
  }, a.addEventListener("DOMContentLoaded", t));
  () => v(e, t);
}();
export const Cl = $$E0;
export const ME = $$b1;