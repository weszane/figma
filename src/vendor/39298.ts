import { EmbedBlot } from "../vendor/73046";
class n extends EmbedBlot {
  static value() {}
  optimize() {
    (this.prev || this.next) && this.remove();
  }
  length() {
    return 0;
  }
  value() {
    return "";
  }
}
n.blotName = "break";
n.tagName = "BR";
export let $$s0 = n;
export const A = $$s0;