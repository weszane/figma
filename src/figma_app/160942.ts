import { mI } from "../figma_app/566371";
import { SK, Fq, vu } from "../905/84777";
import { Ju, IX } from "../905/712921";
import { tn, tY } from "../figma_app/831101";
import { ud } from "../905/513035";
import { Oq } from "../905/332483";
export function $$d1(e, t) {
  return "promoReview" === e.view || "teamUpgrade" === e.view && e.paymentStep === tn.CONFIRM_PAY && t.promo;
}
export function $$c0({
  currency: e
}) {
  let t = Oq.exclude([ud.DEV_MODE]);
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
  let [p, _] = mI(c, u);
  let h = vu(p);
  let m = vu(_);
  if (!h.data || !m.data) throw Error("Prices data was null");
  let g = h.data[ud.DESIGN].amount;
  let f = h.data[ud.FIGJAM].amount;
  let E = m.data[ud.DESIGN].amount;
  let y = m.data[ud.FIGJAM].amount;
  let b = e => {
    switch (e) {
      case tY.ANNUAL:
        return g;
      case tY.MONTHLY:
        return E;
      case tY.STUDENT:
        return 0;
    }
    throw Error(`Unknown plan type: ${e}`);
  };
  let T = e => {
    switch (e) {
      case tY.ANNUAL:
        return f;
      case tY.MONTHLY:
        return y;
      case tY.STUDENT:
        return 0;
    }
    throw Error(`Unknown plan type: ${e}`);
  };
  return {
    getDesignUnitCost: b,
    getWhiteboardUnitCost: T,
    estimatedDesignCost: (e, t) => e * b(t) * (t === tY.ANNUAL ? 12 : 1),
    estimatedWhiteboardCost: (e, t) => e * T(t) * (t === tY.ANNUAL ? 12 : 1)
  };
}
export const m = $$c0;
export const p = $$d1;