import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useCallback, useMemo } from "react";
import { d4 } from "../vendor/514228";
import { lQ } from "../905/934246";
import { getFeatureFlags } from "../905/601108";
import { md } from "../figma_app/27355";
import { sx } from "../905/449184";
import { XHR } from "../905/910117";
import { tx, t as _$$t } from "../905/303541";
import { F } from "../905/302958";
import { E } from "../905/453826";
import { e as _$$e } from "../905/621515";
import { A } from "../905/956262";
import { r1 } from "../figma_app/545877";
import { N } from "../figma_app/268271";
import { U } from "../905/455766";
import { h as _$$h } from "../905/284399";
import { LN, q3 } from "../figma_app/450829";
import { $T1 } from "../figma_app/6204";
import { buildUploadUrl } from "../figma_app/169182";
import { sx as _$$sx } from "../905/941192";
import { Gv, ak } from "../figma_app/532170";
import { T as _$$T } from "../3276/255140";
function P() {
  return jsxs(Fragment, {
    children: [jsx("div", {
      style: _$$sx.add({
        backgroundColor: "#5551ff"
      }).$,
      children: jsx(Gv, {
        src: buildUploadUrl("a553882986986c96fc7d298a674e9e0522d05b53"),
        width: "100%"
      })
    }), jsx(ak, {
      children: tx("rcs.mobile_comment_reply_upsell_page1.description")
    })]
  });
}
function I() {
  return jsxs(Fragment, {
    children: [jsx("div", {
      style: _$$sx.flex.alignCenter.wFull.borderBox.p18.h200.add({
        backgroundColor: "#5551ff"
      }).$,
      children: jsx(_$$T, {})
    }), jsx(ak, {
      children: tx("rcs.mobile_comment_reply_upsell_page2.description")
    })]
  });
}
let $$T = "dismissed_mobile_replies_upsell";
let M = r1($$T);
let $$E1 = "commentSubmitted";
export function $$N0() {
  let e = md(M);
  let t = d4(e => e.userAnalyticsData?.is_active_mobile_user);
  let n = _$$e({
    overlay: $T1,
    priority: N.DEFAULT_MODAL
  }, [e]);
  E(n.uniqueId, $$E1, useCallback(() => {
    !t && getFeatureFlags().mobile_reply_upsell && n.show({
      canShow: e => !e
    });
  }, [t, n]));
  let _ = A({
    numSteps: 2,
    onComplete: n.complete
  });
  let C = useCallback(e => ({
    onClickBehavior: "function",
    label: e,
    onClick: e => {
      XHR.post("/api/send_mobile_download_email");
      sx("post_comment_mobile_app_download_prompt_email_me_cta_clicked");
      n.complete();
      e(F.enqueue({
        message: _$$t("rcs.mobile_comment_reply_upsell.email_sent")
      }));
    },
    textForTracking: () => e
  }), [n]);
  let w = useMemo(() => [{
    element: P,
    additionalButton: C(_$$t("rcs.mobile_comment_reply_upsell.email_me")),
    ctaText: _$$t("rcs.mobile_comment_reply_upsell.download_via_qr_code"),
    ctaOnClick: () => {
      sx("post_comment_mobile_app_download_prompt_qr_code_cta_clicked");
    },
    onManualDismiss: () => {
      sx("post_comment_mobile_app_download_prompt_dismissed");
    }
  }, {
    element: I,
    additionalButton: C(_$$t("rcs.mobile_comment_reply_upsell.email_me_instead")),
    ctaText: _$$t("rcs.rcs_shared.done"),
    ctaOnClick: lQ,
    onManualDismiss: lQ
  }], [C]);
  let j = useMemo(() => w.map((e, t) => jsx(_$$h, {
    additionalButton: e.additionalButton,
    ctaText: e.ctaText,
    currentStepIndex: t,
    defaultLocation: LN.BOTTOM_RIGHT,
    element: e.element,
    hideStepCounter: !0,
    isShowing: n.isShowing,
    modalType: q3.DRAGGABLE,
    onClickPrimaryCta: () => {
      _.next();
      e.ctaOnClick();
    },
    onClose: lQ,
    onManualDismiss: () => {
      n.complete();
      e.onManualDismiss();
    },
    title: () => _$$t("rcs.mobile_comment_reply_upsell.title"),
    totalNumSteps: 2,
    trackingContextName: "mobile_reply_upsell",
    userFlagOnShow: $$T
  }, t)), [w, n, _]);
  return jsx(U, {
    currentStep: _.currentStep,
    isShowing: n.isShowing,
    children: j
  });
}
export const T = $$N0;
export const w = $$E1;