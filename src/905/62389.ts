import { atom } from "jotai";
export function $$r0(e, t) {
  return atom(e => t(e), (t, i, ...n) => i(e, ...n));
}
export const L = $$r0;
