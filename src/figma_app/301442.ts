import { useMemo, useEffect } from "react";
import { getFeatureFlags } from "../905/601108";
import { atomStoreManager } from "../figma_app/27355";
import { getResourceDataOrFallback } from "../905/663269";
import { logger } from "../905/651849";
import { isProdCluster } from "../figma_app/169182";
import { subscribeAndAwaitData } from "../905/553831";
import { useSubscription } from "../figma_app/288654";
import { Z } from "../905/939602";
import { openFileAtom, selectCurrentFile } from "../figma_app/516028";
import { SlotsFileEnablement } from "../figma_app/43951";
export async function $$h1() {
  let e = atomStoreManager.get(openFileAtom);
  if (!e) return;
  let t = await subscribeAndAwaitData(SlotsFileEnablement, {
    fileKey: e.sourceFileKey ?? e.key
  });
  getResourceDataOrFallback(t.file?.slotsFileEnablement)?.slotsEnabled || (await Z.postEnableSlotsForFile({
    fileKey: e.sourceFileKey ?? e.key
  }));
}
export function $$m0() {
  let e = function () {
    let e = selectCurrentFile();
    let t = e?.sourceFileKey ?? e?.key ?? "";
    let r = useSubscription(SlotsFileEnablement({
      fileKey: t
    }), {
      enabled: !!t && getFeatureFlags().dse_slots_file_enablement
    });
    if ("loaded" === r.status) return getResourceDataOrFallback(r.data.file?.slotsFileEnablement)?.slotsEnabled;
  }();
  let t = getFeatureFlags();
  let r = useMemo(() => e ? g.filter(e => !t[e]) : [], [e, t]);
  useEffect(() => {
    r.length > 0 && !isProdCluster() && logger.log("showing slots enablement banner due to missing flags:", r);
  }, [r]);
  return r.length > 0;
}
let g = ["dse_slots", "dse_tracking_nodefield", "ds_gp_dependency_event_bus", "ds_gp_prop_refs_cache", "dependency_event_bus_symbol", "derived_subtree_instances"];
export const N = $$m0;
export const m = $$h1;