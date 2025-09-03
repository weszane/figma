import { d4 } from "../vendor/514228";
import { resourceUtils } from "../905/989992";
import { IT, mI } from "../figma_app/566371";
import { sZ, dq } from "../905/845253";
import { FUserRoleType, FPlanNameType } from "../figma_app/191312";
import { Nm8 } from "../figma_app/43951";
import { X$ } from "../figma_app/465071";
import { zp } from "../figma_app/740025";
export function $$u0() {
  let e = sZ();
  return d4(t => {
    let r = e && t.orgUsersByOrgId[e.id];
    return r && r[t.user.id]?.permission === FUserRoleType.GUEST;
  });
}
export function $$p1() {
  let e = sZ();
  let t = d4(t => e && t.orgUsersByOrgId[e.id][t.user.id]?.permission);
  return t && t !== FUserRoleType.GUEST;
}
export function $$_4() {
  return d4(e => e.openFile?.parentOrgId && e.orgById[e.openFile.parentOrgId] || void 0);
}
export function $$h3() {
  let e = dq();
  let t = X$("useSuspendOrgManagesSeatsViaScim");
  let [r, n] = IT(Nm8({
    orgId: e
  }), {
    enabled: !!e
  });
  let c = mI(t, r);
  let u = resourceUtils.all(c);
  return resourceUtils.useTransform(u, ([e, t]) => e.tier === FPlanNameType.ENTERPRISE && !!t.org?.orgSamlConfigs?.some(e => "loaded" === e.hasSeatManagedViaScim.status && e.hasSeatManagedViaScim.data));
}
export const Cb = $$u0;
export const U5 = $$p1;
export const Yo = zp;
export const i6 = $$h3;
export const yy = $$_4;