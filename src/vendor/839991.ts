export function $$i3(e) {
  return {
    ...e
  };
}
export function $$s2(e, r) {
  return Object.keys(e).some(n => e[n] === r);
}
export function $$o1(e) {
  return 0 === Object.keys(e).length;
}
export function $$a0(e, r) {
  let n = {};
  for (let i of Object.keys(e)) n[i] = r(e[i]);
  return n;
}
export const LG = $$a0;
export const RI = $$o1;
export const Rj = $$s2;
export const yG = $$i3;