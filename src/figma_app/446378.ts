import { liveStoreInstance } from "../905/713695"
import { sendWithRetry } from "../905/910117"
import { APIParameterUtils, createNoOpValidator } from "../figma_app/181241"

/**
 * Query for fetching the number of templates by team
 * Original name: $$a0
 */
const teamTemplateCountQuery = liveStoreInstance.Query({
  fetch: async (params: any) => {
    const response:any = await templateService.getNumTemplatesByTeam({
      teamId: params.teamId,
      editorType: params.editorType,
    })
    return response.data.meta.total
  },
})

/**
 * Service class for template-related API operations
 * Original name: $$s1
 */
class TemplateService {
  // Schema validators
  private readonly recentsSchemaValidator = createNoOpValidator()
  private readonly teamBrowseFromSize10SchemaValidator = createNoOpValidator()
  private readonly searchPaginatedSchemaValidator = createNoOpValidator()
  private readonly teamTemplateLimitValidator = createNoOpValidator()
  private readonly teamTemplateCountValidator = createNoOpValidator()
  private readonly uploadTemplateCoverImageValidator = createNoOpValidator()
  private readonly upsertTemplateValidator = createNoOpValidator()

  /**
   * Get recent templates
   * Original name: getRecents
   */
  public getRecents(params: { orgId: string, teamId: string, fileKeys: string[] }) {
    return this.recentsSchemaValidator.validate(async ({ xr: client }) => {
      return await client.get("/api/templates", {
        org_id: params.orgId,
        team_id: params.teamId,
        file_keys: params.fileKeys,
      })
    })
  }

  /**
   * Get paginated team browse results
   * Original name: getTeamBrowsePaginated
   */
  public getTeamBrowsePaginated(params: {
    orgId: string
    teamId: string
    from: number
    size: number
    templateType?: string
  }) {
    return this.teamBrowseFromSize10SchemaValidator.validate(async ({ xr: client }) => {
      return await client.get(
        `/api/templates/${params.orgId}/team/${params.teamId}/browse`,
        APIParameterUtils.toAPIParameters({
          from: params.from,
          size: params.size,
          templateType: params.templateType,
        }),
      )
    })
  }

  /**
   * Get paginated search results
   * Original name: getSearchPaginated
   */
  public getSearchPaginated(params: { orgId: string, [key: string]: any }) {
    const { orgId, ...restParams } = params
    return this.searchPaginatedSchemaValidator.validate(({ xr: client }) => {
      return client.get(
        `/api/templates/${orgId}/search`,
        APIParameterUtils.toAPIParameters(restParams),
      )
    })
  }

  /**
   * Get filtered team templates
   * Original name: getFilteredTeamTemplates
   */
  public getFilteredTeamTemplates(params: { orgId: string, [key: string]: any }) {
    const { orgId, ...restParams } = params
    return sendWithRetry.post(`/api/templates/${orgId}/browse`, restParams)
  }

  /**
   * Check if team template limit is reached
   * Original name: getTeamTemplateLimitReached
   */
  public getTeamTemplateLimitReached(params: { teamId: string, editorType: string }) {
    return this.teamTemplateLimitValidator.validate(({ xr: client }) => {
      return client.get(
        `/api/templates/${params.teamId}/limits`,
        APIParameterUtils.toAPIParameters({
          editorType: params.editorType,
        }),
      )
    })
  }

  /**
   * Get number of templates by team
   * Original name: getNumTemplatesByTeam
   */
  public getNumTemplatesByTeam(params: { teamId: string, editorType: string }) {
    return this.teamTemplateCountValidator.validate(({ xr: client }) => {
      return client.get(
        `/api/templates/${params.teamId}/count`,
        APIParameterUtils.toAPIParameters({
          editorType: params.editorType,
        }),
      )
    })
  }

  /**
   * Upload template cover image
   * Original name: uploadTemplateCoverImage
   */
  public uploadTemplateCoverImage(params: { fileKey: string }) {
    return this.uploadTemplateCoverImageValidator.validate(({ xr: client }) => {
      return client.post(`/api/templates/file/${params.fileKey}/upload`)
    })
  }

  /**
   * Upsert template
   * Original name: upsertTemplate
   */
  public upsertTemplate(params: { fileKey: string, payload: any, params: any }) {
    const { fileKey, payload, params: apiParams } = params
    return this.upsertTemplateValidator.validate(({ xr: client }) => {
      return client.post(
        `/api/templates/file/${fileKey}`,
        payload,
        APIParameterUtils.toAPIParameters({
          params: apiParams,
        }),
      )
    })
  }
}

export const templateService = new TemplateService()

// Export with meaningful names
export const U = teamTemplateCountQuery
export const q = templateService
