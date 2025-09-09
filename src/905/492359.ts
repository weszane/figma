import { getFeatureFlags } from "../905/601108";
import { isSitesFeatureEnabled } from "../905/561485";
export function $$a0() {
  return !!isSitesFeatureEnabled() && !!getFeatureFlags().dakota;
}
export const U = $$a0;