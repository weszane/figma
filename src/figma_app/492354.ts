import { aH } from "../figma_app/273493";
import { zl } from "../figma_app/27355";
import { Jq, rN, $R } from "../figma_app/967873";
import { B } from "../figma_app/397954";
import { w } from "../figma_app/106955";
export let $$n0;
class d {
  getEyedropperContext() {
    return zl.get(B);
  }
  updateEditPaletteModalColor(e) {
    let t = zl.get(Jq);
    let r = zl.get(rN);
    let n = [...r.slice(0, t), aH(e), ...r.slice(t + 1)];
    zl.set(rN, n);
  }
  isCustomPaletteApplied() {
    return !!zl.get($R);
  }
  showSectionPresets() {
    return zl.get(w);
  }
}
export function $$c1() {
  $$n0 = new d();
}
export const nz = $$n0;
export const pP = $$c1;