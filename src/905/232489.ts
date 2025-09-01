import n from "../vendor/77708";
import a from "../vendor/602385";
var r = n;
var s = a;
export function $$o2(e) {
  let t = p(e).trim().replace(/[\s\/]+/g, "-");
  if (t.match(/^[-A-Za-z0-9_]*$/)) return t;
  let i = u(t).replace(/[A-Z]+(?![a-z])|[A-Z]|[0-9]+/g, (e, t) => (0 !== t ? "-" : "") + e.toLowerCase()).replace(/^[^A-Za-z0-9\-]+/, "");
  return "" === i ? "unnamed" : i;
}
export function $$l1(e) {
  let t = u(p(e)).replace(/^[^A-Za-z]+/, "");
  return "" === t ? "unnamed" : t;
}
export function $$d0(e) {
  return $$l1(e);
}
export function $$c3(e) {
  let t = u(e);
  t.match(/^\d/g) && (t = `_${t}`);
  return (t = p(t).replace(/\W/g, "_")) || "_";
}
function u(e) {
  return s()(e.replace(/['\u2019]/g, "")).reduce((e, t, i) => i ? e + r()(t) : e + t, "");
}
function p(e) {
  return e.replace(/[\u007F-\uFFFF]/g, "").replace(/\'/g, "").replace(/\"/g, "").replace(/\r\n/g, " ").replace(/\n/g, " ").replace(/\r/g, " ");
}
export const LE = $$d0;
export const O$ = $$l1;
export const OX = $$o2;
export const YT = $$c3;