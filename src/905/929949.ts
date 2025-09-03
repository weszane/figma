import { ExtendedValueType, ValueType } from '../905/880730';
import { VariablesBindings } from '../figma_app/13528';
import { throwTypeError } from '../figma_app/465776';
import { allEqual } from '../figma_app/656233';

let $$o13 = [ValueType.COLOR, ValueType.FLOAT, ValueType.STRING, ValueType.BOOLEAN] as const;
let $$l5 = ['fontFamily', 'fontSize', 'fontStyle', 'fontWeight', 'letterSpacing', 'lineHeight', 'paragraphSpacing', 'paragraphIndent'] as const;
let $$d4 = ['fontFamily', 'fontSize', 'fontStyle', 'fontWeight', 'letterSpacing', 'lineHeight'] as const;
let $$c12 = ['height', 'width', 'characters', 'itemSpacing', 'paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'visible', 'cornerRadius', 'topLeftRadius', 'topRightRadius', 'bottomLeftRadius', 'bottomRightRadius', 'strokeWeight', 'strokeTopWeight', 'strokeBottomWeight', 'strokeLeftWeight', 'strokeRightWeight', 'minWidth', 'maxWidth', 'minHeight', 'maxHeight', 'counterAxisSpacing', 'opacity', 'gridRowGap', 'gridColumnGap', ...$$l5] as const;
let $$u2 = ['color'] as const;
let $$p9 = ['color', 'radius', 'spread', 'offsetX', 'offsetY'] as const;
let $$m0 = ['radius'] as const;
let $$h6 = ['sectionSize'] as const;
let $$g1 = ['sectionSize', 'count', 'offset', 'gutterSize'] as const;
let $$f7 = ['sectionSize', 'count', 'gutterSize'] as const;
let $$_11 = ['count', 'offset', 'gutterSize'] as const;
let $$A10 = ['value'] as const;
export function $$y8(e, t) {
  let i = function (e, t) {
    switch (e) {
      case ValueType.BOOLEAN:
        return typeof t == 'boolean' ? t : null;
      case ValueType.STRING:
        return typeof t == 'string' ? t : null;
      case ValueType.FLOAT:
        if (Array.isArray(t)) return t.every(e => typeof e == 'number') && allEqual(t) ? t[0] : null;
        return typeof t == 'number' ? t : null;
      case ValueType.COLOR:
      case ValueType.MAP:
        return typeof t == 'object' ? t : null;
      case ValueType.SYMBOL_ID:
        return typeof t == 'string' ? t : null;
      case ValueType.FONT_STYLE:
      case ValueType.TEXT_DATA:
      case ValueType.IMAGE:
      case ValueType.LINK:
      case ValueType.JS_RUNTIME_ALIAS:
      case ValueType.SLOT_CONTENT_ID:
        return typeof t == 'object' ? t : null;
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
        value: i ?? VariablesBindings?.getDefaultStringVariableValue() ?? ''
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
        value: i ?? 'SymbolId:-1:-1'
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
      throwTypeError(e, 'Unknown VariableResolvedDataType');
  }
}
export function $$b3(e) {
  switch (e) {
    case ValueType.BOOLEAN:
      return 'BOOLEAN';
    case ValueType.COLOR:
      return 'COLOR';
    case ValueType.FLOAT:
      return 'FLOAT';
    case ValueType.STRING:
      return 'STRING';
    case ValueType.SYMBOL_ID:
      return 'SYMBOL_ID';
    case ValueType.MAP:
      return 'MAP';
    case ValueType.FONT_STYLE:
      return 'FONT_STYLE';
    case ValueType.TEXT_DATA:
      return 'TEXT_DATA';
    case ValueType.IMAGE:
      return 'IMAGE';
    case ValueType.LINK:
      return 'LINK';
    case ValueType.JS_RUNTIME_ALIAS:
      return 'JS_RUNTIME_ALIAS';
    case ValueType.SLOT_CONTENT_ID:
      return 'SLOT_CONTENT_ID';
    default:
      throwTypeError(e);
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
