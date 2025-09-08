import { PanelType } from "../figma_app/763686";
import { useAtomWithSubscription } from "../figma_app/27355";
import { s0 } from "../figma_app/115923";
let s = [PanelType.CODE, PanelType.DAKOTA, PanelType.SETTINGS];
export function $$o1(e) {
  return s.includes(e);
}
export function $$l0() {
  return $$o1(useAtomWithSubscription(s0));
}
export const G = $$l0;
export const a = $$o1;