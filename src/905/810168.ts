import { useCallback } from "react";
import { d4, wA } from "../vendor/514228";
import { X7 } from "../905/193529";
export function $$s0() {
  return d4(e => !!e.screenreader.enabled);
}
export function $$o1() {
  let e = wA();
  let t = d4(e => e.screenreader.enabled);
  let i = d4(e => e.user || void 0);
  return [t, useCallback((t, n) => {
    e(X7({
      enabled: t,
      scope: n,
      user: i
    }));
  }, [e, i])];
}
export const e = $$s0;
export const y = $$o1;