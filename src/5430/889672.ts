import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFeatureFlags } from "../905/601108";
import { trackEventAnalytics } from "../905/449184";
import { FlashActions } from "../905/573154";
import { getI18nString, renderI18nText } from "../905/303541";
import { j as _$$j } from "../5430/272190";
import { showModalHandler } from "../905/156213";
import { postUserFlag } from "../905/985254";
import { getSelectedView } from "../figma_app/386952";
import { selectCurrentUser } from "../905/372672";
import { FEditorType } from "../figma_app/53721";
import { StatusType } from "../figma_app/175992";
import { WE, BY, Q7 } from "../figma_app/625596";
import { C as _$$C } from "../figma_app/198698";
import { SecureLink } from "../figma_app/637027";
import { LoadingSpinner } from "../figma_app/858013";
import { om, x1 } from "../figma_app/465413";
import { $J, mj, hL } from "../figma_app/600310";
import { sl } from "../figma_app/498055";
import { A as _$$A } from "../svg/765888";
import { A as _$$A2 } from "../svg/336181";
import { A as _$$A3 } from "../svg/619883";
import { s as _$$s2 } from "../5430/114211";
function I({
  isLoading: e,
  text: t
}) {
  return jsxs("span", {
    style: {
      position: "relative"
    },
    children: [e ? jsx("div", {
      className: sl,
      children: jsx(LoadingSpinner, {
        shouldMatchTextColor: !0
      })
    }) : void 0, jsx("span", {
      style: {
        opacity: e ? 0 : 1
      },
      children: t
    })]
  });
}
export function $$E0(e) {
  let [t, r] = useState(!1);
  let [v, w] = useState(!1);
  let E = useDispatch<AppDispatch>();
  let S = useSelector(e => e.userFlags);
  let R = selectCurrentUser();
  let k = getSelectedView();
  let [A, P] = useState(!1);
  let M = v || e.isFirstTimeLoading;
  let O = "isFirstTimeLoading" in e;
  if (A && !O || !R) return jsx(Fragment, {});
  let {
    stripe_account_status
  } = R;
  if (!O && (!stripe_account_status || stripe_account_status === StatusType.NONE)) return jsx(Fragment, {});
  let D = stripe_account_status === StatusType.NONE && getFeatureFlags().cmty_expand_extension_m10n || stripe_account_status === StatusType.ACCEPTED || M ? {
    userFlag: WE,
    bannerContent: function ({
      isLoading: e,
      onClick: t,
      showCTA: r
    }) {
      let i = jsx(SecureLink, {
        className: $J,
        target: "_blank",
        href: "https://help.figma.com/hc/articles/12067637274519-About-selling-Community-resources",
        trusted: !0,
        children: getI18nString("general.learn_more")
      });
      return {
        id: om.communityM10nApprovalBanner,
        bannerType: x1.INFO,
        mainText: getFeatureFlags().cmty_expand_extension_m10n ? getI18nString("community.seller.sell_on_community_v2") : getI18nString("community.seller.good_news"),
        icon: _$$A2,
        button: r ? {
          buttonText: jsx(I, {
            isLoading: e,
            text: getI18nString("community.seller.set_up_stripe")
          }),
          onClick: t,
          className: mj
        } : void 0,
        description: renderI18nText("community.seller.you_may_be_eligible_with_link", {
          learnMoreLink: i
        }),
        dismissible: !!r,
        positionStatic: !0
      };
    }({
      isLoading: t,
      onClick: () => {
        w(!0);
        E(showModalHandler({
          type: _$$s2,
          data: {
            setupStripeCallback: e => {
              w(!1);
              e || E(FlashActions.error(getI18nString("community.seller.unable_to_launch_stripe_onboarding_please_check_your_details")));
            }
          }
        }));
      },
      showCTA: !O
    })
  } : stripe_account_status === StatusType.STARTED_ONBOARDING ? {
    userFlag: BY,
    bannerContent: function ({
      onClick: e,
      isLoading: t,
      showCTA: r
    }) {
      return {
        id: om.communityM10nFinishSetupBanner,
        bannerType: x1.INFO,
        icon: _$$A,
        button: r ? {
          buttonText: jsx(I, {
            isLoading: t,
            text: getI18nString("community.seller.finish_set_up")
          }),
          onClick: e,
          className: mj
        } : void 0,
        mainText: getI18nString("community.seller.finish_stripe_setup"),
        description: getI18nString("community.seller.few_steps_left_stripe"),
        dismissible: !!r,
        positionStatic: !0
      };
    }({
      isLoading: t,
      onClick: () => {
        r(!0);
        E(_$$j({
          callback: () => r(!1),
          user: R,
          selectedView: k
        }));
      },
      showCTA: !O
    })
  } : stripe_account_status === StatusType.DISABLED ? {
    userFlag: Q7,
    bannerContent: function ({
      onClick: e,
      isLoading: t,
      showCTA: r
    }) {
      return {
        id: om.communityM10nAdtlInfoNeededBanner,
        bannerType: x1.WARN,
        icon: _$$A3,
        button: r ? {
          buttonText: jsx(I, {
            isLoading: t,
            text: getI18nString("community.seller.visit_stripe")
          }),
          onClick: e,
          className: mj
        } : void 0,
        mainText: getI18nString("community.seller.stripe_needs_your_attention"),
        description: getI18nString("community.seller.you_can_resolve"),
        dismissible: !!r,
        positionStatic: !0
      };
    }({
      isLoading: t,
      onClick: () => {},
      showCTA: !O
    })
  } : void 0;
  if (!D) return jsx(Fragment, {});
  let {
    userFlag,
    bannerContent
  } = D;
  let U = () => {
    E(postUserFlag({
      [userFlag]: !0
    }));
  };
  return S[userFlag] && !O ? jsx(Fragment, {}) : jsx(_$$C, {
    containerClassName: O ? hL : void 0,
    content: bannerContent,
    editorType: FEditorType.Design,
    onDismiss: () => {
      U();
      P(!0);
      trackEventAnalytics("cmty_m10n_banner_dismissed", {
        userFlag
      });
    }
  });
}
export const S = $$E0;
