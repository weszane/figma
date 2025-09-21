import { createNoOpValidator } from '../figma_app/181241'

/**
 * Types for HubFile API parameters.
 */
export interface GetTemplatesParams {
  type: string
}

export interface GetVersionsParams {
  id: string
}

export interface GetStatusesParams {
  id: string
}

export interface GetProfileParams {
  profileId: string
}

export interface GetLibrariesParams {
  libraryIds: string[]
}

export interface LikeHubFileParams {
  id: string
}

export interface UnlikeHubFileParams {
  id: string
}

export interface PublishHubFileParams {
  // Define properties as needed
  [key: string]: any
}

export interface UpdateHubFileParams {
  // Define properties as needed
  [key: string]: any
}

export interface SetupMultiImageUploadParams {
  // Define properties as needed
  [key: string]: any
}

/**
 * HubFileApi provides methods for interacting with hub file endpoints.
 */
export class HubFileApi {
  public TemplatesSchemaValidator = createNoOpValidator()
  public StartingPointsTemplatesSchemaValidator = createNoOpValidator()
  public StartingPointsTemplatesAndAssetsSchemaValidator = createNoOpValidator()
  public VersionsSchemaValidator = createNoOpValidator()
  public StatusSchemaValidator = createNoOpValidator()
  public ProfileSchemaValidator = createNoOpValidator()
  public LibrariesSchemaValidator = createNoOpValidator()
  public PublishHubFileSchemaValidator = createNoOpValidator()
  public UpdateHubFileSchemeValidator = createNoOpValidator()
  public HubFileMultiImageUploadSchemaValidator = createNoOpValidator()

  /**
   * getTemplates (original: getTemplates)
   */
  public getTemplates = (params: GetTemplatesParams) =>
    this.TemplatesSchemaValidator.validate(async ({ xr }) =>
      await xr.get('/api/hub_files/templates', { type: params.type }),
    )

  /**
   * getStartingPointsTemplates (original: getStartingPointsTemplates)
   */
  public getStartingPointsTemplates = () =>
    this.StartingPointsTemplatesSchemaValidator.validate(async ({ xr }) =>
      await xr.get('/api/hub_files/templates', { type: 'starting_points' }),
    )

  /**
   * getStartingPointsTemplatesAndAssets (original: getStartingPointsTemplatesAndAssets)
   */
  public getStartingPointsTemplatesAndAssets = () =>
    this.StartingPointsTemplatesAndAssetsSchemaValidator.validate(async ({ xr }) =>
      await xr.get('/api/hub_files/starting_points'),
    )

  /**
   * getVersions (original: getVersions)
   */
  public getVersions = (params: GetVersionsParams) =>
    this.VersionsSchemaValidator.validate(async ({ xr }) =>
      await xr.get(`/api/hub_files/${params.id}/versions`),
    )

  /**
   * getStatuses (original: getStatuses)
   */
  public getStatuses = (params: GetStatusesParams) =>
    this.StatusSchemaValidator.validate(async ({ xr }) =>
      await xr.get(`/api/hub_files/${params.id}/status`),
    )

  /**
   * getProfile (original: getProfile)
   */
  public getProfile = <T = any>(params: GetProfileParams) =>
    this.ProfileSchemaValidator.validate<T>(async ({ xr }) =>
      await xr.get(`/api/hub_files/profile/${params.profileId}`),
    )

  /**
   * getLibraries (original: getLibraries)
   */
  public getLibraries = (params: GetLibrariesParams) =>
    this.LibrariesSchemaValidator.validate(async ({ xr }) =>
      await xr.get('/api/hub_files/libraries', {
        library_ids: params.libraryIds.join(','),
      }),
    )

  /**
   * likeHubFile (original: likeHubFile)
   */
  public likeHubFile = (params: LikeHubFileParams) =>
    this.VersionsSchemaValidator.validate(async ({ xr }) =>
      await xr.post(`/api/hub_files/${params.id}/like`),
    )

  /**
   * unlikeHubFile (original: unlikeHubFile)
   */
  public unlikeHubFile = (params: UnlikeHubFileParams) =>
    this.VersionsSchemaValidator.validate(async ({ xr }) =>
      await xr.del(`/api/hub_files/${params.id}/like`),
    )

  /**
   * publishHubFile (original: publishHubFile)
   */
  public publishHubFile = (params: PublishHubFileParams) =>
    this.PublishHubFileSchemaValidator.validate(({ xr }) =>
      xr.post('/api/hub_files', params),
    )

  /**
   * updateHubFile (original: updateHubFile)
   */
  public updateHubFile = (id: string, params: UpdateHubFileParams) =>
    this.UpdateHubFileSchemeValidator.validate(({ xr }) =>
      xr.put(`/api/hub_files/${id}`, params),
    )

  /**
   * setupMultiImageUploadForHubFile (original: setupMultiImageUploadForHubFile)
   */
  public setupMultiImageUploadForHubFile = (params: SetupMultiImageUploadParams) =>
    this.HubFileMultiImageUploadSchemaValidator.validate(({ xr }) =>
      xr.post('/api/hub_files/upload', params),
    )
}

// Export with original variable names for compatibility
export let hubFileAPI = new HubFileApi()
export const H = hubFileAPI
