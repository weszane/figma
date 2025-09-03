import { m1T, GUn, f2e, Ez5, dBj, glU, nzw, qmM } from "../figma_app/763686";
import { f } from "../905/26360";
import { AD } from "../905/871411";
import { getSingletonSceneGraph } from "../905/700578";
import { debugState } from "../905/407919";
import { j7 } from "../905/929976";
import { Y5 } from "../figma_app/455680";
import { j } from "../905/881708";
import { b } from "../figma_app/193046";
function p() {
  return debugState.getState().mirror.appModel.activeCanvasEditModeType === m1T.CMS_BINDING_CONSTRAINED;
}
export class $$m0 extends j {
  constructor(e) {
    super(e);
    this.webpageId = null;
    this.breakpointFrameId = null;
  }
  handleMouseDown(e) {
    let t = e.findHoveredNodeId();
    let i = getSingletonSceneGraph().get(t);
    let a = e.selectionNodeGUIDs();
    if (!i || !i.isResponsiveSetOrWebpage) return;
    let l = GUn.eventHitTestNameUIBounds(e, t, f2e.RESPONSIVE_SET_PLAY_BUTTON) && !p();
    let d = debugState.getState().openFile?.canEdit && GUn.eventHitTestNameUIBounds(e, t, f2e.RESPONSIVE_SET_PLUS_BUTTON) && !p();
    let c = GUn.eventHitTestNameUIBounds(e, t, f2e.CMS_ITEM_BUTTON);
    if (l || d || c) {
      if (this.webpageId = t, this.breakpointFrameId = null, 1 === a.length) {
        let e = getSingletonSceneGraph().get(a[0]);
        let i = e?.isWebpage ? e.containingDerivedBreakpoint : e?.containingBreakpointFrame;
        let n = i ? e?.isWebpage ? e.containingWebpage : f(i) : null;
        e && i && n?.guid === t && (this.breakpointFrameId = i.guid);
      }
      let i = getSingletonSceneGraph().get(e.canvasGUID());
      i && i.setSelectionToSingleNode(this.webpageId);
      e.accept(this);
      return;
    }
  }
  handleMouseUp(e) {
    if (!this.webpageId || e.wasCanceled()) {
      this.webpageId = null;
      this.breakpointFrameId = null;
      return;
    }
    let t = GUn.eventHitTestNameUIBounds(e, this.webpageId, f2e.RESPONSIVE_SET_PLUS_BUTTON) && !p();
    let i = GUn.eventHitTestNameUIBounds(e, this.webpageId, f2e.RESPONSIVE_SET_PLAY_BUTTON) && !p();
    let r = GUn.eventHitTestNameUIBounds(e, this.webpageId, f2e.CMS_ITEM_BUTTON);
    let a = getSingletonSceneGraph().get(e.canvasGUID());
    let c = getSingletonSceneGraph().get(this.webpageId);
    if (t && a && c) {
      let t = debugState.dispatch;
      c && b(c, t) && e.accept(this);
    } else if (i && a && c) {
      if (c.childCount > 0) {
        let e = c.childrenGuids[0];
        let t = Ez5.prototypingEditorState().prototypeViewMode.getCopy() === dBj.PRESENT ? "present-sites-full-preview" : "toggle-inline-html-preview";
        glU.triggerActionInUserEditScope(t, {
          source: "breakpoint_bar",
          startingNodeId: this.breakpointFrameId ? this.breakpointFrameId : e
        });
      }
    } else r && c && function (e, t) {
      if (!e || !e.isResponsiveSet || !e.getDakotaItemData() || !Y5.isReady()) return;
      let i = e.guid;
      t(j7({
        type: "DAKOTA_ITEM_DROPDOWN",
        data: {
          layoutSetId: i,
          dakotaCollectionId: e.getNearestDakotaCollectionId(),
          dakotaItemId: e.getDakotaItemData().itemId
        }
      }));
    }(c, debugState.dispatch);
    this.webpageId = null;
    this.breakpointFrameId = null;
  }
  handleMouseMove(e) {
    let t = e.findHoveredNodeId();
    let i = getSingletonSceneGraph().get(t);
    if (!i || !i.isResponsiveSetOrWebpage) {
      this.clearHoveredNodes();
      return;
    }
    let r = debugState.getState().mirror.appModel.onCanvasNameEditorInfo.mode === nzw.RESPONSIVE_SET_NAME;
    let a = GUn.eventHitTestNameUIBounds(e, t, f2e.RESPONSIVE_SET_PLAY_BUTTON) && !p();
    let l = GUn.eventHitTestNameUIBounds(e, t, f2e.RESPONSIVE_SET_PLUS_BUTTON) && !p();
    let d = GUn.eventHitTestNameUIBounds(e, t, f2e.CMS_ITEM_BUTTON);
    this.clearHoveredNodes();
    l ? qmM?.setHoveredResponsiveSetPlusButtonNode(t) : a ? qmM?.setHoveredResponsiveSetPlayButtonNode(t) : d && !r && qmM?.setHoveredResponsiveSetCMSItemPickerButtonNode(t);
  }
  handleMouseLeave(e) {}
  handleMouseDrag(e) {}
  handleContextMenuOpen(e) {}
  handleBeforeFrame() {}
  render(e, t) {}
  renderUnderEditModeUI(e, t) {}
  reset() {}
  clearHoveredNodes() {
    qmM?.setHoveredResponsiveSetPlayButtonNode(AD);
    qmM?.setHoveredResponsiveSetPlusButtonNode(AD);
    qmM?.setHoveredResponsiveSetCMSItemPickerButtonNode(AD);
  }
}
export const O = $$m0;