import { jsx, jsxs } from "react/jsx-runtime";
import { P } from "../905/347284";
import { s as _$$s } from "../cssbuilder/589278";
import { sx } from "../905/941192";
export function $$l0(e) {
  return jsx("div", {
    className: _$$s.overflowAuto.wFull.hFull.$,
    style: sx.$$if(!!e.maxContentWidth, sx.my0.mxAuto.add({
      maxWidth: `calc(${e.maxContentWidth}rem / 16)`
    })).$,
    children: jsxs(P, {
      className: _$$s.wFull.hFull.$,
      innerClassName: _$$s.px32.borderBox.hFull.$,
      minContentWidth: e.minContentWidth,
      children: [e.scrollAwayContent, e.stickyContent && jsx("div", {
        className: _$$s.sticky.top0.$,
        children: e.stickyContent
      }), e.children]
    })
  });
}
export const Q = $$l0;