import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useMemo, useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "../vendor/514228";
import s from "classnames";
import { trackEventAnalytics } from "../905/449184";
import { tM, $$, vd, Us } from "../figma_app/637027";
import { B as _$$B } from "../905/714743";
import { s as _$$s } from "../cssbuilder/589278";
import { renderI18nText, getI18nString } from "../905/303541";
import { D as _$$D } from "../905/251759";
import { fu } from "../figma_app/831799";
import { FPlanNameType } from "../figma_app/191312";
import { vr, _Z, B9, LN } from "../figma_app/514043";
import { Hw } from "../figma_app/698052";
import { zZ } from "../figma_app/345997";
import { R$, tY } from "../figma_app/831101";
import { DA, $$ as _$$$$, Qw, RO, X9, Q1, SO, Zy, zS, UJ, qT, Lh } from "../905/472146";
import { Ib } from "../905/129884";
import { cn } from "../figma_app/141320";
import { a as _$$a } from "../905/925868";
import { m0 } from "../figma_app/976749";
import { qD } from "../figma_app/314264";
import { In } from "../905/672640";
import { lk } from "../figma_app/109538";
import { B as _$$B2 } from "../905/380801";
import { to } from "../905/156213";
import { c as _$$c } from "../905/370443";
import { throwTypeError } from "../figma_app/465776";
import { lQ } from "../905/934246";
import W from "lodash-es/mapValues";
import { mI } from "../figma_app/566371";
import { G as _$$G } from "../figma_app/361869";
import { sx as _$$sx } from "../905/941192";
import { E as _$$E } from "../905/984674";
import { SK, Fq, vu } from "../905/84777";
import { ud } from "../905/513035";
import { Oq } from "../905/332483";
import { b as _$$b } from "../905/165519";
import { Ju, IX } from "../905/712921";
import { A as _$$A } from "../6828/871993";
var o = s;
function I({
  currentPlan: e,
  setCurrentPlan: t
}) {
  let i = i => {
    let n = i.currentTarget.id;
    trackEventAnalytics("Toggled Billing Display", {
      prevDisplay: e,
      newDisplay: n
    });
    t(n);
  };
  return jsxs("div", {
    className: "billing_toggle--container--X2E7D",
    children: [jsx(E, {
      id: R$.MONTHLY,
      selected: e === R$.MONTHLY,
      onClick: i,
      children: renderI18nText("plan_comparison.billing_toggle.monthly_billing")
    }), jsx(E, {
      id: R$.ANNUAL,
      selected: e === R$.ANNUAL,
      onClick: i,
      children: renderI18nText("plan_comparison.billing_toggle.yearly_billing", {
        saveMessage: jsx("strong", {
          className: "billing_toggle--saveMessage--OSfKi",
          children: renderI18nText("plan_comparison.billing_toggle.yearly_billing_save_message", {
            saveAmount: 40
          })
        })
      })
    })]
  });
}
function E({
  id: e,
  children: t,
  selected: i,
  onClick: r
}) {
  return jsx("button", {
    role: "tab",
    id: e,
    className: o()("billing_toggle--toggle--SK77Z", {
      "billing_toggle--toggle__selected---odLE": i
    }),
    "aria-selected": i,
    "aria-controls": `${e}-tab`,
    onClick: r,
    children: t
  });
}
let T = "Plan comparison chart";
let k = {
  [tY.UNSPECIFIED]: R$.ANNUAL,
  [tY.MONTHLY]: R$.MONTHLY,
  [tY.ANNUAL]: R$.ANNUAL,
  [tY.STUDENT]: R$.ANNUAL
};
let R = {
  [R$.MONTHLY]: tY.MONTHLY,
  [R$.ANNUAL]: tY.ANNUAL
};
let N = ({
  overrideHighlightedPlan: e,
  isProCurrent: t
}) => e ? "none" === e ? null : e : t ? FPlanNameType.ORG : FPlanNameType.PRO;
let P = ({
  isProCurrent: e,
  isStudentUser: t
}) => e ? DA : t ? _$$$$ : Qw;
let $$O = ({
  isProCurrent: e,
  featureList: t,
  shouldShowDevModePlanComparison: i
}) => t || (e ? RO : i ? X9 : Q1);
let D = ({
  isProCurrent: e
}) => e ? FPlanNameType.PRO : FPlanNameType.STARTER;
let L = ({
  isStudentUser: e,
  payment: t,
  subscriptionPlan: i
}) => e && t.billingPeriod === tY.STUDENT ? tY.STUDENT : R[i];
let F = e => {
  let t = renderI18nText("plan_details.see_all_features");
  return {
    orderedPlans: P(e),
    orderedFeatures: $$O(e),
    currentPlan: D(e),
    highlightedPlan: N(e),
    billingPeriod: L(e),
    seeMoreLinkText: t
  };
};
function G() {
  let e = useDispatch();
  return jsxs("div", {
    className: "enterprise_plan_banner--bannerContainer--33XIO",
    "data-testid": "enterprise_plan_banner",
    children: [jsx("div", {
      className: "enterprise_plan_banner--bannerIcon--x7Rua",
      children: jsx(In, {
        icon: "org-32"
      })
    }), jsxs("div", {
      className: "enterprise_plan_banner--bannerTextContainer--ArcyT",
      children: [jsx("h2", {
        className: "enterprise_plan_banner--bannerHeader--p-9bR",
        children: renderI18nText("universal_upgrade.enterpise_plan_banner.banner_header")
      }), jsx("span", {
        className: "enterprise_plan_banner--bannerTextBody--MlQOd",
        children: renderI18nText("universal_upgrade.enterpise_plan_banner.banner_body_text")
      })]
    }), jsx(tM, {
      className: "enterprise_plan_banner--contactSalesCTA--WGqtx",
      onClick: () => e(to({
        type: lk,
        data: {
          source: _$$B2.PLAN_COMPARISON
        }
      })),
      trackingProperties: {
        trackingDescriptor: _$$c.ENTERPRISE_PLAN_BANNER_CONTACT_SALES
      },
      children: renderI18nText("universal_upgrade.enterpise_plan_banner.contact_sales")
    })]
  });
}
var K = W;
let ei = "plan_information--button---7EXI";
function en(e) {
  let {
    name,
    description
  } = SO[e.planTier];
  return jsxs("div", {
    children: [jsxs("h2", {
      className: _$$s.font16.fontSemiBold.flex.flexWrap.itemsCenter.$,
      children: [name(), " ", jsx(er, {
        ...e
      })]
    }), jsxs("p", {
      className: _$$s.mt8.colorTextSecondary.$,
      children: [description(), " ", e.isProCurrent && e.planTier !== FPlanNameType.PRO ? renderI18nText("plan_comparison.plans.billed_yearly") : null]
    })]
  });
}
function er({
  planTier: e,
  isProCurrent: t,
  isProTrial: i,
  isHighlighted: r,
  overrideHighlightedBadgeText: s,
  upsellSource: o
}) {
  let {
    highlightBadgeText
  } = SO[e];
  let d = _$$s.ml8.fontMedium.font11.colorTextBrand.$;
  let c = useSelector(e => e.isFreeUser);
  if (e === FPlanNameType.STARTER) {
    if (o === _$$b.CREATE_NEW_PAID_TEAM && c) return jsx("strong", {
      className: _$$s.ml8.fontMedium.font11.colorTextSecondary.$,
      children: renderI18nText("plan_comparison.plans.starter.current_plan")
    });
  } else if (e === FPlanNameType.PRO && i) return jsx("strong", {
    className: d,
    children: jsx(_$$E, {
      children: renderI18nText("plan_comparison.plans.current_trial")
    })
  });
  if (r && highlightBadgeText) {
    let e = s ? Zy[s]() : highlightBadgeText?.(t ? zS.RECOMMENDED : zS.MOST_VALUED);
    return jsx("strong", {
      className: d,
      children: e
    });
  }
  return null;
}
function ea({
  currentSubscriptionPlan: e,
  setCurrentSubscriptionPlan: t,
  currency: i,
  planTier: r,
  isCurrentPlan: a,
  showFullCurrencyFormat: s
}) {
  if (a || r === FPlanNameType.STARTER) return null;
  let {
    hasAnnualOnlyMessage
  } = SO[r];
  return e !== R$.ANNUAL && hasAnnualOnlyMessage ? jsx("p", {
    children: renderI18nText("plan_comparison.plans.org.annual_only_message", {
      billingToggle: jsx("button", {
        "data-testid": "plan-information-toggle-billing",
        className: "plan_information--annualToggleButton--UnCMk blue_link--blueLink--9rlnd",
        onClick: () => t(R$.ANNUAL),
        children: renderI18nText("plan_comparison.plans.button.annual_billing_toggle")
      })
    })
  }) : jsx(es, {
    currentSubscriptionPlan: e,
    currency: i,
    planTier: r,
    showFullCurrencyFormat: s
  });
}
function es({
  currentSubscriptionPlan: e,
  currency: t,
  planTier: i,
  showFullCurrencyFormat: r
}) {
  let a = [FPlanNameType.STUDENT, FPlanNameType.PRO, FPlanNameType.ORG, FPlanNameType.ENTERPRISE].includes(i);
  let s = [FPlanNameType.ORG, FPlanNameType.ENTERPRISE].includes(i);
  let o = s ? Oq : Oq.exclude([ud.DEV_MODE]);
  let l = function (e) {
    switch (e) {
      case FPlanNameType.ENTERPRISE:
        return Ju.ENTERPRISE;
      case FPlanNameType.ORG:
        return Ju.ORG;
      case FPlanNameType.PRO:
      case FPlanNameType.STUDENT:
        return Ju.PRO;
      default:
        throwTypeError(e);
    }
  }(i);
  let d = e === R$.ANNUAL ? IX.YEAR : IX.MONTH;
  let c = IX.MONTH;
  let m = o.dict(e => ({
    currency: t,
    billableProductKey: e,
    billableProductVariantKey: null,
    tier: l,
    renewalTerm: d,
    unit: c
  }));
  let h = SK(m, Fq.UPSELL_MODALS);
  let [_] = mI(h);
  let A = vu(_);
  let b = new vr(t);
  let v = K()(A.data, e => b.formatMoney(e.amount, {
    showFullFormat: r
  }));
  let I = _$$s.flex.justifyBetween.itemsCenter.gap6.$;
  let E = _$$s.fontMedium.font11.colorText.$;
  let x = _$$sx.flex.flexColumn.add({
    maxWidth: "50%"
  }).$;
  let S = _$$s.fontSemiBold.font16.colorText.$;
  let w = _$$s.noWrap.$;
  let C = _$$s.noWrap.$;
  return jsxs("div", {
    className: "plan_information--priceContainer--vjnZv",
    children: [jsxs("div", {
      className: I,
      "data-testid": "design-price-row",
      children: [jsxs("div", {
        style: x,
        children: [jsx("p", {
          className: E,
          children: renderI18nText("plan_details.figma")
        }), a && jsx("p", {
          className: C,
          children: jsx(_$$G, {})
        })]
      }), jsx("p", {
        className: w,
        children: renderI18nText("plan_details.price_editor_mo.seat_rename", {
          price: jsx("strong", {
            className: S,
            children: v[ud.DESIGN]
          })
        })
      })]
    }), s && ud.DEV_MODE in v && jsxs("div", {
      className: I,
      "data-testid": "dev-mode-price-row",
      children: [jsx("div", {
        style: x,
        children: jsx("p", {
          className: E,
          children: renderI18nText("plan_details.dev_mode_only")
        })
      }), jsx("p", {
        className: w,
        children: renderI18nText("plan_details.price_editor_mo.seat_rename", {
          price: jsx("strong", {
            className: S,
            children: v[ud.DEV_MODE]
          })
        })
      })]
    }), jsxs("div", {
      className: I,
      "data-testid": "whiteboard-price-row",
      children: [jsx("p", {
        className: E,
        children: renderI18nText("plan_details.fig_jam")
      }), jsx("p", {
        className: w,
        children: renderI18nText("plan_details.price_editor_mo.seat_rename", {
          price: jsx("strong", {
            className: S,
            children: v[ud.FIGJAM]
          })
        })
      })]
    })]
  });
}
function eo({
  planTier: e,
  chooseStarterPlan: t,
  chooseProPlan: i,
  chooseOrgPlan: r,
  isCurrentPlan: s,
  upsellSource: o
}) {
  let l = useDispatch();
  let c = useSelector(e => e.teamCreation.loading);
  if (s && !t) {
    let t = o === _$$b.CREATE_NEW_PAID_TEAM;
    return jsx($$, {
      className: ei,
      "data-testid": `plan-information-${e}-button`,
      "data-tooltip": t ? getI18nString("plan_comparison.plans.starter.you_already_have_a_starter_team") : void 0,
      "data-tooltip-max-width": 200,
      "data-tooltip-offset-y": -8,
      "data-tooltip-show-above": !0,
      "data-tooltip-show-immediately": !0,
      "data-tooltip-type": Ib.TEXT,
      disabled: !0,
      onClick: lQ,
      style: _$$sx.wFull.h32.$,
      children: t ? renderI18nText("plan_comparison.plans.starter.limit_reached") : renderI18nText("plan_comparison.plans.button.current_plan")
    });
  }
  let {
    buttonText,
    trackingDescriptor
  } = SO[e];
  let h = s && !!t || e === FPlanNameType.ENTERPRISE;
  let f = e === FPlanNameType.STARTER && o === _$$b.CREATE_NEW_PAID_TEAM && c;
  let _ = {
    [FPlanNameType.STARTER]: t ?? lQ,
    [FPlanNameType.PRO]: i,
    [FPlanNameType.ORG]: r,
    [FPlanNameType.STUDENT]: i,
    [FPlanNameType.ENTERPRISE]: () => l(to({
      type: lk,
      data: {
        source: _$$B2.PLAN_COMPARISON
      }
    }))
  };
  let A = h ? tM : vd;
  return jsx(A, {
    style: _$$sx.wFull.h32.$,
    className: ei,
    onClick: _[e],
    disabled: f,
    "data-testid": `plan-information-${e}-button`,
    trackingProperties: {
      trackingDescriptor,
      upsellSource: o
    },
    children: UJ({
      planTier: e,
      upsellSource: o,
      buttonText
    })
  });
}
function el({
  planTier: e,
  withUpgradeExistingTeamOption: t
}) {
  let i = useDispatch();
  let {
    canContactSales,
    additionalMessage
  } = SO[e];
  return jsxs("div", {
    className: _$$s.alignCenter.$,
    children: [canContactSales && jsx("p", {
      children: renderI18nText("plan_comparison.plans.or_contact_sales", {
        contactSalesLink: jsx(Us, {
          className: _$$s.noWrap.cursorDefault.$,
          onClick: () => i(to({
            type: lk,
            data: {
              source: _$$B2.PLAN_COMPARISON
            }
          })),
          "data-testid": "plan-information-contact-sales",
          trusted: !0,
          children: renderI18nText("plan_details.contact_sales")
        })
      })
    }), !!t && jsx("p", {
      children: jsx(Us, {
        onClick: t,
        "data-testid": "plan-information-upgrade-existing",
        trackingProperties: {
          trackingDescriptor: _$$c.UPGRADE_EXISTING_TEAM
        },
        trusted: !0,
        children: renderI18nText("plan_comparison.plans.pro.upgrade_an_existing_team")
      })
    }), additionalMessage && jsx("p", {
      children: additionalMessage()
    })]
  });
}
let ed = "comparison_chart--highlighted--8Inf9";
let ec = "comparison_chart--planInformationContainer--ZaSLe";
let eu = "comparison_chart--featureContainer--55YGy";
export function $$em0({
  currency: e,
  chooseStarterPlan: t,
  chooseProPlan: i,
  chooseOrgPlan: s,
  updateCurrency: l,
  isProTrial: d,
  upsellSource: c,
  isProCurrent: p,
  overrideHighlightedPlan: A,
  overrideHighlightedBadgeText: b,
  featureList: v,
  parentRef: E,
  withUpgradeExistingTeamOption: R
}) {
  let N = useSelector(e => e.dropdownShown);
  let P = useSelector(e => e.user);
  let O = useSelector(e => e.payment);
  let [D, L] = useState(O.billingPeriod ? k[O.billingPeriod] : R$.ANNUAL);
  let {
    highlightedPlan,
    orderedFeatures,
    orderedPlans,
    currentPlan,
    billingPeriod,
    seeMoreLinkText
  } = function ({
    overrideHighlightedPlan: e,
    featureList: t,
    isProCurrent: i,
    subscriptionPlan: n
  }) {
    let s = m0();
    let o = useSelector(e => !!e.user && cn(e.user));
    let l = useSelector(e => e.payment);
    return useMemo(() => F({
      isProCurrent: i,
      isStudentUser: o,
      shouldShowDevModePlanComparison: s,
      overrideHighlightedPlan: e,
      featureList: t,
      payment: l,
      subscriptionPlan: n
    }), [i, o, s, e, t, l, n]);
  }({
    isProCurrent: p,
    featureList: v,
    overrideHighlightedPlan: A,
    subscriptionPlan: D
  });
  let H = !p && Hw(P);
  let W = function (e) {
    let [t, i] = useState(!0);
    let a = useCallback(() => {
      qD({
        name: T,
        action: "scrolled"
      });
    }, []);
    useEffect(() => {
      let i = e?.current;
      i && (t ? i.addEventListener("scroll", a, {
        once: !0
      }) : i.removeEventListener("scroll", a));
      return () => {
        i?.removeEventListener("scroll", a);
      };
    }, [e, a, t]);
    return t ? jsx(_$$a, {
      onIntersectionChange: ({
        isIntersecting: e
      }) => {
        e && (qD({
          name: T,
          action: "bottom_visible"
        }), i(!1));
      }
    }) : null;
  }(E);
  return jsx(fu, {
    name: T,
    properties: {
      highlightedPlan,
      currentPlan
    },
    children: jsxs("div", {
      className: "comparison_chart--container--TQFzy",
      "data-testid": "comparison-chart",
      children: [!p && jsx("div", {
        className: "comparison_chart--billingToggleContainer--yBLn9",
        children: jsx(I, {
          currentPlan: D,
          setCurrentPlan: e => {
            L(e);
          }
        })
      }), _Z() && jsx("div", {
        className: "comparison_chart--currencySwitcherContainer--wyBip",
        children: jsx(_$$D, {
          currency: e,
          dropdownShown: N,
          supportedCurrencies: B9(),
          changeCurrency: l,
          shortFormDisplay: !1
        })
      }), jsxs("div", {
        className: "comparison_chart--tableContainer--qO9-w",
        role: "tabpanel",
        id: `${D}-tab`,
        children: [jsxs("table", {
          className: "comparison_chart--table--68WLi",
          children: [jsxs("colgroup", {
            children: [jsx("col", {
              span: 1
            }), orderedPlans.map(e => jsx("col", {
              span: 1
            }, e))]
          }), jsxs("thead", {
            children: [jsxs("tr", {
              children: [jsx("th", {
                className: eu
              }), orderedPlans.map(e => jsx("th", {
                className: o()(ec, _$$s.pt24.pb12.$, {
                  [ed]: e === highlightedPlan
                }),
                children: jsx(en, {
                  planTier: e,
                  isProCurrent: p,
                  isProTrial: d,
                  isHighlighted: e === highlightedPlan,
                  upsellSource: c,
                  overrideHighlightedBadgeText: b
                })
              }, e))]
            }), jsxs("tr", {
              children: [jsx("th", {
                className: eu
              }), orderedPlans.map(t => jsx("th", {
                className: o()(ec, _$$s.pt12.pb12.$, {
                  [ed]: t === highlightedPlan
                }),
                children: jsx(ea, {
                  planTier: t,
                  currency: e,
                  currentSubscriptionPlan: D,
                  setCurrentSubscriptionPlan: L,
                  isCurrentPlan: t === currentPlan,
                  showFullCurrencyFormat: "usd" === e && "cad" === LN()
                })
              }, t))]
            }), jsxs("tr", {
              children: [jsx("th", {
                className: eu
              }), orderedPlans.map(e => jsx("th", {
                className: o()(ec, _$$s.pt12.$, {
                  [ed]: e === highlightedPlan
                }),
                children: jsx(eo, {
                  planTier: e,
                  chooseStarterPlan: t,
                  chooseProPlan: () => i(billingPeriod),
                  chooseOrgPlan: s,
                  isCurrentPlan: e === currentPlan,
                  upsellSource: c
                })
              }, e))]
            }), jsxs("tr", {
              children: [jsx("th", {
                className: eu
              }), orderedPlans.map(e => jsx("th", {
                className: o()(ec, _$$s.pt8.pb12.$, {
                  [ed]: e === highlightedPlan
                }),
                children: jsx(el, {
                  planTier: e,
                  withUpgradeExistingTeamOption: e === FPlanNameType.PRO && R ? () => R(billingPeriod) : void 0
                })
              }, e))]
            })]
          }), jsxs("tbody", {
            children: [orderedFeatures.map(e => jsx(eh, {
              feature: e,
              orderedPlans,
              highlightedPlan
            }, e)), W]
          })]
        }), W, jsx(ef, {
          linkText: seeMoreLinkText
        }), H && jsx(G, {})]
      })]
    })
  });
}
function eh({
  feature: e,
  orderedPlans: t,
  highlightedPlan: i
}) {
  let [a, s] = useState(!1);
  let d = useRef();
  let c = void 0 !== qT[e].tooltipSpecialKey;
  let u = c ? Ib.SPECIAL : Ib.TEXT;
  let p = c ? qT[e].tooltipSpecialKey : qT[e].details?.();
  return jsxs("tr", {
    children: [jsx("td", {
      className: eu,
      "data-tooltip-type": u,
      "data-tooltip": p,
      "data-tooltip-show-right": !0,
      "data-tooltip-show-immediately": !0,
      "data-tooltip-light-mode": !0,
      onMouseEnter: () => {
        a || (d.current = setTimeout(() => {
          s(!0);
          trackEventAnalytics("Plan Comparison Feature Viewed", {
            featureName: qT[e].id
          });
        }, 1e3));
      },
      onMouseLeave: () => {
        clearTimeout(d.current);
      },
      children: jsx("p", {
        className: "comparison_chart--featureName--JQmtJ",
        children: qT[e].name()
      })
    }), t.map(t => jsx("td", {
      className: o()("comparison_chart--planFeature--Y4s5T", {
        [ed]: t === i
      }),
      children: jsx(eg, {
        plan: t,
        feature: e
      }, t)
    }, t))]
  });
}
function eg({
  plan: e,
  feature: t
}) {
  let i = Lh[e][t];
  return "boolean" == typeof i ? i ? jsx(_$$B, {
    svg: _$$A,
    className: "comparison_chart--featureIcon--KVLwL",
    title: getI18nString("plan_comparison.chart.included")
  }) : null : jsx(Fragment, {
    children: i()
  });
}
function ef(e) {
  return jsx(Us, {
    className: "comparison_chart--allFeaturesLink--XNOLR",
    href: zZ,
    target: "_blank",
    trusted: !0,
    "data-testid": "comparison-chart-see-all-features-link",
    children: e.linkText
  });
}
export const O = $$em0;