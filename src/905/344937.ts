import { z } from "../905/239603";
import { productSchema } from "../905/54385";
export let $$a0 = z.object({
  monetized_resource_metadata: productSchema.optional()
});
export function $$s1(e) {
  return !!e?.monetized_resource_metadata;
}
export const Y = $$a0;
export const t = $$s1;