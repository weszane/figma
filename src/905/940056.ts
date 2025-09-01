import { colorToHex } from "../905/436288";
import { g } from "../905/880308";
import { C } from "../905/887158";
import { p } from "../figma_app/979374";
export class $$o0 {
  constructor({
    ruleId: e,
    guid: t,
    detectionContext: i,
    nodeType: n
  }) {
    this.ruleId = e;
    this.guid = t;
    this.detectionContext = i;
    this.nodeType = n;
    this.violationId = g();
  }
  get groupKey() {
    if (!this.detectionContext) return this.ruleId;
    let {
      ruleId,
      detectionContext
    } = this;
    if ((ruleId === C.REQUIRE_FILL_COLOR_VARIABLES || ruleId === C.REQUIRE_STROKE_COLOR_VARIABLES) && "color" in detectionContext) {
      let {
        color,
        opacity
      } = detectionContext;
      let a = this.nodeType;
      ["TEXT", "FRAME"].includes(this.nodeType) || (a = "SHAPE");
      return `${ruleId}-${a}-${colorToHex(color)}-${opacity}`;
    }
    if (ruleId === C.REQUIRE_TEXT_STYLES && "fontSize" in detectionContext) {
      let {
        fontFamily,
        fontSize,
        lineHeight
      } = detectionContext;
      return `${ruleId}-${fontFamily}-${fontSize}-${lineHeight}`;
    }
    if ((ruleId === C.REQUIRE_BOTTOM_LEFT_CORNER_RADIUS_VARIABLES || ruleId === C.REQUIRE_BOTTOM_RIGHT_CORNER_RADIUS_VARIABLES || ruleId === C.REQUIRE_TOP_LEFT_CORNER_RADIUS_VARIABLES || ruleId === C.REQUIRE_TOP_RIGHT_CORNER_RADIUS_VARIABLES) && "numericValue" in detectionContext) {
      let {
        numericValue
      } = detectionContext;
      return `REQUIRE_CORNER_RADIUS_VARIABLES-${numericValue}`;
    }
    if ((ruleId === C.REQUIRE_HORIZONTAL_SPACING_VARIABLES || ruleId === C.REQUIRE_GRID_COLUMN_GAP_VARIABLES) && "numericValue" in detectionContext) {
      let {
        numericValue
      } = detectionContext;
      return `REQUIRE_HORIZONTAL_SPACING_VARIABLES-${numericValue}`;
    }
    if ((ruleId === C.REQUIRE_VERTICAL_SPACING_VARIABLES || ruleId === C.REQUIRE_GRID_ROW_GAP_VARIABLES) && "numericValue" in detectionContext) {
      let {
        numericValue
      } = detectionContext;
      return `REQUIRE_VERTICAL_SPACING_VARIABLES-${numericValue}`;
    }
    if ((ruleId === C.REQUIRE_TOP_PADDING_VARIABLES || ruleId === C.REQUIRE_BOTTOM_PADDING_VARIABLES || ruleId === C.REQUIRE_LEFT_PADDING_VARIABLES || ruleId === C.REQUIRE_RIGHT_PADDING_VARIABLES) && "numericValue" in detectionContext) {
      let {
        numericValue
      } = detectionContext;
      return `REQUIRE_PADDING_VARIABLES-${numericValue}`;
    }
    if (ruleId === C.TEXT_BACKGROUND_CONTRAST_AA && "fillColor" in detectionContext && "backgroundColor" in detectionContext) {
      let {
        backgroundColor,
        fillColor,
        fillOpacity
      } = detectionContext;
      return `${ruleId}-${colorToHex(fillColor)}-${fillOpacity}-${colorToHex(backgroundColor)}`;
    }
    if (ruleId === C.REQUIRE_ASSETS_FROM_SELECTED_LIBRARIES && "assetType" in detectionContext) return this.getGroupKeyForAssetFromOutsideLibrary();
    let i = Object.keys(detectionContext).sort();
    return `${JSON.stringify(detectionContext, i)}`;
  }
  getGroupKeyForAssetFromOutsideLibrary() {
    let {
      ruleId,
      detectionContext
    } = this;
    if (ruleId !== C.REQUIRE_ASSETS_FROM_SELECTED_LIBRARIES || !("assetType" in detectionContext)) return "";
    let {
      assetId,
      libraryKey,
      assetType
    } = detectionContext;
    let o = p.includes(assetType) ? this.nodeType : "";
    ["TEXT", "FRAME"].includes(o) || (o = "SHAPE");
    let l = assetType;
    ["RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS", "RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS", "RECTANGLE_TOP_LEFT_CORNER_RADIUS", "RECTANGLE_TOP_RIGHT_CORNER_RADIUS"].includes(assetType) ? l = "CORNER_RADIUS" : ["STACK_PADDING_TOP", "STACK_PADDING_BOTTOM", "STACK_PADDING_LEFT", "STACK_PADDING_RIGHT"].includes(assetType) && (l = "STACK_PADDING");
    return `${ruleId}-${libraryKey}-${o}-${l}-${assetId}`;
  }
  static createViolationList({
    ruleId: e,
    guid: t,
    detectionContext: i,
    nodeType: n
  }) {
    let r = [];
    for (let a of i) r.push(new $$o0({
      ruleId: e,
      guid: t,
      detectionContext: a,
      nodeType: n
    }));
    return r;
  }
}
export const U = $$o0;