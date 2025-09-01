import { d4 } from "../vendor/514228";
import { md } from "../vendor/525001";
import { D } from "../905/12032";
export function $$s0() {
  return d4(e => "WHEEL" === e.multiplayerEmoji.type);
}
export function $$o2() {
  return d4(e => e.universalInsertModal.showing);
}
export function $$l1() {
  let e = !!md(D);
  let t = d4(e => !!e.modalShown);
  return e || t;
}
export const T$ = $$s0;
export const WC = $$l1;
export const wi = $$o2;