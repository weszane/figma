import { D } from "../905/347702";
import { accentedCharacters } from "../905/994647";
export function $$a4(e, t = "A") {
  return e.replace(/\w/g, t);
}
let s = "\uFEFF\u2005\uFEFF\xb7\uFEFF\u2005";
let o = e => Math.ceil(2.1 * e / 10.18);
let $$l3 = D(e => {
  let t = [];
  let r = e.split("");
  let n = 0;
  if (r.forEach(e => {
    if (" " === e) {
      for (let e = 0; e < o(n); e++) t.push(s);
      n = 0;
    } else n++;
    t.push(accentedCharacters[e] ?? e);
  }), n > 0) for (let e = 0; e < o(n); e++) t.push(s);
  return t.join("");
});
export function $$d1(e, t = "[~", r = "~]") {
  return [t, ...e, r];
}
export function $$c0(e) {
  return e.split("").map(e => e.charCodeAt(0).toString(2).padStart(8, "0")).join("").split("").map(e => "0" === e ? "\u200B" : "\u200C").join("");
}
export function $$u2(e) {
  return (e.split("").map(e => "\u200B" === e ? "0" : "1").join("").match(/.{8}/g) || []).map(e => String.fromCharCode(parseInt(e, 2))).join("");
}
export const Bs = $$c0;
export const Jq = $$d1;
export const P5 = $$u2;
export const Sv = $$l3;
export const Zs = $$a4;