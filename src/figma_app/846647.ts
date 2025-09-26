import { jsx } from "react/jsx-runtime";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { h } from "../905/791079";
import { renderI18nText } from "../905/303541";
import { postUserFlag } from "../905/985254";
import { Z } from "../905/104740";
import { VF } from "../figma_app/989514";
import { b as _$$b2 } from "../figma_app/5657";
import { navigateAndSelect } from "../figma_app/202626";
import { ArrowPosition, PositioningStrategy } from "../905/748636";
export let $$h0 = "text-panel-container";
export function $$m1(e) {
  let [t, r] = useState(!1);
  let m = Z();
  let g = useDispatch();
  if (h(() => {
    queueMicrotask(async function () {
      let t = e.getNodeForViewportFocus?.();
      let n = e.getNodeToSelect();
      n ? (await navigateAndSelect({
        navigate: m,
        guidToFocus: t?.guid,
        guidToSelect: n.guid
      }), r(!0), g(postUserFlag({
        format_text_step_shown: !0
      }))) : e.skip();
    });
  }), !t) return null;
  let f = e.fromCursorBot ? _$$b2 : VF;
  let E = {
    dismissModal: e.onClose,
    disableHighlight: !0,
    targetKey: $$h0,
    title: e.title || renderI18nText("tooltips_plus_onboarding.text_formatting.title"),
    trackingContextName: "Tooltips+ Text Formatting Step",
    lowerLeftText: e.lowerLeftText,
    onSecondaryCtaClick: e.onSecondaryCtaClick,
    onPrimaryCtaClick: e.onPrimaryCtaClick,
    arrowPosition: ArrowPosition.RIGHT_BODY,
    shouldCenterArrow: PositioningStrategy.FALLBACK,
    pointsTo: "designPanel",
    primaryCtaProps: e.primaryCtaProps,
    secondaryCtaProps: e.secondaryCtaProps
  };
  let y = {
    ...E,
    collapseToTopRight: e.fromCursorBot,
    trackingContextName: "Cursor Bot Text Formatting Step" + (e.isFollowUp ? " (Reactive Follow Up)" : "")
  };
  let b = renderI18nText("tooltips_plus_onboarding.text_formatting_ui3.description");
  return jsx(f, {
    ...(e.fromCursorBot ? y : E),
    children: e.bodyText || b
  });
}
export const B = $$h0;
export const P = $$m1;