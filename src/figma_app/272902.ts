import { useMemo } from "react";
export function $$i0(...e) {
  return t => {
    e.forEach(e => {
      $$s2(e, t);
    });
  };
}
export function $$a1(...e) {
  return useMemo(() => $$i0(...e), e);
}
export function $$s2(e, t) {
  "function" == typeof e ? e(t) : e && (e.current = t);
}
export const Ay = $$i0;
export const SV = $$a1;
export const cZ = $$s2;