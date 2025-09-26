import { jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { renderI18nText } from "../905/303541";
import { alwaysFalseCallback2 } from "../figma_app/275462";
import { postUserFlag } from "../905/985254";
import { UpgradeAction } from "../905/370443";
import { E } from "../905/453826";
import { e as _$$e } from "../905/621515";
import { useFullscreenViewFile, selectCurrentFile } from "../figma_app/516028";
import { selectCurrentUser } from "../905/372672";
import { selectUserFlag } from "../905/940356";
import { N as _$$N } from "../figma_app/268271";
import { OnboardingModal } from "../905/425180";
import { wV, S5 } from "../figma_app/647246";
import { ArrowPosition } from "../905/748636";
import { TrJ } from "../figma_app/6204";
import { a5, fc, bo, io, ko } from "../figma_app/73698";
export let $$C1 = {
  [a5]: !1,
  [fc]: !1,
  [bo]: !1
};
export function $$j0() {
  let e = useFullscreenViewFile();
  let t = selectCurrentFile();
  let s = useDispatch();
  let j = selectCurrentUser();
  let {
    show,
    isShowing,
    complete,
    uniqueId
  } = _$$e({
    overlay: TrJ,
    priority: _$$N.SECONDARY_MODAL
  }, [e]);
  let T = alwaysFalseCallback2();
  let N = !!selectUserFlag(fc);
  let I = t?.canEdit;
  let {
    currentView,
    visualAssetsType
  } = wV();
  E(uniqueId, ["Reset Visual Assets Tooltips", io], () => {
    j && t && s(postUserFlag($$C1));
  });
  useEffect(() => {
    I && T() && !N && visualAssetsType && currentView === S5.VisualAssets && show();
    isShowing && currentView !== S5.VisualAssets && complete();
  }, [show, complete, isShowing, I, T, N, visualAssetsType, currentView]);
  return jsx(OnboardingModal, {
    arrowPosition: ArrowPosition.LEFT_TITLE,
    clickOutsideToHide: !0,
    description: renderI18nText("rcs.visual_assets.drag_visual_assets_description"),
    disableHighlight: !0,
    isShowing,
    onClose: complete,
    pointToLeftEdge: !0,
    primaryCta: {
      label: renderI18nText("onboarding_pointers.got_it"),
      type: "button",
      onClick: complete,
      ctaTrackingDescriptor: UpgradeAction.GOT_IT
    },
    targetKey: ko,
    title: renderI18nText("rcs.visual_assets.drag_visual_assets_title"),
    trackingContextName: "Visual Assets Search Tooltip",
    userFlagOnShow: fc
  });
}
export const T = $$j0;
export const g = $$C1;