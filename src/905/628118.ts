import { jsx, jsxs } from "react/jsx-runtime";
import { Wi } from "../figma_app/162641";
import { AutoLayout, Spacer } from "../905/470281";
import { I } from "../figma_app/638694";
export function $$o0(e) {
  let t = I();
  return jsx("div", {
    className: "x1hqtkzk x1y0btm7 xl8oe17 xbdeg4j x7z60cl",
    children: jsxs(AutoLayout, {
      padding: t ? {
        bottom: 24
      } : {
        vertical: 24
      },
      spacing: 24,
      dataTestId: "admin-settings-header",
      children: [e.avatar, e.isLoading ? jsx(Wi, {
        className: "x1exxlbk xxk0z11",
        dataTestId: "admin-settings-header-shimmer"
      }) : jsx("h1", {
        className: "x540y09 x578rrm x17evb6q xpyeu0a",
        children: e.title
      }), e.leftActions, jsx(Spacer, {}), e.rightActions]
    })
  });
}
export const K = $$o0;