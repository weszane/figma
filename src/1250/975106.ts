import { getFeatureFlags } from "../905/601108";
import { setupDynamicConfigHandler } from "../figma_app/594947";
import { useCurrentPublicPlan, useCurrentPrivilegedPlan } from "../figma_app/465071";
export function $$o0() {
  let e = useCurrentPublicPlan("useCanUseCodebaseSuggestions").unwrapOr(null);
  let t = e?.key;
  let {
    getDynamicConfig
  } = setupDynamicConfigHandler("codebase_components_v2_plan_config");
  let o = getDynamicConfig().get("org_ids", []);
  return !!(t?.parentId && o && o.includes(t?.parentId)) || !!getFeatureFlags().dt_ccv2_component_browser;
}
export function $$s1() {
  let e = useCurrentPrivilegedPlan("usePlanAiFeaturesPermissions");
  return "loaded" !== e.status ? "unknown" : e.data?.aiFeaturesEnabled ? "enabled" : "disabled";
}
export const A = $$o0;
export const G = $$s1;