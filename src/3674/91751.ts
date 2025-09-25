import { jsx, jsxs } from "react/jsx-runtime";
import { g as _$$g } from "../1250/701065";
import { s as _$$s } from "../9314/287043";
import { h as _$$h } from "../905/994594";
import { t as _$$t } from "../5132/435788";
import { Xr } from "../figma_app/27355";
import { useEffect } from "react";
import { N as _$$N } from "../905/57692";
import { IconButton } from "../905/443068";
import { d as _$$d } from "../905/976845";
import { Ay } from "@stylexjs/stylex";
import { noop } from 'lodash-es';
import { _ as _$$_ } from "../figma_app/658134";
import { A as _$$A } from "../9314/687951";
import { o3, nt } from "../905/226610";
import { Ye } from "../figma_app/32128";
import { xG } from "../figma_app/121043";
import { G, N as _$$N2 } from "../b2835def/560769";
var a;
function g({
  children: e,
  width: t
}) {
  useEffect(() => {
    let e = document.documentElement.style;
    e.setProperty("--left-rail-width", `${t}px`);
    return () => {
      e.removeProperty("--left-rail-width");
    };
  }, []);
  return jsx(_$$N, {
    "aria-label": "Navigation Bar",
    orientation: "vertical",
    ...Ay.props(v.base, v.baseWidth(t)),
    children: e
  });
}
function x({
  menuButton: e,
  children: t,
  width: n
}) {
  return jsxs(g, {
    width: n,
    children: [e, jsx(_, {}), t]
  });
}
function m({
  active: e,
  disabled: t,
  icon: n,
  label: a,
  onClick: o,
  type: l
}) {
  switch (l) {
    case "icon":
      return jsx(IconButton, {
        "aria-label": a,
        "aria-expanded": e,
        disabled: t,
        onClick: o,
        children: n
      });
    case "dialog":
      return jsx(_$$d, {
        "aria-label": a,
        "aria-expanded": e,
        disabled: t,
        onClick: o,
        children: n
      });
  }
}
function _() {
  return jsx("div", {
    className: "x1n5zjp5 x6drftx x1swbamy x1q9dqyq",
    role: "separator"
  });
}
!function (e) {
  e.ICON = "icon";
  e.DIALOG = "dialog";
}(a || (a = {}));
let v = {
  base: {
    alignItems: "x6s0dn4",
    backgroundColor: "x1yjdb4r",
    borderRight: "xspf3my",
    borderRightWidth: null,
    borderInlineStartWidth: null,
    borderInlineEndWidth: null,
    borderRightStyle: null,
    borderInlineStartStyle: null,
    borderInlineEndStyle: null,
    borderRightColor: null,
    borderInlineStartColor: null,
    borderInlineEndColor: null,
    display: "x78zum5",
    flexDirection: "xdt5ytf",
    height: "xqmztoh",
    paddingTop: "x61vf09",
    $$css: !0
  },
  baseWidth: e => [{
    width: "x1bl4301",
    $$css: !0
  }, {
    "--width": (e => "number" == typeof e ? e + "px" : null != e ? e : void 0)(`${e}px`)
  }]
};
export function $$I0() {
  let e = Xr(G);
  let t = [{
    id: "file",
    label: "File",
    icon: jsx(_$$g, {}),
    onClick: () => {
      e(_$$N2.FILE);
    },
    type: a.ICON
  }, {
    id: "insert",
    label: "Insert",
    icon: jsx(_$$s, {}),
    onClick: noop,
    type: a.ICON
  }, {
    id: "find",
    label: "Find",
    icon: jsx(_$$h, {}),
    onClick: noop,
    type: a.ICON
  }, {
    id: "make",
    label: "Make",
    icon: jsx(_$$t, {}),
    onClick: () => {
      e(_$$N2.MAKE);
    },
    type: a.ICON
  }];
  return o3(nt.designNavBar) ? jsx(x, {
    menuButton: jsx(xG, {
      hideChevron: !0
    }),
    width: _$$_,
    children: t.map(({
      id: e,
      ...t
    }) => jsx(m, {
      active: !1,
      disabled: !1,
      ...t
    }, e))
  }) : jsxs(_$$A, {
    loadingShimmerCounts: [t.length],
    hasNoopFigmaMenu: !0,
    children: [jsx(_$$A.Divider, {}), jsx(_$$A.Section, {
      children: t.map(({
        id: e,
        ...t
      }) => jsx(_$$A.IconButton, {
        ...t
      }, e))
    })]
  });
}
export function $$E1() {
  let e = o3(nt.designLeftRailPrototype);
  let t = Ye();
  let n = e && !t;
  let a = {
    leftOffset: n ? _$$_ + 1 : void 0
  };
  return [n, a];
}
export const W = $$I0;
export const b = $$E1;
