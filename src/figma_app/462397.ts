import { VariableDataType } from "../figma_app/763686";
import { isValidValue } from "../905/216495";
import { getVariableById } from "../figma_app/852050";
import { mapToSlotSymbolType } from "../figma_app/164212";
import { resolvedTypeToDataType } from "../figma_app/394327";
import { u3 } from "../figma_app/152690";
export function $$d2(e) {
  let {
    consumedVariable
  } = u3(e);
  let r = consumedVariable && isValidValue(consumedVariable) && consumedVariable.type === VariableDataType.ALIAS ? consumedVariable.value : void 0;
  let s = getVariableById(r);
  return {
    boundVariableId: r,
    boundVariable: s
  };
}
export function $$c0(e, t, r, i) {
  return i && t ? {
    type: VariableDataType.ALIAS,
    resolvedType: e,
    value: i
  } : r ? {
    type: resolvedTypeToDataType(e),
    resolvedType: e,
    value: r
  } : void 0;
}
export function $$u1(e, t, r) {
  return e && t && !!mapToSlotSymbolType(r);
}
export const IQ = $$c0;
export const Kq = $$u1;
export const P3 = $$d2;