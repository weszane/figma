import { FFileType } from "../figma_app/191312";
import { oQ, sq, GJ } from "../figma_app/53721";
import { jn } from "../figma_app/522082";
import { vt } from "../figma_app/231614";
export function $$o0(e) {
  return {
    [FFileType.DESIGN]: "toolbar_design_created",
    [FFileType.WHITEBOARD]: "toolbar_figjam_created",
    [FFileType.SLIDES]: "toolbar_slides_created",
    [FFileType.SITES]: `toolbar_${oQ}_created`,
    [FFileType.COOPER]: `toolbar_${sq}_created`,
    [FFileType.FIGMAKE]: `toolbar_${GJ}_created`
  }[e];
}
export function $$l1() {
  let e = vt();
  let t = jn();
  return e || t;
}
export const V = $$o0;
export const k = $$l1;