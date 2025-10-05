import { jsxs, jsx } from "react/jsx-runtime";
import { styleBuilderInstance } from "../905/941192";
import { clickableBaseLinkTracked, linkWithTracking } from "../figma_app/637027";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { UpgradeAction } from "../905/370443";
import { ProductTierEnum } from "../905/712921";
import { isAddressEmpty, BillingCycle } from "../figma_app/831101";
import { x as _$$x } from "../c5e2cae0/907085";
import { useState } from "react";
import { throwError } from "../figma_app/465776";
import { Checkbox } from "../905/274480";
import { Label } from "../905/270045";
import { LoadingSpinner } from "../905/443820";
import { G } from "../905/800369";
import { WithTrackedButtonLargeWide } from "../figma_app/617427";
import { LJ } from "../c5e2cae0/793139";
import { W } from "../c5e2cae0/173602";
import { Um } from "../figma_app/681712";
import { IP } from "../figma_app/307841";
import { _ as _$$_ } from "../c5e2cae0/57596";
import { O } from "../c5e2cae0/648208";
import { f as _$$f } from "../c5e2cae0/279252";
function _(e) {
  let t = e.shippingAddress && !isAddressEmpty(e.shippingAddress);
  return jsxs(_$$x, {
    title: getI18nString("checkout.cart_plan_details.subtitle"),
    dataTestId: "cart-plan-details",
    children: [jsx(u, {
      header: e.tier === ProductTierEnum.ORG ? getI18nString("checkout.cart_plan_details.organization_name") : getI18nString("checkout.cart_plan_details.team_name"),
      value: e.displayName,
      dataTestId: "cart-plan-details-plan-name"
    }), e.legalName && jsx(u, {
      header: getI18nString("checkout.cart_plan_details.legal_name"),
      value: e.legalName,
      dataTestId: "cart-plan-details-legal-name"
    }), jsx(u, {
      header: getI18nString("checkout.cart_plan_details.invoice_email"),
      value: e.userEmail,
      dataTestId: "cart-plan-details-invoice-email"
    }), e.billingAddress && jsx(u, {
      header: getI18nString("checkout.cart_plan_details.billing_address"),
      value: p(e.billingAddress),
      dataTestId: "cart-plan-details-billing-address"
    }), t && jsx(u, {
      header: getI18nString("checkout.cart_plan_details.shipping_address"),
      value: p(e.shippingAddress),
      dataTestId: "cart-plan-details-shipping-address"
    }), jsx(clickableBaseLinkTracked, {
      onClick: e.navigateToEditDetails,
      className: cssBuilderInstance.font13.py12.$,
      trackingProperties: {
        trackingDescriptor: UpgradeAction.EDIT_PLAN_DETAILS
      },
      "data-testid": "cart-plan-details-edit-details",
      trusted: !0,
      children: renderI18nText("checkout.cart_plan_details.edit_details")
    })]
  });
}
function u({
  header: e,
  value: t,
  dataTestId: a
}) {
  return jsxs("div", {
    className: cssBuilderInstance.flex.flexColumn.py16.bb1.bSolid.colorBorder.itemsStart.$,
    "data-testid": a,
    children: [jsx("p", {
      className: cssBuilderInstance.font13.lh24.spacingWide.colorTextSecondary.pb4.$,
      children: e
    }), jsx("p", {
      className: cssBuilderInstance.font13.lh24.colorText.breakWord.$,
      children: t
    })]
  });
}
function p(e) {
  return [e?.line1, e?.line2, e?.city, e?.region, e?.country, e?.postal_code].filter(function (e) {
    return e;
  }).join(", ");
}
let E = jsx(linkWithTracking, {
  target: "_blank",
  trusted: !0,
  href: "/pricing",
  children: renderI18nText("checkout.monthly_price")
});
function A({
  title: e,
  countByBillableProductKey: t,
  billingInterval: a,
  currency: i,
  taxPercent: _,
  isRequestPending: u,
  tier: p,
  onSubmit: g,
  onSubmitTrackingProperties: y
}) {
  let [S, b] = useState(!1);
  let E = u || !S;
  let A = jsx(Checkbox, {
    label: jsx(Label, {
      children: jsx("span", {
        className: cssBuilderInstance.font13.$,
        children: p === ProductTierEnum.ORG ? jsx(W, {}) : jsx(Um, {})
      })
    }),
    checked: S,
    onChange: b
  });
  let k = jsx("div", {
    className: cssBuilderInstance.flex.justifyCenter.itemsCenter.$,
    "data-testid": "cart-review-submit-loading",
    children: jsx(LoadingSpinner, {})
  });
  return jsxs(_$$x, {
    title: e,
    dataTestId: "cart-review",
    children: [jsx("div", {
      className: cssBuilderInstance.mt16.$,
      children: jsx(O, {
        countByBillableProductKey: t,
        billingInterval: a,
        currency: i,
        taxPercent: _ ?? 0,
        isCartReviewSummary: !0,
        tier: p
      })
    }), jsx(I, {
      tier: p,
      isAnnual: a === BillingCycle.YEAR
    }), jsx(_$$_, {}), jsx("div", {
      className: cssBuilderInstance.my24.$,
      style: styleBuilderInstance.add({
        marginLeft: "-10px"
      }).$,
      "data-testid": "cart-review-terms-checkbox",
      children: A
    }), jsx(WithTrackedButtonLargeWide, {
      onClick: g,
      disabled: E,
      htmlAttributes: {
        "data-testid": "cart-review-submit-button"
      },
      trackingProperties: {
        trackingDescriptor: UpgradeAction.COMPLETE_PURCHASE,
        ...y
      },
      children: u ? k : renderI18nText("checkout.complete_purchase")
    })]
  });
}
function I({
  tier: e,
  isAnnual: t
}) {
  return IP() ? jsx(k, {
    tier: e,
    isAnnual: t
  }) : e === ProductTierEnum.ORG ? jsx(P, {}) : null;
}
function k({
  tier: e,
  isAnnual: t
}) {
  let a = e === ProductTierEnum.ORG ? "https://help.figma.com/hc/articles/360040328293-Manage-billing-on-the-Organization-and-Enterprise-plans" : "https://help.figma.com/hc/articles/360041061034-Manage-billing-on-the-Professional-plan";
  return jsx("div", {
    className: cssBuilderInstance.mt24.$,
    "data-testid": "cart-review-upgrade-information-banner",
    children: jsxs("div", {
      className: cssBuilderInstance.py8.px16.colorBgSecondary.bRadius5.flex.flexColumn.gap4.$,
      children: [jsx("p", {
        className: cssBuilderInstance.textBodyMediumStrong.$,
        children: renderI18nText("checkout.how_do_new_seat_additions_and_upgrades_work")
      }), jsx("p", {
        children: function (e, t) {
          switch (e) {
            case ProductTierEnum.ORG:
              return renderI18nText("checkout.cart_review_upgrade_info_org");
            case ProductTierEnum.PRO:
              return t ? renderI18nText("checkout.cart_review_upgrade_info_pro_annual", {
                monthlyPriceLink: E
              }) : renderI18nText("checkout.cart_review_upgrade_info_pro_monthly");
            default:
              throwError(e);
          }
        }(e, t)
      }), jsx(clickableBaseLinkTracked, {
        className: cssBuilderInstance.textBodyMediumStrong.$,
        style: styleBuilderInstance.add({
          height: "16px"
        }).$,
        target: "_blank",
        href: a,
        trusted: !0,
        children: renderI18nText("checkout.learn_more")
      })]
    })
  });
}
function P() {
  let [e, t] = useState(!1);
  let a = new Date().getMonth();
  let d = new Date().setMonth(a + 3);
  return jsxs("div", {
    className: cssBuilderInstance.mt24.$,
    "data-testid": "cart-review-org-true-up-banner",
    children: [e && jsx(LJ, {
      onClose: () => t(!1)
    }), jsxs("div", {
      className: cssBuilderInstance.flexColumn.pt4.pb8.px8.colorBgSecondary.bRadius5.$,
      children: [jsx(G, {}), jsxs("div", {
        className: cssBuilderInstance.px8.$,
        children: [jsx("p", {
          className: cssBuilderInstance.pt4.fontMedium.$,
          children: renderI18nText("org_self_serve.review_step.next_quarterly_true_up_on_date", {
            trueUpDate: new Date(d)
          })
        }), jsx("p", {
          className: cssBuilderInstance.pt4.$,
          children: renderI18nText("org_self_serve.review_step.what_is_a_true_up")
        }), jsxs("ul", {
          style: styleBuilderInstance.ml16.mt4.add({
            listStyle: "disc"
          }).$,
          children: [jsx("li", {
            children: renderI18nText("org_self_serve.review_step.true_up_description.seat_rename")
          }), jsx("li", {
            children: renderI18nText("checkout.org_self_serve.true_up_description2_seat_rename")
          }), jsx("li", {
            children: renderI18nText("checkout.org_self_serve.true_up_description3_seat_rename")
          }), jsx("li", {
            children: renderI18nText("checkout.org_self_serve.true_up_description4_seat_rename")
          })]
        }), jsx(clickableBaseLinkTracked, {
          className: cssBuilderInstance.pt8.fontMedium.inline.$,
          onClick: () => t(!0),
          trusted: !0,
          children: renderI18nText("org_self_serve.review_step.learn_more_about_true_ups")
        })]
      })]
    })]
  });
}
export function $$R0(e) {
  return jsxs("div", {
    style: styleBuilderInstance.grid.add({
      gridTemplateColumns: "400px 1fr",
      gap: "48px"
    }).$,
    "data-testid": "cart-review-step",
    children: [jsx(_, {
      ...e
    }), e.hasUpgradeSucceeded ? jsx(_$$f, {}) : jsx(A, {
      ...e
    })]
  });
}
export const j = $$R0;