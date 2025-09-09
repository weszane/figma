import { jsx } from "react/jsx-runtime";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Fullscreen } from "../figma_app/763686";
import { getSingletonSceneGraph } from "../905/700578";
import { h as _$$h } from "../905/207101";
import { renderI18nText } from "../905/303541";
import { b as _$$b } from "../905/985254";
import { Z as _$$Z } from "../905/104740";
import { VF, uY } from "../figma_app/989514";
import { b as _$$b2 } from "../figma_app/5657";
import { Vr } from "../figma_app/151869";
import { eN, zU } from "../figma_app/202626";
import { F_, EL } from "../905/858282";
import { W } from "../figma_app/605682";
export function $$E0({
  onPrimaryCtaClick: e,
  onSecondaryCtaClick: t,
  primaryCtaProps: r,
  secondaryCtaProps: E,
  onClose: y,
  skip: b,
  currentStepNum: T,
  totalNumSteps: I,
  lowerLeftText: S,
  title: v,
  bodyText: A,
  frameNodeMatcher: x,
  fromCursorBot: N,
  isFollowUp: C
}) {
  let w = useDispatch();
  let O = Vr();
  let R = x?.(getSingletonSceneGraph()) || eN(getSingletonSceneGraph(), "FRAME", O);
  let L = _$$Z();
  let [P, D] = useState(!1);
  if (_$$h(() => {
    queueMicrotask(async function () {
      if (null == R) {
        b();
        return;
      }
      (O?.type !== "FRAME" || N) && (await zU({
        navigate: L,
        guidToSelect: R.guid
      }));
      D(!0);
      w(_$$b({
        design_panel_step_shown: !0
      }));
      Fullscreen.triggerAction("set-tool-default", null);
    });
  }), !P) return null;
  let k = N ? _$$b2 : VF;
  let M = N ? void 0 : jsx(uY, {
    currentStepNum: T || 2,
    totalNumSteps: I || 4,
    useLoadingBar: !0
  });
  let F = {
    dismissModal: y,
    disableHighlight: !0,
    targetKey: W,
    title: v || renderI18nText("tooltips_plus_onboarding.change_properties_in_the_design_panel"),
    trackingContextName: "Tooltips+ Design Panel Step (No Figma Basics)",
    lowerLeftText: S || M,
    onSecondaryCtaClick: t,
    onPrimaryCtaClick: e,
    primaryCtaProps: r,
    secondaryCtaProps: E,
    arrowPosition: F_.RIGHT_BODY,
    shouldCenterArrow: EL.FALLBACK,
    pointsTo: "designPanel"
  };
  let j = {
    ...F,
    collapseToTopRight: N,
    trackingContextName: "Cursor Bot Design Panel Step" + (C ? " (Reactive Follow Up)" : "")
  };
  return jsx(k, {
    ...(N ? j : F),
    children: A || renderI18nText("tooltips_plus_onboarding.next_take_some_time_to_adjust_your_frames_size")
  });
}
export const Z = $$E0;
