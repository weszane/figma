import { jsx } from "react/jsx-runtime";
import { createRef, useContext, useMemo } from "react";
import { useDispatch } from "../vendor/514228";
import { NLJ, t2E, VD3, e0R, m1T, glU } from "../figma_app/763686";
import { l7 } from "../905/189185";
import { sH } from "../905/805904";
import { getFeatureFlags } from "../905/601108";
import { wm } from "../905/19536";
import { analyticsEventManager } from "../905/449184";
import { debugState } from "../905/407919";
import { selectWithShallowEqual } from "../905/103090";
import { o6, dp } from "../figma_app/806412";
import { g as _$$g } from "../905/880308";
import { Point } from "../905/736624";
import { XE } from "../figma_app/91703";
import { Yi } from "../figma_app/933328";
import { Dc } from "../figma_app/314264";
import { Y5 } from "../figma_app/455680";
import { Ep } from "../figma_app/504823";
import { Ku } from "../figma_app/740163";
import { hS } from "../905/216495";
import { Tm, bn, x$ } from "../figma_app/385874";
import { lJ } from "../905/275640";
import { q5 } from "../figma_app/516028";
import { zk } from "../figma_app/198712";
import { f as _$$f } from "../905/135117";
import { q } from "../905/65944";
import { $ } from "../figma_app/297778";
import { hW, d2 } from "../figma_app/225126";
import { oz } from "../figma_app/406976";
import { n8, T_ } from "../905/713167";
import { d9 } from "../905/899866";
export function $$L0(e) {
  return {
    currentSelectedGradientStop: e.currentSelectedGradientStop,
    currentTool: e.currentTool,
    colorFormat: e.colorFormat,
    dispatch: e.dispatch,
    dropdownShown: e.dropdownShown,
    pickerShown: e.pickerShown,
    editModeType: e.editModeType,
    defaultColor: e.defaultColor,
    library: e.library,
    openFile: e.openFile
  };
}
export function $$F2(e) {
  return wm(() => $$L0(e), [e]);
}
class M extends o6 {
  constructor() {
    super(...arguments);
    this.paintRef = createRef();
    this.paintPickerSessionId = _$$g();
    this.onClose = dp(this, "close", () => {
      this.props.currentTool === NLJ.PATTERN_SOURCE_SELECTOR && Y5.triggerAction("set-tool-default", null);
      this.props.onClose ? this.props.onClose() : this.props.dispatch(XE());
      this.paintRef.current && d9(this.paintRef.current, this.paintPickerSessionId);
      Y5.deselectProperty();
    });
    this.onPaintChange = (e, t) => {
      Tm.clearCache(this.props.paintId);
      this.props.onChange(e, t);
      this.paintRef.current = e;
    };
    this.onColorChange = (e, t) => {
      n8(e, this.props.paint, this.props.currentSelectedGradientStop, this.onPaintChange, t);
    };
    this.onBlendModeChange = (e, t = zk.YES) => {
      this.onPaintChange({
        ...this.props.paint,
        blendMode: e
      }, t);
    };
    this.onPaintTypeChange = e => {
      let {
        paint,
        paintId
      } = this.props;
      if (paint.type === e) return;
      let n = Tm.initPaint(e, this.props.defaultColor, paint, paintId, this.props.nodeDimensions, this.props.hasVisiblePaintBelow);
      let r = Dc(debugState.getState().selectedView.editorType);
      let a = "PATTERN" !== paint.type && "PATTERN" === e;
      let l = "PATTERN" === paint.type && "PATTERN" !== e;
      (a || l) && analyticsEventManager.trackDefinedEvent("illustration.web_pattern_paint_change", {
        changedToPattern: a,
        productType: r
      });
      let d = "NOISE" !== paint.type && "NOISE" === e;
      let c = "NOISE" === paint.type && "NOISE" !== e;
      (d || c) && analyticsEventManager.trackDefinedEvent("illustration.web_noise_paint_change", {
        changedToNoise: d,
        productType: r
      });
      let m = !bn(paint.type) && bn(e);
      let h = "IMAGE" !== paint.type && "IMAGE" === e || "VIDEO" !== paint.type && "VIDEO" === e;
      let g = m || h ? zk.NO : zk.YES;
      this.props.onChange(n, g);
      bn(paint.type) && "GRADIENT_LINEAR" === e && l7.user("set-gradient-type-to-linear", () => {
        t2E.resetThirdHandleLocation();
      });
      l && this.props.currentTool === NLJ.PATTERN_SOURCE_SELECTOR && Y5.triggerAction("set-tool-default");
    };
    this.onColorVariableChange = e => {
      if (!e) {
        _$$f(VD3.VARIABLE_DETACH, e0R.DIRECT, () => {
          let e = $(this.props.paint);
          this.onPaintChange(e, zk.YES);
        });
        return;
      }
      this.props.dispatch(Yi({
        item: e,
        callback: e => {
          let t = sH(e);
          if (!t) return;
          let i = Tm.initPaint("SOLID", this.props.defaultColor, this.props.paint, this.props.paintId);
          Object.entries(i).forEach(([e, t]) => {
            void 0 === t && delete i[e];
          });
          i.colorVar = {
            value: {
              alias: t
            },
            dataType: "ALIAS",
            resolvedDataType: "COLOR"
          };
          i.visible = !0;
          this.paintRef.current = i;
          _$$f(VD3.VARIABLE_ATTACH, e0R.DIRECT, () => {
            this.onPaintChange(i, zk.YES);
          });
          let n = this.props.paint.colorVar ? hW(this.props.paint.colorVar) : void 0;
          let r = {
            attachmentSurfaceKey: "colorPicker",
            attachmentRecordingKey: this.props.recordingKey,
            previousVariableKey: n,
            previousStyleKey: this.props.selectedStyle?.library_key,
            hasVisiblePaintBelow: this.props.hasVisiblePaintBelow,
            modeContext: this.props.variableRerankingData?.modeContext,
            sessionId: this.props.variableRerankingData?.sessionId,
            queryId: this.props.variableRerankingData?.queryId
          };
          oz("FILL_PAINT > SOLID_PAINT_COLOR", i.colorVar, r);
        }
      }));
    };
    this.onKeyDown = e => {
      let t = x$(this.props.paint);
      t && T_(e, t, this.props.editModeType, this.props.currentSelectedGradientStop, this.props.onChange);
    };
  }
  componentDidMount() {
    super.componentDidMount();
    bn(this.props.paint.type) && this.props.editModeType !== m1T.GRADIENT ? Y5.triggerAction("toggle-gradient-edit-mode") : "IMAGE" === this.props.paint.type && this.props.editModeType !== m1T.RASTER && Y5.triggerAction("toggle-raster-edit-mode");
  }
  componentDidUpdate(e, t) {
    super.componentDidUpdate(e, t);
    let i = !bn(e.paint.type) && bn(this.props.paint.type);
    let n = "IMAGE" !== e.paint.type && "IMAGE" === this.props.paint.type;
    let r = "SOLID" !== e.paint.type && "SOLID" === this.props.paint.type;
    i && this.props.editModeType !== m1T.GRADIENT ? Y5.triggerAction("toggle-gradient-edit-mode") : n && this.props.editModeType !== m1T.RASTER ? Y5.triggerAction("toggle-raster-edit-mode") : r && (this.props.editModeType === m1T.GRADIENT || this.props.editModeType === m1T.RASTER) && Y5.triggerAction("leave-edit-mode");
    bn(this.props.paint.type) && e.editModeType === m1T.GRADIENT && (this.props.editModeType === m1T.DESIGN_LAYOUT || this.props.editModeType === m1T.SITES_LAYOUT) && this.onClose();
  }
  componentWillUnmount() {
    super.componentWillUnmount();
    (this.props.editModeType === m1T.GRADIENT || this.props.editModeType === m1T.RASTER) && glU.setDefaultEditMode();
  }
  render() {
    return jsx(U, {
      canPickerShowColorContrast: this.props.canPickerShowColorContrast,
      closeOnClickOutside: this.props.closeOnClickOutside,
      colorFormat: this.props.colorFormat,
      colorProfile: this.props.colorProfile,
      currentSelectedGradientStop: this.props.currentSelectedGradientStop,
      currentTool: this.props.currentTool,
      disableImagePaints: this.props.disableImagePaints,
      disablePatternPaints: this.props.disablePatternPaints,
      disableStyleModal: this.props.disableStyleModal,
      dispatch: this.props.dispatch,
      dropImageOnPaintThumbnail: this.props.dropImageOnPaintThumbnail,
      dropdownShown: this.props.dropdownShown,
      editModeType: this.props.editModeType,
      hidePatternPaints: this.props.hidePatternPaints,
      inheritStyleKeyField: this.props.inheritStyleKeyField,
      initialCreationModalView: this.props.initialCreationModalView,
      initialStyleCreationPaint: this.props.initialStyleCreationPaint,
      initialView: this.props.initialView,
      isInStyleModal: this.props.isInStyleModal,
      keepOpenOnItemSelect: this.props.keepOpenOnItemSelect,
      minimalUI: this.props.minimalUI,
      onApplyStyle: this.props.onApplyStyle,
      onBlendModeChange: this.onBlendModeChange,
      onClose: this.onClose,
      onColorChange: this.onColorChange,
      onColorVariableChange: this.onColorVariableChange,
      onKeyDown: this.onKeyDown,
      onPaintChange: this.onPaintChange,
      onPaintTypeChange: this.onPaintTypeChange,
      openFile: this.props.openFile,
      paint: this.props.paint,
      paintId: this.props.paintId,
      paintNodeIds: this.props.paintNodeIds,
      paintPickerSessionId: this.paintPickerSessionId,
      pickerShown: this.props.pickerShown,
      positioningProps: this.props.positioningProps,
      recordingKey: this.props.recordingKey,
      selectedStyle: this.props.selectedStyle,
      solidPaintOnly: this.props.solidPaintOnly,
      supportedViews: this.props.supportedViews,
      updateStillImageAndSelectionPropertiesForGIF: this.props.updateStillImageAndSelectionPropertiesForGIF,
      variableScopes: this.props.variableScopes
    });
  }
}
export function $$j1({
  paint: e,
  paintId: t,
  selectedStyle: i,
  inheritStyleKeyField: s,
  defaultColor: o,
  onChange: l,
  onApplyStyle: d,
  onClose: c,
  closeOnClickOutside: u,
  keepOpenOnItemSelect: p,
  pickerShown: h,
  dropdownShown: g,
  dropImageOnPaintThumbnail: f,
  updateStillImageAndSelectionPropertiesForGIF: _,
  disableImagePaints: A,
  initialView: y,
  supportedViews: b,
  initialCreationModalView: x,
  initialStyleCreationPaint: C,
  recordingKey: T,
  variableScopes: k,
  hasVisiblePaintBelow: R,
  isInStyleModal: P,
  solidPaintOnly: O,
  disableStyleModal: D,
  disablePatternPaints: L,
  hidePatternPaints: F,
  canPickerShowColorContrast: j,
  minimalUI: U,
  paintNodeIds: B,
  positioningProps: V
}) {
  let G = useDispatch();
  let z = Ku();
  let H = q5();
  let {
    currentTool,
    editModeType,
    library,
    currentSelectedGradientStop
  } = selectWithShallowEqual(e => ({
    currentTool: e.mirror.appModel.currentTool,
    editModeType: e.mirror.appModel.activeCanvasEditModeType,
    library: e.library,
    currentSelectedGradientStop: e.mirror.appModel.currentSelectedGradientStop
  }));
  let $ = Ep();
  let [Z, X] = lJ("height");
  let [Q, J] = lJ("width");
  let [ee, et] = lJ("angle");
  let [ei, en] = lJ("leftEndCap");
  let [er, ea] = lJ("rightEndCap");
  let [es, eo] = lJ("hasReflection");
  let el = useContext(d2);
  let ed = useMemo(() => {
    let t = {
      ...el
    };
    t.currentColor = e.color;
    return t;
  }, [el, e.color]);
  let ec = {
    height: (hS(Z) ? Z : null) ?? 1,
    width: (hS(Q) ? Q : null) ?? 1,
    angle: (hS(ee) ? ee : null) ?? 0,
    leftEndCap: hS(ei) ? ei : void 0,
    rightEndCap: hS(er) ? er : void 0,
    hasReflection: hS(es) ? es : void 0
  };
  return jsx(d2.Provider, {
    value: ed,
    children: jsx(M, {
      canPickerShowColorContrast: !!j,
      closeOnClickOutside: !!u,
      colorFormat: z,
      colorProfile: $,
      currentSelectedGradientStop,
      currentTool,
      defaultColor: o,
      disableImagePaints: A,
      disablePatternPaints: L,
      disableStyleModal: D,
      dispatch: G,
      dropImageOnPaintThumbnail: f,
      dropdownShown: g,
      editModeType,
      hasVisiblePaintBelow: R,
      hidePatternPaints: F,
      inheritStyleKeyField: s,
      initialCreationModalView: x,
      initialStyleCreationPaint: C,
      initialView: y,
      isInStyleModal: P,
      keepOpenOnItemSelect: p,
      library,
      minimalUI: U,
      nodeDimensions: ec,
      onApplyStyle: d,
      onChange: l,
      onClose: c,
      openFile: H,
      paint: e,
      paintId: t,
      paintNodeIds: B,
      pickerShown: h,
      positioningProps: V,
      recordingKey: T,
      selectedStyle: i,
      solidPaintOnly: O,
      supportedViews: b,
      updateStillImageAndSelectionPropertiesForGIF: _,
      variableRerankingData: ed,
      variableScopes: k
    })
  });
}
M.displayName = "PaintPicker";
class U extends o6 {
  constructor() {
    super(...arguments);
    this.modalRef = createRef();
    this.handleDocumentPointerDown = e => {
      let t = e.target;
      let i = this.modalRef.current;
      if (!i || i.contains(t)) return;
      let n = document.querySelectorAll(".container-view");
      !this.props.closeOnClickOutside && [...n].some(e => e.contains(t)) || debugState.dispatch(XE());
    };
  }
  componentDidMount() {
    document.addEventListener(getFeatureFlags().ce_il_pressure_sensitivity ? "pointerdown" : "mousedown", this.handleDocumentPointerDown);
  }
  componentWillUnmount() {
    document.removeEventListener(getFeatureFlags().ce_il_pressure_sensitivity ? "pointerdown" : "mousedown", this.handleDocumentPointerDown);
  }
  render() {
    let e = new Point(this.props.pickerShown.initialX, this.props.pickerShown.initialY);
    return jsx(q, {
      ref: this.modalRef,
      canPickerShowColorContrast: this.props.canPickerShowColorContrast,
      colorFormat: this.props.colorFormat,
      currentSelectedGradientStop: this.props.currentSelectedGradientStop,
      currentTool: this.props.currentTool,
      disableImagePaints: this.props.disableImagePaints,
      disablePatternPaints: this.props.disablePatternPaints,
      disableStyleModal: this.props.disableStyleModal,
      dropImageOnPaintThumbnail: this.props.dropImageOnPaintThumbnail,
      dropdownShown: this.props.dropdownShown,
      hidePatternPaints: this.props.hidePatternPaints,
      inheritStyleKeyField: this.props.inheritStyleKeyField,
      initialCreationModalView: this.props.initialCreationModalView,
      initialPosition: e,
      initialStyleCreationPaint: this.props.initialStyleCreationPaint,
      initialView: this.props.initialView,
      isInStyleModal: this.props.isInStyleModal,
      keepOpenOnItemSelect: this.props.keepOpenOnItemSelect,
      minimalUI: this.props.minimalUI,
      onApplyStyle: this.props.onApplyStyle,
      onBlendModeChange: this.props.onBlendModeChange,
      onChange: this.props.onPaintChange,
      onClose: this.props.onClose,
      onColorChange: this.props.onColorChange,
      onColorVariableChange: this.props.onColorVariableChange,
      onKeyDown: this.props.onKeyDown,
      onPaintTypeChange: this.props.onPaintTypeChange,
      paint: this.props.paint,
      paintId: this.props.paintId,
      paintNodeIds: this.props.paintNodeIds,
      paintPickerSessionId: this.props.paintPickerSessionId,
      positioningProps: this.props.positioningProps,
      recordingKey: this.props.recordingKey,
      selectedStyle: this.props.selectedStyle,
      solidPaintOnly: this.props.solidPaintOnly,
      supportedViews: this.props.supportedViews,
      updateStillImageAndSelectionPropertiesForGIF: this.props.updateStillImageAndSelectionPropertiesForGIF,
      variableScopes: this.props.variableScopes
    });
  }
}
U.displayName = "PaintPickerModal";
export const Rz = $$L0;
export const ku = $$j1;
export const xm = $$F2;