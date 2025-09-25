import { registerTooltip } from "../905/524523";
import { jsxs, jsx } from "react/jsx-runtime";
import { truncate } from "../figma_app/930338";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { Ro } from "../figma_app/805373";
export let $$o0 = registerTooltip("user_info", function (e) {
  let {
    userImgUrl,
    userHandle
  } = e;
  return jsxs("div", {
    className: cssBuilderInstance.flex.itemsCenter.justifyCenter.$,
    children: [jsx("div", {
      children: jsx(Ro, {
        size: 30,
        entity: {
          img_url: userImgUrl,
          handle: userHandle
        }
      })
    }), jsx("span", {
      className: "user_info_tooltip--tooltipName--iCh4X",
      children: truncate(userHandle, 25)
    })]
  });
}, e => ({
  userImgUrl: e.getAttribute("data-tooltip-user-img-url"),
  userHandle: e.getAttribute("data-tooltip-user-handle"),
  unconstrainWidth: "true" === e.getAttribute("data-tooltip-unconstrain-width")
}));
export const N = $$o0;