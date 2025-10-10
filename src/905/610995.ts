import { useMemo, useCallback } from "react";
import { createRemovableAtomFamily, atom, useAtomWithSubscription, useSetAtom } from "../figma_app/27355";
let a = createRemovableAtomFamily(() => atom(null));
let s = createRemovableAtomFamily(() => atom(new Set()));
export function $$o1(e) {
  let t = useAtomWithSubscription(a(e));
  return useMemo(() => t, [t]);
}
export function $$l3(e) {
  return useAtomWithSubscription(s(e));
}
export function $$d0(e) {
  let t = useSetAtom(a(e));
  return useCallback(e => {
    t(e);
  }, [t]);
}
export function $$c2(e) {
  let t = useSetAtom(s(e));
  return useCallback(e => {
    t(t => {
      let i = new Set(t);
      i.has(e) ? i.$$delete(e) : i.add(e);
      return i;
    });
  }, [t]);
}
export const C2 = $$d0;
export const Kw = $$o1;
export const Tb = $$c2;
export const VJ = $$l3;