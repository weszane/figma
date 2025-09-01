let n = [];
export function $$i0(e) {
  n.push(e);
  return () => {
    n = n.filter(t => t !== e);
  };
}
export function $$a1(e) {
  for (let t of n) t(e);
}
export const H = $$i0;
export const h = $$a1;