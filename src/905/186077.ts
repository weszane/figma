import { useState, useLayoutEffect } from "react";
import { KindEnum } from "../905/129884";
var $$a0 = (e => (e[e.NEVER = 0] = "NEVER", e[e.ALWAYS = 1] = "ALWAYS", e[e.WHEN_TRUNCATED = 2] = "WHEN_TRUNCATED", e))($$a0 || {});
export function $$s1(e, t, i) {
  let [a, s] = useState(1 === t);
  let o = "function" == typeof e ? e(!1) : e;
  let [l, d] = useState(o);
  useLayoutEffect(() => {
    let n = null != i.current && i.current.scrollWidth > i.current.clientWidth;
    2 === t ? s(n) : s(1 === t);
    d("function" == typeof e ? e(n) : e);
  }, [i, t, e]);
  return a && "" !== l ? {
    "data-tooltip-type": KindEnum.TEXT,
    "data-tooltip": l
  } : {};
}
export const i = $$a0;
export const m = $$s1;