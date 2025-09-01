import { jsx } from "react/jsx-runtime";
import { createContext, useContext } from "react";
function a(e) {
  return e && Object.keys(e).length > 0 ? Object.fromEntries(Object.entries(e).map(([e, t]) => [`data-fpl-${e}`, t])) : {};
}
function s(e) {
  return {};
}
let o = createContext(s);
export function $$l0(e) {
  return useContext(o)(e);
}
export function $$d1({
  children: e,
  debug: t
}) {
  let i = t ? a : s;
  return jsx(o.Provider, {
    value: i,
    children: e
  });
}
$$d1.displayName = "FplDebugProvider";
export const _ = $$l0;
export const r = $$d1;