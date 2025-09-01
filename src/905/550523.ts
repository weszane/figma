export function $$n2() {
  let e = window.navigator?.connection || {};
  return {
    connectionDownlinkMax: e?.downlinkMax,
    connectionDownlink: e?.downlink,
    connectionEffectiveType: e?.effectiveType,
    connectionType: e?.type,
    connectionRtt: e?.rtt
  };
}
export function $$r0() {
  return {
    navigatorHardwareConcurrency: window.navigator?.hardwareConcurrency,
    navigatorDeviceMemory: window.navigator?.deviceMemory
  };
}
export function $$a1() {
  return {
    devicePixelRatio: window.devicePixelRatio,
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth
  };
}
export const PH = $$r0;
export const VD = $$a1;
export const dd = $$n2;