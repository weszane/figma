import { z } from 'zod'
import { OrgInviteSchema } from '../905/125157'
import { Ip } from '../905/239603'
import { TeamBasicSchema, TeamUserWithDetailsSchema } from '../905/242077'
import { idpUserSchema } from '../905/697164'
import { liveStoreInstance } from '../905/713695'
import { sendWithRetry } from '../905/910117'
import { AccountTypeEnum, OrganizationUserSchema, OrganizationUserSchemaAlias } from '../figma_app/35887'
import { APIParameterUtils, createMetaValidator, createNoOpValidator, defaultValidator } from '../figma_app/181241'
import { pd } from '../figma_app/327564'

// Original schemas refactored with meaningful names and types
const OrgUserBasicSchema = OrganizationUserSchema.pick({
  id: true,
  user: true,
  type: true,
})
const UserUnionSchema = z.discriminatedUnion('type', [OrganizationUserSchemaAlias, idpUserSchema, OrgInviteSchema])
const OrgUsersPaginatedSchema = z.object({
  users: z.array(z.union([UserUnionSchema, OrgUserBasicSchema])).optional(),
  cursor: Ip.ignore(),
  totalUserCount: z.number(),
})

/**
 * Class handling organization-related API operations with schema validation.
 */
class OrganizationAPI {
  IdpUsersSchemaValidator = createNoOpValidator()
  LicenseGroupsSchemaValidator = createNoOpValidator()
  BillingDataSchemaValidator = createMetaValidator('BillingDataSchemaValidator', pd.nullable(), null)
  UpdateOrgSchemaValidator = createNoOpValidator()
  TeamsSchemaValidator = createNoOpValidator()
  TeamSchemaValidator = createNoOpValidator()
  EligibleUpgradesFigjamSchemaValidator = createNoOpValidator()
  OrgNameSchemaValidator = createNoOpValidator()
  DomainsSchemaValidator = createNoOpValidator()
  AdminsSchemaValidator = createMetaValidator('AdminsSchemaValidator', (e: any) => e.array(OrganizationUserSchemaAlias), null, false)
  OrgUsersPaginatedSchemaValidator = createMetaValidator('OrgUsersPaginatedSchemaValidator', OrgUsersPaginatedSchema, null, false)
  OrgUsersPaginatedSchemaValidatorPassthrough = createNoOpValidator()
  UserSchemaValidator = createMetaValidator('UserSchemaValidator', OrganizationUserSchemaAlias, null, false)
  OauthConnectionsSchemaValidator = createNoOpValidator()
  ShowVatGstSchemaValidator = createNoOpValidator()
  LicenseGroupsMembersCountsSchemaValidator = createNoOpValidator()
  WorkspaceTeamsCountsSchemaValidator = createNoOpValidator()
  OrgUsersCountSchemaValidator = createNoOpValidator()
  OrgUsersFilterCountsSchemaValidator = createNoOpValidator()
  OrgTeamsFilterCountsSchemaValidator = createNoOpValidator()
  OrgAdminsSchemaValidator = createNoOpValidator()

  OrgTeamsCountSchemaValidator = createNoOpValidator()
  SetDomainCaptureSchemaValidator = createNoOpValidator()
  EligibleUpgradesSchemaValidator = createMetaValidator('EligibleUpgradesSchemaValidator', (e: any) => e.object({
    eligible_teams: e.array(TeamBasicSchema),
    eligible_team_users: e.array(TeamUserWithDetailsSchema),
  }), null, false)
  OrgAdminsQuery: any
  
  constructor() {
    this.OrgAdminsQuery = liveStoreInstance.Query({
      fetch: async ({ orgId: e }: { orgId: string }) => (await this.getOrgAdmins({ orgId: e })).data.meta,
    })
  }

  /**
   * Fetches IDP users for the organization.
   * @param e - Parameters including orgId.
   */
  getIdpUsers(e: { orgId: string }) {
    return this.IdpUsersSchemaValidator.validate(async ({ xr: t }: any) => await t.get(`/api/orgs/${e.orgId}/idp_users`))
  }

  /**
   * Fetches license groups for the organization.
   * @param e - Parameters including currentOrgId.
   */
  getLicenseGroups(e: { currentOrgId: string }) {
    return this.LicenseGroupsSchemaValidator.validate(async ({ xr: t }: any) => await t.get(`/api/orgs/${e.currentOrgId}/license_groups`))
  }

  /**
   * Fetches billing data for the organization.
   * @param e - Parameters including orgId.
   */
  getBillingData(e: { orgId: string }) {
    return this.BillingDataSchemaValidator.validate(async ({ xr: t }: any) => {
      const r = await t.get(`/api/orgs/${e.orgId}/billing_data`)
      return r.data.meta ? r : { ...r, data: { ...r.data, meta: null } }
    })
  }

