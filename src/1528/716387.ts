import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { memo, useCallback, useMemo, useContext, useState, useRef, useLayoutEffect, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { z as _$$z } from "../vendor/999105";
import { noop } from 'lodash-es';
import { TabLoop } from "../905/718764";
import { IconButton } from "../905/443068";
import { ButtonPrimitive } from "../905/632989";
import { AnnouncementPrimitive } from "../905/745591";
import { ScreenReaderOnly } from "../905/172252";
import { h as _$$h } from "../905/994594";
import { A as _$$A } from "../905/251970";
import { l as _$$l } from "../1250/91689";
import { k as _$$k } from "../905/888808";
import { PageViewMode, EditAction, CanvasSearchHelpers, SelectionState, MatchCriteria, Multiplayer, DataLoadStatus } from "../figma_app/763686";
import { defaultSessionLocalIDString, zeroSessionLocalIDString } from "../905/871411";
import { getFeatureFlags } from "../905/601108";
import { atom, useSetAtom, useAtomWithSubscription } from "../figma_app/27355";
import I from "classnames";
import { $ as _$$$ } from "../905/455748";
import { isCommandEvent, KeyCodes, isExactModifier, ModifierKeyCodes, isCommandModifier } from "../905/63728";
import { yZ } from "../905/407352";
import { BrowserInfo } from "../figma_app/778880";
import { generateRecordingKey } from "../figma_app/878298";
import { RecordableDiv, RecordableButton } from "../905/511649";
import { w as _$$w } from "../905/835474";
import { isWhitespace } from "../figma_app/930338";
import { elementsMapAtom, elementsSetAtom, counterAtom, currentSelectionAtom, anotherElementsSetAtom } from "../905/125333";
import { ph } from "../figma_app/709893";
import { b as _$$b } from "../figma_app/556971";
import { ImageBackedLoading } from "../figma_app/858013";
import { RecordingScrollContainer } from "../905/347284";
import { SvgComponent } from "../905/714743";
import { getI18nString, renderI18nText } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { useIsSelectedViewFullscreenCooper } from "../figma_app/828186";
import { setCanvasSearchScope, toggleCanvasSearchCategoryFilter } from "../figma_app/712525";
import { fullscreenValue } from "../figma_app/455680";
import { r as _$$r } from "../figma_app/860474";
import { gk } from "../figma_app/540726";
import { useNavigateToViewport } from "../905/104740";
import { updateHoveredNode } from "../figma_app/741237";
import { useAppModelProperty, useSceneGraphSelector } from "../figma_app/722362";
import { hasNotLoaded, getNodeStatus } from "../figma_app/623300";
import { FileKindEnum } from "../figma_app/162807";
import { KindEnum } from "../905/129884";
import { setupMenu, MenuRootComp, MenuContainerComp } from "../figma_app/860955";
import { EventShield } from "../905/821217";
import { H_ } from "../905/963340";
import { O as _$$O } from "../905/969533";
import { useDropdown } from "../905/848862";
import { Vz, v9, ei as _$$ei, G$, PP, Wv, Fn, Z9, S as _$$S, dz, sb, Jo, bB, T as _$$T2, fz, Nf, HR, fp, AX, du, _M, qp, hY, kQ, eO as _$$eO, rB, hs, V3, wH, r9, Xt, rX, Dw, _P, D6, c1, QF, VQ, Gu, of } from "../9410/733790";
import { mapFilter } from "../figma_app/656233";
import { v as _$$v } from "../905/213481";
import { props } from "@stylexjs/stylex";
import { NodeType } from "../figma_app/421886";
import { p9, D4, IM, OP } from "../figma_app/463678";
import { f as _$$f } from "../905/54715";
import { VS, JE, oZ, WP, _0 } from "../9410/763216";
import { Bf } from "../figma_app/249941";
import { useIsFullscreenSitesView } from "../905/561485";
import { genericAtomFamily1 } from "../figma_app/115923";
import { useIsFullscreenSlidesView } from "../figma_app/21029";
import { II, EA, SQ, CT, A5, aH, ih, WB, L4 } from "../9410/499229";
import { a as _$$a } from "../9410/20763";
import { Od, I_ } from "../9410/542126";
import { trackFileEventWithUser } from "../figma_app/901889";
import { shouldHandleKeyEvent, KeyboardEventResponse, forwardKeyboardEvent } from "../figma_app/896988";
import { A as _$$A2 } from "../6828/523860";
import { A as _$$A3 } from "../6828/85206";
import { A as _$$A4 } from "../6828/954206";
import { A as _$$A5 } from "../6828/255111";
import { A as _$$A6 } from "../svg/279162";
var N = I;
var et = (e => (e[e.NONE = 0] = "NONE", e[e.TOP = 1] = "TOP", e[e.MIDDLE = 2] = "MIDDLE", e[e.BOTTOM = 3] = "BOTTOM", e[e.ALL = 4] = "ALL", e))(et || {});
var en = (e => (e[e.NONE = 0] = "NONE", e[e.SINGLE = 1] = "SINGLE", e[e.MULTI = 2] = "MULTI", e))(en || {});
let el = atom(!1);
let er = memo(function (e) {
  let t = useSetAtom(el);
  let n = useDispatch<AppDispatch>();
  let l = useSelector(e => e.canvasSearch.scope);
  let i = useSelector(e => e.mirror.appModel.pagesList);
  let {
    allInstancesExpanded
  } = e;
  let {
    getTriggerProps,
    manager
  } = setupMenu();
  let u = es(l);
  return jsx(EventShield, {
    eventListeners: ["onClick"],
    children: jsxs(MenuRootComp, {
      manager,
      children: [jsxs(ButtonPrimitive, {
        recordingKey: "figma_design_search_page_scope_dropdown",
        className: Vz,
        "aria-label": getI18nString("canvas_search.scope_dropdown_aria_label", {
          scope: u
        }),
        "data-testid": "figma-design-search-scope-dropdown",
        ...getTriggerProps(),
        children: [u, jsx(_$$O, {})]
      }), jsxs(MenuContainerComp, {
        children: [jsx(ei, {
          option: PageViewMode.ACTIVE_PAGE,
          activeOption: l,
          onClickCallback: e => {
            n(setCanvasSearchScope(e));
          }
        }), jsx(ei, {
          option: PageViewMode.ALL_PAGES,
          activeOption: l,
          onClickCallback: e => {
            hasNotLoaded(i) || !allInstancesExpanded ? (t(!0), requestAnimationFrame(() => {
              n(setCanvasSearchScope(e));
              t(!1);
            })) : n(setCanvasSearchScope(e));
          }
        })]
      })]
    })
  });
});
function ei({
  option: e,
  activeOption: t,
  onClickCallback: n
}) {
  let l = useDropdown("CANVAS_SEARCH_PAGE_SCOPE_DROPDOWN");
  return jsx(H_, {
    recordingKey: `figma_design_search_page_scope.${e}`,
    checked: e === t,
    onChange: () => {
      l.hide();
      n(e);
    },
    children: es(e)
  }, e);
}
let es = e => {
  switch (e) {
    case PageViewMode.ACTIVE_PAGE:
      return getI18nString("canvas_search.this_page");
    case PageViewMode.ALL_PAGES:
      return getI18nString("canvas_search.all_pages");
  }
};
function eh({
  short: e,
  options: t,
  recordingKey: n
}) {
  let i = useDispatch<AppDispatch>();
  let s = useSelector(e => e.canvasSearch.filters);
  let o = _$$b();
  let d = useCallback(e => {
    i(toggleCanvasSearchCategoryFilter(e));
  }, [i]);
  let c = useMemo(() => mapFilter(t, e => s[e] ? jsx(_$$v, {
    hasCloseButton: !0,
    onClose: () => d(e),
    "aria-label": getI18nString("canvas_search.filter.remove_filter", {
      filter: p9(e)
    }),
    recordingKey: generateRecordingKey(n, NodeType[e], "remove"),
    children: p9(e)
  }, `filter-chip-${e}`) : null), [s, d, t, n]);
  return c.length ? jsx("div", {
    "data-testid": "search-filter-chip-container",
    ...props(em.filterChips, o && em.filterChipsLeftRail, e && em.filterChipsShort),
    children: c
  }) : null;
}
let em = {
  filterChips: {
    display: "x78zum5",
    flexWrap: "x1a02dak",
    gap: "x1jnr06f",
    rowGap: null,
    columnGap: null,
    padding: "xkl4b8w",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    $$css: !0
  },
  filterChipsLeftRail: {
    padding: "x18jrek7",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    $$css: !0
  },
  filterChipsShort: {
    paddingBottom: "xjkvuk6",
    $$css: !0
  }
};
function ex({
  short: e,
  mode: t,
  recordingKey: n
}) {
  let l = useDispatch<AppDispatch>();
  let i = useSelector(e => e.canvasSearch.filters);
  let s = t === EditAction.FIND ? D4 : IM;
  let o = _$$b();
  let d = mapFilter(s, e => i[e] ? jsx(eg, {
    option: e,
    onClose: () => {
      l(toggleCanvasSearchCategoryFilter(e));
    },
    recordingKey: n
  }, e) : null);
  return 0 === d.length ? null : jsx("div", {
    className: N()(VS, {
      [JE]: e,
      [oZ]: o
    }),
    children: d
  });
}
function eg({
  option: e,
  onClose: t,
  recordingKey: n
}) {
  return jsxs("div", {
    className: WP,
    children: [p9(e), jsx(ButtonPrimitive, {
      className: _0,
      onClick: t,
      "aria-label": getI18nString("canvas_search.filter.remove"),
      "aria-describedby": p9(e),
      recordingKey: generateRecordingKey(n, NodeType[e], "remove"),
      children: jsx(_$$f, {})
    })]
  });
}
function eL(e, t = !1) {
  if (t || shouldHandleKeyEvent(e, KeyboardEventResponse.YES)) {
    let t = forwardKeyboardEvent(e);
    t && e.stopPropagation();
    return t;
  }
  return !1;
}
function eR(e, t, n, a) {
  let i = II();
  let o = function () {
    let e = useNavigateToViewport("canvas_search_navigate");
    let t = useSelector(e => e.canvasSearch.scope);
    let n = trackFileEventWithUser();
    let a = useContext(EA);
    let i = useCallback(() => {
      n("canvas_search_multi_hierarchy", {
        order: "down"
      });
      CanvasSearchHelpers && e(CanvasSearchHelpers.moveActiveResultsDownOneLevelAndGetViewportSettings(), {
        additionalTrackEventParams: {
          searchScope: PageViewMode[t]
        }
      });
    }, [e, t, n]);
    return a ? i : noop;
  }();
  let d = function () {
    let e = useNavigateToViewport("canvas_search_navigate");
    let t = useSelector(e => e.canvasSearch.scope);
    let n = trackFileEventWithUser();
    let a = useContext(EA);
    let i = useCallback(() => {
      n("canvas_search_multi_hierarchy", {
        order: "up"
      });
      CanvasSearchHelpers && e(CanvasSearchHelpers.moveActiveResultsUpOneLevelAndGetViewportSettings(), {
        additionalTrackEventParams: {
          searchScope: PageViewMode[t]
        }
      });
    }, [e, t, n]);
    return a ? i : noop;
  }();
  let c = useContext(EA);
  return useCallback(l => {
    switch (c ? isCommandEvent(l) && !l.shiftKey ? a(en.SINGLE) : l.shiftKey ? a(en.MULTI) : a(en.NONE) : a(en.NONE), l.keyCode) {
      case KeyCodes.P:
      case KeyCodes.UP_ARROW:
        (l.keyCode !== KeyCodes.P || BrowserInfo.mac && isExactModifier(l, ModifierKeyCodes.CONTROL)) && (e(OP.PREV, "keyboard"), l.stopPropagation(), l.preventDefault());
        break;
      case KeyCodes.N:
      case KeyCodes.DOWN_ARROW:
        (l.keyCode !== KeyCodes.N || BrowserInfo.mac && isExactModifier(l, ModifierKeyCodes.CONTROL)) && (e(OP.NEXT, "keyboard"), l.stopPropagation(), l.preventDefault());
        break;
      case KeyCodes.ENTER:
        if (CanvasSearchHelpers && isCommandEvent(l)) {
          CanvasSearchHelpers.exitSearchMode(SelectionState.SELECT_ACTIVE);
          break;
        }
        if (i()) break;
        l.shiftKey ? t ? d() : e(OP.PREV, "keyboard") : t ? o() : e(OP.NEXT, "keyboard");
        l.stopPropagation();
        l.preventDefault();
        break;
      case KeyCodes.ESCAPE:
        CanvasSearchHelpers && CanvasSearchHelpers.exitSearchMode(SelectionState.NONE);
        l.preventDefault();
        l.stopPropagation();
        break;
      default:
        n(l);
    }
  }, [c, a, i, n, e, t, d, o]);
}
function eD(e) {
  return useCallback(t => {
    if (t.keyCode === KeyCodes.SHIFT) {
      (!BrowserInfo.mac || t.metaKey) && (BrowserInfo.mac || t.ctrlKey) || e(en.NONE);
      return;
    }
    let n = BrowserInfo.mac && "Meta" === t.key;
    let a = !BrowserInfo.mac && t.keyCode === KeyCodes.CTRL;
    (n || a) && !t.shiftKey && e(en.NONE);
  }, [e]);
}
function eO(e) {
  switch (e.keyCode) {
    case KeyCodes.DELETE:
    case KeyCodes.BACKSPACE:
      if (CanvasSearchHelpers) return CanvasSearchHelpers.getNextResultForActiveResultRemoval();
      break;
    case KeyCodes.X:
      if (isCommandModifier(e) && CanvasSearchHelpers) return CanvasSearchHelpers.getNextResultForActiveResultRemoval();
      break;
    case KeyCodes.H:
    case KeyCodes.R:
      if (isCommandEvent(e) && e.shiftKey && CanvasSearchHelpers) return CanvasSearchHelpers.getNextResultForActiveResultRemoval();
  }
  return defaultSessionLocalIDString;
}
export let $$eF0 = memo(function ({
  showFilter: e
}) {
  let {
    query,
    resultsOnOtherPages,
    next,
    exit,
    setNavigateNearestOnce,
    search,
    showSearch,
    mode,
    isLoading,
    allInstancesExpanded,
    missingResultsOnSomePages
  } = SQ();
  let [y, C] = useState("");
  let {
    focusedByButtons,
    inputRef
  } = CT();
  let L = useRef(null);
  let R = useIsSelectedViewFullscreenCooper();
  let j = useNavigateToViewport("canvas_search_navigate");
  let w = useAtomWithSubscription(elementsMapAtom);
  let P = useAtomWithSubscription(elementsSetAtom);
  let M = useContext(EA);
  let z = useAtomWithSubscription(el);
  let [U, V] = useState(null);
  let [$, W] = useState(en.NONE);
  let [q, Z] = useState(!1);
  useLayoutEffect(() => {
    if (M) {
      if (P.size > 1 || w.size > 1) {
        Z(!0);
        return;
      }
      for (let e of w.values()) e.size > 1 && Z(!0);
    }
  }, [w, M, P]);
  let J = (e, t) => {
    Z(!1);
    next(e, t);
  };
  let Q = function (e, t, n) {
    if (!n) return !1;
    if (t.size > 1 || e.size > 1) return !0;
    for (let t of e.values()) return t.size > 1;
    return !1;
  }(w, P, M);
  let ee = function (e, t, n, a, r) {
    let i = eR(e, n, e => {
      let n = (e.keyCode === KeyCodes.D || e.keyCode === KeyCodes.F) && isCommandEvent(e) && e.shiftKey;
      eL(e) && !n && t.current?.focus();
    }, r);
    return useCallback(e => {
      let l = eO(e);
      switch (e.keyCode) {
        case KeyCodes.RIGHT_ARROW:
        case KeyCodes.LEFT_ARROW:
          isCommandModifier(e) || i(e);
          break;
        case KeyCodes.C:
        case KeyCodes.X:
          isCommandModifier(e) && window.getSelection && !window.getSelection().toString() && (fullscreenValue.triggerAction(e.keyCode === KeyCodes.C ? "copy" : "cut"), e.preventDefault(), e.stopPropagation(), e.keyCode === KeyCodes.X && t.current?.focus());
          break;
        case KeyCodes.V:
        case KeyCodes.Z:
          break;
        default:
          i(e);
      }
      CanvasSearchHelpers && !n && l !== defaultSessionLocalIDString && a(CanvasSearchHelpers.setActiveResultAndGetViewportSettings(l, 0), {
        delay: 300
      });
    }, [n, i, t, a]);
  }(J, L, Q, j, W);
  let et = eD(W);
  A5(inputRef, next, focusedByButtons);
  let er = aH();
  let ei = _$$b();
  if (!showSearch) return null;
  let es = jsxs(Fragment, {
    children: [jsx("div", {
      className: N()(v9, {
        [_$$ei]: "" === query
      }),
      children: jsx(_$$h, {})
    }), jsx(ih, {
      onChange: e => {
        Z(!1);
        search(e);
      },
      query,
      focusedByButtons,
      onKeyDown: ee,
      onKeyUp: et,
      innerRef: inputRef,
      onPasteCapture: e => {
        gk(e) && (fullscreenValue.triggerActionInUserEditScope("paste"), e.preventDefault(), L.current?.focus());
      },
      editorType: FileKindEnum.DESIGN
    })]
  });
  return jsx(TabLoop, {
    children: jsxs("div", {
      "data-testid": "search-sidebar",
      className: G$,
      onBlurCapture: e => {
        e.relatedTarget && !e.currentTarget.contains(e.relatedTarget) && (CanvasSearchHelpers.setOverlayVisible(!1), setNavigateNearestOnce(), W(en.NONE));
      },
      children: [jsxs("div", {
        className: PP,
        children: [jsxs("div", {
          className: N()(Wv, ei && Fn),
          children: [jsx("div", {
            className: Z9,
            children: es
          }), e && jsx(Od, {
            lean: I_.RIGHT,
            shouldShowSearchCategories: !R,
            minWidth: getFeatureFlags().eu_fpl_migration_search_settings_menu ? 156 : void 0,
            recordingKey: "figma_design_search"
          }), jsx(IconButton, {
            onClick: e => {
              exit();
              er(e);
            },
            "aria-label": getI18nString("canvas_search.close"),
            recordingKey: "figma_design_search.close",
            htmlAttributes: {
              "data-tooltip-type": KindEnum.TEXT,
              "data-tooltip": getI18nString("canvas_search.close")
            },
            children: jsx(_$$A, {})
          })]
        }), getFeatureFlags().eu_fpl_search_result_chips && jsx(eh, {
          recordingKey: "figma_design_search.filterChips",
          options: mode === EditAction.FIND ? D4 : IM,
          short: mode === EditAction.REPLACE
        }), !getFeatureFlags().eu_fpl_search_result_chips && jsx(ex, {
          mode,
          short: mode === EditAction.REPLACE,
          recordingKey: "figma_design_search.filterPills"
        }), mode === EditAction.REPLACE && jsx(_$$a, {
          query,
          value: y,
          onChange: C,
          onFocus: (e, n) => {
            !query && n && inputRef.current?.focus();
          },
          hasMultipleSelections: Q,
          recordingKey: "figma_design_search"
        })]
      }), isLoading || z ? jsx("div", {
        className: N()(_$$S, dz),
        children: jsx(ImageBackedLoading, {
          size: "medium",
          testId: "canvas-search-loading-spinner"
        })
      }) : query && !isWhitespace(query) && jsx(eM, {
        allInstancesExpanded,
        hasMultipleSelections: Q,
        hoverSelectMode: $,
        hoveredResult: U,
        isInMultiselectMode: q,
        missingResultsOnSomePages,
        navigate: j,
        onNext: J,
        replacement: mode === EditAction.REPLACE ? y : void 0,
        resultInputHandlerRef: L,
        resultsOnOtherPages,
        setHoverSelectMode: W,
        setHoveredResult: V,
        setIsInMultiselectMode: Z
      })]
    })
  });
});
function eM({
  onNext: e,
  navigate: t,
  replacement: n,
  resultsOnOtherPages: o,
  resultInputHandlerRef: u,
  hoveredResult: p,
  hasMultipleSelections: h,
  isInMultiselectMode: m,
  missingResultsOnSomePages: f,
  hoverSelectMode: I,
  setIsInMultiselectMode: C,
  setHoverSelectMode: S,
  setHoveredResult: T,
  allInstancesExpanded: R
}) {
  let D = useDispatch<AppDispatch>();
  let j = WB();
  let k = II();
  let P = useAppModelProperty("currentPage");
  let M = useRef(null);
  let B = useSelector(e => e.canvasSearch.scope);
  let U = CanvasSearchHelpers.hasDirtyPrimaryInstances();
  let K = useAtomWithSubscription(counterAtom);
  let V = useAtomWithSubscription(currentSelectionAtom);
  let W = useAtomWithSubscription(elementsMapAtom);
  let Y = useAtomWithSubscription(elementsSetAtom);
  let q = useAtomWithSubscription(anotherElementsSetAtom);
  let Z = useContext(EA);
  let J = !m;
  let Q = null == n;
  let ee = L4();
  let el = function (e, t) {
    let n = useNavigateToViewport("canvas_search_navigate");
    let a = useSelector(e => e.canvasSearch.scope);
    let i = trackFileEventWithUser();
    let o = useContext(EA);
    let d = useCallback(l => {
      if (!CanvasSearchHelpers) return;
      let {
        nav,
        numNewNodes,
        numNewTextMatches
      } = CanvasSearchHelpers.addActiveResultsAndGetViewportSettings(l);
      e && i("canvas_search_enter_multi_select", {
        numberOfNodes: numNewNodes,
        numberOfTextMatches: numNewTextMatches,
        source: "shift+click",
        mode: t ? "find" : "replace"
      });
      n(nav, {
        additionalTrackEventParams: {
          searchScope: PageViewMode[a]
        }
      });
    }, [t, n, a, i, e]);
    return o ? d : noop;
  }(J, Q);
  let er = function () {
    let e = useNavigateToViewport("canvas_search_navigate");
    let t = useSelector(e => e.canvasSearch.scope);
    let n = useContext(EA);
    let a = useCallback((n, a, l) => {
      CanvasSearchHelpers && e(CanvasSearchHelpers.removeActiveResultAndGetViewportSettings(n, a, l), {
        additionalTrackEventParams: {
          searchScope: PageViewMode[t]
        }
      });
    }, [e, t]);
    return n ? a : noop;
  }();
  let [ei, es] = function (...e) {
    let [t, n] = useState(() => e.reduce((e, t) => (e[t] = !0, e), {}));
    return [t, useCallback((e, t = !0) => {
      n(n => n[e] !== t ? {
        ...n,
        [e]: t
      } : n);
    }, [])];
  }(zeroSessionLocalIDString, P);
  let eo = useRef({});
  let ed = useMemo(() => {
    let e = [];
    let t = j.find(e => e.pageId === zeroSessionLocalIDString);
    let n = B === PageViewMode.ALL_PAGES || !!t;
    let a = j.find(e => e.pageId === P);
    let l = j;
    B === PageViewMode.ACTIVE_PAGE && (l = [], t && l.push(t), a && l.push(a));
    let r = 0;
    for (let {
      pageId,
      results
    } of (eo.current = {}, l)) {
      if (0 === results.length) continue;
      let l = !!ei[pageId];
      if (n && (e.push({
        type: "header",
        data: {
          pageId,
          open: l,
          numResults: results.reduce((e, t) => e += t.textMatches.length, 0)
        }
      }), ++r), n && !l) continue;
      eo.current[pageId] = r;
      let i = 0;
      for (let n of results) {
        let {
          textMatches,
          ...l
        } = n;
        textMatches.forEach((n, a) => {
          e.push({
            type: "result",
            data: {
              ...l,
              matchIndex: a,
              textMatch: n,
              index: i,
              pageId
            }
          });
          ++i;
          ++r;
        });
      }
    }
    return e;
  }, [P, ei, B, j]);
  useEffect(() => {
    null != V && es(V.pageId);
  }, [V, es]);
  let ec = _$$z({
    size: ed.length,
    parentRef: M,
    overscan: 10
  });
  let eu = e => {
    if (null == V || null == V.index) return [];
    let t = eo.current[V.pageId];
    if (null == t) return [];
    let n = t + V.index;
    if (n === e) return [];
    let a = [];
    let l = Math.min(n, e);
    let r = Math.max(n, e);
    if ("header" === ed[e].type) return a;
    for (let e = l; e <= r; e++) "result" === ed[e].type && a.push(ed[e].data);
    return a;
  };
  let eh = useCallback(e => !!Z && "header" !== e.type && (!!m || I !== en.NONE) && (e.data.textMatch.matchType === MatchCriteria.TEXT_MATCH && Y.has(e.data.resultGuid) && !W.has(e.data.resultGuid) || q.has(e.data.resultGuid)), [W, Z, Y, I, q, m]);
  let em = useCallback(e => "header" !== e.type && (Z ? e.data.textMatch.matchType === MatchCriteria.PAGE_MATCH ? e.data.index === V?.index && e.data.pageId === V?.pageId : e.data.textMatch.matchType === MatchCriteria.LAYER_MATCH ? Y.has(e.data.resultGuid) && !W.get(e.data.resultGuid) : W.get(e.data.resultGuid)?.has(e.data.matchIndex) ?? !1 : e.data.index === V?.index && e.data.pageId === V?.pageId), [V?.index, V?.pageId, W, Z, Y]);
  let e_ = useCallback((e, t, n) => {
    let a = e + n;
    let l = t + n;
    let r = e => "result" === e.type && (em(e) || eh(e));
    for (; a > 0 && a <= ed.length && r(ed[a - 1]);) a -= 1;
    for (; l < ed.length && r(ed[l]);) l += 1;
    return [a - n, l - n];
  }, [eh, em, ed]);
  let eE = useCallback((e, t) => {
    if (e + t >= ed.length) return !1;
    let n = ed[e + t];
    return !em(n) && !eh(n);
  }, [eh, em, ed]);
  let ex = useCallback((e, t, n) => {
    let a = !1;
    for (let l = e; l <= t && !(l + n >= ed.length); l += 1) {
      let e = ed[l + n];
      if (!em(e) && !eh(e)) {
        a = !0;
        break;
      }
    }
    return a;
  }, [eh, em, ed]);
  let [eg, ef] = useMemo(() => {
    let e = p?.nodeGuid ?? defaultSessionLocalIDString;
    let t = V?.pageId != null ? eo.current[V.pageId] : null;
    if (Z && I !== en.NONE && p && e !== defaultSessionLocalIDString && p.pageId === V?.pageId && null != t) {
      let n = p.index;
      let a = p.matchIndex;
      if ((I === en.SINGLE || V?.index == null) && eE(n, t)) return [n, CanvasSearchHelpers.getSingleHoveredSelectionEndIndex(e, a)];
      if (I === en.MULTI && V?.index != null && V.index !== p.index) {
        let l = n > V.index ? V.index : n;
        return ex(l, n > V.index ? n : V.index, t) ? e_(l, CanvasSearchHelpers.getMultiHoveredSelectionEndIndex(e, a), t) : [null, null];
      }
    }
    return [null, null];
  }, [V?.index, V?.pageId, Z, e_, I, p, ex, eE]);
  let ev = useCallback(e => !Z || null == eg || null == ef || e < eg || e >= ef ? et.NONE : e === eg && e === ef - 1 ? et.ALL : e === eg ? et.TOP : e === ef - 1 ? et.BOTTOM : et.MIDDLE, [Z, eg, ef]);
  let eN = _$$$(V);
  useEffect(() => {
    if (m || I !== en.NONE || null == V || null == V.index || 0 === ed.length || !eN) return;
    let e = eo.current[V.pageId];
    if (null == e) return;
    let t = e + V.index;
    let n = t >= ec.virtualItems[0].index && t <= ec.virtualItems[ec.virtualItems.length - 1].index;
    let a = !1;
    if (n) {
      let e = ec.virtualItems.find(e => e.index === t);
      if (e) {
        let {
          start,
          size
        } = e;
        a = function (e, t) {
          if (!t) return !0;
          let n = t.scrollTop;
          let a = n + t.clientHeight;
          return e.top >= n && e.bottom <= a;
        }({
          top: start,
          bottom: start + size
        }, M.current);
      }
    }
    a || U || ec.scrollToIndex(t, {
      align: "center"
    });
  }, [V, eN, u, m, ed, U, ec, I]);
  let eb = (e, t, n, a) => {
    let l = () => {
      a ? er(t.resultGuid, t.matchIndex, t.textMatch.matchType) : el([{
        nodeId: t.resultGuid,
        matchIndices: [t.matchIndex],
        searchResultType: t.textMatch.matchType
      }]);
    };
    t.pageId === zeroSessionLocalIDString ? (k(t.guid), es(t.guid), C(!1)) : Z && t.pageId === V?.pageId ? e.shiftKey && V?.index == null ? (a || l(), C(!0)) : e.shiftKey ? ((() => {
      let e = eu(n);
      let t = [];
      e.forEach(e => {
        let n = t.length ? t[t.length - 1] : void 0;
        n?.nodeId === e.resultGuid && n?.searchResultType === MatchCriteria.TEXT_MATCH ? n.matchIndices.push(e.matchIndex) : t.push({
          nodeId: e.resultGuid,
          matchIndices: [e.matchIndex],
          searchResultType: e.textMatch.matchType
        });
      });
      el(t);
    })(), C(!0)) : isCommandEvent(e) && t.textMatch.matchType !== MatchCriteria.PAGE_MATCH ? (l(), C(!0)) : (ee(t.resultGuid, t.matchIndex), C(!1)) : (ee(t.resultGuid, t.matchIndex), C(!1));
  };
  let eC = function (e, t, n, a, i, o, d) {
    let c = function (e, t) {
      let n = useNavigateToViewport("canvas_search_navigate");
      let a = useSelector(e => e.canvasSearch.scope);
      let i = trackFileEventWithUser();
      let o = useContext(EA);
      let d = useCallback(() => {
        if (!CanvasSearchHelpers) return;
        let {
          nav,
          numNewNodes,
          numNewTextMatches
        } = CanvasSearchHelpers.setAllResultsAsActiveAndGetViewportSettings();
        e && i("canvas_search_enter_multi_select", {
          numberOfNodes: numNewNodes,
          numberOfTextMatches: numNewTextMatches,
          source: "cmd/ctrl+A",
          mode: t ? "find" : "replace"
        });
        n(nav, {
          additionalTrackEventParams: {
            searchScope: PageViewMode[a]
          }
        });
      }, [t, n, a, i, e]);
      return o ? d : noop;
    }(n, a);
    let u = useContext(EA);
    let p = eR(e, i, eL, o);
    return useCallback(e => {
      let n = eO(e);
      switch (e.keyCode) {
        case KeyCodes.UP_ARROW:
        case KeyCodes.DOWN_ARROW:
        case KeyCodes.RIGHT_ARROW:
        case KeyCodes.LEFT_ARROW:
          i ? (!function () {
            let e = document.getElementById("fullscreen-root")?.getElementsByClassName("focus-target");
            if (null != e && 0 !== e.length) {
              for (let t of e) if (t.hasAttribute("readonly") && "application" === t.getAttribute("role")) {
                t?.focus();
                break;
              }
            }
          }(), eL(e, !0)) : p(e);
          break;
        case KeyCodes.A:
          if (u && isCommandModifier(e)) {
            c();
            d(!0);
            e.stopPropagation();
            e.preventDefault();
            break;
          }
          eL(e);
          break;
        case KeyCodes.C:
          isCommandModifier(e) ? (fullscreenValue.triggerActionInUserEditScope("copy"), e.stopPropagation()) : eL(e);
          break;
        case KeyCodes.V:
          isCommandModifier(e) ? (fullscreenValue.triggerActionInUserEditScope("paste"), e.stopPropagation()) : eL(e);
          break;
        case KeyCodes.X:
          isCommandModifier(e) ? (fullscreenValue.triggerActionInUserEditScope("cut"), e.stopPropagation()) : eL(e);
          break;
        case KeyCodes.DELETE:
        case KeyCodes.BACKSPACE:
          eL(e, !0);
          break;
        default:
          p(e);
      }
      CanvasSearchHelpers && !i && n !== defaultSessionLocalIDString && t(CanvasSearchHelpers.setActiveResultAndGetViewportSettings(n, 0), {
        delay: 300
      });
    }, [i, u, p, c, d, t]);
  }(e, t, J, Q, h, S, C);
  let eT = eD(S);
  let ej = useSetAtom(genericAtomFamily1);
  return jsxs("div", {
    className: sb,
    children: [jsxs("div", {
      className: Jo,
      children: [jsx(eB, {
        totalOnActivePage: K.total,
        resultsOnOtherPages: o,
        allInstancesExpanded: R
      }), 0 !== ed.length && jsxs(Fragment, {
        children: [jsx(IconButton, {
          onClick: t => {
            e(OP.PREV, "button");
          },
          "aria-label": getI18nString("canvas_search.previous"),
          recordingKey: "figma_design_search.previous",
          disabled: K.total <= 1,
          htmlAttributes: {
            "data-tooltip-type": KindEnum.TEXT,
            "data-tooltip": getI18nString("canvas_search.previous"),
            "data-tooltip-shortcut-key": "canvas-search-prev"
          },
          children: jsx(_$$l, {})
        }), jsx(IconButton, {
          onClick: t => {
            e(OP.NEXT, "button");
          },
          "aria-label": getI18nString("canvas_search.next"),
          recordingKey: "figma_design_search.next",
          disabled: K.total <= 1,
          htmlAttributes: {
            "data-tooltip-type": KindEnum.TEXT,
            "data-tooltip": getI18nString("canvas_search.next"),
            "data-tooltip-shortcut-key": "canvas-search-next"
          },
          children: jsx(_$$k, {})
        })]
      })]
    }), jsxs(RecordingScrollContainer, {
      className: bB,
      scrollContainerRef: M,
      children: [jsx(RecordableDiv, {
        style: {
          height: ec.totalSize,
          position: "relative"
        },
        tabIndex: 0,
        role: "listbox",
        recordingKey: "figma_design_search.results_list",
        onKeyDown: eC,
        onKeyUp: eT,
        forwardedRef: u,
        children: ec.virtualItems.map(e => {
          let t = ed[e.index];
          if (!t) return null;
          let l = em(t);
          let r = "result" === t.type && t.data.pageId === V?.pageId ? ev(t.data.index) : et.NONE;
          return jsx("div", {
            ref: e.measureRef,
            className: N()({
              [_$$T2]: r === et.TOP,
              [fz]: r === et.MIDDLE,
              [Nf]: r === et.BOTTOM,
              [HR]: (I === en.SINGLE || V?.index == null) && p?.isPurple
            }),
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              transform: `translateY(${e.start}px)`
            },
            children: "header" === t.type ? jsx(ez, {
              ...t.data,
              setOpen: e => es(t.data.pageId, e)
            }) : jsx(eG, {
              activePageId: V?.pageId,
              hasMultipleSelections: h,
              indirectlySelected: eh(t),
              isInHoveredSelectMode: I !== en.NONE && !!p,
              isInMultiselectMode: m,
              onDoubleClick: () => {
                ej(void 0);
                CanvasSearchHelpers.exitSearchMode(SelectionState.SELECT_ACTIVE);
              },
              onSelect: n => eb(n, t.data, e.index, l),
              replacement: n,
              result: t.data,
              resultInputHandlerRef: u,
              selected: l,
              setHoveredResult: T,
              singletonHoverSelected: r === et.ALL
            })
          }, "header" === t.type ? t.data.pageId : `${t.data.pageId}#${t.data.index}`);
        })
      }), U && jsx("div", {
        className: _$$S,
        children: jsx(ImageBackedLoading, {
          size: "medium"
        })
      }), o && B === PageViewMode.ACTIVE_PAGE && jsx(ButtonPrimitive, {
        recordingKey: "figma_design_search.other_pages_button",
        className: N()(fp, AX),
        onClick: () => {
          D(setCanvasSearchScope(PageViewMode.ALL_PAGES));
        },
        children: renderI18nText("canvas_search.results_other_pages")
      }), f && B === PageViewMode.ALL_PAGES && jsx("div", {
        className: du,
        children: renderI18nText("canvas_search.results_unavailable_offline")
      })]
    })]
  });
}
function eB({
  totalOnActivePage: e,
  resultsOnOtherPages: t,
  allInstancesExpanded: n
}) {
  let l = useIsFullscreenSlidesView();
  let i = useIsFullscreenSitesView();
  let s = useIsSelectedViewFullscreenCooper();
  let o = useSelector(e => e.mirror.appModel.pagesList);
  let d = "";
  d = 0 === e ? hasNotLoaded(o) || !n ? l ? getI18nString("canvas_search.no_results_in_this_deck") : i ? getI18nString("canvas_search.no_results_on_site") : s ? getI18nString("canvas_search.no_results_in_buzz_file") : getI18nString("canvas_search.no_results_on_page") : t ? getI18nString("canvas_search.no_results") : getI18nString("canvas_search.no_results_in_file") : getI18nString("canvas_search.results_count", {
    total: e
  });
  let c = (!l && !i && !s || getFeatureFlags().interop_pages) && (e > 0 || t || hasNotLoaded(o) || !n);
  return jsxs("div", {
    className: _M,
    children: [jsx(AnnouncementPrimitive, {
      "data-testid": "canvas-search-info",
      className: qp,
      role: e > 0 ? "status" : "alert",
      children: d
    }), c && jsxs(Fragment, {
      children: [jsx("span", {
        className: hY,
        children: "\xb7"
      }), jsx(er, {
        allInstancesExpanded: n
      })]
    })]
  });
}
function ez({
  pageId: e,
  open: t,
  setOpen: n,
  numResults: l
}) {
  let r = useSceneGraphSelector().get(e);
  let i = e === zeroSessionLocalIDString ? getI18nString("fullscreen.canvas_search.pages") : r.name;
  return jsxs(RecordableButton, {
    className: kQ,
    onClick: () => n(!t),
    children: [jsx(SvgComponent, {
      className: _$$eO,
      svg: t ? _$$A2 : _$$A3
    }), jsx("span", {
      className: rB,
      children: i
    }), jsx("span", {
      className: hs,
      children: l
    })]
  });
}
function eG({
  result: e,
  replacement: t,
  activePageId: n,
  resultInputHandlerRef: l,
  selected: i,
  indirectlySelected: o,
  singletonHoverSelected: d,
  onSelect: c,
  onDoubleClick: u,
  isInMultiselectMode: p,
  isInHoveredSelectMode: h,
  hasMultipleSelections: m,
  setHoveredResult: _
}) {
  let E = useSceneGraphSelector();
  let f = useAppModelProperty("currentPage");
  let v = e.textMatch.matchType === MatchCriteria.TEXT_MATCH;
  let I = null != t && v && (E.get(e.guid)?.hasMissingFont || !1);
  let y = !yZ();
  let b = useSelector(e => e.mirror.appModel.pagesList);
  let R = y && e.textMatch.matchType === MatchCriteria.PAGE_MATCH && Multiplayer.isIncrementalSession() && getNodeStatus(b, e.resultGuid) !== DataLoadStatus.LOADED;
  let D = useDispatch<AppDispatch>();
  let O = N()(V3, {
    [HR]: e.isPurple,
    [wH]: i,
    [r9]: R
  });
  let j = jsx(Bf, {
    className: O,
    guid: e.guid
  });
  I ? j = jsx("div", {
    className: v9 + " " + O,
    children: jsx(SvgComponent, {
      svg: _$$A6
    })
  }) : e.guid === f && (j = jsx("div", {
    className: v9 + " " + O,
    children: jsx(SvgComponent, {
      svg: _$$A4
    })
  }));
  return jsxs(RecordableButton, {
    className: N()({
      [AX]: !0,
      [wH]: i,
      [Xt]: !i && o,
      [rX]: d,
      [Dw]: h,
      [HR]: e.isPurple,
      [r9]: R
    }),
    onMouseDown: e => {
      e.preventDefault();
    },
    onClick: t => {
      R ? D(VisualBellActions.enqueue({
        type: "offline-page-switch",
        message: getI18nString("fullscreen.pages_panel.unavailable_offline")
      })) : (l.current?.focus(), p || !i || (BrowserInfo.mac ? t.metaKey : t.ctrlKey) || e.textMatch.matchType === MatchCriteria.PAGE_MATCH ? c(t) : m || CanvasSearchHelpers.setOverlayVisible(!0));
      t.preventDefault();
      t.stopPropagation();
    },
    onDoubleClick: p || R ? noop : u,
    onMouseEnter: () => {
      e.pageId === zeroSessionLocalIDString || e.pageId !== n ? _(null) : _({
        nodeGuid: e.resultGuid,
        pageId: e.pageId,
        index: e.index,
        matchIndex: e.matchIndex,
        isPurple: e.isPurple
      });
      v ? CanvasSearchHelpers.setHoveredResult(e.resultGuid, e.matchIndex) : e.textMatch.matchType === MatchCriteria.LAYER_MATCH && updateHoveredNode(e.resultGuid);
    },
    onMouseLeave: () => {
      updateHoveredNode("");
      _(null);
      CanvasSearchHelpers.setHoveredResult(defaultSessionLocalIDString, -1);
    },
    recordingKey: generateRecordingKey("figma_design_search", "result", e.pageId, e.index),
    children: [jsx("div", {
      className: _P,
      children: j
    }), jsx("div", {
      className: N()(D6, {
        [c1]: v
      }),
      children: e.textContent && v ? jsx(eK, {
        text: e.textContent,
        match: e.textMatch,
        replacement: I ? void 0 : t,
        multiline: !0
      }) : jsx(eU, {
        result: e
      })
    }), R && jsx("div", {
      className: QF,
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip": getI18nString("fullscreen.pages_panel.unavailable_offline"),
      "data-onboarding-key": "page-unavailable-offline",
      children: jsx(SvgComponent, {
        className: VQ,
        svg: _$$A5
      })
    })]
  });
}
function eU({
  result: e
}) {
  let {
    query
  } = useSelector(e => e.canvasSearch);
  let n = e.name && e.stateGroupName ? _$$w(e.name) : e.name;
  if (!n) return null;
  let l = e.stateGroupName || e.containerName;
  let i = -1;
  e.textContent && (n = e.textContent, i = e.name?.toLowerCase().indexOf(query) ?? -1, l = e.name);
  let s = n.toLowerCase().indexOf(query) ?? -1;
  return jsxs("div", {
    children: [n && s > -1 ? jsx(eK, {
      text: n,
      match: {
        start: s,
        end: s + query.length,
        matchType: MatchCriteria.LAYER_MATCH
      },
      multiline: !0
    }) : jsx(ph, {
      text: n
    }), l && jsx("div", {
      className: Gu,
      children: i > -1 ? jsx(eK, {
        text: l,
        match: {
          start: i,
          end: i + query.length,
          matchType: MatchCriteria.LAYER_MATCH
        }
      }) : jsx(ph, {
        text: l
      })
    })]
  });
}
function eK({
  text: e,
  match: t,
  replacement: n,
  multiline: r
}) {
  let [i, s] = useState(e);
  let [o, d] = useState(!1);
  useEffect(() => {
    s(e);
  }, [e]);
  useEffect(() => {
    if (!o || i !== e) return;
    let n = t.start;
    let a = 0;
    for (let t = n - 1; t >= 0; --t) if (/\s/.test(e[t]) && a++, 3 === a) {
      n = t;
      break;
    }
    a < 3 && (n = 0);
    s(e.slice(n));
  }, [o, i, e, t.start]);
  let c = useMemo(() => jsx(eH, {
    text: i,
    replacement: n,
    fullString: e,
    match: t
  }), [i, t, n, e]);
  return jsx(ph, {
    className: r ? c1 : "",
    text: c,
    multiline: r,
    onTruncationChange: d
  });
}
function eH({
  text: e,
  replacement: t,
  fullString: n,
  match: l
}) {
  let r = 0;
  n && e !== n && (r = n.length - e.length);
  let i = l.start - r;
  let s = l.end - r;
  let o = e.substring(0, i);
  let d = e.substring(i, s);
  let c = e.substring(s);
  if (t && d.toLocaleLowerCase() !== t.toLocaleLowerCase()) {
    let e = _$$r.detectTextTransform(d);
    t = _$$r.applyTextTransform(t, e);
  }
  return jsxs(Fragment, {
    children: [r ? "\u2026" : "", o, t ? jsxs(Fragment, {
      children: [jsx(ScreenReaderOnly, {
        children: renderI18nText("canvas_search.original_replace_value")
      }), jsx("span", {
        className: of,
        children: jsx("s", {
          children: d
        })
      }), jsx(ScreenReaderOnly, {
        children: renderI18nText("canvas_search.updated_replace_value")
      }), jsx("b", {
        children: t
      })]
    }) : jsx("b", {
      children: d
    }), c]
  });
}
export const f = $$eF0;