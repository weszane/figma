import { debugState } from "../905/407919";
import { trackFileEvent } from "../figma_app/314264";
import { getFileKeyFromSelectedView } from "../figma_app/193867";
export function $$s0(e, t) {
  let i = debugState.getState();
  let s = getFileKeyFromSelectedView(i.selectedView);
  trackFileEvent(o, s, i, {
    actionName: e,
    ...t
  }, {
    forwardToDatadog: !0
  });
}
let o = "accessibility_actions";
export var $$l1 = (e => (e.TOGGLE_DOM_ON_MENU = "toggle_dom_on_menu", e.TOGGLE_DOM_OFF_MENU = "toggle_dom_off_menu", e.TOGGLE_ENHANCED_CONTRAST_ON = "toggle_enhanced_contrast_on", e.TOGGLE_ENHANCED_CONTRAST_OFF = "toggle_enhanced_contrast_off", e.PROTOTYPE_BUTTON_CLICKED = "prototype_button_clicked", e.SKIP_TO_CONTENT = "skip_to_content", e.ENABLE_AND_SKIP_TO_CONTENT = "enable_and_skip_to_content", e.FOCUS_CYCLE_NEXT_AREA = "focus_cycle_next_area", e.FOCUS_CYCLE_PREVIOUS_AREA = "focus_cycle_previous_area", e.DESIGN_INITIAL_TREE_LOAD = "design_initial_tree_load", e.DESIGN_UPDATE_NODE = "design_update_tree", e.DEVMODE_INITIAL_TREE_LOAD = "devmode_initial_tree_load", e.DEVMODE_UPDATE_NODE = "devmode_update_node", e.FIGJAM_UPDATE_TREE = "figjam_update_tree", e.FIGJAM_UPDATE_NODE = "figjam_update_node", e.FIGJAM_INITIAL_TREE_LOAD = "figjam_initial_tree_load", e.FIGJAM_INCREMENTAL_UPDATE_DISCREPANCY = "figjam_incremental_update_discrepancy", e.TOGGLE_DEFAULT_APPLICATION_ON_MENU = "toggle_default_application_on_menu", e.TOGGLE_DEFAULT_APPLICATION_OFF_MENU = "toggle_default_application_off_menu", e.SLIDES_INITIAL_TREE_LOAD = "slides_initial_tree_load", e.SLIDES_UPDATE_NODE = "slides_update_node", e))($$l1 || {});
export const f = $$s0;
export const h = $$l1;