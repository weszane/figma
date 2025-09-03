import { useMemo } from "react";
import { getSingletonSceneGraph } from "../905/700578";
import { x1 } from "../905/714362";
import { wA, Fk } from "../figma_app/167249";
import { c } from "../048e062c/525184";
export function $$o1(e) {
  let t = wA((e, t) => e.get(t)?.jsxProps || {}, e);
  return useMemo(() => d(e, t), [e, t]);
}
function d(e, t) {
  if (!getSingletonSceneGraph().get(e)) return null;
  let s = c.safeParse(t);
  return s.success ? s.data : (s.error && x1("onJSXPropsChange", "Invalid props", s.error.flatten(), {
    reportAsSentryError: !0
  }), null);
}
export function $$c0(e, t) {
  let s = getSingletonSceneGraph().get(e);
  if (!s) return;
  let r = d(e, t);
  r && s.setJSXProps(r);
}
export function $$u3(e) {
  let t = getSingletonSceneGraph().get(e);
  t && t.clearJSXOverrides();
}
export function $$p2(e) {
  return Fk((e, t) => Object.keys(e.get(t)?.jsxOverrides || {}).length > 0, e);
}
export const $H = $$c0;
export const Cd = $$o1;
export const mn = $$p2;
export const od = $$u3;