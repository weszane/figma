import { jsx, jsxs } from "react/jsx-runtime";
import { useId, useRef, useCallback } from "react";
import { ButtonPrimitive } from "../905/632989";
import { bL, O6, hE, HG } from "../905/598775";
import { getFeatureFlags } from "../905/601108";
import l from "classnames";
import { Y } from "../905/506207";
import { IntersectionSentinel } from "../905/925868";
import { SvgComponent } from "../905/714743";
import { renderI18nText } from "../905/303541";
import { A } from "../5724/713301";
var d = l;
let p = "sidebar_row--sidebarRow--sY3gb";
let h = "sidebar_row--sidebarRowPreventHover--G6KEW";
let g = "sidebar_row--sidebarRowFavoritesToMove--c0pqT";
let x = "sidebar_row--sidebarRowRedesigned--sjKQW";
let b = "sidebar_row--sidebarPaddingWithGrabber--lge9B";
let f = "sidebar_row--sidebarRowSelected--3D77W";
let v = "sidebar_row--sidebarRowContent--eoAx7";
export function $$y1(e) {
  let t = useId();
  let a = e.isSelected;
  let o = useRef(null);
  let l = useCallback(e => {
    a && !e && o.current?.scrollIntoView({
      block: "center"
    });
  }, [o, a]);
  let c = jsx("div", {
    draggable: !!e.onDragStart,
    onContextMenu: e.onContextMenu,
    onDragEnd: e.onDragEnd,
    onDragStart: e.onDragStart,
    ref: o,
    "aria-current": e.isSelected ? "page" : void 0,
    children: jsxs(ButtonPrimitive, {
      "aria-labelledby": t,
      className: d()(p, {
        [x]: getFeatureFlags().file_browser_sidebar_row_ui,
        [b]: e.showGrabber,
        [h]: e.isFavoritesToMove_DEPRECATED,
        [g]: e.isFavoritesToMove_DEPRECATED,
        [f]: e.isSelected
      }),
      "data-onboarding-key": e["data-onboarding-key"],
      "data-testid": e.dataTestId,
      onClick: e.onClick,
      children: [jsx(IntersectionSentinel, {
        onInitialLoad: l
      }), jsxs("div", {
        id: t,
        className: v,
        children: [e.showGrabber && jsx(SvgComponent, {
          svg: A,
          className: "x1epfdc"
        }), e.icon && jsx("div", {
          className: "x78zum5 xvy4d1p xxk0z11 x6s0dn4 xl56j7k x2lah0s",
          "aria-hidden": !0,
          children: e.icon
        }), e.text]
      }), e.badge]
    })
  });
  c = j(c, e);
  getFeatureFlags().file_browser_sidebar_semantic_html && e.wrapInListItem && (c = T(c));
  return c;
}
let T = e => jsx("li", {
  className: "x3ct3a4",
  children: e
});
let j = (e, t) => t.onDragStart ? jsx(Y, {
  isDragTarget: t.isDragTarget,
  onTargetDragEnter: t.onDragEnter,
  onTargetDragLeave: t.onDragLeave,
  onTargetDrop: t.onDragDrop,
  onTargetDragQuadrantUpdate: t.onDragQuadrantUpdate,
  draggable: !1,
  children: e
}, t.dragKey) : e;
export function $$C0(e) {
  let t = useId();
  let a = e.isSelected;
  let n = useRef(null);
  let l = useCallback(e => {
    a && !e && n.current?.scrollIntoView({
      block: "center"
    });
  }, [n, a]);
  return jsxs(bL, {
    className: d()(p, {
      [x]: getFeatureFlags().file_browser_sidebar_row_ui,
      [b]: e.showGrabber,
      [h]: e.isFavoritesToMove_DEPRECATED,
      [g]: e.isFavoritesToMove_DEPRECATED,
      [f]: e.isSelected
    }),
    "data-onboarding-key": e["data-onboarding-key"],
    "data-testid": e.dataTestId,
    children: [jsx(O6, {
      className: "sidebar_row--draftRow--JkpSx",
      onClick: e.onClick
    }), jsx(IntersectionSentinel, {
      onInitialLoad: l
    }), jsxs("div", {
      id: t,
      className: v,
      children: [e.showGrabber && jsx(SvgComponent, {
        svg: A,
        className: "x1epfdc"
      }), e.icon && jsx("div", {
        className: "x78zum5 xvy4d1p xxk0z11 x6s0dn4 xl56j7k x2lah0s",
        "aria-hidden": !0,
        children: e.icon
      }), jsx(hE, {
        children: renderI18nText("sidebar.drafts")
      })]
    }), jsx(HG, {
      children: e.badge
    })]
  });
}
export const I = $$C0;
export const SidebarRow = $$y1;