import { E3, fp, md } from "../figma_app/27355";
import { t } from "../905/303541";
let a = E3("dev-mode-code-or-properties", "code");
let $$s2 = new class {
  format(e) {
    switch (e) {
      case "code":
        return t("inspect_panel.code.code");
      case "properties":
        return t("dev_handoff.layer_properties_list");
    }
  }
}();
export function $$o0() {
  return fp(a);
}
export function $$l3() {
  return "code" === md(a);
}
export let $$d1 = ["properties", "code"];
export const $h = $$o0;
export const OQ = $$d1;
export const a9 = $$s2;
export const sQ = $$l3;