  /**
   * Updates the organization's payment method.
   * @param e - Parameters including orgId and paymentMethod.
   */
  updateOrgPaymentMethod(e: { orgId: string, paymentMethod: any }) {
    return this.BillingDataSchemaValidator.validate(async ({ xr: t }: any) => {
      const r = await t.put(`/api/orgs/${e.orgId}/billing_data`, e.paymentMethod)
      return r.data.meta ? r : { ...r, data: { ...r.data, meta: null } }
    })
  }

  /**
   * Changes the shipping address for the organization.
   * @param e - Parameters including orgId and shippingAddress.
   */
  changeShippingAddress(e: { orgId: string, shippingAddress: any }) {
    return sendWithRetry.put(`/api/orgs/${e.orgId}`, { shipping_address: e.shippingAddress })
  }

  /**
   * Updates renewal counts for the organization.
   * @param e - Parameters including orgId and unassignedSeatCounts.
   */
  updateOrgRenewalCounts(e: { orgId: string, unassignedSeatCounts: any }) {
    return this.UpdateOrgSchemaValidator.validate(async ({ xr: t }: any) => await t.put(`/api/orgs/${e.orgId}/renewal_counts`, { renewal_seats: e.unassignedSeatCounts }))
  }

  /**
   * Fetches teams for the organization.
   * @param e - Parameters including orgId and other filters.
   */
  getTeams(e: { orgId: string, [key: string]: any }) {
    return this.TeamsSchemaValidator.validate(async ({ xr: t }: any) => {
      const { orgId, ...n } = e
      return await t.get(`/api/orgs/${e.orgId}/teams`, APIParameterUtils.toAPIParameters(n))
    })
  }

  /**
   * Fetches a specific team for the organization.
   * @param e - Parameters including orgId and teamId.
   */
  getTeam(e: { orgId: string, teamId: string }) {
    return this.TeamSchemaValidator.validate(async ({ xr: t }: any) => await t.get(`/api/orgs/${e.orgId}/teams/${e.teamId}`))
  }

  /**
   * Fetches eligible upgrades for Figjam.
   */
  getEligibleUpgradesFigjam() {
    return this.EligibleUpgradesFigjamSchemaValidator.validate(async ({ xr: e }: any) => await e.get('/api/orgs/eligible_upgrades_figjam'))
  }

  /**
   * Fetches the organization name.
   * @param e - Parameters including orgId.
   */
  getOrgName(e: { orgId: string }) {
    return this.OrgNameSchemaValidator.validate(async ({ xr: t }: any) => await t.get(`/api/orgs/${e.orgId}/org_name`))
  }

  /**
   * Fetches domains for the organization.
   * @param e - Parameters including currentOrgId.
   */
  getDomains(e: { currentOrgId: string }) {
    return this.DomainsSchemaValidator.validate(async ({ xr: t }: any) => await t.get(`/api/orgs/${e.currentOrgId}/domains`))
  }

  /**
   * Adds domain users to the organization.
   * @param e - Parameters including currentOrgId and userIds.
   */
  addDomainUsers(e: { currentOrgId: string, userIds: any }) {
    return sendWithRetry.post(`/api/orgs/${e.currentOrgId}/add_domain_users`, { user_ids: e.userIds })
  }

  /**
   * Fetches admins for the organization.
   * @param e - Parameters including orgId and includeLicenseAdmins.
   */
  getAdmins(e: { orgId: string, includeLicenseAdmins?: boolean }) {
    return this.AdminsSchemaValidator.validate(async ({ xr: t }: any) => await t.get(`/api/orgs/${e.orgId}/admins`, APIParameterUtils.toAPIParameters({ include_license_admins: e.includeLicenseAdmins })))
  }

  /**
   * Fetches paginated organization users (V2).
   * @param e - Parameters including orgId, after, minimalFields, pageSize, sort, filter, and others.
   */
  getOrgUsersPaginatedV2(e: { orgId: string, after?: any, minimalFields?: boolean, pageSize?: number, sort?: any, filter?: any, [key: string]: any }) {
    const { orgId, after, minimalFields, pageSize, sort, filter, ...l } = e
    return this.OrgUsersPaginatedSchemaValidatorPassthrough.validate(async ({ xr: e }: any) => await e.get(`/api/v2/orgs/${orgId}/org_users`, APIParameterUtils.toAPIParameters({
      ...l,
      ...(filter || {}),
      ...(sort || {}),
      minimalFields: minimalFields || undefined,
      pageSize: pageSize || undefined,
      after: after ? JSON.stringify(after) : undefined,
    })))
  }

