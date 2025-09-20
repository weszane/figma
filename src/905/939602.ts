import z from 'zod'
import { HubFileSchema } from '../905/71785'
import { Ip } from '../905/239603'
import { FileKeySourceEnum } from '../905/412913'
import { fileEntityModel } from '../905/806985'
import { XHR } from '../905/910117'
import { APIParameterUtils, createMetaValidator, createNoOpValidator } from '../figma_app/181241'
import { stringSchema } from '../figma_app/198712'
import { cI, ComponentSchema, createFileKeySchema, StateGroupDetailSchema, StyleSchema } from '../figma_app/633080'

/**
 * Required headers for XHR requests.
 * @original u
 */
const requiredHeaders = XHR.requiredHeaders

/**
 * Types for API parameter objects.
 */
interface PublishedComponentsParams {
  key: string
  includeThumbnail?: boolean
  includeRealtime?: boolean
}

interface PublishedComponentsV2Params {
  libraryKey: string
  includeThumbnail?: boolean
  includeRealtime?: boolean
}

interface StyleKeysParams {
  styleKeys: string[]
  orgId?: string
}

interface LibraryKeysParams {
  libraryKeys: string[]
  subscriptionFileKey?: string
  orgId?: string
}

interface ValidateCopyParams {
  nodeIds: string[]
  fileKey: string
  copyType: string
}

/**
 * LibraryAPI provides methods for interacting with design system library endpoints.
 * @original $$p0
 */
class LibraryAPI {
  LibraryComponentV2DestinationSchemaValidator = createMetaValidator('LibraryComponentV2Destination', z.object({
    node_id: stringSchema,
    file_key: z.string(),
    component: ComponentSchema,
    component_set: StateGroupDetailSchema.optional(),
  }), 'ds_zod_components', false, true)

  LibraryPublishedComponentsSchemaValidator = createNoOpValidator()
  CommunityLibraryPublishedComponentsSchemaValidator = createNoOpValidator()
  LibraryPublishedComponentsV2SchemaValidator = createMetaValidator('LibraryPublishedComponentsV2', z.object({
    components: z.array(createFileKeySchema(FileKeySourceEnum.REST_API).extend(ComponentSchema.shape)),
    state_groups: z.array(createFileKeySchema(FileKeySourceEnum.REST_API).extend(StateGroupDetailSchema.shape)),
    file: fileEntityModel.nullable(),
    hub_file: Ip.coerce.null(HubFileSchema.nullable()),
  }), 'ds_zod_components', false, true)

  LibraryStylesSchemaValidator = createMetaValidator('LibraryStylesSchemaValidator', z.object({
    styles: z.array(createFileKeySchema(FileKeySourceEnum.REST_API).extend(StyleSchema.shape)),
  }), 'ds_zod_styles', false, true)

  LibraryStyleByKeyValidator = createMetaValidator('LibraryStyleByKeyValidator', z.object({
    style: createFileKeySchema(FileKeySourceEnum.REST_API).extend(StyleSchema.shape),
    file: fileEntityModel,
  }), 'ds_zod_styles', false, true)

  LibraryStyleLogByKeyVersionValidator = createNoOpValidator()
  LibrarySubscribedComponentsEditorTypeSchemaValidator = createMetaValidator('LibrarySubscribedComponentsEditorType', z.object({
    components: z.array(createFileKeySchema(FileKeySourceEnum.REST_API).extend(ComponentSchema.shape)),
    state_groups: z.array(createFileKeySchema(FileKeySourceEnum.REST_API).extend(StateGroupDetailSchema.shape)),
    files: fileEntityModel.array(),
    hub_files: HubFileSchema.array().optional(),
  }), 'ds_zod_components', false, true)

  DefaultLibrariesSchemaValidator = createNoOpValidator()
  DefaultLibraryAttributionSchemaValidator = createNoOpValidator()
  LibraryPublishedComponentsStatsSchemaValidator = createNoOpValidator()
  LibraryComponentV2SchemaValidator = createMetaValidator('LibraryComponentV2', z.object({
    component: createFileKeySchema(FileKeySourceEnum.REST_API).extend(ComponentSchema.shape),
    component_set: createFileKeySchema(FileKeySourceEnum.REST_API).extend(StateGroupDetailSchema.shape).nullable(),
    state_components: z.array(createFileKeySchema(FileKeySourceEnum.REST_API).extend(ComponentSchema.shape)),
    file: fileEntityModel.nullable(),
  }), 'ds_zod_components', false, true)

