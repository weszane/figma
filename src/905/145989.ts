import { localStorageRef } from "../905/657224";
import { P } from "../905/724705";
import { fi, QC } from "../905/461516";
var $$s0 = (e => (e.DESKTOP = "spellCheckDesktopLanguage", e.HUNSPELL = "spellCheckHunspellLanguage", e))($$s0 || {});
let o = "spellCheckLanguage";
export function $$l2() {
  if (localStorageRef) {
    let e = localStorageRef.getItem(o);
    if (null === e) return;
    let t = "string" == typeof localStorageRef.getItem("spellCheckDesktopLanguage");
    let i = "string" == typeof localStorageRef.getItem("spellCheckHunspellLanguage");
    t || i || (Object.keys(fi).includes(e) ? $$c1("spellCheckHunspellLanguage", e) : $$c1("spellCheckDesktopLanguage", e), localStorageRef.removeItem(o));
  }
}
export function $$d4(e) {
  switch (e) {
    case QC.DESKTOP:
    case QC.AGENT:
      return "spellCheckDesktopLanguage";
    case QC.HUNSPELL:
      return "spellCheckHunspellLanguage";
  }
}
export function $$c1(e, t) {
  localStorageRef && (localStorageRef.setItem(e, t), new P().sendToOtherTabs(e));
}
export function $$u3(e) {
  return localStorageRef && localStorageRef.getItem(e) || null;
}
export const Kz = $$s0;
export const Up = $$c1;
export const hO = $$l2;
export const l9 = $$u3;
export const up = $$d4;