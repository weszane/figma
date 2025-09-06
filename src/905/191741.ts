import { createLocalStorageAtom, useAtomValueAndSetter, useAtomWithSubscription } from "../figma_app/27355";
import { getI18nString } from "../905/303541";
let a = createLocalStorageAtom("dev-mode-code-or-properties", "code");
let $$s2 = new class {
  format(e) {
    switch (e) {
      case "code":
        return getI18nString("inspect_panel.code.code");
      case "properties":
        return getI18nString("dev_handoff.layer_properties_list");
    }
  }
}();
export function $$o0() {
  return useAtomValueAndSetter(a);
}
export function $$l3() {
  return "code" === useAtomWithSubscription(a);
}
export let $$d1 = ["properties", "code"];
export const $h = $$o0;
export const OQ = $$d1;
export const a9 = $$s2;
export const sQ = $$l3;