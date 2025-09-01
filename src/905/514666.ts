import { xb } from "../figma_app/465776";
import { Ez } from "../figma_app/766708";
import { tx } from "../905/303541";
import { to } from "../905/156213";
import { E8 } from "../figma_app/633080";
export function $$l0(e) {
  return [...e].sort((e, t) => {
    if (!("sortPosition" in e) || null === e.sortPosition) return 1;
    if (!("sortPosition" in t) || null === t.sortPosition) return -1;
    let i = -Ez(e.sortPosition, t.sortPosition);
    return 0 !== i ? i : e.node_id > t.node_id ? 1 : -1;
  });
}
export function $$d3(e) {
  switch (e) {
    case E8.CHANGED:
      return tx("design_systems.publishing_modal.modified");
    case E8.CURRENT:
      return tx("design_systems.publishing_modal.no_changes");
    case E8.DELETED:
      return tx("design_systems.publishing_modal.removed");
    case E8.NEW:
      return tx("design_systems.publishing_modal.added");
    case E8.NOT_STAGED:
      return "";
    default:
      xb(e);
  }
}
export function $$c1(e, t) {
  return to({
    type: {
      type: "PublishingModal"
    },
    data: {
      initiallyCheckedItemIDs: e,
      timedOut: t
    }
  });
}
export var $$u2 = (e => (e.ASSET_PANEL_LIBRARY_CONTEXT_MENU = "asset_panel_library_context_menu", e.COMPONENT_PUBLISH_ERROR_NOTIFICATION = "component_publish_error_notification", e.FILENAME_VIEW_DROPDOWN = "filename_view_dropdown", e.FULLSCREEN_MOVE_COMPONENTS_PROMPT = "fullscreen_move_components_prompt", e.FULLSCREEN_OTHER = "fullscreen_other", e.LIBRARY_MODAL_OVERVIEW = "library_modal_overview", e.LIBRARY_MODAL_FILE_VIEW = "library_modal_file_view", e.LIBRARY_MODAL_UPSELL_UI3 = "library_modal_upsell_ui3", e.PROPERTIES_PANEL = "properties_panel", e.PUBLISH_UPSELL_MODAL = "publish_upsell_modal", e.UNPUBLISHED_PREFERRED_VALUES_WARNING = "unpublished_preferred_values_warning", e.TEST = "test", e))($$u2 || {});
export const BT = $$l0;
export const EH = $$c1;
export const RR = $$u2;
export const cw = $$d3;