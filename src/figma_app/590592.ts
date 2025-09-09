import { useContext } from "react";
import { useLatestRef } from "../figma_app/922077";
import { useIsSelectedViewFullscreenCooper } from "../figma_app/828186";
import { t } from "../figma_app/501766";
export function $$o1() {
  let {
    isLeftPanelCollapsed
  } = useContext(t);
  return useIsSelectedViewFullscreenCooper() || isLeftPanelCollapsed;
}
export function $$l0() {
  let e = $$o1();
  let t = useIsSelectedViewFullscreenCooper();
  return useLatestRef(e) !== e || t;
}
export const T = $$l0;
export const q = $$o1;