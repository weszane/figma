import { getFeatureFlags } from "../905/601108";
import { q5 } from "../figma_app/516028";
import { aI, Oc } from "../figma_app/552876";
export function $$s3() {
  return aI() && !!getFeatureFlags().bake_sb;
}
export function $$o2() {
  let e = q5();
  return !!e && !!e.org && !!e.org.supabaseDisabled;
}
export function $$l0() {
  let e = $$s3();
  let t = $$o2();
  let r = Oc();
  return e && !t && r;
}
export function $$d1(e) {
  return "supabase_connect" === e || "create_supabase_secret" === e;
}
export const Xu = $$l0;
export const d4 = $$d1;
export const gJ = $$o2;
export const p3 = $$s3;