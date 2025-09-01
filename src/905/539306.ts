import { O as _$$O } from "../905/833838";
export function $$r0(e, t) {
  return e.plan_type === _$$O.ORG ? {
    userId: t,
    orgId: e.plan_id,
    teamId: null
  } : {
    userId: t,
    orgId: null,
    teamId: e.plan_id
  };
}
export function $$a1(e) {
  let {
    plans,
    currentUserOrgId,
    currentTeamId
  } = e;
  return currentUserOrgId ? plans.find(e => e.plan_type === _$$O.ORG && e.plan_id === currentUserOrgId) : currentTeamId ? plans.find(e => e.plan_type === _$$O.TEAM && e.plan_id === currentTeamId) : void 0;
}
export const O = $$r0;
export const S = $$a1;