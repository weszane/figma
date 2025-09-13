import { getFeatureFlags } from "../905/601108";
import { renderI18nText } from "../905/303541";
import { useCurrentUserOrg } from "../905/845253";
import { uG } from "../905/31837";
export function $$o0() {
  let e = useCurrentUserOrg();
  return uG() && e ? renderI18nText("auth.two-factor-setup.mfa_required_org.description", {
    orgName: e.name
  }) : renderI18nText("auth.two-factor-setup.this_will_disable_two_factor_authentication_entirely");
}
export function $$l2() {
  return getFeatureFlags().mfa_for_guests ? renderI18nText("auth.two-factor-setup.disable_2fa.title") : renderI18nText("auth.two-factor-setup.are_you_sure");
}
export function $$d1() {
  return getFeatureFlags().mfa_for_guests ? renderI18nText("auth.two-factor-setup.disable_2fa.cta") : renderI18nText("auth.two-factor-setup.ok");
}
export const B7 = $$o0;
export const Bb = $$d1;
export const zd = $$l2;