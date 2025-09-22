import { parsePxNumber } from "../figma_app/783094";
import { getPropertiesPanelSplitPosition } from "../figma_app/740163";
import { QBm } from "../figma_app/27776";
let s = parsePxNumber(QBm);
export function $$o0() {
  return getPropertiesPanelSplitPosition() - s;
}
export const P = $$o0;