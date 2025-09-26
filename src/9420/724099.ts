import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Checkbox } from "../905/274480";
import { Label } from "../905/270045";
import { analyticsEventManager } from "../905/449184";
import { h as _$$h } from "../905/791079";
import { EnhancedInput } from "../figma_app/637027";
import { _ as _$$_, S as _$$S2 } from "../figma_app/490799";
import { LoadingSpinner } from "../figma_app/858013";
import { SvgComponent } from "../905/714743";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { styleBuilderInstance } from "../905/941192";
import { wn, dl, Ix } from "../9420/795870";
import { E as _$$E } from "../905/712094";
import { d2, lB } from "../905/148137";
import { isAddressEmpty, createEmptyAddress } from "../figma_app/831101";
import { X as _$$X } from "../905/33014";
import { A as _$$A } from "../905/289352";
import { A as _$$A2 } from "../svg/433566";
let $$S = "stripe_payment_and_address--error--z-IbH";
let R = "stripe_payment_and_address--paymentDetailsCheckbox--34fJx";
export function $$N0({
  createPaymentElement: e,
  unmountPaymentElement: r,
  billingAddress: t,
  updateBillingAddress: N,
  legalCompanyName: b,
  updateLegalCompanyName: x,
  nameOnPaymentMethod: C,
  updateNameOnPaymentMethod: A,
  shippingAddress: v,
  updateShippingAddress: P,
  error: M,
  paymentError: G,
  paymentMethodType: O,
  paymentElementEventHandlers: w,
  vatGstId: B,
  onVatGstIdChange: U,
  regionalVatGstId: k,
  onRegionalVatGstIdChange: j,
  paymentFlow: J,
  canSeeBillingAddressExp: $,
  isCampfireCart: F,
  hide: L
}) {
  let [V, Y] = useState(!1);
  let [H, z] = useState(!!v && !isAddressEmpty(v));
  let [Q, q] = useState(!!b);
  let K = (J === wn.PRO_UPGRADE || J === wn.ORG_UPGRADE) && $;
  let X = {
    paymentFlow: J,
    paymentMethodType: O,
    isCampfireCart: !!F
  };
  _$$h(() => (async function () {
    await e({
      ready: e => {
        Y(!0);
        w?.ready?.(e);
      },
      change: w?.change
    });
  }(), () => {
    r();
  }));
  useEffect(() => {
    M && analyticsEventManager.trackDefinedEvent("monetization_upgrades.checkout_payment_error", {
      ...X,
      message: M.message
    });
  }, [M]);
  useEffect(() => {
    G && analyticsEventManager.trackDefinedEvent("monetization_upgrades.checkout_payment_error", {
      ...X,
      message: G
    });
  }, [G]);
  return M?.code === dl.UNINITIALIZED_STRIPE_ELEMENTS_ERROR ? jsxs("div", {
    className: "stripe_payment_and_address--errorContainer--vjs9-",
    children: [jsx(SvgComponent, {
      svg: _$$A2,
      className: "stripe_payment_and_address--errorIcon--vMQyn"
    }), jsx("p", {
      className: "stripe_payment_and_address--errorMessage--eZnrd",
      children: M.message
    })]
  }) : jsxs("div", {
    style: styleBuilderInstance.$$if(L, {
      height: "0px",
      overflow: "hidden",
      opacity: 0
    }).$,
    className: "stripe_payment_and_address--container--1Xdbp",
    children: [G && jsx("div", {
      className: $$S,
      children: jsx(_$$_, {
        color: _$$S2.ERROR,
        text: G
      })
    }), M && jsx("div", {
      className: $$S,
      children: jsx(_$$_, {
        color: _$$S2.ERROR,
        text: M.message
      })
    }), jsx("div", {
      id: Ix
    }), V ? jsxs("div", {
      style: styleBuilderInstance.add({
        marginTop: "7px"
      }).$$if(O && d2.includes(O), {
        marginTop: "15px"
      }).$,
      children: [$ && A && jsx(EnhancedInput, {
        value: C || "",
        htmlName: "name_on_card",
        label: getI18nString("pro_cart.payment.name_on_payment_method_label"),
        placeholder: getI18nString("pro_cart.payment.name_on_payment_method"),
        onChange: e => {
          A(e.target.value.trim());
        },
        autoCompleteName: "name on payment method",
        trackingFieldName: "Name On Payment Method",
        dataTestId: "name-on-payment-method"
      }), jsx(_$$X, {
        address: t,
        updateAddress: N,
        canSeeBillingAddressExp: $,
        isBillingAddress: !0
      }), !!U && jsx(_$$A, {
        onChange: U,
        country: t.country,
        vatId: B,
        isCommunityCheckout: J === wn.COMMUNITY_CHECKOUT
      }), !!j && jsx(_$$A, {
        onChange: j,
        country: t.country,
        region: t.region,
        vatId: k,
        isCommunityCheckout: J === wn.COMMUNITY_CHECKOUT,
        variant: "regional"
      }), O === lB.SEPA && jsx("p", {
        className: "stripe_payment_and_address--mandateText--hH8C3",
        children: renderI18nText("pro_cart.payment.sepa_direct_debit_mandate")
      }), K && jsx("div", {
        className: R,
        style: styleBuilderInstance.$$if(Q, {
          marginBottom: "24px"
        }).$,
        "data-testid": "stripe-payment-legal-name-checkbox",
        children: jsx(Checkbox, {
          label: jsx(Label, {
            children: jsx("span", {
              className: cssBuilderInstance.font13.$,
              children: renderI18nText("checkout.i_have_a_different_legal_name")
            })
          }),
          checked: Q,
          onChange: e => {
            q(e);
            !e && x && x("");
          }
        })
      }), Q && jsx(_$$E, {
        canSeeBillingAddressExp: $,
        legalCompanyName: b,
        updateLegalCompanyName: x
      }), K && jsx("div", {
        className: R,
        style: styleBuilderInstance.$$if(H, {
          marginBottom: "24px"
        }).$,
        "data-testid": "stripe-payment-shipping-address-checkbox",
        children: jsx(Checkbox, {
          label: jsx(Label, {
            children: jsx("span", {
              className: cssBuilderInstance.font13.$,
              children: renderI18nText("checkout.i_have_a_different_shipping_address")
            })
          }),
          checked: H,
          onChange: e => {
            z(e);
            !e && P && P(createEmptyAddress());
          }
        })
      }), H && jsx(_$$E, {
        canSeeBillingAddressExp: $,
        shippingAddress: v,
        updateShippingAddress: P
      })]
    }) : jsx("div", {
      className: "stripe_payment_and_address--spinnerContainer--hg5Vy",
      children: jsx(LoadingSpinner, {})
    })]
  });
}
export const S = $$N0;
