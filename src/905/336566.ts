import { Q } from "../905/586361";
import { F } from "../905/768014";
import { WP } from "../905/36803";
export function $$s2(e) {
  return !!document.activeElement?.closest(`[data-tab-group="${CSS.escape(e.tabGroupId)}"]`);
}
export function $$o4(e) {
  return WP(e).reduce((e, [t, i]) => (i && e.push(t), e), []);
}
export function $$l0(e, t) {
  let i = document.getElementById($$d1(e, t));
  i?.focus();
  Q().fpl_tabs_focus && ("ArrowLeft" === F.key || "ArrowRight" === F.key) && Promise.resolve().then(() => {
    i?.focus();
  });
}
export function $$d1(e, t) {
  return `tab${e}-${t}-trigger`;
}
export function $$c3(e, t) {
  return `tab${e}-${t}-panel`;
}
export const Kq = $$l0;
export const aM = $$d1;
export const au = $$s2;
export const eR = $$c3;
export const nD = $$o4;