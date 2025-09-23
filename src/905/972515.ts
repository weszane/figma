import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { createContext, useState, useCallback, forwardRef, useEffect, useContext, useMemo, memo, useId, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { throwTypeError } from "../figma_app/465776";
import { deepEqual } from "../905/382883";
import { lQ } from "../905/934246";
import { k as _$$k } from "../905/443820";
import { Checkbox } from "../905/274480";
import { Label, HiddenLabel } from "../905/270045";
import { ManuallyLabeledCheckbox } from "../905/909715";
import { getFeatureFlags } from "../905/601108";
import g from "classnames";
import { n as _$$n } from "../vendor/547481";
import { useDebouncedCallback } from "use-debounce";
import { trackEventAnalytics, analyticsEventManager } from "../905/449184";
import { parsePxInt } from "../figma_app/783094";
import { h as _$$h2, $ as _$$$ } from "../905/455748";
import { h as _$$h3 } from "../905/207101";
import { useHandleMouseEvent, generateRecordingKey } from "../figma_app/878298";
import { selectExperimentConfigHook, getExperimentConfigAsync } from "../figma_app/594947";
import { generateUUIDv4 } from "../905/871474";
import { P as _$$P } from "../905/347284";
import { IW } from "../figma_app/563413";
import { renderI18nText } from "../905/303541";
import { styleBuilderInstance } from "../905/941192";
import { LR } from "../figma_app/120210";
import { selectOpenFile } from "../figma_app/516028";
import { B0 } from "../figma_app/807786";
import { useCurrentPublicPlan } from "../figma_app/465071";
import { useSubscribedLibraries } from "../figma_app/155728";
import { useUUIDSubscription } from "../figma_app/517115";
import { rp } from "../figma_app/703988";
import { Bx, Wu } from "../905/221848";
import { S as _$$S2 } from "../905/459477";
import { Pk } from "../905/893698";
import { Nv } from "../figma_app/318590";
import { Kr } from "../figma_app/201703";
import { Zl, TQ } from "../905/211621";
import { vdd, NLQ, Ies, bH0 } from "../figma_app/27776";
import { dP, M3 } from "../figma_app/119475";
import { vq } from "../905/8732";
import { ButtonPrimitive } from "../905/632989";
import { ph } from "../figma_app/709893";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { Qx } from "../figma_app/8833";
import { colorCSSManipulatorInstance } from "../905/989956";
import { getVisibleTheme } from "../905/640017";
import { jr } from "../figma_app/896988";
import { ThemeContext, getThemeBorderStyle } from "../905/187165";
import { KindEnum } from "../905/129884";
import { C as _$$C } from "../905/520159";
import { R as _$$R } from "../905/307199";
import { MB } from "../figma_app/525558";
import { n as _$$n2 } from "../905/913636";
import { x as _$$x } from "../905/505155";
import { V as _$$V } from "../figma_app/473391";
import { V as _$$V2 } from "../905/546897";
var n;
var f = g;
let H = parsePxInt(vdd);
let W = parsePxInt(NLQ);
let K = parsePxInt(Ies);
let Y = {
  listItemHeight: H,
  leafListHeight: H,
  subpathListHeight: H,
  subpathGridHeight: H,
  listItemThumbnailStylesOverride: {},
  bottomParentCheckboxRowHeight: 40,
  queryId: {
    current: void 0
  }
};
let q = createContext(Y);
(e => {
  let t;
  let i;
  let n;
  (e => {
    e[e.Search = 0] = "Search";
    e[e.BeforeItems = 1] = "BeforeItems";
    e[e.ParentSubpath = 2] = "ParentSubpath";
    e[e.ScrollContainer = 3] = "ScrollContainer";
    e[e.MultiselectParentCheckbox = 4] = "MultiselectParentCheckbox";
  })(t || (t = {}));
  (e => {
    e[e.Leaves = 0] = "Leaves";
    e[e.Subpaths = 1] = "Subpaths";
  })(i || (i = {}));
  (e => {
    e[e.Focus = 0] = "Focus";
    e[e.FauxFocus = 1] = "FauxFocus";
    e[e.Click = 2] = "Click";
  })(n || (n = {}));
  let o = {
    path: [],
    column: void 0
  };
  let l = createContext([o, lQ]);
  e.Provider = function ({
    beforeItemsRefs: e,
    shouldRender: t,
    searchBarRef: i,
    pickerToggleRef: n,
    onDrillup: d,
    onSubpathDrilldown: u,
    indexOfParent: p,
    isSearching: m,
    children: h
  }) {
    let g = useState(o);
    let f = g[1];
    let _ = useSelector(e => e.instanceSwapPickerShown);
    let A = useDispatch();
    let y = useCallback(e => {
      let t = i?.current?.searchInput === document.activeElement;
      if ("I" === e.key && e.shiftKey && !t) {
        e.preventDefault();
        i?.current?.focus();
        return;
      }
      if ("Enter" === e.key && t && m) {
        e.preventDefault();
        f({
          path: [3, 0, 0],
          column: 0,
          action: 2
        });
        return;
      }
      "Escape" === e.key && (A(vq()), _.isShown && _.returnFocusToToggle && n?.current && n.current.focus());
    }, [A, _, m, n, i, f]);
    let b = useCallback(e => {
      if (2 === e.path[0] || 3 === e.path[0]) {
        if (e.column && e.column > 0) return null;
        d();
        f({
          path: [3, 1, p],
          action: 0
        });
      }
      return null;
    }, [p, d, f]);
    let v = useCallback(e => {
      if (1 === e.path[1]) {
        let t = e.id ? e.id.split("-")[1] : void 0;
        t && (u(t), f({
          path: [2],
          action: 0
        }));
      }
      return null;
    }, [u, f]);
    let I = useCallback(e => 0 === e.path[0] && m ? {
      path: [3, 0, 1],
      column: 0
    } : null, [m]);
    return jsxs(dP, {
      onKeyDown: y,
      overrideLeft: b,
      overrideRight: v,
      overrideDown: I,
      allowHorizontalNavigationWhileInputFocused: !0,
      children: [e.map((e, i) => jsx(c, {
        index: i,
        ref: e,
        shouldRender: t
      }, i)), jsx(l.Provider, {
        value: g,
        children: h
      })]
    });
  };
  let c = forwardRef((e, t) => {
    let {
      setKeyboardNavigationElement,
      keyboardNavigationItem
    } = M3({
      path: [1],
      column: e.index
    });
    u(keyboardNavigationItem);
    useEffect(() => {
      t.current && e.shouldRender && setKeyboardNavigationElement(t.current);
    }, [e.shouldRender, t, setKeyboardNavigationElement]);
    return null;
  });
  function u(e) {
    let [{
      path: t,
      column: i,
      action: n
    }, r] = useContext(l);
    useEffect(() => {
      if (e && e.path.join() === t.join() && e.column === (i ?? null) && void 0 !== n) {
        switch (n) {
          case 0:
            e.focus({
              preventScroll: !0
            });
            break;
          case 1:
            e.fauxFocus({
              preventScroll: !0
            });
            break;
          case 2:
            e.simulateClick();
        }
        r(o);
      }
    }, [e, t, i, r, n]);
  }
  e.useKeyboardNavigationItemForSearch = function () {
    let {
      setKeyboardNavigationElement,
      keyboardNavigationItem
    } = M3({
      path: [0],
      id: "search",
      navigationOptions: {
        supportHorizontalNavigation: !1
      }
    });
    u(keyboardNavigationItem);
    return {
      setKeyboardNavigationElement
    };
  };
  e.useKeyboardNavigationItemForParentSubpath = function (e) {
    let {
      setKeyboardNavigationElement,
      keyboardNavigationItem
    } = M3({
      path: [2],
      id: "parentSubpath",
      disabled: e
    });
    u(keyboardNavigationItem);
    return {
      setKeyboardNavigationElement,
      keyboardNavigationItem
    };
  };
  e.useKeyboardNavigationItemForLeaf = function (e, t, i) {
    let {
      row,
      col
    } = useMemo(() => ({
      row: Math.floor(e / t),
      col: e % t
    }), [e, t]);
    let {
      setKeyboardNavigationElement,
      keyboardNavigationItem
    } = M3({
      path: [3, 0, row],
      column: col,
      id: "leaf-" + e,
      disabled: i
    });
    u(keyboardNavigationItem);
    return {
      setKeyboardNavigationElement,
      keyboardNavigationItem
    };
  };
  e.useKeyboardNavigationItemForSubpath = function (e, t, i) {
    let {
      setKeyboardNavigationElement,
      keyboardNavigationItem
    } = M3({
      path: [3, 1, e],
      id: "subpath-" + t,
      disabled: i
    });
    u(keyboardNavigationItem);
    return {
      setKeyboardNavigationElement,
      keyboardNavigationItem
    };
  };
  e.useFocusSubpath = function (e) {
    let [, t] = useContext(l);
    return useCallback(() => {
      t({
        path: [3, 1, e],
        action: 0
      });
    }, [e, t]);
  };
  e.useFocusParentSubpath = function () {
    let [, e] = useContext(l);
    return useCallback(() => {
      e({
        path: [2],
        action: 0
      });
    }, [e]);
  };
})(n || (n = {}));
let es = "drilldown_item--leafGridContainer--5m8-I drilldown_item--_gridContainer--2YTzW";
let eo = "drilldown_item--subpathDisplayText--Lgl-w drilldown_item--displayText--pdJKd text--fontPos11--2LvXf text--_fontBase--QdLsd";
let el = memo(function (e) {
  let {
    drilldownItem,
    gridLayoutMode,
    onLeafItemContextMenu,
    onClick,
    selected,
    multiselect,
    tabIndex,
    fauxFocused,
    top,
    left,
    width,
    height,
    getBackgroundColorForLeafItemThumbnail,
    getLeafItemTooltip,
    getLeafItemThumbnail,
    renderName,
    i: _i,
    numCols,
    visible
  } = e;
  let [C, T] = useState(!1);
  let k = renderName && gridLayoutMode !== rp.SMALL;
  let R = getBackgroundColorForLeafItemThumbnail?.(drilldownItem.item);
  let N = useContext(ThemeContext);
  let P = getVisibleTheme();
  let O = useMemo(() => !!R && !!getThemeBorderStyle(N, R, P), [R, N, P]);
  let {
    setKeyboardNavigationElement
  } = n.useKeyboardNavigationItemForLeaf(_i, numCols, !visible);
  let [L, M] = useMemo(() => gridLayoutMode === rp.SMALL || gridLayoutMode === rp.NORMAL ? [es, "drilldown_item--leafGridThumbnailContainer--sFOtz drilldown_item--_gridThumbnailContainer--2HzOl drilldown_item--_thumbnailContainer--kDsBt"] : gridLayoutMode === rp.WIDE ? [es, "drilldown_item--leafWideGridThumbnailContainer--bcL9L drilldown_item--_gridThumbnailContainer--2HzOl drilldown_item--_thumbnailContainer--kDsBt"] : ["drilldown_item--leafListContainer--BPWKm drilldown_item--_drilldownItemBase--YOfRd", "drilldown_item--leafListThumbnailContainer--rTXS7 drilldown_item--_thumbnailContainer--kDsBt"], [gridLayoutMode]);
  let j = useMemo(() => {
    let e = getLeafItemTooltip ? getLeafItemTooltip(drilldownItem.item, {
      hideName: k && !C
    }) : null;
    return {
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip-show-left": !0,
      ...e
    };
  }, [drilldownItem.item, getLeafItemTooltip, k, C]);
  let U = useCallback(e => {
    e.preventDefault();
    onLeafItemContextMenu(e, drilldownItem);
  }, [onLeafItemContextMenu, drilldownItem]);
  let B = useCallback(e => {
    onClick(e, drilldownItem);
  }, [onClick, drilldownItem]);
  let V = null === gridLayoutMode;
  let G = "";
  fauxFocused && selected ? G = V ? "drilldown_item--selectedListFauxFocused--jZ8Gn drilldown_item--selectedList--Y6KmC drilldown_item--listFauxFocused--0tIb6" : "drilldown_item--selectedGridFauxFocused--Id7cL drilldown_item--selectedGrid--qI35b drilldown_item--gridFauxFocused--g8Aez" : fauxFocused ? G = V ? "drilldown_item--listFauxFocused--0tIb6" : "drilldown_item--gridFauxFocused--g8Aez" : selected && (G = V ? "drilldown_item--selectedList--Y6KmC" : "drilldown_item--selectedGrid--qI35b");
  let z = getLeafItemThumbnail?.(drilldownItem.item, gridLayoutMode);
  let H = (k || void 0) && jsx(ph, {
    className: V ? "drilldown_item--displayText--pdJKd text--fontPos11--2LvXf text--_fontBase--QdLsd" : "drilldown_item--displayTextWithMargin--A4LD0 drilldown_item--displayText--pdJKd text--fontPos11--2LvXf text--_fontBase--QdLsd",
    text: drilldownItem.displayText,
    onTruncationChange: T
  });
  let {
    listItemThumbnailStylesOverride,
    leafListHeight
  } = useContext(q);
  let Y = gridLayoutMode === rp.WIDE ? {
    height
  } : ed(width);
  let $ = useId();
  let Z = useHandleMouseEvent(`${e.recordingKey}${multiselect ? "" : "__UNUSED"}`, "click", e => {
    B(e);
  });
  let eo = useCallback((e, {
    event: t
  }) => {
    Z(new MouseEvent("click", {
      shiftKey: t.nativeEvent instanceof PointerEvent && t.nativeEvent.shiftKey
    }));
  }, [Z]);
  let el = useRef(null);
  let ec = useCallback(() => {
    el.current?.scrollIntoView({
      block: "nearest"
    });
  }, []);
  let eu = jsxs(Fragment, {
    children: [z && jsx("div", {
      className: f()(M, {
        "drilldown_item--showBorder--Ksu3C": O
      }),
      style: {
        backgroundColor: colorCSSManipulatorInstance.format(R || void 0),
        ...(gridLayoutMode ? Y : listItemThumbnailStylesOverride)
      },
      children: z
    }), H]
  });
  return multiselect ? jsx("div", {
    style: {
      top,
      left,
      ...(gridLayoutMode ? {
        width
      } : {
        height: leafListHeight
      })
    },
    className: `${L} ${G}`,
    ref: el,
    children: jsxs(Label, {
      htmlAttributes: j,
      htmlFor: $,
      className: f()(cssBuilderInstance.flex.$, {
        [cssBuilderInstance.flexColumn.$]: !V,
        [cssBuilderInstance.wFull.itemsCenter.$]: V
      }),
      children: [eu, jsx("div", {
        className: f()(V ? "drilldown_item--checkboxList--kqmln" : "drilldown_item--checkboxGrid--aXuyI", Qx, {
          "drilldown_item--checkboxChecked--c4ThM": selected
        }),
        children: jsx(ManuallyLabeledCheckbox, {
          checked: selected,
          onChange: eo,
          id: $,
          ref: setKeyboardNavigationElement,
          htmlAttributes: {
            onFocus: ec,
            onKeyDownCapture: e => jr(e.nativeEvent)
          }
        })
      })]
    })
  }) : jsx(ButtonPrimitive, {
    style: {
      top,
      left,
      ...(gridLayoutMode ? {
        width
      } : {
        height: leafListHeight
      })
    },
    className: f()(L, G, Qx),
    onClick: B,
    recordingKey: e.recordingKey,
    ref: setKeyboardNavigationElement,
    htmlAttributes: {
      ...j,
      "data-testid": "leaf-drilldown-item",
      onContextMenu: U,
      tabIndex
    },
    children: eu
  });
});
let ed = e => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: `${e}px`,
  width: `${e}px`,
  flex: `0 0 ${e}px`,
  lineHeight: `${e}px`
});
let em = memo(function (e) {
  var t;
  let {
    displayText,
    onClick,
    accessory,
    tabIndex,
    shouldForwardKeyDownToFullscreen,
    visible,
    indexOfParent
  } = e;
  let {
    setKeyboardNavigationElement
  } = n.useKeyboardNavigationItemForParentSubpath(!visible);
  let m = jsx(_$$R, {
    className: eo,
    text: displayText
  });
  let {
    listItemHeight
  } = useContext(q);
  let g = n.useFocusSubpath(indexOfParent);
  t = MB({
    onBoth: onClick,
    onKeyDown: g
  });
  let _ = useCallback(e => {
    e.stopPropagation();
    t(e);
  }, [t]);
  return jsxs(ButtonPrimitive, {
    className: f()("drilldown_item--parentSubpathContainer--wbu7T drilldown_item--_drilldownItemBase--YOfRd text--fontPos11--2LvXf text--_fontBase--QdLsd", Qx),
    style: {
      height: listItemHeight
    },
    recordingKey: e.recordingKey,
    onClick: _,
    ref: setKeyboardNavigationElement,
    htmlAttributes: {
      tabIndex,
      onKeyDown: shouldForwardKeyDownToFullscreen ? e => jr(e.nativeEvent) : void 0,
      "data-testid": "parent-drilldown-item"
    },
    children: [jsx(_$$C, {}), m, jsx("span", {
      children: accessory
    })]
  });
});
let eA = memo(function (e) {
  let {
    drilldownItem,
    i,
    visible,
    onClick,
    gridLayoutMode,
    top,
    recordingKey,
    tabIndex
  } = e;
  let p = useCallback(e => {
    e.stopPropagation();
    onClick(e, drilldownItem);
  }, [onClick, drilldownItem]);
  let m = n.useFocusParentSubpath();
  let h = MB({
    onBoth: p,
    onKeyDown: m
  });
  let {
    setKeyboardNavigationElement
  } = n.useKeyboardNavigationItemForSubpath(i, drilldownItem.id, !visible);
  let _ = jsx(_$$R, {
    className: eo,
    text: drilldownItem.displayText
  });
  let {
    subpathGridHeight,
    subpathListHeight
  } = useContext(q);
  let b = useMemo(() => Bx(drilldownItem), [drilldownItem]);
  return jsxs(ButtonPrimitive, {
    style: {
      top,
      height: gridLayoutMode ? subpathGridHeight : subpathListHeight
    },
    className: f()(null == gridLayoutMode ? "drilldown_item--subpathContainerList--n-4-2 drilldown_item--_drilldownItemBase--YOfRd drilldown_item--_subpathContainerBase--krA4j" : "drilldown_item--subpathContainerGrid--8bV5l drilldown_item--_drilldownItemBase--YOfRd drilldown_item--_subpathContainerBase--krA4j", Qx),
    onClick: h,
    recordingKey,
    ref: setKeyboardNavigationElement,
    htmlAttributes: {
      tabIndex,
      "data-testid": "subpath-drilldown-item"
    },
    children: [jsx(ey, {
      item: b,
      isList: !gridLayoutMode
    }), _, jsx(_$$n2, {
      className: "drilldown_item--chevronRefresh--rOgV7"
    })]
  });
});
function ey({
  item: e,
  isList: t
}) {
  let {
    subpathGridHeight
  } = useContext(q);
  return t ? jsx(_$$x, {
    className: "drilldown_item--folderIconRefresh--y824q"
  }) : jsx("div", {
    className: "drilldown_item--previewContainer--iLP5F",
    children: e ? jsx(_$$V2, {
      width: subpathGridHeight,
      height: subpathGridHeight,
      previewAssetOrUrl: e,
      keyPrefix: _$$V(e),
      type: "compact"
    }) : jsx("div", {
      style: styleBuilderInstance.colorBgSecondary.radiusMedium.add({
        height: `${subpathGridHeight - 8}px`,
        width: `${subpathGridHeight - 8}px`
      }).$
    })
  });
}
export function $$eb2(e, t, i) {
  return e.map(e => ({
    type: "LEAF",
    displayText: t(e),
    item: e,
    id: i(e)
  }));
}
export function $$ev1(e) {
  let t = function () {
    let e = useRef(void 0);
    return {
      ...Y,
      queryId: e,
      leafListHeight: W,
      subpathGridHeight: K
    };
  }();
  return jsx(q.Provider, {
    value: {
      ...t,
      ...e.contextValue
    },
    children: jsx(eI, {
      ...e
    })
  });
}
function eI(e) {
  let {
    drilldownItemsRecordingKey,
    initialPath,
    rootDrilldownItems,
    scrollContainerHeight,
    getLeafItemRecordingKey,
    isSelectedItem,
    multiselect,
    onMultiselectCallback,
    onLeafItemContextMenu,
    onLeafItemDrilldown,
    drilldownItemsKeySupplement,
    onSearch,
    searchFilter,
    setIsSearching,
    emptyState,
    beforeItems,
    getBackgroundColorForLeafItemThumbnail,
    getLeafItemTooltip,
    getLeafItemThumbnail,
    getThumbnailGridLayoutForItems,
    onDrilldownPathChange,
    renderLeafItemNames,
    searchBarRef,
    pickerToggleRef,
    additionalRowBottomMargin,
    extraHeightOnSearch,
    validLibrariesArePresent,
    isLoading,
    searchDebounceTime = 200,
    searchEmptyStateCTA,
    searchBarPlaceholderText,
    pickerType,
    errorComponent,
    shouldUpdateServerResults,
    searchTypeOption,
    sessionId
  } = e;
  let e_ = pickerType === Zl.INSTANCE_SWAP_PICKER || pickerType === Zl.PREFERRED_VALUES_PICKER;
  let eA = useRef(null);
  let [ey, eb] = useState(initialPath);
  let ev = _$$h2(isLoading) && !isLoading;
  let eI = useRef(!1);
  useEffect(function () {
    !ev || eI.current || deepEqual(initialPath, ey) || (eb(initialPath), eI.current = !0);
  }, [ev, initialPath, ey]);
  let [eE, ex] = useState("");
  let [ew, eT] = void 0 !== e.query && void 0 !== e.setQuery ? [e.query, e.setQuery] : [eE, ex];
  let [ek, eR] = useState(!1);
  let [eN, eP] = useState([]);
  let {
    queryId
  } = useContext(q);
  let [eD, eL] = useState([]);
  let eF = Nv(!0);
  let eM = useSelector(selectOpenFile);
  let ej = _$$S2.useOpenFileProperties();
  let eU = useSelector(e => "fullscreen" === e.selectedView.view ? e.selectedView.fileKey : void 0);
  let eB = useCurrentPublicPlan("_DrilldownPicker").unwrapOr(null)?.tier;
  let eV = useUUIDSubscription();
  useEffect(() => {
    eL(searchFilter(eN));
  }, [eN, searchFilter]);
  let eG = useRef(null);
  let ez = useSubscribedLibraries().data?.length ?? 0;
  let {
    getConfig
  } = selectExperimentConfigHook("exp_asset_search_refactor", void 0, !0);
  let eW = useDebouncedCallback(async e => {
    if (!onSearch) return;
    queryId.current = generateUUIDv4();
    let t = await onSearch(e, sessionId, queryId.current);
    let i = eG.current?.();
    if (e_ && (null === sessionId && trackEventAnalytics("asset_search.missing_session_id", {
      previousSessionId: "",
      entryPoint: "instance_swap"
    }, {
      forwardToDatadog: !0
    }), !getFeatureFlags().dse_refactor_asset_search_debug_only && !getConfig().getValue("use_refactor", !1))) {
      let n = {
        aiResultsEnabled: eF,
        elapsedTime: i?.elapsedTime,
        backgrounded: i?.backgrounded,
        query: e,
        queryId: queryId.current,
        subscribedSearchResultCount: t.length,
        entryPoint: "instance_swap",
        fileKey: eM?.key || void 0,
        fileOrgId: eM?.parentOrgId ?? void 0,
        fileTeamId: eM?.teamId ?? void 0,
        numSubscribedLibraries: ez,
        searchType: searchTypeOption?.type,
        selectedViewFileKey: eU,
        totalShownResults: t.length,
        tier: eB
      };
      await getExperimentConfigAsync("exp_asset_search_refactor");
      analyticsEventManager.trackDefinedEvent("assets_panel.search_time", {
        ...n,
        searchSessionId: sessionId
      });
      analyticsEventManager.trackDefinedEvent("asset_search.query_result", {
        ...n,
        componentSuggestionSessionId: eV,
        sessionId
      });
    }
    eP(t);
    eR(!1);
    eG.current = null;
  }, searchDebounceTime);
  let eK = useCallback((e, t) => {
    eA.current = null;
    e ? (eR(!0), null == eG.current && (eG.current = B0()), eW(e), setIsSearching(!0)) : (t && e_ && analyticsEventManager.trackDefinedEvent("instance_swap_picker.search_end", {
      ...ej,
      sessionId,
      isPreferredValues: pickerType === Zl.PREFERRED_VALUES_PICKER
    }), eR(!1), setIsSearching(!1), queryId.current = void 0, eW.cancel(), eP([]));
    eT(e);
  }, [eW, e_, ej, pickerType, sessionId, setIsSearching, eT, queryId]);
  let eY = useCallback(() => {
    eT("");
  }, [eT]);
  let eq = useRef(ew);
  let e$ = _$$h2(ew);
  let eZ = _$$h2(searchTypeOption);
  useEffect(() => {
    (e$ || eZ) && (eP([]), eK(ew, e$), eq.current = ew);
  }, [ew, eK, e$, eZ]);
  useEffect(() => {
    shouldUpdateServerResults && eK(ew, !1);
  }, [shouldUpdateServerResults, ew, eK]);
  _$$h3(() => {
    searchBarRef?.current?.searchInput && searchBarRef.current.searchInput.select();
  });
  let {
    validPath,
    drilldownItems,
    parent,
    indexOfParent
  } = useMemo(() => {
    if (ew) return {
      validPath: [],
      drilldownItems: eD,
      parent: null,
      indexOfParent: -1
    };
    let e = rootDrilldownItems;
    let t = null;
    let i = -1;
    let n = [];
    for (let r of ey) {
      let a = e.filter(e => "SUBPATH" === e.type);
      let s = a.findIndex(e => e.id === r);
      let o = a[s];
      if (!o) break;
      e = o.children;
      n.push(r);
      t = o;
      i = s;
    }
    return {
      validPath: n,
      drilldownItems: e,
      parent: t,
      indexOfParent: i
    };
  }, [rootDrilldownItems, ey, ew, eD]);
  let e1 = useCallback(e => {
    eA.current = {
      drilldownItems,
      validPath,
      parent,
      direction: "down"
    };
    let t = [...validPath, e];
    eb(t);
    onDrilldownPathChange && onDrilldownPathChange(t, "down");
  }, [drilldownItems, onDrilldownPathChange, parent, validPath]);
  let e2 = useCallback((e, t) => {
    e1(t.id);
  }, [e1]);
  let e5 = useCallback(() => {
    if (!parent) return;
    eA.current = {
      drilldownItems,
      validPath,
      parent,
      direction: "up"
    };
    let e = validPath.slice(0, validPath.length - 1);
    eb(e);
    onDrilldownPathChange && onDrilldownPathChange(e, "up");
  }, [validPath, drilldownItems, onDrilldownPathChange, parent]);
  let [e4, e3] = useState(!1);
  let e6 = validLibrariesArePresent || rootDrilldownItems.length > 0 || !!ew;
  let e7 = ew && !ek && 0 === drilldownItems.length;
  let e8 = function ({
    drilldownItems: e,
    isSelectedItem: t,
    onMultiselectCallback: i,
    multiselect: n,
    recordingKey: s,
    parentId: o,
    hideLabel: l
  }) {
    let d = useId();
    let c = useMemo(() => {
      let i = e.some(t);
      let n = e.some(e => "LEAF" === e.type && !t(e));
      return {
        checked: i,
        mixed: i && n
      };
    }, [e, t]);
    let h = useCallback(() => {
      let t = c.checked && !c.mixed ? Wu.DESELECT : Wu.SELECT;
      let n = e.filter(e => "LEAF" === e.type).map(e => e.item);
      i?.(n, t);
    }, [e, i, c]);
    return useMemo(() => n && e.some(e => "LEAF" === e.type) ? l ? jsx(Checkbox, {
      checked: c.checked,
      mixed: c.mixed,
      recordingKey: generateRecordingKey(s, "drilldownItem-parentSubpath-checkbox", o),
      onChange: h,
      label: jsx(HiddenLabel, {
        children: renderI18nText("design_systems.instance_swap_picker.select_all_instances")
      })
    }) : jsxs(Fragment, {
      children: [jsx(Label, {
        htmlFor: d,
        children: renderI18nText("design_systems.instance_swap_picker.select_all_instances")
      }), jsx(ManuallyLabeledCheckbox, {
        id: d,
        checked: c.checked,
        mixed: c.mixed,
        recordingKey: generateRecordingKey(s, "drilldownItem-parentSubpath-checkbox", o),
        onChange: h
      })]
    }) : null, [e, l, n, c.checked, c.mixed, h, o, d, s]);
  }({
    drilldownItems,
    onMultiselectCallback,
    isSelectedItem,
    recordingKey: e.recordingKey ?? "",
    parentId: parent?.id ?? "",
    multiselect: !!multiselect
  });
  let {
    bottomParentCheckboxRowHeight
  } = useContext(q);
  let te = useMemo(() => {
    let e = scrollContainerHeight;
    ew.length && (e += extraHeightOnSearch);
    e8 && (e -= bottomParentCheckboxRowHeight);
    return e;
  }, [bottomParentCheckboxRowHeight, extraHeightOnSearch, e8, ew.length, scrollContainerHeight]);
  let tt = jsx(eS, {
    additionalRowBottomMargin,
    drilldownItems,
    errorComponent,
    getBackgroundColorForLeafItemThumbnail,
    getLeafItemRecordingKey,
    getLeafItemThumbnail,
    getLeafItemTooltip,
    getThumbnailGridLayoutForItems,
    indexOfParent,
    isCurrentlyVisible: !0,
    isSearching: "" !== ew,
    isSelectedItem,
    multiselect,
    onDrillup: e5,
    onLeafItemContextMenu,
    onLeafItemDrilldown: (e, t, i) => onLeafItemDrilldown(e, t, !!ew, {
      currentDrilldownItems: drilldownItems,
      parentId: parent?.id ?? null,
      index: i ?? -1
    }, {
      query: ew,
      queryId: queryId.current
    }),
    onSubpathDrilldown: e2,
    parent,
    pickerType,
    recordingKey: generateRecordingKey(e, drilldownItemsRecordingKey),
    renderLeafItemNames,
    scrollContainerHeight: te,
    searchBarFocused: e4
  }, ew || (drilldownItemsKeySupplement ? validPath.join("/") : validPath.join("/") + drilldownItemsKeySupplement));
  let [ti] = Pk();
  let tn = _$$$(ti);
  useEffect(() => {
    tn && (eA.current = null);
  }, [tn]);
  let tr = "";
  let ta = tt;
  if (eA.current && !ew) {
    tr = "up" === eA.current.direction ? "drilldown_picker--animationContainerUp--B2bhu drilldown_picker--_animationContainer--aaEJ3" : "drilldown_picker--animationContainerDown--UOLGj drilldown_picker--_animationContainer--aaEJ3";
    let e = jsx(eS, {
      additionalRowBottomMargin,
      drilldownItems: eA.current.drilldownItems,
      errorComponent,
      getBackgroundColorForLeafItemThumbnail,
      getLeafItemRecordingKey,
      getLeafItemThumbnail,
      getLeafItemTooltip,
      getThumbnailGridLayoutForItems,
      isCurrentlyVisible: !1,
      isSearching: !1,
      isSelectedItem,
      multiselect,
      onDrillup: lQ,
      onLeafItemContextMenu: lQ,
      onLeafItemDrilldown: lQ,
      onSubpathDrilldown: lQ,
      parent: eA.current.parent,
      pickerType,
      renderLeafItemNames,
      scrollContainerHeight: te
    }, eA.current.validPath.join("/"));
    ta = jsxs(Fragment, {
      children: ["down" === eA.current.direction && e, tt, "up" === eA.current.direction && e]
    });
  }
  let ts = LR();
  let to = useCallback(e => "Escape" === e.key && (ew ? eY() : ts(), !0), [ts, eY, ew]);
  let tl = isLoading || ek && 0 === eD.length;
  return jsx(n.Provider, {
    beforeItemsRefs: e.beforeItemsRefs,
    shouldRender: e6 && !tl,
    searchBarRef,
    pickerToggleRef,
    onDrillup: e5,
    onSubpathDrilldown: e1,
    indexOfParent,
    isSearching: "" !== ew && !tl,
    children: jsxs("div", {
      children: [pickerType === Zl.RESOURCE_INSERT_MODAL ? jsx(Fragment, {
        children: jsx("div", {
          className: "drilldown_picker--insertsModalSearchBarContainer--Cz6Z0 fd_browse_resource_modal--searchBarContainer--Q2kZ7",
          children: jsx(IW, {
            focusOnMount: !0,
            className: f()("drilldown_picker--insertsModalSearchBar--rgyJl fd_browse_resource_modal--searchBar---bmO8", {
              "drilldown_picker--searchBarEmpty--3D2Tn fd_browse_resource_modal--searchBarEmpty--8dNhE": "" === ew
            }),
            query: ew,
            placeholder: searchBarPlaceholderText,
            clearSearch: eY,
            onChange: eT,
            isKeyDownHandled: to,
            hideXIcon: !ew,
            ref: searchBarRef
          })
        })
      }) : jsx("div", {
        className: "drilldown_picker--searchRowRefresh--9-Wr0",
        children: jsx(eC, {
          query: ew,
          clearSearch: eY,
          onChange: eT,
          isKeyDownHandled: to,
          onFocus: () => e3(!0),
          onBlur: () => e3(!1),
          searchBarRef,
          placeholder: searchBarPlaceholderText
        })
      }), tl ? jsx("div", {
        className: "drilldown_picker--spinner--b2K0U",
        style: {
          height: te + (pickerType === Zl.RESOURCE_INSERT_MODAL ? Kr : 0)
        },
        children: jsx(_$$k, {})
      }) : jsxs(Fragment, {
        children: [!e6 && emptyState, e6 && jsxs("div", {
          children: [jsx("div", {
            children: beforeItems
          }), jsx("div", {
            className: f()("drilldown_picker--container--yDdso", tr),
            style: {
              height: `${te}px`
            },
            children: e7 ? jsxs("div", {
              className: "drilldown_picker--searchEmptyRefresh--OaiuU",
              children: [jsx("div", {
                className: "drilldown_picker--searchTextRefresh---Qi2i ellipsis--ellipsis--Tjyfa",
                children: renderI18nText("design_systems.instance_swap_picker.no_results", {
                  query: ew
                })
              }), searchEmptyStateCTA]
            }) : ta
          }), e8 && jsx("div", {
            className: "drilldown_picker--selectAll--s3Tt6",
            style: {
              height: bottomParentCheckboxRowHeight
            },
            children: e8
          })]
        })]
      })]
    })
  });
}
let eE = parsePxInt(bH0);
let $$ex0 = 16;
let eS = memo(function (e) {
  let {
    drilldownItems,
    isCurrentlyVisible,
    isSearching,
    scrollContainerHeight,
    getLeafItemRecordingKey,
    isSelectedItem,
    multiselect,
    onDrillup,
    onLeafItemContextMenu,
    onLeafItemDrilldown,
    onSubpathDrilldown,
    parent,
    indexOfParent,
    getBackgroundColorForLeafItemThumbnail,
    getLeafItemTooltip,
    getLeafItemThumbnail,
    getThumbnailGridLayoutForItems,
    renderLeafItemNames,
    additionalRowBottomMargin,
    pickerType,
    errorComponent
  } = e;
  let T = useMemo(() => getThumbnailGridLayoutForItems ? getThumbnailGridLayoutForItems(drilldownItems) : null, [drilldownItems, getThumbnailGridLayoutForItems]);
  let {
    subpathGridHeight,
    subpathListHeight,
    leafListHeight,
    listItemHeight
  } = useContext(q);
  let O = T ? subpathGridHeight : subpathListHeight;
  let {
    modalWidth,
    numColsForSmall,
    numColsForNormal
  } = TQ(pickerType);
  let j = useMemo(() => function (e, t, i, n, r, a) {
    var s;
    var o;
    let l = e - 2 * $$ex0;
    switch (t) {
      case rp.WIDE:
        return {
          numCols: 1,
          thumbWidth: l,
          thumbHeight: eE,
          rowHeight: eE + a
        };
      case rp.NORMAL:
        let d = (s = (l - $$ex0 * (n - 1)) / n) - s % 2;
        return {
          numCols: n,
          thumbWidth: d,
          thumbHeight: d,
          rowHeight: d + a
        };
      case rp.SMALL:
        let c = (o = (l - $$ex0 * (i - 1)) / i) - o % 2;
        return {
          numCols: i,
          thumbWidth: c,
          thumbHeight: c,
          rowHeight: c
        };
      default:
        return {
          numCols: 1,
          thumbWidth: 0,
          thumbHeight: 0,
          rowHeight: r
        };
    }
  }(modalWidth, T, numColsForSmall, numColsForNormal, leafListHeight, additionalRowBottomMargin), [additionalRowBottomMargin, modalWidth, leafListHeight, numColsForNormal, numColsForSmall, T]);
  let {
    totalHeight,
    positions,
    spacerAboveLeaves
  } = function ({
    drilldownItems: e,
    isList: t,
    layout: i,
    subpathHeight: n
  }) {
    return useMemo(() => {
      let r = e.filter(e => "SUBPATH" === e.type);
      let a = e.filter(e => "LEAF" === e.type);
      let s = r.length > 0 ? 8 : 0;
      let o = r.length * n + s;
      let l = t ? a.length * i.rowHeight : Math.ceil(a.length / i.numCols) * (i.rowHeight + $$ex0);
      let d = t || 0 === a.length ? 0 : 8;
      let c = a.length > 0 ? $$ex0 : 0;
      let u = e.map((e, r) => {
        if ("SUBPATH" === e.type) return {
          top: (r + -a.length) * n + (l + d + c),
          left: 0
        };
        {
          if (t) return {
            top: (r + 0) * i.rowHeight + d,
            left: 0
          };
          let e = (r + 0) % i.numCols * (i.thumbWidth + $$ex0) + $$ex0;
          return {
            top: Math.floor((r + 0) / i.numCols) * (i.rowHeight + $$ex0) + d,
            left: e
          };
        }
      });
      return {
        totalHeight: o + l + d + c,
        positions: u,
        spacerAboveLeaves: d
      };
    }, [e, t, i.numCols, i.rowHeight, i.thumbWidth, n]);
  }({
    drilldownItems,
    layout: j,
    subpathHeight: O,
    isList: !T
  });
  let z = useMemo(() => {
    let e = [];
    drilldownItems.forEach((t, i) => {
      isSelectedItem(t) && e.push(i);
    });
    return e;
  }, [isSelectedItem, drilldownItems]);
  let H = multiselect ? null : z?.[0] ?? null;
  let [W, K] = useState(() => {
    if (!H) return 0;
    let e = positions[H - 1];
    return e ? Math.max(0, e.top - spacerAboveLeaves) : 0;
  });
  let Y = useMemo(() => {
    let e = 2 * scrollContainerHeight;
    return [W - e - j.rowHeight, W + scrollContainerHeight + e];
  }, [j.rowHeight, W, scrollContainerHeight]);
  let $ = useMemo(() => _$$n(100, e => {
    K(e);
  }), [K]);
  let Z = !!e.searchBarFocused;
  let X = useRef(null);
  let Q = isCurrentlyVisible ? void 0 : -1;
  let J = useMemo(() => drilldownItems.findIndex(e => "SUBPATH" === e.type), [drilldownItems]);
  let ee = useMemo(() => drilldownItems.some(e => "LEAF" === e.type), [drilldownItems]);
  let et = e => e === J && ee;
  let ei = useMemo(() => drilldownItems.filter(e => "LEAF" === e.type).length, [drilldownItems]);
  return jsxs("div", {
    "aria-hidden": !isCurrentlyVisible,
    "data-testid": isCurrentlyVisible ? "drilldown-items" : void 0,
    children: [parent && jsx(em, {
      accessory: parent.accessory,
      displayText: parent.displayText,
      indexOfParent: indexOfParent ?? -1,
      onClick: onDrillup,
      recordingKey: generateRecordingKey(e, "drilldownItem-parentSubpath", parent.id),
      shouldForwardKeyDownToFullscreen: multiselect,
      tabIndex: Q,
      visible: isCurrentlyVisible
    }), jsxs(_$$P, {
      height: parent ? scrollContainerHeight - listItemHeight : scrollContainerHeight,
      onScroll: $,
      ref: X,
      initialScrollTop: W,
      innerClassName: "drilldown_picker--scrollContainerInner--CNjDp",
      scrollContainerDataTestId: "drilldown-picker-scroll-container",
      children: [jsx("div", {
        style: {
          height: totalHeight
        },
        className: "drilldown_picker--itemsContainer--ySqD1",
        children: drilldownItems.map((t, a) => {
          let {
            top,
            left
          } = positions[a];
          if (!(Y[0] <= top && top <= Y[1])) return;
          let u = Z && 0 === a && isSearching;
          switch (t.type) {
            case "LEAF":
              let g = z.includes(a);
              return jsx(el, {
                drilldownItem: t,
                fauxFocused: u,
                getBackgroundColorForLeafItemThumbnail,
                getLeafItemThumbnail,
                getLeafItemTooltip,
                gridLayoutMode: T,
                height: j.thumbHeight,
                i: a,
                left,
                multiselect,
                numCols: j.numCols,
                onClick: (e, t) => onLeafItemDrilldown(e, t, a),
                onLeafItemContextMenu,
                recordingKey: generateRecordingKey(e, ...(getLeafItemRecordingKey ? getLeafItemRecordingKey(t.item) : [])),
                renderName: renderLeafItemNames,
                selected: g,
                tabIndex: Q,
                top,
                visible: isCurrentlyVisible,
                width: j.thumbWidth
              }, t.id);
            case "SUBPATH":
              return jsxs(Fragment, {
                children: [et(a) && jsx(ew, {
                  top: top - $$ex0 / 2
                }), jsx(eA, {
                  drilldownItem: t,
                  gridLayoutMode: T || null,
                  i: a - ei,
                  onClick: onSubpathDrilldown,
                  recordingKey: generateRecordingKey(e, "drilldownItem-subpath", t.id),
                  tabIndex: Q,
                  top,
                  visible: isCurrentlyVisible
                }, t.id)]
              });
            default:
              throwTypeError(t);
          }
        })
      }), errorComponent]
    })]
  });
});
function ew({
  top: e
}) {
  return jsx("div", {
    style: styleBuilderInstance.absolute.colorBorder.add({
      top: `${e}px`,
      borderBottomWidth: "1px",
      borderStyle: "solid",
      width: `calc(100% - ${2 * $$ex0}px)`,
      left: `${$$ex0}px`
    }).$
  });
}
function eC(e) {
  let {
    searchBarRef,
    query,
    clearSearch,
    onChange,
    isKeyDownHandled,
    placeholder
  } = e;
  let {
    setKeyboardNavigationElement
  } = n.useKeyboardNavigationItemForSearch();
  _$$h3(() => {
    searchBarRef?.current && setKeyboardNavigationElement?.(searchBarRef?.current.searchInput);
  });
  return jsx(IW, {
    ref: searchBarRef,
    className: "drilldown_picker--searchBarRefresh--AWyol",
    clearSearch,
    focusOnMount: !0,
    hasTransparentBackground: !0,
    isKeyDownHandled,
    onBlur: e.onBlur,
    onChange,
    onFocus: e.onFocus,
    placeholder,
    query,
    smallFont: !0,
    withSmallXIcon: !0,
    withUI3Icon: !0
  });
}
export const qy = $$ex0;
export const uO = $$ev1;
export const xd = $$eb2;