import { localStorageRef } from "../905/657224";
import { IpcStorageHandler } from "../905/724705";
import { Qr } from "../905/690539";
let s = "fontPickerFontSet";
let o = new IpcStorageHandler();
export function $$l0(e) {
  localStorageRef && (localStorageRef.setItem(s, e), o.sendToOtherTabs(s));
}
export function $$d1() {
  var e;
  e = localStorageRef?.getItem(s) || null;
  return Object.values(Qr).find(t => t === e) ?? Qr.ALL_FONTS;
}
export const Uh = $$l0;
export const jB = $$d1;