import { Ay } from "../vendor/224828";
class n extends Ay {
  static blotName = "header";
  static tagName = ["H1", "H2", "H3", "H4", "H5", "H6"];
  static formats(t) {
    return this.tagName.indexOf(t.tagName) + 1;
  }
}
export let $$s0 = n;
export const A = $$s0;