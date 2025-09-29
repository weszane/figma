import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, Fragment, Children, isValidElement, cloneElement } from "react";
import { U1 } from "../figma_app/343967";
import { ButtonPrimitive } from "../905/632989";
import { m as _$$m } from "../905/270214";
import { stylex } from "@stylexjs/stylex";
import { M } from "../figma_app/749682";
import { useIsProgressBarHiddenOrLocked } from "../figma_app/722362";
import { KindEnum } from "../905/129884";
import { Oh } from "../figma_app/144692";
import { xG } from "../figma_app/121043";
import { _ } from "../figma_app/658134";
export function $$h0({
  children: e,
  loadingShimmerCounts: t = [5],
  hasNoopFigmaMenu: n = !1
}) {
  let a = useIsProgressBarHiddenOrLocked();
  let s = U1();
  if (useEffect(() => {
    let e = document.documentElement.style;
    e.setProperty("--left-rail-width", `${_}px`);
    return () => {
      e.removeProperty("--left-rail-width");
    };
  }, []), a) return jsx("div", {
    ...stylex.props(g.sideRail, g.sideRailWidth(_), g.animateLeft),
    ref: s,
    children: jsxs("div", {
      className: "x78zum5 xdt5ytf x6s0dn4 xh8yej3",
      children: [jsx("div", {
        className: "xsdox4t x78zum5 xl56j7k x6s0dn4 xh8yej3 x2lah0s",
        children: jsx(Oh, {})
      }), t.map((e, t) => {
        let n = Array.from({
          length: e
        }, (e, n) => jsx(Oh, {}, t + "-" + n));
        return jsxs(Fragment, {
          children: [jsx($$h0.Divider, {}), jsx($$h0.Section, {
            children: n
          })]
        }, t);
      })]
    })
  });
  let c = [];
  let f = [];
  Children.forEach(e, e => {
    isValidElement(e) && (e.type === $$h0.Footer ? c.push(e) : f.push(e));
  });
  return jsxs("div", {
    ...stylex.props(g.sideRail, g.sideRailWidth(_)),
    ref: s,
    "data-testid": "left-rail-container",
    children: [jsxs("div", {
      className: "x78zum5 xdt5ytf x6s0dn4 xh8yej3",
      children: [jsx("div", {
        className: "xsdox4t x78zum5 xl56j7k x6s0dn4 xh8yej3 x2lah0s",
        children: n ? jsx(_$$m, {}) : jsx(xG, {
          hideChevron: !0
        })
      }), f]
    }), c]
  });
}
$$h0.Footer = function ({
  children: e
}) {
  return jsx("div", {
    className: "x78zum5 xdt5ytf x6s0dn4 xwib8y2 xc9opll x1hfjgiu",
    children: e
  });
};
$$h0.Divider = function () {
  return jsx("div", {
    className: "x1kky2od x1n5zjp5"
  });
};
$$h0.Section = function ({
  children: e
}) {
  let t = Children.toArray(e).filter(isValidElement);
  return jsx("div", {
    className: "x78zum5 xdt5ytf x6s0dn4 xh8yej3 xc9opll x1hfjgiu",
    children: t.map((e, n) => cloneElement(e, {
      firstItem: 0 === n,
      lastItem: n === t.length - 1
    }))
  });
};
$$h0.IconButton = function ({
  active: e,
  label: t,
  icon: n,
  onClick: i,
  disabled: r,
  badge: l,
  shortcut: u,
  recordingKey: m,
  firstItem: x,
  lastItem: p,
  dataOnboardingKey: h,
  dataTestId: f,
  customTooltip: b
}) {
  let [v, y] = M();
  return jsx(ButtonPrimitive, {
    className: "xh8yej3 x78zum5 xl56j7k x9dqhi0",
    "aria-label": t,
    "aria-pressed": e,
    disabled: r,
    htmlAttributes: {
      "data-show-tooltip": !0,
      "data-tooltip": t,
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip-show-right": !0,
      "data-tooltip-shortcut-key": u,
      "data-tooltip-offset-y": x ? 4 : p ? -4 : 0,
      ...b,
      "data-onboarding-key": h,
      "data-testid": f
    },
    onClick: i,
    recordingKey: m,
    ref: v,
    children: jsx("div", {
      ...stylex.props(g.iconButton, r && g.disabledIcon, !r && g.enabledIcon, !r && y && g.hoveredIcon, e && g.activeIcon, x && g.firstSectionItem, p && g.lastSectionItem),
      children: l ? jsxs("div", {
        className: "x78zum5 x1n2onr6",
        children: [n, jsx("div", {
          className: "x10l6tqk x13vifvy x3m8u43 x1wc42o8 xegnrdp x16rqkct x1mnc5ec x78zum5 xl56j7k x6s0dn4 xb3r6kr",
          children: jsx("div", {
            className: "x1ftt334 x1ycjhwn xmo782v x16rqkct"
          })
        })]
      }) : n
    })
  });
};
$$h0.SegmentedIconButtonGroup = function ({
  children: e
}) {
  return jsx("div", {
    className: "x78zum5 xdt5ytf xamitd3 x19y5rnk x1v8gsql xxhr3t x54yuno x18u3cr5 x1jkc10p xmauxvm x1o7ms22 x1swbamy x611mgq",
    children: e
  });
};
let g = {
  firstSectionItem: {
    marginTop: "x14vqqas",
    $$css: !0
  },
  lastSectionItem: {
    marginBottom: "xod5an3",
    $$css: !0
  },
  iconButton: {
    margin: "x1xaecxz",
    marginInline: null,
    marginInlineStart: null,
    marginLeft: null,
    marginInlineEnd: null,
    marginRight: null,
    marginBlock: null,
    marginTop: null,
    marginBottom: null,
    padding: "x9dr4nv",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    position: "x1n2onr6",
    borderRadius: "x19y5rnk",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    $$css: !0
  },
  activeIcon: {
    outline: "x3wdcuw",
    outlineColor: null,
    outlineStyle: null,
    outlineWidth: null,
    outlineOffset: "x1g40iwv",
    backgroundColor: "x16dhb8d",
    "--color-icon": "xang4nc",
    "--xnzwwm8": "x6kiqxt",
    $$css: !0
  },
  disabledIcon: {
    "--color-icon": "xz8z4lq",
    $$css: !0
  },
  enabledIcon: {
    backgroundColor: "xjbqb8w",
    "--xvmlmsc": "x1gmbimj",
    "--xnzwwm8": "x1npb8cn",
    $$css: !0
  },
  hoveredIcon: {
    backgroundColor: "x30nh5c",
    "--xnzwwm8": "x18qiuqh",
    $$css: !0
  },
  sideRailWidth: e => [{
    width: "x1bl4301",
    $$css: !0
  }, {
    "--width": (e => "number" == typeof e ? e + "px" : null != e ? e : void 0)(`${e}px`)
  }],
  sideRail: {
    top: "x167uce1",
    position: "x1n2onr6",
    height: "xqmztoh",
    display: "x78zum5",
    flexDirection: "xdt5ytf",
    alignItems: "x6s0dn4",
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
    justifyContent: "x1qughib",
    backgroundColor: "x1yjdb4r",
    zIndex: "x16tb26j",
    $$css: !0
  },
  animateLeft: {
    animationName: "xpkg1mr",
    animationDuration: "x7t6ubo",
    animateFillMode: "xx6zgt6",
    $$css: !0
  }
};
export const A = $$h0;