  /**
   * Fetches a specific user for the organization.
   * @param e - Parameters including orgId and userId.
   */
  getUser(e: { orgId: string, userId: string }) {
    return this.UserSchemaValidator.validate(async ({ xr: t }: any) => await t.get(`/api/orgs/${e.orgId}/user/${e.userId}`))
  }

  /**
   * Fetches OAuth connections for the organization.
   * @param e - Parameters including orgId.
   */
  getOauthConnections(e: { orgId: string }) {
    return this.OauthConnectionsSchemaValidator.validate(async ({ xr: t }: any) => await t.get(`/api/orgs/${e.orgId}/oauth_connections`))
  }

  /**
   * Fetches VAT/GST show status for the organization.
   * @param e - Parameters including orgId.
   */
  getShowVatGst(e: { orgId: string }) {
    return this.ShowVatGstSchemaValidator.validate(async ({ xr: t }: any) => await t.get(`/api/orgs/${e.orgId}/show_vat_gst`))
  }

  /**
   * Fetches license groups members counts for the organization.
   * @param e - Parameters including orgId.
   */
  getLicenseGroupsMembersCounts(e: { orgId: string }) {
    return this.LicenseGroupsMembersCountsSchemaValidator.validate(async ({ xr: t }: any) => await t.get(`/api/orgs/${e.orgId}/license_groups/members/counts`))
  }

  /**
   * Fetches workspace teams counts for the organization.
   * @param e - Parameters including orgId.
   */
  getWorkspaceTeamsCounts(e: { orgId: string }) {
    return this.WorkspaceTeamsCountsSchemaValidator.validate(async ({ xr: t }: any) => await t.get(`/api/orgs/${e.orgId}/workspaces/teams/counts`))
  }

  /**
   * Fetches organization users count.
   * @param e - Parameters including orgId.
   */
  getOrgUsersCount(e: { orgId: string }) {
    return this.OrgUsersCountSchemaValidator.validate(async ({ xr: t }: any) => await t.get(`/api/orgs/${e.orgId}/org_users/count`))
  }

  /**
   * Fetches organization users filter counts.
   * @param e - Parameters including orgId, searchQuery, licenseGroupId, workspaceId, permission, seatType.
   */
  getOrgUsersFilterCounts(e: { orgId: string, searchQuery?: string, licenseGroupId?: string, workspaceId?: string, permission?: string, seatType?: string }) {
    if (e.searchQuery === '')
      delete e.searchQuery
    return this.OrgUsersFilterCountsSchemaValidator.validate(async ({ xr: t }: any) => await t.get(`/api/orgs/${e.orgId}/org_users/filter_counts`, APIParameterUtils.toAPIParameters({
      searchQuery: e.searchQuery,
      licenseGroupId: e.licenseGroupId,
      workspaceId: e.workspaceId,
      permission: e.permission,
      seatType: e.seatType,
    })))
  }

  /**
   * Fetches organization teams filter counts.
   * @param e - Parameters including orgId, searchQuery, orgAccess, teamsWithoutOwners, teamsMemberOf, workspaceId, sortBy, sortOrder.
   */
  getOrgTeamsFilterCounts(e: { orgId: string, searchQuery?: string, orgAccess?: string, teamsWithoutOwners?: boolean, teamsMemberOf?: any, workspaceId?: string, sortBy?: string, sortOrder?: string }) {
    const { orgId, searchQuery, orgAccess, teamsWithoutOwners, teamsMemberOf, workspaceId, sortBy, sortOrder } = e
    return this.OrgTeamsFilterCountsSchemaValidator.validate(async ({ xr: e }: any) => {
      const d = {
        search_query: searchQuery,
        org_access: orgAccess || undefined,
        teams_without_owners: teamsWithoutOwners ? String(teamsWithoutOwners) : undefined,
        teams_member_of: teamsMemberOf !== undefined ? JSON.stringify(teamsMemberOf) : undefined,
        workspace_id: workspaceId || undefined,
        sort_by: sortBy,
        order_by: sortOrder,
      }
      return await e.get(`/api/orgs/${orgId}/team_counts`, d)
    })
  }

  /**
   * Fetches organization admins.
   * @param e - Parameters including orgId.
   */
  getOrgAdmins(e: { orgId: string }) {
    return this.OrgAdminsSchemaValidator.validate(async ({ xr: t }: any) => await t.get(`/api/orgs/${e.orgId}/org_admins`))
  }

  /**
   * Updates autogen password controls for the organization.
   * @param e - Parameters including orgId and autogen_password_controls.
   */
  apiAutogenControls(e: { orgId: string, autogen_password_controls: any }) {
    const { orgId, autogen_password_controls } = e
    return sendWithRetry.put(`/api/orgs/${orgId}`, { autogen_password_controls })
  }

