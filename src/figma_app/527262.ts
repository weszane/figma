import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { wA } from "../vendor/514228";
import { hS } from "../905/437088";
import { bL } from "../905/38914";
import { vo, nB } from "../figma_app/272243";
import { R as _$$R } from "../905/103090";
import { Us } from "../figma_app/637027";
import { s as _$$s } from "../cssbuilder/589278";
import { tx } from "../905/303541";
import { sx } from "../905/941192";
import { U as _$$U } from "../905/815805";
import { dR } from "../figma_app/109538";
import { I as _$$I } from "../905/641938";
import { u as _$$u } from "../905/16237";
import { q } from "../figma_app/712384";
import { oB } from "../905/929976";
import { to } from "../905/156213";
import { WX, Bq, Vm } from "../figma_app/482142";
import { fu } from "../figma_app/831799";
import { vp } from "../905/967587";
import { FPlanNameType } from "../figma_app/191312";
import { LN } from "../figma_app/514043";
import { zZ } from "../figma_app/345997";
import { X$ } from "../figma_app/465071";
import { TN } from "../figma_app/831101";
import { hK } from "../figma_app/211706";
import { QO } from "../905/948828";
import { f as _$$f } from "../905/950641";
import { L as _$$L } from "../905/61587";
export function $$$$P1(e) {
  let {
    open,
    onClose
  } = e;
  let i = hS({
    open,
    onClose
  });
  return jsx(bL, {
    manager: i,
    width: "fit-content",
    children: jsx(vo, {
      children: jsx(nB, {
        children: jsx($$D0, {
          ...e
        })
      })
    })
  });
}
export function $$D0({
  upsellSource: e,
  isProCurrent: t,
  onClose: r,
  onDone: s,
  teamId: o,
  openCheckoutInNewTab: l,
  chooseStarterPlan: c,
  chooseProPlan: x,
  chooseOrgPlan: P,
  chooseEduPlan: D,
  currency: M,
  updateCurrency: F,
  planComparisonModalHeaderOverride: j,
  planComparisonChartOverride: U,
  seatComparisonChartOverride: B
}) {
  let G = wA();
  let [V, H] = useState(LN());
  let z = _$$R(e => vp(e.user, e.currentUserOrgId, e.currentTeamId));
  let W = X$("PlanComparisonModalContent");
  let K = W.unwrapOr(null)?.tier || null;
  let Y = _$$U(M ?? V);
  let $ = _$$u();
  let X = K === FPlanNameType.PRO ? "807px" : "945px";
  return jsx(fu, {
    name: QO,
    properties: {
      upsellSource: e,
      teamId: o || z?.teamId
    },
    trackingOptions: $,
    children: jsxs("div", {
      className: _$$s.grid.gap16.p36.pb24.selectNone.$,
      style: sx.add({
        width: X
      }).$,
      children: [j ?? (null !== j && jsx(k, {})), U ?? jsx(_$$f, {
        currency: M ?? V,
        updateCurrency: F ?? (e => {
          H(e);
          G(oB());
        }),
        chooseStarterPlan: c,
        chooseProPlan: x ?? (t => {
          let n = o || z?.teamId;
          r?.();
          n ? (G(WX({
            teamId: n,
            billingPeriod: t,
            currency: M ?? V,
            openInNewTab: l,
            entryPoint: TN.PLAN_COMPARISON_MODAL,
            upsellSource: e
          })), s?.()) : G(to({
            type: dR,
            data: {
              plan: _$$I.PRO,
              upsellSource: e,
              billingPeriod: t,
              openInNewTab: l,
              onDone: s
            }
          }));
        }),
        chooseOrgPlan: P ?? (() => {
          r?.();
          G(Bq({
            currency: M ?? V,
            upsellSource: e,
            openInNewTab: l,
            entryPoint: TN.PLAN_COMPARISON_MODAL
          }));
          s?.();
        }),
        chooseEduPlan: D ?? (() => {
          r?.();
          let e = o || z?.teamId;
          e ? (G(Vm({
            teamId: e
          })), s?.()) : G(to({
            type: q
          }));
        }),
        isProCurrent: t,
        prices: Y,
        teamPlan: K
      }), jsx(hK, {
        height: 8
      }), B ?? jsx(_$$L, {}), jsx("p", {
        className: _$$s.colorTextSecondary.$,
        children: tx("plan_comparison.campfire.applicable_taxes")
      })]
    })
  });
}
function k() {
  return jsxs(Fragment, {
    children: [jsx("div", {
      className: _$$s.textHeadingLarge.$,
      children: tx("plan_comparison.campfire.title")
    }), jsx("div", {
      className: _$$s.textHeadingMedium.fontNormal.$,
      children: tx("plan_comparison.campfire.description", {
        plan: jsx("span", {
          className: _$$s.textHeadingMedium.fontMedium.$,
          children: tx("plan_comparison.campfire.description.plan")
        }),
        seat: jsx("span", {
          className: _$$s.textHeadingMedium.fontMedium.$,
          children: tx("plan_comparison.campfire.description.seat")
        }),
        learnMoreLink: jsx(Us, {
          className: _$$s.textHeadingMedium.fontNormal.$,
          href: zZ,
          target: "_blank",
          trusted: !0,
          children: tx("plan_comparison.campfire.description.learn_more")
        })
      })
    })]
  });
}
export const P = $$D0;
export const w = $$$$P1;