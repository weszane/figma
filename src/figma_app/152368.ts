import { F4 } from "../figma_app/546509";
let $$i5 = "timer-start-onboarding";
let $$a13 = 5999e3;
let $$s11 = 1250;
let $$o1 = 1;
export function $$l7(e) {
  return e ? e.isPaused ? e.timeRemainingMs : e.timeRemainingMs - performance.now() + e.timeOrigin : -1 / 0;
}
export function $$d4(e) {
  let t = $$l7(e);
  return !e || 0 === e.totalTimeMs || t <= -$$s11;
}
export function $$c6(e) {
  return 0 >= $$l7(e) && e?.totalTimeMs > 0;
}
export function $$u2(e) {
  return !!e?.isPaused && e.totalTimeMs > 0 && e.timeRemainingMs > 0 && e.totalTimeMs !== e.timeRemainingMs;
}
export function $$p9(e) {
  return Math.floor(60 * Number(e.minutes) + Number(e.seconds));
}
export function $$_0(e, t) {
  let r = $$d4(e);
  let n = $$l7(e);
  let i = parseInt(t.minutes);
  return r ? (i || 0) + $$o1 <= 99 : n + 6e4 * $$o1 <= $$a13;
}
export function $$h12(e, t) {
  let r = $$l7(e);
  let n = e.totalTimeMs - r;
  return t >= 2 && n >= 5e3;
}
export function $$m10(e) {
  return e < 10 ? `0${e}` : `${e}`;
}
export function $$g8(e, t) {
  e.volume = t / 100;
  e.currentTime = 0;
  e.play().catch(e => {
    if ("NotAllowedError" !== e.name) throw Error(`Failed to play FigJam timer chimes: ${e}`);
  });
}
export function $$f3() {
  let e = F4();
  return !!e?.shouldShowTimerOnTheLeft;
}
export const $V = $$_0;
export const AC = $$o1;
export const CM = $$u2;
export const FR = $$f3;
export const G8 = $$d4;
export const Hm = $$i5;
export const IQ = $$c6;
export const P$ = $$l7;
export const PF = $$g8;
export const RE = $$p9;
export const YI = $$m10;
export const cu = $$s11;
export const fQ = $$h12;
export const y0 = $$a13; 
