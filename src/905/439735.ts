import { jsxs, jsx } from "react/jsx-runtime";
import { useSelector } from "react-redux";
import a from "classnames";
import { camelToKebab } from "../figma_app/930338";
import { Spacing } from "../figma_app/637027";
import { KeyboardShortcut } from "../figma_app/420927";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { formatI18nMessage } from "../905/482208";
import { getKeyboardShortcut } from "../figma_app/357047";
import { TT, oo } from "../905/114390";
var s = a;
function h({
  tooltipKey: e
}) {
  if (!TT.includes(e)) return null;
  let {
    assetUrl,
    assetBgColor
  } = oo[e];
  return jsxs("div", {
    style: {
      position: "relative",
      width: "224px"
    },
    children: [jsx("div", {
      style: {
        width: "100%",
        height: "136px",
        zIndex: -2,
        backgroundColor: assetBgColor
      }
    }), jsx("video", {
      src: assetUrl,
      autoPlay: !0,
      loop: !0,
      muted: !0,
      playsInline: !0,
      className: cssBuilderInstance.maxWFull.$,
      style: {
        position: "absolute",
        top: 0,
        left: 0
      },
      role: "img"
    })]
  });
}
export function $$g0({
  tooltipKey: e
}) {
  let t = useSelector(e => e.mirror.appModel.keyboardShortcuts);
  let i = camelToKebab(e);
  let a = formatI18nMessage(i);
  let g = getKeyboardShortcut(t, i);
  let f = TT.includes(e) ? oo[e]?.getDescription() : null;
  return jsxs("div", {
    className: s()(cssBuilderInstance.flex.flexColumn.colorBg.$, "animated_tooltip--contentWrapper--lL3Ks"),
    children: [jsx(h, {
      tooltipKey: e
    }), jsxs("div", {
      style: {
        padding: "12px"
      },
      children: [jsxs("div", {
        className: cssBuilderInstance.flex.columnGap4.$,
        children: [jsx("span", {
          className: cssBuilderInstance.font11.fontSemiBold.colorText.$,
          children: a
        }), jsx(KeyboardShortcut, {
          shortcut: g,
          className: s()(cssBuilderInstance.flex.columnGap4.fontSemiBold.colorTextSecondary.$, "animated_tooltip--shortcut--kyqA8")
        })]
      }), jsx(Spacing, {
        multiple: .5
      }), jsx("div", {
        className: cssBuilderInstance.colorText.$,
        children: f
      })]
    })]
  });
}
export const x = $$g0;