import { VariablesBindings } from "../figma_app/763686";
import { GP } from "../figma_app/15927";
import { convertKiwiToVariableIdString } from "../905/805904";
import { getLocalVariableInfo, getSubscribedVariableInfo } from "../figma_app/633080";
import { K } from "../905/733706";
export function $$l0(e) {
  let t = VariablesBindings.detachPaintVariables(GP(e));
  if (!t) return e;
  let r = K(t);
  return r ? r.paint : e;
}
export function $$d1(e) {
  if (!e.colorVar?.value?.alias) return null;
  let t = convertKiwiToVariableIdString(e.colorVar.value.alias);
  let r = VariablesBindings.getLocalVariableInfo(t);
  if (r) return getLocalVariableInfo(r);
  let i = VariablesBindings.getSubscribedVariableInfo(t);
  return i ? getSubscribedVariableInfo(i) : null;
}
export const $ = $$l0;
export const L = $$d1;