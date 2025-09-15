import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { customHistory } from "../905/612521";
import { clickableBaseLinkTracked, Spacing, ButtonBasePrimaryTracked } from "../figma_app/637027";
import { LoadingSpinner } from "../figma_app/858013";
import { renderI18nText, getI18nString } from "../905/303541";
import { S as _$$S } from "../905/339549";
import { V8, $c, Wy, Um } from "../figma_app/681712";
import { sx } from "../figma_app/307841";
import { Ik } from "../figma_app/297957";
import { s as _$$s } from "../cssbuilder/589278";
import { sf } from "../905/929976";
import { showModalHandler } from "../905/156213";
import { L } from "../c5e2cae0/262856";
import { isAddressEmpty, UpgradeSteps, SubscriptionType } from "../figma_app/831101";
import { p as _$$p, m as _$$m } from "../figma_app/160942";
import { CurrencyFormatter, isNonUsdUserCurrency } from "../figma_app/514043";
import { HX, PT, Bo, TV, pV, Gn, fK, S as _$$S2 } from "../figma_app/81441";
function v(e) {
  return "org" === e.variant ? jsx(y, {
    ...e
  }) : jsx(j, {
    ...e
  });
}
function y(e) {
  let t = e.canSeeBillingAddressExp && e.billingAddress;
  let a = e.canSeeBillingAddressExp && e.shippingAddress && !isAddressEmpty(e.shippingAddress);
  return jsxs("div", {
    children: [jsx(S, {
      subtitle: renderI18nText(e.canSeeBillingAddressExp ? "org_self_serve.review_step.details" : "org_self_serve.review_step.organization_details")
    }), jsx(T, {
      header: renderI18nText(e.canSeeBillingAddressExp ? "org_self_serve.review_step.company_legal_name" : "org_self_serve.review_step.company_name"),
      value: e.legalName
    }), jsx(T, {
      header: renderI18nText(e.canSeeBillingAddressExp ? "org_self_serve.review_step.display_name" : "org_self_serve.review_step.company_display_name"),
      value: e.displayName
    }), !e.canSeeBillingAddressExp && jsx(T, {
      header: renderI18nText("org_self_serve.review_step.domain"),
      value: e.domain
    }), !e.canSeeBillingAddressExp && e.totalTeams > 0 && jsx(T, {
      header: renderI18nText("org_self_serve.review_step.teams"),
      value: e.totalTeams.toString()
    }), e.canSeeBillingAddressExp && jsx(T, {
      header: renderI18nText("org_self_serve.review_step.billing_email"),
      value: e.userEmail
    }), e.canSeeBillingAddressExp && jsx(clickableBaseLinkTracked, {
      onClick: e.navigateToEditOrganizationDetails,
      trackingEventName: "Edit organization details - checkout flow",
      trusted: !0,
      children: renderI18nText("org_self_serve.review_step.edit_organization")
    }), t && jsx(T, {
      header: renderI18nText("org_self_serve.review_step.billing_address"),
      value: N(e.billingAddress)
    }), a && jsx(T, {
      header: renderI18nText("org_self_serve.review_step.shipping_address"),
      value: N(e.shippingAddress)
    }), e.canSeeBillingAddressExp && jsx(clickableBaseLinkTracked, {
      onClick: e.navigateToEditPaymentDetails,
      trackingEventName: "Edit payment details - checkout flow",
      trusted: !0,
      children: renderI18nText("org_self_serve.review_step.edit_payment")
    })]
  });
}
function j(e) {
  let t = useDispatch();
  let a = useSelector(e => e.selectedView);
  let r = e.canSeeBillingAddressExp && e.billingAddress;
  let l = e.canSeeBillingAddressExp && e.shippingAddress && !isAddressEmpty(e.shippingAddress);
  return jsxs("div", {
    children: [jsx(S, {
      subtitle: renderI18nText("pro_cart.review.details")
    }), jsx(T, {
      header: renderI18nText("pro_cart.review.team_name"),
      value: e.displayName
    }), jsx(T, {
      header: renderI18nText("pro_cart.review.company_name"),
      value: e.legalName
    }), r && jsx(T, {
      header: renderI18nText("pro_cart.review.billing_address"),
      value: N(e.billingAddress)
    }), l && jsx(T, {
      header: renderI18nText("pro_cart.review.shipping_address"),
      value: N(e.shippingAddress)
    }), jsx(clickableBaseLinkTracked, {
      onClick: e.canSeeBillingAddressExp ? () => {
        t(sf({
          ...a,
          paymentStep: UpgradeSteps.PAYMENT_AND_ADDRESS
        }));
      } : () => {
        t(showModalHandler({
          type: L,
          data: {
            modalTitle: getI18nString("pro_cart.review.edit_details_modal_header"),
            displayName: e.displayName,
            legalName: e.legalName,
            updateNameImmediately: !1,
            canSeeBillingAddressExp: e.canSeeBillingAddressExp
          }
        }));
      },
      trackingEventName: "Edit team details - checkout flow",
      trusted: !0,
      children: renderI18nText(e.canSeeBillingAddressExp ? "pro_cart.review.edit_details" : "pro_cart.review.edit_all_details")
    })]
  });
}
function S({
  subtitle: e
}) {
  return jsx("div", {
    className: _$$s.font15.fontMedium.lh24.colorText.$,
    children: e
  });
}
function T({
  header: e,
  value: t
}) {
  return jsxs("div", {
    className: _$$s.flex.flexColumn.mt16.$,
    children: [jsx("p", {
      className: _$$s.font11.lh16.spacingWide.colorText.$,
      children: e
    }), jsx("p", {
      className: _$$s.font13.lh24.fontMedium.colorText.breakWord.mb16.$,
      children: t
    })]
  });
}
function N(e) {
  return [e?.line1, e?.line2, e?.city, e?.region, e?.country, e?.postal_code].filter(function (e) {
    return e;
  }).join(", ");
}
export function $$E0(e) {
  let [t, a] = useState(!1);
  let p = new CurrencyFormatter(e.currency);
  let [h, g] = useState(!1);
  let x = useSelector(e => e.payment);
  let y = useSelector(e => e.payment, (e, t) => h || e === t);
  let j = useSelector(t => e.selectedView.teamId ? t.teams[e.selectedView.teamId].name : e.teamName) ?? "";
  let S = Ik();
  let T = x.displayName || j;
  let N = x.legalName || j;
  let E = x.billingPeriod === SubscriptionType.STUDENT;
  let A = !!_$$p(e.selectedView, x);
  let I = A || E;
  let k = x.submitPending || !A && !t;
  let P = sx();
  let {
    estimatedDesignCost,
    estimatedWhiteboardCost
  } = _$$m({
    currency: e.currency
  });
  let O = x.numWhiteboardEditors;
  let D = estimatedDesignCost(x.numDesignEditors, x.billingPeriod);
  let B = estimatedWhiteboardCost(O, x.billingPeriod);
  let L = I ? 0 : x.taxes?.total || D + B;
  let V = new URLSearchParams(customHistory.location.search);
  let $ = V.get("onCompleteRedirectFileKey");
  let U = V.get("onCompleteRedirectNodeId");
  let {
    trackingDescriptor,
    buttonText,
    finePrint
  } = V8({
    isPromo: A,
    isEducationTeam: E,
    claimsEndAtDate: x.promo?.claims_end_at
  });
  let H = async t => {
    t.preventDefault();
    await g(!0);
    e.onClickConfirm();
  };
  return jsxs("div", {
    className: HX,
    children: [jsx("div", {
      className: PT,
      children: jsx(v, {
        displayName: T ?? "",
        legalName: N ?? "",
        canSeeBillingAddressExp: e.canSeeBillingAddressExp,
        billingAddress: e.billingAddress,
        shippingAddress: e.shippingAddress,
        variant: "team"
      })
    }), jsxs("div", {
      className: Bo,
      children: [jsx("div", {
        className: TV,
        "data-testid": "review-step-upgrade-title",
        children: renderI18nText(E ? "edu.checkout_team_name" : S ? x.billingPeriod === SubscriptionType.ANNUAL ? "pro_cart.review.exp_sticker_shock.upgrade_team_name_to_a_professional_team_yearly" : "pro_cart.review.exp_sticker_shock.upgrade_team_name_to_a_professional_team_monthly" : "pro_cart.review.upgrade_team_name_to_a_professional_team", {
          teamName: j
        })
      }), (!P || !I) && jsx($c, {
        payment: y,
        currency: e.currency,
        isPromo: A,
        isEducationTeam: E,
        hasCartStickerShock: S
      }), jsx("div", {
        className: pV
      }), jsx(Spacing, {
        multiple: 2
      }), y.taxes && !!e.billingAddress && jsxs(Fragment, {
        children: [jsx(Wy, {
          mainText: renderI18nText("pro_cart.info.subtotal"),
          priceText: p.formatMoney(A ? 0 : y.taxes.sub_total || 0, {
            showCents: !0
          }),
          "data-testid": "subtotal-summary"
        }), jsx(Spacing, {
          multiple: 1.5
        }), jsx(Wy, {
          mainText: renderI18nText("pro_cart.review.tax"),
          priceText: p.formatMoney(y.taxes?.tax_total || 0, {
            showCents: !0
          }),
          subText: renderI18nText("pro_cart.review.tax_percent", {
            taxPercent: y.taxes.lines[0]?.tax_percent || 0
          }),
          "data-testid": "tax-summary"
        }), jsx(Spacing, {
          multiple: 1.5
        })]
      }), jsx(Wy, {
        "data-testid": "confirm-total-summary",
        mainText: E ? renderI18nText("pro_cart.review.total") : renderI18nText("pro_cart.review.total_due_today"),
        priceText: p.formatMoney(L, {
          showCents: !0,
          showFullFormat: isNonUsdUserCurrency()
        }),
        subText: A ? renderI18nText("pro_cart.review.you_will_not_be_charged_during_the_free_period", {
          days: y.promo.promo_value
        }) : void 0
      }), jsx(Spacing, {
        multiple: 2
      }), jsxs("div", {
        children: [finePrint, !A && jsxs("div", {
          className: Gn,
          children: [jsx(_$$S, {
            checked: t,
            onChange: e => {
              a(e.currentTarget.checked);
            }
          }), jsxs("p", {
            children: [" ", jsx(Um, {})]
          })]
        })]
      }), jsx(Spacing, {
        multiple: 2.5
      }), jsx(Spacing, {
        multiple: 2.5
      }), jsx(ButtonBasePrimaryTracked, {
        className: fK,
        onClick: H,
        trackingProperties: {
          teamId: e.selectedView.teamId,
          inPublishDraftExp: !!(U && $),
          trackingDescriptor
        },
        disabled: k,
        dataTestId: "confirm-purchase-button",
        children: x.submitPending ? jsx(LoadingSpinner, {
          className: _$$S2
        }) : buttonText
      })]
    })]
  });
}
export const d = $$E0;