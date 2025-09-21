import { jsxs, jsx } from "react/jsx-runtime";
import { getFeatureFlags } from "../905/601108";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
import { ex } from "../905/524523";
import { Qq } from "../905/736956";
export let $$d0 = ex("ai_features_tooltip", function () {
  return getFeatureFlags().figjam_synthesize_handbrake ? jsxs("div", {
    className: cssBuilderInstance.flex.flexColumn.justifyCenter.$,
    children: [jsx("p", {
      className: Qq,
      children: getI18nString("whiteboard.inline_menu.ai_quick_actions_disabled_header")
    }), jsx("p", {
      className: Qq,
      children: getI18nString("whiteboard.inline_menu.ai_quick_actions_disabled_try_again_later")
    })]
  }) : jsx("span", {
    children: getI18nString("whiteboard.inline_menu.ai_quick_actions_button_text")
  });
});
export const w = $$d0;