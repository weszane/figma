export function $$i1(e, r) {
  for (let n = e.length - 1; n >= 0; n -= 1) {
    let i = e[n];
    if (r(i, n, e)) return i;
  }
}
export function $$s0(e) {
  return Object.values(e);
}
export function $$o2(e) {
  return Object.entries(e);
}
export const KQ = $$s0;
export const Uk = $$i1;
export const WP = $$o2;