let n = [];
export function $$i0(e) {
  n.push(e);
  return () => {
    n = n.filter(t => t !== e);
  };
}
export function $$a1(e, t) {
  for (let r of n) r(e, t);
}
export const M = $$i0;
export const i = $$a1;