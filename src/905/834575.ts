import { AccessLevelEnum } from '../905/557142'
import { XHR } from '../905/910117'
import { createNoOpValidator } from '../figma_app/181241'
import { isAddressEmpty } from '../figma_app/831101'

type Validates = ReturnType<typeof createNoOpValidator>
/**
 * TeamAPIClient - Refactored from original $$o0 class.
 * Handles team-related API operations with schema validation.
 */
export class TeamAPIClient {
  private MembersSchemaValidator: Validates
  private TeamUsersSchemaValidator: Validates
  private TeamSchemaValidator: Validates
  private DeletedSchemaValidator: Validates
  private TeamNameSchemaValidator: Validates
  private SubscriptionStatusSchemaValidator: Validates
  private UsersLastActiveSchemaValidator: Validates
  private FoldersSchemaValidator: Validates
  private TeamAdminsSchemaValidator: Validates
  private TeamDeletionFileCountSchemaValidator: Validates
  private HasPublishedSiteSchemaValidator: Validates
  private TeamUserInvariantBackfillStatsSchemaValidator: Validates
  private TeamRoleRequestSchemaValidator: Validates
  private showDanglingTeamUserBackfillBannerSchemaValidator: Validates

  constructor() {
    this.MembersSchemaValidator = createNoOpValidator()
    this.TeamUsersSchemaValidator = createNoOpValidator()
    this.TeamSchemaValidator = createNoOpValidator()
    this.DeletedSchemaValidator = createNoOpValidator()
    this.TeamNameSchemaValidator = createNoOpValidator()
    this.SubscriptionStatusSchemaValidator = createNoOpValidator()
    this.UsersLastActiveSchemaValidator = createNoOpValidator()
    this.FoldersSchemaValidator = createNoOpValidator()
    this.TeamAdminsSchemaValidator = createNoOpValidator()
    this.TeamDeletionFileCountSchemaValidator = createNoOpValidator()
    this.HasPublishedSiteSchemaValidator = createNoOpValidator()
    this.TeamUserInvariantBackfillStatsSchemaValidator = createNoOpValidator()
    this.TeamRoleRequestSchemaValidator = createNoOpValidator()
    this.showDanglingTeamUserBackfillBannerSchemaValidator = createNoOpValidator()
  }

  // Getter methods for team data
  /**
   * getMembers - Original: getMembers
   * Fetches team members.
   */
  getMembers = (e: any) => {
    return this.MembersSchemaValidator.validate(async ({ xr: t }: any) => await t.get(`/api/teams/${e.teamId}/members`))
  }

  /**
   * getTeamUsers - Original: getTeamUsers
   * Fetches team users.
   */
  getTeamUsers = (e: any) => {
    return this.TeamUsersSchemaValidator.validate(async ({ xr: t }: any) => await t.get(`/api/teams/${e.teamId}/team_users`))
  }

  /**
   * getTeam - Original: getTeam
   * Fetches team details.
   */
  getTeam = (e: any) => {
    return this.TeamSchemaValidator.validate(async ({ xr: t }: any) => await t.get(`/api/teams/${e.teamId}`))
  }

  /**
   * getDeleted - Original: getDeleted
   * Fetches deleted team data.
   */
  getDeleted = (e: any) => {
    return this.DeletedSchemaValidator.validate(async ({ xr: t }: any) => await t.get(`/api/teams/deleted/${e.teamId}`))
  }

  /**
   * getTeamName - Original: getTeamName
   * Fetches team name.
   */
  getTeamName = (e: any) => {
    return this.TeamNameSchemaValidator.validate(async ({ xr: t }: any) => await t.get(`/api/teams/${e.teamId}/team_name`))
  }

  /**
   * getSubscriptionStatus - Original: getSubscriptionStatus
   * Fetches subscription status.
   */
  getSubscriptionStatus = (e: any) => {
    return this.SubscriptionStatusSchemaValidator.validate(async ({ xr: t }: any) => await t.get(`/api/teams/${e.teamId}/subscription_status`))
  }

  /**
   * getUsersLastActive - Original: getUsersLastActive
   * Fetches user's last active time.
   */
  getUsersLastActive = (e: any) => {
    return this.UsersLastActiveSchemaValidator.validate(async ({ xr: t }: any) => await t.get(`/api/teams/${e.teamId}/users/${e.teamMemberId}/last_active`))
  }

  /**
   * getFolders - Original: getFolders
   * Fetches team folders.
   */
  getFolders = (e: any) => {
    return this.FoldersSchemaValidator.validate(async ({ xr: t }: any) => await t.get(`/api/teams/${e.teamId}/folders`))
  }

  /**
   * getTeamAdmins - Original: getTeamAdmins
   * Fetches team admins.
   */
  getTeamAdmins = (e: any) => {
    return this.TeamAdminsSchemaValidator.validate(async ({ xr: t }: any) => await t.get(`/api/teams/${e.teamId}/team_admins`))
  }

  /**
   * getDeletionFileCount - Original: getDeletionFileCount
   * Fetches deletion file count.
   */
  getDeletionFileCount = (e: any) => {
    return this.TeamDeletionFileCountSchemaValidator.validate(async ({ xr: t }: any) => await t.get(`/api/teams/${e.teamId}/deletion_file_count`))
  }

