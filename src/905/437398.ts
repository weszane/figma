import { useCallback } from "react";
import { atom, useAtomWithSubscription, selectAtom } from "../figma_app/27355";
import a from "../vendor/128080";
var s = a;
export let $$o1 = atom(null);
export function $$l0(e) {
  return useAtomWithSubscription(selectAtom($$o1, useCallback(t => t?.id === e ? t : null, [e]), s()));
}
export const P = $$l0;
export const k = $$o1;