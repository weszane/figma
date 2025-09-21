import { jsxs, jsx } from "react/jsx-runtime";
import { IconButton } from "../905/443068";
import { LinkPrimitive } from "../figma_app/496441";
import { ButtonPrimitive } from "../905/632989";
import { SvgComponent } from "../905/714743";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
import { AutoLayout } from "../905/470281";
import { TextWithTruncation } from "../905/984674";
import { A as _$$A } from "../svg/545021";
let m = {
  brand: "brand-tertiary",
  design: "design-tertiary",
  figjam: "figjam-tertiary",
  dev: "handoff-tertiary",
  gray: "tertiary",
  warning: "warning-tertiary",
  danger: "danger-tertiary",
  success: "success-tertiary"
};
export function $$h0({
  iconSrc: e,
  children: t,
  variant: i,
  orientation: a,
  title: s,
  action: h,
  onClose: _,
  dataTestId: A,
  cornerRadius: y
}) {
  switch (a) {
    case "horizontal":
      return jsxs(AutoLayout, {
        padding: 8,
        spacing: 4,
        direction: "horizontal",
        verticalAlignItems: "center",
        backgroundColor: m[i],
        height: "hug-contents",
        cornerRadius: y ?? 4,
        dataTestId: A,
        children: [jsx(g, {
          svg: e
        }), jsxs("div", {
          className: cssBuilderInstance.flex.flexRow.itemsCenter.flexGrow1.overflowHidden.gap16.$,
          children: [s && jsx("span", {
            className: cssBuilderInstance.flexShrink0.$,
            children: jsx(TextWithTruncation, {
              fontWeight: "semi-bold",
              color: "default",
              truncate: "end",
              children: s
            })
          }), jsx(TextWithTruncation, {
            color: "default",
            truncate: "end",
            children: t
          }), null != h && jsx("span", {
            className: cssBuilderInstance.mlAuto.px8.$,
            children: jsx(f, {
              variant: i,
              action: h
            })
          })]
        }), _ && jsx(IconButton, {
          "aria-label": getI18nString("general.close"),
          onClick: _,
          children: jsx(SvgComponent, {
            svg: _$$A
          })
        })]
      });
    case "vertical":
      return jsxs(AutoLayout, {
        padding: 8,
        spacing: 4,
        direction: "horizontal",
        verticalAlignItems: "start",
        backgroundColor: m[i],
        height: "hug-contents",
        cornerRadius: y ?? 4,
        dataTestId: A,
        children: [jsx(g, {
          svg: e
        }), jsxs(AutoLayout, {
          direction: "vertical",
          padding: {
            vertical: 4
          },
          spacing: 4,
          children: [jsxs(AutoLayout, {
            direction: "vertical",
            spacing: 0,
            children: [s && jsx(TextWithTruncation, {
              fontWeight: "semi-bold",
              color: "default",
              children: s
            }), jsx(TextWithTruncation, {
              color: "default",
              children: t
            })]
          }), null != h && jsx(f, {
            variant: i,
            action: h
          })]
        }), _ && jsx(IconButton, {
          "aria-label": getI18nString("general.close"),
          onClick: _,
          children: jsx(SvgComponent, {
            svg: _$$A
          })
        })]
      });
  }
}
function g({
  svg: e
}) {
  return jsx(SvgComponent, {
    className: cssBuilderInstance.w24.h24.flex.itemsCenter.justifyCenter.flexShrink0.colorIcon.$,
    svg: e
  });
}
function f({
  variant: e,
  action: t
}) {
  let i = cssBuilderInstance.flexShrink0.hAuto.noWrap.ellipsis.overflowHidden.cursorPointer.bgTransparent.match(e, {
    brand: cssBuilderInstance.colorTextBrand,
    design: cssBuilderInstance.colorTextDesign,
    figjam: cssBuilderInstance.colorTextFigjam,
    dev: cssBuilderInstance.colorTextTertiary,
    gray: cssBuilderInstance.colorTextDesign,
    warning: cssBuilderInstance.colorTextWarning,
    danger: cssBuilderInstance.colorTextDanger,
    success: cssBuilderInstance.colorTextSuccess
  }).$;
  return t.href ? jsx(LinkPrimitive, {
    onClick: t.onClick,
    newTab: !0,
    href: t.href,
    className: i,
    trusted: !0,
    children: t.label
  }) : jsx(ButtonPrimitive, {
    onClick: t.onClick,
    className: i,
    children: t.label
  });
}
export const zE = $$h0;