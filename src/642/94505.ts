import { l7 } from "../905/189185";
import { M } from "../figma_app/634148";
export class $$i0 extends M {
  getValueForNode(e) {
    return e.opacity;
  }
  setValueForNode(e, t) {
    l7.user("set-opacity", () => {
      e.opacity = t;
    });
  }
}
new $$i0();
export const b = $$i0;