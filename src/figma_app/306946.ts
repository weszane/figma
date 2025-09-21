import { z } from 'zod';
import { productSchema, ProductSource, ProductStatus } from '../905/54385';
import { HubFileSchema, HubFileVersionSchema } from '../905/71785';
import { ContainerTypeMap } from '../905/186961';
import { SubscriptionMetadataSchema } from '../905/272080';
import { cK } from '../905/604501';
import { fileEntityModel } from '../905/806985';
import { BadgeType } from '../905/875063';
import { CommunityOrgType } from '../905/878245';
import { AcceptedPendingUsersSchema, PublisherInfoSchema } from '../figma_app/10554';
import { createContentFilterSchema } from '../figma_app/70618';
import { EditorType, PluginDetailsSchema, PluginInstallStatus, PluginMetadataSchema, R2, WidgetDetailsSchema } from '../figma_app/155287';
import { FPublicationStatusType, FTemplateCategoryType, FUserVerificationStatusType } from '../figma_app/191312';
import { DesignToolType } from '../figma_app/277543';
import { PrimaryWorkflowEnum } from '../figma_app/633080';
import * as Ip from '../figma_app/709165';
import { communityFilesRecordSchema, videoFilesRecordSchema, resizedThumbnailUrlsSchema } from '../figma_app/809727';

/**
 * ResourceTypeEnum - Original: $$y10
 * Enum for resource types.
 */
export enum ResourceTypeEnum {
  DESIGN_TEMPLATE = 'design_template',
  FIGJAM_TEMPLATE = 'figjam_template',
  PLUGIN = 'plugin',
  WIDGET = 'widget',
  SLIDE_TEMPLATE = 'slide_template',
  UI_KIT = 'ui_kit',
  PROTOTYPE = 'prototype',
  SITE_TEMPLATE = 'site_template',
  COOPER_TEMPLATE_ASSET = 'cooper_template_asset',
  COOPER_TEMPLATE_FILE = 'cooper_template_file',
  FIGMAKE_TEMPLATE = 'figmake_template',
}

/**
 * ResourceSchema - Original: b
 * Schema for a resource.
 */
export const ResourceSchema = z.object({
  id: z.string(),
  resource_type: z.nativeEnum(ResourceTypeEnum),
  editor_types: z.array(z.nativeEnum(DesignToolType)),
  created_at: z.string(),
  rdp_url: z.string(),
  name: z.string(),
  tagline: z.string().nullish(),
  description: z.string().nullish(),
  like_count: z.number(),
  user_count: z.number().nullish(),
  saved_at: z.string().nullish(),
  category_id: z.string().nullable(),
  category_slug: z.string().nullish(),
  parent_category_slug: z.string().nullish(),
  category: cK.nullish(),
  tags: z.array(z.string()).optional().nullable(),
  tags_v2: z.record(z.any()).optional(),
  icon_url: z.string().nullish(),
  thumbnail_url: z.string().optional(),
  thumbnail_src_set: resizedThumbnailUrlsSchema.nullish(),
  carousel_media: z.object({
    images: communityFilesRecordSchema,
    videos: videoFilesRecordSchema.optional()
  }).optional(),
  unpublished_at: z.string().nullable(),
  publishing_status: z.nativeEnum(FPublicationStatusType).nullable(),
  badges: z.array(z.nativeEnum(BadgeType)),
  monetized_resource_metadata: Ip.ignore(productSchema).optional(),
  community_resource_payment: SubscriptionMetadataSchema.optional(),
  is_3rd_party_monetized: z.boolean(),
  third_party_m10n_url: z.string().nullable(),
  support_contact: z.string().nullable(),
  publish_scope: z.nativeEnum(CommunityOrgType).optional()
}).and(PublisherInfoSchema);

/**
 * ResourceSummarySchema - Original: T
 * Schema for a resource summary.
 */
