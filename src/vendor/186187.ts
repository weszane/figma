import { Vy } from "../vendor/780783";
let i;
let o = !1;
export function $$a0(e) {
  i = e;
}
export function $$h4(e) {
  o = e;
}
export function $$d2(e) {
  return function () {
    return $$p5(e, this, arguments);
  };
}
export function $$p5(e, r, n) {
  try {
    return e.apply(r, n);
  } catch (e) {
    $$g1(e);
  }
}
export function $$g1(e) {
  if ($$m3(e), i) try {
    i(e);
  } catch (e) {
    $$m3(e);
  }
}
export function $$m3(...e) {
  o && Vy.error("[MONITOR]", ...e);
}
export const Bd = $$a0;
export const Dx = $$g1;
export const dm = $$d2;
export const oO = $$m3;
export const pM = $$h4;
export const um = $$p5;