import { flattenObjectToTarget } from "src/figma_app/493477";
import { FullscreenPerfMetrics } from "src/figma_app/763686";
export function $$a1(e, t) {
  e && flattenObjectToTarget(e, t, "deviceInfo");
}
export function $$s0() {
  return FullscreenPerfMetrics ? FullscreenPerfMetrics.getGpuDeviceInfo() : null;
}
export const l = $$s0;
export const q = $$a1;
