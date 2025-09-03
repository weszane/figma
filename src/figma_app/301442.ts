import { useMemo, useEffect } from "react";
import { getFeatureFlags } from "../905/601108";
import { zl } from "../figma_app/27355";
import { oA } from "../905/663269";
import { k as _$$k } from "../905/651849";
import { isProdCluster } from "../figma_app/169182";
import { subscribeAndAwaitData } from "../905/553831";
import { Rs } from "../figma_app/288654";
import { Z } from "../905/939602";
import { yV, q5 } from "../figma_app/516028";
import { nkF } from "../figma_app/43951";
export async function $$h1() {
  let e = zl.get(yV);
  if (!e) return;
  let t = await subscribeAndAwaitData(nkF, {
    fileKey: e.sourceFileKey ?? e.key
  });
  oA(t.file?.slotsFileEnablement)?.slotsEnabled || (await Z.postEnableSlotsForFile({
    fileKey: e.sourceFileKey ?? e.key
  }));
}
export function $$m0() {
  let e = function () {
    let e = q5();
    let t = e?.sourceFileKey ?? e?.key ?? "";
    let r = Rs(nkF({
      fileKey: t
    }), {
      enabled: !!t && getFeatureFlags().dse_slots_file_enablement
    });
    if ("loaded" === r.status) return oA(r.data.file?.slotsFileEnablement)?.slotsEnabled;
  }();
  let t = getFeatureFlags();
  let r = useMemo(() => e ? g.filter(e => !t[e]) : [], [e, t]);
  useEffect(() => {
    r.length > 0 && !isProdCluster() && _$$k.log("showing slots enablement banner due to missing flags:", r);
  }, [r]);
  return r.length > 0;
}
let g = ["dse_slots", "dse_tracking_nodefield", "ds_gp_dependency_event_bus", "ds_gp_prop_refs_cache", "dependency_event_bus_symbol", "derived_subtree_instances"];
export const N = $$m0;
export const m = $$h1;