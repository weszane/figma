import { getInitialOptions } from "../figma_app/169182";
export function $$i2() {
  return getInitialOptions().frame_context?.type === "integration";
}
export function $$a3() {
  return $$i2() && "google-meet" === getInitialOptions().integration_host;
}
export function $$s1() {
  return $$a3() && !!getInitialOptions().is_meet_hardware;
}
export function $$o0() {
  return $$i2() && "zoom" === getInitialOptions().integration_host;
}
export class $$l4 {
  static isGoogleClassroomIntegration() {
    return $$i2() && "google-classroom" === getInitialOptions().integration_host;
  }
}
export const MP = $$o0;
export const U1 = $$s1;
export const ck = $$i2;
export const eM = $$a3;
export const pb = $$l4;