  LibraryStateGroupSchemaValidator = createMetaValidator('LibraryStateGroup', createFileKeySchema(FileKeySourceEnum.REST_API).extend(StateGroupDetailSchema.shape), 'ds_zod_components', false, true)

  LibraryPublishedAndMovedComponentsSchemaValidator = createMetaValidator('LibraryPublishedAndMovedComponents', z.object({
    components: z.array(createFileKeySchema(FileKeySourceEnum.REST_API).extend(ComponentSchema.shape)),
    state_groups: z.array(createFileKeySchema(FileKeySourceEnum.REST_API).extend(StateGroupDetailSchema.shape)),
    files: z.array(fileEntityModel),
    move_remappings: z.record(cI),
  }), 'ds_zod_components', false, true)

  LibrariesSchemaValidator = createNoOpValidator()
  LibrariesV2SchemaValidator = createNoOpValidator()
  LibraryPublishSchemaValidator = createNoOpValidator()
  UploadPublishParamsSchemaValidator = createNoOpValidator()
  UnpublishedStylesSchemaValidator = createMetaValidator('UnpublishedStylesSchemaValidator', z.object({
    styles: z.array(createFileKeySchema(FileKeySourceEnum.REST_API).extend(StyleSchema.shape)),
  }), 'ds_zod_styles', false, true)

  MissingStylesByLibraryKeySchemaValidator = createNoOpValidator()
  EverPublishedLibrariesSchemaValidator = createNoOpValidator()
  LibrariesByLibraryKeys = createNoOpValidator()
  ValidateCopyValidator = createNoOpValidator()
  EnableSlotsForFileValidator = createNoOpValidator()

  /**
   * Fetches the destination for a library component V2.
   * @original getLibraryComponentV2Destination
   */
  getLibraryComponentV2Destination(params: { componentKey: string }) {
    return this.LibraryComponentV2DestinationSchemaValidator.validate(async ({ xr }) =>
      await xr.get(`/api/design_systems/library/component_v2/${params.componentKey}/destination`),
    )
  }

  /**
   * Fetches published components for a library.
   * @original getLibraryPublishedComponents
   */
  getLibraryPublishedComponents(params: PublishedComponentsParams) {
    const { key, includeThumbnail, includeRealtime } = params
    return this.LibraryPublishedComponentsSchemaValidator.validate(async ({ xr }) =>
      await xr.get(
        `/api/design_systems/library/${key}/published_components`,
        APIParameterUtils.toAPIParameters({ includeThumbnail, includeRealtime }),
        { ...requiredHeaders, retryCount: 5 },
      ),
    )
  }

  /**
   * Fetches published components for a community library.
   * @original getCommunityLibraryPublishedComponents
   */
  getCommunityLibraryPublishedComponents(params: { hubFileId: string }) {
    return this.CommunityLibraryPublishedComponentsSchemaValidator.validate(async ({ xr }) =>
      await xr.get(
        `/api/community_libraries/${params.hubFileId}/published_components`,
        null,
        { ...requiredHeaders, retryCount: 5 },
      ),
    )
  }

  /**
   * Fetches published components V2 for a library.
   * @original getLibraryPublishedComponentsV2
   */
  getLibraryPublishedComponentsV2(params: PublishedComponentsV2Params) {
    const { libraryKey, includeThumbnail, includeRealtime } = params
    return this.LibraryPublishedComponentsV2SchemaValidator.validate(async ({ xr }) =>
      await xr.get(
        `/api/design_systems/v2/library/${libraryKey}/published_components`,
        APIParameterUtils.toAPIParameters({ includeThumbnail, includeRealtime }),
        { ...requiredHeaders, retryCount: 5 },
      ),
    )
  }

  /**
   * Fetches styles for a library file.
   * @original getLibraryStyles
   */
  getLibraryStyles(params: { libraryFileKey: string }) {
    return this.LibraryStylesSchemaValidator.validate(async ({ xr }) =>
      await xr.get(`/api/design_systems/library/${params.libraryFileKey}/styles`),
    )
  }

