import { jsx, jsxs } from "react/jsx-runtime";
import { P } from "../905/347284";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { styleBuilderInstance } from "../905/941192";
export function $$l0(e) {
  return jsx("div", {
    className: cssBuilderInstance.overflowAuto.wFull.hFull.$,
    style: styleBuilderInstance.if(!!e.maxContentWidth, styleBuilderInstance.my0.mxAuto.add({
      maxWidth: `calc(${e.maxContentWidth}rem / 16)`
    })).$,
    children: jsxs(P, {
      className: cssBuilderInstance.wFull.hFull.$,
      innerClassName: cssBuilderInstance.px32.borderBox.hFull.$,
      minContentWidth: e.minContentWidth,
      children: [e.scrollAwayContent, e.stickyContent && jsx("div", {
        className: cssBuilderInstance.sticky.top0.$,
        children: e.stickyContent
      }), e.children]
    })
  });
}
export const Q = $$l0;
