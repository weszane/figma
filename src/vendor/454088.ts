import { l } from "../vendor/155802";
let s = (e, r, n) => (((1 - 3 * n + 3 * r) * e + (3 * n - 6 * r)) * e + 3 * r) * e;
let o = 1e-7;
let a = 12;
function h(e, r, n, i, h) {
  let d;
  let p;
  let g = 0;
  do (d = s(p = r + (n - r) / 2, i, h) - e) > 0 ? n = p : r = p; while (Math.abs(d) > o && ++g < a);
  return p;
}
export function $$d0(e, r, n, o) {
  if (e === r && n === o) return l;
  let a = r => h(r, 0, 1, e, n);
  return e => 0 === e || 1 === e ? e : s(a(e), r, o);
}
export const A = $$d0;