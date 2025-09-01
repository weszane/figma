import { createDataMapper } from '../905/508958'
import { fileEntityModel } from '../905/806985'

export let fileEntityDataMapper = createDataMapper(fileEntityModel, e => ({
  client_meta: e.camel(),
  created_at: e.camel().stringToDate(),
  creator_id: e.camel(),
  deleted_at: e.stringToDateNullable().camel(),
  trashed_at: e.custom({
    toLiveGraph: e => e === null ? null : new Date(e),
    toSinatra: e => e?.toISOString() || null,
  }).camel(),
  trashed_user_id: e.camel(),
  description: e.camel(),
  edit_url: e.camel(),
  folder_id: e.camel(),
  has_file_link_password: e.camel(),
  has_proto_link_password: e.camel(),
  key: e.camel(),
  license: e.camel(),
  link_access: e.camel(),
  parent_org_id: e.camel().custom({
    toLiveGraph: e => void 0 === e ? null : e,
    toSinatra: e => e,
  }),
  proto_link_access: e.camel(),
  name: e.camel(),
  team_id: e.camel(),
  thumbnail_url: e.camel(),
  thumbnail_url_override: e.camel().custom({
    toLiveGraph: e => void 0 === e ? null : e,
    toSinatra: e => e,
  }),
  thumbnail_guid: e.camel().custom({
    toLiveGraph: e => void 0 === e ? null : e,
    toSinatra: e => e,
  }),
  preview_thumbnail_urls: e.rename('signedPreviewThumbnailUrls'),
  touched_at: e.camel(),
  is_favorited: e.camel().custom({
    toLiveGraph: e => !!e,
    toSinatra: e => e,
  }),
  is_new_user_playground_library: e.rename('newUserPlaygroundLibrary').custom({
    toLiveGraph: e => !!e,
    toSinatra: e => e,
  }),
  url: e.camel(),
  prototype_url: e.camel(),
  org_browsable: e.camel().custom({
    toLiveGraph: e => void 0 === e ? null : e,
    toSinatra: e => e,
  }),
  viewer_export_restricted: e.camel(),
  updated_at: e.stringToDate().camel(),
  org_audience: e.camel().custom({
    toLiveGraph: e => void 0 === e ? null : e,
    toSinatra: e => e,
  }),
  file_repo_id: e.camel(),
  source_file_key: e.camel(),
  source_checkpoint_id: e.camel(),
  editor_type: e.camel(),
  last_published_at: e.camel().custom({
    toLiveGraph: e => e,
    toSinatra: e => e === '' ? void 0 : e,
  }),
  is_try_file: e.camel(),
  is_team_template: e.camel().custom({
    toLiveGraph: e => !!e,
    toSinatra: e => e,
  }),
  is_published_site: e.camel().custom({
    toLiveGraph: e => !!e,
    toSinatra: e => e,
  }),
  library_key: e.camel(),
  accessed_at: e.drop(),
  checkpoint_id: e.drop(),
  checkpoint_token: e.drop(),
  is_template: e.drop(),
  library_publish_scope_type: e.drop(),
  parent_org: e.drop(),
  parent_team: e.drop(),
  realtime_token: e.drop(),
  starter_library_src_file_key: e.drop(),
  track_tags: e.drop(),
  trashed_with_parent: e.drop(),
  has_connected_project_sharing_group: e.drop(),
}))

export const F = fileEntityDataMapper
