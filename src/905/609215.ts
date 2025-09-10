import { VariablesBindings } from "../figma_app/763686";
import { getLocalVariableInfo, getSubscribedVariableInfo, getLocalVariableSetInfo, getSubscribedVariableSetInfo } from "../figma_app/633080";
export class $$a0 {
  constructor(e = !1, t = !1) {
    this.keepAliasId = e;
    this.keepVariableResolvedType = t;
  }
  variableIdToVariable(e) {
    let t = VariablesBindings.getLocalVariableInfo(e);
    if (t) return getLocalVariableInfo(t);
    let i = VariablesBindings.getSubscribedVariableInfo(e);
    if (i) return getSubscribedVariableInfo(i);
  }
  variableCollectionIdToVariableCollection(e) {
    let t = VariablesBindings.getLocalVariableSetInfo(e);
    if (t) return getLocalVariableSetInfo(t);
    let i = VariablesBindings.getSubscribedVariableSetInfo(e);
    if (i) return getSubscribedVariableSetInfo(i);
  }
}
export const o = $$a0;