import { InteractionCpp, AppStateTsApi } from "../figma_app/763686";
import { defaultSessionLocalIDString } from "../905/871411";
import { getSingletonSceneGraph } from "../905/700578";
import { atomStoreManager } from "../figma_app/27355";
import { j } from "../905/881708";
import { m } from "../905/70820";
export class $$d0 extends j {
  constructor(e) {
    super(e);
  }
  handleMouseDown(e) {
    let t = e.findHoveredNodeId();
    let i = getSingletonSceneGraph().get(t);
    let r = !1;
    i && i.canHaveAnnotation && (atomStoreManager.set(m, i.annotations.length), r = !0);
    r ? InteractionCpp.setEventCursor(e, "annotateCursor") : InteractionCpp.setEventCursor(e, "annotateCursorFaded");
    !r && i && e.accept(this);
  }
  handleMouseMove(e) {
    this.showAnnotationIsPossibleCursor(e) ? InteractionCpp.setEventCursor(e, "annotateCursor") : (InteractionCpp.setEventCursor(e, "annotateCursorFaded"), e.accept(this));
  }
  showAnnotationIsPossibleCursor(e) {
    let t = e.findHoveredNodeId();
    if (t === defaultSessionLocalIDString || null !== atomStoreManager.get(m) && e.selectionNodeGUIDs().some(e => e === t)) return !1;
    let i = getSingletonSceneGraph().get(t);
    return !i || !!i.canHaveAnnotation;
  }
  render() {}
  handleMouseUp() {}
  handleMouseLeave() {}
  handleMouseDrag() {}
  handleContextMenuOpen() {}
  handleBeforeFrame() {}
  renderUnderEditModeUI() {}
  reset() {
    AppStateTsApi && AppStateTsApi.editorState().focusedAnnotationId.set(null);
  }
}
export const l = $$d0;