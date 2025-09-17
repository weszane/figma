import { useSelector } from "react-redux";
import { resourceUtils } from "../905/989992";
import { setupResourceAtomHandler, handleSuspenseRetainRelease } from "../figma_app/566371";
import { useCurrentUserOrg, useCurrentUserOrgId } from "../905/845253";
import { FUserRoleType, FPlanNameType } from "../figma_app/191312";
import { OrgHasSeatsManagedViaScimView } from "../figma_app/43951";
import { useCurrentPublicPlan } from "../figma_app/465071";
import { useCurrentOrgAdminInfo } from "../figma_app/740025";
export function $$u0() {
  let e = useCurrentUserOrg();
  return useSelector(t => {
    let r = e && t.orgUsersByOrgId[e.id];
    return r && r[t.user.id]?.permission === FUserRoleType.GUEST;
  });
}
export function $$p1() {
  let e = useCurrentUserOrg();
  let t = useSelector(t => e && t.orgUsersByOrgId[e.id][t.user.id]?.permission);
  return t && t !== FUserRoleType.GUEST;
}
export function $$_4() {
  return useSelector(e => e.openFile?.parentOrgId && e.orgById[e.openFile.parentOrgId] || void 0);
}
export function $$h3() {
  let e = useCurrentUserOrgId();
  let t = useCurrentPublicPlan("useSuspendOrgManagesSeatsViaScim");
  let [r, n] = setupResourceAtomHandler(OrgHasSeatsManagedViaScimView({
    orgId: e
  }), {
    enabled: !!e
  });
  let c = handleSuspenseRetainRelease(t, r);
  let u = resourceUtils.all(c);
  return resourceUtils.useTransform(u, ([e, t]) => e.tier === FPlanNameType.ENTERPRISE && !!t.org?.orgSamlConfigs?.some(e => "loaded" === e.hasSeatManagedViaScim.status && e.hasSeatManagedViaScim.data));
}
export const Cb = $$u0;
export const U5 = $$p1;
export const Yo = useCurrentOrgAdminInfo;
export const i6 = $$h3;
export const yy = $$_4;