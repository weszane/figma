import { C } from "../905/306099";
import { getInitialOptions } from "../figma_app/169182";
import { f } from "../905/561988";
export function $$s9(e) {
  return /^[^<>\/\\:?*"|]*$/.test(e) && /^[\u0000-\u007F]+$/.test(e) && /^[^@\s]+@[^@\s]+\.[^@\s]+$/i.test(e);
}
export function $$o1(e) {
  let t = [];
  for (let r of e.split(/[;,\n]/g)) {
    let e = r.match(/^.*<(.*)>$/);
    e && (r = e[1]);
    (r = r.trim()) && t.push(r);
  }
  return t;
}
let l = C;
let d = {};
l.forEach(e => d[e] = !0);
let c = ["ge.com"];
export function $$u3(e) {
  if (e in d || c.includes(e)) return null;
  for (let t of l) if (1 === f(e, t)) return t;
  return null;
}
export function $$p10(e) {
  return e.toLowerCase().split("@")[1] || null;
}
export function $$_7(e) {
  return !!e && e.endsWith(getInitialOptions().figma_email_suffix);
}
export function $$h8(e) {
  let t = $$p10(e);
  return !!t && t in d;
}
export function $$m0(e) {
  if (e) {
    let t = $$p10(e);
    if ($$h8(e)) return !1;
    if (t) return !0;
  }
  return !1;
}
export function $$g5(e) {
  return "work" === (e.meta ? e.meta.email_domain_type : void 0);
}
export function $$f6(e) {
  return !!e && $$s9(e) && (e.endsWith("@figma.com") || e.endsWith("@test.figma.com") || e.endsWith("@dev.figma.com"));
}
export function $$E2(e) {
  return !!e && e.startsWith("synthetic-tester") && e.endsWith("@test.figma.com");
}
export function $$y4(e) {
  return "support-share@figma.com" === e;
}
export const HS = $$m0;
export const N0 = $$o1;
export const Ng = $$E2;
export const bs = $$u3;
export const fT = $$y4;
export const iE = $$g5;
export const jm = $$f6;
export const nD = $$_7;
export const qe = $$h8;
export const xf = $$s9;
export const zN = $$p10;
