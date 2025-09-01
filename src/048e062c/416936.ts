import { useMemo } from "react";
import { UN } from "../905/700578";
import { x1 } from "../905/714362";
import { wA, Fk } from "../figma_app/167249";
import { c as _$$c } from "../048e062c/525184";
export function $$s1(e) {
  let t = wA((e, t) => e.get(t)?.jsxProps || {}, e);
  return useMemo(() => c(e, t), [e, t]);
}
function c(e, t) {
  if (!UN().get(e)) return null;
  let r = _$$c.safeParse(t);
  return r.success ? r.data : (r.error && x1("onJSXPropsChange", "Invalid props", r.error.flatten(), {
    reportAsSentryError: !0
  }), null);
}
export function $$u0(e, t) {
  let r = UN().get(e);
  if (!r) return;
  let n = c(e, t);
  n && r.setJSXProps(n);
}
export function $$d3(e) {
  let t = UN().get(e);
  t && t.clearJSXOverrides();
}
export function $$p2(e) {
  return Fk((e, t) => Object.keys(e.get(t)?.jsxOverrides || {}).length > 0, e);
}
export const $H = $$u0;
export const Cd = $$s1;
export const mn = $$p2;
export const od = $$d3;