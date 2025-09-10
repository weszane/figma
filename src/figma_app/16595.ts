import { normalizedToRgb } from "../figma_app/273493";
import { atomStoreManager } from "../figma_app/27355";
import { areColorsEqual } from "../figma_app/191804";
import { $R, Uh } from "../figma_app/967873";
export let $$n1;
class l {
  isCustomPaletteColor(e, t) {
    let r = atomStoreManager.get($R);
    if (r) {
      let n = normalizedToRgb(e);
      for (let e of Uh(t)) if (r[e].some(e => areColorsEqual(n, e))) return !0;
    }
    return !1;
  }
}
export function $$d0() {
  $$n1 = new l();
}
export const bJ = $$d0;
export const bN = $$n1;