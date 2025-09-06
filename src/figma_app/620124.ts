import { getI18nString } from "../905/303541";
var $$i3 = (e => (e.BACKGROUND_COLOR = "BACKGROUND_COLOR", e.STROKE_COLOR = "STROKE_COLOR", e.TEXT_COLOR = "TEXT_COLOR", e.TEXT_STROKE_COLOR = "TEXT_STROKE_COLOR", e.SHAPE_COLOR = "SHAPE_COLOR", e.SHAPE_STROKE_COLOR = "SHAPE_STROKE_COLOR", e.TEXT_STYLE = "TEXT_STYLE", e.CORNER_RADIUS = "CORNER_RADIUS", e.HORIZONTAL_SPACING = "HORIZONTAL_SPACING", e.VERTICAL_SPACING = "VERTICAL_SPACING", e.PADDING = "PADDING", e.TEXT_BACKGROUND_CONTRAST_AA = "TEXT_BACKGROUND_CONTRAST_AA", e.ASSETS_OUTSIDE_SELECTED_LIBRARIES = "ASSETS_OUTSIDE_SELECTED_LIBRARIES", e.EXTENSIBILITY_RULE = "EXTENSIBILITY_RULE", e))($$i3 || {});
let $$a0 = ["BACKGROUND_COLOR", "STROKE_COLOR", "SHAPE_COLOR", "SHAPE_STROKE_COLOR", "TEXT_COLOR", "TEXT_STROKE_COLOR"];
let $$s4 = ["CORNER_RADIUS", "HORIZONTAL_SPACING", "VERTICAL_SPACING", "PADDING"];
let $$o1 = () => ({
  BACKGROUND_COLOR: {
    id: "BACKGROUND_COLOR",
    getLabel: () => getI18nString("design_linter.suggestion_block.fill_colors.background"),
    priority: 0
  },
  STROKE_COLOR: {
    id: "STROKE_COLOR",
    getLabel: () => getI18nString("design_linter.suggestion_block.stroke_colors.stroke"),
    priority: 1
  },
  SHAPE_COLOR: {
    id: "SHAPE_COLOR",
    getLabel: () => getI18nString("design_linter.suggestion_block.fill_colors.shape"),
    priority: 2
  },
  SHAPE_STROKE_COLOR: {
    id: "SHAPE_STROKE_COLOR",
    getLabel: () => getI18nString("design_linter.suggestion_block.stroke_colors.shape_stroke"),
    priority: 3
  },
  TEXT_COLOR: {
    id: "TEXT_COLOR",
    getLabel: () => getI18nString("design_linter.suggestion_block.text"),
    priority: 4
  },
  TEXT_STROKE_COLOR: {
    id: "TEXT_STROKE_COLOR",
    getLabel: () => getI18nString("design_linter.suggestion_block.stroke_colors.text_stroke"),
    priority: 5
  },
  TEXT_STYLE: {
    id: "TEXT_STYLE",
    getLabel: () => getI18nString("design_linter.suggestion_block.text_style"),
    priority: 6
  },
  CORNER_RADIUS: {
    id: "CORNER_RADIUS",
    getLabel: () => getI18nString("design_linter.suggestion_block.corner_radius"),
    priority: 7
  },
  HORIZONTAL_SPACING: {
    id: "HORIZONTAL_SPACING",
    getLabel: () => getI18nString("design_linter.suggestion_block.horizontal_spacing"),
    priority: 8
  },
  VERTICAL_SPACING: {
    id: "VERTICAL_SPACING",
    getLabel: () => getI18nString("design_linter.suggestion_block.vertical_spacing"),
    priority: 9
  },
  PADDING: {
    id: "PADDING",
    getLabel: () => getI18nString("design_linter.suggestion_block.padding"),
    priority: 10
  },
  TEXT_BACKGROUND_CONTRAST_AA: {
    id: "TEXT_BACKGROUND_CONTRAST_AA",
    getLabel: () => getI18nString("design_linter.suggestion_block.text"),
    priority: 11
  },
  ASSETS_OUTSIDE_SELECTED_LIBRARIES: {
    id: "ASSETS_OUTSIDE_SELECTED_LIBRARIES",
    getLabel: () => "",
    priority: 12
  },
  EXTENSIBILITY_RULE: {
    id: "EXTENSIBILITY_RULE",
    getLabel: () => "Custom rules",
    priority: 13
  }
});
export var $$l2 = (e => (e.COLOR = "COLOR", e.TEXT = "TEXT", e.NUMBER = "NUMBER", e.DEFAULT = "DEFAULT", e))($$l2 || {});
export const QR = $$a0;
export const a7 = $$o1;
export const kQ = $$l2;
export const pZ = $$i3;
export const y6 = $$s4;