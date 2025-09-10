import { registerModal } from "../905/102752";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useRef, Suspense } from "react";
import { useDispatch } from "react-redux";
import { ServiceCategories as _$$e } from "../905/165054";
import { selectWithShallowEqual } from "../905/103090";
import { Jn } from "../905/17223";
import { tH } from "../905/751457";
import { s as _$$s } from "../cssbuilder/589278";
import { renderI18nText } from "../905/303541";
import { dR } from "../figma_app/109538";
import { w as _$$w } from "../figma_app/527262";
import { sx } from "../figma_app/307841";
import { getRumLoggingConfig } from "../905/16237";
import { oB } from "../905/929976";
import { popModalStack, hideModal, showModalHandler } from "../905/156213";
import { Bq, WX } from "../figma_app/482142";
import { fu } from "../figma_app/831799";
import { h as _$$h } from "../905/864281";
import { K } from "../905/3140";
import { vp } from "../905/967587";
import { FC } from "../figma_app/212807";
import { TN } from "../figma_app/211146";
import { LN } from "../figma_app/514043";
import { PS } from "../figma_app/345997";
import { ng } from "../figma_app/205827";
import { N as _$$N } from "../905/809096";
import { ey } from "../figma_app/918700";
import { O as _$$O } from "../905/6519";
import { I as _$$I } from "../905/641938";
function O(e) {
  let t = useDispatch();
  let i = TN(e.teamId ?? "");
  let [n, h] = useState(LN());
  let g = selectWithShallowEqual(e => vp(e.user, e.currentUserOrgId, e.currentTeamId));
  let O = useRef(null);
  let D = PS(FC());
  let L = _$$h.useTrackingContext({
    trigger: e.upsellSource,
    upgradePoint: _$$h.MonetizationUpgradePoint.PLAN_COMPARISON_MODAL
  });
  let F = getRumLoggingConfig();
  let M = () => {
    t(popModalStack());
    e.onDone?.();
  };
  let j = _$$s.overflowAuto.$;
  let U = e.isProCurrent ? renderI18nText("plan_comparison.title.working_group") : renderI18nText("plan_comparison.title");
  return jsx(tH, {
    boundaryKey: "UpgradeChoosePlanModal",
    fallback: jsx(K, {}),
    team: _$$e.MONETIZATION_UPGRADES,
    children: jsx(Suspense, {
      fallback: jsx(_$$N, {
        hiddenTitle: U,
        estimatedWidth: 1049,
        estimatedHeight: 700
      }),
      children: jsx(fu, {
        name: "Upgrade Choose Plan With Figjam Modal",
        properties: {
          upsellSource: e.upsellSource,
          teamId: e.teamId,
          ...L
        },
        trackingOptions: F,
        children: jsxs(ey, {
          className: "upgrade_choose_plan_modal--modal--2cgyx",
          hide: M,
          size: 1049,
          backgroundClassName: j,
          alignment: "leftNoPadding",
          "data-testid": "upgrade_choose_plan_modal",
          modalRef: O,
          children: [jsx("div", {
            className: "upgrade_choose_plan_modal--planModalHeader--S7LTL",
            children: jsx("h1", {
              className: "upgrade_choose_plan_modal--planModalTitle--IYaCP text--fontPos24--YppUD text--_fontBase--QdLsd",
              children: U
            })
          }), jsx(Jn, {
            className: "upgrade_choose_plan_modal--closeButton--OMLmq",
            onClick: M,
            innerText: "close"
          }), jsx("div", {
            className: "upgrade_choose_plan_modal--planModalBody--cFsix",
            children: jsx(_$$O, {
              chooseOrgPlan: () => {
                t(hideModal());
                t(Bq({
                  currency: n,
                  upsellSource: e.upsellSource,
                  openInNewTab: e.openCheckoutInNewTab
                }));
                e.onDone?.();
              },
              chooseProPlan: i => {
                let r = 1 === D.length ? D[0] : null;
                let a = e.teamId || g?.teamId || r?.id;
                a ? (t(hideModal()), t(WX({
                  teamId: a,
                  billingPeriod: i,
                  currency: n,
                  openInNewTab: e.openCheckoutInNewTab,
                  upsellSource: e.upsellSource
                })), e.onDone?.()) : t(showModalHandler({
                  type: dR,
                  data: {
                    plan: _$$I.PRO,
                    upsellSource: e.upsellSource,
                    billingPeriod: i,
                    openInNewTab: e.openCheckoutInNewTab,
                    onDone: e.onDone
                  }
                }));
              },
              currency: n,
              featureList: e.featureList,
              isProCurrent: e.isProCurrent,
              isProTrial: ng.canSeeProTrialUx(i),
              overrideHighlightedBadgeText: e.overrideHighlightedBadgeText,
              overrideHighlightedPlan: e.overrideHighlightedPlan,
              parentRef: O,
              updateCurrency: e => {
                h(e);
                t(oB());
              },
              upsellSource: e.upsellSource
            })
          })]
        })
      })
    })
  });
}
export let $$D0 = registerModal(function (e) {
  return sx() ? jsx(_$$w, {
    ...e
  }) : jsx(O, {
    ...e
  });
}, "UpgradeChoosePlanModal");
export const V = $$D0;