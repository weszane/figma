import { useState, useRef, useEffect } from "react";
import { ServiceCategories } from "../905/165054";
import { trackEventAnalytics } from "../905/449184";
import { logger } from "../905/651849";
import { getInitialOptions, buildStaticUrl } from "../figma_app/169182";
import { reportError, normalizeError } from "../905/11";
import { XHR } from "../905/910117";
import { getI18nString } from "../905/303541";
import { resolveMessage } from "../905/231762";
import { createEmptyAddress, isAddressEmpty } from "../figma_app/831101";
import { lX, dT } from "../9420/394825";
import { getUserCurrency, isCurrencyAllowedForCountry, getUserIsoCodeIfNonUsd, getAllowedCartCurrencies } from "../figma_app/514043";
import { eV, pV, lB } from "../905/148137";
import { V as _$$V } from "../905/57562";
import { teamAPIClient } from "../905/834575";
import { D as _$$D } from "../905/347702";
import { useThemeContext, getVisibleTheme } from "../905/640017";
import { sq } from "../905/613896";
function m({
  defaultCountry: e,
  initialAddress: r
} = {}) {
  let [t, n] = useState({
    ...createEmptyAddress(e),
    ...(r ?? {})
  });
  let o = async () => {
    try {
      await XHR.post("/api/validate_address", {
        address: t
      });
    } catch (e) {
      return resolveMessage(e) || e.message;
    }
    return null;
  };
  return {
    address: t,
    updateAddress: e => {
      n(r => ({
        ...r,
        ...e
      }));
    },
    trimAddress: () => {
      let e;
      for (e in t) t[e] = t[e].trim();
    },
    validateAddress: o
  };
}
let T = {
  API_CONNECTION_ERROR: "api_connection_error",
  API_ERROR: "api_error",
  AUTHENTICATION_ERROR: "authentication_error",
  CARD_ERROR: "card_error",
  INVALID_REQUEST_ERROR: "invalid_request_error",
  RATE_LIMIT_ERROR: "rate_limit_error",
  VALIDATION_ERROR: "validation_error"
};
let y = Object.values(T);
function g(e) {
  return !!e && "object" == typeof e && y.includes(e.type);
}
function h(e) {
  return g(e) && e.type === T.CARD_ERROR;
}
function f(e) {
  return g(e) && e.type === T.VALIDATION_ERROR;
}
function S(e) {
  return g(e) && "setup_intent_authentication_failure" === e.code;
}
var R = (e => (e.NETSUITE_ITEM_ID_ORG_DESIGN_DEPRECATED = "2011", e.NETSUITE_ITEM_ID_ORG_FIGJAM_DEPRECATED = "2635", e.NETSUITE_ITEM_ID_ENTERPRISE_DESIGN_DEPRECATED = "2636", e.NETSUITE_ITEM_ID_ENTERPRISE_FIGJAM_DEPRECATED = "2637", e.NETSUITE_ITEM_ID_ORG_DESIGN_JPY_DEPRECATED = "3092", e.NETSUITE_ITEM_ID_ORG_FIGJAM_JPY_DEPRECATED = "3082", e.NETSUITE_ITEM_ID_ENTERPRISE_DESIGN_JPY_DEPRECATED = "3071", e.NETSUITE_ITEM_ID_ENTERPRISE_FIGJAM_JPY_DEPRECATED = "3075", e.NETSUITE_ITEM_ID_ORG_DESIGN_EUR_DEPRECATED = "3090", e.NETSUITE_ITEM_ID_ORG_FIGJAM_EUR_DEPRECATED = "3084", e.NETSUITE_ITEM_ID_ENTERPRISE_DESIGN_EUR_DEPRECATED = "3073", e.NETSUITE_ITEM_ID_ENTERPRISE_FIGJAM_EUR_DEPRECATED = "3077", e.NETSUITE_ITEM_ID_ORG_DESIGN_GBP_DEPRECATED = "3091", e.NETSUITE_ITEM_ID_ORG_FIGJAM_GBP_DEPRECATED = "3083", e.NETSUITE_ITEM_ID_ENTERPRISE_DESIGN_GBP_DEPRECATED = "3072", e.NETSUITE_ITEM_ID_ENTERPRISE_FIGJAM_GBP_DEPRECATED = "3076", e.NETSUITE_ITEM_ID_ORG_DESIGN_CAD_DEPRECATED = "3089", e.NETSUITE_ITEM_ID_ORG_FIGJAM_CAD_DEPRECATED = "3085", e.NETSUITE_ITEM_ID_ENTERPRISE_DESIGN_CAD_DEPRECATED = "3074", e.NETSUITE_ITEM_ID_ENTERPRISE_FIGJAM_CAD_DEPRECATED = "3078", e.NETSUITE_ITEM_ID_ORG_DESIGN = "190686", e.NETSUITE_ITEM_ID_ORG_FIGJAM = "190681", e.NETSUITE_ITEM_ID_ENTERPRISE_DESIGN = "190657", e.NETSUITE_ITEM_ID_ENTERPRISE_FIGJAM = "190669", e.NETSUITE_ITEM_ID_ORG_DESIGN_JPY = "190685", e.NETSUITE_ITEM_ID_ORG_FIGJAM_JPY = "190680", e.NETSUITE_ITEM_ID_ENTERPRISE_DESIGN_JPY = "190656", e.NETSUITE_ITEM_ID_ENTERPRISE_FIGJAM_JPY = "190668", e.NETSUITE_ITEM_ID_ORG_DESIGN_EUR = "190683", e.NETSUITE_ITEM_ID_ORG_FIGJAM_EUR = "190678", e.NETSUITE_ITEM_ID_ENTERPRISE_DESIGN_EUR = "190654", e.NETSUITE_ITEM_ID_ENTERPRISE_FIGJAM_EUR = "190665", e.NETSUITE_ITEM_ID_ORG_DESIGN_GBP = "190684", e.NETSUITE_ITEM_ID_ORG_FIGJAM_GBP = "190679", e.NETSUITE_ITEM_ID_ENTERPRISE_DESIGN_GBP = "190655", e.NETSUITE_ITEM_ID_ENTERPRISE_FIGJAM_GBP = "190667", e.NETSUITE_ITEM_ID_ORG_DESIGN_CAD = "190682", e.NETSUITE_ITEM_ID_ORG_FIGJAM_CAD = "190677", e.NETSUITE_ITEM_ID_ENTERPRISE_DESIGN_CAD = "190653", e.NETSUITE_ITEM_ID_ENTERPRISE_FIGJAM_CAD = "190665", e))(R || {});
function A(e, r, t) {
  let a = t[e];
  return a && !a.match(/rgba|color/) ? a : ("dark" === r ? {
    colorBg: "#2c2c2c",
    colorBgSelected: "#4a5878",
    colorBorder: "#444",
    colorBorderBrand: "#105cad",
    colorBorderDanger: "#963323",
    colorBorderSelected: "#0c8ce9",
    colorIcon: "#fff",
    colorIconDanger: "#f24822",
    colorIconSecondary: "rgba(255, 255, 255, 0.7)",
    colorText: "#fff",
    colorTextBrand: "#7cc4f8",
    colorTextDanger: "#fca397",
    colorTextDisabled: "rgba(255, 255, 255, 0.4)",
    colorTextSecondary: "rgba(255, 255, 255, 0.7)"
  } : {
    colorBg: "#fff",
    colorBgSelected: "#e5f4ff",
    colorBorder: "#e6e6e6",
    colorBorderBrand: "#bde3ff",
    colorBorderDanger: "#ffc7c2",
    colorBorderSelected: "#0d99ff",
    colorIcon: "#191919",
    colorIconDanger: "#e03e1a",
    colorIconSecondary: "rgba(0, 0, 0, 0.5)",
    colorText: "rgba(0, 0, 0, 0.9)",
    colorTextBrand: "#007be5",
    colorTextDanger: "#dc3412",
    colorTextDisabled: "rgba(0, 0, 0, .3)",
    colorTextSecondary: "rgba(0, 0, 0, .5)"
  })[e];
}
let $$v1 = "stripe-payment-element";
let $$P3 = _$$D(e => {
  let {
    address,
    updateAddress,
    trimAddress,
    validateAddress
  } = m({
    defaultCountry: e.defaultCountry,
    initialAddress: e.initialBillingAddress
  });
  let {
    address: _address,
    updateAddress: _updateAddress,
    trimAddress: _trimAddress
  } = m({
    defaultCountry: e.defaultCountry,
    initialAddress: e.initialShippingAddress
  });
  let [b, P] = useState(null);
  let [M, G] = useState(e.initialVatGstId ?? "");
  let [B, U] = useState(null);
  let [k, j] = useState(e.initialRegionalVatGstId ?? "");
  let [J, $] = useState(e.initialCustomerLegalName ?? "");
  let [F, L] = useState(e.initialNameOnPaymentMethod ?? "");
  let V = useRef(null);
  let Y = getInitialOptions().user_data;
  let H = function () {
    let e = useThemeContext();
    let r = getVisibleTheme();
    return {
      loader: "never",
      fonts: [{
        family: "Inter",
        src: `url(${buildStaticUrl("webfont/1/Inter-Regular.woff2?v=3.10")})`,
        weight: "400"
      }],
      appearance: {
        labels: "floating",
        variables: {
          fontFamily: sq,
          fontSizeBase: "13px",
          borderRadius: "3px",
          gridRowSpacing: "0px",
          gridColumnSpacing: "14px",
          colorBackground: A("colorBg", r, e),
          colorText: A("colorText", r, e),
          colorTextPlaceholder: A("colorTextSecondary", r, e),
          colorDanger: A("colorTextDanger", r, e),
          colorIcon: A("colorIcon", r, e),
          colorIconCardError: A("colorIconDanger", r, e),
          colorIconCardCvcError: A("colorIconDanger", r, e),
          colorIconTab: A("colorIconSecondary", r, e),
          colorIconTabHover: A("colorIconSecondary", r, e),
          colorIconTabSelected: A("colorIconSecondary", r, e)
        },
        rules: {
          ".Input": {
            padding: "0 16px",
            marginTop: "6px",
            marginBottom: "10px",
            lineHeight: "28px",
            boxShadow: "none",
            borderColor: A("colorBorder", r, e)
          },
          ".Input:focus": {
            border: `1px solid ${A("colorBorderSelected", r, e)}`,
            boxShadow: `0 0 0 1px ${A("colorBorderSelected", r, e)}`
          },
          ".Input--invalid, .Input--invalid:focus": {
            color: A("colorText", r, e),
            border: `1px solid ${A("colorBorderDanger", r, e)}`,
            boxShadow: `0 0 0 1px ${A("colorBorderDanger", r, e)}`
          },
          ".Label": {
            transition: "none"
          },
          ".Label--invalid": {
            color: A("colorTextDanger", r, e)
          },
          ".Label--floating": {
            color: A("colorTextSecondary", r, e),
            opacity: 1,
            margin: "5px 0 2px",
            fontSize: "9px"
          },
          ".Label--resting": {
            color: A("colorTextSecondary", r, e)
          },
          ".Tab": {
            padding: "12px",
            marginBottom: "10px",
            borderColor: A("colorBorder", r, e),
            color: A("colorTextDisabled", r, e),
            boxShadow: "none",
            transition: "none"
          },
          ".Tab:hover": {
            backgroundColor: A("colorBgSelected", r, e),
            borderColor: A("colorBorderBrand", r, e),
            color: A("colorTextDisabled", r, e)
          },
          ".Tab:focus, .Tab:active, .Tab--selected, .Tab--selected:hover,, .Tab--selected:focus, .Tab--selected:active": {
            backgroundColor: A("colorBgSelected", r, e),
            border: `1px solid ${A("colorBorderSelected", r, e)}`,
            boxShadow: `0 0 0 1px ${A("colorBorderSelected", r, e)}`,
            color: A("colorTextBrand", r, e)
          },
          ".TabLabel": {
            paddingTop: "4px",
            lineHeight: 1.5,
            letterSpacing: "0.055px",
            fontWeight: 500
          }
        }
      }
    };
  }();
  let z = function (e) {
    return {
      layout: {
        type: "tabs",
        defaultCollapsed: !1
      },
      fields: {
        billingDetails: {
          address: "never"
        }
      },
      terms: {
        auBecsDebit: "never",
        bancontact: "never",
        card: "never",
        ideal: "never",
        sepaDebit: "never",
        sofort: "never",
        usBankAccount: "never"
      },
      wallets: {
        applePay: "never",
        googlePay: "never"
      },
      defaultValues: {
        billingDetails: {
          name: e?.name,
          email: e?.email
        }
      }
    };
  }(Y);
  let [Q, q] = useState(void 0);
  async function K() {
    let r = await O(e.setupIntentParams);
    U(r.clientSecret);
    trackEventAnalytics("setup_intent_creation_attempted", Z(), {
      forwardToDatadog: !0
    });
    return r;
  }
  async function X() {
    if (V.current) return V.current;
    try {
      let [r, t] = await Promise.all([eV(), K()]);
      let a = r.elements({
        clientSecret: t.clientSecret,
        currency: e.currency,
        ...H
      });
      V.current = a;
      t.paymentMethods && e.setPaymentMethods && e.setPaymentMethods(t.paymentMethods);
      return a;
    } catch (e) {
      trackEventAnalytics("setup_intent_creation_failed", Z(), {
        forwardToDatadog: !0
      });
      W({
        error: e,
        code: "uninitialized-stripe-elements-error",
        message: getI18nString("payments.errors.error_loading_payment_form")
      });
    }
  }
  function W({
    error: e,
    code: r,
    message: t,
    extra: a = {}
  }) {
    P({
      code: r,
      message: t
    });
    "currency-validation-error" === r || h(e) || f(e) || S(e) || reportError(ServiceCategories.BILLING_EXPERIENCE, Error(`[Billing] ${"string" == typeof e ? e : e.code ?? "StripeError"}`), r => {
      let t = "object" == typeof e ? {
        stripe_error_details: normalizeError(pV(e)),
        ...a
      } : a;
      r.setExtras(t);
      g(e) && (r.setTag("stripe_error_type", e.type), h(e) && r.setLevel("warning"));
      return r;
    });
  }
  function Z() {
    return {
      ...e.customerInfo,
      paymentFlowSource: e.paymentFlowSource,
      currency: e.currency,
      isCampfireCart: !!e.isCampfireCart
    };
  }
  async function ee() {
    if (e.canSeeBillingAddressExp && !F) {
      P({
        code: "name-on-payment-method-required",
        message: getI18nString("payments.errors.name_on_payment_method_required")
      });
      return !0;
    }
    if (e.canSeeBillingAddressExp) try {
      await teamAPIClient.validateAddresses({
        billingAddress: address,
        shippingAddress: _address,
        teamId: e.customerInfo.teamId,
        isCheckout: e.isCheckout
      });
    } catch (e) {
      P({
        code: "address-validation-error",
        message: resolveMessage(e) || e.message
      });
      return !0;
    } else {
      let e = await validateAddress();
      if (e) {
        P({
          code: "address-validation-error",
          message: e
        });
        return !0;
      }
    }
    if (M && !(await _$$V(M, address.country, () => {}, e => {
      P({
        code: "vat-gst-id-verification-error",
        message: e
      });
    })) || k && !(await _$$V(k, address.country, () => {}, e => {
      P({
        code: "vat-gst-id-verification-error",
        message: e
      });
    }, address.region))) return !0;
    if (e.canSeeBillingAddressExp) {
      if (e.currency) try {
        await teamAPIClient.validateCurrency({
          teamId: e.customerInfo.teamId,
          currency: e.currency,
          billingAddress: address,
          shippingAddress: _address,
          isCheckout: e.isCheckout
        });
      } catch (t) {
        W({
          error: "Currency/Address Mismatch",
          code: "currency-validation-error",
          message: getI18nString("payments.errors.currency_mismatch_with_country_error", {
            selected_currency: e.currency.toUpperCase()
          }),
          extra: {
            country: address.country,
            currency: e.currency
          }
        });
        return !0;
      } else if (e.shouldCheckIpCurrency) try {
        await teamAPIClient.validateCurrency({
          teamId: e.customerInfo.teamId,
          currency: getUserCurrency(),
          billingAddress: address,
          shippingAddress: _address,
          isCheckout: e.isCheckout
        });
      } catch (t) {
        W({
          error: `Currency & IP address mismatch error: ${JSON.stringify(e.customerInfo)}, country: ${address.country}, currency: ${getUserCurrency()}`,
          code: "currency-validation-error",
          message: getI18nString("payments.errors.currency_ip_mismatch_error")
        });
        return !0;
      }
    } else {
      if (e.currency && !isCurrencyAllowedForCountry(e.currency, address.country)) {
        W({
          error: "Currency/Address Mismatch",
          code: "currency-validation-error",
          message: getI18nString("payments.errors.currency_mismatch_error", {
            selected_currency: e.currency.toUpperCase()
          }),
          extra: {
            country: address.country,
            currency: e.currency
          }
        });
        return !0;
      }
      if (e.shouldCheckIpCurrency && getUserIsoCodeIfNonUsd() !== address.country) {
        W({
          error: `Currency & IP address mismatch error: ${JSON.stringify(e.customerInfo)}, country: ${address.country}, currency: ${getUserCurrency()}`,
          code: "currency-validation-error",
          message: getI18nString("payments.errors.currency_ip_mismatch_error")
        });
        return !0;
      }
    }
    return !1;
  }
  useEffect(() => {
    let r = V.current;
    r && r.update({
      currency: e.currency
    });
  }, [e.currency]);
  return {
    createPaymentElement: async (e = {}) => {
      let r = await X();
      if (!r) {
        W({
          error: "Failed to get stripe elements",
          code: "uninitialized-stripe-elements-error",
          message: getI18nString("payments.errors.error_loading_payment_form")
        });
        return;
      }
      let t = r.getElement("payment") ?? r.create("payment", z);
      t.on("ready", r => {
        trackEventAnalytics("Payment Form Loaded", {
          ...Z(),
          paymentMethod: Q ?? lB.CARD,
          availableCurrencies: getAllowedCartCurrencies()
        });
        Q || q(lB.CARD);
        e.ready?.(r);
      });
      t.on("change", r => {
        let t = r.value?.type;
        trackEventAnalytics("Choose Payment Method Type", {
          ...Z(),
          paymentMethod: t
        });
        q(t);
        e.change?.(r);
      });
      t.mount(`#${$$v1}`);
    },
    unmountPaymentElement: async () => {
      let e = await X();
      e?.getElement("payment")?.unmount();
    },
    savePayment: async () => {
      if (P(null), await ee()) return;
      if (!V.current) {
        W({
          error: "Cannot save payment without Stripe elements",
          code: "confirm-setup-error",
          message: getI18nString("payments.errors.confirm_setup_error")
        });
        return;
      }
      trimAddress();
      _trimAddress();
      let t = () => document.querySelectorAll("[name*=privateStripeFrame]").length;
      let a = t();
      let n = setInterval(() => {
        let r = !1;
        if (a !== t() && (trackEventAnalytics("Stripe Authentication Modal"), clearInterval(n), r = !0), Y) {
          let t = lX({
            teamId: e.customerInfo.teamId,
            userId: Y.id
          });
          if (t) {
            let e = {
              ...t,
              is3DS: r
            };
            dT(Y.id, e);
          }
        }
      }, 1e3);
      trackEventAnalytics("Add payment method", {
        ...Z(),
        paymentMethod: Q
      }, {
        forwardToDatadog: !0
      });
      let i = e.canSeeBillingAddressExp && !isAddressEmpty(_address) ? {
        shipping_line1: _address.line1 || null,
        shipping_line2: _address.line2 || null,
        shipping_country: e.canSeeBillingAddressExp && _address.country || null,
        shipping_city: _address.city || null,
        shipping_state: _address.region || null,
        shipping_postal_code: _address.postal_code || null
      } : null;
      let c = await eV();
      let {
        error
      } = await c.confirmSetup({
        elements: V.current,
        confirmParams: {
          return_url: w({
            customerInfo: e.customerInfo,
            currency: e.currency,
            billingPeriod: e.billingPeriod,
            teamName: e.teamName,
            userId: Y?.id,
            isCheckout: e.isCheckout
          }),
          payment_method_data: {
            billing_details: {
              name: F,
              address: {
                line1: address.line1,
                line2: address.line2,
                country: address.country,
                city: address.city,
                state: address.region,
                postal_code: address.postal_code
              }
            },
            metadata: {
              vat_gst_id: M,
              regional_vat_gst_id: k || null,
              ...i,
              customer_legal_name: J || null
            }
          }
        }
      });
      if (clearInterval(n), error) {
        let e = getI18nString("payments.errors.confirm_setup_error");
        W({
          error,
          code: "confirm-setup-error",
          message: h(error) || f(error) || S(error) ? error.message ?? e : e
        });
      }
    },
    saveWithPaymentMethod: async ({
      id: r,
      type: t
    }) => {
      let a;
      let n = getI18nString("payments.errors.saved_payment_error");
      if (!B) {
        W({
          error: "Setup intent secret is not set",
          code: "confirm-setup-error",
          message: n
        });
        return;
      }
      let s = await eV();
      if (t === lB.CARD) a = await s.confirmCardSetup(B, {
        payment_method: r
      });else if (t === lB.SEPA) a = await s.confirmSepaDebitSetup(B, {
        payment_method: r
      });else {
        W({
          error: "Invalid payment method type",
          code: "confirm-setup-error",
          message: n
        });
        return;
      }
      let {
        setupIntent,
        error
      } = a;
      let d = h(error) || f(error) || S(error) ? error?.message ?? n : n;
      if (error) {
        W({
          error,
          code: "confirm-setup-error",
          message: d
        });
        return;
      }
      trackEventAnalytics("confirm_setup_with_saved_payment_method", {
        ...Z(),
        savedPaymentMethodId: r
      }, {
        forwardToDatadog: !0
      });
      let _ = w({
        customerInfo: e.customerInfo,
        currency: e.currency,
        billingPeriod: e.billingPeriod,
        teamName: e.teamName,
        userId: Y?.id,
        isCheckout: e.isCheckout,
        setupIntentId: setupIntent.id
      });
      window.location.href = _;
    },
    billingAddress: address,
    updateBillingAddress: updateAddress,
    shippingAddress: _address,
    updateShippingAddress: _updateAddress,
    customerLegalName: J,
    setCustomerLegalName: $,
    nameOnPaymentMethod: F,
    setNameOnPaymentMethod: L,
    vatGstId: M,
    setVatGstId: G,
    regionalVatGstId: k,
    setRegionalVatGstId: j,
    paymentMethodType: Q,
    error: b
  };
});
var $$M0 = (e => (e.PRO_UPGRADE = "pro_upgrade", e.PRO_CHANGE_PAYMENT = "pro_change_payment", e.PRO_REACTIVATE = "pro_reactivate", e.ORG_UPGRADE = "org_upgrade", e.ORG_CHANGE_PAYMENT = "org_change_payment", e.COMMUNITY_CHECKOUT = "community_checkout", e))($$M0 || {});
var $$G2 = (e => (e.ADDRESS_VALIDATION_ERROR = "address-validation-error", e.CONFIRM_SETUP_ERROR = "confirm-setup-error", e.CURRENCY_VALIDATION_ERROR = "currency-validation-error", e.UNINITIALIZED_STRIPE_ELEMENTS_ERROR = "uninitialized-stripe-elements-error", e.VAT_GST_ID_VERIFICATION_ERROR = "vat-gst-id-verification-error", e.NAME_ON_PAYMENT_METHOD_REQUIRED = "name-on-payment-method-required", e))($$G2 || {});
async function O({
  teamId: e,
  redirect_url: r,
  error_redirect_url: t,
  success_message: a,
  subtotal_estimate: n,
  currency: o
}) {
  let {
    data: {
      meta: {
        client_secret,
        payment_methods
      }
    }
  } = await XHR.post("/api/subscriptions-2018-11-08/setup_intent", {
    team_id: e,
    redirect_url: r,
    error_redirect_url: t,
    subtotal_estimate: n,
    currency: o,
    ...(a ? {
      success_message: a
    } : {})
  });
  return {
    clientSecret: client_secret,
    paymentMethods: payment_methods
  };
}
function w({
  customerInfo: {
    teamId: e,
    orgId: r
  },
  currency: t,
  billingPeriod: a,
  teamName: n,
  userId: o,
  isCheckout: i,
  setupIntentId: c
}) {
  let d;
  let l;
  let _ = new URLSearchParams();
  if (n && _.append("team_name", n), a && _.append("billing_period", `${a}`), t && _.append("selected_currency", t), o && _.append("fuid", o), i && _.append("is_checkout", i.toString()), c && _.append("setup_intent", c), e) {
    d = "team";
    l = e;
  } else if (r) {
    d = "org";
    l = r;
  } else {
    if (null == e && void 0 !== e) return `https://${window.location.host}/team/validate_payment_method?${_.toString()}`;
    logger.error("No valid ID was passed");
  }
  return `https://${window.location.host}/${d}/${l}/set_payment_method?${_.toString()}`;
}
export const wn = $$M0;
export const Ix = $$v1;
export const dl = $$G2;
export const lo = $$P3;
