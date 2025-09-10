import { jsxs, jsx } from "react/jsx-runtime";
import { K } from "../905/443068";
import { _ } from "../figma_app/496441";
import { E } from "../905/632989";
import { B } from "../905/714743";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
import { AutoLayout } from "../905/470281";
import { E as _$$E } from "../905/984674";
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
          className: _$$s.flex.flexRow.itemsCenter.flexGrow1.overflowHidden.gap16.$,
          children: [s && jsx("span", {
            className: _$$s.flexShrink0.$,
            children: jsx(_$$E, {
              fontWeight: "semi-bold",
              color: "default",
              truncate: "end",
              children: s
            })
          }), jsx(_$$E, {
            color: "default",
            truncate: "end",
            children: t
          }), null != h && jsx("span", {
            className: _$$s.mlAuto.px8.$,
            children: jsx(f, {
              variant: i,
              action: h
            })
          })]
        }), _ && jsx(K, {
          "aria-label": getI18nString("general.close"),
          onClick: _,
          children: jsx(B, {
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
            children: [s && jsx(_$$E, {
              fontWeight: "semi-bold",
              color: "default",
              children: s
            }), jsx(_$$E, {
              color: "default",
              children: t
            })]
          }), null != h && jsx(f, {
            variant: i,
            action: h
          })]
        }), _ && jsx(K, {
          "aria-label": getI18nString("general.close"),
          onClick: _,
          children: jsx(B, {
            svg: _$$A
          })
        })]
      });
  }
}
function g({
  svg: e
}) {
  return jsx(B, {
    className: _$$s.w24.h24.flex.itemsCenter.justifyCenter.flexShrink0.colorIcon.$,
    svg: e
  });
}
function f({
  variant: e,
  action: t
}) {
  let i = _$$s.flexShrink0.hAuto.noWrap.ellipsis.overflowHidden.cursorPointer.bgTransparent.match(e, {
    brand: _$$s.colorTextBrand,
    design: _$$s.colorTextDesign,
    figjam: _$$s.colorTextFigjam,
    dev: _$$s.colorTextTertiary,
    gray: _$$s.colorTextDesign,
    warning: _$$s.colorTextWarning,
    danger: _$$s.colorTextDanger,
    success: _$$s.colorTextSuccess
  }).$;
  return t.href ? jsx(_, {
    onClick: t.onClick,
    newTab: !0,
    href: t.href,
    className: i,
    trusted: !0,
    children: t.label
  }) : jsx(E, {
    onClick: t.onClick,
    className: i,
    children: t.label
  });
}
export const zE = $$h0;