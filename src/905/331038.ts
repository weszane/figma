import { useMemo } from "react";
export function $$r0(e, t, ...i) {
  return useMemo(() => {
    for (let n of e) {
      let e = t(n, ...i);
      if (void 0 !== e) return e;
    }
  }, [t, e, i]);
}
export const U = $$r0;