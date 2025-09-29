import { jsxs, jsx } from "react/jsx-runtime";
import { textDisplayConfig } from "../905/687265";
import { props } from "@stylexjs/stylex";
import { TextWithTruncation } from "../905/984674";
export function $$o0({
  thumbnail: e,
  title: t,
  subtitle: i,
  bottomLeftIcon: r,
  topLeftContent: o,
  topRightContent: d,
  bottomRightContent: c,
  isHovered: u,
  onFocus: p,
  onBlur: m
}) {
  return jsxs("div", {
    className: "x78zum5 xdt5ytf",
    onFocus: p,
    onBlur: m,
    children: [jsxs("div", {
      className: "x1n2onr6",
      children: [e, jsxs("div", {
        className: "x78zum5 x1q0g3np x1cy8zhl xou54vl x1qughib x10l6tqk xu96u03 x13vifvy x3m8u43 x1tamke2 xb3r6kr xeuugli x98rzlu x9f619",
        children: [o ? jsx("div", {
          className: "xs83m0k xb3r6kr xeuugli",
          children: o
        }) : null, d ? jsx("div", {
          className: "xs83m0k x13qp9f6",
          children: d
        }) : null]
      })]
    }), jsxs("div", {
      ...props(l.bottomContainer, u && l.bottomContainerHover),
      children: [r, jsxs("div", {
        className: "x1iyjqo2 x1r8uery x78zum5 xdt5ytf x195vfkc xb3r6kr",
        children: [jsx(TextWithTruncation, {
          truncate: !0,
          color: "default",
          children: jsx("span", {
            ...props(l.title),
            children: t
          })
        }), jsx(TextWithTruncation, {
          truncate: !0,
          color: "secondary",
          children: jsx("span", {
            ...props(l.subtitle),
            children: i
          })
        })]
      }), c]
    })]
  });
}
let l = {
  bottomContainer: {
    display: "x78zum5",
    flexDirection: "x1q0g3np",
    alignItems: "x6s0dn4",
    paddingLeft: "xnm25rq",
    paddingRight: "xyfqnmn",
    paddingInlineStart: null,
    paddingInlineEnd: null,
    paddingTop: "xz9dl7a",
    paddingBottom: "xsag5q8",
    gap: "x1v2ro7d",
    rowGap: null,
    columnGap: null,
    backgroundColor: "x1yjdb4r",
    borderStyle: "x1y0btm7",
    borderInlineStyle: null,
    borderInlineStartStyle: null,
    borderLeftStyle: null,
    borderInlineEndStyle: null,
    borderRightStyle: null,
    borderBlockStyle: null,
    borderTopStyle: null,
    borderBottomStyle: null,
    borderTopWidth: "x178xt8z",
    borderColor: "x7z60cl",
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
  bottomContainerHover: {
    backgroundColor: "x30nh5c",
    $$css: !0
  },
  title: {
    ...textDisplayConfig.textBodyMediumStrong,
    $$css: !0
  },
  subtitle: {
    ...textDisplayConfig.textBodyMedium,
    $$css: !0
  }
};
export const i = $$o0;
