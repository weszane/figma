import { jsx } from "react/jsx-runtime";
import { useCallback } from "react";
import { useAtomWithSubscription } from "../figma_app/27355";
import { useSingleEffect } from "../905/791079";
import { getI18nString } from "../905/303541";
import { useCanAccessFullDevMode } from "../figma_app/473493";
import { isDevHandoffEditorType } from "../figma_app/976749";
import { useEventForwarder } from "../905/453826";
import { e as _$$e } from "../905/621515";
import { E6 } from "../3276/240191";
import { PD } from "../figma_app/101956";
import { _ as _$$_ } from "../905/361125";
import { MULTIPLAYER_USER_STATE_CHANGE } from "../figma_app/915202";
import { N } from "../figma_app/268271";
import { OnboardingRenderFrame } from "../905/284399";
import { OverlayType } from "../figma_app/450829";
import { MultiplayerSpotlightNudgeNux } from "../figma_app/6204";
let $$b = () => getI18nString("collaboration.spotlight.nudge_spotlight.title");
export function $$y0() {
  let e = useAtomWithSubscription(PD);
  let t = useAtomWithSubscription(E6);
  let n = isDevHandoffEditorType();
  let r = useCanAccessFullDevMode();
  let y = n && !r;
  let C = _$$e({
    overlay: MultiplayerSpotlightNudgeNux,
    priority: N.SECONDARY_MODAL
  }, [e, t]);
  let w = useCallback(() => {
    y || C.show({
      canShow: (e, t) => !e && t
    });
  }, [y, C]);
  useSingleEffect(() => {
    w();
  });
  let j = useCallback(() => {
    C.isShowing || w();
  }, [C.isShowing, w]);
  useEventForwarder(C.uniqueId, MULTIPLAYER_USER_STATE_CHANGE, j);
  return jsx(OnboardingRenderFrame, {
    element: _$$_,
    isShowing: C.isShowing,
    modalType: OverlayType.ANNOUNCEMENT_POINTER,
    onClickPrimaryCta: C.complete,
    onClose: C.complete,
    onManualDismiss: C.complete,
    onboardingKey: "multiplayer-spotlight-nux-key",
    title: $$b,
    trackingContextName: "multiplayer_spotlight_nudge",
    userFlagOnShow: "seen_spotlight_hint"
  });
}
export const b = $$y0;