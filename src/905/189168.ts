import { assert } from "../figma_app/465776";
import { UN } from "../905/700578";
let a = e => {
  for (let t of e.directlySelectedNodes) for (; t;) {
    if (t.isBreakpointFrame || t.isDerivedWebpageBreakpoint || t.isResponsiveSetOrWebpage) return t;
    if (t.parentNode) t = t.parentNode;else break;
  }
  return e.childrenNodes.find(e => e.isResponsiveSetOrWebpage);
};
export function $$s0(e) {
  let t;
  let i;
  let s = UN().getCurrentPage();
  assert(null !== s);
  let o = (e ? UN().get(e) : null) || a(s);
  if (!o) return null;
  if (o.parentNode?.isResponsiveSetOrWebpage) {
    t = o.parentNode.guid;
    i = o.size;
  } else {
    t = o.guid;
    let e = function (e) {
      let t = null;
      for (let i of e.childrenNodes) i && "FRAME" === i.type && (!t || i.size.x > t.size.x) && (t = i);
      return t;
    }(o);
    if (!e) return null;
    i = e.size;
  }
  return {
    startingNodeId: t,
    initialSize: i
  };
}
export const d = $$s0;