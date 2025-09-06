import { createReduxSubscriptionAtomWithState } from "../905/270322";
import { useSelector } from "../vendor/514228";
export function $$r0() {
  return useSelector(e => $$a1(e));
}
export function $$a1(e) {
  return null !== e.openFile && !e.openFile?.canEditCanvas;
}
export let $$s2 = createReduxSubscriptionAtomWithState(e => $$a1(e));
export const Td = $$r0;
export const eC = $$a1;
export const hS = $$s2;