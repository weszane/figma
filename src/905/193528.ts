import { LayoutTabType, HitTestBindings, UserInteractionButton, AppStateTsApi, PresentationMode, Fullscreen, DiagramElementType, InteractionCpp } from "../figma_app/763686";
import { findContainingResponsiveSet } from "../905/26360";
import { defaultSessionLocalIDString } from "../905/871411";
import { getSingletonSceneGraph } from "../905/700578";
import { debugState } from "../905/407919";
import { showDropdownThunk } from "../905/929976";
import { fullscreenValue } from "../figma_app/455680";
import { NameClass } from "../905/881708";
import { b } from "../figma_app/193046";
function p() {
  return debugState.getState().mirror.appModel.activeCanvasEditModeType === LayoutTabType.CMS_BINDING_CONSTRAINED;
}
export class $$m0 extends NameClass {
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
    let l = HitTestBindings.eventHitTestNameUIBounds(e, t, UserInteractionButton.RESPONSIVE_SET_PLAY_BUTTON) && !p();
    let d = debugState.getState().openFile?.canEdit && HitTestBindings.eventHitTestNameUIBounds(e, t, UserInteractionButton.RESPONSIVE_SET_PLUS_BUTTON) && !p();
    let c = HitTestBindings.eventHitTestNameUIBounds(e, t, UserInteractionButton.CMS_ITEM_BUTTON);
    if (l || d || c) {
      if (this.webpageId = t, this.breakpointFrameId = null, 1 === a.length) {
        let e = getSingletonSceneGraph().get(a[0]);
        let i = e?.isWebpage ? e.containingDerivedBreakpoint : e?.containingBreakpointFrame;
        let n = i ? e?.isWebpage ? e.containingWebpage : findContainingResponsiveSet(i) : null;
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
    let t = HitTestBindings.eventHitTestNameUIBounds(e, this.webpageId, UserInteractionButton.RESPONSIVE_SET_PLUS_BUTTON) && !p();
    let i = HitTestBindings.eventHitTestNameUIBounds(e, this.webpageId, UserInteractionButton.RESPONSIVE_SET_PLAY_BUTTON) && !p();
    let r = HitTestBindings.eventHitTestNameUIBounds(e, this.webpageId, UserInteractionButton.CMS_ITEM_BUTTON);
    let a = getSingletonSceneGraph().get(e.canvasGUID());
    let c = getSingletonSceneGraph().get(this.webpageId);
    if (t && a && c) {
      let t = debugState.dispatch;
      c && b(c, t) && e.accept(this);
    } else if (i && a && c) {
      if (c.childCount > 0) {
        let e = c.childrenGuids[0];
        let t = AppStateTsApi.prototypingEditorState().prototypeViewMode.getCopy() === PresentationMode.PRESENT ? "present-sites-full-preview" : "toggle-inline-html-preview";
        Fullscreen.triggerActionInUserEditScope(t, {
          source: "breakpoint_bar",
          startingNodeId: this.breakpointFrameId ? this.breakpointFrameId : e
        });
      }
    } else r && c && function (e, t) {
      if (!e || !e.isResponsiveSet || !e.getDakotaItemData() || !fullscreenValue.isReady()) return;
      let i = e.guid;
      t(showDropdownThunk({
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
    let r = debugState.getState().mirror.appModel.onCanvasNameEditorInfo.mode === DiagramElementType.RESPONSIVE_SET_NAME;
    let a = HitTestBindings.eventHitTestNameUIBounds(e, t, UserInteractionButton.RESPONSIVE_SET_PLAY_BUTTON) && !p();
    let l = HitTestBindings.eventHitTestNameUIBounds(e, t, UserInteractionButton.RESPONSIVE_SET_PLUS_BUTTON) && !p();
    let d = HitTestBindings.eventHitTestNameUIBounds(e, t, UserInteractionButton.CMS_ITEM_BUTTON);
    this.clearHoveredNodes();
    l ? InteractionCpp?.setHoveredResponsiveSetPlusButtonNode(t) : a ? InteractionCpp?.setHoveredResponsiveSetPlayButtonNode(t) : d && !r && InteractionCpp?.setHoveredResponsiveSetCMSItemPickerButtonNode(t);
  }
  handleMouseLeave(e) {}
  handleMouseDrag(e) {}
  handleContextMenuOpen(e) {}
  handleBeforeFrame() {}
  render(e, t) {}
  renderUnderEditModeUI(e, t) {}
  reset() {}
  clearHoveredNodes() {
    InteractionCpp?.setHoveredResponsiveSetPlayButtonNode(defaultSessionLocalIDString);
    InteractionCpp?.setHoveredResponsiveSetPlusButtonNode(defaultSessionLocalIDString);
    InteractionCpp?.setHoveredResponsiveSetCMSItemPickerButtonNode(defaultSessionLocalIDString);
  }
}
export const O = $$m0;