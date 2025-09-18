import { jsx, jsxs } from "react/jsx-runtime";
import { throwError } from "../figma_app/465776";
import { isNullish } from "../figma_app/95419";
import { ServiceCategories as _$$e } from "../905/165054";
import { w as _$$w } from "../c5e2cae0/59973";
import { handleSuspenseRetainRelease } from "../figma_app/566371";
import { reportError } from "../905/11";
import { s as _$$s } from "../cssbuilder/589278";
import { renderI18nText, getI18nString } from "../905/303541";
import { sx } from "../905/941192";
import { TextWithTruncation } from "../905/984674";
import { up, Vh, kV, N9 } from "../figma_app/692987";
import { s$ } from "../figma_app/361035";
import { gS } from "../figma_app/441925";
import { tI } from "../figma_app/847597";
import { UR } from "../figma_app/307841";
import { TrackingProvider } from "../figma_app/831799";
import { jv } from "../905/84777";
import { ProductAccessTypeEnum, isValidAccessType } from "../905/513035";
import { collaboratorSet } from "../905/332483";
import { compareProductAccessTypes } from "../figma_app/217457";
import { CurrencyFormatter } from "../figma_app/514043";
import { Ju } from "../905/712921";
import { BillingCycle } from "../figma_app/831101";
import { e0 } from "../905/696396";
if (443 == require.j) {}
if (443 == require.j) {}
if (443 == require.j) {}
export function $$E0({
  countByBillableProductKey: e,
  billingInterval: t,
  currency: a,
  isCartReviewSummary: r,
  taxPercent: i,
  tier: l
}) {
  let o = UR();
  let x = jv({
    billableProductKeys: collaboratorSet,
    baseQuery: {
      currency: a,
      tier: l,
      renewalTerm: t,
      unit: t
    }
  });
  let N = jv({
    billableProductKeys: collaboratorSet,
    baseQuery: {
      currency: a,
      tier: l,
      renewalTerm: t,
      unit: BillingCycle.MONTH
    }
  });
  let [b, E] = handleSuspenseRetainRelease(x, N);
  if (!b.data || !E.data) throw Error("Price data is null");
  let P = s$(b.data);
  let M = s$(E.data);
  let R = i || 0;
  let O = e => up(e, a, {
    showCents: r
  });
  let D = Vh(e, P);
  let B = kV(e, P, R);
  let L = N9(e, P, R);
  let V = O(D);
  let $ = O(B);
  let U = O(L);
  let z = jsx(TextWithTruncation, {
    fontWeight: "medium",
    color: "tertiary",
    fontSize: 11,
    children: renderI18nText("checkout.review_in_tax_disclaimer")
  });
  let F = t === BillingCycle.YEAR;
  return jsx(TrackingProvider, {
    name: e0.CART_REVIEW_PURCHASE_SUMMARY,
    properties: {
      tier: l,
      billingInterval: t,
      countBySeatType: gS(e),
      currency: a,
      taxPercent: R,
      subtotal: D,
      taxTotal: B,
      total: L
    },
    enabled: r,
    children: jsxs("div", {
      children: [jsx("div", {
        style: sx.add({
          marginBottom: "24px"
        }).$,
        children: Object.keys(e).sort(compareProductAccessTypes).map(t => jsx(A, {
          billableProductKey: t,
          count: e[t] || 0,
          currency: a,
          isAnnual: F,
          isCartReviewSummary: r,
          paymentPrices: P,
          lineItemPrices: M,
          hasPriceAsterisk: o && t === ProductAccessTypeEnum.EXPERT
        }, t))
      }), jsxs("div", {
        className: _$$s.flex.justifyBetween.py4.$,
        "data-testid": "purchase-summary-subtotal",
        children: [jsx("h3", {
          className: _$$s.fontMedium.$$if(r, _$$s.font13.lh24).$,
          children: renderI18nText("checkout.subtotal")
        }), jsx("p", {
          className: _$$s.$$if(r, _$$s.font13.lh24).$,
          children: k({
            price: V,
            isCartReviewSummary: r,
            isAnnual: F
          })
        })]
      }), !r && jsx(TextWithTruncation, {
        fontWeight: "regular",
        color: "tertiary",
        fontSize: 11,
        children: renderI18nText("checkout.tax_disclaimer_revised", {
          checkoutStep: z
        })
      }), r && jsxs("div", {
        children: [jsxs("div", {
          className: _$$s.flex.justifyBetween.py4.itemsCenter.$,
          "data-testid": "purchase-summary-taxes",
          children: [jsxs("div", {
            className: _$$s.flexColumn.$,
            children: [jsx("h3", {
              className: _$$s.font13.lh24.$,
              children: renderI18nText("checkout.purchase_summary.tax")
            }), jsx("h3", {
              className: _$$s.colorTextSecondary.font13.lh24.$,
              children: renderI18nText("pro_cart.review.tax_percent", {
                taxPercent: R
              })
            })]
          }), jsx("p", {
            className: _$$s.font13.lh24.$,
            children: k({
              price: $,
              isAnnual: F,
              isCartReviewSummary: r
            })
          })]
        }), jsxs("div", {
          className: _$$s.flex.justifyBetween.py4.$,
          "data-testid": "purchase-summary-total-due",
          children: [jsx("h3", {
            className: _$$s.fontMedium.font13.lh24.$,
            children: renderI18nText("checkout.purchase_summary.total_due_today")
          }), jsx("p", {
            className: _$$s.font13.lh24.$,
            children: k({
              price: U,
              isAnnual: F,
              isCartReviewSummary: r
            })
          })]
        }), jsx("div", {
          "data-testid": "purchase-summary-plan-renewal",
          children: jsxs("p", {
            className: _$$s.font13.lh24.flex.$,
            children: [jsx(_$$w, {
              className: _$$s.minW24.$
            }), jsx(I, {
              tier: l,
              isAnnual: F
            })]
          })
        })]
      })]
    })
  });
}
function A({
  billableProductKey: e,
  count: t,
  currency: a,
  isAnnual: r,
  isCartReviewSummary: n,
  paymentPrices: d,
  lineItemPrices: _,
  hasPriceAsterisk: u
}) {
  if (!isValidAccessType(e)) {
    reportError(_$$e.MONETIZATION_UPGRADES, Error(`Received invalid billable product key ${e}`));
    return null;
  }
  let p = d[e];
  if (isNullish(p)) {
    reportError(_$$e.BILLING_EXPERIENCE, Error(`Received null payment price on purchase summaryfor ${e}`));
    return null;
  }
  let h = _[e];
  if (isNullish(h)) {
    reportError(_$$e.BILLING_EXPERIENCE, Error(`Received null line item price on purchase summary for ${e}`));
    return null;
  }
  let g = new CurrencyFormatter(a);
  let f = g.formatMoney(p * t, {
    showCents: n
  });
  let v = _$$s.font13.lh24;
  let y = getI18nString("checkout.price_per_month", {
    price: g.formatMoney(h)
  });
  return jsxs("div", {
    "data-testid": `purchase-summary-${e}-row`,
    className: _$$s.flex.justifyBetween.py8.bb1.bSolid.colorBorder.$$if(n, _$$s.itemsCenter, _$$s.itemsStart).$,
    children: [jsxs("div", {
      children: [jsx("h3", {
        className: _$$s.$$if(n, v).$,
        children: renderI18nText("checkout.purchase_summary.cart_line_item", {
          quantity: t,
          productLabel: tI(e)
        })
      }), jsx("p", {
        className: _$$s.colorTextSecondary.$$if(n, v).$,
        children: renderI18nText(r ? "checkout.product_cost_breakdown_annually" : "checkout.product_cost_breakdown_monthly", {
          price: y,
          quantity: t
        })
      })]
    }), jsx("p", {
      className: _$$s.$$if(n, v).$,
      children: k({
        price: f,
        isCartReviewSummary: n,
        isAnnual: r,
        hasPriceAsterisk: u
      })
    })]
  });
}
function I({
  tier: e,
  isAnnual: t
}) {
  switch (e) {
    case Ju.ORG:
      return renderI18nText("checkout.purchase_summary.plan_renewal_org");
    case Ju.PRO:
      return t ? renderI18nText("checkout.purchase_summary.plan_renewal_pro_annual") : renderI18nText("checkout.purchase_summary.plan_renewal_pro_monthly");
    default:
      throwError(e);
  }
}
function k({
  price: e,
  isAnnual: t,
  isCartReviewSummary: a,
  hasPriceAsterisk: s
}) {
  let r = a ? e : t ? getI18nString("checkout.price_per_year", {
    price: e
  }) : getI18nString("checkout.price_per_month", {
    price: e
  });
  return s ? getI18nString("checkout.purchase_summary.asterisked_price", {
    price: r
  }) : r;
}
export const O = $$E0;