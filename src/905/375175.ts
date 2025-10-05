import { TileType, TileUtils } from "../figma_app/543100";
import { useCurrentUserOrgId } from "../905/845253";
import { getSelectedView } from "../figma_app/386952";
export function $$s0(e) {
  let t = getSelectedView();
  return $$o2(e, useCurrentUserOrgId()) && $$l1(t);
}
export function $$o2(e, t) {
  return e.type !== TileType.OFFLINE_FILE && TileUtils.getOrgId(e) === t;
}
export function $$l1(e) {
  return "deletedFiles" !== e.view;
}
export const Xg = $$s0;
export const mM = $$l1;
export const qf = $$o2;