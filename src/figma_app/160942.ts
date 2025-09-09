import { handleSuspenseRetainRelease } from "../figma_app/566371";
import { SK, Fq, vu } from "../905/84777";
import { Ju, IX } from "../905/712921";
import { UpgradeSteps, SubscriptionType } from "../figma_app/831101";
import { ProductAccessTypeEnum } from "../905/513035";
import { Oq } from "../905/332483";
export function $$d1(e, t) {
  return "promoReview" === e.view || "teamUpgrade" === e.view && e.paymentStep === UpgradeSteps.CONFIRM_PAY && t.promo;
}
export function $$c0({
  currency: e
}) {
  let t = Oq.exclude([ProductAccessTypeEnum.DEV_MODE]);
  let r = t.dict(t => ({
    currency: e,
    billableProductKey: t,
    billableProductVariantKey: null,
    tier: Ju.PRO,
    renewalTerm: IX.YEAR,
    unit: IX.MONTH
  }));
  let d = t.dict(t => ({
    currency: e,
    billableProductKey: t,
    billableProductVariantKey: null,
    tier: Ju.PRO,
    renewalTerm: IX.MONTH,
    unit: IX.MONTH
  }));
  let c = SK(r, Fq.PRO_CART);
  let u = SK(d, Fq.PRO_CART);
  let [p, _] = handleSuspenseRetainRelease(c, u);
  let h = vu(p);
  let m = vu(_);
  if (!h.data || !m.data) throw Error("Prices data was null");
  let g = h.data[ProductAccessTypeEnum.DESIGN].amount;
  let f = h.data[ProductAccessTypeEnum.FIGJAM].amount;
  let E = m.data[ProductAccessTypeEnum.DESIGN].amount;
  let y = m.data[ProductAccessTypeEnum.FIGJAM].amount;
  let b = e => {
    switch (e) {
      case SubscriptionType.ANNUAL:
        return g;
      case SubscriptionType.MONTHLY:
        return E;
      case SubscriptionType.STUDENT:
        return 0;
    }
    throw Error(`Unknown plan type: ${e}`);
  };
  let T = e => {
    switch (e) {
      case SubscriptionType.ANNUAL:
        return f;
      case SubscriptionType.MONTHLY:
        return y;
      case SubscriptionType.STUDENT:
        return 0;
    }
    throw Error(`Unknown plan type: ${e}`);
  };
  return {
    getDesignUnitCost: b,
    getWhiteboardUnitCost: T,
    estimatedDesignCost: (e, t) => e * b(t) * (t === SubscriptionType.ANNUAL ? 12 : 1),
    estimatedWhiteboardCost: (e, t) => e * T(t) * (t === SubscriptionType.ANNUAL ? 12 : 1)
  };
}
export const m = $$c0;
export const p = $$d1;