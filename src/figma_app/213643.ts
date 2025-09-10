import { normalizedToRgb, rgbToNormalized } from "../figma_app/273493";
import { jA, Hd, Wn } from "../figma_app/583114";
export let $$n0;
class s {
  calculateColorWithRampValue(e, t) {
    let r = jA(normalizedToRgb(e), t);
    return r ? rgbToNormalized(r) : null;
  }
  calculateColorWithRelativeAdjustment(e, t) {
    let r = Hd(normalizedToRgb(e), t);
    return r ? rgbToNormalized(r) : null;
  }
  getRampValueForColor(e) {
    return Wn(normalizedToRgb(e));
  }
}
export function $$o1() {
  $$n0 = new s();
}
export const C5 = $$n0;
export const YL = $$o1;