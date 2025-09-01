import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect, useRef, useCallback, Fragment as _$$Fragment } from "react";
import { bL, l9, mc, c$, wv } from "../905/493196";
import { h as _$$h } from "../905/270045";
import { r as _$$r } from "../905/571562";
import { g as _$$g } from "../905/687265";
import { xk } from "@stylexjs/stylex";
import c from "classnames";
import { parsePxInt } from "../figma_app/783094";
import { wv as _$$wv, rr, gw } from "../figma_app/236327";
import { YQ } from "../905/502364";
import { t as _$$t } from "../905/303541";
import { Y } from "../905/830372";
import { E as _$$E } from "../905/984674";
import { oB, j7 } from "../905/929976";
import { jm, j6 } from "../figma_app/831799";
import { Cu } from "../figma_app/314264";
import { g1 } from "../905/504727";
import { km, LF, hX } from "../905/701417";
import { p3 } from "../905/759151";
import { N1, Lt, rp, Ck, Lo, W8 } from "../905/372455";
var u = c;
let A = parsePxInt(p3);
let x = parsePxInt(km);
let N = parsePxInt(LF);
let C = parsePxInt(hX);
let w = A - x / 2;
export function $$O1({
  dispatch: e,
  dropdownClassName: t,
  dropdownShown: r,
  options: a,
  value: s,
  onChange: o,
  trackingProperties: l = {}
}) {
  let [d, c] = useState(0);
  let [p, h] = useState(window.innerWidth);
  let m = () => {
    h(window.innerWidth);
  };
  useEffect(() => (window.addEventListener("resize", m), () => window.removeEventListener("resize", m)), []);
  let y = useRef(null);
  let b = useRef(null);
  useEffect(() => {
    if (y.current && b.current) {
      let e = y.current.getBoundingClientRect();
      let t = y.current.offsetParent?.getBoundingClientRect();
      !e || !t || e.top >= t.top && e.bottom <= t.bottom || (y.current.scrollIntoView(!1), b.current.scrollBy(8));
      c(e.width);
    }
  }, []);
  let I = {
    ...(r?.data?.position || {
      top: 0,
      left: 0
    })
  };
  let S = 0;
  let O = 0;
  let R = !1;
  let L = -1;
  let P = a.map((t, r) => {
    if ("separator" === t.type) {
      R || (S += C);
      O += C;
      return jsx(_$$wv, {
        dataTestId: `dropdown-separator-${r}`
      }, t.key ? String(t.key) : r);
    }
    let i = t.key === s;
    i && (L = r);
    R = R || i;
    let d = t.subtext ? N : x;
    R || (S += d);
    O += d;
    let c = {};
    t.subtext && a[r + 1]?.type !== "separator" && (c.paddingBottom = 8, O += 8);
    return jsx("div", {
      ref: i ? y : null,
      style: c,
      "data-testid": `dropdown-option-${r}`,
      "data-onboarding-key": `dropdown-option-${String(t.key)}`,
      children: jsx(rr, {
        checked: i,
        onClick: (r) => {
          r.stopPropagation();
          i || o(t.key);
          e(oB());
        },
        trackingProperties: {
          ...l,
          key: String(t.key)
        },
        disabled: t.disabled,
        "data-testid": `dropdown-option-checkable-${r}`,
        children: jsxs("div", {
          style: {
            display: "flex",
            alignItems: "center"
          },
          children: [!!t.icon && jsx(Fragment, {
            children: t.icon
          }), jsxs(Y, {
            direction: "vertical",
            spacing: 4,
            height: d,
            verticalAlignItems: "center",
            children: [jsx(_$$E, {
              fontSize: 12,
              children: t.text
            }), t.subtext && jsx(_$$E, {
              fontSize: 11,
              color: "menu-disabled",
              children: t.subtext
            })]
          })]
        })
      })
    }, String(t.key));
  });
  d + I.left + 4 > p && (I.left = "auto", I.right = 4);
  let D = 16;
  L === a.length - 1 && (D = 8);
  "auto" !== I.top && void 0 !== I.top && (I.top -= Math.min(S, w - D), I.top = Math.max(16, I.top));
  let k = jsx(g1, {
    maxDropdownHeight: (e) => "auto" === I.top || void 0 === I.top ? A : Math.min(A, Math.round(e - I.top - 8 - 16)),
    dropdownChildrenHeight: O,
    ref: b,
    children: P
  });
  return jsx(gw, {
    stopScrollPropagation: !0,
    dispatch: e,
    className: u()(N1, t),
    style: I,
    children: k
  });
}
export function $$R0({
  dispatch: e,
  dropdownShown: t,
  value: r,
  options: a,
  onChange: s,
  id: l,
  placeholder: d,
  disabled: c = !1,
  dropdownData: p = {},
  isOpen: _,
  trackingProperties: m = {},
  onOpenRcsEvent: g,
  ui3Icon: f
}) {
  let b = useRef(null);
  let T = a.findIndex((e) => "option" === e.type && e.key === r);
  let I = a[T];
  let S = I?.type === "option" ? I.selectedLabel || I.text : d;
  let A = I?.type === "option" && I.selectedLabelClass || "";
  _ = _ ?? t?.type === l;
  return jsxs("div", {
    ref: b,
    children: [jsxs(jm, {
      trackingProperties: m,
      className: u()({
        [Lt]: !c,
        [rp]: f
      }),
      onClick: c ? void 0 : (r) => {
        r.stopPropagation();
        r.preventDefault();
        t && t.type === l ? e(oB()) : a.length && !c && (e(j7({
          type: l,
          data: {
            ...p,
            ...function (e) {
              let t = e.current?.getBoundingClientRect();
              return t ? {
                position: {
                  top: t.top,
                  bottom: "auto",
                  left: t.left,
                  right: "auto"
                }
              } : {};
            }(b)
          }
        })), g && YQ({
          id: g
        }));
      },
      "data-testid": "permission-selector",
      children: [f, jsx("div", {
        className: `${Ck} ${A}`,
        "data-testid": "dropdown-label",
        children: S
      }), !c && jsx("div", {
        className: Lo,
        children: jsx(_$$r, {})
      })]
    }), _ && jsx($$O1, {
      dispatch: e,
      dropdownShown: t,
      dropdownClassName: W8,
      value: r,
      options: a,
      onChange: s,
      trackingProperties: m
    })]
  });
}
export function $$L2({
  value: e,
  options: t,
  onChange: r,
  getPermissionName: o,
  getPermissionDescription: l,
  showSeparators: c,
  label: u
}) {
  let p = useCallback((e) => l ? jsxs(Fragment, {
    children: [jsx("div", {
      ...xk(P.selectPrimaryText),
      children: o(e)
    }), jsx("div", {
      ...xk(P.selectSecondaryText),
      children: l(e)
    })]
  }) : o(e), [o, l]);
  let _ = j6();
  let h = (e) => e.toString();
  let g = useCallback((e) => {
    let t = parseInt(e);
    r(isNaN(t) ? e : t);
    _ && Cu({
      ..._.properties,
      trackingContext: _.name,
      newValue: e
    });
  }, [r, _]);
  return jsxs(bL, {
    value: h(e),
    onChange: g,
    children: [jsx(l9, {
      label: jsx(_$$h, {
        children: u || _$$t("folder_permissions_modal.email_invite_level")
      }),
      children: o(e)
    }), jsx(mc, {
      children: t.map((e, r) => jsxs(_$$Fragment, {
        children: [jsx(c$, {
          value: h(e),
          children: p(e)
        }), c && r < t.length - 1 && jsx(wv, {})]
      }, h(e)))
    })]
  });
}
let P = {
  selectPrimaryText: {
    ..._$$g.textBodyMediumStrong,
    $$css: !0
  },
  selectSecondaryText: {
    ..._$$g.textBodyMedium,
    color: "xoq6bns",
    maxWidth: "x256u9z",
    textWrap: "xk4td0m",
    $$css: !0
  }
};
export const HU = $$R0;
export const V3 = $$O1;
export const b8 = $$L2;