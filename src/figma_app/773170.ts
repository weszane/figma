import { ColorSpaceEnum, ColorProfileEnum, Fullscreen } from "../figma_app/763686";
import { debugState } from "../905/407919";
import { fullscreenValue } from "../figma_app/455680";
import { FEditorType } from "../figma_app/53721";
import { YN } from "../figma_app/829197";
import { M } from "../905/366117";
export let $$d0 = new class {
  constructor() {
    this.canvasColorProfile = ColorSpaceEnum.SRGB;
  }
  getDefaultDocumentColorProfile() {
    if ((debugState?.getState()?.selectedView).editorType === FEditorType.Whiteboard) return ColorProfileEnum.SRGB;
    switch (YN().colorProfilePreference) {
      case M.DEFAULT:
      case M.SRGB:
        return ColorProfileEnum.SRGB;
      case M.DISPLAY_P3:
        return ColorProfileEnum.DISPLAY_P3;
    }
  }
  getCanvasColorProfile() {
    return this.canvasColorProfile;
  }
  setCanvasColorProfile(e) {
    this.canvasColorProfile = e;
    Fullscreen?.updateImageColorspaceConversions();
    fullscreenValue?.triggerAction("redraw-canvas", {});
  }
  getUserColorProfile() {
    switch (YN().colorProfilePreference) {
      case M.DEFAULT:
      case M.SRGB:
        return ColorSpaceEnum.SRGB;
      case M.DISPLAY_P3:
        return ColorSpaceEnum.DISPLAY_P3;
    }
  }
}();
export const l = $$d0;