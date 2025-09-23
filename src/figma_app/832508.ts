import { jsx, jsxs } from "react/jsx-runtime";
import { ServiceCategories } from "../905/165054";
import { Button } from "../905/521428";
import { SeverityLevel } from "../905/11";
import { ErrorBoundaryCrash, errorBoundaryFallbackTypes } from "../905/751457";
import { renderI18nText } from "../905/303541";
import { hH } from "../figma_app/433401";
import { RJ } from "../figma_app/869006";
export function $$u0(e) {
  return jsx(ErrorBoundaryCrash, {
    boundaryKey: "AskToEditButton",
    fallback: errorBoundaryFallbackTypes.NONE_I_KNOW_WHAT_IM_DOING,
    severity: SeverityLevel.Critical,
    sentryTags: {
      area: ServiceCategories.MONETIZATION_EXPANSION
    },
    children: jsxs("div", {
      "data-onboarding-key": hH,
      className: "ask_to_edit_button--container--6dbg0",
      children: [jsx(RJ, {
        viewOnly: !0,
        variant: "primary",
        disableAutoAppearingTooltips: e?.disableAutoAppearingTooltips
      }), jsx("div", {
        className: "ask_to_edit_button--hiddenButtonSpacer--oz10-",
        children: jsx(Button, {
          variant: "primary",
          children: renderI18nText("fullscreen.toolbar.request.request_sent")
        })
      })]
    })
  });
}
export const F = $$u0;
