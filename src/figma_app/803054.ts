import { d4 } from "../vendor/514228";
import { ibQ, Ez5, nQ7, iCO } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { parsePxNumber } from "../figma_app/783094";
import { OU } from "../figma_app/175258";
import { MP } from "../figma_app/469876";
import { gl, oV, _W } from "../905/216495";
import { Gt, kl, ER, pw, zj } from "../905/275640";
import { ax, p8 } from "../figma_app/722362";
import { ut } from "../figma_app/84367";
import { Pe } from "../figma_app/12796";
import { sO } from "../figma_app/21029";
import { GV } from "../figma_app/159296";
import { uj0 } from "../figma_app/27776";
export let $$f16 = parsePxNumber(uj0);
export function $$E15(e) {
  return e[ibQ.TRANSFORM_ITEM] || e[ibQ.VECTOR_ITEM];
}
export function $$y12(e, t, r) {
  let n = t.numSelectedByType && !!t.numSelectedByType.SLIDE;
  let i = t.selectionIncludesCooperFrame;
  let a = t.numSelectedByType && !!t.numSelectedByType.CODE_INSTANCE;
  let s = t.numSelectedByType && !!t.numSelectedByType.CODE_LAYER;
  return !!(!e && !n && !i && !a && !s && (t.propertiesPanelShouldShowAddAutoLayout || t.propertiesPanelShouldShowRemoveAutoLayout || r?.propertiesPanelShouldShowAddAutoLayout || r?.propertiesPanelShouldShowRemoveAutoLayout));
}
export function $$b13() {
  let e = Gt("numSelectedByType");
  let t = ax();
  let r = sO();
  let n = ut(Ez5?.interopToolMode(), nQ7.SELF);
  if (!e || !t || r && n !== nQ7.DESIGN) return !1;
  let s = ["FRAME", "SYMBOL"];
  getFeatureFlags().dakota_grid_repeaters && s.push("REPEATER");
  return OU(e, s);
}
export function $$T6() {
  let e = GV();
  return d4(t => {
    let r = t.mirror.selectionPaints;
    return !!(!$$I4(e) && e[ibQ.SELECTION_COLORS] && (r.styles.length > 0 || r.paints.length > 0 || r.emptyDueToLimitExceeded));
  });
}
export function $$I4(e) {
  return !!e[ibQ.SCALE_ITEM] && !getFeatureFlags().ee_scale_tool_show_all_panels;
}
export function $$S2(e) {
  return !$$I4(e) && !!e[ibQ.CONSTRAINTS_ITEM];
}
export function $$v8(e, t) {
  return function (e, t, r) {
    let n = kl("containsResponsiveSets");
    let a = function (e) {
      let t = Gt("numSelectedByType");
      let {
        propertiesPanelShouldShowAddAutoLayout,
        propertiesPanelShouldShowRemoveAutoLayout
      } = (ER() ? pw : zj)("propertiesPanelShouldShowAddAutoLayout", "propertiesPanelShouldShowRemoveAutoLayout");
      let i = !!t?.SLIDE;
      let a = !!t?.CANVAS_ROW;
      let s = !!t?.CODE_INSTANCE;
      let o = !!t?.CODE_LAYER;
      return !!(!e && !i && !a && !s && !o && (propertiesPanelShouldShowAddAutoLayout || propertiesPanelShouldShowRemoveAutoLayout));
    }(t);
    return !n && (a || e[ibQ.STACK_ITEM] || !!(r && e[ibQ.TRANSFORM_ITEM]));
  }(e, $$I4(e), t);
}
export function $$A5(e, t) {
  return !!e[ibQ.EXPORT_ITEM] && null !== t && !Pe(t) && !MP();
}
export function $$x1(e) {
  let t = p8("showUi");
  let r = p8("isReadOnly");
  return t && !!e && r;
}
export function $$N18(e, t) {
  return !!e[ibQ.COMPONENT_ITEM] && !(!(!t || gl(t)) && t.mode === iCO.STATE);
}
export function $$C3(e) {
  return !!e[ibQ.INSTANCE_ITEM];
}
export function $$w9(e) {
  let t = kl("transformModifiers");
  return !!e[ibQ.TRANSFORM_MODIFIERS_ITEM] && !!t && t !== oV && _W(t, []).length > 0;
}
export function $$O11(e) {
  return !!(e[ibQ.INSTANCE_ITEM] && !e[ibQ.TYPE_ITEM]);
}
export function $$R17(e) {
  return !!(e[ibQ.SITES_CODE_COMPONENT_ITEM] && !e[ibQ.CODE_INSTANCE_HTML_FIBER]);
}
export function $$L14(e) {
  return !!e[ibQ.SITES_HTML_WIDGET_ITEM];
}
export function $$P10(e, t) {
  let r = p8("isReadOnly");
  return !$$I4(e) && !r && 0 === Object.keys(t).length && !e[ibQ.FRAME_PRESETS];
}
export function $$D19(e, t) {
  return !$$I4(e) && 0 === Object.keys(t).length && !e[ibQ.FRAME_PRESETS];
}
export function $$k7() {
  let e = Gt("numSelectedByType");
  let t = kl("vectorOperationVersion");
  return !!getFeatureFlags().ce_vector_ops_use_all_geometry && !!e?.VECTOR_OPERATION && (0 === t || t === oV);
}
export function $$M0(e) {
  return !!getFeatureFlags().dse_slots && !!e[ibQ.SLOT_ITEM];
}
export const Br = $$M0;
export const Dj = $$x1;
export const GG = $$S2;
export const M0 = $$C3;
export const NR = $$I4;
export const P1 = $$A5;
export const SJ = $$T6;
export const SQ = $$k7;
export const So = $$v8;
export const U4 = $$w9;
export const Ws = $$P10;
export const Y$ = $$O11;
export const aW = $$y12;
export const b7 = $$b13;
export const cR = $$L14;
export const d6 = $$E15;
export const iP = $$f16;
export const jd = $$R17;
export const tV = $$N18;
export const ww = $$D19;