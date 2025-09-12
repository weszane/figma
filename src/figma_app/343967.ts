import { jsxs, jsx } from "react/jsx-runtime";
import { createContext, useContext, useState, useLayoutEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { updateRefOrCallback } from "../905/177375";
import { A } from "../905/268204";
import { g } from "../905/319892";
let d = new Set();
let c = createContext(A ? document.body : null);
export function $$u2() {
  return Array.from(d);
}
function p() {
  return useContext(c);
}
export function $$_0() {
  let e = p();
  if (null == e) throw Error("Attempted to use WindowOutlet before it was rendered. If you need to use this hook before the WindowOutletProvider has rendered, use `useWindowOutletOrNull` instead.");
  return e;
}
export function $$h1({
  children: e
}) {
  let t = p();
  return t ? createPortal(e, t) : null;
}
export function $$m4({
  children: e
}) {
  let [t, r] = useState(null);
  return jsxs(c.Provider, {
    value: t,
    children: [e, jsx("div", {
      className: g,
      ref: r
    })]
  });
}
export function $$g5({
  children: e,
  container: t
}) {
  let [r, a] = useState(null);
  useLayoutEffect(() => {
    let e = "string" == typeof t ? document.querySelector(t) : t.current;
    e instanceof HTMLElement && a(e);
  }, [t]);
  return jsx(c.Provider, {
    value: r,
    children: e
  });
}
export function $$f3(e) {
  let t = useRef(null);
  return useCallback(r => {
    updateRefOrCallback(e, r);
    null == r ? d.$$delete(t.current) : d.add(r);
    t.current = r;
  }, [e]);
}
$$h1.displayName = "WindowOutlet";
$$m4.displayName = "WindowOutletProvider";
$$g5.displayName = "CustomWindowOutletProvider";
export const DX = $$_0;
export const Kg = $$h1;
export const PU = $$u2;
export const U1 = $$f3;
export const ds = $$m4;
export const y7 = $$g5;
