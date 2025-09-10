import { useCallback } from "react";
import { isVsCodeEnvironment } from "../905/858738";
import { Qn } from "../figma_app/415217";
export function $$s1(e) {
  let t = useCallback(t => {
    $$o0(e) && t.preventDefault();
  }, [e]);
  return {
    href: isVsCodeEnvironment() ? void 0 : e,
    onClick: isVsCodeEnvironment() ? t : void 0
  };
}
export function $$o0(e) {
  return !!isVsCodeEnvironment() && (Qn(e), !0);
}
export const I = $$o0;
export const y = $$s1;