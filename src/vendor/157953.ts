var $$i12 = Math.abs;
var $$s4 = String.fromCharCode;
var $$o10 = Object.assign;
export function $$a11(e, r) {
  return 45 ^ $$m13(e, 0) ? (((r << 2 ^ $$m13(e, 0)) << 2 ^ $$m13(e, 1)) << 2 ^ $$m13(e, 2)) << 2 ^ $$m13(e, 3) : 0;
}
export function $$h1(e) {
  return e.trim();
}
export function $$d6(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
export function $$p3(e, r, n) {
  return e.replace(r, n);
}
export function $$g5(e, r) {
  return e.indexOf(r);
}
export function $$m13(e, r) {
  return 0 | e.charCodeAt(r);
}
export function $$v8(e, r, n) {
  return e.slice(r, n);
}
export function $$y7(e) {
  return e.length;
}
export function $$b2(e) {
  return e.length;
}
export function $$O0(e, r) {
  r.push(e);
  return e;
}
export function $$x9(e, r) {
  return e.map(r).join("");
}
export const BC = $$O0;
export const Bq = $$h1;
export const FK = $$b2;
export const HC = $$p3;
export const HT = $$s4;
export const K5 = $$g5;
export const YW = $$d6;
export const b2 = $$y7;
export const c1 = $$v8;
export const kg = $$x9;
export const kp = $$o10;
export const tW = $$a11;
export const tn = $$i12;
export const wN = $$m13;