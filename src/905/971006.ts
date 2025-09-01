import { useCallback, useEffect } from "react";
import { wA } from "../vendor/514228";
import { zN } from "../905/19536";
import { YK } from "../905/156213";
export function $$o1(e) {
  let t = zN(e);
  let i = wA();
  return useCallback(() => {
    i(YK(t));
  }, [i, t]);
}
export function $$l0() {
  useEffect(() => {
    let e = document.body.style.overflow;
    let t = document.body.style.position;
    document.body.style.overflow = "hidden";
    document.body.style.position = "relative";
    return () => {
      document.body.style.overflowY = e;
      document.body.style.position = t;
    };
  }, []);
}
export const G = $$l0;
export const n = $$o1;