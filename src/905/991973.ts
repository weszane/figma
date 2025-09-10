import { useMemo } from "react";
import { atom, useAtomWithSubscription } from "src/figma_app/27355";
let $$a3 = atom([]);
let $$s1 = atom([]);
let $$o4 = atom([]);
let $$l2 = atom(void 0);
export function $$d0(e) {
  let t = useAtomWithSubscription($$a3);
  return useMemo(() => !!e && t.includes(e), [e, t]);
}
export const H = $$d0;
export const QN = $$s1;
export const Rs = $$l2;
export const lj = $$a3;
export const r9 = $$o4;
