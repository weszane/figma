import { useMemo } from "react";
import { Nfd } from "../figma_app/763686";
import { useAtomWithSubscription } from "../figma_app/27355";
import { s0 } from "../figma_app/115923";
import { cI, Qe, Xq } from "../figma_app/114522";
export function $$l2(e) {
  return useMemo(() => e ? {
    type: "instance",
    codeInstanceNode: e,
    allCodeInstanceNodeIds: [e.guid]
  } : null, [e]);
}
export function $$d0() {
  let e = useAtomWithSubscription(s0);
  let t = useAtomWithSubscription(cI);
  let r = useAtomWithSubscription(Qe);
  return e === Nfd.CODE ? r : t;
}
export function $$c1() {
  let e = useAtomWithSubscription(Xq);
  return $$d0() ? [] : e;
}
export const Mg = $$d0;
export const cu = $$c1;
export const rh = $$l2;