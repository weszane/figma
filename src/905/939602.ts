import { z, Ip } from "../905/239603";
import { createMetaValidator, createNoOpValidator, APIParameterUtils } from "../figma_app/181241";
import { XHR } from "../905/910117";
import { FileKeySourceEnum } from "../905/412913";
import { fileEntityModel } from "../905/806985";
import { NS } from "../905/71785";
import { ComponentSchema, StateGroupDetailSchema, createFileKeySchema, StyleSchema, cI } from "../figma_app/633080";
import { stringSchema } from "../figma_app/198712";
let u = XHR.requiredHeaders;
let $$p0 = new class {
  constructor() {
    this.LibraryComponentV2DestinationSchemaValidator = createMetaValidator("LibraryComponentV2Destination", z.object({
      node_id: stringSchema,
      file_key: z.string(),
      component: ComponentSchema,
      component_set: StateGroupDetailSchema.optional()
    }), "ds_zod_components", !1, !0);
    this.LibraryPublishedComponentsSchemaValidator = createNoOpValidator();
    this.CommunityLibraryPublishedComponentsSchemaValidator = createNoOpValidator();
    this.LibraryPublishedComponentsV2SchemaValidator = createMetaValidator("LibraryPublishedComponentsV2", z.object({
      components: z.array(createFileKeySchema(FileKeySourceEnum.REST_API).extend(ComponentSchema.shape)),
      state_groups: z.array(createFileKeySchema(FileKeySourceEnum.REST_API).extend(StateGroupDetailSchema.shape)),
      file: fileEntityModel.nullable(),
      hub_file: Ip.coerce.$$null(NS.nullable())
    }), "ds_zod_components", !1, !0);
    this.LibraryStylesSchemaValidator = createMetaValidator("LibraryStylesSchemaValidator", z.object({
      styles: z.array(createFileKeySchema(FileKeySourceEnum.REST_API).extend(StyleSchema.shape))
    }), "ds_zod_styles", !1, !0);
    this.LibraryStyleByKeyValidator = createMetaValidator("LibraryStyleByKeyValidator", z.object({
      style: createFileKeySchema(FileKeySourceEnum.REST_API).extend(StyleSchema.shape),
      file: fileEntityModel
    }), "ds_zod_styles", !1, !0);
    this.LibraryStyleLogByKeyVersionValidator = createNoOpValidator();
    this.LibrarySubscribedComponentsEditorTypeSchemaValidator = createMetaValidator("LibrarySubscribedComponentsEditorType", z.object({
      components: z.array(createFileKeySchema(FileKeySourceEnum.REST_API).extend(ComponentSchema.shape)),
      state_groups: z.array(createFileKeySchema(FileKeySourceEnum.REST_API).extend(StateGroupDetailSchema.shape)),
      files: fileEntityModel.array(),
      hub_files: NS.array().optional()
    }), "ds_zod_components", !1, !0);
    this.DefaultLibrariesSchemaValidator = createNoOpValidator();
    this.DefaultLibraryAttributionSchemaValidator = createNoOpValidator();
    this.LibraryPublishedComponentsStatsSchemaValidator = createNoOpValidator();
    this.LibraryComponentV2SchemaValidator = createMetaValidator("LibraryComponentV2", z.object({
      component: createFileKeySchema(FileKeySourceEnum.REST_API).extend(ComponentSchema.shape),
      component_set: createFileKeySchema(FileKeySourceEnum.REST_API).extend(StateGroupDetailSchema.shape).nullable(),
      state_components: z.array(createFileKeySchema(FileKeySourceEnum.REST_API).extend(ComponentSchema.shape)),
      file: fileEntityModel.nullable()
    }), "ds_zod_components", !1, !0);
    this.LibraryStateGroupSchemaValidator = createMetaValidator("LibraryStateGroup", createFileKeySchema(FileKeySourceEnum.REST_API).extend(StateGroupDetailSchema.shape), "ds_zod_components", !1, !0);
    this.LibraryPublishedAndMovedComponentsSchemaValidator = createMetaValidator("LibraryPublishedAndMovedComponents", z.object({
      components: z.array(createFileKeySchema(FileKeySourceEnum.REST_API).extend(ComponentSchema.shape)),
      state_groups: z.array(createFileKeySchema(FileKeySourceEnum.REST_API).extend(StateGroupDetailSchema.shape)),
      files: z.array(fileEntityModel),
      move_remappings: z.record(cI)
    }), "ds_zod_components", !1, !0);
    this.LibrariesSchemaValidator = createNoOpValidator();
    this.LibrariesV2SchemaValidator = createNoOpValidator();
    this.LibraryPublishSchemaValidator = createNoOpValidator();
    this.UploadPublishParamsSchemaValidator = createNoOpValidator();
    this.UnpublishedStylesSchemaValidator = createMetaValidator("UnpublishedStylesSchemaValidator", z.object({
      styles: z.array(createFileKeySchema(FileKeySourceEnum.REST_API).extend(StyleSchema.shape))
    }), "ds_zod_styles", !1, !0);
    this.MissingStylesByLibraryKeySchemaValidator = createNoOpValidator();
    this.EverPublishedLibrariesSchemaValidator = createNoOpValidator();
    this.LibrariesByLibraryKeys = createNoOpValidator();
    this.ValidateCopyValidator = createNoOpValidator();
    this.EnableSlotsForFileValidator = createNoOpValidator();
  }
  getLibraryComponentV2Destination(e) {
    return this.LibraryComponentV2DestinationSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/design_systems/library/component_v2/${e.componentKey}/destination`));
  }
  getLibraryPublishedComponents(e) {
    let {
      key,
      includeThumbnail,
      includeRealtime
    } = e;
    return this.LibraryPublishedComponentsSchemaValidator.validate(async ({
      xr: e
    }) => await e.get(`/api/design_systems/library/${key}/published_components`, APIParameterUtils.toAPIParameters({
      includeThumbnail,
      includeRealtime
    }), {
      ...u,
      retryCount: 5
    }));
  }
  getCommunityLibraryPublishedComponents(e) {
    return this.CommunityLibraryPublishedComponentsSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/community_libraries/${e.hubFileId}/published_components`, null, {
      ...u,
      retryCount: 5
    }));
  }
  getLibraryPublishedComponentsV2(e) {
    let {
      libraryKey,
      includeThumbnail,
      includeRealtime
    } = e;
    return this.LibraryPublishedComponentsV2SchemaValidator.validate(async ({
      xr: e
    }) => await e.get(`/api/design_systems/v2/library/${libraryKey}/published_components`, APIParameterUtils.toAPIParameters({
      includeThumbnail,
      includeRealtime
    }), {
      ...u,
      retryCount: 5
    }));
  }
  getLibraryStyles(e) {
    return this.LibraryStylesSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/design_systems/library/${e.libraryFileKey}/styles`));
  }
  getLibraryStylesByLibraryKey(e) {
    return this.LibraryStylesSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/design_systems/v2/library/${e.libraryKey}/styles`));
  }
  getLibraryStyleByKey(e) {
    return this.LibraryStyleByKeyValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/design_systems/library/styles/${e.styleKey}`));
  }
  getLibraryStyleByKeyAndVersion(e) {
    return this.LibraryStyleLogByKeyVersionValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/design_systems/library/styles/${e.styleKey}/version/${e.version}`));
  }
  getLibrarySubscribedComponentsEditorType(e) {
    return this.LibrarySubscribedComponentsEditorTypeSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/design_systems/library/${e.key}/subscribed_components?editor_type=${e.editorType}`));
  }
  getDefaultLibraries(e) {
    return this.DefaultLibrariesSchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/design_systems/default_libraries", APIParameterUtils.toAPIParameters(e)));
  }
  getDefaultLibraryAttribution(e) {
    return this.DefaultLibraryAttributionSchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/design_systems/default_library_attribution", APIParameterUtils.toAPIParameters(e)));
  }
  getLibraryPublishedComponentsStats(e) {
    return this.LibraryPublishedComponentsStatsSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/design_systems/library/${e.libraryFileKey}/published_components`));
  }
  getLibraryComponentV2(e) {
    return this.LibraryComponentV2SchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/design_systems/library/component_v2/${e.componentKey}`, APIParameterUtils.toAPIParameters(e)));
  }
  getLibraryStateGroup(e) {
    return this.LibraryStateGroupSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/design_systems/library/state_group/${e.stateGroupKey}`));
  }
  getLibraryPublishedAndMovedComponents(e) {
    return this.LibraryPublishedAndMovedComponentsSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/design_systems/library/${e.openFileKey}/published_and_moved_components`, null, {
      ...u,
      retryCount: 5
    }));
  }
  getLibraries(e) {
    return this.LibrariesSchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/design_systems/libraries", APIParameterUtils.toAPIParameters(e)));
  }
  getLibrariesV2(e) {
    return this.LibrariesV2SchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/design_systems/v2/libraries", APIParameterUtils.toAPIParameters(e)));
  }
  postLibraryPublish({
    fileKey: e,
    checkpointKey: t,
    paramsPath: i,
    publishToCommunity: n,
    publishScope: r
  }) {
    return this.LibraryPublishSchemaValidator.validate(async ({
      xr: a
    }) => await a.post(`/api/publish/${e}`, {
      file_key: e,
      checkpoint_key: t,
      params_path: i,
      publish_to_community: n,
      publish_scope: r
    }));
  }
  postUploadPublishParams() {
    return this.UploadPublishParamsSchemaValidator.validate(async ({
      xr: e
    }) => await e.post("/api/publish_params/upload"));
  }
  postUnpublishedStyles({
    styleKeys: e,
    orgId: t
  }) {
    return this.UnpublishedStylesSchemaValidator.validate(async ({
      xr: i
    }) => await i.post("/api/unpublished_styles", {
      style_keys: e,
      org_id: t
    }));
  }
  postMissingStylesByLibraryKey({
    styleKeys: e
  }) {
    return this.MissingStylesByLibraryKeySchemaValidator.validate(async ({
      xr: t
    }) => await t.post("/api/missing_styles_by_library_key", {
      style_keys: e
    }));
  }
  postEverPublishedLibraries({
    libraryKeys: e
  }) {
    return this.EverPublishedLibrariesSchemaValidator.validate(async ({
      xr: t
    }) => await t.post("/api/design_systems/missing_libraries", {
      library_keys: e
    }));
  }
  getLibrariesByLibraryKeys({
    libraryKeys: e,
    subscriptionFileKey: t,
    orgId: i
  }) {
    return this.LibrariesByLibraryKeys.validate(async ({
      xr: n
    }) => await n.post("/api/design_systems/libraries_by_library_keys", {
      library_keys: e,
      subscription_file_key: t,
      org_id: i
    }));
  }
  postValidateCopy({
    nodeIds: e,
    fileKey: t,
    copyType: i
  }) {
    return this.ValidateCopyValidator.validate(async ({
      xr: n
    }) => await n.post("/api/design_systems/validate_copy", APIParameterUtils.toAPIParameters({
      nodeIds: e,
      fileKey: t,
      copyType: i
    })));
  }
  postEnableSlotsForFile({
    fileKey: e
  }) {
    return this.EnableSlotsForFileValidator.validate(async ({
      xr: t
    }) => await t.put(`/api/enable_slots/${e}`, {
      slots_enabled: !0
    }));
  }
}();
export const Z = $$p0;