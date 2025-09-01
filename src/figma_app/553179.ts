import { jsx } from "react/jsx-runtime";
import { tx } from "../905/303541";
import { c } from "../905/370443";
import { A2, xI } from "../figma_app/989514";
export function $$o0(e) {
  let t = tx("tooltips_plus_onboarding.outro.title");
  let r = tx("tooltips_plus_onboarding.outro.description");
  return jsx(A2, {
    children: jsx(xI, {
      dismissModal: e.onClose,
      title: t,
      trackingContextName: "Tooltips+ Outro Step",
      onSecondaryCtaClick: e.onSecondaryCtaClick,
      onPrimaryCtaClick: e.onPrimaryCtaClick,
      secondaryCtaProps: {
        ctaText: tx("tooltips_plus_onboarding.outro.practice_more_btn"),
        ctaTrackingDescriptor: c.PRACTICE_MORE_HERE
      },
      primaryCtaProps: {
        ctaText: tx("tooltips_plus_onboarding.outro.start_new_file_btn"),
        ctaTrackingDescriptor: c.START_A_NEW_FILE
      },
      children: r
    })
  });
}
export const J = $$o0;