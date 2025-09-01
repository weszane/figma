import { aH } from "../figma_app/273493";
import { zl } from "../figma_app/27355";
import { DA } from "../figma_app/191804";
import { $R, Uh } from "../figma_app/967873";
export let $$n1;
class l {
  isCustomPaletteColor(e, t) {
    let r = zl.get($R);
    if (r) {
      let n = aH(e);
      for (let e of Uh(t)) if (r[e].some(e => DA(n, e))) return !0;
    }
    return !1;
  }
}
export function $$d0() {
  $$n1 = new l();
}
export const bJ = $$d0;
export const bN = $$n1;