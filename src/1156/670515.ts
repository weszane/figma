import { jsx } from "react/jsx-runtime";
import { E } from "../905/632989";
import { g } from "../905/687265";
import { Ay } from "@stylexjs/stylex";
let l = {
  suggestion: {
    ...g.textBodyMedium,
    padding: "xdqdrvq",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    borderRadius: "x9h44rk",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    border: "x1bamp8i",
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
    color: "x1n0bwc9",
    cursor: "x1ypdohk",
    transition: "xuk1p4z",
    transitionBehavior: null,
    transitionDelay: null,
    transitionDuration: null,
    transitionProperty: null,
    transitionTimingFunction: null,
    $$css: !0
  },
  disabled: {
    color: "xge78cn",
    cursor: "x1h6gzvc",
    $$css: !0
  },
  enabled: {
    ":hover_transform": "xp695gr",
    ":hover_backgroundColor": "xv2f06h",
    $$css: !0
  }
};
export function $$o0({
  label: e,
  onClick: t,
  disabled: n
}) {
  return jsx(E, {
    ...Ay.props(l.suggestion, n ? l.disabled : l.enabled),
    onClick: t,
    disabled: n,
    children: e
  });
}
export const t = $$o0;