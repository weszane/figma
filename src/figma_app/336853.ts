import { useMemo } from 'react';
import { getI18nString } from '../905/303541';
import { getFeatureFlags } from '../905/601108';
import { OrgWorkspaceCount } from '../figma_app/43951';
import { Qw } from '../figma_app/47866';
import { isDevEnvironment, isGovCluster } from '../figma_app/169182';
import { FCostCenterType } from '../figma_app/191312';
import { useSubscription } from '../figma_app/288654';
import { isValidEmail, getEmailDomain } from '../figma_app/416935';
import { useCurrentPlanUser, useCurrentPublicPlan, useIsOrgGuestUser, useIsOrgOrEnterprisePlan } from '../figma_app/465071';
import { throwTypeError } from '../figma_app/465776';
import { Ct, CT, Gv } from '../figma_app/736948';
export function $$m2(e, t) {
  let r = e.map(e => e.domain.toLowerCase());
  let n = getEmailDomain(t);
  return r.length !== 0 && !!n && r.includes(n);
}
export function $$g10(e) {
  return e.saml_sso_only ? Ct.SAML : e.google_sso_only ? Ct.GOOGLE : Ct.ANY;
}
export function $$f12(e) {
  return e.config?.has_scim_token;
}
export function $$E6(e) {
  return e?.id !== void 0;
}
export function $$y14(e, t) {
  let r = $$E6(t) ? t.email : t;
  return !!r && isValidEmail(r) && e.domains.length > 0 && !$$m2(e.domains, r);
}
export function $$b24(e) {
  return !!e.currentUserOrgId && !!e.orgById[e.currentUserOrgId]?.template_picker_disabled;
}
export function $$T23(e) {
  return e.currentUserOrgId ? e.orgById[e.currentUserOrgId] : null;
}
export function $$I16(e) {
  return e.isAccountLockedDuringOrgOperation;
}
export function $$S8(e) {
  switch (e) {
    case null:
      return getI18nString('org_settings.guest_control.null');
    case Gv.REQUIRE_APPROVAL:
      return getI18nString('org_settings.guest_control.require_approval');
    case Gv.BANNED:
      return getI18nString('org_settings.guest_control.banned');
    default:
      throwTypeError(e);
  }
}
export function $$v20(e) {
  return e === CT.GUESTS || e === CT.ALL_USERS ? getI18nString('org_settings.guest_control.mfa_for_guests_setting_required') : getI18nString('org_settings.guest_control.mfa_for_guests_setting_null');
}
export function $$A13(e) {
  switch (e) {
    case FCostCenterType.COST_CENTER:
      return getI18nString('scim_metadata_display_text.cost_center');
    case FCostCenterType.ORGANIZATION:
      return getI18nString('scim_metadata_display_text.organization');
    case FCostCenterType.DIVISION:
      return getI18nString('scim_metadata_display_text.division');
    case FCostCenterType.DEPARTMENT:
      return getI18nString('scim_metadata_display_text.department');
    default:
      throwTypeError(e);
  }
}
export function $$x11(e) {
  return !!e?.bigma_enabled && (e.security_add_on_enabled_at || e.ip_ranges.length > 0);
}
export function $$N22(e) {
  return $$j15(e) && !!e.security_add_on_enabled_at;
}
export function $$C21(e) {
  return !!e.all_domains_verified;
}
export function $$w9(e) {
  return !!(e && e.bigma_enabled);
}
export function $$O17(e) {
  return !!e?.domain_capture && $$w9(e);
}
export function $$R4(e) {
  return !!(e?.bigma_enabled && e?.security_add_on_enabled_at);
}
export function $$L3(e) {
  let t = useCurrentPublicPlan('useEnterpriseOrgDirectoryEnabled');
  let r = useCurrentPlanUser('useEnterpriseOrgDirectoryEnabled');
  let i = useIsOrgOrEnterprisePlan(t);
  let a = useIsOrgGuestUser(r);
  let s = useSubscription(OrgWorkspaceCount({
    orgId: e
  }));
  return useMemo(() => Qw.transformAll([i, a, s], (e, t, r) => !!e && !t && !!r.org?.workspaceCount.data), [i, a, s]);
}
let P = new RegExp(/[htps?:/]?[a-z.]*figma[\-.\da-z:]*\/files\/(\d+)/);
export function $$D18(e) {
  return P.test(e);
}
export function $$k19(e) {
  let t = e.match(P);
  return t ? t[1] : null;
}
export function $$M1(e) {
  return $$j15(e);
}
export function $$F0() {
  return !!isGovCluster() || !!isDevEnvironment() && !!getFeatureFlags().fig_gov_magic_links;
}
export function $$j15(e) {
  return !!e?.bigma_enabled;
}
export function $$U7(e) {
  return $$j15(e);
}
export function $$B5(e) {
  return $$j15(e);
}
export const Aj = $$F0;
export const G7 = $$M1;
export const H_ = $$m2;
export const LM = $$L3;
export const OW = $$R4;
export const Oe = $$B5;
export const Ts = $$E6;
export const U5 = $$U7;
export const W3 = $$S8;
export const ZY = $$w9;
export const _g = $$g10;
export const ag = $$x11;
export const cg = $$f12;
export const du = $$A13;
export const eE = $$y14;
export const kA = $$j15;
export const kY = $$I16;
export const mU = $$O17;
export const mg = $$D18;
export const nX = $$k19;
export const nn = $$v20;
export const oB = $$C21;
export const s = $$N22;
export const wA = $$T23;
export const yK = $$b24;