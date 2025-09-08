import { useCallback } from "react";
import { VariableUIContext, VariablesBindings, VariableCollectionContext } from "../figma_app/763686";
import { fn } from "../905/805904";
import { WI } from "../905/929949";
import { getI18nString } from "../905/303541";
import { fullscreenValue } from "../figma_app/455680";
import { g } from "../905/578436";
import { Ot } from "../905/850476";
import { Wc } from "../905/782020";
export function $$p0() {
  return useCallback((e, t, i, n = "", d = VariableUIContext.VARIABLES_MODAL) => {
    let c = Wc(t, i, n);
    let p = WI(i);
    let m = e ?? VariablesBindings.createVariableSet(getI18nString("variables.authoring_modal.default_collection_name"), VariableCollectionContext.AUTOMATIC_FIRST_COLLECTION);
    let h = VariablesBindings.createVariable(c, m, p, d);
    return fn(h) ? (fullscreenValue.triggerAction("commit"), h) : null;
  }, []);
}
export function $$m2() {
  return useCallback((e, t = "") => {
    let i = function (e, t = "") {
      let i = e.map(e => e.name);
      let n = getI18nString("variables.variable_collection_default_name");
      return g(t + n, i);
    }(e, t);
    let n = VariablesBindings.createVariableSet(i, VariableCollectionContext.VARIABLES_MODAL);
    fullscreenValue.triggerAction("commit");
    return n;
  }, []);
}
export function $$h1() {
  let e = useCallback((e, t, i = "") => {
    let n = function (e, t = "") {
      let i = e.map(e => e.name);
      let n = getI18nString("variables.variable_collection_extension_default_name");
      return g(t + n, i);
    }(e, i);
    let a = VariablesBindings.createVariableSetExtension(n, t);
    fullscreenValue.triggerAction("commit");
    return a;
  }, []);
  return Ot() ? e : null;
}
export const ay = $$p0;
export const jv = $$h1;
export const wp = $$m2;