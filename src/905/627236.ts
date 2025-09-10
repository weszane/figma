import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Suspense, useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isNullish } from "../figma_app/95419";
import { ServiceCategories as _$$e } from "../905/165054";
import { N as _$$N } from "../905/438674";
import { hS } from "../905/437088";
import { E as _$$E } from "../905/53857";
import { bL, Rq } from "../905/38914";
import { nB, r1, wi, jk } from "../figma_app/272243";
import { $n } from "../905/521428";
import { Yy } from "../figma_app/59509";
import { Q as _$$Q } from "../905/363675";
import { S as _$$S } from "../905/794163";
import { Ay } from "@stylexjs/stylex";
import { getFeatureFlags } from "../905/601108";
import { resourceUtils } from "../905/989992";
import b from "../vendor/523035";
import { a as _$$a } from "../905/361543";
import { C as _$$C } from "../905/641057";
import { r as _$$r } from "../905/786998";
import { tH, H4 } from "../905/751457";
import { z as _$$z } from "../905/284530";
import { s as _$$s } from "../cssbuilder/589278";
import { renderI18nText, getI18nString } from "../905/303541";
import { AutoLayout } from "../905/470281";
import { Pf } from "../905/590952";
import { E as _$$E2 } from "../905/984674";
import { g as _$$g } from "../905/119656";
import { T as _$$T } from "../905/292816";
import { wn } from "../figma_app/920435";
import { fu } from "../figma_app/831799";
import { Y$ } from "../905/84777";
import { xQ, $$in } from "../figma_app/84966";
import { N_ } from "../905/332483";
import { AG } from "../figma_app/217457";
import { vr } from "../figma_app/514043";
import { useSuspendCurrentPrivilegedPlan } from "../figma_app/465071";
import { T as _$$T2 } from "../905/696189";
import { Ro } from "../figma_app/805373";
import { N as _$$N2 } from "../905/809096";
import { A as _$$A } from "../5724/663128";
var v = b;
let K = "dynamic";
let Y = {
  modalDescriptionWithProjectedCost: {
    fontSize: "xemv814",
    color: "x1n0bwc9",
    $$css: !0
  },
  modalDescriptionLegacy: {
    fontSize: "x17akokd",
    color: "x1n0bwc9",
    $$css: !0
  }
};
function q() {
  return jsx(_$$N2, {
    hiddenTitle: renderI18nText("billing_modals.add_seats.hidden_title"),
    estimatedWidth: 480,
    estimatedHeight: 500,
    height: K
  });
}
function $() {
  return jsx(_$$N, {
    href: "https://help.figma.com/hc/articles/360041061034-Manage-billing-on-the-Professional-plan",
    trusted: !0,
    newTab: !0,
    children: renderI18nText("general.learn_more")
  });
}
export function $$Z0(e) {
  let t = useSuspendCurrentPrivilegedPlan({
    reportErrorsToTeam: _$$e.SCALE
  }).key.parentId;
  return jsx(tH, {
    boundaryKey: "TeamAddAnnualSeatsModal",
    fallback: H4.DEFAULT_FULL_PAGE,
    hasCustomWASMBuild: !1,
    team: _$$e.BILLING_EXPERIENCE,
    children: jsx(fu, {
      name: "Team Add Seats Modal",
      properties: {
        teamId: t
      },
      children: jsx(Suspense, {
        fallback: jsx(q, {}),
        children: jsx(X, {
          ...e
        })
      })
    })
  });
}
function X(e) {
  var t;
  var i;
  let l = useDispatch();
  let h = hS(e);
  let g = useSuspendCurrentPrivilegedPlan({
    reportErrorsToTeam: _$$e.SCALE
  });
  let f = useSelector(e => e.teamBilling);
  let b = g.key.parentId;
  let S = f.summary.currency;
  let w = new vr(S);
  let L = _$$g(f.summary.total_upgraded_user_counts, {
    throwOnError: !0
  });
  let H = xQ();
  let W = !!getFeatureFlags().preview_estimated_coterm_cost;
  let Z = _$$g(f.summary.annual_seats, {
    throwOnError: !1
  });
  let [X, J] = _$$a(N_.dict(e => 0));
  let [ee, et] = useState(!1);
  let ei = getI18nString("billing_modals.add_seats.header");
  let en = v()(Object.values(X));
  let er = 0 === en || ee;
  let ea = function (e) {
    let [t, i] = useState(resourceUtils.loading());
    let n = !e;
    useEffect(() => {
      if (n) return;
      let t = !0;
      _$$T2.getPreviewAddProratedAnnualSeats({
        teamId: e.teamId
      }).then(e => {
        if (t) {
          let t = e.data.meta.estimate_context_by_billable_product;
          i(resourceUtils.loaded(t));
        }
      }).catch(e => {
        t && i(resourceUtils.error(e));
      });
      return () => {
        t = !1;
      };
    }, [e?.teamId, n]);
    return useMemo(() => n ? resourceUtils.disabled() : t, [n, t]);
  }(W ? {
    teamId: b
  } : null);
  let es = W && ["loaded", "loading"].includes(ea.status);
  let eo = es && "loaded" === ea.status ? (t = ea.data, N_.dict(e => {
    let i = X[e];
    let n = t[e];
    if (isNullish(n) || isNullish(i) || i <= 0) return 0;
    let r = n.charge_per_seat;
    return r * i - n.credit_per_seat * Math.min(i, n.max_seats_to_credit);
  })) : N_.dict(() => 0);
  let el = es && "loaded" === ea.status ? (i = ea.data, N_.map(e => {
    let t = X[e];
    let n = i[e];
    return isNullish(n) || isNullish(t) || t <= 0 ? 0 : n.savings_per_seat * t;
  }).reduce((e, t) => e + t, 0)) : 0;
  let ed = v()(Object.values(eo));
  let ec = N_.dict(e => (X[e] || 0) + (Z[e] || 0));
  let eu = () => {
    et(!1);
    e.onClose();
  };
  let ep = () => {
    et(!1);
  };
  if ("loading" === ea.status) return jsx(q, {});
  let em = es ? {
    id: "cost",
    name: jsx("span", {
      className: _$$s.textBodyMedium.colorTextSecondary.$,
      children: getI18nString("billing_modals.team_add_seats.table.header.projected_cost")
    }),
    textAlign: "right",
    cellComponent: e => jsx(_$$E2, {
      color: "secondary",
      truncate: !0,
      children: w.formatMoney(eo[e] || 0, {
        showCents: !1
      })
    }),
    getAggregate: () => jsxs("div", {
      className: "x3nfvp2 x1nejdyq x13a6bvl",
      "data-testid": "projected-cost-aggregate",
      children: [el > 0 && jsx(_$$E, {
        variant: "successFilled",
        "data-testid": "projected-cost-savings",
        children: renderI18nText("billing_modals.team_add_seats.badge.savings", {
          amount: w.formatMoney(el, {
            showCents: !1
          })
        })
      }), jsx(_$$E2, {
        truncate: !0,
        children: w.formatMoney(ed, {
          showCents: !1
        })
      })]
    }),
    aggregateColumnSpan: 2
  } : void 0;
  return jsx(bL, {
    manager: h,
    width: 480,
    height: K,
    children: jsxs(Rq, {
      onSubmit: () => {
        er || (et(!0), wn({
          teamId: b,
          dispatch: l,
          annualSeatCounts: ec,
          onSuccess: eu,
          onFailure: ep
        }));
      },
      children: [jsxs(nB, {
        padding: {
          top: 40,
          left: 24,
          right: 24,
          bottom: 24
        },
        children: [jsxs(AutoLayout, {
          direction: "vertical",
          spacing: 8,
          padding: {
            bottom: 6
          },
          dataTestId: "team-add-seats-modal-header",
          children: [jsx("div", {
            className: _$$s.mb8.$,
            children: jsx(Ro, {
              size: Pf.XLARGE,
              entity: {
                name: g.name,
                imgUrl: g.imgUrl
              }
            })
          }), jsx(r1, {
            children: ei
          }), jsx("div", {
            className: _$$s.textHeadingMedium.$,
            children: ei
          }), jsx("div", {
            ...Ay.props(W ? Y.modalDescriptionWithProjectedCost : Y.modalDescriptionLegacy),
            children: es ? renderI18nText("billing_modals.add_seats.description_convert_monthly_seats") : jsxs(Fragment, {
              children: [renderI18nText("billing_modals.add_seats.description"), " ", jsx($, {})]
            })
          })]
        }), jsx(_$$C, {
          styling: {
            minColumnWidth: 48,
            columnGaps: 32
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
              contractPriceType: Y$.CURRENT,
              planKey: g.key,
              seatType: e,
              showMonthlyAnnualPriceComparison: !0
            }),
            getAggregate: () => es ? renderI18nText("billing_modals.team_add_seats.projected_costs") : renderI18nText("billing_modals.team_add_seats.table.header.total"),
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
              children: Math.max(0, (L[e] || 0) - (ec[e] || 0))
            }),
            aggregateColumnSpan: 0
          }, {
            id: "annual",
            name: jsx("span", {
              className: _$$s.textBodyMedium.colorTextSecondary.$,
              children: getI18nString("billing_modals.team_add_seats.table.header.annual")
            }),
            textAlign: "center",
            cellComponent: e => jsx("div", {
              className: _$$s.mxAuto.$,
              children: jsx(_$$r, {
                value: X[e] || 0,
                onChange: J(e),
                maxCount: $$in
              })
            }),
            getAggregate: () => jsx(_$$E2, {
              truncate: !0,
              children: en
            }),
            aggregateColumnSpan: es ? 0 : 1
          }, ...(em ? [em] : [])]
        }), jsx(Q, {
          teamId: b,
          onClose: e.onClose,
          shouldShowEstimatedCost: es,
          monthlyRenewalDate: H,
          totalAdditionalAnnualSeatCount: en
        })]
      }), jsx(wi, {
        children: jsxs(jk, {
          children: [jsx($n, {
            variant: "secondary",
            onClick: e.onClose,
            children: getI18nString("general.cancel")
          }), jsx($n, {
            type: "submit",
            disabled: er,
            children: renderI18nText("billing_modals.team_add_seats.cta")
          })]
        })
      })]
    })
  });
}
function Q(e) {
  let t = e.monthlyRenewalDate ? renderI18nText("billing_modals.team_add_seats.footer.banner.these_changes_will_appear_on_your_x_invoice", {
    date: e.monthlyRenewalDate
  }) : renderI18nText("billing_modals.team_add_seats.footer.banner.these_changes_will_appear_on_your_next_invoice");
  return e.shouldShowEstimatedCost ? e.totalAdditionalAnnualSeatCount <= 0 ? null : jsx(Yy, {
    icon: jsx(_$$S, {}),
    children: jsx(_$$Q, {
      "data-testid": "team-new-add-seats-disclaimer",
      title: jsxs(Fragment, {
        children: [t, " ", jsx($, {})]
      }),
      children: null
    })
  }) : jsx(_$$z, {
    variant: "brand",
    orientation: "vertical",
    iconSrc: _$$A,
    dataTestId: "team-add-seats-disclaimer",
    children: renderI18nText("billing_modals.team_add_seats.disclaimer_banner.add_annual_seats")
  });
}
export const T = $$Z0;