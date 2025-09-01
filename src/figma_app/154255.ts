import { jsx } from "react/jsx-runtime";
import { useState, useEffect, createContext, useRef, useImperativeHandle, useContext } from "react";
function a() {
  let [e, t] = useState(null);
  let [r, n] = useState(!1);
  useEffect(() => {
    if (null === e) {
      n(!1);
      return;
    }
    n(e.matches(":focus-within"));
    let t = () => void n(!0);
    let r = () => void n(!1);
    e.addEventListener("focusin", t);
    e.addEventListener("focusout", r);
    return () => {
      e.removeEventListener("focusin", t);
      e.removeEventListener("focusout", r);
    };
  }, [e]);
  return {
    ref: t,
    containsFocus: r
  };
}
let $$s = createContext({
  suppressed: !1
});
export function $$o0({
  children: e
}) {
  let {
    ref,
    containsFocus
  } = a();
  let {
    ref: _ref,
    containsFocus: _containsFocus
  } = a();
  let d = useRef({
    suppressed: !0
  }).current;
  d.suppressed = !(containsFocus || _containsFocus);
  useImperativeHandle(ref, () => document.querySelector("#fullscreen-root"));
  return jsx($$s.Provider, {
    value: d,
    children: e(_ref)
  });
}
export function $$l1() {
  return useContext($$s);
}
export const w = $$o0;
export const s = $$l1;