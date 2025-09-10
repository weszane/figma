import { tp, Kr, AO } from "../vendor/111975";
import { R } from "../905/987614";
export function $$a3(e) {
  return document.activeElement === e;
}
export function $$s2(e) {
  return e.contains(document.activeElement);
}
export function $$o5(e) {
  return R(e, tp);
}
export function $$l6(e) {
  return e ? (e.focus(), "select" in e && "function" == typeof e.select && e.select(), e) : null;
}
export function $$d1(e) {
  return Kr(e, {
    getShadowRoot: !0
  });
}
export function $$c4(e) {
  let t = p(e);
  let i = t.nextNode();
  t.currentNode = e;
  return [i, g(t)];
}
export function $$u0(e, {
  criteria: t = "tabbable"
} = {}) {
  let i = "tabbable" === t ? p : m;
  return {
    focusNext({
      wrap: t = !1
    } = {}) {
      let n = e.current;
      if (!n) return null;
      let r = i(n, document.activeElement);
      let a = r.nextNode();
      !a && t && (r.currentNode = n, a = r.nextNode());
      return $$l6(a);
    },
    focusPrevious({
      wrap: t
    } = {}) {
      let n = e.current;
      if (!n) return null;
      let r = i(n, document.activeElement);
      if (r.currentNode === n) return $$l6(g(r));
      let a = r.previousNode();
      return ((!a || a === n) && t && (r.currentNode = n, a = g(r)), a === n) ? null : $$l6(a);
    },
    focusFirst() {
      let t = e.current;
      return t ? $$l6(i(t).nextNode()) : null;
    },
    focusLast() {
      let t = e.current;
      return t ? $$l6(g(i(t))) : null;
    }
  };
}
let p = h(AO);
let m = h(tp);
function h(e) {
  return (t, i) => {
    let n = document.createTreeWalker(t, 1, t => e(t) ? 1 : 3);
    t.contains(i) && (n.currentNode = i);
    return n;
  };
}
function g(e) {
  for (; e.lastChild(););
  return e.currentNode;
}
export const C7 = $$u0;
export const Jc = $$d1;
export const ae = $$s2;
export const ar = $$a3;
export const bk = $$c4;
export const bq = $$o5;
export const pW = $$l6;
