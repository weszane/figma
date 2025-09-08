import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { E } from "../905/172252";
import { Label } from "../905/270045";
import { g } from "../905/687265";
import { xk } from "@stylexjs/stylex";
import { getI18nString } from "../905/303541";
let $$d0 = function (e) {
  let {
    children,
    labelHtmlFor,
    subLabel,
    subLabelId,
    afterLabelContent,
    required,
    error,
    errorId,
    afterErrorContent,
    disabled = !1
  } = e;
  let _ = required ? jsxs(Fragment, {
    children: [jsx("span", {
      "aria-hidden": !0,
      children: e.label
    }), jsx("span", {
      className: "x1swdo50 x172n1ly",
      "aria-hidden": !0,
      children: "*"
    }), jsx(E, {
      children: getI18nString("community.publishing.required_label", {
        labelText: "textLabel" in e ? e.textLabel : e.label
      })
    })]
  }) : "textLabel" in e ? jsxs(Fragment, {
    children: [jsx("span", {
      "aria-hidden": !0,
      children: e.label
    }), jsx(E, {
      children: e.textLabel
    })]
  }) : e.label;
  return jsxs("div", {
    className: "x1p5oq8j",
    children: [jsxs("div", {
      className: "x1j6dyjg x78zum5 x1q0g3np x1s688f x1qughib",
      children: [jsxs("div", {
        className: "x78zum5 xdt5ytf x1jnr06f xwib8y2",
        children: [jsx(Label, {
          htmlFor: labelHtmlFor,
          ...xk(c.label, disabled && c.disabled),
          children: _
        }), subLabel && jsx("span", {
          id: subLabelId,
          ...xk(c.subLabel),
          children: subLabel
        })]
      }), afterLabelContent]
    }), jsxs("div", {
      className: "x78zum5 xdt5ytf x167g77z",
      children: [children, jsx("div", {
        id: errorId,
        ...xk(c.errorContainer, !error && c.empty),
        "aria-hidden": !error,
        children: error
      }), afterErrorContent]
    })]
  });
};
let c = {
  label: {
    ...g.textBodyMediumStrong,
    display: "x78zum5",
    flexDirection: "x1q0g3np",
    $$css: !0
  },
  disabled: {
    color: "xge78cn",
    $$css: !0
  },
  subLabel: {
    color: "x1n0bwc9",
    ...g.textBodyMedium,
    $$css: !0
  },
  errorContainer: {
    marginTop: "xr9ek0c",
    color: "x172n1ly",
    transition: "xiyiv13",
    transitionBehavior: null,
    transitionDelay: null,
    transitionDuration: null,
    transitionProperty: null,
    transitionTimingFunction: null,
    height: "xlup9mm",
    $$css: !0
  },
  empty: {
    height: "xqtp20y",
    marginTop: "x9otpla",
    $$css: !0
  }
};
export const A = $$d0;