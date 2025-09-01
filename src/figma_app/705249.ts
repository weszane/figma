import { getFeatureFlags } from "../905/601108";
import { U5 } from "../figma_app/543529";
export function $$a0() {
  let e = U5();
  return getFeatureFlags().xr_debounce_threshold && e;
}
export function $$s1() {
  return getFeatureFlags().xr_debounce_threshold;
}
export const w = $$a0;
export const y = $$s1;