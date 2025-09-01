import { getFeatureFlags } from "../905/601108";
import { vs } from "../figma_app/594947";
export async function $$a0() {
  return (await vs("exp_asset_search_refactor")).get("use_refactor", !1) || getFeatureFlags().dse_refactor_asset_search_debug_only;
}
export const Z = $$a0;