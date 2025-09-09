import { jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Fullscreen } from "../figma_app/763686";
import { getSingletonSceneGraph } from "../905/700578";
import { h } from "../905/207101";
import { renderI18nText } from "../905/303541";
import { VF, uY } from "../figma_app/989514";
import { b } from "../figma_app/5657";
import { eN } from "../figma_app/202626";
export function $$_0(e) {
  h(() => {
    let t = eN(getSingletonSceneGraph(), "FRAME");
    if (e.hasUiKits && null != t) {
      e.skip && e.skip();
      return;
    }
  });
  let t = useSelector(e => e.isFullscreenDocumentLoaded);
  useEffect(() => {
    t && Fullscreen.triggerAction("set-tool-frame", null);
  }, [t]);
  let r = e.fromCursorBot ? b : VF;
  return jsx("div", {
    "data-testid": "tooltips-plus-frames-step",
    children: jsx(r, {
      disableHighlight: !0,
      dismissModal: e.onClose,
      hideCloseButton: e.hideCloseButton,
      lowerLeftText: jsx(uY, {
        currentStepNum: e.currentStepNum,
        totalNumSteps: e.totalNumStep,
        useLoadingBar: e.useLoadingBar
      }),
      onPrimaryCtaClick: e.onPrimaryCtaClick,
      onSecondaryCtaClick: e.onSecondaryCtaClick ? () => {
        Fullscreen.triggerAction("set-tool-default", null);
        e.onSecondaryCtaClick && e.onSecondaryCtaClick();
      } : void 0,
      pointsTo: "toolbar",
      primaryCtaProps: e.primaryCtaProps,
      secondaryCtaProps: e.secondaryCtaProps,
      targetKey: "frame",
      title: e.hasUiKits ? renderI18nText("tooltips_plus_onboarding.presets_frame_step.title") : renderI18nText("tooltips_plus_onboarding.no_nav_frames_get_started_with_a_frame"),
      trackingContextName: e.fromCursorBot ? "Cursor Bot Create Frame Step" : "Tooltips+ Frame Step",
      children: e.bodyText || renderI18nText("tooltips_plus_onboarding.no_nav_frames_description")
    })
  });
}
export const e = $$_0;
