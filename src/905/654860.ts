import { KeyCodes } from "../905/63728";
import { Um } from "../905/848862";
import { kz } from "../figma_app/171177";
import { cq } from "../905/794154";
export function $$o0(e = !1) {
  let t = Um();
  let {
    isRoot,
    pop,
    autoClose
  } = cq();
  kz(KeyCodes.ESCAPE, () => {
    t || (isRoot || e ? autoClose() : pop());
  }, !0);
}
export const z = $$o0;