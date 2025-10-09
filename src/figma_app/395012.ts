import { TeamUserSchema } from "../905/814802"
import { createMetaValidator } from "../figma_app/181241"
// Origin: /Users/allen/sigma-main/src/figma_app/395012.ts
// Refactored: Renamed variables, added TypeScript types/interfaces, improved readability, added comments, simplified logic

// Enum for feature flags or modal identifiers
export enum TeamFeatureKey {
  DevModeBetaSuggestedUpgrades = "dev_mode_beta_suggested_upgrades",
  MembersTab = "members_tab",
  FilePermissionsModal = "file_permissions_modal",
}

// Assumed dependencies:
// - createMetaValidator: function for schema validation (imported)
// - TeamUserSchema: schema for team user objects (imported)

// Class to handle team user operations
class TeamUserService {
  // Validator for updating team users, using TeamUserSchema array
  private updateTeamUsersSchemaValidator = createMetaValidator(
    "UpdateTeamUsersSchemaValidator",
    TeamUserSchema.array(),
    null,
  )

  /**
   * Updates team users by sending a batch request.
   * @param payload - The payload containing team_id and user data.
   * @returns Promise resolving to the API response after validation.
   */
  updateTeamUsers(payload: any) {
    return this.updateTeamUsersSchemaValidator.validate(async ({ xr }) => {
      // Potential performance note: If payload is large, consider chunking requests.
      return await xr.put(`/api/teams/${payload.team_id}/team_user_batch`, payload)
    })
  }
}

// Exported constants with original names for compatibility
export const B = TeamFeatureKey
export const teamUserService = new TeamUserService()
export const H = teamUserService
