import { kp, wN, c1, b2, Bq, HT } from "../vendor/157953";
var s = 1;
var o = 1;
var a = 0;
var $$h2 = 0;
var d = 0;
var p = "";
export function $$g15(e, r, n, i, a, h, d) {
  return {
    value: e,
    root: r,
    parent: n,
    type: i,
    props: a,
    children: h,
    line: s,
    column: o,
    length: d,
    return: ""
  };
}
export function $$m0(e, r) {
  return kp($$g15("", null, null, "", null, null, 0), e, {
    length: -e.length
  }, r);
}
export function $$v8() {
  return d;
}
export function $$y10() {
  d = $$h2 > 0 ? wN(p, --$$h2) : 0;
  o--;
  10 === d && (o = 1, s--);
  return d;
}
export function $$b3() {
  d = $$h2 < a ? wN(p, $$h2++) : 0;
  o++;
  10 === d && (o = 1, s++);
  return d;
}
export function $$O16() {
  return wN(p, $$h2);
}
export function $$x5() {
  return $$h2;
}
export function $$w12(e, r) {
  return c1(p, e, r);
}
export function $$k6(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
export function $$_11(e) {
  s = o = 1;
  a = b2(p = e);
  $$h2 = 0;
  return [];
}
export function $$S9(e) {
  p = "";
  return e;
}
export function $$E7(e) {
  return Bq($$w12($$h2 - 1, T(91 === e ? e + 2 : 40 === e ? e + 1 : e)));
}
export function $$A13(e) {
  for (; d = $$O16();) if (d < 33) $$b3();else break;
  return $$k6(e) > 2 || $$k6(d) > 3 ? "" : " ";
}
export function $$$$C4(e, r) {
  for (; --r && $$b3() && !(d < 48) && !(d > 102) && (!(d > 57) || !(d < 65)) && (!(d > 70) || !(d < 97)););
  return $$w12(e, $$x5() + (r < 6 && 32 == $$O16() && 32 == $$b3()));
}
function T(e) {
  for (; $$b3();) switch (d) {
    case e:
      return $$h2;
    case 34:
    case 39:
      34 !== e && 39 !== e && T(d);
      break;
    case 40:
      41 === e && T(e);
      break;
    case 92:
      $$b3();
  }
  return $$h2;
}
export function $$I14(e, r) {
  for (; $$b3();) if (e + d === 57) break;else if (e + d === 84 && 47 === $$O16()) break;
  return "/*" + $$w12(r, $$h2 - 1) + "*" + HT(47 === e ? e : $$b3());
}
export function $$P1(e) {
  for (; !$$k6($$O16());) $$b3();
  return $$w12(e, $$h2);
}
export const C = $$m0;
export const Cv = $$P1;
export const G1 = $$h2;
export const K2 = $$b3;
export const Nc = $$$$C4;
export const OW = $$x5;
export const Sh = $$k6;
export const Tb = $$E7;
export const Tp = $$v8;
export const VF = $$S9;
export const YL = $$y10;
export const c4 = $$_11;
export const di = $$w12;
export const mw = $$A13;
export const nf = $$I14;
export const rH = $$g15;
export const se = $$O16;