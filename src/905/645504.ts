import { jsx, Fragment } from "react/jsx-runtime";
import { useSingleEffect } from "../905/791079";
import { renderI18nText } from "../905/303541";
import { $X, fF } from "../figma_app/425283";
import { l4, l_ } from "../figma_app/982327";
import { UpgradeAction } from "../905/370443";
import { e as _$$e } from "../905/621515";
import { FOrganizationLevelType } from "../figma_app/191312";
import { N } from "../figma_app/268271";
import { OnboardingModal } from "../905/425180";
import { PositioningStrategy } from "../905/858282";
import { AdminBillingOverviewSecondaryTabOnboardingOverlay } from "../figma_app/6204";
export function $$g0({
  planType: e
}) {
  let {
    show,
    isShowing,
    complete
  } = _$$e({
    overlay: AdminBillingOverviewSecondaryTabOnboardingOverlay,
    priority: N.DEFAULT_MODAL
  });
  useSingleEffect(() => {
    show();
  });
  let f = (() => {
    switch (e) {
      case FOrganizationLevelType.ORG:
        return {
          targetKey: $X,
          trackingContextName: `${fF} - overview tab`
        };
      case FOrganizationLevelType.TEAM:
        return {
          targetKey: l4,
          trackingContextName: `${l_} - overview tab`
        };
      default:
        return null;
    }
  })();
  return jsx(Fragment, {
    children: f && jsx(OnboardingModal, {
      clickOutsideToHide: !0,
      description: renderI18nText("admin_settings.billing.onboarding.tooltip.overview_secondary_tab.description"),
      emphasized: !0,
      isShowing,
      onClose: complete,
      onTargetLost: complete,
      primaryCta: {
        label: renderI18nText("general.got_it"),
        type: "button",
        onClick: complete,
        ctaTrackingDescriptor: UpgradeAction.GOT_IT
      },
      shouldCenterArrow: PositioningStrategy.BEST_EFFORT,
      targetKey: f.targetKey,
      title: renderI18nText("admin_settings.billing.onboarding.tooltip.overview_secondary_tab.title"),
      trackingContextName: f.trackingContextName
    })
  });
}
export const s = $$g0;