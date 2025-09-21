import { pluginAPIService } from '../905/3209'
import { widgetAPIClient } from '../905/424668'
import { hubFileAPI } from '../905/473998'
import { liveStoreInstance } from '../905/713695'
import { APIParameterUtils, createNoOpValidator } from '../figma_app/181241'
import { getCurrentVersionCreatedAt } from '../figma_app/471982'
import { sortByDate } from '../figma_app/656233'
/**
 * ProfileService - Refactored from $$c0
 * Handles profile-related API calls and schema validation.
 */
export class ProfileService {
  /** Validator for profile schema */
  public ProfileSchemaValidator = createNoOpValidator()
  /** Validator for handle schema */
  public HandleSchemaValidator = createNoOpValidator()
  /** Validator for restricted profiles schema */
  public RestrictedProfilesSchemaValidator = createNoOpValidator()
  /** Validator for handle availability schema */
  public HandleAvailableSchemaValidator = createNoOpValidator()
  /** Validator for editors schema */
  public EditorsSchemaValidator = createNoOpValidator()

  /**
   * Query for public profile resources.
   * Combines hub files, plugins, and widgets, sorted by creation date.
   */
  public profilePublicResourceQuery = liveStoreInstance.Query({
    /**
     * Fetches profile resources from hubFileAPI, pluginAPIService, and widgetAPIClient.
     * @param e - Object containing profileId
     */
    fetch: async (e: { profileId: string }) => {
      const { profileId } = e
      const [hubFilesRes, pluginsRes, widgetsRes] = await Promise.all([
        hubFileAPI.getProfile({ profileId }),
        pluginAPIService.getProfile({ profileId, currentOrgId: undefined }),
        widgetAPIClient.getProfile({ profileId, currentOrgId: undefined }),
      ])
      return {
        hubFiles: hubFilesRes.data.meta,
        pluginsAndWidgets: [...pluginsRes.data.meta, ...widgetsRes.data.meta],
      }
    },
    /**
     * Sorts all resources by their creation date.
     * @param e - Object containing data with hubFiles and pluginsAndWidgets
     */
    output: (e: { data: { hubFiles: any[], pluginsAndWidgets: any[] } }) =>
      sortByDate(
        [...e.data.hubFiles, ...e.data.pluginsAndWidgets],
        item => getCurrentVersionCreatedAt(item),
      ),
  })

  /**
   * Fetches profile information.
   * @param e - Object containing profileId
   */
  public async getProfile(e: { profileId: string }) {
    // getProfile
    return this.ProfileSchemaValidator.validate(async ({ xr: t }) =>
      await t.get(`/api/profile/${e.profileId}`),
    )
  }

  /**
   * Fetches handle information.
   * @param e - Object containing handle and currentOrgId
   */
  public async getHandle(e: { handle: string, currentOrgId?: string }) {
    // getHandle
    return this.HandleSchemaValidator.validate(async ({ xr: t }) =>
      await t.get(
        `/api/profile/handle/${e.handle}`,
        APIParameterUtils.toAPIParameters({ currentOrgId: e.currentOrgId }),
      ),
    )
  }

  /**
   * Fetches restricted profiles for a given profileId.
   * @param e - Object containing profileId
   */
  public async getRestrictedProfiles(e: { profileId: string }) {
    // getRestrictedProfiles
    return this.RestrictedProfilesSchemaValidator.validate(async ({ xr: t }) =>
      await t.get(`/api/profile/${e.profileId}/restricted_profiles`),
    )
  }

  /**
   * Checks if a handle is available.
   * @param e - Object containing profileHandle
   */
  public async getHandleAvailable(e: { profileHandle: string }) {
    // getHandleAvailable
    return this.HandleAvailableSchemaValidator.validate(async ({ xr: t }) =>
      await t.get(`/api/profile/handle/${e.profileHandle}/available`),
    )
  }

  /**
   * Fetches editors for a given fileKey.
   * @param e - Object containing fileKey
   */
  public async getEditors(e: { fileKey: string }) {
    // getEditors
    return this.EditorsSchemaValidator.validate(async ({ xr: t }) =>
      await t.get(`/api/profile/editors/${e.fileKey}`),
    )
  }
}

// Export with original variable names for compatibility
export const profileServiceAPI = new ProfileService()
export const s = profileServiceAPI
