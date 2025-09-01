import { z } from "../905/239603";
import { nT } from "../figma_app/53721";
let a = z.object({
  timestamps: z.array(z.number()),
  count: z.number()
});
z.record(a);
let s = z.nativeEnum(nT);
let $$o0 = z.union([s, z.literal("none")]);
let $$l1 = z.record(z.object({
  actions: z.record(z.object({
    count: z.number(),
    timestamps: z.array(z.coerce.number()).max(10)
  }))
}));
export const B3 = $$o0;
export const SR = $$l1;