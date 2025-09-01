import { RYP } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { B3 } from "../905/709095";
import { x1 } from "../905/714362";
import { L, K } from "../905/958077";
import { l as _$$l } from "../figma_app/773170";
export let $$d0 = new class {
  constructor() {
    this.onFrameCb = null;
    this.switchWebglColorSpace = (e, t) => {
      let r = e.drawingBufferColorSpace;
      switch (t) {
        case RYP.SRGB:
          if ("srgb" === r) return;
          e.drawingBufferColorSpace = "srgb";
          _$$l.setCanvasColorProfile(RYP.SRGB);
          break;
        case RYP.DISPLAY_P3:
          if ("display-p3" === r) return;
          e.drawingBufferColorSpace = "display-p3";
          _$$l.setCanvasColorProfile(RYP.DISPLAY_P3);
          break;
        default:
          x1("color management", "unsupported color space", {
            targetColorSpace: t
          });
      }
    };
  }
  onFrame() {
    L(B3, K.DEFAULT, () => {
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