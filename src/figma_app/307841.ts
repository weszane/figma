import { getFeatureFlags } from "../905/601108";
import { A } from "../905/920142";
import { getInitialOptions } from "../figma_app/169182";
import { q5 } from "../figma_app/516028";
import { T5 } from "../figma_app/465071";
export function $$l1(e) {
  let t = T5("useCampfireModelEnabled").unwrapOr(null);
  let r = q5();
  return !!getFeatureFlags().campfire || (e?.preferOpenFilePlan && r?.plan ? !!r.plan.campfireModelEnabledAt : t ? !!t.campfireModelEnabledAt : !!getInitialOptions().campfire_model_enabled);
}
export function $$d5(e, t) {
  let r = T5("useCampfireEducationEnabled").unwrapOr(null);
  let a = function (e) {
    let t = $$l1();
    let r = !!getFeatureFlags()[e];
    return !!t && r;
  }("campfire_admin_dash_edu");
  return !!(e && r && r?.campfireModelEnabledAt && a && $$c0({
    date: A(r.campfireModelEnabledAt).add(1, "day").toDate()
  }) && $$u3({
    date: new Date(e)
  }) && (!t || $$u3({
    date: new Date(t)
  })));
}
export function $$c0(e) {
  let t = e?.date ? A(e.date) : A();
  let r = getInitialOptions().analyze_data_flow_v2_until;
  return !!r && A(r).isBefore(t);
}
export function $$u3(e) {
  let t = getInitialOptions().analyze_data_flow_v2_until;
  return !!t && A(e.date).isBefore(A(t));
}
export function $$p4() {
  let e = $$l1();
  return !getFeatureFlags().campfire_cart_kill_switch && !!($$c0() || e || getFeatureFlags().campfire_cart || getFeatureFlags().campfire_cart_early_rollout);
}
export function $$_2() {
  return !!(getFeatureFlags().campfire_cart_banner && !$$c0());
}
export const IP = $$c0;
export const RR = $$l1;
export const UR = $$_2;
export const dl = $$u3;
export const sx = $$p4;
export const y3 = $$d5;