import { assertNotNullish } from "../figma_app/465776";
import { c2 } from "../905/382883";
import { rXF, Z_n, y0x, J0O, JTp } from "../figma_app/763686";
import { dI } from "../905/805904";
import { YU } from "../figma_app/191804";
import { t } from "../905/303541";
import { TI } from "../905/713722";
import { E7 } from "../905/216495";
export function $$u6(e) {
  if ("MIXED" === e) return t("fullscreen.mixed");
  if (!e) return null;
  switch (e.resolvedType) {
    case rXF.FLOAT:
      return String(parseFloat(e.value.toFixed(2)));
    case rXF.BOOLEAN:
      return e.value ? t("variables.values.boolean.true") : t("variables.values.boolean.false");
    case rXF.COLOR:
      return TI.format(e.value);
    case rXF.STRING:
      if (e.type === Z_n.DATE) return null;
      return e.value;
    case rXF.IMAGE:
    case rXF.JS_RUNTIME_ALIAS:
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
      return YU(e.value.colorValue) === YU(t.value.colorValue);
    default:
      return c2(e, t);
  }
}
export function $$_10(e) {
  switch (e) {
    case rXF.BOOLEAN:
      return Z_n.BOOLEAN;
    case rXF.FLOAT:
      return Z_n.FLOAT;
    case rXF.STRING:
      return Z_n.STRING;
    case rXF.COLOR:
      return Z_n.COLOR;
    case rXF.MAP:
      return Z_n.MAP;
    case rXF.SYMBOL_ID:
      return Z_n.SYMBOL_ID;
  }
}
export function $$h11(e) {
  return "LOCAL" === e.subscriptionStatus && e.isSoftDeleted;
}
export let $$m2 = {
  CORNER_RADIUS: [rXF.FLOAT],
  STACK_SPACING: [rXF.FLOAT],
  STACK_PADDING_LEFT: [rXF.FLOAT],
  STACK_PADDING_TOP: [rXF.FLOAT],
  STACK_PADDING_RIGHT: [rXF.FLOAT],
  STACK_PADDING_BOTTOM: [rXF.FLOAT],
  TEXT_DATA: [rXF.STRING, rXF.FLOAT],
  WIDTH: [rXF.FLOAT],
  HEIGHT: [rXF.FLOAT],
  RECTANGLE_TOP_LEFT_CORNER_RADIUS: [rXF.FLOAT],
  RECTANGLE_TOP_RIGHT_CORNER_RADIUS: [rXF.FLOAT],
  RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS: [rXF.FLOAT],
  RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS: [rXF.FLOAT],
  STACK_COUNTER_SPACING: [rXF.FLOAT],
  MIN_WIDTH: [rXF.FLOAT],
  MAX_WIDTH: [rXF.FLOAT],
  MIN_HEIGHT: [rXF.FLOAT],
  MAX_HEIGHT: [rXF.FLOAT],
  STROKE_WEIGHT: [rXF.FLOAT],
  OPACITY: [rXF.FLOAT],
  BORDER_TOP_WEIGHT: [rXF.FLOAT],
  BORDER_BOTTOM_WEIGHT: [rXF.FLOAT],
  BORDER_LEFT_WEIGHT: [rXF.FLOAT],
  BORDER_RIGHT_WEIGHT: [rXF.FLOAT],
  MISSING: [],
  PARAGRAPH_SPACING: [rXF.FLOAT],
  PARAGRAPH_INDENT: [rXF.FLOAT],
  VISIBLE: [rXF.BOOLEAN],
  VARIANT_PROPERTIES: [rXF.SYMBOL_ID],
  OVERRIDDEN_SYMBOL_ID: [rXF.SYMBOL_ID],
  FONT_FAMILY: [rXF.STRING],
  FONT_STYLE: [rXF.STRING, rXF.FLOAT],
  FONT_VARIATIONS: [rXF.FLOAT],
  FONT_SIZE: [rXF.FLOAT],
  LETTER_SPACING: [rXF.FLOAT],
  LINE_HEIGHT: [rXF.FLOAT],
  HYPERLINK: [rXF.LINK],
  CMS_SERIALIZED_RICH_TEXT_DATA: [rXF.JS_RUNTIME_ALIAS],
  SLOT_CONTENT_ID: [rXF.SLOT_CONTENT_ID],
  GRID_ROW_GAP: [rXF.FLOAT],
  GRID_COLUMN_GAP: [rXF.FLOAT]
};
export function $$g5({
  variable: e,
  variableDisplayName: t
}) {
  return e ? e.codeSyntax?.[y0x.WEB] ? e.codeSyntax[y0x.WEB] : `var(--${(t ?? e.name).replace(/[^a-zA-Z0-9-]/g, "")})` : "";
}
export function $$f8(e) {
  switch (e) {
    case rXF.BOOLEAN:
      return J0O.BOOL;
    case rXF.FLOAT:
      return J0O.NUMBER;
    case rXF.STRING:
    case rXF.TEXT_DATA:
      return J0O.TEXT;
    default:
      throw Error(`Unknown resolved type: ${e}`);
  }
}
export function $$E1(e) {
  switch (e) {
    case rXF.BOOLEAN:
      return "boolean";
    case rXF.FLOAT:
      return "number";
    case rXF.STRING:
      return "string";
    case rXF.COLOR:
      return "color";
    case rXF.MAP:
      return "map";
    case rXF.SYMBOL_ID:
      return "symbol_id";
    case rXF.FONT_STYLE:
      return "font_style";
    case rXF.TEXT_DATA:
      return "text_data";
    case rXF.IMAGE:
      return "image";
    case rXF.LINK:
      return "link";
    case rXF.JS_RUNTIME_ALIAS:
      return "js_runtime_alias";
    case rXF.SLOT_CONTENT_ID:
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
  let r = E7(t);
  if (r) {
    if ("dataType" in r && "ALIAS" === r.dataType && r.value?.alias) return dI(r.value?.alias);
    if ("type" in r) {
      if (r.type === Z_n.ALIAS) return r.value;
      if (r.type === Z_n.FONT_STYLE) return e(r.value.asFloat ?? r.value.asString ?? null);
      if (r?.type === Z_n.EXPRESSION && r.value.expressionFunction === JTp.STRINGIFY && 1 === r.value.expressionArguments.length) return e(r.value.expressionArguments[0]);
    }
  }
  return null;
};
export const NX = $$g5;
export const Oi = $$u6;
export const Pr = function e(t) {
  return {
    *[Symbol.iterator]() {
      if (yield t, t.type === Z_n.EXPRESSION) for (let r of t.value.expressionArguments) yield* e(r);else if (t.type === Z_n.MAP) for (let r of Object.values(t.value)) yield* e(r);
    }
  }[Symbol.iterator]();
};
export const WB = $$f8;
export const cn = $$y9;
export const e4 = $$_10;
export const eF = $$h11;
export const rY = $$p12;