export const ResourceSummarySchema = z.object({
  id: z.string(),
  resource_type: z.nativeEnum(ResourceTypeEnum),
  editor_types: z.array(z.nativeEnum(DesignToolType)),
  created_at: z.string(),
  name: z.string(),
  tagline: z.string().nullish(),
  description: z.string().nullish(),
  category_id: z.string().nullable(),
  category_slug: z.string().nullish(),
  parent_category_slug: z.string().nullish(),
  category: cK.nullish(),
  tags: z.array(z.string()).optional().nullable(),
  tags_v2: z.record(z.any()).optional(),
  icon_url: z.string().nullish(),
  thumbnail_url: z.string().optional(),
  thumbnail_src_set: resizedThumbnailUrlsSchema.nullish(),
  unpublished_at: z.string().nullable(),
  publishing_status: z.nativeEnum(FPublicationStatusType).nullable(),
  like_count: z.number(),
  publish_scope: z.nativeEnum(CommunityOrgType).optional()
}).and(PublisherInfoSchema);

/**
 * ComponentV2RecordSchema - Original: I
 * Schema for a component v2 record.
 */
export const ComponentV2RecordSchema = z.object({
  id: z.string(),
  file_key: z.string(),
  node_id: z.string(),
  component_key: z.string(),
  checkpoint_id: z.string(),
  file_checkpoint_id: z.string(),
  content_hash: z.string(),
  containing_frame: z.object({
    name: z.string(),
    node_id: z.string(),
    page_id: z.string(),
    page_name: z.string(),
    background_color: z.string()
  }),
  min_node_height: z.number(),
  min_node_width: z.number(),
  name: z.string(),
  user_id: z.string(),
  publishing_client_version: z.number(),
  description: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
  unpublished_at: z.string().nullable(),
  state_group_id: z.string().nullable(),
  last_published_by_user: z.boolean(),
  destination_key: z.string().nullable(),
  full_hierarchy_path: z.string().nullable(),
  library_hierarchy_path_id: z.string(),
  description_rt: z.string(),
  hub_file_id: z.string().nullable(),
  user_facing_version: z.string(),
  type: z.nativeEnum(PrimaryWorkflowEnum),
  canvas_url: z.string(),
  thumbnail_url: z.string(),
  library_key: z.string()
});

/**
 * ComponentV2Schema - Original: S
 * Schema for a component v2.
 */
export const ComponentV2Schema = z.object({
  node_id: z.string(),
  name: z.string(),
  thumbnail_url: z.string().nullable(),
  unpublished_at: z.string().nullable(),
  canvas_url: z.string().nullable(),
  updated_at: z.string().nullable(),
  description: z.string().nullable(),
  description_rt: z.string().nullable(),
  meta: z.unknown().nullable(),
  team_id: z.string().nullable(),
  hub_file_id: z.string().nullable(),
  ai_score: z.number().nullable(),
  lexical_score: z.number().nullable(),
  fuse_score: z.number().nullable(),
  server_score: z.number().nullable(),
  containing_frame: z.unknown().nullable(),
  publishing_client_version: z.number().nullable(),
  component_key: z.string().nullable(),
  min_node_width: z.number().nullable(),
  min_node_height: z.number().nullable(),
  content_hash: z.string().nullable(),
  userFacingVersion: z.string().nullable(),
  destination_key: z.string().nullable(),
  isLocal: z.boolean().nullable(),
  _component_v2_record: ComponentV2RecordSchema.optional()
});

/**
 * TemplateSchema - Original: v
 * Schema for a template.
 */
export const TemplateSchema = z.object({
  id: z.string(),
  file_key: z.string(),
  file_version_id: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  publish_scope: z.nativeEnum(ContainerTypeMap),
  org_id: z.string().nullable(),
  license_group_id: z.string().nullable(),
  team_id: z.string().nullable(),
  published_by_user_id: z.string().nullable(),
  unpublished_at: z.string().nullable(),
  created_at: z.string(),
  updated_at: z.string(),
  signed_thumbnail_url: z.string().optional(),
  client_meta: z.string().optional(),
  has_custom_thumbnail: z.boolean().optional(),
  signed_canvas_url: z.string().optional(),
  thumbnail_guid: z.string().optional(),
  library_key: z.string()
});

