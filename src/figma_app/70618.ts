import { z } from "../905/239603";
var $$i1 = (e => (e.by_creator = "by_creator", e.by_tags = "by_tags", e))($$i1 || {});
export function $$a0(e) {
  return z.object({
    types: z.array(z.nativeEnum($$i1)),
    content: z.array(e)
  });
}
export const M = $$a0;
export const o = $$i1;
