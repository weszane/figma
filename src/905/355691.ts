let n = class e {
  static getMotionDivId(e) {
    return `dlt-${e}-motion-div`;
  }
  static getAnimationState(t) {
    let i = document.querySelector(`[data-testid="${e.getMotionDivId(t)}"]`);
    return i?.getAttribute("data-test-animate-state") || "";
  }
};
n.RECORD_DETAILED_EVENTS = !1;
export let $$r0 = n;
export const T = $$r0;