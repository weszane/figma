import { z as _$$z } from "../905/239603";
let r = _$$z.object({
  vat_gst_id: _$$z.string().nullable(),
  regional_vat_gst_id: _$$z.string().nullable()
});
let $$a0 = _$$z.object({
  stripe_customer_id: _$$z.string().optional().nullable(),
  taxes: r
});
export const z = $$a0;