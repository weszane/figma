import { l } from "../vendor/616758";
import { q } from "../vendor/476421";
export function $$o0(e, r, n) {
  if (document.readyState === r || "complete" === document.readyState) {
    n();
    return {
      stop: l
    };
  }
  let o = "complete" === r ? "load" : "DOMContentLoaded";
  return q(e, window, o, n, {
    once: !0
  });
}
export function $$a1(e, r) {
  return new Promise(n => {
    $$o0(e, r, n);
  });
}
export const H = $$o0;
export const N = $$a1;