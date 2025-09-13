import { registerModal } from "../905/102752";
import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useRef, useCallback, useLayoutEffect, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DiagramElementType, InteractionCpp, Fullscreen, AppStateTsApi, LayoutSizingType, Axis, HandoffBindingsCpp, LayoutTabType, UIVisibilitySetting, DesignGraphElements, ViewType } from "../figma_app/763686";
import { memoizeByArgs } from "../figma_app/815945";
import { useCanUseDevModeDemoFile } from "../figma_app/473493";
import { e as _$$e } from "../905/383776";
import { l7, ZO } from "../figma_app/88239";
import { mV } from "../905/837497";
import { gI } from "../figma_app/399472";
import { showModalHandler, hideModal } from "../905/156213";
import { k as _$$k } from "../figma_app/564183";
import { fullscreenValue } from "../figma_app/455680";
import { p8 } from "../figma_app/722362";
import { selectCurrentFile } from "../figma_app/516028";
import { selectCurrentUser } from "../905/372672";
import { debugState } from "../905/407919";
import { trackUserEvent } from "../figma_app/314264";
import { kF } from "../figma_app/915202";
import { $2 } from "../3276/545630";
import { yL } from "../figma_app/242062";
import { Y as _$$Y } from "../905/246212";
import { F as _$$F } from "../905/634016";
import { O as _$$O } from "../905/969533";
import { l as _$$l } from "../905/479687";
import { w as _$$w } from "../figma_app/984514";
import { T as _$$T } from "../figma_app/737897";
import { v as _$$v } from "../figma_app/45501";
import { C as _$$C } from "../figma_app/630916";
import { G as _$$G } from "../figma_app/80900";
import { N as _$$N } from "../905/995635";
import { J as _$$J } from "../905/614223";
import { getFeatureFlags } from "../905/601108";
import M from "classnames";
import { selectWithShallowEqual } from "../905/103090";
import { renderI18nText, getI18nString } from "../905/303541";
import { normalizeValue, isInvalidValue } from "../905/216495";
import { lJ, kl } from "../905/275640";
import { lg } from "../figma_app/164212";
import { lerp, clamp } from "../figma_app/492908";
import { isCommandEvent } from "../905/63728";
import { useHandleChangeEvent, useHandleKeyboardEvent } from "../figma_app/878298";
import { Dm } from "../figma_app/8833";
import { f7 } from "../figma_app/896988";
import { getViewportInfo, viewportToScreen } from "../figma_app/62612";
import { permissionScopeHandler as _$$l2, scopeAwareFunction } from "../905/189185";
import { getSingletonSceneGraph } from "../905/700578";
import { trackFileEventWithStore } from "../figma_app/901889";
import { handleAtomEvent } from "../905/502364";
import { isDevModeFocusViewActive } from "../figma_app/544649";
import { renameNode } from "../figma_app/741237";
import { W as _$$W, d as _$$d } from "../figma_app/833988";
import { xv, uQ } from "../figma_app/151869";
import { s as _$$s } from "../905/780421";
import { g as _$$g } from "../figma_app/240060";
import { Ay } from "../figma_app/838407";
import { trackEventAnalytics } from "../905/449184";
import { customHistory } from "../905/612521";
import { TrackingProvider } from "../figma_app/831799";
import { L as _$$L } from "../905/657783";
import { ConfirmationModal2, ModalView } from "../figma_app/918700";
import { jE, yl, DD } from "../figma_app/639088";
import { lQ } from "../905/934246";
var P = M;
let q = "on_canvas_name_editor--frameNameInput--VpLPf sf_pro--uiFontWithSFProFallback--m-p9V";
function X(e, t, i) {
  let r;
  let {
    maxWidth,
    noSelectOnFocus = !1,
    disableSaveOnEscape = !1,
    hasSlideRowBeenManuallyRenamed = !0
  } = i;
  let {
    padding,
    margin,
    ...h
  } = useSelector(e => e.mirror.appModel.onCanvasNameEditorInfo);
  let m = getViewportInfo({
    subscribeToUpdates_expensive: !0
  });
  let g = m?.zoomScale || 1;
  let [_, x] = useState(e);
  let [y, b] = useState(!0);
  let C = useRef(null);
  let v = useRef(null);
  let [E, T] = useState(0);
  let [w, S] = useState(!1);
  let j = useCallback((e, t) => {
    switch (h.mode) {
      case DiagramElementType.FRAME_NAME:
      case DiagramElementType.VAR_WIDTH_SIZE:
      case DiagramElementType.CANVAS_GRID_ROW_STATE_GROUP:
        T(Math.min(e, maxWidth * g) + 7);
        break;
      case DiagramElementType.CANVAS_GRID_ROW_NAME:
        let i = Math.min(e, maxWidth * g);
        hasSlideRowBeenManuallyRenamed ? T(i + 14) : T(Math.max(i, 40) + 14);
        break;
      case DiagramElementType.RESPONSIVE_SET_NAME:
      case DiagramElementType.SECTION_NAME:
        let r = maxWidth * g;
        h.mode === DiagramElementType.RESPONSIVE_SET_NAME && (r -= 60);
        e < r ? T(e) : T(r - 2 * margin.x);
        break;
      case DiagramElementType.FLOW_STARTING_POINT_NAME:
        T(Math.min(e, maxWidth) + 4);
        break;
      case DiagramElementType.MEASUREMENT_FREE_TEXT:
        T(Math.min(e, maxWidth * g) + 8.5);
        break;
      case DiagramElementType.GRID_TRACK_SIZE:
        let n = e;
        InteractionCpp && (n = InteractionCpp.measureTrackLabelSize(t).x);
        T(Math.min(n, maxWidth * g + 8.5));
    }
  }, [h.mode, maxWidth, g, margin.x, hasSlideRowBeenManuallyRenamed]);
  useLayoutEffect(() => {
    v.current && j(v.current.scrollWidth, _);
  }, [_, j]);
  useEffect(() => {
    e && (b(!0), x(e));
  }, [e]);
  useEffect(() => {
    let e = e => {
      let t = !(C.current && C.current.contains(e.target));
      let i = document.querySelector('[data-resource-id="rename-selection"]');
      let r = e.target && i && i.contains(e.target);
      t && !r && Fullscreen?.hideOnCanvasNameEditor();
    };
    document.addEventListener("mousedown", e);
    return () => {
      document.removeEventListener("mousedown", e);
    };
  }, []);
  let I = useHandleChangeEvent("onCanvasRename", "change", e => {
    x(e.target.value);
  });
  let k = useHandleKeyboardEvent("onCanvasRename", "keydown", e => {
    if (!w) {
      if ("Escape" === e.key && disableSaveOnEscape) {
        b(!1);
        Fullscreen?.hideOnCanvasNameEditor();
        return;
      }
      switch (e.key) {
        case "Escape":
        case "Enter":
        case "Tab":
          e.preventDefault();
          b(!1);
          t(_);
          fullscreenValue.commit();
          Fullscreen?.hideOnCanvasNameEditor();
          break;
        case "=":
        case "-":
          isCommandEvent(e) && f7(e);
      }
    }
  });
  if (!m) return null;
  let N = {};
  let A = viewportToScreen(m, {
    x: h.x,
    y: h.y
  }, !1);
  let O = {
    x: A.x + m.x,
    y: A.y + m.y
  };
  if (h.mode === DiagramElementType.FLOW_STARTING_POINT_NAME && (O.x -= 32 + E, O.y = Math.round(O.y)), h.mode === DiagramElementType.FRAME_NAME) {
    let e = lerp(5, 9, (m.zoomScale - .1) * 5);
    e = clamp(e, 5, 9) - 3;
    O.y -= e;
  }
  if (h.mode === DiagramElementType.CANVAS_GRID_ROW_NAME && AppStateTsApi) {
    let e = AppStateTsApi.canvasGrid().gridRowSpacing() / 2 * m.zoomScale;
    e -= 8;
    O.y -= e;
  }
  switch (h.mode === DiagramElementType.CANVAS_GRID_ROW_STATE_GROUP && AppStateTsApi && (O.y += 8, O.x += 20), h.mode === DiagramElementType.RESPONSIVE_SET_NAME && (O.x += 36, O.y -= 3), h.mode === DiagramElementType.VAR_WIDTH_SIZE && (O.y += 20 * h.varWidthTextDirection.y, O.x += 20 * h.varWidthTextDirection.x), h.mode === DiagramElementType.GRID_TRACK_SIZE ? h.isShownOnLeft ? (N.transformOrigin = `${O.x - 10}px ${O.y}px`, O.x += 10, N.transform = `rotate(${h.angle}deg) translate(calc(${O.x}px - 100%), ${O.y - 10}px)`) : (N.transformOrigin = `${O.x}px ${O.y}px`, N.transform = `rotate(${h.angle}deg) translate(calc(${O.x}px - 50%), ${O.y - 10}px)`) : h.mode === DiagramElementType.MEASUREMENT_FREE_TEXT ? h.invertTextPosition ? N.transform = h.isCentered ? `translate(calc(${O.x}px - 50%), ${O.y - 24}px)` : `translate(calc(${O.x - 6}px - 100%), ${O.y - 9.5}px)` : N.transform = h.isCentered ? `translate(calc(${O.x}px - 50%), ${O.y + 7}px)` : `translate(${O.x + 6}px, ${O.y - 9.5}px)` : h.mode === DiagramElementType.VAR_WIDTH_SIZE ? N.transform = `translate(calc(${O.x}px - 50%), ${O.y - 10}px)` : N.transform = `translate(${O.x}px, ${O.y}px) rotate(${h.angle}deg)`, h.mode) {
    case DiagramElementType.FRAME_NAME:
      r = q;
      break;
    case DiagramElementType.CANVAS_GRID_ROW_NAME:
      r = "on_canvas_name_editor--canvasGridRowNameInput--NtMKm on_canvas_name_editor--frameNameInput--VpLPf sf_pro--uiFontWithSFProFallback--m-p9V";
      break;
    case DiagramElementType.CANVAS_GRID_ROW_STATE_GROUP:
      r = q;
      break;
    case DiagramElementType.FLOW_STARTING_POINT_NAME:
      r = "on_canvas_name_editor--flowStartingPointNameInput--lLEZF";
      break;
    case DiagramElementType.MEASUREMENT_FREE_TEXT:
      r = "on_canvas_name_editor--measurementFreeTextInput--gJle8 sf_pro--uiFontWithSFProFallback--m-p9V";
      break;
    case DiagramElementType.GRID_TRACK_SIZE:
      r = "on_canvas_name_editor--gridTrackSizeInput--TX2Zz sf_pro--uiFontWithSFProFallback--m-p9V";
      break;
    case DiagramElementType.VAR_WIDTH_SIZE:
      r = "on_canvas_name_editor--varWidthSizeInput--34tdd sf_pro--uiFontWithSFProFallback--m-p9V";
  }
  return {
    containerRef: C,
    measurerRef: v,
    containerStyle: N,
    inputClassname: r,
    editingName: _,
    onFocus: e => {
      noSelectOnFocus || e.target.select();
      v.current && j(v.current.scrollWidth, _);
    },
    onChange: I,
    onKeyDown: k,
    onBlur: e => {
      y && (t(e.target.value), fullscreenValue.commit(), e.relatedTarget && "focus-target" === e.relatedTarget.className && Fullscreen?.hideOnCanvasNameEditor());
    },
    width: E,
    setIsComposing: S
  };
}
function Z({
  containerRef: e,
  containerClassname: t,
  containerStyle: i,
  measurerRef: n,
  editingName: a,
  children: s
}) {
  return jsxs("div", {
    ref: e,
    className: P()(t, Dm, "on_canvas_name_editor--containerOnLight--6zUKs"),
    style: i,
    children: [jsx("span", {
      ref: n,
      className: "on_canvas_name_editor--measurer--KTnSp",
      children: a
    }), s]
  });
}
function Q(e) {
  let t = X(e.name, e.setName, {
    maxWidth: e.maxWidth,
    noSelectOnFocus: e.noSelectOnFocus,
    disableSaveOnEscape: e.disableSaveOnEscape,
    hasSlideRowBeenManuallyRenamed: e.hasSlideRowBeenManuallyRenamed
  });
  if (!t) return null;
  let {
    containerRef,
    measurerRef,
    containerStyle,
    editingName,
    onFocus,
    onChange,
    onKeyDown,
    onBlur,
    width,
    setIsComposing,
    inputClassname
  } = t;
  return jsx(Z, {
    containerRef,
    containerStyle,
    measurerRef,
    editingName,
    children: jsx("input", {
      autoCapitalize: "off",
      autoComplete: "off",
      autoCorrect: "off",
      autoFocus: !0,
      className: inputClassname,
      dir: "auto",
      onBlur,
      onChange,
      onCompositionEnd: () => setIsComposing(!1),
      onCompositionStart: () => setIsComposing(!0),
      onFocus,
      onKeyDown,
      spellCheck: !1,
      style: {
        width: `${width}px`
      },
      value: editingName
    })
  });
}
let $ = Object.values(LayoutSizingType).filter(e => "number" == typeof e);
function ee(e) {
  switch (e) {
    case LayoutSizingType.FIXED:
      return "FIXED";
    case LayoutSizingType.HUG:
      return "HUG";
    case LayoutSizingType.FLEX:
      return "FLEX";
  }
}
function et() {
  let e;
  let [t, i] = lJ("gridTrackSize");
  let [n, a] = lJ("gridTrackSizingType");
  let {
    axis,
    width,
    initialText,
    shouldOpenDropdown
  } = selectWithShallowEqual(e => ({
    axis: e.mirror.appModel.onCanvasNameEditorInfo.axis,
    width: e.mirror.selectionProperties.width,
    initialText: e.mirror.appModel.onCanvasNameEditorInfo.initialText,
    shouldOpenDropdown: e.mirror.appModel.onCanvasNameEditorInfo.shouldOpenDropdown
  }));
  let u = normalizeValue(kl("gridRowCount"));
  let p = normalizeValue(kl("gridColumnCount"));
  if (!t || null == n || !width || !p || !u || isInvalidValue(t) || isInvalidValue(n)) return null;
  e = axis === Axis.X ? Math.round(width / p) : Math.round(width / u);
  let h = getFeatureFlags().ce_tv_grid_hug ? "Fill" : "Auto";
  let m = n === LayoutSizingType.FLEX ? h : n === LayoutSizingType.HUG ? "Hug" : lg(t);
  let f = e => {
    var t;
    let r = (t = (t = e).trim().toLowerCase(), "auto".startsWith(t) || "fill".startsWith(t)) ? LayoutSizingType.FLEX : "hug".startsWith(t) && getFeatureFlags().ce_tv_grid_hug ? LayoutSizingType.HUG : "fixed".startsWith(t) ? LayoutSizingType.FIXED : null;
    if (null != r) a(r); else {
      let t = parseFloat(e);
      if (isNaN(t)) return;
      i(t);
    }
  };
  return getFeatureFlags().ce_tv_grid_hug ? jsx(ei, {
    name: initialText || m,
    setName: f,
    maxWidth: e,
    noSelectOnFocus: !!initialText,
    disableSaveOnEscape: !0,
    axis,
    gridTrackSizingType: n,
    setGridTrackSizingType: a,
    shouldOpenDropdown
  }) : jsx(Q, {
    name: initialText || m,
    setName: f,
    maxWidth: e,
    noSelectOnFocus: !!initialText,
    disableSaveOnEscape: !0
  });
}
function ei(e) {
  let t = X(e.name, e.setName, {
    maxWidth: e.maxWidth,
    noSelectOnFocus: e.noSelectOnFocus,
    disableSaveOnEscape: e.disableSaveOnEscape
  });
  let [i, a] = useState(e.shouldOpenDropdown);
  let [o, l] = useState(ee(e.gridTrackSizingType));
  let d = _$$F.useCombobox({
    selected: [ee(e.gridTrackSizingType)],
    activeValue: o,
    onActiveValueChange: l,
    expanded: i,
    expandOnFocus: !1,
    onExpand: a,
    onSelect(t) {
      if (!t) return;
      let i = function (e) {
        switch (e) {
          case "FIXED":
            return LayoutSizingType.FIXED;
          case "HUG":
            return LayoutSizingType.HUG;
          case "FLEX":
            return LayoutSizingType.FLEX;
          default:
            return null;
        }
      }(t);
      null != i && (e.setGridTrackSizingType(i), a(!1), Fullscreen?.hideOnCanvasNameEditor());
    }
  });
  let c = useRef(null);
  if (!t) return null;
  let {
    containerRef,
    measurerRef,
    containerStyle,
    editingName,
    onFocus,
    onChange,
    onKeyDown,
    onBlur,
    width,
    setIsComposing
  } = t;
  return jsx(Z, {
    containerRef,
    containerClassname: e.containerClassname,
    containerStyle,
    measurerRef,
    editingName,
    children: jsxs(_$$J, {
      brand: "design",
      children: [jsxs("div", {
        className: "on_canvas_name_editor--gridTrackSizeComboboxContainer--XhG0G",
        children: [jsx(_$$Y, {
          id: `on-canvas-name-editor-${e.name}`,
          ...d.getInputProps({
            ref: c,
            autoFocus: !0,
            className: "on_canvas_name_editor--gridTrackSizeComboboxInput--BR3nH sf_pro--uiFontWithSFProFallback--m-p9V",
            onChange: (e, {
              event: t
            }) => {
              onChange(t);
            },
            onKeyDown: function (e) {
              "Enter" === e.key && i || onKeyDown(e);
            },
            spellCheck: !1,
            style: {
              width: `${width}px`
            },
            value: editingName,
            htmlAttributes: {
              autoCapitalize: "off",
              autoComplete: "off",
              autoCorrect: "off",
              dir: "auto",
              onBlur,
              onCompositionEnd: () => setIsComposing(!1),
              onCompositionStart: () => setIsComposing(!0),
              onFocus
            }
          })
        }), jsx(_$$F.Trigger, {
          ...d.getTriggerProps(),
          className: "on_canvas_name_editor--gridTrackSizeComboboxTrigger--x3YF2",
          children: jsx(_$$O, {})
        })]
      }), jsx(_$$F.PopupList, {
        ...d.getListProps(),
        anchorEl: c,
        "data-testid": "grid-track-combobox-popup-list",
        placement: "bottom",
        offset: ({
          rects: e
        }) => -e.reference.height / 2 - e.floating.height / 2,
        className: "on_canvas_name_editor--gridTrackSizeComboboxPopupList--VszDC",
        children: $.map(t => jsx(_$$F.Option, {
          value: ee(t),
          className: "on_canvas_name_editor--gridTrackSizeComboboxOption--txB7m",
          recordingKey: `trackSizingTypeOption-${t}`,
          children: jsxs("span", {
            className: P()("on_canvas_name_editor--gridTrackSizeComboboxOptionInner--hHnK8", {
              "on_canvas_name_editor--gridTrackSizeComboboxOptionInnerActive--iBPBQ": o === ee(t)
            }),
            children: [jsx(_$$l, {
              className: "on_canvas_name_editor--gridTrackSizeComboboxOptionCheck--HHUoo"
            }), jsx(er, {
              gridTrackSizingType: t,
              axis: e.axis
            }), jsx(en, {
              gridTrackSizingType: t,
              axis: e.axis
            })]
          })
        }, t))
      })]
    })
  });
}
function er(e) {
  switch (e.gridTrackSizingType) {
    case LayoutSizingType.FIXED:
      return e.axis === Axis.X ? jsx(_$$w, {}) : jsx(_$$T, {});
    case LayoutSizingType.HUG:
      return e.axis === Axis.X ? jsx(_$$v, {}) : jsx(_$$C, {});
    case LayoutSizingType.FLEX:
      return e.axis === Axis.X ? jsx(_$$G, {}) : jsx(_$$N, {});
  }
}
function en(e) {
  switch (e.gridTrackSizingType) {
    case LayoutSizingType.FIXED:
      return e.axis === Axis.X ? renderI18nText("fullscreen.on_canvas_editor.grid_track_size.fixed_width") : renderI18nText("fullscreen.on_canvas_editor.grid_track_size.fixed_height");
    case LayoutSizingType.HUG:
      return renderI18nText("fullscreen.on_canvas_editor.grid_track_size.hug");
    case LayoutSizingType.FLEX:
      return e.axis === Axis.X ? renderI18nText("fullscreen.on_canvas_editor.grid_track_size.fill_column") : renderI18nText("fullscreen.on_canvas_editor.grid_track_size.fill_row");
  }
}
function eh() {
  let e = useSelector(e => e.mirror.selectionProperties.name);
  let t = useSelector(e => e.mirror.selectionProperties.width);
  let i = xv();
  let n = _$$W();
  if (!e || !t || !i) return null;
  let o = InteractionCpp?.editorTypeConfig().hasSlideRowBeenManuallyRenamed(i) ?? !0;
  return jsx(Q, {
    name: o ? e : "",
    setName: t => {
      e && (_$$l2.user("rename-frame", () => renameNode(i, t)), n({
        newTitle: t,
        nodeType: "FRAME"
      }), t !== e && _$$d(t).length > 0 && handleAtomEvent({
        id: "frame_node_name_changed_with_rfd_indicator",
        properties: {
          nodeId: i
        }
      }));
    },
    maxWidth: t,
    hasSlideRowBeenManuallyRenamed: o
  });
}
function em() {
  return jsx(_$$J, {
    brand: "design",
    children: eh()
  });
}
function ef() {
  let [e, t] = lJ("prototypeStartingPoint");
  let i = normalizeValue(e)?.name || "";
  return i ? jsx(Q, {
    name: i,
    setName: i => {
      i && t({
        name: i,
        description: normalizeValue(e)?.description || "",
        position: normalizeValue(e)?.position || ""
      });
    },
    maxWidth: 93,
    containerClassname: "on_canvas_name_editor--flowStartingPointNameContainer--JdVwd"
  }) : null;
}
function eg() {
  let {
    measurementId,
    initMeasurementText
  } = useSelector(e => e.mirror.appModel.onCanvasNameEditorInfo);
  let i = useSelector(e => e.mirror.appModel.currentPage);
  let o = useMemo(() => HandoffBindingsCpp.findMeasurement(measurementId, i), [measurementId, i]);
  let l = useRef(!o?.freeText);
  let d = isDevModeFocusViewActive();
  let c = function () {
    let e = trackFileEventWithStore();
    return useCallback((t, i, r) => {
      let n = t.findContainingTopLevelFrameOrSelf();
      let a = t.containingCanvas;
      let s = {
        measurement_id: i.id,
        from_node_id: i.fromNode,
        to_node_id: 1 === i.toNode.length ? i.toNode[0].toString() : i.toNode.toString(),
        node_type: t.type
      };
      n && (s.tlf_id = n);
      a && (s.page_id = a);
      s.free_text = r;
      e("update_annotation_measurement_free_text", s);
    }, [e]);
  }();
  return o ? d ? (Fullscreen?.hideOnCanvasNameEditor(), null) : jsx(Q, {
    name: initMeasurementText,
    setName: e => {
      let i = getSingletonSceneGraph().get(o.fromNode);
      if (i) {
        if (l && e === initMeasurementText) return;
        _$$l2.user("free-text-annotation-measurement", () => {
          i.updateMeasurementFreeText(o.id, e);
          c(i, o, e);
        });
      }
    },
    maxWidth: 150
  }) : null;
}
function e_() {
  let {
    varWidthNodeId,
    varWidthIndex
  } = useSelector(e => e.mirror.appModel.onCanvasNameEditorInfo);
  let i = trackFileEventWithStore();
  let n = getSingletonSceneGraph().get(varWidthNodeId);
  if (!n) return null;
  let s = n.variableWidthPoints;
  let o = n.strokeWeight;
  if (s.length <= varWidthIndex) return null;
  let l = s[varWidthIndex];
  let d = l.ascent * o * 2;
  return jsx(Q, {
    name: (Math.round(10 * d) / 10).toString(),
    containerClassname: "on_canvas_name_editor--varWidthSizeContainer--GP30J",
    setName: e => scopeAwareFunction.user("set-var-width-point-ascent", () => {
      let r = parseFloat(e);
      if (isNaN(r)) return;
      let a = [...s];
      a[varWidthIndex] = {
        ...l,
        ascent: r / (2 * o)
      };
      n.variableWidthPoints = a;
      i("on_canvas_var_width_point_update", {
        node_id: n.id
      });
    })(),
    maxWidth: 200
  });
}
function ex() {
  let e = useSelector(e => e.mirror.selectionProperties.name);
  let t = useSelector(e => e.mirror.selectionProperties.width);
  let i = _$$W();
  return null != e && t ? jsx(ey, {
    name: e,
    setNameWithNodeId: (e, t) => {
      _$$l2.user("rename-section", () => renameNode(e, t ? t.trim() : ""));
      i({
        newTitle: t,
        nodeType: "SECTION"
      });
    },
    maxWidth: t
  }) : null;
}
function ey(e) {
  let {
    name,
    setNameWithNodeId,
    maxWidth
  } = e;
  let o = uQ();
  let l = X(name, e => {
    o && setNameWithNodeId(o, e);
  }, {
    maxWidth
  });
  let d = useSelector(e => {
    let t = e.mirror.appModel.activeCanvasEditModeType;
    return t === LayoutTabType.DESIGN_LAYOUT || t === LayoutTabType.SITES_LAYOUT;
  });
  let {
    fontSize,
    top,
    left,
    height,
    horizontalPadding,
    verticalPadding,
    borderRadius
  } = function (e, t) {
    let {
      fontSize: _fontSize,
      padding,
      margin,
      cornerRadius
    } = useSelector(e => e.mirror.appModel.onCanvasNameEditorInfo);
    let l = InteractionCpp.editorTypeConfig().showBigSectionNamePills();
    let d = padding.x;
    let c = padding.y;
    let u = l ? 24 : 2 * padding.y + _fontSize;
    let p = 0;
    let h = -margin.y - u;
    let m = InteractionCpp.editorTypeConfig().sectionNestedZoomLevel();
    (!e || t <= m) && (p = margin.x, h = margin.y);
    return {
      fontSize: _fontSize,
      height: u,
      top: h,
      left: p,
      horizontalPadding: d,
      verticalPadding: c,
      borderRadius: cornerRadius
    };
  }(useSelector(e => {
    if (null === o) return !1;
    let t = e.mirror.sceneGraph.get(o);
    let i = e.mirror.appModel.currentPage;
    let r = !!t?.isResponsiveSet;
    return t && ("SECTION" === t.type || r) && t.parentGuid === i;
  }), Math.round(100 * getViewportInfo({
    subscribeToUpdates_expensive: !0
  }).zoomScale));
  if (!l || !o) return null;
  let {
    containerRef,
    measurerRef,
    containerStyle,
    editingName,
    onFocus,
    onChange,
    onKeyDown,
    onBlur,
    width,
    setIsComposing
  } = l;
  let j = d ? "normal" : 500;
  return jsxs("div", {
    ref: containerRef,
    className: `on_canvas_name_editor--sectionNameContainer--D8aez ${Dm}`,
    style: containerStyle,
    children: [jsx("span", {
      ref: measurerRef,
      className: "on_canvas_name_editor--sectionMeasurer--kfBij",
      style: {
        fontSize,
        fontWeight: j,
        paddingLeft: horizontalPadding,
        paddingRight: horizontalPadding,
        paddingTop: verticalPadding,
        paddingBottom: verticalPadding
      },
      children: editingName
    }), jsx("input", {
      autoCapitalize: "off",
      autoComplete: "off",
      autoCorrect: "off",
      autoFocus: !0,
      className: "on_canvas_name_editor--sectionNameInput--MgIUi",
      dir: "auto",
      onBlur,
      onChange,
      onCompositionEnd: () => setIsComposing(!1),
      onCompositionStart: () => setIsComposing(!0),
      onFocus,
      onKeyDown,
      spellCheck: !1,
      style: {
        width: `${width}px`,
        fontSize,
        fontWeight: j,
        left,
        top,
        height,
        borderRadius,
        paddingLeft: horizontalPadding,
        paddingRight: horizontalPadding,
        paddingTop: verticalPadding,
        paddingBottom: verticalPadding
      },
      value: editingName
    })]
  });
}
function ek(e) {
  let t = selectCurrentUser();
  return jsx(TrackingProvider, {
    name: "Starter team edit confirmation modal",
    properties: {
      userId: t?.id,
      userEmail: t?.email
    },
    children: jsx(ConfirmationModal2, {
      confirmationTitle: getI18nString("fullscreen.starter_team_edit_modal.open_this_link"),
      confirmText: "Continue",
      onConfirm: () => {
        trackEventAnalytics("Starter File Edit Modal Confirm Clicked", {
          fileKey: e.fileKey
        });
        _$$L.createStarterTeamFileRole({
          key: e.fileKey
        });
      },
      disableClickOutsideToHide: !0,
      hideOnConfirm: !1,
      size: "small",
      hideCancel: !1,
      hideClose: !0,
      onCancel: () => {
        trackEventAnalytics("Starter File Edit Modal Cancel Clicked", {
          fileKey: e.fileKey
        });
        customHistory.redirect("/files/recents-and-sharing");
      },
      children: jsx("div", {
        className: jE,
        children: renderI18nText("fullscreen.starter_team_edit_modal.when_you_open_this_link_your_email_may_be_visible", {
          email: t?.email
        })
      })
    })
  });
}
let eA = registerModal(function (e) {
  return jsxs(ModalView, {
    size: "small",
    className: yl,
    disableClickOutsideToHide: !0,
    hide: lQ,
    children: [jsx("div", {
      className: DD,
      children: renderI18nText("file_migration.updating.title")
    }), jsx("div", {
      className: jE,
      children: renderI18nText("file_migration.updating.message")
    })]
  });
}, "FileMigrationWarningModal");
function eO() {
  return useSelector(e => e.progressBarState);
}
export let $$eL4 = memoizeByArgs((e, t, i) => {
  e(gI());
  e(mV({}));
});
export function $$eR2() {
  switch (p8("onCanvasNameEditorInfo").mode) {
    case DiagramElementType.FRAME_NAME:
      return jsx(eh, {});
    case DiagramElementType.FLOW_STARTING_POINT_NAME:
      return jsx(ef, {});
    case DiagramElementType.SECTION_NAME:
      return jsx(ex, {});
    case DiagramElementType.MEASUREMENT_FREE_TEXT:
      return jsx(eg, {});
    case DiagramElementType.RESPONSIVE_SET_NAME:
      return jsx(ex, {});
    case DiagramElementType.CANVAS_GRID_ROW_NAME:
      return jsx(em, {});
    case DiagramElementType.CANVAS_GRID_ROW_STATE_GROUP:
      return jsx(eh, {});
    case DiagramElementType.GRID_TRACK_SIZE:
      return jsx(et, {});
    case DiagramElementType.VAR_WIDTH_SIZE:
      return jsx(e_, {});
    default:
      return null;
  }
}
export function $$eD3() {
  let e = eO();
  let t = useSelector(e => e.showingOpenDesktopAppModal);
  let i = useDispatch();
  if (e.mode !== UIVisibilitySetting.OFF) return jsx(Fragment, {});
  switch (t) {
    case kF.FOR_OPEN:
      return jsx(_$$g, {
        dispatch: i
      });
    case kF.FOR_MENU:
      return jsx(_$$s, {
        dispatch: i
      });
  }
  return jsx(Fragment, {});
}
export function $$eM0(e) {
  let t = selectCurrentFile();
  let i = selectCurrentUser();
  return e.showStartModal && i && t && t.key ? jsx(ek, {
    fileKey: t.key
  }) : jsx(Fragment, {});
}
export function $$eP7() {
  let e = useRef(null);
  let t = useRef(!1);
  let i = eO();
  let r = useDispatch();
  let o = useSelector(e => e.needsUpgrade);
  let l = useCallback(() => {
    null !== e.current && (clearTimeout(e.current), e.current = null);
  }, [e]);
  let d = useCallback(() => {
    l();
    e.current = setTimeout(() => {
      t.current = !0;
      o && i.mode !== UIVisibilitySetting.OFF && r(showModalHandler({
        type: eA
      }));
    }, 2e4);
  }, [o, i, r, l]);
  let c = useCallback(() => {
    t.current && r(hideModal());
    t.current = !1;
    l();
  }, [t, l, r]);
  useEffect(() => (fullscreenValue.fromFullscreen.on("multiplayerConnect", d), fullscreenValue.fromFullscreen.on("multiplayerDisconnect", l), fullscreenValue.fromFullscreen.on("multiplayerGotSchema", c), () => {
    fullscreenValue.fromFullscreen.removeListener("multiplayerConnect", d);
    fullscreenValue.fromFullscreen.removeListener("multiplayerDisconnect", l);
    fullscreenValue.fromFullscreen.removeListener("multiplayerGotSchema", c);
    l();
  }), [l, d, c]);
}
export function $$eF5(e, t, i) {
  !t.current && function (e, t) {
    if (t === DesignGraphElements.VECTOR_PENCIL || t === DesignGraphElements.ERASER || t === DesignGraphElements.HIGHLIGHTER) {
      var i;
      i = "figjam";
      trackUserEvent("Pointer Input", debugState.getState(), {
        inputSource: e.pointerType,
        tool: function (e) {
          switch (e) {
            case DesignGraphElements.VECTOR_PENCIL:
              return "VECTOR_PENCIL";
            case DesignGraphElements.ERASER:
              return "ERASER";
            case DesignGraphElements.HIGHLIGHTER:
              return "HIGHLIGHTER";
          }
        }(t),
        productType: i
      });
      return !0;
    }
    return !1;
  }(e, i) && (t.current = !0);
}
export function $$eB6(e, t) {
  t.current || (t.current = !0);
}
export function $$eU1({
  commentsDetailContainerRef: e
}) {
  let t = p8("topLevelMode") === ViewType.HISTORY;
  let i = selectCurrentFile();
  let n = useSelector(e => e.user);
  let o = p8("currentPage");
  let u = useSelector(e => e.comments);
  let p = l7();
  let h = _$$e();
  let f = ZO();
  let x = _$$k();
  let y = useCanUseDevModeDemoFile();
  let b = u.activeThread?.id || null;
  let C = u.showOnlyParticipating;
  let T = u.showResolved;
  return jsxs(Fragment, {
    children: [jsx(Ay, {}), i && !t && !p && !h && !f && (n || x) && !y && jsx($2, {
      showOnlyParticipatingComments: C,
      showResolvedComments: T,
      pageId: o,
      activeId: b,
      renderDetailContainerInPortal: !0,
      detailContainerPortal: e.current
    }), !y && jsx(yL, {})]
  });
}
export const jx = $$eM0;
export const XI = $$eU1;
export const qn = $$eR2;
export const Nd = $$eD3;
export const RS = $$eL4;
export const P2 = $$eF5;
export const j6 = $$eB6;
export const Ky = $$eP7;
