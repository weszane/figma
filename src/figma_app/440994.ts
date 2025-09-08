import { DesignGraphElements } from "../figma_app/763686";
import { getI18nString } from "../905/303541";
import { FEditorType } from "../figma_app/53721";
let $$s1 = Symbol("uninteresting");
let $$o0 = Symbol("hidden");
export function $$l2(e, t) {
  switch (e) {
    case "SECTION":
      return getI18nString("fullscreen.accessibility_dom.node_name_section");
    case "STICKY":
      return getI18nString("fullscreen.accessibility_dom.node_name_sticky");
    case "ROUNDED_RECTANGLE":
    case "SHAPE_WITH_TEXT":
      return getI18nString("fullscreen.accessibility_dom.node_name_shape");
    case "RECTANGLE":
      return getI18nString("fullscreen.accessibility_dom.node_name_rectangle");
    case "ELLIPSE":
      return getI18nString("fullscreen.accessibility_dom.node_name_ellipse");
    case "REGULAR_POLYGON":
      return getI18nString("fullscreen.accessibility_dom.node_name_polygon");
    case "STAR":
      return getI18nString("fullscreen.accessibility_dom.node_name_star");
    case "CONNECTOR":
      return getI18nString("fullscreen.accessibility_dom.node_name_connector");
    case "CODE_BLOCK":
      return getI18nString("fullscreen.accessibility_dom.node_name_code_block");
    case "LINE":
      return getI18nString("fullscreen.accessibility_dom.node_name_line");
    case "TEXT":
      return getI18nString("fullscreen.accessibility_dom.node_name_text");
    case "TABLE":
      return getI18nString("fullscreen.accessibility_dom.node_name_table");
    case "TABLE_CELL":
      return getI18nString("fullscreen.accessibility_dom.node_name_table_cell_generic");
    case "WIDGET":
      return getI18nString("fullscreen.accessibility_dom.node_name_widget");
    case "MEDIA":
      return getI18nString("fullscreen.accessibility_dom.node_name_media");
    case "CODE_INSTANCE":
      return getI18nString("fullscreen.accessibility_dom.node_name_code_instance");
    case "WEBPAGE":
    case "RESPONSIVE_SET":
      return getI18nString("fullscreen.accessibility_dom.node_name_responsive_set");
    case "SLICE":
      return getI18nString("fullscreen.accessibility_dom.node_name_slice");
    case "FRAME":
      return getI18nString("fullscreen.accessibility_dom.node_name_frame");
    case "INSTANCE":
      if (t === FEditorType.Whiteboard) return getI18nString("fullscreen.accessibility_dom.node_name_instance");
      return getI18nString("fullscreen.accessibility_dom.design.node_name_instance");
    case "STAMP":
      return getI18nString("fullscreen.accessibility_dom.node_name_stamp");
    case "CANVAS":
      if (t === FEditorType.Whiteboard) return getI18nString("fullscreen.accessibility_dom.node_name_canvas");
      return getI18nString("fullscreen.accessibility_dom.design.node_name_canvas");
    default:
      return getI18nString("fullscreen.accessibility_dom.node_name_fallback");
  }
}
export function $$d3(e, t) {
  return e === DesignGraphElements.STAMP ? t ? getI18nString("fullscreen.accessibility_dom.current_tool_stamp", {
    stampName: t
  }) : getI18nString("fullscreen.accessibility_dom.current_tool", {
    toolName: getI18nString("fullscreen_actions.set-tool-stamp")
  }) : null;
}
export const RG = $$o0;
export const a0 = $$s1;
export const rs = $$l2;
export const sG = $$d3;