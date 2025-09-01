import { atom } from "jotai";
export function $$r0(e, t) {
  return atom(t => t(e), (i, n, r) => {
    let a = t(i(e), r, i);
    n(e, a);
  });
}
export const F = $$r0;
