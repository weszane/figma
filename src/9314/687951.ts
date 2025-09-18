import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, Fragment, Children, isValidElement, cloneElement } from "react";
import { U1 } from "../figma_app/343967";
import { ButtonPrimitive } from "../905/632989";
import { m as _$$m } from "../905/270214";
import { Ay } from "@stylexjs/stylex";
import { M } from "../figma_app/749682";
import { useIsProgressBarHiddenOrLocked } from "../figma_app/722362";
import { KindEnum } from "../905/129884";
import { Oh } from "../figma_app/144692";
import { xG } from "../figma_app/121043";
import { _ } from "../figma_app/658134";
export function $$x0({
  children: e,
  loadingShimmerCounts: t = [5],
  hasNoopFigmaMenu: l = !1
}) {
  let r = useIsProgressBarHiddenOrLocked();
  let d = U1();
  if (useEffect(() => {
    let e = document.documentElement.style;
    e.setProperty("--left-rail-width", `${_}px`);
    return () => {
      e.removeProperty("--left-rail-width");
    };
  }, []), r) return jsx("div", {
    ...Ay.props(f.sideRail, f.sideRailWidth(_), f.animateLeft),
    ref: d,
    children: jsxs("div", {
      className: "x78zum5 xdt5ytf x6s0dn4 xh8yej3",
      children: [jsx("div", {
        className: "xsdox4t x78zum5 xl56j7k x6s0dn4 xh8yej3 x2lah0s",
        children: jsx(Oh, {})
      }), t.map((e, t) => {
        let l = Array.from({
          length: e
        }, (e, l) => jsx(Oh, {}, t + "-" + l));
        return jsxs(Fragment, {
          children: [jsx($$x0.Divider, {}), jsx($$x0.Section, {
            children: l
          })]
        }, t);
      })]
    })
  });
  let u = [];
  let g = [];
  Children.forEach(e, e => {
    isValidElement(e) && (e.type === $$x0.Footer ? u.push(e) : g.push(e));
  });
  return jsxs("div", {
    ...Ay.props(f.sideRail, f.sideRailWidth(_)),
    ref: d,
    "data-testid": "left-rail-container",
    children: [jsxs("div", {
      className: "x78zum5 xdt5ytf x6s0dn4 xh8yej3",
      children: [jsx("div", {
        className: "xsdox4t x78zum5 xl56j7k x6s0dn4 xh8yej3 x2lah0s",
        children: l ? jsx(_$$m, {}) : jsx(xG, {
          hideChevron: !0
        })
      }), g]
    }), u]
  });
}
$$x0.Footer = function ({
  children: e
}) {
  return jsx("div", {
    className: "x78zum5 xdt5ytf x6s0dn4 xwib8y2 xc9opll x1hfjgiu",
    children: e
  });
};
$$x0.Divider = function () {
  return jsx("div", {
    className: "x1kky2od x1n5zjp5"
  });
};
$$x0.Section = function ({
  children: e
}) {
  let t = Children.toArray(e).filter(isValidElement);
  return jsx("div", {
    className: "x78zum5 xdt5ytf x6s0dn4 xh8yej3 xc9opll x1hfjgiu",
    children: t.map((e, l) => cloneElement(e, {
      firstItem: 0 === l,
      lastItem: l === t.length - 1
    }))
  });
};
$$x0.IconButton = function ({
  active: e,
  label: t,
  icon: l,
  onClick: s,
  disabled: o,
  badge: a,
  shortcut: c,
  recordingKey: y,
  firstItem: m,
  lastItem: p,
  dataOnboardingKey: x,
  dataTestId: g,
  customTooltip: h
}) {
  let [w, S] = M();
  return jsx(ButtonPrimitive, {
    className: "xh8yej3 x78zum5 xl56j7k x9dqhi0",
    "aria-label": t,
    "aria-pressed": e,
    disabled: o,
    htmlAttributes: {
      "data-show-tooltip": !0,
      "data-tooltip": t,
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip-show-right": !0,
      "data-tooltip-shortcut-key": c,
      "data-tooltip-offset-y": m ? 4 : p ? -4 : 0,
      ...h,
      "data-onboarding-key": x,
      "data-testid": g
    },
    onClick: s,
    recordingKey: y,
    ref: w,
    children: jsx("div", {
      ...Ay.props(f.iconButton, o && f.disabledIcon, !o && f.enabledIcon, !o && S && f.hoveredIcon, e && f.activeIcon, m && f.firstSectionItem, p && f.lastSectionItem),
      children: a ? jsxs("div", {
        className: "x78zum5 x1n2onr6",
        children: [l, jsx("div", {
          className: "x10l6tqk x13vifvy x3m8u43 x1wc42o8 xegnrdp x16rqkct x1mnc5ec x78zum5 xl56j7k x6s0dn4 xb3r6kr",
          children: jsx("div", {
            className: "x1ftt334 x1ycjhwn xmo782v x16rqkct"
          })
        })]
      }) : l
    })
  });
};
$$x0.SegmentedIconButtonGroup = function ({
  children: e
}) {
  return jsx("div", {
    className: "x78zum5 xdt5ytf xamitd3 x19y5rnk x1v8gsql xxhr3t x54yuno x18u3cr5 x1jkc10p xmauxvm x1o7ms22 x1swbamy x611mgq",
    children: e
  });
};
let f = {
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
export const A = $$x0;