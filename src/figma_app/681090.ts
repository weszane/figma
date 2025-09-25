import { FOrganizationLevelType } from "../figma_app/421473";
import { ProductTierEnum, RenewalTermEnum } from "../905/712921";
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
  tier === ProductTierEnum.PRO && renewalTerm === RenewalTermEnum.YEAR && c === RenewalTermEnum.MONTH && (c = RenewalTermEnum.YEAR);
  tier === ProductTierEnum.PRO && renewalTerm === RenewalTermEnum.MONTH && c === RenewalTermEnum.YEAR && (c = RenewalTermEnum.MONTH);
  (tier === ProductTierEnum.ORG || tier === ProductTierEnum.ENTERPRISE) && renewalTerm === RenewalTermEnum.YEAR && c === RenewalTermEnum.YEAR && (c = RenewalTermEnum.MONTH);
  let u = e.product_prices.filter(e => e.tier === tier && e.currency === currency && e.renewal_term === renewalTerm && e.unit === c && e.billable_product_key === billableProductKey && e.billable_product_variant_key === billableProductVariantKey);
  if (1 === u.length) {
    if (c === RenewalTermEnum.YEAR && unit === RenewalTermEnum.MONTH) {
      let e = u[0].amount / 12;
      return {
        ...u[0],
        unit,
        amount: e
      };
    }
    if (c === RenewalTermEnum.MONTH && unit === RenewalTermEnum.YEAR) {
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
  [FOrganizationLevelType.TEAM]: [RenewalTermEnum.MONTH, RenewalTermEnum.YEAR],
  [FOrganizationLevelType.ORG]: [RenewalTermEnum.YEAR]
};
export const c = $$o0;
export const y = $$s1;