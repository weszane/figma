import { DN } from "../905/657224";
let r = "sidebar-collapsed-sections";
function a(e, t) {
  return "custom" === e.id ? e.type === t.type && e.id === t.id && e.orgId === t.orgId && e.sectionId === t.sectionId : e.type === t.type && e.id === t.id && e.orgId === t.orgId;
}
function s() {
  return DN().get(r) || [];
}
export function $$o1(e, t) {
  let i = DN();
  s().find(t => a(t, e)) ? t && i.set(r, s().filter(t => !a(t, e))) : t || i.set(r, [...s(), e]);
}
export function $$l0() {
  let e = new Set();
  s().forEach(t => {
    "custom" === t.id && t.sectionId ? e.add(t.sectionId) : "favorited" === t.id && e.add(t.id);
  });
  return e;
}
export const CL = $$l0;
export const Fp = $$o1;