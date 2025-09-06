import { RYP, ywP, glU } from "../figma_app/763686";
import { debugState } from "../905/407919";
import { Y5 } from "../figma_app/455680";
import { FEditorType } from "../figma_app/53721";
import { YN } from "../figma_app/829197";
import { M } from "../905/366117";
export let $$d0 = new class {
  constructor() {
    this.canvasColorProfile = RYP.SRGB;
  }
  getDefaultDocumentColorProfile() {
    if ((debugState?.getState()?.selectedView).editorType === FEditorType.Whiteboard) return ywP.SRGB;
    switch (YN().colorProfilePreference) {
      case M.DEFAULT:
      case M.SRGB:
        return ywP.SRGB;
      case M.DISPLAY_P3:
        return ywP.DISPLAY_P3;
    }
  }
  getCanvasColorProfile() {
    return this.canvasColorProfile;
  }
  setCanvasColorProfile(e) {
    this.canvasColorProfile = e;
    glU?.updateImageColorspaceConversions();
    Y5?.triggerAction("redraw-canvas", {});
  }
  getUserColorProfile() {
    switch (YN().colorProfilePreference) {
      case M.DEFAULT:
      case M.SRGB:
        return RYP.SRGB;
      case M.DISPLAY_P3:
        return RYP.DISPLAY_P3;
    }
  }
}();
export const l = $$d0;