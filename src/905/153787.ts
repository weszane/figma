import { jsx } from "react/jsx-runtime";
import { createContext, useRef, useCallback } from "react";
import { dP } from "../figma_app/119475";
export let $$s0 = createContext(() => !1);
export function $$$$o1({
  children: e,
  className: t,
  style: i
}) {
  let o = useRef(null);
  let l = useCallback(() => !!o.current?.contains(document.activeElement), []);
  return jsx(dP, {
    ref: o,
    className: t,
    style: i,
    allowVim: !0,
    children: jsx($$s0.Provider, {
      value: l,
      children: e
    })
  });
}
export const G = $$s0;
export const o = $$$$o1;