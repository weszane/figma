import { yTM } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { getFilteredFeatureFlags } from "../905/717445";
import { getI18nString } from "../905/303541";
import { gl } from "../905/216495";
import { kl } from "../905/275640";
import { CL, tB, Qd } from "../figma_app/722913";
import { V0, Jt } from "../figma_app/359164";
export function $$u1(e) {
  return "Basic" === CL() && (e === yTM.VECTOR || e === yTM.VERTEX);
}
export function $$p4() {
  return "Brush" === CL();
}
export function $$_0(e) {
  return "Basic" === CL() && !(e === yTM.WASHI_TAPE || e === yTM.CONNECTOR);
}
export function $$h6() {
  let e = V0();
  let t = Jt();
  let r = tB();
  let i = kl("isInstanceSublayerSelected");
  let a = kl("isInstanceSelected");
  return r && 2 === t && e !== yTM.WASHI_TAPE && !i && !a;
}
export function $$m3() {
  return !kl("hasVariableWidthStroke");
}
export function $$g5() {
  let e = Qd();
  let t = kl("isComplexVectorNetworkSelected") && !getFilteredFeatureFlags().ce_il_var_width_vector_networks;
  let r = kl("dashPattern");
  let n = r && (gl(r) || r.length > 0);
  return getFilteredFeatureFlags().ce_il_var_width_points && e && !t && !n;
}
export function $$f2() {
  let e = Qd();
  let t = kl("isComplexVectorNetworkSelected");
  let r = kl("dashPattern");
  let n = r && (gl(r) || r.length > 0);
  return e ? t && !getFilteredFeatureFlags().ce_il_var_width_vector_networks ? getFeatureFlags().ce_il_var_width_strings ? getI18nString("fullscreen.properties_panel.width_profile.disabled.split_vector") : getI18nString("fullscreen.properties_panel.width_profile.disabled.branching_vectors") : n ? getFeatureFlags().ce_il_var_width_strings ? getI18nString("fullscreen.properties_panel.width_profile.disabled.dashed") : getI18nString("fullscreen.properties_panel.width_profile.disabled.dashed_stroke") : void 0 : getFeatureFlags().ce_il_var_width_strings ? getI18nString("fullscreen.properties_panel.width_profile.disabled.dynamic") : getI18nString("fullscreen.properties_panel.width_profile.disabled.dynamic_stroke");
}
export function $$E7() {
  let e = Qd();
  let t = kl("isComplexVectorNetworkSelected");
  let r = kl("dashPattern");
  let n = r && (gl(r) || r.length > 0);
  return e ? t && !getFilteredFeatureFlags().ce_il_var_width_vector_networks ? getFeatureFlags().ce_il_var_width_strings ? getI18nString("fullscreen_actions.split_vector_variable_width_disabled") : getI18nString("fullscreen_actions.show_vector_networks_variable_width_disabled") : n && getFeatureFlags().ce_il_var_width_strings ? getI18nString("fullscreen_actions.dashed_stroke_variable_width_disabled") : getI18nString("fullscreen_actions.set-tool-var-width-point") : getFeatureFlags().ce_il_var_width_strings ? getI18nString("fullscreen_actions.dynamic_stroke_variable_width_disabled") : getI18nString("fullscreen_actions.show_variable_width_disabled_dynamic_stroke");
}
export const Ey = $$_0;
export const Wn = $$u1;
export const X7 = $$f2;
export const bC = $$m3;
export const dG = $$p4;
export const il = $$g5;
export const kC = $$h6;
export const w6 = $$E7;