  /**
   * Deletes workspaces from the organization.
   * @param e - Parameters including orgId and workspaceIds.
   */
  delWorkspaces(e: { orgId: string, workspaceIds: any }) {
    return sendWithRetry.del(`/api/orgs/${e.orgId}/workspaces`, { workspace_ids: e.workspaceIds })
  }

  /**
   * Validates a trial for the organization.
   * @param e - Parameters including orgId and billingTrialId.
   */
  validateTrial(e: { orgId: string, billingTrialId: string }) {
    return sendWithRetry.post(`/api/orgs/${e.orgId}/validate_trial`, { billing_trial_id: e.billingTrialId })
  }

  /**
   * Self-assigns a workspace for the organization.
   * @param e - Parameters including orgId and workspaceId.
   */
  selfAssignWorkspace(e: { orgId: string, workspaceId: string }) {
    return sendWithRetry.post(`/api/orgs/${e.orgId}/self_assign_workspace`, { workspace_id: e.workspaceId })
  }

  /**
   * Posts dev mode opt-in terms accepted for the organization.
   * @param e - Parameters including orgId.
   */
  postDevModeOptInTermsAccepted(e: { orgId: string }) {
    return sendWithRetry.post(`/api/orgs/${e.orgId}/dev_mode_terms_accepted`)
  }

  /**
   * Toggles slides disabled for the organization.
   * @param e - Parameters including orgId and slidesDisabled.
   */
  putToggleSlidesDisabled(e: { orgId: string, slidesDisabled: boolean }) {
    return sendWithRetry.put(`/api/orgs/${e.orgId}/toggle_slides_disabled`, { slides_disabled: e.slidesDisabled })
  }

  /**
   * Toggles sites publishing disabled for the organization.
   * @param e - Parameters including orgId and sitesPublishingDisabled.
   */
  putToggleSitesPublishingDisabled(e: { orgId: string, sitesPublishingDisabled: boolean }) {
    return sendWithRetry.put(`/api/orgs/${e.orgId}/toggle_sites_publishing_disabled`, { sites_publishing_disabled: e.sitesPublishingDisabled })
  }

  /**
   * Toggles Supabase disabled for the organization.
   * @param e - Parameters including orgId and supabaseDisabled.
   */
  putToggleSupabaseDisabled(e: { orgId: string, supabaseDisabled: boolean }) {
    return sendWithRetry.put(`/api/orgs/${e.orgId}/toggle_supabase_disabled`, { supabase_disabled: e.supabaseDisabled })
  }

  /**
   * Updates AI data sharing for the organization.
   * @param e - Parameters including orgId and enabled.
   */
  updateAiDataSharing(e: { orgId: string, enabled: boolean }) {
    return sendWithRetry.put(`/api/orgs/${e.orgId}/ai_data_sharing`, { enabled: e.enabled })
  }

  /**
   * Fetches organization teams count.
   * @param e - Parameters including orgId.
   */
  getOrgTeamsCount(e: { orgId: string }) {
    return this.OrgTeamsCountSchemaValidator.validate(({ xr: t }: any) => t.get(`/api/orgs/${e.orgId}/teams_count`))
  }

  /**
   * Sets domain capture for the organization.
   * @param e - Parameters including org_id.
   */
  setDomainCapture(e: { org_id: string }) {
    return this.SetDomainCaptureSchemaValidator.validate(({ xr: t }: any) => t.put(`/api/orgs/${e.org_id}/domain_capture`, { enable: true }))
  }

  /**
   * Fetches eligible upgrades for the organization.
   */
  getEligibleUpgrades() {
    return this.EligibleUpgradesSchemaValidator.validate(async ({ xr: e }: any) => await e.get('/api/orgs/eligible_upgrade_data'))
  }

  /**
   * Schedules cancellation for the organization.
   * @param e - Parameters including orgId.
   */
  scheduleCancellation(e: { orgId: string }) {
    return defaultValidator.validate(async ({ xr: t }: any) => await t.post(`/api/orgs/${e.orgId}/scheduled_cancellation`))
  }

  /**
   * Unschedules cancellation for the organization.
   * @param e - Parameters including orgId.
   */
  unscheduleCancellation(e: { orgId: string }) {
    return defaultValidator.validate(async ({ xr: t }: any) => await t.del(`/api/orgs/${e.orgId}/scheduled_cancellation`))
  }
}

export { Wd } from '../figma_app/35887'
export const organizationAPIService = new OrganizationAPI()
export const Eh = organizationAPIService
