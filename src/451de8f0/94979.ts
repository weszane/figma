import { jsx, jsxs } from "react/jsx-runtime";
import { useId, useRef, useCallback } from "react";
import { E as _$$E } from "../905/632989";
import { bL, O6, hE, HG } from "../905/598775";
import { getFeatureFlags } from "../905/601108";
import t from "classnames";
import { Y } from "../905/506207";
import { a as _$$a } from "../905/925868";
import { B } from "../905/714743";
import { tx } from "../905/303541";
import { A } from "../5724/713301";
var l = t;
let w = "sidebar_row--sidebarRow--sY3gb";
let _ = "sidebar_row--sidebarRowPreventHover--G6KEW";
let u = "sidebar_row--sidebarRowFavoritesToMove--c0pqT";
let h = "sidebar_row--sidebarRowRedesigned--sjKQW";
let v = "sidebar_row--sidebarPaddingWithGrabber--lge9B";
let D = "sidebar_row--sidebarRowSelected--3D77W";
let k = "sidebar_row--sidebarRowContent--eoAx7";
export function $$j1(e) {
  let a = useId();
  let r = e.isSelected;
  let o = useRef(null);
  let t = useCallback(e => {
    r && !e && o.current?.scrollIntoView({
      block: "center"
    });
  }, [o, r]);
  let b = jsx("div", {
    draggable: !!e.onDragStart,
    onContextMenu: e.onContextMenu,
    onDragEnd: e.onDragEnd,
    onDragStart: e.onDragStart,
    ref: o,
    "aria-current": e.isSelected ? "page" : void 0,
    children: jsxs(_$$E, {
      "aria-labelledby": a,
      className: l()(w, {
        [h]: getFeatureFlags().file_browser_sidebar_row_ui,
        [v]: e.showGrabber,
        [_]: e.isFavoritesToMove_DEPRECATED,
        [u]: e.isFavoritesToMove_DEPRECATED,
        [D]: e.isSelected
      }),
      "data-onboarding-key": e["data-onboarding-key"],
      "data-testid": e.dataTestId,
      onClick: e.onClick,
      children: [jsx(_$$a, {
        onInitialLoad: t
      }), jsxs("div", {
        id: a,
        className: k,
        children: [e.showGrabber && jsx(B, {
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
  b = m(b, e);
  getFeatureFlags().file_browser_sidebar_semantic_html && e.wrapInListItem && (b = E(b));
  return b;
}
let E = e => jsx("li", {
  className: "x3ct3a4",
  children: e
});
let m = (e, a) => a.onDragStart ? jsx(Y, {
  isDragTarget: a.isDragTarget,
  onTargetDragEnter: a.onDragEnter,
  onTargetDragLeave: a.onDragLeave,
  onTargetDrop: a.onDragDrop,
  onTargetDragQuadrantUpdate: a.onDragQuadrantUpdate,
  draggable: !1,
  children: e
}, a.dragKey) : e;
export function $$p0(e) {
  let a = useId();
  let r = e.isSelected;
  let d = useRef(null);
  let t = useCallback(e => {
    r && !e && d.current?.scrollIntoView({
      block: "center"
    });
  }, [d, r]);
  return jsxs(bL, {
    className: l()(w, {
      [h]: getFeatureFlags().file_browser_sidebar_row_ui,
      [v]: e.showGrabber,
      [_]: e.isFavoritesToMove_DEPRECATED,
      [u]: e.isFavoritesToMove_DEPRECATED,
      [D]: e.isSelected
    }),
    "data-onboarding-key": e["data-onboarding-key"],
    "data-testid": e.dataTestId,
    children: [jsx(O6, {
      className: "sidebar_row--draftRow--JkpSx",
      onClick: e.onClick
    }), jsx(_$$a, {
      onInitialLoad: t
    }), jsxs("div", {
      id: a,
      className: k,
      children: [e.showGrabber && jsx(B, {
        svg: A,
        className: "x1epfdc"
      }), e.icon && jsx("div", {
        className: "x78zum5 xvy4d1p xxk0z11 x6s0dn4 xl56j7k x2lah0s",
        "aria-hidden": !0,
        children: e.icon
      }), jsx(hE, {
        children: tx("sidebar.drafts")
      })]
    }), jsx(HG, {
      children: e.badge
    })]
  });
}
export const I = $$p0;
export const SidebarRow = $$j1;