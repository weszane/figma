import { jsx } from "react/jsx-runtime";
import $$r from "classnames";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { styleBuilderInstance } from "../905/941192";
var a = $$r;
export function $$l0(e) {
  return jsx("div", {
    className: cssBuilderInstance.flex.overflowAuto.gap4.itemsCenter.pr1.$,
    style: styleBuilderInstance.$$if(e.height, {
      height: "auto" === e.height ? "auto" : `${e.height}px`
    }, styleBuilderInstance.h32).$,
    children: e.tabs
  });
}
export function $$d1(e) {
  return jsx("button", {
    className: a()("tab_group--tabSelectorOverrides--misNs", cssBuilderInstance.h24.lh16.bRadius5.pl8.pr8.$$if(e.isSelected, cssBuilderInstance.colorBgPressed, cssBuilderInstance.colorTextSecondary).$),
    onPointerDown: e.onPointerDown,
    onClick: t => {
      e.onClick(e.tab);
    },
    "data-onboarding-key": e.dataOnboardingKey,
    "aria-label": e.ariaLabel,
    "data-testid": e["data-testid"],
    "aria-pressed": e.isSelected,
    children: jsx("div", {
      className: e.isSelected ? "tab_group--tabNameSelected--zST4c" : "",
      children: e.tabName
    })
  });
}
export const f = $$l0;
export const r = $$d1;