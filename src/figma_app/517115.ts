import { createTrackedAtom } from "../figma_app/615482";
import { atomStoreManager, useAtomWithSubscription } from "../figma_app/27355";
import { generateUUIDv4 } from "../905/871474";
let a = createTrackedAtom(void 0);
export function $$s1() {
  atomStoreManager.get(a) || atomStoreManager.set(a, generateUUIDv4());
}
export function $$o2() {
  return atomStoreManager.get(a);
}
export function $$l0() {
  return useAtomWithSubscription(a);
}
export const CK = $$l0;
export const NB = $$s1;
export const r6 = $$o2;