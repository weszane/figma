import { PrototypingTsApi } from "../figma_app/763686";
import { isValidSessionLocalID, parseSessionLocalID } from "../905/871411";
export function $$a0() {
  let e = PrototypingTsApi.getActivePrototypeStartingPointNodeIdOnCurrentPage();
  if (isValidSessionLocalID(parseSessionLocalID(e))) return e;
  let t = PrototypingTsApi.findFirstVisuallySortedBaseScreenOnCurrentPage();
  return isValidSessionLocalID(parseSessionLocalID(t)) ? t : null;
}
export const s = $$a0;