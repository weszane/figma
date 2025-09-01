import { useContext } from "react";
import { ZC } from "../figma_app/39751";
import { to } from "../figma_app/828186";
import { t } from "../figma_app/501766";
export function $$o1() {
  let {
    isLeftPanelCollapsed
  } = useContext(t);
  return to() || isLeftPanelCollapsed;
}
export function $$l0() {
  let e = $$o1();
  let t = to();
  return ZC(e) !== e || t;
}
export const T = $$l0;
export const q = $$o1;