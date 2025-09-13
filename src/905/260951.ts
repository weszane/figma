import { HitTestBindings, UserInteractionButton, AppStateTsApi } from "../figma_app/763686";
import { getSingletonSceneGraph } from "../905/700578";
import { atomStoreManager } from "../figma_app/27355";
import { debugState } from "../905/407919";
import { c as _$$c } from "../905/370443";
import { logAndTrackCTA } from "../figma_app/314264";
import { j } from "../905/881708";
import { w } from "../figma_app/106955";
import { BQ } from "../figma_app/500946";
export class $$p0 extends j {
  constructor(e) {
    super(e);
    this.sectionId = null;
  }
  handleMouseDown(e) {
    if (!atomStoreManager.get(w)) return;
    let t = e.findHoveredNodeId();
    let i = getSingletonSceneGraph().get(t);
    if (i && i.isSection && HitTestBindings.eventHitTestNameUIBounds(e, t, UserInteractionButton.SECTION_PRESET_PICKER)) {
      this.sectionId = t;
      e.accept(this);
      return;
    }
  }
  handleMouseUp(e) {
    if (!this.sectionId || e.wasCanceled()) {
      this.sectionId = null;
      return;
    }
    let t = HitTestBindings.eventHitTestNameUIBounds(e, this.sectionId, UserInteractionButton.SECTION_PRESET_PICKER);
    let i = getSingletonSceneGraph().get(e.canvasGUID());
    if (t && i) {
      let t = debugState.dispatch;
      let n = getSingletonSceneGraph().get(this.sectionId);
      BQ(n, t) && (e.accept(this), logAndTrackCTA({
        nodeId: this.sectionId,
        trackingDescriptor: _$$c.SECTION_PRESET_PICKER_CLICKED
      }));
      i.setSelectionToSingleNode(this.sectionId);
    }
    this.sectionId = null;
  }
  handleMouseMove(e) {
    let t = e.findHoveredNodeId();
    let i = getSingletonSceneGraph().get(t);
    if (!i || !i.isSection) {
      AppStateTsApi.clearHoveredSectionPresetPickerNode();
      return;
    }
    atomStoreManager.get(w) && (HitTestBindings.eventHitTestNameUIBounds(e, t, UserInteractionButton.SECTION_PRESET_PICKER) ? AppStateTsApi.setHoveredSectionPresetPickerNode(t) : AppStateTsApi.clearHoveredSectionPresetPickerNode());
  }
  handleMouseLeave(e) {}
  handleMouseDrag(e) {}
  handleContextMenuOpen(e) {}
  handleBeforeFrame() {}
  render(e, t) {}
  renderUnderEditModeUI(e, t) {}
  reset() {}
}
export const V = $$p0;