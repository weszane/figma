import { jsx, jsxs } from "react/jsx-runtime";
import { ServiceCategories as _$$e } from "../905/165054";
import { $n } from "../905/521428";
import { DZ } from "../905/11";
import { tH, H4 } from "../905/751457";
import { tx } from "../905/303541";
import { hH } from "../figma_app/433401";
import { RJ } from "../figma_app/869006";
export function $$u0(e) {
  return jsx(tH, {
    boundaryKey: "AskToEditButton",
    fallback: H4.NONE_I_KNOW_WHAT_IM_DOING,
    severity: DZ.Critical,
    sentryTags: {
      area: _$$e.MONETIZATION_EXPANSION
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
        children: jsx($n, {
          variant: "primary",
          children: tx("fullscreen.toolbar.request.request_sent")
        })
      })]
    })
  });
}
export const F = $$u0;