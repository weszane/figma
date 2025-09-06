import { flattenObjectToTarget } from "../figma_app/493477";
import { CeL } from "../figma_app/763686";
export function $$a1(e, t) {
  e && flattenObjectToTarget(e, t, "deviceInfo");
}
export function $$s0() {
  return CeL ? CeL.getGpuDeviceInfo() : null;
}
export const l = $$s0;
export const q = $$a1;