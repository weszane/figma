import { X3B } from "../figma_app/763686";
import { fn, sH } from "../905/871411";
export function $$a0() {
  let e = X3B.getActivePrototypeStartingPointNodeIdOnCurrentPage();
  if (fn(sH(e))) return e;
  let t = X3B.findFirstVisuallySortedBaseScreenOnCurrentPage();
  return fn(sH(t)) ? t : null;
}
export const s = $$a0;