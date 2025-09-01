import { FFileType } from "../figma_app/191312";
export function $$i4(e) {
  return e.currentUser.userFlags.reduce((e, t) => (e[t.name] = t, e), {}) || {};
}
export function $$a3(e, t) {
  let r = e[t]?.updatedAt;
  if (!r) return !1;
  let n = Date.now() - 864e5;
  return r.getTime() > n;
}
export function $$s2(e, t, r, n) {
  let i = e[r]?.[t]?.updatedAt;
  return !!i && Date.now() - i.getTime() < n;
}
export function $$o1(e) {
  return e.signed_up_from_figjam_jamboard || e.signed_up_from_figjam_page ? FFileType.WHITEBOARD : e.signed_up_from_figma_page ? FFileType.DESIGN : e.signed_up_from_community ? "community" : void 0;
}
export function $$l5(e, t) {
  return !!e[t];
}
export function $$d0(e) {
  return document.querySelectorAll(`[data-onboarding-key=${JSON.stringify(e)}]`).length > 0;
}
export function $$c6(e) {
  let t = $$o1(e);
  return "whiteboard" === t || "community" === t;
}
export const KI = $$d0;
export const MS = $$o1;
export const gY = $$s2;
export const jj = $$a3;
export const kd = $$i4;
export const mW = $$l5;
export const of = $$c6;