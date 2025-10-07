import { useCallback } from "react";
import { fullscreenValue } from "../figma_app/455680";
import { normalizeTrackingEnum } from "../figma_app/741237";
import { useSelectionPropertyValue } from "../905/275640";
import { fullscreenHandler } from "../905/258517";
import { yesNoTrackingEnum } from "../figma_app/198712";
let $$d3 = ["NORMAL", "SELECT_DIVIDER", "DARKEN", "MULTIPLY", "LINEAR_BURN", "COLOR_BURN", "SELECT_DIVIDER", "LIGHTEN", "SCREEN", "LINEAR_DODGE", "COLOR_DODGE", "SELECT_DIVIDER", "OVERLAY", "SOFT_LIGHT", "HARD_LIGHT", "SELECT_DIVIDER", "DIFFERENCE", "EXCLUSION", "SELECT_DIVIDER", "HUE", "SATURATION", "COLOR", "LUMINOSITY"];
let $$c1 = ["PASS_THROUGH"].concat($$d3);
export function $$u0(e) {
  let t = [[]];
  for (let r of e) "SELECT_DIVIDER" === r ? t.push([]) : t[t.length - 1]?.push(r);
  return t;
}
export function $$p4() {
  return [useSelectionPropertyValue("blendMode"), useCallback((e, t = yesNoTrackingEnum.YES) => {
    normalizeTrackingEnum(t) && fullscreenHandler.trackFromFullscreen("editor-blend-mode-change", {
      blendMode: e
    });
    fullscreenValue.updateSelectionProperties({
      blendMode: e,
      visible: !0
    }, {
      shouldCommit: t
    });
  }, [])];
}
export function $$_2(e, t) {
  return e === t;
}
export const GZ = $$u0;
export const j4 = $$c1;
export const qg = $$_2;
export const r5 = $$d3;
export const sL = $$p4;