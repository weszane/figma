import { useRef, useCallback } from "react";
import { isAnyMobile } from "../figma_app/778880";
export function $$a0({
  onClick: e,
  onMouseDown: t,
  onMouseUp: i,
  onMouseLeave: a,
  isDisabled: s = !1
}) {
  let o = useRef(!1);
  let l = isAnyMobile;
  let d = useCallback(t => {
    o.current = !0;
    l || e?.(t);
  }, [l, e]);
  let c = useCallback(t => {
    (l || !o.current) && e?.(t);
  }, [l, e]);
  let u = useCallback(e => {
    o.current = !1;
    i?.(e);
  }, [i]);
  let p = useCallback(e => {
    o.current = !1;
    a?.(e);
  }, [a]);
  return s ? {
    onMouseLeave: p
  } : {
    onMouseDown: d,
    onClick: c,
    onMouseUp: u,
    onMouseLeave: p
  };
}
export const Q = $$a0;