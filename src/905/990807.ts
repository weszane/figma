import { jsx } from "react/jsx-runtime";
import { xk } from "@stylexjs/stylex";
import { AutoLayout } from "../905/470281";
import { AvatarSize, UserAvatar } from "../905/590952";
import { getVisibleTheme } from "../905/640017";
import { FProductAccessType } from "../figma_app/191312";
let d = {
  avatar: {
    boxSizing: "x9f619",
    position: "x1n2onr6",
    borderRadius: "x16rqkct",
    $$css: !0
  },
  avatarZIndex: e => [{
    zIndex: "xbgtp72",
    $$css: !0
  }, {
    "--zIndex": 900 - e
  }],
  marginRight: {
    marginRight: "x1db2dqx",
    marginInlineStart: null,
    marginInlineEnd: null,
    $$css: !0
  }
};
let c = {
  design: e => [{
    border: "xoyue30",
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
  }, {
    "--border": (e => "number" == typeof e ? e + "px" : null != e ? e : void 0)("dark" === e ? "2px solid var(--ramp-pale-blue-900)" : "2px solid var(--ramp-pale-blue-100)")
  }],
  whiteboard: e => [{
    border: "xoyue30",
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
  }, {
    "--border": (e => "number" == typeof e ? e + "px" : null != e ? e : void 0)("dark" === e ? "2px solid var(--ramp-pale-purple-900)" : "2px solid var(--ramp-pale-purple-100)")
  }],
  slides: e => [{
    border: "xoyue30",
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
  }, {
    "--border": (e => "number" == typeof e ? e + "px" : null != e ? e : void 0)("dark" === e ? "2px solid var(--ramp-pale-persimmon-900)" : "2px solid var(--ramp-pale-persimmon-100)")
  }],
  sites: e => [{
    border: "xoyue30",
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
  }, {
    "--border": (e => "number" == typeof e ? e + "px" : null != e ? e : void 0)("dark" === e ? "2px solid var(--ramp-pale-violet-900)" : "2px solid var(--ramp-pale-violet-100)")
  }],
  dev_mode: e => [{
    border: "xoyue30",
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
  }, {
    "--border": (e => "number" == typeof e ? e + "px" : null != e ? e : void 0)("dark" === e ? "2px solid var(--ramp-green-800)" : "2px solid var(--ramp-pale-green-100)")
  }],
  figmake: e => [{
    border: "xoyue30",
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
  }, {
    "--border": (e => "number" == typeof e ? e + "px" : null != e ? e : void 0)("dark" === e ? "2px solid var(--ramp-pale-violet-900)" : "2px solid var(--ramp-pale-violet-100)")
  }],
  cooper: e => [{
    border: "xoyue30",
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
  }, {
    "--border": (e => "number" == typeof e ? e + "px" : null != e ? e : void 0)("dark" === e ? "2px solid var(--ramp-pale-pink-900)" : "2px solid var(--ramp-pale-pink-100)")
  }]
};
export function $$u0({
  users: e,
  licenseType: t,
  isInFullScreen: i,
  size: u = AvatarSize.MEDIUM,
  maxShow: p = 3,
  isTooltip: m = !1
}) {
  let h = getVisibleTheme();
  let g = e.slice(0, p);
  return jsx(AutoLayout, {
    verticalAlignItems: "center",
    spacing: "-12px",
    horizontalAlignItems: "start",
    width: "hug-contents",
    children: g.map((e, a) => jsx("div", {
      ...xk(d.avatarZIndex(m ? -a : a), !m && a === g.length - 1 && d.marginRight),
      children: jsx("div", {
        ...xk(d.avatar, c[t](h), t === FProductAccessType.WHITEBOARD && i && c.whiteboard("light")),
        children: jsx(UserAvatar, {
          user: {
            id: e.id,
            name: e.name,
            img_url: e.img_url ?? void 0
          },
          size: u
        })
      })
    }, `${e.id}${a}`))
  });
}
export const Y = $$u0;