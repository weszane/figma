import { useCallback } from "react";
import { glU, rcl } from "../figma_app/763686";
import { az } from "../905/449184";
import { $v } from "../figma_app/370763";
import { LR } from "../figma_app/120210";
import { ar } from "../9410/757252";
export function $$d0() {
  let e = ar();
  return useCallback(t => {
    az.trackDefinedEvent("figjam_advanced_diagramming.shapes_sidebar_open", {});
    e();
    glU && (t?.setToolToDefault ?? !0) && glU.triggerActionEnum(rcl.SET_TOOL_DEFAULT, {});
  }, [e]);
}
export function $$c1() {
  let e = LR();
  return useCallback(() => {
    $v("toggle-menu");
    e();
  }, [e]);
}
export const C = $$d0;
export const V = $$c1;