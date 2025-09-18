import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import a from "classnames";
import { h as _$$h } from "../905/207101";
import { EnhancedInput } from "../figma_app/637027";
import { getI18nString, renderI18nText } from "../905/303541";
import { S } from "../905/339549";
import { useThemeContext, getVisibleTheme } from "../905/640017";
import { E } from "../905/712094";
import { zY } from "../905/148137";
import { isAddressEmpty, createEmptyAddress } from "../figma_app/831101";
import { X } from "../905/33014";
import { A as _$$A } from "../905/289352";
import { sq } from "../905/613896";
var s = a;
function A(e) {
  _$$h(() => {
    let t;
    let i = {
      base: {
        color: e.colorText,
        iconColor: e.colorIcon,
        fontFamily: sq,
        fontSize: 14,
        "::placeholder": {
          color: e.colorTextSecondary
        }
      },
      invalid: {
        iconColor: e.colorIconDanger,
        color: e.colorTextDanger
      }
    };
    zY({
      style: i,
      hidePostalCode: !0,
      disabled: e.disabled
    }).then(i => {
      (t = i) && (t.mount(`#${e.cardId}`), t.on("ready", () => {
        e.onCardReady(t);
      }), t.on("change", t => {
        e.onCardChange?.(t);
      }));
    }).catch(e => null);
    return () => {
      t && t.unmount();
    };
  });
  let t = e.setNameOnPaymentMethod;
  return jsxs("div", {
    id: e.id,
    className: s()("stripe--stripeCardAndAddress--b42eG", {
      "stripe--stripeCardAndAddress__fullWidth--MHvSE": e.allowFullWidthForm
    }),
    children: [jsx("div", {
      id: e.cardId,
      className: "stripe--stripeCard--5to4r"
    }), !e.disabled && jsx("style", {
      children: `.StripeElement--focus {
            box-shadow: 0 0 0 1px #0D99FF;
            border: 1px solid #0D99FF;
          }`
    }), e.canSeeBillingAddressExp && t && jsx(EnhancedInput, {
      value: e.nameOnPaymentMethod || "",
      htmlName: "name_on_card",
      label: getI18nString("org_self_serve.payment_step.name_on_payment_method_label"),
      placeholder: getI18nString("org_self_serve.payment_step.name_on_payment_method"),
      onChange: e => {
        t(e.target.value.trim());
      },
      autoCompleteName: "name on payment method",
      trackingFieldName: "Name On Payment Method",
      dataTestId: "name-on-payment-method"
    }), !!e.showAddressForm && jsx(X, {
      address: e.billingAddress,
      updateAddress: e.onBillingAddressChange,
      canSeeBillingAddressExp: e.canSeeBillingAddressExp,
      isBillingAddress: !0
    }), !!e.onVatIdChange && jsx(_$$A, {
      onChange: e.onVatIdChange,
      country: e.billingAddress.country,
      setIsVatIdValid: e.setIsVatIdValid,
      isCommunityCheckout: e.isCommunityCheckout,
      vatId: e.vatId || ""
    }), !!e.onRegionalVatIdChange && jsx(_$$A, {
      variant: "regional",
      onChange: e.onRegionalVatIdChange,
      country: e.billingAddress.country,
      region: e.billingAddress.region,
      setIsVatIdValid: e.setIsRegionalVatIdValid,
      isCommunityCheckout: e.isCommunityCheckout,
      vatId: e.regionalVatId || ""
    }), e.isCheckoutFlow && e.canSeeBillingAddressExp && jsx(b, {
      ...e
    })]
  });
}
function y(e, t, i) {
  let n = i[e];
  return n && !n.includes("color") ? n : ("dark" === t ? {
    colorText: "rgba(255, 255, 255, 1)",
    colorIcon: "rgba(255, 255, 255, 1)",
    colorTextSecondary: "rgba(255, 255, 255, 0.7)",
    colorTextDanger: "#fca397",
    colorIconDanger: "#e03e1a"
  } : {
    colorText: "rgba(0, 0, 0, 0.9)",
    colorIcon: "rgba(0, 0, 0, 0.9)",
    colorTextSecondary: "rgba(0, 0, 0, 0.5)",
    colorTextDanger: "#dc3412",
    colorIconDanger: "#f24822"
  })[e];
}
function b(e) {
  let [t, i] = useState(!!e.shippingAddress && !isAddressEmpty(e.shippingAddress));
  let a = e => {
    i(!t);
    t && e.onShippingAddressChange && e.onShippingAddressChange(createEmptyAddress());
  };
  return jsxs(Fragment, {
    children: [jsxs("div", {
      className: "stripe--paymentDetailsCheckbox--2HcCJ",
      children: [jsx(S, {
        checked: t,
        onChange: () => a(e)
      }), jsxs("p", {
        children: [" ", renderI18nText("org_self_serve.payment_step.different_shipping_address")]
      })]
    }), t && !!e.onShippingAddressChange && jsx(E, {
      canSeeBillingAddressExp: e.canSeeBillingAddressExp,
      shippingAddress: e.shippingAddress,
      updateShippingAddress: e.onShippingAddressChange
    })]
  });
}
export function $$v0(e) {
  let t = useThemeContext();
  let i = getVisibleTheme();
  let r = y("colorText", i, t);
  let a = y("colorIcon", i, t);
  let s = y("colorTextSecondary", i, t);
  let o = y("colorTextDanger", i, t);
  let l = y("colorIconDanger", i, t);
  return jsx(A, {
    ...e,
    colorText: r,
    colorIcon: a,
    colorTextSecondary: s,
    colorTextDanger: o,
    colorIconDanger: l
  });
}
$$v0.defaultProps = {
  showAddressForm: !0
};
export const n = $$v0;