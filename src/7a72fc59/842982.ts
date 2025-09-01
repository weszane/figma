import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { E } from "../905/632989";
import { O } from "../905/969533";
import { Ay } from "@stylexjs/stylex";
import s from "classnames";
var d = s;
let $$c2 = forwardRef(function ({
  children: e,
  showCaret: t,
  caretStyle: n = {},
  isActive: r,
  tooltip: a,
  tooltipType: s,
  tooltipShowAbove: c = !0,
  ...u
}, x) {
  return jsxs(E, {
    ref: x,
    ...u,
    className: d()("menu_button--iconButton--KPBE2 menu_button--baseIconButton--cJj85", "menu_button--ghost--PZTUp", {
      "menu_button--wrapCaret--Gm-cK": !!t,
      "menu_button--active--AekuE": r
    }),
    htmlAttributes: {
      "data-tooltip": u["aria-disabled"] || u.disabled ? void 0 : a,
      "data-tooltip-type": s,
      "data-tooltip-show-above": !!c || void 0,
      "data-tooltip-show-below": !c || void 0,
      "data-tooltip-offset-y": c ? -8 : 8
    },
    children: [jsx("span", {
      "aria-hidden": !0,
      className: "menu_button--icon--ZpZHz",
      children: e
    }), t && jsx(O, {
      style: n,
      className: "x11yfylt"
    })]
  });
});
let u = forwardRef(function ({
  children: e,
  iconPrefix: t,
  iconSuffix: n,
  styleXStyles: r,
  ...o
}, s) {
  let {
    noBorder,
    ...c
  } = o;
  return jsx(E, {
    ref: s,
    ...c,
    ...Ay.props(m.container, r, o["aria-expanded"] ? m.container_active : null, o.noBorder ? m.container_noBorder : null, t ? null : m.containerLeftPaddingWithoutIconPrefix, n ? null : m.containerRightPaddingWithoutIconSuffix),
    children: jsxs("div", {
      className: "xz16r55 x78zum5 x6s0dn4",
      children: [t, e, n]
    })
  });
});
let $$x1 = forwardRef(function (e, t) {
  return jsx(u, {
    ref: t,
    ...e,
    styleXStyles: h.dialogTriggerButton
  });
});
let $$p0 = forwardRef(function (e, t) {
  return jsx(u, {
    ref: t,
    ...e,
    styleXStyles: g.dialogTriggerButton
  });
});
let m = {
  container: {
    height: "xxk0z11",
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
    $$css: !0
  },
  container_noBorder: {
    border: "x1gs6z28",
    borderWidth: null,
    borderInlineWidth: null,
    borderInlineStartWidth: null,
    borderLeftWidth: null,
    borderInlineEndWidth: null,
    borderRightWidth: null,
    borderBlockWidth: null,
    borderTopWidth: null,
    borderBottomWidth: null,
    borderStyle: null,
    borderInlineStyle: null,
    borderInlineStartStyle: null,
    borderLeftStyle: null,
    borderInlineEndStyle: null,
    borderRightStyle: null,
    borderBlockStyle: null,
    borderTopStyle: null,
    borderBottomStyle: null,
    borderColor: null,
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    $$css: !0
  },
  container_active: {
    backgroundColor: "xu5wzci",
    borderColor: "x1fzvlhx",
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    $$css: !0
  },
  containerLeftPaddingWithoutIconPrefix: {
    paddingLeft: "x8rdmch",
    paddingInlineStart: null,
    paddingInlineEnd: null,
    $$css: !0
  },
  containerRightPaddingWithoutIconSuffix: {
    paddingRight: "xctkrei",
    paddingInlineStart: null,
    paddingInlineEnd: null,
    $$css: !0
  }
};
let h = {
  dialogTriggerButton: {
    borderColor: "x1co876m",
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    backgroundColor: "xon4yw5 xv2f06h x1m5i512",
    $$css: !0
  }
};
let g = {
  dialogTriggerButton: {
    borderColor: "x1fzvlhx",
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    backgroundColor: "xu5wzci xazsp2l x1kqa1b1",
    $$css: !0
  }
};
export const Em = $$p0;
export const JE = $$x1;
export const ar = $$c2;