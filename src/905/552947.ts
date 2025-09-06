import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { useDispatch } from "../vendor/514228";
import s from "classnames";
import { s as _$$s } from "../cssbuilder/589278";
import { renderI18nText } from "../905/303541";
import { sx } from "../905/941192";
import { Y } from "../905/830372";
import { E } from "../905/984674";
import { lW } from "../figma_app/11182";
var o = s;
export function $$h0({
  suggestion: e,
  instruction: t,
  dataTestId: i
}) {
  let s = useDispatch();
  let [h, g] = useState(!1);
  return jsxs(Y, {
    direction: "vertical",
    spacing: 0,
    height: "hug-contents",
    dataTestId: i,
    children: [jsxs("button", {
      onClick: () => {
        g(!0);
        s(lW({
          stringToCopy: e
        }));
      },
      className: o()(_$$s.relative.colorBgSecondary.b1.bRadius6.colorBorder.p8.wFull.alignLeft.$, "code_suggestion--hoverParent--DV-OL"),
      children: [jsx(E, {
        fontFamily: "monospace",
        children: e
      }), jsx("div", {
        className: o()(_$$s.absolute.right0.top0.mr8.mt8.opacity0.$, "code_suggestion--hoverChildOpacity1--gs35c"),
        style: sx.add({
          transition: "opacity 200ms ease-out"
        }).$,
        onTransitionEnd: () => g(!1),
        children: jsx(E, {
          fontWeight: "bold",
          color: "brand",
          children: renderI18nText(h ? "community.publishing.copied" : "community.publishing.copy")
        })
      })]
    }), jsx("div", {
      className: _$$s.py4.$,
      children: "string" == typeof t ? jsx(E, {
        children: t
      }) : t
    })]
  });
}
export const A = $$h0;