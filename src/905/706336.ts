import { jsx } from "react/jsx-runtime";
import { useRef, useCallback, useEffect } from "react";
export function $$a0({
  children: e,
  holdTimeInMs: t,
  onMouseHold: i
}) {
  let a = useRef(null);
  let s = useCallback(() => {
    a.current = window.setTimeout(() => {
      i();
    }, t);
  }, [t, i]);
  let o = useCallback(() => {
    null !== a.current && (clearTimeout(a.current), a.current = null);
  }, []);
  useEffect(() => o, [t, i, o]);
  return jsx("div", {
    className: "xjp7ctv",
    onMouseDown: s,
    onMouseUp: o,
    onMouseLeave: o,
    children: e
  });
}
export const h = $$a0;