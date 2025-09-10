import { setupRemovableAtomFamily } from "../figma_app/615482";
import { useEffect } from "react";
import { atom, atomStoreManager } from "../figma_app/27355";
import { analyticsEventManager } from "../905/449184";
import { generateUUIDv4 } from "../905/871474";
export let $$o1 = setupRemovableAtomFamily(() => atom({
  impressionId: null,
  source: null
}));
export function $$l0() {
  useEffect(() => {
    let e = generateUUIDv4();
    let t = "COPY_SELECTION_TOAST";
    let {
      impressionId,
      source,
      hasSearchTerm
    } = atomStoreManager.get($$o1);
    (impressionId !== e || source !== t || !1 !== hasSearchTerm) && (atomStoreManager.set($$o1, {
      impressionId: e,
      source: t,
      hasSearchTerm: !1
    }), analyticsEventManager.trackDefinedMetric("suggested_actions.entry_point_impressions", {
      impressionId: e,
      source: "COPY_SELECTION_TOAST",
      hasSearchTerm: !1
    }));
  }, []);
}
export const _ = $$l0;
export const b = $$o1;