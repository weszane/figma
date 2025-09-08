import { VariablesBindings } from "../figma_app/763686";
import { kz, ZI, Dt, Rn } from "../figma_app/633080";
export class $$a0 {
  constructor(e = !1, t = !1) {
    this.keepAliasId = e;
    this.keepVariableResolvedType = t;
  }
  variableIdToVariable(e) {
    let t = VariablesBindings.getLocalVariableInfo(e);
    if (t) return kz(t);
    let i = VariablesBindings.getSubscribedVariableInfo(e);
    if (i) return ZI(i);
  }
  variableCollectionIdToVariableCollection(e) {
    let t = VariablesBindings.getLocalVariableSetInfo(e);
    if (t) return Dt(t);
    let i = VariablesBindings.getSubscribedVariableSetInfo(e);
    if (i) return Rn(i);
  }
}
export const o = $$a0;