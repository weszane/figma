import { w3, dV, $r, JT, Me, $C, Wn } from "../figma_app/728075";
export let $$i3 = [w3, dV, $r, JT, Me, $C, Wn];
export function $$a2(e, t) {
  if (!e) return t[0];
  try {
    let r = e.substring(e.length - 4);
    let n = parseInt(r);
    if (Number.isNaN(n)) return t[Math.abs(function (e) {
      var t = 0;
      if (0 === e.length) return t;
      for (var r = 0; r < e.length; r++) {
        t = (t << 5) - t + e.charCodeAt(r);
        t &= t;
      }
      return t;
    }(e) % t.length)];
    return t[n % t.length];
  } catch (e) {
    return t[0];
  }
}
export function $$s0(e, t) {
  return $$a2(e, t);
}
export function $$o1(e) {
  return e === $C ? "var(--color-textonmultiplayeryellow)" : "var(--color-textonmultiplayerblue)";
}
export const $L = $$s0;
export const Xx = $$o1;
export const sC = $$a2;
export const us = $$i3;