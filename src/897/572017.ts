import { jsx, Fragment } from "react/jsx-runtime";
import { createContext, useState, useEffect } from "react";
let a = [0, 0, 0, 0];
let $$o1 = createContext([a, () => {}]);
export function $$s0({
  easingFunction: e,
  children: t
}) {
  let [n, s] = useState(e || a);
  useEffect(() => {
    e && s(e);
  }, [e]);
  return e ? jsx($$o1.Provider, {
    value: [n, s],
    children: t
  }) : jsx(Fragment, {
    children: t
  });
}
export const O = $$s0;
export const y = $$o1;