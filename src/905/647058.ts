import { getFeatureFlags } from "../905/601108";
import { getInitialOptions } from "../figma_app/169182";
export function $$a0() {
  return !!(getFeatureFlags().limited_plan_spaces && getInitialOptions().is_limited_team_plan);
}
export const d = $$a0;