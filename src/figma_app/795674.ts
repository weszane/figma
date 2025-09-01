export function $$n0(e) {
  return $$i1(24 * e);
}
export function $$i1(e) {
  return 300 * Math.round(Date.now() / 3e5) - 3600 * e;
}
export function $$a3(e) {
  return {
    seconds: Math.floor(e % 60),
    minutes: Math.floor(e / 60)
  };
}
let $$s2 = 1e3;
let $$o4 = 864e5;
export function $$l5() {
  return new Date("2024-10-10T15:00:00Z");
}
export const G5 = $$n0;
export const S6 = $$i1;
export const Vn = $$s2;
export const _d = $$a3;
export const ei = $$o4;
export const n = $$l5;