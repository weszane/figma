import { xb } from "../figma_app/465776";
import { allEqual } from "../figma_app/656233";
import { ValueType, ExtendedValueType } from "../905/880730";
import { VariablesBindings } from "../figma_app/13528";
let $$o13 = [ValueType.COLOR, ValueType.FLOAT, ValueType.STRING, ValueType.BOOLEAN];
let $$l5 = ["fontFamily", "fontSize", "fontStyle", "fontWeight", "letterSpacing", "lineHeight", "paragraphSpacing", "paragraphIndent"];
let $$d4 = ["fontFamily", "fontSize", "fontStyle", "fontWeight", "letterSpacing", "lineHeight"];
let $$c12 = ["height", "width", "characters", "itemSpacing", "paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "visible", "cornerRadius", "topLeftRadius", "topRightRadius", "bottomLeftRadius", "bottomRightRadius", "strokeWeight", "strokeTopWeight", "strokeBottomWeight", "strokeLeftWeight", "strokeRightWeight", "minWidth", "maxWidth", "minHeight", "maxHeight", "counterAxisSpacing", "opacity", "gridRowGap", "gridColumnGap", ...$$l5];
let $$u2 = ["color"];
let $$p9 = ["color", "radius", "spread", "offsetX", "offsetY"];
let $$m0 = ["radius"];
let $$h6 = ["sectionSize"];
let $$g1 = ["sectionSize", "count", "offset", "gutterSize"];
let $$f7 = ["sectionSize", "count", "gutterSize"];
let $$_11 = ["count", "offset", "gutterSize"];
let $$A10 = ["value"];
export function $$y8(e, t) {
  let i = function (e, t) {
    switch (e) {
      case ValueType.BOOLEAN:
        return "boolean" == typeof t ? t : null;
      case ValueType.STRING:
        return "string" == typeof t ? t : null;
      case ValueType.FLOAT:
        if (Array.isArray(t)) return t.every(e => "number" == typeof e) && allEqual(t) ? t[0] : null;
        return "number" == typeof t ? t : null;
      case ValueType.COLOR:
      case ValueType.MAP:
        return "object" == typeof t ? t : null;
      case ValueType.SYMBOL_ID:
        return "string" == typeof t ? t : null;
      case ValueType.FONT_STYLE:
      case ValueType.TEXT_DATA:
      case ValueType.IMAGE:
      case ValueType.LINK:
      case ValueType.JS_RUNTIME_ALIAS:
      case ValueType.SLOT_CONTENT_ID:
        return "object" == typeof t ? t : null;
    }
  }(e, t);
  switch (e) {
    case ValueType.BOOLEAN:
      return {
        resolvedType: e,
        type: ExtendedValueType.BOOLEAN,
        value: i ?? !1
      };
    case ValueType.STRING:
      return {
        resolvedType: e,
        type: ExtendedValueType.STRING,
        value: i ?? VariablesBindings?.getDefaultStringVariableValue() ?? ""
      };
    case ValueType.FLOAT:
      return {
        resolvedType: e,
        type: ExtendedValueType.FLOAT,
        value: i ?? 0
      };
    case ValueType.COLOR:
      return {
        resolvedType: e,
        type: ExtendedValueType.COLOR,
        value: i ?? {
          r: 1,
          g: 1,
          b: 1,
          a: 1
        }
      };
    case ValueType.MAP:
      return {
        resolvedType: e,
        type: ExtendedValueType.MAP,
        value: i ?? {}
      };
    case ValueType.SYMBOL_ID:
      return {
        resolvedType: e,
        type: ExtendedValueType.SYMBOL_ID,
        value: i ?? "SymbolId:-1:-1"
      };
    case ValueType.FONT_STYLE:
      return {
        resolvedType: e,
        type: ExtendedValueType.FONT_STYLE,
        value: i ?? {}
      };
    case ValueType.TEXT_DATA:
      return {
        resolvedType: e,
        type: ExtendedValueType.TEXT_DATA,
        value: i ?? {}
      };
    case ValueType.JS_RUNTIME_ALIAS:
      return {
        resolvedType: ValueType.STRING,
        type: ExtendedValueType.JS_RUNTIME_ALIAS,
        value: i ?? {}
      };
    case ValueType.IMAGE:
      return {
        resolvedType: e,
        type: ExtendedValueType.IMAGE,
        value: i ?? {}
      };
    case ValueType.LINK:
      return {
        resolvedType: e,
        type: ExtendedValueType.LINK,
        value: i ?? {}
      };
    case ValueType.SLOT_CONTENT_ID:
      return {
        resolvedType: e,
        type: ExtendedValueType.SLOT_CONTENT_ID,
        value: i ?? {}
      };
    default:
      xb(e, "Unknown VariableResolvedDataType");
  }
}
export function $$b3(e) {
  switch (e) {
    case ValueType.BOOLEAN:
      return "BOOLEAN";
    case ValueType.COLOR:
      return "COLOR";
    case ValueType.FLOAT:
      return "FLOAT";
    case ValueType.STRING:
      return "STRING";
    case ValueType.SYMBOL_ID:
      return "SYMBOL_ID";
    case ValueType.MAP:
      return "MAP";
    case ValueType.FONT_STYLE:
      return "FONT_STYLE";
    case ValueType.TEXT_DATA:
      return "TEXT_DATA";
    case ValueType.IMAGE:
      return "IMAGE";
    case ValueType.LINK:
      return "LINK";
    case ValueType.JS_RUNTIME_ALIAS:
      return "JS_RUNTIME_ALIAS";
    case ValueType.SLOT_CONTENT_ID:
      return "SLOT_CONTENT_ID";
    default:
      xb(e);
  }
}
export const HC = $$m0;
export const JE = $$g1;
export const Lk = $$u2;
export const Lv = $$b3;
export const MN = $$d4;
export const SE = $$l5;
export const Vw = $$h6;
export const W$ = $$f7;
export const WI = $$y8;
export const Wh = $$p9;
export const fH = $$A10;
export const gO = $$_11;
export const hp = $$c12;
export const ts = $$o13;