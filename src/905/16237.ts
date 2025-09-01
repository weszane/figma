import { getFeatureFlags } from "../905/601108";
export function $$r0() {
  return getFeatureFlags().temp_rum_logging ? {
    addToRUM: !0,
    forceEnableActionLogging: !0
  } : void 0;
}
export const u = $$r0;