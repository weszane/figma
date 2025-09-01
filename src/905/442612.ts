import { getFeatureFlags } from "../905/601108";
export function $$r0() {
  return !!getFeatureFlags().bake_starter_paywall && !getFeatureFlags().bake_starter_limit;
}
export const W = $$r0;