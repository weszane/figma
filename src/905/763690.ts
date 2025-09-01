import { jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { getFeatureFlags } from "../905/601108";
import { md } from "../figma_app/27355";
import { buildUploadUrl } from "../figma_app/169182";
import { i as _$$i } from "../905/264868";
import { tx } from "../905/303541";
import { e as _$$e } from "../905/621515";
import { Fy } from "../figma_app/579169";
import { r1 } from "../figma_app/545877";
import { N } from "../figma_app/268271";
import { w } from "../905/129046";
import { rq } from "../905/425180";
import { F_ } from "../905/858282";
import { b0J } from "../figma_app/6204";
let A = "seen_file_preview_overlay";
let y = r1(A);
export function $$b0() {
  let e = md(_$$i);
  let t = md(Fy);
  let i = !!getFeatureFlags().scrub_file_browser_search_results;
  let p = md(y);
  let {
    show,
    isShowing,
    complete
  } = _$$e({
    overlay: b0J,
    priority: N.DEFAULT_MODAL
  }, [t, p]);
  useEffect(() => {
    e.size && i && show({
      canShow: (e, t) => e && !t
    });
  }, [i, e, show]);
  return jsx(rq, {
    arrowPosition: F_.LEFT_TITLE,
    description: tx("file_preview_onboarding.move_your_cursor"),
    disableHighlight: !0,
    isShowing,
    media: jsx(w, {
      src: buildUploadUrl("31df1314d5fec4580db0bc6ceda8fcca7a600e30"),
      aspectRatio: 16 / 9
    }),
    onClose: complete,
    onTargetLost: complete,
    targetKey: "scrubbable-thumbnail",
    title: tx("file_preview_onboarding.new_ways_to_preview_files"),
    trackingContextName: "FilePreviewOverlay",
    userFlagOnShow: A
  });
}
export const b0 = $$b0;