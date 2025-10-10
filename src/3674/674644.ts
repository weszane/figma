import { jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { useAtomWithSubscription } from "../figma_app/27355";
import { buildUploadUrl } from "../figma_app/169182";
import { normalizeJobRole } from "../3973/538504";
import { renderI18nText } from "../905/303541";
import { Pt, xJ } from "../figma_app/422471";
import { useCanAccessFullDevMode, useCanAccessDevModeEntryPoint } from "../figma_app/473493";
import { J } from "../figma_app/261874";
import { UpgradeAction } from "../905/370443";
import { useEventForwarder } from "../905/453826";
import { useOverlay } from "../905/621515";
import { LZ } from "../figma_app/101956";
import { NT, mp } from "../figma_app/579169";
import { updateLastSeenDevModeUpsell } from "../figma_app/621201";
import { useIsProgressBarHiddenOrLocked } from "../figma_app/722362";
import { ModalPriority } from "../figma_app/268271";
import { ImageOverlayComponent } from "../905/129046";
import { OnboardingModal } from "../905/425180";
import { U } from "../figma_app/65327";
import { PositioningStrategy } from "../905/748636";
import { oR } from "../figma_app/598952";
import { DevModeOnboardingTooltipOverlay } from "../figma_app/6204";
let $$A1 = "https://help.figma.com/hc/articles/15023124644247-Guide-to-Dev-Mode";
let I = buildUploadUrl("31fafead8c196706e91abf57cbdece011da1a199");
export function $$E0() {
  let e = useAtomWithSubscription(LZ);
  let t = useIsProgressBarHiddenOrLocked();
  let n = useCanAccessFullDevMode();
  let l = useAtomWithSubscription(Pt);
  let E = useAtomWithSubscription(xJ);
  let C = useCanAccessDevModeEntryPoint();
  let T = useAtomWithSubscription(NT);
  let S = useAtomWithSubscription(mp);
  let P = J();
  let L = oR;
  let R = U("upsell");
  let {
    show,
    complete,
    isShowing,
    uniqueId
  } = useOverlay({
    overlay: DevModeOnboardingTooltipOverlay,
    priority: ModalPriority.DEFAULT_MODAL
  }, [T, S, l, E]);
  useEffect(() => {
    show({
      canShow: (a, i, o, l) => {
        let r = "developer" === normalizeJobRole(a);
        return !n && !o && !l && !t && i > new Date("2024-09-25") && C && (P && e || !P && !e && r) && r;
      },
      onShow: () => {
        updateLastSeenDevModeUpsell();
      }
    });
  }, [n, C, e, t, T, P, l, S, E, show]);
  useEventForwarder(uniqueId, "Enter Inspect Mode", () => {
    isShowing && complete();
  });
  return jsx(OnboardingModal, {
    description: renderI18nText("dev_mode.onboarding_callout.switch_into_dev_mode"),
    isShowing,
    media: jsx(ImageOverlayComponent, {
      alt: "design displaying spacing in dev mode",
      src: I,
      aspectRatio: 240 / 136
    }),
    onClose: complete,
    primaryCta: {
      label: renderI18nText("dev_mode.onboarding_callout.explore_now"),
      onClick: () => {
        R("handoff");
        complete();
      },
      ctaTrackingDescriptor: UpgradeAction.EXPLORE_NOW,
      type: "button"
    },
    secondaryCta: {
      label: renderI18nText("dev_mode.onboarding_callout.read_the_guide"),
      type: "link",
      href: $$A1,
      ctaTrackingDescriptor: UpgradeAction.LEARN_MORE
    },
    shouldCenterArrow: PositioningStrategy.BEST_EFFORT,
    targetKey: L,
    testId: "dev-mode-onboarding-tooltip",
    title: jsx("span", {
      className: "xt0e3qv",
      children: renderI18nText("dev_mode.onboarding_callout.find_what_you_need_in_dev_mode")
    }),
    trackingContextName: "Dev Mode Onboarding Tooltip"
  });
}
export const S = $$E0;
export const z = $$A1;