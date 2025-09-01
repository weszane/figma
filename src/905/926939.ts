import { UN } from "../905/700578";
import { Sn, K } from "../905/327738";
let $$a1 = "Icons";
let s = [$$a1];
let $$o0 = "Unknown";
let $$l7 = "Building Blocks";
function d(e, t) {
  return (e = e.replace(/[^0-9a-z]/gi, "").toLowerCase()) === (t = t.replace(/[^0-9a-z]/gi, "").toLowerCase());
}
export function $$c3(e, t) {
  for (let i of e.split(" / ")) if (d(i, t)) return !0;
  return !1;
}
export function $$u6(e) {
  return $$p5(e.componentGroupPath);
}
export function $$p5(e) {
  for (let t of s) if ($$c3(e, t)) return t;
  return null;
}
export function $$m8(e) {
  let t = UN().get(e);
  if (!t) return "";
  let i = [];
  let r = t.parentNode;
  for (; r && (("CANVAS" === r.type || "SECTION" === r.type) && i.push(r.name), "CANVAS" !== r.type && "DOCUMENT" !== r.type);) r = r.parentNode;
  i.reverse();
  return i.join(" / ");
}
export function $$h4(e) {
  var t;
  t = (t = e).endsWith("s") ? t.slice(0, t.length - 1) : t;
  return `Custom${Sn(t)}`;
}
export function $$g2(e, t, i) {
  let n = function (e, t) {
    let i = t.parentNode;
    for (; i && !d(i.name, e);) i = i.parentNode;
    return i;
  }(e, t);
  if (!n) return null;
  for (let e of K(n.guid ?? "")) if (d(e.name, i)) return e.guid;
  return null;
}
export const $x = $$o0;
export const C = $$a1;
export const Lq = $$g2;
export const Se = $$c3;
export const VV = $$h4;
export const iR = $$p5;
export const vR = $$u6;
export const vh = $$l7;
export const yu = $$m8;