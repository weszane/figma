import { jsx } from "react/jsx-runtime";
import { Cs } from "../figma_app/59509";
import { Q } from "../905/363675";
import { trackEventAnalytics } from "../905/449184";
import { h } from "../905/207101";
import { CY } from "../figma_app/637027";
import { renderI18nText } from "../905/303541";
import { d as _$$d } from "../7021/966231";
if (443 == require.j) {}
if (443 == require.j) {}
export function $$_0() {
  h(() => {
    trackEventAnalytics("Codebase Suggestions AI Disabled Warning Banner Shown");
  });
  return jsx(Cs, {
    variant: "warn",
    children: jsx(Q, {
      children: renderI18nText("dev_handoff.codebase_suggestions.ai_features_are_disabled_on_your_plan_you_can_test_this_method_but_submissions_won_t_work_learn_more", {
        learnMoreLink: jsx(CY, {
          href: _$$d.aiFeatures,
          target: "_blank",
          trusted: !0,
          children: renderI18nText("general.learn_more")
        })
      })
    })
  });
}
export const P = $$_0;