import { normalizeValue } from '../905/216495';
import { Z } from '../905/442873';
import { convertStringToKiwi } from '../905/537777';
import { C } from '../905/887158';
import { PropertyScope, LinterCppBindings, VariableResolvedDataType } from '../figma_app/763686';
export function $$l1({
  ruleId: e,
  nodeType: t,
  assetType: i
}) {
  let r = function (e) {
    if (!e) return [PropertyScope.ALL_FILLS, PropertyScope.FRAME_FILL, PropertyScope.TEXT_FILL, PropertyScope.SHAPE_FILL];
    switch (e) {
      case 'FRAME':
        return [PropertyScope.ALL_FILLS, PropertyScope.FRAME_FILL];
      case 'TEXT':
        return [PropertyScope.ALL_FILLS, PropertyScope.TEXT_FILL];
      default:
        return [PropertyScope.ALL_FILLS, PropertyScope.SHAPE_FILL];
    }
  }(t);
  let s = [PropertyScope.STROKE];
  switch (e) {
    case C.REQUIRE_ASSETS_FROM_SELECTED_LIBRARIES:
      switch (i) {
        case 'FILL':
          return r;
        case 'STROKE':
          return s;
        case 'RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS':
        case 'RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS':
        case 'RECTANGLE_TOP_LEFT_CORNER_RADIUS':
        case 'RECTANGLE_TOP_RIGHT_CORNER_RADIUS':
          return [PropertyScope.CORNER_RADIUS];
        case 'STACK_SPACING_HORIZONTAL':
        case 'STACK_SPACING_VERTICAL':
        case 'STACK_PADDING_TOP':
        case 'STACK_PADDING_BOTTOM':
        case 'STACK_PADDING_LEFT':
        case 'STACK_PADDING_RIGHT':
          return [PropertyScope.GAP];
        default:
          return [];
      }
    case C.REQUIRE_FILL_COLOR_VARIABLES:
      return r;
    case C.REQUIRE_STROKE_COLOR_VARIABLES:
      return s;
    case C.TEXT_BACKGROUND_CONTRAST_AA:
      return [PropertyScope.TEXT_FILL];
    case C.REQUIRE_HORIZONTAL_SPACING_VARIABLES:
    case C.REQUIRE_VERTICAL_SPACING_VARIABLES:
    case C.REQUIRE_TOP_PADDING_VARIABLES:
    case C.REQUIRE_BOTTOM_PADDING_VARIABLES:
    case C.REQUIRE_LEFT_PADDING_VARIABLES:
    case C.REQUIRE_RIGHT_PADDING_VARIABLES:
    case C.REQUIRE_GRID_ROW_GAP_VARIABLES:
    case C.REQUIRE_GRID_COLUMN_GAP_VARIABLES:
      return [PropertyScope.GAP];
    case C.REQUIRE_BOTTOM_LEFT_CORNER_RADIUS_VARIABLES:
    case C.REQUIRE_BOTTOM_RIGHT_CORNER_RADIUS_VARIABLES:
    case C.REQUIRE_TOP_LEFT_CORNER_RADIUS_VARIABLES:
    case C.REQUIRE_TOP_RIGHT_CORNER_RADIUS_VARIABLES:
      return [PropertyScope.CORNER_RADIUS];
    default:
      return [];
  }
}
export function $$d0({
  localVariables: e,
  libraryVariables: t,
  libraryVariableSetIdToSet: i,
  node: a,
  resolvedType: l
}) {
  if ([VariableResolvedDataType.MAP, VariableResolvedDataType.SYMBOL_ID, VariableResolvedDataType.IMAGE, VariableResolvedDataType.LINK, VariableResolvedDataType.JS_RUNTIME_ALIAS, VariableResolvedDataType.SLOT_CONTENT_ID].includes(l)) throw new Error(`Unsupported resolved type: ${l}`);
  let d = e.reduce((e, t) => {
    if (t.resolvedType !== l) return e;
    let i = a.resolveVariable(t.node_id);
    i && i.resolvedType !== VariableResolvedDataType.MAP && i.resolvedType !== VariableResolvedDataType.SYMBOL_ID && (e[t.node_id] = {
      variable: t,
      resolvedValue: i,
      variableSetId: t.variableSetId
    });
    return e;
  }, {});
  let c = normalizeValue(LinterCppBindings?.getModeContext(a.guid)) ?? {};
  return {
    localVariables: d,
    libraryVariables: t.reduce((e, t) => {
      if (t.resolvedType !== l) return e;
      let n = i[t.variableSetId];
      if (!n) return e;
      let a = convertStringToKiwi(n.node_id);
      if (!a) return e;
      let s = Z({
        variable: t,
        variableCollectionKey: n.key,
        variableCollectionCheckpointId: n.checkpoint_id,
        collectionId: a,
        modeContext: c
      });
      s && (e[t.node_id] = {
        variable: t,
        resolvedValue: s,
        variableSetId: t.variableSetId
      });
      return e;
    }, {})
  };
}
export function $$c2({
  variablesMap: e,
  allowedScopes: t
}) {
  return {
    localVariables: Object.entries(e.localVariables).reduce((e, [i, n]) => {
      let r = n.variable.scopes;
      for (let a of t) r.includes(a) && (e[i] = n);
      return e;
    }, {}),
    libraryVariables: Object.entries(e.libraryVariables).reduce((e, [i, n]) => {
      let r = n.variable.scopes;
      for (let a of t) r.includes(a) && (e[i] = n);
      return e;
    }, {})
  };
}
export const TW = $$d0;
export const d$ = $$l1;
export const sB = $$c2;