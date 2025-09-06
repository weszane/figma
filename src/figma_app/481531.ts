import { useAtomWithSubscription } from "../figma_app/27355";
import { hV, gT } from "../figma_app/822177";
import { L } from "../905/453756";
import { w } from "../figma_app/461518";
import { g } from "../figma_app/391708";
import { z } from "../figma_app/849005";
export function $$d0() {
  let e = function () {
    let e = L();
    let t = useAtomWithSubscription(hV);
    let r = useAtomWithSubscription(gT);
    return e ? t : r;
  }();
  let t = z();
  let r = w();
  let d = g();
  return !e && (r || t || d);
}
export const G = $$d0;