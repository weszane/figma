import { NodePropertyType } from "../figma_app/763686";
import { getSingletonSceneGraph } from "../905/700578";
export function $$a0(e, t, i) {
  switch (t) {
    case NodePropertyType.HEIGHT:
      return !0;
    case NodePropertyType.MIN_HEIGHT:
      return null !== e.minHeight;
    case NodePropertyType.MAX_HEIGHT:
      return null !== e.maxHeight;
    case NodePropertyType.WIDTH:
      return !0;
    case NodePropertyType.MIN_WIDTH:
      return null !== e.minWidth;
    case NodePropertyType.MAX_WIDTH:
      return null !== e.maxWidth;
    case NodePropertyType.CORNER_RADIUS:
      return e.rectangleBottomLeftCornerRadius > 0 || e.rectangleTopLeftCornerRadius > 0 || e.rectangleTopRightCornerRadius > 0 || e.rectangleBottomRightCornerRadius > 0;
    case NodePropertyType.STACK_MODE:
      return "NONE" !== e.stackMode;
    case NodePropertyType.STACK_ALIGNMENT:
    case NodePropertyType.STACK_SPACING:
      return "NONE" !== e.stackMode && e.isStack;
    case NodePropertyType.STACK_PADDING:
      return "NONE" !== e.stackMode;
    case NodePropertyType.TEXT_STYLE:
      return "TEXT" === e.type && null !== e.inheritedTextStyle;
    case NodePropertyType.FONT_FAMILY:
    case NodePropertyType.FONT_STYLE:
    case NodePropertyType.FONT_SIZE:
    case NodePropertyType.LINE_HEIGHT:
      return "TEXT" === e.type;
    case NodePropertyType.LETTER_SPACING:
      return "TEXT" === e.type && ("mixed" === e.letterSpacingOrMixed || "PERCENT" !== e.letterSpacingOrMixed.units || 0 !== e.letterSpacingOrMixed.value);
    case NodePropertyType.TEXT_ALIGN_HORIZONTAL:
      return "TEXT" === e.type && "LEFT" !== e.textAlignHorizontal;
    case NodePropertyType.FONT_WEIGHT:
      return "TEXT" === e.type;
    case NodePropertyType.FILL:
      return e.fills.filter(e => e.visible).length > 0;
    case NodePropertyType.STROKE:
    case NodePropertyType.STROKE_WIDTH:
      return e.strokePaints.data.filter(e => e.visible).length > 0;
    case NodePropertyType.EFFECT:
      return e.effects.filter(e => e.visible).length > 0;
    case NodePropertyType.OPACITY:
      return e.opacity < 1;
    case NodePropertyType.COMPONENT:
      if ("INSTANCE" !== e.type || !e.symbolId) return !1;
      return !!getSingletonSceneGraph().get(e.symbolId);
    case NodePropertyType.GRID_ROW_GAP:
    case NodePropertyType.GRID_COLUMN_GAP:
    case NodePropertyType.GRID_ROW_COUNT:
    case NodePropertyType.GRID_COLUMN_COUNT:
      return !!e.isGrid;
    case NodePropertyType.GRID_ROW_ANCHOR_INDEX:
    case NodePropertyType.GRID_COLUMN_ANCHOR_INDEX:
    case NodePropertyType.GRID_ROW_SPAN:
    case NodePropertyType.GRID_COLUMN_SPAN:
      return !!e.isGridChild;
  }
}
export const J = $$a0;