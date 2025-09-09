import { useSelector } from "react-redux";
import { mH, dF, Dx } from "../905/917193";
export function $$a0() {
  return useSelector(e => e.modalShown?.type === mH);
}
export function $$s1() {
  return useSelector(e => e.modalShown?.type === mH || e.modalShown?.type === dF || e.modalShown?.type === Dx);
}
export const P = $$a0;
export const i = $$s1;
