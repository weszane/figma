import { WhiteboardTemplatePreviewCppBindings, SourceType } from "../figma_app/763686";
import { atomStoreManager } from "../figma_app/27355";
import { bj } from "../figma_app/880974";
import { NameClass } from "../905/881708";
export class $$o0 extends NameClass {
  constructor(e) {
    super(e);
  }
  handleMouseMove(e) {
    WhiteboardTemplatePreviewCppBindings.hitTestTemplatePreview(e);
  }
  handleMouseDown(e) {
    WhiteboardTemplatePreviewCppBindings.hitTestTemplatePreview(e) && e.accept(this);
  }
  handleMouseUp(e) {
    WhiteboardTemplatePreviewCppBindings.hitTestTemplatePreview(e) && atomStoreManager.set(bj, {
      selectTemplateAfterCommit: !0,
      moveViewportAfterCommit: !1,
      priority: "user-visible",
      editScopeType: SourceType.USER
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