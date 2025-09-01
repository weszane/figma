import { jsx, jsxs } from "react/jsx-runtime";
import { s as _$$s } from "../cssbuilder/589278";
import { Nv } from "../figma_app/318590";
import { JT } from "../figma_app/632248";
import { y } from "../figma_app/13082";
import { b } from "../905/222272";
export function $$d0({
  px: e,
  children: t
}) {
  return jsx("div", {
    className: _$$s.flex.wFull.pb8.$,
    children: jsx("div", {
      className: _$$s.px16.wFull.$,
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
      className: _$$s.flex1.flex.itemsBaseline.justifyBetween.itemsCenter.$,
      children: [jsxs("div", {
        className: _$$s.flex.itemsCenter.gap8.$,
        children: [jsx("span", {
          className: _$$s.textBodyMedium.colorTextSecondary.lh24.$$if(i, _$$s.colorText).$,
          children: e
        }), l && jsx(y, {
          helpUrlVariant: JT.FIND_INSPIRATION
        })]
      }), t]
    });
  };
})($$d0 || ($$d0 = {}));
export const X = $$d0;