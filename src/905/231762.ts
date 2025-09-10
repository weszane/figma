import { z } from "src/905/239603";
import { getI18nStringAlias } from "src/905/303541";
export function $$a0(e, t) {
  let i = t;
  let n = s.safeParse(e);
  n.success && (i ??= n.data.data.message);
  let a = o.safeParse(e);
  if (!a.success) return i;
  let l = getI18nStringAlias(a.data.data.i18n.id, a.data.data.i18n.params);
  return "" === l ? i : l;
}
let s = z.object({
  data: z.object({
    message: z.string()
  })
}).passthrough();
let o = z.object({
  data: z.object({
    i18n: z.object({
      id: z.string(),
      params: z.object({}).passthrough()
    })
  })
}).passthrough();
export const J = $$a0;
