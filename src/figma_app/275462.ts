import { useCallback } from "react";
import { getFeatureFlags } from "../905/601108";
import { useAtomWithSubscription } from "../figma_app/27355";
import { I7 } from "../figma_app/594947";
import { UQ } from "../figma_app/864723";
import { FFileType } from "../figma_app/191312";
var d = (e => (e.ASSET_PANEL_ONLY = "asset_panel_only", e.ASSET_PANEL_AND_TOOLBAR = "asset_panel_and_toolbar", e))(d || {});
export function $$c4() {
  let e = useAtomWithSubscription(UQ);
  return useCallback(() => null, [e]);
}
export function $$u9() {
  return useCallback(() => !1, []);
}
export function $$p17() {
  return useCallback(() => !1, []);
}
export function $$_16() {
  let {
    getConfig
  } = I7("cmty_rdp_component_viewer");
  return useCallback(() => getConfig().get("enabled", !1), [getConfig]);
}
export function $$h2(e) {
  return !!getFeatureFlags().cmty_lib_admin_publish || e && [FFileType.SLIDES, FFileType.COOPER].includes(e);
}
export function $$m7() {
  return !!getFeatureFlags().cmty_sites_full_file_publishing;
}
export function $$g18() {
  return !!getFeatureFlags().cmty_resource_hub;
}
export function $$f10() {
  return !!getFeatureFlags().cmty_make_publishing;
}
export function $$E5() {
  return !!getFeatureFlags().cmty_make_publishing_updates;
}
export function $$y14() {
  return !!getFeatureFlags().cmty_make_discovery;
}
export function $$b11() {
  return !!getFeatureFlags().make_template_publishing;
}
export function $$T3() {
  return !!getFeatureFlags().cmty_resource_hub_internal_search;
}
export function $$I0() {
  return !!getFeatureFlags().cmty_resource_hub_profiles;
}
export function $$S6() {
  let e = function () {
    let {
      getConfig
    } = I7("exp_cmty_related_content_logged_in");
    return useCallback(() => getConfig().get("enabled", !1), [getConfig]);
  }();
  let t = function () {
    let {
      getConfig
    } = I7("exp_cmty_related_content_logged_out");
    return useCallback(() => getConfig().get("enabled", !1), [getConfig]);
  }();
  return useCallback(() => e(), [e, t]);
}
export function $$v12() {
  let {
    getConfig
  } = I7("exp_buzz_import_from_design");
  return useCallback(() => getConfig().get("enabled", !1), [getConfig]);
}
export function $$A8() {
  return !!getFeatureFlags().cmty_skip_workspace_selection;
}
export function $$x15() {
  return !!getFeatureFlags().cmty_tnt_saving;
}
export function $$N13() {
  return !!getFeatureFlags().cmty_plugins_page;
}
export function $$C1() {
  return !!getFeatureFlags().buzz_template_picker_cmty_shelves;
}
export const CS = $$I0;
export const D7 = $$C1;
export const DU = $$h2;
export const Fm = $$T3;
export const GM = $$c4;
export const QU = $$E5;
export const Qd = $$S6;
export const Su = $$m7;
export const YN = $$A8;
export const _Y = $$u9;
export const aP = $$f10;
export const bF = $$b11;
export const fi = $$v12;
export const gs = $$N13;
export const l$ = $$y14;
export const oi = $$x15;
export const qw = $$_16;
export const te = $$p17;
export const yl = $$g18;