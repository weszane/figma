import { l } from '../905/716947'

export function mapLibraryAttributes(e) {
  return e
    ? e.type === 'COMMUNITY_LIBRARY_FILE'
      ? {
          community_author_handle: e.author_handle,
          community_author_name: e.author_name,
          hub_file_id: e.library_file_key,
          library_type: 'community',
          library_key: e.library_key,
          library_publish_status: 'published',
          library_name: e.library_file_name,
          thumbnail_url: e.thumbnail_url,
          num_components: e.num_components,
          num_state_groups: e.num_state_groups,
          num_styles: e.num_styles,
          num_variable_collections: e.num_variable_collections,
          num_variables: e.num_variables,
          num_module_assets: e.num_module_assets,
          num_library_assets: e.num_library_assets,
        }
      : {
          library_type: 'team',
          team_id: e.team_id ?? null,
          team_name: e.team_name ?? null,
          folder_id: e.folder_id,
          workspace_id: e.workspace_id ?? null,
          workspace_name: e.workspace_name ?? null,
          library_file_key: e.library_file_key,
          library_publish_status: 'published',
          library_name: e.library_file_name,
          library_key: e.file.library_key ? l(e.file.library_key) : l(''),
          thumbnail_url: e.thumbnail_url,
          thumbnail_guid: e.file.thumbnail_guid ?? null,
          num_components: e.num_components,
          num_state_groups: e.num_state_groups,
          num_styles: e.num_styles,
          num_variable_collections: e.num_variable_collections,
          num_variables: e.num_variables,
          num_module_assets: e.num_module_assets,
          num_library_assets: e.num_library_assets,
          has_connected_project_sharing_group: e.file.has_connected_project_sharing_group,
        }
    : null
}
export const E = mapLibraryAttributes
