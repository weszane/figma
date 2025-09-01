import { jsx } from "react/jsx-runtime";
import { createContext, createRef, useRef, useContext } from "react";
import { h } from "../905/207101";
let $$s = createContext(createRef());
export function $$o1({
  children: e
}) {
  let t = useRef(!1);
  return jsx($$s.Provider, {
    value: t,
    children: e
  });
}
export function $$l0(e) {
  let t = useContext($$s);
  h(() => {
    e.current && "" !== e.current.value && !1 === t.current && e.current.select();
    t.current = !0;
  });
}
export const C = $$l0;
export const s = $$o1;