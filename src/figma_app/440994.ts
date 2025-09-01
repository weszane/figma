import { NLJ } from "../figma_app/763686";
import { t as _$$t } from "../905/303541";
import { nT } from "../figma_app/53721";
let $$s1 = Symbol("uninteresting");
let $$o0 = Symbol("hidden");
export function $$l2(e, t) {
  switch (e) {
    case "SECTION":
      return _$$t("fullscreen.accessibility_dom.node_name_section");
    case "STICKY":
      return _$$t("fullscreen.accessibility_dom.node_name_sticky");
    case "ROUNDED_RECTANGLE":
    case "SHAPE_WITH_TEXT":
      return _$$t("fullscreen.accessibility_dom.node_name_shape");
    case "RECTANGLE":
      return _$$t("fullscreen.accessibility_dom.node_name_rectangle");
    case "ELLIPSE":
      return _$$t("fullscreen.accessibility_dom.node_name_ellipse");
    case "REGULAR_POLYGON":
      return _$$t("fullscreen.accessibility_dom.node_name_polygon");
    case "STAR":
      return _$$t("fullscreen.accessibility_dom.node_name_star");
    case "CONNECTOR":
      return _$$t("fullscreen.accessibility_dom.node_name_connector");
    case "CODE_BLOCK":
      return _$$t("fullscreen.accessibility_dom.node_name_code_block");
    case "LINE":
      return _$$t("fullscreen.accessibility_dom.node_name_line");
    case "TEXT":
      return _$$t("fullscreen.accessibility_dom.node_name_text");
    case "TABLE":
      return _$$t("fullscreen.accessibility_dom.node_name_table");
    case "TABLE_CELL":
      return _$$t("fullscreen.accessibility_dom.node_name_table_cell_generic");
    case "WIDGET":
      return _$$t("fullscreen.accessibility_dom.node_name_widget");
    case "MEDIA":
      return _$$t("fullscreen.accessibility_dom.node_name_media");
    case "CODE_INSTANCE":
      return _$$t("fullscreen.accessibility_dom.node_name_code_instance");
    case "WEBPAGE":
    case "RESPONSIVE_SET":
      return _$$t("fullscreen.accessibility_dom.node_name_responsive_set");
    case "SLICE":
      return _$$t("fullscreen.accessibility_dom.node_name_slice");
    case "FRAME":
      return _$$t("fullscreen.accessibility_dom.node_name_frame");
    case "INSTANCE":
      if (t === nT.Whiteboard) return _$$t("fullscreen.accessibility_dom.node_name_instance");
      return _$$t("fullscreen.accessibility_dom.design.node_name_instance");
    case "STAMP":
      return _$$t("fullscreen.accessibility_dom.node_name_stamp");
    case "CANVAS":
      if (t === nT.Whiteboard) return _$$t("fullscreen.accessibility_dom.node_name_canvas");
      return _$$t("fullscreen.accessibility_dom.design.node_name_canvas");
    default:
      return _$$t("fullscreen.accessibility_dom.node_name_fallback");
  }
}
export function $$d3(e, t) {
  return e === NLJ.STAMP ? t ? _$$t("fullscreen.accessibility_dom.current_tool_stamp", {
    stampName: t
  }) : _$$t("fullscreen.accessibility_dom.current_tool", {
    toolName: _$$t("fullscreen_actions.set-tool-stamp")
  }) : null;
}
export const RG = $$o0;
export const a0 = $$s1;
export const rs = $$l2;
export const sG = $$d3;