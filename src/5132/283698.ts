import { getFeatureFlags } from "../905/601108";
var a = (e => (e.BETA = "BETA", e.UNKNOWN = "UNKNOWN", e))(a || {});
export function $$r0() {
  return getFeatureFlags().sites_beta ? "BETA" : "UNKNOWN";
}
export const z = $$r0;