import n from "../vendor/241899";
import { trackEventAnalytics } from "../905/449184";
import { loadScript } from "../figma_app/623293";
import { getInitialOptions } from "../figma_app/169182";
import { getI18nState } from "../figma_app/363242";
import { z } from "../905/239603";
import { createNoOpValidator, createMetaValidator } from "../figma_app/181241";
import { D } from "../905/347702";
var r = n;
let u = z.object({
  client_secret: z.string(),
  customer_id: z.string().nullable()
});
let p = new class {
  constructor() {
    this.SetupIntentSecretSchemaValidator = createNoOpValidator();
    this.SetupIntentSchemaValidator = createMetaValidator("SetupIntentSchemaValidator", u, null, !0);
  }
  getSetupIntentSecret(e) {
    return this.SetupIntentSecretSchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/subscriptions-2018-11-08/setup_intent_secret", {
      subtotal_estimate: e.subtotal_estimate.toString(),
      currency: e.currency
    }));
  }
  createSetupIntent(e) {
    return this.SetupIntentSchemaValidator.validate(async ({
      xr: t
    }) => await t.post("/api/subscriptions-2018-11-08/setup_intent", {
      redirect_url: e.redirectUrl,
      error_redirect_url: e.errorRedirectUrl,
      success_message: e.successMessage,
      subtotal_estimate: e.subtotalEstimate,
      currency: e.currency,
      create_stripe_customer: e.createStripeCustomer,
      billing_address: e.billingAddress,
      shipping_address: e.shippingAddress,
      is_reactivating: e.isReactivating
    }));
  }
}();
let h = getInitialOptions().stripe_api_public;
export var $$g1 = (e => (e.CARD = "card", e.SEPA = "sepa_debit", e.IDEAL = "ideal", e.SOFORT = "sofort", e))($$g1 || {});
export function $$f6(e) {
  return r()(e, ["type", "code", "decline_code", "doc_url", "message", "payment_method.id", "payment_method.card.brand", "payment_method.card.country", "payment_method.card.three_d_secure_usage", "payment_method.card.wallet.type", "payment_method.customer", "payment_method.livemode", "payment_method.type", "request_log_url", "setup_intent.id", "setup_intent.last_setup_error.code", "setup_intent.last_setup_error.decline_code", "setup_intent.last_setup_error.message", "setup_intent.last_setup_error.type"]);
}
let $$_0 = ["ideal", "sofort"];
let A = null;
export function $$y5() {
  return new Promise((e, t) => {
    A ? e(A) : h ? loadScript("https://js.stripe.com/v3/", {
      cors: !1
    }).then(() => {
      e(A = Stripe(h, {
        locale: getI18nState().getPrimaryLocale(!1)
      }));
    }).catch(t) : t("No Stripe api key");
  });
}
let $$b3 = D(e => new Promise((t, i) => {
  $$y5().then(i => {
    t(i.elements().create("card", e));
  }).catch(i);
}));
let $$v4 = D((e, t) => new Promise((i, n) => {
  $$y5().then(r => {
    r.createToken(e, t).then(e => {
      i(e);
    }).catch(n);
  }).catch(n);
}));
let $$I2 = D(async (e, t, i) => {
  let n = await $$y5();
  let {
    data: {
      meta: {
        client_secret
      }
    }
  } = await p.getSetupIntentSecret({
    subtotal_estimate: t,
    currency: i
  });
  let s = () => document.querySelectorAll("[name*=privateStripeFrame]").length;
  let o = s();
  let l = !1;
  let d = setInterval(() => {
    o !== s() && (trackEventAnalytics("Stripe Authentication Modal"), clearInterval(d), l = !0);
  }, 1e3);
  let c = await n.confirmCardSetup(client_secret, {
    payment_method: {
      card: {
        token: e
      }
    }
  });
  if (clearInterval(d), c.error) {
    trackEventAnalytics("Payment Confirmation Error", {
      error_message: c.error.message
    });
    return c.error;
  }
  trackEventAnalytics("Payment Confirmation Success");
  c.setupIntent.is3DS = l;
  return c.setupIntent;
});
export const d2 = $$_0;
export const lB = $$g1;
export const To = $$I2;
export const zY = $$b3;
export const Ey = $$v4;
export const eV = $$y5;
export const pV = $$f6;