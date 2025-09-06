import { getI18nString } from "../905/303541";
import { FPlanNameType } from "../figma_app/191312";
export let $$a1 = {
  [FPlanNameType.STARTER]: 0,
  [FPlanNameType.STUDENT]: 0,
  [FPlanNameType.PRO]: 3,
  [FPlanNameType.ORG]: 6,
  [FPlanNameType.ENTERPRISE]: 15
};
export function $$s0(e) {
  return {
    [FPlanNameType.STARTER]: null,
    [FPlanNameType.STUDENT]: null,
    [FPlanNameType.PRO]: getI18nString("resource_connection.admin_ui.professional"),
    [FPlanNameType.ORG]: getI18nString("resource_connection.admin_ui.organization"),
    [FPlanNameType.ENTERPRISE]: getI18nString("resource_connection.admin_ui.enterprise")
  }[e];
}
export const A = $$s0;
export const b = $$a1;