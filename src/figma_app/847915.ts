export function $$n3(e) {
  return "children" in e || "childDropdown" in e;
}
export function $$i6(e) {
  return "action" in e || "callback" in e;
}
export function $$a12(e) {
  return "separator" in e;
}
export function $$s9(e) {
  return "header" in e;
}
export function $$o11(e) {
  return "render" in e;
}
export function $$l5(e) {
  let t = "propertyValue" in e && void 0 !== e.propertyValue;
  return "checked" in e || t;
}
export function $$d4(e, t) {
  var r;
  return !!t.checked || null != t.property && ("string" == typeof (r = t.property) ? e[r] : r.getCopy()) === t.propertyValue;
}
export function $$c8(e, t) {
  return "string" == typeof t ? e[t] : t.getCopy();
}
export function $$u0(e) {
  return e.action || e.name;
}
let $$p15 = "edit-menu";
let $$_7 = "view-menu";
let $$h1 = "object-menu";
let $$m16 = "vector-menu";
let $$g2 = "text-menu";
let $$f14 = "arrange-menu";
let $$E13 = "preferences-menu";
let $$y10 = "figma-account-menu";
export const Dz = $$u0;
export const M3 = $$h1;
export const MH = $$g2;
export const TV = $$n3;
export const WJ = $$d4;
export const Zj = $$l5;
export const _o = $$i6;
export const _p = $$_7;
export const f4 = $$c8;
export const gN = $$s9;
export const hV = $$y10;
export const id = $$o11;
export const k$ = $$a12;
export const lW = $$E13;
export const pn = $$f14;
export const rH = $$p15;
export const u2 = $$m16;