import { LazyComponentFactory } from "../905/275748";
import _require from "../1e926454/954729";
import { registerModal, createModalConfig } from "../905/102752";
let n;
let r = new LazyComponentFactory({
  name: "Browse Shared",
  description: "Shared components/utils used in 'browse' experiences like search and file_browser",
  dependencies: [],
  exports: {
    "./hooks": "./hooks.ts",
    "./views": "./views.tsx",
    "./styles": "./styles.ts",
    "./types": "./types.ts",
    "./lib": "./lib.ts",
    "./modals": "./modals.ts",
    "./is_file_browser": "./is_file_browser.ts"
  },
  sideEffects: !1,
  exceptions: [{
    path: "js/browse/shared/views/sortable_folder_info",
    importers: ["js/browse/file_browser/views/shared_with_you/hooks/use_swy_data_source.ts", "js/browse/file_browser/views/folder_list_view/folder_list_view.tsx"]
  }, {
    path: "js/browse/shared/views/teams_items_view/teams_items_view",
    importers: ["js/browse/file_browser/views/org_view/org_teams_view.tsx"]
  }, {
    path: "js/browse/shared/views/tiles_items_view/tile_grid_cell/tile_grid_cell_presentational",
    importers: ["js/figma_app/views/community_hub/resource_hub/resource_hub_tile/resource_hub_tile.tsx", "js/figma_app/views/community_hub/resource_hub/resource_hub_tile/resource_hub_placeholder_tile.tsx", "js/browse/file_browser/views/workspace_view/workspace_pinned_files/choose_file_to_pin_modal/file_to_pin_cell/file_to_pin_cell.tsx"]
  }],
  eslint: {
    rules: {
      "react/no-array-index-key": "off",
      "@typescript-eslint/no-explicit-any": "off"
    }
  }
});
export function $$s0() {
  return n ??= registerModal(r.createLazyComponent(() => Promise.all([]).then(_require).then(e => e.PlanInviteModal), createModalConfig("PlanInviteModal")));
}
export const e = $$s0;