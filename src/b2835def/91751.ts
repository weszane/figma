import { jsx, jsxs } from "react/jsx-runtime";
import { g as _$$g } from "../1250/701065";
import { s as _$$s } from "../9314/287043";
import { h as _$$h } from "../905/994594";
import { t as _$$t } from "../5132/435788";
import { useSetAtom } from "../figma_app/27355";
import { useEffect } from "react";
import { N } from "../905/57692";
import { IconButton } from "../905/443068";
import { DialogTriggerButton } from "../905/976845";
import { stylex } from "@stylexjs/stylex";
import { noop } from 'lodash-es';
import { _ as _$$_ } from "../figma_app/658134";
import { A } from "../9314/687951";
import { useLabConfiguration, labConfigurations } from "../905/226610";
import { Ye } from "../figma_app/32128";
import { xG } from "../figma_app/121043";
import { G, N as _$$N } from "../b2835def/560769";
var r;
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
  return jsx(N, {
    "aria-label": "Navigation Bar",
    orientation: "vertical",
    ...stylex.props(v.base, v.baseWidth(t)),
    children: e
  });
}
function m({
  menuButton: e,
  children: t,
  width: i
}) {
  return jsxs(g, {
    width: i,
    children: [e, jsx(x, {}), t]
  });
}
function _({
  active: e,
  disabled: t,
  icon: i,
  label: r,
  onClick: s,
  type: l
}) {
  switch (l) {
    case "icon":
      return jsx(IconButton, {
        "aria-label": r,
        "aria-expanded": e,
        disabled: t,
        onClick: s,
        children: i
      });
    case "dialog":
      return jsx(DialogTriggerButton, {
        "aria-label": r,
        "aria-expanded": e,
        disabled: t,
        onClick: s,
        children: i
      });
  }
}
function x() {
  return jsx("div", {
    className: "x1n5zjp5 x6drftx x1swbamy x1q9dqyq",
    role: "separator"
  });
}
!function (e) {
  e.ICON = "icon";
  e.DIALOG = "dialog";
}(r || (r = {}));
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
export function $$C0() {
  let e = useSetAtom(G);
  let t = [{
    id: "file",
    label: "File",
    icon: jsx(_$$g, {}),
    onClick: () => {
      e(_$$N.FILE);
    },
    type: r.ICON
  }, {
    id: "insert",
    label: "Insert",
    icon: jsx(_$$s, {}),
    onClick: noop,
    type: r.ICON
  }, {
    id: "find",
    label: "Find",
    icon: jsx(_$$h, {}),
    onClick: noop,
    type: r.ICON
  }, {
    id: "make",
    label: "Make",
    icon: jsx(_$$t, {}),
    onClick: () => {
      e(_$$N.MAKE);
    },
    type: r.ICON
  }];
  return useLabConfiguration(labConfigurations.designNavBar) ? jsx(m, {
    menuButton: jsx(xG, {
      hideChevron: !0
    }),
    width: _$$_,
    children: t.map(({
      id: e,
      ...t
    }) => jsx(_, {
      active: !1,
      disabled: !1,
      ...t
    }, e))
  }) : jsxs(A, {
    loadingShimmerCounts: [t.length],
    hasNoopFigmaMenu: !0,
    children: [jsx(A.Divider, {}), jsx(A.Section, {
      children: t.map(({
        id: e,
        ...t
      }) => jsx(A.IconButton, {
        ...t
      }, e))
    })]
  });
}
export function $$A1() {
  let e = useLabConfiguration(labConfigurations.designLeftRailPrototype);
  let t = Ye();
  let i = e && !t;
  let r = {
    leftOffset: i ? _$$_ + 1 : void 0
  };
  return [i, r];
}
export const W = $$C0;
export const b = $$A1;