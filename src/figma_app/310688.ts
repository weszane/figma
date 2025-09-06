import { trackEventAnalytics } from "../905/449184";
export let $$i10 = "sidebar favorited row";
export function $$a9(e, t, r, i, a, s) {
  trackEventAnalytics("resource_removed_from_favorites", {
    resource_id: e,
    selectedView: t,
    entrypoint: r,
    resource_type: i,
    editor_type: a,
    fileBrowserUnfavorite: s
  });
}
export function $$s6(e, t, r, i, a, s) {
  trackEventAnalytics("resource_added_to_favorites", {
    resourceId: e,
    editor_type: a,
    selectedView: t,
    resource_type: i,
    entrypoint: r,
    fileBrowserFavorite: s
  });
}
export function $$o3(e, t, r, i, a) {
  trackEventAnalytics("favorited_resource_clicked", {
    resource_id: e,
    resource_type: t,
    editor_type: a,
    section_id: r,
    entrypoint: i
  });
}
export function $$l1(e, t) {
  trackEventAnalytics("favorites_to_move_add_to_sidebar_click", {
    favorited_resource_id: e,
    dest_team_id: t
  });
}
export function $$d8(e) {
  trackEventAnalytics("favorites_to_move_unstar_all_click", {
    favorited_resource_id: e
  });
}
export function $$c11(e) {
  trackEventAnalytics("sidebar_section_collapsed", {
    is_collapse: e,
    section: "favorites"
  });
}
export function $$u7() {
  trackEventAnalytics("favorites_reordered", {});
}
export function $$p0(e) {
  trackEventAnalytics("favorites_context_menu_action_clicked", {
    action: e
  });
}
export function $$_5(e, t) {
  trackEventAnalytics("File Browser Sidebar Custom Section Created", {
    new_custom_section_name: t,
    new_custom_section_id: e
  });
}
export function $$h4(e) {
  trackEventAnalytics("File Browser Sidebar Custom Section Deleted", {
    new_custom_section_id: e
  });
}
export function $$m2(e, t) {
  trackEventAnalytics("File Browser Sidebar Custom Section Renamed", {
    new_custom_section_new_name: t,
    new_custom_section_id: e
  });
}
export const DF = $$p0;
export const Dr = $$l1;
export const K2 = $$m2;
export const LP = $$o3;
export const Pe = $$h4;
export const SX = $$_5;
export const gB = $$s6;
export const hp = $$u7;
export const j4 = $$d8;
export const to = $$a9;
export const vg = $$i10;
export const xs = $$c11;