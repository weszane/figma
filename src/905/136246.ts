import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useLayoutEffect } from "react";
import a from "classnames";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { P } from "../figma_app/864577";
import { B } from "../905/388732";
import { wn } from "../figma_app/708115";
var s = a;
export function $$u0({
  checked: e,
  icon: t,
  disabled: i,
  displayNode: a,
  label: l,
  badge: u,
  hoverBadges: m,
  keyboardShortcut: h,
  dataTestId: g
}) {
  let f = B.Item.useIsActive() && m;
  let [_, A] = useState(!1);
  let y = useRef(null);
  useLayoutEffect(() => {
    y.current && A(y.current.scrollWidth > y.current.offsetWidth);
  }, []);
  return jsxs("div", {
    className: s()(cssBuilderInstance.flex.itemsCenter.justifyBetween.wFull.h24.pr4.$, {
      [wn]: i
    }),
    "data-testid": `fullscreen-menu-item-${g}`,
    children: [jsxs("div", {
      className: cssBuilderInstance.flex.itemsCenter.gap8.overflowHidden.$,
      children: [jsx(p, {
        icon: t,
        checked: e,
        disabled: i,
        label: l
      }), jsx("span", {
        ref: y,
        className: cssBuilderInstance.ellipsis.noWrap.overflowHidden.minW0.$,
        ...(_ ? {
          "data-tooltip-type": "text",
          "data-tooltip": l,
          "data-tooltip-show-above": !0
        } : {}),
        children: a
      }), u]
    }), f && jsx("div", {
      className: cssBuilderInstance.colorTextTertiary.font11.fontNormal.noWrap.flex.itemsCenter.gap4.$,
      children: m
    }), !f && h && jsx("div", {
      className: cssBuilderInstance.colorTextTertiary.font11.fontNormal.noWrap.flex.itemsCenter.gap4.$,
      children: h
    })]
  });
}
function p({
  icon: e,
  checked: t,
  disabled: i,
  label: r
}) {
  let a = i ? {
    "--color-icon": "var(--color-icon-disabled)"
  } : {};
  let d = void 0 !== t ? jsx(P, {
    checked: t,
    disabled: i,
    label: r
  }) : e;
  return jsx("div", {
    className: s()(cssBuilderInstance.flex.justifyCenter.itemsCenter.flexShrink0.w24.h24.if(i, cssBuilderInstance.colorIconDisabled).$),
    style: a,
    children: d
  });
}
export const _ = $$u0;
