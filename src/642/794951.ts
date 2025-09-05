import { jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { useDispatch } from "../vendor/514228";
import { tx } from "../905/303541";
import { te } from "../figma_app/275462";
import { b as _$$b } from "../905/985254";
import { c as _$$c } from "../905/370443";
import { E } from "../905/453826";
import { e as _$$e } from "../905/621515";
import { MY, q5 } from "../figma_app/516028";
import { iZ } from "../905/372672";
import { f as _$$f } from "../905/940356";
import { N as _$$N } from "../figma_app/268271";
import { rq } from "../905/425180";
import { wV, S5 } from "../figma_app/647246";
import { F_ } from "../905/748636";
import { TrJ } from "../figma_app/6204";
import { a5, fc, bo, io, ko } from "../figma_app/73698";
export let $$C1 = {
  [a5]: !1,
  [fc]: !1,
  [bo]: !1
};
export function $$j0() {
  let e = MY();
  let t = q5();
  let s = useDispatch();
  let j = iZ();
  let {
    show,
    isShowing,
    complete,
    uniqueId
  } = _$$e({
    overlay: TrJ,
    priority: _$$N.SECONDARY_MODAL
  }, [e]);
  let T = te();
  let N = !!_$$f(fc);
  let I = t?.canEdit;
  let {
    currentView,
    visualAssetsType
  } = wV();
  E(uniqueId, ["Reset Visual Assets Tooltips", io], () => {
    j && t && s(_$$b($$C1));
  });
  useEffect(() => {
    I && T() && !N && visualAssetsType && currentView === S5.VisualAssets && show();
    isShowing && currentView !== S5.VisualAssets && complete();
  }, [show, complete, isShowing, I, T, N, visualAssetsType, currentView]);
  return jsx(rq, {
    arrowPosition: F_.LEFT_TITLE,
    clickOutsideToHide: !0,
    description: tx("rcs.visual_assets.drag_visual_assets_description"),
    disableHighlight: !0,
    isShowing,
    onClose: complete,
    pointToLeftEdge: !0,
    primaryCta: {
      label: tx("onboarding_pointers.got_it"),
      type: "button",
      onClick: complete,
      ctaTrackingDescriptor: _$$c.GOT_IT
    },
    targetKey: ko,
    title: tx("rcs.visual_assets.drag_visual_assets_title"),
    trackingContextName: "Visual Assets Search Tooltip",
    userFlagOnShow: fc
  });
}
export const T = $$j0;
export const g = $$C1;