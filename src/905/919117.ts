import { Wh } from "../figma_app/615482";
import { useEffect } from "react";
import { eU, zl } from "../figma_app/27355";
import { az } from "../905/449184";
import { g } from "../905/880308";
export let $$o1 = Wh(() => eU({
  impressionId: null,
  source: null
}));
export function $$l0() {
  useEffect(() => {
    let e = g();
    let t = "COPY_SELECTION_TOAST";
    let {
      impressionId,
      source,
      hasSearchTerm
    } = zl.get($$o1);
    (impressionId !== e || source !== t || !1 !== hasSearchTerm) && (zl.set($$o1, {
      impressionId: e,
      source: t,
      hasSearchTerm: !1
    }), az.trackDefinedMetric("suggested_actions.entry_point_impressions", {
      impressionId: e,
      source: "COPY_SELECTION_TOAST",
      hasSearchTerm: !1
    }));
  }, []);
}
export const _ = $$l0;
export const b = $$o1;