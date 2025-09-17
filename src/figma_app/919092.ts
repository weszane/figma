import { jsx, jsxs } from "react/jsx-runtime";
import { MenuItemComp } from "../figma_app/860955";
import { useTheme } from "../905/289770";
import { setupThemeContext } from "../905/614223";
import { xk } from "@stylexjs/stylex";
import { getI18nString } from "../905/303541";
import { Badge, BadgeColor } from "../figma_app/919079";
function c({
  text: e,
  disabled: t
}) {
  return jsx(Badge, {
    color: t ? BadgeColor.DISABLED : BadgeColor.DEFAULT_TRANSLUCENT,
    text: e
  });
}
export var $$u0 = (e => (e.REQUEST_UPGRADE = "REQUEST_UPGRADE", e.REQUEST_SENT = "REQUEST_SENT", e.ALPHA = "ALPHA", e.BETA = "BETA", e))($$u0 || {});
export function $$p1(e) {
  let t = useTheme();
  let r = e.isDisabled || e.isLoading;
  return jsx(setupThemeContext, {
    brand: e.brand,
    children: jsx(MenuItemComp, {
      ...xk(h.item, "dark" === t.color && h.itemDark, !!e.brand && h.itemBrand),
      onClick: e.onClick,
      "data-testid": e.isLoading ? void 0 : e.dataTestId,
      disabled: r,
      "data-onboarding-key": e.dataOnboardingKey,
      children: jsxs("div", {
        className: "x78zum5 x6s0dn4 xh8yej3",
        children: [jsxs("div", {
          className: "x78zum5 x167g77z x6s0dn4 x1iyjqo2",
          children: [jsx("div", {
            ...xk(!!e.brand && h.iconBrand, !!e.isDisabled && h.iconDisabled),
            children: e.icon
          }), jsx("span", {
            ...xk(h.text, !!e.isDisabled && h.textDisabled),
            children: e.title
          })]
        }), e.badges ? jsx("div", {
          className: "x78zum5 x1c4vz4f x6s0dn4",
          children: e.badges.map(e => jsx(c, {
            text: $$_(e),
            disabled: r
          }, e))
        }) : null]
      })
    })
  });
}
let $$_ = e => {
  switch (e) {
    case "REQUEST_UPGRADE":
      return getI18nString("upgrades.request");
    case "REQUEST_SENT":
      return getI18nString("upgrades.request_sent");
    case "ALPHA":
      return getI18nString("file_browser.creation_buttons.alpha");
    case "BETA":
      return getI18nString("file_browser.creation_buttons.beta");
  }
};
let h = {
  item: {
    borderRadius: "x19y5rnk",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    overflow: "xb3r6kr",
    overflowX: null,
    overflowY: null,
    paddingTop: "x1iorvi4",
    paddingBottom: "xjkvuk6",
    marginLeft: "xet2fuk",
    marginRight: "x1db2dqx",
    marginInlineStart: null,
    marginInlineEnd: null,
    minWidth: "x12ro6kh",
    backgroundColor: "x1pcmjzl",
    $$css: !0
  },
  itemDark: {
    backgroundColor: "xc4ye4f",
    $$css: !0
  },
  itemBrand: {
    backgroundColor: "x1fukjz5",
    $$css: !0
  },
  text: {
    fontSize: "x17akokd",
    fontWeight: "x1qxcl5b",
    fontFamily: "xclx6tv",
    color: "x1akne3o",
    $$css: !0
  },
  textDisabled: {
    color: "x3vvef7",
    $$css: !0
  },
  iconBrand: {
    "--color-icon": "x1aue78i",
    $$css: !0
  },
  iconDisabled: {
    "--color-icon": "xe5c7bq",
    $$css: !0
  }
};
export const _ = $$u0;
export const e = $$p1;