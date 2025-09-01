import { getFeatureFlags } from "../905/601108";
import { oz } from "../905/561485";
export function $$a0() {
  return !!oz() && !!getFeatureFlags().dakota;
}
export const U = $$a0;