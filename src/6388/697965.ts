import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useCallback, useState, useMemo, useEffect, useLayoutEffect, useRef } from "react";
import { AppStateTsApi, SlideConstantsCppBindings, DesignGraphElements } from "../figma_app/763686";
import { getSingletonSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import a from "classnames";
import { _ as _$$_ } from "../vendor/853977";
import { generateRecordingKey } from "../figma_app/878298";
import { Button } from "../905/521428";
import { E as _$$E } from "../905/730894";
import { useAtomValueAndSetter, useAtomWithSubscription } from "../figma_app/27355";
import { useDebounce } from 'use-debounce';
import { uY } from "../figma_app/164260";
import { ie } from "../figma_app/524655";
import { ErrorBoundaryCrash } from "../905/751457";
import { lW } from "../figma_app/370763";
import { rM } from "../figma_app/241541";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { getFocusedNodeId, isFullscreenAndInFocusedNodeView, getFocusNodeFunction } from "../figma_app/327588";
import { useSelectedCooperFrameGuids } from "../figma_app/334505";
import { F1, U3, Vx } from "../figma_app/8833";
import { EditorPreferencesApi } from "../figma_app/740163";
import { useAppModelProperty } from "../figma_app/722362";
import { getObservableOrFallback, getObservableValue } from "../figma_app/84367";
import { l5 } from "../figma_app/224338";
import { A7 } from "../1528/961203";
import { gU, po, cm } from "../9410/486658";
import { v as _$$v } from "../6388/904362";
import { gr } from "../6388/685012";
import { useDropdown } from "../905/848862";
import { B as _$$B } from "../905/295520";
import { O as _$$O } from "../905/164014";
import { useSyncedRef } from "../905/633914";
import { T as _$$T } from "../1528/606183";
var d = a;
function v({
  carouselItemsById: e,
  disabled: t,
  getFocusedCarouselItemRef: l,
  toggleCollapsedRow: r,
  scrollToCarouselItem: i,
  backButtonText: a
}) {
  let [d] = useAtomValueAndSetter(uY);
  let c = ie();
  let u = useCallback(() => {
    let t = l(c);
    if (!t) return;
    AppStateTsApi.singleSlideView().isCarouselFocused.set(!0);
    let o = j(c, e);
    o !== c && r(o);
    t.current && i(t.current);
  }, [c, e, l, i, r]);
  let x = function (e, t, l, o, s) {
    let [r, i] = useState(!1);
    let a = useMemo(() => !!e && !!t.length && !t.includes(j(e, l)), [l, t, e]);
    let [d, c] = useDebounce(a, 5e3);
    useEffect(() => {
      a || c.flush();
    }, [a, c]);
    useEffect(() => {
      i(d);
    }, [d]);
    return {
      isVisible: r && !o,
      onClick: useCallback(() => {
        s();
        i(!1);
      }, [s])
    };
  }(c, d, e, t ?? !1, u);
  return jsx(b, {
    ...x,
    backButtonText: a
  });
}
function b({
  isVisible: e,
  onClick: t,
  backButtonText: l
}) {
  return jsxs("div", {
    className: d()("back_to_current_carousel_item_button--backToCurrentCarouselItemOuter--AaUhd", {
      "back_to_current_carousel_item_button--visible--Qn2NI": e
    }),
    "aria-hidden": !e,
    children: [jsx("div", {
      className: "back_to_current_carousel_item_button--backToCurrentCarouselItemGradient--DVFhy"
    }), jsx("div", {
      className: "back_to_current_carousel_item_button--backToCurrentCarouselItemButton--mvFb9",
      children: jsx(Button, {
        variant: "secondary",
        onClick: t,
        iconPrefix: jsx(_$$E, {}),
        children: l
      })
    })]
  });
}
function j(e, t) {
  let l = t[e];
  let o = l?.parentGuid;
  return o && t[o]?.isCollapsed ? o : e;
}
function O(e) {
  return {
    gridHasMultipleRows: useMemo(() => {
      let t = Object.values(e).some(e => e.parentGuid);
      let l = new Set(Object.values(e).map(e => e.coord.row)).size > 1;
      return t || l;
    }, [e])
  };
}
function K(e) {
  var t;
  var l;
  var i;
  var a;
  var x;
  var h;
  var g;
  var m;
  var b;
  let {
    carouselConfig,
    carouselType,
    recordingKey,
    itemRecodingKeyPrefix,
    backButtonText,
    getStackTooltipText,
    dropdownContextMenu,
    testId,
    shouldIndentChildren = !1,
    useDifferentColorForTemplates = !1,
    showRowTitle,
    showRowNumber = !0,
    smallSquares = !1,
    showRowDivider = !1,
    collapsedStatesDisabled = !1,
    bulkCreateMappingsByContainingFrame,
    isCarouselFocused,
    onMouseDownItemOverride
  } = e;
  let q = carouselConfig.explicitlyToggledRef;
  let Q = gU(carouselConfig);
  let {
    toggleCollapsed
  } = Q;
  let Z = "boolean" != typeof isCarouselFocused || isCarouselFocused;
  let ee = getObservableOrFallback(EditorPreferencesApi().showGuids);
  let et = useAppModelProperty("isReadOnly");
  useLayoutEffect(() => {
    Q.selectedItemIds.forEach(e => {
      Q.expandParent(e);
    });
  }, [Q, q]);
  let el = function (e) {
    let t = function () {
      let [e, t] = useAtomValueAndSetter(uY);
      return useCallback((e, l) => {
        e.isIntersecting ? t(e => e.includes(l) ? e : [...e, l]) : t(e => e.filter(e => e !== l));
      }, [t]);
    }();
    return _$$B(e, t, {
      threshold: .5
    });
  }(Q.carouselItemGuids);
  let {
    didSetScrollTopOnMount,
    reorderGroupScrollContainerRef,
    onScroll,
    dragControls,
    onDrag,
    onDragStart,
    onDragEnd,
    scrollToCarouselItem
  } = function (e) {
    let [t, l, o] = useSyncedRef(!1);
    let s = useRef(e);
    s.current = e;
    let {
      scrollerRef,
      onScroll: _onScroll,
      dragControls: _dragControls,
      onDrag: _onDrag,
      onDragStart: _onDragStart,
      onDragEnd: _onDragEnd
    } = _$$O();
    let x = function ({
      reorderGroupScrollContainerRef: e,
      didSetScrollTopOnMountRef: t,
      isCarouselFocusedRef: l,
      setDidSetScrollTopOnMount: o
    }) {
      return useCallback((n, s = !1) => {
        if (e.current) {
          if (t.current && l.current) n.scrollIntoView({
            block: "nearest",
            inline: "nearest",
            behavior: s ? "smooth" : "instant"
          }); else {
            let t = n.getBoundingClientRect();
            let l = e.current.getBoundingClientRect();
            (t.top < l.top || t.bottom > l.bottom) && requestAnimationFrame(() => {
              e.current && (e.current.scrollTop = Math.max(n.offsetTop - 1.5 * t.height, 0));
            });
            o(!0);
          }
        }
      }, [e, t, l, o]);
    }({
      reorderGroupScrollContainerRef: scrollerRef,
      didSetScrollTopOnMountRef: t,
      isCarouselFocusedRef: s,
      setDidSetScrollTopOnMount: o
    });
    return {
      didSetScrollTopOnMount: l,
      reorderGroupScrollContainerRef: scrollerRef,
      onScroll: _onScroll,
      dragControls: _dragControls,
      onDrag: _onDrag,
      onDragStart: _onDragStart,
      onDragEnd: _onDragEnd,
      scrollToCarouselItem: x
    };
  }(Z);
  b = function (e) {
    let t = useDropdown(e);
    return useCallback(e => {
      let {
        clientX,
        clientY
      } = e;
      t.show({
        data: {
          clientX,
          clientY
        }
      });
    }, [t]);
  }(dropdownContextMenu);
  let {
    handleContextMenu,
    handleMouseUp
  } = {
    handleContextMenu: useCallback(e => {
      e.stopPropagation();
      e.preventDefault();
      b(e);
    }, [b]),
    handleMouseUp: useCallback(e => {
      e.ctrlKey && b(e);
    }, [b])
  };
  t = Q.carouselItemsById;
  l = Q.hoveredItemId;
  i = Q.isDraggingCarouselItems;
  a = Q.indentSelectionBy;
  let {
    indentForGuid
  } = {
    indentForGuid: useCallback(e => {
      let o = t[e]?.indent || 0;
      return (e === l && i ? a + o : o) <= 0 ? 0 : 1;
    }, [t, l, i, a])
  };
  x = Q.carouselItemsById;
  h = Q.carouselItemGuids;
  g = Q.detachedCarouselItemGuids;
  m = Q.isDraggingCarouselItems;
  let ep = useMemo(() => (m ? g : h).filter(e => !!x[e] && !!el.get(e)), [x, h, g, m, el]);
  let eg = SlideConstantsCppBindings?.singleSlideThumbnailPadding() ?? 0;
  let ef = onMouseDownItemOverride || Q.onMouseDownItem;
  let em = useCallback((e, t) => {
    t && "function" == typeof t.stopPropagation && t.stopPropagation();
    AppStateTsApi && AppStateTsApi.singleSlideView && AppStateTsApi.singleSlideView().isCarouselFocused.set(!0);
    let l = getSingletonSceneGraph().get(e);
    l && (l.isExpanded ? q.current?.add(e) : q.current?.delete(e), toggleCollapsed(e));
  }, [toggleCollapsed, q]);
  let ev = Object.values(Q.carouselItemsById).every(e => 0 === e.coord.row);
  return jsxs(Fragment, {
    children: [jsx(v, {
      carouselItemsById: Q.carouselItemsById,
      disabled: Q.isDraggingCarouselItems || smallSquares,
      getFocusedCarouselItemRef: e => el.get(e),
      toggleCollapsedRow: Q.toggleCollapsed,
      scrollToCarouselItem: e => requestAnimationFrame(() => scrollToCarouselItem(e, !0)),
      backButtonText
    }), jsx("div", {
      className: d()(F1, cssBuilderInstance.flexGrow1.wFull.pr2.py8.borderBox.overflowYScroll.relative.itemsCenter.hFull.$, _$$T),
      style: {
        overflowAnchor: "none",
        scrollBehavior: didSetScrollTopOnMount && !Q.isDraggingCarouselItems ? "smooth" : "auto",
        height: smallSquares ? "calc(100% - 72px)" : void 0
      },
      ref: reorderGroupScrollContainerRef,
      onScroll,
      "data-testid": smallSquares ? "mini-carousel-scroll-container" : "carousel-scroll-container",
      children: jsx(_$$_.Group, {
        axis: "y",
        className: cssBuilderInstance.flex.flexColumn.justifyStart.borderBox.wFull.absolute.top0.left0.if(smallSquares, cssBuilderInstance.itemsCenter.gap12.colorBgSecondary.p12).if(!smallSquares, cssBuilderInstance.itemsEnd).$,
        "data-testid": testId,
        layoutScroll: !0,
        onContextMenu: handleContextMenu,
        onMouseMove: Q.onMouseMove,
        onMouseUp: handleMouseUp,
        onReorder: Q.onCarouselItemReorder,
        style: smallSquares ? {} : {
          padding: `${eg}px`
        },
        values: Q.isDraggingCarouselItems ? Q.detachedCarouselItemGuids : Q.carouselItemGuids,
        children: ep.map((e, t) => Q.carouselItemsById[e] && jsx(A7, {
          ref: el.get(e),
          carouselItemConfig: Q.carouselItemsById[e],
          carouselType,
          collapsedStatesDisabled,
          disabled: et,
          dragControls,
          firstOfSelection: function (e, t, l) {
            let o = e[l];
            if (!o || !t.includes(o)) return !1;
            if (l <= 0) return !0;
            let n = e[l - 1];
            return !n || !t.includes(n);
          }(ep, Q.selectedItemIds, t),
          getStackTooltipText,
          guidToDisplayForDebugging: ee ? e : null,
          hasBuzzBulkCreateBinding: !!bulkCreateMappingsByContainingFrame?.get(e),
          indentAmount: 20 * indentForGuid(e),
          isCarouselFocused: Z,
          isDraggingCarouselItems: Q.isDraggingCarouselItems,
          isFirstItem: 0 === t,
          isHovered: e === Q.hoveredItemId,
          isItemActive: e === carouselConfig.focusedItemId,
          isSelected: Q.selectedItemIds.includes(e),
          lastOfSelection: function (e, t, l) {
            let o = e[l];
            if (!o || !t.includes(o)) return !1;
            if (l >= e.length - 1) return !0;
            let n = e[l + 1];
            return !n || !t.includes(n);
          }(ep, Q.selectedItemIds, t),
          onClickCaret: t => em(e, t),
          onDrag,
          onDragEnd,
          onDragStart,
          onMouseDown: t => {
            Q.setHoveredItemId(e);
            ef(t, e);
            Q.onMouseDown(t);
          },
          onMouseUp: t => Q.onMouseUpItem(t, Q.isDraggingCarouselItems, Q.isClickingCarouselItems, e),
          onScrollToCarouselItem: scrollToCarouselItem,
          parentCarouselItemConfig: Q.carouselItemsById[Q.carouselItemsById[e]?.parentGuid],
          recordingKey: itemRecodingKeyPrefix ? generateRecordingKey(recordingKey, itemRecodingKeyPrefix, t) : void 0,
          reorderScrollerRef: reorderGroupScrollContainerRef,
          selectedSlideCount: Q.selectedItemIds.length,
          shouldIndentChildren: !!shouldIndentChildren,
          showRowDivider: showRowDivider && !ev,
          showRowNumber,
          showRowTitle,
          smallSquares,
          useDifferentColorForTemplates
        }, e))
      })
    })]
  });
}
let $ = {
  slides: (e, t) => getI18nString("slides.carousel.slide_stack_tooltip", {
    min: e,
    max: t
  }),
  buzz: (e, t) => getI18nString("cooper.carousel.asset_stack_tooltip", {
    min: e,
    max: t
  })
};
function $$G() {
  var e;
  let t = po();
  let l = ie();
  let r = getObservableValue(AppStateTsApi?.singleSlideView().isInFocusedNodeView, !0);
  let a = l5();
  let d = AppStateTsApi?.singleSlideView().focusNodeInFocusedNodeView ?? (() => { });
  let c = getObservableValue(AppStateTsApi?.singleSlideView().isCarouselFocused, !0);
  let u = {
    shouldIndentChildren: !0,
    focusedItemId: l,
    exclusivelySelectItemId: t,
    isInFocusView: r,
    initialSelectedItemIds: a,
    focusNodeInView: d,
    collapsedStatesDisabled: !1,
    explicitlyToggledRef: useRef(new Set())
  };
  let x = gU(u);
  let {
    activeToolId,
    activateTool
  } = rM(lW);
  e = x.onMouseDownItem;
  let {
    wrappedOnMouseDownItem
  } = {
    wrappedOnMouseDownItem: useCallback((t, l) => {
      activeToolId === DesignGraphElements.COMMENTS && activateTool(DesignGraphElements.SELECT);
      e(t, l);
    }, [activeToolId, activateTool, e])
  };
  let {
    gridHasMultipleRows
  } = O(x.carouselItemsById);
  let v = !!getFeatureFlags().slide_chapters;
  return jsx(K, {
    backButtonText: getI18nString("slides.carousel.back_to_current_slide"),
    carouselConfig: u,
    carouselType: "slides",
    collapsedStatesDisabled: !1,
    dropdownContextMenu: U3,
    getStackTooltipText: $.slides,
    isCarouselFocused: c,
    itemRecodingKeyPrefix: "slide",
    onMouseDownItemOverride: wrappedOnMouseDownItem,
    recordingKey: "ssvCarousel",
    shouldIndentChildren: !v,
    showRowDivider: !1,
    showRowNumber: !0,
    showRowTitle: v && gridHasMultipleRows,
    smallSquares: !1,
    testId: "slides-carousel",
    useDifferentColorForTemplates: !1
  });
}
function V({
  hideRows: e = !1,
  showRowNumber: t = !0,
  smallSquares: l = !1,
  showRowDivider: s = !1,
  collapsedStatesDisabled: r = !1
}) {
  let i = cm();
  let a = getFocusedNodeId();
  let d = isFullscreenAndInFocusedNodeView();
  let c = useSelectedCooperFrameGuids();
  let u = getFocusNodeFunction();
  let x = function () {
    let e = useAtomWithSubscription(_$$v);
    return useMemo(() => gr(e), [e]);
  }();
  let h = useRef(new Set());
  let {
    gridHasMultipleRows
  } = O(gU({
    shouldIndentChildren: !0,
    focusedItemId: a,
    exclusivelySelectItemId: i,
    isInFocusView: d,
    initialSelectedItemIds: c,
    focusNodeInView: u,
    collapsedStatesDisabled: r,
    explicitlyToggledRef: h
  }).carouselItemsById);
  return jsx(K, {
    backButtonText: getI18nString("cooper.carousel.back_to_current_asset"),
    bulkCreateMappingsByContainingFrame: x,
    carouselConfig: {
      shouldIndentChildren: !0,
      focusedItemId: a,
      exclusivelySelectItemId: i,
      isInFocusView: d,
      initialSelectedItemIds: c,
      focusNodeInView: u,
      collapsedStatesDisabled: r,
      explicitlyToggledRef: h
    },
    carouselType: "buzz",
    collapsedStatesDisabled: r,
    dropdownContextMenu: Vx,
    getStackTooltipText: $.buzz,
    itemRecodingKeyPrefix: "asset",
    recordingKey: l ? "buzzMiniCarousel" : "buzzCarousel",
    shouldIndentChildren: !1,
    showRowDivider: s,
    showRowNumber: t,
    showRowTitle: gridHasMultipleRows && !e,
    smallSquares: l,
    testId: l ? "buzz-mini-carousel" : "buzz-carousel",
    useDifferentColorForTemplates: !0
  });
}
function U() {
  return jsxs("div", {
    className: cssBuilderInstance.p16.$,
    children: [jsx("div", {
      className: cssBuilderInstance.textBodyMedium.$,
      children: renderI18nText("slides.carousel.error")
    }), jsx("div", {
      className: cssBuilderInstance.mt4.$,
      children: renderI18nText("slides.carousel.error_solution")
    })]
  });
}
export function $$W1({
  retryCount: e = 0
}) {
  return jsx(q, {
    boundaryKey: "SlidesSSVCarousel",
    retryCount: e,
    children: jsx($$G, {})
  });
}
export function $$Y0({
  retryCount: e = 0,
  hideRows: t = !1,
  showRowNumber: l = !0,
  smallSquares: n = !1,
  showRowDivider: s = !1,
  collapsedStatesDisabled: r = !1
}) {
  return jsx(q, {
    boundaryKey: "BuzzFocusedViewCarousel",
    retryCount: e,
    children: jsx(V, {
      hideRows: t,
      showRowNumber: l,
      smallSquares: n,
      showRowDivider: s,
      collapsedStatesDisabled: r
    })
  });
}
function q({
  retryCount: e = 0,
  boundaryKey: t,
  children: l
}) {
  return jsx(ErrorBoundaryCrash, {
    boundaryKey: t,
    fallback: e < 3 ? jsx(q, {
      retryCount: e + 1,
      boundaryKey: t,
      children: l
    }) : jsx(U, {}),
    children: l
  });
}
export const G = $$Y0;
export const l = $$W1;
