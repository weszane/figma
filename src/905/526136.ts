import { L5V } from "../figma_app/763686";
import { UN } from "../905/700578";
export function $$a0(e, t, i) {
  switch (t) {
    case L5V.HEIGHT:
      return !0;
    case L5V.MIN_HEIGHT:
      return null !== e.minHeight;
    case L5V.MAX_HEIGHT:
      return null !== e.maxHeight;
    case L5V.WIDTH:
      return !0;
    case L5V.MIN_WIDTH:
      return null !== e.minWidth;
    case L5V.MAX_WIDTH:
      return null !== e.maxWidth;
    case L5V.CORNER_RADIUS:
      return e.rectangleBottomLeftCornerRadius > 0 || e.rectangleTopLeftCornerRadius > 0 || e.rectangleTopRightCornerRadius > 0 || e.rectangleBottomRightCornerRadius > 0;
    case L5V.STACK_MODE:
      return "NONE" !== e.stackMode;
    case L5V.STACK_ALIGNMENT:
    case L5V.STACK_SPACING:
      return "NONE" !== e.stackMode && e.isStack;
    case L5V.STACK_PADDING:
      return "NONE" !== e.stackMode;
    case L5V.TEXT_STYLE:
      return "TEXT" === e.type && null !== e.inheritedTextStyle;
    case L5V.FONT_FAMILY:
    case L5V.FONT_STYLE:
    case L5V.FONT_SIZE:
    case L5V.LINE_HEIGHT:
      return "TEXT" === e.type;
    case L5V.LETTER_SPACING:
      return "TEXT" === e.type && ("mixed" === e.letterSpacingOrMixed || "PERCENT" !== e.letterSpacingOrMixed.units || 0 !== e.letterSpacingOrMixed.value);
    case L5V.TEXT_ALIGN_HORIZONTAL:
      return "TEXT" === e.type && "LEFT" !== e.textAlignHorizontal;
    case L5V.FONT_WEIGHT:
      return "TEXT" === e.type;
    case L5V.FILL:
      return e.fills.filter(e => e.visible).length > 0;
    case L5V.STROKE:
    case L5V.STROKE_WIDTH:
      return e.strokePaints.data.filter(e => e.visible).length > 0;
    case L5V.EFFECT:
      return e.effects.filter(e => e.visible).length > 0;
    case L5V.OPACITY:
      return e.opacity < 1;
    case L5V.COMPONENT:
      if ("INSTANCE" !== e.type || !e.symbolId) return !1;
      return !!UN().get(e.symbolId);
    case L5V.GRID_ROW_GAP:
    case L5V.GRID_COLUMN_GAP:
    case L5V.GRID_ROW_COUNT:
    case L5V.GRID_COLUMN_COUNT:
      return !!e.isGrid;
    case L5V.GRID_ROW_ANCHOR_INDEX:
    case L5V.GRID_COLUMN_ANCHOR_INDEX:
    case L5V.GRID_ROW_SPAN:
    case L5V.GRID_COLUMN_SPAN:
      return !!e.isGridChild;
  }
}
export const J = $$a0;