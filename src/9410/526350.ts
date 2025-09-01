import { jsx, jsxs } from "react/jsx-runtime";
import { g } from "../905/687265";
import { xk } from "@stylexjs/stylex";
import { fu } from "../figma_app/831799";
import { Cu } from "../figma_app/314264";
export function $$l0({
  buttons: e,
  editorType: t,
  wrapperStyle: i
}) {
  let n = 2 === e.length ? c.twoColumnGrid : c.threeColumnGrid;
  return jsx("div", {
    ...xk(c.startFromRowWrapper, n, i),
    children: e.map(e => jsx(fu, {
      name: `${t}_template_start_from_button.${e.id}`,
      children: jsx(d, {
        onClick: e.onClick,
        title: e.title,
        subtitle: e.subtitle,
        icon: e.icon,
        buttonStyle: e.buttonStyle,
        iconStyle: e.iconStyle,
        dataTestId: e.dataTestId,
        editorType: t,
        id: e.id
      })
    }, e.id))
  });
}
function d({
  onClick: e,
  title: t,
  subtitle: i,
  icon: n,
  buttonStyle: s,
  iconStyle: l,
  dataTestId: d,
  editorType: u,
  id: p
}) {
  let h = (e => {
    if ("dashedBorder" === e) return c.dashedBorder;
  })(s);
  let m = (e => {
    switch (e) {
      case "startFromOutlineIcon":
        return c.startFromOutlineIcon;
      case "startFromScratchIcon":
        return c.startFromScratchIcon;
      case "makeATemplate":
        return c.makeATemplate;
      default:
        return;
    }
  })(l);
  return jsxs("button", {
    ...xk(c.startFromRowButton, h && h),
    onClick: () => {
      Cu({
        name: `${u}.templates.${p}`,
        triggeredFrom: `${u}_template_modal`
      });
      e();
    },
    "data-testid": d,
    children: [jsx("span", {
      ...xk(m && m),
      children: n
    }), jsxs("div", {
      className: "x78zum5 xdt5ytf x1cy8zhl",
      children: [jsx("p", {
        ...xk(c.titleText),
        children: t
      }), jsx("p", {
        ...xk(c.subtitleText),
        children: i
      })]
    })]
  });
}
let c = {
  startFromRowWrapper: {
    display: "xrvj5dj",
    gap: "x1i71x30",
    rowGap: null,
    columnGap: null,
    gridAutoFlow: "x1mt1orb",
    $$css: !0
  },
  threeColumnGrid: {
    gridTemplateColumns: "x1wlfl8j",
    $$css: !0
  },
  twoColumnGrid: {
    gridTemplateColumns: "x1p9eum2",
    $$css: !0
  },
  startFromRowButton: {
    display: "x78zum5",
    flexDirection: "x1q0g3np",
    alignItems: "x6s0dn4",
    borderRadius: "x19y5rnk",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    borderWidth: "xmkeg23",
    borderInlineWidth: null,
    borderInlineStartWidth: null,
    borderLeftWidth: null,
    borderInlineEndWidth: null,
    borderRightWidth: null,
    borderBlockWidth: null,
    borderTopWidth: null,
    borderBottomWidth: null,
    borderStyle: "x1y0btm7",
    borderInlineStyle: null,
    borderInlineStartStyle: null,
    borderLeftStyle: null,
    borderInlineEndStyle: null,
    borderRightStyle: null,
    borderBlockStyle: null,
    borderTopStyle: null,
    borderBottomStyle: null,
    boxSizing: "x9f619",
    padding: "x1hslx8c",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    gap: "x1pulhmw",
    rowGap: null,
    columnGap: null,
    minHeight: "xbktkl8",
    height: "xg7h5cd",
    backgroundColor: "xjbqb8w x14m9vh9",
    borderColor: "x7z60cl xmmimuq",
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    cursor: "x1ypdohk",
    "--outline-color": "x15hx6y6 xgmft2d",
    "--icon-bg-color": "x1rpdmm6 x18dr77",
    "--icon-color": "xmeeen6 x1wrqvno",
    $$css: !0
  },
  dashedBorder: {
    borderStyle: "xbsl7fq",
    borderInlineStyle: null,
    borderInlineStartStyle: null,
    borderLeftStyle: null,
    borderInlineEndStyle: null,
    borderRightStyle: null,
    borderBlockStyle: null,
    borderTopStyle: null,
    borderBottomStyle: null,
    $$css: !0
  },
  startFromOutlineIcon: {
    "--color-icon": "x199ijdt",
    $$css: !0
  },
  startFromScratchIcon: {
    borderRadius: "x1d36bvo",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    backgroundColor: "x1ma37q9",
    "--color-icon": "xq7bfzs",
    $$css: !0
  },
  makeATemplate: {
    "--color-icon": "x199ijdt",
    $$css: !0
  },
  titleText: {
    ...g.textBodyMediumStrong,
    color: "x1akne3o",
    margin: "x1ghz6dp",
    marginInline: null,
    marginInlineStart: null,
    marginLeft: null,
    marginInlineEnd: null,
    marginRight: null,
    marginBlock: null,
    marginTop: null,
    marginBottom: null,
    $$css: !0
  },
  subtitleText: {
    ...g.textBodyMedium,
    color: "x1n0bwc9",
    margin: "x1ghz6dp",
    marginInline: null,
    marginInlineStart: null,
    marginLeft: null,
    marginInlineEnd: null,
    marginRight: null,
    marginBlock: null,
    marginTop: null,
    marginBottom: null,
    $$css: !0
  }
};
export const V = $$l0;