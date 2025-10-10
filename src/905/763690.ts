import { jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { getFeatureFlags } from "../905/601108";
import { useAtomWithSubscription } from "../figma_app/27355";
import { buildUploadUrl } from "../figma_app/169182";
import { i as _$$i } from "../905/264868";
import { renderI18nText } from "../905/303541";
import { useOverlay } from "../905/621515";
import { Fy } from "../figma_app/579169";
import { userFlagExistsAtomFamily } from "../figma_app/545877";
import { ModalPriority } from "../figma_app/268271";
import { VideoOverlayComponent } from "../905/129046";
import { OnboardingModal } from "../905/425180";
import { ArrowPosition } from "../905/858282";
import { FilePreviewOverlay } from "../figma_app/6204";
let A = "seen_file_preview_overlay";
let y = userFlagExistsAtomFamily(A);
export function $$b0() {
  let e = useAtomWithSubscription(_$$i);
  let t = useAtomWithSubscription(Fy);
  let i = !!getFeatureFlags().scrub_file_browser_search_results;
  let p = useAtomWithSubscription(y);
  let {
    show,
    isShowing,
    complete
  } = useOverlay({
    overlay: FilePreviewOverlay,
    priority: ModalPriority.DEFAULT_MODAL
  }, [t, p]);
  useEffect(() => {
    e.size && i && show({
      canShow: (e, t) => e && !t
    });
  }, [i, e, show]);
  return jsx(OnboardingModal, {
    arrowPosition: ArrowPosition.LEFT_TITLE,
    description: renderI18nText("file_preview_onboarding.move_your_cursor"),
    disableHighlight: !0,
    isShowing,
    media: jsx(VideoOverlayComponent, {
      src: buildUploadUrl("31df1314d5fec4580db0bc6ceda8fcca7a600e30"),
      aspectRatio: 16 / 9
    }),
    onClose: complete,
    onTargetLost: complete,
    targetKey: "scrubbable-thumbnail",
    title: renderI18nText("file_preview_onboarding.new_ways_to_preview_files"),
    trackingContextName: "FilePreviewOverlay",
    userFlagOnShow: A
  });
}
export const b0 = $$b0;