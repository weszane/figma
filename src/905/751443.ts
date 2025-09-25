import { z } from 'zod'
import { PluginDetailsSchema, WidgetDetailsSchema } from '../figma_app/155287'
import { APIParameterUtils, createMetaValidator } from '../figma_app/181241'
import { ignore } from '../figma_app/709165'

export class DefaultContentService {
  private readonly defaultInsertsSchemaValidator: ReturnType<typeof createMetaValidator>
  private readonly defaultCollageItemsSchemaValidator: ReturnType<typeof createMetaValidator>

  constructor() {
    this.defaultInsertsSchemaValidator = createMetaValidator('DefaultInsertsSchemaValidator', z.object({
      plugins: z.array(PluginDetailsSchema),
      widgets: z.array(WidgetDetailsSchema),
      templates: z.array(ignore()),
      components: z.array(ignore()),
      use_cases: z.array(ignore()),
    }), null)

    // Fixed reference from Ip.ignore() to ignore()
    this.defaultCollageItemsSchemaValidator = createMetaValidator('DefaultCollageItemsSchemaValidator', ignore(), null)
  }

  /**
   * Fetches default inserts (plugins, widgets, templates, etc.)
   * @param params - API parameters for the request
   * @returns Validated response data
   */
  getDefaultInserts(params: unknown) {
    return this.defaultInsertsSchemaValidator.validate(async ({
      xr: apiClient,
    }) => await apiClient.get('/api/figjam/default_inserts', APIParameterUtils.toAPIParameters(params)))
  }

  /**
   * Fetches default collage items
   * @param params - API parameters for the request
   * @returns Validated response data
   */
  getDefaultCollageItems(params: unknown) {
    return this.defaultCollageItemsSchemaValidator.validate(async ({
      xr: apiClient,
    }) => await apiClient.get('/api/figjam/default_collage_items', APIParameterUtils.toAPIParameters(params)))
  }
}

export const defaultContentService = new DefaultContentService()
export const d = defaultContentService
