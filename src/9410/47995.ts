import { jsxs, jsx } from "react/jsx-runtime";
import { ButtonPrimitive } from "../905/632989";
import { a as _$$a } from "../905/964520";
export function $$s0({
  text: e,
  description: t,
  onClick: i,
  iconComponent: s,
  recordingKey: o,
  rightCaret: l
}) {
  return jsxs(ButtonPrimitive, {
    onClick: i,
    recordingKey: o,
    className: "native_figjam_action_block--optionContainer--PAZPH",
    htmlAttributes: {
      "data-testid": o
    },
    children: [jsx("div", {
      className: "native_figjam_action_block--actionBlockLeftSide--lGAtd native_figjam_action_block--actionBlockRightSide--lUQRE",
      children: s
    }), jsxs("div", {
      className: "native_figjam_action_block--actionBlockRightSide--lUQRE",
      children: [jsx("div", {
        className: "native_figjam_action_block--textRow--yGuij",
        children: jsx("div", {
          className: "native_figjam_action_block--text--S9XDd text--fontPos13--xW8hS text--_fontBase--QdLsd",
          children: e
        })
      }), jsx("div", {
        className: "native_figjam_action_block--description--FdkF2 text--fontPos11--2LvXf text--_fontBase--QdLsd",
        children: t
      })]
    }), l && jsx(_$$a, {
      className: "native_figjam_action_block--rightCaret--mk9xP",
      "aria-hidden": !0
    })]
  });
}
export const t = $$s0;