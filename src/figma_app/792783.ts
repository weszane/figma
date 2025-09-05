import { useSelector } from "../vendor/514228";
import { md } from "../vendor/525001";
import { D } from "../905/12032";
export function $$s0() {
  return useSelector(e => "WHEEL" === e.multiplayerEmoji.type);
}
export function $$o2() {
  return useSelector(e => e.universalInsertModal.showing);
}
export function $$l1() {
  let e = !!md(D);
  let t = useSelector(e => !!e.modalShown);
  return e || t;
}
export const T$ = $$s0;
export const WC = $$l1;
export const wi = $$o2;