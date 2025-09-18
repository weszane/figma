import { getI18nString } from "../905/303541";
import { selectUserFlag } from "../905/940356";
import { Rt } from "../figma_app/979658";
import { SS } from "../figma_app/330088";
export function $$o0(e) {
  let t = getI18nString("whiteboard.inserts.use_cases_brainstorm_together");
  let r = getI18nString("whiteboard.inserts.use_cases_diagram_anything");
  let i = getI18nString("whiteboard.inserts.use_cases_run_a_meeting");
  let s = getI18nString("whiteboard.inserts.use_cases_lead_a_workshop");
  switch (e) {
    case "designer":
      return {
        id: "Whats New design control",
        title: t,
        resourceType: Rt.ALL
      };
    case "developer":
      return {
        id: "Whats New software-development control",
        title: r,
        resourceType: Rt.ALL
      };
    case "product-manager":
      return {
        id: "Whats New product-management control",
        title: i,
        resourceType: Rt.ALL
      };
    case "marketer":
      return {
        id: "Whats New marketing control",
        title: s,
        resourceType: Rt.ALL
      };
    case "researcher":
      return {
        id: "Whats New user-research control",
        title: s,
        resourceType: Rt.ALL
      };
    default:
      return {
        id: "Whats New other control",
        title: r,
        resourceType: Rt.ALL
      };
  }
}
export function $$l1() {
  let e = selectUserFlag("interacted_figjam_whats_new_v2_cta");
  return SS(e);
}
export const j = $$o0;
export const x = $$l1;