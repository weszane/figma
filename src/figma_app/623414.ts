import { jsxs, jsx } from "react/jsx-runtime";
import { E } from "../905/632989";
import a from "classnames";
import { E as _$$E } from "../905/984674";
import { isColorDarkByLuminance } from "../figma_app/191804";
var s = a;
export function $$l0(e) {
  return jsxs(E, {
    disabled: e.disabled,
    className: s()("breadcrumb_item--breadcrumbContainer--HqDOm", e.disabled ? void 0 : "breadcrumb_item--hoverable--kJzx7"),
    onClick: e.onClick,
    children: [jsx("div", {
      className: s()("breadcrumb_item--breadcrumbText--WcRv2", e.disabled && "breadcrumb_item--disabledBreadcrumbText--Ukp2b"),
      children: jsx(_$$E, {
        fontSize: 13,
        truncate: !0,
        children: e.text
      })
    }), e.hasTrailingDivider && jsx("div", {
      className: "breadcrumb_item--breadcrumbSlash--Z04jd",
      children: jsx(_$$E, {
        fontSize: 13,
        children: "/"
      })
    })]
  });
}
export function $$c1(e) {
  let t = e.parentBackgroundColor ? isColorDarkByLuminance(e.parentBackgroundColor) ? "breadcrumb_item_on_custom_background--breadcrumbTextForDarkBackground--zRqgR" : "breadcrumb_item_on_custom_background--breadcrumbTextForLightBackground--2Oj46" : "breadcrumb_item_on_custom_background--breadcrumbText--Yt7Da";
  return jsx(E, {
    disabled: e.disabled,
    className: s()("breadcrumb_item_on_custom_background--breadcrumbContainer--uofsd", e.disabled ? void 0 : "breadcrumb_item_on_custom_background--hoverable--ErLQF"),
    onClick: e.onClick,
    children: jsx("div", {
      className: t,
      children: jsx(_$$E, {
        fontSize: 13,
        truncate: !0,
        children: e.text
      })
    })
  });
}
export function $$u2(e) {
  return jsx("div", {
    className: "x78zum5 xb3r6kr x167g77z",
    children: e.children
  });
}
export const J5 = $$l0;
export const jT = $$c1;
export const A5 = $$u2;