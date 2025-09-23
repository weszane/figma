import { equals } from "../figma_app/476572";
import { handleAtomEvent } from "../905/502364";
let $$a1 = "Selection Changed";
let s = new Set();
export function $$o0(e, t, r) {
  let o = function (e) {
    let t = Object.keys(e);
    return 0 === t.length ? new Set() : new Set(t);
  }(t);
  let l = !equals(o, s);
  handleAtomEvent({
    id: $$a1,
    properties: {
      ...r,
      numSelectedTextNodes: r.numSelectedByType && r.numSelectedByType.TEXT || 0,
      didSelectedNodeIdsChange: l
    }
  });
  s = o;
}
export const F = $$o0;
export const R = $$a1;