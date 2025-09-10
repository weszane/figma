import { z, Ip } from "../905/239603";
import { M } from "../figma_app/70618";
import { FPublicationStatusType, FTemplateCategoryType, FUserVerificationStatusType } from "../figma_app/191312";
import { cK } from "../905/604501";
import { s as _$$s } from "../905/875063";
import { fe } from "../905/272080";
import { fileEntityModel } from "../905/806985";
import { V_, NS } from "../905/71785";
import { xK, I7 } from "../figma_app/10554";
import { PrimaryWorkflowEnum } from "../figma_app/633080";
import { ii, UC, PN } from "../905/54385";
import { PluginMetadataSchema, R2, EditorType, PluginDetailsSchema, PluginInstallStatus, WidgetDetailsSchema } from "../figma_app/155287";
import { P1, fE, Fy } from "../figma_app/809727";
import { i as _$$i } from "../905/186961";
import { q } from "../figma_app/277543";
import { i as _$$i2 } from "../905/878245";
var $$y10 = (e => (e.DESIGN_TEMPLATE = "design_template", e.FIGJAM_TEMPLATE = "figjam_template", e.PLUGIN = "plugin", e.WIDGET = "widget", e.SLIDE_TEMPLATE = "slide_template", e.UI_KIT = "ui_kit", e.PROTOTYPE = "prototype", e.SITE_TEMPLATE = "site_template", e.COOPER_TEMPLATE_ASSET = "cooper_template_asset", e.COOPER_TEMPLATE_FILE = "cooper_template_file", e.FIGMAKE_TEMPLATE = "figmake_template", e))($$y10 || {});
let b = z.object({
  id: z.string(),
  resource_type: z.nativeEnum($$y10),
  editor_types: z.array(z.nativeEnum(q)),
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
  thumbnail_src_set: P1.nullish(),
  carousel_media: z.object({
    images: fE,
    videos: Fy.optional()
  }).optional(),
  unpublished_at: z.string().nullable(),
  publishing_status: z.nativeEnum(FPublicationStatusType).nullable(),
  badges: z.array(z.nativeEnum(_$$s)),
  monetized_resource_metadata: Ip.ignore(ii).optional(),
  community_resource_payment: fe.optional(),
  is_3rd_party_monetized: z.boolean(),
  third_party_m10n_url: z.string().nullable(),
  support_contact: z.string().nullable(),
  publish_scope: z.nativeEnum(_$$i2).optional()
}).and(xK);
let T = z.object({
  id: z.string(),
  resource_type: z.nativeEnum($$y10),
  editor_types: z.array(z.nativeEnum(q)),
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
  thumbnail_src_set: P1.nullish(),
  unpublished_at: z.string().nullable(),
  publishing_status: z.nativeEnum(FPublicationStatusType).nullable(),
  like_count: z.number(),
  publish_scope: z.nativeEnum(_$$i2).optional()
}).and(xK);
z.object({
  id: z.string(),
  versions: z.record(z.string(), V_),
  duplicate_count: z.number(),
  created_at: z.string(),
  cover_image_carousel_media_id: z.string().optional(),
  redirect_canvas_url: z.string().optional(),
  current_hub_file_version_id: z.string(),
  viewer_mode: z.nativeEnum(FTemplateCategoryType),
  scaling_mode: Ip.ignore(),
  thumbnail_is_set: z.boolean().nullable(),
  saved_at: z.string().optional(),
  recently_duplicated: z.boolean().optional(),
  related_content: M(z.lazy(() => Ip.ignore())),
  verification_status: z.nativeEnum(FUserVerificationStatusType).optional(),
  monetization_status: z.nativeEnum(UC).optional(),
  community_resource_payment: fe.optional(),
  published_site_url: z.string().nullish(),
  library_key: z.unknown().optional(),
  fig_file_metadata: z.object({
    key: z.string(),
    file: fileEntityModel,
    roles: z.array(Ip.ignore())
  }).optional()
});
z.object({
  id: z.string(),
  versions: z.record(PluginMetadataSchema),
  current_plugin_version_id: z.string().nullable(),
  is_widget: z.coerce.boolean(),
  install_count: z.number(),
  roles: R2,
  org_id: z.string().nullable(),
  created_at: z.string(),
  current_user_has_run: z.boolean().optional(),
  current_user_first_ran_at: z.string().optional(),
  unique_run_count: z.number(),
  editor_type: z.nativeEnum(EditorType),
  saved_at: z.string().optional(),
  related_content: M(z.lazy(() => PluginDetailsSchema)),
  hide_related_content_by_others: z.boolean().optional(),
  install_status: z.nativeEnum(PluginInstallStatus).optional(),
  profile_install_status: z.nativeEnum(PluginInstallStatus).optional(),
  monetization_status: z.nativeEnum(UC).optional(),
  community_resource_payment: fe.optional(),
  third_party_m10n_status: z.nativeEnum(PN).optional(),
  creator_policy: z.string(),
  plugin_publishers: I7.optional()
});
let I = z.object({
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
let S = z.object({
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
  _component_v2_record: I.optional()
});
let v = z.object({
  id: z.string(),
  file_key: z.string(),
  file_version_id: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  publish_scope: z.nativeEnum(_$$i),
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
let A = z.object({
  hub_file: Ip.ignore(NS).optional(),
  plugin: Ip.ignore(PluginDetailsSchema).optional(),
  widget: Ip.ignore(WidgetDetailsSchema).optional(),
  template: Ip.ignore(v).optional(),
  component_v2: Ip.ignore(S).optional()
});
let $$x4 = b.and(z.object({
  content: A,
  carousel_media: z.object({
    images: fE,
    videos: Fy.optional()
  })
}));
T.and(z.object({
  content: A
}));
let $$N8 = z.object({
  dimensions: z.object({
    job_title: z.array(z.string()),
    paid_status: z.array(z.string())
  }),
  recommendations: z.array(z.object({
    resources: z.array(b),
    properties: z.object({
      job_title: z.string(),
      paid_status: z.string()
    })
  }))
});
let $$C9 = z.object({
  id: z.string(),
  user_id: z.string(),
  resource_id: z.string(),
  created_at: z.string(),
  updated_at: z.string()
}).optional();
let w = b.and(z.object({
  resource_type: z.enum(["design_template", "figjam_template", "slide_template", "cooper_template_file", "figmake_template", "site_template"])
}));
let $$O0 = z.object({
  recommended_resources: z.array(w),
  internal_resources: z.array(w)
});
let $$R6 = b.and(z.object({
  content: z.optional(A),
  carousel_media: z.object({
    images: fE,
    videos: Fy.optional()
  }).optional()
}));
let $$L7 = z.array($$R6);
let $$P3 = z.object({
  is_same_creator: z.boolean(),
  content: z.array(b)
});
let $$D5 = ["design_template", "figjam_template", "slide_template", "ui_kit", "prototype", "site_template", "cooper_template_file"];
let $$k1 = ["plugin"];
let $$M2 = ["widget"];
export const Bn = $$O0;
export const Dm = $$k1;
export const GT = $$M2;
export const ME = $$P3;
export const Q3 = $$x4;
export const U$ = $$D5;
export const UL = $$R6;
export const Y9 = $$L7;
export const _s = $$N8;
export const tF = $$C9;
export const vt = $$y10;
