import { useState, useRef, useLayoutEffect } from "react";
import { Ib } from "../905/129884";
export function $$a0(e, t = !1) {
  let [i, s] = useState(!1);
  let o = useRef(void 0);
  let l = useRef(null);
  return (useLayoutEffect(() => {
    let i = o.current !== t;
    e && l.current && i && (o.current = t, s(l.current.scrollWidth > l.current.offsetWidth));
  }, [e, t]), i && e) ? {
    ref: l,
    "data-tooltip-type": Ib.TEXT,
    "data-tooltip": `${e}`,
    "data-tooltip-text-left": !0
  } : {
    ref: l
  };
}
export const X = $$a0;