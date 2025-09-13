import { PublicLinkControlsSetting } from "../figma_app/482728";
export function $$i3(e) {
  switch (e) {
    case null:
    case void 0:
      return PublicLinkControlsSetting.ALLOWED;
    default:
      return e;
  }
}
export function $$a0(e) {
  return $$i3(e?.public_link_controls_setting) === PublicLinkControlsSetting.BANNED;
}
export function $$s2(e) {
  return [PublicLinkControlsSetting.EXPIRATION_REQUIRED, PublicLinkControlsSetting.EXP_AND_PWD_REQUIRED].includes($$i3(e?.public_link_controls_setting));
}
export function $$o1(e) {
  return [PublicLinkControlsSetting.PASSWORD_REQUIRED, PublicLinkControlsSetting.EXP_AND_PWD_REQUIRED].includes($$i3(e?.public_link_controls_setting));
}
export const Bg = $$a0;
export const Cy = $$o1;
export const Q3 = $$s2;
export const d6 = $$i3;