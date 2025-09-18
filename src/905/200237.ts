import { orgsSetOrgId } from "../905/395917";
import { setLastVisitedId } from "../905/93909";
export let $$a0 = "external-teams";
export function $$s1(e = null, t) {
  return setLastVisitedId.matches(t) ? t.payload.planId : orgsSetOrgId.matches(t) && null === e ? t.payload.orgId : e;
}
export const P = $$a0;
export const j = $$s1;