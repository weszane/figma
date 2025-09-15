import { useCallback } from "react";
import { getFeatureFlags } from "../905/601108";
import { atom, useAtomWithSubscription } from "../figma_app/27355";
import { desktopAPIInstance } from "../figma_app/876459";
import { jm } from "../figma_app/416935";
import { isDevEnvironment } from "../figma_app/169182";
import { isAndroidOrIphoneNotFigmaMobile } from "../figma_app/778880";
import { selectExperimentConfigHook } from "../figma_app/594947";
import { useCurrentUserOrgId } from "../905/845253";
import { FFileType } from "../figma_app/191312";
let _ = () => !!useCurrentUserOrgId();
export function $$h1(e) {
  return !!e;
}
export function $$m9(e) {
  return !1;
}
export function $$g3() {
  return !!getFeatureFlags().rollout_pinned_comments_ff;
}
export function $$f10({
  user: e,
  file: t,
  numPinnedCommentThreads: r
} = {}) {
  return !!$$g3() && !!e && !!t && t.editorType === FFileType.DESIGN && (!!r && r > 0 || !!(isDevEnvironment() && jm(e.email)) || !!t.team && !t.parentOrgId);
}
export function $$E7() {
  let {
    getConfig
  } = selectExperimentConfigHook("rollout_pinned_comments_ff");
  return getConfig().getValue("can_pin_comments", !1);
}
export function $$y8() {
  let {
    getConfig
  } = selectExperimentConfigHook("exp_in_file_notif_bell");
  return () => !desktopAPIInstance && !isAndroidOrIphoneNotFigmaMobile && getConfig().get("has_editor_bell", !1);
}
export function $$b2() {
  return getFeatureFlags().google_federated_cm ?? !1;
}
export var $$T6 = (e => (e.DEFAULT = "default", e.PZ_THEN_PRODUCT = "pz_then_product", e.PRODUCT_THEN_PZ = "product_then_pz", e))($$T6 || {});
export let $$I0 = atom(null);
export function $$S4() {
  let e = useAtomWithSubscription($$I0);
  return "product_then_pz" === e || "pz_then_product" === e;
}
export function $$v5() {
  let e = _();
  let {
    getConfig
  } = selectExperimentConfigHook("cmty_home_shelf_exp_v2__non_org");
  let {
    getConfig: _getConfig
  } = selectExperimentConfigHook("cmty_home_shelf_exp_v2__org");
  let i = e ? _getConfig : getConfig;
  return useCallback(() => i().get("enabled", !1), [i]);
}
export const Am = $$I0;
export const Hz = $$h1;
export const S$ = $$b2;
export const U6 = $$g3;
export const Un = $$S4;
export const aH = $$v5;
export const jg = $$T6;
export const k3 = $$E7;
export const rW = $$y8;
export const wN = $$m9;
export const yo = $$f10;