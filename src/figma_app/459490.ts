import { n as _$$n } from "../905/347702";
import { useSelector } from "../vendor/514228";
import { getFeatureFlags } from "../905/601108";
import { atomStoreManager } from "../figma_app/27355";
import { debugState } from "../905/407919";
import { gP } from "../figma_app/594947";
import { Z } from "../905/296690";
import { sZ } from "../905/845253";
import { zg } from "../figma_app/193867";
import { Me, ol } from "../figma_app/598018";
import { hS, Td } from "../905/595131";
export let $$_2 = _$$n(({
  currentOrg: e,
  currentTeam: t,
  isViewer: r,
  isDisabledForViewers: n = !0
}) => (!!e || !!t) && (!!n && !!r || !(e && $$f1(e)) && !!(e ? e?.ai_features_disabled : t?.ai_features_disabled)));
export function $$h4({
  isDisabledForViewers: e
}) {
  let t = debugState.getState();
  return !!zg(t.selectedView) || !t.user || $$_2({
    currentOrg: atomStoreManager.get(Z),
    currentTeam: atomStoreManager.get(Me),
    isViewer: atomStoreManager.get(hS),
    isDisabledForViewers: e
  });
}
export function $$m3() {
  let e = !$$_2({
    currentOrg: sZ() || null,
    currentTeam: ol(),
    isViewer: Td()
  });
  return !!useSelector(e => zg(e.selectedView) || !e.user) || !e;
}
export function $$g0(e) {
  return gP("ai_org_use_llama").get(e, void 0);
}
export function $$f1(e) {
  if (!e || e.k12_google_org) return !1;
  let t = $$g0(e.id);
  let r = "enabled_for_gated_users" === t && !!getFeatureFlags().ai_user_use_llama;
  return "enabled_for_all_users" === t || r;
}
export const BF = $$g0;
export const dZ = $$f1;
export const lt = $$_2;
export const q8 = $$m3;
export const y8 = $$h4;