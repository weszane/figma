import { j } from "src/905/918929";
import { getI18nString } from "src/905/303541";
import { D } from "src/figma_app/690075";
import { vr } from "src/figma_app/514043";
import { I0, xQ, m3, zF, U, PM } from "src/figma_app/45218";
import { G3, QK } from "src/905/272080";
import { Uv, bG } from "src/905/54385";
let $$c15 = 2;
let $$u19 = 1e3;
export function $$p17(e) {
  if (e?.price) {
    let {
      price
    } = e;
    return .01 * price;
  }
}
export function $$_13(e) {
  return e ? 100 * e : 0;
}
export function $$h1(e) {
  return e % 1 != 0;
}
export function $$m7(e, t) {
  return t > e;
}
export function $$g3(e, t) {
  return t / e > 1.5;
}
export function $$f11(e) {
  return e < $$c15 || e >= $$u19;
}
export function $$E21(e, t) {
  if (!e || !t) return "";
  let r = 1200 * e * (1 - t / 100);
  return getI18nString("community.buyer.price_per_year", {
    priceString: $$I16(r, r % 100 != 0)
  });
}
export function $$y14(e, t = !1) {
  let {
    price,
    is_subscription
  } = e;
  if (!is_subscription) return $$I16(price, !1);
  if (t) {
    let t = e.annual_price || 0;
    return getI18nString("community.buyer.price_per_year", {
      priceString: $$I16(t, t % 100 != 0)
    });
  }
  return getI18nString("community.buyer.price_per_month", {
    priceString: $$I16(price, price % 100 != 0)
  });
}
export function $$b10(e) {
  let t = $$y14(e);
  let r = Uv(e) ? getI18nString("community.buyer.subscribe") : getI18nString("community.buyer.buy");
  return `${r} ${t}`;
}
export function $$T9(e) {
  let {
    price,
    is_subscription
  } = e;
  let n = $$I16(price, price % 100 != 0);
  return is_subscription ? getI18nString("community.buyer.price_per_month_subscription", {
    priceString: n
  }) : getI18nString("community.buyer.price_one_time_payment", {
    priceString: n
  });
}
export function $$I16(e, t = !1) {
  return new vr("usd").formatMoney(e, {
    showCents: t
  });
}
export function $$S18(e) {
  switch (e) {
    case bG.DOESNT_MEET_NEEDS:
      return getI18nString("community.buyer.refund_reason.doesnt_meet_needs");
    case bG.TECHNICAL_ISSUES:
      return getI18nString("community.buyer.refund_reason.technical_issues");
    case bG.TOO_EXPENSIVE:
      return getI18nString("community.buyer.refund_reason.too_expensive");
    case bG.FOUND_ALTERNATIVE:
      return getI18nString("community.buyer.refund_reason.found_alternative");
    case bG.OTHER:
      return getI18nString("community.buyer.refund_reason.other");
  }
}
function v(e) {
  return !!(e.subscription_expires_at && !isNaN(Date.parse(e.subscription_expires_at)));
}
export function $$A4(e) {
  return !!e && (v(e) ? new Date(e.subscription_expires_at).getTime() + 864e5 > new Date().getTime() && !$$x8(e, G3.DISPUTED) : $$x8(e, G3.SUCCEEDED));
}
export function $$x8(e, t) {
  return !!e.status && e.status === t;
}
export function $$N5(e) {
  return e.status === G3.SUBSCRIPTION_PAYMENT_FAILED || e.status === G3.INVOICE_FINALIZATION_FAILED;
}
export function $$$$C0(e) {
  let t = Date.now() - 864e5;
  return $$A4(e) && !v(e) && new Date(e.purchased_at).getTime() >= t;
}
export function $$w6(e, t) {
  if (I0(t) || xQ(t)) {
    let r = (t.plugin_publishers?.accepted || []).map(e => e.id);
    let i = (t.plugin_publishers?.pending || []).map(e => e.id);
    let a = new Set(r.concat(i));
    let {
      pass,
      fail
    } = j(e, e => a.has(e.id) || e.id === t.creator.id);
    return {
      usersCanPurchase: fail,
      publishers: pass
    };
  }
  {
    let r = new Set(D(t));
    let {
      pass,
      fail
    } = j(e, e => r.has(e.id));
    return {
      usersCanPurchase: fail,
      publishers: pass
    };
  }
}
export function $$O2({
  resource: e,
  payment: t
}) {
  let r = e.monetized_resource_metadata;
  return !!(r && Uv(r)) && !!r.trial_length_in_days && (!t || !t.subscription_expires_at);
}
export function $$R12(e, t) {
  let r = m3(e);
  let n = zF(e) && U(e);
  let i = r && PM(e);
  let a = $$A4(t);
  return r && !i && !a || n;
}
export function $$L20(e) {
  return {
    status: QK[e.status],
    purchased_at: e.purchasedAt ? new Date(e.purchasedAt).toISOString() : null,
    subscription_expires_at: e.subscriptionExpiresAt ? new Date(e.subscriptionExpiresAt).toISOString() : null,
    subscription_canceled_at: e.subscriptionCanceledAt ? new Date(e.subscriptionCanceledAt).toISOString() : null,
    refund_reason: e.refundReason,
    monetized_resource_metadata_id: e.monetizedResourceMetadataId,
    subscription_interval: e.subscriptionInterval
  };
}
export const C = $$$$C0;
export const F8 = $$h1;
export const Lt = $$O2;
export const Mj = $$g3;
export const QQ = $$A4;
export const UO = $$N5;
export const V4 = $$w6;
export const WD = $$m7;
export const WJ = $$x8;
export const X2 = $$T9;
export const XR = $$b10;
export const Yp = $$f11;
export const _K = $$R12;
export const ae = $$_13;
export const bV = $$y14;
export const mZ = $$c15;
export const up = $$I16;
export const vf = $$p17;
export const vi = $$S18;
export const wF = $$u19;
export const xs = $$L20;
export const zt = $$E21;
