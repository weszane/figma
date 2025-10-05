import { trackEventAnalytics } from "../905/449184"

// Constants
export const FAVORITES_SIDEBAR_ROW = "sidebar favorited row"

// Analytics event tracking functions
/**
 * Tracks when a resource is removed from favorites
 * (Original name: $$a9)
 */
export function trackResourceRemovedFromFavorites(
  resourceId: string,
  selectedView: string,
  entrypoint: string,
  resourceType: string,
  editorType?: string,
  fileBrowserUnfavorite?: boolean,
): void {
  trackEventAnalytics("resource_removed_from_favorites", {
    resource_id: resourceId,
    selectedView,
    entrypoint,
    resource_type: resourceType,
    editor_type: editorType,
    fileBrowserUnfavorite,
  })
}

/**
 * Tracks when a resource is added to favorites
 * (Original name: $$s6)
 */
export function trackResourceAddedToFavorites(
  resourceId: string,
  selectedView: string,
  entrypoint: string,
  resourceType: string,
  editorType?: string,
  fileBrowserFavorite?: boolean,
): void {
  trackEventAnalytics("resource_added_to_favorites", {
    resourceId,
    editor_type: editorType,
    selectedView,
    resource_type: resourceType,
    entrypoint,
    fileBrowserFavorite,
  })
}

/**
 * Tracks when a favorited resource is clicked
 * (Original name: $$o3)
 */
export function trackFavoritedResourceClicked(
  resourceId: string,
  resourceType: string,
  sectionId: string,
  entrypoint: string,
  editorType: string,
): void {
  trackEventAnalytics("favorited_resource_clicked", {
    resource_id: resourceId,
    resource_type: resourceType,
    editor_type: editorType,
    section_id: sectionId,
    entrypoint,
  })
}

/**
 * Tracks when "add to sidebar" is clicked in favorites move flow
 * (Original name: $$l1)
 */
export function trackFavoritesToAddToSidebarClick(
  favoritedResourceId: string,
  destTeamId: string,
): void {
  trackEventAnalytics("favorites_to_move_add_to_sidebar_click", {
    favorited_resource_id: favoritedResourceId,
    dest_team_id: destTeamId,
  })
}

/**
 * Tracks when "unstar all" is clicked in favorites move flow
 * (Original name: $$d8)
 */
export function trackFavoritesToMoveUnstarAllClick(favoritedResourceId: string): void {
  trackEventAnalytics("favorites_to_move_unstar_all_click", {
    favorited_resource_id: favoritedResourceId,
  })
}

/**
 * Tracks when the favorites sidebar section is collapsed/expanded
 * (Original name: $$c11)
 */
export function trackSidebarSectionCollapsed(isCollapse: boolean): void {
  trackEventAnalytics("sidebar_section_collapsed", {
    is_collapse: isCollapse,
    section: "favorites",
  })
}

/**
 * Tracks when favorites are reordered
 * (Original name: $$u7)
 */
export function trackFavoritesReordered(): void {
  trackEventAnalytics("favorites_reordered", {})
}

/**
 * Tracks when a context menu action is clicked in favorites
 * (Original name: $$p0)
 */
export function trackFavoritesContextMenuActionClicked(action: string): void {
  trackEventAnalytics("favorites_context_menu_action_clicked", {
    action,
  })
}

/**
 * Tracks when a custom section is created in the file browser sidebar
 * (Original name: $$_5)
 */
export function trackFileBrowserSidebarCustomSectionCreated(
  newCustomSectionId: string,
  newCustomSectionName: string,
): void {
  trackEventAnalytics("File Browser Sidebar Custom Section Created", {
    new_custom_section_name: newCustomSectionName,
    new_custom_section_id: newCustomSectionId,
  })
}

/**
 * Tracks when a custom section is deleted in the file browser sidebar
 * (Original name: $$h4)
 */
export function trackFileBrowserSidebarCustomSectionDeleted(newCustomSectionId: string): void {
  trackEventAnalytics("File Browser Sidebar Custom Section Deleted", {
    new_custom_section_id: newCustomSectionId,
  })
}

/**
 * Tracks when a custom section is renamed in the file browser sidebar
 * (Original name: $$m2)
 */
export function trackFileBrowserSidebarCustomSectionRenamed(
  newCustomSectionId: string,
  newCustomSectionNewName: string,
): void {
  trackEventAnalytics("File Browser Sidebar Custom Section Renamed", {
    new_custom_section_new_name: newCustomSectionNewName,
    new_custom_section_id: newCustomSectionId,
  })
}

// Export aliases for backward compatibility
export const DF = trackFavoritesContextMenuActionClicked
export const Dr = trackFavoritesToAddToSidebarClick
export const K2 = trackFileBrowserSidebarCustomSectionRenamed
export const LP = trackFavoritedResourceClicked
export const Pe = trackFileBrowserSidebarCustomSectionDeleted
export const SX = trackFileBrowserSidebarCustomSectionCreated
export const gB = trackResourceAddedToFavorites
export const hp = trackFavoritesReordered
export const j4 = trackFavoritesToMoveUnstarAllClick
export const to = trackResourceRemovedFromFavorites
export const vg = FAVORITES_SIDEBAR_ROW
export const xs = trackSidebarSectionCollapsed
