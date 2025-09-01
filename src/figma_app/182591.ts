import { enabledButton, activeButton, disabledButton } from "../figma_app/430407";
export function $$i0(e, t, r = !0) {
  let a = enabledButton;
  e ? t && r && (a = activeButton) : a = disabledButton;
  return a;
}
export const M = $$i0;