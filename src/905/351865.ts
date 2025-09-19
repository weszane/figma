import { CmsRepeaterHelpers, ChildRelationshipStatus, AppStateTsApi } from "../figma_app/763686";
import { Rectangle } from "../905/249071";
import { Vector2D } from "../905/512402";
import { getSingletonSceneGraph } from "../905/700578";
import { atomStoreManager } from "../figma_app/27355";
import { C } from "../905/217042";
import { j } from "../905/881708";
export class $$c0 extends j {
  constructor(e) {
    super(e);
  }
  render(e, t) {
    if (!atomStoreManager.get(C)) return;
    let i = CmsRepeaterHelpers?.getSelectedNodesToConvertIntoRepeatersGUIDs(ChildRelationshipStatus.HAS_IDENTICAL_CHILDREN) ?? [];
    let d = new Set(getSingletonSceneGraph().getDirectlySelectedNodes().map(e => e.id));
    for (let o = 0; o < i.length; o++) for (let l of i[o] ?? []) if (!d.has(l)) {
      let i = getSingletonSceneGraph().get(l);
      if (i) {
        let s = i.absoluteBoundingBox;
        let l = new Vector2D(s.x, s.y);
        let d = e.canvasSpaceToViewportSpace(l);
        let c = new Vector2D(s.w, s.h).multiplyBy(e.canvasScale());
        let u = new Rectangle(Vector2D.fromVectorD(d), Vector2D.fromVectorD(c));
        if (AppStateTsApi) {
          let e = 0 === o ? AppStateTsApi.getBorderFSDesignStrong() : AppStateTsApi.getBorderFSDesign();
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