import { useDispatch } from "../vendor/514228";
import { SelfDesignType, DesignWorkspace, DesignGraphElements, Fullscreen } from "../figma_app/763686";
import { Xr, atomStoreManager } from "../figma_app/27355";
import { useSprigWithSampling } from "../905/99656";
import { Kh } from "../figma_app/370763";
import { oB } from "../905/929976";
import { XE, Uv } from "../figma_app/91703";
import { Cu } from "../figma_app/314264";
import { NT } from "../figma_app/741237";
import { tS } from "../figma_app/516028";
import { Bk } from "../figma_app/357367";
import { FT } from "../9410/607036";
import { bs } from "../9410/680511";
export function $$g0({
  logToggle: e
} = {}) {
  let t = function () {
    let e = useDispatch();
    let t = Xr(FT);
    let i = Xr(bs);
    return () => {
      e(oB());
      e(XE());
      e(Uv());
      t(-1);
      i(-1);
    };
  }();
  let i = Bk();
  let _ = tS();
  let {
    Sprig
  } = useSprigWithSampling();
  return r => {
    (i || r !== SelfDesignType.DESIGN) && (t(), function (e) {
      let t = atomStoreManager.get(Kh);
      e === SelfDesignType.DESIGN && (NT(DesignWorkspace.DESIGN), t === DesignGraphElements.COMMENTS && Fullscreen?.triggerAction("set-tool-default", null));
    }(r), r === SelfDesignType.DESIGN ? Fullscreen?.triggerAction("enter-slides-design-mode", null) : Fullscreen?.triggerAction("enter-slides-mode", null), e && r === SelfDesignType.DESIGN ? (Cu({
      trackingContext: "slides_toggle_back_to_slides",
      productType: "slides",
      fileKey: _
    }), Sprig("track", "slides_toggle_back_to_slides")) : e && r === SelfDesignType.SELF && Cu({
      trackingContext: "slides_toggle_design",
      productType: "slides",
      fileKey: _
    }));
  };
}
export const E = $$g0;