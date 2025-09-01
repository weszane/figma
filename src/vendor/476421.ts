import { dm } from "../vendor/186187";
import { W } from "../vendor/696534";
export function $$o1(e, r, n, i, s) {
  return $$a0(e, r, [n], i, s);
}
export function $$a0(e, r, n, o, {
  once: h,
  capture: d,
  passive: p
} = {}) {
  let g = dm(r => {
    (r.isTrusted || r.__ddIsTrusted || e.allowUntrustedEvents) && (h && b(), o(r));
  });
  let m = p ? {
    capture: d,
    passive: p
  } : d;
  let v = window.EventTarget && r instanceof EventTarget ? window.EventTarget.prototype : r;
  let y = W(v, "addEventListener");
  function b() {
    let e = W(v, "removeEventListener");
    n.forEach(n => e.call(r, n, g, m));
  }
  n.forEach(e => y.call(r, e, g, m));
  return {
    stop: b
  };
}
export const l = $$a0;
export const q = $$o1;