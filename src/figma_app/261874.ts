import { selectCurrentFile } from "../figma_app/516028";
import { FPlanNameType } from "../figma_app/191312";
export function $$a0() {
  let e = selectCurrentFile();
  let t = e?.planPublicInfo?.tier === FPlanNameType.PRO || e?.planPublicInfo?.tier === FPlanNameType.STUDENT;
  return !!e?.teamId && t || !!e?.parentOrgId;
}
export const J = $$a0;