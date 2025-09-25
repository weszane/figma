import { assertNotNullish } from "../figma_app/465776";
import { deepEqual } from "../905/382883";
import { VariableResolvedDataType, VariableDataType, PlatformType, ComponentPropType, OperationType } from "../figma_app/763686";
import { convertKiwiToVariableIdString } from "../905/805904";
import { colorToRgbaString } from "../figma_app/191804";
import { getI18nString } from "../905/303541";
import { formattedColorManipulator } from "../905/713722";
import { normalizeValue } from "../905/216495";
export function $$u6(e) {
  if ("MIXED" === e) return getI18nString("fullscreen.mixed");
  if (!e) return null;
  switch (e.resolvedType) {
    case VariableResolvedDataType.FLOAT:
      return String(parseFloat(e.value.toFixed(2)));
    case VariableResolvedDataType.BOOLEAN:
      return e.value ? getI18nString("variables.values.boolean.true") : getI18nString("variables.values.boolean.false");
    case VariableResolvedDataType.COLOR:
      return formattedColorManipulator.format(e.value);
    case VariableResolvedDataType.STRING:
      if (e.type === VariableDataType.DATE) return null;
      return e.value;
    case VariableResolvedDataType.IMAGE:
    case VariableResolvedDataType.JS_RUNTIME_ALIAS:
      return null;
    default:
      return JSON.stringify(e.value);
  }
}
export function $$p12(e, t) {
  if (e === t) return !0;
  if (!e || !e.dataType || !e.resolvedDataType || !e.value || !t || !t.dataType || !t.resolvedDataType || !t.value || e.dataType !== t.dataType || e.resolvedDataType !== t.resolvedDataType) return !1;
  switch (e.dataType) {
    case "BOOLEAN":
      return e.value.boolValue === t.value.boolValue;
    case "FLOAT":
      return e.value.floatValue === t.value.floatValue;
    case "STRING":
      return e.value.textValue === t.value.textValue;
    case "COLOR":
      assertNotNullish(e.value.colorValue);
      assertNotNullish(t.value.colorValue);
      return colorToRgbaString(e.value.colorValue) === colorToRgbaString(t.value.colorValue);
    default:
      return deepEqual(e, t);
  }
}
export function $$_10(e) {
  switch (e) {
    case VariableResolvedDataType.BOOLEAN:
      return VariableDataType.BOOLEAN;
    case VariableResolvedDataType.FLOAT:
      return VariableDataType.FLOAT;
    case VariableResolvedDataType.STRING:
      return VariableDataType.STRING;
    case VariableResolvedDataType.COLOR:
      return VariableDataType.COLOR;
    case VariableResolvedDataType.MAP:
      return VariableDataType.MAP;
    case VariableResolvedDataType.SYMBOL_ID:
      return VariableDataType.SYMBOL_ID;
  }
}
export function $$h11(e) {
  return "LOCAL" === e.subscriptionStatus && e.isSoftDeleted;
}
export let $$m2 = {
  CORNER_RADIUS: [VariableResolvedDataType.FLOAT],
  STACK_SPACING: [VariableResolvedDataType.FLOAT],
  STACK_PADDING_LEFT: [VariableResolvedDataType.FLOAT],
  STACK_PADDING_TOP: [VariableResolvedDataType.FLOAT],
  STACK_PADDING_RIGHT: [VariableResolvedDataType.FLOAT],
  STACK_PADDING_BOTTOM: [VariableResolvedDataType.FLOAT],
  TEXT_DATA: [VariableResolvedDataType.STRING, VariableResolvedDataType.FLOAT],
  WIDTH: [VariableResolvedDataType.FLOAT],
  HEIGHT: [VariableResolvedDataType.FLOAT],
  RECTANGLE_TOP_LEFT_CORNER_RADIUS: [VariableResolvedDataType.FLOAT],
  RECTANGLE_TOP_RIGHT_CORNER_RADIUS: [VariableResolvedDataType.FLOAT],
  RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS: [VariableResolvedDataType.FLOAT],
  RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS: [VariableResolvedDataType.FLOAT],
  STACK_COUNTER_SPACING: [VariableResolvedDataType.FLOAT],
  MIN_WIDTH: [VariableResolvedDataType.FLOAT],
  MAX_WIDTH: [VariableResolvedDataType.FLOAT],
  MIN_HEIGHT: [VariableResolvedDataType.FLOAT],
  MAX_HEIGHT: [VariableResolvedDataType.FLOAT],
  STROKE_WEIGHT: [VariableResolvedDataType.FLOAT],
  OPACITY: [VariableResolvedDataType.FLOAT],
  BORDER_TOP_WEIGHT: [VariableResolvedDataType.FLOAT],
  BORDER_BOTTOM_WEIGHT: [VariableResolvedDataType.FLOAT],
  BORDER_LEFT_WEIGHT: [VariableResolvedDataType.FLOAT],
  BORDER_RIGHT_WEIGHT: [VariableResolvedDataType.FLOAT],
  MISSING: [],
  PARAGRAPH_SPACING: [VariableResolvedDataType.FLOAT],
  PARAGRAPH_INDENT: [VariableResolvedDataType.FLOAT],
  VISIBLE: [VariableResolvedDataType.BOOLEAN],
  VARIANT_PROPERTIES: [VariableResolvedDataType.SYMBOL_ID],
  OVERRIDDEN_SYMBOL_ID: [VariableResolvedDataType.SYMBOL_ID],
  FONT_FAMILY: [VariableResolvedDataType.STRING],
  FONT_STYLE: [VariableResolvedDataType.STRING, VariableResolvedDataType.FLOAT],
  FONT_VARIATIONS: [VariableResolvedDataType.FLOAT],
  FONT_SIZE: [VariableResolvedDataType.FLOAT],
  LETTER_SPACING: [VariableResolvedDataType.FLOAT],
  LINE_HEIGHT: [VariableResolvedDataType.FLOAT],
  HYPERLINK: [VariableResolvedDataType.LINK],
  CMS_SERIALIZED_RICH_TEXT_DATA: [VariableResolvedDataType.JS_RUNTIME_ALIAS],
  SLOT_CONTENT_ID: [VariableResolvedDataType.SLOT_CONTENT_ID],
  GRID_ROW_GAP: [VariableResolvedDataType.FLOAT],
  GRID_COLUMN_GAP: [VariableResolvedDataType.FLOAT]
};
export function $$g5({
  variable: e,
  variableDisplayName: t
}) {
  return e ? e.codeSyntax?.[PlatformType.WEB] ? e.codeSyntax[PlatformType.WEB] : `var(--${(t ?? e.name).replace(/[^a-zA-Z0-9-]/g, "")})` : "";
}
export function $$f8(e) {
  switch (e) {
    case VariableResolvedDataType.BOOLEAN:
      return ComponentPropType.BOOL;
    case VariableResolvedDataType.FLOAT:
      return ComponentPropType.NUMBER;
    case VariableResolvedDataType.STRING:
    case VariableResolvedDataType.TEXT_DATA:
      return ComponentPropType.TEXT;
    default:
      throw Error(`Unknown resolved type: ${e}`);
  }
}
export function $$E1(e) {
  switch (e) {
    case VariableResolvedDataType.BOOLEAN:
      return "boolean";
    case VariableResolvedDataType.FLOAT:
      return "number";
    case VariableResolvedDataType.STRING:
      return "string";
    case VariableResolvedDataType.COLOR:
      return "color";
    case VariableResolvedDataType.MAP:
      return "map";
    case VariableResolvedDataType.SYMBOL_ID:
      return "symbol_id";
    case VariableResolvedDataType.FONT_STYLE:
      return "font_style";
    case VariableResolvedDataType.TEXT_DATA:
      return "text_data";
    case VariableResolvedDataType.IMAGE:
      return "image";
    case VariableResolvedDataType.LINK:
      return "link";
    case VariableResolvedDataType.JS_RUNTIME_ALIAS:
      return "js_runtime_alias";
    case VariableResolvedDataType.SLOT_CONTENT_ID:
      return "slot_content_id";
  }
}
export function $$y9(e) {
  return "SUBSCRIBED" === e.subscriptionStatus || "LIBRARY" === e.subscriptionStatus ? e.key : e.keyForPublish;
}
export function $$b3(e) {
  return e.isExtension ? e.rootVariableSetKey : $$y9(e);
}
export function $$T0(e, t) {
  return e.variableSetId === t;
}
export const CS = $$T0;
export const Hr = $$E1;
export const Io = $$m2;
export const Ip = $$b3;
export const MH = function e(t) {
  let r = normalizeValue(t);
  if (r) {
    if ("dataType" in r && "ALIAS" === r.dataType && r.value?.alias) return convertKiwiToVariableIdString(r.value?.alias);
    if ("type" in r) {
      if (r.type === VariableDataType.ALIAS) return r.value;
      if (r.type === VariableDataType.FONT_STYLE) return e(r.value.asFloat ?? r.value.asString ?? null);
      if (r?.type === VariableDataType.EXPRESSION && r.value.expressionFunction === OperationType.STRINGIFY && 1 === r.value.expressionArguments.length) return e(r.value.expressionArguments[0]);
    }
  }
  return null;
};
export const NX = $$g5;
export const Oi = $$u6;
export const Pr = function e(t) {
  return {
    *[Symbol.iterator]() {
      if (yield t, t.type === VariableDataType.EXPRESSION) for (let r of t.value.expressionArguments) yield* e(r);else if (t.type === VariableDataType.MAP) for (let r of Object.values(t.value)) yield* e(r);
    }
  }[Symbol.iterator]();
};
export const WB = $$f8;
export const cn = $$y9;
export const e4 = $$_10;
export const eF = $$h11;
export const rY = $$p12;