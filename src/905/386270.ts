import { y0x } from "../figma_app/763686";
import { getI18nString } from "../905/303541";
export let $$a4 = [y0x.WEB, y0x.ANDROID, y0x.iOS];
export function $$s2(e) {
  switch (e) {
    case "0":
      return y0x.WEB;
    case "1":
      return y0x.ANDROID;
    case "2":
      return y0x.iOS;
  }
  return null;
}
export function $$o1(e) {
  switch (e) {
    case y0x.WEB:
      return getI18nString("variables.edit_modal.platforms.web");
    case y0x.ANDROID:
      return getI18nString("variables.edit_modal.platforms.android");
    case y0x.iOS:
      return getI18nString("variables.edit_modal.platforms.ios");
  }
}
export function $$l3(e) {
  switch (e) {
    case y0x.WEB:
      return "web";
    case y0x.ANDROID:
      return "android";
    case y0x.iOS:
      return "ios";
  }
}
export function $$d0(e) {
  switch (e) {
    case "WEB":
      return y0x.WEB;
    case "ANDROID":
      return y0x.ANDROID;
    case "iOS":
      return y0x.iOS;
  }
  return null;
}
export const SR = $$d0;
export const lo = $$o1;
export const ov = $$s2;
export const r8 = $$l3;
export const tq = $$a4;