  /**
   * Fetches styles for a library by key.
   * @original getLibraryStylesByLibraryKey
   */
  getLibraryStylesByLibraryKey(params: { libraryKey: string }) {
    return this.LibraryStylesSchemaValidator.validate(async ({ xr }) =>
      await xr.get(`/api/design_systems/v2/library/${params.libraryKey}/styles`),
    )
  }

  /**
   * Fetches a style by key.
   * @original getLibraryStyleByKey
   */
  getLibraryStyleByKey(params: { styleKey: string }) {
    return this.LibraryStyleByKeyValidator.validate(async ({ xr }) =>
      await xr.get(`/api/design_systems/library/styles/${params.styleKey}`),
    )
  }

  /**
   * Fetches a style by key and version.
   * @original getLibraryStyleByKeyAndVersion
   */
  getLibraryStyleByKeyAndVersion(params: { styleKey: string, version: string }) {
    return this.LibraryStyleLogByKeyVersionValidator.validate(async ({ xr }) =>
      await xr.get(`/api/design_systems/library/styles/${params.styleKey}/version/${params.version}`),
    )
  }

  /**
   * Fetches subscribed components for a library editor type.
   * @original getLibrarySubscribedComponentsEditorType
   */
  getLibrarySubscribedComponentsEditorType(params: { key: string, editorType: string }) {
    return this.LibrarySubscribedComponentsEditorTypeSchemaValidator.validate(async ({ xr }) =>
      await xr.get(`/api/design_systems/library/${params.key}/subscribed_components?editor_type=${params.editorType}`),
    )
  }

  /**
   * Fetches default libraries.
   * @original getDefaultLibraries
   */
  getDefaultLibraries<T = any>(params: Record<string, any>) {
    return this.DefaultLibrariesSchemaValidator.validate<T>(async ({ xr }) =>
      await xr.get('/api/design_systems/default_libraries', APIParameterUtils.toAPIParameters(params)),
    )
  }

  /**
   * Fetches default library attribution.
   * @original getDefaultLibraryAttribution
   */
  getDefaultLibraryAttribution(params: Record<string, any>) {
    return this.DefaultLibraryAttributionSchemaValidator.validate(async ({ xr }) =>
      await xr.get('/api/design_systems/default_library_attribution', APIParameterUtils.toAPIParameters(params)),
    )
  }

  /**
   * Fetches published components stats for a library file.
   * @original getLibraryPublishedComponentsStats
   */
  getLibraryPublishedComponentsStats(params: { libraryFileKey: string }) {
    return this.LibraryPublishedComponentsStatsSchemaValidator.validate(async ({ xr }) =>
      await xr.get(`/api/design_systems/library/${params.libraryFileKey}/published_components`),
    )
  }

  /**
   * Fetches a library component V2.
   * @original getLibraryComponentV2
   */
  getLibraryComponentV2(params: Record<string, any>) {
    return this.LibraryComponentV2SchemaValidator.validate(async ({ xr }) =>
      await xr.get(`/api/design_systems/library/component_v2/${params.componentKey}`, APIParameterUtils.toAPIParameters(params)),
    )
  }

  /**
   * Fetches a library state group.
   * @original getLibraryStateGroup
   */
  getLibraryStateGroup(params: { stateGroupKey: string }) {
    return this.LibraryStateGroupSchemaValidator.validate(async ({ xr }) =>
      await xr.get(`/api/design_systems/library/state_group/${params.stateGroupKey}`),
    )
  }

  /**
   * Fetches published and moved components for a library.
   * @original getLibraryPublishedAndMovedComponents
   */
  getLibraryPublishedAndMovedComponents(params: { openFileKey: string }) {
    return this.LibraryPublishedAndMovedComponentsSchemaValidator.validate(async ({ xr }) =>
      await xr.get(
        `/api/design_systems/library/${params.openFileKey}/published_and_moved_components`,
        null,
        { ...requiredHeaders, retryCount: 5 },
      ),
    )
  }

