import { jsx, jsxs } from "react/jsx-runtime";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { Nv } from "../figma_app/318590";
import { JT } from "../figma_app/632248";
import { y } from "../figma_app/13082";
import { b } from "../905/222272";
export function $$d0({
  px: e,
  children: t
}) {
  return jsx("div", {
    className: cssBuilderInstance.flex.wFull.pb8.$,
    children: jsx("div", {
      className: cssBuilderInstance.px16.wFull.$,
      style: {
        paddingLeft: e,
        paddingRight: e
      },
      children: jsx(b, {
        fullWidth: !0,
        align: "center",
        gap: 4,
        justify: "space-between",
        children: t
      })
    })
  });
}
(e => {
  e.Icon = function ({
    children: e
  }) {
    return jsx("div", {
      style: {
        "--color-icon": "var(--color-icon-secondary)"
      },
      children: e
    });
  };
  e.Title = function ({
    children: e,
    endEnhancer: t,
    primaryText: i = !1
  }) {
    let l = Nv(!1);
    return jsxs("div", {
      className: cssBuilderInstance.flex1.flex.itemsBaseline.justifyBetween.itemsCenter.$,
      children: [jsxs("div", {
        className: cssBuilderInstance.flex.itemsCenter.gap8.$,
        children: [jsx("span", {
          className: cssBuilderInstance.textBodyMedium.colorTextSecondary.lh24.$$if(i, cssBuilderInstance.colorText).$,
          children: e
        }), l && jsx(y, {
          helpUrlVariant: JT.FIND_INSPIRATION
        })]
      }), t]
    });
  };
})($$d0 || ($$d0 = {}));
export const X = $$d0;