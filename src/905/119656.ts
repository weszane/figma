import { ServiceCategories as _$$e } from "../905/165054";
import r from "../vendor/128080";
import { reportError } from "../905/11";
import { N_ } from "../905/332483";
var a = r;
export function $$l0(e, t = {
  throwOnError: !0
}) {
  let i = N_.dict(t => e?.[t] ?? 0);
  if (!a()(e, i)) {
    let r = e ? Error(`Org billing data contains seat counts with keys ${Object.keys(e).sort()} but expected ${Object.keys(i).sort()}`) : Error("Org billing data missing seat counts");
    if (reportError(_$$e.SCALE, r), t.throwOnError) throw r;
  }
  return i;
}
export const g = $$l0;