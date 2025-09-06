import { jsx } from "react/jsx-runtime";
import { useState } from "react";
import { h } from "../905/207101";
import { renderI18nText } from "../905/303541";
import { Z } from "../905/104740";
import { VF, uY } from "../figma_app/989514";
import { zU, en } from "../figma_app/202626";
import { F_, EL } from "../905/748636";
export let $$u1 = "design-panel-container";
export function $$p0(e) {
  let [t, r] = useState(!1);
  let p = Z();
  return (h(() => {
    queueMicrotask(async function () {
      let t = e.getNodeForViewportFocus?.();
      let n = e.getNodeToSelect();
      n && "FRAME" === n.type ? (await zU({
        navigate: p,
        guidToFocus: t?.guid,
        guidToSelect: n.guid
      }), r(!0)) : e.flowDirection === en.FORWARD ? e.onNext() : e.onPrevious();
    });
  }), t) ? jsx(VF, {
    arrowPosition: F_.RIGHT_BODY,
    disableHighlight: !0,
    dismissModal: e.onClose,
    lowerLeftText: jsx(uY, {
      currentStepNum: e.currentStepNum,
      totalNumSteps: e.totalNumSteps
    }),
    onPrimaryCtaClick: e.onNext,
    onSecondaryCtaClick: e.onPrevious,
    pointsTo: "designPanel",
    shouldCenterArrow: EL.FALLBACK,
    targetKey: $$u1,
    title: renderI18nText("tooltips_plus_onboarding.design_panel.title"),
    trackingContextName: "Tooltips+ Design Panel Step",
    children: renderI18nText("tooltips_plus_onboarding.design_panel.description")
  }) : null;
}
export const K = $$p0;
export const W = $$u1;