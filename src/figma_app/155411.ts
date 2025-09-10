import { getFeatureFlags } from "src/905/601108";
import { FProviderConfigType } from "src/figma_app/191312";
export function $$a0() {
  return getFeatureFlags().dse_preset_group_internal ? FProviderConfigType.INTERNAL : FProviderConfigType.DEFAULT;
}
export const M = $$a0;
