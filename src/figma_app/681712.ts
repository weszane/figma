import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useSelector } from "react-redux";
import a from "classnames";
import { Badge, BadgeColor, BadgeSize } from "../figma_app/919079";
import { renderCheckoutDevModeText } from "../figma_app/361869";
import { Spacing, linkWithTracking } from "../figma_app/637027";
import { renderI18nText, getI18nString } from "../905/303541";
import { UpgradeAction } from "../905/370443";
import { m as _$$m } from "../figma_app/160942";
import { FFileType } from "../figma_app/191312";
import { CurrencyFormatter } from "../figma_app/514043";
import { SubscriptionType, DesignProductIds, FigJamProductIds } from "../figma_app/831101";
import { of, vg, hy, sH, q9, qS } from "../figma_app/81441";
var s = a;
export function $$f3({
  isPromo: e,
  isEducationTeam: t,
  claimsEndAtDate: r
}) {
  var i;
  return e ? {
    trackingDescriptor: UpgradeAction.START_PRO_PLAN_FOR_FREE,
    buttonText: renderI18nText("pro_cart.review.start_professional_plan_for_free"),
    finePrint: jsxs(Fragment, {
      children: [renderI18nText("pro_cart.review.offer_redeem_agree", {
        termsOfServiceLink: jsx(O, {})
      }), r && jsxs(Fragment, {
        children: [" ", renderI18nText("pro_cart.review.redeem_offer_by", {
          date: (i = new Date(r), new Intl.DateTimeFormat("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric"
          }).format(i))
        })]
      })]
    })
  } : t ? {
    trackingDescriptor: UpgradeAction.COMPLETE_UPGRADE,
    buttonText: renderI18nText("pro_cart.review.complete_upgrade"),
    finePrint: renderI18nText("pro_cart.review.all_editors_on_an_education_team_must_be_verified.seat_rename")
  } : {
    trackingDescriptor: UpgradeAction.COMPLETE_PURCHASE,
    buttonText: renderI18nText("pro_cart.review.complete_purchase"),
    finePrint: renderI18nText("pro_cart.review.your_subscription_will_automatically_renew_without_link.seat_rename")
  };
}
export function $$E5(e, t, r, n, i) {
  let a = new CurrencyFormatter(i).formatMoney(n, {
    showCents: !r
  });
  let s = getI18nString("all_carts.num_editors.seat_rename", {
    numEditors: t
  });
  let o = getI18nString("all_carts.plural_months", {
    months: e ? 12 : 1
  });
  return getI18nString("all_carts.cost_equation", {
    money: a,
    editors: s,
    billingTime: o
  });
}
function y({
  currentBillingPeriod: e,
  numEditors: t,
  noCents: r,
  shouldStrikethroughMonthlyUnitCostIfAnnual: i,
  currency: a
}) {
  let {
    getDesignUnitCost
  } = _$$m({
    currency: a
  });
  return e === SubscriptionType.STUDENT ? null : jsx(b, {
    isAnnual: e === SubscriptionType.ANNUAL,
    numEditors: t,
    noCents: r,
    unitCost: getDesignUnitCost(e),
    currency: a,
    monthlyUnitCostForStrikethrough: i ? getDesignUnitCost(SubscriptionType.MONTHLY) : void 0
  });
}
function b({
  isAnnual: e,
  numEditors: t,
  noCents: r,
  unitCost: i,
  monthlyUnitCostForStrikethrough: a,
  currency: s
}) {
  let o = new CurrencyFormatter(s);
  let l = o.formatMoney(i, {
    showCents: !r
  });
  let d = getI18nString("all_carts.num_editors.seat_rename", {
    numEditors: t
  });
  let u = getI18nString("all_carts.plural_months", {
    months: e ? 12 : 1
  });
  return "number" == typeof a && e ? renderI18nText("all_carts.cost_equation_strikethrough_unit_price", {
    strikethroughUnitPrice: jsx("span", {
      className: of,
      children: o.formatMoney(a, {
        showCents: !r
      })
    }),
    money: l,
    editors: d,
    billingTime: u
  }) : renderI18nText("all_carts.cost_equation", {
    money: l,
    editors: d,
    billingTime: u
  });
}
function T({
  currentBillingPeriod: e,
  numEditors: t,
  noCents: r,
  shouldStrikethroughMonthlyUnitCostIfAnnual: i,
  currency: a
}) {
  let {
    getWhiteboardUnitCost
  } = _$$m({
    currency: a
  });
  return jsx(b, {
    isAnnual: e === SubscriptionType.ANNUAL,
    numEditors: t,
    unitCost: getWhiteboardUnitCost(e),
    noCents: r,
    currency: a,
    monthlyUnitCostForStrikethrough: i ? getWhiteboardUnitCost(SubscriptionType.MONTHLY) : void 0
  });
}
export function $$I1(e, t) {
  return Math.ceil((1 - 12 * e / (12 * t)) * 100);
}
function S({
  noCents: e = !0,
  shouldStrikethroughMonthlyUnitCostIfAnnual: t,
  currency: r,
  numEditors: a
}) {
  let s = useSelector(e => e.payment.billingPeriod);
  let o = useSelector(e => e.payment.numWhiteboardEditors);
  return s === SubscriptionType.STUDENT ? null : jsx(T, {
    currentBillingPeriod: s,
    numEditors: a || o,
    noCents: e,
    currency: r,
    shouldStrikethroughMonthlyUnitCostIfAnnual: t
  });
}
function v({
  editorType: e,
  numEditors: t,
  currency: r
}) {
  let n;
  let {
    estimatedDesignCost,
    estimatedWhiteboardCost
  } = _$$m({
    currency: r
  });
  n = "design" === e ? estimatedDesignCost(t, SubscriptionType.MONTHLY) : estimatedWhiteboardCost(t, SubscriptionType.MONTHLY);
  let s = new CurrencyFormatter(r);
  return renderI18nText("edu.cost_per_month", {
    cost: s.formatMoney(n)
  });
}
export function $$A4({
  "data-testid": e,
  discountPercentage: t,
  mainText: r,
  priceText: i,
  strikethroughPriceText: a,
  strikethroughPriceClassName: u,
  subText: p,
  showDevModeIncludedText: _
}) {
  let h = t => void 0 === e ? void 0 : `${e}-${t}`;
  return jsxs("div", {
    "data-testid": e,
    children: [jsxs("div", {
      className: vg,
      "data-testid": h("cost-row"),
      children: [jsx("span", {
        "data-testid": h("main-text"),
        children: r
      }), jsxs("span", {
        "data-testid": h("price-section"),
        children: [a && jsxs(Fragment, {
          children: [jsx("span", {
            className: s()(u, hy, sH),
            "data-testid": h("strikethrough-price-text"),
            children: a
          }), "\xa0"]
        }), jsx("span", {
          className: sH,
          "data-testid": h("price-text"),
          children: i
        })]
      })]
    }), _ && jsxs(Fragment, {
      children: [jsx(Spacing, {
        multiple: .2
      }), jsx(renderCheckoutDevModeText, {}), jsx(Spacing, {
        multiple: .1
      })]
    }), jsxs("div", {
      className: q9,
      "data-testid": h("sub-row"),
      children: [jsx("span", {
        "data-testid": h("sub-text"),
        children: p
      }), t && jsx("span", {
        "data-testid": h("discount-percentage"),
        children: jsx(Badge, {
          className: qS,
          color: BadgeColor.SUCCESS,
          size: BadgeSize.LARGE,
          subtle: !0,
          text: renderI18nText("pro_cart.sidebar.annual_savings_percentage", {
            percentage: t
          })
        })
      })]
    })]
  });
}
function x({
  payment: e,
  currency: t,
  isPromo: r,
  isEducationTeam: i,
  ...a
}) {
  let s;
  let o;
  let l;
  let d;
  let u;
  let {
    estimatedDesignCost,
    estimatedWhiteboardCost
  } = _$$m({
    currency: t
  });
  let f = new CurrencyFormatter(t);
  let {
    editorType
  } = a;
  "design" === editorType ? (o = e.numDesignEditors, l = N(DesignProductIds, e.taxes?.lines) ?? estimatedDesignCost(o, e.billingPeriod), s = renderI18nText("pro_cart.info.figma_design_editors.seat_rename", {
    numEditors: o
  }), u = i ? jsx(v, {
    editorType,
    currency: t,
    numEditors: e.numDesignEditors
  }) : null, i || a.hasCartStickerShock || (d = jsx(y, {
    currentBillingPeriod: e.billingPeriod,
    numEditors: e.numDesignEditors,
    noCents: !1,
    currency: t
  }))) : (o = a.numPaidFigjamEditors, l = N(FigJamProductIds, e.taxes?.lines) ?? estimatedWhiteboardCost(o, e.billingPeriod), d = !i && !a.hasCartStickerShock && jsx(S, {
    noCents: !1,
    currency: t,
    numEditors: o
  }), s = renderI18nText("pro_cart.info.figjam_editors.seat_rename", {
    numEditors: o
  }), u = i ? jsx(v, {
    editorType,
    currency: t,
    numEditors: e.numWhiteboardEditors
  }) : null);
  r && (d = renderI18nText("pro_cart.review.free_for_days", {
    days: e.promo?.promo_value
  }), u = f.formatMoney(l, {
    showCents: !0
  }));
  return jsx($$A4, {
    "data-testid": `confirm-${editorType}-summary`,
    mainText: s,
    strikethroughPriceText: u,
    priceText: f.formatMoney(r || i ? 0 : l, {
      showCents: !0
    }),
    subText: d,
    showDevModeIncludedText: "design" === editorType
  });
}
function N(e, t) {
  return t?.filter(t => e.includes(t.product)).reduce((e, t) => e + t.sub_total, 0);
}
export function $$C0(e) {
  return jsxs(Fragment, {
    children: [jsx(x, {
      ...e,
      editorType: FFileType.DESIGN
    }), jsx(Spacing, {
      multiple: 2
    }), jsx(x, {
      ...e,
      editorType: FFileType.WHITEBOARD,
      numPaidFigjamEditors: e.payment.numWhiteboardEditors
    }), jsx(Spacing, {
      multiple: 2
    })]
  });
}
export function $$w2() {
  return renderI18nText("pro_cart.review.agree_with_privacy_and_cancellation", {
    termsOfServiceLink: jsx(O, {}),
    privacyLink: jsx(R, {}),
    cancellationLink: jsx(L, {})
  });
}
function O() {
  return jsx(linkWithTracking, {
    href: "/tos",
    target: "_blank",
    trusted: !0,
    children: renderI18nText("pro_cart.review.tos")
  });
}
function R() {
  return jsx(linkWithTracking, {
    href: "/privacy",
    target: "_blank",
    trusted: !0,
    children: renderI18nText("pro_cart.review.privacy_policy")
  });
}
function L() {
  return jsx(linkWithTracking, {
    href: "/pricing-faq/#how-do-i-cancel-my-paid-plan",
    target: "_blank",
    trusted: !0,
    children: renderI18nText("pro_cart.review.cancellation_policy")
  });
}
export const $c = $$C0;
export const U1 = $$I1;
export const Um = $$w2;
export const V8 = $$f3;
export const Wy = $$A4;
export const mx = $$E5;