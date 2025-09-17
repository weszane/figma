import { jsxs, jsx } from "react/jsx-runtime";
import { memo, useState, useEffect, useMemo, useRef } from "react";
import { useDispatch } from "react-redux";
import { useDebounce } from 'use-debounce';
import { selectWithShallowEqual } from "../905/103090";
import { zK } from "../figma_app/913823";
import { cr } from "../905/879323";
import { ts, zo, gR } from "../figma_app/120210";
import { selectCurrentFile } from "../figma_app/516028";
import { Sc } from "../905/18797";
import { FDocumentType } from "../905/862883";
import { yD } from "../905/92359";
import { wR } from "../figma_app/293326";
import { b as _$$b } from "../1291/451154";
import { cX, t$, kx } from "../figma_app/920333";
import { uU, FN } from "../1291/539089";
import { Ib, Rz } from "../1291/846441";
import { C as _$$C } from "../1291/839924";
import { AppStateTsApi, DesignGraphElements } from "../figma_app/763686";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
import { Dy } from "../figma_app/925970";
import { B as _$$B } from "../1291/448960";
import { b as _$$b2 } from "../figma_app/300024";
import { ButtonPrimitive } from "../905/632989";
import { s as _$$s2 } from "../1291/549862";
import { I as _$$I } from "../905/542485";
import { lW } from "../figma_app/370763";
import { rM } from "../figma_app/241541";
import { KE } from "../905/116101";
import { gt } from "../6388/574648";
let o;
function C({
  children: e,
  searchQuery: t,
  setSearchQuery: l,
  categoryViewContent: o,
  categoryViewHeader: s,
  mainScrollContainerRef: i,
  categoryScrollContainerRef: a,
  initialModalPosition: d,
  modalPosition: c,
  bounds: u,
  showLeftPinBound: x,
  setShowLeftPinBound: h,
  shouldSnapToPosition: p,
  entryPointId: g,
  setPinned: f
}) {
  let m = useDispatch();
  let {
    tabManager
  } = cX();
  let y = !o && !s;
  Ib();
  return jsxs(_$$B.Root, {
    bounds: u,
    disableDragging: !0,
    entryPointId: g,
    initialPosition: d,
    modalPosition: c,
    setPinned: f,
    setShowLeftPinBound: h,
    shouldShowTabView: y,
    shouldSnapToPosition: p,
    showLeftPinBound: x,
    children: [jsxs(_$$B.TabView, {
      hasSlidingPaneStyle: y,
      children: [jsx(_$$B.SearchBar, {
        searchQuery: t,
        setSearchQuery: l,
        searchPlaceholder: getI18nString("design_systems.assets_panel.search"),
        topBarStyle: _$$s.flex.itemsCenter.p8.$,
        shouldHideTabs: !0,
        onFocus: () => m(Dy({
          entryPoint: "figjam:inserts"
        }))
      }), jsx(_$$B.ScrollContainer, {
        type: "main",
        currentTab: tabManager.activeTab,
        scrollContainerRef: i,
        shouldShowTabView: !1,
        toolbeltHeight: (AppStateTsApi?.singleSlideView().bottomToolbeltHeightInViewport() || 72) - 12,
        children: e
      })]
    }), s && o && jsxs(_$$B.TabView, {
      hasSlidingPaneStyle: !0,
      children: [s, jsx(_$$B.ScrollContainer, {
        type: "category",
        currentTab: tabManager.activeTab,
        scrollContainerRef: a,
        shouldShowTabView: y,
        toolbeltHeight: (AppStateTsApi?.singleSlideView().bottomToolbeltHeightInViewport() || 72) - 12,
        children: o
      })]
    })]
  });
}
let L = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0 1a9 9 0 1 0 0-18 9 9 0 0 0 0 18M10.497 7.555a.5.5 0 1 0-.994-.11L9.33 9H7.5a.5.5 0 0 0 0 1h1.72l-.445 4H7.5a.5.5 0 0 0 0 1h1.164l-.161 1.445a.5.5 0 1 0 .994.11L9.67 15h3.994l-.161 1.445a.5.5 0 1 0 .994.11L14.67 15h1.83a.5.5 0 1 0 0-1h-1.72l.445-4H16.5a.5.5 0 0 0 0-1h-1.164l.16-1.445a.5.5 0 1 0-.993-.11L14.33 9h-3.994zM10.225 10h3.994l-.444 4H9.78z",
      clipRule: "evenodd"
    })
  });
});
function P() {
  let e = useDispatch();
  let {
    activateTool
  } = rM(lW);
  return jsxs("div", {
    children: [jsx("h2", {
      className: "slides_overflow_inserts--sectionTitle--Gvcmn ellipsis--ellipsis--Tjyfa text--fontPos13--xW8hS text--_fontBase--QdLsd",
      children: getI18nString("slides.inserts_menu.other_tools")
    }), jsxs("div", {
      className: "slides_overflow_inserts--buttonContainer--rZ5n4",
      children: [jsx(z, {
        iconPrefix: jsx(_$$s2, {}),
        onClick: () => {
          activateTool(DesignGraphElements.TABLE);
          e(KE());
        },
        recordingKey: "table-insert-button",
        children: getI18nString("fullscreen_actions.set-tool-table")
      }), jsx(z, {
        iconPrefix: jsx(_$$I, {}),
        onClick: () => {
          activateTool(DesignGraphElements.CODE_BLOCK);
          e(KE());
        },
        recordingKey: "codeBlockInsertButton",
        children: getI18nString("fullscreen_actions.set-tool-code-block")
      }), jsx(z, {
        iconPrefix: jsx(L, {}),
        onClick: () => {
          activateTool(DesignGraphElements.SLIDE_NUMBER);
          e(KE());
        },
        recordingKey: "slide-number-insert-button",
        children: getI18nString("fullscreen_actions.set-tool-slide-number")
      })]
    })]
  });
}
function z({
  onClick: e,
  iconPrefix: t,
  children: l,
  recordingKey: o
}) {
  return jsx(ButtonPrimitive, {
    onClick: e,
    className: "slides_overflow_inserts--button--y9IJK",
    recordingKey: o,
    children: jsxs("span", {
      className: "slides_overflow_inserts--buttonText--6PPK7",
      children: [t && jsx(O, {
        children: t
      }), jsx("span", {
        className: "slides_overflow_inserts--buttonContent---Fg7H",
        children: l
      })]
    })
  });
}
function O({
  children: e
}) {
  return jsx("span", {
    "aria-hidden": !0,
    className: "slides_overflow_inserts--icon--FGUS4",
    children: e
  });
}
export function $$F0() {
  let e = selectCurrentFile();
  let {
    fileVersion,
    loadingState,
    universalInsertModal
  } = selectWithShallowEqual(e => ({
    fileVersion: e.fileVersion,
    loadingState: e.loadingState,
    universalInsertModal: e.universalInsertModal
  }));
  let {
    searchQuery,
    setSearchQuery,
    setPreviewResource
  } = Rz();
  let [I] = useDebounce(searchQuery, 200);
  let [T, w] = useState(universalInsertModal.initialSelectedCategory ?? o);
  useEffect(() => {
    o = T;
  }, [T]);
  useEffect(() => {
    universalInsertModal.initialSearch && setSearchQuery(universalInsertModal.initialSearch);
  }, [universalInsertModal.initialSearch, setSearchQuery]);
  let R = useDispatch();
  let A = gt(_$$b2);
  let L = useMemo(() => ({
    kind: "buttonTarget",
    buttonTarget: A
  }), [A]);
  let {
    initialModalPosition,
    modalPosition,
    setModalPosition
  } = ts(L, zo, gR);
  let {
    bounds,
    showLeftPinBound,
    setShowLeftPinBound,
    shouldSnapToPosition,
    setPinned
  } = _$$C(D, setModalPosition, universalInsertModal.pinned, t$, initialModalPosition, universalInsertModal.showing);
  let $ = useRef(null);
  let G = useRef(null);
  useEffect(() => {
    R(cr({
      shouldSearchDefaultLibraries: !0
    }));
  }, [R]);
  let V = e && fileVersion && Sc(loadingState, yD(e.key));
  useEffect(() => {
    V && R(zK());
  }, [R, V]);
  useEffect(() => {
    "function" == typeof G.current?.scroll && G.current.scroll({
      top: 0,
      behavior: "smooth"
    });
  }, [I]);
  return jsx(kx, {
    setPreviewResource,
    setSelectedCategory: w,
    searchQuery,
    children: jsx(C, {
      bounds,
      categoryScrollContainerRef: $,
      categoryViewContent: T ? jsx(uU, {
        selectedLibrary: T,
        setSelectedLibrary: w
      }) : null,
      categoryViewHeader: function () {
        if (T) return jsx(_$$b, {
          selectedCategory: T,
          goBack: () => {
            w(void 0);
          },
          setPinned
        });
      }(),
      entryPointId: A,
      initialModalPosition,
      mainScrollContainerRef: G,
      modalPosition,
      searchQuery,
      setPinned,
      setSearchQuery,
      setShowLeftPinBound,
      shouldSnapToPosition,
      showLeftPinBound,
      children: jsx(FN, {
        query: searchQuery,
        recentlyUsedItemsKey: FDocumentType.Slides,
        hideRecentsIfEmpty: !0,
        showLocalComponents: !0,
        toggleLibraryModalType: "editor",
        children: jsx(P, {})
      })
    })
  });
}
function D() {
  return {
    x: -gR,
    y: 0,
    width: 2 * gR + wR,
    height: window.innerHeight
  };
}
export const K = $$F0;
