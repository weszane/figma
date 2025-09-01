import { gn } from "../figma_app/322845";
import { qs } from "../905/608145";
function a(e) {
  let t = "insert-local-widget" === e.menuAction.type;
  let r = "run-local-plugin" === e.menuAction.type;
  return qs(e) ? t ? "Widgets Development" : "Widgets" : r ? "Plugins Development" : "Plugins";
}
export function $$s4() {
  return gn();
}
export function $$o0(e, t) {
  let r = e.path;
  if ("plugin-name" !== e.name.type) return "";
  let n = a(e);
  return $$s4() && t ? [...r.slice(1), e.name.plugin].join(" ") : [n, ...r, e.name.plugin].join(" ");
}
export function $$l1(e) {
  return e.submenu.find(e => "run-menu-action" === e.type);
}
export function $$d3(e) {
  let t = $$l1(e);
  return t ? [a(t), e.name].join(" ") : e.name;
}
export function $$c2(e) {
  return e.itemPath && 0 !== e.itemPath.length ? e.itemPath[e.itemPath.length - 1] : "";
}
export const Nh = $$o0;
export const S3 = $$l1;
export const TW = $$c2;
export const bf = $$d3;
export const pI = $$s4;