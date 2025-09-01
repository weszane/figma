import { Hyj, zkO } from "../figma_app/763686";
import { zl } from "../figma_app/27355";
import { bj } from "../figma_app/880974";
import { j } from "../905/881708";
export class $$o0 extends j {
  constructor(e) {
    super(e);
  }
  handleMouseMove(e) {
    Hyj.hitTestTemplatePreview(e);
  }
  handleMouseDown(e) {
    Hyj.hitTestTemplatePreview(e) && e.accept(this);
  }
  handleMouseUp(e) {
    Hyj.hitTestTemplatePreview(e) && zl.set(bj, {
      selectTemplateAfterCommit: !0,
      moveViewportAfterCommit: !1,
      priority: "user-visible",
      editScopeType: zkO.USER
    });
  }
  handleMouseLeave(e) {}
  handleMouseDrag(e) {}
  handleContextMenuOpen(e) {}
  handleBeforeFrame() {}
  render(e, t) {}
  renderUnderEditModeUI(e, t) {}
  reset() {}
}
export const Z = $$o0;