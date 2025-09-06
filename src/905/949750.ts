import { atom, atomStoreManager, useAtomWithSubscription } from "../figma_app/27355";
let r = atom(0);
export function $$a1() {
  atomStoreManager.set(r, e => e + 1);
}
export function $$s0() {
  return useAtomWithSubscription(r);
}
export const R = $$s0;
export const c = $$a1;