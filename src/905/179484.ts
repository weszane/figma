import { ex } from "../905/524523";
import { jsxs, jsx } from "react/jsx-runtime";
import { tx } from "../905/303541";
export let $$a0 = ex("component_info", function (e) {
  let {
    name,
    fileName,
    description,
    numVariants
  } = e;
  return jsxs("div", {
    className: description ? "component_info_tooltip--componentInfoLeft--fv-RA text--fontNeg11--StdFq text--_fontBase--QdLsd text--_negText--j9g-L" : "component_info_tooltip--componentInfo--mFOV7 text--fontNeg11--StdFq text--_fontBase--QdLsd text--_negText--j9g-L",
    dir: "auto",
    children: [name && jsx("div", {
      className: "component_info_tooltip--componentTitle--NGbZq",
      children: name
    }), fileName && jsx("div", {
      style: {
        fontStyle: "italic"
      },
      children: fileName
    }), !!numVariants && jsx("div", {
      children: tx("design_systems.assets_panel.variant_count", {
        numVariants
      })
    }), description && jsx("div", {
      className: name || numVariants ? "component_info_tooltip--descriptionMarginTop--q7p5E" : void 0,
      children: description
    })]
  });
}, e => {
  let t = e.getAttribute("data-tooltip-component-name");
  return {
    name: t,
    fileName: e.getAttribute("data-tooltip-file-name"),
    description: e.getAttribute("data-tooltip-component-description"),
    numVariants: Number(e.getAttribute("data-tooltip-num-variants") || 0)
  };
});
export const B = $$a0;