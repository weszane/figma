import { Z_n } from "../figma_app/763686";
import { hS } from "../905/216495";
import { u } from "../figma_app/852050";
import { mv } from "../figma_app/164212";
import { e4 } from "../figma_app/394327";
import { u3 } from "../figma_app/152690";
export function $$d2(e) {
  let {
    consumedVariable
  } = u3(e);
  let r = consumedVariable && hS(consumedVariable) && consumedVariable.type === Z_n.ALIAS ? consumedVariable.value : void 0;
  let s = u(r);
  return {
    boundVariableId: r,
    boundVariable: s
  };
}
export function $$c0(e, t, r, i) {
  return i && t ? {
    type: Z_n.ALIAS,
    resolvedType: e,
    value: i
  } : r ? {
    type: e4(e),
    resolvedType: e,
    value: r
  } : void 0;
}
export function $$u1(e, t, r) {
  return e && t && !!mv(r);
}
export const IQ = $$c0;
export const Kq = $$u1;
export const P3 = $$d2;