import { useSelector } from "react-redux";
import { useAtomValue } from "../vendor/525001";
import { overlayStateAtom } from "../905/12032";
export function $$s0() {
  return useSelector(e => "WHEEL" === e.multiplayerEmoji.type);
}
export function $$o2() {
  return useSelector(e => e.universalInsertModal.showing);
}
export function $$l1() {
  let e = !!useAtomValue(overlayStateAtom);
  let t = useSelector(e => !!e.modalShown);
  return e || t;
}
export const T$ = $$s0;
export const WC = $$l1;
export const wi = $$o2;