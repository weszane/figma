import { useCallback } from "react";
import { atom, atomStoreManager, useAtomValueAndSetter } from "../figma_app/27355";
import { setupRemovableAtomFamily } from "../figma_app/615482";
let a = setupRemovableAtomFamily(() => atom([]));
let l = setupRemovableAtomFamily(() => atom(new Map()));
export function $$o3() {
  let e = atomStoreManager.get(l);
  atomStoreManager.set(a, Array.from(e.values()));
}
export function $$c0() {
  atomStoreManager.set(l, new Map());
}
export function $$d1() {
  atomStoreManager.set(a, []);
}
export function $$u2() {
  let [e, t] = useAtomValueAndSetter(l);
  let [n, s] = useAtomValueAndSetter(a);
  let o = useCallback(() => {
    s([]);
  }, [s]);
  return {
    communityAttribution: e,
    addCommunityAttribution: useCallback((e, n) => {
      t(t => {
        let r = new Map(t);
        r.set(e, n);
        return r;
      });
    }, [t]),
    communityAttributionDisplay: n,
    clearCommunityAttributionDisplay: o
  };
}
export const En = $$c0;
export const Ic = $$d1;
export const Pe = $$u2;
export const gC = $$o3;