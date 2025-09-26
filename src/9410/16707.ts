import { jsx } from "react/jsx-runtime";
import { useMemo, createElement, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppStateTsApi, SelfDesignType } from "../figma_app/763686";
import { Xr, useAtomWithSubscription, atomStoreManager } from "../figma_app/27355";
import { debugState } from "../905/407919";
import { h as _$$h } from "../905/791079";
import { buildUploadUrl, isGovCluster, getLocaleFallbacks } from "../figma_app/169182";
import { isAIFeaturesDisabled } from "../figma_app/459490";
import { SecureLink } from "../figma_app/637027";
import { renderI18nText } from "../905/303541";
import { selectViewAction } from "../905/929976";
import { postUserFlag } from "../905/985254";
import { UpgradeAction } from "../905/370443";
import { e as _$$e } from "../905/621515";
import { A as _$$A } from "../905/956262";
import { d2 } from "../figma_app/579169";
import { orgSubscriptionAtom } from "../905/296690";
import { fullscreenValue } from "../figma_app/455680";
import { getObservableValue } from "../figma_app/84367";
import { currentTeamAtom } from "../figma_app/598018";
import { N as _$$N } from "../figma_app/268271";
import { qo } from "../905/696396";
import { U as _$$U } from "../905/455766";
import { y as _$$y } from "../905/129046";
import { _l } from "../figma_app/995208";
import { rq } from "../905/425180";
import { F_, EL } from "../905/858282";
import { canEnterDesignMode } from "../figma_app/357367";
import { Yqi } from "../figma_app/6204";
import { jY } from "../figma_app/21029";
import { g as _$$g } from "../9410/28058";
import { VZ } from "../figma_app/60023";
import { E as _$$E } from "../9410/583075";
import { FProductAccessType, FPlanNameType } from "../figma_app/191312";
import { wH } from "../figma_app/680166";
import { WAFImage } from "../905/675859";
import { MB, b_, hx, uy, J5 } from "../figma_app/835688";
function U() {
  return jsx(WAFImage, {
    src: buildUploadUrl("b5ff672e289f44685a5e04d3de9f17f154fb2455"),
    alt: "Figma Slides carousel",
    width: 332
  });
}
export function $$K0() {
  let e = Xr(VZ);
  let t = jY();
  let i = canEnterDesignMode();
  let {
    show,
    isShowing,
    complete
  } = _$$e({
    overlay: Yqi,
    priority: _$$N.HIGH_PRIORITY_MODAL
  });
  let c = useMemo(() => i ? [$$H1, z, V, W, Y, J] : [$$H1, z, V, W, J], [i]);
  let {
    currentStep,
    next
  } = _$$A({
    numSteps: c.length,
    onComplete: complete
  });
  let h = useMemo(() => {
    let a = () => {
      next();
      e(!0);
    };
    let o = c.map((e, r) => createElement(e, {
      onClickPrimaryCta: t || 0 !== r ? next : a,
      onClickSecondaryCta: complete,
      isShowing,
      totalSteps: i ? 5 : 4,
      isOnboarding: !0
    }));
    t || o.splice(1, 0, jsx(_$$g, {}));
    return o;
  }, [c, t, next, e, complete, isShowing, i]);
  return (_$$h(() => {
    show();
  }), isShowing && h) ? jsx(_$$U, {
    currentStep,
    isShowing,
    children: h
  }) : null;
}
export function $$H1({
  onClickPrimaryCta: e,
  onClickSecondaryCta: t,
  isShowing: i,
  isOnboarding: s
}) {
  let d;
  let _ = Xr(VZ);
  let x = useAtomWithSubscription(d2);
  let C = function () {
    let {
      getPlanAndPlanUser
    } = wH();
    let {
      plan,
      planUser
    } = getPlanAndPlanUser(FProductAccessType.SLIDES);
    return plan?.tier !== FPlanNameType.STARTER && plan?.tier !== FPlanNameType.STUDENT && (planUser?.seatTypeLicenseTypes?.includes(FProductAccessType.SLIDES) ?? !1);
  }();
  let v = useDispatch();
  let T = x.data === qo.ORG;
  let S = atomStoreManager.get(orgSubscriptionAtom);
  let j = atomStoreManager.get(currentTeamAtom);
  let k = debugState.getState().openFile;
  let N = !k || !k.canEdit;
  let A = isGovCluster();
  let O = isAIFeaturesDisabled({
    currentOrg: S,
    currentTeam: j,
    isViewer: N
  });
  let L = "/sub-processors/";
  let R = "/ssa/";
  let M = "ja" === getLocaleFallbacks()[0] ? renderI18nText("slides.onboarding.welcome.title.jp") : renderI18nText("slides.onboarding.welcome.title");
  d = C ? renderI18nText("slides.onboarding.ga.billable_seat.welcome.description") : renderI18nText("slides.onboarding.ga.welcome.description");
  let B = T ? O ? renderI18nText("slides.onboarding.welcome.org.footer.no_ai", {
    services_agreement: jsx(SecureLink, {
      href: R,
      target: "_blank",
      trusted: !0,
      children: renderI18nText("slides.onboarding.services_agreement")
    })
  }) : renderI18nText("slides.onboarding.welcome.org.footer.ai", {
    subprocessors: jsx(SecureLink, {
      href: L,
      target: "_blank",
      trusted: !0,
      children: renderI18nText("slides.onboarding.subprocessors")
    }),
    services_agreement: jsx(SecureLink, {
      href: R,
      target: "_blank",
      trusted: !0,
      children: renderI18nText("slides.onboarding.services_agreement")
    })
  }) : O ? void 0 : renderI18nText("slides.onboarding.welcome.starter.footer", {
    subprocessors: jsx(SecureLink, {
      href: L,
      target: "_blank",
      trusted: !0,
      children: renderI18nText("slides.onboarding.subprocessors")
    })
  });
  useEffect(() => {
    s && !A && v?.(postUserFlag({
      seen_slides_onboarding: !1
    }));
  });
  let G = () => {
    e();
    v?.(postUserFlag({
      seen_slides_onboarding: !0,
      ...(!A && {
        agreed_to_slides_ai_terms: !0
      })
    }));
    s && _(!0);
  };
  let K = () => {
    if (A) {
      G();
      return;
    }
    v?.(selectViewAction({
      view: "recentsAndSharing"
    }));
    t();
  };
  return N ? null : jsx(_l, {
    description: jsx("span", {
      style: {
        whiteSpace: "pre-line"
      },
      children: d
    }),
    disclaimerFooter: A ? void 0 : B,
    isShowing: i,
    media: jsx(U, {}),
    onClose: K,
    preventUserClose: !A,
    primaryCta: {
      type: "button",
      label: renderI18nText("slides.onboarding.welcome.primary_cta"),
      onClick: G,
      ctaTrackingDescriptor: UpgradeAction.NEXT
    },
    secondaryCta: A ? void 0 : {
      type: "button",
      label: renderI18nText("slides.onboarding.welcome.secondary_cta"),
      onClick: K,
      ctaTrackingDescriptor: UpgradeAction.CLOSE
    },
    title: M,
    trackingContextName: "Slides Onboarding > Welcome"
  });
}
function z({
  onClickPrimaryCta: e,
  onClickSecondaryCta: t,
  isShowing: i,
  totalSteps: n
}) {
  let a = getObservableValue(AppStateTsApi?.singleSlideView().isInFocusedNodeView, !0);
  return jsx(rq, {
    arrowPosition: F_.BOTTOM,
    description: renderI18nText("slides.onboarding.new_slide.description"),
    isShowing: i,
    media: jsx(_$$y, {
      src: buildUploadUrl("2811dcf7f07f10fbc8543106336765058bc83266"),
      alt: "slides template picker",
      aspectRatio: 240 / 135
    }),
    onClose: t,
    primaryCta: {
      type: "button",
      label: renderI18nText("slides.onboarding.callout.next"),
      onClick: () => {
        e();
        a && AppStateTsApi?.singleSlideView().exitFocusedNodeViewAndLeavePanelsOpen();
      },
      ctaTrackingDescriptor: UpgradeAction.NEXT
    },
    secondaryCta: {
      type: "button",
      label: renderI18nText("slides.onboarding.callout.close"),
      onClick: t,
      ctaTrackingDescriptor: UpgradeAction.CLOSE
    },
    shouldDisableAnimation: !0,
    stepCounter: {
      stepNum: 1,
      totalNumSteps: n
    },
    targetKey: MB,
    title: renderI18nText("slides.onboarding.new_slide.title"),
    trackingContextName: "Slides Onboarding > New Slide"
  });
}
function V({
  onClickPrimaryCta: e,
  onClickSecondaryCta: t,
  isShowing: i,
  totalSteps: n
}) {
  return jsx(rq, {
    description: renderI18nText("slides.onboarding.views.description"),
    isShowing: i,
    media: jsx(_$$y, {
      src: buildUploadUrl("8ad8b13cac28f9fb6eaaed9cad7c621684fadd6b"),
      alt: "Grid view in Slides",
      aspectRatio: 240 / 135
    }),
    onClose: t,
    primaryCta: {
      type: "button",
      label: renderI18nText("slides.onboarding.callout.next"),
      onClick: () => {
        fullscreenValue.triggerAction("enter-focus-view");
        e();
      },
      ctaTrackingDescriptor: UpgradeAction.NEXT
    },
    secondaryCta: {
      type: "button",
      label: renderI18nText("slides.onboarding.callout.close"),
      onClick: t,
      ctaTrackingDescriptor: UpgradeAction.CLOSE
    },
    shouldDisableAnimation: !0,
    stepCounter: {
      stepNum: 2,
      totalNumSteps: n
    },
    targetKey: b_,
    title: renderI18nText("slides.onboarding.views.title"),
    trackingContextName: "Slides Onboarding > Views"
  });
}
function W({
  onClickPrimaryCta: e,
  onClickSecondaryCta: t,
  isShowing: i,
  totalSteps: n
}) {
  let a = canEnterDesignMode();
  let o = _$$E();
  return jsx(rq, {
    description: renderI18nText("slides.onboarding.nondesigner.tools.description"),
    isShowing: i,
    media: jsx(_$$y, {
      src: buildUploadUrl("aca6af2d36ffc1a4f65a12247f598a7598a530b7"),
      alt: "Apps in Slides",
      aspectRatio: 240 / 135
    }),
    onClose: t,
    primaryCta: {
      type: "button",
      label: renderI18nText("slides.onboarding.callout.next"),
      onClick: () => {
        e();
        a && o(SelfDesignType.DESIGN);
      },
      ctaTrackingDescriptor: UpgradeAction.NEXT
    },
    secondaryCta: {
      type: "button",
      label: renderI18nText("slides.onboarding.callout.close"),
      onClick: () => {
        t();
      },
      ctaTrackingDescriptor: UpgradeAction.CLOSE
    },
    shouldCenterArrow: EL.BEST_EFFORT,
    shouldDisableAnimation: !0,
    shouldHideArrow: !0,
    stepCounter: {
      stepNum: 3,
      totalNumSteps: n
    },
    targetKey: hx,
    title: renderI18nText("slides.onboarding.nondesigner.tools.title"),
    trackingContextName: "Slides Onboarding > Tools"
  });
}
function Y({
  onClickPrimaryCta: e,
  onClickSecondaryCta: t,
  isShowing: i,
  totalSteps: n
}) {
  let a = _$$E();
  return jsx(rq, {
    description: renderI18nText("slides.onboarding.designer.tools.description"),
    isShowing: i,
    media: jsx(_$$y, {
      src: buildUploadUrl("5064800f3f60febf8b2ad2ad8ba4efdd6167eeaa"),
      alt: "Design tool toggle",
      aspectRatio: 240 / 135
    }),
    onClose: t,
    primaryCta: {
      type: "button",
      label: renderI18nText("slides.onboarding.callout.next"),
      onClick: () => {
        e();
        a(SelfDesignType.DESIGN);
      },
      ctaTrackingDescriptor: UpgradeAction.NEXT
    },
    secondaryCta: {
      type: "button",
      label: renderI18nText("slides.onboarding.callout.close"),
      onClick: () => {
        t();
      },
      ctaTrackingDescriptor: UpgradeAction.CLOSE
    },
    shouldCenterArrow: EL.BEST_EFFORT,
    shouldDisableAnimation: !0,
    shouldHideArrow: !0,
    stepCounter: {
      stepNum: 4,
      totalNumSteps: n
    },
    targetKey: uy,
    title: renderI18nText("slides.onboarding.designer.tools.title"),
    trackingContextName: "Slides Onboarding > Design Mode"
  });
}
function J({
  onClickSecondaryCta: e,
  isShowing: t,
  totalSteps: i
}) {
  return jsx(rq, {
    description: renderI18nText("slides.onboarding.share.description"),
    isShowing: t,
    media: jsx(_$$y, {
      src: buildUploadUrl("a3ed241305c3e13d9ec5cab6e9a88db7572695c5"),
      alt: "presenter mode in Slides",
      aspectRatio: 240 / 135
    }),
    onClose: e,
    onTargetLost: e,
    primaryCta: {
      type: "button",
      label: renderI18nText("slides.onboarding.callout.done"),
      onClick: e,
      ctaTrackingDescriptor: UpgradeAction.DONE
    },
    shouldDisableAnimation: !0,
    stepCounter: {
      stepNum: i,
      totalNumSteps: i
    },
    targetKey: J5,
    title: renderI18nText("slides.onboarding.share.title"),
    trackingContextName: "Slides Onboarding > Present"
  });
}
export const _ = $$K0;
export const i = $$H1;
