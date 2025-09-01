import { useEffect } from "react";
export function $$i0() {
  let e = new Set();
  return {
    subscribe: t => (e.add(t), () => {
      e.$$delete(t);
    }),
    emit(t) {
      for (let r of e) r(t);
    }
  };
}
export function $$a1(e, t) {
  useEffect(() => e.subscribe(t), [t, e]);
}
export const o = $$i0;
export const p = $$a1;