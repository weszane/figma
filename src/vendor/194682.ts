import { useContext, useMemo, createElement } from "react";
import { Q } from "../vendor/408965";
import { D } from "../vendor/778607";
import { M } from "../vendor/644572";
export function $$o0({
  children: e,
  isValidProp: t,
  ...i
}) {
  t && D(t);
  (i = {
    ...useContext(Q),
    ...i
  }).isStatic = M(() => i.isStatic);
  let o = useMemo(() => i, [JSON.stringify(i.transition), i.transformPagePoint, i.reducedMotion]);
  return createElement(Q.Provider, {
    value: o
  }, e);
}
export const x = $$o0;