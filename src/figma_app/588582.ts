import { getFeatureFlags } from "../905/601108";
import { selectCurrentFile } from "../figma_app/516028";
import { isFigmakeSitesEnabled, useIsSelectedFigmakeFullscreen } from "../figma_app/552876";
export function $$s3() {
  return isFigmakeSitesEnabled() && !!getFeatureFlags().bake_sb;
}
export function $$o2() {
  let e = selectCurrentFile();
  return !!e && !!e.org && !!e.org.supabaseDisabled;
}
export function $$l0() {
  let e = $$s3();
  let t = $$o2();
  let r = useIsSelectedFigmakeFullscreen();
  return e && !t && r;
}
export function $$d1(e) {
  return "supabase_connect" === e || "create_supabase_secret" === e;
}
export const Xu = $$l0;
export const d4 = $$d1;
export const gJ = $$o2;
export const p3 = $$s3;