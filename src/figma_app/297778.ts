import { VariablesBindings } from "../figma_app/763686";
import { GP } from "../figma_app/15927";
import { dI } from "../905/805904";
import { kz, ZI } from "../figma_app/633080";
import { K } from "../905/733706";
export function $$l0(e) {
  let t = VariablesBindings.detachPaintVariables(GP(e));
  if (!t) return e;
  let r = K(t);
  return r ? r.paint : e;
}
export function $$d1(e) {
  if (!e.colorVar?.value?.alias) return null;
  let t = dI(e.colorVar.value.alias);
  let r = VariablesBindings.getLocalVariableInfo(t);
  if (r) return kz(r);
  let i = VariablesBindings.getSubscribedVariableInfo(t);
  return i ? ZI(i) : null;
}
export const $ = $$l0;
export const L = $$d1;