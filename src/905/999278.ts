import { FJ } from "../vendor/491721";
import { Nx } from "../vendor/850527";
import { Bt } from "../vendor/425002";
import { RT, I2, wH } from "../vendor/408361";
export function $$o2(e) {
  let t = e.anchor;
  let i = e.focus;
  let n = e.anchor.getNode();
  let a = e.focus.getNode();
  return n === a ? n : e.isBackward() ? Nx(i) ? n : a : Nx(t) ? n : a;
}
export function $$l1(e) {
  var t = e;
  /^mailto:/.test(t) || (/^[^\s@\/]+@[^\s@\/]+\.[^\s@\/]+$/.test(t) ? t = `mailto:${t}` : /^https?:\/{2}/.test(t) || (t = `https://${t}`));
  return t;
}
function d(e, t) {
  if (!t) return !1;
  let i = e.getRootElement();
  return !!(i && i.contains(t.startContainer)) && i !== t.startContainer;
}
export function $$c4(e, t) {
  let i = (e._window || window).getSelection();
  let n = i ? i.getRangeAt(0) : null;
  return d(e, n) ? n : d(e, t) ? t : null;
}
export function $$u0(e, t) {
  let i = e.getBoundingClientRect();
  let n = t.getBoundingClientRect();
  let r = i.left - n.left;
  return {
    x: r += i.width / 2,
    y: i.top - n.top,
    offScreen: i.top < n.top || i.bottom > n.bottom
  };
}
export function $$p5(e) {
  if (RT(e)) {
    let t = e.getNodes();
    if (0 === t.length) return !1;
    let i = t[0];
    let r = i?.getParent();
    if (FJ(r) || FJ(i)) return !0;
  } else if (I2(e)) {
    let t = $$o2(e);
    let i = Bt(t, FJ);
    return !!i && !e.getNodes().filter(e => !wH(e)).find(e => {
      let t = Bt(e, FJ);
      return i && !i.is(t) || t && !t.is(i);
    });
  }
  return !1;
}
export function $$m3(e) {
  let t = null;
  let i = null;
  if (I2(e)) {
    t = $$o2(e);
    i = Bt(t, FJ);
  } else if (RT(e)) {
    let n = e.getNodes();
    n.length > 0 && (t = n[0], i = t?.getParent());
  }
  return FJ(i) ? i.getURL() : FJ(t) ? t.getURL() : "";
}
export const Bu = $$u0;
export const Jf = $$l1;
export const OL = $$o2;
export const _Y = $$m3;
export const fF = $$c4;
export const oN = $$p5;