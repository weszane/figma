import { jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { throwTypeError } from "../figma_app/465776";
import { useAtomWithSubscription } from "../figma_app/27355";
import { Vc } from "../figma_app/211694";
import { renderI18nText } from "../905/303541";
import { UpgradeAction } from "../905/370443";
import { e as _$$e } from "../905/621515";
import { A } from "../905/956262";
import { userFlagExistsAtomFamily } from "../figma_app/545877";
import { N } from "../figma_app/268271";
import { U } from "../905/455766";
import { OnboardingModal } from "../905/425180";
import { DevModeComponentBrowserOnboardingOverlay } from "../figma_app/6204";
if (443 == require.j) {}
let h = userFlagExistsAtomFamily("dev_mode_has_seen_component_browser_onboarding");
let $$b1 = {
  Step1: "dev_mode_component_browser_manual_mapping_step_1",
  Step2: "dev_mode_component_browser_manual_mapping_step_2",
  Step3: "dev_mode_component_browser_manual_mapping_step_3"
};
var x = (e => (e.ManualStep1 = "ManualStep1", e.ManualStep2 = "ManualStep2", e.ManualStep3 = "ManualStep3", e))(x || {});
var $$y2 = (e => (e.OpenDialog = "OpenDialog", e.CloseDialog = "CloseDialog", e))($$y2 || {});
function v(e) {
  let {
    step,
    isOverlayShowing,
    next,
    complete
  } = e;
  switch (step) {
    case "ManualStep1":
      return jsx(OnboardingModal, {
        description: renderI18nText("dev_handoff.component_browser_onboarding_callout.manual_step_1_description"),
        isShowing: isOverlayShowing,
        onClose: complete,
        primaryCta: {
          label: renderI18nText("general.next"),
          type: "button",
          onClick: next,
          ctaTrackingDescriptor: UpgradeAction.NEXT
        },
        stepCounter: {
          stepNum: 1,
          totalNumSteps: 3
        },
        targetKey: $$b1.Step1,
        trackingContextName: "dev_mode_component_browser_step_1 - identify the code file"
      });
    case "ManualStep2":
      return jsx(OnboardingModal, {
        description: renderI18nText("dev_handoff.component_browser_onboarding_callout.manual_step_2_description"),
        isShowing: isOverlayShowing,
        onClose: complete,
        primaryCta: {
          label: renderI18nText("general.next"),
          type: "button",
          onClick: next,
          ctaTrackingDescriptor: UpgradeAction.NEXT
        },
        stepCounter: {
          stepNum: 2,
          totalNumSteps: 3
        },
        targetKey: $$b1.Step2,
        title: renderI18nText("dev_handoff.component_browser_onboarding_callout.manual_step_2_title"),
        trackingContextName: "dev_mode_component_browser_step_2 - identify the component"
      });
    case "ManualStep3":
      return jsx(OnboardingModal, {
        description: renderI18nText("dev_handoff.component_browser_onboarding_callout.manual_step_3_description"),
        isShowing: isOverlayShowing,
        onClose: complete,
        primaryCta: {
          label: renderI18nText("general.got_it"),
          type: "button",
          onClick: next,
          ctaTrackingDescriptor: UpgradeAction.NEXT
        },
        stepCounter: {
          stepNum: 3,
          totalNumSteps: 3
        },
        targetKey: $$b1.Step3,
        title: renderI18nText("dev_handoff.component_browser_onboarding_callout.manual_step_3_title"),
        trackingContextName: "dev_mode_component_browser_step_3 - review or edit the mapping"
      });
    default:
      throwTypeError(step);
  }
}
export function $$w0({
  onOnboardingSequenceAction: e,
  canShowOnboarding: t
}) {
  let n = useAtomWithSubscription(h);
  let [i, l] = Vc("componentBrowserOnboardingSelection", null);
  let {
    show,
    complete,
    isShowing
  } = _$$e({
    overlay: DevModeComponentBrowserOnboardingOverlay,
    priority: N.DEFAULT_MODAL
  }, [n]);
  let b = ["ManualStep1", "ManualStep2", "ManualStep3"];
  let {
    currentStep,
    next
  } = A({
    numSteps: b.length,
    onComplete: complete
  });
  useEffect(() => {
    t && show({
      canShow: e => !e
    });
  }, [show, i, t]);
  return jsx(U, {
    currentStep,
    isShowing,
    children: b.map((t, n) => jsx(v, {
      step: t,
      isOverlayShowing: isShowing,
      next,
      complete,
      onOnboardingSequenceAction: e
    }, n))
  });
}
export const Mj = $$w0;
export const k1 = $$b1;
export const qd = $$y2;