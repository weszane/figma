import { registerTooltip } from "../905/524523";
import { jsxs, jsx } from "react/jsx-runtime";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { renderI18nText } from "../905/303541";
export let $$s0 = registerTooltip("style_info", function (e) {
  let {
    styleName,
    styleDescription,
    styleFileName,
    styleElementType
  } = e;
  return jsxs("div", {
    className: cssBuilderInstance.alignLeft.$,
    children: [styleName && jsx("div", {
      children: styleName
    }), styleElementType && jsx("div", {
      children: styleElementType
    }), styleDescription && jsxs("div", {
      children: [(styleName || styleElementType) && jsx("br", {}), styleDescription]
    }), styleFileName && jsx("div", {
      style: {
        fontStyle: "italic"
      },
      children: renderI18nText("design_systems.styles.style_name_tooltip", {
        fileName: styleFileName
      })
    })]
  });
}, e => {
  let t = e.getAttribute("data-tooltip-style-name") || "";
  let i = e.getAttribute("data-tooltip-style-description") || "";
  let n = e.getAttribute("data-tooltip-style-element-type") || "";
  return {
    styleName: t,
    styleDescription: i,
    styleFileName: e.getAttribute("data-tooltip-style-file-name") || "",
    styleElementType: n,
    unconstrainWidth: "true" === e.getAttribute("data-tooltip-unconstrain-width")
  };
});
export const Z = $$s0;