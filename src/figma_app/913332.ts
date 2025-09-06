import { jsx } from "react/jsx-runtime";
import { useState } from "react";
import { ServiceCategories as _$$e } from "../905/165054";
import { _ as _$$_ } from "../905/410717";
import { c as _$$c } from "../905/425573";
import { SeverityLevel } from "../905/11";
import { tH, H4 } from "../905/751457";
import { renderI18nText } from "../905/303541";
import { YJ } from "../figma_app/297957";
import { q5 } from "../figma_app/516028";
import { kU, Kw, RJ } from "../figma_app/869006";
import { G } from "../figma_app/35473";
import { $q } from "../figma_app/60171";
export function $$g0(e) {
  let t = q5();
  return t ? jsx($$f, {
    ...e,
    file: t
  }) : null;
}
function $$f(e) {
  let [t, r] = useState(!0);
  let p = kU({
    file: e.file,
    viewOnly: !0
  });
  let g = YJ(!!(e.isDesignEditor && p?.type === Kw.PLAN_REQUEST_UPGRADE));
  if (!t) return null;
  let f = renderI18nText("fullscreen.toolbar_banner.you_can_only_view_and_comment_on_this_file");
  let E = _$$_;
  g() && (f = renderI18nText("1_click_expansion.you_need_a_full_seat"), E = _$$c);
  return jsx(tH, {
    boundaryKey: "AutoUpgradeConfirmationModal",
    fallback: H4.NONE_I_KNOW_WHAT_IM_DOING,
    severity: SeverityLevel.Critical,
    sentryTags: {
      area: _$$e.MONETIZATION_EXPANSION
    },
    children: jsx(G, {
      leftContent: jsx(E, {
        className: $q
      }),
      content: jsx("div", {
        children: f
      }),
      rightContent: jsx(RJ, {
        viewOnly: !0,
        variant: "primary"
      }),
      onClose: () => {
        e.onClose && e.onClose();
        r(!1);
      },
      bannerType: "view_only",
      isFigjamDLTBanner: !0
    })
  });
}
export const f = $$g0;