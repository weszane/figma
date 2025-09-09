import { selectCurrentFile } from "../figma_app/516028";
import { FPlanNameType } from "../figma_app/191312";
export function $$o0() {
  let e = selectCurrentFile();
  return e?.plan?.tier === FPlanNameType.STARTER;
}
export function $$l1() {
  let e = $$o0();
  let t = selectCurrentFile();
  return e && !t?.team?.canEdit;
}
export const M = $$o0;
export const n = $$l1;