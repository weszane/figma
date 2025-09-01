import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { k } from "../905/443820";
import { J } from "../905/614223";
import s from "classnames";
import { B } from "../905/714743";
import { s as _$$s } from "../cssbuilder/589278";
import { e6 } from "../figma_app/617427";
import { HM } from "../905/190597";
import { a as _$$a, i as _$$i } from "../905/297691";
var o = s;
var $$_0 = (e => (e[e.BUTTON = 0] = "BUTTON", e[e.ICON_BUTTON = 1] = "ICON_BUTTON", e[e.ICON_TEXT_BUTTON = 2] = "ICON_TEXT_BUTTON", e[e.CUSTOM = 3] = "CUSTOM", e[e.CUSTOM_BUTTON = 4] = "CUSTOM_BUTTON", e))($$_0 || {});
function h(e) {
  switch (e.action.kind) {
    case 0:
      return jsx(Fragment, {
        children: e.action.displayText
      });
    case 1:
      return jsx(B, {
        svg: e.action.icon
      });
    case 2:
      return jsxs(Fragment, {
        children: [jsx(B, {
          svg: e.action.icon,
          className: e.action.svgStyleClass,
          style: {
            alignSelf: "center",
            paddingRight: "5px"
          }
        }), jsx("div", {
          children: e.action.displayText
        })]
      });
    default:
      return null;
  }
}
export function $$m1(e) {
  if (3 === e.action.kind) return jsx("div", {
    className: o()(e.action.showOnMobile ? null : _$$a, e.action.hideOnDesktop ? _$$i : null),
    children: e.action.element
  }, e.action.key);
  let t = "isLoading" in e.action && !0 === e.action.isLoading;
  let r = jsx(e6, {
    className: o()(_$$s.flex.itemsCenter.justifyCenter.$, e.action.showOnMobile ? null : _$$a, e.action.hideOnDesktop ? _$$i : null, "styleClass" in e.action ? e.action.styleClass : null, HM),
    htmlAttributes: {
      "data-test-id": "dataTestId" in e.action ? e.action.dataTestId : void 0,
      "data-onboarding-key": "data-onboarding-key" in e.action ? e.action["data-onboarding-key"] : void 0,
      "data-tooltip": "data-tooltip" in e.action ? e.action["data-tooltip"] : void 0,
      "data-tooltip-type": "data-tooltip-type" in e.action ? e.action["data-tooltip-type"] : void 0
    },
    innerText: "displayText" in e.action ? e.action.displayText : void 0,
    onClick: "onClick" in e.action ? e.action.onClick : void 0,
    "aria-label": "ariaLabel" in e.action ? e.action.ariaLabel : void 0,
    children: t ? jsx("span", {
      className: _$$s.px4.$,
      children: jsx(k, {})
    }) : jsx(h, {
      action: e.action
    })
  }, e.action.key);
  return e.action.editorThemeMode ? jsx(J, {
    brand: e.action.editorThemeMode,
    children: r
  }) : r;
}
export const A = $$_0;
export const K = $$m1;