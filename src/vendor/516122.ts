import { y } from "../vendor/314742";
import { pM } from "../vendor/186187";
import { Vy } from "../vendor/780783";
export function $$a1(e) {
  let r = {
    version: "6.13.0",
    onReady(e) {
      e();
    },
    ...e
  };
  Object.defineProperty(r, "_setDebug", {
    get: () => pM,
    enumerable: !1
  });
  return r;
}
export function $$h0(e, r, n) {
  let s = e[r];
  s && !s.q && s.version && Vy.warn("SDK is loaded more than once. This is unsupported and might have unexpected behavior.");
  e[r] = n;
  s && s.q && s.q.forEach(e => y(e, "onReady callback threw an error:")());
}
export const Z = $$h0;
export const m = $$a1;