  /**
   * getHasPublishedSite - Original: getHasPublishedSite
   * Checks if team has published site.
   */
  getHasPublishedSite = (e: any) => {
    return this.HasPublishedSiteSchemaValidator.validate(async ({ xr: t }: any) => await t.get(`/api/teams/${e.teamId}/has_published_site`))
  }

  /**
   * fetchTeamUserInvariantBackfillStats - Original: fetchTeamUserInvariantBackfillStats
   * Fetches backfill stats.
   */
  fetchTeamUserInvariantBackfillStats = (e: any) => {
    return this.TeamUserInvariantBackfillStatsSchemaValidator.validate(async ({ xr: t }: any) => await t.get(`/api/teams/${e.teamId}/num_backfilled_team_user`))
  }

  /**
   * showDanglingTeamUserBackfillBanner - Original: showDanglingTeamUserBackfillBanner
   * Checks if to show backfill banner.
   */
  showDanglingTeamUserBackfillBanner = (e: any) => {
    return this.showDanglingTeamUserBackfillBannerSchemaValidator.validate(async ({ xr: t }: any) => await t.get(`/api/teams/${e.teamId}/show_dangling_team_user_backfill_banner`))
  }

  // Update methods for team data
  /**
   * updateAiFeaturesDisabled - Original: updateAiFeaturesDisabled
   * Updates AI features disabled status.
   */
  updateAiFeaturesDisabled = (e: any) => {
    return this.TeamSchemaValidator.validate(async ({ xr: t }: any) => await t.put(`/api/teams/${e.teamId}`, { ai_features_disabled: e.aiFeaturesDisabled }))
  }

  /**
   * updateTeamName - Original: updateTeamName
   * Updates team name and legal name.
   */
  updateTeamName = (e: any) => {
    return this.TeamSchemaValidator.validate(async ({ xr: t }: any) => await t.put(`/api/teams/${e.teamId}`, { name: e.updatedDisplayName, legal_name: e.updatedLegalName }))
  }

  /**
   * updateDisplayName - Original: updateDisplayName
   * Updates display name.
   */
  updateDisplayName = (e: any) => {
    return this.TeamSchemaValidator.validate(async ({ xr: t }: any) => await t.put(`/api/teams/${e.teamId}`, { name: e.updatedDisplayName }))
  }

  /**
   * updateShippingAddress - Original: updateShippingAddress
   * Updates shipping address and legal name.
   */
  updateShippingAddress = (e: any) => {
    return this.TeamSchemaValidator.validate(async ({ xr: t }: any) => await t.put(`/api/teams/${e.teamId}`, { shipping_address: e.shippingAddress, legal_name: e.updatedLegalName }))
  }

  /**
   * updatePresetsDisabled - Original: updatePresetsDisabled
   * Updates presets disabled status.
   */
  updatePresetsDisabled = (e: any) => {
    return this.TeamSchemaValidator.validate(async ({ xr: t }: any) => await t.put(`/api/teams/${e.teamId}`, { figma_provided_libraries_disabled: e.presetsDisabled }))
  }

  /**
   * updateAiDataSharing - Original: updateAiDataSharing
   * Updates AI data sharing.
   */
  updateAiDataSharing = (e: any) => {
    return XHR.put(`/api/teams/${e.teamId}/ai_data_sharing`, { enabled: e.enabled })
  }

  // Validation methods
  /**
   * validateAddresses - Original: validateAddresses
   * Validates addresses.
   */
  validateAddresses = (e: any) => {
    return this.TeamSchemaValidator.validate(async ({ xr: t }: any) => await t.post('/api/validate_address', {
      billing_address: isAddressEmpty(e.billingAddress) ? null : e.billingAddress,
      shipping_address: isAddressEmpty(e.shippingAddress) ? null : e.shippingAddress,
      team_id: e.teamId,
      is_checkout: e.isCheckout,
    }))
  }

  /**
   * validateCurrency - Original: validateCurrency
   * Validates currency.
   */
  validateCurrency = (e: any) => {
    return this.TeamSchemaValidator.validate(async ({ xr: t }: any) => await t.post('/api/validate_currency', {
      team_id: e.teamId,
      currency: e.currency,
      is_checkout: e.isCheckout,
      billing_address: isAddressEmpty(e.billingAddress) ? null : e.billingAddress,
      shipping_address: isAddressEmpty(e.shippingAddress) ? null : e.shippingAddress,
    }))
  }

  // Request method
  /**
   * requestTeamRole - Original: requestTeamRole
   * Requests team role.
   */
  requestTeamRole = (e: any) => {
    return this.TeamRoleRequestSchemaValidator.validate(async ({ xr: t }: any) => await t.post('/api/team_role_requests', {
      team_id: e.teamId,
      level: AccessLevelEnum.VIEWER,
    }))
  }
}

// Export instance as $ for backward compatibility, refactored from $$o0
export const teamAPIClient = new TeamAPIClient()
export const $ = teamAPIClient
