import { useDispatch } from "react-redux";
import { SelfDesignType, DesignWorkspace, DesignGraphElements, Fullscreen } from "../figma_app/763686";
import { useSetAtom, atomStoreManager } from "../figma_app/27355";
import { useSprigWithSampling } from "../905/99656";
import { Kh } from "../figma_app/370763";
import { hideDropdownAction } from "../905/929976";
import { hidePickerThunk, hideStylePicker } from "../figma_app/91703";
import { logAndTrackCTA } from "../figma_app/314264";
import { setPropertiesPanelTab } from "../figma_app/741237";
import { useCurrentFileKey } from "../figma_app/516028";
import { canEnterDesignMode } from "../figma_app/357367";
import { FT } from "../9410/607036";
import { bs } from "../9410/680511";
export function $$g0({
  logToggle: e
} = {}) {
  let t = function () {
    let e = useDispatch<AppDispatch>();
    let t = useSetAtom(FT);
    let i = useSetAtom(bs);
    return () => {
      e(hideDropdownAction());
      e(hidePickerThunk());
      e(hideStylePicker());
      t(-1);
      i(-1);
    };
  }();
  let i = canEnterDesignMode();
  let _ = useCurrentFileKey();
  let {
    Sprig
  } = useSprigWithSampling();
  return r => {
    (i || r !== SelfDesignType.DESIGN) && (t(), function (e) {
      let t = atomStoreManager.get(Kh);
      e === SelfDesignType.DESIGN && (setPropertiesPanelTab(DesignWorkspace.DESIGN), t === DesignGraphElements.COMMENTS && Fullscreen?.triggerAction("set-tool-default", null));
    }(r), r === SelfDesignType.DESIGN ? Fullscreen?.triggerAction("enter-slides-design-mode", null) : Fullscreen?.triggerAction("enter-slides-mode", null), e && r === SelfDesignType.DESIGN ? (logAndTrackCTA({
      trackingContext: "slides_toggle_back_to_slides",
      productType: "slides",
      fileKey: _
    }), Sprig("track", "slides_toggle_back_to_slides")) : e && r === SelfDesignType.SELF && logAndTrackCTA({
      trackingContext: "slides_toggle_design",
      productType: "slides",
      fileKey: _
    }));
  };
}
export const E = $$g0;