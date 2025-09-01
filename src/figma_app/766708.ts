import n, { KF } from "../figma_app/465776";
export function $$i0(e, t) {
  return +(e < t) - +(e > t);
}
export let $$a2 = "!";
export function $$s6(e) {
  if ("" === e || 32 == e.charCodeAt(e.length - 1)) return !1;
  for (let t = 0; t < e.length; t++) {
    let r = e.charCodeAt(t);
    if (r < 32 || r > 126) return !1;
  }
  return !0;
}
export function $$o4(e) {
  KF(0 !== e.length, "");
  let t = e.length - 1;
  let r = t;
  for (; r >= 0;) {
    let t = e.charCodeAt(r);
    if (t > 33) {
      let i = e.substr(0, r) + String.fromCharCode(t - 1);
      KF($$s6(i), "");
      return i;
    }
    r--;
  }
  let i = e.substr(0, t) + " ~";
  KF($$s6(i), "");
  return i;
}
export function $$l3(e) {
  KF(0 !== e.length, "");
  let t = e.length - 1;
  for (; t >= 0;) {
    let r = e.charCodeAt(t);
    if (r < 126) {
      let i = e.substr(0, t) + String.fromCharCode(r + 1);
      KF($$s6(i), "");
      return i;
    }
    t--;
  }
  let r = e + "!";
  KF($$s6(r), "");
  return r;
}
export function $$d5(e, t) {
  KF(e < t, "");
  let r = e.length;
  let i = t.length;
  let a = !1;
  let o = "";
  for (function () {
    let n = 0;
    let s = Math.max(r, i);
  }(); n < s; n++) {
    let s = n < r ? e.charCodeAt(n) : 32;
    let l = n < i && !a ? t.charCodeAt(n) : 126;
    if (s == l) o += String.fromCharCode(s);else if (l - s > 1) {
      o += String.fromCharCode(s + l >> 1);
      a = !1;
      break;
    } else {
      o += String.fromCharCode(s);
      a = !0;
    }
  }
  a && (o += "O");
  KF(e < o, "");
  KF(o < t, "");
  KF($$s6(o), "");
  return o;
}
let c = Math.floor(Math.log10(95) + 1);
export function $$u1(e) {
  let t = [];
  for (let r = 0; r < e.length; r++) {
    let n = (e.charCodeAt(r) - 32) / 95;
    t.push(n.toFixed(c).slice(2, 2 + c));
  }
  return parseFloat(`0.${t.join("")}`);
}
export const Ez = $$i0;
export const PZ = $$u1;
export const TZ = $$a2;
export const e6 = $$l3;
export const hu = $$o4;
export const kI = $$d5;
export const qO = $$s6;