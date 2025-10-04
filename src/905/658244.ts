import { LazyComponentFactory } from "../905/275748"

export let FileBrowser = new LazyComponentFactory({
  name: "File Browser",
  dependencies: [],
  exports: {
    "./constants": "./constants.ts",
    "./context_menu": "./context_menu.tsx",
    "./hooks": "./hooks.ts",
    "./modals": "./modals.tsx",
    "./move_file_to_project": "./move_file_to_project.tsx",
    "./overlays": "./overlays.tsx",
    "./routing": "./routing.ts",
    "./state": "./state.ts",
    "./types": "./types.ts",
    "./views": "./views.tsx",
    "./actions/file_browser_actions": "./actions/file_browser_actions.ts",
    "./actions/file_browser_thunks": "./actions/file_browser_thunks.ts",
    "./actions/file_browser_action_hooks": "./actions/file_browser_action_hooks.tsx",
    "./actions/file_browser_preferences_actions": "./actions/file_browser_preferences_actions.ts",
    "./actions/file_browser_section_preferences_actions": "./actions/file_browser_section_preferences_actions.ts",
  },
  sideEffects: !1,
  routeHints: ["file_browser"],
  exceptions: [{
    path: "js/file_browser/views/team_tile/team_tile",
    importers: ["js/browse/search/views/search_model_results/teams.tsx", "js/browse/shared/views/teams_items_view/teams_items_view.tsx"],
  }, {
    path: "js/browse/file_browser/hooks/use_template_omnicreate_menu_item_props",
    importers: ["js/figma_app/views/community_hub/resource_hub/empty_states/internal_resources_few_templates_upsell.tsx", "js/figma_app/views/community_hub/resource_hub/empty_states/internal_resources_no_resources_upsell.tsx"],
  }, {
    path: "js/browse/file_browser/views/page_header/toolbar_action/actions/resource_creation_action/resource_creation_action",
    specifiers: ["ControlledOmnicreate"],
    importers: ["js/figma_app/views/community_hub/resource_hub/empty_states/internal_resources_few_templates_upsell.tsx", "js/figma_app/views/community_hub/resource_hub/empty_states/internal_resources_no_resources_upsell.tsx"],
  }, {
    path: "js/browse/file_browser/views/page_header/toolbar_action/file_creation_dropdown",
    specifiers: ["FileCreationDropdown", "FileCreationDropdownType", "FolderInfo", "useFileCreationTeams"],
    importers: "js/figma_app/views/desktop_new_tab/desktop_new_tab_view.tsx",
  }, {
    path: "js/browse/file_browser/views/workspace_view/workspace_pinned_files/utils",
    specifiers: ["useFileWorkspacePinActionsQuery", "useGetWorkspacePinningExp", "useTryPinFileToWorkspace", "FileWorkspacePinActions"],
    importers: ["js/figma_app/views/modal/account_settings/notifications_settings_modal/notifications_settings_modal.tsx", "js/browse/shared/views/subscribed_tile_action_dropdown/subscribed_tile_action_dropdown.tsx", "js/figma_app/views/fullscreen/toolbar_view/filename_view/filename_view_dropdown.tsx", "js/browse/shared/views/tile_action_dropdown.tsx"],
  }, {
    path: "js/browse/file_browser/views/org_view/org_plugin_option_button",
    specifiers: ["OrgPluginOptionButton"],
    importers: ["js/figma_app/views/community_hub/cards/widget_card/widget_card.tsx"],
  }, {
    path: "js/browse/file_browser/views/team_context_menu/team_context_menu",
    importers: ["js/browse/shared/views/teams_items_view/teams_items_view.tsx"],
  }, {
    path: "js/browse/file_browser/src/modals/team_rename_modal_lazy",
    importers: ["js/browse/shared/views/teams_items_view/teams_items_view.tsx"],
  }, {
    path: "js/browse/file_browser/views/org_view/org_plugins_view",
    specifiers: ["PluginsItemsView"],
    importers: ["js/browse/search/views/search_results_plugins_items_view/search_results_plugins_items_view.tsx"],
  }, {
    path: "js/browse/file_browser/views/org_view/org_widgets_view",
    specifiers: ["WidgetsItemsView"],
    importers: ["js/browse/search/views/search_results_widgets_items_view/search_results_widgets_items_view.tsx"],
  }, {
    path: "js/browse/file_browser/views/connected_project_badge",
    specifiers: ["ConnectedProjectBadge"],
    importers: ["js/figma_app/views/fullscreen/toolbar_view/filename_view/filename_view.tsx", "js/browse/shared/views/folder_list_card/folder_list_card.tsx", "js/browse/search/views/faceted_search_preview/faceted_search_preview_folder_row.tsx", "js/figma_app/views/fullscreen/left_panel/figjam/collapsed/panel_toggle.tsx", "js/figma_app/views/fullscreen/left_panel/left_panel_header/filename_view/filename_view.tsx"],
  }, {
    path: "js/browse/file_browser/overlays/connected_projects_overlay/connected_projects_file_editor_overlay",
    importers: ["js/figma_app/views/fullscreen/toolbar_view/filename_view/filename_view.tsx"],
  }, {
    path: "js/browse/file_browser/src/modals/team_admin/confirm_downgrade_modal_lazy",
    importers: ["js/figma_app/views/modal/monetization/churn_friction_personalized_value_modal.tsx"],
  }],
  friendFiles: ["js/figma_app/views/file_browser/**/*", "js/browse/admin_settings/**/*"],
  eslint: {
    rules: {
      "react/no-array-index-key": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
})
export const A = FileBrowser
