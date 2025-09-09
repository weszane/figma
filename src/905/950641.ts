import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isNullish } from "../figma_app/95419";
import { g as _$$g } from "../905/125190";
import { getFeatureFlags } from "../905/601108";
import { cn } from "../figma_app/141320";
import { Us } from "../figma_app/637027";
import { Wi } from "../figma_app/162641";
import { s as _$$s } from "../cssbuilder/589278";
import { e6, Ih } from "../figma_app/617427";
import { renderI18nText, getI18nString } from "../905/303541";
import { sx } from "../905/941192";
import { lk } from "../figma_app/109538";
import { B } from "../905/380801";
import { D as _$$D } from "../905/251759";
import { showModalHandler } from "../905/156213";
import { c as _$$c } from "../905/370443";
import { fu } from "../figma_app/831799";
import { FPlanNameType } from "../figma_app/191312";
import { _Z, B9 } from "../figma_app/514043";
import { Hw } from "../figma_app/698052";
import { SubscriptionType } from "../figma_app/831101";
import { Ib } from "../905/129884";
import { hK } from "../figma_app/211706";
import { qC, Wb, pr, Qu, j_ } from "../905/948828";
import { Y } from "../905/26051";
function R() {
  let e = useDispatch();
  return jsxs("div", {
    className: _$$s.p8.bRadius8.colorBgSecondary.flex.justifyBetween.itemsCenter.$,
    children: [jsxs("div", {
      className: _$$s.flex.gap4.itemsCenter.mr16.$,
      children: [jsx(Y, {}), jsx("span", {
        className: _$$s.fontMedium.$,
        children: renderI18nText("universal_upgrade.enterpise_plan_banner.banner_header")
      }), jsx("span", {
        children: renderI18nText("universal_upgrade.enterpise_plan_banner_v2.banner_body_text", {
          and_more: jsx(Us, {
            href: qC,
            target: "_blank",
            trusted: !0,
            children: renderI18nText("universal_upgrade.enterpise_plan_banner_v2.banner_body_text_and_more")
          })
        })
      })]
    }), jsx(e6, {
      className: _$$s.colorBgSecondary.colorBorderDisabled.bSolid.b1.bRadius4.px8.$,
      style: sx.add({
        paddingTop: "3px",
        paddingBottom: "3px"
      }).$,
      onClick: () => e(showModalHandler({
        type: lk,
        data: {
          source: B.PLAN_COMPARISON
        }
      })),
      children: renderI18nText("universal_upgrade.enterpise_plan_banner.contact_sales")
    })]
  });
}
function N({
  billingPeriod: e,
  setBillingPeriod: t
}) {
  return jsxs("div", {
    className: _$$s.colorBgSecondary.bRadius7.bSolid.b1.colorBorder.inlineBlock.p2.$,
    children: [jsx("button", {
      className: _$$s.font11.lh16.py4.px8.bRadius5.$$if(e !== SubscriptionType.MONTHLY, _$$s.colorBgSecondary.colorTextSecondary).$,
      onClick: () => t(SubscriptionType.MONTHLY),
      children: renderI18nText("plan_comparison.campfire.monthly")
    }), jsx("button", {
      className: _$$s.font11.lh16.py4.px8.bRadius5.$$if(e !== SubscriptionType.ANNUAL, _$$s.colorBgSecondary.colorTextSecondary).$,
      onClick: () => t(SubscriptionType.ANNUAL),
      children: renderI18nText("plan_comparison.campfire.annual")
    })]
  });
}
export function $$P0({
  currency: e,
  updateCurrency: t,
  chooseStarterPlan: i,
  chooseEduPlan: s,
  chooseProPlan: o,
  chooseOrgPlan: c,
  isProCurrent: u,
  prices: m,
  teamPlan: f,
  withUpgradeExistingTeamOption: _
}) {
  let [y, b] = useState(SubscriptionType.ANNUAL);
  let v = useSelector(e => e.dropdownShown);
  let w = useSelector(e => e.user);
  let k = !!getFeatureFlags().edu_plan_comparison;
  let N = w && cn(w) && k;
  useLayoutEffect(() => {
    let e = document.getElementById("proPlanCard")?.offsetHeight;
    let t = document.getElementById("freePlanCard");
    t && e && (t.style.height = `${e}px`);
    let i = document.getElementById("orgPlanCard");
    i && e && (i.style.height = `${e}px`);
    let n = document.getElementById("proTitle")?.clientHeight;
    let r = document.getElementById("freeTitle");
    r && n && (r.style.height = `${n}px`);
    let a = document.getElementById("orgTitle");
    a && n && (a.style.height = `${n}px`);
  }, []);
  let P = e => {
    switch (e) {
      case FPlanNameType.STARTER:
        i?.();
        break;
      case FPlanNameType.STUDENT:
        s();
        break;
      case FPlanNameType.PRO:
        o(y);
        break;
      case FPlanNameType.ORG:
        c();
    }
  };
  let L = ((e, t) => {
    let i = [FPlanNameType.STARTER, FPlanNameType.STUDENT, FPlanNameType.PRO];
    let n = [FPlanNameType.STUDENT, FPlanNameType.PRO, FPlanNameType.ORG];
    let r = [FPlanNameType.PRO, FPlanNameType.ORG];
    let a = [FPlanNameType.STARTER, FPlanNameType.PRO, FPlanNameType.ORG];
    return t === FPlanNameType.PRO ? r : e ? t === FPlanNameType.STUDENT ? n : i : a;
  })(N, f);
  let F = f === FPlanNameType.STUDENT ? {
    tier: FPlanNameType.PRO,
    badge: jsx(Wb, {})
  } : f === FPlanNameType.STARTER || null === f ? N ? {
    tier: FPlanNameType.STUDENT,
    badge: jsx(pr, {})
  } : {
    tier: FPlanNameType.PRO,
    badge: jsx(Wb, {})
  } : {
    tier: null,
    badge: null
  };
  let M = Qu().filter(e => L.includes(e.planTier));
  let j = !u && Hw(w);
  return jsxs("div", {
    children: [_Z() && jsx("div", {
      className: _$$s.flex.justifyEnd.$,
      children: jsx(_$$D, {
        currency: e,
        dropdownShown: v,
        supportedCurrencies: B9(),
        changeCurrency: t,
        shortFormDisplay: !0
      })
    }), jsx("div", {
      className: _$$s.grid.bSolid.b1.colorBorder.bRadius8.overflowHidden.colorBgTertiary.gap1.$,
      style: sx.add({
        gridTemplateColumns: `repeat(${M.length}, 1fr)`
      }).$,
      children: M.map(e => {
        let t = e.planTier === f && !i;
        let r = function ({
          planTier: e,
          currentExistingPlanTier: t,
          inStarterTeamLoopholes: i,
          chooseStarterPlan: n
        }) {
          return e === FPlanNameType.STARTER && i ? renderI18nText("plan_comparison.plans.starter.limit_reached") : e === t ? n ? renderI18nText("plan_comparison.campfire.choose_starter") : renderI18nText("plan_comparison.campfire.current_plan") : e === FPlanNameType.STUDENT ? renderI18nText("plan_comparison.campfire.choose_edu") : renderI18nText("plan_comparison.campfire.choose_plan");
        }({
          planTier: e.planTier,
          currentExistingPlanTier: f,
          inStarterTeamLoopholes: !!_,
          chooseStarterPlan: !!i
        });
        let a = m[e.planTier] ? {
          monthly: m[e.planTier]?.monthly,
          annual: m[e.planTier]?.annual
        } : null;
        let s = F.tier === e.planTier ? F.badge : null;
        return jsx(O, {
          planDetails: e,
          billingPeriod: y,
          setBillingPeriod: b,
          choosePlanButton: jsx(D, {
            disabled: t,
            onClick: () => {
              P(e.planTier);
            },
            text: r,
            plan: e.planTier,
            showTooltip: e.planTier === FPlanNameType.STARTER && !!_
          }),
          prices: a,
          highlightBadge: s,
          withUpgradeExistingTeamOption: _
        }, e.planTier);
      })
    }), j && jsxs("div", {
      children: [jsx(hK, {
        height: 16
      }), jsx(R, {})]
    })]
  });
}
function O({
  planDetails: e,
  billingPeriod: t,
  setBillingPeriod: i,
  choosePlanButton: r,
  prices: s,
  highlightBadge: l,
  withUpgradeExistingTeamOption: d
}) {
  let u = useDispatch();
  let {
    planTier,
    name,
    description,
    features
  } = e;
  return jsxs("div", {
    className: _$$s.p24.pt16.colorBg.$,
    children: [jsxs("div", {
      id: `${planTier}Title`,
      className: _$$s.font15.fontMedium.lh24.$,
      children: [name, l]
    }), jsx("div", {
      className: _$$s.font11.colorTextSecondary.h32.$,
      children: description
    }), jsx(hK, {
      height: 16
    }), jsx("div", {
      id: `${planTier}PlanCard`,
      className: _$$s.flex.flexColumnReverse.$,
      style: sx.add({
        minHeight: "198px"
      }).$,
      children: jsxs("div", {
        className: _$$s.grid.gap16.$,
        "data-testid": `${planTier}Prices`,
        children: [jsx(j, {
          planDetails: e,
          billingPeriod: t,
          setBillingPeriod: i,
          monthlyPrices: s?.monthly,
          annualPrices: s?.annual
        }), jsxs("div", {
          className: _$$s.mb12.$,
          children: [r, planTier === FPlanNameType.ORG ? jsx("div", {
            className: _$$s.font11.lh16.alignCenter.mt4.$,
            children: renderI18nText("plan_comparison.campfire.or_contact_sales", {
              contactSalesLink: jsx("button", {
                className: _$$s.colorTextBrand.$,
                onClick: () => u(showModalHandler({
                  type: lk,
                  data: {
                    source: B.PLAN_COMPARISON
                  }
                })),
                children: renderI18nText("plan_comparison.campfire.contact_sales")
              })
            })
          }) : planTier === FPlanNameType.PRO && d ? jsx("div", {
            className: _$$s.font11.lh16.alignCenter.mt4.$,
            children: jsx(Us, {
              onClick: () => d(t),
              "data-testid": "plan-information-upgrade-existing",
              trackingProperties: {
                trackingDescriptor: _$$c.UPGRADE_EXISTING_TEAM
              },
              trusted: !0,
              children: renderI18nText("plan_comparison.plans.pro.upgrade_an_existing_team")
            })
          }) : jsx(hK, {
            height: 20
          })]
        })]
      })
    }), jsx("div", {
      className: _$$s.bSolid.bb1.colorBorder.wFull.$
    }), jsxs("div", {
      className: _$$s.mt16.$,
      children: [planTier === FPlanNameType.ORG && jsx("div", {
        className: _$$s.font13.fontMedium.lh24.$,
        children: renderI18nText("plan_comparison.campfire.everything_on_pro")
      }), features.map((e, t) => jsxs("div", {
        className: _$$s.flex.gap2.$,
        children: [jsx("div", {
          className: _$$s.minW24.$,
          children: jsx(_$$g, {})
        }), jsx("div", {
          className: _$$s.font13.lh24.$,
          children: e
        })]
      }, t))]
    })]
  });
}
function D({
  disabled: e,
  onClick: t,
  text: i,
  plan: r,
  showTooltip: a
}) {
  return jsx(Ih, {
    disabled: e,
    onClick: t,
    trackingProperties: {
      plan: r,
      trackingDescriptor: _$$c.CHOOSE_PLAN
    },
    htmlAttributes: {
      "data-testid": `plan-information-${r}-button`,
      "data-tooltip-type": Ib.TEXT,
      "data-tooltip": a ? getI18nString("plan_comparison.plans.starter.you_already_have_a_starter_team") : void 0,
      "data-tooltip-show-immediately": !0,
      "data-tooltip-show-above": !0,
      "data-tooltip-max-width": 200,
      "data-tooltip-offset-y": -8
    },
    children: i
  });
}
function L() {
  return jsx("div", {
    className: _$$s.font13.lh24.$,
    children: j_
  });
}
function F() {
  return jsx("div", {
    className: _$$s.font13.lh24.$,
    children: renderI18nText("plan_comparison.campfire.edu.price")
  });
}
function M({
  annualPrices: e,
  displayedSeats: t,
  billingPeriod: i,
  monthlyPrices: r
}) {
  var a;
  return jsx("div", {
    className: _$$s.mt16.$,
    children: e ? jsx(fu, {
      name: "Pricing Component",
      properties: {
        prices: (a = i === SubscriptionType.MONTHLY && r ? r : e, JSON.stringify(t.reduce((e, t) => ({
          ...e,
          [t.seatType]: a[t.seatType]?.priceKey
        }), {})))
      },
      children: t.map(t => {
        let a = i === SubscriptionType.MONTHLY && r ? r[t.seatType] : e[t.seatType];
        return isNullish(a) ? null : jsxs("div", {
          className: _$$s.font13.lh24.flex.justifyBetween.$,
          "data-testid": `${i === SubscriptionType.MONTHLY && r ? "monthly" : "yearly"}-prices`,
          children: [jsxs("div", {
            className: _$$s.flex.itemsCenter.gap4.$,
            children: [t.icon, t.name]
          }), jsx("div", {
            children: renderI18nText("plan_comparison.campfire.price_per_month", {
              price: a.displayPrice
            })
          })]
        }, t.seatType);
      })
    }) : jsx(Wi, {
      style: sx.add({
        height: "72px"
      }).$
    })
  });
}
function j({
  planDetails: e,
  billingPeriod: t,
  setBillingPeriod: i,
  monthlyPrices: r,
  annualPrices: a
}) {
  let {
    planTier,
    displayedSeats
  } = e;
  switch (planTier) {
    case FPlanNameType.STARTER:
      return jsx(L, {});
    case FPlanNameType.STUDENT:
      return jsx(F, {});
    case FPlanNameType.PRO:
      return jsxs("div", {
        children: [jsx(N, {
          billingPeriod: t,
          setBillingPeriod: i
        }), jsx(M, {
          annualPrices: a,
          displayedSeats,
          billingPeriod: t,
          monthlyPrices: r
        })]
      });
    case FPlanNameType.ORG:
      return jsxs("div", {
        children: [jsx("p", {
          children: renderI18nText("plan_comparison.campfire.billed_annually")
        }), jsx(M, {
          annualPrices: a,
          displayedSeats,
          billingPeriod: t,
          monthlyPrices: r
        })]
      });
    default:
      return null;
  }
}
export const f = $$P0;
