import { BaseRule } from "../905/92222";
import { FP } from "../905/98947";
import { dayjs } from "../905/920142";
import { removeUUID } from "../905/958284";
import { DevModeOnboardingTooltipOverlay, DeveloperRFDUpsellOverlay, DeveloperContextualUpsellExportOverlay, DeveloperContextualUpsellMeasureOverlay, ViewerDevModeStatusChangedTooltipOverlay } from "../figma_app/6204";
import { atomStoreManager } from "../figma_app/27355";
import { incrementUserFlagCounter } from "../figma_app/502422";
let c = new Set([DeveloperRFDUpsellOverlay.id, DevModeOnboardingTooltipOverlay.id, DeveloperContextualUpsellExportOverlay.id, DeveloperContextualUpsellMeasureOverlay.id, ViewerDevModeStatusChangedTooltipOverlay.id]);
export function $$u1() {
  incrementUserFlagCounter("last_seen_dev_mode_upsell");
}
export let $$p0 = new BaseRule("LimitDevModeUpsellFrequency", "Prevent showing more than on dev mode upsell in a 24 hour period", (e, t) => {
  if (atomStoreManager.get(FP)) return !1;
  let r = removeUUID(t.id);
  return !c.has(r) || !e.lastSeenDevModeUpsell || !(e.lastSeenDevModeUpsell > dayjs().subtract(1, "day").toDate());
});
export const RI = $$p0;
export const o9 = $$u1;