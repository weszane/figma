import { getFeatureFlags } from "../905/601108";
import { atom, atomStoreManager } from "../figma_app/27355";
import { Z } from "../905/296690";
import { Hu } from "../figma_app/516028";
import { kA } from "../figma_app/336853";
import { w5 } from "../figma_app/345997";
var $$d3 = (e => (e.STARTER = "starter", e.PRO = "pro", e.ORG = "org", e.ENTERPRISE = "enterprise", e))($$d3 || {});
export let $$c2 = 5e3;
function u() {
  return getFeatureFlags().ds_variables_pp_force_enterprise ? "enterprise" : getFeatureFlags().ds_variables_pp_force_org ? "org" : getFeatureFlags().ds_variables_pp_force_pro ? "pro" : getFeatureFlags().ds_variables_pp_force_starter ? "starter" : null;
}
export let $$p5 = atom(e => {
  let t = e(Hu);
  let i = e(Z) ?? null;
  return u() || (kA(i) ? "enterprise" : i ? "org" : w5(t) ? "pro" : "starter");
});
export function $$m0(e) {
  if (getFeatureFlags().ds_100_modes) return 100;
  switch (e) {
    case "starter":
      return 1;
    case "pro":
    case "org":
      return 4;
    case "enterprise":
      return 40;
  }
}
export function $$h4() {
  return $$m0(u() ?? atomStoreManager.get($$p5));
}
export function $$g1() {
  return !!getFeatureFlags().ds_extended_collections && "enterprise" === (u() ?? atomStoreManager.get($$p5));
}
export function $$f6() {
  return "starter" !== ((getFeatureFlags().prototype_multi_path_paywall ? null : "pro") ?? atomStoreManager.get($$p5));
}
export const $A = $$m0;
export const Ot = $$g1;
export const RL = $$c2;
export const V_ = $$d3;
export const f8 = $$h4;
export const fm = $$p5;
export const s6 = $$f6;