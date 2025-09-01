import { r8 } from "../figma_app/537824";
import { qZ } from "../figma_app/761118";
export let $$n1;
class s {
  notifyLinterNodeUpdate(e) {
    let t = r8();
    t && t.onNodeChanged(e);
  }
  isDesignLinterEnabled() {
    return qZ();
  }
}
export function $$o0() {
  $$n1 = new s();
}
export const LC = $$o0;
export const zT = $$n1;