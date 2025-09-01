import { rXF } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { tz } from "../figma_app/632975";
import { q } from "../905/417424";
import { A } from "../905/713173";
import { o as _$$o } from "../905/609215";
export function $$$$d0(e, t, i) {
  let d = new _$$o();
  let c = !1;
  try {
    let l = q(e, d);
    let u = getFeatureFlags().ds_variable_props_proto && tz(l.resolvedType) && tz(t) ? rXF.STRING : l.resolvedType;
    u === t || i && i.includes(u) || (c = !0);
    A(l, d);
  } catch (e) {
    c = !0;
  }
  return c;
}
export const d = $$$$d0;