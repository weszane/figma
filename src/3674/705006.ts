import { VariableDataType } from "../figma_app/763686";
export function $$i1(e) {
  if ("TEXT" !== e.type) return !1;
  let t = e.getVariableConsumptionMap().TEXT_DATA;
  return null != t && null == t.isMixed && t.type === VariableDataType.MANAGED_STRING_ALIAS;
}
export function $$o0(e) {
  return $$i1(e) && e.getVariableConsumptionMap().TEXT_DATA || null;
}
export let $$l2 = Object.freeze({});
export const gk = $$o0;
export const go = $$i1;
export const iA = $$l2;