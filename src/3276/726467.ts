import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useCallback } from "react";
import { useAtomWithSubscription } from "../figma_app/27355";
import { A } from "../905/920142";
import { h as _$$h } from "../905/207101";
import { E } from "../905/453826";
import { e as _$$e } from "../905/621515";
import { d9, $5 } from "../3276/240191";
import { PD } from "../figma_app/101956";
import { r1 } from "../figma_app/545877";
import { getUserCreatedAt } from "../905/372672";
import { M8 } from "../figma_app/915202";
import { N } from "../figma_app/268271";
import { h as _$$h2 } from "../905/284399";
import { q3 } from "../figma_app/450829";
import { aI5, ar0 } from "../figma_app/6204";
import { trackEventAnalytics } from "../905/449184";
import { FJ } from "../905/508367";
import { ButtonBasePrimaryTracked, ButtonSecondaryTracked } from "../figma_app/637027";
import { renderI18nText } from "../905/303541";
let $$w = {
  SPOTLIGHT_GUIDE: "https://help.figma.com/hc/articles/5025214483351-Facilitate-meetings-with-spotlight",
  FOLLOW_GUIDE: "https://help.figma.com/hc/articles/360040322673-Follow-collaborators-in-a-file"
};
function j(e) {
  return jsxs("div", {
    children: [jsx("div", {
      className: "multiplayer_nux_modals--title--N0NZG text--fontPos13--xW8hS text--_fontBase--QdLsd",
      children: e.title
    }), jsx("div", {
      className: "multiplayer_nux_modals--content--mROkG",
      children: e.content
    }), jsxs("div", {
      className: "multiplayer_nux_modals--footerContainer--I-MS-",
      children: [jsx(ButtonBasePrimaryTracked, {
        className: "multiplayer_nux_modals--footerButton--TJL3G",
        onClick: e.primaryCTAOnClick,
        children: e.primaryCTA
      }), jsx(ButtonSecondaryTracked, {
        onClick: e.secondaryCTAOnClick,
        children: e.secondaryCTA
      })]
    })]
  });
}
function k({
  onDismissModal: e
}) {
  let t = renderI18nText("collaboration.spotlight.2_0.onboarding_spotlight.description_with_spotlight_arg", {
    spotlightMeButtonText: jsx("b", {
      children: renderI18nText("collaboration.spotlight.tooltip.spotlight_me")
    })
  });
  return jsx(j, {
    title: renderI18nText("collaboration.spotlight.onboarding_spotlight.title"),
    content: t,
    secondaryCTA: renderI18nText("collaboration.voice.learn_more"),
    secondaryCTAOnClick: () => FJ($$w.SPOTLIGHT_GUIDE, "_blank", "noopener"),
    primaryCTA: renderI18nText("collaboration.spotlight.onboarding.next"),
    primaryCTAOnClick: () => {
      e();
      trackEventAnalytics("Context Viewed", {
        name: "should-close-open-spotlight-nux"
      });
    }
  });
}
function P({
  onDismissModal: e
}) {
  return jsx(j, {
    title: renderI18nText("collaboration.spotlight.onboarding_observation.title"),
    content: renderI18nText("collaboration.spotlight.onboarding_observation.description"),
    secondaryCTA: renderI18nText("collaboration.voice.learn_more"),
    secondaryCTAOnClick: () => FJ($$w.FOLLOW_GUIDE, "_blank", "noopener"),
    primaryCTA: renderI18nText("collaboration.spotlight.onboarding.done"),
    primaryCTAOnClick: () => {
      e();
    }
  });
}
let I = "seen_synchronous_collaboration_onboarding";
let T = r1(I);
export function $$M0() {
  let e = useAtomWithSubscription(d9);
  let t = useAtomWithSubscription(PD);
  let n = useAtomWithSubscription($5);
  let u = useAtomWithSubscription(T);
  let x = getUserCreatedAt();
  let b = A().subtract(7, "day").isBefore(A(x));
  let y = _$$e({
    overlay: aI5,
    priority: N.DEFAULT_MODAL
  }, [t, u]);
  let C = _$$e({
    overlay: ar0,
    priority: N.DEFAULT_MODAL
  });
  let w = useCallback(() => {
    e && n && !b && y.show({
      canShow: (e, t) => !e && !t
    });
  }, [e, n, b, y]);
  let j = useCallback(() => {
    C.show();
  }, [C]);
  let M = useCallback(() => {
    y.complete();
    j();
  }, [y, j]);
  _$$h(w);
  E(y.uniqueId, M8, w);
  return jsxs(Fragment, {
    children: [jsx(_$$h2, {
      element: ({
        onClickPrimaryCta: e
      }) => jsx(k, {
        onDismissModal: e
      }),
      isShowing: y.isShowing,
      modalType: q3.WALK_THROUGH,
      onClickPrimaryCta: M,
      onClose: y.complete,
      onManualDismiss: y.complete,
      onboardingKey: "multiplayer-spotlight-nux-key",
      shouldDismissWhenLostDOMTarget: !0,
      trackingContextName: "multiplayer_onboarding",
      userFlagOnShow: I,
      width: 268
    }), jsx(_$$h2, {
      element: ({
        dismissModal: e
      }) => jsx(P, {
        onDismissModal: e
      }),
      isShowing: C.isShowing,
      modalType: q3.WALK_THROUGH,
      onClickPrimaryCta: C.complete,
      onClose: C.complete,
      onManualDismiss: C.complete,
      onboardingKey: "multiplayer-observation-nux-key",
      shouldDismissWhenLostDOMTarget: !0,
      trackingContextName: "multiplayer_observation_onboarding",
      userFlagOnShow: I,
      width: 268
    })]
  });
}
export const w = $$M0;