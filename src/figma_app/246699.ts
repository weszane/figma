import { w_ } from "../figma_app/482728";
export function $$i3(e) {
  switch (e) {
    case null:
    case void 0:
      return w_.ALLOWED;
    default:
      return e;
  }
}
export function $$a0(e) {
  return $$i3(e?.public_link_controls_setting) === w_.BANNED;
}
export function $$s2(e) {
  return [w_.EXPIRATION_REQUIRED, w_.EXP_AND_PWD_REQUIRED].includes($$i3(e?.public_link_controls_setting));
}
export function $$o1(e) {
  return [w_.PASSWORD_REQUIRED, w_.EXP_AND_PWD_REQUIRED].includes($$i3(e?.public_link_controls_setting));
}
export const Bg = $$a0;
export const Cy = $$o1;
export const Q3 = $$s2;
export const d6 = $$i3;