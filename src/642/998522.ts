import { jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAtomWithSubscription } from "../figma_app/27355";
import { buildUploadUrl } from "../figma_app/169182";
import { renderI18nText } from "../905/303541";
import { UpgradeAction } from "../905/370443";
import { useOverlay } from "../905/621515";
import { Fy } from "../figma_app/579169";
import { userFlagExistsAtomFamily } from "../figma_app/545877";
import { zC } from "../figma_app/186343";
import { useIsProgressBarHiddenOrLocked } from "../figma_app/722362";
import { useDeepEqualSceneValue } from "../figma_app/167249";
import { ModalPriority } from "../figma_app/268271";
import { VideoOverlayComponent } from "../905/129046";
import { OnboardingModal } from "../905/425180";
import { ArrowPosition } from "../905/858282";
import { UI3LayersHorizontalScrollOverlay } from "../figma_app/6204";
let $$C1 = "ui3-layers-horizontal-scroll-onboarding-key";
let $$j2 = "ui2-layers-horizontal-scroll-onboarding-key";
let v = userFlagExistsAtomFamily("seen_ui3_layers_horizontal_scroll_overlay");
export function $$S0() {
  let e = useIsProgressBarHiddenOrLocked();
  let t = useAtomWithSubscription(Fy);
  let s = useSelector(e => e.mirror.appModel.currentPage);
  let p = useDeepEqualSceneValue((e, t) => !zC(e, t), s);
  let j = useAtomWithSubscription(v);
  let {
    show,
    isShowing,
    complete
  } = useOverlay({
    overlay: UI3LayersHorizontalScrollOverlay,
    priority: ModalPriority.SECONDARY_MODAL
  }, [t, j]);
  useEffect(() => {
    show({
      canShow: (t, s) => t && !e && p && !s
    });
  }, [show, e, p, t]);
  return jsx(OnboardingModal, {
    arrowPosition: ArrowPosition.RIGHT_TITLE,
    description: renderI18nText("ui3_layers_horizontal_scroll_overlay.ui3_description"),
    disableHighlight: !0,
    isShowing,
    media: jsx(VideoOverlayComponent, {
      src: buildUploadUrl("86193716c443398bbd6b55d19b65db2eaf0fe3c1"),
      aspectRatio: 16 / 9
    }),
    onClose: complete,
    primaryCta: {
      label: renderI18nText("general.got_it"),
      ctaTrackingDescriptor: UpgradeAction.GOT_IT,
      type: "button",
      onClick: complete
    },
    targetKey: $$C1,
    title: renderI18nText("ui3_layers_horizontal_scroll_overlay.ui3_title"),
    trackingContextName: "UI3 Layers Horizontal Scroll Overlay"
  });
}
export const Ay = $$S0;
export const BZ = $$C1;
export const m4 = $$j2;