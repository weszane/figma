import { x4 } from "../905/657224";
import { P } from "../905/724705";
import { Qr } from "../905/690539";
let s = "fontPickerFontSet";
let o = new P();
export function $$l0(e) {
  x4 && (x4.setItem(s, e), o.sendToOtherTabs(s));
}
export function $$d1() {
  var e;
  e = x4?.getItem(s) || null;
  return Object.values(Qr).find(t => t === e) ?? Qr.ALL_FONTS;
}
export const Uh = $$l0;
export const jB = $$d1;