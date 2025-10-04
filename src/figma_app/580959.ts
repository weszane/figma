import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { memo, useCallback, PureComponent, createRef, useContext, useMemo, forwardRef, useEffect, Fragment as _$$Fragment, useState, useRef } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { debounce } from "../905/915765";
import { nearlyEqual } from "../figma_app/492908";
import { Checkbox } from "../905/274480";
import { Label } from "../905/270045";
import { T as _$$T } from "../905/68180";
import { IconButton } from "../905/443068";
import { EventShield } from "../905/821217";
import { ButtonPrimitive } from "../905/632989";
import { Button, ButtonWide } from "../905/521428";
import { U as _$$U } from "../905/708285";
import { O as _$$O } from "../905/487602";
import { A as _$$A } from "../905/24328";
import { y as _$$y } from "../905/661502";
import { PropertyScope, VisibilityCondition, VariableResolvedDataType, NodePropertyCategory, DrawingElementType, StyleVariableOperation, CopyPasteType, Fullscreen, Command, SelectionPaintHelpers, AppStateTsApi } from "../figma_app/763686";
import { n3, VariableStyleId } from "../905/859698";
import { permissionScopeHandler } from "../905/189185";
import { GP } from "../figma_app/15927";
import { convertKiwiToVariableIdString } from "../905/805904";
import { getFeatureFlags } from "../905/601108";
import { atomStoreManager, atom, useAtomValueAndSetter } from "../figma_app/27355";
import { memoizeByArgs } from "../figma_app/815945";
import C from "classnames";
import { trackEventAnalytics } from "../905/449184";
import { M as _$$M } from "../figma_app/648761";
import { selectWithShallowEqual } from "../905/103090";
import { generateRecordingKey, useHandleMouseEvent } from "../figma_app/878298";
import { formatCount } from "../figma_app/930338";
import { k as _$$k2 } from "../905/582200";
import { Y as _$$Y } from "../905/506207";
import { ErrorBoundaryCrash, errorBoundaryFallbackTypes } from "../905/751457";
import { SvgComponent } from "../905/714743";
import { getI18nString, renderI18nText } from "../905/303541";
import { _j } from "../figma_app/843119";
import { U as _$$U2 } from "../905/492359";
import { hidePickerThunk, showPickerThunk, hideStylePicker, stylePickerViewChangedThunk, showStylePicker } from "../figma_app/91703";
import { applySharedStyle, loadSharedStyle } from "../figma_app/933328";
import { showModalHandler } from "../905/156213";
import { showPickerInStyleCreation, hidePickerInStyleCreation } from "../905/295712";
import { updateCurrentSelectionPaintInPicker, forceUpdateSelectionPaintsForUndo } from "../905/854717";
import { sw } from "../figma_app/914957";
import { yJ, F7 } from "../figma_app/8833";
import { formatI18nMessage } from "../905/482208";
import { AutoColorFormatter, FormattedHexColor } from "../905/713722";
import { ZB } from "../figma_app/451499";
import { stopPropagation } from "../figma_app/753501";
import { fullscreenValue } from "../figma_app/455680";
import { getNudgeAmounts } from "../figma_app/740163";
import { isValidValue, normalizeValue, MIXED_MARKER, valueOrFallback, isAutoMarker, isInvalidValue } from "../905/216495";
import { isSolidType, paintManager, defaultGrayColor } from "../figma_app/385874";
import { updateGIFImageProperties } from "../905/619652";
import { b as _$$b } from "../figma_app/755529";
import { useSelectionPropertyValue, useHasSelectedStyle } from "../905/275640";
import { Rb, Pt as _$$Pt } from "../figma_app/852050";
import { useDropdownState } from "../905/848862";
import { useAppModelProperty } from "../figma_app/722362";
import { useCurrentFileKey } from "../figma_app/516028";
import { Xo } from "../figma_app/482495";
import { useLabConfiguration, labConfigurations } from "../905/226610";
import { useStyleSubscriptionInfo, useStyleSubscriptionName, useOptimisticStyleThumbnailUpdate } from "../figma_app/646357";
import { generateSlug, PanelIdentifiers } from "../figma_app/242339";
import { Q as _$$Q } from "../figma_app/104130";
import { b as _$$b2 } from "../figma_app/882253";
import { SubscriptionStatusEnum } from "../figma_app/633080";
import { yesNoTrackingEnum } from "../figma_app/198712";
import { K as _$$K2 } from "../905/733706";
import { KindEnum } from "../905/129884";
import { calculatePickerPositionLeft } from "../905/959568";
import { OpacityInput } from "../figma_app/178475";
import { a2 } from "../figma_app/762558";
import { executeWithDSAAction } from "../905/135117";
import { om } from "../figma_app/395097";
import { D as _$$D2, J as _$$J2 } from "../905/225412";
import { JH, y5, Tu } from "../figma_app/479313";
import { zK } from "../905/182453";
import { xm, Rz, ku } from "../905/149223";
import { hasAliasedColorsInGradient } from "../905/706046";
import { Kx } from "../905/401389";
import { FormattedInputVariant3 } from "../905/203369";
import { b as _$$b3, O as _$$O2 } from "../905/916974";
import { Zk, fI, nV } from "../figma_app/626177";
import { CL } from "../figma_app/722913";
import { zi } from "../905/824449";
import { MM, UP } from "../figma_app/246831";
import { N2 } from "../905/213527";
import { AH } from "../905/571648";
import { yT, WH, OS } from "../figma_app/836943";
import { dD, Qu, lt, z$ } from "../figma_app/941824";
import { mS } from "../figma_app/711157";
import { Ad, pG, Y9, DE } from "../figma_app/811257";
import { B as _$$B2 } from "../905/229357";
import { $ as _$$$ } from "../figma_app/297778";
import { qj } from "../905/579068";
import { aZ } from "../figma_app/481279";
import { y as _$$y2 } from "../905/871724";
import { d2 } from "../figma_app/225126";
import { Fs } from "../figma_app/743107";
import { t as _$$t2 } from "../905/332351";
import { ZQ, UX } from "../905/668609";
import { a as _$$a } from "../905/597867";
import { useIsFullscreenSitesView } from "../905/561485";
import { useIsFullscreenSlidesView } from "../figma_app/21029";
import { isSlidesFile } from "../figma_app/252485";
import { Sw, rM, UM } from "../905/95091";
import { s as _$$s2 } from "../figma_app/268276";
import { renderEventShield } from "../905/907246";
import { t as _$$t3 } from "../905/859481";
import { V0, zr, w8, Fc } from "../figma_app/359164";
import { v9, N4, LO } from "../figma_app/433906";
import { CZ, kR } from "../figma_app/973219";
import { zm, Cv, BT, np, wM, NI, L3, mK, p as _$$p, Tp, EC, x7, n1, EX, wh, cD, GI, d0, gr, OG, uV, u7, FK, Hl, g2, IQ, zy, OJ } from "../figma_app/228217";
import { A as _$$A3 } from "../2854/630701";
var n;
var w = C;
let $$tt9 = new Set([PropertyScope.STROKE]);
let tr = e => {
  fullscreenValue.updateSelectionProperties({
    exportBackgroundDisabled: !e
  });
};
let tn = (e, t, r, n) => {
  getFeatureFlags().ce_properties_panel_tracking && trackEventAnalytics("editor-paints-panel-fill-change");
  fullscreenValue.updateSelectionProperties({
    fillPaints: e
  }, {
    shouldCommit: t,
    overwrite: n ?? VisibilityCondition.ONLY_WHEN_NOT_EMPTY
  });
  a2("fillPaints");
};
let $$ti6 = memo(function (e) {
  let {
    dispatch
  } = e;
  let r = useIsFullscreenSitesView();
  let n = useSelector(e => {
    let t = e.mirror.selectionProperties.fillPaints;
    return !t || isValidValue(t) && 0 === t.length;
  });
  let o = Fs("FILL", "PROPS_PANEL", VariableResolvedDataType.COLOR);
  let l = useCallback((e, {
    fromSearch: r
  } = {}) => {
    dispatch(applySharedStyle({
      style: e,
      inheritStyleKeyField: "inheritFillStyleKey",
      fromSearch: r
    }));
  }, [dispatch]);
  let u = normalizeValue(_$$b("guid"));
  let p = yT({
    ...e,
    styleType: "FILL",
    inheritStyleKeyField: "inheritFillStyleKey",
    selectedStyleGuid: u
  });
  let _ = xm(e);
  let h = useCallback(() => {
    getFeatureFlags().ce_properties_panel_tracking && trackEventAnalytics("editor-paints-panel-fill-color-picker-show");
  }, []);
  let m = useLabConfiguration(labConfigurations.useGrid);
  return jsx(ErrorBoundaryCrash, {
    boundaryKey: "FillPanel",
    fallback: errorBoundaryFallbackTypes.NONE_I_KNOW_WHAT_IM_DOING,
    children: jsx(_$$k2, {
      name: "fill_panel",
      children: jsx("div", {
        className: "displayContents",
        "data-test-id": "fill_panel",
        children: jsxs(Zk, {
          children: [jsx(dD.Provider, {
            value: {
              useGrid: m
            },
            children: jsx(d2.Provider, {
              value: o,
              children: jsx($$tu7, {
                currentSelectedProperty: e.currentSelectedProperty,
                isPanelBodyCollapsedAtom: e.isPanelBodyCollapsedAtom,
                onApplyStyle: l,
                onChange: tn,
                onPickerShown: h,
                pickerInStyleCreationShown: e.pickerInStyleCreationShown,
                recordingKey: generateRecordingKey(e, "paintList"),
                selectedPropertyType: NodePropertyCategory.FILL,
                shouldUseSelectedStyleProperties: e.shouldUseSelectedStyleProperties,
                variableScopes: e.variableScopes,
                ..._,
                ...p
              })
            })
          }), jsx(JH, {
            isPanelBodyCollapsedAtom: e.isPanelBodyCollapsedAtom,
            children: (() => {
              if (e.selectionContainsFrames && e.hasExports && !r && !n) return jsx(Ad, {
                label: jsx(Fragment, {}),
                input: jsx(Checkbox, {
                  muted: !0,
                  mixed: e.exportBackgroundDisabled === MIXED_MARKER,
                  checked: !1 === e.exportBackgroundDisabled,
                  onChange: tr,
                  recordingKey: generateRecordingKey(e, "exportDisableCheckbox"),
                  label: jsx(Label, {
                    htmlAttributes: {
                      "data-tooltip": getI18nString("fullscreen.properties_panel.fill.include_the_canvas_or_group_background_in_exports"),
                      "data-tooltip-type": KindEnum.TEXT
                    },
                    children: renderI18nText("fullscreen.properties_panel.fill.show_in_exports")
                  }),
                  htmlAttributes: {
                    "data-tooltip": getI18nString("fullscreen.properties_panel.fill.include_the_canvas_or_group_background_in_exports"),
                    "data-tooltip-type": KindEnum.TEXT
                  }
                })
              });
            })()
          })]
        })
      })
    })
  });
});
export function $$ta0(e) {
  let {
    bigNudgeAmount,
    smallNudgeAmount
  } = getNudgeAmounts();
  let n = V0();
  let a = CL();
  let s = useAppModelProperty("currentSelectedProperty");
  let o = useAppModelProperty("currentSelectedGradientStop");
  let l = useAppModelProperty("currentTool");
  let d = useAppModelProperty("activeCanvasEditModeType");
  let c = zr();
  let u = normalizeValue(_$$b("guid"));
  let p = Fs("STROKE", "PROPS_PANEL", VariableResolvedDataType.COLOR);
  let _ = useLabConfiguration(labConfigurations.useGrid);
  return jsx(dD.Provider, {
    value: {
      useGrid: _
    },
    children: jsx(d2.Provider, {
      value: p,
      children: jsx(to, {
        ...e,
        ...c,
        currentSelectedProperty: s,
        currentSelectedGradientStop: o,
        currentTool: l,
        editModeType: d,
        bigNudgeAmount,
        smallNudgeAmount,
        selectedStyleGuid: u,
        strokePanelMode: n,
        strokeType: a
      })
    })
  });
}
function ts() {
  getFeatureFlags().ce_properties_panel_tracking && trackEventAnalytics("editor-paints-panel-stroke-color-picker-show");
}
class to extends PureComponent {
  constructor() {
    super(...arguments);
    this.settingsId = "stroke-settings";
    this.state = {
      syncState: "NONE",
      individualBorderOption: om.ALL
    };
    this.stopPropagation = e => e.stopPropagation();
    this.onPaintsChange = (e, t, r, n) => {
      getFeatureFlags().ce_properties_panel_tracking && trackEventAnalytics("editor-paints-panel-stroke-change", {
        key: "color"
      });
      let i = 0 === e.length ? {
        strokePaints: e,
        variableWidthPoints: []
      } : {
        strokePaints: e
      };
      fullscreenValue.updateSelectionProperties(i, {
        shouldCommit: t,
        overwrite: n ?? VisibilityCondition.ONLY_WHEN_NOT_EMPTY
      });
      a2("strokePaints");
    };
    this.onNonPaintsChange = (e, t = yesNoTrackingEnum.YES) => w8(this.props.strokePaints, e, t);
    this.onApplyStyle = (e, {
      fromSearch: t
    } = {}) => {
      this.props.dispatch(applySharedStyle({
        style: e,
        inheritStyleKeyField: "inheritFillStyleKeyForStroke",
        fromSearch: t
      }));
    };
    this.bordersAlignmentOnChange = (e, t = yesNoTrackingEnum.YES) => {
      if (this.state.individualBorderOption !== om.ALL) {
        let {
          strokeAlign
        } = e;
        trackEventAnalytics("Individual Border Alignment Changed", {
          position: isValidValue(strokeAlign) ? strokeAlign : "__mixed__"
        });
      }
      this.onNonPaintsChange(e, t);
    };
    this.forwardedRef = createRef();
    this.toggleSettings = () => {
      if (this.props.pickerShown?.id === this.settingsId) this.props.dispatch(hidePickerThunk());else {
        if (!this.forwardedRef || !this.forwardedRef.current) return;
        trackEventAnalytics("editor-paints-panel-advanced-stroke-show");
        let e = calculatePickerPositionLeft(this.forwardedRef.current);
        this.props.dispatch(showPickerThunk({
          id: this.settingsId,
          initialX: e.x,
          initialY: e.y
        }));
        this.props.dispatch(hideStylePicker());
        this.props.dispatch(sw());
      }
    };
    this.setIndividualBorderOption = e => {
      this.setState({
        individualBorderOption: e
      });
    };
    this.updateSyncState = e => {
      if ("reset" === e) {
        this.setState({
          syncState: "NONE"
        });
        return;
      }
      switch (this.state.syncState) {
        case "NONE":
          "changed start" === e ? this.setState({
            syncState: "CHANGED_START"
          }) : "changed end" === e && this.setState({
            syncState: "CHANGED_END"
          });
          break;
        case "CHANGED_START":
          "changed end" === e && this.setState({
            syncState: "CHANGED_BOTH"
          });
          break;
        case "CHANGED_END":
          "changed start" === e && this.setState({
            syncState: "CHANGED_BOTH"
          });
      }
    };
    this.componentDidUpdate = e => {
      e.sceneGraphSelection !== this.props.sceneGraphSelection && this.setState({
        syncState: "NONE",
        individualBorderOption: om.ALL
      });
    };
  }
  render() {
    let e = yT({
      ...this.props,
      styleType: "FILL",
      inheritStyleKeyField: "inheritFillStyleKeyForStroke"
    });
    let t = Fc(this.props.numSelectedByType, this.props.strokePaints, e.inheritStyleKey);
    let r = this.props.pickerShown?.id === this.settingsId;
    let n = this.props.strokePanelMode !== DrawingElementType.WASHI_TAPE;
    return jsx(_$$k2, {
      name: "stroke_panel",
      children: jsxs(Zk, {
        "data-testid": "stroke-panel-id",
        children: [jsx($$tu7, {
          currentSelectedProperty: this.props.currentSelectedProperty,
          onApplyStyle: this.onApplyStyle,
          onChange: this.onPaintsChange,
          onPickerShown: ts,
          pickerInStyleCreationShown: this.props.pickerInStyleCreationShown,
          recordingKey: generateRecordingKey(this.props, "paintList"),
          selectedPropertyType: NodePropertyCategory.STROKE,
          variableScopes: $$tt9,
          ...Rz(this.props),
          ...e,
          advancedSettingsTooltip: getI18nString("fullscreen.properties_panel.fill.advanced_stroke_settings"),
          isPanelBodyCollapsedAtom: this.props.isPanelBodyCollapsedAtom,
          onToggleAdvancedSettings: t && n ? this.toggleSettings : void 0,
          onToggleListLayout: this.toggleSettings
        }), t && jsx(_$$t3, {
          arcRadius: this.props.arcRadius,
          borderSharedWeight: this.props.borderSharedWeight,
          connectorLineStyle: this.props.connectorLineStyle,
          dashCap: this.props.dashCap,
          dashPattern: this.props.dashPattern,
          dispatch: this.props.dispatch,
          dropdownShown: this.props.dropdownShown,
          forwardedRef: this.forwardedRef,
          individualBorderOption: this.state.individualBorderOption,
          leftEndCap: this.props.leftEndCap,
          maxStrokeWeight: this.props.maxStrokeWeight,
          miterLimitAngle: this.props.miterLimitAngle,
          numSelectedByType: this.props.numSelectedByType,
          onBordersAlignmentChange: this.bordersAlignmentOnChange,
          onNonPaintsChange: this.onNonPaintsChange,
          pickerShown: this.props.pickerShown,
          recordingKey: this.props.recordingKey,
          rightEndCap: this.props.rightEndCap,
          setIndividualBorderOption: this.setIndividualBorderOption,
          showAdvancedStrokeSettings: n,
          showStrokePicker: r,
          stopPropagation: this.stopPropagation,
          strokeAlign: this.props.strokeAlign,
          strokeCap: this.props.strokeCap,
          strokeJoin: this.props.strokeJoin,
          syncState: this.state.syncState,
          terminalCap: this.props.terminalCap,
          toggleSettings: this.toggleSettings,
          updateSyncState: this.updateSyncState
        })]
      })
    });
  }
}
to.displayName = "StrokePanel";
let tl = _$$b3();
let td = _$$b3();
let $$tc5 = memo(function ({
  title: e,
  propertyList: t,
  onChange: r,
  onApplyStyle: n,
  addProperty: o,
  overrideAddPropertyTooltip: l,
  onReorder: d,
  renderProperty: c,
  onDeleteProperty: u,
  onToggleListLayout: p,
  styleType: _,
  inheritStyleKey: h,
  inheritStyleKeyField: m,
  inheritStyleID: g,
  stylePickerListLayout: f,
  removeAllProperties: E,
  library: y,
  defaultColor: T,
  openFile: I,
  stylePickerShown: S,
  currentSelectedProperty: v,
  selectedPropertyType: A,
  modalShown: x,
  sceneGraphSelection: N,
  recordingKey: C,
  onToggleAdvancedSettings: w,
  advancedSettingsTooltip: O,
  isPanelBodyCollapsedAtom: R,
  selectedStyleGuid: L,
  entrypointMenu: D
}) {
  let k = useDispatch();
  let M = Xo();
  let F = useDropdownState();
  let j = !!useContext(zK);
  let U = j ? `style-modal-${qj(m)}` : qj(m);
  let B = WH(h, g, _);
  let G = AH(B?.key ?? null, normalizeValue(g));
  let H = B?.isLocal ? B : G?.status === "loaded" ? G.data : null;
  let z = function () {
    let e = Rb();
    let t = _$$Pt();
    let r = e.length > 0;
    let n = Object.keys(t).length > 0;
    return r || n;
  }();
  let W = t && isValidValue(t) && (t.length > 1 || t.some(e => !isSolidType(e.type))) ? "createStyle" : z ? "createVariable" : "createStyle";
  let K = useCallback(() => M && M.id === U ? M : null, [M, U]);
  let Y = useCallback(({
    initialX: e,
    initialY: t
  }) => {
    K() ? k(hidePickerThunk()) : k(showPickerThunk({
      id: U,
      initialX: e,
      initialY: t
    }));
  }, [k, U, K]);
  let $ = useCallback(e => {
    Y(e);
  }, [Y]);
  let X = useCallback((e, t) => {
    r([e], t, void 0, VisibilityCondition.ONLY_WHEN_NOT_DISABLED);
  }, [r]);
  let q = useSelectionPropertyValue("numSelectedByType");
  let J = y5(R || null);
  let Z = useCallback(() => {
    o();
    J();
  }, [o, J]);
  let Q = useMemo(() => {
    if (q) return aZ(A, q);
  }, [A, q]);
  return jsxs(Fragment, {
    children: [jsx(Kx, {
      addProperty: Z,
      advancedSettingsTooltip: O,
      currentSelectedProperty: v,
      dispatch: k,
      dropdownShown: F,
      entrypointMenu: D,
      inheritStyleID: g,
      inheritStyleKey: h,
      inheritStyleKeyField: m,
      isPanelBodyCollapsedAtom: R,
      library: y,
      modalShown: x,
      onChange: r,
      onDeleteProperty: u,
      onPickerIconClick: $,
      onReorder: d,
      onToggleAdvancedSettings: w,
      onToggleListLayout: p,
      openFile: I,
      overrideAddPropertyTooltip: l,
      pickerShown: M,
      propertyList: t,
      recordingKey: C,
      removeAllProperties: E,
      renderProperty: c,
      sceneGraphSelection: N,
      selectedPropertyType: A,
      selectedStyleGuid: L,
      stylePickerListLayout: f,
      stylePickerShown: S,
      styleType: _,
      title: e
    }), (() => {
      let e = K();
      if (!e) return;
      let r = t && isValidValue(t) && 1 === t.length ? t[0] : {
        type: "SOLID",
        color: {
          r: 1,
          g: 1,
          b: 1,
          a: 1
        },
        opacity: 1
      };
      return jsx(ku, {
        canPickerShowColorContrast: !j,
        defaultColor: T,
        dropdownShown: F,
        hasVisiblePaintBelow: !1,
        inheritStyleKeyField: m,
        initialCreationModalView: W,
        initialView: "library",
        isInStyleModal: j,
        onApplyStyle: j ? void 0 : n,
        onChange: X,
        paint: r,
        paintId: OS(m),
        pickerShown: e,
        recordingKey: generateRecordingKey(C, "paintPicker"),
        selectedStyle: H,
        supportedViews: ["library"],
        variableScopes: Q
      });
    })()]
  });
});
export function $$tu7(e) {
  let t = useContext(zK);
  let r = useDispatch();
  let n = null != t;
  let o = useCallback(() => n, [n]);
  let l = useHasSelectedStyle();
  let d = normalizeValue(_$$b("guid"));
  let c = useSelector(t => {
    let r = e.selectedPropertyType === NodePropertyCategory.STROKE ? "strokePaints" : "fillPaints";
    return e.shouldUseSelectedStyleProperties ? t.mirror.selectedStyleProperties[r] : t.mirror.selectionProperties[r];
  });
  let u = useCallback((t, r = {
    preventAutoToggle: !1
  }) => {
    switch (e.selectedPropertyType) {
      case NodePropertyCategory.STROKE:
        if (!l) {
          a2("strokePaints");
          fullscreenValue.triggerActionInUserEditScope("add-stroke-to-selection");
          let e = valueOrFallback(c, []);
          r.preventAutoToggle || atomStoreManager.set(td, e.length);
        }
        break;
      case NodePropertyCategory.FILL:
        if (l) fullscreenValue.triggerActionInUserEditScope("add-fill-to-style-selection");else {
          fullscreenValue.triggerActionInUserEditScope("add-fill-to-selection", t);
          let e = valueOrFallback(c, []);
          r.preventAutoToggle || atomStoreManager.set(tl, e.length);
        }
        a2("fillPaints");
    }
  }, [l, c, e.selectedPropertyType]);
  let p = useCallback(() => {
    u({});
  }, [u]);
  let {
    onChange,
    stylePickerShown,
    inheritStyleKeyField,
    selectedPropertyType,
    pickerInStyleCreationShown,
    variableScopes,
    pickerShown,
    onApplyStyle,
    onPickerShown,
    recordingKey
  } = e;
  let v = useCallback(e => {
    o() || r(hidePickerThunk());
    r(hideStylePicker());
    let t = valueOrFallback(c, []).filter((t, r) => r !== e);
    executeWithDSAAction(StyleVariableOperation.IGNORE, CopyPasteType.UNKNOWN, () => {
      onChange(t);
    });
    fullscreenValue.deselectProperty();
  }, [o, onChange, r, c]);
  let A = useCallback((e, t, r, n) => {
    onChange(e, t, void 0, n);
    valueOrFallback(c, []).length !== e.length && paintManager.clearCache();
  }, [onChange, c]);
  let N = useCallback(() => {
    paintManager.clearCache();
  }, []);
  let C = useCallback(() => {
    r(stylePickerViewChangedThunk({
      isListLayout: !e.stylePickerListLayout
    }));
    r(sw());
  }, [r, e.stylePickerListLayout]);
  let w = xm(e);
  let {
    useGrid
  } = useContext(dD);
  let R = valueOrFallback(c, []).filter(e => "PATTERN" === e.type).length >= 1;
  let L = useCallback((t, r, n, a, s, l, d, u, p) => {
    let _ = o() ? "preview-paint" : "paint";
    let b = paintManager.getId(r, selectedPropertyType, _);
    let A = valueOrFallback(c, []).slice(0, r).some(e => e.visible);
    return jsx($$tp1, {
      disablePatternPaints: R,
      hasFocus: s,
      hasVisiblePaintBelow: A,
      id: b,
      index: r,
      inheritStyleKeyField,
      isDragging: a,
      onApplyStyle,
      onChange: l,
      onMouseDown: d,
      onMouseMove: u,
      onMouseUp: p,
      onPickerShown,
      onRemovePaint: () => v(r),
      paint: t,
      pickerInStyleCreationShown,
      recordingKey: generateRecordingKey(recordingKey, r),
      sceneGraphSelection: e.sceneGraphSelection,
      selected: stylePickerShown.isShown ? pickerShown?.id === b : n,
      selectedPropertyType,
      singletonRow: valueOrFallback(c, []).length <= 1,
      stylePickerShown,
      variableScopes,
      ...w
    }, useGrid ? void 0 : `paint-${r}`);
  }, [o, selectedPropertyType, c, useGrid, inheritStyleKeyField, stylePickerShown, pickerShown?.id, onPickerShown, pickerInStyleCreationShown, onApplyStyle, recordingKey, variableScopes, w, v, R, e.sceneGraphSelection]);
  let D = (() => {
    let t = valueOrFallback(c, []);
    switch (e.selectedPropertyType) {
      case NodePropertyCategory.STROKE:
        return 0 === t.length ? getI18nString("fullscreen.properties_panel.section_stroke.tooltip_addStroke") : getI18nString("fullscreen.properties_panel.section_stroke.tooltip_addStrokeFill");
      case NodePropertyCategory.FILL:
        return getI18nString("fullscreen.properties_panel.section_fill.tooltip_addFill");
      default:
        return;
    }
  })();
  return jsx($$tc5, {
    addProperty: p,
    currentSelectedProperty: e.currentSelectedProperty,
    onChange: A,
    onReorder: N,
    overrideAddPropertyTooltip: D,
    pickerShown: e.pickerShown,
    propertyList: c,
    recordingKey: e.recordingKey,
    renderProperty: L,
    selectedPropertyType: e.selectedPropertyType,
    title: (() => {
      switch (e.selectedPropertyType) {
        case NodePropertyCategory.STROKE:
          return getI18nString("fullscreen.properties_panel.fill.stroke");
        case NodePropertyCategory.FILL:
          return getI18nString("fullscreen.properties_panel.fill.fill");
        default:
          return "";
      }
    })(),
    ...yT(e),
    advancedSettingsTooltip: e.advancedSettingsTooltip,
    defaultColor: e.defaultColor,
    entrypointMenu: (() => {
      switch (e.selectedPropertyType) {
        case NodePropertyCategory.FILL:
          return jsx(ZQ, {
            addPaintOfType: e => {
              u({
                paintType: e
              });
            },
            disablePatternPaints: R
          });
        case NodePropertyCategory.STROKE:
          return jsx(UX, {
            addPaint: () => u({}, {
              preventAutoToggle: !0
            }),
            recordingKey: generateRecordingKey(e, "strokeEntrypointMenu")
          });
      }
      return null;
    })(),
    isPanelBodyCollapsedAtom: e.isPanelBodyCollapsedAtom,
    library: e.library,
    onApplyStyle: e.onApplyStyle,
    onToggleAdvancedSettings: e.onToggleAdvancedSettings,
    onToggleListLayout: C,
    selectedStyleGuid: d ?? null
  });
}
export class $$tp1 extends PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      isDragHover: !1
    };
    this.context = null;
    this.row = createRef();
    this.pickerShownInStyleModal = () => !this.isInStyleModal() && !!this.props.pickerInStyleCreationShown;
    this.handleOpenImagePicker = e => {
      this.props.selectedPropertyType !== e.propertyType || this.props.index !== e.index || this.pickerShown() || this.pickerShownInStyleModal() || this.showPicker();
    };
    this.handleCloseImagePicker = e => {
      this.props.selectedPropertyType === e.propertyType && this.props.index === e.index && this.pickerShown() && this.hidePicker();
    };
    this.onPaintPickerChange = (e, t) => {
      e.visible = !0;
      this.props.onChange(e, t);
    };
    this.onVisibleChange = e => {
      this.props.onChange({
        ...this.props.paint,
        visible: e
      });
    };
    this.pickerShown = () => this.isInStyleModal() ? this.props.pickerInStyleCreationShown?.id === this.props.id ? this.props.pickerInStyleCreationShown : null : this.props.pickerShown?.id === this.props.id ? this.props.pickerShown : null;
    this.showPicker = () => {
      if (!this.row.current) return;
      let e = calculatePickerPositionLeft(this.row.current);
      this.props.onPickerShown?.();
      fullscreenValue.updateAppModel({
        currentSelectedProperty: {
          type: this.props.selectedPropertyType,
          indices: [this.props.index]
        }
      });
      this.isInStyleModal() ? this.props.dispatch(showPickerInStyleCreation({
        id: this.props.id,
        initialX: e.x,
        initialY: e.y
      })) : this.props.dispatch(showPickerThunk({
        id: this.props.id,
        initialX: e.x,
        initialY: e.y,
        data: {
          isInStyleModal: this.isInStyleModal()
        }
      }));
      this.isInStyleModal() || (this.props.dispatch(sw()), this.props.dispatch(hideStylePicker()));
    };
    this.hidePicker = () => {
      this.isInStyleModal() ? this.props.dispatch(hidePickerInStyleCreation()) : this.props.dispatch(hidePickerThunk());
      fullscreenValue.deselectProperty();
    };
    this.togglePicker = () => {
      this.pickerShown() ? this.hidePicker() : this.showPicker();
    };
    this.isDragTarget = () => !!normalizeValue(this.props.paint);
    this.onDragEnter = () => {
      this.setState({
        isDragHover: !0
      });
    };
    this.onDragLeave = () => {
      this.setState({
        isDragHover: !1
      });
    };
    this.onDrop = e => {
      this.setState({
        ...this.state,
        isDragHover: !1
      });
      let t = normalizeValue(this.props.paint);
      if (!t) return;
      let r = fullscreenValue.fileArrayToString;
      if (r) {
        let n = r(Array.from(e.files));
        Fullscreen.dropImageOnPaintThumbnail(t.blendMode || "NORMAL", t.opacity || 1, n, this.props.index, this.props.selectedPropertyType);
      }
    };
    this.dropImageOnPaintThumbnail = (e, t, r) => {
      let n = fullscreenValue.fileArrayToString;
      if (n) {
        let i = n(Array.from(r.files));
        Fullscreen.dropImageOnPaintThumbnail(e, t, i, this.props.index, this.props.selectedPropertyType);
      }
    };
    this.updateStillImageAndSelectionPropertiesForGIF = (e, t) => permissionScopeHandler.user("update-gif-image", () => updateGIFImageProperties(e, t, this.props.selectedPropertyType));
    this.onDetachVariableClick = () => {
      executeWithDSAAction(StyleVariableOperation.VARIABLE_DETACH, CopyPasteType.DIRECT, () => {
        let e = _$$$(this.props.paint);
        this.onPaintPickerChange(e, yesNoTrackingEnum.YES);
      });
    };
  }
  isInStyleModal() {
    return null != this.context;
  }
  componentDidMount() {
    this.isInStyleModal() || (fullscreenValue.fromFullscreen.on("openImagePicker", this.handleOpenImagePicker), fullscreenValue.fromFullscreen.on("closeImagePicker", this.handleCloseImagePicker));
  }
  componentWillUnmount() {
    this.isInStyleModal() || (fullscreenValue.fromFullscreen.removeListener("openImagePicker", this.handleOpenImagePicker), fullscreenValue.fromFullscreen.removeListener("closeImagePicker", this.handleCloseImagePicker));
    this.isInStyleModal() && this.pickerShown() && this.hidePicker();
  }
  hasBoundPaintVariable() {
    return _$$U2() ? !!this.props.paint.colorVar || !!this.props.paint.imageVar : !!this.props.paint.colorVar;
  }
  get cmsFieldSchemaId() {
    return _$$U2() ? this.props.paint.imageVar?.value?.cmsAliasValue?.fieldId : null;
  }
  get lastAddedItemIndexAtom() {
    if (this.isInStyleModal()) return null;
    switch (this.props.selectedPropertyType) {
      case NodePropertyCategory.FILL:
        return tl;
      case NodePropertyCategory.STROKE:
        return td;
      default:
        return null;
    }
  }
  renderButtons() {
    let e = [];
    let t = this.props.selected && this.props.hasFocus;
    this.props.hideVisibilityToggle || !getFeatureFlags().ds_qw_variable_and_style_visibility && this.hasBoundPaintVariable() || e.push({
      button: jsx(_$$B2, {
        visible: this.props.paint.visible,
        onChange: this.onVisibleChange,
        recordingKey: generateRecordingKey(this.props, "visibleToggle"),
        selected: t
      }),
      opensPicker: !1,
      key: "visibleToggle"
    });
    !getFeatureFlags().ds_qw_variable_and_style_visibility && this.hasBoundPaintVariable() && e.push({
      button: jsx("span", {
        className: zm,
        children: jsx(_$$T, {
          selected: t,
          children: jsx(IconButton, {
            "aria-label": getI18nString("fullscreen.properties_panel.fill.detach_variable"),
            onClick: this.onDetachVariableClick,
            recordingKey: generateRecordingKey(this.props, "paint", "detachVariableButton"),
            htmlAttributes: {
              onMouseDown: stopPropagation,
              "data-tooltip": getI18nString("fullscreen.properties_panel.fill.detach_variable"),
              "data-tooltip-type": KindEnum.TEXT
            },
            children: jsx(_$$U, {})
          })
        })
      }),
      opensPicker: !1,
      key: "detatchVariableButton"
    });
    let r = this.cmsFieldSchemaId;
    (this.props.onRemovePaint || r) && e.push({
      button: jsx(_$$T, {
        selected: t,
        children: jsx(IconButton, {
          recordingKey: generateRecordingKey(this.props, "removeButton"),
          onClick: r ? () => {
            fullscreenValue.triggerActionEnumInUserEditScope(Command.UNBIND_SELECTION, {
              fieldSchemaId: r,
              fieldType: _j.IMAGE,
              removeBoundData: !0
            });
          } : this.props.onRemovePaint,
          "aria-label": getI18nString("fullscreen.properties_panel.fill.remove"),
          htmlAttributes: {
            "data-tooltip-type": KindEnum.TEXT,
            "data-tooltip": getI18nString("fullscreen.properties_panel.fill.remove"),
            onMouseDown: stopPropagation
          },
          children: jsx(_$$O, {})
        })
      }),
      opensPicker: !1,
      key: "removeButton"
    });
    return e;
  }
  render() {
    let e = this.renderButtons();
    return jsxs("div", {
      children: [getFeatureFlags().ce_tv_new_row_open_modal && this.lastAddedItemIndexAtom && jsx(_$$O2, {
        lastAddedItemIndexAtom: this.lastAddedItemIndexAtom,
        index: this.props.index,
        callback: () => this.showPicker()
      }), jsx(_$$Y, {
        isDragTarget: this.isDragTarget,
        onTargetDragEnter: this.onDragEnter,
        onTargetDragLeave: this.onDragLeave,
        onTargetDrop: this.onDrop,
        recordingKey: generateRecordingKey(this.props, "dropTarget"),
        children: jsx("div", {
          children: jsx($$t_2, {
            ref: this.row,
            enableVariableDetach: !0,
            firstIconButton: e.length > 0 ? e[0] : null,
            hasFocus: this.props.hasFocus,
            id: this.props.id,
            isDragHover: this.state.isDragHover,
            isDragging: this.props.isDragging,
            noBorderOnFocus: this.props.noBorderOnFocus,
            onChange: this.props.onChange,
            onMouseDown: this.props.onMouseDown,
            onMouseMove: this.props.onMouseMove,
            onMouseUp: this.props.onMouseUp,
            paint: this.props.paint,
            recordingKey: this.props.recordingKey,
            sceneGraphSelection: this.props.sceneGraphSelection,
            secondIconButton: e.length > 1 ? e[1] : null,
            selected: this.props.selected,
            shownPickerMatchesThisPaint: !!this.pickerShown(),
            singletonRow: this.props.singletonRow,
            togglePicker: this.togglePicker,
            ...Rz(this.props)
          })
        })
      }), this.pickerShown() && jsx(ku, {
        canPickerShowColorContrast: !this.isInStyleModal(),
        defaultColor: this.props.defaultColor,
        disablePatternPaints: this.props.disablePatternPaints,
        dropImageOnPaintThumbnail: this.dropImageOnPaintThumbnail,
        dropdownShown: this.props.dropdownShown,
        hasVisiblePaintBelow: this.props.hasVisiblePaintBelow,
        hidePatternPaints: this.props.selectedPropertyType !== NodePropertyCategory.FILL && this.props.selectedPropertyType !== NodePropertyCategory.STROKE || this.isInStyleModal(),
        inheritStyleKeyField: this.props.inheritStyleKeyField,
        isInStyleModal: this.isInStyleModal(),
        onApplyStyle: this.isInStyleModal() ? void 0 : this.props.onApplyStyle,
        onChange: this.onPaintPickerChange,
        onClose: this.hidePicker,
        paint: this.props.paint,
        paintId: this.props.id,
        pickerShown: this.pickerShown(),
        recordingKey: generateRecordingKey(this.props, "paintPicker"),
        selectedStyle: null,
        updateStillImageAndSelectionPropertiesForGIF: this.updateStillImageAndSelectionPropertiesForGIF,
        variableScopes: this.props.variableScopes
      })]
    });
  }
}
$$tp1.displayName = "PaintListItem";
$$tp1.contextType = zK;
export let $$t_2 = forwardRef((e, t) => {
  let r = t => {
    (t.shiftKey || 2 & t.buttons) && t.preventDefault();
    t.stopPropagation();
    e.togglePicker();
  };
  let n = () => {
    e.onFocus?.();
    e.shownPickerMatchesThisPaint && !s() && e.togglePicker();
  };
  let s = () => {
    let t;
    return (t = _$$U2() ? e.paint.colorVar || e.paint.imageVar : e.paint.colorVar) && ("ALIAS" === t.dataType || "CMS_ALIAS" === t.dataType) ? t : null;
  };
  let o = () => {
    executeWithDSAAction(StyleVariableOperation.VARIABLE_DETACH, CopyPasteType.DIRECT, () => {
      let t = _$$$(e.paint);
      t.visible = !0;
      e.onChange(t, yesNoTrackingEnum.YES);
    });
  };
  useEffect(() => () => {
    e.onInputBlur && e.onInputBlur();
  }, []);
  let {
    useGrid
  } = useContext(dD);
  let {
    useLargePreviewRows
  } = useContext(_$$Q);
  let c = Qu();
  let u = s();
  let p = e.firstIconButton ? jsx(tm, {
    opensPicker: e.firstIconButton.opensPicker,
    componentKey: e.firstIconButton.key,
    children: e.firstIconButton.button
  }) : null;
  let h = e.secondIconButton ? jsx(tm, {
    opensPicker: e.secondIconButton.opensPicker,
    componentKey: e.secondIconButton.key,
    children: e.secondIconButton.button
  }) : null;
  let m = e.selected && !e.hasFocus;
  let g = e.fitToSize ? Cv : BT;
  let f = e.fitToSize ? np : wM;
  let E = jsx(EventShield, {
    eventListeners: [],
    htmlAttributes: {
      onKeyDown: c
    },
    children: jsx("div", {
      className: w()(u ? g : f, {
        [NI]: e.selected,
        [L3]: m,
        [mK]: useGrid
      }),
      "data-onboarding-key": generateSlug(PanelIdentifiers.PAINT_PANEL_ROW, e.id),
      "data-testid": "paint-panel-color-value-container",
      children: u ? function ({
        boundVariableData: t
      }) {
        let n = "CMS_ALIAS" === t.dataType;
        let a = {
          onDetachClick: o,
          enableDetach: e.enableVariableDetach
        };
        let s = "ALIAS" === t.dataType ? t.value?.alias : void 0;
        return jsxs(Fragment, {
          children: [n && jsx(_$$y2, {
            isSelected: e.selected && e.hasFocus,
            children: jsx(Sw, {
              selected: e.selected,
              boundPaintVariable: t,
              hasFocus: e.hasFocus,
              paint: e.paint,
              onClick: r,
              recordingKey: e.recordingKey,
              enableDetach: e.enableVariableDetach && !!e.sceneGraphSelection,
              onDetachClick: () => {
                let e = t.value?.cmsAliasValue?.fieldId;
                fullscreenValue.triggerActionEnumInUserEditScope(Command.UNBIND_SELECTION, {
                  fieldSchemaId: e,
                  fieldType: _j.IMAGE,
                  removeBoundData: !1
                });
              }
            })
          }), "ALIAS" === t.dataType && s && jsx(_$$y2, {
            isSelected: e.selected && e.hasFocus,
            children: jsx(rM, {
              selected: e.selected,
              variableId: s,
              hasFocus: e.hasFocus,
              paint: e.paint,
              onClick: r,
              recordingKey: e.recordingKey,
              ...a
            })
          })]
        });
      }({
        boundVariableData: u
      }) : jsx($$th8, {
        allowAutoAndMixed: e.allowAutoAndMixed,
        chitOverride: e.chitOverride,
        clearPaintFromCache: () => paintManager.clearCache(e.id),
        disableOpacity: e.disableOpacity,
        onChange: e.onChange,
        onInputBlur: e.onInputBlur,
        onInputFocus: e.onInputFocus,
        onScrubBegin: e.onScrubBegin,
        onScrubEnd: e.onScrubEnd,
        paint: e.paint,
        recordingKey: e.recordingKey,
        togglePicker: e.togglePicker
      })
    })
  });
  if (e.preventDragging) return jsx(pG, {
    ref: t,
    appendedClassName: w()(_$$p, {
      [Tp]: e.isDragHover,
      [CZ]: e.selected,
      [kR]: m
    }),
    input: E,
    leftIcon: p,
    rightIcon: h,
    label: null
  });
  {
    let a = w()(_$$p, {
      [Tp]: e.isDragHover,
      [CZ]: e.selected,
      [kR]: e.selected && !e.hasFocus
    });
    if (useLargePreviewRows) {
      let a = u && o ? jsx(UM, {
        onClick: o
      }) : null;
      return jsx(_$$a, {
        ref: t,
        dragging: e.isDragging,
        firstIconButton: a ?? p ?? void 0,
        hasFocus: e.hasFocus,
        onMouseDown: e.onMouseDown,
        onMouseMove: e.onMouseMove,
        onMouseUp: e.onMouseUp,
        onPreviewClick: r,
        onRowFocus: n,
        paint: e.paint,
        previewActive: e.shownPickerMatchesThisPaint,
        recordingKey: e.recordingKey,
        secondIconButton: h ?? void 0,
        selected: !!e.selected,
        singletonRow: e.singletonRow,
        variableId: u?.value?.alias
      });
    }
    return useGrid ? null === p || null === h ? jsx(lt, {
      appendedClassName: a,
      singletonRow: e.singletonRow,
      input: E,
      icon: p || h,
      ref: t,
      htmlAttributes: {
        onFocus: n
      },
      selected: e.selected,
      hasFocus: e.hasFocus,
      recordingKey: e.recordingKey
    }) : jsx(z$, {
      ref: t,
      appendedClassName: a,
      hasFocus: e.hasFocus,
      htmlAttributes: {
        onFocus: n
      },
      input: E,
      leftIcon: {
        icon: p,
        interactable: !0
      },
      recordingKey: e.recordingKey,
      rightIcon: {
        icon: h,
        interactable: !0
      },
      selected: e.selected,
      singletonRow: e.singletonRow
    }) : jsx(Y9, {
      ref: t,
      dragging: e.isDragging,
      onFocus: n,
      onMouseDown: e.onMouseDown,
      onMouseMove: e.onMouseMove,
      onMouseUp: e.onMouseUp,
      recordingKey: e.recordingKey,
      selected: e.selected,
      selectedSecondary: e.selected && !e.hasFocus,
      singletonRow: e.singletonRow,
      children: null === p || null === h ? jsx(DE, {
        appendedClassName: a,
        input: E,
        icon: p || h,
        label: null
      }) : jsx(pG, {
        appendedClassName: a,
        input: E,
        leftIcon: p,
        rightIcon: h,
        label: null
      })
    });
  }
});
export function $$th8(e) {
  let t = t => {
    t.stopPropagation();
    e.togglePicker();
  };
  let r = (t, r = !0) => {
    t.visible = !0;
    e.onChange(t);
    r && e.clearPaintFromCache?.();
  };
  let n = w()({
    [EC]: !e.paint.visible || e.disableOpacity
  });
  let o = useDispatch();
  let d = e.chitOverride ? e.chitOverride : {
    paint: e.paint
  };
  let {
    useGrid
  } = useContext(dD);
  return jsxs(Fragment, {
    children: [jsx(renderEventShield, {
      children: jsx(_$$D2, {
        ...d,
        onMouseDown: t,
        recordingKey: generateRecordingKey(e, "chit"),
        className: x7,
        isInFPLGrid: useGrid
      })
    }), jsx($$tg3, {
      ...e,
      onFocus: e.onInputFocus,
      onBlur: e.onInputBlur,
      visible: e.paint.visible,
      onTypeMouseDown: t,
      onMouseDown: stopPropagation,
      onColorChange: t => {
        let n = {
          ...e.paint,
          color: t
        };
        nearlyEqual(t.a, e.paint.opacity ?? 1) || (n.opacity = t.a, n.visible = !0);
        r(n);
      },
      recordingKey: generateRecordingKey(e, "value"),
      noBorderOnFocus: !0
    }), (!e.allowAutoAndMixed || !isAutoMarker(e.paint.color) && !isInvalidValue(e.paint.color)) && jsx(OpacityInput, {
      className: n1,
      dispatch: o,
      inputClassName: n,
      noBorderOnFocus: !0,
      noLeftBorder: !0,
      onBlur: e.onInputBlur,
      onFocus: e.onInputFocus,
      onMouseDown: stopPropagation,
      onScrubBegin: e.onScrubBegin,
      onScrubEnd: e.onScrubEnd,
      onValueChange: (t, r) => {
        e.onChange({
          ...e.paint,
          opacity: t,
          visible: !0
        }, r);
      },
      recordingKey: generateRecordingKey(e, "opacity"),
      value: e.paint.opacity
    })]
  });
}
function tm(e) {
  return e.opensPicker ? jsx(renderEventShield, {
    children: e.children
  }, e.componentKey) : jsx(_$$Fragment, {
    children: e.children
  }, e.componentKey);
}
export function $$tg3(e) {
  let t = useMemo(() => e.allowAutoAndMixed ? new AutoColorFormatter({
    parseAlpha: !0
  }) : new FormattedHexColor({
    parseAlpha: !0
  }), [e.allowAutoAndMixed]);
  let r = useMemo(() => new ZB(() => e.paint), [e.paint]);
  let n = useMemo(() => e.allowAutoAndMixed && (isAutoMarker(e.paint.color) || isInvalidValue(e.paint.color)) ? e.paint.color : e.paint.color && {
    ...e.paint.color,
    a: e.paint.opacity ?? 1
  }, [e.allowAutoAndMixed, e.paint]);
  let s = useHandleMouseEvent(e.recordingKey, "mousedown", t => {
    e.onMouseDown?.(t);
    e.onTypeMouseDown?.(t);
  });
  let o = Qu();
  return "SOLID" === e.paint.type ? jsx(FormattedInputVariant3, {
    ariaLabel: getI18nString("fullscreen.color"),
    className: w()(e.visible ? EX : wh, e.appendedColorInputClassname),
    formatter: t,
    forwardedRef: e.focusableRef,
    name: getI18nString("fullscreen.color"),
    noBorderOnFocus: e.noBorderOnFocus,
    noLeftBorder: !1,
    onBlur: e.onBlur,
    onChange: e.onColorChange,
    onFocus: e.onFocus,
    onKeyDown: o,
    onMouseDown: e.onMouseDown,
    property: n,
    recordingKey: generateRecordingKey(e, "colorInput"),
    squareRightBorder: !1
  }) : jsx(ButtonPrimitive, {
    className: e.visible ? cD : GI,
    onClick: s,
    actionOnPointerDown: !0,
    children: r.format(e.paint.type)
  });
}
function tf({
  styleKey: e,
  count: t,
  uniqueNodesCount: r,
  styleGUIDs: n,
  id: o,
  variableScopes: l,
  recordingKey: d,
  rowRef: c,
  openPickerOnInitialRender: u
}) {
  let _ = useCurrentFileKey();
  let h = useDropdownState();
  let m = Xo();
  let {
    stateStylePickerShown,
    stylePreviewShown
  } = selectWithShallowEqual(e => ({
    stateStylePickerShown: e.stylePickerShown,
    stylePreviewShown: e.stylePreviewShown
  }));
  let v = useDispatch();
  let A = `${yJ}-${o}`;
  let x = m?.id === A ? m : null;
  let N = stateStylePickerShown.isShown && stateStylePickerShown.id === A ? stateStylePickerShown : null;
  let C = _$$M(c);
  let k = useStyleSubscriptionInfo(e, n);
  let M = useStyleSubscriptionName(e, n);
  let F = useSelector(t => _$$b2(t, e, null));
  let j = useCallback(() => {
    v(hidePickerThunk());
    Fullscreen.selectStyleByGuid("");
  }, [v]);
  let B = useCallback(() => {
    if (!C.current) return;
    k && k.value && Fullscreen.selectStyleByGuid(k.value.node_id);
    let {
      x,
      y
    } = calculatePickerPositionLeft(C.current);
    v(showPickerThunk({
      id: A,
      initialX: x,
      initialY: y
    }));
  }, [v, A, C, k]);
  useEffect(() => {
    u && B();
  }, []);
  let G = useCallback(() => {
    v(sw());
  }, [v]);
  let z = useCallback(e => {
    e.stopPropagation();
    x ? j() : B();
    stylePreviewShown.isShown && G();
  }, [j, G, B, stylePreviewShown.isShown, x]);
  let W = useCallback(e => {
    let t = GP(e);
    permissionScopeHandler.user("apply-paint-to-style", () => SelectionPaintHelpers.updateStyleWithPaint(n, t));
  }, [n]);
  let K = useCallback(e => {
    v(loadSharedStyle({
      style: e,
      callback: e => {
        permissionScopeHandler.user("apply-style", () => SelectionPaintHelpers.updateStyle(n, e));
      }
    }));
    trackEventAnalytics("Edit Selection Style", {
      fileKey: _,
      count: t
    });
    j();
  }, [t, v, _, j, n]);
  let X = useCallback(e => {
    e.stopPropagation();
    permissionScopeHandler.user("detach-style", () => SelectionPaintHelpers.detachStyle(n));
    Fullscreen.selectStyle(n3.INVALID, VariableStyleId.INVALID);
  }, [n]);
  let q = useCallback(() => {
    SelectionPaintHelpers.selectOnlySameStyle(n);
    trackEventAnalytics("Select Selection Style", {
      count: t
    });
  }, [t, n]);
  useOptimisticStyleThumbnailUpdate(k);
  let [J, Z] = useState(!1);
  if (!k) return null;
  let Q = k.kind === SubscriptionStatusEnum.SUBSCRIBED_WITHOUT_LIBRARY ? jsx(zi, {
    dsStyle: {
      ...k.value,
      style_type: "FILL"
    },
    disableTooltip: !0
  }) : jsx(zi, {
    dsStyle: k.value,
    disableTooltip: !0
  });
  let ee = jsx("span", {
    className: `${v9} ${N4}`,
    children: jsx(IconButton, {
      actionOnPointerDown: !0,
      "aria-label": `Select ${formatCount(r, "item")} using this style`,
      recordingKey: generateRecordingKey(d, "selectSameStyleButton"),
      onClick: q,
      htmlAttributes: {
        "data-tooltip": `Select ${formatCount(r, "item")} using this style`,
        "data-tooltip-type": KindEnum.TEXT
      },
      children: jsx(_$$A, {})
    })
  });
  let et = jsx(IconButton, {
    actionOnPointerDown: !0,
    recordingKey: generateRecordingKey(d, "detachButton"),
    "aria-label": getI18nString("fullscreen.properties_panel.fill.detach_style"),
    onClick: X,
    htmlAttributes: {
      "data-tooltip": getI18nString("fullscreen.properties_panel.fill.detach_style"),
      "data-tooltip-type": KindEnum.TEXT
    },
    children: jsx(_$$U, {})
  });
  return jsxs("span", {
    onMouseOver: () => Z(!0),
    children: [jsx(pG, {
      appendedClassName: w()(d0, LO, {
        [kR]: !!x || !!N
      }),
      ref: C,
      input: jsx(_$$s2, {
        recordingKey: generateRecordingKey(d, "row"),
        onClick: z,
        styleIcon: Q,
        styleName: M,
        selected: !!x || !!N
      }),
      leftIcon: jsx("div", {
        className: v9,
        children: et
      }),
      rightIcon: ee,
      label: null
    }), J && jsx(MM, {
      inheritStyleKey: e,
      inheritStyleID: null,
      styleType: "FILL"
    }), x ? jsx(ku, {
      defaultColor: defaultGrayColor,
      dropdownShown: h,
      hasVisiblePaintBelow: !1,
      inheritStyleKeyField: "inheritFillStyleKey",
      initialView: "library",
      isInStyleModal: !1,
      onApplyStyle: K,
      onChange: W,
      paint: {
        color: {
          r: 1,
          g: 1,
          b: 1,
          a: 1
        },
        opacity: 1,
        type: "SOLID"
      },
      paintId: A,
      pickerShown: x,
      recordingKey: generateRecordingKey(d, "paintPicker"),
      selectedStyle: F?.data ?? (k && k.kind !== SubscriptionStatusEnum.SUBSCRIBED_WITHOUT_LIBRARY ? k.value : null),
      variableScopes: l
    }) : null]
  });
}
function tE({
  styleKey: e,
  styleGUIDs: t,
  onClick: r
}) {
  let n = useStyleSubscriptionInfo(e, t);
  return (useOptimisticStyleThumbnailUpdate(n), n) ? jsx("span", {
    onClick: r,
    children: jsx(zi, {
      dsStyle: {
        ...n.value,
        style_type: "FILL"
      },
      disableTooltip: !0
    })
  }) : jsx(Fragment, {});
}
$$t_2.displayName = "Paint";
(e => {
  class t extends PureComponent {
    constructor() {
      super(...arguments);
      this.state = {
        hasEverHovered: !1
      };
      this.row = createRef();
      this.paintPickerInitialView = void 0;
      this.componentWillUnmount = () => {
        this.props.dispatch(updateCurrentSelectionPaintInPicker({
          paintId: void 0,
          originalPaint: void 0,
          updatedPaintFromDropper: void 0
        }));
      };
      this.pickerShownIsStylePicker = () => this.props.stylePickerShown.isShown && this.props.stylePickerShown.id === this.stylePickerID();
      this.pickerShown = () => this.props.pickerShown?.id === this.pickerID();
      this.showPicker = () => {
        if (!this.row.current) return;
        let e = calculatePickerPositionLeft(this.row.current);
        this.props.dispatch(showPickerThunk({
          id: this.pickerID(),
          initialX: e.x,
          initialY: e.y
        }));
        this.props.dispatch(sw());
        this.props.dispatch(hideStylePicker());
        this.props.dispatch(updateCurrentSelectionPaintInPicker({
          paintId: this.props.id,
          originalPaint: this.props.paint,
          updatedPaintFromDropper: void 0
        }));
      };
      this.hidePicker = () => {
        this.props.dispatch(hidePickerThunk());
        fullscreenValue.deselectProperty();
      };
      this.togglePicker = () => {
        this.pickerShown() ? this.hidePicker() : this.showPicker();
      };
      this.toggleStylePicker = () => {
        this.pickerShownIsStylePicker() ? this.hidePicker() : this.row.current && this.props.showPicker(this.stylePickerID(), this.row.current);
      };
      this.toggleListLayout = () => {
        this.props.setPickerListLayout(!this.props.stylePickerListLayout);
      };
      this.onCreateStyle = () => {
        let e = GP(this.props.paint);
        let t = SelectionPaintHelpers.paintDataNodesInPaint(e);
        this.props.dispatch(showModalHandler({
          type: _$$t2,
          data: {
            originalPaint: this.props.paint,
            paintDataNodesInPaint: t,
            conflictNodesCount: this.props.conflictNodesCount,
            type: {
              kind: "create"
            }
          }
        }));
        this.hidePicker();
      };
      this.onApplyStyle = e => {
        let t = SelectionPaintHelpers.paintDataNodesInPaint(GP(this.props.paint));
        this.props.dispatch(loadSharedStyle({
          style: e,
          callback: e => {
            if (t.length > 1) this.props.dispatch(showModalHandler({
              type: _$$t2,
              data: {
                originalPaint: this.props.paint,
                paintDataNodesInPaint: t,
                conflictNodesCount: this.props.conflictNodesCount,
                type: {
                  kind: "apply",
                  styleGuid: e
                }
              }
            }));else {
              let t = GP(this.props.paint);
              permissionScopeHandler.user("apply-style", () => SelectionPaintHelpers.applyStyleToPaintDatas(t, e));
              trackEventAnalytics("Apply Style to Selection Paint ", {
                count: this.props.uniqueNodesCount
              });
            }
          }
        }));
        this.hidePicker();
      };
      this.debouncedTrackPaintChangeFromPicker = debounce(e => {
        trackEventAnalytics("Edit Selection Paint", {
          fileKey: this.props.openFile?.key || "",
          count: this.props.count
        });
      });
      this.onChangeForPaint = (e, t) => {
        let r = t == yesNoTrackingEnum.YES;
        let n = hasAliasedColorsInGradient(e) || e.colorVar ? SelectionPaintHelpers.resolvePaintWithVariable(GP(this.props.paint), GP(e)) : "";
        let i = e;
        if (n) {
          let t = _$$K2(n);
          i = t?.paint || e;
        }
        permissionScopeHandler.user("change-paint", () => SelectionPaintHelpers.updatePaint(GP(this.props.paint), GP(i), r, GP(this.currentPaintValue())));
        this.setState({
          paintValueInPicker: i
        });
        this.props.dispatch(updateCurrentSelectionPaintInPicker({
          paintId: this.props.id,
          originalPaint: this.props.paint,
          updatedPaintFromDropper: void 0
        }));
      };
      this.onChangeForPaintPicker = (e, t) => {
        this.onChangeForPaint(e, t);
        this.debouncedTrackPaintChangeFromPicker(e);
      };
      this.debouncedOnChangeForPaintPicker = debounce(this.onChangeForPaintPicker);
      this.onDetachVariableClick = () => {
        executeWithDSAAction(StyleVariableOperation.VARIABLE_DETACH, CopyPasteType.DIRECT, () => {
          let e = _$$$(this.props.paint);
          this.onChangeForPaint(e, yesNoTrackingEnum.YES);
        });
      };
      this.currentPaintValue = () => this.props.paintValueFromEyeDropper ? this.props.paintValueFromEyeDropper : this.state.paintValueInPicker ? this.state.paintValueInPicker : this.props.paint;
      this.onMouseOver = () => {
        this.setState({
          hasEverHovered: !0
        });
      };
      this.onPaintClick = () => {
        this.paintPickerInitialView = void 0;
        this.togglePicker();
      };
      this.onStyleClick = e => {
        e.stopPropagation();
        this.paintPickerInitialView = "library";
        this.togglePicker();
      };
      this.onSelectSamePaintMouseDown = () => {
        let e = GP(this.props.paint);
        SelectionPaintHelpers.selectOnlySamePaint(e);
        trackEventAnalytics("Select Selection Paint", {
          count: this.props.uniqueNodesCount
        });
      };
      this.onFocus = () => {
        this.pickerShownIsStylePicker() && this.toggleStylePicker();
      };
      this.boundColorVariableId = () => {
        let e = this.props.paint.colorVar?.value?.alias;
        return e ? convertKiwiToVariableIdString(e) : null;
      };
    }
    pickerID() {
      return `${F7}-${this.props.id}`;
    }
    stylePickerID() {
      return `${yJ}-${this.props.id}`;
    }
    componentDidMount() {
      this.props.openPickerOnInitialRender && this.showPicker();
    }
    componentDidUpdate(e) {
      this.props.paintValueFromEyeDropper && e.paintValueFromEyeDropper !== this.props.paintValueFromEyeDropper && this.setState({
        paintValueInPicker: this.props.paintValueFromEyeDropper
      });
    }
    render() {
      let e = null;
      this.pickerShownIsStylePicker() && this.props.stylePickerShown.isShown && (e = this.props.stylePickerShown);
      let t = this.props.debounce ? this.debouncedOnChangeForPaintPicker : this.onChangeForPaintPicker;
      let r = this.renderButtons();
      return jsxs("div", {
        onMouseOver: this.onMouseOver,
        children: [jsx($$t_2, {
          ref: this.row,
          count: this.props.count,
          firstIconButton: r.length > 0 ? r[0] : null,
          focusableRef: this.props.focusableRef,
          hasFocus: !1,
          id: this.props.id,
          isDragHover: !1,
          isDragging: !1,
          onChange: this.onChangeForPaint,
          onFocus: this.onFocus,
          onInputBlur: this.props.onInputBlur,
          onInputFocus: this.props.onInputFocus,
          onScrubBegin: this.props.onScrubBegin,
          onScrubEnd: this.props.onScrubEnd,
          paint: this.currentPaintValue(),
          preventDragging: !0,
          recordingKey: generateRecordingKey(this.props, "paint"),
          secondIconButton: r.length > 1 ? r[1] : null,
          selected: this.pickerShown() || this.pickerShownIsStylePicker(),
          shownPickerMatchesThisPaint: this.pickerShown(),
          singletonRow: !1,
          togglePicker: this.onPaintClick,
          uniqueNodesCount: this.props.uniqueNodesCount,
          ...Rz(this.props)
        }), this.pickerShown() && this.props.pickerShown && (this.props.customColorPicker ? jsx(this.props.customColorPicker, {
          paint: this.currentPaintValue(),
          onChange: t,
          onClose: this.hidePicker,
          pickerShown: this.props.pickerShown,
          hideCustomColorPickerFillTypeToggle: this.props.hideCustomColorPickerFillTypeToggle ?? !1
        }) : jsx(ku, {
          canPickerShowColorContrast: !0,
          defaultColor: this.props.defaultColor,
          disableImagePaints: !0,
          dropdownShown: this.props.dropdownShown,
          hasVisiblePaintBelow: !1,
          hidePatternPaints: !0,
          inheritStyleKeyField: "inheritFillStyleKey",
          initialStyleCreationPaint: this.currentPaintValue(),
          initialView: this.paintPickerInitialView,
          isInStyleModal: !1,
          keepOpenOnItemSelect: !0,
          onApplyStyle: this.onApplyStyle,
          onChange: t,
          paint: this.currentPaintValue(),
          paintId: this.props.id,
          paintNodeIds: this.props.uniqueNodeIds,
          pickerShown: this.props.pickerShown,
          recordingKey: generateRecordingKey(this.props, "paintPicker"),
          selectedStyle: null,
          variableScopes: this.props.variableScopes
        })), this.state.hasEverHovered && jsx(MM, {
          inheritStyleKey: null,
          inheritStyleID: null,
          styleType: "FILL"
        }), e && jsx(UP, {
          picker: e,
          onCreateStyle: this.onCreateStyle,
          onApplyStyle: this.onApplyStyle,
          recordingKey: generateRecordingKey(this.props, "stylePicker"),
          styleType: "FILL",
          onToggleListLayout: this.toggleListLayout,
          stylePickerListLayout: this.props.stylePickerListLayout,
          inheritStyleKey: null,
          inheritStyleID: null
        })]
      });
    }
    renderButtons() {
      let e = [];
      if (this.boundColorVariableId()) e.push({
        button: jsx("span", {
          className: zm,
          children: jsx(IconButton, {
            "aria-label": getI18nString("fullscreen.properties_panel.fill.detach_variable"),
            onClick: this.onDetachVariableClick,
            recordingKey: generateRecordingKey(this.props, "paint", "detachVariableButton"),
            htmlAttributes: {
              onMouseDown: stopPropagation,
              "data-tooltip": getI18nString("fullscreen.properties_panel.fill.detach_variable"),
              "data-tooltip-type": KindEnum.TEXT
            },
            children: jsx(_$$U, {})
          })
        }),
        opensPicker: !1,
        key: "detatchVariableButton"
      });else {
        let t = isSlidesFile(this.props.openFile?.editorType ?? null);
        e.push({
          button: jsx("span", {
            className: zm,
            children: jsx(IconButton, {
              "aria-label": t ? getI18nString("slides.properties_panel.color_picker.theme_colors") : formatI18nMessage("style"),
              onClick: this.onStyleClick,
              recordingKey: generateRecordingKey(this.props, "paint", "styleButton"),
              htmlAttributes: {
                "data-tooltip": t ? getI18nString("slides.properties_panel.color_picker.theme_colors") : "style",
                "data-tooltip-type": t ? KindEnum.TEXT : KindEnum.LOOKUP
              },
              children: jsx(_$$y, {})
            })
          }),
          opensPicker: !0,
          key: "styleButton"
        });
      }
      null == this.props.uniqueNodesCount || this.props.hideSelectSamePaintButton || e.push({
        button: jsx("span", {
          className: zm,
          children: jsx(IconButton, {
            onClick: this.onSelectSamePaintMouseDown,
            "aria-label": getI18nString("fullscreen.properties_panel.select_item_using_this_color", {
              numItems: this.props.uniqueNodesCount
            }),
            recordingKey: generateRecordingKey(this.props, "paint", "selectSamePaintButton"),
            htmlAttributes: {
              "data-tooltip": getI18nString("fullscreen.properties_panel.select_item_using_this_color", {
                numItems: this.props.uniqueNodesCount
              }),
              "data-tooltip-type": KindEnum.TEXT
            },
            children: jsx(_$$A, {})
          })
        }),
        opensPicker: !0,
        key: "selectSamePaintButton"
      });
      return e;
    }
  }
  t.displayName = "SelectionPaintItem";
  e.SelectionPaintItem = t;
  e.ConnectedSelectionPaintItem = connect((e, t) => ({
    pickerShown: e.pickerShown,
    stylePickerShown: e.stylePickerShown,
    paintValueFromEyeDropper: e.currentSelectionPaintInPicker.paintId === t.id ? e.currentSelectionPaintInPicker.updatedPaintFromDropper : void 0,
    stylePickerListLayout: e.stylePickerListLayout
  }), e => ({
    showPicker: (t, r) => {
      let {
        top,
        left
      } = r.getBoundingClientRect();
      let [a, s] = [left - N2, top];
      e(showStylePicker({
        id: t,
        initialX: a,
        initialY: s,
        modal: !0
      }));
      e(sw());
      e(hidePickerThunk());
    },
    setPickerListLayout: t => {
      e(stylePickerViewChangedThunk({
        isListLayout: t
      }));
    }
  }))(t);
})(n || (n = {}));
let ty = n.ConnectedSelectionPaintItem;
export function $$tb4(e) {
  let t;
  let r = useAppModelProperty("currentSelectedGradientStop");
  let n = useAppModelProperty("currentTool");
  let o = useAppModelProperty("activeCanvasEditModeType");
  let l = useMemo(() => atom(!0), []);
  let [d, c] = useAtomValueAndSetter(l);
  let u = useSelector(e => e.mirror.selectionPaints);
  let [p, h] = useState(void 0);
  let g = useCallback(e => {
    c(!1);
    h(e);
  }, [c]);
  useEffect(() => {
    !1 === d && h(void 0);
  }, [d]);
  let f = Fs("MULTI", "PROPS_PANEL", VariableResolvedDataType.COLOR);
  let E = useIsFullscreenSlidesView();
  let y = AppStateTsApi.singleSlideView().isFocusedNodeViewEnabled();
  let T = E && y;
  let {
    sceneGraphSelection
  } = e;
  let [S, v] = useState(sceneGraphSelection);
  let [A, C] = useState(0);
  let [R, L] = useState(!1);
  let [D, M] = useState(!1);
  let F = useRef(u.forceUpdateForUndo);
  let B = useMemo(() => memoizeByArgs((e, t) => {
    if (Object.keys(e).length !== Object.keys(t).length) return !1;
    for (let r in e) if (e[r] !== t[r]) return !1;
    return !0;
  }), []);
  let G = useDispatch();
  let {
    forceUpdateForUndo
  } = u;
  useEffect(() => {
    (!B(S, sceneGraphSelection) || forceUpdateForUndo && F.current !== forceUpdateForUndo) && (v(sceneGraphSelection), C(e => e + 1), L(!1), M(!1), G(forceUpdateSelectionPaintsForUndo(!1)));
    F.current = forceUpdateForUndo;
  }, [forceUpdateForUndo, S, sceneGraphSelection, G, B]);
  let H = () => {
    SelectionPaintHelpers.setIsPaintFocused(!0);
  };
  let z = () => {
    SelectionPaintHelpers.setIsPaintFocused(!1);
  };
  let W = () => {
    SelectionPaintHelpers.setIsPaintOpacityScrubbing(!0);
  };
  let Y = () => {
    SelectionPaintHelpers.setIsPaintOpacityScrubbing(!1);
  };
  useEffect(() => () => {
    SelectionPaintHelpers.setIsPaintFocused(!1);
  }, []);
  let $ = [...u.paints.filter(e => !!e.paint.colorVar), ...u.styles];
  let X = [...u.paints.filter(e => !e.paint.colorVar)];
  let q = $.length;
  let J = X.length + q;
  let Z = R || J <= 12 ? J : 11;
  let Q = useRef(sceneGraphSelection);
  let ee = useRef(J);
  let et = useRef(!1);
  J !== ee.current && (B(Q.current, sceneGraphSelection) || (et.current = !1), Q.current = sceneGraphSelection, ee.current = J);
  let er = jsx(mS, {
    titleTx: renderI18nText("fullscreen.properties_panel.fill.selection_colors"),
    dataTestId: "selection-colors-title"
  });
  if (u.emptyDueToLimitExceeded) t = jsx(Ad, {
    label: null,
    input: jsx("span", {
      className: gr,
      children: jsx(Button, {
        onClick: () => {
          trackEventAnalytics("Show Selection Paints For Large Selection", {
            fileKey: e.openFile?.key || ""
          });
          SelectionPaintHelpers.ignoreLimitWhenCollectingPaints();
        },
        "aria-label": getI18nString("fullscreen.properties_panel.fill.show_selection_colors"),
        recordingKey: generateRecordingKey(e, "limitExceeded"),
        variant: "secondary",
        children: renderI18nText("fullscreen.properties_panel.fill.show_selection_colors")
      })
    })
  });else if (J < 4 && !et.current) {
    c(!1);
    t = [...$, ...X].map((e, t) => "paint" in e ? ea({
      selectionPaint: e,
      index: t
    }) : ei({
      selectionStyle: e,
      index: t
    }));
  } else {
    var en;
    et.current ||= d;
    let r = d ? OG : void 0;
    let n = J - 3;
    let a = d ? jsxs("span", {
      className: uV,
      children: [[...$, ...X].slice(0, 3).map((e, t) => {
        let r = () => {
          g(t);
        };
        return "paint" in e ? jsx("div", {
          className: u7,
          children: jsx(_$$J2, {
            onClick: r,
            paint: e.paint
          })
        }, t) : jsx(EventShield, {
          eventListeners: ["onMouseDown"],
          children: jsx("div", {
            className: u7,
            children: jsx(tE, {
              onClick: r,
              styleKey: e.styleKey,
              styleGUIDs: e.styleGUIDs
            }, t)
          }, t)
        }, t);
      }), n > 0 && jsx("span", {
        className: w()(FK, u7),
        "data-testid": "selection-colors-collapsed-plus-n",
        children: `+${n}`
      })]
    }) : void 0;
    er = jsx(Tu, {
      isPanelBodyCollapsedAtom: l,
      recordingKey: generateRecordingKey(e, "collapseExpandToggleArea"),
      children: jsx(mS, {
        titleTx: renderI18nText("fullscreen.properties_panel.fill.selection_colors"),
        isPanelBodyCollapsedAtom: l,
        appendedClassName: r,
        input: a,
        "data-testid": d ? "selection-colors-collapsed" : "selection-colors-expanded"
      })
    });
    t = d ? null : jsxs(Fragment, {
      children: [[...$, ...X].slice(0, Z).map((e, t) => "paint" in e ? ea({
        selectionPaint: e,
        index: t
      }) : ei({
        selectionStyle: e,
        index: t
      })), Z < J && jsx(fI, {
        className: Hl,
        children: jsx("span", {
          className: g2,
          children: jsx(ButtonWide, {
            recordingKey: generateRecordingKey(e, "paintOverflow"),
            actionOnPointerDown: !0,
            onClick: en ? t => {
              t.stopPropagation();
              trackEventAnalytics("Show All Selection Styles", {
                fileKey: e.openFile?.key || ""
              });
              M(!D);
            } : t => {
              t.stopPropagation();
              trackEventAnalytics("Show All Selection Paints", {
                fileKey: e.openFile?.key || ""
              });
              L(!R);
            },
            variant: "ghost",
            iconPrefix: jsx(SvgComponent, {
              className: IQ,
              svg: _$$A3
            }),
            children: jsx(nV, {
              className: zy,
              children: renderI18nText(en ? "fullscreen.properties_panel.fill.see_all_x_library_colors" : "fullscreen.properties_panel.fill.see_all_x_colors", {
                number: J
              })
            })
          })
        })
      })]
    });
  }
  return jsx(_$$k2, {
    name: "selection_paints_panel",
    children: jsxs(Zk, {
      className: OJ,
      children: [er, t]
    })
  });
  function ei({
    selectionStyle: t,
    index: r,
    ref: n
  }) {
    return jsx(tf, {
      count: t.count,
      id: `${t.styleKey}/${t.version}`,
      openPickerOnInitialRender: r === p,
      recordingKey: generateRecordingKey(e, "style", r),
      rowRef: n,
      styleGUIDs: t.styleGUIDs,
      styleKey: t.styleKey,
      uniqueNodesCount: t.uniqueNodesCount,
      variableScopes: t.variableScopes
    }, `${t.styleKey}/${t.version}`);
  }
  function ea({
    selectionPaint: t,
    index: a,
    ref: s
  }) {
    return jsx(d2.Provider, {
      value: f,
      children: jsx(ty, {
        colorFormat: e.colorFormat,
        conflictNodesCount: t.conflictNodesCount ?? 0,
        count: t.count ?? 0,
        currentSelectedGradientStop: r,
        currentTool: n,
        customColorPicker: e.customColorPicker,
        debounce: !!t.count && t.count > 500,
        defaultColor: e.defaultColor,
        dispatch: e.dispatch,
        dropdownShown: e.dropdownShown,
        editModeType: o,
        focusableRef: s,
        hideCustomColorPickerFillTypeToggle: e.hideCustomColorPickerFillTypeToggle,
        hideSelectSamePaintButton: T,
        id: t.encodedPaint,
        library: e.library,
        onInputBlur: z,
        onInputFocus: H,
        onScrubBegin: W,
        onScrubEnd: Y,
        openFile: e.openFile,
        openPickerOnInitialRender: a === p,
        paint: t.paint,
        pickerShown: e.pickerShown,
        recordingKey: generateRecordingKey(e, "paint", a),
        uniqueNodeIds: t.uniqueNodeIds ?? [],
        uniqueNodesCount: t.uniqueNodesCount ?? 0,
        variableScopes: t.variableScopes
      }, `${t.encodedPaint}:${A}`)
    }, `provider-${t.encodedPaint}:${A}`);
  }
}
export const $p = $$ta0;
export const Gg = $$tp1;
export const Pi = $$t_2;
export const So = $$tg3;
export const UA = $$tb4;
export const W4 = $$tc5;
export const eT = $$ti6;
export const tT = $$tu7;
export const y7 = $$th8;
export const z1 = $$tt9;