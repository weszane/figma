import { BaseRule } from "../905/92222"
import { FP } from "../905/98947"
import { dayjs } from "../905/920142"
import { removeUUID } from "../905/958284"
import { DeveloperContextualUpsellExportOverlay, DeveloperContextualUpsellMeasureOverlay, DeveloperRFDUpsellOverlay, DevModeOnboardingTooltipOverlay, ViewerDevModeStatusChangedTooltipOverlay } from "../figma_app/6204"
import { atomStoreManager } from "../figma_app/27355"
import { incrementUserFlagCounter } from "../figma_app/502422"
// Refactored to use descriptive names, added type safety, and improved readability
// Original code name: $$u1, $$p0

const DEVELOPER_UPSELL_OVERLAY_IDS = new Set([
  DeveloperRFDUpsellOverlay.id,
  DevModeOnboardingTooltipOverlay.id,
  DeveloperContextualUpsellExportOverlay.id,
  DeveloperContextualUpsellMeasureOverlay.id,
  ViewerDevModeStatusChangedTooltipOverlay.id,
])

/**
 * Updates the user flag counter for when the dev mode upsell was last seen
 */
export function updateLastSeenDevModeUpsell(): void {
  incrementUserFlagCounter("last_seen_dev_mode_upsell")
}

/**
 * Rule to limit the frequency of dev mode upsell displays
 * Prevents showing more than one dev mode upsell in a 24-hour period
 */
export const LimitDevModeUpsellFrequencyRule = new BaseRule(
  "LimitDevModeUpsellFrequency",
  "Prevent showing more than one dev mode upsell in a 24 hour period",
  (userState, overlay) => {
    // If feature flag is enabled, don't show upsell
    if (atomStoreManager.get(FP))
      return false

    const overlayId = removeUUID(overlay.id)

    // Show upsell if:
    // 1. It's not a developer upsell overlay, OR
    // 2. User has never seen dev mode upsell, OR
    // 3. Last seen dev mode upsell was more than 24 hours ago
    const hasSeenRecentDevUpsell = userState.lastSeenDevModeUpsell
      && userState.lastSeenDevModeUpsell > dayjs().subtract(1, "day").toDate()

    return !DEVELOPER_UPSELL_OVERLAY_IDS.has(overlayId)
      || !userState.lastSeenDevModeUpsell
      || !hasSeenRecentDevUpsell
  },
)

export const RI = LimitDevModeUpsellFrequencyRule
export const o9 = updateLastSeenDevModeUpsell
