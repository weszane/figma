import { createDeferredPromise } from "../905/874553";
let r = "hidden" === document.visibilityState ? Date.now() : null;
let a = new Set();
export function $$s0() {
  if (null === r || Date.now() - r < 3e4) return Promise.resolve();
  let {
    promise,
    resolve
  } = createDeferredPromise();
  a.add(resolve);
  return promise;
}
document.addEventListener("visibilitychange", () => {
  "hidden" === document.visibilityState ? r = Date.now() : "visible" === document.visibilityState && (r = null, a.forEach(e => e()), a.clear());
});
export const p = $$s0;