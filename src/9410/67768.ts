import { jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { getFeatureFlags } from "../905/601108";
import { atom, useAtomWithSubscription, Rq } from "../figma_app/27355";
import { isAIFeaturesEnabledForCurrentUser } from "../figma_app/459490";
import { renderI18nText } from "../905/303541";
import { isWhiteboardFileType } from "../figma_app/976749";
import { e as _$$e } from "../905/621515";
import { Sb } from "../figma_app/101956";
import { N } from "../figma_app/268271";
import { OnboardingModal } from "../905/425180";
import { hasJubileePermissionForDesign } from "../figma_app/251115";
import { ArrowPosition, PositioningStrategy } from "../905/858282";
import { FigJamAIActionsCallout } from "../figma_app/6204";
import { _ as _$$_ } from "../figma_app/91620";
let $$x2 = atom(!1);
let $$y1 = atom(!1);
let $$b0 = "figjam_ai_actions_callout";
export function $$C3() {
  let e = useAtomWithSubscription(Rq(Sb));
  let t = _$$_();
  let i = useAtomWithSubscription($$x2);
  let C = useAtomWithSubscription($$y1);
  let v = hasJubileePermissionForDesign();
  let E = !isAIFeaturesEnabledForCurrentUser();
  let T = isWhiteboardFileType();
  let w = v || getFeatureFlags().figjam_ai_menu_items_all_access && T && E;
  let {
    show,
    isShowing,
    complete
  } = _$$e({
    overlay: FigJamAIActionsCallout,
    priority: N.SECONDARY_MODAL
  }, [e]);
  useEffect(() => {
    i && t && getFeatureFlags().figjam_ai_actions_callout && w && show({
      canShow: e => !e
    });
  }, [w, i, t, show]);
  useEffect(() => {
    isShowing && (!i || C) && complete();
  }, [complete, i, isShowing, C]);
  return jsx(OnboardingModal, {
    arrowPosition: ArrowPosition.BOTTOM,
    description: renderI18nText("figjam_ai.ai_actions_callout.description"),
    emphasized: !0,
    isShowing,
    onClose: complete,
    shouldCenterArrow: PositioningStrategy.BEST_EFFORT,
    shouldDisableAnimation: !0,
    targetKey: $$b0,
    testId: "figjam-ai-actions-overlay",
    title: renderI18nText("figjam_ai.ai_actions_callout.title"),
    trackingContextName: "FigJam Ai Actions callout"
  });
}
export const D1 = $$b0;
export const FX = $$y1;
export const n6 = $$x2;
export const sR = $$C3;