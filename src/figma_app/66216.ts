import { createNoOpValidator } from '../figma_app/181241'

/**
 * Types for request parameters used in RoleService methods.
 */
export interface FileUsersParams {
  fileKey: string
}

export interface TeamParams {
  teamId: string
}

export interface RolesParams {
  resourceType: string
  resourceId: string
}

/**
 * RoleService provides methods to validate and fetch role-related data.
 */
export class RoleService {
  private fileUsersSchemaValidator = createNoOpValidator()
  private teamSchemaValidator = createNoOpValidator()
  private rolesSchemaValidator = createNoOpValidator()

  /**
   * Validates and fetches file users.
   * @param params - FileUsersParams
   */
  // getFileUsers (original name)
  public async getFileUsers(params: FileUsersParams) {
    return this.fileUsersSchemaValidator.validate(async ({ xr: t }) =>
      await t.get(`/api/roles/file_users/${params.fileKey}`),
    )
  }

  /**
   * Validates and fetches team data.
   * @param params - TeamParams
   */
  // getTeam (original name)
  public async getTeam(params: TeamParams) {
    return this.teamSchemaValidator.validate(async ({ xr: t }) =>
      await t.get(`/api/roles/team/${params.teamId}`),
    )
  }

  /**
   * Validates and fetches roles data.
   * @param params - RolesParams
   */
  // getRoles (original name)
  public async getRoles(params: RolesParams) {
    return this.rolesSchemaValidator.validate(async ({ xr: t }) =>
      await t.get(`/api/roles/${params.resourceType}/${params.resourceId}`),
    )
  }
}

/**
 * Exported singleton instance of RoleService.
 */
export const roleServiceAPI = new RoleService()
export const G = roleServiceAPI
