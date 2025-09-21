import { getFeatureFlags } from "../905/601108";
import { useCurrentUserOrg } from "../905/845253";
import { selectCurrentUser } from "../905/372672";
import { useCurrentPlanUser, useIsOrgGuestUser } from "../figma_app/465071";
import { UserTypeEnum } from "../figma_app/736948";
export function $$l0() {
  let e = useCurrentUserOrg();
  return e?.mfa_required === UserTypeEnum.GUESTS || e?.mfa_required === UserTypeEnum.ALL_USERS;
}
function d() {
  let e = selectCurrentUser();
  return !!e?.google_sso_only || !!e?.saml_sso_only;
}
export function $$c1() {
  let e = $$l0();
  let t = function () {
    let e = selectCurrentUser();
    return !!e?.two_factor_app_enabled || !!e?.phone_number;
  }();
  let i = d();
  return !!getFeatureFlags().mfa_for_guests && e && !t && !i;
}
export function $$u2() {
  let e = useCurrentPlanUser("useShouldShowMfaDisableWarningForMfaRequiredOrg");
  let t = useIsOrgGuestUser(e).unwrapOr(!1);
  let i = $$l0();
  let r = d();
  return !!getFeatureFlags().mfa_for_guests && t && i && !r;
}
export const Of = $$l0;
export const lW = $$c1;
export const uG = $$u2;