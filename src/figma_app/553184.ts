import { sendMetric } from "../905/485103";
import { x } from "../905/707384";
let $$a1 = ["memory.fullscreen.", "performance.fullscreen."];
let s = !0;
function o(e, t) {
  let r = -1 / 0;
  return () => {
    let n = Date.now() / 1e3;
    n - r > e && (r = n, t());
  };
}
window.addEventListener("error", e => {
  if (!s) return;
  s = !1;
  let {
    message,
    filename
  } = e;
  let i = /abort/i.test(message);
  let a = /\/compiled_/.test(filename);
  sendMetric("unhandled_error", {
    abort: i,
    fullscreen: a
  });
});
let $$l8 = o(30, () => {
  sendMetric("context_lost");
});
let $$d10 = o(30, () => {
  sendMetric("context_restored");
});
export function $$c11(e) {
  window.figmaPerfTesting && window.postMessage({
    name: e,
    value: performance.now() / 1e3
  }, "*");
}
export function $$u9() {
  sendMetric("dirty_after_load");
}
export function $$p0() {
  sendMetric("consecutive_flushes");
}
export function $$_6() {
  sendMetric("consecutive_image_change_skips");
}
export function $$h4() {
  sendMetric("image_paste_error");
}
export function $$m3() {
  sendMetric("unsaved_changes_bell");
}
export function $$g5() {
  sendMetric("autosave_notification");
}
export function $$f2(e) {
  sendMetric("reconnecting_banner", {
    client: e
  });
}
export function $$E7(e) {
  return x(e, !0, e.productType);
}
export const $G = $$p0;
export const Ad = $$a1;
export const B3 = $$f2;
export const Hh = $$m3;
export const Jj = $$h4;
export const Mw = $$g5;
export const S = $$_6;
export const Y7 = $$E7;
export const ai = $$l8;
export const f1 = $$u9;
export const kJ = $$d10;
export const s$ = $$c11;