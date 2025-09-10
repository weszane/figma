import { b } from "../905/275748";
export let $$n0 = new b({
  name: "Admin Settings",
  description: "Components that drive all team and org admin settings pages",
  dependencies: [],
  exports: {
    "./constants": "./constants.ts",
    "./hooks": "./hooks.ts",
    "./views": "./views.tsx",
    "./modals": "./modals.tsx",
    "./modals2": "./modals2.tsx",
    "./providers": "./providers.ts",
    "./tooltips": "./tooltips.ts",
    "./utils": "./utils.ts",
    "./components": "./components.ts"
  },
  sideEffects: !1,
  routeHints: [],
  exceptions: [{
    path: "js/browse/admin_settings/org_admin/settings_tab/settings_section.css",
    importers: ["js/browse/admin_settings/team_admin/settings_tab/settings_table.tsx"]
  }, {
    path: "js/browse/admin_settings/org_admin/teams_tab/org_teams_livegraph",
    importers: ["js/browse/file_browser/file_management/modals/file_move/file_move_v2.tsx", "js/figma_app/views/modal/add_unassigned_teams_modal/add_unassigned_teams_modal.tsx", "js/figma_app/views/fullscreen/library/preferences_modal/ui3/hooks/use_joined_org_teams.ts"]
  }, {
    path: "js/browse/admin_settings/org_admin/billing_tab/cost_breakdown",
    importers: ["js/figma_app/views/tooltip/tooltip.tsx"]
  }, {
    path: "js/browse/admin_settings/org_admin/org_user_autocomplete_input",
    importers: ["js/figma_app/views/modal/delete_org_modal/delete_org_modal.tsx"]
  }, {
    path: "js/browse/admin_settings/org_admin/teams_tab/team_helpers",
    importers: ["js/figma_app/views/modal/add_unassigned_teams_modal/add_unassigned_teams_modal.tsx"]
  }, {
    path: "js/browse/admin_settings/org_admin/members_tab/members_table_columns",
    importers: ["js/figma_app/views/modal/add_unassigned_teams_modal/add_unassigned_members_tab.tsx", "js/figma_app/views/modal/add_unassigned_members_modal/add_unassigned_members_tab.tsx", "js/admin_app/views/org_search_results/org_access/org_access_page.tsx"]
  }, {
    path: "js/browse/admin_settings/org_admin/resources_tab/shared_fonts_table",
    importers: ["js/figma_app/views/fullscreen/library/preferences_modal/shared_fonts.tsx"]
  }, {
    path: "js/browse/admin_settings/org_admin/machines/org_admin_request_dashboard_onboarding_overlay",
    importers: ["js/browse/admin_settings/admin_dashboard/upgrade_requests_table.tsx"]
  }, {
    path: "js/browse/admin_settings/org_admin/activity_tab/activity_logs_section",
    importers: ["js/admin_app/views/org_search_results/org_activity_page.tsx"]
  }, {
    path: "js/browse/admin_settings/org_admin/hooks/use_can_org_use_mfa_for_guests",
    importers: ["js/admin_app/views/org_search_results/org_activity_page.tsx"]
  }, {
    path: "js/browse/admin_settings/org_admin/resources_tab/extension_allowlist_modal/extension_allowlist_modal_impl",
    importers: ["js/figma_app/views/modal/extension_decline_modal/extension_decline_modal.tsx"]
  }, {
    path: "js/browse/admin_settings/org_admin/resources_tab/library_management_modal/confirm_approved_library_override",
    importers: ["js/figma_app/views/fullscreen/library/preferences_modal/subscription_toggle.tsx"]
  }, {
    path: "js/browse/admin_settings/team_admin/members_list",
    importers: ["js/browse/file_browser/views/team_settings/team_settings_modal.tsx"]
  }, {
    path: "js/browse/admin_settings/org_admin/machines/org_admin_moved_unassigned_drafts_onboarding_overlay",
    importers: ["js/browse/file_browser/views/sidebar/sidebar_inner.tsx"]
  }, {
    path: "js/browse/admin_settings/team_admin/team_admin_moved_unassigned_drafts_onboarding_overlay",
    importers: ["js/browse/file_browser/views/sidebar/pro_admin_settings_link/pro_admin_settings_link.tsx"]
  }, {
    path: "js/browse/admin_settings/org_admin/teams_tab/__test__/mock",
    importers: ["js/figma_app/lib/library_test_helpers/mock_library.tsx"]
  }, {
    path: "js/browse/admin_settings/shared/plan_user_membership_record_utils",
    importers: ["js/admin_app/views/table_metadata_subsections.tsx"]
  }, {
    path: "js/browse/admin_settings/org_admin/members_tab/org_role_cell",
    importers: ["js/billing_remodel/views/members_table.tsx"]
  }, {
    path: "js/browse/admin_settings/org_admin/resources_tab/library_management_modal/added_to_connected_project_banner",
    importers: ["js/figma_app/views/fullscreen/library/preferences_modal/file_view/subscription_file_view_overview.tsx"]
  }, {
    path: "js/browse/admin_settings/shared/components/connected_projects_tab/connected_projects_empty_view",
    importers: ["js/browse/file_browser/views/org_view/org_connected_projects_view.tsx"]
  }, {
    path: "js/browse/admin_settings/shared/components/connected_projects_tab/connected_projects_tab_header",
    importers: ["js/browse/file_browser/views/org_view/org_connected_projects_view.tsx"]
  }, {
    path: "js/browse/admin_settings/connected_project/maximum_connections_reached_modal",
    importers: ["js/figma_app/lib/hooks/connected_projects_paywalls.ts"]
  }, {
    path: "js/browse/admin_settings/team_admin/resource_connect_confirm_modal",
    importers: ["js/figma_app/lib/hooks/connected_projects_paywalls.ts"]
  }, {
    path: "js/browse/admin_settings/shared/components/connected_projects_tab/connected_projects_constants",
    importers: ["js/figma_app/lib/hooks/connected_projects_paywalls.ts", "js/billing/cart/modals/org_upgrade/campfire_org_upgrade_multi_team_modal.tsx"]
  }, {
    path: "js/browse/admin_settings/org_admin/org_idp_management/domain_mapping_modal",
    importers: ["js/browse/file_browser/views/configure_saml.tsx"]
  }, {
    path: "js/browse/admin_settings/org_admin/settings_tab/enable_ai_features_modal",
    importers: ["js/browse/file_browser/views/team_settings/team_ai_settings_modal.tsx"]
  }, {
    path: "js/browse/admin_settings/org_admin/settings_tab/enable_ai_features_banner",
    importers: ["js/browse/file_browser/views/team_settings/team_ai_settings_modal.tsx"]
  }],
  friendFiles: ["js/browse/file_browser/views/admin_settings/**/*"],
  eslint: {
    rules: {
      "react/no-array-index-key": "off",
      "@typescript-eslint/no-explicit-any": "off"
    }
  }
});
export const A = $$n0;
