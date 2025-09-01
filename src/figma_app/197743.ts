import { y$, QP } from "../vendor/202832";
let i = /^\[(?:([a-z-]+):)?(.+)\]$/i;
export function $$a2(e, t = 0) {
  let r = i.exec(e);
  if (r && r[2].endsWith("px")) {
    let e = r[2].slice(0, r[2].length - 2);
    if (t > 0) {
      let t = Number(e);
      return isNaN(t) ? null : Number(t.toFixed(2));
    }
    return y$.isInteger(e) ? Number(e) : null;
  }
  return null;
}
export function $$s5(e) {
  let t = i.exec(e);
  if (t && t[2].endsWith("%")) {
    let e = t[2].slice(0, t[2].length - 1);
    return y$.isInteger(e) ? Number(e) : null;
  }
  return null;
}
export function $$o4(e) {
  let t = i.exec(e);
  if (t && t[2]) {
    let e = t[2];
    return y$.isNumber(e) ? Number(e) : null;
  }
  return null;
}
export function $$l1(e) {
  let t = i.exec(e);
  return t && t[2].startsWith("#") ? t[2] : null;
}
let $$d0 = /\s+/;
let $$c7 = "-";
export function $$u3(e) {
  let t = !1;
  let r = e.split($$c7);
  "" === r[0] && 1 !== r.length && (t = !0, r.shift());
  return {
    classParts: r,
    isNegative: t,
    className: e
  };
}
export function $$p6(e) {
  let t = QP(e);
  let r = t.includes("flex-col") ? "vertical" : "horizontal";
  return t.split($$d0).map(e => ({
    ...$$u3(e),
    flexDirection: r
  }));
}
export const AD = $$d0;
export const G2 = $$l1;
export const Hc = $$a2;
export const Zx = $$u3;
export const kG = $$o4;
export const kX = $$s5;
export const mu = $$p6;
export const rR = $$c7;