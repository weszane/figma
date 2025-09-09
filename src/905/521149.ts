import { useCurrentPrivilegedPlan, useIsOrgOrEnterprisePlan, useIsProOrStudentPlan } from "../figma_app/465071";
export function $$r0() {
  let e = useCurrentPrivilegedPlan("useAllowInternalTemplatesCooper");
  let t = useIsOrgOrEnterprisePlan(e).unwrapOr(!1);
  let i = useIsProOrStudentPlan(e).unwrapOr(!1);
  let r = e.data?.customTemplatesAllowed;
  return t && r || i;
}
export const j = $$r0;