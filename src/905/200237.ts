import { _P } from "../905/395917";
import { p4 } from "../905/93909";
export let $$a0 = "external-teams";
export function $$s1(e = null, t) {
  return p4.matches(t) ? t.payload.planId : _P.matches(t) && null === e ? t.payload.orgId : e;
}
export const P = $$a0;
export const j = $$s1;