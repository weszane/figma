import { c2 } from "../905/382883";
import r from "../vendor/785047";
var a = r;
export function $$s0(e, t) {
  if ("object" != typeof e || null == e) return t;
  if (e === t) return e;
  let i = a()({}, e, t);
  return c2(i, e) ? e : i;
}
export const j = $$s0;