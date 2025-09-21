import { useMemo } from 'react'
import { getI18nString } from '../905/303541'
import { getFeatureFlags } from '../905/601108'
import { resourceUtils } from '../905/989992'
import { OrgWorkspaceCount } from '../figma_app/43951'
import { isDevEnvironment, isGovCluster } from '../figma_app/169182'
import { FCostCenterType } from '../figma_app/191312'
import { useSubscription } from '../figma_app/288654'
import { getEmailDomain, isValidEmail } from '../figma_app/416935'
import { useCurrentPlanUser, useCurrentPublicPlan, useIsOrgGuestUser, useIsOrgOrEnterprisePlan } from '../figma_app/465071'
import { throwTypeError } from '../figma_app/465776'
import { ApprovalStatusEnum, AuthTypeEnum, UserTypeEnum } from '../figma_app/736948'

/**
 * Checks if the given email domain exists in the provided domain list.
 * Original: $$m2
 */
export function checkDomainExists(domains: { domain: string }[], email: string): boolean {
  const domainList = domains.map(d => d.domain.toLowerCase())
  const emailDomain = getEmailDomain(email)
  return domainList.length !== 0 && !!emailDomain && domainList.includes(emailDomain)
}

/**
 * Determines the authentication type based on SSO flags.
 * Original: $$g10
 */
export function getAuthType(org: { saml_sso_only?: boolean, google_sso_only?: boolean }): AuthTypeEnum {
  if (org.saml_sso_only)
    return AuthTypeEnum.SAML
  if (org.google_sso_only)
    return AuthTypeEnum.GOOGLE
  return AuthTypeEnum.ANY
}

/**
 * Checks if SCIM token exists in config.
 * Original: $$f12
 */
export function hasScimToken(org: { config?: { has_scim_token?: boolean } }): boolean | undefined {
  return org.config?.has_scim_token
}

/**
 * Checks if the object has a valid id.
 * Original: $$E6
 */
export function hasValidId(obj: { id?: unknown }): boolean {
  return obj?.id !== void 0
}

/**
 * Validates if the email is not in the domain list and is a valid email.
 * Original: $$y14
 */
export function isEmailAllowed(domainsObj: { domains: { domain: string }[] }, user: { email?: string } | string): boolean {
  const email = hasValidId(user as { id?: unknown }) ? (user as { email?: string }).email : user as string
  return !!email && isValidEmail(email) && domainsObj.domains.length > 0 && !checkDomainExists(domainsObj.domains, email)
}

/**
 * Checks if template picker is disabled for the current org.
 * Original: $$b24
 */
export function isTemplatePickerDisabled(state: { currentUserOrgId?: string, orgById: Record<string, { template_picker_disabled?: boolean }> }): boolean {
  return !!state.currentUserOrgId && !!state.orgById[state.currentUserOrgId]?.template_picker_disabled
}

/**
 * Gets the current user's org object.
 * Original: $$T23
 */
export function getCurrentUserOrg(state: { currentUserOrgId?: string, orgById: Record<string, unknown> }): unknown | null {
  return state.currentUserOrgId ? state.orgById[state.currentUserOrgId] : null
}

/**
 * Checks if account is locked during org operation.
 * Original: $$I16
 */
export function isAccountLockedDuringOrgOperation(state: { isAccountLockedDuringOrgOperation?: boolean }): boolean | undefined {
  return state.isAccountLockedDuringOrgOperation
}

/**
 * Returns i18n string for guest control approval status.
 * Original: $$S8
 */
export function getGuestControlApprovalStatus(status: ApprovalStatusEnum | null): string {
  switch (status) {
    case null:
      return getI18nString('org_settings.guest_control.null')
    case ApprovalStatusEnum.REQUIRE_APPROVAL:
      return getI18nString('org_settings.guest_control.require_approval')
    case ApprovalStatusEnum.BANNED:
      return getI18nString('org_settings.guest_control.banned')
    default:
      throwTypeError(status)
  }
}

/**
 * Returns i18n string for MFA guest control setting.
 * Original: $$v20
 */
export function getMfaGuestControlSetting(userType: UserTypeEnum): string {
  if (userType === UserTypeEnum.GUESTS || userType === UserTypeEnum.ALL_USERS) {
    return getI18nString('org_settings.guest_control.mfa_for_guests_setting_required')
  }
  return getI18nString('org_settings.guest_control.mfa_for_guests_setting_null')
}

/**
 * Returns i18n string for cost center type.
 * Original: $$A13
 */
export function getCostCenterTypeString(type: FCostCenterType): string {
  switch (type) {
    case FCostCenterType.COST_CENTER:
      return getI18nString('scim_metadata_display_text.cost_center')
    case FCostCenterType.ORGANIZATION:
      return getI18nString('scim_metadata_display_text.organization')
    case FCostCenterType.DIVISION:
      return getI18nString('scim_metadata_display_text.division')
    case FCostCenterType.DEPARTMENT:
      return getI18nString('scim_metadata_display_text.department')
    default:
      throwTypeError(type)
  }
}

/**
 * Checks if bigma and security add-on are enabled.
 * Original: $$x11
 */
export function isBigmaAndSecurityEnabled(org: { bigma_enabled?: boolean, security_add_on_enabled_at?: unknown, ip_ranges?: unknown[] }) {
  return !!org?.bigma_enabled && (org.security_add_on_enabled_at || (org.ip_ranges && org.ip_ranges.length > 0)) as boolean
}

