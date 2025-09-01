let n = [];
export function $$r2() {
  return n;
}
export function $$a0(e) {
  $$s1(Error().stack || "stack unavailable?");
  return e;
}
export function $$s1(e) {
  n.unshift(e);
  setTimeout(() => {
    n = n.filter(t => t !== e);
  }, 300);
}
export const WE = $$a0;
export const d4 = $$s1;
export const fC = $$r2;