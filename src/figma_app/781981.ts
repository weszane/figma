import { useMemo } from "react";
import { isIllustrationEditorType } from "../figma_app/976749";
import { useSceneGraphSelection } from "../figma_app/722362";
import { useDeepEqualSceneValue } from "../figma_app/167249";
import { DMenuItemType, CREATE_COMPONENT_OPTIONS_ID, BOOLEAN_OPERATIONS_FLYOUT_ID, MODIFIERS_OVERFLOW_FLYOUT_ID, COMPONENT_CONTROLS_ID } from "../figma_app/986347";
var l = (e => (e[e.TOOLBELT = 0] = "TOOLBELT", e[e.TOOLBAR = 1] = "TOOLBAR", e[e.NONE = 2] = "NONE", e))(l || {});
function d(e) {
  return e.type === DMenuItemType.ACTION ? e.action : e.id ?? null;
}
let c = {
  [CREATE_COMPONENT_OPTIONS_ID]: 0,
  "create-multiple-symbols": 0,
  "create-multiple-symbols-and-state-group": 0,
  "create-symbol": 0,
  "crop-image": 0,
  "text-edit-hyperlink": 0,
  "request-edit-mode-via-toolbar": 0,
  "multi-edit-text": 0,
  "select-similar": 0,
  "focus-mode-component-set-toggle": 0,
  "mask-selection": 0,
  [BOOLEAN_OPERATIONS_FLYOUT_ID]: 0,
  "live-boolean-union": 0,
  "live-boolean-subtract": 0,
  "live-boolean-intersect": 0,
  "live-boolean-xor": 0,
  "flatten-selection": 0,
  "go-to-original-component": 0,
  "goto-parent-component": 0,
  "restore-variant": 0,
  "select-matching": 0,
  [MODIFIERS_OVERFLOW_FLYOUT_ID]: 1,
  [COMPONENT_CONTROLS_ID]: 1,
  "focus-mode-responsive-set": 1,
  "toggle-component-configuration": 1,
  "apply-instance-swap": 1,
  "detach-instance": 1,
  "create-code-layer-from-design": 1,
  "create-make-from-design": 1,
  "add-variant": 1,
  "remove-selection-status": 1,
  "add-transform-modifier-to-selection": 1,
  "add-linear-repeat-to-selection": 1,
  "add-skew-modifier-to-selection": 1,
  "resize-to-fit": 1,
  "push-changes-to-main": 1,
  "rewrite-text": 1,
  "reset-symbol": 1,
  "reset-size": 1,
  "reset-exports": 1,
  "reset-effects": 1,
  "reset-layer": 1,
  "reset-visible": 1,
  "reset-name": 1,
  "reset-fill": 1,
  "reset-stroke": 1,
  "reset-text": 1,
  "reset-text-style": 1,
  "reset-prototype-interactions": 1,
  "reset-overlay": 1,
  reset_property_assignment: 1,
  "set-constraints-automatically-toggle": 1,
  "apply-transform-modifiers": 1,
  "add-variant-to-template-set": 1,
  "create-templates-from-row": 1,
  "create-state-group-row": 1,
  "add-selection-ready-status": 2,
  "create-section-from-selection": 2,
  "restore-design-in-place-from-code": 2,
  "copy-out-design-from-code": 2,
  "edit-code": 2,
  "reset-fauxverride": 2,
  "set-tool-offset-path": 2,
  "set-tool-simplify-vector": 2
};
let u = Object.keys(c).reduce((e, t, r) => (e[t] = 2 !== c[t] ? r : 1 / 0, e), {});
let p = {
  isCandidateForBooleanOps: !1,
  hideAllActions: !1
};
let _ = {
  forbidSelectionActions: !0
};
let h = {
  forbidSelectionActions: !1
};
let m = {
  forbidSelectionActions: !1
};
let g = {
  SECTION: _,
  SLICE: _,
  SLIDE_GRID: h,
  SLIDE_ROW: h,
  ASSISTED_LAYOUT: h,
  BRUSH: h,
  CANVAS: h,
  CMS_RICH_TEXT: h,
  CODE_BLOCK: h,
  CODE_COMPONENT: h,
  CODE_FILE: h,
  CODE_INSTANCE: h,
  CODE_LAYER: h,
  CODE_LIBRARY: h,
  CONNECTOR: h,
  DOCUMENT: h,
  HIGHLIGHT: h,
  INTERACTIVE_SLIDE_ELEMENT: h,
  MANAGED_STRING: h,
  MODULE: h,
  MEDIA: h,
  NONE: h,
  RESPONSIVE_SET: h,
  SECTION_OVERLAY: h,
  SHAPE_WITH_TEXT: h,
  SLIDE: h,
  STAMP: h,
  STICKY: h,
  TABLE: h,
  TABLE_CELL: h,
  VARIABLE: h,
  VARIABLE_OVERRIDE: h,
  VARIABLE_SET: h,
  WASHI_TAPE: h,
  WIDGET: h,
  FRAME: h,
  TEXT: h,
  TEXT_PATH: h,
  INSTANCE: h,
  SYMBOL: h,
  JSX: h,
  EMBEDDED_PROTOTYPE: h,
  REACT_FIBER: h,
  RESPONSIVE_NODE_SET: h,
  WEBPAGE: h,
  ELLIPSE: m,
  LINE: m,
  RECTANGLE: m,
  REGULAR_POLYGON: m,
  REPEATER: m,
  ROUNDED_RECTANGLE: m,
  STAR: m,
  TRANSFORM: m,
  VECTOR: m,
  BOOLEAN_OPERATION: m,
  GROUP: {
    forbidSelectionActions: !1
  }
};
export function $$f6() {
  let e = isIllustrationEditorType();
  let t = useSceneGraphSelection();
  let r = useMemo(() => Object.keys(t), [t]);
  return useDeepEqualSceneValue((t, r) => {
    if (!e || !r) return p;
    let n = [];
    for (let e of r) {
      let r = t.get(e);
      r && n.push(r);
    }
    return {
      isCandidateForBooleanOps: function e(t, r = 3) {
        if (r <= 0) return 0;
        let n = 0;
        for (let r of t) {
          if (r.isGroup) {
            let t = e(r.childrenNodes);
            if (-1 === t) return -1;
            n += t;
            continue;
          }
          let t = g[r.type];
          if (t === _ || t === h) return -1;
          if (t === m) {
            n++;
            continue;
          }
        }
        return n;
      }(n) > 1,
      hideAllActions: n.some(e => g[e.type] === _)
    };
  }, r);
}
let E = function (e) {
  return (t, r) => e(t) - e(r);
}(function (e) {
  let t = d(e);
  return t ? u[t] : 1 / 0;
});
let y = e => t => t.type === DMenuItemType.FLYOUT && t.id === BOOLEAN_OPERATIONS_FLYOUT_ID && e.isCandidateForBooleanOps ? t.actions : t;
export function $$b4(e, t) {
  return e.flatMap(y(t)).sort(E);
}
function T(e) {
  return function (t) {
    return t.filter(e);
  };
}
function I(e) {
  return !!e.length;
}
let S = e => t => {
  if (e.hideAllActions) return !1;
  let r = d(t);
  return !!r && 0 === c[r];
};
let v = e => t => {
  if (e.hideAllActions) return !1;
  let r = d(t);
  return !!r && 1 === c[r];
};
export function $$A1(e, t) {
  return e.map(T(v(t))).filter(I);
}
export function $$x3(e, t) {
  return e.map(T(S(t))).filter(I);
}
export { IF, Xz, gc, uo } from "../figma_app/986347";
export const Xl = $$A1;
export const Yd = $$x3;
export const bw = $$b4;
export const jw = $$f6;