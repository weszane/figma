import { htN, ZEs, Ez5 } from "../figma_app/763686";
import { r as _$$r } from "../905/249071";
import { M } from "../905/512402";
import { UN } from "../905/700578";
import { zl } from "../figma_app/27355";
import { C } from "../905/217042";
import { j } from "../905/881708";
export class $$c0 extends j {
  constructor(e) {
    super(e);
  }
  render(e, t) {
    if (!zl.get(C)) return;
    let i = htN?.getSelectedNodesToConvertIntoRepeatersGUIDs(ZEs.HAS_IDENTICAL_CHILDREN) ?? [];
    let d = new Set(UN().getDirectlySelectedNodes().map(e => e.id));
    for (let o = 0; o < i.length; o++) for (let l of i[o] ?? []) if (!d.has(l)) {
      let i = UN().get(l);
      if (i) {
        let s = i.absoluteBoundingBox;
        let l = new M(s.x, s.y);
        let d = e.canvasSpaceToViewportSpace(l);
        let c = new M(s.w, s.h).multiplyBy(e.canvasScale());
        let u = new _$$r(M.fromVectorD(d), M.fromVectorD(c));
        if (Ez5) {
          let e = 0 === o ? Ez5.getBorderFSDesignStrong() : Ez5.getBorderFSDesign();
          t.strokeRect(u, e, 1);
        }
      }
    }
  }
  handleMouseMove(e) {}
  handleMouseDown(e) {}
  handleMouseUp(e) {}
  handleMouseLeave(e) {}
  handleMouseDrag(e) {}
  handleBeforeFrame() {}
  handleContextMenuOpen(e) {}
  renderUnderEditModeUI(e, t) {}
  reset() {}
}
export const R = $$c0;