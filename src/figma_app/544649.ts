import { Ez5, mNT, w3z } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { ut } from "../figma_app/84367";
export function $$s3() {
  return !!getFeatureFlags().dt_interactive_inspection && !!getFeatureFlags().changes_stager_rollback_to_syncable_value;
}
export function $$o1() {
  let e = Ez5?.changesStagerState();
  return ut(e?.activeStagerType, null) === mNT.DEV_MODE_FOCUS_VIEW;
}
export function $$l2() {
  return (Ez5?.changesStagerState()?.activeStagerType.getCopy() || null) === mNT.DEV_MODE_FOCUS_VIEW;
}
export function $$d0() {
  let e = w3z?.focusViewInteractiveInspectionState();
  return ut(e?.isResizing, !1);
}
export const EG = $$d0;
export const Kv = $$o1;
export const np = $$l2;
export const s4 = $$s3;