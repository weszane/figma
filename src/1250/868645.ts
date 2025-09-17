import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAtomWithSubscription } from "../figma_app/27355";
import { buildUploadUrl } from "../figma_app/169182";
import { oW } from "../905/675859";
import { a as _$$a } from "../905/29104";
import { Ph } from "../905/160095";
import { renderI18nText } from "../905/303541";
import { TextWithTruncation } from "../905/984674";
import { selectViewAction } from "../905/929976";
import { postUserFlag } from "../905/985254";
import { UpgradeAction } from "../905/370443";
import { e as _$$e } from "../905/621515";
import { userFlagExistsAtomFamily } from "../figma_app/545877";
import { N } from "../figma_app/268271";
import { _l } from "../figma_app/995208";
import { qmK } from "../figma_app/6204";
import { _H } from "../figma_app/408883";
import { Ve } from "../figma_app/812915";
import { M } from "../1250/475573";
let j = "acknowledged_figmake_ai_tos_onboarding";
let k = userFlagExistsAtomFamily(j);
export function $$E2() {
  return useAtomWithSubscription(k);
}
export function $$C3(e) {
  let t = useDispatch();
  let n = useCallback(e => {
    t(postUserFlag({
      [j]: e
    }));
  }, [t]);
  let a = useCallback(() => {
    n(!0);
    e();
  }, [n, e]);
  let o = useCallback(() => {
    t(selectViewAction({
      view: "recentsAndSharing"
    }));
  }, [t]);
  return {
    onAcknowledge: a,
    onClose: useCallback(() => {
      n(!1);
      o();
    }, [n, o])
  };
}
export function $$I1() {
  let e = _$$a();
  let t = $$E2();
  let {
    figmakeInFullscreen
  } = Ve();
  let i = _H();
  let {
    show,
    isShowing,
    complete
  } = _$$e({
    overlay: qmK,
    priority: N.HIGH_PRIORITY_MODAL - 1
  }, [t]);
  let {
    onAcknowledge,
    onClose
  } = $$C3(complete);
  useEffect(() => {
    figmakeInFullscreen || i || show({
      canShow: t => !t && e
    });
  }, [figmakeInFullscreen, i, show, e]);
  return jsx(_l, {
    description: renderI18nText("figmake.legal_onboarding_modal.body"),
    disclaimerFooter: jsx($$N0, {}),
    isShowing,
    media: jsx(A, {}),
    onClose,
    preventUserClose: !0,
    primaryCta: {
      type: "button",
      label: jsx(TextWithTruncation, {
        fontSize: 11,
        children: renderI18nText("figmake.legal_onboarding_modal.try_figmake_button")
      }),
      onClick: onAcknowledge,
      ctaTrackingDescriptor: UpgradeAction.NEXT
    },
    secondaryCta: {
      type: "button",
      label: renderI18nText("figmake.legal_onboarding_modal.back_to_files"),
      onClick: onClose,
      ctaTrackingDescriptor: UpgradeAction.CLOSE
    },
    title: jsx(S, {}),
    trackingContextName: "Rev Onboarding > Terms of Service"
  });
}
function A() {
  return jsx(oW, {
    src: buildUploadUrl("d158cef30c1ce26cce260c1051ecdf35dd527c94"),
    alt: "Figma Rev Terms of Service",
    width: 332
  });
}
function S() {
  return jsxs(Fragment, {
    children: [jsx("div", {
      className: "xeq5yr9 xod5an3",
      children: jsx(M, {})
    }), renderI18nText("figmake.legal_onboarding_modal.title")]
  });
}
export function $$N0() {
  if (!_$$a()) return null;
  let e = jsx(Ph, {
    newTab: !0,
    trusted: !0,
    href: "/sub-processors/",
    children: renderI18nText("figmake.legal_onboarding_modal.disclaimer_figmas_ai_subprocessor_link")
  });
  let t = jsx(Ph, {
    newTab: !0,
    trusted: !0,
    href: "/product-specific-terms/",
    children: renderI18nText("figmake.legal_onboarding_modal.disclaimer_figmas_beta_terms")
  });
  let n = jsx(Ph, {
    newTab: !0,
    trusted: !0,
    href: "/legal/acceptable-publication-policy/",
    children: renderI18nText("figmake.legal_onboarding_modal.disclaimer_figmas_acceptable_publication_policy")
  });
  return renderI18nText("figmake.legal_onboarding_modal.footer_disclaimer_beta_2", {
    figmas_beta_terms_link: t,
    figmas_ai_subprocessors_link: e,
    figmas_acceptable_publication_policy: n
  });
}
export const aX = $$N0;
export const ev = $$I1;
export const jl = $$E2;
export const yd = $$C3;