import { OL } from "../figma_app/421473";
import { Ju, IX } from "../905/712921";
class a extends Error {}
export function $$s1(e, t) {
  if (0 === e.product_prices.length) throw new a("Product price list is empty");
  let {
    tier,
    currency,
    renewalTerm,
    unit,
    billableProductKey,
    billableProductVariantKey
  } = t;
  let c = o;
  tier === Ju.PRO && renewalTerm === IX.YEAR && c === IX.MONTH && (c = IX.YEAR);
  tier === Ju.PRO && renewalTerm === IX.MONTH && c === IX.YEAR && (c = IX.MONTH);
  (tier === Ju.ORG || tier === Ju.ENTERPRISE) && renewalTerm === IX.YEAR && c === IX.YEAR && (c = IX.MONTH);
  let u = e.product_prices.filter(e => e.tier === tier && e.currency === currency && e.renewal_term === renewalTerm && e.unit === c && e.billable_product_key === billableProductKey && e.billable_product_variant_key === billableProductVariantKey);
  if (1 === u.length) {
    if (c === IX.YEAR && unit === IX.MONTH) {
      let e = u[0].amount / 12;
      return {
        ...u[0],
        unit,
        amount: e
      };
    }
    if (c === IX.MONTH && unit === IX.YEAR) {
      let e = 12 * u[0].amount;
      return {
        ...u[0],
        unit,
        amount: e
      };
    }
    return u[0];
  }
  if (u.length > 1) throw new a(`Multiple product prices available for: ${JSON.stringify(t)}`);
  throw new a(`No product price available for: ${JSON.stringify(t)})`);
}
export let $$o0 = {
  [OL.TEAM]: [IX.MONTH, IX.YEAR],
  [OL.ORG]: [IX.YEAR]
};
export const c = $$o0;
export const y = $$s1;