  /**
   * Fetches all libraries.
   * @original getLibraries
   */
  getLibraries(params: Record<string, any>) {
    return this.LibrariesSchemaValidator.validate(async ({ xr }) =>
      await xr.get('/api/design_systems/libraries', APIParameterUtils.toAPIParameters(params)),
    )
  }

  /**
   * Fetches all libraries V2.
   * @original getLibrariesV2
   */
  getLibrariesV2(params: Record<string, any>) {
    return this.LibrariesV2SchemaValidator.validate(async ({ xr }) =>
      await xr.get('/api/design_systems/v2/libraries', APIParameterUtils.toAPIParameters(params)),
    )
  }

  /**
   * Publishes a library.
   * @original postLibraryPublish
   */
  postLibraryPublish(params: {
    fileKey: string
    checkpointKey: string
    paramsPath: string
    publishToCommunity: boolean
    publishScope: string
  }) {
    const { fileKey, checkpointKey, paramsPath, publishToCommunity, publishScope } = params
    return this.LibraryPublishSchemaValidator.validate(async ({ xr }) =>
      await xr.post(`/api/publish/${fileKey}`, {
        file_key: fileKey,
        checkpoint_key: checkpointKey,
        params_path: paramsPath,
        publish_to_community: publishToCommunity,
        publish_scope: publishScope,
      }),
    )
  }

  /**
   * Uploads publish params.
   * @original postUploadPublishParams
   */
  postUploadPublishParams() {
    return this.UploadPublishParamsSchemaValidator.validate(async ({ xr }) =>
      await xr.post('/api/publish_params/upload'),
    )
  }

  /**
   * Posts unpublished styles.
   * @original postUnpublishedStyles
   */
  postUnpublishedStyles(params: StyleKeysParams) {
    const { styleKeys, orgId } = params
    return this.UnpublishedStylesSchemaValidator.validate(async ({ xr }) =>
      await xr.post('/api/unpublished_styles', {
        style_keys: styleKeys,
        org_id: orgId,
      }),
    )
  }

  /**
   * Posts missing styles by library key.
   * @original postMissingStylesByLibraryKey
   */
  postMissingStylesByLibraryKey<T = any>(params: { styleKeys: string[] }) {
    return this.MissingStylesByLibraryKeySchemaValidator.validate<T>(async ({ xr }) =>
      await xr.post('/api/missing_styles_by_library_key', {
        style_keys: params.styleKeys,
      }),
    )
  }

  /**
   * Posts ever published libraries.
   * @original postEverPublishedLibraries
   */
  postEverPublishedLibraries(params: { libraryKeys: string[] }) {
    return this.EverPublishedLibrariesSchemaValidator.validate(async ({ xr }) =>
      await xr.post('/api/design_systems/missing_libraries', {
        library_keys: params.libraryKeys,
      }),
    )
  }

  /**
   * Fetches libraries by library keys.
   * @original getLibrariesByLibraryKeys
   */
  getLibrariesByLibraryKeys(params: LibraryKeysParams) {
    const { libraryKeys, subscriptionFileKey, orgId } = params
    return this.LibrariesByLibraryKeys.validate(async ({ xr }) =>
      await xr.post('/api/design_systems/libraries_by_library_keys', {
        library_keys: libraryKeys,
        subscription_file_key: subscriptionFileKey,
        org_id: orgId,
      }),
    )
  }

  /**
   * Validates copy.
   * @original postValidateCopy
   */
  postValidateCopy(params: ValidateCopyParams) {
    const { nodeIds, fileKey, copyType } = params
    return this.ValidateCopyValidator.validate(async ({ xr }) =>
      await xr.post(
        '/api/design_systems/validate_copy',
        APIParameterUtils.toAPIParameters({ nodeIds, fileKey, copyType }),
      ),
    )
  }

  /**
   * Enables slots for a file.
   * @original postEnableSlotsForFile
   */
  postEnableSlotsForFile(params: { fileKey: string }) {
    return this.EnableSlotsForFileValidator.validate(async ({ xr }) =>
      await xr.put(`/api/enable_slots/${params.fileKey}`, {
        slots_enabled: true,
      }),
    )
  }
}

export const librariesAPI = new LibraryAPI()
/**
 * Exported instance of LibraryAPI.
 * @original Z
 */
export const Z = librariesAPI
