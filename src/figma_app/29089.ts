import { isNotNullish } from "../figma_app/95419";
import { LayoutTabType, DesignGraphElements, AppStateTsApi, SelectionPanelType, SymbolOverrideType, SwitchState, PresentationMode } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { getI18nString } from "../905/303541";
import { canAccessFullDevMode } from "../figma_app/473493";
import { P as _$$P } from "../905/36308";
import { kg } from "../figma_app/120210";
import { useStrictDeepEqualSceneValue } from "../figma_app/167249";
import { Yh } from "../figma_app/357047";
import { Iv } from "../figma_app/987";
import { uo, IF } from "../figma_app/781981";
import { ZU } from "../figma_app/986347";
import { A as _$$A } from "../2854/108581";
export function $$g20(e) {
  return "action" in e;
}
export function $$f8(e) {
  return "divider" in e;
}
let $$E11 = [LayoutTabType.DESIGN_LAYOUT, LayoutTabType.WHITEBOARD_LAYOUT, LayoutTabType.SLIDE_LAYOUT, LayoutTabType.SITES_LAYOUT, LayoutTabType.BUZZ_LAYOUT, LayoutTabType.RASTER, LayoutTabType.GRADIENT, LayoutTabType.TEXT, LayoutTabType.COMMENTS];
let y = $$E11.concat([LayoutTabType.VECTOR]);
let b = $$E11.concat([LayoutTabType.VECTOR, LayoutTabType.PLACE_IMAGE]);
let T = [LayoutTabType.VECTOR];
let I = [LayoutTabType.PLACE_IMAGE];
let $$S5 = [LayoutTabType.PREVIEW, LayoutTabType.BRANCHING, LayoutTabType.COMPARE_CHANGES, LayoutTabType.HISTORY];
let v = [LayoutTabType.DESIGN_LAYOUT, LayoutTabType.SITES_LAYOUT, LayoutTabType.TEXT, LayoutTabType.RASTER, LayoutTabType.GRADIENT, LayoutTabType.PREVIEW, LayoutTabType.COMMENTS, LayoutTabType.BRANCHING, LayoutTabType.HISTORY, LayoutTabType.COMPARE_CHANGES];
let A = {
  type: ZU.FLYOUT,
  name: "move-flyout",
  children: [{
    action: "set-tool-default",
    property: "currentTool",
    propertyValue: DesignGraphElements.SELECT,
    recordingKey: "toolDefault"
  }, {
    action: "set-tool-scale",
    property: "currentTool",
    propertyValue: DesignGraphElements.SCALE,
    recordingKey: "toolScale"
  }],
  editModes: b,
  recordingKey: "moveFlyout"
};
let x = {
  type: ZU.FLYOUT,
  name: "shape-flyout",
  editModes: $$E11,
  recordingKey: "shapeFlyout",
  children: [{
    action: "set-tool-rectangle",
    property: "currentTool",
    propertyValue: DesignGraphElements.SHAPE_RECTANGLE,
    recordingKey: "toolShapeRectangle"
  }, {
    action: "set-tool-line",
    property: "currentTool",
    propertyValue: DesignGraphElements.SHAPE_LINE,
    recordingKey: "toolShapeLine"
  }, {
    action: "set-tool-arrow",
    property: "currentTool",
    propertyValue: DesignGraphElements.SHAPE_ARROW,
    recordingKey: "toolShapeArrow"
  }, {
    action: "set-tool-ellipse",
    property: "currentTool",
    propertyValue: DesignGraphElements.SHAPE_ELLIPSE,
    recordingKey: "toolShapeEllipse"
  }, {
    action: "set-tool-regular-polygon",
    property: "currentTool",
    propertyValue: DesignGraphElements.SHAPE_REGULAR_POLYGON,
    recordingKey: "toolShapePolygon"
  }, {
    action: "set-tool-star",
    property: "currentTool",
    propertyValue: DesignGraphElements.SHAPE_STAR,
    recordingKey: "toolShapeStar"
  }, {
    action: "place",
    recordingKey: "toolPlaceImage",
    onboardingKey: "tool-place-image"
  }]
};
let N = {
  type: ZU.FLYOUT,
  name: "comments-flyout",
  editModes: $$E11,
  recordingKey: "commentsFlyout",
  children: [{
    action: "set-tool-comments",
    property: "currentTool",
    propertyValue: DesignGraphElements.COMMENTS,
    recordingKey: "toolComments"
  }, {
    action: "set-tool-annotate",
    property: "currentTool",
    propertyValue: DesignGraphElements.ANNOTATE,
    recordingKey: "toolAnnotate"
  }, {
    action: "set-tool-measure",
    property: "currentTool",
    propertyValue: DesignGraphElements.MEASURE,
    recordingKey: "toolMeasure"
  }]
};
let $$C22 = {
  type: ZU.TOOL,
  tool: DesignGraphElements.COMMENTS,
  action: "set-tool-comments",
  editModes: $$E11.concat([LayoutTabType.PREVIEW]),
  nonEditorsAllowed: !0,
  onboardingKey: "comment",
  recordingKey: "toolComment"
};
let $$w29 = "insert";
let O = {
  type: ZU.ACTION,
  action: "component-insert",
  editModes: $$E11,
  recordingKey: "toolResourceInsert",
  onboardingKey: $$w29,
  isActive: kg
};
[{
  type: ZU.TOOL,
  tool: DesignGraphElements.SELECT,
  action: "set-tool-default",
  nonEditorsAllowed: !0,
  editModes: $$S5,
  recordingKey: "toolDefault"
}, A, {
  type: ZU.FLYOUT,
  name: "region-flyout",
  editModes: $$E11,
  onboardingKey: "frame",
  recordingKey: "regionFlyout",
  children: [{
    action: "set-tool-frame",
    property: "currentTool",
    propertyValue: DesignGraphElements.FRAME,
    recordingKey: "toolFrame"
  }, {
    action: "set-tool-section",
    property: "currentTool",
    propertyValue: DesignGraphElements.SECTION,
    recordingKey: "toolSection"
  }, {
    action: "set-tool-slice",
    property: "currentTool",
    propertyValue: DesignGraphElements.SLICE,
    recordingKey: "toolSlice"
  }]
}, x, {
  type: ZU.FLYOUT,
  name: "pen-flyout",
  editModes: y,
  recordingKey: "penFlyout",
  onboardingKey: "pen",
  children: [{
    action: "set-tool-pen",
    property: "currentTool",
    propertyValue: DesignGraphElements.VECTOR_PEN,
    recordingKey: "toolPen"
  }, {
    action: "set-tool-pencil",
    property: "currentTool",
    propertyValue: DesignGraphElements.VECTOR_PENCIL,
    recordingKey: "toolPencil"
  }]
}, {
  type: ZU.TOOL,
  tool: DesignGraphElements.VECTOR_BEND,
  action: "set-tool-bend",
  editModes: T,
  recordingKey: "toolBend"
}, {
  type: ZU.TOOL,
  tool: DesignGraphElements.VECTOR_PAINT_BUCKET,
  action: "set-tool-paint-bucket",
  editModes: T,
  recordingKey: "toolPaintBucket"
}, {
  type: ZU.TOOL,
  tool: DesignGraphElements.VECTOR_LASSO,
  action: "set-tool-vector-lasso",
  editModes: T,
  recordingKey: "toolVectorLasso"
}, {
  type: ZU.TOOL,
  tool: DesignGraphElements.VECTOR_VAR_WIDTH_POINT,
  action: "set-tool-var-width-point",
  editModes: T,
  recordingKey: "toolVarWidthPoint",
  featureFlags: ["ce_il_var_width_points"],
  nonEditorsAllowed: !1,
  newFileDisabled: !1,
  onlyShowInReadOnly: !1
}, {
  type: ZU.TOOL,
  tool: DesignGraphElements.VECTOR_CUT,
  action: "set-tool-cut",
  editModes: T,
  recordingKey: "toolCut",
  featureFlags: ["ce_il_vem_cut_tool"]
}, {
  type: ZU.TOOL,
  tool: DesignGraphElements.OFFSET_PATH,
  action: "set-tool-offset-path",
  editModes: $$E11,
  recordingKey: "toolOffsetPath",
  featureFlags: ["ce_il_vem_offset_path"]
}, {
  type: ZU.TOOL,
  tool: DesignGraphElements.SHAPE_BUILDER,
  action: "set-tool-shape-builder",
  editModes: T,
  recordingKey: "toolShapeBuilder"
}, {
  type: ZU.TOOL,
  tool: DesignGraphElements.SIMPLIFY_VECTOR,
  action: "set-tool-simplify-vector",
  editModes: $$E11,
  recordingKey: "toolSimplify"
}, {
  type: ZU.TOOL,
  tool: DesignGraphElements.TYPE,
  action: "set-tool-type",
  editModes: $$E11,
  recordingKey: "toolType",
  onboardingKey: "tool-type-onboarding"
}, O, {
  type: ZU.TOOL,
  tool: DesignGraphElements.HAND,
  action: "set-tool-hand",
  nonEditorsAllowed: !0,
  loggedOutAllowed: !0,
  editModes: v,
  recordingKey: "toolHand"
}, $$C22, {
  type: ZU.LABEL,
  label: "toolbar-place-image",
  editModes: I,
  recordingKey: "toolPlaceOneImage"
}, {
  type: ZU.TEXT_BUTTON,
  action: "place-all-images",
  editModes: I,
  recordingKey: "toolPlaceAllImages"
}, {
  type: ZU.TEXT_BUTTON,
  action: "discard-all-images",
  editModes: I,
  recordingKey: "toolDiscardAllImages"
}, {
  type: ZU.TEXT_BUTTON,
  action: "leave-edit-mode",
  editModes: T,
  tooltip: "leave-vector-edit-mode",
  recordingKey: "toolLeaveVectorEditMode"
}].map(e => e === $$C22 ? N : e);
let R = {
  type: ZU.ACTION,
  action: "focus-mode-component-set-toggle",
  editModes: [LayoutTabType.DESIGN_LAYOUT, LayoutTabType.SITES_LAYOUT],
  recordingKey: "focusModeComponentSetToggle",
  isActive: () => AppStateTsApi.uiState().focusModeState.getCopy() === SelectionPanelType.COMPONENT_SET,
  onboardingKey: "focus-mode-component-set-toggle"
};
let L = [{
  type: ZU.ACTION,
  action: "multi-edit-text",
  editModes: $$E11,
  recordingKey: "multiEditText",
  onboardingKey: "multi-edit-text"
}, {
  type: ZU.ACTION,
  action: "select-matching",
  editModes: [LayoutTabType.DESIGN_LAYOUT, LayoutTabType.SLIDE_LAYOUT, LayoutTabType.SITES_LAYOUT],
  recordingKey: "selectMatching"
}, R];
function P(e) {
  return (t, r, n) => !!r?.[e];
}
let D = {
  type: ZU.ACTION,
  editModes: $$E11,
  action: "live-boolean-union",
  recordingKey: "toolBooleanUnion"
};
let k = {
  type: ZU.ACTION,
  editModes: $$E11,
  action: "live-boolean-subtract",
  recordingKey: "toolBooleanSubtract"
};
let M = {
  type: ZU.ACTION,
  editModes: $$E11,
  action: "live-boolean-intersect",
  recordingKey: "toolBooleanIntersect"
};
let F = {
  type: ZU.ACTION,
  editModes: $$E11,
  action: "live-boolean-xor",
  recordingKey: "toolBooleanXor"
};
let j = {
  type: ZU.ACTION,
  editModes: $$E11,
  action: "flatten-selection",
  recordingKey: "toolFlatten"
};
let U = {
  type: ZU.ACTION,
  action: "focus-mode-component-set-toggle",
  editModes: [LayoutTabType.DESIGN_LAYOUT, LayoutTabType.SITES_LAYOUT],
  recordingKey: "focusModeComponentSetToggle",
  isActive: () => AppStateTsApi.uiState().focusModeState.getCopy() === SelectionPanelType.COMPONENT_SET,
  onboardingKey: "focus-mode-component-set-toggle"
};
let B = {
  type: ZU.ACTION,
  action: "focus-mode-responsive-set",
  editModes: [LayoutTabType.SITES_LAYOUT],
  recordingKey: "autoFocusModeResponsiveSetToggle",
  onboardingKey: "auto-focus-mode-responsive-set-toggle",
  isActive: () => AppStateTsApi.editorPreferences().toggleResponsiveSetAutoFocus.getCopy(),
  isAvailable: e => Yh(e, "focus-mode-responsive-set"),
  getDisplayAction: () => AppStateTsApi.editorPreferences().toggleResponsiveSetAutoFocus.getCopy() ? "focus-mode-responsive-set-disable" : "focus-mode-responsive-set-enable"
};
let G = e => ({
  type: ZU.ACTION,
  action: "select-matching",
  editModes: [LayoutTabType.DESIGN_LAYOUT, LayoutTabType.SLIDE_LAYOUT, LayoutTabType.SITES_LAYOUT, LayoutTabType.BUZZ_LAYOUT],
  recordingKey: "selectMatching",
  isAvailable: e => Yh(e, "select-matching"),
  preventHoisting: eF(e)
});
let $$V33 = {
  type: ZU.ACTION,
  action: "select-similar",
  editModes: [LayoutTabType.DESIGN_LAYOUT, LayoutTabType.SLIDE_LAYOUT, LayoutTabType.SITES_LAYOUT],
  recordingKey: "selectSimilar",
  isAvailable: e => Yh(e, "select-similar"),
  featureFlags: ["first_draft_select_similar"]
};
let H = {
  type: ZU.ACTION,
  action: "multi-edit-text",
  editModes: $$E11,
  recordingKey: "multiEditText",
  onboardingKey: "multi-edit-text"
};
export function $$z3() {
  return useStrictDeepEqualSceneValue(e => W(e.getDirectlySelectedNodes()));
}
function W(e) {
  let t = [B, U, H, G(e)];
  let r = e.some(e => e.isOrInResponsiveSetOrWebpage && e.isInPrimaryBreakpointFrame);
  let n = r && AppStateTsApi?.editorPreferences().toggleResponsiveSetAutoFocus.getCopy();
  return getFeatureFlags().sts_multiedit_toggle && n ? t.filter(e => "select-matching" !== e.action) : getFeatureFlags().sts_multiedit_toggle && !r ? t.filter(e => e !== B) : t;
}
let K = {
  type: ZU.ACTION,
  action: "add-selection-ready-status",
  editModes: [...$$E11, LayoutTabType.DEV_HANDOFF],
  recordingKey: "toolAddReadyStatus",
  isActive: () => !1,
  reactKey: "dev-ready-status-toggle"
};
let $$Y28 = {
  type: ZU.ACTION,
  action: "remove-selection-status",
  editModes: [...$$E11, LayoutTabType.DEV_HANDOFF],
  isActive: () => !0,
  recordingKey: "toolRemoveStatus",
  reactKey: "dev-ready-status-toggle"
};
let $$$34 = {
  type: ZU.ACTION,
  action: "text-edit-hyperlink",
  isActive: () => AppStateTsApi.editorState().selectionIsHyperlink.getCopy(),
  editModes: [LayoutTabType.DESIGN_LAYOUT, LayoutTabType.TEXT, LayoutTabType.SLIDE_LAYOUT, LayoutTabType.SITES_LAYOUT],
  recordingKey: "editHyperlink"
};
let X = {
  type: ZU.ACTION,
  action: "create-symbol",
  recordingKey: "toolCreateSymbol",
  onboardingKey: "create-symbol"
};
let q = {
  type: ZU.ACTION,
  action: "create-multiple-symbols",
  recordingKey: "toolCreateMultipleSymbols",
  onboardingKey: "create-symbol"
};
let J = {
  type: ZU.ACTION,
  action: "create-multiple-symbols-and-state-group",
  recordingKey: "toolCreateMultipleSymbolsAndStateGroup",
  onboardingKey: "create-symbol"
};
let $$Z7 = {
  type: ZU.ACTION,
  action: "detach-instance",
  recordingKey: "detachInstance",
  onboardingKey: "detach-instance",
  preventHoisting: !0
};
let $$Q15 = {
  type: ZU.ACTION,
  action: "push-changes-to-main",
  recordingKey: "pushChangesToMain",
  preventHoisting: !0
};
let $$ee23 = {
  type: ZU.ACTION,
  action: "reset-symbol",
  recordingKey: "resetSymbol",
  preventHoisting: !0
};
let $$et14 = {
  type: ZU.ACTION,
  action: "reset-fauxverride",
  recordingKey: "resetFauxverride",
  preventHoisting: !0
};
let er = {
  type: ZU.ACTION,
  action: "reset-size",
  recordingKey: "resetSize",
  isAvailable: P(SymbolOverrideType.SIZE),
  preventHoisting: !0
};
let en = {
  type: ZU.ACTION,
  action: "reset-exports",
  recordingKey: "resetExports",
  isAvailable: P(SymbolOverrideType.EXPORTS),
  preventHoisting: !0
};
let ei = {
  type: ZU.ACTION,
  action: "reset-effects",
  recordingKey: "resetEffects",
  isAvailable: P(SymbolOverrideType.EFFECTS),
  preventHoisting: !0
};
let ea = {
  type: ZU.ACTION,
  action: "reset-layer",
  recordingKey: "resetLayer",
  isAvailable: P(SymbolOverrideType.LAYER),
  preventHoisting: !0
};
let es = {
  type: ZU.ACTION,
  action: "reset-visible",
  recordingKey: "resetChanges",
  isAvailable: P(SymbolOverrideType.VISIBLE),
  preventHoisting: !0
};
let eo = {
  type: ZU.ACTION,
  action: "reset-name",
  recordingKey: "resetName",
  isAvailable: P(SymbolOverrideType.NAME),
  preventHoisting: !0
};
let el = {
  type: ZU.ACTION,
  action: "reset-fill",
  recordingKey: "resetFill",
  isAvailable: P(SymbolOverrideType.FILL),
  preventHoisting: !0
};
let ed = {
  type: ZU.ACTION,
  action: "reset-stroke",
  recordingKey: "resetStroke",
  isAvailable: P(SymbolOverrideType.STROKE),
  preventHoisting: !0
};
let $$ec = {
  type: ZU.ACTION,
  action: "reset-text",
  recordingKey: "resetText",
  isAvailable: P(SymbolOverrideType.TEXT),
  preventHoisting: !0
};
let eu = {
  type: ZU.ACTION,
  action: "reset-text-style",
  recordingKey: "resetStyle",
  isAvailable: P(SymbolOverrideType.TEXT_STYLE),
  preventHoisting: !0
};
let ep = {
  type: ZU.ACTION,
  action: "reset-prototype-interactions",
  recordingKey: "resetPrototypeInteractions",
  isAvailable: P(SymbolOverrideType.PROTOTYPE_INTERACTIONS),
  preventHoisting: !0
};
let e_ = {
  type: ZU.ACTION,
  action: "reset-overlay",
  recordingKey: "resetOverlay",
  isAvailable: P(SymbolOverrideType.OVERLAY),
  preventHoisting: !0
};
let $$eh17 = {
  type: ZU.ACTION,
  action: "add-variant",
  editModes: $$E11,
  recordingKey: "addVariant"
};
let em = {
  type: ZU.ACTION,
  action: "mask-selection",
  getDisplayAction: _$$P,
  isActive: () => AppStateTsApi.editorState().selectionIsMask.getCopy() === SwitchState.ON,
  editModes: $$E11,
  recordingKey: "toolMaskSelection"
};
let $$eg27 = {
  type: ZU.ACTION,
  action: "crop-image",
  editModes: $$E11,
  recordingKey: "toolCropImage"
};
let $$ef21 = {
  type: ZU.ACTION,
  action: "request-edit-mode-via-toolbar",
  editModes: $$E11,
  recordingKey: "toolEditMode"
};
let $$eE30 = {
  type: ZU.ACTION,
  action: "create-section-from-selection",
  editModes: $$E11,
  recordingKey: "toolCreateSection"
};
let ey = {
  type: ZU.ACTION,
  action: "create-code-layer-from-design",
  editModes: $$E11,
  recordingKey: "toolConvertDesignToCodeLayer",
  isAvailable: e => Yh(e, "create-code-layer-from-design"),
  disabled: !getFeatureFlags().sts_code_authoring && !getFeatureFlags().sts_code_authoring_by_plan,
  getDisplayAction: () => getFeatureFlags().sts_code_authoring || getFeatureFlags().sts_code_authoring_by_plan ? "create-code-layer-from-design" : "create-code-layer-from-design-disabled"
};
export function $$eb16() {
  return useStrictDeepEqualSceneValue(e => {
    var t;
    t = e.getDirectlySelectedNodes();
    return {
      type: ZU.ACTION,
      action: "create-make-from-design",
      editModes: $$E11,
      recordingKey: "toolMakeFromDesign",
      isAvailable: e => Yh(e, "create-make-from-design"),
      preventHoisting: eF(t)
    };
  });
}
let eT = {
  type: ZU.ACTION,
  action: "restore-design-in-place-from-code",
  editModes: $$E11,
  recordingKey: "toolRestoreDesignInPlaceFromCode",
  preventHoisting: !0,
  isAvailable: e => Yh(e, "restore-design-in-place-from-code")
};
let eI = {
  type: ZU.ACTION,
  action: "copy-out-design-from-code",
  editModes: $$E11,
  recordingKey: "toolCopyOutDesignFromCode",
  preventHoisting: !0,
  isAvailable: e => Yh(e, "copy-out-design-from-code")
};
let eS = {
  type: ZU.FLYOUT,
  dropdownKey: "component_actions",
  getTooltip: () => getI18nString("fullscreen.selection_actions.tooltip_component_actions"),
  actions: [X, q, J],
  flyoutRecordingKey: "componentActionsFlyout",
  id: uo
};
let ev = {
  type: ZU.FLYOUT,
  dropdownKey: "boolean_operations",
  getTooltip: () => getI18nString("fullscreen.selection_actions.tooltip_boolean_operations"),
  actions: [D, k, M, F, j],
  flyoutRecordingKey: "booleanFlyout",
  id: IF
};
let $$eA10 = {
  type: ZU.ACTION,
  action: "set-tool-offset-path",
  editModes: $$E11,
  recordingKey: "toolSetToolOffsetPath"
};
let $$ex25 = {
  type: ZU.ACTION,
  action: "set-tool-simplify-vector",
  editModes: $$E11,
  recordingKey: "toolSetToolSimplifyVector"
};
let $$eN0 = {
  type: ZU.ACTION,
  action: "add-variant-to-template-set",
  editModes: [LayoutTabType.BUZZ_LAYOUT],
  recordingKey: "addVariantToTemplateSet"
};
let $$eC32 = {
  type: ZU.ACTION,
  action: "create-templates-from-row",
  editModes: [LayoutTabType.BUZZ_LAYOUT],
  recordingKey: "createMultipleTemplatesFromRow"
};
let $$ew26 = {
  type: ZU.ACTION,
  action: "create-state-group-row",
  editModes: [LayoutTabType.BUZZ_LAYOUT],
  recordingKey: "createTemplateSet"
};
export function $$eO18() {
  return [K, $$Y28];
}
export function $$eR9({
  resetSubmenu: e,
  selectedNodes: t,
  applyInstanceSwapButton: r,
  instanceNeedsUpdateButton: i,
  bindingButton: s,
  transformModifiersOverflowButton: o,
  restoreVariantButton: l,
  componentConfigurationButton: d,
  slotActions: c,
  designRewriteButton: u,
  figjamRewriteButton: p,
  sitesDisabledCreateSymbolButton: _,
  onlyShowBreakpointFrameActions: h,
  cmsCollectionSelectorMenu: m,
  cmsCollectionUnbindAction: g,
  shouldShowTextEditHyperlinkAction: f,
  applyTransformModifiersButton: E,
  isIllustrationMode: y,
  slidesDesignModeVariableModeButton: b
}) {
  if (h) return [[B]];
  let T = [r, s, $$eh17, d, $$eB24(t, y), l, $$Q15, function (e) {
    let t = e.some(e => e.isCodeInstance);
    return {
      ...$$Z7,
      preventHoisting: !t
    };
  }(t), $$ee23, $$et14, e].filter(isNotNullish);
  let I = [...(f ? [$$$34] : []), $$eg27, $$ej13(t), $$Y28];
  let S = $$eM19(t);
  let v = W(t);
  let A = $$eP12(t);
  let x = [$$ef21, $$eE30];
  let N = [$$eG2(t)].filter(isNotNullish);
  let C = function (e) {
    let t = 1 === e.length && e[0].mask;
    let r = 2 === e.length && eL(e) && e.some(e => e.hasEnabledStaticImagePaint);
    return t || r;
  }(t) || $$ek4(t);
  let w = [N, A];
  let O = C ? [x] : [...w, x];
  return [c, b ? [b] : [], E ? [E] : [], o ? [o] : [], i ? [i] : [], [ey], [eI, eT], v, S ? [] : I, ...(C ? w : []), T, getFeatureFlags().cms_bindings_ux_improvements ? [m].filter(isNotNullish) : [], [_].filter(isNotNullish), S ? I : [], getFeatureFlags().cms_bindings_ux_improvements ? [] : [m].filter(isNotNullish), [g].filter(isNotNullish), ...O, [u].filter(isNotNullish), [p].filter(isNotNullish), [$$V33], [$$eA10, $$ex25]];
}
function eL(e, t = 1) {
  let r = ["VECTOR", "STAR", "LINE", "ELLIPSE", "RECTANGLE", "ROUNDED_RECTANGLE", "REGULAR_POLYGON", "SHAPE_WITH_TEXT", "BOOLEAN_OPERATION"];
  return e.filter(e => r.includes(e.type)).length >= t;
}
export function $$eP12(e) {
  let t = 1 === e.length && eD(e);
  return [{
    ...ev,
    preventHoisting: t
  }];
}
function eD(e) {
  return $$eM19(e) || eU(e) || 1 === e.length && e[0].isTopLevelFrame() && !e[0].isGroup && e[0].childCount > 0 || eF(e);
}
export function $$ek4(e) {
  return function (e, t = 1) {
    return 1 === e.length && e[0]?.isGroup ? eL(e[0].childrenNodes, t) : eL(e, t);
  }(e, 2) || 1 === e.length && e[0]?.type === "BOOLEAN_OPERATION";
}
export function $$eM19(e) {
  return 1 === e.length && ("SYMBOL" === e[0].type || e[0].isStateGroup);
}
function eF(e) {
  return e.some(e => e.isSlotReactive);
}
export function $$ej13(e) {
  return $$eM19(e) || e.some(e => e.isInstance) ? {
    ...K,
    preventHoisting: !0
  } : K;
}
function eU(e) {
  return e.every(e => e.isInstance);
}
export function $$eB24(e, t) {
  return eU(e) ? {
    ...eS,
    preventHoisting: !t
  } : eS;
}
export function $$eG2(e) {
  return getFeatureFlags().dse_slots && eF(e) ? void 0 : eD(e) ? {
    ...em,
    preventHoisting: !0
  } : em;
}
export let $$eV31 = [en, ei, ea, es, eo, el, ed, $$ec, eu, er, ep, e_];
[ZU.ACTION, ZU.ACTION, ...L, ZU.ACTION, ZU.ACTION, ZU.FLYOUT, ZU.ACTION, ZU.ACTION, (ZU.ACTION, _$$P, () => AppStateTsApi.editorState().selectionIsMask.getCopy() === SwitchState.ON), ZU.FLYOUT, ZU.ACTION, (ZU.ACTION, LayoutTabType.DESIGN_LAYOUT, LayoutTabType.TEXT, LayoutTabType.SLIDE_LAYOUT, LayoutTabType.SITES_LAYOUT), ZU.ACTION, (ZU.ACTION, [...$$E11, LayoutTabType.DEV_HANDOFF, LayoutTabType.PREVIEW], (e, t, r) => r?.canEdit || canAccessFullDevMode({
  openFile: r
})), (ZU.ACTION, [...$$E11, LayoutTabType.DEV_HANDOFF, LayoutTabType.PREVIEW], () => !0)];
ZU.TOOL;
DesignGraphElements.SELECT;
LayoutTabType.DEV_HANDOFF;
LayoutTabType.DEV_HANDOFF_HISTORY;
_$$A;
ZU.TOOL;
DesignGraphElements.MEASURE;
LayoutTabType.DEV_HANDOFF;
ZU.TOOL;
DesignGraphElements.ANNOTATE;
LayoutTabType.DEV_HANDOFF;
ZU.TOOL;
DesignGraphElements.COMMENTS;
LayoutTabType.DEV_HANDOFF;
let $$eH6 = {
  type: ZU.FLYOUT,
  name: "prototype-view-flyout",
  editModes: $$E11.concat([LayoutTabType.DEV_HANDOFF, LayoutTabType.PREVIEW, LayoutTabType.MAGIC_LINK]),
  nonEditorsAllowed: !0,
  loggedOutAllowed: !0,
  recordingKey: "prototypeViewFlyout",
  dontChainRecordingKeys: !0,
  flyoutDoNotStyleActiveItem: !0,
  children: [{
    action: "present-as-prototype",
    actionOnFlyoutItemClick: "set-prototype-view-present",
    isActive: () => AppStateTsApi.prototypingEditorState().prototypeViewMode.getCopy() === PresentationMode.PRESENT,
    recordingKey: "prototypeViewPresent",
    onboardingKey: "prototype-view-present-dropdown-option"
  }, {
    action: "toggle-inline-preview",
    actionOnFlyoutItemClick: "set-prototype-view-preview",
    isActive: () => AppStateTsApi.prototypingEditorState().prototypeViewMode.getCopy() === PresentationMode.PREVIEW,
    recordingKey: "prototypeViewPreview"
  }],
  onboardingKey: "prototype-view-flyout"
};
let $$ez1 = {
  type: ZU.FLYOUT,
  name: "prototype-view-sites",
  recordingKey: "prototypeViewSites",
  flyoutDoNotStyleActiveItem: !0,
  nonEditorsAllowed: !0,
  onboardingKey: Iv,
  children: [{
    action: "present-sites-full-preview",
    actionOnFlyoutItemClick: "set-sites-full-preview",
    isActive: () => AppStateTsApi.prototypingEditorState().prototypeViewMode.getCopy() === PresentationMode.PRESENT,
    recordingKey: "sitesFullPreview",
    onboardingKey: Iv
  }, {
    action: "toggle-inline-html-preview",
    actionOnFlyoutItemClick: "set-sites-inline-preview",
    isActive: () => AppStateTsApi.prototypingEditorState().prototypeViewMode.getCopy() === PresentationMode.PREVIEW,
    recordingKey: "sitesInlinePreview",
    onboardingKey: Iv
  }]
};
export const A8 = $$eN0;
export const Ax = $$ez1;
export const D5 = $$eG2;
export const Ef = $$z3;
export const FC = $$ek4;
export const FP = $$S5;
export const Fz = $$eH6;
export const GQ = $$Z7;
export const HK = $$f8;
export const JQ = $$eR9;
export const KM = $$eA10;
export const LB = $$E11;
export const LS = $$eP12;
export const OD = $$ej13;
export const Oy = $$et14;
export const PU = $$Q15;
export const Sd = $$eb16;
export const T$ = $$eh17;
export const Te = $$eO18;
export const YW = $$eM19;
export const Zk = $$g20;
export const _x = $$ef21;
export const ec = $$C22;
export const hg = $$ee23;
export const li = $$eB24;
export const mC = $$ex25;
export const pN = $$ew26;
export const s$ = $$eg27;
export const sM = $$Y28;
export const sY = $$w29;
export const sv = $$eE30;
export const sy = $$eV31;
export const tS = $$eC32;
export const vo = $$V33;
export const zb = $$$34;