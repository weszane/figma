import { VariableDataType, VariableResolvedDataType } from '../905/880730'
import { VariablesBindings } from '../figma_app/13528'
import { throwTypeError } from '../figma_app/465776'
import { allEqual } from '../figma_app/656233'

let $$o13 = [VariableResolvedDataType.COLOR, VariableResolvedDataType.FLOAT, VariableResolvedDataType.STRING, VariableResolvedDataType.BOOLEAN] as const
let $$l5 = ['fontFamily', 'fontSize', 'fontStyle', 'fontWeight', 'letterSpacing', 'lineHeight', 'paragraphSpacing', 'paragraphIndent'] as const
let $$d4 = ['fontFamily', 'fontSize', 'fontStyle', 'fontWeight', 'letterSpacing', 'lineHeight'] as const
let $$c12 = ['height', 'width', 'characters', 'itemSpacing', 'paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'visible', 'cornerRadius', 'topLeftRadius', 'topRightRadius', 'bottomLeftRadius', 'bottomRightRadius', 'strokeWeight', 'strokeTopWeight', 'strokeBottomWeight', 'strokeLeftWeight', 'strokeRightWeight', 'minWidth', 'maxWidth', 'minHeight', 'maxHeight', 'counterAxisSpacing', 'opacity', 'gridRowGap', 'gridColumnGap', ...$$l5] as const
let $$u2 = ['color'] as const
let $$p9 = ['color', 'radius', 'spread', 'offsetX', 'offsetY'] as const
let $$m0 = ['radius'] as const
let $$h6 = ['sectionSize'] as const
let $$g1 = ['sectionSize', 'count', 'offset', 'gutterSize'] as const
let $$f7 = ['sectionSize', 'count', 'gutterSize'] as const
let $$_11 = ['count', 'offset', 'gutterSize'] as const
let $$A10 = ['value'] as const
export function $$y8(e, t) {
  let i = (function (e, t) {
    switch (e) {
      case VariableResolvedDataType.BOOLEAN:
        return typeof t == 'boolean' ? t : null
      case VariableResolvedDataType.STRING:
        return typeof t == 'string' ? t : null
      case VariableResolvedDataType.FLOAT:
        if (Array.isArray(t))
          return t.every(e => typeof e == 'number') && allEqual(t) ? t[0] : null
        return typeof t == 'number' ? t : null
      case VariableResolvedDataType.COLOR:
      case VariableResolvedDataType.MAP:
        return typeof t == 'object' ? t : null
      case VariableResolvedDataType.SYMBOL_ID:
        return typeof t == 'string' ? t : null
      case VariableResolvedDataType.FONT_STYLE:
      case VariableResolvedDataType.TEXT_DATA:
      case VariableResolvedDataType.IMAGE:
      case VariableResolvedDataType.LINK:
      case VariableResolvedDataType.JS_RUNTIME_ALIAS:
      case VariableResolvedDataType.SLOT_CONTENT_ID:
        return typeof t == 'object' ? t : null
    }
  }(e, t))
  switch (e) {
    case VariableResolvedDataType.BOOLEAN:
      return {
        resolvedType: e,
        type: VariableDataType.BOOLEAN,
        value: i ?? !1,
      }
    case VariableResolvedDataType.STRING:
      return {
        resolvedType: e,
        type: VariableDataType.STRING,
        value: i ?? VariablesBindings?.getDefaultStringVariableValue() ?? '',
      }
    case VariableResolvedDataType.FLOAT:
      return {
        resolvedType: e,
        type: VariableDataType.FLOAT,
        value: i ?? 0,
      }
    case VariableResolvedDataType.COLOR:
      return {
        resolvedType: e,
        type: VariableDataType.COLOR,
        value: i ?? {
          r: 1,
          g: 1,
          b: 1,
          a: 1,
        },
      }
    case VariableResolvedDataType.MAP:
      return {
        resolvedType: e,
        type: VariableDataType.MAP,
        value: i ?? {},
      }
    case VariableResolvedDataType.SYMBOL_ID:
      return {
        resolvedType: e,
        type: VariableDataType.SYMBOL_ID,
        value: i ?? 'SymbolId:-1:-1',
      }
    case VariableResolvedDataType.FONT_STYLE:
      return {
        resolvedType: e,
        type: VariableDataType.FONT_STYLE,
        value: i ?? {},
      }
    case VariableResolvedDataType.TEXT_DATA:
      return {
        resolvedType: e,
        type: VariableDataType.TEXT_DATA,
        value: i ?? {},
      }
    case VariableResolvedDataType.JS_RUNTIME_ALIAS:
      return {
        resolvedType: VariableResolvedDataType.STRING,
        type: VariableDataType.JS_RUNTIME_ALIAS,
        value: i ?? {},
      }
    case VariableResolvedDataType.IMAGE:
      return {
        resolvedType: e,
        type: VariableDataType.IMAGE,
        value: i ?? {},
      }
    case VariableResolvedDataType.LINK:
      return {
        resolvedType: e,
        type: VariableDataType.LINK,
        value: i ?? {},
      }
    case VariableResolvedDataType.SLOT_CONTENT_ID:
      return {
        resolvedType: e,
        type: VariableDataType.SLOT_CONTENT_ID,
        value: i ?? {},
      }
    default:
      throwTypeError(e, 'Unknown VariableResolvedDataType')
  }
}
export function $$b3(e) {
  switch (e) {
    case VariableResolvedDataType.BOOLEAN:
      return 'BOOLEAN'
    case VariableResolvedDataType.COLOR:
      return 'COLOR'
    case VariableResolvedDataType.FLOAT:
      return 'FLOAT'
    case VariableResolvedDataType.STRING:
      return 'STRING'
    case VariableResolvedDataType.SYMBOL_ID:
      return 'SYMBOL_ID'
    case VariableResolvedDataType.MAP:
      return 'MAP'
    case VariableResolvedDataType.FONT_STYLE:
      return 'FONT_STYLE'
    case VariableResolvedDataType.TEXT_DATA:
      return 'TEXT_DATA'
    case VariableResolvedDataType.IMAGE:
      return 'IMAGE'
    case VariableResolvedDataType.LINK:
      return 'LINK'
    case VariableResolvedDataType.JS_RUNTIME_ALIAS:
      return 'JS_RUNTIME_ALIAS'
    case VariableResolvedDataType.SLOT_CONTENT_ID:
      return 'SLOT_CONTENT_ID'
    default:
      throwTypeError(e)
  }
}
export const HC = $$m0
export const JE = $$g1
export const Lk = $$u2
export const Lv = $$b3
export const MN = $$d4
export const SE = $$l5
export const Vw = $$h6
export const W$ = $$f7
export const WI = $$y8
export const Wh = $$p9
export const fH = $$A10
export const gO = $$_11
export const hp = $$c12
export const ts = $$o13
