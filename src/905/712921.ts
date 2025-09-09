import { z } from "../905/239603";
import { ProductAccessTypeEnumSchema, AICreditsTypeEnumSchema } from "../905/513035";
import { D } from "../905/962956";
let $$s1 = {
  YEAR: "year",
  MONTH: "month"
};
let o = z.nativeEnum($$s1);
let $$l2 = {
  ORG: "org",
  ENTERPRISE: "enterprise",
  PRO: "pro"
};
let d = z.nativeEnum($$l2);
let c = z.object({
  key: z.string(),
  tier: d,
  billable_product_key: ProductAccessTypeEnumSchema,
  billable_product_variant_key: AICreditsTypeEnumSchema.nullable(),
  renewal_term: o,
  unit: o,
  currency: D,
  amount: z.number()
});
let $$u0 = z.object({
  product_prices: z.array(c)
});
export const F6 = $$u0;
export const IX = $$s1;
export const Ju = $$l2;