/**
 * ResourceContentSchema - Original: A
 * Schema for resource content.
 */
export const ResourceContentSchema = z.object({
  hub_file: Ip.ignore(HubFileSchema).optional(),
  plugin: Ip.ignore(PluginDetailsSchema).optional(),
  widget: Ip.ignore(WidgetDetailsSchema).optional(),
  template: Ip.ignore(TemplateSchema).optional(),
  component_v2: Ip.ignore(ComponentV2Schema).optional()
});

/**
 * ResourceWithContentSchema - Original: $$x4
 * Schema for resource with content.
 */
export const ResourceWithContentSchema = ResourceSchema.and(z.object({
  content: ResourceContentSchema,
  carousel_media: z.object({
    images: communityFilesRecordSchema,
    videos: videoFilesRecordSchema.optional()
  })
}));

/**
 * RecommendationDimensionsSchema - Original: $$N8
 * Schema for recommendation dimensions.
 */
export const RecommendationDimensionsSchema = z.object({
  dimensions: z.object({
    job_title: z.array(z.string()),
    paid_status: z.array(z.string())
  }),
  recommendations: z.array(z.object({
    resources: z.array(ResourceSchema),
    properties: z.object({
      job_title: z.string(),
      paid_status: z.string()
    })
  }))
});

/**
 * UserResourceSchema - Original: $$C9
 * Schema for user resource.
 */
export const UserResourceSchema = z.object({
  id: z.string(),
  user_id: z.string(),
  resource_id: z.string(),
  created_at: z.string(),
  updated_at: z.string()
}).optional();

/**
 * LimitedResourceSchema - Original: w
 * Schema for limited resource types.
 */
export const LimitedResourceSchema = ResourceSchema.and(z.object({
  resource_type: z.enum(['design_template', 'figjam_template', 'slide_template', 'cooper_template_file', 'figmake_template', 'site_template'])
}));

/**
 * RecommendedResourcesSchema - Original: $$O0
 * Schema for recommended and internal resources.
 */
export const RecommendedResourcesSchema = z.object({
  recommended_resources: z.array(LimitedResourceSchema),
  internal_resources: z.array(LimitedResourceSchema)
});

/**
 * ResourceWithOptionalContentSchema - Original: $$R6
 * Schema for resource with optional content.
 */
export const ResourceWithOptionalContentSchema = ResourceSchema.and(z.object({
  content: z.optional(ResourceContentSchema),
  carousel_media: z.object({
    images: communityFilesRecordSchema,
    videos: videoFilesRecordSchema.optional()
  }).optional()
}));

/**
 * ResourceWithOptionalContentListSchema - Original: $$L7
 * Array of ResourceWithOptionalContentSchema.
 */
export const ResourceWithOptionalContentListSchema = z.array(ResourceWithOptionalContentSchema);

/**
 * SameCreatorContentSchema - Original: $$P3
 * Schema for same creator content.
 */
export const SameCreatorContentSchema = z.object({
  is_same_creator: z.boolean(),
  content: z.array(ResourceSchema)
});

/**
 * ResourceTypeGroups - Original: $$D5, $$k1, $$M2
 * Arrays for resource type groupings.
 */
export const ResourceTypeGroupTemplates = ['design_template', 'figjam_template', 'slide_template', 'ui_kit', 'prototype', 'site_template', 'cooper_template_file'];
export const ResourceTypeGroupPlugins = ['plugin'];
export const ResourceTypeGroupWidgets = ['widget'];

// Exported variables with refactored names
export const Bn = RecommendedResourcesSchema;
export const Dm = ResourceTypeGroupPlugins;
export const GT = ResourceTypeGroupWidgets;
export const ME = SameCreatorContentSchema;
export const Q3 = ResourceWithContentSchema;
export const U$ = ResourceTypeGroupTemplates;
export const UL = ResourceWithOptionalContentSchema;
export const Y9 = ResourceWithOptionalContentListSchema;
export const _s = RecommendationDimensionsSchema;
export const tF = UserResourceSchema;
export const vt = ResourceTypeEnum;