import { jsx, jsxs } from "react/jsx-runtime";
import r from "classnames";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { styleBuilderInstance } from "../905/941192";
import { getVisibleTheme } from "../905/640017";
var a = r;
export function $$d0({
  children: e
}) {
  return jsx("div", {
    className: cssBuilderInstance.flex.flexColumn.itemsCenter.gap8.$,
    children: e
  });
}
(e => {
  e.ArtworkIcon = function ({
    children: e,
    variant: t
  }) {
    return jsx("div", {
      style: {
        "--color-icon": "danger" === t ? "var(--color-icon-danger)" : "var(--color-icon-secondary)"
      },
      children: e
    });
  };
  e.ArtworkIllustration = function ({
    light: e,
    dark: t
  }) {
    return "dark" === getVisibleTheme() ? jsx("div", {
      children: t
    }) : jsx("div", {
      children: e
    });
  };
  e.Text = function ({
    title: e,
    subtitle: t,
    dataTestId: i
  }) {
    let r = t && t.length > 40;
    return jsxs("div", {
      className: a()(r ? "artwork_with_text_below--textPretty--xEO0y" : "artwork_with_text_below--textBalance--yjPSu", cssBuilderInstance.$$if(r, cssBuilderInstance.gap4).$, cssBuilderInstance.flex.flexColumn.itemsCenter.alignCenter.$),
      style: styleBuilderInstance.add({
        maxWidth: "30em"
      }).$,
      "data-testid": i,
      children: [jsx("span", {
        className: cssBuilderInstance.textBodyLarge.$$if(t, cssBuilderInstance.fontMedium.colorText, cssBuilderInstance.colorTextSecondary).$,
        children: e
      }), t && jsx("span", {
        className: cssBuilderInstance.$$if(r, cssBuilderInstance.textBodyMedium, cssBuilderInstance.textBodyLarge).colorTextSecondary.$,
        children: t
      })]
    });
  };
})($$d0 || ($$d0 = {}));
export const N = $$d0;