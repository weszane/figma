import { PlatformType } from "../figma_app/763686";
import { getI18nString } from "../905/303541";
export let $$a4 = [PlatformType.WEB, PlatformType.ANDROID, PlatformType.iOS];
export function $$s2(e) {
  switch (e) {
    case "0":
      return PlatformType.WEB;
    case "1":
      return PlatformType.ANDROID;
    case "2":
      return PlatformType.iOS;
  }
  return null;
}
export function $$o1(e) {
  switch (e) {
    case PlatformType.WEB:
      return getI18nString("variables.edit_modal.platforms.web");
    case PlatformType.ANDROID:
      return getI18nString("variables.edit_modal.platforms.android");
    case PlatformType.iOS:
      return getI18nString("variables.edit_modal.platforms.ios");
  }
}
export function $$l3(e) {
  switch (e) {
    case PlatformType.WEB:
      return "web";
    case PlatformType.ANDROID:
      return "android";
    case PlatformType.iOS:
      return "ios";
  }
}
export function $$d0(e) {
  switch (e) {
    case "WEB":
      return PlatformType.WEB;
    case "ANDROID":
      return PlatformType.ANDROID;
    case "iOS":
      return PlatformType.iOS;
  }
  return null;
}
export const SR = $$d0;
export const lo = $$o1;
export const ov = $$s2;
export const r8 = $$l3;
export const tq = $$a4;