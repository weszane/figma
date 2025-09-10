import { useCallback } from "react";
import { T } from "src/905/858738";
import { Qn } from "src/figma_app/415217";
export function $$s1(e) {
  let t = useCallback(t => {
    $$o0(e) && t.preventDefault();
  }, [e]);
  return {
    href: T() ? void 0 : e,
    onClick: T() ? t : void 0
  };
}
export function $$o0(e) {
  return !!T() && (Qn(e), !0);
}
export const I = $$o0;
export const y = $$s1;