/**
 * Checks if bigma and security add-on are enabled.
 * Original: $$N22
 */
export function isBigmaSecurityAddOnEnabled(org: { bigma_enabled?: boolean, security_add_on_enabled_at?: unknown }): boolean {
  return isBigmaEnabled(org) && !!org.security_add_on_enabled_at
}

/**
 * Checks if all domains are verified.
 * Original: $$C21
 */
export function areAllDomainsVerified(org: { all_domains_verified?: boolean }): boolean {
  return !!org.all_domains_verified
}

/**
 * Checks if bigma is enabled.
 * Original: $$w9
 */
export function isBigmaEnabled(org: { bigma_enabled?: boolean }): boolean {
  return !!(org && org.bigma_enabled)
}

/**
 * Checks if domain capture and bigma are enabled.
 * Original: $$O17
 */
export function isDomainCaptureAndBigmaEnabled(org: { domain_capture?: boolean, bigma_enabled?: boolean }): boolean {
  return !!org?.domain_capture && isBigmaEnabled(org)
}

/**
 * Checks if bigma and security add-on are enabled.
 * Original: $$R4
 */
export function isBigmaAndSecurityAddOnEnabled(org: { bigma_enabled?: boolean, security_add_on_enabled_at?: unknown }): boolean {
  return !!(org?.bigma_enabled && org?.security_add_on_enabled_at)
}

/**
 * Returns whether enterprise org directory is enabled.
 * Original: $$L3
 */
export function useEnterpriseOrgDirectoryEnabled(orgId: string): boolean {
  const publicPlan = useCurrentPublicPlan('useEnterpriseOrgDirectoryEnabled')
  const planUser = useCurrentPlanUser('useEnterpriseOrgDirectoryEnabled')
  const isOrgOrEnterprise = useIsOrgOrEnterprisePlan(publicPlan)
  const isOrgGuest = useIsOrgGuestUser(planUser)
  const subscription = useSubscription(OrgWorkspaceCount({ orgId }))
  return useMemo(
    () => resourceUtils.transformAll([isOrgOrEnterprise, isOrgGuest, subscription], (orgPlan, guest, sub) => !!orgPlan && !guest && !!sub.org?.workspaceCount.data),
    [isOrgOrEnterprise, isOrgGuest, subscription],
  )
}

const figmaFileRegExp = /[htps?:/]?[a-z.]*figma[\-.\da-z:]*\/files\/(\d+)/

/**
 * Checks if string matches figma file regexp.
 * Original: $$D18
 */
export function isFigmaFileUrl(url: string): boolean {
  return figmaFileRegExp.test(url)
}

/**
 * Extracts file id from figma file url.
 * Original: $$k19
 */
export function extractFigmaFileId(url: string): string | null {
  const match = url.match(figmaFileRegExp)
  return match ? match[1] : null
}

/**
 * Alias for isBigmaEnabled.
 * Original: $$M1
 */
export function isBigmaEnabledAlias(org: { bigma_enabled?: boolean }): boolean {
  return isBigmaEnabled(org)
}

/**
 * Checks if gov cluster or dev environment with gov magic links is enabled.
 * Original: $$F0
 */
export function isGovOrDevWithMagicLinks(): boolean {
  return !!isGovCluster() || (!!isDevEnvironment() && !!getFeatureFlags().fig_gov_magic_links)
}

/**
 * Checks if bigma is enabled.
 * Original: $$j15
 */
export function isBigmaEnabledSimple(org: { bigma_enabled?: boolean }): boolean {
  return !!org?.bigma_enabled
}

/**
 * Alias for isBigmaEnabledSimple.
 * Original: $$U7
 */
export function isBigmaEnabledAlias2(org: { bigma_enabled?: boolean }): boolean {
  return isBigmaEnabledSimple(org)
}

/**
 * Alias for isBigmaEnabledSimple.
 * Original: $$B5
 */
export function isBigmaEnabledAlias3(org: { bigma_enabled?: boolean }): boolean {
  return isBigmaEnabledSimple(org)
}

// Export original variable names mapped to new function names
export const Aj = isGovOrDevWithMagicLinks
export const G7 = isBigmaEnabledAlias
export const H_ = checkDomainExists
export const LM = useEnterpriseOrgDirectoryEnabled
export const OW = isBigmaAndSecurityAddOnEnabled
export const Oe = isBigmaEnabledAlias3
export const Ts = hasValidId
export const U5 = isBigmaEnabledAlias2
export const W3 = getGuestControlApprovalStatus
export const ZY = isBigmaEnabled
export const _g = getAuthType
export const ag = isBigmaAndSecurityEnabled
export const cg = hasScimToken
export const du = getCostCenterTypeString
export const eE = isEmailAllowed
export const kA = isBigmaEnabledSimple
export const kY = isAccountLockedDuringOrgOperation
export const mU = isDomainCaptureAndBigmaEnabled
export const mg = isFigmaFileUrl
export const nX = extractFigmaFileId
export const nn = getMfaGuestControlSetting
export const oB = areAllDomainsVerified
export const s = isBigmaSecurityAddOnEnabled
export const wA = getCurrentUserOrg
export const yK = isTemplatePickerDisabled
