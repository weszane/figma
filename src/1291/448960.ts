import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { createElement, createContext, useContext, useRef, useEffect, useState, useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "../905/521428";
import { IconButton } from "../905/443068";
import { A as _$$A } from "../905/251970";
import { tabbable } from "tabbable";
import { useLatestRef } from "../figma_app/922077";
import { KeyCodes } from "../905/63728";
import { P as _$$P } from "../905/347284";
import { IW } from "../figma_app/563413";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { getI18nState } from "../figma_app/363242";
import { hideDropdownAction } from "../905/929976";
import { jy } from "../905/116101";
import { TrackingProvider } from "../figma_app/831799";
import { VU } from "../905/625959";
import { LR, zo, J$, gR } from "../figma_app/120210";
import { useDropdownState } from "../905/848862";
import { t as _$$t2 } from "../905/192333";
import { t as _$$t3 } from "../905/150656";
import { Z } from "../905/189618";
import { Q } from "../1291/188959";
import { styleBuilderInstance } from "../905/941192";
import { p as _$$p } from "../905/42189";
import { cX } from "../figma_app/920333";
import { DN, kD, FL, mS, HI, SK } from "../figma_app/293326";
import { O as _$$O } from "../figma_app/71774";
import { F as _$$F } from "../figma_app/603239";
import { DraggableModalManager } from "../905/748636";
let I = [_$$p.ALL, _$$p.STICKERS_AND_COMPONENTS, _$$p.TEMPLATES, _$$p.WIDGETS, _$$p.PLUGINS, _$$p.MORE];
function k() {
  let {
    tabManager,
    tabPropsMap
  } = cX();
  return jsx(Z, {
    fadeEdges: !0,
    children: jsx("div", {
      style: styleBuilderInstance.add({
        display: "inline-flex",
        padding: "12px 20px"
      }).$,
      children: jsx(_$$t3.TabStrip, {
        manager: tabManager,
        children: I.map(e => {
          let s = createElement(_$$t3.Tab, {
            ...tabPropsMap[e],
            key: e,
            htmlAttributes: {
              "data-not-draggable": "true",
              "data-browse-modal-tab": !0
            }
          }, function (e) {
            switch (e) {
              case _$$p.ALL:
                return getI18nString("whiteboard.inserts.all");
              case _$$p.STICKERS_AND_COMPONENTS:
                return getI18nString("whiteboard.inserts.stickers");
              case _$$p.TEMPLATES:
                return getI18nString("whiteboard.inserts.templates");
              case _$$p.WIDGETS:
                return getI18nString("whiteboard.inserts.widgets");
              case _$$p.PLUGINS:
                return getI18nString("whiteboard.inserts.plugins");
              case _$$p.MORE:
                return getI18nString("whiteboard.inserts.more");
              default:
                return "";
            }
          }(e));
          return e === _$$p.STICKERS_AND_COMPONENTS ? jsx(Q, {
            position: {
              top: "0px",
              right: "0px"
            },
            children: s
          }, e) : s;
        })
      })
    })
  });
}
let R = createContext(null);
let M = () => {
  let e = useContext(R);
  if (!e) throw Error("BrowseModal components must be used within BrowseModalProvider");
  return e;
};
let F = {
  main: 0,
  category: 0,
  detail: 0
};
let z = e => {
  let t = useRef(F[e]);
  useEffect(() => (setTimeout(() => {
    F[e] = 0;
  }, 0), () => {
    F[e] = t.current;
  }), [e]);
  return e => t.current = e;
};
function O({
  initialPosition: e,
  modalPosition: t,
  bounds: s,
  showLeftPinBound: r,
  setShowLeftPinBound: o,
  shouldSnapToPosition: l,
  entryPointId: d,
  setPinned: u,
  children: m,
  disableDragging: _,
  shouldOptimizeForIpadApp: g,
  shouldShowTabView: p
}) {
  let [x, w] = useState(0);
  let N = useRef(null);
  let T = useRef(null);
  let C = useSelector(e => e.universalInsertModal);
  let $ = useDispatch();
  let E = LR();
  let I = useCallback(e => {
    e && w(zo - e.getBoundingClientRect().height - 1);
  }, []);
  let [k, L] = useState(!1);
  let A = useDropdownState();
  J$(C.pinned === _$$t2.NOT_PINNED, N, d ? `[data-element-target=${d}]` : void 0);
  let B = useLatestRef(p);
  useEffect(() => {
    void 0 !== B && (B && !p || !B && p) && L(!0);
  }, [B, p]);
  let M = useMemo(() => ({
    onClose: E,
    mainContentHeight: x,
    setPinned: u,
    searchBarRef: T,
    headerContentRef: I,
    shouldOptimizeForIpadApp: g,
    isTransitioning: k,
    setIsTransitioning: L
  }), [E, x, u, T, I, g, k, L]);
  return e ? jsxs(Fragment, {
    children: [C.pinned === _$$t2.PINNED && r && jsx("div", {
      className: "browse_all_resources_modal_container--dockLeft--K-xtd",
      style: {
        width: gR
      }
    }), jsx(R.Provider, {
      value: M,
      children: jsx(DraggableModalManager, {
        ref: N,
        autoflowHeight: !0,
        bounds: s,
        canResetPosition: l,
        containerClassName: C.pinned === _$$t2.PINNED_AND_DOCKED_LEFT ? "browse_all_resources_modal_container--modalContainerPinAnimation--mjZ0f browse_all_resources_modal_container--modalContainer--dG0DL" : "browse_all_resources_modal_container--modalContainer--dG0DL",
        contentContainerClassName: "browse_all_resources_modal_container--modalContentContainer--I9Qp2",
        disableDragging: _,
        initialPosition: t || e,
        initialWidth: gR,
        isFigJam: !0,
        onClose: E,
        onDragEnd: () => {
          T.current?.focus();
          r && u();
        },
        onDragStart: () => {
          VU.get("set-tool-default", "toolbar")();
          $(jy({
            pinned: _$$t2.PINNED
          }));
        },
        onLeaveBound: () => {
          o(!1);
        },
        children: jsx(TrackingProvider, {
          name: "universal-insert",
          children: jsx("div", {
            className: "browse_all_resources_modal_container--slidingPaneContainer--0TVUA sliding_pane--slidingPaneContainer--RQkXf",
            onClick: e => {
              e.stopPropagation();
              A && $(hideDropdownAction());
            },
            children: m
          })
        })
      })
    })]
  }) : null;
}
function H({
  searchQuery: e,
  setSearchQuery: t,
  searchPlaceholder: s,
  showCloseButton: n,
  topBarStyle: d,
  shouldHideTabs: c,
  shouldOptimizeForIpadApp: m,
  onFocus: h
}) {
  let {
    onClose,
    searchBarRef,
    setPinned,
    headerContentRef,
    isTransitioning
  } = M();
  let v = _$$F();
  let w = getI18nState()?.getPrimaryLocale(!1);
  let N = useRef(DN(w));
  let T = () => {
    t("");
    N.current = DN(w);
    searchBarRef.current?.focus();
  };
  return jsxs("div", {
    ref: headerContentRef,
    children: [jsxs("div", {
      className: d,
      children: [jsxs("div", {
        className: "browse_all_resources_modal_container--searchBarContainer--p9vKo",
        "data-not-draggable": !0,
        children: [jsx(IW, {
          ref: searchBarRef,
          className: "browse_all_resources_modal_container--searchBar--tEvms",
          clearSearch: T,
          disabled: isTransitioning,
          focusOnMount: !m,
          hasTransparentBackground: !0,
          hideXIcon: !0,
          iconClassName: cssBuilderInstance.colorIconSecondary.$,
          isKeyDownHandled: s => s.keyCode === KeyCodes.ESCAPE && (e ? t("") : onClose(), !0),
          onChange: t,
          onFocus: h,
          placeholder: s || N.current,
          query: e,
          recordingKey: "browseAllResourcesModalSearchBar",
          selectTextOnMount: !m
        }), e && jsx(Button, {
          onClick: T,
          variant: "ghost",
          "aria-label": getI18nString("whiteboard.inserts.clear_search"),
          children: renderI18nText("whiteboard.inserts.clear")
        })]
      }), v ? jsx(_$$O, {
        setPinned
      }) : n ? jsx(IconButton, {
        onClick: onClose,
        "aria-label": getI18nString("general.close"),
        htmlAttributes: {
          "data-not-draggable": !0
        },
        children: jsx(_$$A, {})
      }) : null]
    }), !c && jsx(k, {})]
  }, "search-bar");
}
function D({
  children: e,
  scrollContainerRef: t,
  type: s,
  currentTab: r,
  shouldShowTabView: o,
  toolbeltHeight: l
}) {
  let {
    mainContentHeight,
    shouldOptimizeForIpadApp,
    searchBarRef
  } = M();
  let _ = useSelector(e => e.universalInsertModal);
  let g = z("main");
  let p = z("category");
  let x = z("detail");
  useEffect(() => {
    if (!shouldOptimizeForIpadApp) {
      let e = document.activeElement;
      e?.hasAttribute("data-browse-modal-tab") || searchBarRef.current?.focus();
    }
  }, [r, shouldOptimizeForIpadApp, searchBarRef]);
  let h = null;
  let f = null;
  let b = o ? kD : FL;
  switch (s) {
    case "main":
      h = mS(_.pinned, mainContentHeight, b, l);
      f = g;
      break;
    case "category":
      h = mS(_.pinned, zo - HI, b, l);
      f = p;
      break;
    case "detail":
      h = mS(_.pinned, zo - SK, b, l);
      f = x;
  }
  return jsx("div", {
    "data-not-draggable": !0,
    children: jsx(_$$P, {
      height: h,
      width: gR,
      initialScrollTop: F[s],
      onScroll: f,
      scrollContainerRef: t,
      children: jsx("div", {
        className: "browse_all_resources_modal_container--scrollContainerPadding--U0TqO",
        children: e
      })
    }, r)
  });
}
function K({
  children: e,
  hasSlidingPaneStyle: t
}) {
  let {
    setIsTransitioning,
    isTransitioning
  } = M();
  let r = useRef(null);
  useEffect(() => {
    !isTransitioning && t && r.current && setTimeout(() => {
      if (!r.current) return;
      let e = tabbable(r.current, {
        getShadowRoot: !0,
        displayCheck: "none"
      });
      e.length > 0 && e[0]?.focus({
        preventScroll: !0
      });
    }, 200);
  }, [t, isTransitioning]);
  return jsx("div", {
    className: t ? "browse_all_resources_modal_container--slidingPane--i5r6q sliding_pane--slidingPane--6OmDU" : "browse_all_resources_modal_container--slidingPaneLeft--dryfT sliding_pane--slidingPaneLeft--Wrfdy sliding_pane--slidingPane--6OmDU",
    "aria-hidden": !t && !isTransitioning,
    onTransitionEnd: () => setIsTransitioning(!1),
    ref: r,
    children: e
  });
}
O.displayName = "BrowseAllResourcesModalContainer.Root";
H.displayName = "BrowseAllResourcesModalContainer.SearchBar";
D.displayName = "BrowseAllResourcesModalContainer.ScrollContainer";
K.displayName = "BrowseAllResourcesModalContainer.TabView";
export let $$W0 = {
  Root: O,
  SearchBar: H,
  ScrollContainer: D,
  TabView: K
};
export const B = $$W0;