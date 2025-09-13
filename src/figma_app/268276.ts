import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { ButtonPrimitive } from "../905/632989";
import a from "classnames";
import { G } from "../905/750789";
import { i as _$$i } from "../905/186077";
import { Y } from "../905/315917";
import { W1, BI, C_, wH, t7, hg, p3, Hs } from "../figma_app/433906";
var $$s = a;
export function $$u0(e) {
  let {
    styleIcon,
    styleName,
    styleDescription,
    styleValue,
    selected,
    hasFocus,
    disableHover,
    shouldStretch,
    recordingKey,
    onClick
  } = e;
  let E = Y(styleName, styleDescription, styleValue);
  let y = $$s()(W1, {
    [BI]: !disableHover,
    [C_]: selected && !hasFocus,
    [wH]: selected && hasFocus,
    [t7]: shouldStretch
  });
  let b = jsxs(Fragment, {
    children: [jsx("div", {
      className: hg,
      children: styleIcon
    }), jsx("div", {
      className: p3,
      children: jsx(G, {
        className: Hs,
        text: styleName,
        showTooltip: _$$i.ALWAYS,
        getTooltipText: E
      })
    })]
  });
  return onClick ? jsx(ButtonPrimitive, {
    className: y,
    recordingKey,
    actionOnPointerDown: !0,
    onClick,
    htmlAttributes: {
      onContextMenu: onClick
    },
    children: b
  }) : jsx("div", {
    className: y,
    children: b
  });
}
export const s = $$u0;