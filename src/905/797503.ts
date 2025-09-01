import { vA } from "../figma_app/465776";
import { HzA } from "../figma_app/763686";
import { UN } from "../905/700578";
let s = null;
let o = "CompareCloneParent";
export function $$l0(e) {
  let t = function () {
    let e = UN();
    let t = null;
    if (null !== s) {
      let i = e.get(s);
      i && i.sceneGraph === e && i.name === o ? t = i : s = null;
    }
    if (null === t) {
      let i = e.getInternalCanvas();
      vA(null !== i);
      (t = e.createNode("GROUP", {
        tracking: HzA.IGNORE
      })).name = o;
      s = t.guid;
      i.appendChild(t);
    }
    return t;
  }();
  let i = e.clone();
  t.appendChild({
    guid: i
  });
  let l = UN().get(i);
  vA(null !== l);
  return l;
}
export const X = $$l0;