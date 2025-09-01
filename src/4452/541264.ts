import { jsx } from "react/jsx-runtime";
import { createContext, useContext } from "react";
let r = createContext(null);
export function $$i1(e) {
  return jsx(r.Provider, {
    value: e.layoutRef,
    children: e.children
  });
}
export function $$l0() {
  let e = useContext(r);
  if (!e) throw Error("useLayoutRef must be used within LayoutRefProvider");
  return e;
}
export const B = $$l0;
export const z = $$i1;