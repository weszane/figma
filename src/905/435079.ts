import { qE } from "../figma_app/492908";
import { Ez5 } from "../figma_app/763686";
import { M } from "../905/512402";
import { fn, sH } from "../905/871411";
import { getSingletonSceneGraph } from "../905/700578";
import { atomStoreManager } from "../figma_app/27355";
import { BT } from "../905/618447";
let $$c1 = 8;
let $$u2 = 36;
let $$p3 = 18;
export function $$m4(e) {
  let t = atomStoreManager.get(BT);
  if (!t.length || !Ez5) return -1;
  let i = M.fromVectorD(e.canvasSpaceMouse());
  let s = qE(Ez5.canvasGrid().getClosestGridCoord(i, null).row, 0, t.length - 1);
  let c = Ez5.canvasGrid().getRowGUID(s);
  let u = getSingletonSceneGraph().get(c)?.isCanvasGridRowNodeType;
  let p = Ez5.canvasGrid().rowContentBoundsInCanvas(s, !1);
  let m = 16 / e.viewport().canvasScale();
  let h = u ? Ez5.canvasGrid().gridRowSpacing() / 2 : 0;
  let g = p.origin.y - h - m / 2;
  let f = i.x >= p.origin.x && i.x <= p.origin.x + p.size.x;
  let _ = i.y >= g && i.y <= g + m;
  return f && _ ? s : -1;
}
export function $$h0(e, t) {
  let i = atomStoreManager.get(BT);
  if (!i.length || 1 === i.length || !Ez5) return 0;
  let n = M.fromVectorD(e.canvasSpaceMouse());
  let u = Math.min(Ez5.canvasGrid().getClosestGridCoord(n, null).row, i.length - 1);
  let m = e.findHoveredNodeId();
  let h = getSingletonSceneGraph().get(m);
  if (h) {
    let e = h.containingSlideId;
    if (fn(sH(e))) return u;
  }
  let g = Ez5.canvasGrid().rowContentBoundsInCanvas(u, !1);
  let f = ($$c1 + $$p3) / e.viewport().canvasScale();
  f += Ez5.canvasGrid().gridWidth(t.x);
  g.size.x += Ez5.canvasGrid().gridChildSpacing() + t.x;
  u === i.length - 1 && (g.size.y += Ez5.canvasGrid().gridHeight(t.y));
  let _ = n.x >= g.origin.x - f - Ez5.canvasGrid().gridPadding() && n.x <= g.origin.x + g.size.x;
  let A = n.y >= g.origin.y && n.y <= g.origin.y + g.size.y;
  return _ && A ? u : -1;
}
export const Mu = $$h0;
export const b = $$c1;
export const js = $$u2;
export const vJ = $$p3;
export const x7 = $$m4;