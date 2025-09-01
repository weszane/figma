import { useRef, useLayoutEffect, useMemo, useCallback } from "react";
export function $$r0({
  select: e,
  onChange: t,
  onFocus: i,
  onMouseLeave: a,
  onMouseUp: s,
  onKeyUp: o,
  autoFocus: l
} = {}) {
  let d = useRef(null);
  let c = useRef(!1);
  useLayoutEffect(() => {
    l && (d.current?.focus(), d.current?.select());
  }, []);
  let u = useMemo(() => e ?? (() => d.current?.select()), [e]);
  let p = useCallback(() => {
    let e = d.current;
    e && c.current && (e.selectionStart === e.selectionEnd && u(), c.current = !1);
  }, [u]);
  let m = useCallback(e => {
    c.current = !0;
    i?.(e);
  }, [i]);
  let h = useCallback(e => {
    "Tab" === e.key && (c.current = !0, p());
    o?.(e);
  }, [o, p]);
  let g = useCallback(e => {
    c.current = !1;
    t?.(e);
  }, [t]);
  return {
    inputRef: d,
    inputProps: {
      onFocus: m,
      onMouseUp: useCallback(e => {
        p();
        s?.(e);
      }, [s, p]),
      onMouseLeave: useCallback(e => {
        c.current = !1;
        a?.(e);
      }, [a]),
      onKeyUp: h,
      onChange: g
    }
  };
}
export const X = $$r0;