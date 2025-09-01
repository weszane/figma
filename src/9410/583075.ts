import { wA } from "../vendor/514228";
import { nQ7, FAf, NLJ, glU } from "../figma_app/763686";
import { Xr, zl } from "../figma_app/27355";
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
    let e = wA();
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
    (i || r !== nQ7.DESIGN) && (t(), function (e) {
      let t = zl.get(Kh);
      e === nQ7.DESIGN && (NT(FAf.DESIGN), t === NLJ.COMMENTS && glU?.triggerAction("set-tool-default", null));
    }(r), r === nQ7.DESIGN ? glU?.triggerAction("enter-slides-design-mode", null) : glU?.triggerAction("enter-slides-mode", null), e && r === nQ7.DESIGN ? (Cu({
      trackingContext: "slides_toggle_back_to_slides",
      productType: "slides",
      fileKey: _
    }), Sprig("track", "slides_toggle_back_to_slides")) : e && r === nQ7.SELF && Cu({
      trackingContext: "slides_toggle_design",
      productType: "slides",
      fileKey: _
    }));
  };
}
export const E = $$g0;