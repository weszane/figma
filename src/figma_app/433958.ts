import { useEffect } from "react";
import { eU, fp } from "../figma_app/27355";
import { PN } from "../figma_app/257275";
import { LS } from "../905/782918";
let o = eU(!1);
export function $$l0(e) {
  let [t, r] = fp(o);
  useEffect(() => {
    if (PN()) return;
    let t = setTimeout(() => {
      r(!0);
    }, e);
    return () => {
      clearTimeout(t);
      r(!1);
    };
  }, [e, r]);
}
export function $$d1() {
  let e = LS();
  let [t] = fp(o);
  return t && e;
}
export const W = $$l0;
export const e = $$d1;