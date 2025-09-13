import { jsx, jsxs } from "react/jsx-runtime";
import { useRef, useState, useCallback, useMemo, useEffect, useLayoutEffect, memo, useContext } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { debug } from "../figma_app/465776";
import { RR } from "../figma_app/338442";
import { AppStateTsApi, DesignGraphElements, UserActionState, Fullscreen, ItemType, ScaleToolTsApi, TextAlignmentOptions } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { useAtomWithSubscription } from "../figma_app/27355";
import { parsePxInt } from "../figma_app/783094";
import { selectWithShallowEqual } from "../905/103090";
import { createRecordingCallback, useSetupPlayback, generateRecordingKey } from "../figma_app/878298";
import { Ku, sT } from "../figma_app/740163";
import { m as _$$m } from "../905/571439";
import { MIXED_MARKER, isInvalidValue, normalizeValue, valueOrFallback } from "../905/216495";
import { rC } from "../figma_app/385874";
import { kl, pw, zj, ER, wR, DQ, fC } from "../905/275640";
import { SG } from "../figma_app/852050";
import { getObservableOrFallback } from "../figma_app/84367";
import { VF } from "../figma_app/679183";
import { cM } from "../figma_app/803787";
import { Sh } from "../figma_app/889655";
import { Tn } from "../figma_app/323320";
import { $i } from "../figma_app/467440";
import { JJ } from "../figma_app/61403";
import { WH } from "../figma_app/836943";
import { L as _$$L } from "../905/216039";
import { R1, JG } from "../figma_app/152690";
import { zK } from "../905/182453";
import { F as _$$F } from "../905/294430";
import { S as _$$S } from "../905/148017";
import { eT as _$$eT } from "../figma_app/580959";
import { flushSync } from "react-dom";
import { nearlyEqual, clamp } from "../figma_app/492908";
import { K as _$$K } from "../905/443068";
import { A as _$$A } from "../905/251970";
import { scopeAwareFunction } from "../905/189185";
import { useLatestRef } from "../figma_app/922077";
import { getI18nString, renderI18nText } from "../905/303541";
import { fullscreenValue } from "../figma_app/455680";
import { h as _$$h } from "../905/943864";
import { p8 } from "../figma_app/722362";
import { o as _$$o } from "../905/237202";
import { $4, Zk } from "../figma_app/626177";
import { r as _$$r } from "../figma_app/711157";
import { fn, sY } from "../figma_app/811257";
import { V as _$$V } from "../905/823363";
import { $Y, sI, sH, Yq, Ps, be } from "../figma_app/183248";
import { logError } from "../905/714362";
import { g as _$$g } from "../905/151072";
import { KindEnum } from "../905/129884";
import { $j } from "../figma_app/178475";
import { Xs } from "../figma_app/98483";
import { hF, QK } from "../figma_app/100987";
import { z as _$$z } from "../905/282554";
import eh from "../vendor/805353";
import { trackFileEventWithUser } from "../figma_app/901889";
import { $1 } from "../905/713371";
import { f4 } from "../905/690293";
import { H as _$$H } from "../905/759471";
import { J as _$$J } from "../905/361256";
import { wQn } from "../figma_app/27776";
var n;
var i;
var a;
var s;
var o;
function er(e, t) {
  return nearlyEqual(e, 0) ? (logError("clampScaleValue", "scale is 0", {
    originalValue: e,
    newValue: t
  }), $Y) : clamp(t / e, sI, sH);
}
let ed = {
  smallNudgeAmount: .01,
  bigNudgeAmount: .1,
  scrubMultiplier: 1,
  wheelMultiplier: 1,
  postScrubMultiplier: .01,
  postBigNudgeAmount: 1,
  postWheelMultiplier: .1,
  resolution: .01
};
function ec(e) {
  let {
    disabled,
    scale,
    property,
    selectionRegionsBounds,
    selectionRegionsOriginalBounds,
    onScaleChange,
    recordingKey,
    forwardedRef,
    onKeyDown
  } = e;
  let p = "width" === property ? Yq.Width : Yq.Height;
  let _ = useDispatch();
  let h = createRecordingCallback(recordingKey);
  let m = function () {
    if (selectionRegionsBounds && selectionRegionsBounds.length) {
      let e = selectionRegionsBounds[0][property];
      return selectionRegionsBounds.every(t => nearlyEqual(t[property], e, .005)) ? e : MIXED_MARKER;
    }
    return MIXED_MARKER;
  }();
  let g = Xs();
  let f = isInvalidValue(m) ? ed : {};
  return jsx($j, {
    className: _$$z,
    "data-tooltip": "width" === property ? getI18nString("fullscreen.properties_panel.transform_panel.width") : getI18nString("fullscreen.properties_panel.transform_panel.height"),
    "data-tooltip-type": KindEnum.TEXT,
    dataTestId: `scale_panel.${property}`,
    disabled,
    dispatch: _,
    forwardedRef,
    inputClassName: hF,
    min: isInvalidValue(m) ? sI : 1,
    mixedMathHandler: {
      getValue: () => scale,
      onChange: (e, t, r) => {
        let n = t(e);
        Number.isNaN(n) || onScaleChange(clamp(n, sI, sH), p, r);
      }
    },
    noBorderOnHover: !0,
    onKeyDown,
    onValueChange: (e, t) => {
      !Number.isNaN(e) && m && m !== MIXED_MARKER && selectionRegionsOriginalBounds && selectionRegionsOriginalBounds.length && onScaleChange(er(selectionRegionsOriginalBounds[0][property], e), p, t);
    },
    recordingKey: h(`${property}Input.input`),
    tooltipForScreenReadersOnly: !0,
    value: m ?? 0,
    ...g,
    ...f,
    children: jsx("span", {
      className: `${QK} svg`,
      children: "width" === property ? renderI18nText("fullscreen.properties_panel.transform_panel.w") : renderI18nText("fullscreen.properties_panel.transform_panel.h")
    })
  });
}
function eu(e) {
  let {
    widthRef,
    heightRef,
    onWidthInputKeyDown,
    onHeightInputKeyDown,
    ...a
  } = e;
  return jsx(ec, {
    ...a,
    property: "width",
    forwardedRef: widthRef,
    onKeyDown: onWidthInputKeyDown
  });
}
function ep(e) {
  let {
    widthRef,
    heightRef,
    onWidthInputKeyDown,
    onHeightInputKeyDown,
    ...a
  } = e;
  return jsx(ec, {
    ...a,
    property: "height",
    forwardedRef: heightRef,
    onKeyDown: onHeightInputKeyDown
  });
}
function e_(e) {
  let t = jsx(eu, {
    ...e
  });
  let r = jsx(ep, {
    ...e
  });
  return jsx(fn, {
    leftLabel: getI18nString("fullscreen.properties_panel.transform_panel.width"),
    leftInput: t,
    rightLabel: getI18nString("fullscreen.properties_panel.transform_panel.height"),
    rightInput: r,
    icon: null
  });
}
var em = eh;
let eE = () => {
  fullscreenValue.triggerAction("set-tool-default");
};
function ey(e) {
  let t = useSelector(e => e.mirror.sceneGraphSelection);
  let r = kl("selectionRegions");
  let n = normalizeValue(r);
  let i = useLatestRef(n);
  let a = useRef(0);
  let [s, o] = useState(void 0);
  let u = useLatestRef(s);
  let p = useRef(null);
  let m = kl("selectionResizable");
  let g = valueOrFallback(m, !1);
  let f = p8("activeUserAction");
  let y = useLatestRef(f);
  let b = getObservableOrFallback(AppStateTsApi.propertiesPanelState().shownPropertiesPanels);
  let I = useLatestRef(b);
  let [v, x] = useState(!1);
  let N = useRef(null);
  let C = useRef(null);
  let w = useRef(null);
  let O = p8("currentTool");
  let R = useLatestRef(O);
  let L = O !== DesignGraphElements.SCALE;
  let P = !g || L;
  let [D, k] = useState(Ps);
  let M = getObservableOrFallback(AppStateTsApi.canvasViewState().scaleToolLastCanvasAnchorPoint);
  let F = useSetupPlayback(e.recordingKey ?? "", "anchorPointChange", k);
  let [j, et] = useState(void 0);
  let ei = useCallback(e => {
    void 0 === j ? et(e) : j !== e && et(null);
  }, [j]);
  let {
    trackScaleChangeEvent,
    trackScaleToolDismissed,
    trackAnchorPointChange
  } = function () {
    let e = trackFileEventWithUser();
    let t = useCallback(t => {
      e("scale_tool_panel_set_value", {
        key: "height",
        ...t
      });
    }, [e]);
    let r = useMemo(() => em()(t, 3e3), [t]);
    let n = useCallback((e, n) => n ? r(e) : t(e), [r, t]);
    let i = useCallback(t => e("scale_tool_panel_set_value", {
      key: "width",
      ...t
    }), [e]);
    let a = useMemo(() => em()(i, 3e3), [i]);
    let s = useCallback((e, t) => t ? a(e) : i(e), [a, i]);
    let o = useCallback(t => e("scale_tool_panel_set_value", {
      key: "scale",
      ...t
    }), [e]);
    let l = useMemo(() => em()(o, 3e3), [o]);
    let c = useCallback((e, t) => t ? l(e) : o(e), [l, o]);
    let u = useCallback(t => e("scale_tool_panel_dismissed", {
      ...t
    }), [e]);
    return {
      trackScaleChangeEvent: c,
      trackWidthChangeEvent: s,
      trackHeightChangeEvent: n,
      trackAnchorPointChange: useCallback(t => e("scale_tool_set_anchor_point", {
        ...t
      }), [e]),
      trackScaleToolDismissed: u
    };
  }();
  useEffect(() => {
    f === UserActionState.RESIZING && D !== M && (ei(M), F(M));
  }, [f, D, F, ei, M]);
  let [el, ed] = useState($Y);
  let [ec, eu] = useState(!1);
  let [ep, eh] = useState(!1);
  let [ey, eb] = useState(!0);
  let eT = useCallback((e, t) => {
    s && s.length && (Fullscreen.setScale(e, t, s.map(e => ({
      origin: {
        x: e.x,
        y: e.y
      },
      size: {
        x: e.width,
        y: e.height
      }
    })), null !== j), eh(!0), ei(t));
  }, [s, j, ei]);
  useEffect(() => {
    eu(!0);
  }, [t]);
  useEffect(() => {
    !I?.[ItemType.SCALE_ITEM] && b?.[ItemType.SCALE_ITEM] && eu(!0);
  }, [b, I]);
  let eI = useCallback(() => ep ? (eh(!1), !0) : f === UserActionState.RESIZING || f === UserActionState.DEFAULT && y === UserActionState.RESIZING, [f, ep, y]);
  useLayoutEffect(() => {
    if (i && i.length && n && n.length && i.length === n.length) for (let e = 0; e < n.length; e++) {
      let {
        x,
        y,
        width,
        height
      } = n[e].bounds;
      let {
        x: _x,
        y: _y,
        width: _width,
        height: _height
      } = i[e].bounds;
      if (_width !== width || _height !== height) {
        if (!eI() && !ec) {
          eu(nearlyEqual(_width, width) !== nearlyEqual(_height, height));
          break;
        }
      } else if (_x !== x || _y !== y) {
        ei(null);
        break;
      }
    }
  }, [i, n, eI, ei, ec]);
  useLayoutEffect(() => {
    let e = !1;
    if (getFeatureFlags().ce_scale_tool_skew && n) {
      let t = p.current ?? n.map(e => (e.bounds.width || 1) / (e.bounds.height || 1));
      let r = Fullscreen.getSelectionAngleSum();
      if (n.length === t.length) {
        p.current = [];
        for (let i = 0; i < n.length; ++i) {
          let s = (n[i].bounds.width || 1) / (n[i].bounds.height || 1);
          (e || _$$o(s, t[i], 1e-4)) && _$$o(r, a.current, 1e-4) || (e = !0);
          p.current.push(s);
          a.current = r;
        }
      }
    }
    (e || ec) && (ed($Y), F(Ps), AppStateTsApi.canvasViewState().scaleToolLastCanvasAnchorPoint.set(Ps), et(void 0), o(Fullscreen.getSelectionRegionsBounds().map(({
      origin: e,
      size: t
    }) => ({
      x: e.x,
      y: e.y,
      width: t.x,
      height: t.y
    }))), x(!1), eu(!1));
  }, [ec, n, F, M]);
  useLayoutEffect(() => {
    n && n.length && s && s.length && (n !== i || getFeatureFlags().ce_scale_tool_skew && s !== u) && (ey ? ed(er(s[0].width, n[0].bounds.width)) : eb(!0));
  }, [u, n, s, i, ey]);
  useEffect(() => {
    let e = O === DesignGraphElements.SCALE && R !== DesignGraphElements.SCALE;
    e && Object.keys(t).length > 0 && e && [UserActionState.DEFAULT, UserActionState.SELECTING_TEXT].includes(f) && N.current && (N.current.focus(), N.current.select());
  }, [f, O, R, t]);
  useEffect(() => {
    let e = () => {
      N.current && (x(!1), N.current.focus(), N.current.select());
    };
    _$$h.subscribeScaleToolActivated(e);
    return () => {
      _$$h.unsubscribeScaleToolActivated(e);
    };
  }, []);
  useEffect(() => {
    let e = e => {
      e.target !== N.current && e.target !== C.current && e.target !== w.current && x(!0);
    };
    document.addEventListener("focusin", e);
    return () => {
      document.removeEventListener("focusin", e);
    };
  }, []);
  let eS = useCallback(e => {
    let t = "Escape" === e.key;
    let r = "Enter" === e.key;
    !v && (r || t) && eE();
  }, [v]);
  let ev = jsx($4, {
    children: jsx(_$$K, {
      onClick: () => {
        eE();
        trackScaleToolDismissed({
          selectionCount: Object.keys(t).length
        });
      },
      "aria-label": getI18nString("fullscreen.scale_panel.close"),
      children: jsx(_$$A, {})
    })
  });
  let eA = jsx(_$$g, {
    scale: el,
    onInputKeyDown: eS,
    onScaleChange: scopeAwareFunction.user("change-scale", (e, t, r, i) => {
      ed(e);
      eb(!1);
      void 0 !== i && getFeatureFlags().ee_scale_tool_ap_input ? (trackScaleChangeEvent({
        value: e,
        source: t,
        anchorPoint: i,
        anchorPointSource: be.TextInput
      }), eT(e, i), F(i)) : (t === Yq.Select ? trackScaleChangeEvent({
        value: e,
        source: t,
        anchorPoint: D,
        anchorPointSource: be.Selector
      }) : trackScaleChangeEvent({
        value: e,
        source: t,
        anchorPoint: D,
        anchorPointSource: be.Selector
      }, !0), flushSync(() => {
        eT(e, D);
        r && n && n.length > 1 && Fullscreen.logMultiEditActionForSelection("scale_panel_finish", null);
      }));
    }),
    disabled: P,
    recordingKey: e.recordingKey,
    ref: N
  });
  let ex = jsx(_$$V, {
    restoreFocusElements: [N.current, C.current, w.current].filter(Boolean),
    anchorPoint: D,
    onAnchorPointChange: scopeAwareFunction.user("change-anchor-point", e => {
      e !== D && (1 !== el && (eT(1, D), eT(el, e)), F(e));
      trackAnchorPointChange({
        anchorPoint: e
      });
    }),
    disabled: P
  });
  let eN = jsx(e_, {
    disabled: P,
    heightRef: w,
    onHeightInputKeyDown: eS,
    onScaleChange: scopeAwareFunction.user("change-scale", (e, t, r) => {
      trackScaleChangeEvent({
        value: e,
        source: t,
        anchorPoint: D,
        anchorPointSource: be.Selector
      }, !0);
      ed(e);
      eb(!1);
      eT(e, D);
      r && (n && n.length > 1 && Fullscreen.logMultiEditActionForSelection("scale_panel_finish", null), fullscreenValue.commit());
    }),
    onWidthInputKeyDown: eS,
    recordingKey: e.recordingKey,
    scale: el,
    selectionRegionsBounds: n.map(e => e.bounds),
    selectionRegionsOriginalBounds: s,
    widthRef: C
  });
  return jsxs(Zk, {
    "data-testid": `scale_panel.state.${L ? "hidden" : P ? "disabled" : "enabled"}`,
    className: $1,
    children: [jsx(_$$r, {
      titleTx: renderI18nText("fullscreen.scale_panel.scale"),
      icon: ev
    }), eN, jsx(sY, {
      leftLabel: getI18nString("fullscreen.scale_panel.scale"),
      rightLabel: getI18nString("fullscreen.scale_panel.anchor_point"),
      topLeftInput: eA,
      bottomLeftInput: null,
      rightInput: ex,
      topIcon: null,
      bottomIcon: null
    })]
  });
}
function eT() {
  fullscreenValue.triggerAction("set-tool-default");
}
let eI = memo(function ({
  recordingKey: e
}) {
  let t = getObservableOrFallback(ScaleToolTsApi.state().scale);
  let r = getObservableOrFallback(ScaleToolTsApi.state().disabled);
  let n = scopeAwareFunction.user("change-scale", e => {
    ScaleToolTsApi.setScale(e);
  });
  let i = getObservableOrFallback(ScaleToolTsApi.state().width);
  i = "number" == typeof i ? i : MIXED_MARKER;
  let a = scopeAwareFunction.user("change-scale-width", e => {
    ScaleToolTsApi.setWidth(e);
  });
  let s = getObservableOrFallback(ScaleToolTsApi.state().height);
  s = "number" == typeof s ? s : MIXED_MARKER;
  let o = scopeAwareFunction.user("change-scale-height", e => {
    ScaleToolTsApi.setHeight(e);
  });
  let u = getObservableOrFallback(ScaleToolTsApi.state().anchorPoint);
  let p = scopeAwareFunction.user("change-anchor-point", e => {
    ScaleToolTsApi.setAnchorPoint(e);
  });
  let h = useSetupPlayback(e ?? "", "anchorPointChange", e => {
    p(e);
  });
  let {
    handleKeyDown,
    heightInputRef,
    scaleInputRef,
    widthInputRef
  } = function () {
    let e = useSelector(e => e.mirror.sceneGraphSelection);
    let [t, r] = useState(!1);
    let n = useRef(null);
    let i = useRef(null);
    let a = useRef(null);
    let s = p8("currentTool");
    let o = useLatestRef(s);
    let l = p8("activeUserAction");
    let [u, p] = useState(!1);
    useEffect(() => {
      let t = s === DesignGraphElements.SCALE && o !== DesignGraphElements.SCALE;
      Object.keys(e).length > 0 && t && [UserActionState.DEFAULT, UserActionState.SELECTING_TEXT].includes(l) && n.current && (n.current.focus(), n.current.select());
    }, [l, s, o, e]);
    useEffect(() => {
      let e = () => {
        n.current && (r(!1), p(!1), n.current.focus(), n.current.select());
      };
      _$$h.subscribeScaleToolActivated(e);
      return () => {
        _$$h.unsubscribeScaleToolActivated(e);
      };
    }, []);
    useEffect(() => {
      let e = e => {
        e.target !== n.current && e.target !== i.current && e.target !== a.current && r(!0);
      };
      document.addEventListener("focusin", e);
      return () => {
        document.removeEventListener("focusin", e);
      };
    }, []);
    let h = useCallback(e => {
      let r = "Escape" === e.key;
      let n = "Enter" === e.key;
      !t && (n || r) && p(!0);
    }, [t]);
    useEffect(() => {
      u && eT();
    }, [u]);
    return {
      handleKeyDown: h,
      scaleInputRef: n,
      widthInputRef: i,
      heightInputRef: a
    };
  }();
  let b = jsx($4, {
    children: jsx(_$$K, {
      onClick: () => {
        eT();
      },
      "aria-label": getI18nString("fullscreen.scale_panel.close"),
      children: jsx(_$$A, {})
    })
  });
  let I = jsx(_$$V, {
    restoreFocusElements: [scaleInputRef.current, widthInputRef.current, heightInputRef.current].filter(Boolean),
    anchorPoint: u,
    onAnchorPointChange: h,
    disabled: r,
    fullWidth: !0
  });
  let S = jsx(f4, {
    disabled: r,
    height: s,
    heightInputRef,
    onHeightChange: o,
    onKeyDown: handleKeyDown,
    onScaleChange: n,
    onWidthChange: a,
    recordingKey: e,
    scale: t,
    width: i,
    widthInputRef
  });
  let v = jsx(_$$g, {
    scale: t,
    onScaleChange: n,
    disabled: r,
    onInputKeyDown: handleKeyDown,
    recordingKey: e,
    ref: scaleInputRef
  });
  return jsxs(Zk, {
    "data-testid": `scale_panel.state.${r ? "disabled" : "enabled"}`,
    className: $1,
    children: [jsx(_$$r, {
      titleTx: renderI18nText("fullscreen.scale_panel.scale"),
      icon: b
    }), S, jsx(sY, {
      leftLabel: getI18nString("fullscreen.scale_panel.scale"),
      rightLabel: getI18nString("fullscreen.scale_panel.anchor_point"),
      topLeftInput: v,
      bottomLeftInput: null,
      rightInput: I,
      topIcon: null,
      bottomIcon: null
    })]
  });
});
export let $$ex7 = "properties-panel-scroll-container";
export function $$eN9() {
  let e = useSelector(cM);
  return useMemo(() => Object.values(e).filter(e => !e.deletedFromSceneGraph), [e]);
}
let $$eC6 = parsePxInt(wQn);
let ew = (e, t) => e ? generateRecordingKey(e, t) : t;
export var $$eO8 = (e => (e[e.DEFAULT_EXPANDED = 0] = "DEFAULT_EXPANDED", e[e.DEFAULT_SIMPLIFIED = 1] = "DEFAULT_SIMPLIFIED", e[e.OVERRIDDEN_EXPANDED = 2] = "OVERRIDDEN_EXPANDED", e))($$eO8 || {});
(n || (n = {})).ConnectedFillPanel = connect(e => ({
  library: e.library,
  currentTool: e.mirror.appModel.currentTool,
  currentSelectedProperty: e.mirror.appModel.currentSelectedProperty,
  activeCanvasEditModeType: e.mirror.appModel.activeCanvasEditModeType,
  currentSelectedGradientStop: e.mirror.appModel.currentSelectedGradientStop,
  sceneGraphSelection: e.mirror.sceneGraphSelection,
  selectedStyleProperties: e.mirror.selectedStyleProperties,
  dropdownShown: e.dropdownShown,
  modalShown: e.modalShown,
  pickerShown: e.pickerShown,
  pickerInStyleCreationShown: e.pickerInStyleCreationShown,
  stylePickerShown: e.stylePickerShown,
  stylePickerListLayout: e.stylePickerListLayout,
  openFile: e.openFile
}))(function (e) {
  let t = Ku();
  let {
    inheritFillStyleKey,
    exportSettings,
    exportBackgroundDisabled,
    styleIdForFill
  } = (e.shouldUseSelectedStyleProperties ? pw : zj)("inheritFillStyleKey", "exportSettings", "exportBackgroundDisabled", "styleIdForFill");
  let s = _$$m();
  return jsx(_$$eT, {
    colorFormat: t,
    currentSelectedGradientStop: e.currentSelectedGradientStop,
    currentSelectedProperty: e.currentSelectedProperty,
    currentTool: e.currentTool,
    defaultColor: rC,
    dispatch: e.dispatch,
    dropdownShown: e.dropdownShown,
    editModeType: e.activeCanvasEditModeType,
    exportBackgroundDisabled,
    hasExports: !!exportSettings && valueOrFallback(exportSettings, []).length > 0,
    inheritStyleID: styleIdForFill || null,
    inheritStyleKey: inheritFillStyleKey || null,
    isPanelBodyCollapsedAtom: null,
    library: e.library,
    modalShown: e.modalShown,
    openFile: e.openFile,
    pickerInStyleCreationShown: e.pickerInStyleCreationShown,
    pickerShown: e.pickerShown,
    recordingKey: ew(e.recordingKey, "fillPanel"),
    sceneGraphSelection: e.sceneGraphSelection,
    selectionContainsFrames: s,
    shouldUseSelectedStyleProperties: e.shouldUseSelectedStyleProperties,
    stylePickerListLayout: e.stylePickerListLayout,
    stylePickerShown: e.stylePickerShown,
    variableScopes: e.variableScopes
  }, e.key);
});
export let $$eR2 = n.ConnectedFillPanel;
(i || (i = {})).ConnectedEffectsPanel = connect(e => ({
  library: e.library,
  currentSelectedProperty: e.mirror.appModel.currentSelectedProperty,
  sceneGraphSelection: e.mirror.sceneGraphSelection,
  dropdownShown: e.dropdownShown,
  modalShown: e.modalShown,
  pickerShown: e.pickerShown,
  stylePickerShown: e.stylePickerShown,
  openFile: e.openFile
}))(function (e) {
  let t = ER();
  let {
    smallNudgeAmount,
    bigNudgeAmount
  } = sT();
  let {
    effects,
    inheritEffectStyleKey,
    containsOnlySpreadEligibleNodes,
    containsAnyKnockoutShadowEligibleNodes,
    framelikeWithoutFills,
    framelikeWithoutClipping,
    anyNonFrameLikesSelected,
    styleIdForEffect
  } = (e.shouldUseSelectedStyleProperties ? pw : zj)("effects", "inheritEffectStyleKey", "containsAnyKnockoutShadowEligibleNodes", "framelikeWithoutFills", "framelikeWithoutClipping", "anyNonFrameLikesSelected", "containsOnlySpreadEligibleNodes", "styleIdForEffect");
  let _ = wR("guid") ?? null;
  return jsx(_$$F, {
    anyNonFrameLikesSelected: !!anyNonFrameLikesSelected,
    bigNudgeAmount,
    currentSelectedProperty: e.currentSelectedProperty,
    dispatch: e.dispatch,
    dropdownShown: e.dropdownShown,
    effects: effects || [],
    framelikeWithoutClipping: !!framelikeWithoutClipping,
    framelikeWithoutFills: !!framelikeWithoutFills,
    inheritStyleID: styleIdForEffect || null,
    inheritStyleKey: inheritEffectStyleKey || null,
    isUI3: !0,
    library: e.library,
    modalShown: e.modalShown,
    openFile: e.openFile,
    pickerShown: e.pickerShown,
    recordingKey: ew(e.recordingKey, "effectsPanel"),
    sceneGraphSelection: e.sceneGraphSelection,
    selectedStyleGuid: _,
    selectionContainsAnyKnockoutShadowEligibleNodes: !!containsAnyKnockoutShadowEligibleNodes || t,
    selectionContainsOnlySpreadEligibleNodes: !!containsOnlySpreadEligibleNodes || t,
    smallNudgeAmount,
    stylePickerShown: e.stylePickerShown
  }, "effects");
});
export let $$eL1 = i.ConnectedEffectsPanel;
(a || (a = {})).ConnectedTransformModifiersPanel = connect(e => ({
  currentSelectedProperty: e.mirror.appModel.currentSelectedProperty,
  sceneGraphSelection: e.mirror.sceneGraphSelection,
  dropdownShown: e.dropdownShown,
  modalShown: e.modalShown,
  pickerShown: e.pickerShown,
  openFile: e.openFile
}))(function (e) {
  let {
    smallNudgeAmount,
    bigNudgeAmount
  } = sT();
  let {
    transformModifiers
  } = zj("transformModifiers");
  return jsx(_$$H, {
    bigNudgeAmount,
    currentSelectedProperty: e.currentSelectedProperty,
    dispatch: e.dispatch,
    dropdownShown: e.dropdownShown,
    isUI3: !0,
    modalShown: e.modalShown,
    openFile: e.openFile,
    pickerShown: e.pickerShown,
    recordingKey: ew(e.recordingKey, "transformModifiersPanel"),
    sceneGraphSelection: e.sceneGraphSelection,
    smallNudgeAmount,
    transformModifiers: transformModifiers || []
  }, "transformModifiers");
});
export let $$eP4 = a.ConnectedTransformModifiersPanel;
(s || (s = {})).ConnectedGridsPanel = connect(e => ({
  library: e.library,
  currentTool: e.mirror.appModel.currentTool,
  currentSelectedProperty: e.mirror.appModel.currentSelectedProperty,
  activeCanvasEditModeType: e.mirror.appModel.activeCanvasEditModeType,
  sceneGraphSelection: e.mirror.sceneGraphSelection,
  dropdownShown: e.dropdownShown,
  modalShown: e.modalShown,
  pickerShown: e.pickerShown,
  stylePickerShown: e.stylePickerShown,
  openFile: e.openFile
}))(function (e) {
  let t = Ku();
  let {
    smallNudgeAmount,
    bigNudgeAmount
  } = sT();
  let i = getObservableOrFallback(AppStateTsApi.editorPreferences().showFrameGrids);
  let {
    layoutGrids,
    inheritGridStyleKey,
    styleIdForGrid
  } = (e.shouldUseSelectedStyleProperties ? pw : zj)("styleIdForGrid", "layoutGrids", "inheritGridStyleKey");
  let d = wR("guid") ?? null;
  return jsx(_$$S, {
    bigNudgeAmount,
    colorFormat: t,
    currentSelectedProperty: e.currentSelectedProperty,
    currentTool: e.currentTool,
    dispatch: e.dispatch,
    dropdownShown: e.dropdownShown,
    editModeType: e.activeCanvasEditModeType,
    inheritStyleID: styleIdForGrid || null,
    inheritStyleKey: inheritGridStyleKey || null,
    layoutGrids,
    library: e.library,
    modalShown: e.modalShown,
    openFile: e.openFile,
    pickerShown: e.pickerShown,
    recordingKey: ew(e.recordingKey, "gridsPanel"),
    sceneGraphSelection: e.sceneGraphSelection,
    selectedStyleGuid: d,
    showFrameGrids: i,
    smallNudgeAmount,
    stylePickerShown: e.stylePickerShown,
    version: "ui3"
  }, "grids");
});
export let $$eD3 = s.ConnectedGridsPanel;
(e => {
  let t = Tn();
  e.ConnectedTypePanel = connect(e => ({
    library: e.library,
    activeCanvasEditModeType: e.mirror.appModel.activeCanvasEditModeType,
    sceneGraph: e.mirror.sceneGraph,
    sceneGraphSelection: e.mirror.sceneGraphSelection,
    selectedStyleProperties: e.mirror.selectedStyleProperties,
    dropdownShown: e.dropdownShown,
    modalShown: e.modalShown,
    pickerShown: e.pickerShown,
    stylePickerShown: e.stylePickerShown,
    stylePreviewShown: e.stylePreviewShown,
    openFile: e.openFile,
    userFavoriteFonts: e.userFavoriteFonts,
    userFlags: e.userFlags,
    orgById: e.orgById,
    fonts: e.fonts,
    localFontAgentVersion: e.localFontAgentVersion
  }), null, (e, t, r) => ({
    ...e,
    ...r,
    ...t
  }))(function (e) {
    let r = useContext(zK);
    let n = getObservableOrFallback(AppStateTsApi.propertiesPanelState().enabledTypePanelControls);
    let i = e.shouldUseSelectedStyleProperties ? pw : zj;
    let a = e.shouldUseSelectedStyleProperties ? DQ : fC;
    let {
      fontFamily,
      fontStyle,
      fontSize,
      lineHeight,
      intrinsicLineHeight,
      letterSpacing,
      paragraphSpacing,
      paragraphIndent,
      listSpacing,
      textLineType,
      textDirectionality,
      wholeNodeTextLineType,
      isHangingPunctuationApplicableToSelection,
      textCase,
      textDecoration,
      textDecorationSkipInk,
      textUnderlineOffset,
      textDecorationThickness,
      textDecorationStyle,
      inheritTextStyleKey,
      textAutoResize,
      missingFont,
      textTruncation,
      leadingTrim,
      leadingTrimEnabled,
      hangingPunctuation,
      hangingList,
      fontVariantDiscretionaryLigatures,
      fontVariantHistoricalLigatures,
      fontVariantNumericFigure,
      fontVariantNumericSpacing,
      fontVariantNumericFraction,
      fontVariantCaps,
      fontVariantPosition,
      detachOpticalSizeFromFontSize,
      maxLines,
      textAlignHorizontal,
      textAlignVertical,
      areFontStylesUniformOrOnlyMixedDueToTextStyleOverrides,
      validMixedPropertiesForResponsiveTextStyle,
      styleIdForText
    } = i("fontFamily", "fontStyle", "fontSize", "lineHeight", "intrinsicLineHeight", "letterSpacing", "paragraphSpacing", "paragraphIndent", "listSpacing", "textLineType", "textDirectionality", "wholeNodeTextLineType", "isHangingPunctuationApplicableToSelection", "textCase", "textDecoration", "textDecorationSkipInk", "textUnderlineOffset", "textDecorationThickness", "textDecorationStyle", "inheritTextStyleKey", "textAutoResize", "missingFont", "textTruncation", "leadingTrim", "leadingTrimEnabled", "hangingPunctuation", "hangingList", "fontVariantDiscretionaryLigatures", "fontVariantHistoricalLigatures", "fontVariantNumericFigure", "fontVariantNumericSpacing", "fontVariantNumericFraction", "fontVariantCaps", "fontVariantPosition", "detachOpticalSizeFromFontSize", "maxLines", "textAlignHorizontal", "textAlignVertical", "areFontStylesUniformOrOnlyMixedDueToTextStyleOverrides", "validMixedPropertiesForResponsiveTextStyle", "styleIdForText");
    let {
      hasHadRTLText,
      textUserLayoutVersion,
      textExplicitLayoutVersion,
      textBidiVersion,
      fontVariations
    } = a("hasHadRTLText", "textUserLayoutVersion", "textExplicitLayoutVersion", "textBidiVersion", "fontVariations");
    let eg = wR("guid") ?? null;
    (0 | n) & 1 << TextAlignmentOptions.TEXT_TRUNCATION && debug(null != maxLines, "TypePanel missing maxLines");
    let {
      smallNudgeAmount,
      bigNudgeAmount
    } = sT();
    let ey = WH(inheritTextStyleKey ?? null, styleIdForText ?? null, "TEXT");
    let eb = _$$L();
    let eT = selectWithShallowEqual(e => t(e, Sh(e), RR.TEXT));
    let eI = SG(["TEXT_DATA"]).data ?? [];
    let eS = R1().variableConsumptionMap;
    let eA = JG();
    let ex = useAtomWithSubscription($i) === JJ.TEXT_PANEL;
    return fontFamily && fontStyle ? jsx(_$$J, {
      areFontStylesUniformOrOnlyMixedDueToTextStyleOverrides,
      bigNudgeAmount,
      detachOpticalSize: detachOpticalSizeFromFontSize || !1,
      dispatch: e.dispatch,
      dropdownShown: e.dropdownShown,
      editModeType: e.activeCanvasEditModeType,
      enabledTypePanelControls: n,
      fontFamily,
      fontSize,
      fontStyle,
      fontVariantCaps: fontVariantCaps || "NORMAL",
      fontVariantDiscretionaryLigatures: fontVariantDiscretionaryLigatures || !1,
      fontVariantHistoricalLigatures: fontVariantHistoricalLigatures || !1,
      fontVariantNumericFigure: fontVariantNumericFigure || "NORMAL",
      fontVariantNumericFraction: fontVariantNumericFraction || "NORMAL",
      fontVariantNumericSpacing: fontVariantNumericSpacing || "NORMAL",
      fontVariantPosition: fontVariantPosition || "NORMAL",
      fontVariations: fontVariations || [],
      fonts: e.fonts,
      hangingList,
      hangingPunctuation,
      hasHadRTLText,
      inheritStyleID: styleIdForText || null,
      inheritStyleKey: inheritTextStyleKey || null,
      intrinsicLineHeight,
      isHangingPunctuationApplicableToSelection,
      isSlides: e.isSlides,
      isTextPropReferencedByAnyNodeInSelection: eT,
      leadingTrim,
      leadingTrimEnabled,
      letterSpacing,
      library: e.library,
      lineHeight,
      listSpacing,
      localFontAgentVersion: e.localFontAgentVersion,
      mainStyle: ey,
      missingFont,
      modalShown: e.modalShown,
      openFile: e.openFile,
      orgById: e.orgById,
      paragraphIndent,
      paragraphSpacing,
      pickerShown: e.pickerShown,
      recordingKey: ew(e.recordingKey, "typePanel"),
      sceneGraph: e.sceneGraph,
      sceneGraphSelection: e.sceneGraphSelection,
      selectedStyleGuid: eg,
      selectedStyleProperties: e.selectedStyleProperties,
      shouldUseSelectedStyleProperties: e.shouldUseSelectedStyleProperties,
      showBlueBorder: ex,
      smallNudgeAmount,
      stylePickerShown: e.stylePickerShown,
      stylePreviewShown: e.stylePreviewShown,
      textAlignHorizontal,
      textAlignVertical,
      textAutoResize,
      textBidiVersion,
      textCase,
      textContentBoundAsset: eb,
      textDecoration,
      textDecorationSkipInk,
      textDecorationStyle,
      textDecorationThickness,
      textDirectionality,
      textExplicitLayoutVersion,
      textLineType,
      textTruncation,
      textUnderlineOffset,
      textUserLayoutVersion,
      textVariablesExist: eI.length > 0,
      userFavoriteFonts: e.userFavoriteFonts,
      validMixedPropertiesForResponsiveTextStyle,
      variableConsumptionMap: null != r ? eA : eS,
      version: "ui3",
      wholeNodeTextLineType
    }, "type") : null;
  });
})(o || (o = {}));
export let $$ek5 = o.ConnectedTypePanel;
export function $$eM0({
  isVisible: e
}) {
  return jsx(VF, {
    isVisible: e,
    children: () => getFeatureFlags().ce_scale_tool_v2 ? jsx(eI, {
      recordingKey: "scalePanel"
    }, "scale") : jsx(ey, {
      recordingKey: "scalePanel"
    }, "scale")
  });
}
export const F$ = $$eM0;
export const w5 = $$eL1;
export const B8 = $$eR2;
export const tC = $$eD3;
export const sX = $$eP4;
export const gc = $$ek5;
export const tA = $$eC6;
export const rp = $$ex7;
export const GR = $$eO8;
export const Bs = $$eN9;