import { getI18nString } from "../905/303541";
let $$s1 = ["student", "educator", "developer", "research", "designer", "marketer", "product_manager", "ux_writing", "data_analytics", "something_else"];
let i = new Map([["designer", "designer"], ["design", "designer"], ["developer", "developer"], ["software-development", "developer"], ["cto", "developer"], ["product-manager", "product-manager"], ["product_manager", "product-manager"], ["product-management", "product-manager"], ["project-manager", "product-manager"], ["cpo", "product-manager"], ["marketer", "marketer"], ["marketing", "marketer"], ["cmo", "marketer"], ["user-research", "researcher"], ["research", "researcher"], ["ux-researcher", "researcher"], ["user-researcher", "researcher"], ["user_researcher", "researcher"], ["student", "education"], ["educator", "education"], ["education", "education"], ["student-or-educator", "education"], ["student_or_educator", "education"], ["ux_writing", "ux-writer"], ["data_analytics", "data"], ["other", "other"], ["something_else", "other"]]);
let n = [["developer", "developer"], ["engineer", "developer"], ["sde", "developer"], ["product manager", "product-manager"], ["program manager", "product-manager"], ["project manager", "product-manager"], ["marketer", "marketer"], ["writer", "ux-writer"], ["content designer", "ux-writer"], ["designer", "designer"], ["analyst", "data"], ["researcher", "researcher"], ["product management", "product-manager"], ["software development", "developer"], ["research", "researcher"], ["marketing", "marketer"], ["content", "ux-writer"], ["copy", "ux-writer"], ["data", "data"], ["analytics", "data"], ["design", "designer"], ["tech", "developer"], ["product", "product-manager"]];
export function $$o0(e) {
  if (!e) return "unknown";
  let t = e.toLocaleLowerCase();
  if (i.has(t)) return i.get(t);
  for (let [e, r] of n) if (t.includes(e)) return r;
  return "other";
}
function _(e) {
  switch (e) {
    case "designer":
      return getI18nString("job-title.design");
    case "developer":
      return getI18nString("job-title.software-development");
    case "product-manager":
      return getI18nString("job-title.product-management");
    case "marketer":
      return getI18nString("job-title.marketing");
    case "researcher":
      return getI18nString("job-title.research");
    case "education":
      return getI18nString("job-title.education");
    case "ux-writer":
      return getI18nString("job-title.ux-writing");
    case "data":
      return getI18nString("job-title.data-analytics");
    case "other":
    case "unknown":
      return getI18nString("job-title.other");
  }
}
export function $$l3(e) {
  return _($$o0(e));
}
export function $$u2(e) {
  return "student" === e ? getI18nString("job-title.student") : "educator" === e ? getI18nString("job-title.educator") : _($$o0(e));
}
export const HB = $$o0;
export const VA = $$s1;
export const ZS = $$u2;
export const lb = $$l3;