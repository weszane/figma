import { qmM } from "../figma_app/763686";
import { r as _$$r } from "../905/249071";
import { M } from "../905/512402";
import { zl } from "../figma_app/27355";
import { Ay } from "../figma_app/778880";
import { H } from "../figma_app/376315";
import { j } from "../905/881708";
export class $$c0 extends j {
  constructor(e) {
    super(e);
  }
  handleMouseDown(e) {
    if (this.isPointWithinVideoNode(e.viewportSpaceMouse()) && Ay.isIpad) {
      let {
        pointerDownOnVideo
      } = zl.get(H);
      zl.set(H, {
        isVideoNodeHovered: !0,
        pointerDownOnVideo: !pointerDownOnVideo
      });
    }
  }
  handleMouseMove(e) {
    if (this.isPointWithinVideoNode(e.viewportSpaceMouse())) {
      let {
        pointerDownOnVideo
      } = zl.get(H);
      zl.set(H, {
        isVideoNodeHovered: !0,
        pointerDownOnVideo
      });
    } else zl.set(H, {
      isVideoNodeHovered: !1,
      pointerDownOnVideo: !1
    });
  }
  isPointWithinVideoNode(e) {
    let t = _$$r.fromRectD(qmM.viewportSpaceVideoBounds());
    return !t.isInvalid() && t.containsPointIncludingBoundary(M.fromVectorD(e));
  }
  handleMouseUp(e) {}
  handleMouseDrag(e) {}
  handleMouseLeave(e) {}
  handleContextMenuOpen(e) {}
  handleBeforeFrame() {}
  render(e, t) {}
  renderUnderEditModeUI(e, t) {}
  reset() {}
}
export const s = $$c0;