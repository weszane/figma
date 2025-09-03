import { qmM, Ez5 } from "../figma_app/763686";
import { AD } from "../905/871411";
import { getSingletonSceneGraph } from "../905/700578";
import { zl } from "../figma_app/27355";
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
    i && i.canHaveAnnotation && (zl.set(m, i.annotations.length), r = !0);
    r ? qmM.setEventCursor(e, "annotateCursor") : qmM.setEventCursor(e, "annotateCursorFaded");
    !r && i && e.accept(this);
  }
  handleMouseMove(e) {
    this.showAnnotationIsPossibleCursor(e) ? qmM.setEventCursor(e, "annotateCursor") : (qmM.setEventCursor(e, "annotateCursorFaded"), e.accept(this));
  }
  showAnnotationIsPossibleCursor(e) {
    let t = e.findHoveredNodeId();
    if (t === AD || null !== zl.get(m) && e.selectionNodeGUIDs().some(e => e === t)) return !1;
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
    Ez5 && Ez5.editorState().focusedAnnotationId.set(null);
  }
}
export const l = $$d0;