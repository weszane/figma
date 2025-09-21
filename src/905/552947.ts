import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { useDispatch } from "react-redux";
import s from "classnames";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { renderI18nText } from "../905/303541";
import { styleBuilderInstance } from "../905/941192";
import { AutoLayout } from "../905/470281";
import { TextWithTruncation } from "../905/984674";
import { lW } from "../figma_app/11182";
var o = s;
export function $$h0({
  suggestion: e,
  instruction: t,
  dataTestId: i
}) {
  let s = useDispatch();
  let [h, g] = useState(!1);
  return jsxs(AutoLayout, {
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
      className: o()(cssBuilderInstance.relative.colorBgSecondary.b1.bRadius6.colorBorder.p8.wFull.alignLeft.$, "code_suggestion--hoverParent--DV-OL"),
      children: [jsx(TextWithTruncation, {
        fontFamily: "monospace",
        children: e
      }), jsx("div", {
        className: o()(cssBuilderInstance.absolute.right0.top0.mr8.mt8.opacity0.$, "code_suggestion--hoverChildOpacity1--gs35c"),
        style: styleBuilderInstance.add({
          transition: "opacity 200ms ease-out"
        }).$,
        onTransitionEnd: () => g(!1),
        children: jsx(TextWithTruncation, {
          fontWeight: "bold",
          color: "brand",
          children: renderI18nText(h ? "community.publishing.copied" : "community.publishing.copy")
        })
      })]
    }), jsx("div", {
      className: cssBuilderInstance.py4.$,
      children: "string" == typeof t ? jsx(TextWithTruncation, {
        children: t
      }) : t
    })]
  });
}
export const A = $$h0;