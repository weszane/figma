import { ex } from "../905/524523";
import { jsxs, jsx } from "react/jsx-runtime";
import { s as _$$s } from "../cssbuilder/589278";
import { JT } from "../figma_app/632248";
import { x } from "../905/719609";
import { y } from "../figma_app/13082";
export let $$l0 = ex("ai_beta", function ({
  text: e,
  helpUrlVariant: t
}) {
  return jsxs("div", {
    className: _$$s.flex.itemsCenter.justifyCenter.gap6.$,
    children: [e, jsx(y, {
      variant: x.ON_MENU,
      helpUrlVariant: t
    })]
  });
}, e => {
  let t = e.getAttribute("data-tooltip-ai-beta-action");
  let i = Object.values(JT).includes(t) ? t : "default";
  return {
    text: e.getAttribute("data-tooltip-ai-beta-text"),
    helpUrlVariant: i
  };
});
export const S = $$l0;