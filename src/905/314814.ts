import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Suspense, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isNullish } from "../figma_app/95419";
import { ServiceCategories as _$$e } from "../905/165054";
import { N as _$$N } from "../905/438674";
import { Yy } from "../figma_app/59509";
import { Q } from "../905/363675";
import { hS } from "../905/437088";
import { E as _$$E } from "../905/53857";
import { bL, Rq } from "../905/38914";
import { nB, r1, wi, jk } from "../figma_app/272243";
import { $n } from "../905/521428";
import { S as _$$S } from "../905/794163";
import { getFeatureFlags } from "../905/601108";
import A from "../vendor/523035";
import { a as _$$a } from "../905/361543";
import { C as _$$C } from "../905/641057";
import { r as _$$r } from "../905/786998";
import { tH, H4 } from "../905/751457";
import { s as _$$s } from "../cssbuilder/589278";
import { renderI18nText, getI18nString } from "../905/303541";
import { Y as _$$Y } from "../905/830372";
import { Pf } from "../905/590952";
import { E as _$$E2 } from "../905/984674";
import { g as _$$g } from "../905/119656";
import { T as _$$T } from "../905/292816";
import { H3 } from "../figma_app/920435";
import { fu } from "../figma_app/831799";
import { Y$ } from "../905/84777";
import { xQ, Zz, LY, $$in } from "../figma_app/84966";
import { N_ } from "../905/332483";
import { AG } from "../figma_app/217457";
import { XP } from "../figma_app/465071";
import { Ro } from "../figma_app/805373";
import { N as _$$N2 } from "../905/809096";
var y = A;
let B = "dynamic";
export function $$V0(e) {
  let t = XP({
    reportErrorsToTeam: _$$e.SCALE
  }).key.parentId;
  return jsx(tH, {
    boundaryKey: "TeamStartAnnualPlanModal",
    fallback: H4.DEFAULT_FULL_PAGE,
    hasCustomWASMBuild: !1,
    team: _$$e.BILLING_EXPERIENCE,
    children: jsx(fu, {
      name: "Team Start Annual Plan Modal",
      properties: {
        teamId: t
      },
      children: jsx(Suspense, {
        fallback: jsx(_$$N2, {
          hiddenTitle: "Team Start Annual Plan Modal",
          estimatedWidth: 480,
          estimatedHeight: 500,
          height: B
        }),
        children: jsx(H, {
          ...e
        })
      })
    })
  });
}
function G() {
  return jsx(_$$N, {
    href: "https://help.figma.com/hc/articles/360046216313-Upgrade-or-downgrade-your-plan#h_01JN1WZEQ0XHFCM49DXHGJPS7S",
    trusted: !0,
    newTab: !0,
    children: renderI18nText("billing_modals.start_annual_plan.canceling")
  });
}
function z(e) {
  return jsx(Yy, {
    icon: jsx(_$$S, {}),
    children: jsx(Q, {
      "data-testid": "team-start-annual-plan-disclaimer",
      title: jsxs(Fragment, {
        children: [renderI18nText("billing_modals.start_annual_plan.banner.your_annual_subscription_starts", {
          date: e.annualSubscriptionStartDate
        }), " ", jsx(G, {})]
      }),
      children: null
    })
  });
}
function H(e) {
  let t = useDispatch();
  let i = hS(e);
  let d = XP({
    reportErrorsToTeam: _$$e.SCALE
  });
  let c = xQ();
  let f = useSelector(e => e.teamBilling);
  let A = d.key.parentId;
  let E = _$$g(f.summary.total_upgraded_user_counts, {
    throwOnError: !0
  });
  let [P, U] = _$$a(N_.dict(e => 0));
  let [V, H] = useState(!1);
  let [W, {
    errorMessage: K
  }] = function (e, t) {
    let {
      prices,
      localizeCurrency
    } = Zz(e);
    if (!prices || !localizeCurrency) return [null, {
      errorMessage: getI18nString("billing_modals.org_renewal.price_error")
    }];
    let a = N_.dict(e => isNullish(prices[e]) ? void 0 : (t[e] || 0) * prices[e].amount);
    return N_.toArray().some(e => isNullish(a[e])) ? [null, {
      errorMessage: getI18nString("billing_modals.org_renewal.price_error")
    }] : [{
      id: "projectedCost",
      name: jsx(_$$E2, {
        color: "secondary",
        children: getI18nString("billing_modals.team_renewal.table.header.annual_cost")
      }),
      textAlign: "right",
      cellComponent: e => jsx(_$$E2, {
        color: "secondary",
        truncate: !0,
        children: localizeCurrency.formatMoney(a[e] || 0, {
          showCents: !1
        })
      }),
      getAggregate: () => jsxs("div", {
        className: "x3nfvp2 x1nejdyq x13a6bvl",
        "data-testid": "projected-cost-aggregate",
        children: [q > 0 && jsx(_$$E, {
          variant: "successFilled",
          "data-testid": "projected-cost-savings",
          children: renderI18nText("billing_modals.team_add_seats.badge.savings", {
            amount: localizeCurrency.formatMoney(q, {
              showCents: !1
            })
          })
        }), jsx(_$$E2, {
          truncate: !0,
          children: localizeCurrency.formatMoney(y()(Object.values(a)), {
            showCents: !1
          })
        })]
      }),
      aggregateColumnSpan: getFeatureFlags().coterm_modal_ui_improvements ? 2 : 1
    }, {}];
  }(d.key, P);
  let Y = function (e, t) {
    let {
      prices
    } = Zz(e);
    let {
      prices: _prices
    } = LY(Y$.AT_NEXT_RENEWAL, e);
    return getFeatureFlags().coterm_modal_ui_improvements && prices && _prices ? N_.dict(e => {
      let r = t[e];
      let a = _prices[e];
      let o = prices[e];
      if (0 === r || isNullish(a) || isNullish(o)) return 0;
      let l = r || 0;
      return l * a.amount - l * o.amount;
    }) : N_.dict(() => 0);
  }(d.key, P);
  let q = y()(Object.values(Y));
  let $ = !!getFeatureFlags().coterm_modal_ui_improvements;
  let Z = getI18nString("billing_modals.start_annual_plan.header");
  let X = y()(Object.values(P));
  let Q = 0 === X || V;
  let J = () => {
    H(!1);
    e.onClose();
  };
  let ee = () => {
    H(!1);
  };
  return jsx(bL, {
    manager: i,
    width: 480,
    height: B,
    children: jsxs(Rq, {
      onSubmit: e => {
        Q || (H(!0), H3({
          teamId: A,
          dispatch: t,
          annualSeatCounts: P,
          onSuccess: J,
          onFailure: ee
        }));
      },
      children: [jsxs(nB, {
        padding: {
          top: 40,
          left: 24,
          right: 24,
          bottom: 24
        },
        children: [jsxs(_$$Y, {
          direction: "vertical",
          spacing: 8,
          padding: {
            bottom: 6
          },
          dataTestId: "team-start-annual-plan-modal-header",
          children: [jsx("div", {
            className: _$$s.mb8.$,
            children: jsx(Ro, {
              size: Pf.XLARGE,
              entity: {
                name: d.name,
                imgUrl: d.imgUrl
              }
            })
          }), jsx(r1, {
            children: Z
          }), jsx("div", {
            className: _$$s.textHeadingMedium.$,
            children: Z
          }), $ ? jsx("div", {
            className: "xemv814 x1n0bwc9",
            children: renderI18nText("billing_modals.start_annual_plan.description_convert_monthly_seats")
          }) : jsx("div", {
            className: "x17akokd x1n0bwc9",
            children: renderI18nText("billing_modals.start_annual_plan.description")
          })]
        }), jsx(_$$C, {
          styling: {
            minColumnWidth: 48,
            columnGaps: ["default", 40]
          },
          items: N_.toArray().sort(AG),
          columns: [{
            id: "billableProductKey",
            name: jsx(_$$E2, {
              color: "secondary",
              truncate: !0,
              children: getI18nString("billing_modals.renewal.table.header.seat_type")
            }),
            textAlign: "left",
            gridColumnWidth: "auto",
            cellComponent: e => jsx(_$$T, {
              contractPriceType: Y$.AT_NEXT_RENEWAL,
              planKey: d.key,
              seatType: e,
              showMonthlyAnnualPriceComparison: !0
            }),
            getAggregate: () => $ ? getI18nString("billing_modals.start_annual_plan.table.annual_seat_subscription") : getI18nString("billing_modals.team_add_seats.table.header.total"),
            aggregateColumnSpan: 2
          }, {
            id: "monthly",
            name: jsx("span", {
              className: _$$s.textBodyMedium.colorTextSecondary.$,
              children: getI18nString("billing_modals.team_add_seats.table.header.monthly")
            }),
            textAlign: "right",
            cellComponent: e => jsx(_$$E2, {
              color: "secondary",
              truncate: !0,
              children: Math.max(0, (E[e] || 0) - (P[e] || 0))
            }),
            aggregateColumnSpan: 0
          }, {
            id: "annual",
            name: jsx("span", {
              className: _$$s.textBodyMedium.colorTextSecondary.$,
              children: getI18nString("billing_modals.team_start_annual_plan.table.header.annual")
            }),
            textAlign: "center",
            cellComponent: e => jsx("div", {
              className: _$$s.mxAuto.$,
              children: jsx(_$$r, {
                value: P[e] || 0,
                onChange: U(e),
                maxCount: $$in
              })
            }),
            getAggregate: () => jsx(_$$E2, {
              truncate: !0,
              children: X
            }),
            aggregateColumnSpan: W && $ ? 0 : 1
          }, ...(W ? [W] : [])]
        }), $ && X > 0 && jsxs(Fragment, {
          children: [jsx(z, {
            annualSubscriptionStartDate: c
          }), jsx("br", {}), jsx("div", {
            className: _$$s.textBodyMedium.colorTextSecondary.$,
            children: renderI18nText("billing_modals.start_annual_plan.footer.your_annual_subscription_will_automatically_renew")
          }), jsx("div", {
            className: _$$s.textBodyMedium.colorTextSecondary.$,
            children: renderI18nText("billing_modals.start_annual_plan.by_upgrading", {
              termsOfService: jsx(_$$N, {
                href: "https://www.figma.com/legal/tos/",
                trusted: !0,
                newTab: !0,
                children: renderI18nText("billing_modals.start_annual_plan.terms_of_service")
              })
            })
          })]
        }), !$ && jsxs(Fragment, {
          children: [jsxs("div", {
            className: _$$s.textBodyMedium.colorTextSecondary.$,
            children: [renderI18nText("billing_modals.start_annual_plan.your_annual_plan_will_start", {
              date: c
            }), " ", jsx(G, {})]
          }), jsx("br", {}), jsx("div", {
            className: _$$s.textBodyMedium.colorTextSecondary.$,
            children: renderI18nText("billing_modals.start_annual_plan.by_upgrading", {
              termsOfService: jsx(_$$N, {
                href: "https://www.figma.com/legal/tos/",
                trusted: !0,
                newTab: !0,
                children: renderI18nText("billing_modals.start_annual_plan.terms_of_service")
              })
            })
          })]
        }), K && jsx("div", {
          className: _$$s.pt16.$,
          children: jsx(_$$E2, {
            color: "danger",
            children: K
          })
        })]
      }), jsx(wi, {
        children: jsxs(jk, {
          children: [jsx($n, {
            variant: "secondary",
            onClick: e.onClose,
            children: getI18nString("general.cancel")
          }), jsx($n, {
            type: "submit",
            disabled: Q,
            children: renderI18nText("billing_modals.team_start_annual_plan.cta")
          })]
        })
      })]
    })
  });
}
export const D = $$V0;
