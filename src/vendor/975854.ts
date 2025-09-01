import { O } from "../vendor/240444";
export function $$f0() {
  return Date.now() / 1e3;
}
export let $$r1 = function () {
  let {
    performance
  } = O;
  if (!performance || !performance.now) return $$f0;
  let n = Date.now() - performance.now();
  let i = void 0 == performance.timeOrigin ? n : performance.timeOrigin;
  return () => (i + performance.now()) / 1e3;
}();
(() => {
  let {
    performance
  } = O;
  if (!performance || !performance.now) return;
  let n = performance.now();
  let i = Date.now();
  let f = performance.timeOrigin ? Math.abs(performance.timeOrigin + n - i) : 36e5;
  let r = performance.timing && performance.timing.navigationStart;
  let a = "number" == typeof r ? Math.abs(r + n - i) : 36e5;
  if (f < 36e5 || a < 36e5) return f <= a ? performance.timeOrigin : void 0;
})();
export const lu = $$f0;
export const zf = $$r1;