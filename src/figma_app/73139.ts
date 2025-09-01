import { UN } from "../905/700578";
import { oz } from "../905/561485";
export function $$a0(e) {
  if (oz()) {
    let t = UN();
    for (let r in e) {
      let e = t.get(r);
      if (!e || !e.containingBreakpointFrame) return !1;
    }
    return !0;
  }
  return !1;
}
export const c = $$a0;