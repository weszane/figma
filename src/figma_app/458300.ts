import { ColorSpaceEnum } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { B3 } from "../905/709095";
import { logError } from "../905/714362";
import { runProfileSession, PerfProfileLevel } from "../905/958077";
import { colorProfileManagerInstance } from "../figma_app/773170";
export let $$d0 = new class {
  constructor() {
    this.onFrameCb = null;
    this.switchWebglColorSpace = (e, t) => {
      let r = e.drawingBufferColorSpace;
      switch (t) {
        case ColorSpaceEnum.SRGB:
          if ("srgb" === r) return;
          e.drawingBufferColorSpace = "srgb";
          colorProfileManagerInstance.setCanvasColorProfile(ColorSpaceEnum.SRGB);
          break;
        case ColorSpaceEnum.DISPLAY_P3:
          if ("display-p3" === r) return;
          e.drawingBufferColorSpace = "display-p3";
          colorProfileManagerInstance.setCanvasColorProfile(ColorSpaceEnum.DISPLAY_P3);
          break;
        default:
          logError("color management", "unsupported color space", {
            targetColorSpace: t
          });
      }
    };
  }
  onFrame() {
    runProfileSession(B3, PerfProfileLevel.DEFAULT, () => {
      this.onFrameCb && this.onFrameCb();
    });
  }
  queueSwitchWebglColorSpace(e, t, r, n) {
    let a = () => {
      this.switchWebglColorSpace(e, t);
      getFeatureFlags().viewer_p3_fix && n && n.invalidateCanvas();
    };
    "mirror" === r ? a() : this.onFrameCb = a;
  }
}();
export const q = $$d0;