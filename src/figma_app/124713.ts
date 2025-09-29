import { z } from 'zod'
import { OrganizationUserSchemaAlias } from '../figma_app/35887'
import { APIParameterUtils, createMetaValidator, createNoOpValidator, defaultValidator } from '../figma_app/181241'

// Enum for modal types related to organization user operations
export enum devModalTypes {
  DEV_MODE_BETA_SUGGESTED_UPGRADES = 'dev_mode_beta_suggested_upgrades',
  MEMBERS_TAB = 'members_tab',
  FILE_PERMISSIONS_MODAL = 'file_permissions_modal',
}

// Class for handling organization user API operations
class OrgUserService {
  GuestResourcesSchemaValidator = createNoOpValidator()
  OrgUserSchemaValidator = createMetaValidator('OrgUserSchemaValidator', OrganizationUserSchemaAlias, null, false)
  UpdateOrgUsersSchemaValidator = createMetaValidator('UpdateOrgUsersSchemaValidator', z.array(OrganizationUserSchemaAlias), null, false)
  CreateStarterTeamSchemaValidator = createNoOpValidator()
  requestUpgradeSchemaValidator = createNoOpValidator()
  constructor() {
  }

  /**
   * Retrieves guest resources for a given organization user.
   * @param params - Parameters including orgUserId.
   * @returns Validated API response.
   */
  getGuestResources(params: { orgUserId: string }) {
    return this.GuestResourcesSchemaValidator.validate(async ({ xr }: { xr: any }) =>
      await xr.get(`/api/org_user/${params.orgUserId}/guest_resources`),
    )
  }

  /**
   * Updates an organization user with specified changes.
   * @param params - Parameters including id and changes.
   * @returns Validated API response.
   */
  updateOrgUser(params: { id: string, changes: any }) {
    const { id, changes } = params
    return this.OrgUserSchemaValidator.validate(({ xr }: { xr: any }) =>
      xr.put(`/api/org_users/${id}`, APIParameterUtils.toAPIParameters(changes)),
    )
  }

  /**
   * Updates multiple organization users for an organization.
   * @param params - Parameters including orgId and other updates.
   * @returns Validated API response.
   */
  updateOrgUsers(params: { orgId: string, [key: string]: any }) {
    const { orgId, ...rest } = params
    return this.UpdateOrgUsersSchemaValidator.validate(({ xr }: { xr: any }) =>
      xr.put(`/api/orgs/${orgId}/org_users`, APIParameterUtils.toAPIParameters(rest)),
    )
  }

  /**
   * Creates a starter team for the organization user.
   * @returns Validated API response.
   */
  createStarterTeam() {
    return this.CreateStarterTeamSchemaValidator.validate(({ xr }: { xr: any }) =>
      xr.post('/api/org_user/create_starter_team'),
    )
  }

  /**
   * Posts flags for an organization user.
   * @param params - Parameters including orgUserId and flags.
   * @returns Validated API response.
   */
  postOrgUserFlags(params: { orgUserId: string, flags: any }) {
    const { orgUserId, flags } = params
    return defaultValidator.validate(({ xr }: { xr: any }) =>
      xr.post(`/api/org_users/${orgUserId}/flags`, { flags }),
    )
  }

  /**
   * Requests an upgrade for the organization account type.
   * @param params - Parameters for the request.
   * @returns Validated API response.
   */
  requestOrgAccountTypeRequest(params: any) {
    return this.requestUpgradeSchemaValidator.validate(async ({ xr }: { xr: any }) =>
      await xr.post(`/api/orgs/${params.org_id}/org_users/request_upgrade`, params),
    )
  }

  /**
   * Exports members as CSV for an organization.
   * @param params - Parameters including orgId.
   * @returns Validated API response.
   */
  getMemberCSVExport(params: { orgId: string }) {
    return defaultValidator.validate(({ xr }: { xr: any }) =>
      xr.post(`/api/orgs/${params.orgId}/export_members`),
    )
  }
}

// Instantiate the service class
export const orgUserService = new OrgUserService()

// Export the service instance and modal types with meaningful names
export const G = orgUserService
export const h = devModalTypes
