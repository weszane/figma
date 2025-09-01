export function $$i1(e, r) {
  -1 === e.indexOf(r) && e.push(r);
}
export function $$s0(e, r) {
  let n = e.indexOf(r);
  n > -1 && e.splice(n, 1);
}
export function $$o2([...e], r, n) {
  let i = r < 0 ? e.length + r : r;
  if (i >= 0 && i < e.length) {
    let i = n < 0 ? e.length + n : n;
    let [s] = e.splice(r, 1);
    e.splice(i, 0, s);
  }
  return e;
}
export const Ai = $$s0;
export const Kq = $$i1;
export const Pe = $$o2;