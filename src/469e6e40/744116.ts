import { jsx } from "react/jsx-runtime";
import { Suspense } from "react";
import { useDispatch } from "react-redux";
import { ServiceCategories } from "../905/165054";
import { useSingleEffect } from "../905/791079";
import { renderI18nText } from "../905/303541";
import { y3 } from "../figma_app/307841";
import { eC } from "../figma_app/982327";
import { Ut } from "../figma_app/425283";
import { postUserFlag } from "../905/985254";
import { UpgradeAction } from "../905/370443";
import { E as _$$E } from "../905/453826";
import { e as _$$e2 } from "../905/621515";
import { d as _$$d } from "../figma_app/603561";
import { selectUserFlag } from "../905/940356";
import { N as _$$N } from "../figma_app/268271";
import { rq } from "../905/425180";
import { F_ } from "../905/858282";
import { d8X } from "../figma_app/6204";
if (443 == require.j) {}
if (443 == require.j) {}
let y = "seen_seat_approval_overlay";
let $$w1 = "settings_tab_click";
function k({
  isTeam: e,
  org: t,
  team: a
}) {
  let s = useDispatch();
  let r = y3(t?.created_at || a?.created_at, a?.last_upgraded_at);
  let h = selectUserFlag(y);
  let {
    show,
    isShowing,
    complete,
    uniqueId
  } = _$$e2({
    overlay: d8X,
    priority: _$$N.DEFAULT_MODAL
  });
  let S = e => s(postUserFlag({
    [y]: e
  }));
  let N = () => {
    S(!0);
    complete();
  };
  useSingleEffect(() => {
    !r || h || a?.student_team || show();
  });
  _$$E(uniqueId, "settings_tab_click", () => {
    isShowing && N();
  });
  let I = e ? renderI18nText("billing_modals.seat_approval_overlay.description") : renderI18nText("billing_modals.seat_approval_overlay.org_description");
  return jsx(rq, {
    arrowPosition: F_.LEFT_TITLE,
    description: I,
    disableHighlight: !0,
    emphasized: !0,
    isShowing,
    onClose: N,
    primaryCta: {
      label: renderI18nText("billing_modals.seat_approval_overlay.cta"),
      type: "button",
      onClick: N,
      ctaTrackingDescriptor: UpgradeAction.DONE
    },
    targetKey: e ? eC : Ut,
    title: renderI18nText("billing_modals.seat_approval_overlay.title"),
    trackingContextName: "Billing Seat Approval Overlay"
  });
}
function E(e) {
  return _$$d({
    reportErrorsToTeam: ServiceCategories.MONETIZATION_EXPANSION
  }) ? null : jsx(k, {
    ...e
  });
}
export function $$C0(e) {
  return jsx(Suspense, {
    fallback: null,
    children: jsx(E, {
      ...e
    })
  });
}
export const d = $$C0;
export const o = $$w1;